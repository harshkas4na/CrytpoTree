'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard, X } from 'lucide-react';

const shortcuts = [
    { keys: ['↑', '↓', '←', '→'], description: 'Navigate between nodes' },
    { keys: ['J', 'K', 'H', 'L'], description: 'Vim-style navigation' },
    { keys: ['Enter', 'Space'], description: 'Open node details' },
    { keys: ['Escape'], description: 'Close / Fit view' },
    { keys: ['⌘', 'K'], description: 'Search skills' },
    { keys: ['Home'], description: 'Go to root' },
    { keys: ['?'], description: 'Toggle this help' },
];

export function KeyboardShortcutsHelp() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if typing in an input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            if (e.key === '?') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-30 p-3 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-lg"
                title="Keyboard shortcuts (?)"
            >
                <Keyboard size={20} />
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[380px] p-6 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Keyboard size={20} className="text-blue-400" />
                                    </div>
                                    <h2 className="text-lg font-bold text-white">Keyboard Shortcuts</h2>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Shortcuts List */}
                            <div className="space-y-3">
                                {shortcuts.map((shortcut, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center justify-between py-2"
                                    >
                                        <span className="text-sm text-slate-400">{shortcut.description}</span>
                                        <div className="flex items-center gap-1">
                                            {shortcut.keys.map((key, keyIndex) => (
                                                <span key={keyIndex}>
                                                    <kbd className="px-2 py-1 text-xs font-medium bg-slate-800 border border-slate-600 rounded-md text-slate-300">
                                                        {key}
                                                    </kbd>
                                                    {keyIndex < shortcut.keys.length - 1 && (
                                                        <span className="text-slate-600 mx-0.5">+</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer tip */}
                            <div className="mt-6 pt-4 border-t border-slate-700/50">
                                <p className="text-xs text-slate-500 text-center">
                                    Press <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-600 rounded text-slate-400">?</kbd> anytime to toggle this help
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
