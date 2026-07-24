"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import FallbackImage from "./FallbackImage";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[900px] -translate-x-1/2 bg-signal-radial blur-2xl" />

      <div className="relative mx-auto grid w-full max-w-screen-2xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-risk-low" />
            </span>
            <span className="mono-label !text-ink-muted">{profile.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {profile.name}
            <span className="block text-2xl leading-tight text-ink-muted sm:text-3xl lg:text-4xl">
              builds and breaks security systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-balance text-lg leading-8 text-ink-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg bg-signal px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-signal/40 hover:bg-surface-hover"
            >
              <FileDown size={15} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>

        </div>

        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex aspect-square w-full max-w-[22rem] items-center justify-center lg:max-w-[26rem]"
        >
          <div className="absolute inset-0 rounded-full border border-border/70" />
          <div className="absolute inset-8 rounded-full border border-border/50" />
          <div className="absolute inset-16 rounded-full border border-signal/20" />
          <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border border-border bg-surface shadow-card sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            <FallbackImage
              src="/profile picture.png"
              alt={profile.name}
              fill
              sizes="(max-width: 640px) 14rem, 18rem"
              className="object-cover"
              priority
            />
            <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-base bg-risk-low" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-faint hover:text-ink-muted lg:block"
        aria-label="Scroll to About"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
