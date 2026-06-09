import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/fondsen", label: "Fondsen" },
  { to: "/casussen", label: "Casussen" },
  { to: "/investments", label: "Investments" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-lg">
          BUGG<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
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

        <Link to="/contact" className="hidden md:inline-flex btn-primary !py-2 !px-4">
          Gesprek aanvragen →
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
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
              Gesprek aanvragen →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
