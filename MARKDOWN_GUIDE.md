# Markdown Guide til Prompt Skolen

Denne guide dokumenterer hvordan markdown automatisk konverteres til HTML/CSS på saiba.dk/docs.

---

## 🎯 Astro Transformations Oversigt

Systemet parser markdown og anvender automatiske transformationer baseret på mønstre:

| Transformation | Trigger | Resultat |
|----------------|---------|----------|
| **createSections** | `## Overskrift` | `<section class="section">` med `<div class="section-title">` |
| **transformPromptCompare** | To code blocks efter hinanden | `.prompt-compare` med `.bad` og `.good` |
| **transformAISimulation** | Code block efter "Output:" eller "Eksempel output:" | `.ai-simulation` box med typewriter effekt |
| **transformExercise** | Section med "Øvelse" i titel | `.exercise` box med timer ikon |

---

## 1. Section Headers (H2 → `.section`)

### I markdown:
```markdown
## Hvad er det?

Dette er content under sektionen.

## Hvorfor virker det?

Mere content her.
```

### Bliver til HTML:
```html
<section class="section">
  <div class="section-title">Hvad er det?</div>
  <p>Dette er content under sektionen.</p>
</section>

<section class="section">
  <div class="section-title">Hvorfor virker det?</div>
  <p>Mere content her.</p>
</section>
```

### ✅ Regler:
- Brug **altid** `##` (H2) til section headers
- Hver H2 starter en ny `<section class="section">`
- Content mellem H2's bliver section content

---

## 2. Prompt Sammenligning (`.prompt-compare`)

### I markdown:
```markdown
## Sammenligning

```
Skriv en jobannonce for en CNC-operatør.
```

```
Du er en erfaren HR-chef i en dansk produktionsvirksomhed med 200 ansatte.

Skriv en jobannonce for en CNC-operatør.
```
```

**VIGTIGT:**
- To code blocks direkte efter hinanden (ingen tekst imellem)
- Begge code blocks skal være i **samme section** (under samme `##` header)
- Section titlen er typisk "Sammenligning", "Eksempel der virker", eller lignende

### Bliver til HTML:
```html
<div class="prompt-compare">
  <div class="prompt-box bad">
    <div class="prompt-label bad">Uden persona</div>
    <div class="prompt-text">Skriv en jobannonce for en CNC-operatør.</div>
  </div>
  <div class="prompt-box good">
    <button class="copy-btn">Kopier</button>
    <div class="prompt-label good">Med persona</div>
    <div class="prompt-text">Du er en erfaren HR-chef...</div>
  </div>
</div>
```

### ✅ Regler:
- **Første code block** = `.bad` (dårlig prompt - får rød border)
- **Anden code block** = `.good` (god prompt - får grøn border) med "Kopier" knap
- Ingen tekst mellem de to code blocks
- **Begge code blocks skal være i samme section** (under samme H2)
- Section titel bliver automatisk "SAMMENLIGNING" i UI'et
- Labels "UDEN [teknik]" og "MED [teknik]" tilføjes automatisk

---

## 3. AI Simulation Box (`.ai-simulation`)

### I markdown:
```markdown
## Resultat

**Output:**
```
CNC-operatør søges til moderne produktionsmiljø

Vi søger en erfaren CNC-operatør til vores maskinværksted i Vejle.
```
```

**VIGTIGT:** Code block skal komme direkte efter linje med "Output:" eller "Eksempel output:"

### Bliver til HTML:
```html
<div class="ai-simulation">
  <div class="ai-header">
    <div class="ai-dot"></div>
    <span class="ai-label">AI Response</span>
  </div>
  <div class="ai-prompt">Du er en erfaren HR-chef...</div>
  <div class="thinking">
    <div class="thinking-dot"></div>
    <div class="thinking-dot"></div>
    <div class="thinking-dot"></div>
  </div>
  <div class="ai-response typewriter">CNC-operatør søges...</div>
</div>
```

### ✅ Regler:
- Brug **"Output:"** eller **"Eksempel output:"** før code block
- Code block kommer direkte efter (næste linje)
- Indhold får automatisk typewriter effekt
- Thinking dots vises før teksten

---

## 4. Øvelse Box (`.exercise`)

### I markdown:
```markdown
## Øvelse (2 minutter)

Tag din næste AI-opgave. Tilføj en relevant persona i starten af din prompt.
```

**VIGTIGT:** Section titel skal indeholde ordet "Øvelse"

### Bliver til HTML:
```html
<section class="section">
  <div class="exercise">
    <div class="exercise-title">
      <svg><!-- timer icon --></svg>
      <span>Øvelse 2 minutter</span>
    </div>
    <p>Tag din næste AI-opgave...</p>
  </div>
</section>
```

### ✅ Regler:
- Section titel skal indeholde "Øvelse"
- Angiv tid i parentes: `(2 minutter)`, `(5 min)`, etc.
- Får automatisk timer-ikon

---

## 5. Standard Markdown Elementer

### Tabeller
```markdown
| Opgave | Virker godt | Virker dårligt |
|--------|-------------|----------------|
| Skrive emails | Ja | - |
| Opsummere tekst | Ja | - |
```
Renderer som normale markdown tabeller.

