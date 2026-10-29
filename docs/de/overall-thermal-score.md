---
title: Die Thermik-Gesamtbewertung erklärt
description: So berechnen wir die Qualität eines Barts, mit Rechenbeispiel
category: Thermal Analysis
order: 4
---

Schon mal die Qualitätsbewertung eines Barts im Tab **Thermik** gesehen und dich gefragt, ob die überhaupt was aussagt? Gute Nachricht: Ja. Das ist kein Bauchgefühl. Schauen wir uns genau an, wie diese Zahl zustande kommt, damit du verstehst, was „Mittel“ von „Exzellent“ trennt und was du dagegen tun kannst.

## Das große Ganze

Die Thermik-Bewertung (0 bis 100) ist eine gewichtete Kombination aus fünf Faktoren. Das sind dieselben fünf Zeilen, die du in der **Punkteaufschlüsselung** eines Barts siehst:

| Faktor | Gewicht | Was er misst |
|--------|--------|------------------|
| **Steigen** | 30 % | Wie stark war das Steigen in der Spitze? |
| **Netto-Steigen** | 20 % | Wie viel vom Steigen hast du mitgenommen? |
| **Zentrieren** | 20 % | Wie gut bist du im Kern geblieben? |
| **Gleichmäßigkeit** | 15 % | Wie ruhig waren die Vario-Werte? |
| **Konstanz** | 15 % | Bist du wirklich drangeblieben und hast den Bart ausgekurbelt? |

Jeder Faktor wird auf eine Skala von 0 bis 1 normiert, mit seinem Gewicht multipliziert, und das Ganze dann auf 0 bis 100 skaliert. In der Theorie simpel, in der Praxis aufschlussreich.

Der Faktor **Konstanz** ist entscheidend: Er verhindert, dass kurze Abstecher hoch bewertet werden. Ein paar Kreise in starkem Steigen beweisen noch kein Kurbelkönnen; dranbleiben und den Bart ausarbeiten schon.

---

## Die Formel

So wird tatsächlich gerechnet:

