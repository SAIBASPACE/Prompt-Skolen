# Hukommelse og Custom GPTs

**Tid at lære:** 10 minutter
**Virker i:** ChatGPT Plus

---

## Hvad er hukommelse?

ChatGPT Plus kan huske information mellem samtaler.

I stedet for at skrive "Jeg arbejder som HR-chef hos TechPro med 50 ansatte" hver gang, skriver du det én gang. ChatGPT husker det i alle fremtidige samtaler.

---

## Hvorfor virker det?

Uden hukommelse gentager du kontekst i hver prompt:
- Hvem du er
- Din virksomhed
- Jeres tone
- Værktøjer I bruger

Med hukommelse skriver du kun opgaven. ChatGPT kender allerede konteksten.

**Resultat:** 30-60 sekunder sparet per prompt.

---

## Sådan sætter du hukommelse op

### Første gang

Fortæl ChatGPT hvad den skal huske:

```
Husk: Jeg hedder Maria, arbejder som marketingchef hos GreenTech.
Vi sælger bæredygtige emballageløsninger til fødevareindustrien.
Vi har 25 ansatte og bruger HubSpot som CRM.
Vores tone er professionel men jordnær - ingen buzzwords.
```

ChatGPT svarer: "Jeg har gemt det. Jeg vil huske det til næste gang."

---

## Tjek hvad ChatGPT husker

Når som helst kan du spørge:

```
Hvad husker du om mig?
```

ChatGPT viser en liste over alt den har gemt.

---

## Opdater hukommelse

```
Husk også: Vi lancerede nyt produkt "EcoPack" i marts 2024.
Det reducerer plastik med 40% sammenlignet med standard emballage.
```

Eller ret eksisterende info:

```
Opdater: Vi har nu 30 ansatte (ikke 25).
```

---

## Slet hukommelse

Vil du starte forfra?

```
Glem alt om mig
```

ChatGPT sletter alle gemte oplysninger.

---

## Sammenligning

```
Skriv en LinkedIn-post om vores nye produkt
```

```
Husk: Jeg arbejder hos GreenTech, vi sælger bæredygtig emballage.
Vores nye produkt hedder EcoPack og reducerer plastik med 40%.
Tone: Professionel men jordnær, ingen buzzwords.

Skriv en LinkedIn-post om vores nye produkt
```

**Med hukommelse:** Du skriver kun første linje. ChatGPT kender resten.

**Uden hukommelse:** Du gentager kontekst i hver prompt.

---

## Hukommelse i praksis

### Eksempel 1: Email-skrivning

**Første gang (med hukommelse):**
```
Husk: Vi sender altid mødebekræftelser samme dag.
Format: Bekræft dato/tid, vedhæft dagsorden, slut med "Glæder mig".
Max 80 ord.
```

**Fremover:**
```
Skriv mødebekræftelse til Peter - tirsdag kl 14
```

ChatGPT bruger automatisk dit format.

---

### Eksempel 2: Kunde-kommunikation

**Første gang:**
```
Husk: Vores standardsvar til kundeforespørgsler:
- Bekræft modtagelse inden for 4 timer
- Giv konkret tidslinje for svar
- Undgå "vi beklager ulejligheden" - vær proaktiv
- Sign off: "Med venlig hilsen, [mit navn] - Kundeservice"
```

**Fremover:**
```
Kunde spørger om leveringstid på ordre #4521
```

ChatGPT følger dine retningslinjer automatisk.

---

## Custom GPTs (kun Plus)

Custom GPTs er specialiserede assistenter du kan bygge eller bruge.

Tænk på dem som en kollega der er ekspert i præcis ét område.

---

## Populære Custom GPTs

| GPT | Hvad den gør |
|-----|--------------|
| **Consensus** | Videnskabelig research med kilder fra artikler |
| **Canva** | Design grafik direkte i ChatGPT |
| **Zapier** | Forbind ChatGPT til dine værktøjer |
| **WebPilot** | Avanceret web-søgning og analyse |
| **Code Tutor** | Lær programmering med øvelser |

Find dem under "Explore GPTs" i ChatGPT Plus.

---

## Byg din egen Custom GPT

### Trin-for-trin guide

**1. Klik "Create a GPT"** i ChatGPT Plus

**2. Definer formål**
```
Dette er en skriveassistent til [Firma].
Den skriver emails, opslag og dokumenter i vores tone.
```

**3. Giv instruktioner**
```
Instruktioner:
- Brug altid dansk (ingen engelske buzzwords)
- Max 15 ord per sætning
- Professionel men afslappet tone
- Undgå "I en verden hvor..." og lignende klichéer
- Sign off: "Mvh, [navn] - [titel]"
```

**4. Upload viden**
- Brand guidelines (PDF)
- Gode eksempler på tekst
- Produktbeskrivelser
- FAQ dokument

**5. Test og juster**

Prøv forskellige prompts. Ret instruktionerne hvis output er forkert.

---

## Eksempel: Virksomheds-GPT

### Setup

**Navn:** TechPro Skriveassistent

**Beskrivelse:** Skriver emails, dokumenter og social media i TechPros tone.

**Instruktioner:**
```
Du er skriveassistent for TechPro, en dansk IT-konsulentvirksomhed med 20 ansatte.

Regler:
- Skriv altid på dansk
- Professionel men jordnær tone
- Max 100 ord medmindre andet specificeres
- Inkludér konkret handling i alle emails
- Undgå: "Jeg håber denne email finder dig vel", buzzwords, klichéer

Produkter:
- Cloud migration (Azure, AWS)
- Microsoft 365 implementering
- IT-support abonnementer

Kunder:
- SMV'er (10-100 ansatte)
- Primært Jylland
```

**Viden uploadet:**
- Brand guide (PDF)
- 10 gode email-eksempler
- Produktbeskrivelser

---

## Hvornår skal du lave en Custom GPT?

### Lav en GPT hvis:

✓ **Du har samme type opgave gentagne gange** - Email-format, rapportskrivning
✓ **Dit team skal bruge samme prompts** - Sikrer konsistens på tværs af medarbejdere
✓ **Du har specifik viden** - Upload brand guide, produktinfo, processer
✓ **Du vil dele med andre** - Kollegaer kan bruge din GPT uden at lære prompten

### Brug standard ChatGPT hvis:

○ **Engangsopgaver** - Ikke værd at bygge en GPT
○ **Varierede opgaver** - Ingen gentagelse eller mønster
○ **Simpel kontekst** - Hukommelse er nok

---

## Øvelse (10 minutter)

**Del 1 (5 min):** Sæt hukommelse op med din arbejdskontekst:
- Dit navn og rolle
- Virksomhed og antal ansatte
- Værktøjer I bruger
- Tone I skriver i

**Del 2 (5 min):** Test hukommelsen. Bed ChatGPT om en email uden at specificere firma eller tone. Tjek om den bruger din gemte kontekst.

**Bonus:** Hvis du har tid, find en Custom GPT i "Explore GPTs" der er relevant for dit arbejde. Test den.

---

## Næste lektion

[03 - Fil-upload og Avanceret →](./03-fil-upload-og-avanceret.md)