### Lister
```markdown
- Punkt 1
- Punkt 2
  - Underpunkt

1. Nummereret punkt
2. Andet punkt
```

### Blockquotes (Vigtige noter)
```markdown
> **Husk:** Copilot i Excel kræver at dine data er formateret som tabel (Ctrl+T).
```
Bruges til vigtige beskeder, advarsler, tips.

### Bold og links
```markdown
**Fed tekst**
[Link tekst](./02-kontekst.md)
```

---

## 📋 Template: Standard Modul Struktur

Her er en komplet template til et nyt modul:

```markdown
# [Titel på teknikken]

**Tid at lære:** X minutter
**Virker i:** Alle værktøjer / ChatGPT / Copilot

---

## Hvad er det?

[Kort definition af teknikken]

---

## Hvorfor virker det?

[Forklaring af benefits og reasoning]

---

## Eksempel der virker

**Opgave:** [Beskriv opgaven]

```
[Dårlig prompt uden teknikken]
```

```
[God prompt med teknikken]
```

**Resultat:** [Hvad der sker]

---

## Eksempel der fejler

```
[Dårlig prompt]
```

**Hvorfor det fejler:**
- [Årsag 1]
- [Årsag 2]
- [Årsag 3]

---

## [Praktisk sektion: Tabeller, lister, tips]

| Situation | Brug teknikken? |
|-----------|-----------------|
| Use case 1 | Ja |
| Use case 2 | Nej |

---

## Øvelse (X minutter)

1. [Step 1]
2. [Step 2]
3. [Step 3]

**Sammenlign resultaterne.** [Reflection question]

---

## Næste lektion

[XX - Næste teknik →](./XX-filnavn.md)
```

---

## 🔍 Verifikation Checklist

Før du publiserer et nyt modul, tjek:

- [ ] Alle section headers bruger `##` (H2)
- [ ] Prompt sammenligninger har **to code blocks direkte efter hinanden**
- [ ] AI output har "Output:" eller "Eksempel output:" før code block
- [ ] Øvelse section har "Øvelse" i titlen med tid i parentes
- [ ] Navigation link til næste modul i bunden
- [ ] Meta-info øverst: **Tid at lære** og **Virker i**
- [ ] Konsistent brug af `---` separatorer mellem sections

---

## 🎨 Styling Guide

### Labels der bruges automatisk:
- `.bad` prompt → "Uden [teknik]" label
- `.good` prompt → "Med [teknik]" label
- `.ai-simulation` → "AI Response" header med dot
- `.exercise` → Timer ikon + "Øvelse X minutter"

### Tone og stil:
- Kort og konkret
- Eksempler før teori
- Danske virksomheds-cases
- Undgå buzzwords og klichéer
- Max 15 ord per sætning når muligt

---

## 📁 Filnavnskonvention

```
Lektion_X/
├── README.md                    # Oversigt over lektionen
├── 01-teknik-navn.md           # Første modul
├── 02-anden-teknik.md          # Andet modul
└── XX-sidste-modul.md          # Sidste modul
```

### URL mapping:
- `Lektion_1/01-persona.md` → `/docs/lektion-1/01-persona/`
- `Lektion_2/03-fil-upload.md` → `/docs/lektion-2/03-fil-upload/`

**Regler:**
- Filnavn starter med nummer (01, 02, etc.)
- Kun lowercase i filnavn
- Brug `-` (ikke `_`) mellem ord i filnavn
- Dansk tegn (æ, ø, å) erstattes: `kæde-tanker` ✅ ikke `kaede_tanker` ❌

---

## 🚨 Almindelige Fejl

### ❌ Tekst mellem prompt code blocks
```markdown
## Sammenligning

```
Dårlig prompt
```

Her er noget tekst  <!-- ❌ FORKERT - transformation vil ikke virke -->

```
God prompt
```
```

### ❌ Code blocks i separate sections
```markdown
## Eksempel der virker

```
God prompt
```

## Eksempel der fejler  <!-- ❌ FORKERT - separate sections -->

```
Dårlig prompt
```
```

### ✅ Korrekt (samme section, ingen tekst imellem)
```markdown
## Sammenligning

```
Dårlig prompt
```

```
God prompt med teknikken
```
```

---

### ❌ Manglende "Output:" før AI simulation
```markdown
## Resultat

```
Dette bliver ikke til en AI box  <!-- ❌ FORKERT -->
```
```

### ✅ Korrekt (med Output:)
```markdown
## Resultat

**Output:**
```
Dette bliver til en AI simulation box
```
```

---

### ❌ Forkert heading level
```markdown
### Hvad er det?  <!-- ❌ H3 virker ikke -->
```

### ✅ Korrekt (brug H2)
```markdown
## Hvad er det?  <!-- ✅ H2 bliver til section -->
```

---

## 📊 Eksempel: Komplet Modul

Se `profile/Lektion_1/01-persona.md` for et perfekt eksempel på alle mønstre i praksis.

---

**Sidst opdateret:** 2025-12-18
