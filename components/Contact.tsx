"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, FileDown, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const contactLinks = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "MUGESHSELVAM", href: profile.github },
    { icon: Linkedin, label: "mugeshselvamk", href: profile.linkedin },
    { icon: MapPin, label: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="border-t border-border-soft py-24 md:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about a role, an engagement, or a finding."
          description="Reach out directly, or send a note through the form — I read every message myself."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {contactLinks.map((c) => {
              const Icon = c.icon;
              const content = (
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-signal/30">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-base text-signal">
                    <Icon size={15} />
                  </div>
                  <span className="text-sm text-ink">{c.label}</span>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center justify-center gap-2 rounded-xl border border-signal/30 bg-signal/10 p-4 text-sm font-medium text-signal transition-colors hover:bg-signal/15"
            >
              <FileDown size={15} />
              Download Resume (PDF)
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mono-label">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-base px-3 py-2.5 text-sm text-ink focus:border-signal/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mono-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-base px-3 py-2.5 text-sm text-ink focus:border-signal/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mono-label">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-lg border border-border bg-base px-3 py-2.5 text-sm text-ink focus:border-signal/50"
                placeholder="What are you reaching out about?"
              />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 rounded-lg bg-signal px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "sent" ? <CheckCircle2 size={15} /> : <Send size={15} />}
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message sent"
                  : "Send message"}
              </button>
              {status === "error" && (
                <span className="text-xs text-risk-critical">
                  Something went wrong — email me directly instead.
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
