# MDX Conversion Guide - Prompt Skolen

Dette dokument forklarer hvordan lektioner skal struktureres i MDX-format til brug med brutalist design komponenter.

---

## 📂 Fil Struktur

### Navngivning
- Originale markdown: `01-persona.md`
- MDX version: `01-persona.mdx`

### Frontmatter (required)
```mdx
---
title: "Persona: Giv AI'en en rolle"
timeEstimate: "5 minutter"
worksIn: "Alle værktøjer (ChatGPT, Claude, Copilot, Gemini)"
---
```

---

## 🧩 Tilgængelige Komponenter

### 1. `<ConceptCard>`
**Brug til:** Framework-forklaringer (CIEO, STAR, etc.)

**Props:**
- `title` (string): Framework navn
- `items` (array): Array af objekter med:
  - `letter` (string): Bogstav (f.eks. "C", "I", "E", "O")
  - `title` (string): Hvad bogstavet står for
  - `description` (string): Forklaring

**Eksempel:**
```mdx
<ConceptCard
  title="CIEO Framework"
  items={[
    {
      letter: "C",
      title: "Context (Kontekst)",
      description: "Baggrunden: Hvem er du? Hvem er modtageren?"
    },
    {
      letter: "I",
      title: "Instruction (Instruktion)",
      description: "Hvad skal AI'en gøre? Vær specifik."
    }
  ]}
/>
```

