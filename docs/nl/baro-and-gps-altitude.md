---
title: Waarom baro- en GPS-hoogte verschillen
description: Wat de barometrische hoogte van je logger meet, waarom die niet klopt met GPS en hoe We-Fly hem op je startplaats zet
category: Your Flights
order: 7
---

## Twee hoogtes, twee referenties

De meeste instrumenten loggen elke seconde twee hoogtes: één van de barometer, één van de GPS. Op de vluchtpagina kies je met de schakelaar **Baro / GPS** boven de kaart welke de grafiek toont. Ze komen zelden overeen, en op sommige dagen zitten ze 200 m uit elkaar.

**GPS-hoogte** is je hoogte boven gemiddeld zeeniveau, gemeten via satellieten. Ze schommelt van seconde tot seconde, maar heeft geen dagafwijking.

**Baro-hoogte** komt uit de luchtdruk. Ze is van seconde tot seconde vloeiend en nauwkeurig, en daarom gebruikt je vario haar. Maar de IGC-standaard vraagt loggers om haar op te slaan ten opzichte van de **standaarddruk, 1013 hPa**, niet ten opzichte van de echte luchtdruk op zeeniveau van die dag (de QNH). Het scherm van je vario toont QNH als je die vóór de start instelt. Het bestand bewaart altijd de standaardversie.

## Hoeveel het kan schelen

Rond zeeniveau komt 1 hPa overeen met ongeveer 8 m hoogte.

| Dag | Luchtdruk op zeeniveau | Baro in het bestand geeft |
|---|---|---|
| Standaard | 1013 hPa | ongeveer juist |
| Stevig hogedrukgebied | 1030 hPa | ongeveer 140 m te laag |
| Winters hogedrukgebied | 1040 hPa | ongeveer 225 m te laag |
| Diep lagedrukgebied | 985 hPa | ongeveer 230 m te hoog |

De temperatuur geeft een kleinere fout die groeit met de hoogte: in lucht die warmer is dan de standaard, geeft de barometer ongeveer 4 % van je hoogte per 10 °C te weinig aan.

Bij een stevig hogedrukgebied geeft een terrein vlak bij de kust een hoogte onder nul. Een lierveld op 30 m logt bij 1030 hPa ongeveer -110 m. Die waarde klopt voor de standaard die ze gebruikt; je logger is niet kapot.

## Wat We-Fly toont

Op de hoogtegrafiek is de barocurve **op de startplaats gezet**: één keer verschoven voor de hele vlucht, zodat ze bij de start op het terrein ligt, zoals je je vario instelt voor je vertrekt. Boven de grafiek staat **Baro-hoogte · op startplaats gezet**, en de **ⓘ** naast de schakelaar Baro / GPS vertelt je welke verschuiving op die vlucht is toegepast. Heeft de track geen terreingegevens, dan wordt de barocurve in plaats daarvan op de GPS gelegd.

Dezelfde verschuiving geeft een schatting van de luchtdruk op zeeniveau van die dag: de kaart **Hoogtes** in het vluchtoverzicht toont die als **QNH van de dag**. Het is een benadering, want een temperatuur die afwijkt van de standaardatmosfeer verschuift haar, meer bij hoge startplaatsen.

De verschuiving zet de curve alleen hoger of lager. Je vario, stijgsnelheden, hoogtewinst en thermiek worden berekend uit hoogteverschillen en hangen er dus niet van af. Elke absolute hoogte in de analyse (maximale en minimale hoogte, het plafond, thermiektoppen, hoogtes boven de grond) gebruikt dezelfde verschuiving.

Je IGC-bestand wordt nooit aangepast: downloads en exports geven je het origineel, precies zoals je instrument het schreef.

## Welke je kunt vertrouwen

- **Voor stijgen, dalen en hoogtewinst:** baro. Die is vloeiend en de dagafwijking valt weg.
- **Voor absolute hoogte, luchtruim en vergelijken met andere piloten:** GPS, of baro op de startplaats gezet. De luchtruimcontrole op de vluchtkaart gebruikt altijd GPS.
- **Telefoons zonder barometer:** beide curves zijn GPS. Er valt niets in te stellen, en de **ⓘ** zegt dat ook.

Blijven de twee curves de hele vlucht ver uit elkaar, ook na de verschuiving, of springt de baro honderden meters, dan is de druksensor van je instrument misschien defect. We-Fly markeert die vluchten onder **Profile → Anomalies**.
