## Doel
De hele site omzetten naar het officiële BUGG-palet: wit (#ffffff) als basis, BUGG-blauw (#145099) als accent en sectiekleur. Geen donker-navy meer. Alleen styling — geen wijzigingen aan routes, navigatie, of content.

## Scope
Alleen styling-bestanden en stijl-classes binnen bestaande components/routes. Geen pagina's, routes of teksten worden aangepast.

---

## 1. `src/styles.css` — kern van de herstijl

**Tokens herdefiniëren (light-mode als default):**
- `--background: #ffffff`
- `--foreground: #145099` (blauwe tekst op wit)
- `--surface: #f5f7fa` (licht grijs voor subtiele secties)
- `--surface-2: #ffffff`
- `--primary: #145099`
- `--primary-foreground: #ffffff`
- `--muted: #f5f7fa`
- `--muted-foreground: #145099` met lagere opacity-variant via aparte token (bv. `--muted-foreground: rgba(20,80,153,0.7)`)
- `--border: rgba(20,80,153,0.1)`
- `--card: #ffffff`, `--card-foreground: #145099`
- `--ring: #145099`

**Sectie-helpers (nieuwe utility classes):**
- `.section-blue` → `background:#145099; color:#ffffff` (voor hero, fondsen, CTA-blokken)
- `.section-white` → `background:#ffffff; color:#145099`
- `.section-light` → `background:#f5f7fa; color:#145099`

**Buttons herschrijven (geen faded/semi-transparante varianten):**
- `.btn-primary` (default, op wit): `background:#145099; color:#ffffff; border:1px solid #145099`. Hover: iets donkerder blauw, geen opacity.
- `.btn-outline` (op wit): transparant met `border:1px solid #145099` en tekst `#145099`.
- `.btn-on-blue-primary` (op blauw): `background:#ffffff; color:#145099`. Hover: lichte tint, niet transparant.
- `.btn-on-blue-secondary` (op blauw): transparant met `border:1px solid #ffffff` en witte tekst.
- Bestaande `.btn-ghost` verwijderen of mappen naar de juiste outline-variant.

**Hero opschonen:**
- `.bugg-grid` en `.bugg-grid-fade` leegmaken (of declaraties verwijderen) zodat het decoratieve grid niet meer rendert.

**Typografie:**
- Google Fonts `Poppins` (400, 400 italic, 700, 800) toevoegen via `<link>` in `src/routes/__root.tsx` head — Tailwind v4 doet geen URL-import.
- `--font-sans` en `--font-display` op `"Poppins", ui-sans-serif, system-ui, sans-serif` houden (al zo).
- Globale h1/h2 regel: `font-weight:800; letter-spacing:-0.02em` (al gedeeltelijk aanwezig — versterken naar 800).
- `.italic-accent` aanpassen: italic + `font-weight:400` met iets lagere opacity blauw of wit (afhankelijk van sectie via `currentColor`/inherit).

**Eyebrow:**
- Lijntje en tekst gebruiken `currentColor` zodat het werkt op zowel blauwe als witte secties.

**Globale opschoning:**
- Eventuele `shadow-*`, gradient-tokens en glow-effects verwijderen.

---

## 2. Component- en routestijl-aanpassingen (alleen classes, geen content)

Bestanden waarin alleen `className`-waarden / sectie-wrappers worden bijgewerkt, geen markup-structuur of tekst:

- `src/components/SiteHeader.tsx`
  - Nav-achtergrond `#ffffff`, tekst `#145099`, border-bottom `rgba(20,80,153,0.1)`, CTA-knop = `.btn-primary` (blauw/wit).
- `src/components/SiteFooter.tsx`
  - Wit of `#f5f7fa` achtergrond, blauwe tekst, border-top in dezelfde subtiele blauwe tint.
- `src/routes/__root.tsx`
  - Body-wrapper op wit; Poppins `<link>` toevoegen in head.
- `src/routes/index.tsx`
  - Hero-sectie krijgt `.section-blue` + verwijder `bugg-grid` wrappers.
  - KPI-bar, "The Story", Timeline, Specialstays → `.section-white` of `.section-light` afwisselend.
  - "Three Funds"-sectie → `.section-blue` (witte tekst, panels worden witte cards met blauwe tekst + duidelijke border).
  - Closing CTA → `.section-blue`.
  - Knoppen mappen naar correcte variant op basis van ondergrond.
- `src/routes/fondsen.index.tsx`, `fondsen.lacuna.tsx`, `fondsen.lama.tsx`, `fondsen.route.tsx`
  - Hero per fondspagina → `.section-blue`.
  - Detailblokken → wit/licht grijs met blauwe tekst.
- `src/routes/cases.tsx`, `casussen.tsx`, `investments.tsx`, `over-ons.tsx`, `contact.tsx`
  - Achtergrond wit, tussensecties optioneel `#f5f7fa`, CTA-blokken `.section-blue`.
- `src/components/WhitepaperModal.tsx`, `src/components/LanguageToggle.tsx`
  - Dialog/toggle op wit met blauwe tekst en blauwe focusring.

Geen teksten, links, route-config of navigatie-items worden gewijzigd.

---

## 3. Verificatie

Na de styling-pass:
- Build laten lopen (automatisch).
- Preview checken op `/`, `/fondsen`, `/fondsen/lacuna`, `/fondsen/lama`, `/cases`, `/over-ons`, `/contact`:
  - Geen donker-navy achtergrond meer zichtbaar.
  - Hero / Fondsen / CTA = blauw met witte tekst.
  - Overige secties = wit of licht grijs met blauwe tekst.
  - Nav wit met subtiele border-bottom.
  - Buttons altijd vol gekleurd, nooit faded.
  - Poppins geladen (Network tab toont fonts.googleapis.com request).

---

## Technische details

- Tailwind v4: tokens in `@theme inline` blok blijven, alleen waarden updaten. `--background` etc. blijven CSS-variabelen, dus `bg-background`/`text-foreground` utilities switchen automatisch mee — geen JSX-refactor nodig op die plekken.
- Voor secties die hard-coded `bg-surface/40` of `bg-background/60` gebruiken in `index.tsx`: vervangen door `.section-white` / `.section-light` wrappers of `bg-[#f5f7fa]` — geen layout-wijziging.
- Poppins via `<link rel="preconnect">` + `<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400&display=swap">` in `__root.tsx` head — nooit via `@import` in CSS (Lightning CSS faalt op remote imports).
- Geen `tailwind.config.js` aanmaken — alle tokens blijven in `src/styles.css`.
