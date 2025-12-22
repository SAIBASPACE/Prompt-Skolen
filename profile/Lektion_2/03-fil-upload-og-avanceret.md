# Fil-upload og Avancerede Features

**Tid at lære:** 12 minutter
**Virker i:** ChatGPT Plus

---

## Fil-upload (kun Plus)

ChatGPT Plus kan læse og analysere filer direkte.

Upload en PDF, Word-fil, eller Excel-ark. Bed ChatGPT om at opsummere, finde nøgletal, eller svare på spørgsmål om indholdet.

---

## Understøttede formater

| Type | Formater |
|------|----------|
| **Dokumenter** | PDF, Word (.docx), PowerPoint (.pptx), tekstfiler |
| **Data** | Excel (.xlsx), CSV |
| **Billeder** | PNG, JPG, GIF, WebP |
| **Kode** | Python, JavaScript, JSON, XML, etc. |

**Max størrelse:** 50 MB per fil

---

## Eksempel der virker

Upload et dokument og skriv:

```
Opsummer dette dokument i 5 bullet points.
Fremhæv de vigtigste tal og konklusioner.
Format: Hvert punkt max 20 ord.
```

**Resultat:** Præcis det format du har brug for, klar til at bruge.

---

## Eksempel der fejler

```
Opsummer mit dokument
```

**Hvorfor det fejler:**
- Ingen instruktion om format
- Ingen angivelse af længde
- Resultat: Lang opsummering du skal sortere og forkorte selv

---

## Analysér dokument - Eksempel

Upload en salgsr rapport (PDF) og skriv:

```
Analysér denne salgsrapport:

1. Hvad er hovedkonklusionen? (1 sætning)
2. Top 3 produkter efter omsætning
3. Største udfordring nævnt i rapporten
4. Anbefalinger fra rapporten
5. Giv mig de vigtigste tal i en tabel
```

**Output:**

```
Baseret på rapporten:

1. Hovedkonklusion: Salget steg 23% i Q3 sammenlignet med Q2

2. Top 3 produkter:
   - Premium-serien: 2,4 mio kr (67% af væksten)
   - Standard-pakken: 1,8 mio kr
   - Budget-løsning: 0,9 mio kr

3. Største udfordring: Kun 45% markedsandel i Jylland vs 78% på Sjælland

4. Anbefalinger: Fokusér markedsføring på Jylland i Q4, ansæt sælger i Århus

5. Nøgletal:

| Metrik | Q2 | Q3 | Ændring |
|--------|----|----|---------|
| Omsætning | 4,1 mio | 5,1 mio | +23% |
| Nye kunder | 34 | 47 | +38% |
| Gennemsnitlig ordre | 12.500 kr | 14.200 kr | +14% |

Skal jeg dykke dybere ned i nogle af disse punkter?
```

---

## Browsing (kun Plus)

ChatGPT kan søge på nettet i realtid og give dig svar med kilder.

Brug det til:
- Aktuelle nyheder
- Priser og tilgængelighed
- Research med kilder
- Faktatjek

---

## Hvornår skal du bruge browsing?

| Situation | Brug browsing? |
|-----------|----------------|
| Aktuelle nyheder (i dag/denne uge) | Ja |
| Priser på produkter | Ja |
| Research med kilder | Ja |
| Historisk information | Nej (ChatGPT ved det) |
| Din virksomheds interne data | Nej (upload fil i stedet) |

---

## Eksempel der virker

```
Søg efter aktuelle priser på iPhone 15 Pro 256GB i Danmark.
Sammenlign priser på Elgiganten, Power og Apple Store.
Inkluder links og find bedste tilbud.
Vis resultat som tabel.
```

**Resultat:** Tabel med priser fra de 3 butikker, links, og klar anbefaling.

---

## Eksempel der fejler

```
Hvad koster en iPhone?
```

**Hvorfor det fejler:**
- Hvilken iPhone model?
- I hvilke butikker?
- Hvilket land/område?
- ChatGPT gætter på en generisk model og giver vag prisindikation

---

## Code Interpreter (kun Plus)

ChatGPT kan skrive og køre Python-kode direkte.

Brug det til:
- Data-analyse og visualisering
- Filkonvertering
- Beregninger
- Automatisering

---

## Data-visualisering - Eksempel

Upload en CSV-fil med salgsdata og skriv:

```
Lav et søjlediagram der viser månedligt salg.
Tilføj trendlinje.
Mærk hver søjle med beløb.
Eksportér som PNG i høj opløsning.
```

ChatGPT:
1. Læser CSV-filen
2. Analyserer data
3. Laver diagram i Python
4. Giver dig en PNG du kan downloade

---

## Filkonvertering

```
Konverter denne Excel-fil til CSV med semikolon som separator.
Fjern tomme rækker.
Gem kun kolonnerne: Navn, Email, Telefon.
```

ChatGPT konverterer og giver dig den nye fil på sekunder.

---

## Tastatur-genveje

Arbejd hurtigere med disse genveje:

| Genvej | Funktion |
|--------|----------|
| `Ctrl + Shift + ;` | Kopiér sidste kodesvar |
| `Ctrl + Shift + C` | Kopiér sidste svar |
| `Ctrl + /` | Vis alle genveje |
| `Shift + Esc` | Ny chat |

(Mac: Brug `Cmd` i stedet for `Ctrl`)

---

## Begrænsninger at kende

### Fil-upload

- Max 50 MB per fil
- Kan ikke læse password-beskyttede filer
- OCR i PDF'er er ikke perfekt - tjek tal manuelt
- Excel-filer med mange formler kan give fejl

### Browsing

- Kan misse den allernyeste information (sidste time)
- Nogle websites blokerer ChatGPT
- Kan ikke browse bag login (kun offentlige sider)

### Code Interpreter

- Timeout efter 5 minutter for lange beregninger
- Begrænset hukommelse (kan ikke behandle kæmpe filer)
- Kun Python (ikke Java, C++, etc.)

---

## Hvornår ChatGPT Plus vs andre værktøjer?

| Opgave | ChatGPT Plus | Bedre alternativ |
|--------|--------------|------------------|
| Analyse af PDFs | ✓ | - |
| Data-visualisering | ✓ | Excel (mere kontrol) |
| Web research | ✓ | Perplexity (mere dybde) |
| Meget store filer (>50 MB) | ✗ | Claude (større kontekst) |
| Samarbejde i team | Custom GPTs | Microsoft Copilot 365 |

---

## Øvelse (15 minutter)

**Del 1 (5 min):** Upload et dokument du arbejder med (PDF, Word, eller Excel).

Bed ChatGPT:

```
Opsummer dette dokument i 5 punkter.
Fremhæv vigtigste tal.
Find eventuelle fejl eller manglende information.
```

**Del 2 (5 min):** Prøv browsing-funktionen:

```
Søg efter de nyeste anmeldelser af [produkt du overvejer at købe].
Find 3 anmeldelser fra danske kilder.
Opsummer fordele og ulemper i tabel.
```

**Del 3 (5 min):** Hvis du har data i CSV eller Excel, prøv Code Interpreter:

```
Analysér denne fil.
Vis gennemsnit, median, og højeste/laveste værdi.
Lav et simpelt diagram der viser fordelingen.
```

---

## Næste skridt

Gå tilbage til [Prompt Skolen oversigt](../README.md) for at udforske flere lektioner.

Eller fortsæt til **Lektion 3: Microsoft Copilot** hvis din virksomhed bruger Microsoft 365.
