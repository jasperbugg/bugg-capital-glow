import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BUGG Capital — Doe mee. Investeer samen met de founders." },
      { name: "description", content: "Co-ownership in Belgisch short-stay vastgoed. Wij bouwen de platforms, beheren de panden en investeren zelf mee. Iedereen gelijk." },
      { property: "og:title", content: "BUGG Capital — Doe mee. Investeer samen met de founders." },
      { property: "og:description", content: "Lacuna & Lama: twee complementaire co-ownership fondsen in Belgisch short-stay vastgoed." },
    ],
  }),
  component: Home,
});

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
              Co-ownership in Belgisch short-stay vastgoed. Wij bouwen de platforms, beheren de panden en investeren zelf mee. Iedereen gelijk.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/fondsen" className="btn-primary">Onze fondsen <ArrowRight size={16} /></Link>
              <Link to="/casussen" className="btn-ghost">Bekijk casussen</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="w-8 h-px bg-muted-foreground" /> Scroll <ArrowDown size={12} />
        </div>
      </section>

      {/* DE HOLDING */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">De holding</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Meer dan<br /> een fonds.<br />
              <span className="italic-accent">Een platform.</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Gestart in 2012 met venture building in de platform-industrie: van social platforms (Fangage) tot e-commerce via Colengo en SvB. Die platform-kennis zetten we nu in op de OTA-markt — Airbnb, Booking.com, VRBO en Expedia. Het product is vastgoed. Het operating systeem is Specialstays.
            </p>
            <p>
              Sinds 2024 beheren we externe fondsen: Lacuna (leasehold, €5M gecommitteerd) en Lama (freehold, €2M pilot). Beide gericht op het grensgebied NL–BE.
            </p>
            <Link to="/over-ons" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              Over BUGG <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-px bg-border">
          {[
            { title: "Short-stay fondsen", body: "Lacuna & Lama — twee complementaire co-ownership strategieën in Belgisch short-stay vastgoed." },
            { title: "Operationeel platform", body: "Specialstays beheert het volledige portfolio — pricing, gasten, kwaliteit. De motor achter elk rendement." },
            { title: "Cross-border arbitrage", body: "Inkopen in België. Verhuren aan Nederlandse gasten die premium betalen. Dat verschil is structureel en reproduceerbaar." },
          ].map((p, i) => (
            <div key={i} className="bg-background p-10">
              <div className="text-xs text-primary tracking-widest uppercase">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUGG METHODE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">De BUGG methode</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Hoe wij<br /><span className="italic-accent">het doen.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Zes stappen. Elke keer opnieuw. Zo halen wij consistent hogere rendementen dan de markt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              ["Scouten", "Data-gedreven object selectie. Wij zien hospitality assets waar anderen woningen zien."],
              ["Analyseren", "Yield-berekening & due diligence. Geen gevoel — systemen en data."],
              ["Transformeren", "Renovatie & inrichting op short-stay niveau. Maximale gastbeleving, minimale kosten."],
              ["Platform", "Specialstays activatie — Airbnb, Booking.com, VRBO, Expedia tegelijk."],
              ["Optimaliseren", "Dynamic pricing, reviews, bezetting. 70% vs 39,7% nationaal gemiddelde."],
              ["Compounderen", "Rendement herinvesteren. Portfolio groeit. Co-owners groeien mee."],
            ].map(([title, body], i) => (
              <div key={i} className="bg-background p-8">
                <div className="text-5xl font-bold text-primary/30">{i + 1}</div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/casussen" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              Bekijk hoe het in de praktijk werkt <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FONDSEN PREVIEW */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <div className="eyebrow">Beleggingsmogelijkheden</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Twee fondsen.<br /><span className="italic-accent">Eén systeem.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Co-ownership in Belgisch short-stay vastgoed. Wij investeren zelf mee — iedereen in dezelfde positie. Geen financieel product, geen obligaties. Gewoon: doe mee.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { tag: "Lacuna Fund · Leasehold", title: "Structureel inkomen.", body: "Co-ownership in short-stay units via gebruiksrechten. Bewezen bezetting. Founders investeren mee.", stats: [["Gecommitteerd", "€5M"], ["Target AUM", "€25M"], ["Equity target", "12%+ p.j."], ["Min. inleg", "€100.000"]] },
              { tag: "Lama Fund · Freehold", title: "Vermogen dat compoundt.", body: "Premium groepsverblijven, directe eigendom. Evergreen equity. €100K groeit naar €266K over 7 jaar.", stats: [["Pilot capital", "€2M"], ["Target AUM", "€25M"], ["Equity target", "14%+ p.j."], ["Min. inleg", "€100.000"]] },
            ].map((f, i) => (
              <div key={i} className="panel p-8 flex flex-col">
                <div className="text-xs uppercase tracking-widest text-primary">{f.tag}</div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">{f.title}</h3>
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
                  <Link to="/fondsen" className="btn-primary !py-2.5 !px-4 text-xs">Meer over {f.tag.split(" ")[0]} →</Link>
                  <Link to="/contact" className="btn-ghost !py-2.5 !px-4 text-xs">Interesse melden</Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Uitsluitend beschikbaar voor gekwalificeerde beleggers. Gedetailleerde documentatie op aanvraag.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="eyebrow mb-12">Het portfolio</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Panden die <span className="italic-accent">presteren.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              ["70%", "Bezetting vs 39,7% nationaal"],
              ["8.8", "Gastbeoordeling"],
              ["+29%", "Boven marktgemiddelde"],
              ["€7M", "Gecommitteerd capital"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary">{n}</div>
                <div className="mt-3 text-xs text-muted-foreground uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/casussen" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              Bekijk alle casussen <ArrowRight size={16} />
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
            BUGG is geen financieel product. Wij zijn ondernemers. Je komt naast ons staan — dezelfde positie, dezelfde rechten. Wat wij erin stoppen, dat stoppen jij en wij er samen in.
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
