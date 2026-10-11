---
title: Geavanceerde thermiekanalyse
description: Duik in elke thermiek die je gevlogen hebt, met centreren, stijgsnelheid en efficiëntie gescoord, vlucht per vlucht
category: Thermal Analysis
order: 1
---

Ooit afgevraagd of je echt een thermiekgenie bent of gewoon geluk had? Het tabblad **Thermiek** van elke vlucht is je persoonlijke partner voor de nabespreking: het pluist elke stijging uit die je gevlogen hebt, cirkel per cirkel.

## Wat is dit ding?

Het is een analyse na de vlucht die elke beweging volgt die je in thermiek maakte. Het blijft niet staan bij „je bent 500 m gestegen“. Het kijkt naar *hoe* je gestegen bent: zat je als een prof achter de kern aan, of toerde je langs de randen?

Als je een vlucht uploadt, herkent We-Fly elke thermiek die je gedraaid hebt, geeft elke thermiek een kwaliteitsscore op 100 en stelt een gedetailleerde analyse op. Zie het als een coach die je track en je variolijn bekijkt, stijging per stijging. Benieuwd hoe een stijging überhaupt herkend wordt? Lees dan [Hoe thermiekdetectie werkt](/doc/advanced-thermal-analysis-settings).

Open een vlucht en kies het tabblad **Thermiek**. Het getal naast de naam van het tabblad is het aantal gevonden thermieken.

## Het hoofdscherm

Het tabblad lees je van boven naar beneden:

1. Een samenvattingsstrook voor de hele vlucht
2. De grafiek **Vario t.o.v. cirkelstraal**
3. Filterchips en een tijdlijn om een thermiek te kiezen
4. De viewer voor de geselecteerde thermiek: kaart of 3D-weergave aan de ene kant, details aan de andere
5. De grafiek **Stijgsnelheid per hoogte en tijd**

### Samenvattingsstrook van de vlucht

Je dag in vogelvlucht:

- **Thermieken**: hoeveel stijgingen de selectie haalden
- **Beste**: de hoogste kwaliteitsscore van de vlucht, met het nummer van de thermiek en het kwaliteitslabel
- **Winst**: alle hoogte die je in thermiek gewonnen hebt
- **Gem. stijging**: je gemiddelde stijgsnelheid over alle thermieken
- **Kwaliteit**: de gemiddelde kwaliteitsscore, met de mediaan eronder

### Vario t.o.v. cirkelstraal

Elke volledige cirkel die je gevlogen hebt, wordt een stip: de straal langs de onderkant, de stijgsnelheid die je eruit haalde langs de zijkant. De achtergrond is verdeeld in zones met de labels **riskant**, **ideaal**, **ok** en **krapper**, van heel krappe cirkels links tot brede rechts. Zitten de meeste van je beste stippen in de zone **krapper**, dan weet je waaraan je de volgende vlucht moet werken.

### Een thermiek kiezen

Boven de tijdlijn staat een rij filterchips, die elk tonen hoeveel thermieken erbij passen:

- **Alle**: elke thermiek
- **Beste 5**: de vijf sterkste stijgingen volgens gemiddelde stijgsnelheid
- **Onder mediaan**: thermieken met een stijgsnelheid onder de mediaan van de vlucht
- **Veel drift**: thermieken waarin je meer dan 30 m wegdreef voor elke 100 m die je won (alleen stijgingen van 50 m of meer tellen mee)

Onder de chips zet de tijdlijn elke thermiek uit op de echte klok van de vlucht. De kleur van elke stip is haar kwaliteit en haar grootte is de gewonnen hoogte, zodat je „die grote rond half twee“ makkelijk terugvindt. Klik op een stip om die thermiek in de viewer te openen.

De geselecteerde thermiek staat in het adres van de pagina, zodat je een link rechtstreeks naar „Thermiek #7“ kunt delen.

### De thermiekviewer

De titelbalk toont **Thermiek #N**, het kwaliteitslabel, het begintijdstip, de gewonnen hoogte en de gemiddelde stijging. Rechts wissel je tussen **2D-kaart** en **3D-weergave**.

**Op de 2D-kaart:**

- **De track van de geselecteerde thermiek** wordt getekend als stippen met een kleur volgens de vario: groen voor sterk stijgen (boven 3 m/s), geel voor stijgen tot 3 m/s, rood voor dalen
- De markeringen **Instappunt** en **Uitstappunt** tonen waar de stijging begon en eindigde
- **De thermiekkern** van elke thermiek is een markering met een gestippelde ring. De geselecteerde is rood, de andere zijn vaag roze voor de context. Beweeg over een kern om haar sterkte te zien
- **Huidige positie** is de lichtblauwe markering die beweegt tijdens het afspelen

