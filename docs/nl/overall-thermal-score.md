---
title: De algemene thermiekscore uitgelegd
description: Hoe we de kwaliteit van een thermiek berekenen, met een uitgewerkt voorbeeld
category: Thermal Analysis
order: 4
---

Ooit die kwaliteitsscore in de geavanceerde thermiekanalyse gezien en je afgevraagd of hij echt iets betekent? Goed nieuws: dat doet hij. Het is niet zomaar een gevoel. We pluizen precies uit hoe dat getal berekend wordt, zodat je begrijpt wat „Redelijk“ van „Uitstekend“ scheidt, en wat je eraan kunt doen.

## Het grote plaatje

De algemene thermiekscore (0-100) is een gewogen combinatie van vijf factoren:

| Factor | Gewicht | Wat hij meet |
|--------|--------|------------------|
| **Stijging** | 30% | Hoe sterk was de stijgende lucht? |
| **Efficiëntie** | 20% | Hoe recht steeg je? |
| **Centrering** | 20% | Hoe goed bleef je in de kern? |
| **Regelmaat** | 15% | Hoe stabiel waren de waarden van je vario? |
| **Volgehouden** | 15% | Heb je de thermiek echt uitgewerkt? |

Elke factor wordt genormaliseerd naar een schaal van 0 tot 1, vermenigvuldigd met zijn gewicht, en daarna wordt het geheel geschaald naar 0-100. Eenvoudig in theorie, veelzeggend in de praktijk.

De factor **Volgehouden** is cruciaal: hij voorkomt hoge scores voor korte doorkomsten. 15 seconden door sterke stijgende lucht vliegen bewijst geen thermiektalent; echt rondjes draaien en de thermiek uitwerken wel.

---

## De formule

Dit is de echte berekening uit de code:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

### Hoe elk onderdeel berekend wordt

**1. Stijgscore**
```
climbScore = min(1, climbrate / 3.0)
```
Je gemiddelde stijgsnelheid gedeeld door 3,0 m/s (met 1 als maximum). Dus 3 m/s of beter = perfecte score. Minder = evenredig lager.

**2. Efficiëntiescore**
```
efficiencyScore = heightGain / horizontalDistance
```
Al een waarde tussen 0 en 1. Perfecte efficiëntie (recht omhoog) = 1,0. Hoe meer je horizontaal wegdrijft, hoe lager hij wordt.

**3. Centreerscore**
```
centeringScore = centeringQuality
```
Die komt uit het algoritme voor de kernanalyse: hoeveel tijd je in de buurt van de beste plek van de thermiek doorbracht. Al tussen 0 en 1.

**4. Regelmaatscore**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Het omgekeerde van de variatie van je vario (de standaardafwijking van de stijgwaarden). Gladde thermiek = hoge score. Heen en weer tussen +5 en -2 m/s = lage score. Een variatie van 2 m/s of meer = geen bijdrage voor regelmaat.

**5. Score volgehouden**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combineert duur en aantal rondjes om echt thermiekwerk te belonen. Voor de volle score heb je ongeveer 90 seconden EN minstens 2 volledige rondjes nodig. Een doorkomst van 15 seconden zonder rondjes scoort hier bijna nul, ook als de andere meetwaarden er geweldig uitzien.

---

## Uitgewerkt voorbeeld: thermiek nr. 9

We lopen een echte berekening door met concrete getallen. Stel dat je een thermiek uitwerkte met deze cijfers:

| Meetwaarde | Waarde |
|--------|-------|
| Stijgsnelheid | 2,15 m/s |
| Efficiëntie | 0,41 (41%) |
| Centrering | 0,53 (53%) |
| Variatie | 0,92 m/s |
| Duur | 75 seconden |
| Aantal rondjes | 3 rondjes |

### Stap 1: bereken de score van elk onderdeel

**Stijgscore:**
```
climbScore = min(1, 2.15 / 3.0)
climbScore = min(1, 0.717)
climbScore = 0.717
```
Je stijgsnelheid van 2,15 m/s is 71,7% van de „perfecte“ maatstaf van 3,0 m/s.

**Efficiëntiescore:**
```
efficiencyScore = 0.41
```
Al genormaliseerd. Je won 41% zoveel hoogte als je horizontaal aflegde. Vrij typisch voor een thermiek met veel drift.

**Centreerscore:**
```
centeringScore = 0.53
```
Je zat ongeveer de helft van de tijd in behoorlijke stijgende lucht. Ruimte voor verbetering, maar niet slecht.

**Regelmaatscore:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Een variatie van 0,92 m/s op je vario betekent dat de stijgende lucht wat turbulent was, maar niet gek.

**Score volgehouden:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Je bleef 75 seconden en draaide 3 volledige rondjes: degelijk thermiekwerk.

### Stap 2: pas de gewichten toe

Vermenigvuldig nu elke score met zijn gewicht:

