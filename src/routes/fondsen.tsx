import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/fondsen")({
  head: () => ({
    meta: [
      { title: "Fondsen — Lacuna, Lama & Residentieel | BUGG Capital" },
      { name: "description", content: "Co-ownership in vastgoed in het grensgebied NL–BE. Lacuna (leasehold, 12%+), Lama (freehold, 14%+) en Residentieel Fonds (coming soon)." },
      { property: "og:title", content: "Fondsen — Lacuna, Lama & Residentieel | BUGG Capital" },
      { property: "og:description", content: "Drie co-ownership fondsen. Eén platform. Doe mee — dezelfde positie als de founders." },
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

function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 border-t border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-base md:text-lg font-medium">{it.q}</span>
              {isOpen ? <Minus size={18} className="text-primary flex-shrink-0" /> : <Plus size={18} className="text-primary flex-shrink-0" />}
            </button>
            {isOpen && (
              <p className="pb-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">{it.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

const faqLacuna = [
  { q: "Wat is leasehold precies?", a: "Leasehold betekent dat we langetermijn gebruiksrechten verwerven op een unit binnen een holiday domain in plaats van de grond zelf te kopen. Dat geeft toegang tot premium locaties met een aanzienlijk lagere kapitaalinleg en duidelijk afgebakende exploitatierechten." },
  { q: "Kunnen we de locatie bezoeken?", a: "Ja. Geïnteresseerde co-owners kunnen meereizen op een van de portfolio-bezoeken. We organiseren periodieke open dagen in Belgisch Limburg." },
  { q: "Wat is de minimale inleg?", a: "€100.000. Co-ownership wordt gestructureerd via een AFM-vrijstelling voor gekwalificeerde beleggers." },
  { q: "Hoe wordt het rendement uitgekeerd?", a: "Jaarlijks. Het netto-exploitatieresultaat wordt op pro-rata basis verdeeld onder de co-owners. Founders ontvangen op dezelfde voorwaarden." },
  { q: "Wat zijn de belangrijkste risico's?", a: "Bezetting, regelgeving rond short-stay in BE, vastgoed-cyclus. We werken met conservatieve onderbouwingen en houden liquide reserves per object." },
  { q: "Welke documentatie krijg ik?", a: "Memorandum, financieel model, due diligence, juridische structuur en kwartaalrapportages na toetreding. Toegang via de dataroom na ondertekening NDA." },
];

const faqLama = [
  { q: "Wat is freehold?", a: "Freehold is directe eigendom: zowel de grond als het gebouw. Dat geeft maximale flexibiliteit voor renovatie, herbestemming en uitbreiding — en directe exposure aan waardestijging." },
  { q: "Waarom premium groepsverblijven?", a: "Grote panden (15–20 gasten) worden gewaardeerd als woning, maar verdienen als short-stay een veelvoud. Die arbitrage is de kern van de Lama-thesis." },
  { q: "Kunnen we de panden bezoeken?", a: "Ja. The Windmill en Villa Grimbia zijn beide te bezichtigen na een eerste kennismaking. Plan een afspraak via de contactpagina." },
  { q: "Wat is de target-doorlooptijd?", a: "Evergreen — we sturen op rendement, niet op exit. Co-owners kunnen na een lock-up periode hun positie aanbieden binnen de structuur." },
  { q: "Hoe verschilt Lama van Lacuna?", a: "Lacuna richt zich op gestandaardiseerde short-stay units (leasehold, inkomensgedreven). Lama op grote premium groepsverblijven (freehold, waarde + inkomen). Verschillende profielen, hetzelfde platform." },
  { q: "Is er een hefboom?", a: "Beperkt en alleen op assetniveau. Verantwoorde LTV ratios, vaste rente waar mogelijk. Geen fondsleverage op holdingniveau." },
];

const faqResidentieel = [
  { q: "Wanneer gaat het fonds live?", a: "Pre-launch is open. Definitieve launch zodra de eerste tranche aan co-owners is gecommitteerd. Indicatief: 2026." },
  { q: "Wat is de doelgroep voor verhuur?", a: "Werkende professionals en pendelaars in het grensgebied NL–BE. Stabiele middensegment huur, lange contracten." },
  { q: "Wat is het historische rendement?", a: "Circa 10% per jaar over 10+ herontwikkelingen die we eerder hebben gedaan binnen het netwerk. Niet dezelfde fondsstructuur — wel dezelfde aanpak." },
  { q: "Hoe schrijf ik in voor pre-launch?", a: "Via het contactformulier of een gesprek met Stef. We delen voorwaarden en indicatieve allocatie zodra de structuur staat." },
];

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
            Geen financieel product, geen obligaties. Wij investeren samen met u — dezelfde positie, dezelfde rechten. Lacuna €5M gecommitteerd. Lama €2M pilot. Residentieel in pre-launch.
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
              <ProgressBar now={5} target={25} milestones={[
                { label: "Nu", value: 5 }, { label: "2026", value: 10 }, { label: "Target", value: 25 },
              ]} />
            </div>

            <div className="panel p-8">
              <h3 className="text-xl font-semibold">Lacuna Fund</h3>
              <div className="text-xs uppercase tracking-widest text-primary mt-1">Leasehold short-stay</div>
              <dl className="mt-6 space-y-3 text-sm">
                {[
                  ["Gecommitteerd", "€5M"], ["Target AUM", "€25M"], ["Pipeline", "100 units × €250K"],
                  ["Structuur", "Evergreen · co-own."], ["Equity target", "12%+ p.j."], ["Min. inleg", "€100.000"],
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

          <div className="mt-12">
            <div className="eyebrow">FAQ Lacuna</div>
            <Faq items={faqLacuna} />
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
              <p>Thesis: koop op Belgische kostenbasis, verhuur aan Nederlandse gasten die premium betalen. Professioneel beheer heft de yield. Evergreen structuur laat het compounden.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border mb-12">
            {[["14%+", "Target p.j."], ["166%+", "Target 7 jaar"], ["€266K", "Uit €100K"], ["€60K", "NOI/asset p.j."]].map(([n, l]) => (
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
                  ["Pilot capital", "€2M"], ["Target AUM", "€25M"], ["Pipeline", "20 assets × €1,25M"],
                  ["ADR target", "€700–€1.000/n"], ["Structuur", "Evergreen · co-own."], ["Min. inleg", "€100.000"],
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
              <ProgressBar now={2} target={25} milestones={[
                { label: "Nu", value: 2 }, { label: "2027", value: 10 }, { label: "Target", value: 25 },
              ]} />
            </div>
          </div>

          <div className="mt-12">
            <div className="eyebrow">FAQ Lama</div>
            <Faq items={faqLama} />
          </div>
        </div>
      </section>

      {/* RESIDENTIEEL */}
      <section id="residentieel" className="border-b border-border scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">In ontwikkeling</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Residentieel Fonds<br /><span className="italic-accent">coming soon.</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wij investeren in residentieel vastgoed in het grensgebied tussen België en Nederland, waar sterke vraag bestaat naar kwalitatieve huurwoningen voor werkende professionals en pendelaars. Door bestaande panden te renoveren en te moderniseren creëren wij stabiele huurportefeuilles.
              </p>
              <p>
                Onze aanpak is bewezen met meer dan 10 succesvolle herontwikkelingen en een historisch rendement van circa 10% per jaar.
              </p>
              <p className="text-foreground font-medium">
                Inschrijven voor pre-launch deelname is nu mogelijk.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="btn-primary">Pre-launch interesse melden <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="eyebrow">FAQ Residentieel</div>
            <Faq items={faqResidentieel} />
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
