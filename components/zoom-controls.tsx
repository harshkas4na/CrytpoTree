'use client';

import { useReactFlow } from '@xyflow/react';
import { ZoomIn, ZoomOut, Maximize2, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from './navigation-context';

export function ZoomControls() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { goToRoot } = useNavigation();

  const controls = [
    {
      icon: Home,
      label: 'Go to Root',
      onClick: goToRoot,
    },
    {
      icon: ZoomIn,
      label: 'Zoom In',
      onClick: () => zoomIn({ duration: 300 }),
    },
    {
      icon: ZoomOut,
      label: 'Zoom Out',
      onClick: () => zoomOut({ duration: 300 }),
    },
    {
      icon: Maximize2,
      label: 'Fit View',
      onClick: () => {
        const padding = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.35 : 0.15;
        fitView({ padding, duration: 600 });
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="hidden sm:flex fixed bottom-24 left-3 sm:left-6 z-20 flex-row sm:flex-col gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-700/50 shadow-xl"
    >
      {controls.map((control, index) => (
        <motion.button
          key={control.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={control.onClick}
          className="p-2 sm:p-2.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          title={control.label}
        >
          <control.icon size={18} />
        </motion.button>
      ))}
    </motion.div>
  );
}
