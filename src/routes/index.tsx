import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { artworks } from "@/data/artworks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "stijn vdv — works" },
      { name: "description", content: "Works by stijn vdv." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 items-center">
        {artworks.map((art) => (
          <Link
            key={art.slug}
            to="/works/$slug"
            params={{ slug: art.slug }}
            className="flex flex-col"
          >
            <img
              src={art.filename}
              alt={art.title}
              className="w-full h-auto block"
              loading="lazy"
            />
            <figcaption className="mt-3 text-xs lowercase">
              {art.title}, {art.year}
            </figcaption>
          </Link>
        ))}
      </div>
    </SiteLayout>
  );
}
