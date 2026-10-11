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

De Cockpit heeft elf weergaven, elk met zijn eigen inzichten:

1. **Overzicht**: statistieken en totalen van de gefilterde gegevens
2. **Trends**: je vliegen door de tijd heen, van dag tot dag tot van jaar tot jaar
3. **Thermieken**: stijgsnelheden, cirkelen en kwaliteit van je thermieken, seizoen na seizoen
4. **Fasen**: hoe je vliegtijd verdeeld is over thermiek, zoeken, glijvlucht en zweven
5. **Scherm**: verdeling van je vliegtijd per scherm
6. **Startplaats**: statistieken per vlieggebied met z-scores
7. **Land**: statistieken van je vluchten in het buitenland
8. **Seizoen**: vergelijking van jaar tot jaar
9. **Maand**: verdeling per maand en seizoenspatronen
10. **CIVL**: je CIVL-wereldranking
11. **Kaart**: je startplaatsen op een kaart

### Navigatie

- Kies een weergave in het menu van de Cockpit
- Elke weergave volgt de [gefilterde gegevens](./data-filters.md)

## Statistieken in het overzicht

De overzichtspagina van de [Cockpit](/cockpit) toont je vliegstatistieken op basis van de [gefilterde gegevens](./data-filters.md). Elke afstand, hoogte en snelheid staat in de eenheden die je in je profiel gekozen hebt.

### Vluchttotalen

De strook bovenaan geeft je de grote vier:

#### Totaal vluchten
- **Definitie**: aantal vluchten in je logboek

#### Totale vliegtijd
- **Definitie**: som van de duur van al je vluchten
- **Eenheid**: uren en minuten
- **Berekening**: som van alle (landingstijd min starttijd)

#### Afstand
- **Definitie**: totale tracklengte over al je vluchten

#### Langste vlucht
- **Definitie**: je langste vliegtijd
- **Weergave**: duur; klik erop om die vlucht te openen

#### Vluchtefficiëntie
- **Definitie**: tijd die je cirkelend in thermiek doorbracht (**Thermieken**) tegenover tijd in rechtlijnige vlucht (**Glijden**)
- **Eenheid**: uren en minuten, plus de verdeling in procent

#### Draairichting in thermiek
- **Definitie**: hoe je thermiektijd verdeeld is tussen **Linksom** en **Rechtsom**

#### Verdeling solo/tandem
- **Definitie**: hoe je vliegtijd verdeeld is tussen **Solo**- en **Tandem**vluchten (alleen getoond als je tandemvluchten hebt)

### Afstand en score