```
Quality Score = (climbScore * 0.30 +
                 netClimbScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Die Schwellenwerte in der Formel sind fest in m/s und Metern definiert, egal, welche Einheiten du dir anzeigen lässt.

### So wird jede Komponente berechnet

**1. Steigwert-Bewertung**
```
climbScore = min(1, maxClimb / 5.0)
```
Dein bestes anhaltendes Steigen im Bart (der Wert **Max.** in den Bartdetails, über 5 Sekunden geglättet, damit ein einzelner verrauschter GPS-Punkt nicht schummeln kann), geteilt durch 5,0 m/s, gedeckelt bei 1. Nur das oberste Zehntel der Bärte in We-Fly kommt nah an die Obergrenze; ein durchschnittlicher Bart landet knapp über der Hälfte.

**2. Netto-Steigen-Bewertung**
```
netClimbScore = min(1, (heightGain / duration) / 3.0)
```
Die gewonnene Höhe geteilt durch die Zeit im Bart: dein durchschnittliches Steigen vom Einflug bis zum Ausflug. 3,0 m/s geben die vollen 1,0; das schafft nur etwa ein Bart von hundert. Während das Spitzensteigen belohnt, dass du den starken Teil findest, belohnt dieser Faktor, dass du drinbleibst.

Frühere Versionen haben die gewonnene Höhe ins Verhältnis zum Versatz gesetzt. Wind allein hat diesen Wert gedrückt, sodass derselbe Bart an einem windigen Tag eine Stufe tiefer rutschte. Dem Netto-Steigen ist der Wind egal.

**3. Zentrier-Bewertung**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Ein Schirm kann nicht auf der Stelle drehen, deshalb gibt Kreisen genau im Radius des Kerns (oder enger) die perfekte 1,0. Jeder zusätzliche Kernradius Abstand kostet die Hälfte der Punkte: Kreisen im doppelten Kernradius ergibt 0,5, im dreifachen null. Den Windversatz rechnen wir vorher heraus, indem wir jeden Kreis mit seinem eigenen lokalen Mittelpunkt vergleichen.

**4. Gleichmäßigkeits-Bewertung**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Der Kehrwert deiner Vario-Schwankung (die Standardabweichung deines geglätteten Steigwerts). Ruhiger Bart = hohe Bewertung. Ständiges Hin und Her zwischen starkem Steigen und Saufen = niedrige Bewertung. Ab 2 m/s Schwankung trägt die Gleichmäßigkeit nichts mehr bei.

**5. Konstanz-Bewertung**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Kombiniert Dauer und Anzahl der Kreise, um echtes Kurbeln zu belohnen. Für die volle Punktzahl brauchst du etwa 90 Sekunden UND mindestens 2 vollständige Kreise. Jeder Bart in der Liste hat bereits mindestens zwei vollständige Kreise (siehe [How Thermal Detection Works](/doc/advanced-thermal-analysis-settings)), in der Praxis bestraft dieser Faktor also vor allem kurze Bärte.

---

## Rechenbeispiel: Bart Nr. 9

Gehen wir eine echte Berechnung mit konkreten Zahlen durch. Angenommen, du hast einen Bart mit diesen Werten ausgekurbelt:

| Kennzahl | Wert |
|--------|-------|
| Max. Steigen | 3.5 m/s |
| Netto-Steigen | 1.8 m/s |
| Zentrieren | 0.53 (53%) |
| Schwankung | 0.92 m/s |
| Dauer | 75 seconds |
| Anzahl Kreise | 3 turns |

### Schritt 1: Jede Komponente berechnen

**Steigwert-Bewertung:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Dein bestes anhaltendes Steigen von 3,5 m/s entspricht 70 % des Richtwerts von 5,0 m/s.

**Netto-Steigen-Bewertung:**
```
netClimbScore = min(1, 1.8 / 3.0)
netClimbScore = 0.60
```
Du bist vom Einflug bis zum Ausflug im Schnitt mit 1,8 m/s gestiegen, deutlich über dem typischen Bart (etwa 1 m/s).

**Zentrier-Bewertung:**
```
centeringScore = 0.53
```
Du bist im Schnitt etwas unter dem doppelten Kernradius gekreist. Da geht noch was, aber nicht schlecht.

**Gleichmäßigkeits-Bewertung:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Eine Vario-Schwankung von 0,92 m/s heißt: Der Bart war etwas ruppig, aber nicht wild.

**Konstanz-Bewertung:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Du warst 75 Sekunden drin und hast 3 vollständige Kreise geflogen: solides Kurbeln, nur knapp unter der 90-Sekunden-Marke.

### Schritt 2: Die Gewichte anwenden

Jetzt jede Bewertung mit ihrem Gewicht multiplizieren:

| Komponente | Bewertung | Gewicht | Beitrag |
|-----------|-------|--------|--------------|
| Steigen | 0.70 | 0.30 | 0.210 |
| Netto-Steigen | 0.60 | 0.20 | 0.120 |
| Zentrieren | 0.53 | 0.20 | 0.106 |
| Gleichmäßigkeit | 0.54 | 0.15 | 0.081 |
| Konstanz | 0.833 | 0.15 | 0.125 |
| **Gesamt** | | | **0.642** |

### Schritt 3: Auf 0–100 skalieren

```
qualityScore = round(0.642 * 100) = 64
```

**Ergebnis: eine Bewertung von 64**, knapp im Bereich „Gut“. Engere Kreise um den Kern würden Zentrieren und Netto-Steigen gleichzeitig verbessern, und genau da liegen die leichten Punkte.

---

## Deine Bewertung richtig lesen

| Bereich | Stufe | Was das heißt |
|-------------|--------|---------------|
| **74 und mehr** | Herausragend | Die besten Bärte in We-Fly. Starkes Steigen, sauber ausgekurbelt. |
| **68 bis 73** | Exzellent | Besser als drei von fünf Bärten. Du hast den Kern schnell gefunden und bist drin geblieben. |
| **63 bis 67** | Gut | Über dem typischen Bart. Solide Arbeit. |
| **58 bis 62** | Mittel | Ungefähr Mittelfeld. Hat seinen Zweck erfüllt, aber da war noch Luft nach oben. |
| **Unter 58** | Schwach | Kern schwer gefunden oder nicht gehalten, ein kurzer Bart oder wirklich miese Bedingungen. |

Die Stufen sind an mehr als 100.000 echten Bärten von We-Fly-Piloten kalibriert: Der typische Bart (Median) liegt bei etwa 66, ein Viertel der Bärte erreicht 73 oder mehr, und jeder zehnte kommt auf 80.

---

## Was dir jede Komponente sagt

### Steigstärke (30 % Gewicht)

Das ist der am stärksten gewichtete Faktor, denn … na ja, es geht nun mal ums Hochkommen. Er nutzt dein bestes *anhaltendes* Steigen, belohnt also, dass du den starken Teil des Barts findest, nicht bloß, dass du dich irgendwie hältst. Aber versteif dich nicht darauf: Manchmal bringt ein schwacher Bart, den du perfekt auskurbelst, mehr Strecke als ein starker, aus dem du ständig rausfällst.

**Niedrige Steigwert-Bewertung?**
- Der Bart war wirklich schwach (nicht deine Schuld)
- Du hast den stärksten Teil des Kerns nie gefunden (schau dir das Zentrieren an)
- Du warst spät dran und hast nur noch das obere Ende erwischt

### Netto-Steigen (20 % Gewicht)

Netto-Steigen = gewonnene Höhe / Zeit im Bart, bewertet gegen 3,0 m/s. Das ist das Steigen, das du tatsächlich mitgenommen hast, vom Einflug bis zum Ausflug, also kostet dich hier jeder Kreis außerhalb des Steigens Punkte. Wind ändert daran nichts.

Typische Werte:
- **etwa 1 m/s**: ein typischer Bart
- **2 m/s oder mehr**: ein starker, gut ausgekurbelter Bart (das oberste Zehntel)
- **3 m/s oder mehr**: volle Punktzahl

**Niedriges Netto-Steigen?**
- Der Bart war wirklich schwach (nicht deine Schuld)
- Kreise mit Suchen verbracht oder aus dem Kern gefallen
- Weite Kreise oder zu wenig Schräglage in einem engen Kern

### Zentrierqualität (20 % Gewicht)

Wie nah du am Kern gekreist bist. Kreisen im Radius des Kerns selbst ist perfekt; die Bewertung sinkt linear, je größer dein durchschnittlicher Abstand wird, und erreicht beim dreifachen Kernradius null.

**Schlechtes Zentrieren?**
- Hat eine Weile gedauert, den Kern zu finden
- Immer wieder rausgedriftet und neu zentriert
- Der Kern ist gewandert (Blasenthermik) oder war sehr klein

### Gleichmäßigkeit (15 % Gewicht)

Basiert auf der Standardabweichung deiner Vario-Werte. Ruhiges, gleichmäßiges Piepen = hohe Bewertung. Vario dreht durch = niedrige Bewertung.

**Niedrige Gleichmäßigkeit?**
- Ruppiger Bart (nicht immer deine Schuld)
- Immer wieder durch den Kern durch und auf der anderen Seite raus
- Steigen und Saufen im selben Kreis

### Konstanz (15 % Gewicht)

Kombiniert Dauer und Anzahl der Kreise, um zu belegen, dass du den Bart wirklich ausgekurbelt hast und nicht nur durchgeflogen bist. Dieser Faktor belohnt Piloten, die sich auf den Bart einlassen und ihn sauber ausarbeiten.

Für die volle Punktzahl brauchst du:
- **etwa 90 Sekunden** Dauer (kürzere Bärte bekommen anteilig weniger)
- **mindestens 2 vollständige Kreise** (weniger Kreise bekommen anteilig weniger)

Die beiden Faktoren werden multipliziert, du brauchst also BEIDES, um hier gut abzuschneiden. Ein 30-Sekunden-Bart mit drei Kreisen bekommt nur ein Drittel der Punkte.

**Niedrige Konstanz-Bewertung?**
- Du hast den Bart zu früh verlassen
- Der Bart ist eingeschlafen, bevor du ihn richtig ausarbeiten konntest

---

## So verbesserst du deine Bewertung

### Schnelle Erfolge

1. **Sofort eindrehen, wenn's steigt**: nicht warten, sobald das Vario anspringt, kurbeln
2. **Den Kreis Richtung Steigen verlegen**: klassische Zentriertechnik, auf der schwachen Seite weiter, auf der starken Seite enger
3. **Auf die Schräglage achten**: zu flach heißt weite Kreise und Versatz, zu steil ist in schwachem Steigen ineffizient

### Verfolge deine Fortschritte

Vergleich Bärte aus mehreren Flügen im selben Fluggebiet. Mit der Zeit erkennst du Muster:
- „An diesem Startplatz tu ich mich mit dem Zentrieren immer schwer“
- „Meine Nachmittagsbärte sind gleichmäßiger“
- „Der neue Schirm hat mein Netto-Steigen echt verbessert“

### Jag nicht der Zahl hinterher

Eine 55 in einem zerrissenen, ruppigen Bart kann besseres Fliegen bedeuten als eine 80 in einem ruhigen, fetten Schlauch. Der Kontext zählt. Nutz die Bewertung, um deine eigene Entwicklung über die Zeit zu verfolgen, nicht, um dich an anderen Tagen mit anderen zu vergleichen.

---

## Hinter den Kulissen: Warum diese Gewichte?

Die Gewichte (30/20/20/15/15) sind nicht aus der Luft gegriffen. Sie beruhen darauf, was beim effektiven Kurbeln wirklich zählt:

- **Die Steigstärke führt** (30 %), weil es in erster Linie ums Hochkommen geht. Ein perfekt ausgekurbelter schwacher Bart bleibt ein schwacher Bart.

- **Netto-Steigen und Zentrieren teilen sich das Technik-Gewicht** (je 20 %), weil beide mit Können zu tun haben. Du kannst das eine ohne das andere haben (enge Kreise an der falschen Stelle oder sauber zentrierte Kreise in einem Bart, aus dem du immer wieder rausgehst).

- **Gleichmäßigkeit ist ein Korrektiv** (15 %), weil manche Turbulenz außerhalb deiner Kontrolle liegt. Sie beeinflusst deine Bewertung, dominiert sie aber nicht.

- **Konstanz filtert Zufallstreffer heraus** (15 %), weil ein paar Kreise in starkem Steigen noch nicht heißt, einen Bart auszukurbeln. Dieser Faktor sorgt dafür, dass hohe Bewertungen an Piloten gehen, die wirklich am Steigen drangeblieben sind.

---

## Beispielszenarien

### Die glückliche Aufzugsfahrt

| Kennzahl | Wert | Bewertung |
|--------|-------|-------|
| Max. Steigen | 5.6 m/s | 1.0 (gedeckelt) |
| Netto-Steigen | 3.4 m/s | 1.0 (gedeckelt) |
| Zentrieren | 0.78 | 0.78 |
| Gleichmäßigkeit | 0.38 m/s | 0.81 |
| Dauer / Kreise | 120s / 4 turns | 1.0 |

**Beiträge:** 0.30 + 0.20 + 0.156 + 0.121 + 0.15 = **0.927**
**Bewertung:** 93 (Herausragend)

Du hast einen Monsterbart erwischt, bist im Kern geblieben und hast ihn zwei volle Minuten lang geritten. Traumszenario.

### Der schnelle Treffer (abgestraft)

| Kennzahl | Wert | Bewertung |
|--------|-------|-------|
| Max. Steigen | 4.8 m/s | 0.96 |
| Netto-Steigen | 2.4 m/s | 0.80 |
| Zentrieren | 0.85 | 0.85 |
| Gleichmäßigkeit | 0.45 m/s | 0.78 |
| Dauer / Kreise | 25s / 2 turns | 0.28 |

**Beiträge:** 0.288 + 0.16 + 0.17 + 0.116 + 0.042 = **0.776**
**Bewertung:** 78 (Herausragend)

Starkes Steigen, top zentriert, aber du bist nur zwei Kreise drangeblieben. Hättest du ihn mit derselben Technik 90 Sekunden ausgekurbelt, hätte die Konstanz die fehlenden Punkte geliefert und die Bewertung läge bei 88.

### Der hart erkämpfte Bart

| Kennzahl | Wert | Bewertung |
|--------|-------|-------|
| Max. Steigen | 2.6 m/s | 0.52 |
| Netto-Steigen | 0.9 m/s | 0.30 |
| Zentrieren | 0.45 | 0.45 |
| Gleichmäßigkeit | 1.4 m/s | 0.30 |
| Dauer / Kreise | 180s / 6 turns | 1.0 |

**Beiträge:** 0.156 + 0.06 + 0.09 + 0.045 + 0.15 = **0.501**
**Bewertung:** 50 (Schwach)

Schwacher Bart, zerrissener Kern, viel Suchen. Die Stufe klingt hart, beschreibt aber eher den Bart als dich: Du bist 3 Minuten und 6 Kreise drangeblieben, und die Konstanz hat dir jeden einzelnen Punkt gegeben. An so einem Tag war der Bart, der dich in der Luft gehalten hat, genau die richtige Entscheidung.

### Der Kernknacker

| Kennzahl | Wert | Bewertung |
|--------|-------|-------|
| Max. Steigen | 3.4 m/s | 0.68 |
| Netto-Steigen | 1.8 m/s | 0.60 |
| Zentrieren | 0.85 | 0.85 |
| Gleichmäßigkeit | 0.65 m/s | 0.68 |
| Dauer / Kreise | 95s / 3 turns | 1.0 |

**Beiträge:** 0.204 + 0.12 + 0.17 + 0.101 + 0.15 = **0.745**
**Bewertung:** 75 (Herausragend)

Mäßiger Bart, aber das Zentrieren hast du voll getroffen und ihn sauber ausgekurbelt. Technik schlägt Kraft.

---

## Unterm Strich

Die Thermik-Bewertung soll dich nicht beurteilen, sondern dir Feedback geben. Eine Zusammenfassung in Zahlen von „was da drin passiert ist“, damit du aus jedem Bart lernst, statt dich nur an „der war gut“ zu erinnern.

Nutz sie, um:
- Muster in deinem Fliegen zu erkennen
- deine Fortschritte über die Zeit zu verfolgen
- gezielt Schwächen zu finden, an denen du arbeiten kannst
- vor deinen Kumpels mit echten Daten anzugeben

Und denk dran: Auch ein „mittlerer“ Bart, der dich zum nächsten gebracht hat, ist besser als ein „exzellenter“, den du nicht genommen hast, weil du auf was Besseres gewartet hast.

Und jetzt ab in die Luft!

---

Siehe auch: [Advanced Thermal Analysis](/doc/advanced-thermal-analysis) | [How Thermal Detection Works](/doc/advanced-thermal-analysis-settings)
