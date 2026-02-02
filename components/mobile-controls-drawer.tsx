'use client';

import { useState, type ComponentType } from 'react';
import { useReactFlow } from '@xyflow/react';
import {
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Home,
  Keyboard,
  LayoutGrid,
  Maximize2,
  Search,
  SlidersHorizontal,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useNavigation } from './navigation-context';

type ActionButtonProps = {
  label: string;
  onClick: () => void;
  icon: ComponentType<{ size?: number; className?: string }>;
  active?: boolean;
  disabled?: boolean;
};

function ActionButton({ label, onClick, icon: Icon, active, disabled }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center gap-2 w-full rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
        "bg-slate-800/80 border-slate-700/60 text-slate-200 hover:bg-slate-700/80",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        active && "bg-blue-600/90 border-blue-500/70 text-white hover:bg-blue-600"
      )}
    >
      <Icon size={16} />
      <span className="truncate">{label}</span>
    </button>
  );
}

export function MobileControlsDrawer() {
  const [open, setOpen] = useState(false);
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { focusDepth, setFocusDepth, toggleShowAllMode, showAllMode, goToRoot } = useNavigation();

  const dispatchEvent = (name: string) => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new Event(name));
  };

  const handleFitView = () => {
    const padding = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.35 : 0.15;
    fitView({ padding, duration: 500 });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden fixed bottom-4 left-4 z-30 flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-slate-200 shadow-lg"
      >
        <SlidersHorizontal size={16} />
        Controls
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="sm:hidden fixed bottom-0 left-0 right-0 top-auto translate-x-0 translate-y-0 max-w-none rounded-b-none rounded-t-2xl border-t border-slate-700/60 bg-slate-900/95 p-4 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">Controls</div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border border-slate-700/60 bg-slate-800/80 px-2 py-1 text-xs text-slate-300"
            >
              Close
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Explore
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ActionButton
                  label="Search"
                  icon={Search}
                  onClick={() => {
                    dispatchEvent('open-command-palette');
                    setOpen(false);
                  }}
                />
                <ActionButton
                  label="Categories"
                  icon={LayoutGrid}
                  onClick={() => {
                    dispatchEvent('toggle-category-nav');
                    setOpen(false);
                  }}
                />
                <ActionButton
                  label="Shortcuts"
                  icon={Keyboard}
                  onClick={() => {
                    dispatchEvent('open-keyboard-help');
                    setOpen(false);
                  }}
                />
                <ActionButton
                  label="Root"
                  icon={Home}
                  onClick={goToRoot}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Focus
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ActionButton
                  label={showAllMode ? 'Show All' : 'Focus'}
                  icon={showAllMode ? Eye : EyeOff}
                  onClick={toggleShowAllMode}
                  active={showAllMode}
                />
                <ActionButton
                  label="Fit View"
                  icon={Maximize2}
                  onClick={handleFitView}
                />
                <ActionButton
                  label="Depth -"
                  icon={ChevronDown}
                  onClick={() => setFocusDepth(focusDepth - 1)}
                  disabled={focusDepth <= 1}
                />
                <ActionButton
                  label="Depth +"
                  icon={ChevronUp}
                  onClick={() => setFocusDepth(focusDepth + 1)}
                  disabled={focusDepth >= 3}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Zoom
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ActionButton
                  label="Zoom In"
                  icon={ZoomIn}
                  onClick={() => zoomIn({ duration: 200 })}
                />
                <ActionButton
                  label="Zoom Out"
                  icon={ZoomOut}
                  onClick={() => zoomOut({ duration: 200 })}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
