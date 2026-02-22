'use client';

import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, ChevronDown, Layers } from 'lucide-react';
import { CryptoNodeData, categoryColors, categoryLabels } from '@/data/crypto-data';
import { useEffect, useState } from 'react';

interface CryptoNodeProps {
  data: CryptoNodeData & {
    selected?: boolean;
    focused?: boolean;
    isHovered?: boolean;
    isDimmed?: boolean;
    hasHiddenChildren?: boolean;
    childCount?: number;
  };
  selected?: boolean;
}

export function CryptoNode({ data }: CryptoNodeProps) {
  const nodeSelected = data.selected || false;
  const nodeFocused  = data.focused  || false;
  const nodeDimmed   = data.isDimmed || false;
  const hasHiddenChildren = data.hasHiddenChildren || false;
  const childCount   = data.childCount || 0;
  const color        = categoryColors[data.category];

  const [isLearned, setIsLearned] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsLearned(localStorage.getItem(`learned-${data.id}`) === 'true');

    const handleUpdate = () =>
      setIsLearned(localStorage.getItem(`learned-${data.id}`) === 'true');

    window.addEventListener('learned-updated', handleUpdate);
    return () => window.removeEventListener('learned-updated', handleUpdate);
  }, [data.id]);

  const isActive = nodeSelected || nodeFocused;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: nodeDimmed ? 0.2 : 1,
        scale:   nodeFocused ? 1.06 : 1,
      }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Invisible connection handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !w-2 !h-2"
      />

      {/* ── CARD ───────────────────────────────────────────────────────────── */}
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        transition={{ duration: 0.15 }}
        className="relative rounded-xl cursor-pointer overflow-hidden"
        style={{
          width: 190,
          /* Solid near-black base — no more washed-out glass */
          background: isActive
            ? `linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.95) 100%)`
            : `linear-gradient(135deg, rgba(10,15,26,0.96) 0%, rgba(15,23,42,0.93) 100%)`,
          border: `1px solid ${isActive ? color : `${color}55`}`,
          /* Colored left accent bar */
          borderLeft: `3px solid ${color}`,
          boxShadow: isActive
            ? `0 0 28px ${color}55, 0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)`
            : `0 4px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)`,
        }}
      >
        {/* Subtle color wash on the card interior */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            background: `radial-gradient(ellipse at top left, ${color}12 0%, transparent 60%)`,
          }}
        />

        {/* Focused pulse ring */}
        {nodeFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              boxShadow: `inset 0 0 20px ${color}25`,
            }}
          />
        )}

        {/* ── CONTENT ────────────────────────────────────────────────────── */}
        <div className="relative px-3 pt-2.5 pb-2">

          {/* Top row: category badge + child count */}
          <div className="flex items-center justify-between mb-2">
            {/* Category pill */}
            <div
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
              style={{
                background: `${color}22`,
                color: color,
                border: `1px solid ${color}40`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              {categoryLabels[data.category]}
            </div>

            {/* Descendant count */}
            {childCount > 0 && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-700/70 text-slate-300">
                <Layers size={9} />
                <span className="text-[10px] font-semibold">{childCount}</span>
              </div>
            )}
          </div>

          {/* Label — high contrast white, tight leading */}
          <h3 className="font-bold text-[13px] text-white leading-snug mb-1.5 pr-1">
            {data.label}
          </h3>

          {/* Description snippet — one line, muted */}
          <p
            className="text-[10px] leading-tight mb-2 line-clamp-2"
            style={{ color: 'rgba(203,213,225,0.65)' }} // slate-300 at 65%
          >
            {data.description}
          </p>

          {/* Bottom row: learned status + expand hint */}
          <div className="flex items-center justify-between">
            {isLearned ? (
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span className="text-[10px] font-semibold text-emerald-400">Mastered</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Lock size={11} className="text-slate-500" />
                <span className="text-[10px] text-slate-500">Not started</span>
              </div>
            )}

            {hasHiddenChildren && (
              <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-1"
                style={{ color }}
              >
                <ChevronDown size={12} />
                <span className="text-[10px] font-semibold">More</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!opacity-0 !w-2 !h-2"
      />
    </motion.div>
  );
}
