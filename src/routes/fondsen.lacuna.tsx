import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WhitepaperModal } from "@/components/WhitepaperModal";

export const Route = createFileRoute("/fondsen/lacuna")({
  component: LacunaPage,
  head: () => ({
    meta: [
      { title: "Lacuna Fund · Leasehold · BUGG Capital" },
      {
        name: "description",
        content:
          "Lacuna Fund — short-stay leasehold in Belgisch Limburg. 12%+ target, 25+ units, €5M gecommitteerd.",
      },
    ],
  }),
});

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

function LacunaPage() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const cases = [
    {
      meta: t("Leasehold · Zonhoven · 2023", "Leasehold · Zonhoven · 2023"),
      title: t("C50 Ignis: 70% bezetting in jaar 1", "C50 Ignis: 70% occupancy in year 1"),
      body: t(
        "Van standaard bungalow naar top-performer op Airbnb en Booking.com. Met Specialstays als operating systeem bereikten wij 70% bezetting — ruim boven het nationale gemiddelde van 39,7%.",
        "From standard bungalow to top performer on Airbnb and Booking.com. With Specialstays as the operating system we reached 70% occupancy — well above the 39.7% national average.",
      ),
      image: "https://cdn-cms.bookingexperts.com/media/3464/39/c50_lr_12_772f69b1-b936-4486-9ad2-581e3d2d4dfa.jpg",
    },
    {
      meta: t("Leasehold · Maastricht", "Leasehold · Maastricht"),
      title: "Salpstraat",
      body: t(
        "Short-stay unit in Maastricht. Actief in het Lacuna portfolio.",
        "Short-stay unit in Maastricht. Active in the Lacuna portfolio.",
      ),
      image: null,
    },
    {
      meta: t("Leasehold · Belgisch Limburg", "Leasehold · Belgian Limburg"),
      title: "Maastraat",
      body: t(
        "Short-stay unit in Belgisch Limburg. Actief in het Lacuna portfolio.",
        "Short-stay unit in Belgian Limburg. Active in the Lacuna portfolio.",
      ),
      image: null,
    },
    {
      meta: t("Leasehold · Belgisch Limburg", "Leasehold · Belgian Limburg"),
      title: "Brugstraat",
      body: t(
        "Short-stay unit in Belgisch Limburg. Actief in het Lacuna portfolio.",
        "Short-stay unit in Belgian Limburg. Active in the Lacuna portfolio.",
      ),
      image: null,
    },
  ];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="border-b border-border bugg-grid bugg-grid-fade">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="eyebrow">Lacuna Fund · Leasehold</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
            {t(
              <>Short-stay vastgoed.<br /><span className="italic-accent">Built to compound.</span></>,
              <>Short-stay real estate.<br /><span className="italic-accent">Built to compound.</span></>,
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            {t(
              "Lacuna investeert in short-stay units via langetermijn gebruiksrechten (leasehold) binnen holiday domains in Belgisch Limburg. Aangedreven door het Specialstays operating systeem: hogere dagprijzen, hogere bezetting, lagere kosten.",
              "Lacuna invests in short-stay units via long-term usage rights (leasehold) inside holiday domains in Belgian Limburg. Powered by the Specialstays operating system: higher daily rates, higher occupancy, lower costs.",
            )}
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {t(
              "De partners investeren zelf mee. Naast een beheervergoeding verdienen wij carry — alleen als u rendement maakt.",
              "The partners invest alongside. Beyond a management fee we earn carry — only when you earn a return.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={16} />
            </button>
            <Link to="/contact" className="btn-ghost">
              {t("Gesprek inplannen", "Schedule a call")}
            </Link>
          </div>
        </div>
      </section>

      {/* SPECS + PIPELINE */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
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
              footer={t("→ Target: 100 units × gem. €250K", "→ Target: 100 units × avg. €250K")}
            />
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("Portefeuille", "Portfolio")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
                {t(<>De panden.<br /><span className="italic-accent">De resultaten.</span></>, <>The properties.<br /><span className="italic-accent">The results.</span></>)}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t(
                "Een selectie uit het actieve Lacuna portfolio.",
                "A selection from the active Lacuna portfolio.",
              )}
            </p>
          </div>

          <div className="space-y-6">
            {cases.map((c) => (
              <div key={c.title} className="panel grid md:grid-cols-5 overflow-hidden">
                <div className="md:col-span-2 bg-secondary aspect-[4/3] md:aspect-auto overflow-hidden">
                  {c.image ? (
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">🏠</div>
                  )}
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-primary">Lacuna Fund</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.meta}</div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATAROOM CTA */}
      <section>
        <div className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Dataroom</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
              {t(<>Dieper in<br /><span className="italic-accent">de cijfers?</span></>, <>Deeper into<br /><span className="italic-accent">the numbers?</span></>)}
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Volledig portfolio, financiële modellen en due diligence documentatie — beschikbaar via onze dataroom na een korte kennismaking.",
                "Full portfolio, financial models and due diligence documentation — available via our dataroom after a short introduction.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                {t("Toegang aanvragen", "Request access")} <ArrowRight size={16} />
              </button>
              <Link to="/contact" className="btn-ghost">{t("Gesprek plannen", "Schedule a call")}</Link>
            </div>
          </div>
        </div>
      </section>

      <WhitepaperModal open={modalOpen} onClose={() => setModalOpen(false)} title="Lacuna Fund" />
    </main>
  );
}
