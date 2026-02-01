'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation } from './navigation-context';
import { initialNodes } from '@/data/crypto-data';

export function BreadcrumbTrail() {
    const { navigationHistory, focusNode, goToRoot } = useNavigation();

    // Get node labels for the history
    const breadcrumbs = navigationHistory.map((nodeId) => {
        const node = initialNodes.find((n) => n.id === nodeId);
        return {
            id: nodeId,
            label: node?.label || nodeId,
        };
    });

    // Only show last 4 items to avoid overflow
    const visibleBreadcrumbs = breadcrumbs.slice(-4);
    const hasMore = breadcrumbs.length > 4;

    if (breadcrumbs.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 left-6 z-40 flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 shadow-lg"
        >
            {/* Home button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToRoot}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
                title="Go to root"
            >
                <Home size={16} />
            </motion.button>

            {hasMore && (
                <>
                    <ChevronRight size={14} className="text-slate-500" />
                    <span className="text-slate-500 text-sm">...</span>
                </>
            )}

            <AnimatePresence mode="popLayout">
                {visibleBreadcrumbs.map((crumb, index) => (
                    <motion.div
                        key={crumb.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1"
                    >
                        <ChevronRight size={14} className="text-slate-500" />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => focusNode(crumb.id)}
                            className={`text-sm px-2 py-1 rounded-md transition-colors ${index === visibleBreadcrumbs.length - 1
                                    ? 'text-white font-medium bg-slate-700/50'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                                }`}
                        >
                            {crumb.label}
                        </motion.button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
