---
title: Gids z-scores voor piloten
description: Het geheime recept om uitschieters op te sporen
category: Cockpit
order: 3
---

*Of: hoe je wiskundig bewijst dat je favoriete startplaats de rit echt waard is*

## Wat is een z-score in godsnaam?

Je kent die vriend die altijd opschept over zijn „epische“ vlieggebieden, terwijl jij vrij zeker bent dat het vooral hete lucht is? Z-scores zijn de wiskundige onzindetector waar je op zat te wachten.

**De korte versie:** een z-score vertelt hoe ongewoon een meetpunt is vergeleken met de rest van je data. Eigenlijk vraagt hij: „Is dit vlieggebied echt bijzonder, of herinner ik me gewoon die ene goede dag?“

**De formule (niet weglopen):**

```
Z-score = (jouw waarde - gemiddelde) / standaardafwijking
```

**Vertaald voor piloten:** hoeveel „standaardafwijkingen“ ligt dit ding van het gemiddelde?

---

## Stap voor stap (want we zijn niet allemaal wiskundenerds)

### De opzet

Stel dat je dit seizoen vanaf 10 verschillende startplaatsen gevlogen hebt. Je wilt weten welke je **echte** vaste plekken zijn en welke je toevallig één keer op een epische dag bezocht.

Hier is je data (gemiddelde vluchtduur per vlieggebied):

| Vlieggebied | Gem. duur (uren) |
|------|---------------------|
| Annecy | 2,5 |
| Chamonix | 3,8 |
| Verbier | 2,2 |
| Bassano | 5,0 | ← Hm, interessant
| Kössen | 2,4 |
| Interlaken | 2,6 |
| Pokhara | 1,8 |
| Saint-Hilaire | 2,7 |
| Bir | 2,3 |
| Oludeniz | 2,4 |

**Gemiddelde over alle vlieggebieden:** 2,77 uur
**Standaardafwijking:** 0,91 uur

### De berekening

We berekenen de z-score voor **Bassano** (want 5,0 uur is verdacht goed):

```
Z-Score = (5.0 - 2.77) / 0.91
Z-Score = 2.23 / 0.91
Z-Score = 2.45
```

**Wat betekent 2,45?**
- De gemiddelde duur in Bassano ligt 2,45 standaardafwijkingen **boven** het gemiddelde
- In je **Cockpit** verschijnt dit in de kolom **Z-score**
- Dit is statistisch significant (|z| > 2 = gebied van de uitschieters)
- Vertaling: Bassano is niet alleen goed, het is **echt uitzonderlijk**

Nu **Pokhara** (1,8 uur, voelt kort):

```
Z-Score = (1.8 - 2.77) / 0.91
Z-Score = -0.97 / 0.91
Z-Score = -1.07
```

**Wat betekent -1,07?**
- Pokhara ligt ongeveer 1 standaardafwijking **onder** het gemiddelde
- Niet vreselijk, maar ook niet geweldig
- Misschien trof je het op slechte dagen, of misschien is het gewoon een plek voor glijvluchtjes naar beneden

---

## De decodeerring voor z-scores

Zo lees je je z-scores:

| Bereik van de z-score | Wat het betekent | Vertaald voor piloten |
|---------------|---------------|-------------------|
| **z > +2,0** | Extreme uitschieter (positief) | 🌟 **Dit vlieggebied is ZOT goed**: de rit van 3 uur waard |
| **+1,0 tot +2,0** | Boven het gemiddelde | 👍 Degelijk vlieggebied, hier scoor je meestal |
| **-1,0 tot +1,0** | Vrij gemiddeld | 🤷 Mwah. De omstandigheden tellen meer dan de plek |
| **-2,0 tot -1,0** | Onder het gemiddelde | 👎 Hier sta je waarschijnlijk vaak snel beneden |
| **z < -2,0** | Extreme uitschieter (negatief) | 💀 **Vermijden, tenzij je graag meteen op de landingsplaats staat** |

---

## Waarom z-scores ertoe doen (vanuit de cockpit van de piloot)

### Probleem 1: de valkuil van „weet je nog, die ene keer?“

Jij: „Man, ik vlieg ZO graag vanaf [willekeurig vlieggebied]. Het is geweldig!“
Je brein: *herinnert zich die ENE epische XC van 6 uur van 3 jaar geleden en vergeet handig de 15 glijvluchtjes naar beneden*

