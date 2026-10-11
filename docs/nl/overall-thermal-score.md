---
title: De algemene thermiekscore uitgelegd
description: Hoe we de kwaliteit van een thermiek berekenen, met een uitgewerkt voorbeeld
category: Thermal Analysis
order: 4
---

Ooit de kwaliteitsscore van een thermiek in het tabblad **Thermiek** gezien en je afgevraagd of hij echt iets betekent? Goed nieuws: dat doet hij. Het is niet zomaar een gevoel. We pluizen precies uit hoe dat getal berekend wordt, zodat je begrijpt wat „Redelijk“ van „Uitstekend“ scheidt, en wat je eraan kunt doen.

## Het grote plaatje

De thermiekscore (0 tot 100) is een gewogen combinatie van vijf factoren. Het zijn dezelfde vijf rijen die je ziet in de **Opbouw van de score** van een thermiek:

| Factor | Gewicht | Wat hij meet |
|--------|--------|------------------|
| **Stijging** | 30% | Hoe sterk was de stijgende lucht op haar best? |
| **Efficiëntie** | 20% | Hoe recht steeg je? |
| **Centrering** | 20% | Hoe goed bleef je in de kern? |
| **Regelmaat** | 15% | Hoe stabiel waren de waarden van je vario? |
| **Volgehouden** | 15% | Ben je echt gebleven en heb je de thermiek uitgewerkt? |

Elke factor wordt genormaliseerd naar een schaal van 0 tot 1, vermenigvuldigd met zijn gewicht, en daarna wordt het geheel geschaald naar 0 tot 100. Eenvoudig in theorie, veelzeggend in de praktijk.

De factor **Volgehouden** is cruciaal: hij zorgt ervoor dat korte bezoekjes niet hoog scoren. Een paar rondjes in sterke stijgende lucht pikken bewijst geen thermiektalent; blijven en de thermiek uitwerken wel.

---

## De formule

Dit is de echte berekening:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

De drempels in de formule liggen vast in m/s en meter, welke eenheden je ook laat weergeven.

### Hoe elk onderdeel berekend wordt

**1. Stijgscore**
```
climbScore = min(1, maxClimb / 5.0)
```
Je beste volgehouden stijging in de thermiek (de waarde **Max.** in de details van de thermiek, gladgestreken over 5 seconden zodat één ruizig GPS-punt niet kan valsspelen) gedeeld door 5,0 m/s, met 1 als maximum. Alleen het beste tiende van de stijgingen in We-Fly komt in de buurt van dat maximum; een gemiddelde stijging scoort iets meer dan de helft.

**2. Efficiëntiescore**
```
efficiencyScore = min(1, heightGain / driftDistance)
```
De gewonnen hoogte gedeeld door de horizontale afstand tussen de plek waar de thermiek begon en de plek waar hij eindigde. Win je evenveel hoogte als je wegdreef, of meer, dan scoor je de volle 1,0. Hoe meer de wind je opzij meeneemt, hoe lager hij wordt.

**3. Centreerscore**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Een scherm kan niet ter plaatse draaien, dus rondjes draaien precies op de straal van de kern zelf (of krapper) scoort een perfecte 1,0. Elke extra kernstraal afstand kost de helft van de score: draaien op twee keer de kernstraal scoort 0,5, op drie keer scoort het nul. De drift door de wind wordt eerst weggewerkt door elk rondje te vergelijken met zijn eigen lokale middelpunt.

**4. Regelmaatscore**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Het omgekeerde van de variatie van je vario (de standaardafwijking van je gladgestreken stijgsnelheid). Gladde thermiek = hoge score. Heen en weer tussen sterke stijgende en dalende lucht = lage score. Een variatie van 2 m/s of meer = geen bijdrage voor regelmaat.

