'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CryptoNodeData, categoryColors, categoryLabels } from '@/data/crypto-data';
import { Trophy } from 'lucide-react';

interface ProgressBarProps {
  nodes: CryptoNodeData[];
}

type Category = CryptoNodeData['category'];

export function ProgressBar({ nodes }: ProgressBarProps) {
  const [learnedCount, setLearnedCount] = useState(0);
  const [categoryProgress, setCategoryProgress] = useState<Record<Category, { total: number; learned: number }>>({} as any);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      if (typeof window === 'undefined') return;

      let count = 0;
      const catProgress: Record<Category, { total: number; learned: number }> = {} as any;

      nodes.forEach((node) => {
        // Initialize category if needed
        if (!catProgress[node.category]) {
          catProgress[node.category] = { total: 0, learned: 0 };
        }
        catProgress[node.category].total++;

        // Check if learned
        if (localStorage.getItem(`learned-${node.id}`) === 'true') {
          count++;
          catProgress[node.category].learned++;
        }
      });

      setLearnedCount(count);
      setCategoryProgress(catProgress);
    };

    updateProgress();

    // Listen for storage changes
    window.addEventListener('storage', updateProgress);
    window.addEventListener('learned-updated', updateProgress);

    return () => {
      window.removeEventListener('storage', updateProgress);
      window.removeEventListener('learned-updated', updateProgress);
    };
  }, [nodes]);

  const totalSkills = nodes.length;
  const percentage = Math.round((learnedCount / totalSkills) * 100);

  const categories: Category[] = ['core', 'chain-group', 'chain', 'infra', 'primitive', 'player'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Main progress bar */}
      <div className="w-full h-1.5 bg-slate-800/80 backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)',
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-1/3"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="px-6 py-3 flex items-center justify-between bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="flex items-center gap-4">
          {/* Trophy icon for gamification */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center"
          >
            <Trophy size={16} className="text-amber-400" />
          </motion.div>

          {/* Progress text */}
          <div className="text-sm text-slate-300">
            <span className="font-bold text-white">{learnedCount}</span>
            {' '}of{' '}
            <span className="font-bold text-white">{totalSkills}</span>
            {' '}skills mastered
          </div>
        </div>

        {/* Percentage */}
        <motion.div
          className="text-xl font-bold"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {percentage}%
        </motion.div>
      </div>

      {/* Category breakdown (shown on hover) */}
      <motion.div
        initial={false}
        animate={{
          height: showDetails ? 'auto' : 0,
          opacity: showDetails ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
      >
        <div className="px-6 py-4 flex items-center gap-6">
          {categories.map((cat) => {
            const stats = categoryProgress[cat] || { total: 0, learned: 0 };
            const catPercentage = stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0;
            const color = categoryColors[cat];

            return (
              <div key={cat} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-slate-400">{categoryLabels[cat]}</span>
                <span className="text-xs font-medium" style={{ color }}>
                  {catPercentage}%
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
