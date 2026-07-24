import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FallbackImage from "@/components/FallbackImage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border-soft py-8 first:border-t-0 first:pt-0">
      <span className="mono-label text-signal">{title}</span>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  const { content } = project;

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-screen-2xl px-6 pb-24 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:gap-12">
          <article className="lg:w-[70%]">
            <div className="rounded-[28px] border border-border bg-surface/80 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.45)] sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="mono-label text-signal">Case Study</span>
                <span className="text-sm text-ink-faint">{project.stack[0]}</span>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-muted">{project.tagline}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border bg-base px-4 py-2 text-sm text-ink transition-colors hover:border-signal/40"
                >
                  <Github size={14} />
                  Repository
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-border bg-base px-4 py-2 text-sm text-ink transition-colors hover:border-signal/40"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="mt-8 relative h-[280px] overflow-hidden rounded-2xl border border-border bg-base sm:h-[360px]">
                <FallbackImage
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-base p-5 sm:grid-cols-3">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-lg font-medium text-ink sm:text-xl">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2">
                <Block title="Problem">
                  <p className="text-[15px] leading-8 text-ink-muted">{content.problem}</p>
                </Block>
                <Block title="Objective">
                  <p className="text-[15px] leading-8 text-ink-muted">{content.objective}</p>
                </Block>
                <Block title="Architecture">
                  <p className="text-[15px] leading-8 text-ink-muted">{content.architecture}</p>
                </Block>
                <Block title="Methodology">
                  <ul className="space-y-2.5">
                    {content.methodology.map((m) => (
                      <li key={m} className="flex gap-3 text-[15px] leading-8 text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block title="Tools Used">
                  <div className="flex flex-wrap gap-1.5">
                    {content.toolsUsed.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-soft bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Block>
                <Block title="Challenges">
                  <p className="text-[15px] leading-8 text-ink-muted">{content.challenges}</p>
                </Block>
                <Block title="Solution">
                  <p className="text-[15px] leading-8 text-ink-muted">{content.solution}</p>
                </Block>
                <Block title="Results">
                  <ul className="space-y-2.5">
                    {content.results.map((r) => (
                      <li key={r} className="flex gap-3 text-[15px] leading-8 text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-risk-low" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block title="Lessons Learned">
                  <p className="text-[15px] leading-8 text-ink-muted">{content.lessons}</p>
                </Block>
                <Block title="Future Improvements">
                  <ul className="space-y-2.5">
                    {content.futureImprovements.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-8 text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>
            </div>
          </article>

          <aside className="lg:w-[30%] lg:pl-2">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <span className="mono-label text-signal">Overview</span>
                <div className="mt-4 space-y-3 text-sm text-ink-muted">
                  <div className="flex items-center justify-between gap-3 border-b border-border-soft pb-3">
                    <span>Focus</span>
                    <span className="text-ink">Security tooling</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-b border-border-soft pb-3">
                    <span>Stack</span>
                    <span className="text-ink">{project.stack.join(" · ")}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Type</span>
                    <span className="text-ink">Independent build</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <span className="mono-label text-signal">Technologies</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-soft bg-base px-2.5 py-1 text-[11px] text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
