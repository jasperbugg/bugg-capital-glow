import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TYPEFORM_DOC_ID = "YOUR_TYPEFORM_ID";
const TYPEFORM_CALL_ID = "YOUR_TYPEFORM_ID_2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BUGG Capital — From Code to Capital" },
      { name: "description", content: "Investment holding in het grensgebied NL–BE. Van platformbedrijven naar vastgoedfondsen. Built to compound." },
      { property: "og:title", content: "BUGG Capital — From Code to Capital" },
      { property: "og:description", content: "Van platformbedrijven naar vastgoedfondsen. Co-ownership in Belgisch short-stay vastgoed. Built to compound." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLanguage();

  const kpis = [
    { value: "40+", label: t("Panden in portefeuille", "Properties in portfolio") },
    { value: "€7M", label: t("Gecommitteerd kapitaal", "Committed capital") },
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

  const flywheel = [
    t("Data & locatieselectie", "Data & location selection"),
    t("Aankoop op juiste prijs", "Acquisition at the right price"),
    t("Renovatie & inrichting", "Renovation & interior"),
    t("Specialstays-activatie", "Specialstays activation"),
    t("Boven-markt exploitatie", "Above-market operation"),
    t("Rendement & herinvestering", "Returns & reinvestment"),
  ];

  return (
    <>
      {/* HERO */}
      <section className="section-blue relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow justify-center">Built to compound</div>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              {t(
                <>Wij bouwen platforms.<br /><span className="italic-accent">Én bouwen wij aan vermogen.</span></>,
                <>We build platforms.<br /><span className="italic-accent">And build wealth.</span></>,
              )}
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t(
                "BUGG Capital is een investment holding in het grensgebied NL–BE. Specialstays als operating platform, Lacuna en Lama als vastgoedfondsen. De partners investeren zelf mee. 40+ panden. €7M gecommitteerd. Actief since 2012.",
                "BUGG Capital is an investment holding in the NL–BE border region. Specialstays as operating platform, Lacuna and Lama as real estate funds. The partners invest alongside you. 40+ properties. €7M committed. Actief since 2012.",
              )}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/fondsen" className="btn-primary">
                {t("Bekijk de fondsen", "View our funds")} <ArrowRight size={16} />
              </Link>
              <button type="button" className="btn-ghost opacity-80 cursor-not-allowed">
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
                "Specialstays — ons eigen operating platform, actief since 2019 — beheert pricing, distributie en gastbeleving over alle OTA-kanalen. Belgisch vastgoed is het product. De fondsen zijn de investeringsvehikels. Wij investeren zelf mee in elk fonds. Altijd.",
                "Specialstays — our proprietary operating platform, active since 2019 — manages pricing, distribution and guest experience across every OTA. Belgian real estate is the product. The funds are the investment vehicles. We invest alongside you in every fund. Always.",
              )}
            </p>
            <Link to="/over-ons" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              {t("Over BUGG", "About BUGG")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE / TRACK RECORD */}
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

      {/* FLYWHEEL */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-3xl">
            <div className="eyebrow">{t("Het vliegwiel", "The flywheel")}</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              {t("Het systeem achter het rendement.", "The system behind the returns.")}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t(
                "Vastgoed is het product. Specialstays is de motor. Het systeem compoundt.",
                "Real estate is the product. Specialstays is the engine. The system compounds.",
              )}
            </p>
          </div>

          {/* Desktop: circular flow */}
          <div className="hidden lg:block relative mx-auto mt-16 w-[640px] h-[640px]">
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-[220px]">
                <div className="text-xs uppercase tracking-widest text-primary">Built to compound</div>
                <div className="mt-2 text-lg font-semibold text-foreground">
                  {t("Het BUGG-vliegwiel", "The BUGG flywheel")}
                </div>
              </div>
            </div>
            {flywheel.map((label, i) => {
              const angle = (i / flywheel.length) * 2 * Math.PI - Math.PI / 2;
              const r = 260;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <div
                  key={label}
                  className="absolute w-44 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-foreground leading-tight">{label}</div>
                </div>
              );
            })}
          </div>

          {/* Mobile / tablet: stacked steps */}
          <div className="lg:hidden mt-12 relative border-l-2 border-primary/30 pl-8 space-y-8">
            {flywheel.map((label, i) => (
              <div key={label} className="relative">
                <span className="absolute -left-[2.4rem] top-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div className="text-base font-semibold text-foreground">{label}</div>
              </div>
            ))}
            <div className="pl-1 text-xs uppercase tracking-widest text-primary">
              ↻ {t("Terug naar stap 1 — Built to compound", "Back to step 1 — Built to compound")}
            </div>
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
            <p>{t("Het is niet uitbesteed. Het is onze edge.", "It is not outsourced. It is our edge.")}</p>
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
      <section className="section-blue border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <div className="eyebrow">Co-ownership</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              {t(
                <>Twee fondsen.<br />Eén systeem.<br /><span className="italic-accent">Built to compound.</span></>,
                <>Two funds.<br />One system.<br /><span className="italic-accent">Built to compound.</span></>,
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
              <p className="mt-4 text-base text-foreground leading-relaxed">
                {t(
                  "Leasehold — gericht op hoge bezetting, hoge nachtprijs en stabiele cashflow.",
                  "Leasehold — focused on high occupancy, high nightly rate and stable cashflow.",
                )}
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">Built to compound.</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                {t("12%+ target · €5M gecommitteerd · Min. €100.000", "12%+ target · €5M committed · Min. €100,000")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/fondsen/lacuna" className="btn-primary !py-2.5 !px-4 text-xs">
                  {t("Meer over Lacuna", "More about Lacuna")} →
                </Link>
              </div>
            </div>

            {/* Lama */}
            <div className="panel p-8 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-primary">Lama · Freehold</div>
              <p className="mt-4 text-base text-foreground leading-relaxed">
                {t(
                  "Freehold — vastgoed als onderpand, boven-markt-rendement via STR-exploitatie. Een fonds dat herinvesteert.",
                  "Freehold — real estate as collateral, above-market returns through STR operation. A fund that reinvests.",
                )}
              </p>
              <p className="mt-3 text-sm italic text-primary">Don't just buy the house. Buy the system.</p>
              <p className="mt-2 text-sm font-semibold text-primary">Built to compound.</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                {t("14%+ target · €2M pilot · Min. €100.000", "14%+ target · €2M pilot · Min. €100,000")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/fondsen/lama" className="btn-primary !py-2.5 !px-4 text-xs">
                  {t("Meer over Lama", "More about Lama")} →
                </Link>
              </div>
            </div>

            {/* Residentieel — coming soon */}
            <div className="panel p-8 flex flex-col opacity-70">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("Residentieel · Coming soon", "Residential · Coming soon")}
              </div>
              <p className="mt-4 text-base text-foreground leading-relaxed">
                {t(
                  "Verhuur van moderne woningen aan expats en professionals direct op de grens NL–BE. Meer details volgen.",
                  "Rental of modern homes to expats and professionals right on the NL–BE border. More details to follow.",
                )}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <button type="button" className="btn-ghost !py-2.5 !px-4 text-xs cursor-not-allowed">
                  {t("Meer info volgt →", "More info to follow →")}
                </button>
              </div>
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
      <section className="section-blue">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Built to compound</div>
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
              <Link to="/contact" className="btn-primary">
                {t("Contact opnemen", "Get in touch")} <ArrowRight size={16} />
              </Link>
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