**In de 3D-weergave** wordt dezelfde stijging getekend als een spiraal die je kunt draaien, met een legende voor **Sterk stijgen**, **Zwak stijgen**, **Dalende lucht**, **Thermiekkern**, **Uitstaphoogte** en **Huidige positie**.

## De animatie afspelen

Onder de kaart of de 3D-weergave staat de afspeelbalk:

- **Afspelen** / **Pauze**: speel de thermiek punt per punt opnieuw af
- De ronde pijl: terug naar het eerste punt
- De pijlen voor het vorige en volgende frame: loop door de stijging, één GPS-punt per keer
- **Frame**-teller: waar je in de thermiek zit (bijvoorbeeld 42/156)
- Tijd, hoogte en vario op het huidige punt
- De doelwitknop: **Kaart centreren op deze thermiek**, handig als je wat rondgeschoven hebt

Frame per frame doorlopen is de beste manier om precies het moment te zien waarop je de kern vond, of kwijtraakte.

## Details van de thermiek

Naast de viewer (eronder op een telefoon) staat je coachingrapport. Bovenaan een grote kwaliteitsscore met haar label, plus twee snelle aflezingen: **eff** (efficiëntie) en **cent** (centrering).

Daaronder zijn de details opgevouwen in secties. Er gaat er telkens één open, en elke sectie toont een voorbeeld van één regel als ze dicht is, zodat je het hele verhaal kunt overlopen zonder te scrollen.

#### Stijging

- **Winst**: totale gewonnen hoogte
- **Gem.**: gemiddelde stijgsnelheid
- **Max.**: beste stijging, gladgestreken over 5 seconden (de ruwe piek van één punt staat eronder)
- **Min.**: het zwakste moment, meestal bij het instappen of toen je uit de kern viel
- **Variatie**: hoeveel de stijgsnelheid schommelde. Laag betekent een gladde thermiek, hoog betekent schokkerig of turbulent

#### Kern

- **Sterkte**: gemiddelde stijging in de kern, je sweet spot
- **Centreertijd**: hoe lang je erover deed om de kern te bereiken nadat de thermiek begon. Lager is beter
- **Grootte**: de straal van het stijgen in de kern
- **Gem. afst.**: hoe ver je gemiddeld van de kern rondcirkelde
- **Centrering**: hoe dicht je bij de kern bleef, als percentage. Draaien op de straal van de kern zelf scoort 100%

#### Draaigedrag

- **Richting**: links of rechts (de meeste piloten hebben een favoriete kant, geen oordeel)
- **Cirkels**: aantal volledige cirkels
- **Draaisnelheid**: gemiddelde draaisnelheid in graden per seconde
- **Hellingshoek**: geschat uit de grootte en de duur van je cirkels, met de afgeleide luchtsnelheid eronder
- **Tijd per cirkel** en **Cirkelstraal**: de spreiding van je cirkels, als minimale, mediane en maximale tijd, en straal op het 25e percentiel, de mediaan en het 75e percentiel

#### Drift en wind

- **Windsnelheid**: geschat uit hoe je cirkels wegdreven
- **Driftafst.**: hoe ver de thermiek je meenam terwijl je steeg
- **Richting**: waar de wind vandaan kwam, met een kompas. De pijl van het kompas wijst de richting waarin de wind waaide, en het label geeft de richting „vanwaar“, zoals in een weerbericht

#### Tijd

**Begin**, **Einde** en **Duur** van de stijging. Handig om te vergelijken met je eigen notities.

#### Opbouw van de score

Toont hoe de kwaliteitsscore is opgebouwd: één balk per factor (**Stijging**, **Efficiëntie**, **Centrering**, **Regelmaat** en **Volgehouden**), het gewicht, je echte waarde en de punten die hij opleverde. De link **Hoe wordt dit berekend?** brengt je naar de volledige formule.

#### Tips

Op basis van de cijfers hierboven krijg je specifieke feedback voor deze stijging, bijvoorbeeld:

- Positieve opmerkingen op een groene achtergrond: „Sterke instap: het sterkste stijgen gevonden in 12 s.“
- Suggesties op een oranjegele achtergrond: „Trage instap in de kern: … Begin met wijdere cirkels om de gradiënt te voelen.“

De tips worden opgesteld op basis van de eigen metingen van deze thermiek (grootte van de kern, drift, hellingshoek, variatie), niet uit algemeen advies. Voor een samenvatting over de hele vlucht kijk je naar het paneel **Coaching** in het tabblad **Overzicht** van de vlucht.

## Stijgsnelheid per hoogte en tijd

