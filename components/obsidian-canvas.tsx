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
  type Edge,
  type Connection,
  type NodeMouseHandler,
  type OnNodesChange,
  type OnEdgesChange,
  type ReactFlowInstance,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { AnimatePresence } from 'framer-motion';

import {
  ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight, StickyNote,
  Lock, Unlock, RotateCcw, Search,
  Pencil, Copy, Trash2, Info, ArrowUpRight, HelpCircle, X,
  Sun, Moon, Link,
} from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

import { CanvasCard } from '@/components/canvas-card';
import { CanvasPageNode } from '@/components/canvas-page-node';
import { NodeDetailPanel } from '@/components/node-detail-panel';
import { ArticleViewer } from '@/components/article-viewer';
import { CanvasNavContext, useCanvasNav } from '@/components/canvas-nav-context';
import { SearchPalette } from '@/components/search-palette';
import { ContextMenu, type ContextMenuItemType } from '@/components/context-menu';
import { CANVASES, NODE_CANVAS_MAP, type CanvasNodeData, type PageData } from '@/data/canvas-data';
import { getInitialNodes, getInitialEdges, saveCanvas, resetCanvas } from '@/lib/canvas-persistence';

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

// ─── Learned progress hook ────────────────────────────────────────────────────

function useLearnedProgress() {
  const total = useMemo(() => {
    const ids = new Set<string>();
    for (const canvas of Object.values(CANVASES)) {
      for (const node of canvas.nodes) {
        if (node.type === 'page') ids.add(node.id as string);
      }
    }
    return ids.size;
  }, []);

  const [learned, setLearned] = useState(0);

  const recount = useCallback(() => {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('cryptotree-learned-') && localStorage.getItem(key) === 'true') count++;
    }
    setLearned(count);
  }, []);

  useEffect(() => {
    recount();
    window.addEventListener('learned-updated', recount);
    return () => window.removeEventListener('learned-updated', recount);
  }, [recount]);

  return { learned, total };
}

// ─── Keyboard shortcuts reference ─────────────────────────────────────────────

const KEYBOARD_SHORTCUTS = [
  { keys: ['⌘K'], description: 'Search all nodes' },
  { keys: ['⌘['], description: 'Go back in canvas history' },
  { keys: ['⌘]'], description: 'Go forward in canvas history' },
  { keys: ['F'], description: 'Fit all nodes in view' },
  { keys: ['⌘Z'], description: 'Undo' },
  { keys: ['⌘⇧Z'], description: 'Redo' },
  { keys: ['Esc'], description: 'Close panel / go back' },
  { keys: ['⌫', 'Del'], description: 'Delete selected node' },
  { keys: ['Double-click'], description: 'Edit a card' },
  { keys: ['Enter'], description: 'Save card edit' },
  { keys: ['/'], description: 'Toggle this help' },
];

// ─── Controls (rendered inside ReactFlow so useReactFlow() works) ─────────────

