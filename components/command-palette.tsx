'use client';

import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
} from '@/components/ui/command';
import { useReactFlow } from '@xyflow/react';
import { CryptoNodeData, categoryLabels } from '@/data/crypto-data';
import { Search } from 'lucide-react';

interface CommandPaletteProps {
  nodes: CryptoNodeData[];
}

export function CommandPalette({ nodes }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const { setCenter, getNodes } = useReactFlow();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (nodeId: string) => {
    const flowNodes = getNodes();
    const node = flowNodes.find((n) => n.id === nodeId);
    
    if (node) {
      setCenter(node.position.x, node.position.y, {
        zoom: 1.5,
        duration: 600,
      });
    }
    
    setOpen(false);
  };

  const groupedNodes = nodes.reduce(
    (acc, node) => {
      const category = node.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(node);
      return acc;
    },
    {} as Record<CryptoNodeData['category'], CryptoNodeData[]>
  );

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all shadow-lg"
      >
        <Search size={16} />
        <span className="text-sm">Search skills...</span>
        <kbd className="ml-2 text-xs bg-slate-900/50 px-2 py-1 rounded border border-slate-600">
          ⌘K
        </kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search crypto skills..." />
        <CommandList>
          {Object.entries(groupedNodes).map(([category, categoryNodes]) => (
            <CommandGroup
              key={category}
              heading={categoryLabels[category as CryptoNodeData['category']]}
            >
              {categoryNodes.map((node) => (
                <CommandItem
                  key={node.id}
                  value={node.id}
                  onSelect={handleSelect}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: node.learned ? '#10b981' : '#94a3b8',
                    }}
                  />
                  <div>
                    <div className="font-medium">{node.label}</div>
                    <div className="text-xs text-slate-400">
                      {node.description.substring(0, 50)}...
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
