"use client";

import { motion } from "framer-motion";
import { about, education, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="From coursework to authorized attack surfaces."
          description={profile.summary}
        />

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <span className="mono-label">Current Focus</span>
              <p className="mt-2 text-sm leading-relaxed text-ink">{about.currentFocus}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <span className="mono-label">Career Goal</span>
              <p className="mt-2 text-sm leading-relaxed text-ink">{about.goal}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <span className="mono-label">Education</span>
              <p className="mt-2 text-sm font-medium text-ink">{education.degree}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {education.school}, {education.location}
              </p>
              <div className="mt-3 flex items-center gap-4 font-mono text-xs text-ink-muted">
                <span>CGPA {education.cgpa}</span>
                <span>{education.period}</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-10">
              {about.journey.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-base bg-signal" />
                  <span className="mono-label">{item.year}</span>
                  <h3 className="mt-1.5 text-base font-medium text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
