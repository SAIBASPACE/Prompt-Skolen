# Copilot i Excel, Outlook og Teams

**Tid at lære:** 12 minutter
**Virker i:** Microsoft 365 Copilot

---

## Copilot i Excel

Copilot kan analysere data, lave formler og skabe visualiseringer.

**Vigtigt:** Dine data skal være formateret som tabel (Ctrl+T) før Copilot kan læse dem.

---

## Hvad Copilot kan gøre i Excel

| Opgave | Kommando |
|--------|----------|
| **Analysér data** | "Vis top 5 produkter efter omsætning" |
| **Lav formler** | "Beregn gennemsnit for hver måned" |
| **Find mønstre** | "Hvilken måned havde højest salg?" |
| **Visualisér** | "Lav et søjlediagram over månedligt salg" |
| **Forudsig** | "Projektér salg for næste kvartal baseret på trend" |

---

## Eksempel der virker

```
Analysér salgsdata i kolonne B-D.
Find top 3 produkter efter omsætning.
Beregn vækst fra januar til marts.
Vis resultat som søjlediagram med trendlinje.
```

**Resultat:** Copilot laver præcis den analyse du har brug for.

---

## Eksempel der fejler

```
Lav en analyse
```

**Hvorfor det fejler:**
- Copilot ved ikke hvilke kolonner
- Ingen angivelse af periode
- Ingen instruktion om hvad du vil se
- Resultat: Generisk analyse der ikke passer

---

## Excel eksempel: Salgsanalyse

Du har et ark med salgsdata:

| Måned | Produkt A | Produkt B | Produkt C |
|-------|-----------|-----------|-----------|
| Jan | 45.000 | 32.000 | 18.000 |
| Feb | 52.000 | 35.000 | 21.000 |
| Mar | 48.000 | 38.000 | 25.000 |

**Prompt:**

```
Analysér dette salgsdata.

1. Hvilket produkt har højest total omsætning?
2. Hvilket produkt vokser hurtigst (% stigning jan-mar)?
3. Hvad er gennemsnitligt månedligt salg per produkt?
4. Lav et stacked column chart der viser alle tre produkter per måned
```

**Output:**

Copilot viser:
```
1. Produkt A har højest total: 145.000 kr
2. Produkt C vokser hurtigst: +38.9%
3. Gennemsnit: A=48.333, B=35.000, C=21.333
4. [Diagram genereres automatisk]
```

---

## Excel begrænsning: Tabelformat påkrævet

> **Husk:** Copilot i Excel kræver at dine data er formateret som tabel (Ctrl+T). Uden tabelformat kan Copilot ikke læse dine data.

Før du bruger Copilot i Excel:
1. Marker dine data
2. Tryk Ctrl+T (eller Cmd+T på Mac)
3. Bekræft at første række er headers
4. Nu kan Copilot læse dataen

---

## Copilot i Outlook

Copilot kan skrive emails, opsummere tråde og foreslå svar.

Spar tid på email-håndtering - især når du skal gennem mange beskeder efter ferie.

---

## Hvad Copilot kan gøre i Outlook

| Opgave | Kommando |
|--------|----------|
| **Skriv email** | "Skriv svar til denne email" |
| **Opsummér tråd** | "Hvad er hovedpunkterne i denne tråd?" |
| **Draft svar** | "Foreslå et venligt afslag" |
| **Omskriv** | "Gør denne email mere formel" |
| **Tidsbesparelse** | "Opsummér alle ulæste emails fra i dag" |

---

## Eksempel der virker

```
Skriv svar til denne email.

Tone: Venlig men professionel
Svar: Ja til mødet tirsdag kl 14
Tilføj: Bed om dagsorden på forhånd
Længde: Max 50 ord
```

**Resultat:** Email i din stil, klar til at sende med ét klik.

---

## Eksempel der fejler

```
Svar på emailen
```

**Hvorfor det fejler:**
- Ingen tone-angivelse
- Ingen specifikke punkter til at inkludere
- Ingen instruktion om længde
- Resultat: Generisk svar du skal omskrive

---

## Outlook eksempel: Kundeforespørgsel

En kunde skriver:
> "Hej, jeg har bestilt 50 stk af jeres produkt A til levering næste uge. Kan I levere inden torsdag? Mvh Peter"

**Prompt:**

```
Skriv svar til denne email.

Info:
- Vi kan levere [dato] (ikke [anden dato] som de skriver)
- Levering er gratis ved ordrer over [beløb] kr
- De skal bekræfte leveringsadresse

Tone: Professionel, hjælpsom
Struktur:
1. Bekræft ordren
2. Præcisér leveringsdato
3. Bed om bekræftelse af adresse
4. Afslut positivt

Max 80 ord
```

**Output:**

```
Hej Peter,

Tak for din ordre på 50 stk Produkt A. Vi kan levere allerede onsdag den [dato] med gratis fragt.

Kan du bekræfte din leveringsadresse, så vi sikrer korrekt levering?

Vi glæder os til at betjene jer.

Mvh,
[Dit navn]
```

---

## Copilot i Teams

Copilot kan opsummere møder, finde information i chat og generere opfølgninger.

**Vigtigt:** Teams skal have transkription slået til for at Copilot kan opsummere møder.

