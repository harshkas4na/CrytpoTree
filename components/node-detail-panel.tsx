'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, BookOpen, ChevronDown, ChevronUp, Check, FileText } from 'lucide-react';
import { ARTICLES } from '@/data/articles-data';
import {
  type CanvasNodeData,
  type NodeCategory,
  type Resource,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  CANVASES,
} from '@/data/canvas-data';
import { useCanvasNav } from '@/components/canvas-nav-context';

// Unified read-only view over CardData | PageData without conflicting 'type' discriminant
type NodeView = {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  content?: string;
  items?: string[];
  emoji?: string;
  accentColor?: string;
  tokenSymbol?: string;
  canvasId?: string;
  shortOverview?: string;
  deepInsight?: string;
  category?: NodeCategory;
  resources?: Resource[];
};

interface NodeDetailPanelProps {
  nodeId: string;
  data: CanvasNodeData;
  onClose: () => void;
  onOpenArticle?: () => void;
}

export function NodeDetailPanel({ nodeId, data, onClose, onOpenArticle }: NodeDetailPanelProps) {
  const d = data as unknown as NodeView;
  const { navigateTo } = useCanvasNav();

  const [learned, setLearned] = useState(false);
  const [insightExpanded, setInsightExpanded] = useState(true);
  const [hasEditedArticle, setHasEditedArticle] = useState(false);

  // Stable localStorage key based on node id
  const storageKey = `cryptotree-learned-${nodeId}`;

  useEffect(() => {
    setLearned(localStorage.getItem(storageKey) === 'true');
    setInsightExpanded(true); // reset when switching nodes
    setHasEditedArticle(!!localStorage.getItem(`article-${nodeId}`));
  }, [nodeId, storageKey]);

  const toggleLearned = () => {
    const next = !learned;
    setLearned(next);
    localStorage.setItem(storageKey, String(next));
    window.dispatchEvent(new Event('learned-updated'));
  };

  const accentColor = d.accentColor ?? CATEGORY_COLORS[d.category ?? 'infra'] ?? '#6366f1';
  const categoryLabel = d.category ? CATEGORY_LABELS[d.category] : null;
  const hasSubCanvas = d.type === 'page' && !!d.canvasId && !!CANVASES[d.canvasId];
  const hasArticle = !!ARTICLES[nodeId];

  // The "overview" text — prefer shortOverview, fall back to description or content
  const overview = d.shortOverview ?? d.description ?? d.content;
  // The "deep dive" text
  const deepInsight = d.deepInsight;

  return (
    <motion.div
      initial={{ x: 380, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 380, opacity: 0 }}
      transition={{ type: 'spring', damping: 28, stiffness: 280 }}
      className="absolute top-0 right-0 h-full w-[360px] bg-[#161616] border-l border-[#2c2c2c] z-40 flex flex-col overflow-hidden shadow-[-8px_0_40px_rgba(0,0,0,0.5)]"
    >
      {/* ── Header ── */}
      <div className="flex items-start justify-between p-4 pb-3 border-b border-[#282828] shrink-0 sticky top-0 bg-[#161616] z-10">
        <div className="flex items-center gap-2 flex-wrap">
          {categoryLabel && (
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                background: `${accentColor}1a`,
                color: accentColor,
                border: `1px solid ${accentColor}33`,
              }}
            >
              {categoryLabel}
            </span>
          )}
          {learned && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1a2e1a] text-[#4ade80] border border-[#2d4a2d]">
              Learned
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-[#555] hover:text-[#ccc] transition-colors p-0.5 -mr-0.5 mt-0.5"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto">

        {/* Title block */}
        <div className="px-4 pt-4 pb-3">
          {d.emoji && <span className="text-2xl mb-2 block">{d.emoji}</span>}
          <h2 className="text-[#f2f2f2] text-[18px] font-semibold leading-tight">
            {d.title}
          </h2>
          {(d.subtitle ?? d.tokenSymbol) && (
            <p className="text-[#888] text-[12px] mt-1 font-mono">
              {d.subtitle ?? d.tokenSymbol}
            </p>
          )}
        </div>

        {/* Accent divider */}
        <div className="mx-4 h-px" style={{ background: `${accentColor}33` }} />

        {/* Overview */}
        {overview && (
          <div className="px-4 pt-4">
            <div className="flex items-center gap-1.5 mb-2">
              <BookOpen className="w-3 h-3 text-[#666]" />
              <span className="text-[10px] text-[#666] uppercase tracking-wider font-semibold">Overview</span>
            </div>
            <p className="text-[#cccccc] text-[13px] leading-[1.75]">{overview}</p>
          </div>
        )}

        {/* Deep Insight (collapsible) */}
        {deepInsight && (
          <div className="px-4 pt-4">
            <button
              onClick={() => setInsightExpanded((v) => !v)}
              className="flex items-center justify-between w-full mb-2 group"
            >
              <span className="text-[10px] text-[#666] uppercase tracking-wider font-semibold group-hover:text-[#999] transition-colors">
                Deep Dive
              </span>
              {insightExpanded
                ? <ChevronUp className="w-3 h-3 text-[#555]" />
                : <ChevronDown className="w-3 h-3 text-[#555]" />
              }
            </button>
            <AnimatePresence initial={false}>
              {insightExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-[#b8b8b8] text-[13px] leading-[1.8] pb-1">{deepInsight}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Bullet items (if no deep insight, show items as overview detail) */}
        {d.items && d.items.length > 0 && !deepInsight && (
          <div className="px-4 pt-3">
            <ul className="space-y-1.5">
              {d.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[#b8b8b8]">
                  <span className="text-[#666] mt-0.5 select-none shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resources */}
        {d.resources && d.resources.length > 0 && (
          <div className="px-4 pt-4">
            <div className="text-[10px] text-[#666] uppercase tracking-wider font-semibold mb-2.5">
              Resources
            </div>
            <div className="space-y-1">
              {d.resources.map((r: { label: string; url: string }, i: number) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-[12px] text-[#999] hover:text-[#eee] hover:bg-[#252525] transition-all group"
                >
                  <ExternalLink className="w-3 h-3 shrink-0 text-[#666] group-hover:text-[#aaa] transition-colors" />
                  <span className="truncate">{r.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Open Article button */}
        {hasArticle && onOpenArticle && (
          <div className="px-4 pt-4">
            <button
              onClick={onOpenArticle}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-[13px] font-semibold transition-all bg-[#1e1e2e] text-[#a5b4fc] border border-[#3730a3]/40 hover:bg-[#23234a] hover:border-[#6366f1]/50"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open Article</span>
              {hasEditedArticle && (
                <span className="ml-1 text-[10px] font-bold text-[#818cf8] bg-[#312e81]/50 px-1.5 py-0.5 rounded">
                  ✎ edited
                </span>
              )}
            </button>
          </div>
        )}

        {/* Explore button for page nodes */}
        {hasSubCanvas && (
          <div className="px-4 pt-4">
            <button
              onClick={() => d.canvasId && navigateTo(d.canvasId)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-[13px] font-semibold transition-all"
              style={{
                background: `${accentColor}18`,
                color: accentColor,
                border: `1px solid ${accentColor}33`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = `${accentColor}2e`;
                el.style.borderColor = `${accentColor}55`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = `${accentColor}18`;
                el.style.borderColor = `${accentColor}33`;
              }}
            >
              Open Ecosystem Canvas
            </button>
          </div>
        )}

        {/* Spacer */}
        <div className="h-4" />
      </div>

      {/* ── Footer: Mark as Learned ── */}
      <div className="px-4 py-3 border-t border-[#282828] shrink-0 bg-[#161616]">
        <button
          onClick={toggleLearned}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-[12px] font-semibold transition-all duration-150 ${
            learned
              ? 'bg-[#1a2e1a] text-[#4ade80] border border-[#2d4a2d]'
              : 'bg-[#242424] text-[#888] border border-[#333] hover:border-[#505050] hover:text-[#ccc]'
          }`}
        >
          {learned && <Check className="w-3.5 h-3.5" />}
          {learned ? 'Marked as Learned' : 'Mark as Learned'}
        </button>
      </div>
    </motion.div>
  );
}
