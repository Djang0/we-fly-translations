---
title: Cockpit-Analysen
description: Analysiere deine Flugstatistik, Trends und Leistung
category: Cockpit
order: 1
---
Das Cockpit ist dein Leistungs-Dashboard mit umfassender Statistik und Analysen über alle deine Flüge. Damit verfolgst du deine Fortschritte, erkennst Muster und findest deine besten Fluggebiete und Bedingungen.

## Übersicht

Öffne das [Cockpit](/cockpit), um deine komplette Flugstatistik zu sehen.

## Ansichten im Cockpit

Das Cockpit hat sechs verschiedene Ansichten, jede mit eigenen Erkenntnissen:

1. **Übersicht**: Statistik und Summen über die gefilterten Daten
2. **Schirm**: Leistung aufgeschlüsselt nach Schirm
3. **Saison**: Vergleich von Jahr zu Jahr
4. **Land**: Statistik deiner Flüge in verschiedenen Ländern
5. **Startplatz**: Statistik pro Fluggebiet mit Leistungswerten
6. **Monat**: Aufschlüsselung nach Monaten und saisonale Muster

### Navigation

- Wechsle über die Haupttabs zwischen den Ansichten
- Jede Ansicht bezieht sich auf die [gefilterten Daten](./data-filters.md)

## Statistik in der Übersicht

Die Seite **Übersicht** im [Cockpit](/cockpit) zeigt die Flugstatistik der [gefilterten Daten](./data-filters.md).

### Flugsummen

#### Flüge gesamt
- **Definition**: Anzahl aller Flüge in deinem Flugbuch

#### Flugzeit gesamt
- **Definition**: Summe aller Flugdauern
- **Einheit**: Stunden und Minuten
- **Berechnung**: Summe aller Zeiten von der Startzeit bis zur Landezeit

#### Kurbelzeit gesamt
- **Definition**: Gesamte Zeit, die du kreisend in der Thermik verbracht hast
- **Einheit**: Stunden und Minuten
- **Aufschlüsselung**: Getrennt nach Links- und Rechtskreisen

#### Gleitzeit gesamt
- **Definition**: Gesamte Zeit im Geradeausflug
- **Einheit**: Stunden und Minuten
- **Deutung**: Mehr Gleitzeit = effizienterer Streckenflug

### Strecke und Wertung

