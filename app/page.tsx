'use client';

import { CryptoTree } from '@/components/crypto-tree';

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Subtle gradient background - no heavy animations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Main content */}
      <CryptoTree />
    </main>
  );
}
