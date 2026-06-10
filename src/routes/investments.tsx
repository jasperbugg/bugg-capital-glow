import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Investments — Van platforms naar vastgoed | BUGG Capital" },
      { name: "description", content: "Van Groupon naar Amazon naar Airbnb. BUGG's deelnemingen en platform track record sinds 2012." },
      { property: "og:title", content: "Investments — Van platforms naar vastgoed | BUGG Capital" },
      { property: "og:description", content: "Specialstays, Fangage, Colengo, SvB Group — de route van platform builder naar vastgoedfonds." },
    ],
  }),
  component: Investments,
});

const platforms = ["Groupon", "Amazon", "Bol.com", "Meta", "Instagram", "YouTube", "Spotify", "Airbnb", "Booking.com", "VRBO", "Expedia"];

const ventures = [
  {
    period: "2019 – Actief",
    name: "Specialstays",
    body: "Specialstays beheert short-stay verhuur — van pricing en beschikbaarheid tot gastbeleving en distributie op alle grote platformen. Het operating systeem achter Lacuna en Lama.",
    tags: ["Airbnb", "Booking.com", "VRBO", "Expedia"],
    status: "Actief",
  },
  {
    period: "2016 – 2020",
    name: "Fangage by Triller",
    body: "Social platform waarmee artiesten hun fans konden bereiken en activeren. Actief op de grote creator-platformen.",
    tags: ["Meta", "Instagram", "YouTube", "Spotify"],
    status: "Exit 2020",
  },
  {
    period: "2011 – 2019",
    name: "Colengo",
    body: "Colengo specialiseert zich in maatwerkoplossingen voor e-tail en retail. Technologie en processen voor maximale distributie.",
    tags: ["Amazon", "Bol.com", "Groupon"],
    status: "Exit 2019",
  },
  {
    period: "2012 – 2014",
    name: "SvB Group Holding",
    body: "Innovatieve e-commerce holding gericht op technologie en klantfocus. Distributie via de grote retail- en e-tail platformen.",
    tags: ["Groupon", "Retail"],
    status: "Exit 2014",
  },
];

function Investments() {
  return (
    <>
      <section className="section-blue relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Investments</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Van platforms<br /><span className="italic-accent">naar vastgoed.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            BUGG is een logisch verhaal. Van Groupon naar Amazon naar Airbnb — steeds het spel op de grote platformen gespeeld. De fondsen zijn de volgende stap.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Platform track record</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Van code<br /><span className="italic-accent">naar capital.</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>BUGG heeft een lange historie van bouwen op platforms. Altijd hetzelfde idee: begrijp hoe een platform werkt, speel het beter dan de rest. Van Groupon en Bol.com tot Meta en Amazon — en nu Airbnb en Booking.com.</p>
              <p>Dat is de edge van BUGG. Wij hebben beide kanten gezien — de technologie én de commercie. Daardoor zien wij kansen die anderen missen, en kunnen wij rendementen halen die de markt niet begrijpt.</p>
            </div>
          </div>

          <div className="panel p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Platformen waarop wij actief waren</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p} className="inline-flex items-center px-4 py-2 border border-border text-sm hover:border-primary transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Deelnemingen</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                De route van<br /><span className="italic-accent">2012 tot nu.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Elk bedrijf was een platform. Elk platform leerde ons iets nieuws. Specialstays is het eindpunt van die route — en het operating systeem achter de fondsen.
            </p>
          </div>

          <div className="space-y-6">
            {ventures.map((v) => (
              <div key={v.name} className="panel p-8 grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{v.period}</div>
                  <div className="mt-2 text-xs text-primary uppercase tracking-widest">{v.status}</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-semibold">{v.name}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {v.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-blue border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Built to compound</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Die route leidt<br /><span className="italic-accent">naar de fondsen.</span>
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Alles wat wij leerden over platformen, data en distributie zetten wij nu in voor onze investeerders. Lacuna en Lama zijn het resultaat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/fondsen" className="btn-primary">
                Bekijk de fondsen <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