**Design:**
- Sort baggrund
- Orange bogstaver (#FF4D00)
- Hvid tekst
- 2-kolonner grid på desktop
- 4px brutalist shadow

---

### 2. `<PromptComparison>`
**Brug til:** Sammenligning af dårligt vs. godt prompt

**Props:**
- `badPrompt` (string): Det dårlige prompt
- `goodPrompt` (string): Det gode prompt
- `badExplanation` (string): Hvorfor det fejler
- `goodExplanation` (string): Hvorfor det virker

**Eksempel:**
```mdx
<PromptComparison
  badPrompt="Skriv noget om hunde"
  goodPrompt={`Skriv en informativ artikel på 200 ord om hundetræning for nybegyndere.
Fokusér på positive forstærkningsmetoder og inkludér 3 konkrete tips.`}
  badExplanation="For vagt og uspecifikt. AI'en ved ikke hvilket format, længde eller vinkel."
  goodExplanation="Klart defineret opgave med specifikt format, længde og fokusområde."
/>
```

**Design:**
- 2 kolonner side-om-side
- Rød X-ikon for dårligt
- Grøn checkmark for godt
- Copy-to-clipboard funktion
- Hover effekter

---

### 3. `<CopyablePrompt>`
**Brug til:** Eksempel-prompts der kan kopieres

**Props:**
- `prompt` (string): Prompten der skal vises
- `title` (string, optional): Overskrift

**Eksempel:**
```mdx
<CopyablePrompt
  title="Eksempel på struktureret prompt"
  prompt={`Du er erfaren marketingkonsulent.

Skriv en engagerende email-kampagne for vores nye produkt "SmartDesk".

Målgruppe: Freelancere 30-45 år
Tone: Professionel men venlig
Længde: 150 ord`}
/>
```

**Design:**
- Glass morphism effect
- Copy button (hover to show)
- Monospace font
- Border med hover effect

---

### 4. `<ComparisonTable>`
**Brug til:** Sammenligninger i tabel-format

**Props:**
- `columns` (array): Array af objekter med:
  - `header` (string): Kolonne-overskrift
  - `description` (string, optional): Undertekst
- `rows` (array): Array af objekter med:
  - `label` (string): Række-label
  - `values` (array): Array af values (string | boolean | number)
- `caption` (string, optional): Tabel caption

**Eksempel:**
```mdx
<ComparisonTable
  columns={[
    { header: "Opgave" },
    { header: "Virker godt" },
    { header: "Virker dårligt" }
  ]}
  rows={[
    {
      label: "Skrive emails",
      values: [true, false]
    },
    {
      label: "Lange dokumenter",
      values: [false, true]
    },
    {
      label: "Research",
      values: ["Plus", "Perplexity"]
    }
  ]}
/>
```

**Booleans renderer som:**
- `true` → Grøn checkmark ✓
- `false` → Rød X ✗

**Design:**
- Hvid baggrund
- Grå header
- Sort borders
- Hover effect på rows

---

### 5. `<ExerciseBox>`
**Brug til:** Øvelser og opgaver

**Props:**
- `title` (string, optional): Default "Din opgave"
- `description` (string, optional): Intro tekst
- `steps` (array of strings, optional): Nummererede steps
- `hint` (string, optional): Tip til øvelsen

**Eksempel:**
```mdx
<ExerciseBox
  title="Øvelse (5 minutter)"
  description="Nu er det din tur til at teste CIEO-modellen!"
  steps={[
    "Åbn ChatGPT eller Claude",
    "Skriv et prompt uden CIEO",
    "Skriv samme prompt med fuld CIEO",
    "Sammenlign resultaterne"
  ]}
  hint="Start med noget simpelt som en produktbeskrivelse."
/>
```

**Design:**
- Gul baggrund (yellow-50)
- Terminal ikon i header
- Sort borders (2px)
- 4px brutalist shadow
- Nummererede steps med sorte badges

---

### 6. `<Callout>`
**Brug til:** Info-bokse, advarsler, tips

**Props:**
- `type` (string): "info" | "warning" | "tip" | "danger"
- Children: Markdown content

**Eksempel:**
```mdx
<Callout type="info">
**Info:** Selv ChatGPT Plus har begrænsninger du skal være opmærksom på.

Hukommelse kan være upræcis, browsing kan misse information.
</Callout>

<Callout type="tip">
**Huskeregel:** "Jo mere du giver, jo mindre skal du rette bagefter."

5 minutter ekstra på prompten = 20 minutter sparet.
</Callout>

<Callout type="warning">
**Advarsel:** Denne funktion er kun tilgængelig i Plus versionen.
</Callout>
```

**Design:**
- Info: Blå accent
- Warning: Orange/gul accent
- Tip: Grøn accent
- Danger: Rød accent
- Hvid baggrund med farvet border
- Ikon baseret på type

---

### 7. `<AITerminal>` (avanceret)
**Brug til:** Simulation af AI-svar med typewriter effekt

**Props:**
- `response` (string): AI-responset der skal vises
- `delay` (number, optional): Millisekunder per karakter (default: 20)

**Eksempel:**
```mdx
<AITerminal
  response={`Emne: Opgrader dit workspace med SmartDesk

Kære [Navn],

Arbejder du stadig fra køkkenbordet? Der er en bedre måde...`}
  delay={20}
/>
```

**Design:**
- Sort baggrund
- Terminal header med farvede cirkler
- Typewriter effekt
- Grøn tekst
- Skip button når typing

---

## 📝 Conversion Patterns

### Markdown Tabeller → ComparisonTable

**Fra:**
```markdown
| Din opgave | Persona |
|------------|---------|
| Kundeklage | "Kundeservicechef" |
| Salgsmail | "B2B-sælger" |
```

**Til:**
```mdx
<ComparisonTable
  columns={[
    { header: "Din opgave" },
    { header: "Persona" }
  ]}
  rows={[
    { label: "Kundeklage", values: ["Kundeservicechef"] },
    { label: "Salgsmail", values: ["B2B-sælger"] }
  ]}
/>
```

---

### "Eksempel der virker" / "Eksempel der fejler" → PromptComparison

**Fra:**
```markdown
## Eksempel der virker

```
Du er HR-chef...
```

**Resultat:** Personligt brev

---

## Eksempel der fejler

```
Skriv et afslagsbrev
```

**Hvorfor det fejler:** Ingen kontekst
```

**Til:**
```mdx
<PromptComparison
  badPrompt="Skriv et afslagsbrev"
  goodPrompt={`Du er HR-chef i en dansk mellemstor virksomhed...`}
  badExplanation="Ingen kontekst om virksomheden"
  goodExplanation="Personligt brev med korrekt HR-sprog"
/>
```

---

### Øvelse sections → ExerciseBox

**Fra:**
```markdown
## Øvelse (5 minutter)

1. Åbn ChatGPT
2. Test uden persona
3. Test med persona

**Sammenlign de to svar.**
```

**Til:**
```mdx
<ExerciseBox
  title="Øvelse (5 minutter)"
  steps={[
    "Åbn ChatGPT",
    "Test uden persona",
    "Test med persona"
  ]}
  hint="Sammenlign de to svar."
/>
```

---

### Info-bokse → Callout

**Fra:**
```markdown
> **Info:** Selv ChatGPT Plus har begrænsninger...
```

**Til:**
```mdx
<Callout type="info">
**Info:** Selv ChatGPT Plus har begrænsninger...
</Callout>
```

---

## 🎨 Styling Regler

### Brutalist Design Principper

1. **Ingen border-radius** - Alle hjørner er firkantede
2. **Hard shadows** - Format: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
3. **Sort/hvid kontrast** - Primære farver
4. **2px sorte borders** - Overalt
5. **Orange accenter** - Kun i ConceptCard (#FF4D00)

### Farver

```css
/* Primære */
bg-black, text-black, border-black
bg-white, text-white

/* Grå */
bg-gray-50   /* Meget lys - backgrounds */
bg-gray-100  /* Lys - hover states */
bg-gray-600  /* Mørk - secondary text */

/* Gul (ExerciseBox) */
bg-yellow-50

/* Orange (Accent) */
text-[#FF4D00]
```

### Typography

```css
/* Headings */
H1: text-3xl sm:text-4xl md:text-5xl font-bold
H2: text-2xl sm:text-3xl font-bold uppercase tracking-wide
H3: text-xl sm:text-2xl font-bold

/* Body */
text-base sm:text-lg leading-relaxed

/* Monospace (code/prompts) */
font-mono text-sm
```

---

## ✅ Conversion Checklist

Når du konverterer en lektion til MDX:

- [ ] Tilføj frontmatter med title, timeEstimate, worksIn
- [ ] Konverter tabeller til `<ComparisonTable>`
- [ ] Konverter "Eksempel der virker/fejler" til `<PromptComparison>`
- [ ] Wrap øvelser i `<ExerciseBox>`
- [ ] Konverter info-bokse til `<Callout>`
- [ ] Wrap copyable prompts i `<CopyablePrompt>`
- [ ] Hvis der er framework-forklaring, brug `<ConceptCard>`
- [ ] Tjek at alle props er korrekte (TypeScript validering)
- [ ] Test rendering i Astro lokalt
- [ ] Verificer brutalist styling (ingen rounded corners, hard shadows)

---

## 📦 Eksempel Filer

Se følgende filer for komplette eksempler:

- `Lektion_1/01-persona.mdx` - Basis eksempel
- `Lektion_1/02-kontekst.mdx` - Kompleks med ConceptCard og flere komponenter
- `Lektion_2/01-gratis-vs-plus.mdx` - Tabeller og comparisons

---

## 🚀 Næste Skridt

1. Test MDX-filerne i saibaweb Astro-projekt
2. Verificer at alle komponenter renderer korrekt
3. Tjek brutalist styling (borders, shadows, ingen border-radius)
4. Konverter resten af lektionerne til MDX
5. Opdater markdown-to-html.ts hvis nødvendigt

---

**Sidst opdateret:** Januar 2025
