---
title: Der Gesamtwert eines Barts erklärt
description: So berechnen wir die Qualität eines Barts, mit Rechenbeispiel
category: Thermal Analysis
order: 4
---

Hast du dich beim Qualitätswert in der erweiterten Thermikanalyse schon mal gefragt, ob er überhaupt etwas bedeutet? Gute Nachricht: tut er. Das ist kein Bauchgefühl. Schauen wir uns genau an, wie diese Zahl zustande kommt, damit du verstehst, was „Mittel“ von „Exzellent“ trennt und was du dagegen tun kannst.

## Das große Ganze

Der Gesamtwert eines Barts (0-100) ist eine gewichtete Kombination aus fünf Faktoren:

| Faktor | Gewicht | Was er misst |
|--------|--------|------------------|
| **Steigen** | 30 % | Wie stark war das Steigen? |
| **Effizienz** | 20 % | Wie direkt bist du gestiegen? |
| **Zentrieren** | 20 % | Wie gut bist du im Kern geblieben? |
| **Gleichmäßigkeit** | 15 % | Wie stabil waren die Vario-Werte? |
| **Konstanz** | 15 % | Hast du den Bart wirklich ausgekurbelt? |

Jeder Faktor wird auf eine Skala von 0 bis 1 normiert, mit seinem Gewicht multipliziert, und am Ende wird das Ganze auf 0-100 skaliert. In der Theorie einfach, in der Praxis aufschlussreich.

Der Faktor **Konstanz** ist entscheidend: Er verhindert hohe Werte für kurzes Durchfliegen. 15 Sekunden durch starkes Steigen zu fliegen beweist noch kein Können beim Kurbeln. Wirklich zu kreisen und den Bart auszufliegen schon.

---

## Die Formel

Hier die tatsächliche Berechnung aus dem Code:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

### Wie jede Komponente berechnet wird

**1. Steigwert-Score**
```
climbScore = min(1, climbrate / 3.0)
```
Dein mittlerer Steigwert geteilt durch 3,0 m/s (gedeckelt bei 1). 3 m/s oder mehr ergeben also die volle Punktzahl. Weniger ergibt anteilig weniger.

**2. Effizienz-Score**
```
efficiencyScore = heightGain / horizontalDistance
```
Schon ein Wert zwischen 0 und 1. Perfekte Effizienz (senkrecht nach oben) = 1,0. Je mehr du seitlich versetzt wirst, desto niedriger wird er.

**3. Zentrier-Score**
```
centeringScore = centeringQuality
```
Der kommt aus dem Algorithmus der Kernanalyse: wie viel Zeit du nahe am besten Punkt des Barts verbracht hast. Schon zwischen 0 und 1.

**4. Gleichmäßigkeits-Score**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Der Kehrwert deiner Vario-Schwankung (Standardabweichung der Steigwerte). Sanfter Bart = hoher Wert. Hin und her zwischen +5 und -2 m/s = niedriger Wert. Eine Schwankung von 2 m/s oder mehr bringt null Beitrag zur Gleichmäßigkeit.

**5. Konstanz-Score**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Kombiniert Dauer und Anzahl der Kreise, um echtes Kurbeln zu belohnen. Für die volle Punktzahl brauchst du ~90 Sekunden UND 2+ vollständige Kreise. Ein Durchflug von 15 Sekunden ohne Kreis liegt hier nahe null, selbst wenn die anderen Werte toll aussehen.

---

## Rechenbeispiel: Bart Nr. 9

Gehen wir eine echte Berechnung mit konkreten Zahlen durch. Angenommen, du hast einen Bart mit diesen Werten ausgekurbelt:

| Kennzahl | Wert |
|--------|-------|
| Steigwert | 2,15 m/s |
| Effizienz | 0,41 (41 %) |
| Zentrieren | 0,53 (53 %) |
| Schwankung | 0,92 m/s |
| Dauer | 75 Sekunden |
| Anzahl Kreise | 3 Kreise |

