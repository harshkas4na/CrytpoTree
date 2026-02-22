'use client';

import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { CardData } from '@/data/canvas-data';

export function CanvasCard({ data, selected }: NodeProps) {
  const d = data as unknown as CardData;

  return (
    <div className="relative">
      {/* Group label above card */}
      {d.groupLabel && (
        <div className="absolute -top-7 left-0 text-[11px] text-[#888] font-medium select-none pointer-events-none whitespace-nowrap tracking-wide">
          {d.groupLabel}
        </div>
      )}

      {/* Card body */}
      <div
        className={[
          'relative rounded-xl overflow-hidden transition-all duration-100',
          selected
            ? 'shadow-[0_0_0_1.5px_#6366f1,0_8px_32px_rgba(99,102,241,0.15)] bg-[#222222]'
            : 'bg-[#1f1f1f] border border-[#3e3e3e] hover:border-[#565656] shadow-[0_2px_12px_rgba(0,0,0,0.5)]',
        ].join(' ')}
      >
        {/* Accent stripe */}
        {d.accentColor && (
          <div
            className="absolute top-0 left-0 right-0 h-[2.5px]"
            style={{ background: d.accentColor }}
          />
        )}

        <div className="p-4 pt-5">
          {d.title && (
            <h2 className="text-[#f0f0f0] font-semibold text-[14px] leading-snug mb-1">
              {d.title}
            </h2>
          )}
          {d.subtitle && (
            <h3 className="text-[#aaaaaa] font-medium text-[12px] mb-2.5">
              {d.subtitle}
            </h3>
          )}
          {d.content && (
            <p className="text-[#a0a0a0] text-[12px] leading-relaxed">
              {d.content}
            </p>
          )}
          {d.items && d.items.length > 0 && (
            <ul className={`${d.content ? 'mt-3' : ''} space-y-1.5`}>
              {d.items.map((item, i) => (
                <li key={i} className="text-[#a0a0a0] text-[12px] flex items-start gap-2">
                  <span className="text-[#5e5e5e] mt-0.5 select-none shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Invisible handles — shown on hover via CSS */}
      <Handle type="target" position={Position.Top}    className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 hover:!opacity-100 !transition-opacity" />
      <Handle type="source" position={Position.Bottom} className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 hover:!opacity-100 !transition-opacity" />
      <Handle type="target" position={Position.Left}   className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 hover:!opacity-100 !transition-opacity" />
      <Handle type="source" position={Position.Right}  className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 hover:!opacity-100 !transition-opacity" />
    </div>
  );
}
