'use client';

import React from 'react';
import { BaseEdge, EdgeProps, getSmoothStepPath } from '@xyflow/react';
import { motion } from 'framer-motion';

interface AnimatedEdgeProps extends EdgeProps {
    data?: {
        isActive?: boolean;
        category?: string;
    };
}

// Custom animated edge with glowing effect and particle animation
export function AnimatedEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
}: AnimatedEdgeProps) {
    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        borderRadius: 20,
    });

    const isActive = data?.isActive ?? false;

    return (
        <>
            {/* Glow layer (behind) */}
            <path
                d={edgePath}
                fill="none"
                stroke="url(#edge-glow-gradient)"
                strokeWidth={isActive ? 12 : 6}
                strokeOpacity={isActive ? 0.4 : 0.15}
                filter="url(#glow)"
                className="transition-all duration-300"
            />

            {/* Main edge */}
            <BaseEdge
                id={id}
                path={edgePath}
                markerEnd={markerEnd}
                style={{
                    ...style,
                    strokeWidth: isActive ? 3 : 2,
                    transition: 'stroke-width 0.3s ease',
                }}
            />

            {/* Animated particle dot */}
            <motion.circle
                r={isActive ? 4 : 3}
                fill={isActive ? '#60a5fa' : '#3b82f6'}
                filter="url(#particle-glow)"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                    duration: isActive ? 2 : 4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    offsetPath: `path("${edgePath}")`,
                }}
            />

            {/* Second particle (staggered) */}
            <motion.circle
                r={isActive ? 3 : 2}
                fill={isActive ? '#a78bfa' : '#8b5cf6'}
                filter="url(#particle-glow)"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                    duration: isActive ? 2.5 : 5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: isActive ? 1 : 2,
                }}
                style={{
                    offsetPath: `path("${edgePath}")`,
                }}
            />
        </>
    );
}

// SVG filter definitions component - add this to the main tree component
export function EdgeFilters() {
    return (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
                {/* Gradient for edges */}
                <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                </linearGradient>

                {/* Gradient for glow */}
                <linearGradient id="edge-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Particle glow filter */}
                <filter id="particle-glow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Active edge gradient (brighter) */}
                <linearGradient id="edge-active-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
            </defs>
        </svg>
    );
}
