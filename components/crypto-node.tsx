'use client';

import { Handle, Position, useReactFlow } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2 } from 'lucide-react';
import { CryptoNodeData, categoryColors, categoryLabels } from '@/data/crypto-data';

interface CryptoNodeProps {
  data: CryptoNodeData & {
    selected?: boolean;
    isHovered?: boolean;
    isDimmed?: boolean;
  };
  selected?: boolean;
  isHovered?: boolean;
  isDimmed?: boolean;
}

export function CryptoNode({ data, selected, isHovered, isDimmed }: CryptoNodeProps) {
  const nodeSelected = selected || data.selected || false;
  const nodeDimmed = isDimmed || data.isDimmed || false;
  const { setCenter } = useReactFlow();
  const color = categoryColors[data.category];

  const handleNodeClick = () => {
    setCenter(0, 0, { zoom: 1, duration: 600 });
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: nodeDimmed ? 0.3 : 1 }}
      transition={{ duration: 0.3 }}
      onClick={handleNodeClick}
      className="relative"
    >
      <Handle type="target" position={Position.Top} />

      <motion.div
        whileHover={!nodeDimmed ? { scale: 1.05 } : {}}
        className={`
          relative px-4 py-3 rounded-lg border-2 cursor-pointer
          transition-all duration-200
          ${nodeSelected
            ? 'shadow-lg ring-2 ring-offset-2 ring-offset-slate-900'
            : ''
          }
        `}
        style={{
          borderColor: color,
          backgroundColor: `${color}15`,
          boxShadow: nodeSelected ? `0 0 20px ${color}80` : 'none',
        }}
      >
        {/* Category Badge */}
        <div
          className="inline-block px-2 py-1 rounded text-xs font-bold tracking-wider mb-2"
          style={{
            backgroundColor: `${color}30`,
            color: color,
          }}
        >
          {categoryLabels[data.category]}
        </div>

        {/* Title */}
        <div className="font-bold text-sm text-white mb-2 truncate w-40">
          {data.label}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          {localStorage?.getItem(`learned-${data.id}`) === 'true' ? (
            <>
              <CheckCircle2 size={16} style={{ color: '#10b981' }} />
              <span className="text-xs text-emerald-400">Learned</span>
            </>
          ) : (
            <>
              <Lock size={16} style={{ color: '#94a3b8' }} />
              <span className="text-xs text-slate-400">Locked</span>
            </>
          )}
        </div>
      </motion.div>

      <Handle type="source" position={Position.Bottom} />
    </motion.div>
  );
}
