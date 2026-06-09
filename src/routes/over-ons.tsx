import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Quote } from "lucide-react";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over BUGG Capital — Platform builders. Vastgoedfondsen." },
      { name: "description", content: "Investment holding actief in het grensgebied NL–BE. Eigen platform, eigen fondsen, founders investeren mee. Opgericht 2012." },
      { property: "og:title", content: "Over BUGG Capital — Platform builders. Vastgoedfondsen." },
      { property: "og:description", content: "Founders die zelf mee investeren. Sinds 2012 actief in platform building en vastgoedfondsen." },
    ],
  }),
  component: OverOns,
});

const team = [
  {
    initials: "JS", name: "Jasper Schrijver", role: "Managing Partner · Founder",
    bio: "Founder van BUGG Capital. Bouwt al sinds 2010 platforms — van social (Fangage, actief op Meta, Instagram, YouTube, Spotify) tot e-commerce (Colengo, SvB Group). De naam BUGG komt voort uit het ondernemersleven zelf: een bug in het systeem. Een onverwachte fout die, mits goed gespot, een ongekende kans wordt. Jasper zag die kans in de short-stay markt en bouwde Specialstays van nul tot volledig operating platform in het grensgebied NL–BE.",
    linkedin: "https://www.linkedin.com/in/jschrijver/",
  },
  {
    initials: "SB", name: "Stef van Boekel", role: "Commercieel Partner",
    bio: "15+ jaar ervaring op het hoogste niveau binnen de platform-industrie — aan zowel platform- als leverancierskant. Oprichter van Marketplace Distri (top-10 Europese Amazon-distributeur, actief in 20+ landen) en heeft honderden bedrijven ondersteund om succes te bereiken op de grote platformen. Bekend van BNR, Het Financieele Dagblad en MTSprout. Bij BUGG verantwoordelijk voor investor relations, dealflow en lokale partnerships.",
    linkedin: "https://www.linkedin.com/in/stefvanboekel/",
  },
  {
    initials: "MH", name: "Merel Habets", role: "Head of Operations",
    bio: "Verantwoordelijk voor de dagelijkse operaties van het Specialstays platform. Bridging people, processes en continue verbetering. Actief vanuit Limburg met een achtergrond in internationale omgevingen.",
    linkedin: "https://www.linkedin.com/in/merel-habets-sultsing-56a99a43/",
  },
];

const partners = [
  { name: "Van Casimir", role: "Legal & Tax · Vastgoedrecht BE/NL", quote: "Met BUGG denk je niet meer in deals, maar in structuur. Dat tilt elk dossier naar een hoger niveau.", who: "Mr. T. van Casimir" },
  { name: "Delta Notaris", role: "Notariaat · Belgisch Limburg", quote: "Een opdrachtgever die snel beslist én weet wat hij wil — dat scheelt iedereen in de keten tijd en energie.", who: "Notaris-partner" },
  { name: "Baat Accountants", role: "Accounting · Fondsadministratie", quote: "De fondsadministratie loopt strak. Rapportages helder, rendementen helder, communicatie helder.", who: "Relatiebeheerder" },
  { name: "Schildersbedrijf Heuvelland", role: "Lokale uitvoeringspartner", quote: "Wij krijgen ruimte om kwaliteit te leveren in plaats van de laagste prijs. Dat is in deze tijd zeldzaam.", who: "Eigenaar" },
  { name: "Specialstays", role: "Operating platform · Eigen ontwikkeling", quote: "Vastgoed plus platform-DNA. Dat is waarom dezelfde panden bij ons 70% bezetting halen.", who: "Operations" },
  { name: "Vlaamse Participatiemaatschappij", role: "Participatie & advies", quote: "Een grensoverschrijdende speler die de Vlaamse markt serieus neemt en lokaal investeert.", who: "Adviseur" },
];

