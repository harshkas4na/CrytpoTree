'use client';

import React from "react"

import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  MiniMap,
  Background,
  useReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  XYPosition,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { initialNodes, CryptoNodeData } from '@/data/crypto-data';
import { CryptoNode } from './crypto-node';
import { KnowledgeSidebar } from './knowledge-sidebar';
import { CommandPalette } from './command-palette';
import { ZoomControls } from './zoom-controls';
import { ProgressBar } from './progress-bar';

const nodeTypes = {
  crypto: CryptoNode,
};

interface FlowNode extends Node {
  data: CryptoNodeData;
  position: XYPosition;
}

export function CryptoTreeInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [selectedNode, setSelectedNode] = useState<CryptoNodeData | null>(null);
  const [hoveredPath, setHoveredPath] = useState<Set<string>>(new Set());
  const { fitView } = useReactFlow();

  const [learnedCount, setLearnedCount] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return initialNodes.filter((node) => {
      return localStorage.getItem(`learned-${node.id}`) === 'true';
    }).length;
  });

  // Initialize nodes and edges with dagre layout
  useEffect(() => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({
      rankdir: 'TB',
      nodesep: 80,
      ranksep: 150,
    });

    // Add nodes to dagre
    initialNodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: 200, height: 100 });
    });

    // Add edges to dagre
    initialNodes.forEach((node) => {
      node.dependencies.forEach((dep) => {
        dagreGraph.setEdge(dep, node.id);
      });
    });

    // Compute layout
    dagre.layout(dagreGraph);

    // Convert to React Flow nodes
    const newNodes: FlowNode[] = initialNodes.map((nodeData) => {
      const pos = dagreGraph.node(nodeData.id);
      return {
        id: nodeData.id,
        data: nodeData,
        position: { x: pos.x - 100, y: pos.y - 50 },
        type: 'crypto',
      };
    });

    // Convert to React Flow edges
    const newEdges: Edge[] = initialNodes
      .flatMap((node) =>
        node.dependencies.map((dep) => ({
          id: `${dep}-${node.id}`,
          source: dep,
          target: node.id,
          type: 'smoothstep',
          animated: true,
          style: {
            stroke: '#3b82f6',
            strokeWidth: 2.5,
            opacity: 0.6,
          },
        }))
      );

    setNodes(newNodes);
    setEdges(newEdges);

    // Fit view after layout
    setTimeout(() => {
      fitView({ padding: 0.2, duration: 600 });
    }, 100);
  }, [setNodes, setEdges, fitView]);

  // Handle node hover to highlight connected paths
  const handleNodeHover = useCallback((nodeId: string | null) => {
    if (!nodeId) {
      setHoveredPath(new Set());
      return;
    }

    const connected = new Set<string>();
    const queue = [nodeId];
    connected.add(nodeId);

    // BFS to find all connected nodes
    while (queue.length > 0) {
      const current = queue.shift()!;

      // Find connected nodes via edges
      edges.forEach((edge) => {
        if (edge.source === current && !connected.has(edge.target)) {
          connected.add(edge.target);
          queue.push(edge.target);
        }
        if (edge.target === current && !connected.has(edge.source)) {
          connected.add(edge.source);
          queue.push(edge.source);
        }
      });
    }

    setHoveredPath(connected);
  }, [edges]);

  const handleNodeClick = (event: React.MouseEvent, node: FlowNode) => {
    setSelectedNode(node.data);
  };

  // Update node dimming state
  const nodesWithState = nodes.map((node) => {
    const isSelected = selectedNode?.id === node.id;
    const isInPath = hoveredPath.has(node.id);
    const isDimmed = hoveredPath.size > 0 && !isInPath;

    return {
      ...node,
      data: {
        ...node.data,
        selected: isSelected,
        isHovered: isInPath,
        isDimmed: isDimmed,
      },
      style: {
        opacity: isDimmed ? 0.3 : 1,
        transition: 'opacity 0.2s ease-in-out',
      },
    };
  });

  return (
    <>
      <ProgressBar nodes={initialNodes} />

      <ReactFlow
        nodes={nodesWithState}
        edges={edges.map((edge) => ({
          ...edge,
          style: {
            ...edge.style,
            opacity: hoveredPath.size === 0 ||
              (hoveredPath.has(edge.source) && hoveredPath.has(edge.target))
              ? 1
              : 0.2,
          },
        }))}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onNodeMouseEnter={(event, node) => {
          handleNodeHover(node.id);
        }}
        onNodeMouseLeave={() => {
          handleNodeHover(null);
        }}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#334155" gap={50} />
        <Controls position="bottom-left" />
        <MiniMap position="bottom-right" />
        <ZoomControls />
      </ReactFlow>

      <KnowledgeSidebar
        key={selectedNode?.id}
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

      <CommandPalette nodes={initialNodes} />
    </>
  );
}

export function CryptoTree() {
  return (
    <ReactFlowProvider>
      <CryptoTreeInner />
    </ReactFlowProvider>
  );
}
