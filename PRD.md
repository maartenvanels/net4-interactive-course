# PRD: Interactieve Online Presentatieomgeving Netwerken 4

**Versie:** 1.2
**Datum:** 2025-04-13

## 1. Introductie

Dit document beschrijft de vereisten voor het ontwikkelen van een **interactieve online presentatieomgeving** voor de **gehele cursus Netwerken 4**. Het doel is om de cursusinhoud op een moderne, visueel aantrekkelijke en interactieve manier aan te bieden via een centrale website (gehost op GitHub Pages). Deze website wordt gebouwd met **SvelteKit** en gestyled met **Tailwind CSS**. De site zal linken naar (of bevatten) **individuele lespresentaties**, gemaakt met **Reveal.js** (geïntegreerd in SvelteKit), en **interactieve tools** (SvelteKit componenten met **Plotly.js**) om het begrip te verdiepen.

**Bronmateriaal:**

- Inhoud van de cursus Netwerken 4 (zoals oorspronkelijk in `NET4 2223 Week A - EN.pdf` en eventuele vervolgmaterialen).
- `lect1/lecture1_preparation_notes.md` (als basis voor de eerste les).
- Afbeeldingen gegenereerd door `bib4llm`.

## 2. Visie

De visie is het transformeren van het lesmateriaal voor Netwerken 4 naar een **dynamische, online leeromgeving** die:

- **Centraal Toegankelijk is:** Eén duidelijke startpagina biedt toegang tot alle lesmodules en interactieve tools.
- **Actief Leren Bevordert:** Studenten de mogelijkheid biedt om concepten actief te verkennen via interactieve simulaties en visualisaties, geïntegreerd met de lesstof.
- **Modulair en Onderhoudbaar is:** Een structuur opzet waarbij elke les een opzichzelfstaande module is (aparte Reveal.js presentatie), wat updates en aanpassingen vereenvoudigt.
- **Consistent en Modern is:** Een uniforme, moderne uitstraling en gebruikerservaring biedt over alle lesmodules heen.
- **Technologie Effectief Inzet:** Didactiek versterkt door **SvelteKit** en **Tailwind CSS** voor de applicatiestructuur en styling, **Reveal.js** voor presentatie, **Plotly.js** voor interactiviteit, en **GitHub Pages** voor laagdrempelige hosting en distributie.
- **Een Duurzame Workflow Creëert:** Een op Markdown/HTML gebaseerde workflow gebruikt die het voor docenten makkelijker maakt om lesmateriaal te ontwikkelen, delen en onderhouden.

Deze aanpak streeft ernaar de leerervaring voor de _gehele_ Netwerken 4 cursus te verbeteren.

## 3. Doelstellingen

- Ontwikkelen van een centrale hub-webpagina als onderdeel van een SvelteKit-applicatie.
- Creëren van individuele, moderne Reveal.js-presentaties voor elke les/week, geïntegreerd als routes/componenten binnen de SvelteKit-app.
- Bieden van interactieve tools (SvelteKit componenten met Plotly.js) voor kernconcepten.
- Zorgen voor een consistente navigatie en vormgeving over de gehele site.
- Opzetten van een onderhoudbare SvelteKit projectstructuur.

## 4. Gebruikersverhalen / Vereisten

### 4.1. Algemeen & Hub Pagina

- **[REQ-HUB-01]** Als gebruiker (docent/student) wil ik een **hoofdpagina (root route in SvelteKit)** die een duidelijk overzicht geeft van de Netwerken 4 cursusstructuur.
- **[REQ-HUB-02]** Als gebruiker wil ik vanaf de hoofdpagina **eenvoudig kunnen navigeren** naar de presentatie van elke individuele les/week.
- **[REQ-HUB-03]** De hoofdpagina moet een nette, professionele uitstraling hebben die past bij de cursus.
- **[REQ-SHARED-01]** De SvelteKit structuur faciliteert gedeelde componenten, layouts en utilities. Tailwind zorgt voor consistente styling.

### 4.2. Individuele Lespresentaties (per Les/Week)

