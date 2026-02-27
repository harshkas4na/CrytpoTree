'use client';

import { useEffect, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ContextMenuItemType =
  | {
      type: 'item';
      label: string;
      icon?: React.ReactNode;
      shortcut?: string;
      variant?: 'default' | 'danger';
      disabled?: boolean;
      onClick: () => void;
    }
  | { type: 'separator' };

interface Props {
  x: number;           // viewport px from left (clientX)
  y: number;           // viewport px from top  (clientY)
  items: ContextMenuItemType[];
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

const MENU_W = 192; // px — used for right-edge clamping

export function ContextMenu({ x, y, items, onClose }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Clamp so the menu never overflows the viewport.
  const clampedX = Math.min(x, window.innerWidth  - MENU_W - 8);
  const clampedY = Math.min(y, window.innerHeight - (items.length * 36 + 24) - 8);

  // Escape closes the menu
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // After mount, nudge upward if the menu actually overflows
  useEffect(() => {
    if (!menuRef.current) return;
    const rect = menuRef.current.getBoundingClientRect();
    if (rect.bottom > window.innerHeight - 8) {
      menuRef.current.style.top = `${window.innerHeight - rect.height - 8}px`;
    }
    if (rect.right > window.innerWidth - 8) {
      menuRef.current.style.left = `${window.innerWidth - rect.width - 8}px`;
    }
  }, []);

  return (
    <>
      {/* Invisible full-screen backdrop — catches outside clicks */}
      <div
        className="fixed inset-0 z-[59]"
        onMouseDown={onClose}
        onContextMenu={(e) => { e.preventDefault(); onClose(); }}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        className="fixed z-[60] min-w-[192px] bg-[var(--c-elevated)] border border-[var(--c-border)] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-1.5 overflow-hidden"
        style={{ left: clampedX, top: clampedY }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {items.map((item, i) => {
          if (item.type === 'separator') {
            return <div key={i} className="my-1 mx-2 border-t border-[var(--c-border-subtle)]" />;
          }

          const isDanger = item.variant === 'danger';

          return (
            <button
              key={i}
              disabled={item.disabled}
              onClick={() => { item.onClick(); onClose(); }}
              className={[
                'w-full flex items-center gap-2.5 px-3 py-[7px] text-[12px] text-left transition-colors',
                item.disabled
                  ? 'opacity-30 cursor-not-allowed'
                  : isDanger
                    ? 'text-[#e05555] hover:bg-red-500/10'
                    : 'text-[var(--c-text-2)] hover:bg-[var(--c-active)]',
              ].join(' ')}
            >
              {item.icon && (
                <span className={`shrink-0 [&_svg]:w-3.5 [&_svg]:h-3.5 ${isDanger ? 'text-[#e05555]' : 'text-[var(--c-text-5)]'}`}>
                  {item.icon}
                </span>
              )}
              <span className="flex-1">{item.label}</span>
              {item.shortcut && (
                <kbd className="text-[10px] text-[var(--c-text-7)] font-mono shrink-0">{item.shortcut}</kbd>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
