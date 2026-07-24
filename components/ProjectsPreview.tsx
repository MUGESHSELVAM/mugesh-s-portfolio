"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FallbackImage from "./FallbackImage";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies, not screenshots."
          description="Each project below is a full write-up: the problem, the methodology, what broke, and what shipped."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_20px_60px_-30px_rgba(91,141,239,0.35)]"
            >
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-border/70 bg-base">
                <FallbackImage
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-start justify-between">
                <span className="mono-label">0{i + 1}</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} on GitHub`}
                  className="text-ink-faint transition-colors hover:text-ink"
                >
                  <Github size={16} />
                </a>
              </div>

              <h3 className="mt-2 text-lg font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-muted">{p.tagline}</p>

              <div className="mt-5 grid grid-cols-3 gap-2 border-y border-border-soft py-4">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-sm font-medium text-ink">{m.value}</div>
                    <div className="mt-0.5 text-[10px] leading-tight text-ink-faint">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border-soft bg-base px-2 py-1 text-[11px] text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="mt-6 flex items-center gap-1 text-sm font-medium text-signal"
              >
                Read case study
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
