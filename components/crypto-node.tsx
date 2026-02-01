'use client';

import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2 } from 'lucide-react';
import { CryptoNodeData, categoryColors, categoryLabels } from '@/data/crypto-data';
import { useEffect, useState } from 'react';

interface CryptoNodeProps {
  data: CryptoNodeData & {
    selected?: boolean;
    focused?: boolean;
    isHovered?: boolean;
    isDimmed?: boolean;
  };
  selected?: boolean;
}

export function CryptoNode({ data }: CryptoNodeProps) {
  const nodeSelected = data.selected || false;
  const nodeFocused = data.focused || false;
  const nodeDimmed = data.isDimmed || false;
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
    <div
      className="relative"
      style={{
        transform: nodeFocused ? 'scale(1.05)' : 'scale(1)',
        opacity: nodeDimmed ? 0.25 : 1,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
      }}
    >
      {/* Target Handle (Top) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-slate-600 !border-2 !border-slate-500"
      />

      {/* Main Card */}
      <div
        className={`
          relative px-5 py-4 rounded-xl cursor-pointer
          transition-all duration-200
          min-w-[200px] max-w-[220px]
          ${nodeSelected || nodeFocused
            ? 'shadow-xl ring-2 ring-offset-2 ring-offset-slate-900'
            : 'shadow-lg hover:shadow-xl'
          }
        `}
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: nodeSelected || nodeFocused ? color : `${color}50`,
          boxShadow: nodeSelected || nodeFocused
            ? `0 0 20px ${color}40`
            : `0 4px 12px rgba(0,0,0,0.3)`,
          // @ts-ignore - CSS variable for ring color
          '--tw-ring-color': color,
        }}
      >
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-2">
          <div
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${color}30`,
              color: color,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {categoryLabels[data.category]}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-white mb-2 leading-tight">
          {data.label}
        </h3>

        {/* Status Indicator */}
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
      </div>

      {/* Source Handle (Bottom) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-slate-600 !border-2 !border-slate-500"
      />
    </div>
  );
}
