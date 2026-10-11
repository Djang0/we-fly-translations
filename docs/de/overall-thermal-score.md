---
title: Der Gesamtwert eines Barts erklärt
description: So berechnen wir die Qualität eines Barts, mit Rechenbeispiel
category: Thermal Analysis
order: 4
---

Hast du dich beim Qualitätswert eines Barts im Tab **Thermik** schon mal gefragt, ob er überhaupt etwas bedeutet? Gute Nachricht: tut er. Das ist kein Bauchgefühl. Schauen wir uns genau an, wie diese Zahl zustande kommt, damit du verstehst, was „Mittel“ von „Exzellent“ trennt und was du dagegen tun kannst.

## Das große Ganze

Der Gesamtwert eines Barts (0 bis 100) ist eine gewichtete Kombination aus fünf Faktoren. Es sind dieselben fünf Zeilen, die du in der **Punkteaufschlüsselung** eines Barts siehst:

| Faktor | Gewicht | Was er misst |
|--------|--------|------------------|
| **Steigen** | 30 % | Wie stark war das Steigen in seiner besten Phase? |
| **Effizienz** | 20 % | Wie direkt bist du gestiegen? |
| **Zentrieren** | 20 % | Wie gut bist du im Kern geblieben? |
| **Gleichmäßigkeit** | 15 % | Wie stabil waren die Vario-Werte? |
| **Konstanz** | 15 % | Bist du wirklich geblieben und hast den Bart ausgekurbelt? |

Jeder Faktor wird auf eine Skala von 0 bis 1 normiert, mit seinem Gewicht multipliziert, und am Ende wird das Ganze auf 0 bis 100 skaliert. In der Theorie einfach, in der Praxis aufschlussreich.

Der Faktor **Konstanz** ist entscheidend: Er verhindert hohe Werte für kurze Besuche. Ein paar Kreise in starkem Steigen beweisen noch kein Können beim Kurbeln. Zu bleiben und den Bart auszufliegen schon.

---

## Die Formel

Hier die tatsächliche Berechnung:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Die Schwellenwerte in der Formel sind fest in m/s und Metern angegeben, egal in welchen Einheiten du dir alles anzeigen lässt.

### Wie jede Komponente berechnet wird

**1. Steigwert-Score**
```
climbScore = min(1, maxClimb / 5.0)
```
Dein bestes anhaltendes Steigen im Bart (der Wert **Max.** in den Details zum Bart, über 5 Sekunden geglättet, damit ein einzelner verrauschter GPS-Fix nicht schummeln kann) geteilt durch 5,0 m/s, gedeckelt bei 1. Nur das oberste Zehntel der Steigen in We-Fly kommt nahe an diese Grenze; ein durchschnittliches Steigen erreicht etwas mehr als die Hälfte.

**2. Effizienz-Score**
```
efficiencyScore = min(1, heightGain / driftDistance)
```
Höhengewinn geteilt durch die horizontale Strecke zwischen dem Punkt, an dem der Bart begann, und dem, an dem er endete. Gewinnst du so viel Höhe, wie du versetzt wirst, oder mehr, gibt das die vollen 1,0. Je mehr dich der Wind seitlich mitnimmt, desto niedriger wird der Wert.

**3. Zentrier-Score**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Ein Schirm kann nicht auf der Stelle drehen, deshalb gibt Kreisen genau im Radius des Kerns (oder enger) perfekte 1,0. Jeder zusätzliche Kernradius Abstand kostet die Hälfte des Werts: Kreisen im doppelten Kernradius gibt 0,5, im dreifachen null. Der Versatz durch den Wind wird vorher herausgerechnet, indem jeder Kreis mit seinem eigenen lokalen Mittelpunkt verglichen wird.

**4. Gleichmäßigkeits-Score**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Der Kehrwert deiner Vario-Schwankung (die Standardabweichung deines geglätteten Steigwerts). Sanfter Bart = hoher Wert. Hin und her zwischen starkem Steigen und Saufen = niedriger Wert. Eine Schwankung von 2 m/s oder mehr bringt null Beitrag zur Gleichmäßigkeit.

**5. Konstanz-Score**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Kombiniert Dauer und Anzahl der Kreise, um echtes Kurbeln zu belohnen. Für die volle Punktzahl brauchst du etwa 90 Sekunden UND 2 oder mehr vollständige Kreise. Jeder Bart in der Liste hat schon mindestens zwei vollständige Kreise (siehe [So funktioniert die Thermikerkennung](/doc/advanced-thermal-analysis-settings)), in der Praxis bestraft dieser Faktor also vor allem kurze Steigen.

