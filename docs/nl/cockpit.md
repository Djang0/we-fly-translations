---
title: Cockpit-analyses
description: Analyseer je vliegstatistieken, trends en prestaties
category: Cockpit
order: 1
---
De Cockpit is je prestatiedashboard, met uitgebreide statistieken en analyses over al je vluchten. Gebruik hem om je vooruitgang te volgen, patronen te ontdekken en je beste vlieggebieden en omstandigheden te vinden.

## Overzicht

Open de [Cockpit](/cockpit) voor al je vliegstatistieken.

## Weergaven van de Cockpit

De Cockpit heeft zes weergaven, elk met zijn eigen inzichten:

1. **Overzicht**: statistieken en totalen van de gefilterde gegevens
2. **Scherm**: prestaties per scherm
3. **Seizoen**: vergelijking van jaar tot jaar
4. **Land**: statistieken van je vluchten in het buitenland
5. **Startplaats**: statistieken per vlieggebied met prestatiescores
6. **Maand**: verdeling per maand en seizoenspatronen

### Navigatie

- Gebruik de hoofdtabbladen om van weergave te wisselen
- Elke weergave volgt de [gefilterde gegevens](./data-filters.md)

## Statistieken in het overzicht

De overzichtspagina van de [Cockpit](/cockpit) toont je vliegstatistieken op basis van de [gefilterde gegevens](./data-filters.md).

### Vluchttotalen

#### Totaal vluchten
- **Definitie**: aantal vluchten in je logboek

#### Totale vliegtijd
- **Definitie**: som van de duur van al je vluchten
- **Eenheid**: uren en minuten
- **Berekening**: som van alle (landingstijd min starttijd)

#### Totale thermiektijd
- **Definitie**: totale tijd die je cirkelend in thermiek doorbracht
- **Eenheid**: uren en minuten
- **Verdeling**: opgesplitst in links en rechts thermieken

#### Totale glijtijd
- **Definitie**: totale tijd in rechtlijnige vlucht
- **Eenheid**: uren en minuten
- **Interpretatie**: meer glijtijd = efficiënter overlandvliegen

### Afstand en score

