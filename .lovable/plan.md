Pitch-content verwerken in `/fondsen/lama` + één homepage-toevoeging. Bestaande cijfers op site (14%+, €25M AUM, etc.) blijven leidend — pitch-getallen die daarmee conflicteren worden niet overgenomen. Geen designwijzigingen. NL + EN via `useLanguage()`.

### 1. `/fondsen/lama` — vijf nieuwe content-secties

**a. Drie lagen arbitrage** (nieuwe sectie, geplaatst direct ná de SPECS-sectie)
- Eyebrow: "De edge" / "The edge"
- Heading: "Drie lagen arbitrage." / "Three layers of arbitrage."
- Drie panel-blokken naast elkaar:
  - **Geografie** — "Belgische aankoopprijzen. Nederlandse betalingsbereidheid. De grens is voor de gast irrelevant."
  - **Duratie** — "De markt prijst deze panden als woning. Hun werkelijke waarde ligt in short-stay exploitatie."
  - **Digitalisering** — "Specialstays' operating systeem — dynamic pricing, interieurstandaard, reviews — tilt NOI en NAV."

**b. Het 4-step machine** (nieuwe sectie, geplaatst ná "In ontwikkeling")
- Eyebrow: "Hoe het werkt" / "How it works"
- Heading: "Don't just buy the house. Buy the system."
- Vier genummerde stappen in 4-koloms grid:
  1. **Buy** — Acquireren van large-format vastgoed op Belgische kostenbasis.
  2. **Improve** — Alleen upgraden wat NOI en gastbeleving verhoogt.
  3. **Execute** — Repeatable operating system: pricing, bezetting, reviews, kosten.
  4. **Compound** — Cashflow herinvesteren om de portefeuille te schalen.

**c. Unit economics tabel** (nieuwe sectie, na de 4-step machine)
- Eyebrow: "Unit economics"
- Heading: "Robuuste economics op conservatieve baselines." / "Robust economics at conservative baselines."
- 5-koloms statistiekblok (zelfde stijl als KPI-blok elders):
  - Capaciteit: 18 gasten
  - Tarief: €40-60 p.p.
  - Target ADR: €700-1.000 / nacht
  - Bezetting: 55-60%
  - Gestabiliseerde NOI: ~€60K / jaar
- Onderschrift: "Conservatief gemodelleerd op bewezen bezettingsniveaus, niet op blue-sky scenario's."

**d. Re-rating math** (nieuwe sectie, na unit economics)
- Eyebrow: "Re-rating"
- Heading: "Waarom vroeg kapitaal wint." / "Why early capital wins."
- Tweekoloms layout:
  - Links: investeringsfase (cost + reno = risk capital) vs gestabiliseerde fase (gewaardeerd op yield ~5,5% cap rate).
  - Rechts: rekensommetje als grote callout: **~€60K NOI ÷ 5,5% cap rate = ~€1M+ waardering**. Daaronder: "Wie nu instapt, vangt de eerste re-rating zodra het asset overgaat van renovatie-risico naar gestabiliseerde NOI."

**e. Fund-structure & liquidity-mismatch** (nieuwe sectie, vóór de bestaande BUILT TO COMPOUND closing)
- Eyebrow: "Fondsstructuur"
- Heading: "We verkopen units in het fonds. Niet de stenen."
- Tweekoloms:
  - Links — **Het probleem**: "Wie het fysieke huis koopt, koopt het als woning — niet als operating asset. De buyer pool kan onze yields niet repliceren en betaalt niet voor de gearbitreerde waarde."
  - Rechts — **De oplossing**: "Een fondsstructuur vangt die operator-premie. Investeerders kopen participaties in het systeem, met een duidelijk pad naar liquiditeit via unit sales — niet via verkoop van individuele panden."

### 2. Homepage — tagline-toevoeging

In `src/routes/index.tsx`, in de bestaande Lama-card (THREE FUNDS sectie), één nieuwe regel toevoegen onder de bestaande Lama-beschrijving:

> "Don't just buy the house. Buy the system."

Italic, in primary color, als tagline-regel. Geen verdere structuurwijzigingen op home.

### Technische details

- Alle nieuwe content in `src/routes/fondsen.lama.tsx` en `src/routes/index.tsx`.
- Alle strings via `t("NL", "EN")` uit `useLanguage()`.
- Geen nieuwe componenten, geen nieuwe dependencies, geen CSS-wijzigingen.
- Sectie-styling consistent met bestaande Lama-pagina (`section-blue` / wit afwisselend, `panel`, `eyebrow`, `border-b border-border`).
- Geen Calendly, geen forms, geen externe links toegevoegd.
- Bestaande "14%+ target" en "€25M target AUM" blijven ongewijzigd in de SPECS-tabel.