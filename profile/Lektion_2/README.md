# Lektion 2: ChatGPT

**Tid:** 20-30 minutter
**Virker i:** ChatGPT (gratis og Plus)

ChatGPT er den mest populære AI-assistent. Denne lektion dækker både gratis og Plus versionen.

---

## Gratis version (chatgpt.com)

### Hvad du får

- GPT-4o mini (hurtig, god til de fleste opgaver)
- Begrænset antal beskeder per dag
- Ingen hukommelse mellem samtaler
- Kan ikke uploade filer

### Bedste brug

| Opgave | Virker godt | Virker dårligt |
|--------|-------------|----------------|
| Skrive emails | Ja | - |
| Opsummere tekst | Ja | - |
| Oversætte | Ja | - |
| Kode (simpel) | Ja | - |
| Lange dokumenter | - | Nej (ingen fil-upload) |
| Billeder | - | Nej |
| Research | - | Begrænset |

### Eksempel: Email-svar

```
Du er kundeservicemedarbejder i en dansk webshop.

En kunde skriver: "Jeg har ventet 2 uger på min pakke og har ikke hørt noget!"

Skriv et venligt svar der:
- Undskylder forsinkelsen
- Forklarer vi undersøger sagen
- Giver en konkret tidsramme (2 hverdage)
- Max 80 ord
```

---

## ChatGPT Plus (20 USD/måned)

### Hvad du får ekstra

- **GPT-4o** (smartere, bedre til komplekse opgaver)
- **Flere beskeder** (ingen praktisk grænse for de fleste)
- **Hukommelse** (husker ting mellem samtaler)
- **Custom GPTs** (specialiserede assistenter)
- **Fil-upload** (PDF, Word, Excel, billeder)
- **DALL-E** (billede-generering)
- **Browsing** (kan søge på nettet)
- **Code Interpreter** (kører Python-kode)

---

## Hukommelse (kun Plus)

ChatGPT kan huske information mellem samtaler.

### Sådan bruger du det

**Fortæl ChatGPT hvad den skal huske:**

```
Husk: Jeg hedder [navn], arbejder som [rolle] hos [firma].
Vi bruger HubSpot som CRM og har 15 ansatte.
Vores tone er professionel men afslappet.
```

**Tjek hvad den husker:**

```
Hvad husker du om mig?
```

**Slet hukommelse:**

```
Glem alt om mig
```

### Eksempel der virker

Når hukommelsen er sat op:

```
Skriv en opfølgningsmail til en kunde vi mødtes med i går
```

ChatGPT ved allerede din virksomhed, tone og kontekst.

### Eksempel der fejler (uden hukommelse)

```
Skriv en opfølgningsmail
```

Du får generisk output fordi ChatGPT ikke kender din kontekst.

---

## Custom GPTs (kun Plus)

Specialiserede assistenter du kan bygge eller bruge.

### Populære GPTs

| GPT | Brug |
|-----|------|
| **Consensus** | Videnskabelig research med kilder |
| **Canva** | Design direkte i ChatGPT |
| **Zapier** | Automatisering |
| **WebPilot** | Avanceret web-søgning |

### Byg din egen GPT

1. Gå til chatgpt.com/gpts
2. Klik "Create"
3. Beskriv hvad GPT'en skal gøre
4. Upload relevante dokumenter (fx brand guidelines)
5. Test og juster

### Eksempel: Virksomheds-GPT

```
Navn: [Firma] Skriveassistent

Instruktioner:
- Du skriver altid i [firma]s tone: professionel, direkte, uden buzzwords
- Du kender vores produkter: [liste]
- Du bruger altid dansk
- Max svar-længde: 200 ord medmindre andet specificeres

Viden: [Upload brand guide, produktbeskrivelser, eksempler på god tekst]
```

---

## Fil-upload (kun Plus)

### Understøttede formater

- **Dokumenter:** PDF, Word, PowerPoint
- **Data:** Excel, CSV
- **Billeder:** PNG, JPG, GIF
- **Kode:** Python, JavaScript, etc.

### Eksempel: Analysér dokument

Upload en PDF og skriv:

```
Opsummer dette dokument i 5 bullet points.
Fremhæv de vigtigste tal og konklusioner.
```

### Eksempel: Excel-analyse

Upload en Excel-fil:

```
Analysér salgsdata for Q3.
Find top 3 produkter og beregn vækst vs. Q2.
Vis resultat som tabel.
```

---

## Browsing (kun Plus)

ChatGPT kan søge på nettet i realtid.

### Hvornår du skal bruge det

- Aktuelle nyheder
- Priser og tilgængelighed
- Research med kilder
- Faktatjek

### Eksempel der virker

```
Søg efter de nyeste anmeldelser af [produkt] fra 2024.
Opsummer fordele og ulemper fra mindst 3 kilder.
Inkluder links.
```

### Eksempel der fejler

```
Hvad koster en iPhone?
```

**Hvorfor:** For vagt. Hvilken model? Hvor? Ny eller brugt?

### Bedre version

```
Søg efter prisen på iPhone 15 Pro 256GB i Danmark.
Sammenlign Elgiganten, Power og Apple Store.
```

---

## Code Interpreter (kun Plus)

ChatGPT kan skrive og køre Python-kode.

### Bedste brug

- Data-analyse og visualisering
- Filkonvertering
- Beregninger
- Automatisering

### Eksempel: Data-visualisering

Upload en CSV-fil:

```
Lav et søjlediagram der viser månedligt salg.
Tilføj trendlinje.
Eksportér som PNG.
```

### Eksempel: Filkonvertering

```
Konverter denne Excel-fil til CSV med semikolon som separator.
```

---

## Tastatur-genveje

| Genvej | Funktion |
|--------|----------|
| `Ctrl + Shift + ;` | Kopiér sidste kodesvar |
| `Ctrl + Shift + C` | Kopiér sidste svar |
| `Ctrl + /` | Vis alle genveje |
| `Shift + Esc` | Ny chat |

---

## Begrænsninger

### Gratis version

- Begrænset antal beskeder (varierer)
- Ingen fil-upload
- Ingen hukommelse
- Kan blive langsom i spidsbelastning

### Plus version

- Hukommelse kan være upræcis
- Browsing kan misse nyeste info
- Code Interpreter har timeout på lange opgaver
- Custom GPTs kræver vedligeholdelse

---

## Hvornår ChatGPT vs. andre

| Brug | ChatGPT | Alternativ |
|------|---------|------------|
| Generel skrivning | Ja | - |
| Kode | Ja | Claude (bedre til lange filer) |
| Research | Ja (med browsing) | Perplexity |
| Microsoft-integration | Nej | Copilot |
| Lange dokumenter | Ja | Claude (større kontekst) |

---

## Øvelser

### Øvelse 1: Hukommelse

Sæt hukommelse op med din arbejdskontekst. Test ved at bede om en email uden at specificere firma eller tone.

### Øvelse 2: Fil-analyse

Upload et dokument du arbejder med. Bed ChatGPT opsummere og finde nøgletal.

### Øvelse 3: Custom GPT

Lav en simpel GPT til en gentagen opgave (fx mødeopsamling, email-skabeloner).

---

## Næste skridt

Gå tilbage til [Prompt Skolen oversigt](../README.md) for at udforske flere lektioner.

---
