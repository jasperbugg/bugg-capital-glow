import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import buggLogoWhite from "@/assets/bugg-logo-white.png.asset.json";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={buggLogoWhite.url} alt="BUGG" className="h-8 w-auto" />
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Capital</span>
          </div>

          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            {t(
              "Investment holding actief in het grensgebied NL–BE. Eigen platform, eigen fondsen, eigen capital erin. Opgericht 2012.",
              "Investment holding active in the NL–BE border region. Own platform, own funds, own capital invested. Founded 2012.",
            )}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/bugg-capital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 inline-flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/bugg.capital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 inline-flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            {t(
              "Uitsluitend voor gekwalificeerde beleggers (Wft).",
              "For qualified investors only (Wft).",
            )}
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            {t("Navigatie", "Navigation")}
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/over-ons" className="hover:text-primary">{t("Over ons", "About")}</Link></li>
            <li><Link to="/fondsen" className="hover:text-primary">{t("Fondsen", "Funds")}</Link></li>
            <li><Link to="/casussen" className="hover:text-primary">{t("Portefeuille", "Portfolio")}</Link></li>
            <li><Link to="/investments" className="hover:text-primary">Investments</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Oude Maasstraat 31</li>
            <li>6211 HM Maastricht</li>
            <li className="pt-2">
              <a href="mailto:stef@bugg.nl" className="hover:text-primary">stef@bugg.nl</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} BUGG Capital. {t("Alle rechten voorbehouden.", "All rights reserved.")}</div>
          <div>{t("Grensgebied NL · BE · Sinds 2012", "Border region NL · BE · Since 2012")}</div>
        </div>
      </div>
    </footer>
  );
}
