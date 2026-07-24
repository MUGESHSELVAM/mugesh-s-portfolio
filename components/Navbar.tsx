"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, FileDown, Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-base/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="#top" className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-signal" />
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-ink">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === item.href
                  ? "text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink transition-colors hover:border-signal/40 hover:bg-surface-hover"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        <button
          className="text-ink lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-base px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink-muted">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted">
              <Linkedin size={18} />
            </a>
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              download
              className="ml-auto flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink"
            >
              <FileDown size={14} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