| Onderdeel | Score | Gewicht | Bijdrage |
|-----------|-------|--------|--------------|
| Stijging | 0,717 | 0,30 | 0,215 |
| Efficiëntie | 0,41 | 0,20 | 0,082 |
| Centrering | 0,53 | 0,20 | 0,106 |
| Regelmaat | 0,54 | 0,15 | 0,081 |
| Volgehouden | 0,833 | 0,15 | 0,125 |
| **Totaal** | | | **0,609** |

### Stap 3: schaal naar 0-100

```
qualityScore = round(0.609 * 100) = 61
```

**Resultaat: algemene score van 61**, stevig in de zone „Goed“.

---

## Je score interpreteren

| Scorebereik | Beoordeling | Wat het betekent |
|-------------|--------|---------------|
| **70-100** | Uitstekend | Thermieken op wedstrijdniveau. Je vond de kern snel en bleef erin. |
| **50-69** | Goed | Degelijk werk. Je haalde de hoogte zonder al te veel tijd te verliezen. |
| **25-49** | Redelijk | Klus geklaard, maar je liet wat prestaties liggen. |
| **0-24** | Zwak | Moeite om de kern te vinden of erin te blijven, of de omstandigheden waren echt beroerd. |

---

## Wat elk onderdeel je vertelt

### Stijging (gewicht 30%)

Dit weegt het zwaarst omdat... nou ja, het draait allemaal om omhoog gaan. Maar maak je er niet te druk om: soms levert een thermiek van 1,5 m/s die je perfect uitwerkt meer XC-kilometers op dan een thermiek van 4,0 m/s waar je steeds uit valt.

**Lage stijgscore?**
- De thermiek was echt zwak (niet jouw schuld)
- Je zat te lang aan de randen (kijk naar je centrering)
- Je kwam te laat op het feestje en pikte alleen de top mee

### Efficiëntie (gewicht 20%)

Efficiëntie = gewonnen hoogte / afgelegde horizontale afstand. Een perfecte spiraal recht omhoog zou 1,0 scoren (en is bij echte wind ook onmogelijk).

Typische waarden:
- **0,3-0,4**: normaal, wat drift
- **0,5-0,6**: heel goed, krappe rondjes
- **0,6+**: uitstekend, minimale drift

**Lage efficiëntie?**
- Sterke wind die je opzij duwt
- Brede rondjes of een slechte hellingshoek
- Met de wind mee binnenkomen en nooit corrigeren

### Centrering (gewicht 20%)

Hoeveel tijd je in het goede spul zat in plaats van aan de randen te dwalen. Berekend met een exponentieel verval van de afstand tot de kern: hoe verder van het centrum, hoe sneller je score daalt.

**Lage centrering?**
- Het duurde even voor je de kern vond
- Je dreef steeds weg en moest opnieuw centreren
- De kern verplaatste zich (bubbelthermiek) of was heel klein

### Regelmaat (gewicht 15%)

Gebaseerd op de standaardafwijking van de waarden van je vario. Gladde, gelijkmatige piep = hoge score. Vario die door het dolle heen is = lage score.

**Lage regelmaat?**
- Turbulente thermiek (niet altijd jouw schuld)
- Je vloog steeds door de kern heen en er aan de andere kant weer uit
- Stijgende en dalende lucht door elkaar in hetzelfde rondje

### Volgehouden (gewicht 15%)

Combineert duur en aantal rondjes om te bewijzen dat je de thermiek echt uitwerkte in plaats van er gewoon door te vliegen. 10 seconden door 4 m/s vliegen is geen thermieken, dat is geluk. Deze factor beloont piloten die zich aan de thermiek wagen en hem goed uitwerken.

Voor de volle score heb je nodig:
- **ongeveer 90 seconden** duur (kortere thermieken scoren evenredig minder)
- **2+ volledige rondjes** (minder rondjes scoren evenredig minder)

De twee factoren worden met elkaar vermenigvuldigd, dus je hebt ze ALLEBEI nodig om hier goed te scoren. Een rechte glijvlucht van 2 minuten door stijgende lucht (0 rondjes) scoort nul. Eén snelle 360 in zwakke stijgende lucht (10 seconden) scoort ook bijna nul.

**Lage score volgehouden?**
- Je verliet de thermiek te vroeg
- Je waagde je niet aan rondjes draaien (doorkomst)
- De thermiek stierf voor je hem goed kon uitwerken

---

## Hoe je je score verbetert

### Snelle winst

1. **Draai krapper zodra je stijgende lucht raakt**: wacht niet, begin meteen te draaien als je vario uitslaat
2. **Verschuif je rondje naar de stijgende lucht**: klassieke centreertechniek, ruimer op weg naar buiten, krapper op weg naar binnen
3. **Let op je hellingshoek**: te vlak = brede rondjes = drift. Te steil = inefficiënt in zwakke stijgende lucht

### Volg je vooruitgang

Open dezelfde thermiek in de analysetool na meerdere vluchten vanaf dezelfde startplaats. Je begint patronen te zien:
- „Op deze startplaats heb ik altijd moeite met centreren“
- „Mijn thermieken in de namiddag zijn regelmatiger“
- „Dat nieuwe scherm heeft mijn efficiëntie echt verbeterd“

