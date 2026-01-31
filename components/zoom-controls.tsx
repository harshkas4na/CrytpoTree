'use client';

import { useReactFlow } from '@xyflow/react';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ZoomControls() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  const controls = [
    {
      icon: ZoomIn,
      label: 'Zoom In',
      onClick: () => zoomIn(),
    },
    {
      icon: ZoomOut,
      label: 'Zoom Out',
      onClick: () => zoomOut(),
    },
    {
      icon: Maximize2,
      label: 'Fit View',
      onClick: () => fitView({ padding: 0.2, duration: 600 }),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 left-6 z-20 flex flex-col gap-2"
    >
      {controls.map((control) => (
        <motion.button
          key={control.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={control.onClick}
          className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
          title={control.label}
        >
          <control.icon size={18} />
        </motion.button>
      ))}
    </motion.div>
  );
}
