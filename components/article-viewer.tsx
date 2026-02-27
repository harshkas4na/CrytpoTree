'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import {
  ArrowLeft,
  Edit3,
  Eye,
  RotateCcw,
  X,
  BookOpen,
  Link2,
  ChevronRight,
  AlignLeft,
} from 'lucide-react';
import { toast } from 'sonner';

import { ARTICLES, BACKLINKS } from '@/data/articles-data';
import { CATEGORY_COLORS, type CanvasNodeData } from '@/data/canvas-data';

// ─── Types ─────────────────────────────────────────────────────────────────

interface ArticleViewerProps {
  nodeId: string;
  nodeData: CanvasNodeData;
  onClose: () => void;
  onOpenNode: (nodeId: string) => void;
}

interface TocEntry {
  level: number;
  text: string;
  id: string;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractToc(content: string): TocEntry[] {
  const lines = content.split('\n');
  const toc: TocEntry[] = [];
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/\[\[([^\]]+)\]\]/g, '$1');
      toc.push({ level, text, id: slugify(text) });
    }
  }
  return toc;
}

function extractWikiLinks(content: string): string[] {
  const links: string[] = [];
  const regex = /\[\[([^\]]+)\]\]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!links.includes(match[1])) links.push(match[1]);
  }
  return links;
}

// Replace [[nodeId]] with a placeholder we can detect in the renderer
function preprocessWikiLinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, nodeId) => {
    const article = ARTICLES[nodeId];
    const label = article?.title ?? nodeId;
    return `[${label}](wikilink://${nodeId})`;
  });
}

// ─── Markdown Components ───────────────────────────────────────────────────

type NodeProps = { children?: React.ReactNode };
type CodeProps = { children?: React.ReactNode; className?: string };
type AnchorProps = { children?: React.ReactNode; href?: string };

function makeMarkdownComponents(
  accentColor: string,
  onOpenNode: (nodeId: string) => void,
) {
  return {
    h1: ({ children }: NodeProps) => (
      <h1 className="text-[22px] font-bold text-[var(--c-text)] mb-4 mt-6 leading-tight first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: NodeProps) => {
      const text = String(children);
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="text-[17px] font-semibold text-[var(--c-text)] mb-3 mt-8 pb-2 border-b border-[var(--c-border-subtle)] scroll-mt-20"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }: NodeProps) => {
      const text = String(children);
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="text-[14px] font-semibold text-[var(--c-text-2)] mb-2 mt-6 scroll-mt-20"
        >
          {children}
        </h3>
      );
    },
    p: ({ children }: NodeProps) => (
      <p className="text-[13.5px] text-[var(--c-text-2)] leading-[1.8] mb-4">{children}</p>
    ),
    ul: ({ children }: NodeProps) => (
      <ul className="mb-4 space-y-1.5 pl-1">{children}</ul>
    ),
    ol: ({ children }: NodeProps) => (
      <ol className="mb-4 space-y-1.5 pl-5 list-decimal">{children}</ol>
    ),
    li: ({ children }: NodeProps) => (
      <li className="text-[13.5px] text-[var(--c-text-2)] leading-[1.75] flex gap-2 items-start">
        <span className="text-[var(--c-text-5)] mt-0.5 shrink-0 select-none">•</span>
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }: NodeProps) => (
      <strong className="text-[var(--c-text)] font-semibold">{children}</strong>
    ),
    em: ({ children }: NodeProps) => (
      <em className="text-[var(--c-text-3)] italic">{children}</em>
    ),
    code: ({ children, className }: CodeProps) => {
      const isBlock = className?.includes('language-');
      if (isBlock) {
        return (
          <code className="block bg-[var(--c-hover)] border border-[var(--c-border)] rounded-lg px-4 py-3 text-[12px] font-mono text-[var(--c-text-3)] overflow-x-auto mb-4 leading-[1.7]">
            {children}
          </code>
        );
      }
      return (
        <code className="bg-[var(--c-hover)] text-[var(--c-text-3)] px-1.5 py-0.5 rounded text-[12px] font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }: NodeProps) => (
      <pre className="mb-4">{children}</pre>
    ),
    blockquote: ({ children }: NodeProps) => (
      <blockquote
        className="border-l-2 pl-4 py-1 mb-4 text-[13px] text-[var(--c-text-4)] italic"
        style={{ borderColor: `${accentColor}80` }}
      >
        {children}
      </blockquote>
    ),
    table: ({ children }: NodeProps) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-[12.5px] border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }: NodeProps) => (
      <thead className="bg-[var(--c-hover)]">{children}</thead>
    ),
    th: ({ children }: NodeProps) => (
      <th className="px-3 py-2 text-left text-[var(--c-text-4)] font-semibold border border-[var(--c-border)]">
        {children}
      </th>
    ),
    td: ({ children }: NodeProps) => (
      <td className="px-3 py-2 text-[var(--c-text-3)] border border-[var(--c-border)]">{children}</td>
    ),
    hr: () => <hr className="border-[var(--c-border)] my-6" />,
    a: ({ href, children }: AnchorProps) => {
      if (href?.startsWith('wikilink://')) {
        const nodeId = href.replace('wikilink://', '');
        const article = ARTICLES[nodeId];
        return (
          <button
            onClick={() => onOpenNode(nodeId)}
            className="inline-flex items-center gap-0.5 font-medium transition-colors hover:underline"
            style={{ color: accentColor }}
            title={article ? `Open: ${article.title}` : nodeId}
          >
            {children}
            <ChevronRight className="w-3 h-3 opacity-70" />
          </button>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:opacity-80"
          style={{ color: accentColor }}
        >
          {children}
        </a>
      );
    },
  };
}

