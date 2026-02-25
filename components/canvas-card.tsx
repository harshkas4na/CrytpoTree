'use client';

import { useState, useCallback, useEffect } from 'react';
import { Handle, Position, NodeResizer, useReactFlow, type NodeProps } from '@xyflow/react';
import type { CardData } from '@/data/canvas-data';

export function CanvasCard({ id, data, selected }: NodeProps) {
  const d = data as unknown as CardData;
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(d.title ?? '');
  const [editContent, setEditContent] = useState(d.content ?? '');
  const { updateNodeData } = useReactFlow();

  const commitEdit = useCallback(() => {
    updateNodeData(id, { title: editTitle, content: editContent });
    setIsEditing(false);
  }, [id, editTitle, editContent, updateNodeData]);

  // Context-menu "Edit" sets data._editMode = true to trigger edit mode remotely.
  useEffect(() => {
    if ((data as unknown as { _editMode?: boolean })._editMode) {
      setEditTitle(d.title ?? '');
      setEditContent(d.content ?? '');
      setIsEditing(true);
      updateNodeData(id, { _editMode: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(data as unknown as { _editMode?: boolean })._editMode]);

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setEditTitle((data as unknown as CardData).title ?? '');
      setEditContent((data as unknown as CardData).content ?? '');
      setIsEditing(true);
    },
    [data],
  );

  return (
    <div className="relative group w-full h-full">
      {/* Resize handle — visible when node is selected */}
      <NodeResizer
        isVisible={selected}
        minWidth={200}
        minHeight={80}
        lineStyle={{ borderColor: '#6366f1', borderWidth: 1 }}
        handleStyle={{ background: '#6366f1', border: 'none', width: 8, height: 8, borderRadius: 2 }}
      />

      {/* Group label above card */}
      {d.groupLabel && (
        <div className="absolute -top-7 left-0 text-[11px] text-[#888] font-medium select-none pointer-events-none whitespace-nowrap tracking-wide">
          {d.groupLabel}
        </div>
      )}

      {/* Card body */}
      <div
        onDoubleClick={handleDoubleClick}
        className={[
          'relative w-full h-full rounded-xl overflow-hidden transition-all duration-100',
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
          {isEditing ? (
            // ── Edit mode ──────────────────────────────────────────────────────
            <div className="nodrag nopan" onMouseDown={(e) => e.stopPropagation()}>
              <input
                autoFocus
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') commitEdit();
                  if (e.key === 'Escape') setIsEditing(false);
                }}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-[#2a2a2a] border border-[#555] rounded px-2 py-1 text-[#f0f0f0] text-[14px] font-semibold mb-2 outline-none focus:border-[#6366f1]"
                placeholder="Title"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsEditing(false);
                }}
                onClick={(e) => e.stopPropagation()}
                rows={4}
                className="w-full bg-[#2a2a2a] border border-[#555] rounded px-2 py-1 text-[#a0a0a0] text-[12px] leading-relaxed outline-none focus:border-[#6366f1] resize-none"
                placeholder="Content…"
              />
              <p className="mt-1 text-[10px] text-[#555] select-none">Enter to save · Esc to cancel</p>
            </div>
          ) : (
            // ── Display mode ───────────────────────────────────────────────────
            <>
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
                <p className="text-[#a0a0a0] text-[12px] leading-relaxed">{d.content}</p>
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
              {selected && (
                <p className="mt-2 text-[10px] text-[#555] select-none">Double-click to edit</p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Handles — visible when parent card is hovered (group-hover) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 group-hover:!opacity-100 !transition-opacity"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 group-hover:!opacity-100 !transition-opacity"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 group-hover:!opacity-100 !transition-opacity"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!w-2.5 !h-2.5 !bg-[#555] !border-[#777] !opacity-0 group-hover:!opacity-100 !transition-opacity"
      />
    </div>
  );
}
