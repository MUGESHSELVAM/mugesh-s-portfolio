"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Award } from "lucide-react";
import { certifications, Certification } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const categories: (Certification["category"] | "All")[] = [
  "All",
  "Foundations",
  "Threat & Defense",
  "Practical Labs",
  "Applied / Simulation",
];

export default function CertWall() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return certifications.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery =
        query.trim() === "" ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.issuer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="certifications" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Certifications"
          title="The certification wall."
          description="Searchable, filterable, and sourced entirely from completed programs — no in-progress items listed as done."
        />

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certifications or issuers"
              className="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-faint focus:border-signal/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  category === c
                    ? "border-signal/40 bg-signal/10 text-signal"
                    : "border-border text-ink-muted hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => (
              <motion.div
                key={cert.name}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-signal/30 hover:bg-surface-hover"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-base text-signal">
                  <Award size={14} />
                </div>
                <div>
                  <p className="text-[13px] font-medium leading-snug text-ink">{cert.name}</p>
                  <p className="mt-1 text-[12px] text-ink-muted">{cert.issuer}</p>
                  <span className="mt-2 inline-block rounded-md border border-border-soft px-1.5 py-0.5 text-[10px] text-ink-faint">
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-ink-muted">
              No certifications match that search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
