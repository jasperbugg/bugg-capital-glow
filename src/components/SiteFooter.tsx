import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight lowercase">
              bugg<span className="text-primary">.</span>
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Capital</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Investment holding actief in het grensgebied NL–BE. Eigen platform, eigen fondsen,
            eigen capital erin. Opgericht 2012.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Uitsluitend voor gekwalificeerde beleggers (Wft).
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Navigatie
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/over-ons" className="hover:text-primary">Over ons</Link></li>
            <li><Link to="/fondsen" className="hover:text-primary">Fondsen</Link></li>
            <li><Link to="/casussen" className="hover:text-primary">Casussen</Link></li>
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
          <div>© {new Date().getFullYear()} BUGG Capital. Alle rechten voorbehouden.</div>
          <div>Grensgebied NL · BE · Since 2012</div>
        </div>
      </div>
    </footer>
  );
}
