---
title: Erweiterte Thermikanalyse
description: Jeder Bart, den du gekurbelt hast, im Detail – Zentrieren, Steigwert und Effizienz, Flug für Flug bewertet
category: Thermal Analysis
order: 1
---

Schon mal gefragt, ob du wirklich ein Thermik-Genie bist oder nur Glück hattest? Der Tab **Thermik** bei jedem Flug ist dein persönlicher Debriefing-Partner: Er nimmt jedes Steigen, das du gekurbelt hast, Kreis für Kreis auseinander.

## Was ist das überhaupt?

Eine Analyse nach dem Flug, die jede deiner Bewegungen in der Thermik unter die Lupe nimmt. Sie hört nicht bei „du bist 500 m gestiegen“ auf, sondern schaut, *wie* du gestiegen bist: ob du wie ein Profi den Kern gesucht oder eine Rundreise am Rand gemacht hast.

Wenn du einen Flug hochlädst, erkennt We-Fly jeden Bart, den du gekurbelt hast, gibt jedem eine Qualitätsnote von 0 bis 100 und erstellt eine detaillierte Auswertung. Stell es dir vor wie einen Coach, der deinen Track und deine Vario-Kurve durchgeht, Bart für Bart. Neugierig, wie ein Steigen überhaupt erkannt wird? Schau in [Wie die Thermikerkennung funktioniert](/doc/advanced-thermal-analysis-settings).

Öffne einen beliebigen Flug und wähle den Tab **Thermik**. Die Zahl neben dem Tab-Namen zeigt, wie viele Bärte gefunden wurden.

## Die Hauptansicht

Der Tab ist von oben nach unten aufgebaut:

1. Eine Übersichtsleiste für den ganzen Flug
2. Das Diagramm **Vario vs. Kreisradius**
3. Filter-Chips und eine Zeitleiste, um einen Bart auszuwählen
4. Die Ansicht des gewählten Barts: Karte oder 3D-Ansicht auf der einen Seite, Details auf der anderen
5. Das Diagramm **Steigwert nach Höhe & Zeit**

### Übersichtsleiste des Flugs

Dein Tag aus der Vogelperspektive:

- **Bärte**: wie viele Steigen es in die Auswertung geschafft haben
- **Bester**: die höchste Qualitätsnote des Flugs, mit Nummer des Barts und seinem Qualitätslabel
- **Gewinn**: die gesamte Höhe, die du in der Thermik gemacht hast
- **Ø Steigen**: dein durchschnittlicher Steigwert über alle Bärte
- **Qualität**: die durchschnittliche Qualitätsnote, darunter der Median

### Vario vs. Kreisradius

Jeder vollständige Kreis, den du geflogen bist, wird zu einem Punkt: sein Radius auf der horizontalen Achse, das Steigen, das er dir gebracht hat, auf der vertikalen. Der Hintergrund ist in Zonen aufgeteilt, beschriftet mit **riskant**, **ideal**, **ok** und **enger kreisen**, von sehr engen Kreisen links bis zu weiten rechts. Liegen die meisten deiner besten Punkte in der Zone **enger kreisen**, weißt du, woran du beim nächsten Flug arbeiten kannst.

### Einen Bart auswählen

Über der Zeitleiste sitzt eine Reihe Filter-Chips, jeder zeigt, wie viele Bärte er trifft:

- **Alle**: jeder Bart
- **Beste 5**: die fünf stärksten Steigen nach durchschnittlichem Steigwert
- **Unter Median**: Bärte mit einem Steigwert unter dem Median des Flugs
- **Starker Versatz**: Bärte, in denen du pro 100 m Höhengewinn mehr als 30 m versetzt wurdest (berücksichtigt werden nur Steigen ab 50 m)

Unter den Chips legt die Zeitleiste jeden Bart entlang der echten Uhrzeit des Flugs aus. Die Farbe jedes Punkts steht für seine Qualität, die Größe für den Höhengewinn – so findest du „den großen um halb zwei“ ganz leicht. Klick auf einen Punkt, um diesen Bart in der Ansicht zu öffnen.

