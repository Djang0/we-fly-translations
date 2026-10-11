---
title: IGC-Dateien exportieren
description: So holst du deine IGC-Dateien aus gängigen Plattformen und Trackern
category: Your Flights
order: 3
---

## Deine Flüge sind schon irgendwo da draußen: Holen wir sie heim

Du loggst schon bei XContest oder DHV-XC, oder auf deinem Syride liegen Tracks aus mehreren Jahren? Du musst nicht alles nochmal fliegen. So ziehst du die IGC-Dateien aus ihren Verstecken und bringst sie zu We-Fly.

---

## Online-Plattformen

### XContest

Das größte Flugbuch der Freiflieger weltweit. Deine Tracks liegen dort. Du musst sie nur ausgraben.

1. Melde dich auf [xcontest.org](https://xcontest.org) an
2. Klick auf deinen Benutzernamen → **My flights**
3. Öffne einen Flug aus der Liste
4. Such auf der Detailseite des Flugs das **Download-Symbol** (Beschriftung „IGC file“) neben der Trackkarte
5. Klick drauf. Dein Browser lädt die `.igc`-Datei herunter

Sammeldownloads gibt es auch direkt:
- Geh auf [xcontest.org](https://xcontest.org)
- Öffne **My flights**
- Wähl eine Saison, in der schon Flüge sind
- Klick unten links auf den Link **ALL IGC**
- Lade die ZIP-Datei herunter

---

### DHV-XC

Der nationale Online-Wettbewerb in Deutschland: grundsolide Daten, etwas verschachtelte Oberfläche.

1. Melde dich auf [dhv-xc.de](https://www.dhv-xc.de) an
2. Geh zu **Meine Flüge**
3. Öffne die Detailseite des Flugs
4. Unten auf der Seite findest du den **IGC-Download-Link** (oft „Download IGC-File“ beschriftet)
5. Fertig, schnapp dir die Datei

---

## Mobile Apps

### Flyskyhy (iOS)

Der Standard-Logger für Piloten mit Apple-Geräten. Deine IGC-Dateien liegen direkt in der App.

1. Öffne Flyskyhy → **Logbook**
2. Tippe auf den gewünschten Flug
3. Tippe auf das **Teilen-Symbol** (oben rechts, das Kästchen mit dem Pfeil)
4. Wähle **send to XContest** oder **Send to DHV-XC**
5. Danach kannst du die IGC-Datei von der Plattform herunterladen.

**Profi-Tipp:** Wenn du den Zugriff über die Dateien-App aktiviert hast, findest du deine IGC-Dateien dort auch im App-Ordner von Flyskyhy.

---

### XCTrack (Android)

Die Fluginstrument-App für Gleitschirmflieger unter Android und zugleich das System auf Instrumenten wie dem AIR³. Tracks werden nach jedem Flug automatisch gespeichert.

**Über das Share-Widget (am einfachsten):**
1. Tippe auf dem Hauptbildschirm auf das **Share-Widget** (oben rechts, sieht aus wie ein Teilen- oder Upload-Symbol)
2. Wähle eine installierte App: Gmail, WhatsApp, Telegram, Google Drive und so weiter
3. Die IGC-Datei hängt dran und ist unterwegs

**Über das Menü Tracklogs:**
1. Öffne XCTrack → **Menu** (oben links) → **Tracklogs**
2. Drück lange auf den Flug oder tippe auf das Drei-Punkte-Menü
3. Wähle **Share** → such dir die Ziel-App aus
4. Schick die Datei an dich selbst oder speichere sie direkt auf dem Handy

**Über den Auto-Upload zu XContest (falls schon verbunden):**
1. Verknüpfe dein XContest-Konto unter **Menu → Preferences → Pilot**
2. Nach der Landung wird der Track mit Internetverbindung automatisch hochgeladen
3. Dann lädst du die IGC-Datei von XContest herunter (siehe oben)

**Über USB (Datei direkt holen):**
- Die Dateien liegen unter `/storage/emulated/0/XCTrack/tracks/` (oder auf deiner SD-Karte)
- Per USB verbinden → Modus **Dateiübertragung** aktivieren → zu diesem Ordner navigieren → die `.igc`-Dateien kopieren

---

### XCSoar (Kobo / Android / Windows)

XCSoar zeichnet direkt IGC-Dateien auf. Keine Umwandlung nötig.

1. Flüge werden auf deinem Gerät im Ordner **XCSoar/logs/** gespeichert
2. Auf dem Kobo: per USB verbinden → zu `XCSoar/logs/` navigieren → Dateien kopieren
3. Auf Android: derselbe Ordner, per USB-Dateiübertragung oder mit einer Dateimanager-App
4. Die Dateien sind nach Datum benannt: `2024-07-15-XCS-XXX-01.igc`

---

## Instrumente und Hardware

### Oudie / Naviter (Oudie N, Omni, Oudie IGC …)

Naviter baut mehrere Geräte: Manche sind reine Logger, andere laufen mit Android. Der Exportweg hängt davon ab, welches du hast.

**Oudie N / Oudie Omni (Android-basiert, mit SeeYou Navigator):**

*Über die App SeeYou Navigator:*
1. Öffne **SeeYou Navigator** → tippe auf **Menu** → **Logbook**
2. Wähle einen Flug
3. Tippe auf das Symbol **Upload** → wähl deine Plattform (XContest, DHV-XC und so weiter)
4. Lade den Flug von der gewählten Plattform herunter.

*Über USB:*
1. Per USB verbinden → auf dem Gerät **Dateiübertragung** aktivieren
2. Zu `Internal storage/SeeYou Navigator/` (oder ähnlich) navigieren
3. Die `.igc`-Dateien kopieren

*Über SeeYou Cloud (wenn die automatische Synchronisierung an ist):*
1. Melde dich auf [seeyou.cloud](https://seeyou.cloud) an
2. Geh zu **Flights** → öffne einen Flug
3. Klick auf **Download IGC**

**App SeeYou Navigator (auf deinem eigenen Android- oder iOS-Handy):**
- Genau wie beim Oudie N oben: Logbook → Flug wählen → senden

---

### Skytraxx (2.1, 4.0, 5.0 …)

Einstecken und loslegen. Das Skytraxx meldet sich als USB-Laufwerk an: keine Treiber, kein Theater.

1. Verbinde dein Skytraxx per USB mit dem Computer
2. Es erscheint als externes Laufwerk
3. Öffne das Laufwerk → such den Ordner **IGC** (oder Dateien im Hauptverzeichnis)
4. Kopiere die gewünschten `.igc`-Dateien

---

### Syride (SYS-Serie)

Grundsolide Instrumente aus Frankreich. Die Dateien kommen per USB oder über die Desktop-Software rüber.

**USB (am schnellsten):**
1. Verbinde dein Syride-Instrument per USB, es meldet sich als Laufwerk an
2. Öffne auf dem Gerät den Ordner **FLIGHTS**
3. Kopiere die `.igc`-Dateien auf deinen Computer

**Über [syride.com](https://syride.com):**
1. Anmelden → **My flights**
2. Auf einen Flug klicken → **Download IGC**

---

### Flymaster (B1 Nav, Live SD, …)

1. Verbinde dein Flymaster per USB, es meldet sich als Laufwerk an
2. Öffne den Ordner **TRACKS** oder **FLIGHTS**
3. Kopiere deine `.igc`-Dateien

**Über [flymaster.net](https://flymaster.net):**
1. Anmelden → **My flights**
2. Einen Flug öffnen → **Download IGC**

---

### SkyBean (SkyDrop, SkyDrop+)

Das SkyDrop ist ein winziger, leichter Logger, der IGC-Dateien aufzeichnet.

1. Verbinde das SkyDrop per USB mit deinem Computer
2. Navigiere zum Ordner **IGC** oder **FLIGHTS**
3. Kopiere die Dateien

---

## Sobald du deine IGC-Dateien hast

Geh zu [/upload](/upload), zieh deine Dateien hinein, und We-Fly erledigt den Rest: Statistiken, Thermik, das volle Programm. Du kannst bis zu 50 Dateien auf einmal hochladen, falls du einen Rückstau abarbeiten musst.

Allzeit gute Thermik und volle Flugbücher.
