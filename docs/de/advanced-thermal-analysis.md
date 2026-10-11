---
title: Erweiterte Thermikanalyse
description: Jeder Bart, den du bearbeitet hast, im Detail, Zentrieren, Steigwert und Effizienz Flug für Flug bewertet
category: Thermal Analysis
order: 1
---

Hast du dich schon mal gefragt, ob du wirklich ein Thermikgenie bist oder einfach nur Glück hast? Der Tab **Thermik** an jedem Flug ist dein persönlicher Debriefing-Partner: Er nimmt jedes Steigen, das du bearbeitet hast, Kreis für Kreis auseinander.

## Was ist das für ein Ding?

Es ist ein Analysetool für nach dem Flug, das jede deiner Bewegungen in der Thermik beobachtet. Es bleibt nicht bei „du bist 500 m gestiegen“ stehen. Es schaut, *wie* du gestiegen bist: ob du wie ein Profi den Kern gejagt hast oder eine Rundreise am Rand gemacht hast.

Wenn du einen Flug hochlädst, erkennt We-Fly jeden Bart, den du bearbeitet hast, gibt jedem eine Qualitätsbewertung von 100 Punkten und erstellt eine ausführliche Aufschlüsselung. Stell es dir vor wie einen Coach, der deinen Track und deine Variokurve durchgeht, ein Steigen nach dem anderen. Neugierig, wie ein Steigen überhaupt erkannt wird? Schau in [So funktioniert die Thermikerkennung](/doc/advanced-thermal-analysis-settings).

Öffne einen beliebigen Flug und wähle den Tab **Thermik**. Die Zahl neben dem Namen des Tabs sagt dir, wie viele Bärte gefunden wurden.

## Die Hauptansicht

Der Tab liest sich von oben nach unten:

1. Eine Übersichtsleiste für den ganzen Flug
2. Das Diagramm **Vario vs. Kreisradius**
3. Filter-Chips und eine Zeitleiste, um einen Bart auszuwählen
4. Die Ansicht für den ausgewählten Bart: Karte oder 3D-Ansicht auf der einen Seite, Details auf der anderen
5. Das Diagramm **Steigwert nach Höhe & Zeit**

### Übersichtsleiste des Flugs

Die Vogelperspektive auf deinen Tag:

- **Bärte**: Wie viele Steigen es in die Auswertung geschafft haben
- **Bester**: Die höchste Qualitätsbewertung des Flugs, mit der Nummer des Barts und seiner Qualitätsstufe
- **Gewinn**: Die ganze Höhe, die du in der Thermik gemacht hast
- **Ø Steigen**: Dein mittlerer Steigwert über alle Bärte
- **Qualität**: Die mittlere Qualitätsbewertung, mit dem Median darunter

### Vario vs. Kreisradius

Jeder volle Kreis, den du geflogen bist, wird zu einem Punkt: sein Radius auf der waagrechten Achse, der Steigwert, den er dir gebracht hat, auf der senkrechten. Der Hintergrund ist in Zonen aufgeteilt, beschriftet mit **riskant**, **ideal**, **ok** und **enger kreisen**, von sehr engen Kreisen links bis zu weiten rechts. Liegen die meisten deiner besten Punkte in der Zone **enger kreisen**, weißt du, woran du beim nächsten Flug arbeitest.

### Einen Bart auswählen

Über der Zeitleiste sitzt eine Reihe Filter-Chips, jeder mit der Anzahl der passenden Bärte:

- **Alle**: Jeder Bart
- **Beste 5**: Die fünf stärksten Steigen nach mittlerem Steigwert
- **Unter Median**: Bärte mit einem Steigwert unter dem Median des Flugs
- **Starker Versatz**: Bärte, in denen du pro 100 m Höhengewinn mehr als 30 m versetzt wurdest (nur Steigen ab 50 m zählen)

