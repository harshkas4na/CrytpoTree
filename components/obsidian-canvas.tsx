'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  MiniMap,
  Panel,
  PanOnScrollMode,
  MarkerType,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  type Node,
  type Connection,
  type NodeMouseHandler,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { AnimatePresence } from 'framer-motion';

import { ZoomIn, ZoomOut, Maximize2, ChevronLeft, StickyNote } from 'lucide-react';

import { CanvasCard } from '@/components/canvas-card';
import { CanvasPageNode } from '@/components/canvas-page-node';
import { NodeDetailPanel } from '@/components/node-detail-panel';
import { ArticleViewer } from '@/components/article-viewer';
import { CanvasNavContext } from '@/components/canvas-nav-context';
import { CANVASES, NODE_CANVAS_MAP, type CanvasNodeData } from '@/data/canvas-data';

// ─── Node type registry ───────────────────────────────────────────────────────

const nodeTypes = {
  card: CanvasCard,
  page: CanvasPageNode,
};

// ─── Shared edge style ────────────────────────────────────────────────────────

const defaultEdgeOptions = {
  style: { stroke: '#585858', strokeWidth: 1.5 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#585858',
    width: 10,
    height: 10,
  },
};

// ─── Controls (rendered inside ReactFlow so useReactFlow() works) ─────────────

function CanvasControls({
  canvasStack,
  onBack,
  onJumpTo,
  setNodes,
}: {
  canvasStack: string[];
  onBack: () => void;
  onJumpTo: (idx: number) => void;
  setNodes: React.Dispatch<React.SetStateAction<Node<CanvasNodeData>[]>>;
}) {
  const { zoomIn, zoomOut, fitView, screenToFlowPosition } = useReactFlow();
  const counter = useRef(1000);

  const addCard = useCallback(() => {
    const position = screenToFlowPosition({
      x: window.innerWidth / 2 - 140,
      y: window.innerHeight / 2 - 80,
    });
    setNodes((prev) => [
      ...prev,
      {
        id: `card-user-${++counter.current}`,
        type: 'card',
        position,
        data: { type: 'card' as const, title: 'New Card', content: 'Edit this card…' },
        style: { width: 280 },
      },
    ]);
  }, [screenToFlowPosition, setNodes]);

  const canvasTitle = CANVASES[canvasStack[canvasStack.length - 1]]?.title ?? 'Canvas';

  return (
    <>
      {/* ── Breadcrumb (sub-canvas only) ── */}
      {canvasStack.length > 1 && (
        <Panel position="top-center">
          <div className="flex items-center gap-1 bg-[#1a1a1a]/90 border border-[#2e2e2e] rounded-lg px-3 py-1.5 text-[11px] backdrop-blur-sm select-none">
            {canvasStack.map((id, idx) => (
              <span key={id} className="flex items-center gap-1">
                {idx > 0 && <span className="text-[#3a3a3a] mx-0.5">/</span>}
                {idx < canvasStack.length - 1 ? (
                  <button
                    onClick={() => onJumpTo(idx)}
                    className="text-[#555] hover:text-[#aaa] transition-colors cursor-pointer"
                  >
                    {CANVASES[id]?.title ?? id}
                  </button>
                ) : (
                  <span className="text-[#ccc]">{CANVASES[id]?.title ?? id}</span>
                )}
              </span>
            ))}
          </div>
        </Panel>
      )}

      {/* ── Canvas title (root only) ── */}
      {canvasStack.length === 1 && (
        <Panel position="top-left">
          <span className="text-[11px] text-[#444] font-medium tracking-wide select-none">
            {canvasTitle}
          </span>
        </Panel>
      )}

      {/* ── Bottom toolbar ── */}
      <Panel position="bottom-center">
        <div className="flex items-center gap-0.5 bg-[#1c1c1c]/95 border border-[#2e2e2e] rounded-xl px-1.5 py-1.5 shadow-[0_4px_28px_rgba(0,0,0,0.7)] backdrop-blur-sm mb-1">

          {/* Back button */}
          {canvasStack.length > 1 && (
            <>
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] text-[#999] hover:text-[#ddd] hover:bg-[#2a2a2a] rounded-lg transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <div className="w-px h-4 bg-[#2e2e2e] mx-1" />
            </>
          )}

          {/* Add card */}
          <button
            onClick={addCard}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] text-[#999] hover:text-[#ddd] hover:bg-[#2a2a2a] rounded-lg transition-colors"
            title="Add a new card at canvas center"
          >
            <StickyNote className="w-3.5 h-3.5" />
            <span>Card</span>
          </button>

          <div className="w-px h-4 bg-[#2e2e2e] mx-1" />

          {/* Zoom out */}
          <button
            onClick={() => zoomOut({ duration: 200 })}
            className="w-7 h-7 flex items-center justify-center text-[#999] hover:text-[#ddd] hover:bg-[#2a2a2a] rounded-lg transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          {/* Zoom in */}
          <button
            onClick={() => zoomIn({ duration: 200 })}
            className="w-7 h-7 flex items-center justify-center text-[#999] hover:text-[#ddd] hover:bg-[#2a2a2a] rounded-lg transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          {/* Fit view */}
          <button
            onClick={() => fitView({ duration: 500, padding: 0.12 })}
            className="w-7 h-7 flex items-center justify-center text-[#999] hover:text-[#ddd] hover:bg-[#2a2a2a] rounded-lg transition-colors"
            title="Fit all cards in view"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </Panel>
    </>
  );
}

// ─── Canvas view (one instance per canvas level) ──────────────────────────────