Onderaan het tabblad staat elke thermiek uitgezet volgens uur van de dag en hoogte, met een kleur volgens de stijgsnelheid. Wissel de hoogtereferentie tussen **AMSL** en **AGL** (boven de startplaats). De gestippelde lijn is het werkplafond van de dag; splitst die in twee treden, dan verschilden het plafond van de ochtend en dat van de namiddag. Klik op een punt om terug naar boven te springen, naar die thermiek in de viewer.

## De kwaliteitsscore uitgelegd

De kwaliteitsscore is niet gewoon „goede stijgsnelheid = hoge score“. Het is een score op 100 die vijf factoren combineert:

1. **Stijging**: hoe sterk de stijgende lucht op haar best was
2. **Efficiëntie**: gewonnen hoogte tegenover weggedreven afstand
3. **Centrering**: hoe dicht je bij de kern bleef
4. **Regelmaat**: hoe gelijkmatig de stijging was
5. **Volgehouden**: of je echt bleef en rondjes draaide, in plaats van er gewoon door te vliegen

Een knallende thermiek waarin je rondzwierf, kan lager scoren dan een matige die je perfect uitwerkte. Het gaat om techniek, niet alleen om geluk.

**Kwaliteitslabels:**

| Score | Label |
|---|---|
| 80 en hoger | Uitzonderlijk |
| 73 tot 79 | Uitstekend |
| 66 tot 72 | Goed |
| 60 tot 65 | Redelijk |
| Onder 60 | Zwak |

Deze grenzen zijn afgesteld op echte vluchten in We-Fly: een typische thermiek komt rond de 65 uit. De volledige formule, met een uitgewerkt voorbeeld, staat in [De algemene thermiekscore uitgelegd](/doc/overall-thermal-score).

## Patronen die je misschien opvallen

**Veel drift, lage centrering**: je vliegt misschien te wijd binnen of verkleint je cirkel niet snel genoeg als je stijgen vindt.

**Goede centreertijd maar lage efficiëntie**: de thermiek zelf was misschien zwak, of de wind sterk. Niet altijd jouw schuld!

**Hoge variatie**: dat kan aan de omstandigheden liggen (een ruige dag) of aan een wisselende hellingshoek. De tips proberen die twee uit elkaar te houden door te kijken hoeveel je cirkelstraal veranderde.

**Snel in de kern bij de ene thermiek, traag bij de andere**: let op je instaptechniek. Vloog je binnen aan de loefzijde of aan de lijzijde? Schoot je voorbij de kern?

## Wanneer gebruik je deze tool?

- **Nabespreking na de vlucht**: begrijp wat werkte en wat niet
- **Voorbereiding op een wedstrijd**: analyseer je thermiektechniek onder druk
- **Omstandigheden vergelijken**: zie hoe de kwaliteit van de thermiek verandert met het uur van de dag, het vlieggebied of het weer
- **Je vooruitgang volgen**: bekijk vluchten uit verschillende maanden om je groei te zien
- **Voor het volgende biertje**: toon je vliegmaten dat je die monsterthermiek *echt* gecentreerd hebt (bewijs!)

## Tips voor een betere analyse

1. **Schone GPS-gegevens helpen**: een zwak GPS-signaal geeft een minder nauwkeurige analyse, en een logger die elke seconde registreert geeft de beste resultaten
2. **Vergelijk gelijkaardige thermieken**: vergelijk je techniek in vergelijkbare omstandigheden voor zinvolle inzichten
3. **Blijf niet hangen aan één vlucht**: trends over veel vluchten zeggen meer dan één perfecte thermiek
4. **De wind telt mee**: een score „Redelijk“ op een winderige dag kan beter vliegwerk zijn dan „Uitstekend“ in windstille lucht

## Wat deze tool niet doet

- **Toekomstige thermiek voorspellen**: het is analyse, geen voorspelling
- **Je beslissingen beoordelen**: had je die stijging om 11 uur moeten nemen of moeten doorvliegen? Nog altijd jouw beslissing
- **Ervaring vervangen**: de tool toont gegevens, maar thermiek leren *voelen* vraagt nog altijd vlieguren

## Waar het op neerkomt

Deze tool maakt je niet van de ene dag op de andere een betere piloot, maar hij toont je *precies* wat je in thermiek doet. Of je nu je centreertijd wilt inkorten of gewoon nieuwsgierig bent waarom die ene stijging anders aanvoelde, het tabblad **Thermiek** staat achter je.

Ga nu vliegen, pak wat thermiek en kom terug om te zien of je zo goed bent als je denkt.

---

Zie ook: [Hoe thermiekdetectie werkt](/doc/advanced-thermal-analysis-settings) | [De algemene thermiekscore uitgelegd](/doc/overall-thermal-score)
