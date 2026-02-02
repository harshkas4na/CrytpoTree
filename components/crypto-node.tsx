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
  const nodeFocused = data.focused || false;
  const nodeDimmed = data.isDimmed || false;
  const hasHiddenChildren = data.hasHiddenChildren || false;
  const childCount = data.childCount || 0;
  const color = categoryColors[data.category];

  const [isLearned, setIsLearned] = useState(false);

  // Check learned status on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLearned(localStorage.getItem(`learned-${data.id}`) === 'true');
    }

    const handleUpdate = () => {
      if (typeof window !== 'undefined') {
        setIsLearned(localStorage.getItem(`learned-${data.id}`) === 'true');
      }
    };

    window.addEventListener('learned-updated', handleUpdate);
    return () => window.removeEventListener('learned-updated', handleUpdate);
  }, [data.id]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: nodeDimmed ? 0.25 : 1,
        scale: nodeFocused ? 1.05 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Target Handle (Top) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-slate-600 !border-2 !border-slate-500"
      />

      {/* Main Card - More Compact */}
      <motion.div
        whileHover={{ y: -1, scale: 1.01 }}
        transition={{ duration: 0.15 }}
        className={`
          relative px-3 py-2.5 rounded-lg cursor-pointer
          transition-all duration-150
          min-w-[160px] max-w-[180px]
          backdrop-blur-md
          ${nodeSelected || nodeFocused
            ? 'shadow-lg ring-1 ring-offset-1 ring-offset-slate-900'
            : 'shadow-md hover:shadow-lg'
          }
        `}
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}08 100%)`,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: nodeSelected || nodeFocused ? color : `${color}40`,
          boxShadow: nodeSelected || nodeFocused
            ? `0 0 30px ${color}50, 0 8px 32px rgba(0,0,0,0.4)`
            : `0 4px 20px rgba(0,0,0,0.3)`,
          // @ts-ignore - CSS variable for ring color
          '--tw-ring-color': color,
        }}
      >
        {/* Focused Glow Effect */}
        {nodeFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: `radial-gradient(circle at center, ${color}30 0%, transparent 70%)`,
            }}
          />
        )}

        {/* Category Badge */}
        <div className="flex items-center justify-between mb-2">
          <div
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${color}25`,
              color: color,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {categoryLabels[data.category]}
          </div>

          {/* Child Count Badge */}
          {childCount > 0 && (
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-400">
              <Layers size={10} />
              <span className="text-[10px] font-medium">{childCount}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-white mb-2 leading-tight">
          {data.label}
        </h3>

        {/* Status Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isLearned ? (
              <>
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">Mastered</span>
              </>
            ) : (
              <>
                <Lock size={14} className="text-slate-400" />
                <span className="text-xs text-slate-400">Explore</span>
              </>
            )}
          </div>

          {/* Expand Hint */}
          {hasHiddenChildren && (
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-1 text-blue-400"
            >
              <ChevronDown size={14} />
              <span className="text-[10px] font-medium">More</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Source Handle (Bottom) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-slate-600 !border-2 !border-slate-500"
      />
    </motion.div>
  );
}