**5. Score volgehouden**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combineert duur en aantal rondjes om echt thermiekwerk te belonen. Voor de volle score heb je ongeveer 90 seconden EN 2 of meer volledige rondjes nodig. Elke thermiek in de lijst heeft al minstens twee volledige rondjes (zie [Hoe thermiekdetectie werkt](/doc/advanced-thermal-analysis-settings)), dus in de praktijk straft deze factor vooral korte stijgingen af.

---

## Uitgewerkt voorbeeld: thermiek nr. 9

We lopen een echte berekening door met concrete getallen. Stel dat je een thermiek uitwerkte met deze cijfers:

| Meetwaarde | Waarde |
|--------|-------|
| Max. stijging | 3,5 m/s |
| Efficiëntie | 0,41 (41%) |
| Centrering | 0,53 (53%) |
| Variatie | 0,92 m/s |
| Duur | 75 seconden |
| Aantal rondjes | 3 rondjes |

### Stap 1: bereken de score van elk onderdeel

**Stijgscore:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Je beste volgehouden stijging van 3,5 m/s is 70% van de maatstaf van 5,0 m/s.

**Efficiëntiescore:**
```
efficiencyScore = 0.41
```
Je won 41% zoveel hoogte als je opzij wegdreef. Vrij typisch voor een thermiek met veel drift.

**Centreerscore:**
```
centeringScore = 0.53
```
Je draaide gemiddeld op iets minder dan twee keer de kernstraal. Ruimte voor verbetering, maar niet slecht.

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
Je bleef 75 seconden en draaide 3 volledige rondjes: degelijk thermiekwerk, net onder de grens van 90 seconden.

### Stap 2: pas de gewichten toe

Vermenigvuldig nu elke score met zijn gewicht:

| Onderdeel | Score | Gewicht | Bijdrage |
|-----------|-------|--------|--------------|
| Stijging | 0,70 | 0,30 | 0,210 |
| Efficiëntie | 0,41 | 0,20 | 0,082 |
| Centrering | 0,53 | 0,20 | 0,106 |
| Regelmaat | 0,54 | 0,15 | 0,081 |
| Volgehouden | 0,833 | 0,15 | 0,125 |
| **Totaal** | | | **0,604** |

### Stap 3: schaal naar 0-100

```
qualityScore = round(0.604 * 100) = 60
```

**Resultaat: een score van 60**, net binnen „Redelijk“. Krappere rondjes zouden zowel je efficiëntie als je centrering opkrikken, en daar liggen de makkelijke punten.

---

## Je score interpreteren

| Scorebereik | Label | Wat het betekent |
|-------------|--------|---------------|
| **80 en hoger** | Uitzonderlijk | De beste stijgingen in We-Fly. Sterke stijgende lucht, goed uitgewerkt. |
| **73 tot 79** | Uitstekend | Beter dan drie thermieken op vier. Je vond de kern snel en bleef erin. |
| **66 tot 72** | Goed | Boven de typische thermiek. Degelijk werk. |
| **60 tot 65** | Redelijk | Ongeveer in het midden van het peloton. Klus geklaard, met wat prestaties die je liet liggen. |
| **Onder 60** | Zwak | Moeite om de kern te vinden of erin te blijven, een korte stijging, of omstandigheden die echt beroerd waren. |

De grenzen zijn afgesteld op echte thermieken van We-Fly-piloten: de typische (mediane) thermiek scoort ongeveer 65, een kwart van de thermieken scoort 73 of meer, en één op tien haalt 80.

---

## Wat elk onderdeel je vertelt

### Stijgkracht (gewicht 30%)

Dit is de factor die het zwaarst weegt, omdat... nou ja, het draait allemaal om omhoog gaan. Hij gebruikt je beste *volgehouden* stijging, dus hij beloont dat je het sterke deel van de thermiek vindt, niet alleen dat je blijft hangen. Maar maak je er niet te druk om: soms levert een zwakke thermiek die je perfect uitwerkt meer afstand op dan een sterke waar je steeds uit valt.

