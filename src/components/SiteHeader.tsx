import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import buggLogoWhite from "@/assets/bugg-logo-white.png.asset.json";


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const nav = [
    { to: "/" as const, label: t("Home", "Home") },
    { to: "/over-ons" as const, label: t("Over ons", "About") },
    { to: "/fondsen" as const, label: t("Fondsen", "Funds") },
    { to: "/casussen" as const, label: t("Portefeuille", "Portfolio") },
    { to: "/investments" as const, label: "Investments" },
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" aria-label="BUGG Capital home">
          <img src={buggLogoWhite.url} alt="BUGG" className="h-6 w-auto" />
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Capital
          </span>
        </Link>


        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary !py-2 !px-4">
            {t("Gesprek aanvragen", "Schedule a call")} →
          </Link>
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
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground py-1"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 !justify-start">
              {t("Gesprek aanvragen", "Schedule a call")} →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
