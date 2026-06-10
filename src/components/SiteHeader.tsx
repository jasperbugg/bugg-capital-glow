import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import buggLogoWhite from "@/assets/bugg-logo-white.png.asset.json";

const TYPEFORM_CALL_ID = "YOUR_TYPEFORM_ID_2";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [fondsenOpen, setFondsenOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" aria-label="BUGG home">
          <img src={buggLogoWhite.url} alt="BUGG" className="h-6 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
            activeOptions={{ exact: true }}
          >
            {t("Home", "Home")}
          </Link>

          {/* Fondsen dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFondsenOpen(true)}
            onMouseLeave={() => setFondsenOpen(false)}
          >
            <Link
              to="/fondsen"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {t("Fondsen", "Funds")}
              <ChevronDown size={14} />
            </Link>
            {fondsenOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-52 border border-border bg-background shadow-lg">
                  <Link
                    to="/fondsen/lacuna"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    Lacuna Fund
                  </Link>
                  <Link
                    to="/fondsen/lama"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border-t border-border"
                  >
                    Lama Fund
                  </Link>
                  <div
                    className="block px-4 py-3 text-sm text-muted-foreground/40 cursor-not-allowed border-t border-border"
                    aria-disabled="true"
                  >
                    {t("Residentieel", "Residential")}
                    <span className="ml-2 text-[10px] uppercase tracking-widest">
                      {t("Binnenkort", "Soon")}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/cases"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            {t("Cases", "Cases")}
          </Link>
          <Link
            to="/investments"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Investments
          </Link>
          <Link
            to="/over-ons"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            {t("Over ons", "About")}
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button data-tf-popup={TYPEFORM_CALL_ID} className="btn-primary !py-2 !px-4">
            {t("Gesprek aanvragen", "Schedule a call")} →
          </button>
          <LanguageToggle />
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1" activeProps={{ className: "text-foreground font-medium" }} activeOptions={{ exact: true }}>
              {t("Home", "Home")}
            </Link>
            <Link to="/fondsen" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1" activeProps={{ className: "text-foreground font-medium" }}>
              {t("Fondsen", "Funds")}
            </Link>
            <Link to="/fondsen/lacuna" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1 pl-4 text-sm">
              — Lacuna Fund
            </Link>
            <Link to="/fondsen/lama" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1 pl-4 text-sm">
              — Lama Fund
            </Link>
            <span className="text-muted-foreground/40 py-1 pl-4 text-sm">
              — {t("Residentieel (binnenkort)", "Residential (soon)")}
            </span>
            <Link to="/cases" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1" activeProps={{ className: "text-foreground font-medium" }}>
              {t("Cases", "Cases")}
            </Link>
            <Link to="/investments" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1" activeProps={{ className: "text-foreground font-medium" }}>
              Investments
            </Link>
            <Link to="/over-ons" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1" activeProps={{ className: "text-foreground font-medium" }}>
              {t("Over ons", "About")}
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-1" activeProps={{ className: "text-foreground font-medium" }}>
              Contact
            </Link>
            <button data-tf-popup={TYPEFORM_CALL_ID} onClick={() => setOpen(false)} className="btn-primary mt-2 !justify-start">
              {t("Gesprek aanvragen", "Schedule a call")} →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
