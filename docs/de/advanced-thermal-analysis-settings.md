---
title: So funktioniert die Thermikerkennung
description: Die Regeln, nach denen We-Fly entscheidet, wo ein Bart beginnt, wo er endet und welche Steigphasen in die Liste kommen
category: Thermal Analysis
order: 2
---

*Oder: Wie die Analyse entscheidet, dass das ganze Kreisen tatsächlich ein Bart war*

Jeden Bart, den du im Tab **Thermik** eines Flugs siehst, hat derselbe Detektor gefunden, mit denselben Schwellenwerten, für jeden Piloten. Es gibt keine Regler zum Einstellen und nichts zum Zurücksetzen: Die Regeln sind fest, damit deine Zahlen dasselbe bedeuten wie die deines Kumpels, Flug für Flug.

Diese Seite erklärt diese Regeln. Wenn die Analyse also eine Steigphase ignoriert, die du sicher ausgekurbelt hast (oder einen Bart in zwei teilt), weißt du, warum.

---

## Die Kurzfassung

1. Der Detektor schaut sich ein kurzes, gleitendes Fenster deines Tracks an und stellt vier Fragen: Steigst du, drehst du, ist die Kurve gleichmäßig, und hast du Höhe gewonnen?
2. Er verrechnet die Antworten zu einem **Thermikwert** zwischen 0 und 1.
3. Ein kleiner Zustandsautomat mit eingebautem Zögern macht aus diesem Wert „Gleiten“ und „Kurbeln“, damit ein einzelner Rülpser oder eine Runde im Saufen das Ergebnis nicht umkippt.
4. Jede mögliche Steigphase wird dann auf die Kreise zugeschnitten, die du wirklich geflogen bist, und nur behalten, wenn sie lang genug ist, Höhe bringt und mindestens zwei vollständige Kreise enthält.

Der Rest dieser Seite erklärt die Details hinter jedem Schritt.

Alle Schwellenwerte unten sind die Werte, die die Engine intern verwendet, in metrischen Einheiten. Deine Anzeigeeinheiten (Fuß, Knoten und so weiter) ändern nur, wie dir die Zahlen angezeigt werden, nicht, wo die Grenzen liegen.

---

## Schritt 1: Vier Signale aus einem gleitenden Fenster

Für jeden GPS-Punkt schaut der Detektor auf die vorherigen zehn Punkte zurück. Bei einem typischen Logger, der einen Punkt pro Sekunde aufzeichnet, sind das etwa zehn Sekunden Flug, ungefähr ein Viertel bis ein halber Kreis.

Aus diesem Fenster liest er vier Signale, jedes auf eine Skala von 0 bis 1 gebracht:

| Signal | Was es misst | Volle Punktzahl bei | Gewicht |
|---|---|---|---|
| Vario | Mittlere Vertikalgeschwindigkeit über das Fenster | 3 m/s | 45 % |
| Gleichmäßigkeit des Kreisens | Wie konstant deine Drehrate ist | perfekt gleichmäßigem Kreisen | 25 % |
| Drehrate | Wie schnell sich dein Kurs ändert | 30°/s | 20 % |
| Höhengewinn | Netto gewonnene Höhe über das Fenster | 50 m | 10 % |

Das Vario hat das größte Gewicht, weil es der direkteste Beweis für Steigen ist. Danach kommt die Gleichmäßigkeit des Kreisens, weil sie einen sauberen Bart (weiche, wiederholbare Kreise) von zufälliger Turbulenz unterscheidet, bei der dein Kurs hin und her springt. Drehrate und Höhengewinn bestätigen das Bild.

Die gewichtete Summe ist der **Thermikwert**. Ein Pilot, der in ruhiger Luft geradeaus gleitet, liegt nahe null; ein Pilot, der in gutem Steigen gleichmäßige Kreise zieht, liegt deutlich über 0,5.

---

## Schritt 2: Der Zustandsautomat (warum der Detektor absichtlich zögert)

Würde der Detektor einfach sagen „Wert über X heißt Bart“, würde das Ergebnis jedes Mal an- und ausgehen, wenn du eine Böe erwischst oder die Saufseite eines zerrissenen Kerns durchfliegst. Deshalb wechselt er stattdessen zwischen vier Zuständen:

