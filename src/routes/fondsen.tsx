import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

function FondsenPage() {
  const { t } = useLanguage();

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
        </div>
      </section>

      {/* FUND SELECTOR */}
      <section>
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-6">
          <Link to="/fondsen/lacuna" className="panel p-10 hover:border-primary transition-colors group">
            <div className="eyebrow">Lacuna · Leasehold</div>
            <h3 className="mt-5 text-3xl md:text-4xl font-semibold">
              {t("Structureel inkomen.", "Structural income.")}
            </h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "12%+ target · 25+ units · €5M gecommitteerd",
                "12%+ target · 25+ units · €5M committed",
              )}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary">
              {t("Bekijk Lacuna", "View Lacuna")}{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link to="/fondsen/lama" className="panel p-10 hover:border-primary transition-colors group">
            <div className="eyebrow">Lama · Freehold</div>
            <h3 className="mt-5 text-3xl md:text-4xl font-semibold">
              {t("Vermogen dat compoundt.", "Wealth that compounds.")}
            </h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "14%+ target · Pilot fase · €2M gecommitteerd",
                "14%+ target · Pilot phase · €2M committed",
              )}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary">
              {t("Bekijk Lama", "View Lama")}{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
