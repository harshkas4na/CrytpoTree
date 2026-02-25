'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import { CANVASES, CATEGORY_LABELS, type CanvasNodeData } from '@/data/canvas-data';

// ─── Search index (built once at module load) ─────────────────────────────────

interface IndexEntry {
  nodeId: string;
  canvasId: string;
  canvasTitle: string;
  data: CanvasNodeData;
  // Pre-lowercased strings for fast matching
  _title: string;
  _token: string;
  _desc: string;
  _content: string;
  _items: string;
  _overview: string;
}

const INDEX: IndexEntry[] = [];

for (const canvas of Object.values(CANVASES)) {
  for (const node of canvas.nodes) {
    const d = node.data as CanvasNodeData;
    const pd = d as { description?: string; tokenSymbol?: string };
    const cd = d as { content?: string; subtitle?: string; items?: string[] };
    INDEX.push({
      nodeId: node.id,
      canvasId: canvas.id,
      canvasTitle: canvas.title,
      data: d,
      _title:    (d.title        ?? '').toLowerCase(),
      _token:    (pd.tokenSymbol ?? '').toLowerCase(),
      _desc:     (pd.description ?? cd.subtitle ?? '').toLowerCase(),
      _content:  (cd.content     ?? '').toLowerCase(),
      _items:    (cd.items       ?? []).join(' ').toLowerCase(),
      _overview: (d.shortOverview ?? '').toLowerCase(),
    });
  }
}

// ─── Matching ─────────────────────────────────────────────────────────────────

interface SearchResult extends IndexEntry {
  score: number; // lower = better
}

function search(rawQuery: string): SearchResult[] {
  const q = rawQuery.toLowerCase().trim();
  if (!q) return [];

  const out: SearchResult[] = [];
  for (const entry of INDEX) {
    let score: number;
    if (entry._title === q)              score = 0;  // exact title
    else if (entry._token === q)         score = 1;  // exact token symbol
    else if (entry._title.startsWith(q)) score = 2;  // title prefix
    else if (entry._title.includes(q))   score = 3;  // title contains
    else if (entry._token.includes(q))   score = 4;  // token contains
    else if (entry._desc.includes(q))    score = 5;  // description
    else if (entry._content.includes(q)) score = 6;  // card content
    else if (entry._items.includes(q))   score = 7;  // bullet items
    else if (entry._overview.includes(q))score = 8;  // overview
    else continue;
    out.push({ ...entry, score });
  }

  return out.sort((a, b) => a.score - b.score || a._title.localeCompare(b._title)).slice(0, 24);
}

// Group flat results by canvas while preserving sort order.
function groupByCanvas(results: SearchResult[]) {
  const order: string[] = [];
  const groups: Record<string, { title: string; items: SearchResult[] }> = {};
  for (const r of results) {
    if (!groups[r.canvasId]) {
      order.push(r.canvasId);
      groups[r.canvasId] = { title: r.canvasTitle, items: [] };
    }
    groups[r.canvasId].items.push(r);
  }
  return order.map((id) => groups[id]);
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SearchPalette({
  onClose,
  onSelect,
}: {
  onClose: () => void;
  onSelect: (nodeId: string, canvasId: string, data: CanvasNodeData) => void;
}) {
  const [query, setQuery]               = useState('');
  const [activeIdx, setActiveIdx]       = useState(0);
  const inputRef                        = useRef<HTMLInputElement>(null);
  const listRef                         = useRef<HTMLDivElement>(null);

  const results = useMemo(() => search(query), [query]);
  const groups  = useMemo(() => groupByCanvas(results), [results]);

  // Focus input on open
  useEffect(() => { inputRef.current?.focus(); }, []);

  // Reset active index when results change
  useEffect(() => { setActiveIdx(0); }, [query]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>('[data-active="true"]');
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const r = results[activeIdx];
        if (r) onSelect(r.nodeId, r.canvasId, r.data);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [results, activeIdx, onSelect, onClose]);

  // Flat index counter for keyboard active state
  let flatIdx = 0;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[14vh] bg-black/55 backdrop-blur-[2px]"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-[560px] mx-4 bg-[#1c1c1c] border border-[#333] rounded-2xl shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* ── Input row ── */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#272727]">
          <Search className="w-[15px] h-[15px] text-[#505050] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search nodes, chains, protocols…"
            className="flex-1 bg-transparent text-[#e4e4e4] text-[14px] outline-none placeholder:text-[#3e3e3e]"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-[#4a4a4a] hover:text-[#888] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="text-[10px] text-[#3a3a3a] border border-[#2e2e2e] rounded px-1.5 py-0.5 select-none">
              esc
            </kbd>
          )}
        </div>

        {/* ── Results ── */}
        <div ref={listRef} className="max-h-[340px] overflow-y-auto overscroll-contain">
          {!query && (
            <p className="px-4 py-10 text-center text-[12px] text-[#3a3a3a] select-none">
              Search across {INDEX.length} nodes in {Object.keys(CANVASES).length} canvases
            </p>
          )}

          {query && results.length === 0 && (
            <p className="px-4 py-10 text-center text-[12px] text-[#3a3a3a] select-none">
              No results for <span className="text-[#555]">"{query}"</span>
            </p>
          )}

          {groups.map((group) => (
            <div key={group.title}>
              {/* Canvas group header */}
              <div className="px-4 pt-3 pb-1">
                <span className="text-[10px] text-[#3a3a3a] font-medium tracking-widest uppercase select-none">
                  {group.title}
                </span>
              </div>

              {group.items.map((result) => {
                const isActive = flatIdx === activeIdx;
                const currentFlatIdx = flatIdx++;
                const d = result.data;
                const pd = d as { description?: string; tokenSymbol?: string; emoji?: string };
                const cd = d as { content?: string; subtitle?: string };
                const snippet = pd.description ?? cd.subtitle ?? cd.content ?? d.shortOverview ?? '';
                const badge   = d.category ? CATEGORY_LABELS[d.category] : d.type === 'page' ? 'Chain' : 'Note';

                return (
                  <button
                    key={result.nodeId}
                    data-active={isActive ? 'true' : undefined}
                    onClick={() => onSelect(result.nodeId, result.canvasId, result.data)}
                    onMouseEnter={() => setActiveIdx(currentFlatIdx)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      isActive ? 'bg-[#252525]' : 'hover:bg-[#212121]'
                    }`}
                  >
                    {/* Accent stripe */}
                    <div
                      className="w-[3px] h-8 rounded-full shrink-0"
                      style={{ background: d.accentColor ?? '#444' }}
                    />

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 min-w-0">
                        <span className="text-[#dedede] text-[13px] font-medium truncate">
                          {pd.emoji ? `${pd.emoji} ` : ''}{d.title}
                        </span>
                        {pd.tokenSymbol && (
                          <span className="text-[#484848] text-[11px] font-mono shrink-0">
                            {pd.tokenSymbol}
                          </span>
                        )}
                      </div>
                      {snippet && (
                        <p className="text-[#4a4a4a] text-[11px] truncate mt-0.5 leading-snug">
                          {snippet}
                        </p>
                      )}
                    </div>

                    {/* Right side: category + arrow */}
                    <div className="shrink-0 flex items-center gap-1.5">
                      <span className="text-[#363636] text-[10px] hidden sm:block">{badge}</span>
                      {isActive && <ArrowRight className="w-3 h-3 text-[#555]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        {results.length > 0 && (
          <div className="px-4 py-2 border-t border-[#222] flex items-center gap-4 text-[10px] text-[#333] select-none">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>esc close</span>
            <span className="ml-auto">{results.length} result{results.length !== 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
}
