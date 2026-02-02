'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Lock, BookOpen, Link2, ArrowRight, Sparkles, Lightbulb, Layers3, Scale } from 'lucide-react';
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

  const getDeepDiveText = () => {
    if (!node) return '';
    const fallback = [node.shortOverview, node.description].filter(Boolean).join(' ');
    return (node.deepInsight || fallback).trim();
  };

  const splitSentences = (text: string) => {
    const cleaned = text.replace(/\s+/g, ' ').trim();
    const matches = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
    return matches.map((sentence) => sentence.trim()).filter(Boolean);
  };

  const pickSentence = (sentences: string[], matcher: RegExp) => {
    return sentences.find((sentence) => matcher.test(sentence)) || '';
  };

  const deepDiveText = getDeepDiveText();
  const deepDiveSentences = splitSentences(deepDiveText);
  const coreIdea = deepDiveSentences[0] || deepDiveText;
  const howItWorks = deepDiveSentences[1] || '';
  const whyItMatters = deepDiveSentences[2] || pickSentence(deepDiveSentences, /why|because|so that|enable|allows?/i);
  const tradeoffs = pickSentence(deepDiveSentences, /but|however|trade-?off|downside|risk|cost|expensive|limitations?/i);
  const examples = pickSentence(deepDiveSentences, /for example|e\.g\.|like|such as|in practice/i);
  const takeaways = deepDiveSentences.slice(0, 3);

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
            className="fixed right-0 top-0 h-[100dvh] sm:h-screen w-full sm:w-[420px] md:w-[460px] max-w-[100vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div
              className="p-4 sm:p-6 border-b border-slate-700/50"
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
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                >
                  {node.label}
                </motion.h2>

              {node.shortOverview && (
                <p className="text-sm text-slate-300 leading-relaxed">
                  {node.shortOverview}
                </p>
              )}

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
            <div className="flex border-b border-slate-700/50 px-3 sm:px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-3 text-sm font-medium transition-all relative ${activeTab === tab.id
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
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Summary */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <h3 className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                        Quick Summary
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {node.description}
                      </p>
                      {whyItMatters && (
                        <div className="mt-4 flex items-start gap-3 text-sm text-slate-400">
                          <Lightbulb size={16} className="text-amber-400 mt-0.5" />
                          <p className="leading-relaxed">{whyItMatters}</p>
                        </div>
                      )}
                    </div>

                    {/* Key Takeaways */}
                    {takeaways.length > 0 && (
                      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                        <h3 className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                          Key Takeaways
                        </h3>
                        <div className="space-y-2">
                          {takeaways.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" />
                              <p className="leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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
                    <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wide mb-3">
                        <Layers3 size={14} className="text-blue-400" />
                        Core Idea
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {coreIdea}
                      </p>
                    </div>

                    {howItWorks && (
                      <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wide mb-3">
                          <Sparkles size={14} className="text-indigo-300" />
                          How It Works
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{howItWorks}</p>
                      </div>
                    )}

                    {tradeoffs && (
                      <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wide mb-3">
                          <Scale size={14} className="text-amber-400" />
                          Tradeoffs
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{tradeoffs}</p>
                      </div>
                    )}

                    {examples && (
                      <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wide mb-3">
                          <BookOpen size={14} className="text-emerald-400" />
                          In Practice
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{examples}</p>
                      </div>
                    )}

                    {deepDiveText && (
                      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/50">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wide mb-3">
                          <Sparkles size={14} className="text-blue-300" />
                          Full Deep Dive
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                          {deepDiveText}
                        </p>
                      </div>
                    )}
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
                      href={`https://x.com/search?q=${encodeURIComponent(node.label + ' crypto')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-slate-200" viewBox="0 0 1200 1227" fill="currentColor">
                          <path d="M714.163 519.284 1160.89 0H1056.55L668.734 450.887 363.748 0H0l468.492 681.821L0 1226.37h104.341l411.164-478.039 328.039 478.039H1200L714.137 519.284h.026ZM568.138 687.828l-47.846-68.538-380.06-544.79h165.58l306.186 438.274 47.846 68.538 398.892 570.886h-165.58L568.138 687.854v-.026Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          Search on X
                        </p>
                        <p className="text-xs text-slate-500">Live conversations and threads</p>
                      </div>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400" />
                    </a>

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
            <div className="p-4 sm:p-6 border-t border-slate-700/50 space-y-3">
              <Button
                onClick={handleMarkAsLearned}
                className={`w-full py-4 sm:py-5 text-sm font-semibold transition-all ${isLearned
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