Der gewählte Bart ist Teil der Seitenadresse, du kannst also einen Link direkt auf „Bart #7“ teilen.

### Die Bart-Ansicht

Die Titelleiste zeigt **Bart #N**, sein Qualitätslabel, die Startzeit, den Höhengewinn und das durchschnittliche Steigen. Rechts wechselst du zwischen **2D-Karte** und **3D-Ansicht**.

**Auf der 2D-Karte:**

- **Der Track des gewählten Barts** wird als Punkte in Vario-Farben gezeichnet: grün für starkes Steigen (über 3 m/s), gelb für Steigen bis 3 m/s, rot für Sinken
- Die Markierungen **Einstiegspunkt** und **Ausstiegspunkt** zeigen, wo das Steigen begann und endete
- **Der Thermikkern** jedes Barts ist eine Markierung mit gestricheltem Ring. Der gewählte ist rot, die anderen blassrosa zur Orientierung. Fahr mit der Maus über einen Kern, um seine Stärke zu sehen
- **Aktuelle Position** ist die hellblaue Markierung, die sich bei der Wiedergabe bewegt

**In der 3D-Ansicht** wird dasselbe Steigen als Spirale gezeichnet, die du drehen kannst, mit einer Legende für **Starkes Steigen**, **Schwaches Steigen**, **Sinken**, **Thermikkern**, **Ausstiegshöhe** und **Aktuelle Position**.

## Animierte Wiedergabe

Unter der Karte oder der 3D-Ansicht sitzt die Wiedergabeleiste:

- **Abspielen** / **Pause**: den Bart Fix für Fix nachfliegen
- Der kreisförmige Pfeil: zurück zum ersten Fix
- Die Pfeile für vorheriges und nächstes Bild: das Steigen GPS-Fix für GPS-Fix durchgehen
- Zähler **Frame**: wo du gerade im Bart bist (zum Beispiel 42/156)
- Zeit, Höhe und Vario am aktuellen Fix
- Der Zielscheiben-Button: **Karte auf diesen Bart zentrieren**, praktisch, nachdem du auf der Karte herumgeschoben hast

Bild für Bild durchzugehen ist der beste Weg, den genauen Moment zu finden, in dem du den Kern gefunden – oder verloren – hast.

## Bart-Details

Neben der Ansicht (auf dem Handy darunter) steht dein Coaching-Bericht. Oben eine große Qualitätsnote mit Label, dazu zwei schnelle Kennzahlen: **netto** (Netto-Steigen, dein durchschnittliches Steigen vom Einstieg bis zum Ausstieg) und **Zentr.** (Zentrieren).

Darunter sind die Details in Abschnitte eingeklappt. Es ist immer nur einer offen, und jeder zeigt eingeklappt eine einzeilige Vorschau – so überblickst du die ganze Geschichte, ohne zu scrollen.

#### Steigen

- **Gewinn**: gesamter Höhengewinn
- **Ø**: durchschnittlicher Steigwert
- **Max.**: bestes Steigen, über 5 Sekunden geglättet (der rohe Spitzenwert eines einzelnen Fixes steht darunter)
- **Min.**: der schwächste Moment, meist beim Einstieg oder wenn du aus dem Kern gefallen bist
- **Schwank.**: wie stark der Steigwert geschwankt hat. Niedrig heißt gleichmäßiger Bart, hoch heißt ruppig oder turbulent

#### Kern

- **Stärke**: durchschnittliches Steigen im Kern, dein Sweet Spot
- **Zentrierzeit**: wie lange es nach Beginn des Barts gedauert hat, bis du im Kern warst. Je kürzer, desto besser
- **Größe**: der Steigradius des Kerns
- **Ø Abstand**: wie weit du im Schnitt vom Kern entfernt gekreist bist
- **Zentrieren**: wie nah du am Kern geblieben bist, in Prozent. Wer genau auf dem Radius des Kerns kreist, bekommt 100 %

