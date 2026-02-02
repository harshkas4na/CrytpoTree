'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useReactFlow, Node } from '@xyflow/react';
import { useNavigation } from './navigation-context';
import { CryptoNodeData, initialNodes } from '@/data/crypto-data';

interface CameraControllerProps {
    nodes: Node[];
    edges: { source: string; target: string }[];
    onNodeSelect: (node: CryptoNodeData) => void;
}

// Smooth easing function
const easeOutExpo = (t: number): number =>
    t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export function CameraController({ nodes, edges, onNodeSelect }: CameraControllerProps) {
    const { setViewport, getViewport, fitView } = useReactFlow();
    const {
        focusedNodeId,
        setIsNavigating,
        focusNode,
        isNavigating,
    } = useNavigation();

    const animationRef = useRef<number | null>(null);
    const lastFocusedRef = useRef<string | null>(null);

    // Find adjacent nodes for keyboard navigation
    const findAdjacentNodes = useCallback((nodeId: string) => {
        const parents: string[] = [];
        const children: string[] = [];
        const siblings: string[] = [];

        edges.forEach((edge) => {
            if (edge.target === nodeId) {
                parents.push(edge.source);
            }
            if (edge.source === nodeId) {
                children.push(edge.target);
            }
        });

        if (parents.length > 0) {
            edges.forEach((edge) => {
                if (parents.includes(edge.source) && edge.target !== nodeId) {
                    siblings.push(edge.target);
                }
            });
        }

        return { parents, children, siblings };
    }, [edges]);

    // Simple smooth fly-to animation
    const flyToNode = useCallback((nodeId: string) => {
        const node = nodes.find((n) => n.id === nodeId);
        if (!node) return;

        const duration = 400; // Fast and smooth
        const startViewport = getViewport();
        const targetX = node.position.x + 90; // Center on smaller node
        const targetY = node.position.y + 40;
        const targetZoom = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.65 : 0.9;

        // Calculate end viewport position
        const endX = -targetX * targetZoom + window.innerWidth / 2;
        const endY = -targetY * targetZoom + window.innerHeight / 2;

        const startTime = performance.now();
        setIsNavigating(true);

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);

            // Simple interpolation
            const currentX = startViewport.x + (endX - startViewport.x) * eased;
            const currentY = startViewport.y + (endY - startViewport.y) * eased;
            const currentZoom = startViewport.zoom + (targetZoom - startViewport.zoom) * eased;

            setViewport({ x: currentX, y: currentY, zoom: currentZoom });

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                setIsNavigating(false);
                animationRef.current = null;
            }
        };

        // Cancel any existing animation
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        animationRef.current = requestAnimationFrame(animate);
    }, [nodes, getViewport, setViewport, setIsNavigating]);

    // Navigate when focused node changes
    useEffect(() => {
        if (focusedNodeId && focusedNodeId !== lastFocusedRef.current) {
            flyToNode(focusedNodeId);
            lastFocusedRef.current = focusedNodeId;
        }
    }, [focusedNodeId, flyToNode]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if typing in an input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            // Ignore if animation in progress
            if (isNavigating) return;

            if (!focusedNodeId) {
                if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(e.key)) {
                    e.preventDefault();
                    focusNode('root');
                }
                return;
            }

            const { parents, children, siblings } = findAdjacentNodes(focusedNodeId);

            switch (e.key) {
                case 'ArrowDown':
                case 'j':
                    e.preventDefault();
                    if (children.length > 0) {
                        focusNode(children[0]);
                    }
                    break;

                case 'ArrowUp':
                case 'k':
                    e.preventDefault();
                    if (parents.length > 0) {
                        focusNode(parents[0]);
                    }
                    break;

                case 'ArrowLeft':
                case 'h':
                    e.preventDefault();
                    if (siblings.length > 0) {
                        const currentNode = nodes.find(n => n.id === focusedNodeId);
                        if (currentNode) {
                            const sortedSiblings = [...siblings, focusedNodeId].sort((a, b) => {
                                const nodeA = nodes.find(n => n.id === a);
                                const nodeB = nodes.find(n => n.id === b);
                                return (nodeA?.position.x || 0) - (nodeB?.position.x || 0);
                            });
                            const currentIndex = sortedSiblings.indexOf(focusedNodeId);
                            if (currentIndex > 0) {
                                focusNode(sortedSiblings[currentIndex - 1]);
                            }
                        }
                    }
                    break;

                case 'ArrowRight':
                case 'l':
                    e.preventDefault();
                    if (siblings.length > 0) {
                        const currentNode = nodes.find(n => n.id === focusedNodeId);
                        if (currentNode) {
                            const sortedSiblings = [...siblings, focusedNodeId].sort((a, b) => {
                                const nodeA = nodes.find(n => n.id === a);
                                const nodeB = nodes.find(n => n.id === b);
                                return (nodeA?.position.x || 0) - (nodeB?.position.x || 0);
                            });
                            const currentIndex = sortedSiblings.indexOf(focusedNodeId);
                            if (currentIndex < sortedSiblings.length - 1) {
                                focusNode(sortedSiblings[currentIndex + 1]);
                            }
                        }
                    }
                    break;

                case 'Enter':
                case ' ':
                    e.preventDefault();
                    const nodeData = initialNodes.find(n => n.id === focusedNodeId);
                    if (nodeData) {
                        onNodeSelect(nodeData);
                    }
                    break;

                case 'Home':
                    e.preventDefault();
                    focusNode('root');
                    break;

                case 'Escape': {
                    e.preventDefault();
                    const padding = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.35 : 0.2;
                    fitView({ padding, duration: 400 });
                    break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [focusedNodeId, findAdjacentNodes, focusNode, nodes, onNodeSelect, fitView, isNavigating]);

    // Cleanup animation on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return null;
}
