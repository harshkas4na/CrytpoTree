'use client';

import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
} from '@/components/ui/command';
import { CryptoNodeData, categoryLabels, categoryColors } from '@/data/crypto-data';
import { Search, CheckCircle2, Lock } from 'lucide-react';
import { useNavigation } from './navigation-context';

interface CommandPaletteProps {
  nodes: CryptoNodeData[];
}

export function CommandPalette({ nodes }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const { focusNode, selectNode } = useNavigation();

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
    const node = nodes.find((n) => n.id === nodeId);

    if (node) {
      // Focus the node (this triggers camera fly-to via navigation context)
      focusNode(nodeId);
      // Also select it to open the sidebar
      selectNode(node);
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

  // Check if a node is learned
  const isLearned = (nodeId: string) => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(`learned-${nodeId}`) === 'true';
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-600/50 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-700/90 transition-all shadow-xl hover:shadow-2xl group"
      >
        <Search size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
        <span className="text-sm font-medium">Search the crypto universe...</span>
        <kbd className="ml-3 text-xs bg-slate-900/80 px-2 py-1 rounded-md border border-slate-600 text-slate-400">
          ⌘K
        </kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search skills, protocols, chains..." />
        <CommandList className="max-h-[400px]">
          <CommandEmpty>No skills found. Try a different search.</CommandEmpty>
          {Object.entries(groupedNodes).map(([category, categoryNodes]) => (
            <CommandGroup
              key={category}
              heading={
                <span
                  className="flex items-center gap-2"
                  style={{ color: categoryColors[category as CryptoNodeData['category']] }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: categoryColors[category as CryptoNodeData['category']] }}
                  />
                  {categoryLabels[category as CryptoNodeData['category']]}
                </span>
              }
            >
              {categoryNodes.map((node) => {
                const learned = isLearned(node.id);
                return (
                  <CommandItem
                    key={node.id}
                    value={`${node.id} ${node.label} ${node.description}`}
                    onSelect={() => handleSelect(node.id)}
                    className="flex items-center gap-3 cursor-pointer py-3 px-3 rounded-lg hover:bg-slate-700/50"
                  >
                    {/* Learned Status Icon */}
                    {learned ? (
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Lock size={16} className="text-slate-500 flex-shrink-0" />
                    )}

                    {/* Node Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white truncate">{node.label}</div>
                      <div className="text-xs text-slate-400 truncate">
                        {node.description.substring(0, 60)}...
                      </div>
                    </div>

                    {/* Category indicator */}
                    <div
                      className="px-2 py-0.5 rounded text-xs font-medium flex-shrink-0"
                      style={{
                        backgroundColor: `${categoryColors[node.category]}20`,
                        color: categoryColors[node.category],
                      }}
                    >
                      {categoryLabels[node.category]}
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