### Schritt 1: Jede Komponente berechnen

**Steigwert-Score:**
```
climbScore = min(1, 2.15 / 3.0)
climbScore = min(1, 0.717)
climbScore = 0.717
```
Deine 2,15 m/s Steigen sind 71,7 % des „perfekten“ Richtwerts von 3,0 m/s.

**Effizienz-Score:**
```
efficiencyScore = 0.41
```
Schon normiert. Du hast 41 % so viel Höhe gewonnen, wie du seitlich zurückgelegt hast. Ziemlich typisch für einen Bart mit viel Versatz.

**Zentrier-Score:**
```
centeringScore = 0.53
```
Du warst etwa die Hälfte der Zeit in ordentlichem Steigen. Da geht noch was, aber nicht schlecht.

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
Du warst 75 Sekunden drin und hast 3 vollständige Kreise geflogen: solide Kurbelarbeit.

### Schritt 2: Die Gewichte anwenden

Jetzt multiplizierst du jeden Score mit seinem Gewicht:

| Komponente | Score | Gewicht | Beitrag |
|-----------|-------|--------|--------------|
| Steigen | 0,717 | 0,30 | 0,215 |
| Effizienz | 0,41 | 0,20 | 0,082 |
| Zentrieren | 0,53 | 0,20 | 0,106 |
| Gleichmäßigkeit | 0,54 | 0,15 | 0,081 |
| Konstanz | 0,833 | 0,15 | 0,125 |
| **Gesamt** | | | **0,609** |

### Schritt 3: Auf 0-100 skalieren

```
qualityScore = round(0.609 * 100) = 61
```

**Ergebnis: Gesamtwert 61**, solide im Bereich „Gut“.

---

## Deinen Wert deuten

| Wertebereich | Einstufung | Was er bedeutet |
|-------------|--------|---------------|
| **70-100** | Exzellent | Kurbeln auf Wettkampfniveau. Du hast den Kern schnell gefunden und bist drin geblieben. |
| **50-69** | Gut | Solide Arbeit. Du hast die Höhe gemacht, ohne zu viel Zeit zu verschwenden. |
| **25-49** | Mittel | Hat gereicht, aber du hast Leistung liegen lassen. |
| **0-24** | Schwach | Mühe, den Kern zu finden oder zu halten, oder die Bedingungen waren wirklich übel. |

---

## Was dir jede Komponente sagt

### Steigen (30 % Gewicht)

Am stärksten gewichtet, weil … naja, es geht nun mal ums Steigen. Aber versteif dich nicht darauf: Manchmal bringt ein Bart mit 1,5 m/s, den du perfekt ausfliegst, mehr Streckenkilometer als ein Bart mit 4,0 m/s, aus dem du ständig rausfällst.

**Niedriger Steigwert-Score?**
- Der Bart war wirklich schwach (nicht deine Schuld)
- Du warst zu lange am Rand (schau aufs Zentrieren)
- Du kamst zu spät zur Party und hast nur noch das obere Ende erwischt

### Effizienz (20 % Gewicht)

Effizienz = gewonnene Höhe / zurückgelegte horizontale Strecke. Eine perfekte Schraube senkrecht nach oben hätte 1,0 (und wäre bei echtem Wind unmöglich).

Typische Werte:
- **0,3-0,4**: Normal, etwas Versatz
- **0,5-0,6**: Sehr gut, enge Kreise
- **0,6+**: Exzellent, kaum Versatz

**Niedrige Effizienz?**
- Starker Wind schiebt dich seitlich weg
- Weite Kreise oder zu wenig Schräglage
- Auf der Leeseite eingeflogen und nie korrigiert

### Zentrieren (20 % Gewicht)