Alle XC-afstanden en scores worden berekend door de opensourcebibliotheek [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), gemaakt en onderhouden door [Momtchil Momtchev](https://github.com/mmomtchev).

#### Totale XC-afstand
- **Definitie**: som van al je gescoorde overlandafstanden
- **Eenheid**: kilometer
- **Gebruik**: volg je totale XC-prestaties

#### Totaal XC-punten
- **Definitie**: som van al je XContest-scores
- **Inclusief**: alle multipliers (vrije vlucht, driehoeken)
- **Gebruik**: vergelijk je XC-prestaties door de tijd heen

#### Totale tracklengte
- **Definitie**: som van alle afstanden van je GPS-tracks
- **Eenheid**: kilometer
- **Altijd > totale XC-afstand**: inclusief al het cirkelen en alle omwegen

### Persoonlijke records

#### Max. XC-afstand
- **Definitie**: je langste gescoorde overlandvlucht
- **Weergave**: afstand en datum
- **Prestatie**: je persoonlijk XC-record!

#### Max. XC-punten
- **Definitie**: hoogste XContest-score voor één vlucht
- **Weergave**: punten en datum
- **Opmerking**: kan verschillen van de max. afstand (door de multipliers van driehoeken)

#### Max. hoogte
- **Definitie**: hoogste hoogte over al je vluchten
- **Eenheid**: meter boven zeeniveau (ASL)
- **Weergave**: hoogte

#### Max. hoogtewinst
- **Definitie**: grootste hoogtewinst in één vlucht
- **Eenheid**: meter
- **Berekening**: max. hoogte - min. hoogte

#### Sterkste thermiek
- **Definitie**: beste stijgsnelheid die je ooit tegenkwam
- **Eenheid**: meter per seconde (m/s)
- **Weergave**: stijgsnelheid

#### Max. snelheid
- **Definitie**: hoogste geregistreerde grondsnelheid
- **Eenheid**: kilometer per uur (km/h)
- **Opmerking**: inclusief het effect van de wind

#### Max. duur
- **Definitie**: langste vliegtijd
- **Eenheid**: uren en minuten
- **Weergave**: duur en datum

## Weergave per maand

Ga naar **/cockpit?view=month** voor je statistieken per maand.

### Verdeling per maand

Voor elke maand met vluchten:
- Totaal aantal vluchten die maand
- Totale afstand
- Totaal punten
- Gemiddelde vluchtwaarden

### Seizoenspatronen

Ontdek patronen:
- **In welke maanden vlieg je het meest?**
- **Wanneer is de thermiek het sterkst?**
- **Hoe verandert je vliegen door het jaar heen?**

### Toepassingen

- **Plan je seizoen**: zie wanneer je meestal het best vliegt
- **Volg je regelmaat**: hoeveel maanden per jaar ben je actief?
- **Vind je hoogseizoen**: wanneer vlieg je je beste XC-afstanden?

## Weergave per seizoen (jaar)

Ga naar **/cockpit?view=season** voor je jaarstatistieken.

### Vergelijking van jaar tot jaar

Voor elk seizoen (jaar):
- Totaal aantal vluchten
- Totale XC-afstand en punten
- Gemiddelde vluchtwaarden
- Persoonlijke records van dat jaar

### Vooruitgang volgen

Vergelijk jaren en zie:
- Vlieg je meer?
- Worden je XC-afstanden langer?
- Hoe verhouden de verschillende jaren zich tot elkaar?

### Toepassingen

- **Volg je vooruitgang op lange termijn**
- **Vergelijk verschillende jaren**
- **Stel jaardoelen**

## Weergave per scherm

Ga naar **/cockpit?view=glider** om de prestaties van je schermen te vergelijken.

### Statistieken per scherm

Voor elk scherm in je logboek:
- Aantal vluchten
- Totale afstand en punten
- Gemiddelde XC-afstand
- Gemiddelde vluchtduur
- Max. gehaalde afstand
- Gemiddelde stijgsnelheden

### Schermen vergelijken

Beantwoord vragen als:
- Met welk scherm haal ik de beste XC-prestaties?
- Hoe verhouden mijn verschillende schermen zich tot elkaar?
- Welk scherm vlieg ik het vaakst?

### Toepassingen

- **Materiaalkeuze**: je volgende scherm kiezen
- **Prestaties vergelijken**: verschillende schermklassen naast elkaar leggen
- **Specialisatie**: zie welk scherm het best werkt in welke omstandigheden

## Weergave per startplaats

Ga naar **/cockpit?view=takeoff** om je prestaties per vlieggebied te analyseren.

### Statistieken per vlieggebied

Voor elke startplaats:
- Aantal vluchten vanaf die startplaats
- Totale XC-afstand
- Gemiddelde XC-afstand
- Max. afstand vanaf die startplaats
- **Prestatiescore (Z-score)**: statistische detectie van uitschieters (zie: [Z-score-gids voor piloten](/doc/z-score-pilot-guide))

## Weergave per land

Ga naar **/cockpit/?view=country** voor je internationale statistieken.

### Statistieken per land

Voor elk land waar je gevlogen hebt:
- Aantal vluchten
- Totale XC-afstand
- Gemiddelde waarden
- Topvlieggebieden in dat land

## Tips en goede gewoonten

### Bouw je dataset op

- **Upload al je vluchten**: meer gegevens = betere statistieken
- **Oude vluchten**: upload oude IGC-bestanden voor een volledig beeld
- **Regelmaat**: geregeld vliegen geeft betere trends

### Gebruik filters slim

- **Begin breed**: bekijk eerst de algemene patronen
- **Verfijn daarna**: pas filters toe voor specifieke vragen
- **Vergelijk appels met appels**: gebruik dezelfde filters als je vergelijkt

### Begrijp de context

Statistieken zijn krachtig, maar houd rekening met:
- **Vooruitgang in je vaardigheden**: je wordt beter met de tijd
- **Ander materiaal**: een nieuw scherm beïnvloedt je prestaties
- **Omstandigheden**: het weer verschilt van seizoen tot seizoen
- **Steekproefgrootte**: 2 vluchten tegenover 200 vluchten (wat is betrouwbaarder?)

### Stel doelen

Gebruik statistieken om:
- **Je vooruitgang te volgen**: vergelijk met vorige seizoenen
- **Uitdagingen te stellen**: verbeter je persoonlijke records
- **Verbeteringen te plannen**: zie waar je nog kunt groeien
