import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/uw-inzicht")({
  head: () => ({
    meta: [
      { title: "Uw Inzicht — Events & Dashboard | BUGG Capital" },
      { name: "description", content: "Voor co-owners: aankomende events, real-time portfolio inzicht en scenario calculator." },
      { property: "og:title", content: "Uw Inzicht — Events & Dashboard | BUGG Capital" },
      { property: "og:description", content: "Events, dashboard en scenario calculator voor co-owners van BUGG Capital." },
    ],
  }),
  component: UwInzicht,
});

const events = [
  { m: "Juni", t: "Tweejaarlijkse BBQ", s: "Voor co-owners en partners · The Windmill, Belgisch Limburg", d: "Sat 21 jun" },
  { m: "Juli", t: "Inloopdag De Molen", s: "Open bezichtiging en update over de transformatie", d: "Wo 16 jul" },
  { m: "Aug", t: "Park-inloopdag Zonhoven", s: "Bezichtiging C50 Ignis en overige Lacuna units", d: "Za 09 aug" },
  { m: "Sep", t: "Investeerdersavond Lama", s: "Voortgang fonds, pipeline en Q&A · Maastricht", d: "Do 18 sep" },
  { m: "Okt", t: "Pre-launch Residentieel", s: "Eerste presentatie aan geïnteresseerden", d: "Di 14 okt" },
];

function Calculator() {
  const [amount, setAmount] = useState(200000);
  const [years, setYears] = useState(7);
  const rate = 0.14;
  const projected = Math.round(amount * Math.pow(1 + rate, years));
  const gain = projected - amount;
  return (
    <div className="panel p-8 md:p-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">Te investeren bedrag</label>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-primary">€</span>
              <input
                type="number"
                step={10000}
                min={100000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="flex-1 bg-background border border-input px-4 py-3 text-xl font-semibold focus:outline-none focus:border-primary"
              />
            </div>
            <input type="range" min={100000} max={2000000} step={50000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full mt-3 accent-primary" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">Looptijd · {years} jaar</label>
            <input type="range" min={1} max={15} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2"><span>1 jr</span><span>15 jr</span></div>
          </div>
        </div>

        <div className="border-l border-border pl-8">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Verwachte waarde na {years} jaar</div>
          <div className="mt-3 text-5xl md:text-6xl font-bold text-primary">€{projected.toLocaleString("nl-NL")}</div>
          <div className="mt-4 flex items-center gap-2 text-sm text-foreground">
            <TrendingUp size={14} className="text-primary" />
            <span>+€{gain.toLocaleString("nl-NL")} totale aangroei</span>
          </div>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            Indicatieve scenario op basis van een gemiddeld target-rendement van 14% per jaar (Lama). Geen prognose, geen toezegging. Werkelijke rendementen kunnen afwijken.
          </p>
        </div>
      </div>
    </div>
  );
}

function UwInzicht() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Uw Inzicht</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Events. Inzicht.<br /><span className="italic-accent">Eigen scenario.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Voor co-owners en geïnteresseerden: aankomende bijeenkomsten, een real-time dashboard, en een scenario calculator om uw eigen positie door te rekenen.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Events</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Zien is<br /><span className="italic-accent">begrijpen.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              De tweejaarlijkse BBQ, maandelijkse inloopdagen op de molen en het park, en investeerdersavonden. Beleef het portfolio zelf.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {events.map((e) => (
              <div key={e.t} className="bg-background p-6">
                <div className="text-4xl font-bold text-primary/40">{e.m}</div>
                <h3 className="mt-4 text-base font-semibold leading-tight">{e.t}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{e.s}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                  <Calendar size={12} /> {e.d}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="mailto:stef@bugg.nl?subject=Aanmelden%20event" className="btn-ghost">
              Aanmelden voor een event <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Dashboard</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Real-time<br /><span className="italic-accent">inzicht.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Als co-owner krijgt u toegang tot het dashboard: live cijfers per pand, fonds-niveau rendement, gastenreviews en projectupdates. Geen black box.
            </p>
          </div>

          <div className="panel p-6 md:p-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                ["€7,2M", "Capital under management"], ["72%", "Bezetting YTD"], ["8.9", "Gem. gastscore"], ["+€1,18M", "NOI YTD"],
              ].map(([n, l]) => (
                <div key={l} className="bg-background p-6">
                  <div className="text-3xl font-bold text-primary">{n}</div>
                  <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                { n: "C50 Ignis", v: "70% bezet · 8.8 review" },
                { n: "Salpstraat", v: "82% bezet · 9.1 review" },
                { n: "The Windmill", v: "In renovatie · oplevering Q3" },
              ].map((p) => (
                <div key={p.n} className="border border-border p-5">
                  <div className="text-sm font-semibold">{p.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">Voorbeeldweergave. Inloggen voor co-owners volgt bij toetreding.</p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Scenario calculator</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Reken uw eigen<br /><span className="italic-accent">positie door.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Stel een bedrag in en kies een looptijd. Bijvoorbeeld: wat doet €200.000 over 7 jaar in Lama? Indicatief op basis van target-rendement.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Klaar om mee te doen?</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Plan een kennismaking en wij geven u toegang tot het dashboard en de volledige documentatie.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary">Kennismaken <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
