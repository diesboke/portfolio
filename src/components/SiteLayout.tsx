import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground text-sm">
      <header className="px-6 md:px-10 pt-6 md:pt-8">
        <Link to="/" className="lowercase tracking-tight">
          stijn vdv
        </Link>
        <nav className="mt-1 flex gap-4 text-xs lowercase">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ style: { color: "var(--hover-accent)" } }}>
            works
          </Link>
          <Link to="/about" activeProps={{ style: { color: "var(--hover-accent)" } }}>
            about
          </Link>
          <Link to="/contact" activeProps={{ style: { color: "var(--hover-accent)" } }}>
            contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 px-6 md:px-10 py-12 md:py-16">{children}</main>

      <footer className="py-16 flex justify-center">
        <Link
          to="/contact"
          className="font-mono text-xs lowercase tracking-widest"
        >
          contact
        </Link>
      </footer>
    </div>
  );
}
