'use client';

import { Handle, Position, type NodeProps } from '@xyflow/react';
import { ArrowUpRight } from 'lucide-react';
import type { PageData } from '@/data/canvas-data';
import { useCanvasNav } from '@/components/canvas-nav-context';
import { CANVASES } from '@/data/canvas-data';

export function CanvasPageNode({ data, selected }: NodeProps) {
  const d = data as unknown as PageData;
  const { navigateTo } = useCanvasNav();
  const hasSubCanvas = !!CANVASES[d.canvasId];

  return (
    <div className="relative">
      {/* Group label */}
      {d.groupLabel && (
        <div className="absolute -top-7 left-0 text-[11px] text-[var(--c-text-4)] font-medium select-none pointer-events-none whitespace-nowrap tracking-wide">
          {d.groupLabel}
        </div>
      )}

      <div
        className={[
          'relative rounded-xl overflow-hidden transition-all duration-100',
          selected
            ? 'shadow-[0_0_0_1.5px_#6366f1,0_8px_32px_rgba(99,102,241,0.15)] bg-[var(--c-card-sel)]'
            : 'bg-[var(--c-card)] border border-[var(--c-border-card)] hover:border-[var(--c-border-hover)] shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
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
          {/* Header row */}
          <div className="flex items-start gap-2.5 mb-3">
            {d.emoji && (
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-bold shrink-0 mt-0.5"
                style={{
                  background: d.accentColor ? `${d.accentColor}20` : 'var(--c-hover)',
                  color: d.accentColor ?? 'var(--c-text)',
                  border: `1px solid ${d.accentColor ? `${d.accentColor}40` : 'var(--c-border-card)'}`,
                }}
              >
                {d.emoji}
              </span>
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-[var(--c-text)] font-semibold text-[14px] leading-tight">
                {d.title}
              </h2>
              {d.tokenSymbol && (
                <span className="text-[11px] text-[var(--c-text-4)] font-mono">{d.tokenSymbol}</span>
              )}
            </div>
          </div>

          {d.description && (
            <p className="text-[var(--c-text-3)] text-[12px] leading-relaxed mb-3">
              {d.description}
            </p>
          )}

          {/* Explore button — primary CTA */}
          {hasSubCanvas && (
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                navigateTo(d.canvasId);
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[12px] font-semibold transition-all duration-150 cursor-pointer"
              style={{
                background: d.accentColor ? `${d.accentColor}18` : 'var(--c-hover)',
                color: d.accentColor ?? 'var(--c-text-3)',
                border: `1px solid ${d.accentColor ? `${d.accentColor}40` : 'var(--c-border-card)'}`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = d.accentColor ? `${d.accentColor}30` : 'var(--c-active)';
                el.style.borderColor = d.accentColor ? `${d.accentColor}60` : 'var(--c-border-hover)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = d.accentColor ? `${d.accentColor}18` : 'var(--c-hover)';
                el.style.borderColor = d.accentColor ? `${d.accentColor}40` : 'var(--c-border-card)';
              }}
            >
              Explore Ecosystem
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      <Handle type="target" position={Position.Top}    className="!w-2.5 !h-2.5 !bg-[var(--c-border-hover)] !border-[var(--c-text-5)] !opacity-0 hover:!opacity-100 !transition-opacity" />
      <Handle type="source" position={Position.Bottom} className="!w-2.5 !h-2.5 !bg-[var(--c-border-hover)] !border-[var(--c-text-5)] !opacity-0 hover:!opacity-100 !transition-opacity" />
      <Handle type="target" position={Position.Left}   className="!w-2.5 !h-2.5 !bg-[var(--c-border-hover)] !border-[var(--c-text-5)] !opacity-0 hover:!opacity-100 !transition-opacity" />
      <Handle type="source" position={Position.Right}  className="!w-2.5 !h-2.5 !bg-[var(--c-border-hover)] !border-[var(--c-text-5)] !opacity-0 hover:!opacity-100 !transition-opacity" />
    </div>
  );
}