---

## Rechenbeispiel: Bart Nr. 9

Gehen wir eine echte Berechnung mit konkreten Zahlen durch. Angenommen, du hast einen Bart mit diesen Werten ausgekurbelt:

| Kennzahl | Wert |
|--------|-------|
| Max. Steigen | 3,5 m/s |
| Effizienz | 0,41 (41 %) |
| Zentrieren | 0,53 (53 %) |
| Schwankung | 0,92 m/s |
| Dauer | 75 Sekunden |
| Anzahl Kreise | 3 Kreise |

### Schritt 1: Jede Komponente berechnen

**Steigwert-Score:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Dein bestes anhaltendes Steigen von 3,5 m/s entspricht 70 % des Richtwerts von 5,0 m/s.

**Effizienz-Score:**
```
efficiencyScore = 0.41
```
Du hast 41 % so viel Höhe gewonnen, wie du seitlich versetzt wurdest. Ziemlich typisch für einen Bart mit viel Versatz.

**Zentrier-Score:**
```
centeringScore = 0.53
```
Du bist im Mittel knapp im doppelten Kernradius gekreist. Da geht noch was, aber nicht schlecht.

**Gleichmäßigkeits-Score:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Deine Vario-Schwankung von 0,92 m/s heißt: Das Steigen war etwas ruppig, aber nicht verrückt.

**Konstanz-Score:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Du warst 75 Sekunden drin und hast 3 vollständige Kreise geflogen: solide Kurbelarbeit, nur knapp unter der 90-Sekunden-Marke.

### Schritt 2: Die Gewichte anwenden

Jetzt multiplizierst du jeden Score mit seinem Gewicht:

| Komponente | Score | Gewicht | Beitrag |
|-----------|-------|--------|--------------|
| Steigen | 0,70 | 0,30 | 0,210 |
| Effizienz | 0,41 | 0,20 | 0,082 |
| Zentrieren | 0,53 | 0,20 | 0,106 |
| Gleichmäßigkeit | 0,54 | 0,15 | 0,081 |
| Konstanz | 0,833 | 0,15 | 0,125 |
| **Gesamt** | | | **0,604** |

### Schritt 3: Auf 0 bis 100 skalieren

```
qualityScore = round(0.604 * 100) = 60
```

**Ergebnis: Gesamtwert 60**, gerade noch im Bereich „Mittel“. Engere Kreise würden Effizienz und Zentrieren gleichzeitig heben, und genau da liegen die leichten Punkte.

---

## Deinen Wert deuten

| Wertebereich | Einstufung | Was er bedeutet |
|-------------|--------|---------------|
| **80 und mehr** | Herausragend | Die besten Steigen in We-Fly. Starkes Steigen, richtig ausgeflogen. |
| **73 bis 79** | Exzellent | Besser als drei von vier Bärten. Du hast den Kern schnell gefunden und bist drin geblieben. |
| **66 bis 72** | Gut | Über dem typischen Bart. Solide Arbeit. |
| **60 bis 65** | Mittel | Etwa in der Mitte des Felds. Hat gereicht, aber du hast etwas Leistung liegen lassen. |
| **Unter 60** | Schwach | Mühe, den Kern zu finden oder zu halten, ein kurzes Steigen oder wirklich üble Bedingungen. |

Die Bereiche sind an echten Bärten von We-Fly-Piloten kalibriert: Der typische Bart (Median) erreicht etwa 65, ein Viertel der Bärte kommt auf 73 oder mehr, und jeder zehnte erreicht 80.

---

## Was dir jede Komponente sagt

### Steigen (30 % Gewicht)

Am stärksten gewichtet, weil … naja, es geht nun mal ums Steigen. Gewertet wird dein bestes *anhaltendes* Steigen, belohnt wird also, den starken Teil des Barts zu finden, nicht nur dranzubleiben. Aber versteif dich nicht darauf: Manchmal bringt ein schwacher Bart, den du perfekt ausfliegst, mehr Strecke als ein starker, aus dem du ständig rausfällst.

**Niedriger Steigwert-Score?**
- Der Bart war wirklich schwach (nicht deine Schuld)
- Du hast den stärksten Teil des Kerns nie gefunden (schau aufs Zentrieren)
- Du kamst zu spät zur Party und hast nur noch das obere Ende erwischt

### Effizienz (20 % Gewicht)