Unter den Chips legt die Zeitleiste jeden Bart entlang der echten Uhrzeit des Flugs aus. Die Farbe jedes Punkts ist seine Qualität, seine Größe der Höhengewinn, so findest du „den großen um halb zwei“ ganz leicht. Klick auf einen Punkt, um diesen Bart in der Ansicht zu öffnen.

Der ausgewählte Bart steht in der Adresse der Seite, so kannst du einen Link direkt auf „Bart #7“ teilen.

### Die Bart-Ansicht

Die Titelleiste zeigt **Bart #N**, seine Qualitätsstufe, die Startzeit, den Höhengewinn und das mittlere Steigen. Rechts wechselst du zwischen **2D-Karte** und **3D-Ansicht**.

**Auf der 2D-Karte:**

- **Der Track des ausgewählten Barts** ist als Punkte gezeichnet, nach Vario eingefärbt: Grün für starkes Steigen (über 3 m/s), Gelb für Steigen bis 3 m/s, Rot für Sinken
- Die Markierungen **Einstiegspunkt** und **Ausstiegspunkt** zeigen, wo das Steigen begann und endete
- **Der Thermikkern** jedes Barts ist eine Markierung mit einem gestrichelten Ring. Der ausgewählte ist rot, die anderen blassrosa als Kontext. Fahr mit der Maus über einen Kern, um seine Stärke zu sehen
- **Aktuelle Position** ist die hellblaue Markierung, die sich bei der Wiedergabe bewegt

**In der 3D-Ansicht** ist dasselbe Steigen als Spirale gezeichnet, die du drehen kannst, mit einer Legende für **Starkes Steigen**, **Schwaches Steigen**, **Sinken**, **Thermikkern**, **Ausstiegshöhe** und **Aktuelle Position**.

## Wiedergabe der Animation

Unter der Karte oder der 3D-Ansicht sitzt die Wiedergabeleiste:

- **Abspielen** / **Pause**: Spiel den Bart Fix für Fix ab
- Der kreisförmige Pfeil: zurück zum ersten Fix
- Die Pfeile für vorheriges und nächstes Frame: Geh das Steigen GPS-Fix für GPS-Fix durch
- **Frame**-Zähler: Wo du im Bart bist (zum Beispiel 42/156)
- Zeit, Höhe und Vario am aktuellen Fix
- Der Zielscheiben-Button: **Karte auf diesen Bart zentrieren**, praktisch, nachdem du herumgeschoben hast

Frame für Frame zu gehen ist der beste Weg, um genau den Moment zu erwischen, in dem du den Kern gefunden oder verloren hast.

## Details zum Bart

Neben der Ansicht (am Handy darunter) steht dein Coaching-Bericht. Oben eine große Qualitätsbewertung mit ihrer Stufe, dazu zwei schnelle Werte: **Eff.** (Effizienz) und **Zentr.** (Zentrieren).

Darunter sind die Details in Abschnitte eingeklappt. Es ist immer einer offen, und jeder zeigt eingeklappt eine einzeilige Vorschau, so überblickst du die ganze Geschichte, ohne zu scrollen.

#### Steigen

- **Gewinn**: Gesamter Höhengewinn
- **Ø**: Mittlerer Steigwert
- **Max.**: Bestes Steigen, über 5 Sekunden geglättet (der rohe Spitzenwert eines einzelnen Fixes steht darunter)
- **Min.**: Schwächster Moment, meist beim Einfliegen oder als du aus dem Kern gefallen bist
- **Schwank.**: Wie stark der Steigwert geschwankt hat. Niedrig heißt ruhiger Bart, hoch heißt knackig oder turbulent

#### Kern

- **Stärke**: Mittleres Steigen im Kern, dein Sweet Spot
- **Zentrierzeit**: Wie lange du nach Beginn des Barts gebraucht hast, um den Kern zu erreichen. Weniger ist besser
- **Größe**: Der Radius des Steigens im Kern
- **Ø Abstand**: Wie weit du im Mittel um den Kern gekreist bist
- **Zentrieren**: Wie nah du am Kern geblieben bist, in Prozent. Kreist du genau im Radius des Kerns, gibt das 100 %