**Lage stijgscore?**
- De thermiek was echt zwak (niet jouw schuld)
- Je vond het sterkste deel van de kern nooit (kijk naar je centrering)
- Je kwam te laat op het feestje en pikte alleen de top mee

### Efficiëntie (gewicht 20%)

Efficiëntie = gewonnen hoogte / horizontale driftafstand, met 1,0 als maximum. Een thermiek waarin je minstens evenveel hoogte wint als je wegdrijft, scoort de volle 1,0, en daarvoor heb je weinig wind of een sterke stijging nodig.

Typische waarden:
- **0,3 tot 0,4**: normaal, wat drift
- **0,5 tot 0,6**: heel goed, krappe rondjes
- **boven 0,6**: uitstekend, minimale drift

**Lage efficiëntie?**
- Sterke wind die je opzij duwt
- Brede rondjes of een te vlakke hellingshoek
- Met de wind mee binnenkomen en nooit corrigeren

### Centrering (gewicht 20%)

Hoe dicht je rond de kern draaide. Draaien op de straal van de kern zelf is perfect; de score daalt in een rechte lijn naarmate je gemiddelde afstand groeit, tot nul op drie keer de kernstraal.

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

Combineert duur en aantal rondjes om te bewijzen dat je de thermiek echt uitwerkte in plaats van er gewoon door te vliegen. Deze factor beloont piloten die zich aan de thermiek wagen en hem goed uitwerken.

Voor de volle score heb je nodig:
- **ongeveer 90 seconden** duur (kortere thermieken scoren evenredig minder)
- **2 of meer volledige rondjes** (minder rondjes scoren evenredig minder)

De twee factoren worden met elkaar vermenigvuldigd, dus je hebt ze ALLEBEI nodig om hier goed te scoren. Een stijging van 30 seconden met drie rondjes krijgt maar een derde van de punten.

**Lage score volgehouden?**
- Je verliet de thermiek te vroeg
- De thermiek stierf voor je hem goed kon uitwerken

---

## Hoe je je score verbetert

### Snelle winst

1. **Draai krapper zodra je stijgende lucht raakt**: wacht niet, begin te draaien zodra je vario aantrekt
2. **Verschuif je rondje naar de stijgende lucht**: klassieke centreertechniek, ruimer aan de zwakke kant, krapper aan de sterke kant
3. **Let op je hellingshoek**: te vlak geeft brede rondjes en drift, te steil is inefficiënt in zwakke stijgende lucht

### Volg je vooruitgang

Vergelijk thermieken uit verschillende vluchten vanaf hetzelfde vlieggebied. Je begint patronen te zien:
- „Op deze startplaats heb ik altijd moeite met centreren“
- „Mijn thermieken in de namiddag zijn regelmatiger“
- „Dat nieuwe scherm heeft mijn efficiëntie echt verbeterd“

### Jaag niet op het getal

Een score van 55 in een gebroken, stevige thermiek kan beter vliegwerk zijn dan een 80 in een gladde, dikke kolom. Context telt. Gebruik de score om je eigen vooruitgang te volgen, niet om je te vergelijken met anderen op andere dagen.

---

## Achter de schermen: waarom deze gewichten?

De gewichten (30/20/20/15/15) zijn niet uit de lucht gegrepen. Ze zijn gebaseerd op wat echt telt om efficiënt te thermieken:

- **Stijgkracht voert aan** (30%) omdat het hoofddoel omhoog gaan is. Een zwakke thermiek die je perfect uitwerkt, blijft een zwakke thermiek.

- **Efficiëntie en centrering delen het gewicht voor techniek** (elk 20%) omdat ze allebei over kunnen gaan. Je kunt het ene hebben zonder het andere (goed centreren maar wegdrijven, of krappe rondjes op de verkeerde plek).

- **Regelmaat is een bijsturing** (15%) omdat je een deel van de turbulentie niet in de hand hebt. Ze beïnvloedt je score, maar domineert hem niet.

