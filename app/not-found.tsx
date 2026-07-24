import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base px-6 text-center">
      <span className="mono-label text-signal">404</span>
      <h1 className="mt-3 text-2xl font-semibold text-ink">This route isn&apos;t in scope.</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-signal px-5 py-2.5 text-sm font-medium text-white"
      >
        Back home
      </Link>
    </main>
  );
}
