'use client';

import { motion } from 'framer-motion';
import { categoryColors, categoryLabels, initialNodes, CryptoNodeData } from '@/data/crypto-data';
import { useNavigation } from './navigation-context';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

type Category = CryptoNodeData['category'];

interface CategoryStats {
    total: number;
    learned: number;
}

export function CategoryNav() {
    const { focusNode } = useNavigation();
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia('(max-width: 639px)');
        const handleChange = () => setIsExpanded(!media.matches);

        handleChange();
        if ('addEventListener' in media) {
            media.addEventListener('change', handleChange);
            return () => media.removeEventListener('change', handleChange);
        }
        media.addListener(handleChange);
        return () => media.removeListener(handleChange);
    }, []);

    useEffect(() => {
        const handleToggle = () => setIsExpanded((prev) => !prev);
        window.addEventListener('toggle-category-nav', handleToggle);
        return () => window.removeEventListener('toggle-category-nav', handleToggle);
    }, []);

    // Calculate stats per category
    const categoryStats = initialNodes.reduce((acc, node) => {
        const cat = node.category;
        if (!acc[cat]) {
            acc[cat] = { total: 0, learned: 0 };
        }
        acc[cat].total++;

        if (typeof window !== 'undefined' && localStorage.getItem(`learned-${node.id}`) === 'true') {
            acc[cat].learned++;
        }

        return acc;
    }, {} as Record<Category, CategoryStats>);

    // Get first node of each category for navigation
    const categoryFirstNode: Record<Category, string> = {
        'core': 'root',
        'chain-group': 'blockchain-architecture',
        'chain': 'ethereum-l1',
        'infra': 'infrastructure',
        'primitive': 'defi',
        'player': 'uniswap',
    };

    const categories: Category[] = ['core', 'chain-group', 'chain', 'infra', 'primitive', 'player'];

    const handleCategoryClick = (category: Category) => {
        const nodeId = categoryFirstNode[category];
        if (nodeId) {
            focusNode(nodeId);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed left-3 sm:left-6 top-24 sm:top-32 z-30"
        >
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 mb-2 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all shadow-lg text-xs sm:text-sm"
            >
                <span className="font-medium">Categories</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </motion.button>

            {/* Category List */}
            <motion.div
                initial={false}
                animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
            >
                <div className="space-y-1 p-2 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-700/50 shadow-xl w-[220px] sm:w-[240px] max-w-[calc(100vw-1.5rem)] max-h-[60vh] overflow-y-auto">
                    {categories.map((category) => {
                        const stats = categoryStats[category] || { total: 0, learned: 0 };
                        const color = categoryColors[category];
                        const percentage = stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0;

                        return (
                            <motion.button
                                key={category}
                                whileHover={{ x: 4 }}
                                onClick={() => handleCategoryClick(category)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700/50 transition-all group"
                            >
                                {/* Color indicator */}
                                <span
                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm"
                                    style={{
                                        backgroundColor: color,
                                        boxShadow: `0 0 0 2px ${color}30`,
                                    }}
                                />

                                {/* Label */}
                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors flex-1 text-left">
                                    {categoryLabels[category]}
                                </span>

                                {/* Progress */}
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-1.5 rounded-full bg-slate-700 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: color }}
                                        />
                                    </div>
                                    <span className="text-xs text-slate-500 w-8 text-right">
                                        {percentage}%
                                    </span>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
}
