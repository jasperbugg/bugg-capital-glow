import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WhitepaperModal } from "@/components/WhitepaperModal";

export const Route = createFileRoute("/fondsen/lama")({
  component: LamaPage,
  head: () => ({
    meta: [
      { title: "Lama Fund · Freehold · BUGG Capital" },
      {
        name: "description",
        content:
          "Lama Fund — premium groepsverblijven met freehold eigendom. 14%+ target, pilot fase, €2M gecommitteerd.",
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

function Pipeline({ steps, footer }: { steps: { label: string; pct: number }[]; footer?: string }) {
  return (
    <div className="space-y-4">
      {steps.map((s, i) => (
        <div key={i}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-muted-foreground">{s.label}</span>
            <span className="text-xs text-muted-foreground">{s.pct}%</span>
          </div>
          <div className="mt-2 h-[3px] w-full bg-white/10 overflow-hidden">
            <div className="h-full bg-primary transition-all duration-700" style={{ width: `${s.pct}%` }} />
          </div>
        </div>
      ))}
      {footer && <div className="pt-3 text-sm border-t border-border text-foreground">{footer}</div>}
    </div>
  );
}

function LamaPage() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const cases = [
    {
      meta: t("Freehold · Belgisch Limburg · 2025", "Freehold · Belgian Limburg · 2025"),
      title: t("The Windmill: van leegstand naar €60K NOI", "The Windmill: from vacancy to €60K NOI"),
      body: t(
        "Een verlaten windmolen in Belgisch Limburg. Uniek karakter, 8+ slaapkamers. Transformatie van woning naar premium groepsverblijf met ADR boven €800/nacht.",
        "An abandoned windmill in Belgian Limburg. Unique character, 8+ bedrooms. Transformed from residential property into a premium group stay with ADR above €800/night.",
      ),
      image: null,
    },
    {
      meta: t("Freehold · Belgisch Limburg · 2025", "Freehold · Belgian Limburg · 2025"),
      title: t("Villa Grimbia: 18 pax, premium verhuur", "Villa Grimbia: 18 pax, premium rental"),
      body: t(
        "Grote villa gekocht op woningwaarde. Als groepsverblijf voor 18 gasten loopt de ADR op naar €900+/nacht. Cross-border arbitrage: Belgische aankoopprijs, Nederlandse betalingsbereidheid.",
        "Large villa acquired at residential value. As a group stay for 18 guests, ADR reaches €900+/night. Cross-border arbitrage: Belgian acquisition price, Dutch willingness to pay.",
      ),
      image: "https://cdn-cms.bookingexperts.com/media/3743/31/optimized.jpg",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="section-blue border-b border-border bugg-grid bugg-grid-fade">
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
            <button data-tf-popup="YOUR_TYPEFORM_ID" className="btn-primary">
              {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={16} />
            </button>
            <button data-tf-popup="YOUR_TYPEFORM_ID_2" className="btn-ghost">{t("Gesprek inplannen", "Schedule a call")}</button>
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
              footer={t("→ Target: 20 assets × gem. €1,25M", "→ Target: 20 assets × avg. €1.25M")}
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
              {t("Een selectie uit het Lama portfolio.", "A selection from the Lama portfolio.")}
            </p>
          </div>

          <div className="space-y-6">
            {cases.map((c) => (
              <div key={c.title} className="panel grid md:grid-cols-5 overflow-hidden">
                <div className="md:col-span-2 bg-secondary aspect-[4/3] md:aspect-auto overflow-hidden">
                  {c.image ? (
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">🏚️</div>
                  )}
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-primary">Lama Fund</div>
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
              <button data-tf-popup="YOUR_TYPEFORM_ID" className="btn-primary">
                {t("Toegang aanvragen", "Request access")} <ArrowRight size={16} />
              </button>
              <button data-tf-popup="YOUR_TYPEFORM_ID_2" className="btn-ghost">{t("Gesprek plannen", "Schedule a call")}</button>
            </div>
          </div>
        </div>
      </section>

      <WhitepaperModal open={modalOpen} onClose={() => setModalOpen(false)} title="Lama Fund" />
    </main>
  );
}
