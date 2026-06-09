import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BUGG Capital — Platform thinking voor vastgoed" },
      { name: "description", content: "Co-ownership in short-stay vastgoed in het grensgebied NL–BE. Eigen platform, eigen fondsen, founders investeren mee. Iedereen gelijk." },
      { property: "og:title", content: "BUGG Capital — Platform thinking voor vastgoed" },
      { property: "og:description", content: "Lacuna & Lama: twee complementaire co-ownership fondsen in short-stay vastgoed. Platform-gedreven rendement." },
    ],
  }),
  component: Home,
});

const flywheel = [
  { n: "01", t: "Data & Prognoses", b: "Wij analyseren markten, locaties en exploitatiemogelijkheden om kansen te identificeren." },
  { n: "02", t: "Vastgoedontwikkeling", b: "Wij verwerven en ontwikkelen vastgoed met focus op rendement, schaalbaarheid en waardecreatie." },
  { n: "03", t: "Beleving & Presentatie", b: "Door onderscheidende inrichting en hoogwaardige online en offline presentatie creëren wij een unieke gastbeleving." },
  { n: "04", t: "Distributie", b: "Wij maximaliseren bereik en bezetting via meer dan 100 distributie- en boekingskanalen." },
  { n: "05", t: "Optimalisatie", b: "Wij sturen continu op presentatie, gasttevredenheid, bezettingsgraad en marges om rendement verder te verhogen." },
];

const kpis = [
  ["70%", "Bezetting vs 39,7% nationaal"],
  ["8.8", "Gastbeoordeling"],
  ["+29%", "Boven marktgemiddelde"],
  ["€7M", "Gecommitteerd capital"],
  ["24", "Panden in portefeuille"],
  ["12+", "Aankopen per jaar"],
  ["+38%", "Gem. waardestijging na verbouwing"],
  ["8–18%", "Range netto rendement"],
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow justify-center">BUGG Capital · Since 2012</div>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Doe mee.<br />
              Investeer samen<br />
              <span className="italic-accent">met de founders.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Co-ownership in short-stay vastgoed in het grensgebied NL–BE. Wij bouwen de platforms, beheren de panden en investeren zelf mee. Iedereen gelijk.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/fondsen" className="btn-primary">Onze fondsen <ArrowRight size={16} /></Link>
              <Link to="/casussen" className="btn-ghost">Bekijk portefeuille</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="w-8 h-px bg-muted-foreground" /> Scroll <ArrowDown size={12} />
        </div>
      </section>

      {/* PLATFORM THINKING */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Ons platform thinking</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Hoe werkt<br /><span className="italic-accent">dat eigenlijk?</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed self-end">
            <p>
              Waar anderen een vastgoedobject zien, zien wij een ecosysteem van kansen. Door iedere stap in de keten zelf te optimaliseren, creëren we meer waarde, meer controle en meer rendement.
            </p>
            <p>
              De fondsen zijn het product. Het platform — data, distributie, beleving, beheer — is het verschil.
            </p>
          </div>
        </div>
      </section>

      {/* VLIEGWIEL */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Het vliegwiel</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Vijf fases.<br /><span className="italic-accent">Eén systeem.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Elke fase versterkt de volgende. Data voedt ontwikkeling. Beleving voedt distributie. Optimalisatie voedt opnieuw data. Zo bouwt het rendement zichzelf op.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {flywheel.map((p) => (
              <div key={p.n} className="bg-background p-6 lg:p-8">
                <div className="text-xs uppercase tracking-widest text-primary">Fase {p.n}</div>
                <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONDSEN PREVIEW */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <div className="eyebrow">Beleggingsmogelijkheden</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Drie fondsen.<br /><span className="italic-accent">Eén platform.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Co-ownership in vastgoed in het grensgebied NL–BE. Wij investeren zelf mee — iedereen in dezelfde positie.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { tag: "Lacuna · Leasehold", title: "Structureel inkomen.", body: "Short-stay units via gebruiksrechten. Bewezen bezetting. Founders investeren mee.", stats: [["Gecommitteerd", "€5M"], ["Equity target", "12%+ p.j."]] },
              { tag: "Lama · Freehold", title: "Vermogen dat compoundt.", body: "Premium groepsverblijven met directe eigendom. €100K → €266K over 7 jaar.", stats: [["Pilot capital", "€2M"], ["Equity target", "14%+ p.j."]] },
              { tag: "Residentieel · Coming soon", title: "Stabiele huurportefeuille.", body: "Residentieel vastgoed in het grensgebied. Bewezen aanpak: 10+ herontwikkelingen, ~10% historisch rendement.", stats: [["Pre-launch", "Open"], ["Indicatief", "~10% p.j."]] },
            ].map((f, i) => (
              <div key={i} className="panel p-8 flex flex-col">
                <div className="text-xs uppercase tracking-widest text-primary">{f.tag}</div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{f.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{f.body}</p>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                  {f.stats.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs text-muted-foreground">{k}</dt>
                      <dd className="mt-1 font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex gap-2">
                  <Link to="/fondsen" className="btn-primary !py-2.5 !px-4 text-xs">Meer info →</Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Uitsluitend beschikbaar voor gekwalificeerde beleggers. Gedetailleerde documentatie op aanvraag.
          </p>
        </div>
      </section>

      {/* KPI's */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="eyebrow mb-12">De cijfers</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Panden die <span className="italic-accent">presteren.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {kpis.map(([n, l]) => (
              <div key={l} className="bg-background p-8">
                <div className="text-3xl md:text-4xl font-bold text-primary">{n}</div>
                <div className="mt-3 text-xs text-muted-foreground uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/casussen" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              Bekijk volledige portefeuille <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FILOSOFIE */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 text-center">
          <div className="eyebrow justify-center">De filosofie</div>
          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-[1.1] max-w-4xl mx-auto">
            <span className="italic-accent">Grensgebied.</span>{" "}
            <span className="italic-accent">Eigen platform.</span>{" "}
            <span className="italic-accent">Samen investeren.</span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BUGG is geen financieel product. Wij zijn ondernemers. U komt naast ons staan — dezelfde positie, dezelfde rechten. Wat wij erin stoppen, dat stoppen u en wij er samen in.
          </p>
          <div className="mt-10">
            <Link to="/over-ons" className="btn-ghost">Leer ons kennen <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Eerste stap</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Klaar voor<br /><span className="italic-accent">een gesprek?</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Geen pitch, geen druk. Een gesprek over wat BUGG doet en of het bij u past.
            </p>
            <Link to="/contact" className="btn-primary">Gesprek aanvragen <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