function CanvasControls({
  canvasStack,
  onBack,
  onForward,
  canGoForward,
  onJumpTo,
  onAddCard,
  onReset,
  onOpenSearch,
  onOpenHelp,
  isLocked,
  onToggleLock,
}: {
  canvasStack: string[];
  onBack: () => void;
  onForward: () => void;
  canGoForward: boolean;
  onJumpTo: (idx: number) => void;
  onAddCard: (node: Node<CanvasNodeData>) => void;
  onReset: () => void;
  onOpenSearch: () => void;
  onOpenHelp: () => void;
  isLocked: boolean;
  onToggleLock: () => void;
}) {
  const { zoomIn, zoomOut, fitView, screenToFlowPosition } = useReactFlow();
  const { learned, total } = useLearnedProgress();

  const addCard = useCallback(() => {
    const position = screenToFlowPosition({
      x: window.innerWidth / 2 - 140,
      y: window.innerHeight / 2 - 80,
    });
    onAddCard({
      id: `card-user-${crypto.randomUUID()}`,
      type: 'card',
      position,
      data: { type: 'card' as const, title: 'New Card', content: 'Edit this card…' },
      style: { width: 280 },
    });
  }, [screenToFlowPosition, onAddCard]);

  const canvasTitle = CANVASES[canvasStack[canvasStack.length - 1]]?.title ?? 'Canvas';
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <>
      {/* ── Breadcrumb (sub-canvas only) ── */}
      {canvasStack.length > 1 && (
        <Panel position="top-center">
          <div className="flex items-center gap-1 bg-[var(--c-elevated)]/90 border border-[var(--c-border)] rounded-lg px-3 py-1.5 text-[11px] backdrop-blur-sm select-none">
            {canvasStack.map((id, idx) => (
              <span key={idx} className="flex items-center gap-1">
                {idx > 0 && <span className="text-[var(--c-text-7)] mx-0.5">/</span>}
                {idx < canvasStack.length - 1 ? (
                  <button
                    onClick={() => onJumpTo(idx)}
                    className="text-[var(--c-text-5)] hover:text-[var(--c-text-3)] transition-colors cursor-pointer"
                  >
                    {CANVASES[id]?.title ?? id}
                  </button>
                ) : (
                  <span className="text-[var(--c-text-2)]">{CANVASES[id]?.title ?? id}</span>
                )}
              </span>
            ))}
          </div>
        </Panel>
      )}

      {/* ── Canvas title + progress (root only) ── */}
      {canvasStack.length === 1 && (
        <Panel position="top-left">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[11px] text-[var(--c-text-6)] font-medium tracking-wide">
              {canvasTitle}
            </span>
            {total > 0 && (
              <span className="text-[10px] text-[var(--c-text-7)] font-medium bg-[var(--c-card)] border border-[var(--c-border)] rounded-full px-2 py-0.5">
                {learned}/{total} learned
              </span>
            )}
          </div>
        </Panel>
      )}

      {/* ── Bottom toolbar ── */}
      <Panel position="bottom-center">
        <div className="flex items-center gap-0.5 bg-[var(--c-elevated)]/95 border border-[var(--c-border)] rounded-xl px-1.5 py-1.5 shadow-[0_4px_28px_rgba(0,0,0,0.3)] backdrop-blur-sm mb-1">

          {/* Back / Forward buttons */}
          {(canvasStack.length > 1 || canGoForward) && (
            <>
              <button
                onClick={onBack}
                disabled={canvasStack.length <= 1}
                className="w-7 h-7 flex items-center justify-center text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Go back (⌘[)"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onForward}
                disabled={!canGoForward}
                className="w-7 h-7 flex items-center justify-center text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Go forward (⌘])"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <div className="w-px h-4 bg-[var(--c-border)] mx-1" />
            </>
          )}

          {/* Search */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Search nodes (⌘K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>

          <div className="w-px h-4 bg-[var(--c-border)] mx-1" />

          {/* Add card */}
          <button
            onClick={addCard}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Add a new card at canvas center"
          >
            <StickyNote className="w-3.5 h-3.5" />
            <span>Card</span>
          </button>

          <div className="w-px h-4 bg-[var(--c-border)] mx-1" />

          {/* Zoom out */}
          <button
            onClick={() => zoomOut({ duration: 200 })}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          {/* Zoom in */}
          <button
            onClick={() => zoomIn({ duration: 200 })}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          {/* Fit view */}
          <button
            onClick={() => fitView({ duration: 500, padding: 0.12 })}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Fit all cards in view"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <div className="w-px h-4 bg-[var(--c-border)] mx-1" />

          {/* Lock view */}
          <button
            onClick={onToggleLock}
            className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
              isLocked
                ? 'text-[#6366f1] bg-[#6366f1]/10 hover:bg-[#6366f1]/20'
                : 'text-[var(--c-text-4)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)]'
            }`}
            title={isLocked ? 'Unlock view (re-enable pan & drag)' : 'Lock view (prevent accidental pan/drag)'}
          >
            {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
          </button>

          <div className="w-px h-4 bg-[var(--c-border)] mx-1" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-5)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Copy Link */}
          <div className="relative">
            <button
              onClick={handleCopyLink}
              className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
                copied
                  ? 'text-green-400'
                  : 'text-[var(--c-text-5)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)]'
              }`}
              title={copied ? 'Copied!' : 'Copy link to this view'}
            >
              <Link className="w-3.5 h-3.5" />
            </button>
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-[var(--c-elevated)] border border-[var(--c-border)] rounded px-1.5 py-0.5 whitespace-nowrap pointer-events-none">
                Copied!
              </span>
            )}
          </div>

          {/* Help */}
          <button
            onClick={onOpenHelp}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-5)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Keyboard shortcuts (?)"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {/* Reset canvas */}
          <button
            onClick={onReset}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-5)] hover:text-[#cc4444] hover:bg-[var(--c-hover)] rounded-lg transition-colors"
            title="Reset canvas to default layout"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </Panel>
    </>
  );
}