#### Kurvendynamik

- **Richtung**: links oder rechts (die meisten Piloten haben eine Lieblingsseite, kein Urteil)
- **Kreise**: Anzahl vollständiger Kreise
- **Drehrate**: durchschnittliche Drehrate in Grad pro Sekunde
- **Schräglage**: geschätzt aus Kreisgröße und Timing, darunter die daraus abgeleitete Fahrt
- **Zeit pro Kreis** und **Kreisradius**: die Streuung deiner Kreise, als minimale, mittlere und maximale Zeit sowie 25. Perzentil, Median und 75. Perzentil des Radius

#### Versatz & Wind

- **Windgeschwindigkeit**: geschätzt daraus, wie deine Kreise versetzt wurden
- **Versatz**: wie weit dich der Bart beim Steigen mitgenommen hat
- **Richtung**: woher der Wind kam, mit Kompass. Der Kompasspfeil zeigt, wohin der Wind geweht hat, das Label nennt die Richtung, „aus“ der er kam – wie in einer Wettervorhersage

#### Zeit

**Beginn**, **Ende** und **Dauer** des Steigens. Praktisch zum Abgleich mit deinen eigenen Notizen.

#### Aufschlüsselung der Note

Zeigt, wie die Qualitätsnote zustande kam: ein Balken pro Faktor (**Steigen**, **Netto-Steigen**, **Zentrieren**, **Gleichmäßigkeit** und **Konstanz**), seine Gewichtung, dein tatsächlicher Wert und die Punkte, die er beigetragen hat. Der Link **Wie wird das berechnet?** führt dich zur vollständigen Formel.

#### Empfehlungen

Anhand der Zahlen oben bekommst du konkretes Feedback zu diesem Steigen, zum Beispiel:

- Positives auf grünem Hintergrund: „Super Kerneinstieg: stärkstes Steigen in 12 s gefunden.“
- Vorschläge auf orangem Hintergrund: „Langsamer Kerneinstieg: … Versuch es mit weiteren ersten Kreisen, um den Gradienten zu spüren.“

Die Tipps basieren auf den Messwerten genau dieses Barts (Kerngröße, Versatz, Schräglage, Schwankung), nicht auf Allerweltsratschlägen. Eine Zusammenfassung für den ganzen Flug findest du im Panel **Coaching** auf dem Tab **Übersicht** des Flugs.

## Steigwert nach Höhe & Zeit

Ganz unten im Tab wird jeder Bart nach Uhrzeit und Höhe eingetragen, eingefärbt nach Steigwert. Stell die Höhenreferenz zwischen **MSL** und **AGL** (über dem Startplatz) um. Die gestrichelte Linie ist die Arbeitshöhe des Tages; teilt sie sich in zwei Stufen, lag die Arbeitshöhe vormittags und nachmittags unterschiedlich. Klick auf einen Punkt, um nach oben zu diesem Bart in der Ansicht zu springen.

## Die Qualitätsnote erklärt

Die Qualitätsnote ist nicht einfach „gutes Steigen = hohe Note“. Sie ist eine Note von 0 bis 100, die fünf Faktoren kombiniert:

1. **Steigen**: wie stark das Steigen in der Spitze war
2. **Netto-Steigen**: Höhengewinn über die im Bart verbrachte Zeit – daran ändert der Wind nichts
3. **Zentrieren**: wie nah du am Kern geblieben bist
4. **Gleichmäßigkeit**: wie konstant das Steigen war
5. **Konstanz**: ob du wirklich drin geblieben bist und gekurbelt hast, statt nur durchzufliegen

Ein brettharter Bart, in dem du herumgeeiert bist, kann schlechter abschneiden als ein mäßiger, den du perfekt gekurbelt hast. Es geht um Technik, nicht nur um Glück.

**Qualitätslabels:**

