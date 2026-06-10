# Track record terugzetten op `/`

Stef's verwijdering wordt teruggedraaid. De track record komt terug als een **compacte 5-stappen timeline** (kortere variant — niet de oorspronkelijke kaartmuur). Behoudt het volledige "From code to capital"-signaal zonder een halve schermhoogte te claimen.

## Wat er gebeurt

Eén bestand: `src/routes/index.tsx`.

### Nieuwe `trackRecord` data-array (bovenin component)
Vijf stappen, jaartal + naam + tagline van 4–6 woorden:

| Jaar | Naam | Tagline (NL / EN) |
|------|------|-------------------|
| 2012 | SvB Group | E-commerce platforms / E-commerce platforms |
| 2016 | Colengo | SaaS voor MKB / SaaS for SMBs |
| 2018 | Fangage | Creator-platform / Creator platform |
| 2019 | Specialstays | STR operating platform / STR operating platform |
| 2024 | Lacuna & Lama | Vastgoedfondsen / Real estate funds |

### Nieuwe sectie, ingevoegd tussen "THE STORY" en "FASES"

Stijl: `border-b border-border`, `mx-auto max-w-7xl px-6 lg:px-10 py-24`.

Structuur:
- **Header-rij** (`grid md:grid-cols-2 gap-12 mb-16`):
  - Links: eyebrow `{t("Track record","Track record")}` + H2 `{t("From code","From code")}` / `<span class="italic-accent">to capital.</span>` (zelfde typografische stijl als andere H2's op de page).
  - Rechts: korte intro-zin: *"Sinds 2012 bouwen wij platforms. Vandaag bouwen wij vermogen."* (NL) / *"Building platforms since 2012. Building wealth today."* (EN).
- **Compacte timeline-rij** (`grid grid-cols-2 md:grid-cols-5 gap-px bg-border`):
  - Per stap één paneel `bg-background p-6`:
    - Jaartal in `text-xs font-mono text-primary tracking-widest`.
    - Naam in `mt-2 text-lg font-semibold`.
    - Tagline in `mt-1 text-sm text-muted-foreground` (4–6 woorden, één regel).
  - Geen body-paragraaf, geen iconen, geen knoppen. Mobiel valt netjes naar 2 koloms.

### Geen wijzigingen elders
- Hero, KPI-bar, "The story", "Fases", "Specialstays — de motor", "Three funds", "Closing CTA" blijven exact zoals ze nu zijn.
- Geen edits in andere bestanden.
- Geen nieuwe dependencies, geen nieuwe componenten, geen routewijzigingen.
- `og:title` / `og:description` blijven zoals ze zijn ("Platform builders. Vastgoedfondsen.").

## Waarom deze variant

Stef's punt was geldig (de oude 5-koloms kaartmuur was zwaar), maar jouw instinct ook (track record = sterk vertrouwenssignaal). Compacte timeline geeft 90% van het signaal voor ~40% van de verticale ruimte, en past visueel naast het 3-fase blok eronder zonder dat de homepage uit twee zware grids gaat bestaan.
