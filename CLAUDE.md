# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Next.js 16, port 3000)
- `npm run build` — production build
- `npm run lint` — ESLint
- No test framework is configured.

## Architecture

**Crypto Skill Tree** — an interactive, Obsidian-like canvas for exploring the blockchain ecosystem. Single-page app built on React Flow (`@xyflow/react`).

### Rendering flow

`app/page.tsx` → `components/obsidian-canvas.tsx` (the entire UI lives here)

`obsidian-canvas.tsx` is a large client component that:
- Manages a **multi-canvas system**: `CANVASES` map in `data/canvas-data.ts` defines multiple canvases, each with its own nodes/edges. Users navigate between canvases via "Explore" buttons on page nodes.
- Maintains **canvas navigation** with `canvasStack` / `forwardStack` (browser-history-style back/forward). The context is in `components/canvas-nav-context.tsx`.
- Renders React Flow with two custom node types registered as `nodeTypes`: `card` (CanvasCard — user-created sticky notes) and `page` (CanvasPageNode — topic nodes with category colors).
- Hosts the toolbar (CanvasControls), help modal, search palette, context menu, detail panel, and article viewer.

### Data layer

- `data/canvas-data.ts` — all canvas definitions (`CANVASES`), category colors/labels, node types (`CanvasNodeData`, `PageData`), and `NODE_CANVAS_MAP` (which canvas each node belongs to).
- `data/articles-data.ts` — article content (`ARTICLES`) and `BACKLINKS` for the article viewer.
- `lib/canvas-persistence.ts` — localStorage persistence for node positions, user-created cards, and edges. Uses `ct-canvas-v1-` key prefix. Deliberately omits large read-only fields (`shortOverview`, `deepInsight`, `resources`) from storage.

### Theme system

Dark mode is the default. Theme is toggled via a Sun/Moon button in the bottom toolbar.
- CSS variables prefixed `--c-` are defined in `app/globals.css` under `:root` (dark) and `.light` (light).
- `components/theme-provider.tsx` reads/writes `localStorage('theme')` and toggles the `.light` class on `<html>`.
- Anti-FOUC inline script in `app/layout.tsx` applies the class before hydration.

### Path aliases

`@/*` maps to the project root (no `src/` directory). Import components as `@/components/...`, data as `@/data/...`, utils as `@/lib/...`.

### UI framework

shadcn/ui (new-york style) with Radix primitives, Lucide icons, Tailwind v4, and Framer Motion for animations. The `components/ui/` directory contains shadcn components (auto-generated, avoid manual edits).