Alle XC-afstanden en scores worden berekend door de opensourcebibliotheek [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), gemaakt en onderhouden door [Momtchil Momtchev](https://github.com/mmomtchev).

#### XC-afstand
- **Definitie**: som van al je gescoorde overlandafstanden
- **Gebruik**: volg je totale XC-prestaties

#### XC-punten
- **Definitie**: som van al je XContest-scores
- **Inclusief**: alle multipliers (vrije afstand, driehoeken)
- **Gebruik**: vergelijk je XC-prestaties door de tijd heen

#### Tracklengte
- **Definitie**: som van alle afstanden van je GPS-tracks
- **Altijd > XC-afstand**: inclusief al het cirkelen en alle omwegen

### Persoonlijke records

Elk record linkt naar de vlucht waar het vandaan komt: klik op de waarde om ze te openen.

#### Max. hoogte
- **Definitie**: hoogste hoogte over al je vluchten
- **Eenheid**: boven zeeniveau (ASL)

#### Max. hoogtewinst
- **Definitie**: grootste hoogtewinst in één vlucht
- **Berekening**: max. hoogte - min. hoogte

#### Max. snelheid
- **Definitie**: hoogste grondsnelheid die je 5 seconden aanhield, met GPS-pieken eruit gefilterd
- **Opmerking**: inclusief het effect van de wind

#### Beste XC-afstand
- **Definitie**: je langste gescoorde overlandvlucht
- **Prestatie**: je persoonlijk XC-record!

#### Beste XC-score
- **Definitie**: hoogste XContest-score voor één vlucht
- **Opmerking**: kan verschillen van de beste afstand (door de multipliers van driehoeken)

#### Laagste low save
- **Definitie**: het laagste punt (boven de grond) van waaruit je weer omhoog geraakte, en hoeveel hoogte je terugwon

### Prestatiecijfers

- **Med. cirkeltijd**: mediane tijd per cirkel van 360°
- **Med. cirkelstraal**: mediane draaistraal tijdens het cirkelen
- **Mediane g-factor**: belastingsfactor (zie de [G-factorgids voor piloten](/doc/g-factor-pilot-guide))
- **Sterkste thermiekpiek**: beste stijgsnelheid, aangehouden over 5 seconden; klik erop om meteen naar die thermiek te springen

## Weergave Trends

Ga naar **/cockpit?view=trends** om te zien hoe je vliegen door de tijd evolueert.

Kies een **Maatstaf** (**Vliegtijd**, **Vluchten**, **Gem. afstand**, **Gem. vliegtijd**, **Gem. snelheid**), een **Interval** (**Dag**, **Week**, **Maand**, **Jaar**), een **Periode** (**30 dagen**, **12 maanden**, **Dit jaar**, **Alles**) en een **Opsplitsing** (**Totaal** of **Per scherm**). Wissel de **Weergave** tussen **Grafiek** en **Tabel**. Klik op een kolom om de vluchten ervan in het logboek te openen.

## Weergave Thermieken

Ga naar **/cockpit?view=thermaling** voor je stijgstatistieken over elke thermiek in de gefilterde vluchten: **Mediane stijging**, **Beste stijging**, **Mediane hoogtewinst**, **Thermiek/u**, **Thermiektijd**, cirkeltijd en cirkelstraal, en **Low saves**. De grafieken van seizoen tot seizoen zijn gegroepeerd onder **Efficiëntie**, **Volume**, **Techniek** en **Beheersing**.

## Weergave Fasen

Ga naar **/cockpit?view=phases** om te zien hoe je vliegtijd verdeeld is over **Thermiek**, **Zoeken**, **Glijvlucht** en **Zweven**, met je **Mediaan glijgetal**, **Mediane glijsnelheid** en **Cirkels / min**, seizoen na seizoen.

## Weergave per maand

Ga naar **/cockpit?view=month** voor je statistieken per maand.

### Verdeling per maand

- **Actiefste maanden**: je drukste maanden, met **Totaal vluchten** over alle jaren, je **Actiefste jaar** en **Activiteit per jaar**
- **Visuele analyse**: **Duur**, **Aantal** en **Z-score** per maand en per jaar, als **Gegroepeerd** of **Gestapeld** staafdiagram
- **Maandoverzicht per jaar**: een tabel van je vluchten per maand en per jaar

### Seizoenspatronen

Ontdek patronen:
- **In welke maanden vlieg je het meest?**
- **Wanneer is de thermiek het sterkst?**
- **Hoe verandert je vliegen door het jaar heen?**

### Toepassingen

- **Plan je seizoen**: zie wanneer je meestal het best vliegt
- **Volg je regelmaat**: hoeveel maanden per jaar ben je actief?
- **Vind je hoogseizoen**: wanneer verzamel je de meeste vliegtijd?

## Weergave per seizoen (jaar)

Ga naar **/cockpit?view=season** voor je jaarstatistieken.

### Vergelijking van jaar tot jaar

Voor elk seizoen (jaar) toont de tabel:
- **Vluchten**
- **Totaal uren**
- **Gem./vlucht** (uren per vlucht)
- **Z-score** van de gemiddelde vliegtijd

Met de grafiek erboven vergelijk je seizoenen op **Duur**, **Aantal** of **Z-score**.

### Vooruitgang volgen

Vergelijk jaren en zie:
- Vlieg je meer?
- Worden je vluchten langer?
- Hoe verhouden de verschillende jaren zich tot elkaar?

### Toepassingen

- **Volg je vooruitgang op lange termijn**
- **Vergelijk verschillende jaren**
- **Stel jaardoelen**

## Weergave per scherm

Ga naar **/cockpit?view=glider** om je schermen te vergelijken.

### Statistieken per scherm

Voor elk scherm in je logboek:
- **Vluchten**
- **Totaal uren**
- **Gem./vlucht** (uren per vlucht)
- **Z-score** van de gemiddelde vliegtijd

### Schermen vergelijken

Beantwoord vragen als:
- Met welk scherm blijf ik het langst in de lucht?
- Hoe verhouden mijn verschillende schermen zich tot elkaar?
- Welk scherm vlieg ik het vaakst?

### Toepassingen

- **Materiaalkeuze**: je volgende scherm kiezen
- **Prestaties vergelijken**: verschillende schermklassen naast elkaar leggen
- **Specialisatie**: zie welk scherm het best werkt in welke omstandigheden

## Weergave per startplaats

Ga naar **/cockpit?view=takeoff** om je prestaties per vlieggebied te analyseren.

### Statistieken per vlieggebied

Voor elke startplaats toont een sorteerbare tabel:
- **Vluchten** vanaf die startplaats
- **Totaal uren**
- **Gem./vlucht** (uren per vlucht)
- **Z-score**: statistische detectie van uitschieters (zie: [Z-score-gids voor piloten](/doc/z-score-pilot-guide))

## Weergave per land

Ga naar **/cockpit?view=country** voor je internationale statistieken.

### Statistieken per land

Voor elk land waar je gevlogen hebt:
- **Vluchten**
- **Totaal uren**
- **Gem./vlucht** (uren per vlucht)
- **Z-score** van de gemiddelde vliegtijd

## Weergave CIVL

Ga naar **/cockpit?view=civl** voor je CIVL-ranking (wereld, Europa en land) en de geschiedenis ervan. Vul eerst je CIVL-ID in bij je profielinstellingen.

## Weergave Kaart

Ga naar **/cockpit?view=map** om elke startplaats waar je vanaf gevlogen hebt op een kaart te zien, met het aantal vluchten op elke plek.

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