- **[REQ-LECTURE-01]** Voor elke les/week moet een **aparte SvelteKit route** (bijv. `/lectures/1`) worden gemaakt die een Reveal.js presentatie rendert.
- **[REQ-LECTURE-02]** Elke lespresentatie moet de relevante **kerninhoud** voor die week/les bevatten, gestructureerd in logische dia's (`<section>` elementen).
- **[REQ-LECTURE-03]** Elke lespresentatie moet **volledige ondersteuning** bieden voor:
  - Invoegen van lokale afbeeldingen (PNG).
  - Correct renderen van **LaTeX**-syntax (inline en blok, via MathJax/KaTeX plugin).
- **[REQ-LECTURE-04]** Elke lespresentatie moet gebruikmaken van een **consistent, modern thema**, geconfigureerd via Tailwind CSS en/of Reveal.js thema's ([REQ-DESIGN-01]).
- **[REQ-LECTURE-05]** Waar relevant, moeten lespresentaties **links bevatten naar de bijbehorende interactieve tools**. ([REQ-INTERACT-01]).
- **[REQ-LECTURE-06 (Voor Les 1 specifiek)]** De presentatie voor Les 1 moet een **introductiesectie** bevatten (terugblik Net1-3, start laatste periode, relevantie) ([REQ-CONTENT-01 uit oud PRD]).
- **[REQ-LECTURE-07 (Voor Les 1 specifiek)]** De presentatie voor Les 1 moet de kerninhoud uit `lecture1_preparation_notes.md` bevatten ([REQ-CONTENT-02 uit oud PRD]).

### 4.3. Vormgeving

- **[REQ-DESIGN-01]** De SvelteKit app (hub, presentaties, tools) moet een **consistente, "hippe en moderne" uitstraling** hebben, primair gerealiseerd met **Tailwind CSS**.
  - Suggesties: Strakke layout, goed leesbare typografie, consistent kleurenschema (mogelijk HU-stijl of donker thema), subtiele animaties/transities.

### 4.4. Interactieve Tools (als SvelteKit componenten/pagina's)

- **[REQ-INTERACT-01]** Interactieve tools (zoals de RC-plotter) worden ontwikkeld als **aparte SvelteKit routes/componenten**.
- **[REQ-INTERACT-02]** Voor **RC-circuits (Les 1)**: Er moet een interactieve tool zijn die een **Plotly.js plot** toont van \( v_C(t) \) als functie van tijd.
- **[REQ-INTERACT-03]** De RC-tool moet **sliders** bevatten om **R** en **C** aan te passen.
- **[REQ-INTERACT-04]** De RC-plot moet **dynamisch updaten** bij aanpassing van de sliders.
- **[REQ-INTERACT-05]** (Optioneel) De RC-tool moet een keuze bieden tussen **opladen** en **ontladen**.
- **[REQ-INTERACT-06]** (Toekomst) Overweeg vergelijkbare interactieve tools voor andere kernconcepten (bijv. RL-circuits, RLC-respons).

## 5. Ontwerpoverwegingen

- Prioriteit ligt bij leesbaarheid en duidelijkheid van content (tekst, formules, plots).
- Navigatie moet intuïtief zijn, zowel op de hub als binnen de presentaties.
- Consistentie in stijl en terminologie is belangrijk over alle modules heen.

## 6. Technische Overwegingen

- **Web Framework:** **SvelteKit**.
- **Styling:** **Tailwind CSS**.
- **Presentaties:** **Reveal.js**, geïnitialiseerd en beheerd binnen SvelteKit componenten/routes. Configuratie van MathJax/KaTeX plugin voor LaTeX (binnen Reveal.js setup).
- **Interactieve Tools:** SvelteKit componenten/routes.
  - Plotting Library: **Plotly.js**, gebruikt binnen SvelteKit componenten.
  - Interactiviteit: Svelte reactivity, HTML sliders (`<input type="range">`), JavaScript/Svelte event listeners, Plotly.js API.
  - Wiskunde: JavaScript implementatie van relevante formules.