| Zustand | Wie du hineinkommst | Wie du herauskommst |
|---|---|---|
| **Gleiten** | Startzustand | Wert erreicht **0,35** → Einsteigen |
| **Einsteigen** | Wert hat 0,35 erreicht | Wert bleibt **5 Sekunden** bei 0,35 oder darüber → Kurbeln. Fällt unter 0,35 → zurück zu Gleiten (Fehlalarm) |
| **Kurbeln** | Bestätigter Bart | Wert fällt unter **0,20** → Verlassen |
| **Verlassen** | Wert ist unter 0,20 gefallen | Bleibt **3 Sekunden** unter 0,20 → Gleiten. Steigt wieder auf 0,35 oder mehr → wieder Kurbeln |

Zwei Details sind hier wichtig:

- **Der Weg hinein ist strenger als der Weg hinaus.** Du brauchst 0,35, um einen Bart zu beginnen, musst aber nur über 0,20 bleiben, um ihn zu halten. Diese Lücke (Hysterese genannt) verhindert, dass ein zerrissener Bart in fünf Stücke gehackt wird.
- **Dazwischen wartet der Detektor.** Schwebt der Wert beim Verlassen zwischen 0,20 und 0,35, beendet er den Bart weder, noch startet er ihn neu, bis das Bild klar ist.

### Sicherheitsnetze für lange Steigphasen

Ein langer Bart sammelt viel Höhe, und diese angesparte Höhe kann den Moment verdecken, in dem das Steigen tatsächlich aufgehört hat. Zwei zusätzliche Regeln fangen das ab:

- **Prüfung des jüngsten Trends.** Zeigen beim Kurbeln die letzten 60 Sekunden einen Netto-Höhenverlust, wird der Bart sofort geschlossen, egal wie gut er vorher war.
- **Prüfung des mittleren Steigens.** Nach der ersten Minute muss das mittlere Steigen seit Beginn des Barts über 0,2 m/s bleiben. Die Latte steigt nach drei Minuten auf 0,3 m/s und nach fünf auf 0,4 m/s. Fällst du darunter, wird der Bart geschlossen.
- **Harter Abbruch beim Sinken.** Sobald du beim Verlassen bist, beenden weitere 30 m Höhenverlust den Bart sofort, selbst wenn ein paar Suchkreise den Wert kurz wieder nach oben drücken.

Wegen dieser Regeln erscheinen zwei echte Steigphasen, die ein kurzer Suchgleitflug verbindet, als zwei Bärte und nicht als einer.

---

## Schritt 3: Zuschneiden, dann behalten oder verwerfen

Wenn ein Bart geschlossen wird, räumt der Detektor ihn auf, bevor er entscheidet, ob er zählt.

**Zuschneiden.** Der Zustandsautomat öffnet einen Bart ein paar Sekunden, nachdem du zu kreisen beginnst, und schließt ihn ein paar Sekunden, nachdem du ihn verlässt. Diese Ränder sind meist Suchgleitflug, deshalb wird der Bart so zugeschnitten, dass er vom Beginn deines ersten vollständigen 360°-Kreises bis zum Ende deines letzten reicht. Ein vollständiger Kreis braucht mindestens acht GPS-Punkte, damit ein verrauschtes Gewackel nicht zählt.

**Behalten oder verwerfen.** Nach dem Zuschneiden wird ein Bart nur behalten, wenn er:

- insgesamt **Höhe gewonnen** hat,
- mindestens **15 Sekunden** gedauert hat und
- mindestens **zwei vollständige Kreise** enthält.

Alles andere gilt als Durchflug durch Steigen oder als Suchkreis, nicht als Bart. Diese Zeit siehst du trotzdem im Tab **Phasen**: Kreisen, das es nicht in die Liste geschafft hat, erscheint als **Suche**, der Rest als **Gleitflug** oder **Schweben**.

### Schlepp- und Motorstarts

Ein Steigflug am Schlepp, an der Winde oder mit dem Motor ist stark und gleichmäßig, also genau das, was gut punktet, aber es ist kein Bart. Ist die Startart eines Flugs **Schlepp** oder **Motorisiert**, beginnt die Erkennung erst mit deinem ersten anhaltenden Kreisen (eine geglättete Drehrate von mindestens 8°/s, gehalten über acht aufeinanderfolgende Punkte). Alles davor gilt als Steigflug beim Start.

Ist die Startart eines Flugs falsch, korrigiere sie mit **Startart ändern** im Aktionsmenü des Flugs. Der Flug wird mit der neuen Einstellung neu analysiert.

---

## Schritt 4: Was bei jedem Bart gemessen wird

Sobald ein Bart behalten wird, vermisst ihn die Analyse. Das sind die Zahlen, die du im Detailbereich des Barts siehst:

