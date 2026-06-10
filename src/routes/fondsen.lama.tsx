import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/fondsen/lama")({
  component: LamaPage,
  head: () => ({
    meta: [
      { title: "Lama Fund · Freehold · BUGG Capital" },
      {
        name: "description",
        content:
          "Lama Fund — premium groepsverblijven met freehold eigendom. 14%+ target, pilot fase, €2M gecommitteerd. Built to compound.",
      },
    ],
  }),
});

function SpecTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      {rows.map((r, i) => (
        <div key={i} className="flex justify-between gap-4 py-3 border-b border-border text-sm">
          <dt className="text-muted-foreground">{r.k}</dt>
          <dd className="text-right text-foreground">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="aspect-[4/3] bg-[var(--surface)] border border-border flex items-center justify-center text-[10px] uppercase tracking-widest text-muted-foreground px-3 text-center"
    >
      {label}
    </div>
  );
}

function LamaPage() {
  const { t } = useLanguage();

  const cases = [
    {
      title: "The Windmill",
      meta: t("Freehold · Belgisch Limburg · 2025", "Freehold · Belgian Limburg · 2025"),
      body: t(
        "Een verlaten windmolen in Belgisch Limburg. Uniek karakter, 8+ slaapkamers. Transformatie van woning naar premium groepsverblijf met ADR boven €800/nacht.",
        "An abandoned windmill in Belgian Limburg. Unique character, 8+ bedrooms. Transformed from residential property into a premium group stay with ADR above €800/night.",
      ),
    },
    {
      title: "Villa Grimbia",
      meta: t("Freehold · Belgisch Limburg · 2025", "Freehold · Belgian Limburg · 2025"),
      body: t(
        "Grote villa gekocht op woningwaarde. Als groepsverblijf voor 18 gasten loopt de ADR op naar €900+/nacht. Cross-border arbitrage: Belgische aankoopprijs, Nederlandse betalingsbereidheid.",
        "Large villa acquired at residential value. As a group stay for 18 guests, ADR reaches €900+/night. Cross-border arbitrage: Belgian acquisition price, Dutch willingness to pay.",
      ),
    },
  ];

  const faq = [
    {
      q: t("Hoe verschilt freehold van leasehold binnen BUGG?", "How does freehold differ from leasehold within BUGG?"),
      a: t(
        "Bij Lama (freehold) verwerft het fonds het vastgoed in volledige eigendom — grond én opstal. Dat geeft onderpand, herfinancierbaarheid en directe waardegroei. Lacuna werkt met leasehold binnen domains.",
        "With Lama (freehold) the fund acquires real estate in full ownership — land and building. That provides collateral, refinanceability and direct value growth. Lacuna operates with leasehold inside domains.",
      ),
    },
    {
      q: t("Waarom groepsverblijven en niet reguliere short-stay?", "Why group stays and not regular short-stay?"),
      a: t(
        "Groepsverblijven (15–20 pax) worden door de markt gewaardeerd als woning, maar genereren als short-stay experience een veelvoud. Daar zit de structurele arbitrage.",
        "Group stays (15–20 pax) are valued as homes by the market, but generate a multiple as short-stay experiences. That is the structural arbitrage.",
      ),
    },
    {
      q: t("Hoe werkt het compounding-model in Lama?", "How does the compounding model work in Lama?"),
      a: t(
        "Cashflow uit exploitatie wordt herinvesteerd in nieuwe acquisities. Waardestijging van het bestaande vastgoed verhoogt onderpandwaarde en financieringscapaciteit. Het fonds groeit op zichzelf.",
        "Operating cashflow is reinvested into new acquisitions. Appreciation of existing properties increases collateral value and financing capacity. The fund grows on itself.",
      ),
    },
    {
      q: t("Wat is de lockup en deelnamedrempel?", "What is the lockup and minimum participation?"),
      a: t(
        "Lockup van 9 jaar, minimum €100.000. Uitsluitend voor gekwalificeerde beleggers (Wft/FSMA).",
        "9-year lockup, minimum €100,000. Available only to qualified investors (Wft/FSMA).",
      ),
    },
  ];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="section-blue border-b border-border">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="eyebrow">Lama Fund · Freehold</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
            {t(
              <>Premium groepsverblijven.<br /><span className="italic-accent">Built to compound.</span></>,
              <>Premium group stays.<br /><span className="italic-accent">Built to compound.</span></>,
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            {t(
              "Lama investeert in stand-alone premium groepsverblijven met directe eigendom (freehold). Panden van 15 tot 20 gasten die de markt waardeert als woning — maar als short-stay experience een veelvoud opleveren.",
              "Lama invests in stand-alone premium group stays with direct ownership (freehold). Properties for 15 to 20 guests valued as homes by the market — but yielding a multiple as a short-stay experience.",
            )}
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {t(
              "Inkopen op Belgische kostenbasis. Verhuren aan Nederlandse gasten die premium betalen. Specialstays verzorgt het volledige beheer.",
              "Acquired on a Belgian cost basis. Rented to Dutch guests paying premium rates. Specialstays runs the full operation.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button type="button" className="btn-primary opacity-90 cursor-not-allowed">
              {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={16} />
            </button>
            <Link to="/contact" className="btn-ghost">{t("Contact opnemen", "Get in touch")}</Link>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
          <div className="panel p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              {t("Specificaties", "Specifications")}
            </div>
            <SpecTable
              rows={[
                { k: t("Type", "Type"), v: t("Freehold · Belgisch Limburg", "Freehold · Belgian Limburg") },
                { k: t("Structuur", "Structure"), v: t("Co-ownership · evergreen", "Co-ownership · evergreen") },
                { k: t("Minimale deelname", "Minimum participation"), v: "€100.000" },
                { k: "Lockup", v: t("9 jaar", "9 years") },
                { k: t("Equity target", "Equity target"), v: t("14%+ per jaar", "14%+ per year") },
                { k: t("Pilot capital", "Pilot capital"), v: "€2M" },
                { k: "Target AUM", v: "€25M" },
                { k: "ADR target", v: t("€700–€1.000 per nacht", "€700–€1,000 per night") },
                { k: t("Vrijstelling", "Exemption"), v: t("Gekwalificeerde beleggers (Wft/FSMA)", "Qualified investors (Wft/FSMA)") },
              ]}
            />
          </div>
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                {t("Filosofie", "Philosophy")}
              </div>
              <p className="text-foreground leading-relaxed">
                {t(
                  "Onderbenut, complex of moeilijk verhandelbaar vastgoed — scherp gekocht, professioneel herontwikkeld, premium verhuurd.",
                  "Underused, complex or hard-to-sell real estate — sharply acquired, professionally redeveloped, premium rented.",
                )}
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-primary">Built to compound.</p>
          </div>
        </div>
      </section>

      {/* DRIE LAGEN ARBITRAGE */}
      <section className="section-blue border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("De edge", "The edge")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
                {t(
                  <>Drie lagen<br /><span className="italic-accent">arbitrage.</span></>,
                  <>Three layers of<br /><span className="italic-accent">arbitrage.</span></>,
                )}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t(
                "Niet één voordeel, maar drie tegelijk — gestapeld op hetzelfde asset.",
                "Not one edge, but three at once — stacked on the same asset.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                k: t("Geografie", "Geography"),
                v: t(
                  "Belgische aankoopprijzen. Nederlandse betalingsbereidheid. Voor de gast is de grens irrelevant.",
                  "Belgian acquisition prices. Dutch willingness to pay. To the guest the border is irrelevant.",
                ),
              },
              {
                k: t("Duratie", "Duration"),
                v: t(
                  "De markt prijst deze panden als woning. Hun werkelijke waarde ligt in short-stay exploitatie.",
                  "The market prices these properties as homes. Their true utility is as short-stay hospitality assets.",
                ),
              },
              {
                k: t("Digitalisering", "Digitalisation"),
                v: t(
                  "Specialstays' operating systeem — dynamic pricing, interieurstandaard, reviewbeheer — tilt NOI en NAV.",
                  "Specialstays' operating system — dynamic pricing, interior standard, review management — lifts NOI and NAV.",
                ),
              },
            ].map((b) => (
              <div key={b.k} className="panel p-8">
                <div className="text-xs uppercase tracking-widest text-primary">{b.k}</div>
                <p className="mt-4 text-foreground leading-relaxed">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* IN ONTWIKKELING */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("In ontwikkeling", "In development")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
                {t(<>De panden.<br /><span className="italic-accent">In wording.</span></>, <>The properties.<br /><span className="italic-accent">Taking shape.</span></>)}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t("Een eerste blik op het Lama portfolio. Foto's volgen na oplevering.", "A first look at the Lama portfolio. Photos to follow upon delivery.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((c) => (
              <div key={c.title} className="panel p-6 md:p-8">
                <ImagePlaceholder label={t("Locatie in ontwikkeling — meer info volgt", "Location in development — more info to follow")} />
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-primary">Lama Fund</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.meta}</div>
                  <h3 className="mt-3 text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STEP MACHINE */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("Hoe het werkt", "How it works")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
                {t(
                  <>Don't just buy the house.<br /><span className="italic-accent">Buy the system.</span></>,
                  <>Don't just buy the house.<br /><span className="italic-accent">Buy the system.</span></>,
                )}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t(
                "Een repeatable machine in vier stappen. Geen one-off deal — een systeem dat compoundt.",
                "A repeatable machine in four steps. Not a one-off deal — a system that compounds.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { n: "01", k: "Buy", v: t("Acquireren van large-format vastgoed op Belgische kostenbasis.", "Acquire large-format assets at Belgian purchase prices.") },
              { n: "02", k: "Improve", v: t("Alleen upgraden wat NOI en gastbeleving verhoogt.", "Upgrade only what increases guest value and NOI.") },
              { n: "03", k: "Execute", v: t("Repeatable operating systeem: pricing, bezetting, reviews, kosten.", "Repeatable operating system: pricing, occupancy, reviews, cost control.") },
              { n: "04", k: "Compound", v: t("Cashflow herinvesteren om de portefeuille te schalen.", "Reinvest gains to scale the portfolio.") },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="text-xs uppercase tracking-widest text-primary">{s.n}</div>
                <h3 className="mt-3 text-2xl font-semibold">{s.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT ECONOMICS */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Unit economics</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
                {t(
                  <>Robuuste economics op<br /><span className="italic-accent">conservatieve baselines.</span></>,
                  <>Robust economics at<br /><span className="italic-accent">conservative baselines.</span></>,
                )}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t(
                "Conservatief gemodelleerd op bewezen bezettingsniveaus, niet op blue-sky scenario's.",
                "Conservatively modelled on proven occupancy levels, not on blue-sky scenarios.",
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
            {[
              { v: "18", l: t("Gasten per pand", "Guests per asset") },
              { v: "€40–60", l: t("Tarief per persoon", "Rate per person") },
              { v: "€700–1K", l: t("Target ADR / nacht", "Target ADR / night") },
              { v: "55–60%", l: t("Bezetting", "Occupancy") },
              { v: "~€60K", l: t("Gestabiliseerde NOI / jaar", "Stabilised NOI / year") },
            ].map((k) => (
              <div key={k.l} className="bg-background p-6">
                <div className="text-2xl md:text-3xl font-bold text-primary">{k.v}</div>
                <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RE-RATING MATH */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Re-rating</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              {t(
                <>Waarom vroeg<br /><span className="italic-accent">kapitaal wint.</span></>,
                <>Why early<br /><span className="italic-accent">capital wins.</span></>,
              )}
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">{t("Investeringsfase", "Investment phase")}</span> — {t("aankoop + renovatie als risk capital.", "cost plus renovation as risk capital.")}
              </p>
              <p>
                <span className="text-foreground font-semibold">{t("Gestabiliseerde fase", "Stabilised phase")}</span> — {t("gewaardeerd op yield. ~5,5% cap rate als markt-benchmark.", "valued on yield. ~5.5% cap rate as the market benchmark.")}
              </p>
            </div>
          </div>

          <div className="panel p-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("De rekensom", "The math")}
            </div>
            <div className="mt-6 text-3xl md:text-4xl font-semibold leading-tight">
              ~€60K NOI <span className="text-muted-foreground">÷</span> 5,5%
              <br />
              <span className="text-muted-foreground">=</span> <span className="text-primary">~€1M+</span>
              <span className="block text-base font-normal text-muted-foreground mt-1">{t("waardering per asset", "valuation per asset")}</span>
            </div>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
              {t(
                "Wie nu instapt vangt de eerste re-rating zodra het asset overgaat van renovatie-risico naar gestabiliseerde NOI.",
                "Investing now captures the first re-rating as the asset moves from renovation risk to stabilised NOI.",
              )}
            </p>
          </div>
        </div>
      </section>


      {/* PIPELINE */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Pipeline</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
              {t(<>Meer objecten<br /><span className="italic-accent">in de pijplijn.</span></>, <>More assets<br /><span className="italic-accent">in the pipeline.</span></>)}
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "We hebben meerdere objecten in de pijplijn. Interesse? Neem contact op voor de meest actuele stand van zaken.",
                "We have multiple assets in the pipeline. Interested? Get in touch for the latest update.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                {t("Contact opnemen →", "Get in touch →")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
              {t(<>Veelgestelde<br /><span className="italic-accent">vragen.</span></>, <>Frequently<br /><span className="italic-accent">asked.</span></>)}
            </h2>
          </div>
          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* BUILT TO COMPOUND */}
      <section>
        <div className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Lama Fund</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold uppercase tracking-tight">
              {t("Built to compound", "Built to compound")}
            </h2>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              {t(
                "Lama investeert in groepsaccommodaties met verborgen potentieel — locaties die onderbenut, complex of moeilijk verhandelbaar zijn, en daardoor scherp geprijsd kunnen worden aangekocht.",
                "Lama invests in group accommodations with hidden potential — locations that are underused, complex or hard to sell, and can therefore be acquired at sharp prices.",
              )}
            </p>
            <p>
              {t(
                "Door herontwikkeling, optimalisatie en strategische positionering transformeren wij deze objecten naar hoogwaardige verblijfsaccommodaties. Het resultaat: waardestijging van het vastgoed in combinatie met groeiende cashflow.",
                "Through redevelopment, optimisation and strategic positioning we transform these properties into high-end accommodations. The result: real estate appreciation combined with growing cashflow.",
              )}
            </p>
            <p>
              {t(
                "Vermogen dat zichzelf blijft versterken door gebruik, tijd en optimalisatie.",
                "Wealth that keeps compounding through use, time and optimisation.",
              )}
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                {t("Contact opnemen", "Get in touch")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

      {/* FUND STRUCTURE & LIQUIDITY */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">{t("Fondsstructuur", "Fund structure")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
                {t(
                  <>We verkopen units in het fonds.<br /><span className="italic-accent">Niet de stenen.</span></>,
                  <>We sell units in the fund.<br /><span className="italic-accent">Not the bricks.</span></>,
                )}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t(
                "De gearbitreerde waarde zit in het systeem, niet in het individuele pand. De fondsstructuur is hoe die waarde liquide wordt.",
                "The arbitraged value lives in the system, not in the individual property. The fund structure is how that value becomes liquid.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="panel p-8">
              <div className="text-xs uppercase tracking-widest text-primary">{t("Het probleem", "The problem")}</div>
              <p className="mt-4 text-foreground leading-relaxed">
                {t(
                  "Wie het fysieke huis koopt, koopt het als woning — niet als operating asset. De buyer pool kan onze yields niet repliceren en betaalt niet voor de gearbitreerde waarde.",
                  "Anyone buying the physical house buys it as a home — not as an operating asset. That buyer pool cannot replicate our yields and will not pay for the arbitraged value.",
                )}
              </p>
            </div>
            <div className="panel p-8">
              <div className="text-xs uppercase tracking-widest text-primary">{t("De oplossing", "The solution")}</div>
              <p className="mt-4 text-foreground leading-relaxed">
                {t(
                  "Een fondsstructuur vangt die operator-premie. Investeerders kopen participaties in het systeem, met een duidelijk pad naar liquiditeit via unit sales — niet via verkoop van individuele panden.",
                  "A fund structure captures that operator premium. Investors buy participation in the system, with a clear path to liquidity via unit sales — not via the sale of individual properties.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