**De oplossing met z-scores:** is de z-score van het vlieggebied negatief of bijna nul, dan liegt je brein tegen je. De data liegt niet: je staat daar meestal snel beneden.

### Probleem 2: gesjoemel met steekproefgroottes

Je hebt één keer in Bassano gevlogen (5 uur, episch) en 47 keer op je eigen heuvel (gemiddeld 2,1 uur).

Wat is beter? Moeilijk te zeggen zonder context, toch?

**De oplossing met z-scores:** de z-score houdt rekening met **de hele dataset**, zodat je appels met peren kunt vergelijken. Hij vraagt: „Vergeleken met AL mijn vlieggebieden, hoe scoort dit er een?“

### Probleem 3: het rechtvaardigingsstation

Je wilt die rit van 4 uur rechtvaardigen tegenover je partner, je baas of je smoesje „ik werk vandaag thuis“.

**De oplossing met z-scores:** print je Cockpit-statistieken met een z-score van +2,8 voor dat vlieggebied. „Kijk, schat, het is niet alleen leuk, het is STATISTISCH SIGNIFICANT leuk. Dit is wetenschap.“

---

## Hoe We-Fly z-scores gebruikt

### In het Cockpit-dashboard

Open je de weergave **Startplaats** van je **Cockpit**, dan zie je voor elke startplaats een **Z-score**. Die wordt berekend uit je **gemiddelde vluchtduur per vlieggebied** (de verhouding tussen het totale aantal uren en het aantal vluchten).

```typescript
// From src/lib/utils.ts
export function computeZScore(dataSerie: chartData[]) {
  // For each takeoff site
  for (let indexx = 0; indexx < dataSerie.length; indexx++) {
    // Calculate the average ratio (avg hours per flight) across all sites
    let avg_ratio = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      avg_ratio += dataSerie[index].ratio;
    }
    avg_ratio = avg_ratio / dataSerie.length;

    // Calculate the standard deviation
    let sum_deviations = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      sum_deviations += Math.pow(dataSerie[index].ratio - avg_ratio, 2);
    }
    let deviation = Math.sqrt(sum_deviations / dataSerie.length);

    // Calculate z-score: (this site's ratio - average) / std deviation
    // (rounded to one decimal)
    dataSerie[indexx].z = deviation === 0
      ? 0
      : Number(((dataSerie[indexx].ratio - avg_ratio) / deviation).toFixed(1));
  }
}
```

### Wat we echt meten

- **Waarde:** gemiddeld aantal uren per vlucht voor elke startplaats
- **Gemiddelde:** je algemene gemiddelde vluchtduur over alle vlieggebieden
- **Standaardafwijking:** hoe ver je vliegtijden uit elkaar liggen
- **Z-score:** hoe uitzonderlijk (of rampzalig) elk vlieggebied is

### Uitschieters opsporen

In het commentaar van de code staat: „Waarden met |z| > 2 gelden als statistische uitschieters.“

Dat betekent:
- **z > +2**: dit vlieggebied is een uitschieter in de GOEDE zin (je blijft veel langer in de lucht dan gemiddeld)
- **z < -2**: dit vlieggebied is een uitschieter in de SLECHTE zin (je landt veel vroeger dan gemiddeld)

### Een echt voorbeeld uit je Cockpit

Stel dat je de weergave **Startplaats** opent en dit ziet:

| Startplaats | Vluchten | Totaal uren | Gem./vlucht | **Z-score** |
|------------------|---------|-------------|------------|-------------|
| Mont Blanc | 8 | 45,5 u | 5,69 u | **2,80** 🌟 |
| Eigen heuvel | 42 | 67,2 u | 1,60 u | **-0,50** 😐 |
| Die ene keer | 1 | 3,2 u | 3,20 u | **0,40** 🤷 |

De Cockpit rondt elke z-score af op één decimaal, dus een vlieggebied op 2,84 verschijnt als 2,80.

**Wat dit je vertelt:**
1. **Mont Blanc (z = +2,8):** allemachtig, dit vlieggebied is een statistische eenhoorn. Elke keer dat je hier vliegt, ben je zo goed als zeker van een lange vlucht. Boek die Airbnb NU.