function OverOns() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
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

      {/* VISIE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Visie</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              De kans in een<br /><span className="italic-accent">versnipperde markt.</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              De short-term rental markt is groot, maar nog grotendeels onontgonnen. 95% van de aanbieders bezit één woning, heeft geen kennis of expertise, en geen budget voor professionele tools. Dat is precies waar wij actief zijn.
            </p>
            <p>
              Het grensgebied NL–BE biedt structureel arbitrage. De Nederlandse portemonnee trekt richting België — premium betalingsbereidheid op een Belgische kostenbasis. De vastgoedprijzen in België blijven achter bij Nederland, terwijl de inhaalslag al begonnen is.
            </p>
            <p>
              Wij combineren platform-kennis met lokale uitvoering. Specialstays als operating systeem. BUGG Capital als investment holding. Twee fondsen actief, een derde in pre-launch.
            </p>
          </div>
        </div>
      </section>

      {/* MISSIE */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Missie</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Lokaal werken.<br /><span className="italic-accent">Samen bouwen.</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Wij werken met vaste lokale partners — accountants, notarissen, schildersbedrijven, installateurs. De lokale economie groeit mee. Niemand wordt op laagste prijs uitgeknepen; we kiezen op kwaliteit en lange relatie.
            </p>
            <p>
              Investeren in vastgoed maken we zichtbaar. Geen black box, geen onleesbare rapportages. Inzicht in de panden, de cijfers, de gasten, de plannen.
            </p>
            <p>
              En we investeren altijd zelf mee. Wat de co-owners doen, doen wij. Iedereen in dezelfde positie.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERS & QUOTES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Onze partners</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Lokaal netwerk.<br /><span className="italic-accent">Vaste gezichten.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              BUGG werkt met een vast netwerk van juridische, fiscale, operationele en uitvoerende partners in het grensgebied NL–BE. Hieronder een aantal van hun woorden over de samenwerking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {partners.map((p) => (
              <div key={p.name} className="bg-background p-8 flex flex-col">
                <Quote size={18} className="text-primary mb-4" />
                <p className="text-sm text-foreground leading-relaxed italic">"{p.quote}"</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <div className="text-xs uppercase tracking-widest text-primary mt-1">{p.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.who}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPOUNDEN */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Compounden</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Wij investeren<br /><span className="italic-accent">altijd zelf mee.</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Elke euro die uit de panden komt, gaat terug het systeem in. Nieuwe panden, betere techniek, slimmere distributie. Zo compoundt het rendement — niet alleen op de balans, ook in de exploitatie.
            </p>
            <p>
              Founders investeren altijd zelf in elk fonds. Niet symbolisch — substantieel. Onze belangen zijn structureel gelijk aan die van onze co-owners. Altijd.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">Het team</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Twee werelden.<br /><span className="italic-accent">Eén onderneming.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Jasper bouwde de platforms — die kant van het spel kent hij. Stef heeft 15+ jaar ervaring aan de leverancierskant van platforms en heeft honderden bedrijven succesvol op die platforms gebracht. Samen herkenden ze de kans in short-stay: de platforms zijn er, maar de kennis ontbreekt op de plek waar het geld verdiend wordt.
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

          <div className="mt-10 panel p-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="text-xs uppercase tracking-widest text-primary">Bekend van</span>
            <span>BNR Nieuwsradio</span>
            <span>Het Financieele Dagblad</span>
            <span>MT/Sprout</span>
          </div>
        </div>
      </section>

      {/* TIJDLIJN */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="eyebrow">De route</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Van 2012<br /><span className="italic-accent">tot nu.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Elk bedrijf was een platform. Elk platform leerde ons iets nieuws. Specialstays is het eindpunt van die route — en het operating systeem achter de fondsen.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { p: "2012 – 2014", n: "SvB Group Holding", b: "Innovatieve e-commerce holding gericht op technologie en klantfocus. Distributie via de grote retail- en e-tail platformen.", s: "Exit 2014" },
              { p: "2011 – 2019", n: "Colengo", b: "Specialisatie in maatwerkoplossingen voor e-tail en retail. Technologie en processen voor maximale distributie.", s: "Exit 2019" },
              { p: "2016 – 2020", n: "Fangage by Triller", b: "Social platform waarmee artiesten hun fans bereikten en activeerden — actief op alle grote creator-platformen.", s: "Exit 2020" },
              { p: "2019 – Actief", n: "Specialstays", b: "Operating platform voor short-stay verhuur — pricing, gasten, kwaliteit, distributie op 100+ kanalen. De motor achter Lacuna en Lama.", s: "Actief" },
              { p: "2024 – Actief", n: "Lacuna & Lama Funds", b: "Eerste externe fondsen onder BUGG Capital. Co-ownership in short-stay vastgoed in het grensgebied NL–BE.", s: "Actief" },
            ].map((v) => (
              <div key={v.n} className="panel p-8 grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{v.p}</div>
                  <div className="mt-2 text-xs text-primary uppercase tracking-widest">{v.s}</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-semibold">{v.n}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
                </div>
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
