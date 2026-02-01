'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Lock, BookOpen, Link2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CryptoNodeData, categoryLabels, categoryColors, initialNodes } from '@/data/crypto-data';
import { useNavigation } from './navigation-context';

interface KnowledgeSidebarProps {
  node: CryptoNodeData | null;
  onClose: () => void;
}

type TabType = 'overview' | 'details' | 'resources';

export function KnowledgeSidebar({ node, onClose }: KnowledgeSidebarProps) {
  const [isLearned, setIsLearned] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const { focusNode, selectNode } = useNavigation();

  useEffect(() => {
    if (typeof window !== 'undefined' && node) {
      setIsLearned(localStorage.getItem(`learned-${node.id}`) === 'true');
    }
    // Reset tab when node changes
    setActiveTab('overview');
  }, [node]);

  const handleMarkAsLearned = () => {
    if (node) {
      const newState = !isLearned;
      setIsLearned(newState);
      localStorage.setItem(`learned-${node.id}`, newState ? 'true' : 'false');
      // Dispatch event for other components to update
      window.dispatchEvent(new CustomEvent('learned-updated'));
    }
  };

  const handleNavigateToNode = (nodeId: string) => {
    const targetNode = initialNodes.find(n => n.id === nodeId);
    if (targetNode) {
      focusNode(nodeId);
      selectNode(targetNode);
    }
  };

  // Get child nodes (nodes that depend on this one)
  const childNodes = node
    ? initialNodes.filter(n => n.dependencies.includes(node.id))
    : [];

  // Get prerequisite nodes
  const prerequisiteNodes = node
    ? initialNodes.filter(n => node.dependencies.includes(n.id))
    : [];

  const color = node ? categoryColors[node.category] : '#3b82f6';

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={14} /> },
    { id: 'details', label: 'Deep Dive', icon: <Sparkles size={14} /> },
    { id: 'resources', label: 'Resources', icon: <Link2 size={14} /> },
  ];

  return (
    <AnimatePresence>
      {node && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-[420px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div
              className="p-6 border-b border-slate-700/50"
              style={{
                background: `linear-gradient(135deg, ${color}15 0%, transparent 100%)`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${color}20`,
                    color: color,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  {categoryLabels[node.category]}
                </motion.div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold text-white mb-3"
              >
                {node.label}
              </motion.h2>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3"
              >
                {isLearned ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-400">Mastered</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-700/50 border border-slate-600/50">
                    <Lock size={16} className="text-slate-400" />
                    <span className="text-sm font-medium text-slate-400">Not Started</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-700/50 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative ${activeTab === tab.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Description */}
                    <div>
                      <h3 className="text-sm font-semibold text-slate-300 mb-3">Description</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {node.description}
                      </p>
                    </div>

                    {/* Prerequisites */}
                    {prerequisiteNodes.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-slate-300 mb-3">
                          Prerequisites ({prerequisiteNodes.length})
                        </h3>
                        <div className="space-y-2">
                          {prerequisiteNodes.map((prereq) => {
                            const prereqLearned = typeof window !== 'undefined' &&
                              localStorage.getItem(`learned-${prereq.id}`) === 'true';
                            return (
                              <button
                                key={prereq.id}
                                onClick={() => handleNavigateToNode(prereq.id)}
                                className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all group"
                              >
                                {prereqLearned ? (
                                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                                ) : (
                                  <Lock size={16} className="text-slate-500 flex-shrink-0" />
                                )}
                                <span className="text-sm text-slate-300 group-hover:text-white flex-1 text-left">
                                  {prereq.label}
                                </span>
                                <ArrowRight size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* What's Next */}
                    {childNodes.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-slate-300 mb-3">
                          Learn Next ({childNodes.length})
                        </h3>
                        <div className="space-y-2">
                          {childNodes.slice(0, 5).map((child) => {
                            const childColor = categoryColors[child.category];
                            return (
                              <button
                                key={child.id}
                                onClick={() => handleNavigateToNode(child.id)}
                                className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all group"
                              >
                                <span
                                  className="w-2 h-2 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: childColor }}
                                />
                                <span className="text-sm text-slate-300 group-hover:text-white flex-1 text-left truncate">
                                  {child.label}
                                </span>
                                <ArrowRight size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                              </button>
                            );
                          })}
                          {childNodes.length > 5 && (
                            <p className="text-xs text-slate-500 text-center pt-2">
                              +{childNodes.length - 5} more topics
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'details' && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Detailed explanations and deep-dive content for <strong className="text-white">{node.label}</strong> will be added here. This section is designed to provide comprehensive learning material.
                      </p>
                    </div>

                    <div className="text-center py-8">
                      <Sparkles size={32} className="text-slate-600 mx-auto mb-3" />
                      <p className="text-sm text-slate-500">
                        Content coming soon...
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'resources' && (
                  <motion.div
                    key="resources"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(node.label + ' crypto blockchain')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Link2 size={18} className="text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          Search Google
                        </p>
                        <p className="text-xs text-slate-500">Find articles and tutorials</p>
                      </div>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400" />
                    </a>

                    <a
                      href={`https://github.com/search?q=${encodeURIComponent(node.label)}&type=repositories`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                        <Github size={18} className="text-slate-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          Explore on GitHub
                        </p>
                        <p className="text-xs text-slate-500">Find open source projects</p>
                      </div>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400" />
                    </a>

                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(node.label + ' explained crypto')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          Watch on YouTube
                        </p>
                        <p className="text-xs text-slate-500">Video explanations</p>
                      </div>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Area */}
            <div className="p-6 border-t border-slate-700/50 space-y-3">
              <Button
                onClick={handleMarkAsLearned}
                className={`w-full py-5 text-sm font-semibold transition-all ${isLearned
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
              >
                {isLearned ? (
                  <>
                    <CheckCircle2 size={18} className="mr-2" />
                    Unmark as Learned
                  </>
                ) : (
                  <>
                    <Sparkles size={18} className="mr-2" />
                    Mark as Learned
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