2. **Eigen heuvel (z = -0,5):** iets onder het gemiddelde, maar niet slecht. Het ligt dichtbij en je maakt uren. Blijf er oefenen, maar verwacht geen epische vluchten.

3. **Die ene keer (z = +0,4):** licht boven het gemiddelde, maar je hebt er maar één keer gevlogen. Kan geluk zijn. Je hebt meer data nodig om te weten of het echt goed is.

---

## De kleine lettertjes (randgevallen en valkuilen)

### Wanneer z-scores tekortschieten

**1. Kleine steekproeven**
- Eén keer 6 uur gevlogen op een vlieggebied? De z-score is misschien +3,0, maar dat is gewoon geluk
- **Oplossing:** kijk naar het aantal vluchten. Is dat laag (< 5 vluchten), neem de z-score dan met een korrel zout

**2. Alle waarden zijn gelijk**
- Heeft elk vlieggebied gemiddeld precies 2,5 uur, dan is de standaardafwijking nul
- Delen door nul kan niet, dus is de z-score overal 0
- **Oplossing:** de code vangt dit op: `deviation === 0 ? 0 : (value - avg) / deviation`

**3. Seizoensvertekening**
- Je vliegt vlieggebied A alleen in de zomer en vlieggebied B alleen in de winter
- De z-scores zeggen dan misschien meer over het **seizoen** dan over de **kwaliteit van het vlieggebied**
- **Oplossing:** gebruik filters! Filter op seizoen of periode om appels met appels te vergelijken

**4. Verschillende vliegstijlen**
- Vlieggebied A is geweldig voor XC (lange vluchten)
- Vlieggebied B is perfect voor acro (korte vluchten)
- De z-score bevoordeelt A, maar dat maakt B niet „slecht“
- **Oplossing:** filter op type vlucht als die gegevens beschikbaar zijn

---

## Z-scores in andere contexten (want we zijn nog niet klaar)

### Per scherm

Met welk scherm maak je de langste vluchten?

- **Scherm A:** z = +1,8 → boven het gemiddelde, waarschijnlijk een goed XC-scherm
- **Scherm B:** z = -0,3 → iets onder het gemiddelde, misschien je oude afgeleefde lap

### Per maand

Wanneer boek je best je vakantie?

- **Juli:** z = +2,1 → een maand die steevast episch is, neem vrij
- **November:** z = -1,5 → een rotmaand, blijf thuis en onderhoud je materiaal

### Per land

Welke vliegbestemming is het vliegtuigticket waard?

- **Frankrijk:** z = +1,2 → vliegtijden boven het gemiddelde
- **Dat willekeurige eiland:** z = -2,0 → prachtig, maar je vliegt er niet veel

---

## Beslissingen in het echte leven

### Scenario 1: het roadtripdebat

Je maat wil 5 uur rijden naar een nieuw vlieggebied. Je kijkt in je Cockpit:

- **Nieuw vlieggebied:** 1 vlucht, gem. 4,5 u, z = +1,5 (maar maar 1 vlucht!)
- **Vlieggebied in de buurt:** 23 vluchten, gem. 3,2 u, z = +1,8

**Beslissing:** het vlieggebied in de buurt heeft een hogere z-score EN meer data. Dat is de veiligste gok voor een goede dag. Bewaar de rit van 5 uur voor als je meer data over het nieuwe vlieggebied hebt.

### Scenario 2: een scherm kopen

Je twijfelt tussen twee schermen op basis van je gelogde vluchten:

- **Huidig scherm:** 89 vluchten, gem. 2,1 u, z = -0,4 (iets onder je gemiddelde)
- **Scherm van een vriend (twee keer geleend):** 2 vluchten, gem. 3,5 u, z = +1,2

**Beslissing:** koop het scherm van je vriend niet op basis van 2 vluchten. De z-score ziet er goed uit, maar de steekproef is te klein. Kan geluk zijn, of je vriend is gewoon een betere piloot dan jij.

### Scenario 3: bewijzen dat je niet gek bent

Je partner: „Je rijdt elk weekend 2 uur naar dat vlieggebied. Is dat het wel waard?“

Jij: „Kijk eens. Z-score van +2,3. Ik vlieg daar gemiddeld 4,2 uur, tegen 2,1 uur op de heuvel hier. Dat is statistisch significant. Ik vlieg TWEE keer zo lang voor 2 uur rijden. De wiskunde klopt.“

