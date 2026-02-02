'use client';

import { useCallback, useMemo } from 'react';
import { initialNodes, CryptoNodeData } from '@/data/crypto-data';

interface FocusConfig {
    focusedNodeId: string | null;
    focusDepth: number; // 1 = immediate only, 2 = two levels, 3 = three levels
    showAllMode: boolean;
}

interface FocusResult {
    visibleNodeIds: Set<string>;
    expandableNodeIds: Set<string>; // Nodes that have hidden children
}

/**
 * Custom hook that calculates which nodes should be visible based on focus
 */
export function useFocusSystem(config: FocusConfig): FocusResult {
    const { focusedNodeId, focusDepth, showAllMode } = config;

    // Build parent-child relationships
    const nodeRelationships = useMemo(() => {
        const parentToChildren = new Map<string, string[]>();
        const childToParent = new Map<string, string>();

        initialNodes.forEach((node) => {
            // Set parent relationship
            if (node.parentId) {
                childToParent.set(node.id, node.parentId);
            }

            // Set children relationship
            node.dependencies.forEach((dep) => {
                const existing = parentToChildren.get(dep) || [];
                if (!existing.includes(node.id)) {
                    parentToChildren.set(dep, [...existing, node.id]);
                }
            });
        });

        return { parentToChildren, childToParent };
    }, []);

    // Get siblings of a node (nodes with same parent)
    const getSiblings = useCallback((nodeId: string): string[] => {
        const parentId = nodeRelationships.childToParent.get(nodeId);
        if (!parentId) return [];

        const siblings = nodeRelationships.parentToChildren.get(parentId) || [];
        return siblings.filter((id) => id !== nodeId);
    }, [nodeRelationships]);

    // Get children of a node
    const getChildren = useCallback((nodeId: string): string[] => {
        return nodeRelationships.parentToChildren.get(nodeId) || [];
    }, [nodeRelationships]);

    // Get parent of a node
    const getParent = useCallback((nodeId: string): string | null => {
        return nodeRelationships.childToParent.get(nodeId) || null;
    }, [nodeRelationships]);

    // Calculate visible nodes based on focus
    const result = useMemo((): FocusResult => {
        // Show all mode - everything is visible
        if (showAllMode || !focusedNodeId) {
            const allIds = new Set(initialNodes.map((n) => n.id));
            return {
                visibleNodeIds: allIds,
                expandableNodeIds: new Set(),
            };
        }

        const visibleNodeIds = new Set<string>();
        const expandableNodeIds = new Set<string>();

        // Helper to add nodes at a certain depth
        const addNodesAtDepth = (nodeId: string, currentDepth: number) => {
            visibleNodeIds.add(nodeId);

            if (currentDepth >= focusDepth) {
                // Check if this node has children that are hidden
                const children = getChildren(nodeId);
                if (children.length > 0) {
                    expandableNodeIds.add(nodeId);
                }
                return;
            }

            // Add children
            const children = getChildren(nodeId);
            children.forEach((childId) => {
                addNodesAtDepth(childId, currentDepth + 1);
            });
        };

        // 1. Add the focused node
        visibleNodeIds.add(focusedNodeId);

        // 2. Add parent path up to root
        let currentParent = getParent(focusedNodeId);
        while (currentParent) {
            visibleNodeIds.add(currentParent);
            currentParent = getParent(currentParent);
        }

        // 3. Add siblings of focused node
        const siblings = getSiblings(focusedNodeId);
        siblings.forEach((siblingId) => {
            visibleNodeIds.add(siblingId);
            // Check if siblings have children (show expand indicator)
            const siblingChildren = getChildren(siblingId);
            if (siblingChildren.length > 0) {
                expandableNodeIds.add(siblingId);
            }
        });

        // 4. Add children based on depth
        addNodesAtDepth(focusedNodeId, 1);

        return { visibleNodeIds, expandableNodeIds };
    }, [focusedNodeId, focusDepth, showAllMode, getChildren, getParent, getSiblings]);

    return result;
}

/**
 * Get the count of all descendants of a node
 */
export function getDescendantCount(nodeId: string): number {
    const children = initialNodes.filter((n) => n.dependencies.includes(nodeId));
    let count = children.length;

    children.forEach((child) => {
        count += getDescendantCount(child.id);
    });

    return count;
}

/**
 * Get immediate children of a node
 */
export function getChildNodes(nodeId: string): CryptoNodeData[] {
    return initialNodes.filter((n) => n.dependencies.includes(nodeId));
}

/**
 * Check if a node has children
 */
export function hasChildren(nodeId: string): boolean {
    return initialNodes.some((n) => n.dependencies.includes(nodeId));
}