- **Project Structuur:** Standaard SvelteKit projectstructuur (`src/routes`, `src/lib`, `static`, etc.).
  ```
  /src/
      routes/
          +page.svelte            (Hub pagina)
          lectures/
              1/
                  +page.svelte    (Les 1 - Laadt Reveal.js component)
              ...
          tools/
              rc-circuit-plotter/
                  +page.svelte    (RC Tool - Laadt Plotly component)
              ...
      lib/
          components/
              RevealPresentation.svelte (Wrapper voor Reveal.js?)
              PlotlyChart.svelte      (Wrapper voor Plotly?)
              shared/                 (Gedeelde UI componenten)
          styles/                 (Eventuele globale CSS naast Tailwind)
          utils/                  (JS hulpinmodules)
  /static/                        (Statische assets zoals afbeeldingen, reveal.js core?)
  /lecture_specific_assets/       (Of in /static/lectures/1/ ?)
  /tailwind.config.cjs
  /svelte.config.js
  /package.json
  /README.md
  /PRD.md
  ```
- **Hosting:** **GitHub Pages**, via SvelteKit's `adapter-static`.

## 7. Buiten Scope (Non-Goals)

- Ontwikkelen van een volwaardig Learning Management System (LMS).
- Implementeren van gebruikersaccounts of progress tracking.
- Real-time samenwerkingstools.
- Automatisch beoordelen van oefeningen.

## 8. Open Vragen / Toekomstige Overwegingen

- Definitieve structuur/layout van de hub-pagina (`+page.svelte`)?
- Precieze inhoud en aantal lessen/weken voor Netwerken 4? (Nodig voor routes)
- Specifieke invulling van "hip en modern" thema met Tailwind CSS?
- Beste manier om Reveal.js te integreren in SvelteKit (wrapper component, directe initialisatie)?
- Gewenste bereik en stapgrootte voor R, C (en L) sliders?
- Standaardwaarden voor \( V_i \) / \( V_S \) in de tools?
- Welke andere interactieve tools zijn wenselijk/haalbaar voor latere lessen?

## 9. Takenlijst / Plan van Aanpak

**Fase 1: Planning & Basisstructuur**

- [x] **Beslissing Web Framework:** **Keuze: SvelteKit.**
- [x] **Beslissing Styling:** **Keuze: Tailwind CSS.**
- [x] **Beslissing Presentatie Tooling:** **Keuze: Reveal.js.**
- [x] **Beslissing Plotting Library:** **Keuze: Plotly.js.**
- [x] **Beslissing Hosting:** **Keuze: GitHub Pages.**
- [x] **SvelteKit Project Opzetten:** Initialiseer een nieuw SvelteKit project (`npm create svelte@latest`).
- [x] **Tailwind CSS Integreren:** Installeer en configureer Tailwind CSS in het SvelteKit project.
- [x] **GitHub Repository & Pages:** Maak een GitHub repository aan en configureer GitHub Pages (deployment via GitHub Actions met `adapter-static` build output).
- [x] **Projectstructuur Aanmaken:** Definieer de basis mappenstructuur binnen `src/routes`, `src/lib`, `static`.
- [x] **Reveal.js Integratie Setup:** Installeer Reveal.js (`npm install reveal.js`). Bepaal strategie voor initialisatie (bijv. in een Svelte component in `src/lib/components/`).
- [x] **LaTeX Configuratie:** Configureer MathJax/KaTeX plugin binnen de Reveal.js setup. Test in een Svelte component.
- [x] **Plotly.js Integratie Setup:** Installeer Plotly.js (`npm install plotly.js-dist-min`). Maak eventueel een basis wrapper Svelte component (`PlotlyChart.svelte`).

**Fase 2: Ontwikkeling Hub & Les 1**

- [ ] **Hub Pagina Ontwerp & Bouw:** Bouw de root route (`src/routes/+page.svelte`). Voeg titel, introductie, en placeholder-lijst/grid voor links naar lessen toe. Style met Tailwind CSS.
- [ ] **Basis Layout:** Creëer een SvelteKit layout (`src/routes/+layout.svelte`?) voor consistente navigatie/styling.
- [ ] **Implementeer Light/Dark Mode Toggle:** Voeg functionaliteit toe om te kunnen schakelen tussen lichte en donkere interface.
  - [ ] Implementeer een toggle component in de layout
  - [ ] Configureer Tailwind voor dark mode ondersteuning
  - [ ] Zorg voor het behouden van gebruikersvoorkeur (localStorage)
