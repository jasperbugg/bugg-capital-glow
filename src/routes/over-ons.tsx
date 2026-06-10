import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin } from "lucide-react";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over BUGG Capital — Platform builders. Vastgoedfondsen." },
      { name: "description", content: "Investment holding actief in het grensgebied NL–BE. Eigen platform, eigen fondsen, eigen capital erin. Opgericht 2012." },
      { property: "og:title", content: "Over BUGG Capital — Platform builders. Vastgoedfondsen." },
      { property: "og:description", content: "Founders die zelf mee investeren. Sinds 2012 actief in platform building en vastgoedfondsen." },
    ],
  }),
  component: OverOns,
});

const team = [
  { initials: "JS", name: "Jasper Schrijver", role: "Managing Partner · Founder", bio: "Founder van BUGG Capital. Achtergrond in venture building en platform-industrie — van social platforms tot e-commerce. Bouwde Specialstays van nul tot volledig operating platform in het grensgebied NL–BE. Beheert Lacuna (2024) en Lama (2026).", linkedin: "https://www.linkedin.com/in/jschrijver/" },
  { initials: "SB", name: "Stef van Boekel", role: "Commercieel Partner", bio: "Oprichter van Marketplace Distri — top-10 Europese Amazon-distributeur actief in 20+ landen. Sterke commerciële achtergrond en netwerk in de regio. Bij BUGG verantwoordelijk voor investor relations, dealflow en lokale partnerships.", linkedin: "https://www.linkedin.com/in/stefvanboekel/" },
  { initials: "MH", name: "Merel Habets", role: "Head of Operations", bio: "Verantwoordelijk voor de dagelijkse operaties van het Specialstays platform. Bridging people, processes en continue verbetering. Actief vanuit Limburg met een achtergrond in internationale omgevingen.", linkedin: "https://www.linkedin.com/in/merel-habets-sultsing-56a99a43/" },
];

const partners = [
  { name: "Van Casimir", role: "Legal & Tax · Vastgoedrecht BE/NL", body: "Grensoverschrijdende structurering, fondsrecht en fiscaliteit NL–BE." },
  { name: "Delta Notaris", role: "Notariaat · Belgisch Limburg", body: "Vaste notariële partner voor acquisities in het grensgebied." },
  { name: "Baat", role: "Accounting · Fondsadministratie", body: "Fondsadministratie, rapportage en periodieke investor updates." },
  { name: "BNP Paribas", role: "Banking · Structurering & financiering", body: "Bankpartner voor financieringsstructuren en hypotheken." },
  { name: "Vlaamse Participatiemaatschappij", role: "Participatie & advies", body: "Betrokken als adviseur bij fondsstructurering in Belgisch Limburg." },
  { name: "Specialstays", role: "Operating platform · Eigen ontwikkeling", body: "Het operating systeem dat BUGG zelf bouwde. 70% bezetting, 8.8 review." },
];

const edge = [
  ["Platform-DNA", "Wij begrijpen hoe de grote OTA-platformen werken — en hoe je ze verslaat. Systemen, geen spreadsheets."],
  ["Cross-border arbitrage", "Inkopen in België. Verhuren aan Nederland. Die prijsverschillen zijn structureel en reproduceerbaar."],
  ["Aligned incentives", "Wij beleggen altijd zelf mee. Iedereen in dezelfde positie — founders en investeerders gelijk."],
  ["Bewezen track record", "Actief since 2012. Van Groupon tot Airbnb — wij hebben de hele cyclus doorgemaakt."],
];

function OverOns() {
  return (
    <>
      <section className="section-blue relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Over BUGG</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            Platform builders.<br />
            Vastgoedfondsen.<br />
            <span className="italic-accent">Samen investeren.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Investment holding actief in het grensgebied NL–BE. Eigen platform, eigen fondsen, eigen capital erin. Opgericht 2012.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Het verhaal</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Platform bouwen.<br /><span className="italic-accent">Samen investeren.</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>BUGG heeft een lange historie van venture building in de platform-industrie. Van social platforms zoals Fangage (actief op Meta, Instagram, YouTube, Spotify) tot e-commerce platforms met Amazon- en Groupon-DNA via Colengo en SvB Group.</p>
            <p>Die platform-kennis is nu gericht op de OTA-markt. Wij begrijpen hoe Airbnb, Booking.com, VRBO en Expedia werken — en hoe je het spel daar wint. Het product is vastgoed. Het operating systeem is Specialstays.</p>
            <p>Externe fondsen beheren we sinds 2024. Lacuna als eerste, Lama in 2026. Focus: grensgebied NL–BE, premium short-stay, platform-gedreven rendement.</p>
            <blockquote className="border-l-2 border-primary pl-6 text-foreground italic mt-8">
              "Wij begrijpen platforms. Van Amazon en Groupon tot social media — we hebben altijd het spel op de grote platformen gespeeld. Nu doen we dat op Airbnb en Booking.com, met vastgoed als product."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            ["Opgericht", "2012", "Nederland"],
            ["Actief in", "NL · BE", "Cross-border"],
            ["Platform", "Specialstays", "70% bezetting · 8.8/10"],
            ["Investment mandate", "€50M", "€7M gecommitteerd"],
          ].map(([label, big, sub]) => (
            <div key={label} className="bg-background p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
              <div className="mt-3 text-2xl font-bold">{big}</div>
              <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Het team</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Founders die<br /><span className="italic-accent">zelf mee investeren.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Het team investeert zelf mee in elk fonds. Onze belangen zijn structureel gelijk aan die van onze investeerders — altijd.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="panel p-8">
                <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold">
                  {m.initials}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{m.name}</h3>
                <div className="text-xs uppercase tracking-widest text-primary mt-1">{m.role}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                  <Linkedin size={14} /> LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Structuur & partners</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Gebouwd om<br /><span className="italic-accent">te schalen.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              BUGG werkt met een vast netwerk van juridische, fiscale en operationele partners in het grensgebied NL–BE. Elke deal wordt ondersteund door gespecialiseerde adviseurs — van acquisitie tot notaris tot asset management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {partners.map((p) => (
              <div key={p.name} className="bg-background p-8">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="text-xs uppercase tracking-widest text-primary mt-1">{p.role}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="eyebrow mb-12">Onze edge</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {edge.map(([t, b]) => (
              <div key={t} className="bg-background p-8">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Kennismaken?</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Kom langs voor een bezoek aan een van onze panden, of plan een gesprek.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary">Contact opnemen <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
