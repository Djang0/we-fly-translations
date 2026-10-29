---
title: Geavanceerde thermiekanalyse
description: Duik in elke thermiek die je hebt gewerkt, met centreren, stijgsnelheid en efficiëntie, vlucht per vlucht gescoord
category: Thermal Analysis
order: 1
---

Ooit afgevraagd of je echt een thermiekgenie bent of gewoon geluk hebt? Het tabblad **Thermiek** bij elke vlucht is je persoonlijke nabespreking: het ontleedt elke stijging die je hebt gewerkt, cirkel voor cirkel.

## Wat is dit eigenlijk?

Het is een analyse na de vlucht die elke beweging volgt die je in thermiek maakte. Het blijft niet steken bij "je bent 500 m gestegen". Het kijkt naar *hoe* je steeg: of je als een pro op de kern jaagde of een rondje langs de randen maakte.

Als je een vlucht uploadt, vindt We-Fly elke thermiek die je hebt gewerkt, geeft elke thermiek een kwaliteitsscore op 100 en maakt er een gedetailleerde analyse van. Zie het als een coach die je track en je variospoor doorneemt, stijging voor stijging. Benieuwd hoe een stijging überhaupt herkend wordt? Kijk bij [Zo werkt thermiekdetectie](/doc/advanced-thermal-analysis-settings).

Open een vlucht en kies het tabblad **Thermiek**. Het getal naast de tabnaam is het aantal gevonden thermieken.

## De hoofdweergave

Het tabblad lees je van boven naar beneden:

1. Een overzichtsbalk voor de hele vlucht
2. De grafiek **Vario t.o.v. cirkelstraal**
3. Filterknoppen en een tijdlijn om een thermiek te kiezen
4. De viewer voor de gekozen thermiek: kaart of 3D-weergave aan de ene kant, details aan de andere
5. De grafiek **Stijgsnelheid per hoogte en tijd**

### Overzichtsbalk van de vlucht

Je dag in vogelvlucht:

- **Thermieken**: hoeveel stijgingen meetelden
- **Beste**: de hoogste kwaliteitsscore van de vlucht, met het thermieknummer en het kwaliteitslabel
- **Winst**: alle hoogte die je in thermiek hebt gewonnen
- **Gem. stijging**: je gemiddelde stijgsnelheid over alle thermieken
- **Kwaliteit**: de gemiddelde kwaliteitsscore, met de mediaan eronder

### Vario t.o.v. cirkelstraal

Elke volledige cirkel die je vloog wordt een punt: de straal langs de onderkant, de stijgsnelheid die je eruit haalde langs de zijkant. De achtergrond is verdeeld in zones met de labels **riskant**, **ideaal**, **ok** en **krapper**, van heel krappe cirkels links tot wijde rechts. Zitten de meeste van je beste punten in de zone **krapper**, dan weet je waar je de volgende vlucht aan moet werken.

### Een thermiek kiezen

Boven de tijdlijn staat een rij filterknoppen, elk met het aantal thermieken dat erbij hoort:

- **Alle**: elke thermiek
- **Beste 5**: de vijf sterkste stijgingen op gemiddelde stijgsnelheid
- **Onder mediaan**: thermieken met een stijgsnelheid onder de mediaan van de vlucht
- **Veel drift**: thermieken waarin je meer dan 30 m verdreef per 100 m gewonnen hoogte (alleen stijgingen van 50 m of meer tellen mee)

Onder de knoppen zet de tijdlijn elke thermiek uit op de echte klok van de vlucht. De kleur van elk punt is de kwaliteit, de grootte is de gewonnen hoogte, dus "die grote rond half twee" vind je zo terug. Klik op een punt om die thermiek in de viewer te openen.

De gekozen thermiek staat in het paginaadres, dus je kunt een link direct naar "Thermiek #7" delen.

### De thermiekviewer

De titelbalk toont **Thermiek #N**, het kwaliteitslabel, de starttijd, de gewonnen hoogte en de gemiddelde stijging. Rechts wissel je tussen **2D-kaart** en **3D-weergave**.

**Op de 2D-kaart:**

- **De track van de gekozen thermiek** staat er als punten, gekleurd naar vario: groen voor sterk stijgen (boven 3 m/s), geel voor stijgen tot 3 m/s, rood voor dalende lucht
- De markers **Instappunt** en **Uitstappunt** laten zien waar de stijging begon en eindigde
- **De thermiekkern** van elke thermiek is een marker met een gestippelde ring. De gekozen kern is rood, de andere zijn vaag roze als context. Ga met je muis over een kern om de sterkte te zien
- **Huidige positie** is de lichtblauwe marker die tijdens het afspelen meebeweegt

