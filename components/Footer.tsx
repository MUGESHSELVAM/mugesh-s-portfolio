"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-10">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8 lg:px-10">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>

        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-ink">
            <Mail size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-ink"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-ink"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted hover:text-ink"
          >
            <ArrowUp size={12} />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