Effizienz = gewonnene Höhe / horizontaler Versatz, gedeckelt bei 1,0. Ein Bart, in dem du mindestens so viel Höhe gewinnst, wie du versetzt wirst, gibt die vollen 1,0, und dafür braucht es schwachen Wind oder starkes Steigen.

Typische Werte:
- **0,3 bis 0,4**: Normal, etwas Versatz
- **0,5 bis 0,6**: Sehr gut, enge Kreise
- **über 0,6**: Exzellent, kaum Versatz

**Niedrige Effizienz?**
- Starker Wind schiebt dich seitlich weg
- Weite Kreise oder zu wenig Schräglage
- Mit dem Wind eingeflogen und nie korrigiert

### Zentrieren (20 % Gewicht)

Wie nah du um den Kern gekreist bist. Kreisen im Radius des Kerns ist perfekt; der Wert sinkt geradlinig, je größer dein mittlerer Abstand wird, und erreicht beim dreifachen Kernradius null.

**Schwaches Zentrieren?**
- Du hast eine Weile gebraucht, um den Kern zu finden
- Du bist immer wieder rausgedriftet und musstest neu zentrieren
- Der Kern ist gewandert (Thermikblase) oder war sehr klein

### Gleichmäßigkeit (15 % Gewicht)

Basiert auf der Standardabweichung deiner Vario-Werte. Sanftes, gleichmäßiges Piepen = hoher Wert. Vario spielt verrückt = niedriger Wert.

**Niedrige Gleichmäßigkeit?**
- Turbulenter Bart (nicht immer deine Schuld)
- Du bist immer wieder durch den Kern durch und auf der anderen Seite raus
- Steigen und Saufen im selben Kreis

### Konstanz (15 % Gewicht)

Kombiniert Dauer und Anzahl der Kreise, um zu belegen, dass du den Bart wirklich ausgekurbelt hast und nicht nur durchgeflogen bist. Dieser Faktor belohnt Piloten, die sich auf den Bart einlassen und ihn richtig ausfliegen.

Für die volle Punktzahl brauchst du:
- **etwa 90 Sekunden** Dauer (kürzere Bärte bekommen anteilig weniger)
- **2 oder mehr vollständige Kreise** (weniger Kreise bekommen anteilig weniger)

Die beiden Faktoren werden multipliziert, du brauchst also BEIDES, um hier gut abzuschneiden. Ein Steigen von 30 Sekunden mit drei Kreisen bekommt nur ein Drittel der Punkte.

**Niedriger Konstanz-Score?**
- Du hast den Bart zu früh verlassen
- Der Bart ist gestorben, bevor du ihn richtig ausfliegen konntest

---

## So verbesserst du deinen Wert

### Schnelle Erfolge

1. **Zieh enger, sobald du Steigen triffst**: Nicht warten, sofort eindrehen, wenn das Vario anspringt
2. **Verschieb deinen Kreis Richtung Steigen**: Die klassische Zentriertechnik: weiter auf der schwachen Seite, enger auf der starken
3. **Achte auf deine Schräglage**: Zu flach heißt weite Kreise und Versatz, zu steil ist ineffizient in schwachem Steigen

### Verfolge deinen Fortschritt

Vergleiche Bärte aus mehreren Flügen am selben Startplatz. Du wirst Muster erkennen:
- „An diesem Startplatz tue ich mich mit dem Zentrieren immer schwer“
- „Meine Nachmittagsbärte sind gleichmäßiger“
- „Der neue Schirm hat meine Effizienz echt verbessert“

### Jag nicht der Zahl hinterher

Ein Wert von 55 in einem zerrissenen, ruppigen Bart kann für besseres Fliegen stehen als eine 80 in einem sanften, fetten Schlauch. Der Kontext zählt. Nutz den Wert, um deinen eigenen Fortschritt über die Zeit zu verfolgen, nicht um dich an anderen Tagen mit anderen zu vergleichen.

---

## Hinter den Kulissen: Warum diese Gewichte?

Die Gewichte (30/20/20/15/15) sind nicht aus der Luft gegriffen. Sie beruhen darauf, worauf es beim effektiven Kurbeln wirklich ankommt:

- **Steigen führt** (30 %), weil das Hauptziel nun mal Höhe ist. Ein schwacher Bart, perfekt ausgeflogen, bleibt ein schwacher Bart.

- **Effizienz und Zentrieren teilen sich das Technik-Gewicht** (je 20 %), weil es bei beiden ums Können geht. Das eine geht ohne das andere (gut zentriert, aber rausgedriftet, oder enge Kreise an der falschen Stelle).

