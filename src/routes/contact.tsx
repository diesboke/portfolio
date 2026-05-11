import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "stijn vdv — contact" },
      { name: "description", content: "Contact stijn vdv." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground text-sm">
      <header className="px-6 md:px-10 pt-6 md:pt-8">
        <Link to="/" className="lowercase tracking-tight">
          stijn vdv
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-3 lowercase text-sm">
        <a href="mailto:hello@stijnvdv.be">contact@stijnvdv.be</a>
        <a
          href="https://www.instagram.com/stijnvdv1"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram: stijnvdv1
        </a>
      </main>
    </div>
  );
}