- **Volgehouden filtert toevalstreffers eruit** (15%) omdat een paar rondjes in sterke stijgende lucht niet hetzelfde is als een thermiek uitwerken. Deze factor zorgt ervoor dat hoge scores naar piloten gaan die zich echt aan de stijging wijdden.

---

## Voorbeeldscenario's

### De lift met geluk

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 5,6 m/s | 1,0 (maximum) |
| Efficiëntie | 0,65 | 0,65 |
| Centrering | 0,78 | 0,78 |
| Regelmaat | 0,38 m/s | 0,81 |
| Duur / rondjes | 120 s / 4 rondjes | 1,0 |

**Bijdragen:** 0,30 + 0,13 + 0,156 + 0,121 + 0,15 = **0,858**
**Score:** 86 (Uitzonderlijk)

Je raakte een monsterthermiek, bleef in de kern en reed hem twee volle minuten mee. Droomscenario.

### De snelle hap (afgestraft)

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 4,8 m/s | 0,96 |
| Efficiëntie | 0,72 | 0,72 |
| Centrering | 0,85 | 0,85 |
| Regelmaat | 0,45 m/s | 0,78 |
| Duur / rondjes | 25 s / 2 rondjes | 0,28 |

**Bijdragen:** 0,288 + 0,144 + 0,17 + 0,116 + 0,042 = **0,760**
**Score:** 76 (Uitstekend)

Sterke stijgende lucht, prima centrering, maar je bleef maar twee rondjes. Had je hem 90 seconden met dezelfde techniek uitgewerkt, dan had de factor volgehouden de ontbrekende punten toegevoegd en was de score 87 geweest.

### De bevochten stijging

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 2,6 m/s | 0,52 |
| Efficiëntie | 0,38 | 0,38 |
| Centrering | 0,45 | 0,45 |
| Regelmaat | 1,4 m/s | 0,30 |
| Duur / rondjes | 180 s / 6 rondjes | 1,0 |

**Bijdragen:** 0,156 + 0,076 + 0,09 + 0,045 + 0,15 = **0,517**
**Score:** 52 (Zwak)

Zwakke thermiek, gebroken kern, veel zoeken. Het label is hard, maar het zegt meer over de thermiek dan over jou: je hield 3 minuten en 6 rondjes vol, en de factor volgehouden gaf je al zijn punten. Op zo'n dag was de stijging die je in de lucht hield de juiste keuze.

### De kernkraker

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 3,4 m/s | 0,68 |
| Efficiëntie | 0,52 | 0,52 |
| Centrering | 0,85 | 0,85 |
| Regelmaat | 0,65 m/s | 0,68 |
| Duur / rondjes | 95 s / 3 rondjes | 1,0 |

**Bijdragen:** 0,204 + 0,104 + 0,17 + 0,101 + 0,15 = **0,729**
**Score:** 73 (Uitstekend)

Matige thermiek, maar je centreerde perfect en werkte hem netjes uit. Techniek boven kracht.

---

## Waar het op neerkomt

De thermiekscore is er niet om je te beoordelen, maar om je feedback te geven. Een samenvatting in cijfers van „wat er daarbinnen gebeurde“, zodat je van elke thermiek leert in plaats van alleen te onthouden „dat was een goeie“.

Gebruik hem om:
- patronen in je vliegen te zien
- je vooruitgang over de tijd te volgen
- specifieke zwakke punten te vinden om aan te werken
- met echte data op te scheppen bij je vrienden

En onthoud: zelfs een „Redelijke“ thermiek die je naar de volgende stijging bracht, is beter dan een „Uitstekende“ die je liet liggen omdat je op iets beters wachtte.

Ga nu iets vliegen!

---

Zie ook: [Geavanceerde thermiekanalyse](/doc/advanced-thermal-analysis) | [Hoe thermiekdetectie werkt](/doc/advanced-thermal-analysis-settings)