- **Gleichmäßigkeit ist ein Korrekturfaktor** (15 %), weil manche Turbulenz außerhalb deiner Kontrolle liegt. Sie beeinflusst deinen Wert, dominiert ihn aber nicht.

- **Konstanz filtert Zufallstreffer heraus** (15 %), weil ein paar Kreise in starkem Steigen noch nicht heißen, dass du einen Bart ausgekurbelt hast. Dieser Faktor sorgt dafür, dass hohe Werte an Piloten gehen, die sich wirklich auf das Steigen eingelassen haben.

---

## Beispielszenarien

### Die glückliche Aufzugfahrt

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Max. Steigen | 5,6 m/s | 1,0 (gedeckelt) |
| Effizienz | 0,65 | 0,65 |
| Zentrieren | 0,78 | 0,78 |
| Gleichmäßigkeit | 0,38 m/s | 0,81 |
| Dauer / Kreise | 120 s / 4 Kreise | 1,0 |

**Beiträge:** 0,30 + 0,13 + 0,156 + 0,121 + 0,15 = **0,858**
**Wert:** 86 (Herausragend)

Du hast einen Monsterbart erwischt, bist im Kern geblieben und hast ihn zwei volle Minuten geritten. Traumszenario.

### Der kurze Treffer (abgestraft)

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Max. Steigen | 4,8 m/s | 0,96 |
| Effizienz | 0,72 | 0,72 |
| Zentrieren | 0,85 | 0,85 |
| Gleichmäßigkeit | 0,45 m/s | 0,78 |
| Dauer / Kreise | 25 s / 2 Kreise | 0,28 |

**Beiträge:** 0,288 + 0,144 + 0,17 + 0,116 + 0,042 = **0,760**
**Wert:** 76 (Exzellent)

Starkes Steigen, tolles Zentrieren, aber du bist nur zwei Kreise geblieben. Hättest du ihn mit derselben Technik 90 Sekunden ausgekurbelt, hätte der Konstanz-Faktor die fehlenden Punkte beigesteuert, und der Wert läge bei 87.

### Das hart erkämpfte Steigen

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Max. Steigen | 2,6 m/s | 0,52 |
| Effizienz | 0,38 | 0,38 |
| Zentrieren | 0,45 | 0,45 |
| Gleichmäßigkeit | 1,4 m/s | 0,30 |
| Dauer / Kreise | 180 s / 6 Kreise | 1,0 |

**Beiträge:** 0,156 + 0,076 + 0,09 + 0,045 + 0,15 = **0,517**
**Wert:** 52 (Schwach)

Schwacher Bart, zerrissener Kern, viel Suchen. Die Einstufung ist hart, aber sie beschreibt eher den Bart als dich: Du bist 3 Minuten und 6 Kreise drangeblieben, und der Konstanz-Faktor hat dir jeden seiner Punkte gegeben. An so einem Tag war das Steigen, das dich in der Luft gehalten hat, die richtige Entscheidung.

### Der Kernknacker

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Max. Steigen | 3,4 m/s | 0,68 |
| Effizienz | 0,52 | 0,52 |
| Zentrieren | 0,85 | 0,85 |
| Gleichmäßigkeit | 0,65 m/s | 0,68 |
| Dauer / Kreise | 95 s / 3 Kreise | 1,0 |

**Beiträge:** 0,204 + 0,104 + 0,17 + 0,101 + 0,15 = **0,729**
**Wert:** 73 (Exzellent)

Mäßiger Bart, aber du hast das Zentrieren voll getroffen und ihn richtig ausgeflogen. Technik schlägt Kraft.

---

## Unterm Strich

Der Gesamtwert eines Barts soll dich nicht bewerten, er soll dir Feedback geben. Eine Zusammenfassung in Zahlen von dem, „was da drin passiert ist“, damit du aus jedem Bart lernst, statt dich nur zu erinnern, dass „der gut war“.

Nutz ihn, um:
- Muster in deinem Fliegen zu erkennen
- deine Fortschritte über die Zeit zu verfolgen
- konkrete Schwächen zu finden, an denen du arbeiten kannst
- vor deinen Freunden mit echten Daten anzugeben

Und denk dran: Selbst ein „mittlerer“ Bart, der dich zum nächsten Steigen gebracht hat, ist besser als ein „exzellenter“, den du nicht genommen hast, weil du auf etwas Besseres gewartet hast.

Und jetzt flieg was!

---

Siehe auch: [Erweiterte Thermikanalyse](/doc/advanced-thermal-analysis) | [So funktioniert die Thermikerkennung](/doc/advanced-thermal-analysis-settings)
