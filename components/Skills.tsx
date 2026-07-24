"use client";

import { motion } from "framer-motion";
import { Shield, Radar, Cloud, Network, Code2, Terminal } from "lucide-react";
import { skills, SkillCategory } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons: Record<SkillCategory["icon"], React.ElementType> = {
  shield: Shield,
  radar: Radar,
  cloud: Cloud,
  network: Network,
  code: Code2,
  terminal: Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills organized the way a VAPT / SOC organizes work."
          description="Offense, defense, and the tooling that connects them — grouped by function, not by buzzword."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-signal/30 hover:bg-surface-hover"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-base text-signal">
                  <Icon size={16} />
                </div>
                <h3 className="mt-4 text-sm font-medium text-ink">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border-soft bg-base px-2 py-1 text-[11px] text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
