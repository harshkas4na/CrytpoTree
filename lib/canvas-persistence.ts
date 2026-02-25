/**
 * Canvas persistence — saves per-canvas layout (positions, sizes, user cards,
 * edges) to localStorage. Large read-only fields (shortOverview, deepInsight,
 * resources) are never written, keeping storage footprint small.
 */

import type { Node, Edge } from '@xyflow/react';
import { CANVASES, type CanvasNodeData } from '@/data/canvas-data';

// Bump this if the schema ever changes in a breaking way.
const SCHEMA_VERSION = 1;
const KEY_PREFIX = 'ct-canvas-v1-';

// Fields in node data that are large, read-only, and never need persisting.
const OMIT_FROM_DATA = new Set([
  'shortOverview',
  'deepInsight',
  'resources',
  'articleId',
]);

// ─── Internal types ───────────────────────────────────────────────────────────

interface SavedLayout {
  position: { x: number; y: number };
  style?: Record<string, unknown>;
}

interface SavedUserNode {
  id: string;
  type?: string;
  position: { x: number; y: number };
  style?: Record<string, unknown>;
  /** Slim data — only mutable fields like title / content. */
  data: Record<string, unknown>;
}

interface SavedCanvas {
  version: number;
  /** position + style keyed by node id — covers ALL nodes the user touched */
  layouts: Record<string, SavedLayout>;
  /** full node info for user-created cards (ids starting with "card-user-") */
  userNodes: SavedUserNode[];
  /** entire edge list (defaults + user-drawn) */
  edges: Edge[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function storageKey(canvasId: string) {
  return KEY_PREFIX + canvasId;
}

function read(canvasId: string): SavedCanvas | null {
  try {
    const raw = localStorage.getItem(storageKey(canvasId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedCanvas;
    if (parsed.version !== SCHEMA_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function slimData(data: unknown): Record<string, unknown> {
  if (!data || typeof data !== 'object') return {};
  return Object.fromEntries(
    Object.entries(data as Record<string, unknown>).filter(
      ([k]) => !OMIT_FROM_DATA.has(k),
    ),
  );
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns the initial node array for a canvas, merging any persisted layout
 * (positions / styles / user cards) over the static canvas-data defaults.
 */
export function getInitialNodes(canvasId: string): Node<CanvasNodeData>[] {
  const defaults = (CANVASES[canvasId]?.nodes ?? []) as Node<CanvasNodeData>[];
  const saved = read(canvasId);
  if (!saved) return defaults;

  const defaultIds = new Set(defaults.map((n) => n.id));

  // Apply saved positions + styles to default nodes.
  const result: Node<CanvasNodeData>[] = defaults.map((node) => {
    const layout = saved.layouts[node.id];
    if (!layout) return node;
    return {
      ...node,
      position: layout.position,
      ...(layout.style
        ? { style: { ...node.style, ...layout.style } }
        : {}),
    };
  });

  // Restore user-created cards that are not part of the static data.
  for (const un of saved.userNodes) {
    if (!defaultIds.has(un.id)) {
      result.push({
        id: un.id,
        type: un.type ?? 'card',
        position: un.position,
        ...(un.style ? { style: un.style } : {}),
        data: un.data as unknown as CanvasNodeData,
      });
    }
  }

  return result;
}

/**
 * Returns the initial edge array for a canvas. If a saved state exists we use
 * that (so user-drawn and user-deleted edges are respected); otherwise fall
 * back to static defaults.
 */
export function getInitialEdges(canvasId: string): Edge[] {
  const saved = read(canvasId);
  return saved ? saved.edges : (CANVASES[canvasId]?.edges ?? []);
}

/**
 * Serialises current canvas state to localStorage.
 * Call this debounced — not on every React render.
 */
export function saveCanvas(
  canvasId: string,
  nodes: Node<CanvasNodeData>[],
  edges: Edge[],
) {
  const layouts: Record<string, SavedLayout> = {};
  const userNodes: SavedUserNode[] = [];

  for (const node of nodes) {
    const layout: SavedLayout = { position: node.position };
    if (node.style && Object.keys(node.style).length > 0) {
      layout.style = node.style as Record<string, unknown>;
    }
    layouts[node.id] = layout;

    if (node.id.startsWith('card-user-')) {
      userNodes.push({
        id: node.id,
        type: node.type,
        position: node.position,
        ...(node.style ? { style: node.style as Record<string, unknown> } : {}),
        // Strip large read-only fields even for user cards (none expected,
        // but defensive).
        data: slimData(node.data),
      });
    }
  }

  const payload: SavedCanvas = {
    version: SCHEMA_VERSION,
    layouts,
    userNodes,
    edges,
  };

  try {
    localStorage.setItem(storageKey(canvasId), JSON.stringify(payload));
  } catch (e) {
    // Quota exceeded or private browsing — degrade gracefully.
    console.warn('[CryptoTree] canvas persist failed:', e);
  }
}

/**
 * Wipes the saved state for a single canvas so it resets to static defaults.
 */
export function resetCanvas(canvasId: string) {
  localStorage.removeItem(storageKey(canvasId));
}
