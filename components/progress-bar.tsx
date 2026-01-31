'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CryptoNodeData } from '@/data/crypto-data';

interface ProgressBarProps {
  nodes: CryptoNodeData[];
}

export function ProgressBar({ nodes }: ProgressBarProps) {
  const [learnedCount, setLearnedCount] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return nodes.filter((node) => {
      return localStorage.getItem(`learned-${node.id}`) === 'true';
    }).length;
  });

  useEffect(() => {

    // Listen for storage changes
    const handleStorageChange = () => {
      const newCount = nodes.filter((node) => {
        return localStorage.getItem(`learned-${node.id}`) === 'true';
      }).length;
      setLearnedCount(newCount);
    };

    window.addEventListener('storage', handleStorageChange);
    // Also listen for custom events from sidebar
    window.addEventListener('learned-updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('learned-updated', handleStorageChange);
    };
  }, [nodes]);

  const totalSkills = nodes.length;
  const percentage = Math.round((learnedCount / totalSkills) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700"
    >
      <div className="w-full h-1 bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
        />
      </div>

      <div className="px-6 py-3 flex items-center justify-between">
        <div className="text-sm text-slate-300">
          <span className="font-bold text-white">{learnedCount}</span>
          {' '}
          of
          {' '}
          <span className="font-bold text-white">{totalSkills}</span>
          {' '}
          skills learned
        </div>
        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
          {percentage}%
        </div>
      </div>
    </motion.div>
  );
}