// ─── TOC Sidebar ───────────────────────────────────────────────────────────

function TocSidebar({
  toc,
  accentColor,
  scrollContainer,
}: {
  toc: TocEntry[];
  accentColor: string;
  scrollContainer: React.RefObject<HTMLDivElement | null>;
}) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handler = () => {
      const headings = container.querySelectorAll('h2[id], h3[id]');
      let current = '';
      for (const h of headings) {
        const rect = h.getBoundingClientRect();
        if (rect.top <= 120) current = h.id;
      }
      setActiveId(current);
    };

    container.addEventListener('scroll', handler, { passive: true });
    return () => container.removeEventListener('scroll', handler);
  }, [scrollContainer]);

  const scrollTo = (id: string) => {
    const container = scrollContainer.current;
    if (!container) return;
    const el = container.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (toc.length === 0) return null;

  return (
    <div className="hidden xl:flex flex-col w-[180px] shrink-0 pl-4 py-2">
      <div className="sticky top-0 pt-2">
        <div className="flex items-center gap-1.5 mb-3">
          <AlignLeft className="w-3 h-3 text-[var(--c-text-5)]" />
          <span className="text-[10px] text-[var(--c-text-5)] uppercase tracking-wider font-semibold">Contents</span>
        </div>
        <div className="space-y-0.5">
          {toc.map((entry) => (
            <button
              key={entry.id}
              onClick={() => scrollTo(entry.id)}
              className={`w-full text-left text-[11px] py-1 transition-colors leading-tight ${
                entry.level === 3 ? 'pl-3' : 'pl-0'
              } ${
                activeId === entry.id
                  ? 'font-medium'
                  : 'text-[var(--c-text-5)] hover:text-[var(--c-text-4)]'
              }`}
              style={activeId === entry.id ? { color: accentColor } : {}}
            >
              {entry.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function ArticleViewer({ nodeId, nodeData, onClose, onOpenNode }: ArticleViewerProps) {
  const d = nodeData as unknown as {
    title: string;
    emoji?: string;
    accentColor?: string;
    category?: string;
  };

  const accentColor = d.accentColor ?? CATEGORY_COLORS[d.category as keyof typeof CATEGORY_COLORS ?? 'infra'] ?? '#6366f1';

  const [mode, setMode] = useState<'read' | 'edit'>('read');
  const [content, setContent] = useState('');
  const [editContent, setEditContent] = useState('');
  const [lastEdited, setLastEdited] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const storageKey = `article-${nodeId}`;
  const defaultArticle = ARTICLES[nodeId];

  // Load content
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    const baseContent = saved ?? defaultArticle?.content ?? '';
    setContent(baseContent);
    setEditContent(baseContent);
    if (saved) {
      setLastEdited(localStorage.getItem(`${storageKey}-date`) ?? 'recently');
    } else {
      setLastEdited(null);
    }
  }, [nodeId, storageKey, defaultArticle]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'e' || e.key === 'E') {
        // Only toggle if not focused on textarea
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          setMode((m) => (m === 'read' ? 'edit' : 'read'));
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Debounced auto-save
  const handleEdit = useCallback(
    (val: string) => {
      setEditContent(val);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        const now = new Date().toLocaleDateString();
        localStorage.setItem(storageKey, val);
        localStorage.setItem(`${storageKey}-date`, now);
        setContent(val);
        setLastEdited(now);
        toast.success('Saved', { duration: 1500 });
      }, 500);
    },
    [storageKey],
  );

  const switchToRead = useCallback(() => {
    // Flush any pending save
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
      const now = new Date().toLocaleDateString();
      localStorage.setItem(storageKey, editContent);
      localStorage.setItem(`${storageKey}-date`, now);
      setContent(editContent);
      setLastEdited(now);
    }
    setMode('read');
  }, [storageKey, editContent]);

  const handleReset = useCallback(() => {
    if (!confirm('Reset to default content? This will remove your edits.')) return;
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}-date`);
    const def = defaultArticle?.content ?? '';
    setContent(def);
    setEditContent(def);
    setLastEdited(null);
    setMode('read');
    toast.success('Reset to default');
  }, [storageKey, defaultArticle]);

  // Derived
  const processedContent = useMemo(() => preprocessWikiLinks(content), [content]);
  const processedEditPreview = useMemo(() => preprocessWikiLinks(editContent), [editContent]);
  const toc = useMemo(() => extractToc(content), [content]);
  const wikiLinks = useMemo(() => extractWikiLinks(content), [content]);
  const backlinks = BACKLINKS[nodeId] ?? [];

  const mdComponents = useMemo(
    () => makeMarkdownComponents(accentColor, onOpenNode),
    [accentColor, onOpenNode],
  );

  if (!defaultArticle) {
    return (
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        className="absolute inset-0 z-50 bg-[var(--c-surface)] flex items-center justify-center"
      >
        <div className="text-center text-[var(--c-text-5)]">
          <BookOpen className="w-8 h-8 mx-auto mb-3" />
          <p className="text-[14px]">No article found for this node.</p>
          <button
            onClick={onClose}
            className="mt-4 text-[12px] text-[var(--c-text-5)] hover:text-[var(--c-text-3)] transition-colors"
          >
            ← Back
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 28, stiffness: 280 }}
      className="absolute inset-0 z-50 bg-[var(--c-surface)] flex flex-col overflow-hidden"
    >
      {/* ── Accent stripe ── */}
      <div className="h-0.5 w-full shrink-0" style={{ background: accentColor }} />

      {/* ── Header ── */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--c-border)] shrink-0 bg-[var(--c-surface)]">
        {/* Close / back */}
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-[var(--c-text-5)] hover:text-[var(--c-text-2)] transition-colors text-[12px] shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </button>

        <div className="w-px h-4 bg-[var(--c-border)] shrink-0" />

        {/* Title */}
        <div className="flex-1 flex items-center gap-2 min-w-0">
          {d.emoji && <span className="text-[18px] shrink-0">{d.emoji}</span>}
          <h1 className="text-[15px] font-semibold text-[var(--c-text)] truncate">
            {d.title}
          </h1>
        </div>

        {/* Mode controls */}
        <div className="flex items-center gap-1 shrink-0">
          {mode === 'edit' && (
            <>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-2 py-1 text-[11px] text-[var(--c-text-5)] hover:text-[var(--c-text-3)] transition-colors rounded"
                title="Reset to default"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
              <button
                onClick={switchToRead}
                className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold rounded-md transition-all"
                style={{
                  background: `${accentColor}22`,
                  color: accentColor,
                  border: `1px solid ${accentColor}40`,
                }}
              >
                <Eye className="w-3 h-3" />
                <span>Done</span>
              </button>
            </>
          )}
          {mode === 'read' && (
            <button
              onClick={() => setMode('edit')}
              className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] text-[var(--c-text-5)] hover:text-[var(--c-text-3)] hover:bg-[var(--c-hover)] rounded-md transition-all border border-transparent hover:border-[var(--c-border)]"
              title="Edit article (E)"
            >
              <Edit3 className="w-3 h-3" />
              <span className="hidden sm:inline">Edit</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center text-[var(--c-text-5)] hover:text-[var(--c-text-2)] hover:bg-[var(--c-hover)] rounded transition-all ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      {mode === 'read' ? (
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <div className="flex max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-6">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              <div className="prose-article max-w-[680px]">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={mdComponents}
                >
                  {processedContent}
                </ReactMarkdown>
              </div>

              {/* Footer */}
              <div className="mt-10 pt-6 border-t border-[var(--c-border)] space-y-6">

                {/* References (wiki links in this article) */}
                {wikiLinks.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Link2 className="w-3 h-3 text-[var(--c-text-5)]" />
                      <span className="text-[10px] text-[var(--c-text-5)] uppercase tracking-wider font-semibold">
                        References in this article
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {wikiLinks.map((id) => {
                        const article = ARTICLES[id];
                        if (!article) return null;
                        return (
                          <button
                            key={id}
                            onClick={() => onOpenNode(id)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all"
                            style={{
                              background: `${accentColor}15`,
                              color: accentColor,
                              border: `1px solid ${accentColor}30`,
                            }}
                          >
                            {article.title}
                            <ChevronRight className="w-2.5 h-2.5 opacity-70" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Backlinks */}
                {backlinks.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Link2 className="w-3 h-3 text-[var(--c-text-5)]" />
                      <span className="text-[10px] text-[var(--c-text-5)] uppercase tracking-wider font-semibold">
                        Referenced by
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {backlinks.map((id) => {
                        const article = ARTICLES[id];
                        if (!article) return null;
                        return (
                          <button
                            key={id}
                            onClick={() => onOpenNode(id)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-[var(--c-text-5)] bg-[var(--c-hover)] border border-[var(--c-border)] hover:text-[var(--c-text-3)] hover:border-[var(--c-border-hover)] transition-all"
                          >
                            {article.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Edited badge */}
                {lastEdited && (
                  <p className="text-[11px] text-[var(--c-text-6)]">
                    ✎ Custom · last edited {lastEdited}
                  </p>
                )}
              </div>
            </div>

            {/* TOC sidebar */}
            <TocSidebar
              toc={toc}
              accentColor={accentColor}
              scrollContainer={scrollRef}
            />
          </div>
        </div>
      ) : (
        /* ── Edit Mode: Split Pane ── */
        <div className="flex-1 overflow-hidden">
          <PanelGroup direction="horizontal" className="h-full">
            {/* Left: Editor */}
            <Panel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col bg-[var(--c-elevated)]">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--c-border)] shrink-0">
                  <Edit3 className="w-3 h-3 text-[var(--c-text-5)]" />
                  <span className="text-[10px] text-[var(--c-text-5)] uppercase tracking-wider font-semibold">
                    Markdown Editor
                  </span>
                </div>
                <textarea
                  value={editContent}
                  onChange={(e) => handleEdit(e.target.value)}
                  className="flex-1 w-full bg-transparent text-[13px] font-mono text-[var(--c-text-3)] resize-none outline-none px-4 py-4 leading-[1.8] placeholder-[var(--c-text-7)]"
                  placeholder="Write markdown here…"
                  spellCheck={false}
                />
              </div>
            </Panel>

            {/* Resize handle */}
            <PanelResizeHandle className="w-px bg-[var(--c-border)] hover:bg-[var(--c-border-hover)] transition-colors cursor-col-resize" />

            {/* Right: Preview */}
            <Panel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--c-border)] shrink-0">
                  <Eye className="w-3 h-3 text-[var(--c-text-5)]" />
                  <span className="text-[10px] text-[var(--c-text-5)] uppercase tracking-wider font-semibold">
                    Preview
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="max-w-[640px] prose-article">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={mdComponents}
                    >
                      {processedEditPreview}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </Panel>
          </PanelGroup>
        </div>
      )}
    </motion.div>
  );
}
