"use client";

import { navLinks, profile } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Command as CommandIcon,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Search,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  group: "Navigate" | "Contact" | "Links";
  icon: typeof ArrowRight;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const goto = useCallback(
    (href: string) => {
      close();
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        window.location.href = href;
      } else {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    },
    [close],
  );

  const items: CommandItem[] = useMemo(
    () => [
      ...navLinks.map((n) => ({
        id: `nav-${n.href}`,
        label: `Go to ${n.label}`,
        hint: n.href,
        group: "Navigate" as const,
        icon: ArrowRight,
        action: () => goto(n.href),
      })),
      {
        id: "email",
        label: "Send email",
        hint: profile.email,
        group: "Contact" as const,
        icon: Mail,
        action: () => goto(`mailto:${profile.email}`),
      },
      {
        id: "phone",
        label: "Call",
        hint: profile.phone,
        group: "Contact" as const,
        icon: Phone,
        action: () => goto(`tel:${profile.phone.replace(/\s+/g, "")}`),
      },
      {
        id: "resume",
        label: "Download résumé",
        hint: profile.resumeUrl,
        group: "Contact" as const,
        icon: FileText,
        action: () => goto(profile.resumeUrl),
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: profile.github,
        group: "Links" as const,
        icon: Code2,
        action: () => goto(profile.github),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: profile.linkedin,
        group: "Links" as const,
        icon: Briefcase,
        action: () => goto(profile.linkedin),
      },
    ],
    [goto],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint?.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [items, query]);

  const grouped = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filtered.forEach((item) => {
      (groups[item.group] ??= []).push(item);
    });
    return groups;
  }, [filtered]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function onListKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  }

  let cursor = 0;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="glass fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 shadow-lg backdrop-blur transition-all hover:border-white/20 hover:text-white sm:inline-flex"
        aria-label="Open command palette"
      >
        <CommandIcon size={12} />
        <span>Quick nav</span>
        <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/70">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="palette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Search size={16} className="text-white/40" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onListKey}
                  placeholder="Type to search — go to a section, email, resume…"
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/50">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-white/40">
                    No matches
                  </div>
                )}
                {Object.entries(grouped).map(([group, groupItems]) => (
                  <div key={group} className="mb-2 last:mb-0">
                    <div className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-white/30">
                      {group}
                    </div>
                    {groupItems.map((item) => {
                      const idx = cursor++;
                      const active = idx === activeIndex;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => item.action()}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            active
                              ? "bg-white/10 text-white"
                              : "text-white/70 hover:bg-white/5"
                          }`}
                        >
                          <Icon size={14} className="shrink-0 text-cyan-300" />
                          <span className="flex-1 truncate">{item.label}</span>
                          {item.hint && (
                            <span className="hidden truncate text-xs text-white/40 sm:block">
                              {item.hint}
                            </span>
                          )}
                          {active && (
                            <ExternalLink size={12} className="text-white/40" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] text-white/40">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-white/10 px-1 py-0.5 font-mono">↑↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-white/10 px-1 py-0.5 font-mono">↵</kbd>
                    select
                  </span>
                </div>
                <span className="font-mono">{filtered.length} results</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
