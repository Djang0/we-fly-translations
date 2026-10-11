---
title: IGC-bestanden exporteren
description: Hoe je je IGC-bestanden uit populaire platforms en trackers haalt
category: Your Flights
order: 3
---

## Je vluchten staan al ergens: we halen ze naar huis

Log je al op XContest of DHV-XC, of staan er jaren aan tracks op je Syride? Je hoeft niet alles opnieuw te vliegen. Zo haal je die IGC-bestanden tevoorschijn, waar ze zich ook verstoppen, en krijg je ze in We-Fly.

---

## Online platforms

### XContest

Het grootste vrijevlieglogboek ter wereld. Je tracks staan er. Je moet ze alleen even opgraven.

1. Log in op [xcontest.org](https://xcontest.org)
2. Klik op je gebruikersnaam → **My flights**
3. Open een vlucht uit de lijst
4. Zoek op de detailpagina van de vlucht het **downloadicoon** (label „IGC file“) bij de trackkaart
5. Klik erop. Je browser haalt het `.igc`-bestand binnen

Je kunt ook rechtstreeks in bulk downloaden:
- Ga naar [xcontest.org](https://xcontest.org)
- Ga naar **My flights**
- Kies een seizoen waarin al vluchten staan
- Klik op de link **ALL IGC** (linksonder)
- Download het ZIP-bestand

---

### DHV-XC

De nationale online competitie van Duitsland: ijzersterke records, een wat ingewikkelde interface.

1. Log in op [dhv-xc.de](https://www.dhv-xc.de)
2. Ga naar **My flights** (Meine Flüge)
3. Open de detailpagina van de vlucht
4. Zoek de **IGC-downloadlink** onderaan de pagina (vaak met het label „Download IGC-File“)
5. Klaar, pak het bestand

---

## Mobiele apps

### Flyskyhy (iOS)

De vaste logger van piloten met een iPhone. Je IGC-bestanden staan gewoon in de app.

1. Open Flyskyhy → **Logbook**
2. Tik op de vlucht die je wilt
3. Tik op het **deelicoon** (rechtsboven, het vakje met de pijl)
4. Kies **send to XContest** of **Send to DHV-XC**
5. Daarna kun je het IGC-bestand downloaden van het platform.

**Tip:** je vindt je IGC-bestanden ook via de app Bestanden, in de map van Flyskyhy, als je toegang via Bestanden hebt ingeschakeld.

---

### XCTrack (Android)

De paragliding-instrumentapp voor Android, en ook het systeem achter instrumenten zoals de AIR³. Tracks worden na elke vlucht automatisch opgeslagen.

**Via de Share-widget (het makkelijkst):**
1. Tik op het hoofdscherm op de **Share-widget** (rechtsboven, ziet eruit als een deel- of uploadicoon)
2. Kies een geïnstalleerde app: Gmail, WhatsApp, Telegram, Google Drive enzovoort
3. Het IGC-bestand zit als bijlage klaar en is vertrokken

**Via het menu Tracklogs:**
1. Open XCTrack → **Menu** (linksboven) → **Tracklogs**
2. Houd de vlucht ingedrukt of tik op het menu met de drie puntjes
3. Kies **Share** → kies de app waar het naartoe moet
4. Stuur het naar jezelf of sla het meteen op je telefoon op

**Via automatisch uploaden naar XContest (als je al gekoppeld bent):**
1. Koppel je XContest-account onder **Menu → Preferences → Pilot**
2. Na de landing, met internet, wordt de track automatisch geüpload
3. Download daarna het IGC-bestand van XContest (zie hierboven)

**Via USB (het bestand rechtstreeks pakken):**
- De bestanden staan in `/storage/emulated/0/XCTrack/tracks/` (of op je SD-kaart)
- Sluit aan via USB → zet de modus **File Transfer** (bestandsoverdracht) aan → ga naar die map → kopieer de `.igc`-bestanden

---

### XCSoar (Kobo / Android / Windows)

XCSoar logt standaard IGC-bestanden. Geen conversie nodig.

1. Vluchten worden opgeslagen in de map **XCSoar/logs/** op je toestel
2. Op een Kobo: sluit aan via USB → blader naar `XCSoar/logs/` → kopieer de bestanden
3. Op Android: dezelfde map, via bestandsoverdracht over USB of een bestandsbeheer-app
4. De bestanden zijn op datum genoemd: `2024-07-15-XCS-XXX-01.igc`

---

## Instrumenten en hardware

### Oudie / Naviter (Oudie N, Omni, Oudie IGC …)

Naviter maakt verschillende toestellen: sommige zijn pure loggers, andere draaien op Android. Hoe je exporteert, hangt af van welk toestel je hebt.

**Oudie N / Oudie Omni (op Android, met SeeYou Navigator):**

*Via de app SeeYou Navigator:*
1. Open **SeeYou Navigator** → tik op **Menu** → **Logbook**
2. Kies een vlucht
3. Tik op het icoon **Upload** → kies je platform (XContest, DHV-XC enzovoort)
4. Download de vlucht van het gekozen platform.

*Via USB:*
1. Sluit aan via USB → zet **File Transfer** aan op het toestel
2. Ga naar `Internal storage/SeeYou Navigator/` (of iets gelijkaardigs)
3. Kopieer de `.igc`-bestanden

*Via SeeYou Cloud (als automatische synchronisatie aanstaat):*
1. Log in op [seeyou.cloud](https://seeyou.cloud)
2. Ga naar **Flights** → open een vlucht
3. Klik op **Download IGC**

**De app SeeYou Navigator (op je eigen Android- of iOS-telefoon):**
- Net als bij de Oudie N hierboven: Logbook → kies een vlucht → versturen

---

### Skytraxx (2.1, 4.0, 5.0 …)

Plug-and-play. Een Skytraxx verschijnt als USB-schijf: geen drivers, geen gedoe.

1. Sluit je Skytraxx via USB aan op je computer
2. Hij verschijnt als externe schijf
3. Open de schijf → zoek de map **IGC** (of de bestanden in de hoofdmap)
4. Kopieer de `.igc`-bestanden die je wilt

---

### Syride (SYS-reeks)

Franse, ijzersterke instrumenten. Bestanden zet je over via USB of desktopsoftware.

**USB (het snelst):**
1. Sluit je Syride-instrument via USB aan, het verschijnt als schijf
2. Open de map **FLIGHTS** op het toestel
3. Kopieer de `.igc`-bestanden naar je computer

**Via [syride.com](https://syride.com):**
1. Log in → **My flights**
2. Klik op een vlucht → **Download IGC**

---

### Flymaster (B1 Nav, Live SD, …)

1. Sluit je Flymaster via USB aan, hij verschijnt als schijf
2. Open de map **TRACKS** of **FLIGHTS**
3. Kopieer je `.igc`-bestanden

**Via [flymaster.net](https://flymaster.net):**
1. Log in → **My flights**
2. Open een vlucht → **Download IGC**

---

### SkyBean (SkyDrop, SkyDrop+)

De SkyDrop is een piepkleine, lichte logger die IGC-bestanden opneemt.

1. Sluit de SkyDrop via USB aan op je computer
2. Ga naar de map **IGC** of **FLIGHTS**
3. Kopieer de bestanden

---

## Zodra je je IGC-bestanden hebt

Ga naar [/upload](/upload), sleep je bestanden erin, en We-Fly doet de rest: statistieken, thermiek, het hele pakket. Upload tot 50 bestanden tegelijk als je een achterstand weg te werken hebt.

Blue skies en volle logboeken.
