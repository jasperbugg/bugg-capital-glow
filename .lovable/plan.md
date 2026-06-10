# Content & structuur update — BUGG site

Scope: alleen content en sectie-opbouw. Geen design-wijzigingen, geen navigatie-wijzigingen, geen automations/integraties. Alle CTA's die normaal naar een tool zouden gaan worden placeholder-buttons (`<button>` zonder handler, of `<a href="#">`). Volledig bilingual (NL/EN) via bestaande `useLanguage()` helper. Tagline **"Built to compound"** wordt overal consistent ingezet (hoofdletter B, rest lowercase).

---

## 1. Tagline-anker

Doorvoeren als slotzin/eyebrow op:
- Home hero (eyebrow blijft, slotregel CTA-blok)
- Lacuna hero + footer-sectie
- Lama hero + nieuwe afsluitsectie (titel = "BUILT TO COMPOUND")
- Fondsen-cards op home (zie §3)
- Cases-pagina (eyebrow op closing)

---

## 2. Homepagina — vliegwiel-sectie (nieuw, na track record)

Nieuwe sectie in `src/routes/index.tsx`, geplaatst na het track-record-blok, vóór de closing CTA.

- Eyebrow: "Het vliegwiel"
- Titel: "Het systeem achter het rendement."
- Ondertitel: "Vastgoed is het product. Specialstays is de motor. Het systeem compoundt."
- Visualisatie: 6 stappen in een cirkelvormige flow (desktop: ring met genummerde nodes + pijlen; mobile: verticale stapsgewijze lijst met connector-lijnen). Stappen:
  1. Data & locatieselectie
  2. Aankoop op juiste prijs
  3. Renovatie & inrichting
  4. Specialstays-activatie
  5. Boven-markt exploitatie
  6. Rendement & herinvestering → (terug naar 1)
- Implementatie: pure CSS/SVG (geen extra libraries). Nodes als genummerde cirkels met label eronder; verbindingslijn loopt rond.

---

## 3. Homepagina — drie fondsen-cards aanpassen

In `src/routes/index.tsx` de bestaande fondsen-cards vervangen met:

- **Lacuna**: "Leasehold — gericht op hoge bezetting, hoge nachtprijs en stabiele cashflow. Built to compound."
- **Lama**: "Freehold — vastgoed als onderpand, boven-markt-rendement via STR-exploitatie. Een fonds dat herinvesteert. Built to compound."
- **Residentieel (Coming Soon)**: "Verhuur van moderne woningen aan expats en professionals direct op de grens NL–BE. Meer details volgen." + placeholder-button "Meer info volgt →" (geen link, geen handler, `disabled`-stijl behouden zoals nu).

Geen email-veld, geen externe links.

---

## 4. /fondsen/lacuna

In `src/routes/fondsen.lacuna.tsx`:

### a. FAQ-sectie (nieuw, accordion via bestaande `@/components/ui/accordion`)
Vier vragen:
1. Wat betekent leasehold in de context van Lacuna?
2. Wat is de lockup-periode en hoe werkt uittreding?
3. Welk rendement wordt nagestreefd en hoe wordt het uitgekeerd?
4. Wat is de minimale deelname en voor wie is dit fonds bedoeld?

### b. Case studies — uniforme structuur
Vijf items, elk met:
- Drie image slots naast elkaar (exterior / voor / na) → placeholder-blokken (`<div className="aspect-[4/3] bg-[var(--surface)] border border-border flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground">[Exterior]</div>` etc.) wanneer er geen foto is.
- Feitentabel: Locatie & type · Jaar aankoop · Waardestijging · Rendement per jaar
- Korte inleidende tekst
- Voorbeelden 1–4: concrete cases (Zonhoven 4p-bungalow, Houthalen, Hechtel-Eksel, Maasmechelen — placeholder cijfers indien onbekend).
- **Voorbeeld 5**: geen foto's, alleen tekst "Volledig portfolio beschikbaar via de dataroom — toegang op aanvraag." + placeholder-button "Dataroom aanvragen →".

### c. Afsluiting "VAN AANKOOP TOT OPLEVERING"
Nieuwe sectie net vóór de bestaande Dataroom CTA met de opgegeven tekst.

---

## 5. /fondsen/lama

In `src/routes/fondsen.lama.tsx`:

### a. FAQ (4 vragen, freehold/groepsverblijven/compounding-georiënteerd)
1. Hoe verschilt freehold van leasehold binnen BUGG?
2. Waarom groepsverblijven en niet reguliere short-stay?
3. Hoe werkt het compounding-model in Lama?
4. Wat is de lockup en deelnamedrempel?

### b. "In ontwikkeling" — bestaande cases hergebruiken
The Windmill + Villa Grimbia → image slots als placeholder-blokken, met label "Locatie in ontwikkeling — meer info volgt."

### c. Pipeline-sectie
Tekst: "We hebben X objecten in de pijplijn. Interesse? Neem contact op voor de meest actuele stand van zaken." + button "Contact opnemen →" (link naar `/contact` via `<Link to="/contact">`).

### d. Afsluitsectie "BUILT TO COMPOUND"
Volledige opgegeven tekst, vervangt of staat boven de huidige Dataroom CTA.

---

## 6. /over-ons — twee nieuwe secties

Toevoegen in `src/routes/over-ons.tsx`, na de team-sectie, vóór "Structuur & partners":

- **Onze visie** — titel "Wij zien een markt die anderen nog niet begrijpen." + opgegeven tekst.
- **Onze missie** — titel "Lokaal verankerd. Professioneel gebouwd." + opgegeven tekst.

Beide als tweekoloms layout in lijn met bestaande secties op die pagina.

---

## 7. /cases — structuur uniformiseren

In `src/routes/cases.tsx` elke casus omzetten naar uniform blok:
- Drie image slots naast elkaar (exterior / voor / na) → placeholder-blokken waar foto's ontbreken.
- Feitentabel: Locatie & type · Jaar aankoop · Waardestijging · Rendement per jaar
- Bestaande inleidende tekst behouden
- Placeholder-button "Lees meer →" (geen handler/link).

Onderaan nieuwe sectie:
- Titel: "BEZOEK EEN LOCATIE"
- Tekst: "Wil je de Windmolen een keer ervaren, of een rondje op het park om de bungalows te bekijken — voor én na renovatie? Dat kan. Eerste maandag van de maand of op afspraak."
- Placeholder-button "Plan een bezoek →".

---

## 8. /investments
Niet aangeraakt.

---

## Technische details

- Alleen content/JSX-aanpassingen in: `src/routes/index.tsx`, `src/routes/fondsen.lacuna.tsx`, `src/routes/fondsen.lama.tsx`, `src/routes/over-ons.tsx`, `src/routes/cases.tsx`.
- FAQ gebruikt bestaande `@/components/ui/accordion` (Radix). Geen nieuwe dependencies.
- Alle nieuwe strings via `t("NL", "EN")` uit `useLanguage()` (consistent met de rest van de codebase).
- Placeholder-buttons: `<button type="button" className="btn-primary opacity-80 cursor-not-allowed">…</button>` of een variant die visueel "placeholder" suggereert zonder design te wijzigen. Geen `data-tf-popup` attributen.
- Image placeholders: semantisch `<div role="img" aria-label="…">` met label-text; geen externe URLs.
- Vliegwiel: SVG-cirkel + absoluut gepositioneerde nodes (desktop) en flex-kolom (mobile) — vanille Tailwind, geen lib.
- Geen wijzigingen aan `styles.css`, routes, header/footer, navigatie of design tokens.
