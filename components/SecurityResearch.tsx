"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Search, Map, Gauge } from "lucide-react";
import { securityResearch } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const practiceIcons = [ShieldCheck, Search, Map, Gauge];

export default function SecurityResearch() {
  return (
    <section id="research" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Security Research"
          title="Independent research, reported the right way."
          description={securityResearch.intro}
        />

        {/* Featured disclosure */}
        {securityResearch.disclosures.map((d) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 rounded-2xl border border-signal/25 bg-surface p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-signal">
                {d.tag}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-ink">{d.title}</h3>
            <p className="mt-3 max-w-4xl text-[15px] leading-8 text-ink-muted">{d.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {d.methodology.map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-border-soft bg-base px-2 py-1 text-[11px] text-ink-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Practice areas */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {securityResearch.practiceAreas.map((area, i) => {
            const Icon = practiceIcons[i % practiceIcons.length];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <Icon size={16} className="text-signal" />
                <h4 className="mt-3 text-sm font-medium text-ink">{area.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
