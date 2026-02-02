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
  // Focus system settings
  focusDepth: number; // 1-3 levels of depth to show
  showAllMode: boolean; // Toggle to show all nodes
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
  // Focus system actions
  setFocusDepth: (depth: number) => void;
  setShowAllMode: (value: boolean) => void;
  toggleShowAllMode: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>('root');
  const [navigationHistory, setNavigationHistory] = useState<string[]>(['root']);
  const [selectedNode, setSelectedNode] = useState<CryptoNodeData | null>(null);
  const [hoveredPath, setHoveredPath] = useState<Set<string>>(new Set());
  const [isNavigating, setIsNavigating] = useState(false);
  const [focusDepth, setFocusDepthState] = useState(3); // Default: show 3 levels for better overview
  const [showAllMode, setShowAllModeState] = useState(false);

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

  const setFocusDepth = useCallback((depth: number) => {
    setFocusDepthState(Math.max(1, Math.min(3, depth)));
  }, []);

  const setShowAllMode = useCallback((value: boolean) => {
    setShowAllModeState(value);
  }, []);

  const toggleShowAllMode = useCallback(() => {
    setShowAllModeState((prev) => !prev);
  }, []);

  const value: NavigationContextType = {
    focusedNodeId,
    navigationHistory,
    selectedNode,
    hoveredPath,
    isNavigating,
    focusDepth,
    showAllMode,
    focusNode,
    selectNode,
    goBack,
    goToRoot,
    setHoveredPath,
    setIsNavigating,
    addToHistory,
    clearHistory,
    setFocusDepth,
    setShowAllMode,
    toggleShowAllMode,
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

