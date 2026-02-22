'use client';

import React, { useCallback, useEffect, useMemo } from 'react';
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
import { initialNodes, CryptoNodeData, categoryColors } from '@/data/crypto-data';
import { CryptoNode } from './crypto-node';
import { KnowledgeSidebar } from './knowledge-sidebar';
import { CommandPalette } from './command-palette';
import { ZoomControls } from './zoom-controls';
import { ProgressBar } from './progress-bar';
import { NavigationProvider, useNavigation } from './navigation-context';
import { CameraController } from './camera-controller';
import { BreadcrumbTrail } from './breadcrumb-trail';
import { CategoryNav } from './category-nav';
import { KeyboardShortcutsHelp } from './keyboard-shortcuts-help';
import { FocusControls } from './focus-controls';
import { useFocusSystem, hasChildren, getDescendantCount } from './focus-system';
import { MobileControlsDrawer } from './mobile-controls-drawer';

const nodeTypes = {
  crypto: CryptoNode,
};

interface FlowNode extends Node {
  data: CryptoNodeData & {
    hasHiddenChildren?: boolean;
    childCount?: number;
  };
  position: XYPosition;
}

function CryptoTreeInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { fitView } = useReactFlow();

  const {
    selectedNode,
    selectNode,
    hoveredPath,
    setHoveredPath,
    focusedNodeId,
    focusNode,
    focusDepth,
    showAllMode,
  } = useNavigation();

  // Use focus system to determine visible nodes
  const { visibleNodeIds, expandableNodeIds } = useFocusSystem({
    focusedNodeId,
    focusDepth,
    showAllMode,
  });

  // Initialize nodes and edges with dagre layout
  useEffect(() => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({
      rankdir: 'TB',
      nodesep: 60,   // Reduced horizontal spacing
      ranksep: 100,  // Reduced vertical spacing
    });

    // Add nodes to dagre — match card dimensions (190px wide, ~100px tall with description)
    initialNodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: 190, height: 100 });
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
      const nodeHasChildren = hasChildren(nodeData.id);
      const childCount = nodeHasChildren ? getDescendantCount(nodeData.id) : 0;

      return {
        id: nodeData.id,
        data: {
          ...nodeData,
          hasHiddenChildren: false,
          childCount,
        },
        position: { x: pos.x - 95, y: pos.y - 50 },
        type: 'crypto',
      };
    });

    // Convert to React Flow edges — category-aware colors
    const nodeMap = new Map(initialNodes.map((n) => [n.id, n]));
    const newEdges: Edge[] = initialNodes
      .flatMap((node) =>
        node.dependencies.map((dep) => {
          const srcNode = nodeMap.get(dep);
          const edgeColor = srcNode ? categoryColors[srcNode.category] : '#64748b';
          return {
            id: `${dep}-${node.id}`,
            source: dep,
            target: node.id,
            type: 'smoothstep',
            style: {
              stroke: edgeColor,
              strokeWidth: 1.5,
              opacity: 0.55,
            },
          };
        })
      );

    setNodes(newNodes);
    setEdges(newEdges);

    // Fit view after layout
    setTimeout(() => {
      const padding = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.35 : 0.15;
      fitView({ padding, duration: 500 });
    }, 100);
  }, [setNodes, setEdges, fitView]);

  // Filter nodes and edges based on focus system
  const filteredNodes = useMemo(() => {
    return nodes
      .filter((node) => visibleNodeIds.has(node.id))
      .map((node) => ({
        ...node,
        data: {
          ...node.data,
          hasHiddenChildren: expandableNodeIds.has(node.id),
        },
      }));
  }, [nodes, visibleNodeIds, expandableNodeIds]);

  const filteredEdges = useMemo(() => {
    return edges.filter(
      (edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );
  }, [edges, visibleNodeIds]);

  // Handle node hover
  const handleNodeHover = useCallback((nodeId: string | null) => {
    if (!nodeId) {
      setHoveredPath(new Set());
      return;
    }

    const connected = new Set<string>();
    connected.add(nodeId);

    // Find direct connections only (for performance)
    filteredEdges.forEach((edge) => {
      if (edge.source === nodeId) connected.add(edge.target);
      if (edge.target === nodeId) connected.add(edge.source);
    });

    setHoveredPath(connected);
  }, [filteredEdges, setHoveredPath]);

  const handleNodeClick = useCallback((event: React.MouseEvent, node: FlowNode) => {
    selectNode(node.data);
    focusNode(node.id);
  }, [selectNode, focusNode]);

  const handleNodeSelect = useCallback((nodeData: CryptoNodeData) => {
    selectNode(nodeData);
  }, [selectNode]);

  // Update node styles based on state
  const nodesWithState = filteredNodes.map((node) => {
    const isSelected = selectedNode?.id === node.id;
    const isFocused = focusedNodeId === node.id;
    const isInPath = hoveredPath.has(node.id);
    const isDimmed = hoveredPath.size > 0 && !isInPath;

    return {
      ...node,
      data: {
        ...node.data,
        selected: isSelected,
        focused: isFocused,
        isHovered: isInPath,
        isDimmed: isDimmed,
      },
    };
  });

  // Update edge styles based on hover state
  const edgesWithState = filteredEdges.map((edge) => {
    const isOnPath = hoveredPath.has(edge.source) && hoveredPath.has(edge.target);
    const isIdle = hoveredPath.size === 0;
    return {
      ...edge,
      style: {
        ...edge.style,
        opacity: isIdle ? 0.55 : isOnPath ? 0.9 : 0.12,
        strokeWidth: isOnPath ? 2.5 : 1.5,
      },
    };
  });

  return (
    <>
      {/* Top UI */}
      <ProgressBar nodes={initialNodes} />
      <BreadcrumbTrail />

      {/* Left UI */}
      <CategoryNav />

      {/* Main Flow */}
      <ReactFlow
        nodes={nodesWithState}
        edges={edgesWithState}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onNodeMouseEnter={(event, node) => handleNodeHover(node.id)}
        onNodeMouseLeave={() => handleNodeHover(null)}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#1e293b" gap={60} size={1} />
        <Controls position="bottom-left" showInteractive={false} className="hidden sm:flex" />
        <MiniMap
          position="bottom-right"
          nodeColor={(node) => {
            const category = node.data?.category as keyof typeof categoryColors;
            return categoryColors[category] || '#64748b';
          }}
          maskColor="rgba(10, 15, 26, 0.85)"
          style={{ backgroundColor: 'rgba(30, 41, 59, 0.9)' }}
          className="hidden sm:block"
        />
        <ZoomControls />

        {/* Camera Controller for smooth navigation */}
        <CameraController
          nodes={nodes}
          edges={edges.map(e => ({ source: e.source, target: e.target }))}
          onNodeSelect={handleNodeSelect}
        />
      </ReactFlow>

      {/* Sidebar */}
      <KnowledgeSidebar
        key={selectedNode?.id}
        node={selectedNode}
        onClose={() => selectNode(null)}
      />

      {/* Search */}
      <CommandPalette nodes={initialNodes} />

      {/* Focus Controls */}
      <FocusControls />

      {/* Keyboard Help */}
      <KeyboardShortcutsHelp />

      {/* Mobile Controls Drawer */}
      <MobileControlsDrawer />
    </>
  );
}

export function CryptoTree() {
  return (
    <NavigationProvider>
      <ReactFlowProvider>
        <CryptoTreeInner />
      </ReactFlowProvider>
    </NavigationProvider>
  );
}
