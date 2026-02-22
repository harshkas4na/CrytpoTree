'use client';

import { createContext, useContext } from 'react';

interface CanvasNavContextType {
  navigateTo: (canvasId: string) => void;
  goBack: () => void;
  jumpTo: (stackIndex: number) => void;
  canvasStack: string[];
}

export const CanvasNavContext = createContext<CanvasNavContextType | null>(null);

export function useCanvasNav() {
  const ctx = useContext(CanvasNavContext);
  if (!ctx) throw new Error('useCanvasNav must be used inside CanvasNavContext.Provider');
  return ctx;
}