### Jaag niet op het getal

Een score van 45 in een gebroken, stevige thermiek kan beter vliegwerk zijn dan een 70 in een gladde, dikke kolom. Context telt. Gebruik de score om je eigen vooruitgang te volgen, niet om je te vergelijken met anderen op andere dagen.

---

## Achter de schermen: waarom deze gewichten?

De gewichten (30/20/20/15/15) zijn niet uit de lucht gegrepen. Ze zijn gebaseerd op wat echt telt om efficiënt te thermieken:

- **Stijging voert aan** (30%) omdat het hoofddoel omhoog gaan is. Een zwakke thermiek die je perfect uitwerkt, blijft een zwakke thermiek.

- **Efficiëntie en centrering delen het gewicht voor techniek** (elk 20%) omdat ze allebei over kunnen gaan. Je kunt het ene hebben zonder het andere (goed centreren maar wegdrijven, of krappe rondjes op de verkeerde plek).

- **Regelmaat is een bijsturing** (15%) omdat je een deel van de turbulentie niet in de hand hebt. Ze beïnvloedt je score, maar domineert hem niet.

- **Volgehouden filtert toevalstreffers eruit** (15%) omdat kort door sterke stijgende lucht vliegen geen thermieken is, maar geluk. Deze factor zorgt ervoor dat hoge scores naar piloten gaan die zich echt aan het uitwerken van de thermiek waagden.

---

## Voorbeeldscenario's

### De lift met geluk

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Stijgsnelheid | 4,2 m/s | 1,0 (maximum) |
| Efficiëntie | 0,65 | 0,65 |
| Centrering | 0,78 | 0,78 |
| Regelmaat | 0,38 m/s | 0,81 |
| Duur / rondjes | 120 s / 4 rondjes | 1,0 |

**Bijdragen:** 0,30 + 0,13 + 0,156 + 0,122 + 0,15 = **0,86**
**Score:** 86 (Uitstekend)

Je raakte een monsterthermiek, bleef in de kern en reed hem twee volle minuten mee. Droomscenario.

### De korte doorkomst (afgestraft)

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Stijgsnelheid | 3,5 m/s | 1,0 (maximum) |
| Efficiëntie | 0,72 | 0,72 |
| Centrering | 0,85 | 0,85 |
| Regelmaat | 0,45 m/s | 0,78 |
| Duur / rondjes | 18 s / 0 rondjes | 0,0 |

**Bijdragen:** 0,30 + 0,144 + 0,17 + 0,117 + 0,0 = **0,73**
**Score:** 73 (Uitstekend... maar net)

Sterke stijgende lucht, prachtige vario-waarden, maar je vloog er recht doorheen zonder je aan rondjes te wagen. De score nul voor volgehouden trekt dit flink naar beneden. In het oude scoresysteem was dit 85+ geweest.

### De bevochten stijging

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Stijgsnelheid | 1,8 m/s | 0,60 |
| Efficiëntie | 0,38 | 0,38 |
| Centrering | 0,45 | 0,45 |
| Regelmaat | 1,4 m/s | 0,30 |
| Duur / rondjes | 180 s / 6 rondjes | 1,0 |

**Bijdragen:** 0,18 + 0,076 + 0,09 + 0,045 + 0,15 = **0,54**
**Score:** 54 (Goed)

Zwakke thermiek, gebroken kern, veel zoeken. Maar je hield 3 minuten vol en draaide 6 rondjes. Die volharding wordt beloond.

### De kernkraker

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Stijgsnelheid | 2,4 m/s | 0,80 |
| Efficiëntie | 0,52 | 0,52 |
| Centrering | 0,85 | 0,85 |
| Regelmaat | 0,65 m/s | 0,68 |
| Duur / rondjes | 95 s / 3 rondjes | 1,0 |

**Bijdragen:** 0,24 + 0,104 + 0,17 + 0,102 + 0,15 = **0,77**
**Score:** 77 (Uitstekend)

Matige thermiek, maar je centreerde perfect en werkte hem netjes uit. Techniek boven kracht.

---

## Waar het op neerkomt

De algemene thermiekscore is er niet om je te beoordelen, maar om je feedback te geven. Een samenvatting in cijfers van „wat er daarbinnen gebeurde“, zodat je van elke thermiek leert in plaats van alleen te onthouden „dat was een goeie“.

Gebruik hem om:
- patronen in je vliegen te zien
- je vooruitgang over de tijd te volgen
- specifieke zwakke punten te vinden om aan te werken
- met echte data op te scheppen bij je vrienden

En onthoud: zelfs een „Redelijke“ thermiek die je naar de volgende stijging bracht, is beter dan een „Uitstekende“ die je liet liggen omdat je op iets beters wachtte.

Ga nu iets vliegen!

---

Zie ook: [Geavanceerde thermiekanalyse](advanced-thermal-analysis.md) | [Instellingen analyse](advanced-thermal-analysis-settings.md)