- **Steigen.** Höhengewinn, mittleres, maximales und minimales Steigen. Maximum und Minimum werden über 5 Sekunden geglättet, damit ein einzelner verrauschter GPS-Punkt keinen Rekord aufstellen kann; die rohen Spitzenwerte aus einem einzigen Punkt stehen daneben als „Spitze“.
- **Kern.** Für jeden vollständigen Kreis sucht die Analyse die Mitte des Steigens, gewichtet zu den Punkten, an denen du am besten gestiegen bist. Diese Mittelpunkte pro Kreis ergeben zusammen Lage, Stärke und Größe des Kerns.
- **Zentrierzeit.** Zeit vom Beginn des Barts, bis du zum ersten Mal innerhalb von 50 m vom Kern warst und dabei mit mehr als 70 % der Kernstärke gestiegen bist.
- **Zentrierung.** Wie nah du um den Kern gekreist bist. Kreisen im Radius des Kerns selbst (oder enger) ergibt 100 %; jeder zusätzliche Kernradius Abstand kostet 50 %, Kreisen im dreifachen Kernradius ergibt also null. Der Windversatz wird herausgerechnet, indem jeder Kreis mit seinem eigenen lokalen Mittelpunkt verglichen wird.
- **Effizienz.** Gewonnene Höhe geteilt durch die horizontale Entfernung zwischen dem Punkt, an dem der Bart begann, und dem, an dem er endete, begrenzt auf 100 %.
- **Kurvendynamik.** Richtung, Anzahl vollständiger Kreise, mittlere Drehrate, Zeit pro Kreis, Kreisradius sowie eine Schätzung von Querneigung und Fluggeschwindigkeit aus Kreisradius und Kreisdauer.
- **Versatz und Wind.** Versatzstrecke und eine Schätzung von Windgeschwindigkeit und -richtung daraus, wie sich deine Kreise über Grund verschoben haben.

Daraus entstehen der **Qualitätswert** des Barts und seine **Empfehlungen**. Die Formel für die Wertung hat eine eigene Seite: [Der Gesamtwert eines Barts erklärt](/doc/overall-thermal-score).

---

## Häufige Fragen

### Warum ist meine Lieblings-Steigphase nicht in der Liste?

Prüf das hier der Reihe nach:

1. Hast du mindestens **zwei vollständige Kreise** gedreht? Eine Steigphase, die du geradeaus oder mit nur einem Kreis durchflogen hast, zählt nicht.
2. Hat sie mindestens **15 Sekunden** gedauert, nachdem sie auf deine Kreise zugeschnitten wurde?
3. Hast du zwischen deinem ersten und letzten vollständigen Kreis tatsächlich **Höhe gewonnen**?
4. War sie direkt nach einem Schlepp oder Motorsteigflug? Bei einem Flug mit **Schlepp** oder **Motorisiert** zählt nichts vor deinem ersten anhaltenden Kreisen.

### Warum wurde ein Bart in zwei geteilt?

Meistens hat die Prüfung des jüngsten Trends oder der harte Abbruch beim Sinken ausgelöst: Irgendwo in der Mitte hast du eine Minute lang Höhe verloren oder 30 m verloren, während der Wert niedrig war. Aus Sicht des Tracks hast du einen Bart verlassen und einen anderen gefunden.

### Kann ich die Schwellenwerte ändern?

Nein. Frühere Versionen von We-Fly hatten dafür einen Einstellungsbereich; den gibt es nicht mehr. Feste Regeln bedeuten, dass Anzahl der Bärte, Steigwerte und Qualitätswerte fair verglichen werden können, zwischen deinen eigenen Flügen und mit anderen Piloten.

### Ändern diese Regeln meine Flugstatistik?

Sie legen sie fest. Die Anzahl deiner Bärte, die in Bärten gewonnene Höhe, das mittlere Steigen und die Kurbelwerte im Cockpit stammen alle aus diesem Detektor. Weil alle dieselben Regeln bekommen, vergleichst du Gleiches mit Gleichem.

### Spielt das Aufzeichnungsintervall meines Loggers eine Rolle?

Ein wenig. Das gleitende Fenster und der Test auf „vollständige Kreise“ zählen GPS-Punkte. Logger, die jede Sekunde aufzeichnen, liefern das sauberste Ergebnis. Ein Logger, der nur alle paar Sekunden aufzeichnet, sieht weniger Punkte pro Kreis, daher werden kurze oder enge Bärte eher übersehen.

---

## Weiterlesen

- [Erweiterte Thermikanalyse](/doc/advanced-thermal-analysis): ein Rundgang durch den Tab **Thermik**
- [Der Gesamtwert eines Barts erklärt](/doc/overall-thermal-score): wie der Wert jedes Barts zustande kommt