**In de 3D-weergave** zie je dezelfde stijging als een spiraal die je kunt draaien, met een legenda voor **Sterk stijgen**, **Zwak stijgen**, **Dalen**, **Thermiekkern**, **Uitstaphoogte** en **Huidige positie**.

## Animatie afspelen

Onder de kaart of de 3D-weergave staat de afspeelbalk:

- **Afspelen** / **Pauze**: speel de thermiek punt voor punt opnieuw af
- De ronde pijl: terug naar het eerste punt
- De pijlen vorige en volgende frame: loop GPS-punt voor GPS-punt door de stijging
- Teller **Frame**: waar je in de thermiek zit (bijvoorbeeld 42/156)
- Tijd, hoogte en vario op het huidige punt
- De doelknop: **Kaart centreren op deze thermiek**, handig als je de kaart hebt verschoven

Frame voor frame doorlopen is de beste manier om precies het moment te zien waarop je de kern vond, of kwijtraakte.

## Thermiekdetails

Naast de viewer (eronder op een telefoon) staat je coachingrapport. Bovenaan een grote kwaliteitsscore met het label, plus twee snelle waarden: **netto** (netto stijging, je gemiddelde stijging van instap tot uitstap) en **cent** (centreren).

Daaronder zijn de details ingeklapt in secties. Er staat er telkens één open, en elke ingeklapte sectie toont een voorbeeld van één regel, zodat je het hele verhaal ziet zonder te scrollen.

#### Stijging

- **Winst**: totale gewonnen hoogte
- **Gem.**: gemiddelde stijgsnelheid
- **Max.**: beste stijging, afgevlakt over 5 seconden (de ruwe piek van één punt staat eronder)
- **Min.**: zwakste moment, meestal bij het instappen of toen je uit de kern viel
- **Variatie**: hoeveel de stijgsnelheid schommelde. Laag betekent een gelijkmatige thermiek, hoog een pittige of turbulente

#### Kern

- **Sterkte**: gemiddelde stijging in de kern, je sweet spot
- **Centreertijd**: hoe lang het duurde om de kern te bereiken nadat de thermiek begon. Lager is beter
- **Grootte**: de straal van het stijgen in de kern
- **Gem. afst.**: hoe ver je gemiddeld rond de kern cirkelde
- **Centrering**: hoe dicht je bij de kern bleef, als percentage. Cirkelen op de straal van de kern zelf scoort 100%

#### Draaigedrag

- **Richting**: links of rechts (de meeste piloten hebben een voorkeurskant, geen oordeel)
- **Cirkels**: aantal volledige cirkels
- **Draaisnelheid**: gemiddelde draaisnelheid in graden per seconde
- **Hellingshoek**: geschat uit de grootte en duur van je cirkels, met de afgeleide luchtsnelheid eronder
- **Tijd per cirkel** en **Cirkelstraal**: de spreiding van je cirkels, als minimale, mediane en maximale tijd, en 25e percentiel, mediaan en 75e percentiel van de straal

#### Drift en wind

- **Windsnelheid**: geschat uit hoe je cirkels verdreven
- **Driftafst.**: hoe ver de thermiek je meenam terwijl je steeg
- **Richting**: waar de wind vandaan kwam, met een kompas. De kompaspijl wijst de kant op waar de wind naartoe blies, en het label geeft de richting "vanuit", zoals in een weersverwachting

#### Tijd

**Begin**, **Einde** en **Duur** van de stijging. Handig om naast je eigen aantekeningen te leggen.

#### Opbouw van de score

Laat zien hoe de kwaliteitsscore is opgebouwd: één balk per factor (**Stijgen**, **Netto stijging**, **Centrering**, **Regelmaat** en **Volgehouden**), het gewicht, je werkelijke waarde en de punten die het opleverde. De link **Hoe wordt dit berekend?** brengt je naar de volledige formule.

#### Aanbevelingen

Op basis van de cijfers hierboven krijg je gerichte feedback voor deze stijging, bijvoorbeeld:

- Positieve punten op een groene achtergrond: "Great core entry: found the strongest lift in 12 s."
- Suggesties op een oranje achtergrond: "Slow core entry: … Consider wider initial circles to feel the gradient."

De tips komen uit de eigen metingen van deze thermiek (kerngrootte, drift, hellingshoek, variatie), niet uit algemeen advies. Voor een overzicht van de hele vlucht kijk je naar het paneel **Coaching** op het tabblad **Overzicht** van de vlucht.

## Stijgsnelheid per hoogte en tijd

