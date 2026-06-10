import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WhitepaperModal } from "@/components/WhitepaperModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/fondsen")({
  component: FondsenPage,
  head: () => ({
    meta: [
      { title: "Fondsen · Lacuna & Lama · BUGG Capital" },
      {
        name: "description",
        content:
          "Twee fondsen, één systeem. Co-ownership in Belgisch short-stay vastgoed voor gekwalificeerde beleggers.",
      },
    ],
  }),
});

function Pipeline({
  steps,
  footer,
}: {
  steps: { label: string; pct: number }[];
  footer?: string;
}) {
  return (
    <div className="space-y-4">
      {steps.map((s, i) => (
        <div key={i}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-muted-foreground">{s.label}</span>
            <span className="text-xs text-muted-foreground">{s.pct}%</span>
          </div>
          <div className="mt-2 h-[3px] w-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-700"
              style={{ width: `${s.pct}%` }}
            />
          </div>
        </div>
      ))}
      {footer && (
        <div className="pt-3 text-sm border-t border-border text-foreground">{footer}</div>
      )}
    </div>
  );
}

function SpecTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      {rows.map((r, i) => (
        <div
          key={i}
          className="flex justify-between gap-4 py-3 border-b border-border text-sm"
        >
          <dt className="text-muted-foreground">{r.k}</dt>
          <dd className="text-right text-foreground">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function FondsenPage() {
  const { t } = useLanguage();
  const [modal, setModal] = useState<string | null>(null);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative border-b border-border bugg-grid bugg-grid-fade">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="eyebrow">Lacuna &amp; Lama</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
            {t(
              <>
                Twee fondsen.<br />
                Eén systeem.<br />
                <span className="italic-accent">Eigen capital erin.</span>
              </>,
              <>
                Two funds.<br />
                One system.<br />
                <span className="italic-accent">Our capital in it.</span>
              </>,
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            {t(
              "Co-ownership in Belgisch short-stay vastgoed. Built to compound. Uitsluitend voor gekwalificeerde beleggers.",
              "Co-ownership in Belgian short-stay real estate. Built to compound. For qualified investors only.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#lacuna" className="btn-primary">
              {t("Bekijk Lacuna", "View Lacuna")} <ArrowRight size={16} />
            </a>
            <a href="#lama" className="btn-ghost">
              {t("Bekijk Lama", "View Lama")}
            </a>
          </div>
        </div>
      </section>

      {/* FUND SELECTOR */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
          <a href="#lacuna" className="panel p-8 hover:border-primary transition-colors group">
            <div className="eyebrow">Lacuna · Leasehold</div>
            <h3 className="mt-5 text-3xl font-semibold">Built to compound.</h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "12%+ target · 25+ units · €5M gecommitteerd",
                "12%+ target · 25+ units · €5M committed",
              )}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
              {t("Bekijk fonds", "View fund")}{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          <a href="#lama" className="panel p-8 hover:border-primary transition-colors group">
            <div className="eyebrow">Lama · Freehold</div>
            <h3 className="mt-5 text-3xl font-semibold">Built to compound.</h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "14%+ target · Pilot fase · €2M gecommitteerd",
                "14%+ target · Pilot phase · €2M committed",
              )}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
              {t("Bekijk fonds", "View fund")}{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* LACUNA */}
      <section id="lacuna" className="border-b border-border scroll-mt-24">
        <div className="container mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Lacuna Fund · Leasehold</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              {t(
                <>
                  Short-stay vastgoed.<br />
                  <span className="italic-accent">Built to compound.</span>
                </>,
                <>
                  Short-stay real estate.<br />
                  <span className="italic-accent">Built to compound.</span>
                </>,
              )}
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              {t(
                "Lacuna investeert in short-stay units via langetermijn gebruiksrechten (leasehold) binnen holiday domains in Belgisch Limburg. Aangedreven door het Specialstays operating systeem: hogere dagprijzen, hogere bezetting, lagere kosten.",
                "Lacuna invests in short-stay units via long-term usage rights (leasehold) inside holiday domains in Belgian Limburg. Powered by the Specialstays operating system: higher daily rates, higher occupancy, lower costs.",
              )}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t(
                "De partners investeren zelf mee. Naast een beheervergoeding verdienen wij carry — alleen als u rendement maakt.",
                "The partners invest alongside. Beyond a management fee we earn carry — only when you earn a return.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setModal("Lacuna Fund")} className="btn-primary">
                {t("Documentatie aanvragen", "Request documentation")}
              </button>
              <Link to="/contact" className="btn-ghost">
                {t("Gesprek inplannen", "Schedule a call")}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="panel p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                {t("Specificaties", "Specifications")}
              </div>
              <SpecTable
                rows={[
                  { k: t("Type", "Type"), v: t("Leasehold · Belgisch Limburg", "Leasehold · Belgian Limburg") },
                  { k: t("Structuur", "Structure"), v: t("Co-ownership · evergreen", "Co-ownership · evergreen") },
                  { k: t("Minimale deelname", "Minimum participation"), v: "€100.000" },
                  { k: "Lockup", v: t("9 jaar", "9 years") },
                  { k: t("Equity target", "Equity target"), v: t("12%+ per jaar", "12%+ per year") },
                  { k: t("Gecommitteerd", "Committed"), v: "€5M" },
                  { k: "Target AUM", v: "€25M" },
                  { k: t("Vrijstelling", "Exemption"), v: t("Gekwalificeerde beleggers (Wft/FSMA)", "Qualified investors (Wft/FSMA)") },
                ]}
              />
            </div>
            <div className="panel p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Pipeline
              </div>
              <Pipeline
                steps={[
                  { label: t("2025: 21 units gerealiseerd", "2025: 21 units realised"), pct: 21 },
                  { label: t("2026: target 35 units", "2026: target 35 units"), pct: 35 },
                  { label: t("2027: target 50 units", "2027: target 50 units"), pct: 50 },
                ]}
                footer={t(
                  "→ Target: 100 units × gem. €250K",
                  "→ Target: 100 units × avg. €250K",
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LAMA */}
      <section id="lama" className="border-b border-border scroll-mt-24">
        <div className="container mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Lama Fund · Freehold</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              {t(
                <>
                  Premium groepsverblijven.<br />
                  <span className="italic-accent">Built to compound.</span>
                </>,
                <>
                  Premium group stays.<br />
                  <span className="italic-accent">Built to compound.</span>
                </>,
              )}
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              {t(
                "Lama investeert in stand-alone premium groepsverblijven met directe eigendom (freehold). Panden van 15 tot 20 gasten die de markt waardeert als woning — maar als short-stay experience een veelvoud opleveren.",
                "Lama invests in stand-alone premium group stays with direct ownership (freehold). Properties for 15 to 20 guests that the market values as a home — but yield a multiple as a short-stay experience.",
              )}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t(
                "Inkopen op Belgische kostenbasis. Verhuren aan Nederlandse gasten die premium betalen. Specialstays verzorgt het volledige beheer.",
                "Acquired on a Belgian cost basis. Rented to Dutch guests paying premium rates. Specialstays runs the full operation.",
              )}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t(
                "De partners investeren zelf mee. Naast een beheervergoeding verdienen wij carry — alleen als u rendement maakt.",
                "The partners invest alongside. Beyond a management fee we earn carry — only when you earn a return.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setModal("Lama Fund")} className="btn-primary">
                {t("Documentatie aanvragen", "Request documentation")}
              </button>
              <Link to="/contact" className="btn-ghost">
                {t("Gesprek inplannen", "Schedule a call")}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
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
            <div className="panel p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Pipeline
              </div>
              <Pipeline
                steps={[
                  { label: t("2026: 3 units in uitvoering", "2026: 3 units in progress"), pct: 15 },
                  { label: t("2027+: 3–4 units per jaar", "2027+: 3–4 units per year"), pct: 35 },
                ]}
                footer={t(
                  "→ Target: 20 assets × gem. €1,25M",
                  "→ Target: 20 assets × avg. €1.25M",
                )}
              />
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="border border-border p-5">
                  <div className="text-sm font-medium">The Windmill</div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {t(
                      "8+ slaapkamers · uniek karakter",
                      "8+ bedrooms · unique character",
                    )}
                  </div>
                </div>
                <div className="border border-border p-5">
                  <div className="text-sm font-medium">Villa Grimbia</div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {t(
                      "18 pax · transformatie lopend",
                      "18 pax · transformation underway",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-3xl">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
            {t("Veelgestelde vragen", "Frequently asked questions")}
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {(t(
              [
                {
                  q: "Voor wie zijn de fondsen bedoeld?",
                  a: "Uitsluitend voor gekwalificeerde beleggers (Wft/FSMA). Minimale deelname €100.000 per fonds.",
                },
                {
                  q: "Wat is leasehold?",
                  a: "Langdurige gebruiksrechten op een object — geen eigendom van de grond, wel van de opbrengsten. Lagere aankoopprijs, hoger rendement op geïnvesteerd vermogen.",
                },
                {
                  q: "Hoe zit het met liquiditeit?",
                  a: "De fondsen zijn evergreen. Individuele lockup is 9 jaar. Wij faciliteren secundaire overdracht tussen co-owners via een interne markt.",
                },
                {
                  q: "Kan ik een pand bezoeken?",
                  a: "Ja. Neem contact op — wij nodigen serieuze geïnteresseerden uit voor een bezoek in Belgisch Limburg.",
                },
                {
                  q: "Hoe vraag ik documentatie aan?",
                  a: "Via het contactformulier. Na kennismaking ontvangt u dataroom toegang na NDA.",
                },
              ],
              [
                {
                  q: "Who are the funds for?",
                  a: "Qualified investors only (Wft/FSMA). Minimum participation €100,000 per fund.",
                },
                {
                  q: "What is leasehold?",
                  a: "Long-term usage rights to a property — no land ownership, full rights to returns. Lower acquisition price, higher return on invested capital.",
                },
                {
                  q: "What about liquidity?",
                  a: "The funds are evergreen. Individual lockup is 9 years. We facilitate secondary transfers between co-owners via an internal market.",
                },
                {
                  q: "Can I visit a property?",
                  a: "Yes. Get in touch — we invite serious prospects for a visit in Belgian Limburg.",
                },
                {
                  q: "How do I request documentation?",
                  a: "Via the contact form. After introduction you receive dataroom access following NDA signature.",
                },
              ],
            ) as { q: string; a: string }[]).map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-base py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            {t(
              <>
                Klaar voor de<br />
                <span className="italic-accent">volgende stap?</span>
              </>,
              <>
                Ready for the<br />
                <span className="italic-accent">next step?</span>
              </>,
            )}
          </h2>
          <p className="mt-6 text-muted-foreground">
            {t("Geen pitch — een gesprek.", "No pitch — a conversation.")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button onClick={() => setModal(t("Documentatie", "Documentation"))} className="btn-primary">
              {t("Documentatie aanvragen", "Request documentation")}
            </button>
            <Link to="/contact" className="btn-ghost">
              {t("Gesprek inplannen", "Schedule a call")}
            </Link>
          </div>
          <div className="mt-8">
            <Link
              to="/casussen"
              className="text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              {t("Bekijk de portefeuille", "View portfolio")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section>
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t(
              "Uitsluitend voor gekwalificeerde beleggers (Wft/FSMA). Geen aanbod tot inschrijving of aankoop van effecten. Beleggen brengt risico's met zich mee. Rendementen uit het verleden bieden geen garantie voor de toekomst. Documentatie via dataroom na NDA.",
              "For qualified investors only (Wft/FSMA). Not an offer to subscribe or purchase securities. Investing involves risk. Past performance does not guarantee future results. Documentation via dataroom after NDA.",
            )}
          </p>
        </div>
      </section>

      <WhitepaperModal
        open={modal !== null}
        onClose={() => setModal(null)}
        title={modal ?? undefined}
      />
    </main>
  );
}
