import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — De panden. De resultaten. | BUGG Capital" },
      { name: "description", content: "Concrete objecten, echte transformaties, bewezen resultaten. Lacuna en Lama portfolio. Built to compound." },
      { property: "og:title", content: "Cases — De panden. De resultaten. | BUGG Capital" },
      { property: "og:description", content: "Concrete objecten, echte transformaties. Lacuna & Lama portfolio. Built to compound." },
    ],
  }),
  component: CasesPage,
});

type Fund = "lacuna" | "lama";

type Case = {
  fund: Fund;
  name: string;
  locationType: { nl: string; en: string };
  yearAcquired: string;
  appreciation: string;
  yieldPerYear: { nl: string; en: string };
  intro: { nl: string; en: string };
  exteriorImage?: string | null;
  beforeImage?: string | null;
  afterImage?: string | null;
};

const cases: Case[] = [
  {
    fund: "lacuna",
    name: "C50 Ignis",
    locationType: { nl: "Zonhoven — 4-persoons bungalow", en: "Zonhoven — 4-person bungalow" },
    yearAcquired: "2023",
    appreciation: "+22%",
    yieldPerYear: { nl: "13% p.j.", en: "13% p.a." },
    intro: {
      nl: "Van standaard bungalow naar top-performer op Airbnb en Booking.com. Met Specialstays als operating systeem bereikten wij 70% bezetting — ruim boven het nationale gemiddelde van 39,7%.",
      en: "From standard bungalow to top performer on Airbnb and Booking.com. With Specialstays as the operating system we reached 70% occupancy — well above the 39.7% national average.",
    },
    exteriorImage: "https://cdn-cms.bookingexperts.com/media/3464/39/c50_lr_12_772f69b1-b936-4486-9ad2-581e3d2d4dfa.jpg",
  },
  {
    fund: "lama",
    name: "The Windmill",
    locationType: { nl: "Belgisch Limburg — unieke molen 8+ kamers", en: "Belgian Limburg — unique windmill 8+ rooms" },
    yearAcquired: "2025",
    appreciation: { } as never as string, // placeholder removed below
    yieldPerYear: { nl: "NOI target €60K p.j.", en: "NOI target €60K p.a." },
    intro: {
      nl: "Een verlaten windmolen in Belgisch Limburg. Uniek karakter, 8+ slaapkamers. Transformatie van woning naar premium groepsverblijf met ADR boven €800/nacht.",
      en: "An abandoned windmill in Belgian Limburg. Unique character, 8+ bedrooms. Transformed from residential property into a premium group stay with ADR above €800/night.",
    },
  } as Case,
  {
    fund: "lama",
    name: "Villa Grimbia",
    locationType: { nl: "Belgisch Limburg — villa 18 pax", en: "Belgian Limburg — villa 18 pax" },
    yearAcquired: "2025",
    appreciation: "n.t.b.",
    yieldPerYear: { nl: "ADR €900+ / nacht", en: "ADR €900+ / night" },
    intro: {
      nl: "Grote villa gekocht op woningwaarde. Als groepsverblijf voor 18 gasten loopt de ADR op naar €900+/nacht. Cross-border arbitrage: Belgische aankoopprijs, Nederlandse betalingsbereidheid.",
      en: "Large villa acquired at residential value. As a group stay for 18 guests, ADR reaches €900+/night. Cross-border arbitrage: Belgian acquisition price, Dutch willingness to pay.",
    },
    exteriorImage: "https://cdn-cms.bookingexperts.com/media/3743/31/optimized.jpg",
  },
];

// Fix Windmill case appreciation
cases[1].appreciation = "n.t.b.";

function ImagePlaceholder({ label, src, alt }: { label: string; src?: string | null; alt?: string }) {
  if (src) {
    return <img src={src} alt={alt ?? label} className="aspect-[4/3] w-full object-cover" loading="lazy" />;
  }
  return (
    <div
      role="img"
      aria-label={label}
      className="aspect-[4/3] bg-[var(--surface)] border border-border flex items-center justify-center text-[10px] uppercase tracking-widest text-muted-foreground"
    >
      {label}
    </div>
  );
}

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
              "Concrete objecten. Echte transformaties. Bewezen resultaten. Built to compound.",
              "Concrete assets. Real transformations. Proven results. Built to compound.",
            )}
          </p>
        </div>
      </section>

      {/* FILTER + CASES */}
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

          <div className="space-y-10">
            {filtered.map((c) => (
              <article key={c.name} className="panel p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <ImagePlaceholder
                    label={t("Exterior", "Exterior")}
                    src={c.exteriorImage}
                    alt={c.name}
                  />
                  <ImagePlaceholder label={t("Voor", "Before")} src={c.beforeImage} />
                  <ImagePlaceholder label={t("Na", "After")} src={c.afterImage} />
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-3">
                    <div className="text-xs uppercase tracking-widest text-primary">
                      {c.fund === "lacuna" ? "Lacuna Fund" : "Lama Fund"}
                    </div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{c.name}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {lang === "nl" ? c.intro.nl : c.intro.en}
                    </p>
                    <div className="mt-6">
                      <button type="button" className="btn-ghost text-xs opacity-80 cursor-not-allowed">
                        {t("Lees meer →", "Read more →")}
                      </button>
                    </div>
                  </div>

                  <dl className="md:col-span-2 grid grid-cols-2 gap-x-4 gap-y-3 text-sm self-start">
                    <div className="col-span-2">
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Locatie & type", "Location & type")}</dt>
                      <dd className="mt-1 text-foreground">{lang === "nl" ? c.locationType.nl : c.locationType.en}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Jaar aankoop", "Year acquired")}</dt>
                      <dd className="mt-1 text-foreground">{c.yearAcquired}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Waardestijging", "Appreciation")}</dt>
                      <dd className="mt-1 text-foreground">{c.appreciation}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Rendement per jaar", "Yield per year")}</dt>
                      <dd className="mt-1 text-foreground">{lang === "nl" ? c.yieldPerYear.nl : c.yieldPerYear.en}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEZOEK EEN LOCATIE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Built to compound</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold uppercase tracking-tight">
              {t("Bezoek een locatie", "Visit a location")}
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Wil je de Windmolen een keer ervaren, of een rondje op het park om de bungalows te bekijken — voor én na renovatie? Dat kan. Eerste maandag van de maand of op afspraak.",
                "Want to experience the Windmill, or take a tour of the park to see the bungalows — before and after renovation? You can. First Monday of the month or by appointment.",
              )}
            </p>
            <div className="mt-8">
              <button type="button" className="btn-primary opacity-90 cursor-not-allowed">
                {t("Plan een bezoek →", "Plan a visit →")}
              </button>
            </div>
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
              {t("Toegang tot de dataroom na kennismaking.", "Access to the dataroom after a short introduction.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn-primary opacity-90 cursor-not-allowed">
                {t("Dataroom aanvragen", "Request dataroom")} <ArrowRight size={16} />
              </button>
              <Link to="/contact" className="btn-ghost">
                {t("Contact opnemen", "Get in touch")}
              </Link>
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
