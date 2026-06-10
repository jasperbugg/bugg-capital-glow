import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TYPEFORM_DOC_ID = "YOUR_TYPEFORM_ID";
const TYPEFORM_CALL_ID = "YOUR_TYPEFORM_ID_2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BUGG Capital — From Code to Capital" },
      { name: "description", content: "Investment holding in het grensgebied NL–BE. Van platformbedrijven naar vastgoedfondsen. 40+ panden. €7M gecommitteerd. Since 2012." },
      { property: "og:title", content: "BUGG Capital — From Code to Capital" },
      { property: "og:description", content: "Van platformbedrijven naar vastgoedfondsen. Co-ownership in Belgisch short-stay vastgoed." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLanguage();

  const kpis = [
    { value: "40+", label: t("Panden in portefeuille", "Properties in portfolio") },
    { value: "€7M", label: t("Gecommitteerd capital", "Committed capital") },
    { value: "€50M", label: t("Target AUM", "Target AUM") },
    { value: "12–14%", label: t("Target rendement p.j.", "Target return p.a.") },
  ];

  const timeline = [
    { period: "2012–2014", title: "SvB Group", desc: t("E-commerce holding", "E-commerce holding") },
    { period: "2011–2019", title: "Colengo", desc: t("E-tail & retail technologie", "E-tail & retail technology") },
    { period: "2016–2020", title: "Fangage", desc: t("Social creator platform (exit 2020)", "Social creator platform (exit 2020)") },
    { period: t("2019–nu", "2019–now"), title: "Specialstays", desc: t("Short-stay operating platform", "Short-stay operating platform") },
    { period: "2024", title: "Lacuna Fund", desc: t("Eerste vastgoedfonds", "First real estate fund") },
    { period: "2026", title: "Lama Fund", desc: t("Premium groepsverblijven", "Premium group stays") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow justify-center">From Code to Capital</div>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              {t(
                <>Wij bouwen platforms.<br /><span className="italic-accent">Nu bouwen wij aan vermogen.</span></>,
                <>We build platforms.<br /><span className="italic-accent">Now we build wealth.</span></>,
              )}
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t(
                "BUGG Capital is een investment holding in het grensgebied NL–BE. Van platformbedrijven naar vastgoedfondsen. De partners investeren zelf mee. 40+ panden. €7M gecommitteerd. Since 2012.",
                "BUGG Capital is an investment holding in the NL–BE border region. From platform ventures to real estate funds. The partners invest alongside you. 40+ properties. €7M committed. Since 2012.",
              )}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/fondsen" className="btn-primary">
                {t("Bekijk de fondsen", "View our funds")} <ArrowRight size={16} />
              </Link>
              <button data-tf-popup={TYPEFORM_DOC_ID} className="btn-ghost">
                {t("Download whitepaper", "Download whitepaper")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KPI BAR */}
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {kpis.map((k) => (
              <div key={k.label} className="bg-background/60 px-6 py-10 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">{k.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">{t("Het verhaal", "The story")}</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              {t(
                <>Van platforms<br /><span className="italic-accent">naar vastgoed.</span></>,
                <>From platforms<br /><span className="italic-accent">to real estate.</span></>,
              )}
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              {t(
                "BUGG Capital heeft een lange historie van bouwen op platforms — van e-commerce tot social platforms. Die kennis heeft één gemeenschappelijke noemer: begrijp hoe een platform werkt, en speel het beter dan de rest.",
                "BUGG Capital has a long history of building on platforms — from e-commerce to social platforms. That knowledge has one common denominator: understand how a platform works, and play it better than anyone.",
              )}
            </p>
            <p>
              {t(
                "Sinds 2024 zetten wij die kennis in op de OTA-markt. Airbnb, Booking.com, VRBO en Expedia zijn de platformen. Belgisch vastgoed is het product. Specialstays — eigen ontwikkeld operating platform — is de motor. Wij investeren zelf mee in elk fonds. Altijd.",
                "Since 2024, we apply that knowledge to the OTA market. Airbnb, Booking.com, VRBO and Expedia are the platforms. Belgian real estate is the product. Specialstays — a proprietary operating platform — is the engine. We invest alongside you in every fund. Always.",
              )}
            </p>
            <Link to="/over-ons" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              {t("Over BUGG", "About BUGG")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("Track record", "Track record")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">From Code to Capital.</h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t(
                "14 jaar ondernemen. Van IT naar vastgoed. Elke stap was een platform.",
                "14 years of building. From IT to real estate. Every step was a platform.",
              )}
            </p>
          </div>

          {/* Desktop horizontal */}
          <div className="hidden md:block overflow-x-auto -mx-6 lg:-mx-10 px-6 lg:px-10">
            <div className="relative flex gap-px bg-border min-w-max">
              {timeline.map((item) => (
                <div key={item.title} className="bg-background p-6 w-64 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-primary">{item.period}</div>
                  <div className="mt-4 text-xl font-semibold">{item.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden relative border-l border-border pl-6 space-y-8">
            {timeline.map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-[1.6rem] top-2 w-2 h-2 rounded-full bg-primary" />
                <div className="text-xs uppercase tracking-widest text-primary">{item.period}</div>
                <div className="mt-1 text-lg font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALSTAYS — DE MOTOR */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">{t("De motor", "The engine")}</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              {t(
                <>Specialstays.<br />Gebouwd door ons.<br /><span className="italic-accent">Aangedreven door data.</span></>,
                <>Specialstays.<br />Built by us.<br /><span className="italic-accent">Powered by data.</span></>,
              )}
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t(
                "Specialstays is het operating platform dat BUGG Capital zelf heeft ontwikkeld. Het beheert pricing, distributie, gastbeleving en bezetting over alle OTA-kanalen tegelijk — Airbnb, Booking.com, VRBO en Expedia.",
                "Specialstays is the operating platform BUGG Capital built in-house. It manages pricing, distribution, guest experience and occupancy across every OTA simultaneously — Airbnb, Booking.com, VRBO and Expedia.",
              )}
            </p>
            <p>
              {t(
                "Het is niet uitbesteed. Het is onze edge.",
                "It is not outsourced. It is our edge.",
              )}
            </p>
            <div className="grid grid-cols-3 gap-px bg-border mt-8">
              {[
                { v: "70%", l: t("Gem. bezetting", "Avg. occupancy") },
                { v: "8.8", l: t("Gastbeoordeling", "Guest rating") },
                { v: "100+", l: t("Distributiekanalen", "Distribution channels") },
              ].map((s) => (
                <div key={s.l} className="bg-background p-5">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{s.v}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THREE FUNDS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <div className="eyebrow">Co-ownership</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              {t(
                <>Twee fondsen.<br />Eén systeem.<br /><span className="italic-accent">Eigen capital erin.</span></>,
                <>Two funds.<br />One system.<br /><span className="italic-accent">Our capital in it.</span></>,
              )}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t(
                "De partners investeren zelf mee — dezelfde positie, dezelfde rechten. Naast een beheervergoeding verdienen wij carry — alleen als u rendement maakt.",
                "The partners invest alongside you — same position, same rights. Beyond a management fee we earn carry — only when you earn a return.",
              )}
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Lacuna */}
            <div className="panel p-8 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-primary">Lacuna · Leasehold</div>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">{t("Built to compound.", "Built to compound.")}</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {t(
                  "Short-stay units via leasehold in Belgisch Limburg. Bewezen operating systeem. 25+ units actief.",
                  "Short-stay units via leasehold in Belgian Limburg. Proven operating system. 25+ active units.",
                )}
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {t("12%+ target · €5M gecommitteerd · Min. €100.000", "12%+ target · €5M committed · Min. €100,000")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/fondsen/lacuna" className="btn-primary !py-2.5 !px-4 text-xs">
                  {t("Meer over Lacuna", "More about Lacuna")} →
                </Link>
                <button data-tf-popup={TYPEFORM_DOC_ID} className="btn-ghost !py-2.5 !px-4 text-xs">
                  {t("Download factsheet", "Download factsheet")}
                </button>
              </div>
            </div>

            {/* Lama */}
            <div className="panel p-8 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-primary">Lama · Freehold</div>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">{t("Built to compound.", "Built to compound.")}</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {t(
                  "Premium groepsverblijven met directe eigendom. Inkopen op Belgische kostenbasis, verhuren aan Nederlandse gasten.",
                  "Premium group stays in direct ownership. Acquire at Belgian cost base, rent to Dutch guests.",
                )}
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {t("14%+ target · €2M pilot · Min. €100.000", "14%+ target · €2M pilot · Min. €100,000")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/fondsen/lama" className="btn-primary !py-2.5 !px-4 text-xs">
                  {t("Meer over Lama", "More about Lama")} →
                </Link>
                <button data-tf-popup={TYPEFORM_DOC_ID} className="btn-ghost !py-2.5 !px-4 text-xs">
                  {t("Download factsheet", "Download factsheet")}
                </button>
              </div>
            </div>

            {/* Residentieel — coming soon */}
            <div className="panel p-8 flex flex-col opacity-50">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("Residentieel · Coming soon", "Residential · Coming soon")}
              </div>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-muted-foreground">
                {t("Volgende fase.", "Next phase.")}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {t(
                  "Residentieel vastgoed in het grensgebied NL–BE. Meer details volgen.",
                  "Residential real estate in the NL–BE border region. More details to follow.",
                )}
              </p>
            </div>
          </div>


          <p className="mt-10 text-xs text-muted-foreground">
            {t(
              "Uitsluitend beschikbaar voor gekwalificeerde beleggers. Gedetailleerde documentatie op aanvraag.",
              "Available only to qualified investors. Detailed documentation on request.",
            )}
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">{t("Eerste stap", "First step")}</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              {t(
                <>Klaar voor<br /><span className="italic-accent">een gesprek?</span></>,
                <>Ready for<br /><span className="italic-accent">a conversation?</span></>,
              )}
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Geen pitch, geen druk. Een gesprek over wat BUGG doet en of het bij u past.",
                "No pitch, no pressure. A conversation about what BUGG does and whether it fits.",
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <button data-tf-popup={TYPEFORM_CALL_ID} className="btn-primary">
                {t("Gesprek aanvragen", "Schedule a call")} <ArrowRight size={16} />
              </button>
              <button data-tf-popup={TYPEFORM_DOC_ID} className="btn-ghost">
                {t("Download whitepaper", "Download whitepaper")}
              </button>
            </div>
            <Link to="/cases" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              {t("Bekijk de cases", "View cases")} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
