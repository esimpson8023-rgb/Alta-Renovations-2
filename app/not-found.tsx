import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="font-display text-3xl text-charcoal sm:text-4xl">
        Page Not Found
      </h1>
      <p className="max-w-sm text-sm text-stone">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-4">
        Back to Home
      </Link>
    </main>
  );
}
