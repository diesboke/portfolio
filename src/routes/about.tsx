import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "stijn vdv — about" },
      { name: "description", content: "About stijn vdv." },
    ],
  }),
  component: About,
});

export default function About() {
  return (
    <SiteLayout>
      <div className="max-w-xl mx-auto text-sm">
        <h1 className="lowercase"></h1>
        
        <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>DISKUS - Diepestraat 46, 9300 aalst</span>
          <span>AMOK - Esplanadestraat 14, 9300 aalst</span>
          <span>PEGGY WAUTERS - Langestraat 51, 9300 aalst</span>
          <span>PUPILLEN - Graanmarkt 3, 9300 aalst</span>
        </div>

        <p style={{ marginTop: '20px' }}>
          TE BEZICHTIGEN 23-24-25 MEI IN AALST.
        </p>
      </div>
    </SiteLayout>
  );
}
