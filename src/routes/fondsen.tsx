import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/fondsen")({
  head: () => ({
    meta: [
      { title: "Fondsen — Lacuna & Lama | BUGG Capital" },
      { name: "description", content: "Co-ownership in Belgisch short-stay vastgoed. Lacuna (leasehold, 12%+ p.j.) en Lama (freehold, 14%+ p.j.). Target €50M AUM." },
      { property: "og:title", content: "Fondsen — Lacuna & Lama | BUGG Capital" },
      { property: "og:description", content: "Twee co-ownership fondsen. Eén systeem. Doe mee — dezelfde positie als de founders." },
    ],
  }),
  component: Fondsen,
});

function ProgressBar({ now, target, milestones }: { now: number; target: number; milestones: { label: string; value: number }[] }) {
  const pct = (now / target) * 100;
  return (
    <div className="mt-8">
      <div className="relative h-2 bg-border rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-primary" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-3 grid grid-cols-3 text-xs text-muted-foreground">
        {milestones.map((m) => (
          <div key={m.label} className={m.label === "Nu" ? "text-primary font-semibold" : ""}>
            <div>{m.label}</div>
            <div className="mt-1 text-foreground font-semibold">€{m.value}M</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fondsen() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Fondsen</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Co-ownership.<br /><span className="italic-accent">Doe mee.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Geen financieel product, geen obligaties. Wij investeren samen met u — dezelfde positie, dezelfde rechten. Lacuna €5M gecommitteerd. Lama €2M pilot. Target: €50M AUM.
          </p>
        </div>
      </section>

      {/* LACUNA */}
      <section id="lacuna" className="border-b border-border scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Lacuna Fund</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Structureel<br /><span className="italic-accent">inkomen compoundt.</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Lacuna richt zich op short-stay units via langetermijn gebruiksrechten (leasehold) binnen holiday domains. Het fonds profiteert van het bewezen Specialstays-systeem: hogere dagprijzen, hogere bezetting, lagere kosten dan de gemiddelde operator.</p>
              <p>Wij kopen samen. Wij bezitten samen. Het rendement wordt verdeeld tussen de co-owners — founders en investeerders in dezelfde positie.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 panel p-8">
              <div className="text-xs uppercase tracking-widest text-primary">Equity Co-ownership</div>
              <div className="mt-4 text-6xl md:text-7xl font-bold text-primary">12%+</div>
              <p className="mt-4 text-muted-foreground max-w-md">
                Target jaarrendement. Huurinkomen én waardestijging. Co-invest naast de founders — iedereen gelijk.
              </p>
              <div className="mt-6 text-xs text-muted-foreground">
                Min. €100.000 · Evergreen structuur · Equity naast founders
              </div>
              <ProgressBar
                now={5}
                target={25}
                milestones={[
                  { label: "Nu", value: 5 },
                  { label: "2026", value: 10 },
                  { label: "Target", value: 25 },
                ]}
              />
            </div>

            <div className="panel p-8">
              <h3 className="text-xl font-semibold">Lacuna Fund</h3>
              <div className="text-xs uppercase tracking-widest text-primary mt-1">Leasehold short-stay</div>
              <dl className="mt-6 space-y-3 text-sm">
                {[
                  ["Gecommitteerd", "€5M"],
                  ["Target AUM", "€25M"],
                  ["Pipeline", "100 units × €250K"],
                  ["Type", "Leasehold · BE Limburg"],
                  ["Structuur", "Evergreen · co-ownership"],
                  ["Equity target", "12%+ p.j."],
                  ["Min. inleg", "€100.000"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/contact" className="btn-primary mt-6 w-full text-xs">
                Documentatie aanvragen <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LAMA */}
      <section id="lama" className="border-b border-border scroll-mt-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Lama Fund</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Build to compound.<br /><span className="italic-accent">Legacy fundament.</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Lama richt zich op stand-alone premium groepsverblijven met directe eigendom van het vastgoed (freehold). Grote panden — 15 tot 20 gasten — die de markt onderwaardeert als woning, maar die als short-stay experience een veelvoud opleveren.</p>
              <p>Thesis: koop op Belgische kostenbasis, verhuur aan Nederlandse gasten die premium betalen. Professioneel beheer heft de yield. Evergreen structuur laat het compounten.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border mb-12">
            {[
              ["14%+", "Target p.j."],
              ["166%+", "Target 7 jaar"],
              ["€266K", "Uit €100K"],
              ["€60K", "NOI/asset p.j."],
            ].map(([n, l]) => (
              <div key={l} className="bg-background p-8">
                <div className="text-4xl font-bold text-primary">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="panel p-8">
              <h3 className="text-xl font-semibold">Lama Fund</h3>
              <div className="text-xs uppercase tracking-widest text-primary mt-1">Freehold luxury group stays</div>
              <dl className="mt-6 space-y-3 text-sm">
                {[
                  ["Pilot capital", "€2M"],
                  ["Target AUM", "€25M"],
                  ["Pipeline", "20 assets × €1,25M"],
                  ["ADR target", "€700–€1.000/n"],
                  ["Structuur", "Evergreen · co-own."],
                  ["Min. inleg", "€100.000"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/contact" className="btn-primary mt-6 w-full text-xs">
                Documentatie aanvragen <ArrowRight size={14} />
              </Link>
            </div>

            <div className="md:col-span-2 panel p-8">
              <div className="text-xs uppercase tracking-widest text-primary">Phase 1 · In uitvoering</div>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div className="border border-border p-6">
                  <h4 className="font-semibold">The Windmill</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Uniek karakter, sterk marketingpotentieel, 8+ slaapkamers.</p>
                </div>
                <div className="border border-border p-6">
                  <h4 className="font-semibold">Villa Grimbia</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Premium 18-pax groepslodge in transformatie.</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Early capital captures the re-rating: instappen nu, vóór stabilisatie.
              </p>
              <ProgressBar
                now={2}
                target={25}
                milestones={[
                  { label: "Nu", value: 2 },
                  { label: "2027", value: 10 },
                  { label: "Target", value: 25 },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            Uitsluitend bestemd voor gekwalificeerde beleggers (Wft). Geen aanbod tot inschrijving of aankoop van effecten. Beleggen brengt risico's met zich mee. Rendementen uit het verleden bieden geen garantie voor de toekomst. Documentatie beschikbaar na ondertekening van een NDA, conform AFM-vrijstellingen.
          </p>
        </div>
      </section>
    </>
  );
}
