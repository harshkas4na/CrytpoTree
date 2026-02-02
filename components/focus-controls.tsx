'use client';

import { motion } from 'framer-motion';
import { Eye, EyeOff, Layers, Home, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigation } from './navigation-context';
import { initialNodes } from '@/data/crypto-data';

export function FocusControls() {
    const {
        focusedNodeId,
        focusDepth,
        showAllMode,
        setFocusDepth,
        toggleShowAllMode,
        goToRoot,
    } = useNavigation();

    // Get current focused node label
    const focusedNode = initialNodes.find((n) => n.id === focusedNodeId);
    const focusedLabel = focusedNode?.label || 'Root';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
        >
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
                {/* Current Focus Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-sm text-slate-300 font-medium max-w-[120px] truncate">
                        {focusedLabel}
                    </span>
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-slate-700" />

                {/* Depth Control */}
                <div className="flex items-center gap-2">
                    <Layers size={16} className="text-slate-400" />
                    <div className="flex items-center gap-1 bg-slate-800/80 rounded-lg p-1">
                        <button
                            onClick={() => setFocusDepth(focusDepth - 1)}
                            disabled={focusDepth <= 1}
                            className="p-1 rounded hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronDown size={14} className="text-slate-300" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-white">
                            {focusDepth}
                        </span>
                        <button
                            onClick={() => setFocusDepth(focusDepth + 1)}
                            disabled={focusDepth >= 3}
                            className="p-1 rounded hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronUp size={14} className="text-slate-300" />
                        </button>
                    </div>
                    <span className="text-xs text-slate-500">depth</span>
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-slate-700" />

                {/* Show All Toggle */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleShowAllMode}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${showAllMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                >
                    {showAllMode ? <Eye size={16} /> : <EyeOff size={16} />}
                    <span className="text-sm font-medium">
                        {showAllMode ? 'Show All' : 'Focus'}
                    </span>
                </motion.button>

                {/* Divider */}
                <div className="w-px h-8 bg-slate-700" />

                {/* Home Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToRoot}
                    className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    title="Go to Root (Home)"
                >
                    <Home size={18} />
                </motion.button>
            </div>

            {/* Keyboard hint */}
            <div className="mt-2 text-center">
                <span className="text-xs text-slate-500">
                    Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-xs">Arrow Keys</kbd> to navigate
                </span>
            </div>
        </motion.div>
    );
}
