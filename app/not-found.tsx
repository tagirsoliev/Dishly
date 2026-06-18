import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <span className="text-7xl font-bold tracking-tight text-accent sm:text-8xl">
        404
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="max-w-md text-lg text-muted">
        We couldn&apos;t find the recipe or page you were looking for. It may
        have been moved or removed.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg" className="mt-2">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