#### Kurvendynamik

- **Richtung**: Links oder rechts (die meisten Piloten haben eine Lieblingsseite, kein Urteil)
- **Kreise**: Anzahl der vollen Kreise
- **Drehrate**: Mittlere Drehrate in Grad pro Sekunde
- **Schräglage**: Aus Größe und Dauer deiner Kreise geschätzt, mit der daraus folgenden Fluggeschwindigkeit darunter
- **Zeit pro Kreis** und **Kreisradius**: Die Streuung deiner Kreise, als minimale, mittlere (Median) und maximale Zeit sowie als Radius beim 25. Perzentil, Median und 75. Perzentil

#### Versatz & Wind

- **Windgeschwindigkeit**: Daraus geschätzt, wie deine Kreise versetzt wurden
- **Versatz**: Wie weit dich der Bart beim Steigen mitgenommen hat
- **Richtung**: Woher der Wind kam, mit einem Kompass. Der Pfeil des Kompasses zeigt, wohin der Wind geweht hat, und die Beschriftung nennt die Richtung, aus der er kam, wie in einer Vorhersage

#### Zeit

**Beginn**, **Ende** und **Dauer** des Steigens. Praktisch, um sie mit deinen eigenen Notizen abzugleichen.

#### Punkteaufschlüsselung

Zeigt, wie sich die Qualitätsbewertung zusammensetzt: ein Balken pro Faktor (**Steigen**, **Effizienz**, **Zentrieren**, **Gleichmäßigkeit** und **Konstanz**), seine Gewichtung, dein tatsächlicher Wert und die Punkte, die er beigetragen hat. Der Link **Wie wird das berechnet?** führt dich zur vollständigen Formel.

#### Empfehlungen

Anhand der Zahlen oben bekommst du gezieltes Feedback zu diesem Steigen, zum Beispiel:

- Lob auf grünem Hintergrund: „Super Kerneinstieg: stärkstes Steigen in 12 s gefunden.“
- Vorschläge auf bernsteinfarbenem Hintergrund: „Langsamer Kerneinstieg: … Flieg anfangs weitere Kreise, um den Gradienten zu spüren.“

Die Tipps entstehen aus den Messwerten genau dieses Barts (Größe des Kerns, Versatz, Schräglage, Schwankung), nicht aus allgemeinen Ratschlägen. Eine Zusammenfassung über den ganzen Flug findest du im Bereich **Coaching** im Tab **Übersicht** des Flugs.

## Steigwert nach Höhe & Zeit

Ganz unten im Tab ist jeder Bart nach Tageszeit und Höhe eingetragen, nach Steigwert eingefärbt. Stell den Höhenbezug zwischen **MSL** und **AGL** (über dem Startplatz) um. Die gestrichelte Linie ist die nutzbare Basis des Tages; teilt sie sich in zwei Stufen, war die Basis am Vormittag und am Nachmittag unterschiedlich. Klick auf einen Punkt, um oben in der Ansicht zu diesem Bart zu springen.

## Die Qualitätsbewertung erklärt

Die Qualitätsbewertung ist nicht einfach „guter Steigwert = hohe Bewertung“. Sie ist eine Bewertung von 100 Punkten, die fünf Faktoren verbindet:

1. **Steigen**: Wie stark das Steigen in seiner besten Phase war
2. **Effizienz**: Höhengewinn im Verhältnis zum Versatz
3. **Zentrieren**: Wie nah du am Kern geblieben bist
4. **Gleichmäßigkeit**: Wie ruhig das Steigen war
5. **Konstanz**: Ob du wirklich geblieben bist und gekreist hast, statt nur durchzufliegen

Ein brettharter Bart, in dem du herumgeirrt bist, kann schlechter abschneiden als ein mäßiger, den du perfekt bearbeitet hast. Es geht um Technik, nicht nur um Glück.

**Qualitätsstufen:**