function CanvasView({
  canvasId,
  canvasStack,
  onBack,
  onJumpTo,
  onNodeSelect,
}: {
  canvasId: string;
  canvasStack: string[];
  onBack: () => void;
  onJumpTo: (idx: number) => void;
  onNodeSelect: (id: string, data: CanvasNodeData) => void;
}) {
  const canvas = CANVASES[canvasId];
  const initialNodes = (canvas?.nodes ?? []) as Node<CanvasNodeData>[];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(canvas?.edges ?? []);

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds) => addEdge({ ...connection, ...defaultEdgeOptions }, eds)),
    [setEdges],
  );

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      onNodeSelect(node.id, node.data as unknown as CanvasNodeData);
    },
    [onNodeSelect],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      // ── Obsidian-style pan / zoom ────────────────────────────────────────────
      // Two-finger trackpad scroll → pan in any direction
      panOnScroll
      panOnScrollMode={PanOnScrollMode.Free}
      // Plain scroll does NOT zoom (it pans instead)
      zoomOnScroll={false}
      // Pinch gesture on trackpad / touch → zoom
      zoomOnPinch
      // Left-button drag on empty canvas → pan
      panOnDrag
      // ── Limits ──────────────────────────────────────────────────────────────
      minZoom={0.05}
      maxZoom={3}
      // ── Misc UX ─────────────────────────────────────────────────────────────
      selectionOnDrag={false}
      elevateEdgesOnSelect
      fitView
      fitViewOptions={{ padding: 0.12, maxZoom: 0.85 }}
      deleteKeyCode="Delete"
      proOptions={{ hideAttribution: true }}
      className="!bg-[#1a1a1a]"
    >
      <Background variant={BackgroundVariant.Dots} gap={22} size={1} color="#2c2c2c" />

      <MiniMap
        nodeColor={(node) => {
          const d = node.data as unknown as { accentColor?: string };
          return d.accentColor ?? '#2a2a2a';
        }}
        style={{ background: '#161616', border: '1px solid #2e2e2e', borderRadius: 8 }}
        maskColor="rgba(0,0,0,0.65)"
        zoomable
        pannable
      />

      {/* Controls live inside ReactFlow so they can call useReactFlow() */}
      <CanvasControls
        canvasStack={canvasStack}
        onBack={onBack}
        onJumpTo={onJumpTo}
        setNodes={setNodes}
      />
    </ReactFlow>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export function ObsidianCanvas() {
  const [canvasStack, setCanvasStack] = useState<string[]>(['main']);
  const [selectedNode, setSelectedNode] = useState<{ id: string; data: CanvasNodeData } | null>(null);
  const [activeArticle, setActiveArticle] = useState<{ nodeId: string; data: CanvasNodeData } | null>(null);
  const currentCanvasId = canvasStack[canvasStack.length - 1];

  const navigateTo = useCallback((canvasId: string) => {
    if (CANVASES[canvasId]) {
      setCanvasStack((prev) => [...prev, canvasId]);
      setSelectedNode(null);
    }
  }, []);

  const goBack = useCallback(() => {
    setCanvasStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    setSelectedNode(null);
  }, []);

  const jumpTo = useCallback((idx: number) => {
    setCanvasStack((prev) => prev.slice(0, idx + 1));
    setSelectedNode(null);
  }, []);

  // Esc: close article first, then detail panel, then go back
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (activeArticle) {
        setActiveArticle(null);
      } else if (selectedNode) {
        setSelectedNode(null);
      } else {
        goBack();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeArticle, selectedNode, goBack]);

  const navCtx = useMemo(
    () => ({ navigateTo, goBack, jumpTo, canvasStack }),
    [navigateTo, goBack, jumpTo, canvasStack],
  );

  return (
    <CanvasNavContext.Provider value={navCtx}>
      <div className="w-screen h-screen overflow-hidden bg-[#1a1a1a] relative">
        {/*
          key={currentCanvasId} causes a fresh mount whenever you navigate to a
          new canvas — each canvas gets its own independent node/edge state.
        */}
        <CanvasView
          key={currentCanvasId}
          canvasId={currentCanvasId}
          canvasStack={canvasStack}
          onBack={goBack}
          onJumpTo={jumpTo}
          onNodeSelect={(id, data) => setSelectedNode({ id, data })}
        />

        {/* Slide-in detail panel */}
        <AnimatePresence>
          {selectedNode && !activeArticle && (
            <NodeDetailPanel
              key={selectedNode.id}
              nodeId={selectedNode.id}
              data={selectedNode.data}
              onClose={() => setSelectedNode(null)}
              onOpenArticle={() =>
                setActiveArticle({ nodeId: selectedNode.id, data: selectedNode.data })
              }
            />
          )}
        </AnimatePresence>

        {/* Full-screen article viewer */}
        <AnimatePresence>
          {activeArticle && (
            <ArticleViewer
              key={activeArticle.nodeId}
              nodeId={activeArticle.nodeId}
              nodeData={activeArticle.data}
              onClose={() => setActiveArticle(null)}
              onOpenNode={(targetNodeId) => {
                const entry = NODE_CANVAS_MAP[targetNodeId];
                if (!entry) {
                  setActiveArticle(null);
                  return;
                }
                // Navigate to the canvas if needed
                if (entry.canvasId !== currentCanvasId) {
                  navigateTo(entry.canvasId);
                }
                // Select the node and show its article
                setSelectedNode({ id: targetNodeId, data: entry.data });
                setActiveArticle({ nodeId: targetNodeId, data: entry.data });
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </CanvasNavContext.Provider>
  );
}
