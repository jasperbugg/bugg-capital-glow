## Tekstwijzigingen en markup-cleanup

### 1. Homepage (`src/routes/index.tsx`)
- **Hero headline**: verander `Nu bouwen wij aan vermogen` → `Én bouwen wij aan vermogen` (EN: `Now we build wealth` → `And build wealth`)
- **Hero body**: verander `Van platformbedrijven naar vastgoedfondsen` → `Specialstays als operating platform, Lacuna en Lama als vastgoedfondsen` (EN: `From platform ventures to real estate funds` → `Specialstays as operating platform, Lacuna and Lama as real estate funds`)
- **Hero body**: verander `Since 2012` → `Actief since 2012`
- **KPI-balk**: verander `Gecommitteerd capital` → `Gecommitteerd kapitaal` (EN blijft `Committed capital`)
- **Story-sectie, tweede alinea**: vervang de huidige tekst (beginnend met "Sinds 2024...") door de nieuwe tekst over Specialstays actief since 2019

### 2. Investments-pagina (`src/routes/investments.tsx`)
- **Slotblok toevoegen** onder de deelnemingen-sectie:
  - `section-blue` achtergrond
  - Eyebrow: `Built to compound`
  - Heading: `Die route leidt naar de fondsen.`
  - Body: `Alles wat wij leerden over platformen, data en distributie zetten wij nu in voor onze investeerders. Lacuna en Lama zijn het resultaat.`
  - Primaire knop → `/fondsen`: `Bekijk de fondsen`
  - Ghost-knop → `/contact`: `Contact opnemen`
  - Geen EN-vertalingen — deze pagina is NL-only

### 3. Dode markup verwijderen
Verwijder op **alle** pagina's de regel:
```
<div className="absolute inset-0 bugg-grid bugg-grid-fade" />
```
Pagina's waar deze voorkomt:
- `src/routes/index.tsx`
- `src/routes/over-ons.tsx`
- `src/routes/investments.tsx`
- `src/routes/cases.tsx`
- `src/routes/contact.tsx`
- `src/routes/fondsen.index.tsx`
- `src/routes/fondsen.lacuna.tsx`
- `src/routes/fondsen.lama.tsx`