| Note | Label |
|---|---|
| 74 und mehr | Herausragend |
| 68 bis 73 | Exzellent |
| 63 bis 67 | Gut |
| 58 bis 62 | Ordentlich |
| Unter 58 | Schwach |

Diese Stufen sind an echten Flügen in We-Fly kalibriert: Ein typischer Bart landet bei Mitte 60. Die vollständige Formel mit einem Rechenbeispiel steht in [Die Gesamtnote der Thermik erklärt](/doc/overall-thermal-score).

## Typische Muster, die dir auffallen könnten

**Viel Versatz, wenig Zentrieren**: Vielleicht steigst du zu weit ein oder ziehst den Kreis nicht schnell genug enger, wenn du Steigen findest.

**Gute Zentrierzeit, aber wenig Netto-Steigen**: Vielleicht war der Bart selbst schwach, oder du hast nach dem Finden des Kerns Kreise außerhalb gedreht. Nicht immer deine Schuld!

**Hohe Schwankung**: Kann an den Bedingungen liegen (ein ruppiger Tag) oder an einer unregelmäßigen Schräglage. Die Empfehlungen versuchen, beides auseinanderzuhalten, indem sie schauen, wie stark sich dein Kreisradius verändert hat.

**In einem Bart schnell im Kern, im anderen langsam**: Schau dir deine Einstiegstechnik an. Bist du gegen den Wind oder mit dem Wind eingestiegen? Über den Kern hinausgeschossen?

## Wann du das Tool nutzt

- **Debriefing nach dem Flug**: verstehen, was funktioniert hat und was nicht
- **Wettkampfvorbereitung**: deine Kurbeltechnik unter Druck analysieren
- **Bedingungen vergleichen**: sehen, wie die Thermikqualität mit Tageszeit, Fluggebiet oder Wetter schwankt
- **Fortschritt verfolgen**: Flüge aus verschiedenen Monaten anschauen und deine Entwicklung sehen
- **Vor dem nächsten Bier**: deinen Kumpels beweisen, dass du den Monsterbart *wirklich* zentriert hast (Beweis!)

## Tipps für eine bessere Analyse

1. **Saubere GPS-Daten helfen**: Ein schwaches GPS-Signal bedeutet eine ungenauere Analyse, ein Logger, der jede Sekunde aufzeichnet, liefert die besten Ergebnisse
2. **Ähnliche Bärte vergleichen**: Vergleiche deine Technik bei ähnlichen Bedingungen, dann sind die Erkenntnisse aussagekräftig
3. **Nicht auf einen Flug fixieren**: Trends über viele Flüge zählen mehr als ein perfekter Bart
4. **Der Wind gehört dazu**: Ein „Ordentlich“ an einem windigen Tag kann besseres Fliegen sein als ein „Exzellent“ bei ruhiger Luft

## Was das Tool nicht kann

- **Künftige Thermik vorhersagen**: Es ist Analyse, keine Vorhersage
- **Deine Entscheidungen bewerten**: Hättest du das Steigen um 11 Uhr nehmen oder weiterfliegen sollen? Bleibt deine Entscheidung
- **Erfahrung ersetzen**: Das Tool zeigt Daten, aber Thermik *spüren* lernst du nur mit Flugzeit

## Unterm Strich

Dieses Tool macht dich nicht über Nacht zum besseren Piloten, aber es zeigt dir *genau*, was du in der Thermik machst. Egal ob du deine Zentrierzeit verkürzen willst oder einfach wissen möchtest, warum sich ein Steigen anders angefühlt hat – der Tab **Thermik** hat dich im Rücken.

Jetzt ab in die Luft, such dir ein paar Bärte und komm zurück, um zu sehen, ob du so gut bist, wie du glaubst.

---

Siehe auch: [Wie die Thermikerkennung funktioniert](/doc/advanced-thermal-analysis-settings) | [Die Gesamtnote der Thermik erklärt](/doc/overall-thermal-score)