// ─── FocusOnMount — pans/zooms to a specific node after the flow initialises ──
// Must render inside <ReactFlow> so useReactFlow() is available.

function FocusOnMount({ nodeId }: { nodeId: string }) {
  const { fitView } = useReactFlow();
  useEffect(() => {
    // Small delay lets React Flow finish its own initial layout pass.
    const t = setTimeout(() => {
      fitView({ nodes: [{ id: nodeId }], duration: 500, padding: 0.35, maxZoom: 1.2 });
    }, 120);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally run once on mount
  return null;
}

// ─── Canvas view (one instance per canvas level) ──────────────────────────────

type Snapshot = { nodes: Node<CanvasNodeData>[]; edges: Edge[] };

function CanvasView({
  canvasId,
  canvasStack,
  onBack,
  onForward,
  canGoForward,
  onJumpTo,
  onNodeSelect,
  onOpenSearch,
  onOpenHelp,
  focusNodeId,
}: {
  canvasId: string;
  canvasStack: string[];
  onBack: () => void;
  onForward: () => void;
  canGoForward: boolean;
  onJumpTo: (idx: number) => void;
  onNodeSelect: (id: string, data: CanvasNodeData) => void;
  onOpenSearch: () => void;
  onOpenHelp: () => void;
  focusNodeId: string | null;
}) {
  const { theme } = useTheme();

  // ── Core state ──────────────────────────────────────────────────────────────
  const [nodes, setNodesRaw, onNodesChangeRaw] = useNodesState(getInitialNodes(canvasId));
  const [edges, setEdgesRaw, onEdgesChangeRaw] = useEdgesState(getInitialEdges(canvasId));
  const [isLocked, setIsLocked] = useState(false);

  // Live refs — updated synchronously each render so stable callbacks always
  // read the current value without needing it in their dependency arrays.
  const nodesRef = useRef(nodes);
  const edgesRef = useRef(edges);
  nodesRef.current = nodes;
  edgesRef.current = edges;

  // ReactFlow instance ref — gives us screenToFlowPosition / fitView outside
  // the ReactFlow provider context (e.g. in pane context menu handlers).
  const rfRef = useRef<ReactFlowInstance<Node<CanvasNodeData>, Edge> | null>(null);

  // Canvas nav context — used for "Explore Ecosystem" in page-node context menu.
  const { navigateTo } = useCanvasNav();

  // ── History ─────────────────────────────────────────────────────────────────
  const past   = useRef<Snapshot[]>([]);
  const future = useRef<Snapshot[]>([]);

  const pushToHistory = useCallback(() => {
    past.current = [...past.current.slice(-49), {
      nodes: nodesRef.current,
      edges: edgesRef.current,
    }];
    future.current = [];
  }, []);

  const undo = useCallback(() => {
    const prev = past.current[past.current.length - 1];
    if (!prev) return;
    future.current = [
      { nodes: nodesRef.current, edges: edgesRef.current },
      ...future.current.slice(0, 49),
    ];
    past.current = past.current.slice(0, -1);
    setNodesRaw(prev.nodes);
    setEdgesRaw(prev.edges);
  }, [setNodesRaw, setEdgesRaw]);

  const redo = useCallback(() => {
    const next = future.current[0];
    if (!next) return;
    past.current = [
      ...past.current.slice(-49),
      { nodes: nodesRef.current, edges: edgesRef.current },
    ];
    future.current = future.current.slice(1);
    setNodesRaw(next.nodes);
    setEdgesRaw(next.edges);
  }, [setNodesRaw, setEdgesRaw]);

  // ── Keyboard shortcuts ───────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        e.shiftKey ? redo() : undo();
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
        e.preventDefault();
        redo();
      } else if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey) {
        rfRef.current?.fitView({ duration: 500, padding: 0.12 });
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        // Delete all currently-selected nodes (and their edges) globally,
        // regardless of whether the ReactFlow pane has DOM focus.
        // Both Delete (forward-delete / Windows) and Backspace (Mac keyboard) are handled.
        const selected = nodesRef.current.filter((n) => n.selected);
        if (selected.length > 0) {
          e.preventDefault();
          pushToHistory();
          const ids = new Set(selected.map((n) => n.id));
          setNodesRaw((prev) => prev.filter((n) => !ids.has(n.id)));
          setEdgesRaw((prev) => prev.filter((ed) => !ids.has(ed.source) && !ids.has(ed.target)));
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo, redo, pushToHistory, setNodesRaw, setEdgesRaw]);

  // ── Debounced auto-save ──────────────────────────────────────────────────────
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveCanvas(canvasId, nodes, edges), 600);
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
  }, [canvasId, nodes, edges]);

  // ── History-aware change handlers ───────────────────────────────────────────
  const draggingNodes = useRef(new Set<string>());

  const onNodesChange: OnNodesChange<Node<CanvasNodeData>> = useCallback(
    (changes) => {
      for (const c of changes) {
        if (c.type === 'position') {
          const dragging = (c as { id: string; dragging?: boolean }).dragging;
          const id = (c as { id: string }).id;
          if (dragging && !draggingNodes.current.has(id)) {
            draggingNodes.current.add(id);
            pushToHistory();
          } else if (!dragging) {
            draggingNodes.current.delete(id);
          }
        } else if (c.type === 'remove') {
          pushToHistory();
        }
      }
      onNodesChangeRaw(changes);
    },
    [onNodesChangeRaw, pushToHistory],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      if (changes.some((c) => c.type === 'remove')) pushToHistory();
      onEdgesChangeRaw(changes);
    },
    [onEdgesChangeRaw, pushToHistory],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      pushToHistory();
      setEdgesRaw((eds) => addEdge({ ...connection, ...defaultEdgeOptions }, eds));
    },
    [pushToHistory, setEdgesRaw],
  );

  // ── Add card / reset ─────────────────────────────────────────────────────────

  const handleAddCard = useCallback(
    (node: Node<CanvasNodeData>) => {
      pushToHistory();
      setNodesRaw((prev) => [...prev, node]);
    },
    [pushToHistory, setNodesRaw],
  );

  const handleResetCanvas = useCallback(() => {
    if (
      !window.confirm(
        `Reset "${CANVASES[canvasId]?.title ?? canvasId}" to its default layout?\n\nThis removes your custom cards and layout changes.`,
      )
    )
      return;
    resetCanvas(canvasId);
    past.current = [];
    future.current = [];
    const canvas = CANVASES[canvasId];
    setNodesRaw((canvas?.nodes ?? []) as Node<CanvasNodeData>[]);
    setEdgesRaw(canvas?.edges ?? []);
  }, [canvasId, setNodesRaw, setEdgesRaw]);

  // ── Node click ───────────────────────────────────────────────────────────────

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => onNodeSelect(node.id, node.data as unknown as CanvasNodeData),
    [onNodeSelect],
  );

  // ── Context menu ─────────────────────────────────────────────────────────────

  type CtxMenu = { x: number; y: number; items: ContextMenuItemType[] };
  const [contextMenu, setContextMenu] = useState<CtxMenu | null>(null);
  const closeMenu = useCallback(() => setContextMenu(null), []);

  // ── Context menu actions ─────────────────────────────────────────────────────

  const deleteNode = useCallback(
    (nodeId: string) => {
      pushToHistory();
      setNodesRaw((prev) => prev.filter((n) => n.id !== nodeId));
      setEdgesRaw((prev) => prev.filter((e) => e.source !== nodeId && e.target !== nodeId));
      setContextMenu(null);
    },
    [pushToHistory, setNodesRaw, setEdgesRaw],
  );

  const duplicateNode = useCallback(
    (node: Node<CanvasNodeData>) => {
      pushToHistory();
      setNodesRaw((prev) => [
        ...prev,
        {
          ...node,
          id: `card-user-${crypto.randomUUID()}`,
          position: { x: node.position.x + 24, y: node.position.y + 24 },
          selected: false,
          data: { ...node.data, _editMode: false } as CanvasNodeData,
        },
      ]);
      setContextMenu(null);
    },
    [pushToHistory, setNodesRaw],
  );

  const editNode = useCallback(
    (nodeId: string) => {
      setNodesRaw((prev) =>
        prev.map((n) =>
          n.id === nodeId ? { ...n, data: { ...n.data, _editMode: true } } : n,
        ),
      );
      setContextMenu(null);
    },
    [setNodesRaw],
  );

  // ── onNodeContextMenu ────────────────────────────────────────────────────────

  const onNodeContextMenu: NodeMouseHandler = useCallback(
    (event, node) => {
      event.preventDefault();
      const d = node.data as unknown as CanvasNodeData;
      const isCard = d.type === 'card';
      const pd = d as PageData;
      const hasSubCanvas = !isCard && !!CANVASES[pd.canvasId];

      const items: ContextMenuItemType[] = isCard
        ? [
            {
              type: 'item',
              label: 'Edit',
              icon: <Pencil />,
              shortcut: '↵↵',
              onClick: () => editNode(node.id),
            },
            {
              type: 'item',
              label: 'Duplicate',
              icon: <Copy />,
              onClick: () => duplicateNode(node as Node<CanvasNodeData>),
            },
            { type: 'separator' },
            {
              type: 'item',
              label: 'Delete',
              icon: <Trash2 />,
              variant: 'danger',
              onClick: () => deleteNode(node.id),
            },
          ]
        : [
            {
              type: 'item',
              label: 'Open Details',
              icon: <Info />,
              onClick: () => { onNodeSelect(node.id, d); setContextMenu(null); },
            },
            ...(hasSubCanvas
              ? [{
                  type: 'item' as const,
                  label: 'Explore Ecosystem',
                  icon: <ArrowUpRight />,
                  onClick: () => { navigateTo(pd.canvasId); setContextMenu(null); },
                }]
              : []),
            { type: 'separator' },
            {
              type: 'item',
              label: 'Duplicate',
              icon: <Copy />,
              onClick: () => duplicateNode(node as Node<CanvasNodeData>),
            },
            {
              type: 'item',
              label: 'Delete',
              icon: <Trash2 />,
              variant: 'danger',
              onClick: () => deleteNode(node.id),
            },
          ];

      setContextMenu({ x: event.clientX, y: event.clientY, items });
    },
    [editNode, duplicateNode, deleteNode, navigateTo, onNodeSelect],
  );

  // ── onEdgeContextMenu ────────────────────────────────────────────────────────

  const onEdgeContextMenu = useCallback(
    (event: React.MouseEvent, edge: Edge) => {
      event.preventDefault();
      setContextMenu({
        x: event.clientX,
        y: event.clientY,
        items: [
          {
            type: 'item',
            label: 'Delete Edge',
            icon: <Trash2 />,
            variant: 'danger',
            onClick: () => {
              pushToHistory();
              setEdgesRaw((prev) => prev.filter((e) => e.id !== edge.id));
              setContextMenu(null);
            },
          },
        ],
      });
    },
    [pushToHistory, setEdgesRaw],
  );

  // ── onPaneContextMenu ────────────────────────────────────────────────────────

  const onPaneContextMenu = useCallback(
    (event: React.MouseEvent | MouseEvent) => {
      event.preventDefault();
      // Convert screen coords to flow coords for "Add Card here".
      const flowPos = rfRef.current?.screenToFlowPosition({
        x: (event as React.MouseEvent).clientX,
        y: (event as React.MouseEvent).clientY,
      }) ?? { x: 0, y: 0 };

      setContextMenu({
        x: (event as React.MouseEvent).clientX,
        y: (event as React.MouseEvent).clientY,
        items: [
          {
            type: 'item',
            label: 'Add Card here',
            icon: <StickyNote />,
            onClick: () => {
              handleAddCard({
                id: `card-user-${crypto.randomUUID()}`,
                type: 'card',
                position: { x: flowPos.x - 140, y: flowPos.y - 40 },
                data: { type: 'card' as const, title: 'New Card', content: 'Edit this card…' },
                style: { width: 280 },
              });
              setContextMenu(null);
            },
          },
          { type: 'separator' },
          {
            type: 'item',
            label: 'Fit View',
            icon: <Maximize2 />,
            shortcut: 'F',
            onClick: () => {
              rfRef.current?.fitView({ duration: 500, padding: 0.12 });
              setContextMenu(null);
            },
          },
          {
            type: 'item',
            label: 'Search…',
            icon: <Search />,
            shortcut: '⌘K',
            onClick: () => { onOpenSearch(); setContextMenu(null); },
          },
          { type: 'separator' },
          {
            type: 'item',
            label: 'Reset Canvas',
            icon: <RotateCcw />,
            variant: 'danger',
            onClick: () => { handleResetCanvas(); setContextMenu(null); },
          },
        ],
      });
    },
    [handleAddCard, handleResetCanvas, onOpenSearch],
  );

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeContextMenu={onNodeContextMenu}
        onEdgeContextMenu={onEdgeContextMenu}
        onPaneContextMenu={onPaneContextMenu}
        onInit={(instance) => { rfRef.current = instance; }}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        // ── Obsidian-style pan / zoom ────────────────────────────────────────
        panOnScroll={!isLocked}
        panOnScrollMode={PanOnScrollMode.Free}
        zoomOnScroll={false}
        zoomOnPinch={!isLocked}
        panOnDrag={!isLocked}
        nodesDraggable={!isLocked}
        // ── Limits ──────────────────────────────────────────────────────────
        minZoom={0.05}
        maxZoom={3}
        // ── Misc UX ─────────────────────────────────────────────────────────
        selectionOnDrag={false}
        elevateEdgesOnSelect
        fitView
        fitViewOptions={{ padding: 0.12, maxZoom: 0.85 }}
        deleteKeyCode={null}
        proOptions={{ hideAttribution: true }}
        colorMode={theme}
        className="!bg-[var(--c-bg)]"
      >
        <Background variant={BackgroundVariant.Dots} gap={22} size={1} color="var(--c-dot)" />

        <MiniMap
          nodeColor={(node) => {
            const d = node.data as unknown as { accentColor?: string };
            return d.accentColor ?? 'var(--c-hover)';
          }}
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: 8 }}
          maskColor="rgba(128,128,128,0.2)"
          zoomable
          pannable
        />

        <CanvasControls
          canvasStack={canvasStack}
          onBack={onBack}
          onForward={onForward}
          canGoForward={canGoForward}
          onJumpTo={onJumpTo}
          onAddCard={handleAddCard}
          onReset={handleResetCanvas}
          onOpenSearch={onOpenSearch}
          onOpenHelp={onOpenHelp}
          isLocked={isLocked}
          onToggleLock={() => setIsLocked((l) => !l)}
        />

        {focusNodeId && <FocusOnMount key={focusNodeId} nodeId={focusNodeId} />}
      </ReactFlow>

      {/* Context menu — rendered outside ReactFlow to avoid z-index conflicts */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={contextMenu.items}
          onClose={closeMenu}
        />
      )}
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export function ObsidianCanvas() {
  const [canvasStack, setCanvasStack] = useState<string[]>(['main']);
  const [forwardStack, setForwardStack] = useState<string[]>([]);
  const [selectedNode, setSelectedNode] = useState<{ id: string; data: CanvasNodeData } | null>(null);
  const [activeArticle, setActiveArticle] = useState<{ nodeId: string; data: CanvasNodeData } | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen]     = useState(false);
  const [focusNodeId, setFocusNodeId]   = useState<string | null>(null);
  const currentCanvasId = canvasStack[canvasStack.length - 1];

  // Read URL params on mount — restore canvas + focused node from a shared link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const canvasId = params.get('c');
    const nodeId   = params.get('n');

    if (canvasId && CANVASES[canvasId]) {
      setCanvasStack(canvasId === 'main' ? ['main'] : ['main', canvasId]);
      setForwardStack([]);
    }

    if (nodeId) {
      const targetId = (canvasId && CANVASES[canvasId]) ? canvasId : 'main';
      const nodeEntry = CANVASES[targetId]?.nodes.find((n) => n.id === nodeId);
      if (nodeEntry) {
        setFocusNodeId(nodeId);
        setSelectedNode({ id: nodeId, data: nodeEntry.data as unknown as CanvasNodeData });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL whenever the active canvas or selected node changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (currentCanvasId !== 'main') params.set('c', currentCanvasId);
    if (selectedNode) params.set('n', selectedNode.id);
    const search = params.toString();
    window.history.replaceState(null, '', search ? `?${search}` : '/');
  }, [currentCanvasId, selectedNode]);

  const navigateTo = useCallback((canvasId: string) => {
    if (CANVASES[canvasId] && canvasId !== canvasStack[canvasStack.length - 1]) {
      setCanvasStack((prev) => [...prev, canvasId]);
      setForwardStack([]); // entering a new branch clears forward history
      setSelectedNode(null);
    }
  }, [canvasStack]);

  const goBack = useCallback(() => {
    if (canvasStack.length <= 1) return;
    const leaving = canvasStack[canvasStack.length - 1];
    setCanvasStack((prev) => prev.slice(0, -1));
    setForwardStack((f) => [leaving, ...f]);
    setSelectedNode(null);
  }, [canvasStack]);

  const goForward = useCallback(() => {
    if (forwardStack.length === 0) return;
    const [next, ...rest] = forwardStack;
    if (CANVASES[next]) {
      setCanvasStack((prev) => [...prev, next]);
    }
    setForwardStack(rest);
    setSelectedNode(null);
  }, [forwardStack]);

  const jumpTo = useCallback((idx: number) => {
    const trimmed = canvasStack.slice(0, idx + 1);
    const removed = canvasStack.slice(idx + 1);
    setCanvasStack(trimmed);
    setForwardStack((f) => [...removed.reverse(), ...f]);
    setSelectedNode(null);
  }, [canvasStack]);

  // Search: navigate to canvas + select node + focus viewport
  const handleSearchSelect = useCallback(
    (nodeId: string, canvasId: string, data: CanvasNodeData) => {
      setIsSearchOpen(false);
      setFocusNodeId(nodeId);
      if (canvasId !== currentCanvasId) {
        setCanvasStack((prev) => (CANVASES[canvasId] ? [...prev, canvasId] : prev));
        setForwardStack([]);
      }
      setSelectedNode({ id: nodeId, data });
    },
    [currentCanvasId],
  );

  // Cmd/Ctrl + K → open search; ⌘[ / ⌘] → back / forward; ? → help
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((o) => !o);
      } else if ((e.ctrlKey || e.metaKey) && e.key === '[') {
        e.preventDefault();
        goBack();
      } else if ((e.ctrlKey || e.metaKey) && e.key === ']') {
        e.preventDefault();
        goForward();
      } else if (e.key === '/') {
        e.preventDefault();
        setIsHelpOpen((o) => !o);
      }
    };
    // capture: true → fires before any child element can absorb the event
    window.addEventListener('keydown', handler, { capture: true });
    return () => window.removeEventListener('keydown', handler, { capture: true });
  }, [goBack, goForward]);

  // Esc: close modal chain from outermost to innermost
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (isHelpOpen) {
        setIsHelpOpen(false);
      } else if (isSearchOpen) {
        setIsSearchOpen(false);
      } else if (activeArticle) {
        setActiveArticle(null);
      } else if (selectedNode) {
        setSelectedNode(null);
      } else {
        goBack();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isHelpOpen, isSearchOpen, activeArticle, selectedNode, goBack]);

  const navCtx = useMemo(
    () => ({ navigateTo, goBack, jumpTo, canvasStack }),
    [navigateTo, goBack, jumpTo, canvasStack],
  );

  return (
    <CanvasNavContext.Provider value={navCtx}>
      <div className="w-screen h-screen overflow-hidden bg-[var(--c-bg)] relative">
        {/*
          key={currentCanvasId} causes a fresh mount whenever you navigate to a
          new canvas — each canvas gets its own independent node/edge state.
        */}
        <CanvasView
          key={currentCanvasId}
          canvasId={currentCanvasId}
          canvasStack={canvasStack}
          onBack={goBack}
          onForward={goForward}
          canGoForward={forwardStack.length > 0}
          onJumpTo={jumpTo}
          onNodeSelect={(id, data) => setSelectedNode({ id, data })}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenHelp={() => setIsHelpOpen(true)}
          focusNodeId={focusNodeId}
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
                if (entry.canvasId !== currentCanvasId) {
                  navigateTo(entry.canvasId);
                }
                setSelectedNode({ id: targetNodeId, data: entry.data });
                setActiveArticle({ nodeId: targetNodeId, data: entry.data });
              }}
            />
          )}
        </AnimatePresence>
        {/* Search palette */}
        {isSearchOpen && (
          <SearchPalette
            onClose={() => setIsSearchOpen(false)}
            onSelect={handleSearchSelect}
          />
        )}

        {/* Keyboard shortcuts help modal */}
        {isHelpOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
            onMouseDown={() => setIsHelpOpen(false)}
          >
            <div
              className="w-full max-w-[400px] mx-4 bg-[var(--c-elevated)] border border-[var(--c-border)] rounded-2xl shadow-[0_28px_80px_rgba(0,0,0,0.4)] overflow-hidden"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--c-border-subtle)]">
                <span className="text-[13px] font-semibold text-[var(--c-text-2)]">Keyboard Shortcuts</span>
                <button
                  onClick={() => setIsHelpOpen(false)}
                  className="text-[var(--c-text-5)] hover:text-[var(--c-text-2)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Shortcuts list */}
              <div className="px-2 py-2">
                {KEYBOARD_SHORTCUTS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--c-hover)] transition-colors"
                  >
                    <span className="text-[12px] text-[var(--c-text-4)]">{s.description}</span>
                    <div className="flex items-center gap-1">
                      {s.keys.map((k, ki) => (
                        <kbd
                          key={ki}
                          className="text-[10px] text-[var(--c-text-3)] bg-[var(--c-active)] border border-[var(--c-border)] rounded px-1.5 py-0.5 font-mono"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-[var(--c-border-subtle)] text-center text-[10px] text-[var(--c-text-7)] select-none">
                Press <kbd className="text-[var(--c-text-5)] font-mono">?</kbd> anytime to toggle
              </div>
            </div>
          </div>
        )}
      </div>
    </CanvasNavContext.Provider>
  );
}
