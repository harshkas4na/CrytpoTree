'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CryptoNodeData } from '@/data/crypto-data';

interface NavigationState {
  // Current focused node
  focusedNodeId: string | null;
  // Navigation history for breadcrumb
  navigationHistory: string[];
  // Selected node for sidebar
  selectedNode: CryptoNodeData | null;
  // Hovered path for highlighting
  hoveredPath: Set<string>;
  // Camera animation in progress
  isNavigating: boolean;
}

interface NavigationContextType extends NavigationState {
  // Navigation actions
  focusNode: (nodeId: string) => void;
  selectNode: (node: CryptoNodeData | null) => void;
  goBack: () => void;
  goToRoot: () => void;
  setHoveredPath: (path: Set<string>) => void;
  setIsNavigating: (value: boolean) => void;
  addToHistory: (nodeId: string) => void;
  clearHistory: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(null);
  const [navigationHistory, setNavigationHistory] = useState<string[]>([]);
  const [selectedNode, setSelectedNode] = useState<CryptoNodeData | null>(null);
  const [hoveredPath, setHoveredPath] = useState<Set<string>>(new Set());
  const [isNavigating, setIsNavigating] = useState(false);

  const addToHistory = useCallback((nodeId: string) => {
    setNavigationHistory((prev) => {
      // Don't add duplicates consecutively
      if (prev[prev.length - 1] === nodeId) return prev;
      // Keep max 10 items in history
      const newHistory = [...prev, nodeId].slice(-10);
      return newHistory;
    });
  }, []);

  const focusNode = useCallback((nodeId: string) => {
    setFocusedNodeId(nodeId);
    addToHistory(nodeId);
  }, [addToHistory]);

  const selectNode = useCallback((node: CryptoNodeData | null) => {
    setSelectedNode(node);
    if (node) {
      setFocusedNodeId(node.id);
      addToHistory(node.id);
    }
  }, [addToHistory]);

  const goBack = useCallback(() => {
    setNavigationHistory((prev) => {
      if (prev.length <= 1) return prev;
      const newHistory = prev.slice(0, -1);
      const previousNodeId = newHistory[newHistory.length - 1];
      if (previousNodeId) {
        setFocusedNodeId(previousNodeId);
      }
      return newHistory;
    });
  }, []);

  const goToRoot = useCallback(() => {
    setFocusedNodeId('root');
    setNavigationHistory(['root']);
  }, []);

  const clearHistory = useCallback(() => {
    setNavigationHistory([]);
    setFocusedNodeId(null);
  }, []);

  const value: NavigationContextType = {
    focusedNodeId,
    navigationHistory,
    selectedNode,
    hoveredPath,
    isNavigating,
    focusNode,
    selectNode,
    goBack,
    goToRoot,
    setHoveredPath,
    setIsNavigating,
    addToHistory,
    clearHistory,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export { NavigationContext };
