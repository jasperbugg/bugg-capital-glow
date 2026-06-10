import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TYPEFORM_DOC_ID = "YOUR_TYPEFORM_ID";
const TYPEFORM_CALL_ID = "YOUR_TYPEFORM_ID_2";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — De panden. De resultaten. | BUGG Capital" },
      { name: "description", content: "Concrete objecten, echte transformaties, bewezen resultaten. Lacuna en Lama portfolio." },
      { property: "og:title", content: "Cases — De panden. De resultaten. | BUGG Capital" },
      { property: "og:description", content: "Concrete objecten, echte transformaties. Lacuna & Lama portfolio." },
    ],
  }),
  component: CasesPage,
});

type Fund = "lacuna" | "lama";

type Case = {
  fund: Fund;
  name: string;
  location: string;
  label: { nl: string; en: string };
  image: string | null;
  imageBefore?: string | null;
  imageAfter?: string | null;
  stats?: { k: { nl: string; en: string }; v: string }[];
};

const cases: Case[] = [
  {
    fund: "lacuna",
    name: "C50 Ignis",
    location: "Zonhoven · Belgisch Limburg",
    label: { nl: "Leasehold · 2023", en: "Leasehold · 2023" },
    image: "https://cdn-cms.bookingexperts.com/media/3464/39/c50_lr_12_772f69b1-b936-4486-9ad2-581e3d2d4dfa.jpg",
    stats: [
      { k: { nl: "Bezetting", en: "Occupancy" }, v: "70%" },
    ],
  },
  {
    fund: "lama",
    name: "The Windmill",
    location: "Belgisch Limburg",
    label: { nl: "Freehold · 2025", en: "Freehold · 2025" },
    image: null,
    stats: [
      { k: { nl: "NOI target", en: "NOI target" }, v: "€60K p.j." },
    ],
  },
  {
    fund: "lama",
    name: "Villa Grimbia",
    location: "Belgisch Limburg",
    label: { nl: "Freehold · 2025", en: "Freehold · 2025" },
    image: "https://cdn-cms.bookingexperts.com/media/3743/31/optimized.jpg",
    stats: [
      { k: { nl: "ADR", en: "ADR" }, v: "€900+ / nacht" },
      { k: { nl: "Capaciteit", en: "Capacity" }, v: "18 pax" },
    ],
  },
];

function CasesPage() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | Fund>("all");

  const filtered = useMemo(
    () => (filter === "all" ? cases : cases.filter((c) => c.fund === filter)),
    [filter],
  );

  const tabs: { id: "all" | Fund; label: string }[] = [
    { id: "all", label: t("Alle cases", "All cases") },
    { id: "lacuna", label: "Lacuna" },
    { id: "lama", label: "Lama" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="section-blue relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">{t("Portefeuille", "Portfolio")}</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            {t(
              <>De panden.<br /><span className="italic-accent">De resultaten.</span></>,
              <>The properties.<br /><span className="italic-accent">The results.</span></>,
            )}
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            {t(
              "Concrete objecten. Echte transformaties. Bewezen resultaten.",
              "Concrete assets. Real transformations. Proven results.",
            )}
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  filter === tab.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((c) => (
              <div key={c.name} className="panel overflow-hidden flex flex-col">
                <div className="aspect-[16/10] bg-secondary overflow-hidden">
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">🏠</div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-xs uppercase tracking-widest text-primary">
                    {c.fund === "lacuna" ? "Lacuna Fund" : "Lama Fund"}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{c.name}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{c.location}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {lang === "nl" ? c.label.nl : c.label.en}
                  </div>

                  {c.stats && c.stats.length > 0 && (
                    <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      {c.stats.map((s, i) => (
                        <div key={i} className="flex flex-col">
                          <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                            {lang === "nl" ? s.k.nl : s.k.en}
                          </dt>
                          <dd className="text-foreground">{s.v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <div className="mt-auto pt-6">
                    <button data-tf-popup={TYPEFORM_DOC_ID} className="btn-ghost text-xs">
                      <Download size={14} /> {t("Download case study", "Download case study")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Dataroom</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              {t(
                <>Dieper in<br /><span className="italic-accent">de cijfers?</span></>,
                <>Deeper into<br /><span className="italic-accent">the numbers?</span></>,
              )}
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Toegang tot de dataroom na kennismaking.",
                "Access to the dataroom after a short introduction.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button data-tf-popup={TYPEFORM_DOC_ID} className="btn-primary">
                {t("Dataroom aanvragen", "Request dataroom")} <ArrowRight size={16} />
              </button>
              <button data-tf-popup={TYPEFORM_CALL_ID} className="btn-ghost">
                {t("Gesprek inplannen", "Schedule a call")}
              </button>
            </div>
            <div className="mt-6 text-sm">
              <Link to="/fondsen" className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                {t("Bekijk de fondsen", "View our funds")} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