- [ ] **Reveal.js Thema/Styling:** Configureer Reveal.js thema en/of gebruik Tailwind CSS voor een modern uiterlijk ([REQ-DESIGN-01]).
- [ ] **Les 1 Presentatie Route (`src/routes/lectures/1/+page.svelte`):**
  - [ ] Implementeer de route die de Reveal.js presentatie voor Les 1 laadt/initialiseert.
  - [ ] Schrijf Introductie sectie ([REQ-LECTURE-06]).
  - [ ] Migreer kerninhoud uit `lecture1_preparation_notes.md` ([REQ-LECTURE-07]).
  - [ ] Integreer LaTeX formules en test rendering ([REQ-LECTURE-03]).
  - [ ] Integreer specifieke afbeeldingen voor les 1 (plaats in `static` of beheer via SvelteKit) ([REQ-LECTURE-03]).
- [ ] **Interactieve RC Tool Component/Route (`src/routes/tools/rc-circuit-plotter/+page.svelte`):**
  - [ ] Bouw de Svelte component met HTML structuur (sliders, plot div) ([REQ-INTERACT-02], [REQ-INTERACT-03]).
  - [ ] Integreer Plotly.js (via wrapper component?).
  - [ ] Schrijf Svelte/JavaScript logica (reactieve variabelen, lezen sliders, berekenen \(\tau\), genereren data, plotten, updaten) ([REQ-INTERACT-04]).
  - [ ] (Optioneel) Implementeer keuze opladen/ontladen ([REQ-INTERACT-05]).
- [ ] **Integratie Les 1 & Tool:** Voeg een link van de Les 1 route naar de RC tool route toe op de relevante dia ([REQ-LECTURE-05]).
- [ ] **Link op Hub:** Voeg een link naar `/lectures/1` toe op de hub pagina ([REQ-HUB-02]).
- [ ] **Testen Les 1 Workflow:** Draai de SvelteKit dev server (`npm run dev`). Test de hub -> les 1 -> interactieve tool flow. Controleer layout, LaTeX, afbeeldingen, en tool-functionaliteit. Commit & push.

**Fase 3: Ontwikkeling Overige Lessen (Iteratief)**

- **Voor elke volgende les/week (Les 2, Les 3, ...):**
  - [ ] **Bepaal Inhoud:** Definieer onderwerpen, formules, afbeeldingen.
  - [ ] **Bouw Presentatie Route (`src/routes/lectures/N/+page.svelte`):** Creëer de route, voeg inhoud, LaTeX, afbeeldingen toe.
  - [ ] **Identificeer/Ontwikkel Interactie:** Bepaal of tool nodig is. Indien ja:
    - [ ] Bouw Tool Route/Component (`src/routes/tools/toolN/+page.svelte`).
    - [ ] Integreer Tool (link vanuit presentatie route).
  - [ ] **Link op Hub:** Voeg link naar `/lectures/N` toe op hub.
  - [ ] **Testen:** Test lokaal en commit/push.

**Fase 4: Afwerking & Documentatie**

- [ ] **Fine-tuning:** Verfijn styling (Tailwind), navigatie (SvelteKit routing), Reveal.js configuratie.
- [ ] **Cross-Browser Testen:** Controleer werking en weergave.
- [ ] **Deployment Test:** Bouw de statische site (`npm run build` met `adapter-static`) en test de output lokaal (`preview` script) voordat je naar GitHub Pages pusht.
- [ ] **Documentatie (`README.md`):** Schrijf/update `README.md` met:
  - Project overzicht en doel.
  - Link naar de live GitHub Pages site.
  - Instructies voor ontwikkelaars (`npm install`, `npm run dev`, `npm run build`).
  - Uitleg structuur en hoe nieuwe les toe te voegen.

**Fase 5: Deployment & Feedback**

- [ ] **Finale Deployment:** Push de code, laat GitHub Actions de build uitvoeren en deployen naar GitHub Pages.
- [ ] **Feedback:** Verzamel feedback.