Wie viel Zeit du im guten Steigen verbracht hast und wie viel am Rand herumgeirrt bist. Berechnet über einen exponentiellen Abfall mit der Entfernung zum Kern: Je weiter weg vom Zentrum, desto schneller fällt dein Wert.

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

Kombiniert Dauer und Anzahl der Kreise, um zu belegen, dass du den Bart wirklich ausgekurbelt hast und nicht nur durchgeflogen bist. 10 Sekunden durch 4 m/s Steigen zu fliegen ist kein Kurbeln, das ist Glück. Dieser Faktor belohnt Piloten, die sich auf den Bart einlassen und ihn richtig ausfliegen.

Für die volle Punktzahl brauchst du:
- **~90 Sekunden** Dauer (kürzere Bärte bekommen anteilig weniger)
- **2+ vollständige Kreise** (weniger Kreise bekommen anteilig weniger)

Die beiden Faktoren werden multipliziert, du brauchst also BEIDES, um hier gut abzuschneiden. Zwei Minuten geradeaus durch Steigen (0 Kreise) ergeben null. Ein einzelner schneller 360er in schwachem Steigen (10 Sekunden) liegt ebenfalls nahe null.

**Niedriger Konstanz-Score?**
- Du hast den Bart zu früh verlassen
- Du hast dich nicht aufs Kreisen eingelassen (Durchflug)
- Der Bart ist gestorben, bevor du ihn richtig ausfliegen konntest

---

## So verbesserst du deinen Wert

### Schnelle Erfolge

1. **Zieh enger, sobald du Steigen triffst**: Nicht warten, sofort eindrehen, wenn das Vario anspringt
2. **Verschieb deinen Kreis Richtung Steigen**: Die klassische Zentriertechnik: weiter, wenn es vom Steigen weggeht, enger, wenn es wieder hineingeht
3. **Achte auf deine Schräglage**: Zu flach = weite Kreise = Versatz. Zu steil = ineffizient in schwachem Steigen

### Verfolge deinen Fortschritt

Öffne nach mehreren Flügen am selben Startplatz denselben Bart im Analysetool. Du wirst Muster erkennen:
- „An diesem Startplatz tue ich mich mit dem Zentrieren immer schwer“
- „Meine Nachmittagsbärte sind gleichmäßiger“
- „Der neue Schirm hat meine Effizienz echt verbessert“

### Jag nicht der Zahl hinterher

Ein Wert von 45 in einem zerrissenen, ruppigen Bart kann für besseres Fliegen stehen als eine 70 in einem sanften, fetten Schlauch. Der Kontext zählt. Nutz den Wert, um deinen eigenen Fortschritt über die Zeit zu verfolgen, nicht um dich an anderen Tagen mit anderen zu vergleichen.

---

## Hinter den Kulissen: Warum diese Gewichte?

Die Gewichte (30/20/20/15/15) sind nicht aus der Luft gegriffen. Sie beruhen darauf, worauf es beim effektiven Kurbeln wirklich ankommt:

- **Steigen führt** (30 %), weil das Hauptziel nun mal Höhe ist. Ein schwacher Bart, perfekt ausgeflogen, bleibt ein schwacher Bart.

- **Effizienz und Zentrieren teilen sich das Technik-Gewicht** (je 20 %), weil es bei beiden ums Können geht. Das eine geht ohne das andere (gut zentriert, aber rausgedriftet, oder enge Kreise an der falschen Stelle).

- **Gleichmäßigkeit ist ein Korrekturfaktor** (15 %), weil manche Turbulenz außerhalb deiner Kontrolle liegt. Sie beeinflusst deinen Wert, dominiert ihn aber nicht.

- **Konstanz filtert Zufallstreffer heraus** (15 %), weil kurz durch starkes Steigen zu fliegen kein Kurbeln ist, sondern Glück. Dieser Faktor sorgt dafür, dass hohe Werte an Piloten gehen, die sich wirklich auf den Bart eingelassen haben.

---

## Beispielszenarien

