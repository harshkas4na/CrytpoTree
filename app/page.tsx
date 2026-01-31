'use client';

import { CryptoTree } from '@/components/crypto-tree';

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-950 relative overflow-hidden">
      <CryptoTree />
    </main>
  );
}
