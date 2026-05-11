import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { artworks, artist } from "@/data/artworks";

export const Route = createFileRoute("/works/$slug")({
  head: ({ params }) => {
    const art = artworks.find((a) => a.slug === params.slug);
    const title = art ? `${art.title}, ${art.year} — ${artist}` : `${artist}`;
    return {
      meta: [
        { title },
        { name: "description", content: art ? `${art.title}, ${art.year}` : "" },
      ],
    };
  },
  loader: ({ params }) => {
    const art = artworks.find((a) => a.slug === params.slug);
    if (!art) throw notFound();
    return { art };
  },
  component: WorkDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <p className="lowercase text-xs">work not found.</p>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <p className="lowercase text-xs">{error.message}</p>
    </SiteLayout>
  ),
});

function WorkDetail() {
  const { art } = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-6 text-xs lowercase font-mono">
          <div>{artist}</div>
          <div>
            <div>{art.title}, {art.year}</div>
            <div className="mt-2">{art.medium}</div>
            <div>{art.dimensions}</div>
          </div>
          <div>{art.copyright}</div>
          <Link to="/contact" className="underline-offset-4">
            
          </Link>
        </div>
        <div className="order-1 md:order-2 flex md:justify-end">
          <img
            src={art.filename}
            alt={art.title}
            className="w-full h-auto md:max-h-[80vh] md:w-auto object-contain"
          />
        </div>
      </div>
    </SiteLayout>
  );
}
