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

Das Cockpit hat elf Ansichten, jede mit eigenen Erkenntnissen:

1. **Übersicht**: Statistik und Summen über die gefilterten Daten
2. **Trends**: Dein Fliegen im Lauf der Zeit, von Tag zu Tag bis Jahr für Jahr
3. **Kurbeln**: Steigwerte, Kreisen und Qualität der Bärte, Saison für Saison
4. **Phasen**: Wie sich deine Flugzeit auf Thermik, Suche, Gleitflug und Schweben verteilt
5. **Schirm**: Flugzeit aufgeschlüsselt nach Schirm
6. **Startplatz**: Statistik pro Fluggebiet mit Z-Scores
7. **Land**: Statistik deiner Flüge in verschiedenen Ländern
8. **Saison**: Vergleich von Jahr zu Jahr
9. **Monat**: Aufschlüsselung nach Monaten und saisonale Muster
10. **CIVL**: Dein CIVL-Weltranking
11. **Karte**: Deine Startplätze auf einer Karte

### Navigation

- Wähl eine Ansicht im Cockpit-Menü
- Jede Ansicht bezieht sich auf die [gefilterten Daten](./data-filters.md)

## Statistik in der Übersicht

Die Seite **Übersicht** im [Cockpit](/cockpit) zeigt die Flugstatistik der [gefilterten Daten](./data-filters.md). Jede Strecke, Höhe und Geschwindigkeit wird in den Einheiten angezeigt, die du in deinem Profil gewählt hast.

### Flugsummen

Die Kopfzeile ganz oben zeigt dir die großen Vier:

#### Flüge gesamt
- **Definition**: Anzahl aller Flüge in deinem Flugbuch

#### Flugzeit gesamt
- **Definition**: Summe aller Flugdauern
- **Einheit**: Stunden und Minuten
- **Berechnung**: Summe aller Zeiten von der Startzeit bis zur Landezeit

#### Strecke
- **Definition**: Gesamte Tracklänge über alle Flüge

#### Längster Flug
- **Definition**: Deine längste Flugzeit
- **Anzeige**: Dauer; klick darauf, um diesen Flug zu öffnen

#### Flugeffizienz
- **Definition**: Zeit, die du kreisend in der Thermik verbracht hast (**Kurbeln**), im Vergleich zur Zeit im Geradeausflug (**Gleiten**)
- **Einheit**: Stunden und Minuten, dazu die Aufteilung in Prozent

#### Kurbelrichtung
- **Definition**: Wie sich deine Kurbelzeit auf **Linkskreise** und **Rechtskreise** verteilt

#### Solo und Tandem
- **Definition**: Wie sich deine Flugzeit auf **Solo**- und **Tandem**flüge verteilt (wird nur angezeigt, wenn du Tandemflüge hast)

### Strecke und Wertung

