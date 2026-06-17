"use client";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

const navLinks = [
  { label: "Recipes", href: "/recipes" },
  { label: "Categories", href: "/categories" },
  { label: "Favorites", href: "/favorites" },
  { label: "About", href: "/about" },
];

// TODO: replace with useSession() from next-auth when auth is set up
const session = null;

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-surface-secondary"
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Dishly logo" width={60} height={60} priority />
          <span className=" text-xl font-bold tracking-tight">Dishly</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth */}
        <div className="hidden sm:flex items-center gap-2">
          <ThemeToggle />
          {session ? (
            <Avatar size="sm">
              <Avatar.Fallback>U</Avatar.Fallback>
            </Avatar>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm">Sign up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-muted"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-border px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-border">
            <Link href="/login" className="flex-1">
              <Button variant="ghost" size="sm" className="w-full">Sign in</Button>
            </Link>
            <Link href="/register" className="flex-1">
              <Button variant="primary" size="sm" className="w-full">Sign up</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
