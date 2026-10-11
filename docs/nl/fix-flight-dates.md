---
title: Verkeerde vluchtdatums corrigeren
description: Waarom sommige instrumenten de verkeerde datum opslaan, en hoe je die corrigeert zonder je vlucht te verliezen
category: Your Flights
order: 6
---

## Als een vlucht op de verkeerde dag belandt

Elk IGC-bestand bevat de vluchtdatum in de header, met de dag eerst: `DDMMYY`. Een paar instrumenten schrijven hem andersom (`YYMMDD`). We-Fly leest dan het jaar als dag en de dag als jaar, zodat een vlucht van 9 juli 2026 kan verschijnen als 26 juli 2009.

Je track, tijden en scores kloppen. Alleen de datum zit ernaast, waardoor de vlucht in het verkeerde seizoen, de verkeerde reeks en op de verkeerde plek in je logboek terechtkomt.

## Eén vlucht corrigeren

Open het menu **⋯** van de vlucht en kies **Datum wijzigen**.

- Lijkt de datum omgewisseld, dan toont We-Fly naast de huidige datum een **voorgestelde correctie**. Met één tik pas je die toe.
- Kies anders de juiste dag in de kalender. Het tijdstip van de vlucht blijft hetzelfde; alleen de dag verandert.

## Veel vluchten tegelijk corrigeren

Heeft één instrument een heel seizoen met omgewisselde datums gelogd, selecteer die vluchten dan in het logboek en gebruik **Datumcodering corrigeren** in het selectiemenu. Dat wisselt dag en jaar in één keer om op elke geselecteerde vlucht.

Gebruik het alleen op vluchten die echt getroffen zijn. Op een correcte vlucht maak je zo van een goede datum een verkeerde, en raakt je tijdlijn door elkaar. Twijfel je, corrigeer dan eerst één vlucht en controleer het resultaat.

## Voorkomen

Werk de firmware van je instrument bij: de meeste fabrikanten hebben het datumformaat al lang geleden rechtgezet. Blijft het probleem, laat de fabrikant dan weten dat hun IGC-header de `HFDTE`-regel van de IGC-specificatie niet volgt.