Alle XC-Strecken und Wertungen werden von der Open-Source-Bibliothek [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score) berechnet, die von [Momtchil Momtchev](https://github.com/mmomtchev) entwickelt und gepflegt wird.

#### XC-Strecke
- **Definition**: Summe aller gewerteten Streckenflug-Distanzen
- **Nutzen**: Verfolge deine gesamte Streckenleistung

#### XC-Punkte
- **Definition**: Summe aller XContest-Wertungen
- **Enthält**: Alle Faktoren (freie Strecke, Dreiecke)
- **Nutzen**: Vergleiche deine Streckenleistung über die Zeit

#### Tracklänge
- **Definition**: Summe aller GPS-Tracklängen
- **Immer > XC-Strecke**: Enthält alles Kreisen und alle Umwege

### Persönliche Bestwerte

Jeder Bestwert verweist auf den Flug, aus dem er stammt: Klick auf den Wert, um ihn zu öffnen.

#### Max. Höhe
- **Definition**: Größte Höhe, die du auf allen Flügen erreicht hast
- **Einheit**: Über dem Meeresspiegel (MSL)

#### Max. Höhengewinn
- **Definition**: Größter Höhengewinn auf einem einzelnen Flug
- **Berechnung**: Max. Höhe - Min. Höhe

#### Max. Geschwindigkeit
- **Definition**: Schnellste Grundgeschwindigkeit, die 5 Sekunden lang gehalten wurde, GPS-Ausreißer herausgefiltert
- **Hinweis**: Einschließlich Windeinfluss

#### Beste XC-Strecke
- **Definition**: Längster gewerteter Streckenflug
- **Erfolg**: Deine persönliche Bestleistung auf Strecke!

#### Beste XC-Wertung
- **Definition**: Höchste XContest-Wertung eines einzelnen Flugs
- **Hinweis**: Kann von der weitesten Strecke abweichen (wegen der Faktoren für Dreiecke)

#### Tiefster Low Save
- **Definition**: Der tiefste Punkt (über Grund), von dem aus du wieder hochgekommen bist, und wie viel Höhe du zurückgeholt hast

### Leistungswerte

- **Med. Kreiszeit**: Median der Zeit pro 360°-Kreis
- **Med. Kreisradius**: Median des Kurvenradius beim Kreisen
- **Median-G-Faktor**: Lastvielfaches (siehe den [G-Faktor-Guide für Piloten](/doc/g-factor-pilot-guide))
- **Stärkster Thermik-Spitzenwert**: Bester Steigwert, über 5 Sekunden gehalten; klick darauf, um direkt zu diesem Bart zu springen

## Ansicht Trends

Unter **/cockpit?view=trends** siehst du, wie sich dein Fliegen im Lauf der Zeit entwickelt.

Wähl eine **Kennzahl** (**Flugzeit**, **Flüge**, **Ø Strecke**, **Ø Flugzeit**, **Ø Geschwindigkeit**), ein **Intervall** (**Tag**, **Woche**, **Monat**, **Jahr**), einen **Zeitraum** (**30 Tage**, **12 Monate**, **Dieses Jahr**, **Alle**) und eine **Aufteilung** (**Gesamt** oder **Nach Schirm**). Schalte die **Anzeige** zwischen **Diagramm** und **Tabelle** um. Klick auf eine Säule, um ihre Flüge im Flugbuch zu öffnen.

## Ansicht Kurbeln

Unter **/cockpit?view=thermaling** findest du deine Steigstatistik über jeden Bart in den gefilterten Flügen: **Median-Steigen**, **Bestes Steigen**, **Median-Höhengewinn**, **Bärte/h**, **Kurbelzeit**, Kreiszeit und Kreisradius sowie **Low Saves**. Die Diagramme im Saisonvergleich sind in **Effizienz**, **Umfang**, **Technik** und **Können** gruppiert.

## Ansicht Phasen

Unter **/cockpit?view=phases** siehst du, wie sich deine Flugzeit auf **Thermik**, **Suche**, **Gleitflug** und **Schweben** verteilt, mit **Median-Gleitzahl**, **Median-Gleitgeschwindigkeit** und **Kreise / min**, Saison für Saison.

## Ansicht nach Monat

Unter **/cockpit?view=month** siehst du die Statistik pro Monat.

### Aufschlüsselung nach Monaten

- **Aktivste Monate**: Deine fleißigsten Monate, mit **Flüge gesamt** über alle Jahre, **Aktivstes Jahr** und **Aktivität pro Jahr**
- **Visuelle Analyse**: **Dauer**, **Anzahl** und **Z-Score** pro Monat und Jahr, als Balken, **Gruppiert** oder **Gestapelt**
- **Monate nach Jahr**: Eine Tabelle deiner Flüge nach Monat und Jahr

### Saisonale Muster

Erkenne Muster:
- **In welchen Monaten fliegst du am meisten?**
- **Wann ist die Thermik am stärksten?**
- **Wie verändert sich dein Fliegen im Laufe des Jahres?**

### Anwendungsfälle

- **Plane deine Saison**: Sieh, wann du typischerweise am besten fliegst
- **Verfolge deine Regelmäßigkeit**: In wie vielen Monaten pro Jahr bist du aktiv?
- **Finde deine Hauptsaison**: Wann sammelst du die meiste Flugzeit?

## Ansicht nach Saison (Jahr)

Unter **/cockpit?view=season** siehst du die Statistik pro Jahr.

### Vergleich von Jahr zu Jahr

Für jede Saison (jedes Jahr) zeigt die Tabelle:
- **Flüge**
- **Stunden gesamt**
- **Ø/Flug** (Stunden pro Flug)
- **Z-Score** der mittleren Flugzeit

Mit dem Diagramm darüber vergleichst du die Saisons nach **Dauer**, **Anzahl** oder **Z-Score**.

### Fortschritte verfolgen

Vergleiche die Jahre und sieh:
- Fliegst du mehr?
- Werden deine Flüge länger?
- Wie schneiden die einzelnen Jahre im Vergleich ab?

### Anwendungsfälle

- **Langfristige Fortschritte verfolgen**
- **Verschiedene Jahre vergleichen**
- **Jahresziele setzen**

## Ansicht nach Schirm

Unter **/cockpit?view=glider** vergleichst du deine Schirme.

### Statistik pro Schirm

Für jeden Schirm in deinem Flugbuch:
- **Flüge**
- **Stunden gesamt**
- **Ø/Flug** (Stunden pro Flug)
- **Z-Score** der mittleren Flugzeit

### Schirme vergleichen

Beantworte Fragen wie:
- Mit welchem Schirm bleibe ich am längsten in der Luft?
- Wie schneiden meine verschiedenen Schirme im Vergleich ab?
- Welchen Schirm fliege ich am häufigsten?

### Anwendungsfälle

- **Entscheidungen zur Ausrüstung**: Deinen nächsten Schirm auswählen
- **Leistungsvergleich**: Verschiedene Schirmklassen vergleichen
- **Spezialisierung**: Sehen, welcher Schirm unter welchen Bedingungen am besten funktioniert

## Ansicht nach Startplatz

Unter **/cockpit?view=takeoff** analysierst du deine Leistung pro Fluggebiet.

### Statistik pro Fluggebiet

Für jeden Startplatz zeigt eine sortierbare Tabelle:
- **Flüge** von diesem Startplatz
- **Stunden gesamt**
- **Ø/Flug** (Stunden pro Flug)
- **Z-Score**: Statistische Erkennung von Ausreißern (siehe: [Z-Score-Guide für Piloten](/doc/z-score-pilot-guide))

## Ansicht nach Land

Unter **/cockpit?view=country** siehst du deine Statistik nach Ländern.

### Statistik pro Land

Für jedes Land, in dem du geflogen bist:
- **Flüge**
- **Stunden gesamt**
- **Ø/Flug** (Stunden pro Flug)
- **Z-Score** der mittleren Flugzeit

## Ansicht CIVL

Unter **/cockpit?view=civl** siehst du dein CIVL-Ranking (Welt, Europa und Land) und seinen Verlauf. Trag dafür zuerst deine CIVL-ID in deinen Profileinstellungen ein.

## Ansicht Karte

Unter **/cockpit?view=map** siehst du jeden Startplatz, von dem du geflogen bist, auf einer Karte, mit der Anzahl der Flüge an jedem.

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
