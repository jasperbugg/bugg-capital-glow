import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coins, FileText, Hourglass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/fondsen")({
  head: () => ({
    meta: [
      { title: "Fondsen — Lacuna & Lama | BUGG Capital" },
      {
        name: "description",
        content:
          "Twee fondsen, één systeem. Co-ownership in Belgisch short-stay vastgoed. Lacuna (leasehold, 12%+) en Lama (freehold, 14%+).",
      },
      { property: "og:title", content: "Fondsen — Lacuna & Lama | BUGG Capital" },
      {
        property: "og:description",
        content:
          "Co-ownership funds. Wij investeren mee — dezelfde positie, dezelfde rechten.",
      },
    ],
  }),
  component: Fondsen,
});

function Pipeline({
  steps,
  caption,
}: {
  steps: { year: string; label: string; pct: number; current?: boolean }[];
  caption: string;
}) {
  return (
    <div className="mt-8">
      <p className="text-sm text-muted-foreground mb-6 max-w-xl">{caption}</p>
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.year}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className={s.current ? "text-primary font-semibold" : "text-muted-foreground"}>
                {s.year}
              </span>
              <span className="text-foreground">{s.label}</span>
            </div>
            <div className="relative h-1.5 bg-border rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-1000 ease-out"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-2 gap-4 py-3 text-sm">
          <dt className="text-muted-foreground">{k}</dt>
          <dd className="font-medium text-right">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Fondsen() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Lacuna & Lama</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            {t(
              <>Twee fondsen.<br />Eén systeem.<br /><span className="italic-accent">Eigen capital erin.</span></>,
              <>Two funds.<br />One system.<br /><span className="italic-accent">Our capital in it.</span></>,
            )}
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            {t(
              "Co-ownership in Belgisch short-stay vastgoed. Wij investeren zelf mee in elk fonds — dezelfde positie, dezelfde rechten. Uitsluitend voor gekwalificeerde beleggers.",
              "Co-ownership in Belgian short-stay real estate. We invest alongside you in every fund — same position, same rights. For qualified investors only.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#lacuna" className="btn-primary text-xs">
              {t("Bekijk Lacuna", "View Lacuna")} <ArrowRight size={14} />
            </a>
            <a
              href="#lama"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs hover:bg-surface/50 transition-colors"
            >
              {t("Bekijk Lama", "View Lama")} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* SELECTOR */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-6">
          <a href="#lacuna" className="panel p-8 group hover:border-primary transition-colors">
            <div className="text-xs uppercase tracking-widest text-primary">
              {t("Lacuna · Leasehold", "Lacuna · Leasehold")}
            </div>
            <h3 className="mt-4 text-3xl font-bold">
              {t("Structureel inkomen.", "Structural income.")}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              {t(
                "Voor de belegger die stabiele kasstromen zoekt met een bewezen operating systeem onder de motorkap.",
                "For the investor seeking stable cash flows with a proven operating system under the hood.",
              )}
            </p>
            <div className="mt-6 text-xs text-muted-foreground">
              {t(
                "12%+ target · 25+ units · €5M gecommitteerd",
                "12%+ target · 25+ units · €5M committed",
              )}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-primary text-xs group-hover:gap-3 transition-all">
              {t("Lees meer", "Read more")} <ArrowRight size={14} />
            </div>
          </a>

          <a href="#lama" className="panel p-8 group hover:border-primary transition-colors">
            <div className="text-xs uppercase tracking-widest text-primary">
              {t("Lama · Freehold", "Lama · Freehold")}
            </div>
            <h3 className="mt-4 text-3xl font-bold">
              {t("Vermogen dat compoundt.", "Wealth that compounds.")}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              {t(
                "Voor de belegger die vroeg wil instappen in een premium segment dat de markt nog onderwaardeert.",
                "For the investor who wants early access to a premium segment the market still undervalues.",
              )}
            </p>
            <div className="mt-6 text-xs text-muted-foreground">
              {t(
                "14%+ target · Pilot fase · €2M gecommitteerd",
                "14%+ target · Pilot phase · €2M committed",
              )}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-primary text-xs group-hover:gap-3 transition-all">
              {t("Lees meer", "Read more")} <ArrowRight size={14} />
            </div>
          </a>
        </div>
      </section>

      {/* LACUNA */}
      <section id="lacuna" className="border-b border-border scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">{t("Lacuna Fund · Leasehold", "Lacuna Fund · Leasehold")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                {t(
                  <>Structureel inkomen<br /><span className="italic-accent">uit short-stay vastgoed.</span></>,
                  <>Structural income<br /><span className="italic-accent">from short-stay real estate.</span></>,
                )}
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "Lacuna investeert in short-stay units via langetermijn gebruiksrechten (leasehold) binnen holiday domains in Belgisch Limburg. Het fonds profiteert van het Specialstays operating systeem: hogere dagprijzen, hogere bezetting, lagere kosten dan de gemiddelde operator in de markt.",
                  "Lacuna invests in short-stay units through long-term usage rights (leasehold) within holiday domains in Belgian Limburg. The fund benefits from the Specialstays operating system: higher daily rates, higher occupancy and lower costs than the average market operator.",
                )}
              </p>
              <p>
                {t(
                  "De structuur is opgezet als co-ownership: de partners investeren zelf mee in dezelfde positie als de investeerder. Geen asymmetrische fee-structuur — wij verdienen als u verdient.",
                  "The structure is co-ownership: the partners invest alongside investors in the exact same position. No asymmetric fee structure — we earn when you earn.",
                )}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary mb-4">
                {t("Specificaties", "Specifications")}
              </h3>
              <SpecTable
                rows={[
                  [t("Type", "Type"), t("Leasehold · Belgisch Limburg", "Leasehold · Belgian Limburg")],
                  [t("Structuur", "Structure"), t("Co-ownership · evergreen", "Co-ownership · evergreen")],
                  [t("Minimale deelname", "Minimum participation"), "€100.000"],
                  [t("Looptijd", "Term"), t("9 jaar", "9 years")],
                  [t("Distributies", "Distributions"), t("Huurinkomsten · jaarlijks", "Rental income · annual")],
                  [t("Equity target", "Equity target"), t("12%+ per jaar", "12%+ per year")],
                  [t("Gecommitteerd capital", "Committed capital"), "€5M"],
                  [t("Target AUM", "Target AUM"), "€25M"],
                  [t("Vrijstelling", "Exemption"), t("Gekwalificeerde beleggers (Wft/FSMA)", "Qualified investors (Wft/FSMA)")],
                ]}
              />
            </div>

            <div className="panel p-8">
              <h3 className="text-xs uppercase tracking-widest text-primary mb-4">
                {t("Pipeline", "Pipeline")}
              </h3>
              <Pipeline
                caption={t(
                  "Van 21 units in 2025 naar 100 units in de komende jaren. Stap voor stap, object voor object.",
                  "From 21 units in 2025 to 100 units in the coming years. Step by step, property by property.",
                )}
                steps={[
                  { year: "2025", label: t("21 units gerealiseerd", "21 units realised"), pct: 21, current: true },
                  { year: "2026", label: t("target 35 units", "target 35 units"), pct: 35 },
                  { year: "2027", label: t("target 50 units", "target 50 units"), pct: 50 },
                  { year: t("Target", "Target"), label: t("100 units × gem. €250K", "100 units × avg. €250K"), pct: 100 },
                ]}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary text-xs">
                  {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs hover:bg-surface/50 transition-colors"
                >
                  {t("Gesprek inplannen", "Schedule a call")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAMA */}
      <section id="lama" className="border-b border-border scroll-mt-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">{t("Lama Fund · Freehold", "Lama Fund · Freehold")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                {t(
                  <>Premium groepsverblijven.<br /><span className="italic-accent">Vroeg instappen.</span></>,
                  <>Premium group stays.<br /><span className="italic-accent">Early access.</span></>,
                )}
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "Lama investeert in stand-alone premium groepsverblijven met directe eigendom van het vastgoed (freehold). Grote panden — 15 tot 20 gasten — die de markt waardeert als woning, maar die als short-stay experience een veelvoud opleveren.",
                  "Lama invests in stand-alone premium group stays with direct ownership of the real estate (freehold). Large properties — 15 to 20 guests — that the market values as homes, but that yield a multiple as short-stay experiences.",
                )}
              </p>
              <p>
                {t(
                  "De thesis is eenvoudig: inkopen op Belgische kostenbasis, verhuren aan Nederlandse gasten die premium betalen. Specialstays verzorgt het volledige beheer. Het rendement compoundt. Vroeg instappen betekent instappen vóór de markt de re-rating heeft doorgevoerd.",
                  "The thesis is simple: buy at Belgian cost basis, rent to Dutch guests who pay premium rates. Specialstays handles full operations. Returns compound. Early entry means entering before the market completes its re-rating.",
                )}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary mb-4">
                {t("Specificaties", "Specifications")}
              </h3>
              <SpecTable
                rows={[
                  [t("Type", "Type"), t("Freehold · Belgisch Limburg", "Freehold · Belgian Limburg")],
                  [t("Structuur", "Structure"), t("Co-ownership · evergreen", "Co-ownership · evergreen")],
                  [t("Minimale deelname", "Minimum participation"), "€100.000"],
                  [t("Looptijd", "Term"), t("9 jaar", "9 years")],
                  [t("Distributies", "Distributions"), t("Compounding · evergreen", "Compounding · evergreen")],
                  [t("Equity target", "Equity target"), t("14%+ per jaar", "14%+ per year")],
                  [t("Pilot capital", "Pilot capital"), "€2M"],
                  [t("Target AUM", "Target AUM"), "€25M"],
                  [t("ADR target", "ADR target"), t("€700–€1.000 per nacht", "€700–€1,000 per night")],
                  [t("Vrijstelling", "Exemption"), t("Gekwalificeerde beleggers (Wft/FSMA)", "Qualified investors (Wft/FSMA)")],
                ]}
              />
            </div>

            <div className="space-y-6">
              <div className="panel p-8">
                <h3 className="text-xs uppercase tracking-widest text-primary mb-4">
                  {t("Pipeline", "Pipeline")}
                </h3>
                <Pipeline
                  caption={t(
                    "Pilot fase actief. Selectief en bewust klein gehouden — kwaliteit boven volume.",
                    "Pilot phase active. Deliberately selective — quality over volume.",
                  )}
                  steps={[
                    { year: "2026", label: t("3 units in uitvoering", "3 units in progress"), pct: 15, current: true },
                    { year: "2027+", label: t("3–4 units per jaar", "3–4 units per year"), pct: 40 },
                    { year: t("Target", "Target"), label: t("20 assets × gem. €1,25M", "20 assets × avg. €1.25M"), pct: 100 },
                  ]}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-border p-6">
                  <h4 className="font-semibold">The Windmill</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(
                      "Uniek karakter, 8+ slaapkamers, sterk marketingpotentieel.",
                      "Unique character, 8+ bedrooms, strong marketing potential.",
                    )}
                  </p>
                </div>
                <div className="border border-border p-6">
                  <h4 className="font-semibold">Villa Grimbia</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(
                      "Premium groepslodge, 18 pax, transformatie lopend.",
                      "Premium group lodge, 18 pax, transformation underway.",
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary text-xs">
                  {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs hover:bg-surface/50 transition-colors"
                >
                  {t("Gesprek inplannen", "Schedule a call")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CO-OWNERSHIP */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("De filosofie", "The philosophy")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                {t(
                  <>Wij verdienen<br /><span className="italic-accent">als u verdient.</span></>,
                  <>We earn<br /><span className="italic-accent">when you earn.</span></>,
                )}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "BUGG Capital hanteert geen traditionele beheervergoeding die losstaat van uw rendement. De partners investeren zelf mee in elk fonds — in dezelfde juridische positie, met dezelfde rechten. Dat is geen marketingverhaal. Dat is de structuur.",
                "BUGG Capital does not use a traditional management fee disconnected from your return. The partners invest alongside investors in every fund — in the same legal position, with the same rights. That is not a marketing story. That is the structure.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: <Coins size={20} />,
                title: t("Aligned incentives", "Aligned incentives"),
                body: t("Eigen capital in elk fonds. Altijd.", "Our own capital in every fund. Always."),
              },
              {
                icon: <FileText size={20} />,
                title: t("Transparante structuur", "Transparent structure"),
                body: t(
                  "Volledige documentatie beschikbaar via de dataroom.",
                  "Full documentation available via the dataroom.",
                ),
              },
              {
                icon: <Hourglass size={20} />,
                title: t("Langetermijn denken", "Long-term thinking"),
                body: t(
                  "9 jaar looptijd. Geen kwartaaldruk. Compounding werkt met tijd.",
                  "9 year horizon. No quarterly pressure. Compounding works with time.",
                ),
              },
            ].map((p) => (
              <div key={p.title} className="bg-background p-8">
                <div className="text-primary">{p.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold mb-12">
            {t(
              <>Veelgestelde<br /><span className="italic-accent">vragen.</span></>,
              <>Frequently<br /><span className="italic-accent">asked questions.</span></>,
            )}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: t("Voor wie zijn de fondsen bedoeld?", "Who are the funds intended for?"),
                a: t(
                  "Uitsluitend voor gekwalificeerde beleggers in de zin van de Wft (Nederland) en FSMA (België). Minimale deelname is €100.000 per fonds.",
                  "Exclusively for qualified investors under the Wft (Netherlands) and FSMA (Belgium). Minimum participation is €100,000 per fund.",
                ),
              },
              {
                q: t(
                  "Wat is leasehold en wat betekent dat voor mij?",
                  "What is leasehold and what does it mean for me?",
                ),
                a: t(
                  "Bij leasehold verwerft u langdurige gebruiksrechten op een vastgoedobject — geen eigendom van de grond, wel van de opbrengsten. Dit verlaagt de aankoopprijs significant en verhoogt daarmee het rendement op het geïnvesteerde vermogen.",
                  "With leasehold you acquire long-term usage rights to a property — no ownership of the land, but full rights to the returns. This significantly reduces the acquisition price and thereby increases the return on invested capital.",
                ),
              },
              {
                q: t("Hoe zit het met liquiditeit?", "What about liquidity?"),
                a: t(
                  "De fondsen hebben een looptijd van 9 jaar. Wij faciliteren secundaire overdracht tussen bestaande co-owners via een interne markt.",
                  "The funds have a 9-year term. We facilitate secondary transfers between existing co-owners via an internal market.",
                ),
              },
              {
                q: t("Wanneer ontvang ik rendement?", "When do I receive returns?"),
                a: t(
                  "Bij Lacuna worden huurinkomsten jaarlijks uitgekeerd. Bij Lama is de strategie volledig gericht op compounding gedurende de looptijd.",
                  "With Lacuna, rental income is distributed annually. With Lama, the strategy is fully focused on compounding throughout the term.",
                ),
              },
              {
                q: t(
                  "Kan ik een pand bezoeken voor ik investeer?",
                  "Can I visit a property before investing?",
                ),
                a: t(
                  "Ja. Wij nodigen serieuze geïnteresseerden uit voor een bezoek aan objecten in het portfolio in Belgisch Limburg. Neem contact op via het formulier.",
                  "Yes. We invite serious prospects to visit properties in our portfolio in Belgian Limburg. Please get in touch via the contact form.",
                ),
              },
              {
                q: t("Hoe vraag ik documentatie aan?", "How do I request documentation?"),
                a: t(
                  "Via het contactformulier op deze pagina. Na een korte kennismaking ontvangt u toegang tot de dataroom na ondertekening van een NDA.",
                  "Via the contact form on this page. After a brief introduction you will receive dataroom access following NDA signature.",
                ),
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 text-center">
          <h2 className="text-5xl md:text-6xl font-bold max-w-3xl mx-auto leading-[1.05]">
            {t(
              <>Klaar voor de<br /><span className="italic-accent">volgende stap?</span></>,
              <>Ready for the<br /><span className="italic-accent">next step?</span></>,
            )}
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            {t(
              "Geen pitch — een gesprek. Documentatie via de dataroom na kennismaking.",
              "No pitch — a conversation. Documentation via dataroom after introduction.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary text-xs">
              {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs hover:bg-surface/50 transition-colors"
            >
              {t("Gesprek inplannen", "Schedule a call")}
            </Link>
          </div>
          <div className="mt-6">
            <Link to="/investments" className="text-sm text-primary hover:underline">
              {t("Bekijk de portefeuille →", "View portfolio →")}
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            {t(
              "Uitsluitend bestemd voor gekwalificeerde beleggers (Wft/FSMA). Dit is geen aanbod tot inschrijving of aankoop van effecten. Beleggen brengt risico's met zich mee. Rendementen uit het verleden bieden geen garantie voor de toekomst. Documentatie beschikbaar via de dataroom na ondertekening van een NDA.",
              "For qualified investors only (Wft/FSMA). This is not an offer to subscribe for or purchase securities. Investing involves risk. Past performance is not indicative of future results. Documentation available via dataroom after signing an NDA.",
            )}
          </p>
        </div>
      </section>
    </>
  );
}
