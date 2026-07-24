import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://mugeshselvam.dev"),
  title: {
    default: `${profile.name} — Cybersecurity Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Mugesh Selvam K",
    "Cybersecurity Engineer",
    "SOC Analyst",
    "VAPT",
    "Penetration Testing",
    "Threat Hunting",
    "SIEM",
    "Ethical Hacking",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — Cybersecurity Engineer`,
    description: profile.tagline,
    url: "https://mugeshselvam.dev",
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Cybersecurity Engineer`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem("theme");
                const light = stored === "light" || (stored !== "dark" && window.matchMedia("(prefers-color-scheme: light)").matches);
                document.documentElement.classList.toggle("theme-light", light);
                document.documentElement.style.colorScheme = light ? "light" : "dark";
              } catch (_) {}
            })();`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-signal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
