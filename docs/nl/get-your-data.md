---
title: Je gegevens ophalen
description: Download een volledige kopie van je vluchtgegevens
category: Account & Data
order: 1
---

## Jouw gegevens, jouw regels

Open je **Profiel** (via het accountmenu, of ga meteen naar `/profile`). Klik in het paneel **Account** op **Gegevens exporteren**. De rij toont hoeveel vluchtrecords je hebt, en één klik later staat er een ZIP-bestand in je downloads, sneller dan een glijvlucht naar beneden na een mislukte start.

Je hoeft niets in te vullen en op geen enkele e-mail te wachten: het archief wordt ter plekke aangemaakt. Met honderden vluchten kan het even duren voor de download start, dus geef het een paar seconden voor je opnieuw klikt.

## Wat zit erin?

De ZIP (met als naam `we-fly-data-export-` gevolgd door een getal) bevat één map `my-data` met alles wat we over jou hebben, AVG-stijl:

- **flights/**: al je IGC-bestanden, geordend per datum (`flights/YYYY/MM/DD/`), zodat je die epische thermiekdag van 2021 terugvindt. Elk bestand behoudt zijn oorspronkelijke naam en is exact het bestand dat je uploadde, byte voor byte
- **data-export.json**, het nerdwerk: je profiel en voorkeuren (eenheden, weergave-instellingen, schermkleuren, e-mailvoorkeuren), de metadata van elke vlucht (datum, piloot, scherm, duur, afstand, start en landing, XC-score, deelstatus), de inlogaccounts die aan je profiel gekoppeld zijn, je passkeys (alleen namen en datums, nooit sleutelmateriaal) en je toestemmingen
- **README.txt**: legt uit wat wat is, plus een korte samenvatting van je totalen, voor als je het zes biertjes later opent
- **missing.txt**: verschijnt alleen als we een IGC-bestand bij ons niet konden vinden, en somt op welke vluchten het betreft

Correcties die je in We-Fly hebt gemaakt (een verbeterde datum, een hernoemd scherm) staan in `data-export.json`. De IGC-bestanden zelf worden nooit aangepast, dus ze blijven exact zoals je instrument ze heeft opgenomen.

## Waarom zou je?

- **Back-up**: harde schijven gaan stuk, thermiek in de cloud niet
- **Verhuizen**: neem je je logboek mee naar een ander platform? IGC is het formaat dat elk logboek begrijpt
- **Bewijs**: moet je je club tonen dat je die driehoek echt gevlogen hebt? Alles staat erin

## Technische details voor de nieuwsgierigen

IGC-bestanden werken met elke software voor vluchtanalyse: XCTrack, SeeYou, wat je vliegmaten ook gebruiken. De JSON is gestructureerd en machineleesbaar, dus je kunt je eigen statistieken scripten als je dat soort piloot bent.

Even een waarschuwing: de export heeft een limiet, dus ram niet op de knop alsof je door een preflightchecklist klikt.

Wil je maar een paar IGC-bestanden, niet het hele archief? Selecteer vluchten in je logboek en gebruik **IGC-bestanden downloaden** om alleen die te krijgen, als ZIP.
