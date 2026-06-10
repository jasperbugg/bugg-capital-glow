import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/casussen")({
  head: () => ({
    meta: [
      { title: "Casussen — De panden. De resultaten. | BUGG Capital" },
      { name: "description", content: "Concrete objecten, echte transformaties, bewezen resultaten. Lacuna en Lama portfolio in het grensgebied NL–BE." },
      { property: "og:title", content: "Casussen — De panden. De resultaten. | BUGG Capital" },
      { property: "og:description", content: "Van standaard bungalow naar 70% bezetting. Drie case studies uit het BUGG portfolio." },
    ],
  }),
  component: Casussen,
});

const portfolio = [
  { name: "Salpstraat, Maastricht", type: "Short-stay · Leasehold", status: "Actief · Lacuna" },
  { name: "Maastraat, Belgisch Limburg", type: "Short-stay · Leasehold", status: "Actief · Lacuna" },
  { name: "Brugstraat, Belgisch Limburg", type: "Short-stay · Leasehold", status: "Actief · Lacuna" },
  { name: "C50 Ignis, Zonhoven", type: "Short-stay · Holiday domain", status: "Actief · Lacuna" },
  { name: "The Windmill, Belgisch Limburg", type: "Premium group stay · Freehold", status: "In uitvoering · Lama" },
  { name: "Villa Grimbia, Belgisch Limburg", type: "Groepslodge 18 pax · Freehold", status: "In uitvoering · Lama" },
];

const cases = [
  {
    fund: "Lacuna Fund",
    meta: "Leasehold · Zonhoven · 2023",
    title: "C50 Ignis: 70% bezetting in jaar 1",
    body: "Van standaard bungalow naar top-performer op Airbnb en Booking.com. Met Specialstays als operating systeem bereikten wij 70% bezetting — ruim boven het nationale gemiddelde van 39,7%. Dynamic pricing, geoptimaliseerde fotografie en actief gastenbeheer maakten het verschil.",
    image: "https://cdn-cms.bookingexperts.com/media/3464/39/c50_lr_12_772f69b1-b936-4486-9ad2-581e3d2d4dfa.jpg",
  },
  {
    fund: "Lama Fund",
    meta: "Freehold · Belgisch Limburg · 2025",
    title: "The Windmill: van leegstand naar €60K NOI",
    body: "Een verlaten windmolen in Belgisch Limburg. Uniek karakter, 8+ slaapkamers, maar geen enkele operator zag het potentieel. Wij wel. Transformatie van woning naar premium groepsverblijf met ADR boven €800/nacht. Volledige renovatie, Specialstays activatie, en een verwacht NOI van €60K per jaar.",
    image: null,
  },
  {
    fund: "Lama Fund",
    meta: "Freehold · Belgisch Limburg · 2025",
    title: "Villa Grimbia: 18 pax, premium verhuur",
    body: "Een grote villa in Belgisch Limburg, gekocht op woningwaarde. Als groepsverblijf voor 18 gasten loopt de ADR op naar €900+/nacht. Cross-border arbitrage in de praktijk: Belgische aankoopprijs, Nederlandse betalingsbereidheid. Transformatie van leegstaande woning naar winstgevend groepsverblijf.",
    image: "https://cdn-cms.bookingexperts.com/media/3743/31/optimized.jpg",
  },
];

function Casussen() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Casussen</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            De panden.<br /><span className="italic-accent">De resultaten.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Hier ziet u hoe wij werken. Concrete objecten, echte transformaties, bewezen resultaten.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Portfolio</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Onze panden.<br /><span className="italic-accent">Actief portfolio.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Een selectie uit het actieve portfolio van BUGG en Specialstays. Van short-stay units tot premium groepsverblijven in het grensgebied NL–BE.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {portfolio.map((p) => (
              <div key={p.name} className="bg-background p-8">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{p.type}</div>
                <div className="mt-4 text-xs uppercase tracking-widest text-primary">{p.status}</div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Volledig portfolio beschikbaar via de dataroom — toegang op aanvraag.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Case studies</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Hoe het<br /><span className="italic-accent">in de praktijk werkt.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Elk object heeft zijn eigen verhaal. Hieronder drie cases — van aankoop tot resultaat.
            </p>
          </div>

          <div className="space-y-6">
            {cases.map((c, i) => (
              <div key={c.title} className="panel grid md:grid-cols-5 overflow-hidden">
                <div className="md:col-span-2 bg-secondary aspect-[4/3] md:aspect-auto overflow-hidden">
                  {c.image ? (
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">🏚️</div>
                  )}
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-primary">{c.fund}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.meta}</div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{c.body}</p>
                  <div className="mt-6">
                    <Link to="/contact" className="btn-ghost text-xs">
                      <Download size={14} /> Download case study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Dataroom</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Dieper in<br /><span className="italic-accent">de cijfers?</span>
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Volledig portfolio, financiële modellen, due diligence documentatie en historische rendementen — beschikbaar via onze dataroom na een korte kennismaking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Toegang aanvragen <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-ghost">Gesprek plannen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