Onderaan het tabblad staat elke thermiek uitgezet op tijdstip en hoogte, gekleurd naar stijgsnelheid. Wissel de hoogtereferentie tussen **AMSL** en **AGL** (boven de startplaats). De gestippelde lijn is het werkplafond van de dag; splitst die in twee treden, dan lag het plafond 's ochtends anders dan 's middags. Klik op een punt om terug omhoog te springen naar die thermiek in de viewer.

## De kwaliteitsscore uitgelegd

De kwaliteitsscore is niet simpelweg "goede stijgsnelheid = hoge score". Het is een score op 100 die vijf factoren combineert:

1. **Stijgen**: hoe sterk het stijgen op zijn best was
2. **Netto stijging**: gewonnen hoogte gedeeld door de tijd in de thermiek, waar de wind niets aan verandert
3. **Centrering**: hoe dicht je bij de kern bleef
4. **Regelmaat**: hoe gelijkmatig de stijging was
5. **Volgehouden**: of je echt bleef en cirkelde, in plaats van er alleen doorheen te vliegen

Een knaller van een thermiek waar je wat in rondzwierf kan lager scoren dan een gemiddelde die je perfect hebt uitgewerkt. Het gaat om techniek, niet alleen om geluk.

**Kwaliteitslabels:**

| Score | Label |
|---|---|
| 74 en hoger | Uitstekend |
| 68 tot 73 | Zeer goed |
| 63 tot 67 | Goed |
| 58 tot 62 | Redelijk |
| Onder 58 | Zwak |

Deze grenzen zijn afgestemd op echte vluchten in We-Fly: een gewone thermiek komt rond de 65 uit. De volledige formule, met een uitgewerkt voorbeeld, staat in [De totale thermiekscore uitgelegd](/doc/overall-thermal-score).

## Patronen die je kunt tegenkomen

**Veel drift, weinig centrering**: misschien stap je te wijd in, of maak je je cirkel niet snel genoeg krapper als je stijgen vindt.

**Goede centreertijd maar lage netto stijging**: de thermiek zelf was misschien zwak, of je vloog na het vinden van de kern nog cirkels erbuiten. Niet altijd jouw schuld!

**Hoge variatie**: kan aan de omstandigheden liggen (een ruige dag) of aan een wisselende hellingshoek. De aanbevelingen proberen die twee uit elkaar te houden door te kijken hoeveel je cirkelstraal veranderde.

**De ene thermiek snel in de kern, de andere traag**: kijk naar je instaptechniek. Kwam je tegen de wind in of met de wind mee binnen? Schoot je de kern voorbij?

## Wanneer gebruik je dit?

- **Nabespreking na de vlucht**: begrijpen wat werkte en wat niet
- **Voorbereiding op wedstrijden**: je thermiektechniek onder druk analyseren
- **Omstandigheden vergelijken**: zien hoe de thermiekkwaliteit verschilt per tijdstip, vlieggebied of weer
- **Je vooruitgang volgen**: vluchten uit verschillende maanden bekijken om te zien hoe je groeit
- **Voor het volgende biertje**: je maten laten zien dat je dat monster *echt* gecentreerd hebt (bewijs!)

## Tips voor een betere analyse

1. **Schone GPS-data helpt**: een zwak GPS-signaal geeft een minder nauwkeurige analyse, en een logger die elke seconde registreert geeft de beste resultaten
2. **Vergelijk gelijkaardige thermieken**: vergelijk je techniek in vergelijkbare omstandigheden voor zinvolle inzichten
3. **Blijf niet hangen aan één vlucht**: trends over veel vluchten zeggen meer dan één perfecte thermiek
4. **De wind telt mee**: een score "Redelijk" op een winderige dag kan beter vliegwerk zijn dan "Zeer goed" in stille lucht

## Wat dit niet doet

- **Toekomstige thermiek voorspellen**: het is analyse, geen weersverwachting
- **Je beslissingen beoordelen**: had je die stijging om 11 uur moeten nemen of verder moeten gaan? Blijft jouw keuze
- **Ervaring vervangen**: het laat data zien, maar thermiek leren *voelen* kost nog altijd vliegtijd

## Kortom

Hier word je niet van de ene op de andere dag een betere piloot van, maar je ziet *precies* wat je in thermiek doet. Of je nu sneller wilt centreren of gewoon wilt weten waarom één stijging anders aanvoelde, het tabblad **Thermiek** staat voor je klaar.

Ga nu vliegen, zoek wat thermiek en kom terug om te zien of je zo goed bent als je denkt.

---

Zie ook: [Zo werkt thermiekdetectie](/doc/advanced-thermal-analysis-settings) | [De totale thermiekscore uitgelegd](/doc/overall-thermal-score)