| Bewertung | Stufe |
|---|---|
| 80 und mehr | Herausragend |
| 73 bis 79 | Exzellent |
| 66 bis 72 | Gut |
| 60 bis 65 | Mittel |
| Unter 60 | Schwach |

Diese Bereiche sind an echten Flügen in We-Fly kalibriert: Ein typischer Bart landet bei Mitte 60. Die vollständige Formel mit einem durchgerechneten Beispiel findest du unter [Die Gesamtbewertung der Thermik erklärt](/doc/overall-thermal-score).

## Typische Muster, die dir auffallen könnten

**Viel Versatz, schlechtes Zentrieren**: Vielleicht fliegst du zu weit ein oder ziehst deinen Kreis nicht schnell genug enger, wenn du Steigen findest.

**Gute Zentrierzeit, aber geringe Effizienz**: Der Bart selbst war vielleicht schwach oder der Wind stark. Nicht immer deine Schuld!

**Starke Schwankungen**: Können an den Bedingungen liegen (ruppiger Tag) oder an einer ungleichmäßigen Schräglage. Die Empfehlungen versuchen, beides auseinanderzuhalten, indem sie schauen, wie stark sich dein Kreisradius verändert hat.

**In einem Bart schnell im Kern, in einem anderen langsam**: Achte auf deine Einflugtechnik. Bist du gegen den Wind oder mit dem Wind eingeflogen? Über den Kern hinausgeschossen?

## Wann du dieses Tool nutzt

- **Debriefing nach dem Flug**: Versteh, was funktioniert hat und was nicht
- **Wettkampfvorbereitung**: Analysiere deine Kurbeltechnik unter Druck
- **Bedingungen vergleichen**: Sieh, wie sich die Thermikqualität mit Tageszeit, Ort oder Wetter verändert
- **Fortschritte verfolgen**: Schau dir Flüge aus verschiedenen Monaten an, um zu sehen, wie du dich entwickelst
- **Vor dem nächsten Bier**: Zeig deinen Kumpels, dass du den Monsterbart *wirklich* zentriert hast (Beweis!)

## Tipps für eine bessere Analyse

1. **Saubere GPS-Daten helfen**: Ein schwaches GPS-Signal heißt eine ungenauere Analyse, und ein Logger, der jede Sekunde aufzeichnet, liefert die besten Ergebnisse
2. **Vergleiche ähnliche Bärte**: Vergleiche deine Technik unter ähnlichen Bedingungen, dann sind die Erkenntnisse aussagekräftig
3. **Verbeiß dich nicht in einen einzigen Flug**: Trends über viele Flüge zählen mehr als ein perfekter Bart
4. **Der Wind gehört zum Kontext**: Ein „Mittel“ an einem windigen Tag kann besseres Fliegen sein als ein „Exzellent“ in ruhiger Luft

## Was dieses Tool nicht kann

- **Künftige Bärte vorhersagen**: Es ist Analyse, keine Vorhersage
- **Deine Entscheidungen beurteilen**: Hättest du den Bart um 11 Uhr nehmen oder lieber weiterfliegen sollen? Das bleibt deine Entscheidung
- **Erfahrung ersetzen**: Das Tool zeigt Daten, aber Thermik *spüren* lernst du nur mit Stunden in der Luft

## Unterm Strich

Dieses Tool macht dich nicht über Nacht zu einem besseren Piloten, aber es zeigt dir *genau*, was du in der Thermik machst. Ob du deine Zentrierzeit verkürzen willst oder einfach neugierig bist, warum sich ein Steigen anders angefühlt hat: Der Tab **Thermik** hält dir den Rücken frei.

Und jetzt geh fliegen, hol dir ein paar Bärte und komm zurück, um zu sehen, ob du so gut bist, wie du glaubst.

---

Siehe auch: [So funktioniert die Thermikerkennung](/doc/advanced-thermal-analysis-settings) | [Die Gesamtbewertung der Thermik erklärt](/doc/overall-thermal-score)
