"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Two internships, real authorized engagements."
          description="Every bullet below maps to a documented deliverable — a report, a triaged alert, a validated exploit chain."
        />

        <div className="space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-base text-signal">
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-ink">{item.role}</h3>
                    <p className="text-sm text-ink-muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                </div>
                <span className="mono-label whitespace-nowrap">{item.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border-soft bg-base px-2 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
