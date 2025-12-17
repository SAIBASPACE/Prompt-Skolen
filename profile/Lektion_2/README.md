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

### Resultat

```
Hej [Kunde navn],

Jeg undskylder den forsinkelse du oplever med din pakke. Det er ikke acceptabelt at du ikke har hørt fra os.

Jeg undersøger din ordre nu og kontakter vores lager. Du hører fra mig inden for 2 hverdage med en opdatering og løsning.

Mange tak for din tålmodighed.

Venlig hilsen,
[Dit navn]
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

### Plus gevinster

- **30 sek** Hurtigere email-svar med hukommelse
- **10 min** Mindre research tid med browsing
- **5x** Hurtigere dokument-analyse med fil-upload

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

### Eksempel der fejler

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

- **S:** Setup - Definer formål og rolle
- **I:** Instructions - Skriv klare retningslinjer  
- **K:** Knowledge - Upload relevante dokumenter
- **T:** Test - Afprøv og juster funktionalitet

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

### Resultat

```
Baseret på dit dokument:

• Hovedkonklusion: Salget steg 23% i Q3 sammenlignet med Q2
• Bedste produkter: Premium-serien tegnede sig for 67% af væksten
• Udfordringer: Kun 45% markedsandel i Jylland vs. 78% på Sjælland
• Anbefalinger: Fokusér markedsføring på Jylland i Q4
• Budget: Foreslået marketing-boost på 2.1M DKK for at lukke gabet

Skal jeg dykke dybere ned i nogle af disse punkter?
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
Søg efter de nyeste anmeldelser af iPhone 15 Pro 256GB i Danmark.
Sammenlign priser på Elgiganten, Power og Apple Store.
Inkluder links og find bedste tilbud.
```

### Eksempel der fejler

```
Hvad koster en iPhone?
```

**Hvorfor:** For vagt. Hvilken model? Hvor? Ny eller brugt?

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

> **Advarsel:** ChatGPT Plus har stadig begrænsninger du skal være opmærksom på.
> 
> Hukommelse kan være upræcis, browsing kan misse den nyeste information, og Code Interpreter har timeout på lange opgaver. Custom GPTs kræver løbende vedligeholdelse.

### Gratis version

- Begrænset antal beskeder (varierer)
- Ingen fil-upload
- Ingen hukommelse
- Kan blive langsom i spidsbelastning

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

## Øvelse — 20 minutter

Test ChatGPT's forskellige funktioner:

**Del 1 (5 min):** Sæt hukommelse op med din arbejdskontekst. Test ved at bede om en email uden at specificere firma eller tone.

**Del 2 (10 min):** Upload et dokument du arbejder med. Bed ChatGPT opsummere og finde nøgletal.

**Del 3 (5 min):** Prøv at browse efter aktuel information om dit fagområde. Sammenlign med din nuværende viden.

---

## Næste skridt

Gå tilbage til [Prompt Skolen oversigt](../README.md) for at udforske flere lektioner.

---
