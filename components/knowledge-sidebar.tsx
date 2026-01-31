'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CryptoNodeData, categoryLabels } from '@/data/crypto-data';

interface KnowledgeSidebarProps {
  node: CryptoNodeData | null;
  onClose: () => void;
}

export function KnowledgeSidebar({ node, onClose }: KnowledgeSidebarProps) {
  const [isLearned, setIsLearned] = useState(() => {
    if (typeof window === 'undefined' || !node) return false;
    return localStorage.getItem(`learned-${node.id}`) === 'true';
  });

  const handleMarkAsLearned = () => {
    if (node) {
      const newState = !isLearned;
      setIsLearned(newState);
      localStorage.setItem(`learned-${node.id}`, newState ? 'true' : 'false');
    }
  };

  return (
    <AnimatePresence>
      {node && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-screen w-96 bg-slate-900 border-l border-slate-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-700 flex items-start justify-between">
              <div className="flex-1">
                <div className="inline-block px-2 py-1 rounded text-xs font-bold tracking-wider mb-3 bg-blue-500/20 text-blue-400">
                  {categoryLabels[node.category]}
                </div>
                <h2 className="text-2xl font-bold text-white">{node.label}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Status */}
                <div className="flex items-center gap-3">
                  {isLearned ? (
                    <>
                      <CheckCircle2 size={20} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Skill Learned</span>
                    </>
                  ) : (
                    <>
                      <Lock size={20} className="text-slate-400" />
                      <span className="text-slate-400 font-medium">Locked</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-3">Description</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {node.description}
                  </p>
                </div>

                {/* Dependencies */}
                {node.dependencies.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">
                      Prerequisites
                    </h3>
                    <div className="space-y-2">
                      {node.dependencies.map((depId) => (
                        <div
                          key={depId}
                          className="text-xs bg-slate-800 rounded px-3 py-2 text-slate-300"
                        >
                          {depId}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Area */}
            <div className="p-6 border-t border-slate-700 space-y-3">
              <Button
                onClick={handleMarkAsLearned}
                className={`w-full transition-all ${isLearned
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
              >
                {isLearned ? 'Mark as Unlocked' : 'Mark as Learned'}
              </Button>

              <a
                href={`https://github.com/search?q=${node.label}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <Github size={16} className="mr-2" />
                  Edit on GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