**Resultaat:** je partner vindt je nog altijd gek, maar nu heb je tenminste DATA.

---

## Waar het op neerkomt (TL;DR voor ongeduldige piloten)

**Wat is een z-score?**
Een maat voor hoe ongewoon een waarde is vergeleken met je gemiddelde. Hij is genormaliseerd met de standaardafwijking, zodat je verschillende dingen kunt vergelijken.

**Waarom gebruiken we hem?**
Om te zien welke startplaatsen (of schermen, of maanden, of landen) **echt uitzonderlijk** zijn, en welke gewoon eenmalig geluk waren.

**Hoe lees ik hem?**
- **Positieve z-score:** boven het gemiddelde (goed!)
- **Negatieve z-score:** onder het gemiddelde (mwah)
- **|z| > 2:** statistische uitschieter (extreem!)
- **|z| < 1:** vrij normaal (gemiddeld)

**Waar zie ik hem?**
In je **Cockpit**, in de kolom **Z-score** van de weergaven **Startplaats**, **Scherm**, **Land** en **Seizoen**, en als de metriek **Z-score** in de weergave **Maand**.

**Wat doe ik ermee?**
Gebruik hem om slimmer te beslissen waar je vliegt, met welk materiaal en wanneer je je reizen plant. De z-score is je datagedreven wingman.

---

## Bijlage: de wiskunde (voor de nerds achteraan)

### Volledig uitgewerkt voorbeeld

Dataset: gemiddelde vlieguren per vlieggebied

```
Sites: [2.5, 3.8, 2.2, 5.0, 2.4, 2.6, 1.8, 2.7, 2.3, 2.4]
```

**Stap 1: bereken het gemiddelde**
```
Mean = (2.5 + 3.8 + 2.2 + 5.0 + 2.4 + 2.6 + 1.8 + 2.7 + 2.3 + 2.4) / 10
Mean = 27.7 / 10 = 2.77 hours
```

**Stap 2: bereken de standaardafwijking**
```
Std Dev = √( Σ(x - mean)² / N )

For each value, compute (x - mean)²:
(2.5 - 2.77)² = 0.073
(3.8 - 2.77)² = 1.061
(2.2 - 2.77)² = 0.325
(5.0 - 2.77)² = 4.973  ← Bassano
(2.4 - 2.77)² = 0.137
(2.6 - 2.77)² = 0.029
(1.8 - 2.77)² = 0.941
(2.7 - 2.77)² = 0.005
(2.3 - 2.77)² = 0.221
(2.4 - 2.77)² = 0.137

Sum = 7.902
Std Dev = √(7.902 / 10) = √0.790 = 0.889 hours
```

**Stap 3: bereken de z-scores**
```
Z(Bassano) = (5.0 - 2.77) / 0.889 = +2.51 🌟
Z(Pokhara) = (1.8 - 2.77) / 0.889 = -1.09 👎
Z(Annecy) = (2.5 - 2.77) / 0.889 = -0.30 🤷
```

---

## Nog één ding: z-scores liegen niet, maar context telt

Een z-score vertelt je **wat ongewoon is**, niet **waarom het ongewoon is**.

- Vlieggebied met een hoge z-score? Kan aan geweldige omstandigheden liggen, of je vliegt er alleen op perfecte dagen
- Maand met een lage z-score? Kan aan slecht weer liggen, of je was die maand geblesseerd
- Scherm met een hoge z-score? Kan een beter scherm zijn, of je voelt je er zelfzekerder onder

**Kijk altijd naar:**
1. De steekproefgrootte (meer vluchten = betrouwbaardere z-score)
2. De context (filters, periodes, soorten vluchten)
3. Je eigen geheugen (VOELT dit juist?)

Z-scores zijn een gereedschap, niet de waarheid. Maar wel een verdomd goed gereedschap om door de onzin heen te snijden en het signaal in de ruis te vinden.

Ga nu vliegen! En als je vrienden vragen waarom je 3 uur rijdt naar dat ene vlieggebied, zeg je vol vertrouwen: „Omdat de z-score +2,6 is, man. WETENSCHAP.“

---

*„Op statistiek vertrouwen we, maar thermiek moeten we zelf vinden.“*
*- Elke datanerd onder de piloten*
