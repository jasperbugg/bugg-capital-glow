import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/casussen")({
  head: () => ({
    meta: [
      { title: "Portefeuille — Panden die presteren | BUGG Capital" },
      { name: "description", content: "Onze vastgoedportefeuille: Lacuna, Lama en Residentieel. Voor/na transformaties, actieve panden en pijplijn." },
      { property: "og:title", content: "Portefeuille — Panden die presteren | BUGG Capital" },
      { property: "og:description", content: "Concrete objecten, echte transformaties, bewezen resultaten. Inclusief voor/na en downloadbare rapportages." },
    ],
  }),
  component: Portefeuille,
});

const blocks = [
  { tag: "Lacuna", units: "18", sub: "Short-stay units · leasehold" },
  { tag: "LaMa", units: "4", sub: "Premium groepsverblijven · freehold" },
  { tag: "Residentieel", units: "10+", sub: "Track record · coming soon" },
  { tag: "Actief", units: "24", sub: "Panden in exploitatie" },
  { tag: "Pijplijn", units: "32", sub: "Onder LOI of in onderzoek" },
];

const cases = [
  {
    fund: "Lacuna Fund", meta: "Leasehold · Zonhoven · 2023",
    title: "C50 Ignis: 70% bezetting in jaar 1",
    body: "Van standaard bungalow naar top-performer op Airbnb en Booking.com. Met Specialstays als operating systeem bereikten wij 70% bezetting — ruim boven het nationale gemiddelde van 39,7%. Dynamic pricing, geoptimaliseerde fotografie en actief gastenbeheer maakten het verschil.",
    before: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&q=70",
    after: "https://cdn-cms.bookingexperts.com/media/3464/39/c50_lr_12_772f69b1-b936-4486-9ad2-581e3d2d4dfa.jpg",
  },
  {
    fund: "Lama Fund", meta: "Freehold · Belgisch Limburg · 2025",
    title: "The Windmill: van leegstand naar €60K NOI",
    body: "Een verlaten windmolen in Belgisch Limburg. Uniek karakter, 8+ slaapkamers, maar geen enkele operator zag het potentieel. Wij wel. Transformatie van woning naar premium groepsverblijf met ADR boven €800/nacht.",
    before: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=70",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70",
  },
  {
    fund: "Lama Fund", meta: "Freehold · Belgisch Limburg · 2025",
    title: "Villa Grimbia: 18 pax, premium verhuur",
    body: "Een grote villa gekocht op woningwaarde. Als groepsverblijf voor 18 gasten loopt de ADR op naar €900+/nacht. Cross-border arbitrage in de praktijk: Belgische aankoopprijs, Nederlandse betalingsbereidheid.",
    before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=70",
    after: "https://cdn-cms.bookingexperts.com/media/3743/31/optimized.jpg",
  },
  {
    fund: "Lacuna Fund", meta: "Leasehold · Maastricht · 2024",
    title: "Salpstraat: stedelijke short-stay",
    body: "Compacte stadsunits in Maastricht. Hoge bezetting via Booking.com, sterke reviews. Stabiel inkomen, lage CAPEX.",
    before: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=70",
    after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=70",
  },
  {
    fund: "Residentieel", meta: "Herontwikkeling · Sittard · 2022",
    title: "Burgemeesterswijk: 6 appartementen",
    body: "Verouderd herenhuis omgezet naar 6 huurappartementen voor werkende professionals. Lange contracten, stabiele kasstroom. Voorbeeld voor het Residentieel Fonds.",
    before: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=70",
    after: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=70",
  },
];

function CaseSlider() {
  const [i, setI] = useState(0);
  const c = cases[i];
  return (
    <div className="panel overflow-hidden">
      <div className="grid md:grid-cols-2 gap-px bg-border">
        <div className="bg-background relative aspect-[4/3]">
          <img src={c.before} alt={`${c.title} — voor`} className="w-full h-full object-cover" loading="lazy" />
          <span className="absolute top-4 left-4 bg-background/90 text-foreground text-xs uppercase tracking-widest px-3 py-1.5">Voor</span>
        </div>
        <div className="bg-background relative aspect-[4/3]">
          <img src={c.after} alt={`${c.title} — na`} className="w-full h-full object-cover" loading="lazy" />
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1.5">Na</span>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">{c.fund}</div>
            <div className="text-xs text-muted-foreground mt-1">{c.meta}</div>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">{c.title}</h3>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((i - 1 + cases.length) % cases.length)} className="btn-ghost !p-3" aria-label="Vorige"><ChevronLeft size={16} /></button>
            <button onClick={() => setI((i + 1) % cases.length)} className="btn-ghost !p-3" aria-label="Volgende"><ChevronRight size={16} /></button>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">{c.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-primary text-xs">
            <Download size={14} /> Download rapportage
          </a>
          <Link to="/contact" className="btn-ghost text-xs">Plan bezichtiging</Link>
        </div>
        <div className="mt-6 flex gap-2">
          {cases.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 transition-all ${idx === i ? "w-8 bg-primary" : "w-4 bg-border"}`} aria-label={`Case ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Portefeuille() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Portefeuille</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Panden die<br /><span className="italic-accent">presteren.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Wij beheren een gediversifieerde vastgoedportefeuille met focus op stabiele kasstromen, waardegroei en risicobeheersing. Onze investeringsbeslissingen worden gestuurd door data en een strikt set van prestatie-indicatoren die zowel operationele als financiële kwaliteit bewaken. Doorlopend monitoren we op rendement, bezettingsgraad en waardestabiliteit — met als doel duurzame groei op lange termijn en optimale kapitaalallocatie.
          </p>
        </div>
      </section>

      {/* PORTEFEUILLE BLOKKEN */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="eyebrow mb-10">Verdeling</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
            {blocks.map((b) => (
              <div key={b.tag} className="bg-background p-8">
                <div className="text-xs uppercase tracking-widest text-primary">{b.tag}</div>
                <div className="mt-4 text-5xl font-bold">{b.units}</div>
                <div className="mt-3 text-xs text-muted-foreground leading-relaxed">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE SLIDER */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Case studies</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Voor en na.<br /><span className="italic-accent">Echte cijfers.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Elk object heeft zijn eigen verhaal. Blader door de cases — van aankoop tot resultaat. Volledige rapportages zijn beschikbaar als download.
            </p>
          </div>
          <CaseSlider />
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
