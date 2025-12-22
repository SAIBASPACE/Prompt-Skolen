# Copilot i Word og PowerPoint

**Tid at lære:** 10 minutter
**Virker i:** Microsoft 365 Copilot

---

## Copilot i Word

Copilot kan skrive, omskrive og opsummere direkte i Word-dokumenter.

Det er som at have en kollega der skriver første udkast mens du fokuserer på at raffinere indholdet.

---

## Hvad Copilot kan gøre i Word

| Opgave | Kommando |
|--------|----------|
| **Skriv nyt** | "Skriv et udkast til..." |
| **Opsummér** | "Opsummér dette dokument i 5 punkter" |
| **Omskriv** | "Gør denne tekst mere formel" |
| **Udvid** | "Udvid dette afsnit med mere detaljer" |
| **Forkort** | "Gør denne tekst 50% kortere" |

---

## Eksempel der virker

```
Skriv en projektbeskrivelse til en ny hjemmeside.

Kunde: Lokal tømrervirksomhed med 8 ansatte
Mål: Flere kundehenvendelser via kontaktformular
Indhold: Forside, services, galleri, kontakt
Tone: Professionel men jordnær
Længde: 300-400 ord
```

**Resultat:** Brugbart første udkast på 30 sekunder. Klar til at raffinere.

---

## Eksempel der fejler

```
Skriv noget om en hjemmeside
```

**Hvorfor det fejler:**
- Copilot ved ikke hvem kunden er
- Kender ikke målet med projektet
- Ingen instruktion om tone eller længde
- Generisk output der ikke passer

---

## Word eksempel: Projektbeskrivelse

**Prompt:**

```
Skriv en projektbeskrivelse til vores nye CRM-implementering.

Baggrund:
- Vi er produktionsvirksomhed med 50 ansatte
- Bruger i dag Excel til kundedata
- Skal implementere HubSpot

Omfatter:
- Migration af eksisterende data
- Træning af salgsteam (5 personer)
- Integration med vores ERP-system

Tidslinje: 3 måneder
Budget: 150.000 kr

Format: Dokument til ledelsen (ikke-teknisk sprog)
Længde: 2-3 sider
```

**Output:**

Copilot laver et struktureret dokument med:
- Executive summary
- Baggrund og formål
- Scope og leverancer
- Tidslinje og milepæle
- Budget breakdown
- Risici og afhjælpning

Du retter detaljer og sender til ledelsen.

---

## Copilot i PowerPoint

Copilot kan generere præsentationer fra tekst eller dokumenter.

Upload et Word-dokument eller skriv nøglepunkter - Copilot laver slides med design.

---

## Hvad Copilot kan gøre i PowerPoint

| Opgave | Kommando |
|--------|----------|
| **Ny præsentation** | "Lav en præsentation om..." |
| **Fra dokument** | "Lav slides baseret på dette Word-dokument" |
| **Tilføj slides** | "Tilføj 3 slides om konkurrenter" |
| **Omdesign** | "Gør designet mere moderne" |
| **Opsummér** | "Lav et resume-slide af præsentationen" |

---

## Eksempel der virker

```
Lav en præsentation om vores Q3-resultater.

Indhold:
- Omsætning: 12.4 mio (op 15%)
- Nye kunder: 47
- Største udfordring: leveringstider
- Fokusområder Q4: Jylland, online marketing

Stil: Professionel, minimal (ikke for mange farver)
Antal slides: 6-8
Inkluder: Grafer hvor relevant, konkret action plan til sidst
```

**Resultat:** Struktur og layout med korrekte data. Klar til at præsentere.

---

## Eksempel der fejler

```
Lav en præsentation om Q3
```

**Hvorfor det fejler:**
- Copilot opfinder tal fordi du ikke giver dem
- Ingen instruktion om stil eller længde
- Resultat: Du bruger mere tid på at rette end du sparede

---

## PowerPoint eksempel: Salgspræsentation

**Prompt:**

```
Lav en salgspræsentation til potentielle kunder.

Om os:
- IT-konsulentvirksomhed, 20 ansatte
- Speciale: Microsoft 365 implementering og support
- Kunder: Danske SMV'er (10-100 ansatte)

USP:
- Implementering på under 2 uger (konkurrenter: 2-3 måneder)
- Fast kontaktperson (ikke callcenter)
- Dansk support på hverdage 8-17

Slides:
1. Hvem er vi
2. Jeres udfordringer (generisk SMV IT-problemer)
3. Vores løsning
4. Case: Kunde der sparede 15 timer/uge
5. Proces og tidslinje
6. Priser (3 pakker)
7. Næste skridt

Stil: Professionel men ikke stiv, visuals > tekst
```

**Output:**

Copilot laver 7 slides med:
- Passende design
- Struktur der giver mening
- Bullet points baseret på dit input
- Forslag til billeder/ikoner

Du tilpasser tekst, tilføjer logo, og præsentationen er klar.

---

## Vigtigt: Copilot's begrænsninger i Office

> **Husk:** Copilot i PowerPoint er bedst til struktur og layout. Tjek altid fakta og tal manuelt.

### PowerPoint

- **Opfinder data** hvis du ikke giver konkrete tal
- **Generic design** - tilpas farver/font til jeres brand
- **Billedvalg** kan være off-brand

### Word

- **Ingen faktatjek** - verificer altid tal, datoer, navne
- **Generic tone** - omskriv til jeres voice
- **Mangler nuancer** - tilføj industri-specifik viden

---

## Tips til bedre resultater

### Giv Copilot konkret data

❌ **Dårligt:** "Lav en rapport om vores salg"

✓ **Godt:**
```
Lav en salgsrapport for Q3.

Data:
- Total salg: 5.1 mio (op 23% fra Q2)
- Nye kunder: 47
- Top produkt: Premium-serien (2.4 mio)
- Udfordring: Jylland kun 45% markedsandel

Målgruppe: Ledelsen (ikke-teknisk)
Længde: 3 sider
Inkluder: Executive summary, grafer, anbefalinger til Q4
```

### Vær specifik om format

❌ **Dårligt:** "Lav et dokument"

✓ **Godt:**
```
Format:
- Executive summary (max 100 ord)
- 3 hoveds ektioner med underoverskrifter
- Tabel med nøgletal
- Afsluttende anbefalinger (bullet points)
```

---

## Øvelse (10 minutter)

**Word (5 min):**

Åbn et tomt Word-dokument. Brug Copilot til at skrive et udkast til:

```
Skriv en email om juleferie til dit team.

Info:
- Kontoret lukker [startdato] til [slutdato]
- Nødtelefon: [nummer]
- Kunder skal informeres inden [dato]

Tone: Professionel men varm
Længde: Max 150 ord
```

Sammenlign med hvad du selv ville skrive. Hvad skal justeres?

**PowerPoint (5 min):**

Åbn PowerPoint. Brug Copilot til at lave en præsentation om et projekt du arbejder på:

```
Lav en præsentation om [projektnavn].

Slides:
1. Hvad er projektet
2. Hvorfor gør vi det
3. Hvem er involveret
4. Tidslinje
5. Næste skridt

Stil: Simpel, max 3-4 bullets per slide
```

Hvor meget skal du redigere før præsentationen er klar?

---

## Næste lektion

[03 - Excel, Outlook og Teams →](./03-excel-outlook-teams.md)
