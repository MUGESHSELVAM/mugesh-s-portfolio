"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [light, setLight] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight =
      stored === "light" ||
      (stored !== "dark" && window.matchMedia("(prefers-color-scheme: light)").matches);
    setLight(isLight);
    document.documentElement.classList.toggle("theme-light", isLight);
    document.documentElement.style.colorScheme = isLight ? "light" : "dark";
  }, []);

  function toggle() {
    const next = !(light ?? document.documentElement.classList.contains("theme-light"));
    setLight(next);
    document.documentElement.classList.toggle("theme-light", next);
    document.documentElement.style.colorScheme = next ? "light" : "dark";
    localStorage.setItem("theme", next ? "light" : "dark");
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 300);
  }

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={light === true}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-signal/40 hover:text-ink"
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
