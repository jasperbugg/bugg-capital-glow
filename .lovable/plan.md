Drie geaccepteerde feedbackpunten van Stef + één visueel toevoegblok. Hero blijft ongewijzigd ("Wij bouwen platforms. Én bouwen wij aan vermogen.") — Stef's hero-wijziging is bewust niet doorgevoerd. Alle nieuwe strings via `t("NL","EN")`.

### 1. `/` — Track Record verwijderen

`src/routes/index.tsx` regels 127–166: hele `{/* TIMELINE / TRACK RECORD */}` sectie verwijderen, inclusief desktop- en mobiel-variant en de bijbehorende `timeline`-data-array bovenin het bestand (mits niet elders gebruikt). Sectie eronder (FLYWHEEL → wordt FASES, zie punt 2) sluit dan direct aan op de hero-/intro-blokken.

De `og:title` / `<title>` "BUGG Capital — From Code to Capital" blijft staan (claim is breder dan alleen de verwijderde sectie). Wel checken of er nog tekstuele referenties zijn naar "From Code to Capital" elders in `index.tsx`; behouden in metadata, niet als zichtbare H2.

### 2. `/` — Vliegwiel vervangen door 3-fase structuur

`src/routes/index.tsx` regels 168–230: hele FLYWHEEL-sectie (intro + desktop-cirkel + mobiele stacked-versie) vervangen door één nieuwe sectie met dezelfde sectie-styling (`border-b border-border`, `mx-auto max-w-7xl px-6 lg:px-10 py-24`).

Structuur:
- Eyebrow: `{t("Hoe het werkt", "How it works")}`
- H2: `{t("Van vastgoed tot rendement.", "From real estate to returns.")}`
- Korte intro-zin: `{t("Drie fases. Eén systeem. Built to compound.", "Three phases. One system. Built to compound.")}`
- Drie fase-blokken in `grid md:grid-cols-3 gap-px bg-border`, elk blok `bg-background p-8`:
  - **Fase 1 — Vastgoed · Waardecreatie** met items 1.1 Marktanalyse & prognoses · 1.2 Vastgoedontwikkeling · 1.3 Interieurontwerp.
  - **Fase 2 — Specialstays · Rendement** met items 2.1 Distributie via 100+ kanalen · 2.2 Professionele content · 2.3 Prijsoptimalisatie.
  - **Fase 3 — Groei · Optimalisatie** met item 3.1 Analyseren & verbeteren.

Per fase-blok: kleine genummerde "FASE 1/2/3" eyebrow in primary, daaronder de fase-titel (vastgoed/specialstays/groei) en de tagline (waardecreatie/rendement/optimalisatie) in `italic-accent`. Daaronder een verticale lijst van sub-items met genummerde label (1.1, 1.2 …) in primary mono-stijl, vetgedrukte titel, en één muted-foreground beschrijvingszin.

Geen circulair diagram, geen flywheel-array meer. Bestaande `flywheel` constante in het bestand verwijderen mits ongebruikt elders.

### 3. `/over-ons` — Bio Stef van Boekel updaten

`src/routes/over-ons.tsx`, `team` array, entry "Stef van Boekel" → `bio` vervangen door:

> "Met vijftien jaar ervaring op directieniveau in de platformindustrie heeft hij zich ontwikkeld tot een erkend expert, met media-optredens bij BNR, het Financieele Dagblad en MT/Sprout. Zijn vastgoedervaring strekt zich uit over Nederland, België en Italië. Binnen BUGG fungeert hij als centraal aanspreekpunt voor investeerders en vastgoedeigenaren, met ruime fundraising-ervaring, expertise in dealflow en diepgaande ervaring met aandeelhoudersverantwoordelijkheid en strategische belangenafweging."

Naam, rol-label ("Commercieel Partner") en LinkedIn-URL blijven gelijk.

### 4. `/contact` — Instagram-mockup toevoegen

Nieuwe sectie onderaan `src/routes/contact.tsx`, na de bestaande events/contact-blokken en vóór de footer-/closing-sectie indien aanwezig. Sectiestijl consistent: `border-b border-border` of `section-blue` afhankelijk van wat eronder staat — alterneren met de huidige laatste sectie.

Layout (volledig statisch, geen IG-script):
- Eyebrow: "Instagram" · H2: `{t("Volg ons op Instagram.", "Follow us on Instagram.")}`
- Profielheader-rij (grid md:grid-cols-[auto_1fr] gap-6):
  - Cirkel-avatar (initialen "B" in primary/15 bg, identiek aan team-avatars op /over-ons) of klein BUGG-logo.
  - Rechts: handle `bugg.capital`, drie inline stats ("20 berichten · 276 volgers · 578 volgend"), bio-blok:
    > "Platform-driven real asset investing  
    > 📍 Lanaken — Maastricht (BE/NL)  
    > BUILT.TO.COMPOUND.  
    > 🤝 By Invitation"
  - "Volg op Instagram" ghost-button → `https://instagram.com/bugg.capital` (target _blank, rel noreferrer).
- Onder de header: 6-tegel grid (`grid grid-cols-3 md:grid-cols-6 gap-1`) van vierkante tegels. Voor nu placeholder-tegels in `bg-muted` met `aspect-square` en een subtiel `bg-primary/5` overlay; geen externe images. Tegels zijn niet-clickable (statische mockup) — eventueel optioneel allemaal als één link naar het IG-profiel verpakken.

Geen Instagram SDK, geen oEmbed-call, geen netwerkverzoek. Volledig client-side renderbaar, faalt nooit.

### Technische punten

- Geen nieuwe dependencies, geen nieuwe componenten, geen routewijzigingen, geen i18n-bestanden buiten `t()` inline.
- Hero in `src/routes/index.tsx` (regels 55–58) blijft expliciet ongewijzigd — Stef's voorgestelde "Wij bouwen vermogen" wordt niet doorgevoerd op verzoek van de gebruiker.
- Na verwijdering van `timeline` / `flywheel` data-constanten: TypeScript build moet groen blijven (geen verwezen imports laten staan).
- Geen wijzigingen op `/fondsen/*`, `/cases`, `/investments`, `/casussen`, of `/over-ons` buiten de Stef-bio.
