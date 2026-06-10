import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/fondsen/lacuna")({
  component: LacunaPage,
  head: () => ({
    meta: [
      { title: "Lacuna Fund · Leasehold · BUGG Capital" },
      {
        name: "description",
        content:
          "Lacuna Fund — short-stay leasehold in Belgisch Limburg. 12%+ target, 25+ units, €5M gecommitteerd. Built to compound.",
      },
    ],
  }),
});

function SpecTable({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      {rows.map((r, i) => (
        <div key={i} className="flex justify-between gap-4 py-3 border-b border-border text-sm">
          <dt className="text-muted-foreground">{r.k}</dt>
          <dd className="text-right text-foreground">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
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

function LacunaPage() {
  const { t } = useLanguage();

  const cases = [
    {
      location: t("Zonhoven — 4-persoons bungalow", "Zonhoven — 4-person bungalow"),
      year: "2023",
      appreciation: "+22%",
      yield: t("13% p.j.", "13% p.a."),
      intro: t(
        "Van standaard bungalow naar top-performer op Airbnb en Booking.com. 70% bezetting in jaar 1 — ruim boven het nationale gemiddelde.",
        "From standard bungalow to top performer on Airbnb and Booking.com. 70% occupancy in year 1 — well above the national average.",
      ),
      exterior: "https://cdn-cms.bookingexperts.com/media/3464/39/c50_lr_12_772f69b1-b936-4486-9ad2-581e3d2d4dfa.jpg",
    },
    {
      location: t("Houthalen — 6-persoons bungalow", "Houthalen — 6-person bungalow"),
      year: "2023",
      appreciation: "+18%",
      yield: t("12% p.j.", "12% p.a."),
      intro: t(
        "Volledige make-over en herpositionering binnen een holiday domain. Stabiele cashflow vanaf maand vier.",
        "Full makeover and repositioning within a holiday domain. Stable cashflow from month four onwards.",
      ),
    },
    {
      location: t("Hechtel-Eksel — 4-persoons unit", "Hechtel-Eksel — 4-person unit"),
      year: "2024",
      appreciation: "+15%",
      yield: t("12% p.j.", "12% p.a."),
      intro: t(
        "Short-stay unit gericht op koppels en kleine gezinnen. Specialstays-activatie binnen vier weken na oplevering.",
        "Short-stay unit targeting couples and small families. Specialstays activation within four weeks of delivery.",
      ),
    },
    {
      location: t("Maasmechelen — 6-persoons bungalow", "Maasmechelen — 6-person bungalow"),
      year: "2024",
      appreciation: "+17%",
      yield: t("13% p.j.", "13% p.a."),
      intro: t(
        "Premium afwerking en distributie over 100+ kanalen. Boven-markt ADR vanaf opening.",
        "Premium finish and distribution across 100+ channels. Above-market ADR from opening.",
      ),
    },
  ];

  const faq = [
    {
      q: t("Wat betekent leasehold in de context van Lacuna?", "What does leasehold mean within Lacuna?"),
      a: t(
        "Lacuna verwerft langetermijn gebruiksrechten op short-stay units binnen Belgische holiday domains. U bent juridisch mede-eigenaar van het fonds dat de leasehold-portefeuille houdt — niet van de grond.",
        "Lacuna acquires long-term usage rights on short-stay units inside Belgian holiday domains. You are legal co-owner of the fund that holds the leasehold portfolio — not of the land itself.",
      ),
    },
    {
      q: t("Wat is de lockup-periode en hoe werkt uittreding?", "What is the lockup and how does exit work?"),
      a: t(
        "De lockup bedraagt 9 jaar. Na de lockup kunnen participaties via een gestructureerde windowperiode worden aangeboden aan andere participanten of teruggekocht door het fonds.",
        "The lockup is 9 years. After the lockup, participations can be offered to other participants or repurchased by the fund during structured exit windows.",
      ),
    },
    {
      q: t("Welk rendement wordt nagestreefd en hoe wordt het uitgekeerd?", "What return is targeted and how is it paid out?"),
      a: t(
        "Lacuna mikt op 12%+ equity rendement per jaar. Cashflow uit exploitatie wordt jaarlijks uitgekeerd; waardestijging wordt gerealiseerd bij rotatie of herfinanciering.",
        "Lacuna targets 12%+ equity return per year. Operating cashflow is distributed annually; capital appreciation is realised on rotation or refinancing.",
      ),
    },
    {
      q: t("Wat is de minimale deelname en voor wie is dit fonds bedoeld?", "What is the minimum participation and who is the fund for?"),
      a: t(
        "Minimum €100.000. Lacuna is uitsluitend toegankelijk voor gekwalificeerde beleggers conform Wft/FSMA — typisch family offices, ondernemers en vermogende particulieren.",
        "Minimum €100,000. Lacuna is available only to qualified investors under Wft/FSMA — typically family offices, entrepreneurs and HNW individuals.",
      ),
    },
  ];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="section-blue border-b border-border bugg-grid bugg-grid-fade">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="eyebrow">Lacuna Fund · Leasehold</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
            {t(
              <>Short-stay vastgoed.<br /><span className="italic-accent">Built to compound.</span></>,
              <>Short-stay real estate.<br /><span className="italic-accent">Built to compound.</span></>,
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            {t(
              "Lacuna investeert in short-stay units via langetermijn gebruiksrechten (leasehold) binnen holiday domains in Belgisch Limburg. Aangedreven door het Specialstays operating systeem: hogere dagprijzen, hogere bezetting, lagere kosten.",
              "Lacuna invests in short-stay units via long-term usage rights (leasehold) inside holiday domains in Belgian Limburg. Powered by the Specialstays operating system: higher daily rates, higher occupancy, lower costs.",
            )}
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {t("De partners investeren zelf mee. Built to compound.", "The partners invest alongside. Built to compound.")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button type="button" className="btn-primary opacity-90 cursor-not-allowed">
              {t("Documentatie aanvragen", "Request documentation")} <ArrowRight size={16} />
            </button>
            <Link to="/contact" className="btn-ghost">{t("Contact opnemen", "Get in touch")}</Link>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
          <div className="panel p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              {t("Specificaties", "Specifications")}
            </div>
            <SpecTable
              rows={[
                { k: t("Type", "Type"), v: t("Leasehold · Belgisch Limburg", "Leasehold · Belgian Limburg") },
                { k: t("Structuur", "Structure"), v: t("Co-ownership · evergreen", "Co-ownership · evergreen") },
                { k: t("Minimale deelname", "Minimum participation"), v: "€100.000" },
                { k: "Lockup", v: t("9 jaar", "9 years") },
                { k: t("Equity target", "Equity target"), v: t("12%+ per jaar", "12%+ per year") },
                { k: t("Gecommitteerd", "Committed"), v: "€5M" },
                { k: "Target AUM", v: "€25M" },
                { k: t("Vrijstelling", "Exemption"), v: t("Gekwalificeerde beleggers (Wft/FSMA)", "Qualified investors (Wft/FSMA)") },
              ]}
            />
          </div>
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                {t("Filosofie", "Philosophy")}
              </div>
              <p className="text-foreground leading-relaxed">
                {t(
                  "Lacuna combineert leasehold-vastgoed met een eigen operating platform. Hogere bezetting, hogere ADR en gedisciplineerde kosten — jaar na jaar.",
                  "Lacuna combines leasehold real estate with a proprietary operating platform. Higher occupancy, higher ADR and disciplined costs — year after year.",
                )}
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-primary">Built to compound.</p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">{t("Portefeuille", "Portfolio")}</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
                {t(<>De panden.<br /><span className="italic-accent">De resultaten.</span></>, <>The properties.<br /><span className="italic-accent">The results.</span></>)}
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              {t("Een selectie uit het actieve Lacuna portfolio.", "A selection from the active Lacuna portfolio.")}
            </p>
          </div>

          <div className="space-y-10">
            {cases.map((c, i) => (
              <div key={i} className="panel p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {c.exterior ? (
                    <img src={c.exterior} alt={c.location} className="aspect-[4/3] object-cover w-full" loading="lazy" />
                  ) : (
                    <ImagePlaceholder label={t("Exterior", "Exterior")} />
                  )}
                  <ImagePlaceholder label={t("Voor", "Before")} />
                  <ImagePlaceholder label={t("Na", "After")} />
                </div>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold">{c.location}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{c.intro}</p>
                  </div>
                  <dl className="md:col-span-2 grid grid-cols-2 gap-x-4 gap-y-3 text-sm self-start">
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Jaar aankoop", "Year acquired")}</dt>
                      <dd className="mt-1 text-foreground">{c.year}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Waardestijging", "Appreciation")}</dt>
                      <dd className="mt-1 text-foreground">{c.appreciation}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("Rendement per jaar", "Yield per year")}</dt>
                      <dd className="mt-1 text-foreground">{c.yield}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}

            {/* Case 5: dataroom placeholder */}
            <div className="panel p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="text-foreground leading-relaxed max-w-2xl">
                {t(
                  "Volledig portfolio beschikbaar via de dataroom — toegang op aanvraag.",
                  "Full portfolio available via the dataroom — access on request.",
                )}
              </p>
              <button type="button" className="btn-primary opacity-90 cursor-not-allowed">
                {t("Dataroom aanvragen →", "Request dataroom →")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
              {t(<>Veelgestelde<br /><span className="italic-accent">vragen.</span></>, <>Frequently<br /><span className="italic-accent">asked.</span></>)}
            </h2>
          </div>
          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* VAN AANKOOP TOT OPLEVERING */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Built to compound</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold uppercase tracking-tight">
              {t("Van aankoop tot oplevering", "From acquisition to delivery")}
            </h2>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              {t(
                "Met ons eigen team nemen we de verantwoordelijkheid van aankoop tot oplevering — inclusief renovatie, inrichting en positionering. Onze interieurontwerpers zorgen dat elk verblijf een premium beleving is.",
                "Our in-house team takes responsibility from acquisition to delivery — including renovation, interior and positioning. Our interior designers make sure every stay is a premium experience.",
              )}
            </p>
            <p>
              {t(
                "Geen standaardoplossingen, maar een aanpak op maat. Omdat we weten dat de klantervaring het verschil maakt — voor de gast én voor uw rendement.",
                "No off-the-shelf solutions, only a tailored approach. Because we know the guest experience is what makes the difference — for the guest and for your return.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* DATAROOM CTA */}
      <section>
        <div className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Dataroom</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold">
              {t(<>Dieper in<br /><span className="italic-accent">de cijfers?</span></>, <>Deeper into<br /><span className="italic-accent">the numbers?</span></>)}
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Volledig portfolio, financiële modellen en due diligence documentatie — beschikbaar via onze dataroom na een korte kennismaking.",
                "Full portfolio, financial models and due diligence documentation — available via our dataroom after a short introduction.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn-primary opacity-90 cursor-not-allowed">
                {t("Toegang aanvragen", "Request access")} <ArrowRight size={16} />
              </button>
              <Link to="/contact" className="btn-ghost">{t("Contact opnemen", "Get in touch")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