### Die glückliche Aufzugfahrt

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Steigwert | 4,2 m/s | 1,0 (gedeckelt) |
| Effizienz | 0,65 | 0,65 |
| Zentrieren | 0,78 | 0,78 |
| Gleichmäßigkeit | 0,38 m/s | 0,81 |
| Dauer / Kreise | 120 s / 4 Kreise | 1,0 |

**Beiträge:** 0,30 + 0,13 + 0,156 + 0,122 + 0,15 = **0,86**
**Wert:** 86 (Exzellent)

Du hast einen Monsterbart erwischt, bist im Kern geblieben und hast ihn zwei volle Minuten geritten. Traumszenario.

### Der kurze Durchflug (abgestraft)

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Steigwert | 3,5 m/s | 1,0 (gedeckelt) |
| Effizienz | 0,72 | 0,72 |
| Zentrieren | 0,85 | 0,85 |
| Gleichmäßigkeit | 0,45 m/s | 0,78 |
| Dauer / Kreise | 18 s / 0 Kreise | 0,0 |

**Beiträge:** 0,30 + 0,144 + 0,17 + 0,117 + 0,0 = **0,73**
**Wert:** 73 (Exzellent … aber knapp)

Starkes Steigen, tolle Vario-Werte, aber du bist geradeaus durchgeflogen, ohne einzukreisen. Der Konstanz-Score von null drückt den Wert deutlich. Im alten Bewertungssystem wären das 85+ gewesen.

### Das hart erkämpfte Steigen

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Steigwert | 1,8 m/s | 0,60 |
| Effizienz | 0,38 | 0,38 |
| Zentrieren | 0,45 | 0,45 |
| Gleichmäßigkeit | 1,4 m/s | 0,30 |
| Dauer / Kreise | 180 s / 6 Kreise | 1,0 |

**Beiträge:** 0,18 + 0,076 + 0,09 + 0,045 + 0,15 = **0,54**
**Wert:** 54 (Gut)

Schwacher Bart, zerrissener Kern, viel Suchen. Aber du bist 3 Minuten drangeblieben und hast 6 Kreise geflogen. Diese Ausdauer wird belohnt.

### Der Kernknacker

| Kennzahl | Wert | Score |
|--------|-------|-------|
| Steigwert | 2,4 m/s | 0,80 |
| Effizienz | 0,52 | 0,52 |
| Zentrieren | 0,85 | 0,85 |
| Gleichmäßigkeit | 0,65 m/s | 0,68 |
| Dauer / Kreise | 95 s / 3 Kreise | 1,0 |

**Beiträge:** 0,24 + 0,104 + 0,17 + 0,102 + 0,15 = **0,77**
**Wert:** 77 (Exzellent)

Mäßiger Bart, aber du hast das Zentrieren voll getroffen und ihn richtig ausgeflogen. Technik schlägt Kraft.

---

## Unterm Strich

Der Gesamtwert eines Barts soll dich nicht bewerten, er soll dir Feedback geben. Eine Zusammenfassung in Zahlen von dem, „was da drin passiert ist“, damit du aus jedem Bart lernst, statt dich nur zu erinnern, dass „der gut war“.

Nutz ihn, um:
- Muster in deinem Fliegen zu erkennen
- deine Fortschritte über die Zeit zu verfolgen
- konkrete Schwächen zu finden, an denen du arbeiten kannst
- vor deinen Freunden mit echten Daten anzugeben

Und denk dran: Selbst ein „mittelmäßiger“ Bart, der dich zum nächsten Steigen gebracht hat, ist besser als ein „exzellenter“, den du nicht genommen hast, weil du auf etwas Besseres gewartet hast.

Und jetzt flieg was!

---

Siehe auch: [Erweiterte Thermikanalyse](advanced-thermal-analysis.md) | [Einstellungen der Analyse](advanced-thermal-analysis-settings.md)