Alle XC-Strecken und Wertungen werden von der Open-Source-Bibliothek [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score) berechnet, die von [Momtchil Momtchev](https://github.com/mmomtchev) entwickelt und gepflegt wird.

#### XC-Strecke gesamt
- **Definition**: Summe aller gewerteten Streckenflug-Distanzen
- **Einheit**: Kilometer
- **Nutzen**: Verfolge deine gesamte Streckenleistung

#### XC-Punkte gesamt
- **Definition**: Summe aller XContest-Wertungen
- **Enthält**: Alle Faktoren (freie Strecke, Dreiecke)
- **Nutzen**: Vergleiche deine Streckenleistung über die Zeit

#### Tracklänge gesamt
- **Definition**: Summe aller GPS-Tracklängen
- **Einheit**: Kilometer
- **Immer > XC-Strecke gesamt**: Enthält alles Kreisen und alle Umwege

### Persönliche Bestwerte

#### Beste XC-Strecke
- **Definition**: Längster gewerteter Streckenflug
- **Anzeige**: Strecke und Datum
- **Erfolg**: Deine persönliche Bestleistung auf Strecke!

#### Beste XC-Wertung
- **Definition**: Höchste XContest-Wertung eines einzelnen Flugs
- **Anzeige**: Punkte und Datum
- **Hinweis**: Kann von der weitesten Strecke abweichen (wegen der Faktoren für Dreiecke)

#### Max. Höhe
- **Definition**: Größte Höhe, die du auf allen Flügen erreicht hast
- **Einheit**: Meter über dem Meeresspiegel (MSL)
- **Anzeige**: Höhe

#### Max. Höhengewinn
- **Definition**: Größter Höhengewinn auf einem einzelnen Flug
- **Einheit**: Meter
- **Berechnung**: Max. Höhe - Min. Höhe

#### Stärkster Bart
- **Definition**: Bester Steigwert, den du je erwischt hast
- **Einheit**: Meter pro Sekunde (m/s)
- **Anzeige**: Steigwert

#### Max. Geschwindigkeit
- **Definition**: Höchste aufgezeichnete Grundgeschwindigkeit
- **Einheit**: Kilometer pro Stunde (km/h)
- **Hinweis**: Einschließlich Windeinfluss

#### Längster Flug
- **Definition**: Längste Flugzeit
- **Einheit**: Stunden und Minuten
- **Anzeige**: Dauer und Datum

## Ansicht nach Monat

Unter **/cockpit?view=month** siehst du die Statistik pro Monat.

### Aufschlüsselung nach Monaten

Für jeden Monat mit Flügen:
- Flüge gesamt in diesem Monat
- Strecke gesamt
- Punkte gesamt
- Mittlere Flugkennzahlen

### Saisonale Muster

Erkenne Muster:
- **In welchen Monaten fliegst du am meisten?**
- **Wann ist die Thermik am stärksten?**
- **Wie verändert sich dein Fliegen im Laufe des Jahres?**

### Anwendungsfälle

- **Plane deine Saison**: Sieh, wann du typischerweise am besten fliegst
- **Verfolge deine Regelmäßigkeit**: In wie vielen Monaten pro Jahr bist du aktiv?
- **Finde deine Hauptsaison**: Wann fliegst du deine weitesten Strecken?

## Ansicht nach Saison (Jahr)

Unter **/cockpit?view=season** siehst du die Statistik pro Jahr.

### Vergleich von Jahr zu Jahr

Für jede Saison (jedes Jahr):
- Flüge gesamt
- XC-Strecke und Punkte gesamt
- Mittlere Flugkennzahlen
- Persönliche Bestwerte in diesem Jahr

### Fortschritte verfolgen

Vergleiche die Jahre und sieh:
- Fliegst du mehr?
- Werden deine Strecken länger?
- Wie schneiden die einzelnen Jahre im Vergleich ab?

### Anwendungsfälle

- **Langfristige Fortschritte verfolgen**
- **Verschiedene Jahre vergleichen**
- **Jahresziele setzen**

## Ansicht nach Schirm

Unter **/cockpit?view=glider** vergleichst du die Leistung deiner Schirme.

### Statistik pro Schirm

Für jeden Schirm in deinem Flugbuch:
- Anzahl der Flüge
- Strecke und Punkte gesamt
- Mittlere XC-Strecke
- Mittlere Flugdauer
- Weiteste erreichte Strecke
- Mittlere Steigwerte

### Schirme vergleichen

Beantworte Fragen wie:
- Mit welchem Schirm fliege ich die besten Strecken?
- Wie schneiden meine verschiedenen Schirme im Vergleich ab?
- Welchen Schirm fliege ich am häufigsten?

### Anwendungsfälle

- **Entscheidungen zur Ausrüstung**: Deinen nächsten Schirm auswählen
- **Leistungsvergleich**: Verschiedene Schirmklassen vergleichen
- **Spezialisierung**: Sehen, welcher Schirm unter welchen Bedingungen am besten funktioniert

## Ansicht nach Startplatz

Unter **/cockpit?view=takeoff** analysierst du deine Leistung pro Fluggebiet.

### Statistik pro Fluggebiet

Für jeden Startplatz:
- Anzahl der Flüge von diesem Startplatz
- XC-Strecke gesamt
- Mittlere XC-Strecke
- Weiteste Strecke von diesem Startplatz
- **Leistungswert (Z-Score)**: Statistische Erkennung von Ausreißern (siehe: [Z-Score-Guide für Piloten](/doc/z-score-pilot-guide))

## Ansicht nach Land

Unter **/cockpit/?view=country** siehst du deine Statistik nach Ländern.

### Statistik pro Land

Für jedes Land, in dem du geflogen bist:
- Anzahl der Flüge
- XC-Strecke gesamt
- Mittlere Kennzahlen
- Top-Fluggebiete in diesem Land

## Tipps und bewährte Vorgehensweisen

### Bau deinen Datenbestand auf

- **Lade alle Flüge hoch**: Mehr Daten = bessere Statistik
- **Alte Flüge**: Lade alte IGC-Dateien hoch, damit das Bild vollständig ist
- **Regelmäßigkeit**: Regelmäßiges Fliegen ergibt aussagekräftigere Trends

### Nutze Filter gezielt

- **Starte breit**: Sieh dir zuerst die Gesamtmuster an
- **Dann eingrenzen**: Setze Filter für konkrete Fragen
- **Vergleiche Gleiches mit Gleichem**: Nutze beim Vergleichen dieselben Filter

### Versteh den Kontext

Statistik ist mächtig, aber denk an:
- **Deine Entwicklung**: Du wirst mit der Zeit besser
- **Wechsel der Ausrüstung**: Neue Schirme beeinflussen die Leistung
- **Bedingungen**: Das Wetter ist von Saison zu Saison anders
- **Stichprobengröße**: 2 Flüge gegenüber 200 Flügen (was ist verlässlicher?)

### Setz dir Ziele

Nutze die Statistik, um:
- **Fortschritte zu verfolgen**: Vergleiche mit früheren Saisons
- **Dich herauszufordern**: Knack deine persönlichen Bestwerte
- **Verbesserungen zu planen**: Finde Bereiche, an denen du arbeiten kannst
