---
title: De totale thermiekscore uitgelegd
description: Hoe we de kwaliteit van een thermiekbel berekenen, met een uitgewerkt voorbeeld
category: Thermal Analysis
order: 4
---

Zie je de kwaliteitsscore bij een thermiek in het tabblad **Thermieken** en vraag je je af of die echt iets zegt? Goed nieuws: dat doet hij. Het is geen natte-vingerwerk. We leggen precies uit hoe dat getal berekend wordt. Zo snap je wat het verschil maakt tussen „Redelijk” en „Uitstekend”, en wat je eraan kunt doen.

## Het grote plaatje

De thermiekscore (0 tot 100) is een gewogen combinatie van vijf factoren. Dat zijn dezelfde vijf regels die je ziet in de **Opbouw van de score** van een thermiek:

| Factor | Gewicht | Wat het meet |
|--------|--------|------------------|
| **Stijging** | 30% | Hoe sterk was het stijgen op zijn best? |
| **Netto stijging** | 20% | Hoeveel van het stijgen heb je vastgehouden? |
| **Centrering** | 20% | Hoe goed bleef je in de kern? |
| **Consistentie** | 15% | Hoe stabiel waren de variowaarden? |
| **Volgehouden** | 15% | Ben je echt gebleven en heb je de thermiek uitgewerkt? |

Elke factor wordt genormaliseerd naar een schaal van 0 tot 1, vermenigvuldigd met zijn gewicht, en daarna wordt het geheel geschaald naar 0 tot 100. Eenvoudig in theorie, veelzeggend in de praktijk.

De factor **Volgehouden** is cruciaal: die zorgt dat korte bezoekjes niet hoog scoren. Een paar bochten in sterk stijgen pakken bewijst nog geen thermiekvaardigheid; blijven en de thermiek uitwerken wel.

---

## De formule

Dit is de berekening zoals hij echt gebeurt:

```
Quality Score = (climbScore * 0.30 +
                 netClimbScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

De drempels in de formule liggen vast in m/s en meters, welke eenheden je ook laat weergeven.

### Hoe elk onderdeel berekend wordt

**1. Stijgscore**
```
climbScore = min(1, maxClimb / 5.0)
```
Je beste volgehouden stijging in de thermiek (de waarde **Max.** in de thermiekdetails, afgevlakt over 5 seconden zodat één onrustige GPS-fix niet kan valsspelen), gedeeld door 5,0 m/s, met een maximum van 1. Alleen het beste tiende van de stijgingen in We-Fly komt in de buurt van dat maximum; een gemiddelde stijging scoort iets meer dan de helft.

**2. Score netto stijging**
```
netClimbScore = min(1, (heightGain / duration) / 3.0)
```
De hoogte die je won, gedeeld door de tijd die je in de thermiek doorbracht: je gemiddelde stijging van in- tot uitstap. 3,0 m/s levert de volle 1,0 op; slechts ongeveer één thermiek op honderd haalt dat. Waar de piekstijging beloont dat je het sterke deel vindt, beloont deze factor dat je erin blijft.

Eerdere versies zetten de gewonnen hoogte af tegen de afgelegde drift. Wind drukte die waarde op zichzelf al, waardoor dezelfde stijging op een winderige dag een categorie zakte. Netto stijging trekt zich niets aan van de wind.

**3. Centreerscore**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Een scherm kan niet op de plaats draaien, dus cirkelen precies op de straal van de kern zelf (of krapper) scoort een perfecte 1,0. Elke extra kernstraal afstand kost de helft van de score: cirkelen op twee keer de kernstraal scoort 0,5, op drie keer scoort nul. Winddrift wordt eerst weggefilterd door elke bocht te vergelijken met zijn eigen lokale middelpunt.

**4. Consistentiescore**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Het omgekeerde van de variabiliteit van je vario (de standaardafwijking van je afgevlakte stijgsnelheid). Gelijkmatige thermiek = hoge score. Heen en weer tussen sterk stijgen en dalende lucht = lage score. Een variabiliteit van 2 m/s of meer = geen bijdrage aan consistentie.

**5. Score volgehouden**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combineert duur en aantal bochten om echt thermiekwerk te belonen. Voor de volle score heb je ongeveer 90 seconden EN 2 of meer volledige bochten nodig. Elke thermiek in de lijst heeft al minstens twee volledige bochten (zie [Zo werkt thermiekdetectie](/doc/advanced-thermal-analysis-settings)), dus in de praktijk straft deze factor vooral korte stijgingen af.

---

## Uitgewerkt voorbeeld: thermiek #9

Laten we een echte berekening doorlopen met concrete getallen. Stel dat je een thermiek uitwerkte met deze waarden:

| Meetwaarde | Waarde |
|--------|-------|
| Max. stijging | 3.5 m/s |
| Netto stijging | 1.8 m/s |
| Centrering | 0.53 (53%) |
| Variabiliteit | 0.92 m/s |
| Duur | 75 seconden |
| Aantal bochten | 3 bochten |

### Stap 1: bereken de score van elk onderdeel

**Stijgscore:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Je beste volgehouden stijging van 3,5 m/s is 70% van de referentie van 5,0 m/s.

**Score netto stijging:**
```
netClimbScore = min(1, 1.8 / 3.0)
netClimbScore = 0.60
```
Je steeg gemiddeld 1,8 m/s van in- tot uitstap, ruim boven de gemiddelde thermiek (ongeveer 1 m/s).

**Centreerscore:**
```
centeringScore = 0.53
```
Je cirkelde gemiddeld op iets minder dan twee keer de kernstraal. Ruimte voor verbetering, maar niet slecht.

**Consistentiescore:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Een variovariabiliteit van 0,92 m/s betekent dat het stijgen wat turbulent was, maar niet extreem.

**Score volgehouden:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Je bleef 75 seconden en draaide 3 volledige bochten: degelijk thermiekwerk, net onder de grens van 90 seconden.

### Stap 2: pas de gewichten toe

Vermenigvuldig nu elke score met zijn gewicht:

| Onderdeel | Score | Gewicht | Bijdrage |
|-----------|-------|--------|--------------|
| Stijging | 0.70 | 0.30 | 0.210 |
| Netto stijging | 0.60 | 0.20 | 0.120 |
| Centrering | 0.53 | 0.20 | 0.106 |
| Consistentie | 0.54 | 0.15 | 0.081 |
| Volgehouden | 0.833 | 0.15 | 0.125 |
| **Totaal** | | | **0.642** |

### Stap 3: schaal naar 0-100

```
qualityScore = round(0.642 * 100) = 64
```

**Resultaat: een score van 64**, net binnen „Goed”. Krappere cirkels rond de kern zouden zowel de centrering als de netto stijging opkrikken, en daar liggen de makkelijke punten.

---

## Je score lezen

| Scorebereik | Label | Wat het betekent |
|-------------|--------|---------------|
| **74 en hoger** | Uitmuntend | De beste stijgingen in We-Fly. Sterk stijgen, goed uitgewerkt. |
| **68 tot 73** | Uitstekend | Beter dan drie op de vijf thermieken. Je vond de kern snel en bleef erin. |
| **63 tot 67** | Goed | Boven de gemiddelde thermiek. Degelijk werk. |
| **58 tot 62** | Redelijk | Ongeveer midden in het peloton. Klus geklaard, maar er bleef wat prestatie liggen. |
| **Onder 58** | Zwak | Moeite om de kern te vinden of vast te houden, een korte stijging, of echt beroerde omstandigheden. |

De categorieën zijn gekalibreerd op meer dan 100.000 echte thermieken gevlogen door We-Fly-piloten: de typische (mediane) thermiek scoort ongeveer 66, een kwart van de thermieken scoort 73 of meer, en één op tien haalt 80.

---

## Wat elk onderdeel je vertelt

### Stijgkracht (gewicht 30%)

Dit is de zwaarst wegende factor, want... tja, het draait nu eenmaal om omhoog gaan. Hij gebruikt je beste *volgehouden* stijging, dus hij beloont dat je het sterke deel van de thermiek vindt, niet alleen dat je blijft hangen. Maar staar je er niet blind op: soms levert een zwakke thermiek die je perfect uitwerkt meer afstand op dan een sterke waar je steeds uit valt.

**Lage stijgscore?**
- De thermiek was echt zwak (niet jouw schuld)
- Je hebt het sterkste deel van de kern nooit gevonden (check je centrering)
- Je was te laat en pikte alleen de top nog mee

### Netto stijging (gewicht 20%)

Netto stijging = gewonnen hoogte / tijd in de thermiek, afgezet tegen 3,0 m/s. Het is de stijging die je echt op zak hebt, van in- tot uitstap, dus elke bocht buiten het stijgen kost je hier punten. Wind verandert er niets aan.

Typische waarden:
- **ongeveer 1 m/s**: een gemiddelde thermiek
- **2 m/s of meer**: een sterke stijging, goed uitgewerkt (het beste tiende)
- **3 m/s of meer**: de volle punten

**Lage netto stijging?**
- De thermiek was echt zwak (niet jouw schuld)
- Bochten verspild aan zoeken of uit de kern vallen
- Brede cirkels of te weinig helling in een smalle kern

### Kwaliteit van centreren (gewicht 20%)

Hoe dicht je bij de kern cirkelde. Draaien op de straal van de kern zelf is perfect; de score zakt lineair naarmate je gemiddelde afstand groeit, tot nul op drie keer de kernstraal.

**Lage centrering?**
- Het duurde even voor je de kern vond
- Je dreef steeds weg en moest opnieuw centreren
- De kern verplaatste zich (thermiekbel) of was heel klein

### Consistentie (gewicht 15%)

Gebaseerd op de standaardafwijking van je variowaarden. Rustige, gelijkmatige piep = hoge score. Vario die door het dak gaat = lage score.

**Lage consistentie?**
- Turbulente thermiek (niet altijd jouw schuld)
- Je vloog steeds door de kern en er aan de andere kant weer uit
- Stijgen en dalende lucht in dezelfde bocht

### Volgehouden (gewicht 15%)

Combineert duur en aantal bochten om te bewijzen dat je de thermiek echt hebt uitgewerkt en er niet gewoon doorheen vloog. Deze factor beloont piloten die zich aan de thermiek committeren en hem goed uitwerken.

Voor de volle score heb je nodig:
- **ongeveer 90 seconden** duur (kortere thermieken scoren naar verhouding minder)
- **2 of meer volledige bochten** (minder bochten scoren naar verhouding minder)

De twee factoren worden met elkaar vermenigvuldigd, dus je hebt ze ALLEBEI nodig om hier goed te scoren. Een stijging van 30 seconden met drie bochten krijgt maar een derde van de punten.

**Lage score voor volgehouden?**
- Je verliet de thermiek te vroeg
- De thermiek stierf uit voor je hem goed kon uitwerken

---

## Zo verbeter je je score

### Snelle winst

1. **Draai meteen in als je stijgen voelt**: niet wachten, begin te draaien zodra de vario aanslaat
2. **Verleg je cirkel richting het stijgen**: klassieke centreertechniek, breder aan de zwakke kant, krapper aan de sterke kant
3. **Let op je helling**: te vlak betekent brede cirkels en drift, te steil is inefficiënt in zwak stijgen

### Volg je vooruitgang

Vergelijk thermieken uit meerdere vluchten in hetzelfde vlieggebied. Je gaat patronen zien:
- „Op deze startplaats heb ik altijd moeite met centreren”
- „Mijn middagthermieken hebben een betere consistentie”
- „Dat nieuwe scherm heeft mijn netto stijging echt verbeterd”

### Jaag niet op het getal

Een score van 55 in een kapotte, ruige thermiek kan beter vliegwerk zijn dan een 80 in een gladde, dikke kolom. Context telt. Gebruik de score om je eigen vooruitgang te volgen, niet om jezelf te vergelijken met anderen op andere dagen.

---

## Achter de schermen: waarom deze gewichten?

De gewichten (30/20/20/15/15) zijn niet uit de lucht gegrepen. Ze zijn gebaseerd op wat echt telt bij effectief thermieken:

- **Stijgkracht voert de lijst aan** (30%) omdat het hoofddoel omhoog gaan is. Een zwakke thermiek die je perfect uitwerkt, blijft een zwakke thermiek.

- **Netto stijging en centrering delen het techniekgewicht** (elk 20%) omdat ze allebei over vaardigheid gaan. Je kunt het ene hebben zonder het andere (krappe cirkels op de verkeerde plek, of mooi gecentreerd in een thermiek die je steeds verlaat).

- **Consistentie is een correctiefactor** (15%) omdat je sommige turbulentie niet in de hand hebt. Ze beïnvloedt je score, maar domineert hem niet.

- **Volgehouden filtert toevalstreffers** (15%) omdat een paar bochten in sterk stijgen niet hetzelfde is als een thermiek uitwerken. Deze factor zorgt dat hoge scores naar piloten gaan die zich echt aan de stijging hebben gecommitteerd.

---

## Voorbeeldscenario's

### De gelukkige liftrit

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 5.6 m/s | 1.0 (maximum) |
| Netto stijging | 3.4 m/s | 1.0 (maximum) |
| Centrering | 0.78 | 0.78 |
| Consistentie | 0.38 m/s | 0.81 |
| Duur / bochten | 120s / 4 bochten | 1.0 |

**Bijdragen:** 0.30 + 0.20 + 0.156 + 0.121 + 0.15 = **0.927**
**Score:** 93 (Uitmuntend)

Je raakte een monsterthermiek, bleef in de kern en reed er twee volle minuten op mee. Droomscenario.

### De snelle hap (afgestraft)

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 4.8 m/s | 0.96 |
| Netto stijging | 2.4 m/s | 0.80 |
| Centrering | 0.85 | 0.85 |
| Consistentie | 0.45 m/s | 0.78 |
| Duur / bochten | 25s / 2 bochten | 0.28 |

**Bijdragen:** 0.288 + 0.16 + 0.17 + 0.116 + 0.042 = **0.776**
**Score:** 78 (Uitmuntend)

Sterk stijgen, prima gecentreerd, maar je bleef maar twee bochten. Had je hem 90 seconden uitgewerkt met dezelfde techniek, dan had de factor volgehouden de ontbrekende punten opgeleverd en was de score 88 geweest.

### De zwaarbevochten stijging

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 2.6 m/s | 0.52 |
| Netto stijging | 0.9 m/s | 0.30 |
| Centrering | 0.45 | 0.45 |
| Consistentie | 1.4 m/s | 0.30 |
| Duur / bochten | 180s / 6 bochten | 1.0 |

**Bijdragen:** 0.156 + 0.06 + 0.09 + 0.045 + 0.15 = **0.501**
**Score:** 50 (Zwak)

Zwakke thermiek, kapotte kern, veel zoeken. Het label is streng, maar het zegt meer over de thermiek dan over jou: je hield het 3 minuten en 6 bochten vol, en de factor volgehouden gaf je al zijn punten. Op zo'n dag was de stijging die je in de lucht hield de juiste keuze.

### De kernkraker

| Meetwaarde | Waarde | Score |
|--------|-------|-------|
| Max. stijging | 3.4 m/s | 0.68 |
| Netto stijging | 1.8 m/s | 0.60 |
| Centrering | 0.85 | 0.85 |
| Consistentie | 0.65 m/s | 0.68 |
| Duur / bochten | 95s / 3 bochten | 1.0 |

**Bijdragen:** 0.204 + 0.12 + 0.17 + 0.101 + 0.15 = **0.745**
**Score:** 75 (Uitmuntend)

Matige thermiek, maar je centreerde perfect en werkte hem goed uit. Techniek boven kracht.

---

## Kort samengevat

De thermiekscore is er niet om je te beoordelen; hij is er om je feedback te geven. Een samenvatting in cijfers van „wat daar gebeurde”, zodat je van elke thermiek iets leert in plaats van alleen te onthouden „dat was een goeie”.

Gebruik hem om:
- Patronen in je vliegen te ontdekken
- Je vooruitgang te volgen
- Specifieke zwakke punten te vinden om aan te werken
- Met echte data op te scheppen bij je vrienden

En onthoud: zelfs een „Redelijke” thermiek die je naar de volgende stijging bracht, is beter dan een „Uitstekende” die je liet schieten omdat je op iets beters wachtte.

En nu: lekker gaan vliegen!

---

Zie ook: [Geavanceerde thermiekanalyse](/doc/advanced-thermal-analysis) | [Zo werkt thermiekdetectie](/doc/advanced-thermal-analysis-settings)