---

## Hvad Copilot kan gøre i Teams

| Opgave | Kommando |
|--------|----------|
| **Mødeopsamling** | "Opsummér dette møde i 5 punkter" |
| **Find beslutninger** | "Hvilke beslutninger blev truffet?" |
| **Action items** | "List alle opgaver med ansvarlig person" |
| **Chat-søgning** | "Find alle beskeder om projekt X" |
| **Catch up** | "Hvad skete der i chatten mens jeg var væk?" |

---

## Eksempel der virker

```
Opsummer mødet i 5 punkter.
Fremhæv beslutninger og action items.
Angiv hvem der er ansvarlig for hver action.
Format: Klar til at kopiere ind i projektdokument.
```

**Resultat:** Struktureret output klar til at dele med teamet.

---

## Eksempel der fejler

```
Opsummer mødet
```

**Hvorfor det fejler:**
- Ingen instruktion om format
- Ingen angivelse af længde
- Mangler fokus på beslutninger og action items
- Resultat: Lang opsummering du skal sortere manuelt

---

## Teams eksempel: Mødeopsamling

Efter et 45 min projektmøde med 6 deltagere:

**Prompt:**

```
Opsummer dette projektmøde.

Format:
## BESLUTNINGER
[Liste beslutninger]

## ACTION ITEMS
[Tabel med: Opgave | Ansvarlig | Deadline]

## PARKERET TIL SENERE
[Liste ting der blev udskudt]

## NÆSTE MØDE
[Dato og fokusområder]
```

**Output:**

```
## BESLUTNINGER
- Budget godkendt på 450.000 kr
- Launch dato: 1. marts 2024
- Ekstern konsulent hyres til UX

## ACTION ITEMS
| Opgave | Ansvarlig | Deadline |
|--------|-----------|----------|
| Kontakt 3 UX-bureauer | Maria | 20. dec |
| Opdater projektplan | Thomas | 18. dec |
| Review wireframes | Alle | Før juleferie |

## PARKERET TIL SENERE
- Mobile app (Q2 2024)
- Integration med CRM (evalueres i jan)

## NÆSTE MØDE
8. jan kl 10 - Review UX-forslag og godkend wireframes
```

Kopier direkte til Confluence/SharePoint.

---

## Begrænsninger på tværs af Office

| Begrænsning | Workaround |
|-------------|------------|
| **Excel:** Kræver tabelformat | Konverter data med Ctrl+T først |
| **PowerPoint:** Opfinder fakta | Giv konkrete tal i prompten, tjek output |
| **Teams:** Kræver transkription | Slå transkription til før møder starter |
| **Outlook:** Ingen adgang til personlige data | Copilot ser kun emailen, ikke din kalender |
| **Word:** Ingen faktatjek | Verificer altid tal, navne, datoer manuelt |
| **Generelt:** Password-beskyttede filer | Fjern beskyttelse før Copilot kan læse filen |

---

## Tidsbesparelser

Med Copilot i Microsoft 365 sparer du:

| Opgave | Uden Copilot | Med Copilot | Besparelse |
|--------|--------------|-------------|------------|
| Mødeopsamling | 15 min | 2 min | 13 min (87%) |
| Email-svar | 5 min | 1 min | 4 min (80%) |
| Rapport i Word | 60 min | 20 min | 40 min (67%) |
| Excel-analyse | 20 min | 5 min | 15 min (75%) |
| PowerPoint (5 slides) | 45 min | 15 min | 30 min (67%) |

**Realistisk besparelse:** 1-2 timer per dag for videnarbejdere.

---

## Øvelse (12 minutter)

**Excel (4 min):**

Åbn et Excel-ark med data (eller lav dummy-data). Konverter til tabel med Ctrl+T.

```
Analysér disse data.
Find gennemsnit, højeste og laveste værdi.
Lav et diagram der viser fordelingen.
```

**Outlook (3 min):**

Find en email i din indbakke. Brug Copilot:

```
Skriv et professionelt svar.
Bekræft jeg har modtaget beskeden.
Giv realistisk tidslinje for mit svar (2-3 dage).
Max 60 ord.
```

**Teams (5 min):**

Find et nyligt Teams-møde med transkription. Bed Copilot:

```
Opsummer mødet.
List beslutninger og action items.
Hvem er ansvarlig for hvad?
```

---

## Næste skridt

Gå tilbage til [Prompt Skolen oversigt](../README.md) for at udforske flere lektioner.

Eller start med **Lektion 1: 7 teknikker alle skal kunne** hvis du vil lære grundlæggende prompt-teknikker.

---

## Afsluttende tips

> **Husk:** Copilot er bedst når du allerede arbejder i Microsoft 365. Skift ikke workflow bare for at bruge Copilot.

**Gør dette:**
- Giv konkrete data (tal, navne, datoer)
- Vær specifik om format og længde
- Tjek altid output før du sender/deler
- Brug SIKT-modellen (Se Lektion 3, Modul 1)

**Undgå dette:**
- Vage prompts ("lav noget godt")
- Stole blindt på data Copilot genererer
- Glemme at konvertere Excel til tabel (Ctrl+T)
- Password-beskyttede filer uden at fjerne beskyttelse
