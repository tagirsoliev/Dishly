import type { ReactNode } from "react";

export function AuthCard({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-surface">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="mt-1 text-sm text-muted">{description}</p>
        <div className="mt-6 flex flex-col gap-4">{children}</div>
        <p className="mt-6 text-center text-sm text-muted">{footer}</p>
      </div>
    </div>
  );
}
