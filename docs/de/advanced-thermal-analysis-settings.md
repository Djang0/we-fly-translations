---
title: Einstellungen der erweiterten Thermikanalyse
description: Stell die Parameter ein, mit denen deine Bärte erkannt und bewertet werden
category: Thermal Analysis
order: 2
---

*Oder: Wie du dem Algorithmus beibringst, wie ein echter Bart aussieht*

Du hast also deinen Flug hochgeladen, die erweiterte Thermikanalyse geöffnet und starrst jetzt auf den Tab mit den Einstellungen und fragst dich, was all diese Regler und Zahlen eigentlich machen. Gute Nachricht: Du bist hier richtig. Schlechte Nachricht: Gleich wird es nerdig (aber auf die lustige Art, versprochen).

Stell dir diese Einstellungen so vor, als würdest du dem Computer beibringen, was *du* für einen „Bart, der es wert ist, gezählt zu werden“ hältst. Denn mal ehrlich: Diese schwache, zerrissene Blase, die du 45 Sekunden lang bearbeitet hast, weil du tief warst? Die zählt der Algorithmus vielleicht nicht. Aber dieser herrliche 5-m/s-Aufzug, der dich von „oh Mist“ bis „Basis, Baby“ gebracht hat? Der wird auf jeden Fall gezählt.

---

## Die Kurzfassung

**99 % der Piloten sollten einfach die Standardeinstellungen nutzen.** Sie sind auf typische Gleitschirm-Thermik abgestimmt und funktionieren für die meisten Flüge prima. Fass sie nur an, wenn:

1. Du in seltsamen Bedingungen fliegst (superschwache Thermik, heftiger Wind, Mikrosteigen am Gelände)
2. Du ein Daten-Nerd bist, der *genau* verstehen will, wie die Analyse funktioniert
3. Du ein Bier getrunken hast und es lustig fändest zu sehen, was passiert, wenn du alles auf Maximum stellst

Immer noch da? Na gut, dann legen wir los.

---

## Erkennungsschwellen

*„Ab wann wird aus Herumkreisen ‚ich bin in einem Bart‘?“*

### Mindest-Thermikwert (Standard: 0,35)

**Was er macht:** Der Algorithmus kombiniert mehrere Signale (Steigen, Drehrate, GPS-Bewegung) zu einem einzigen „Thermik-Konfidenzwert“ zwischen 0 und 1. Diese Einstellung sagt: „Nenn es erst einen Bart, wenn die Konfidenz 35 % erreicht.“

**In Fliegersprache:** Wie wählerisch bist du dabei, was als Bart zählt?

- **Niedriger (0,2-0,3):** „Ich nehme alles, was nach oben geht.“ Erwischt schwache Blasen, zählt aber vielleicht ein paar Fehlalarme, wenn du nur im Hangaufwind wendest oder am Gelände kratzt.
- **Standard (0,35):** „Zeig mir echte Bärte, keinen Müll.“ Ausgewogen für typisches Streckenfliegen.
- **Höher (0,4-0,5):** „Zähl nur das Gute.“ Verpasst schwache Bärte, hält deine Statistik aber sauber.

**Mal ehrlich:** Wenn du in den Alpen fliegst und oft 0,5-m/s-Bärte am Gelände bearbeitest, senk den Wert. Fliegst du im Sommer im Flachland mit 4-m/s-Kernen, kannst du ihn anheben.

---

### Ausstiegs-Thermikwert (Standard: 0,2)

**Was er macht:** Sobald du „in“ einem Bart bist, muss die Konfidenz unter 20 % fallen, bevor der Algorithmus annimmt, dass du ihn verlassen hast.

**In Fliegersprache:** Wie lange suchst du weiter, bevor du zugibst: „Jep, verloren“?

- **Niedriger (0,1-0,15):** „Ich bin definitiv raus.“ Beendet Bärte schnell. Gut, wenn du saubere, gleichmäßige Thermik fliegst.
- **Standard (0,2):** „Okay, das bringt nichts mehr.“ Toleriert kurzes Saufen oder Herumirren am Rand.
- **Höher (0,25-0,3):** „Vielleicht ist er ja noch irgendwo hier...“ Braucht länger zum Aussteigen. Nützlich bei zerrissener, ruppiger Thermik, in der du ständig rein und raus fliegst.

**Warum niedriger als beim Einstieg:** Hysterese! Aus demselben Grund, aus dem dein Thermostat die Heizung nicht bei 20 °C ein- und bei 19,9 °C wieder ausschaltet. So zählt der Algorithmus nicht 47 einzelne „Bärte“, wenn du eigentlich nur eine zerrissene Blase bearbeitest.

---

### Mindest-Vario (Standard: 0,3 m/s)

**Was es macht:** Ignoriert jedes Kreisen, bei dem dein Vario weniger als diesen Wert anzeigt.

**In Fliegersprache:** „Wenn es nicht mindestens so gut ist, nenne ich es keinen Bart.“

- **Niedriger (0,1-0,2):** Zählt schwaches Steigen, Kratzen, vielleicht sogar dynamischen Hangaufwind, wenn du dabei kreist. Super für Flüge im „Überlebensmodus“.
- **Standard (0,3):** Übliche Schwelle für Streckenflug-Thermik. Wenn es im Schnitt keine 0,3 m/s sind, bleibst du auf Dauer wahrscheinlich nicht oben.
- **Höher (0,5-1,0):** Zählt nur Bärte, in denen du wirklich ordentlich Höhe machst.

**Fun Fact:** Die Standardwerte sind auf Gleitschirme abgestimmt. Fliegst du einen Drachen mit schlechterem Eigensinken, solltest du den Wert vielleicht etwas anheben.

---

### Mindest-Drehrate (Standard: 10 °/s)

**Was sie macht:** Wie schnell du drehen musst, damit der Algorithmus denkt: „Jep, der kreist.“

**In Fliegersprache:** Wie eng sind deine Kreise?

- **Niedriger (5-8 °/s):** Weite, gemütliche Kreise. Gut für Tandem, Flugschüler oder wenn du einen Hochleister fliegst und sanfte Schräglagen magst.
- **Standard (10 °/s):** Normales Kurbeln. Ein voller 360° alle 36 Sekunden.
- **Höher (15-20 °/s):** Enge, aggressive Kreise. Ein 360° alle 18-24 Sekunden. Übersieht dein Kurbeln vielleicht, wenn du weit kreist.

**Mal ehrlich:** Die meisten Piloten kurbeln von Natur aus mit 10-15 °/s. Wenn der Algorithmus offensichtliche Bärte übersieht, kreist du vielleicht weiter als der Durchschnitt. Senk den Wert auf 8. Zählt er zufällige „Bärte“, wenn du im Hangaufwind nur Achter fliegst, heb ihn auf 12-15 an.

---

## Hysterese-Parameter

*„Hör auf, so nervös zu sein, Algorithmus“*

Diese Parameter verhindern, dass der Detektor jedes Mal ein- und ausschaltet, wenn du durch eine Verwirbelung fliegst oder 2 Sekunden im Saufen bist. Stell sie dir als „Bestätigungszeit“ vor.

### Einstiegsdauer (Standard: 5 Sekunden)

**Was sie macht:** Du musst die Thermikbedingungen so viele Sekunden am Stück erfüllen, bevor es offiziell als „Einstieg in den Bart“ zählt.

**In Fliegersprache:** Wie viele Kreise, bevor du dich festlegst: „Jep, das ist ein Bart“?

- **Niedriger (2-3 s):** „Ich bin drin!“ nach einem halben Kreis. Zählt Bärte schnell, erwischt aber vielleicht Fehlalarme.
- **Standard (5 s):** Etwa 1,5 Kreise zur Bestätigung. Gute Balance.
- **Höher (8-10 s):** „Lass mich erst sicher sein, dass das echt ist.“ Braucht 2-3 Kreise zum Zählen. Verpasst kurze Blasen, liefert aber sehr saubere Ergebnisse.

**Wann anpassen:** Niedriger, wenn du in sehr zerrissenen Bedingungen fliegst, in denen die Bärte klein sind und du alles erwischen musst. Höher, wenn falsche Bärte gezählt werden (häufig bei windigen oder turbulenten Bedingungen).

---

### Ausstiegsdauer (Standard: 3 Sekunden)

**Was sie macht:** Du musst die Thermikbedingungen so lange *nicht* erfüllen, bevor es als „Ausstieg aus dem Bart“ zählt.

**In Fliegersprache:** Wie lange du nach dem Ende des Steigens weitersuchst, bevor du abfliegst.

- **Niedriger (1-2 s):** „Nö, ich bin raus.“ Steigt schnell aus. Gut bei sauberer, gleichmäßiger Thermik.
- **Standard (3 s):** „Moment, vielleicht ist es hier nur schwach...“ Noch ein Kreis zum Prüfen.
- **Höher (5-8 s):** „Den bearbeite ich noch ein bisschen...“ Mehrere Kreise, bevor du aufgibst. Gut bei komplexen Bärten mit mehreren Kernen.

**Profi-Tipp:** In kräftiger, knackiger Sommerthermik kannst du den Wert senken. Bei schwachem, zerrissenem Steigen im Frühjahr oder Herbst heb ihn an.

---

### Mindestdauer eines Barts (Standard: 15 Sekunden)

**Was sie macht:** Kreist du kürzer als diesen Wert, zählt es in der Statistik nicht als „Bart“.

**In Fliegersprache:** „War das ein Bart oder nur eine Bodenwelle in der Luft?“

- **Niedriger (8-10 s):** Zählt kurze Blasen. Gut, wenn du absichtlich von Blase zu Blase springst.
- **Standard (15 s):** Mindestens etwa 4 Kreise. Filtert Momente wie „zwei Kreise gedreht und weg“ heraus.
- **Höher (20-30 s):** Zählt nur Bärte, in denen du wirklich geblieben bist und gearbeitet hast. Sauberere Statistik, verpasst aber vielleicht echte kurze Steigphasen.

**Wann nutzen:** Fliegst du Wettkampf und nimmst jeden kleinen Fetzen mit, senk den Wert. Fliegst du entspannt Strecke und willst nur „echte“ Bärte in deiner Statistik, heb ihn an.

---

## Erkennung des Kreisens

*„Wie man Kurbeln von bloßem Wenden unterscheidet“*

### Mindest-Kreisfenster (Standard: 10 Sekunden)

**Was es macht:** Der Algorithmus betrachtet jeweils so viele Sekunden Flug, um zu berechnen, ob du kreist.

**In Fliegersprache:** Wie viel Flugverlauf für die Gleichmäßigkeit der Kurven ausgewertet wird.

- **Niedriger (5-8 s):** Schnelle Reaktion. Erkennt Bärte schnell, reagiert aber empfindlicher auf Rauschen.
- **Standard (10 s):** Daten von etwa 2,5 Kreisen. Gute Balance zwischen Geschwindigkeit und Genauigkeit.
- **Höher (15-20 s):** Langsamere Reaktion, aber sehr genau. Kann den Einstieg in den Bart etwas später erkennen.

**Mal ehrlich:** Die meisten Piloten müssen das nie anfassen. Es ist ein technischer Parameter, der die Glätte des Algorithmus beeinflusst, nicht wirklich dein Flugverhalten.

---

### Mindestanzahl Kreise (Standard: 1,0)

**Was sie macht:** Du musst mindestens so viele volle 360°-Kreise fliegen, damit es als „Kreisen in einem Bart“ zählt.

**In Fliegersprache:** Wie viele Kreise, bis es offiziell ein Bart ist?

- **Niedriger (0,5-0,8):** Ein halber Kreis reicht. Erwischt sehr kurze Thermikkontakte.
- **Standard (1,0):** Mindestens ein voller 360°. Filtert „zweimal gewendet und weg“ heraus.
- **Höher (2-3):** Mehrere volle Kreise nötig. Sehr konservativ, verpasst schnelle Steigphasen.

**Wann anpassen:** Kombiniere es mit der Mindestdauer eines Barts. Willst du alles zählen, stell beide niedrig. Willst du eine saubere Statistik, stell beide hoch.

---

### Maximaler Kernradius (Standard: 80 Meter)

**Was er macht:** Bei der Berechnung der „Zentrierqualität“ misst der Algorithmus, wie weit du vom Kern abdriftest. Dieser Wert legt den größten Radius fest, den er noch für vernünftig hält.

**In Fliegersprache:** Mit wie großen Kreisen rechnen wir?

- **Niedriger (50-60 m):** Enge Kerne. Gut für den Sommer mit Hammerbärten. Bestraft weites Kreisen.
- **Standard (80 m):** Üblich beim Gleitschirmfliegen. Ein Radius von ~50-80 m ist typisch.
- **Höher (100-120 m):** Große, breite Bärte. Flachland, schwache Bedingungen oder wenn du weite Kreise fliegst.

**Fun Fact:** Das beeinflusst nicht, *was* als Bart gezählt wird, nur die Qualitätsbewertung. Ein Bart ist ein Bart. Es ändert nur, wie „gut“ der Algorithmus dein Zentrieren findet.

---

## Qualitätskennzahlen

*„Wie gut war der Bart denn nun wirklich?“*

### Idealer Versatzquotient (Standard: 0,3)

**Was er macht:** Verhältnis von Versatzstrecke zu Höhengewinn. Standard 0,3 heißt: Idealerweise versetzt du 30 m seitlich pro 100 m Steigen.

**In Fliegersprache:** Was gilt als „gut zentriert“ und was als „aus dem Kern gedriftet“?

- **Niedriger (0,1-0,2):** Sehr streng. „Du solltest kaum versetzen.“ Gut bei ruhigen Bedingungen und kräftiger Thermik.
- **Standard (0,3):** Realistisch für durchschnittliche Bedingungen. Etwas Versatz ist normal.
- **Höher (0,4-0,6):** Nachsichtig. „Versetzen ist okay, ich steige ja trotzdem.“ Gut für windige Tage oder schwache, versetzte Bärte.

**Warum das wichtig ist:** Es beeinflusst deine Qualitätsbewertungen der Bärte und die Empfehlungen. Fliegst du bei starkem Wind und versetzt beim Steigen ständig 50 m, heb den Wert an, damit du nicht bestraft wirst.

---

### Zentrierfenster (Standard: 20 Sekunden)

**Was es macht:** Der Algorithmus prüft deine ersten X Sekunden im Bart, um zu sehen, wie schnell du den Kern gefunden hast.

**In Fliegersprache:** „Wie schnell hast du das beste Steigen gefunden?“

- **Niedriger (10-15 s):** „Hast du ihn sofort getroffen?“ Sehr streng beim anfänglichen Zentrieren.
- **Standard (20 s):** Etwa 5-6 Kreise, um den Kern zu finden. Realistisch für die meisten Piloten.
- **Höher (30-40 s):** „Lass dir Zeit, wir tun uns alle mal schwer.“ Nachsichtiger, wenn du anfangs etwas herumirrst.

**Mal ehrlich:** Das beeinflusst die Rückmeldungen „Super in den Kern“ und „Langsam in den Kern“. Bekommst du oft „Langsam in den Kern“, hast aber das Gefühl, dass du *sehr wohl* gut zentrierst, ist dein Flugstil in den ersten Kreisen vielleicht einfach erkundender. Heb den Wert an.

---

## Praxisfälle: Wann du die Einstellungen anpassen solltest

### „Der Algorithmus zählt meine schwachen Bärte nicht“

Du fliegst in grenzwertigen Bedingungen und bearbeitest 0,3-0,8 m/s Steigen, aber die Analyse zeigt keine Bärte.

**Lösung:**
- Senk das **Mindest-Vario** auf 0,2
- Senk den **Mindest-Thermikwert** auf 0,25
- Senk die **Mindestdauer eines Barts** auf 10 s

---

### „Er zählt zufällige ‚Bärte‘, die gar keine waren“

Du siehst Bärte im Gleitflug oder an Stellen, wo du nur am Gelände gewendet hast.

**Lösung:**
- Heb den **Mindest-Thermikwert** auf 0,4 an
- Heb die **Mindest-Drehrate** auf 12-15 °/s an
- Heb die **Mindestdauer eines Barts** auf 20 s an

---

### „Ich bekomme ‚Langsam in den Kern‘, aber ich zentriere gut!“

Der Algorithmus meint, dass du zu stark versetzt oder zu lange brauchst, um den Kern zu finden.

**Lösung:**
- Heb den **idealen Versatzquotienten** auf 0,4-0,5 an (vor allem an windigen Tagen)
- Heb das **Zentrierfenster** auf 30 s an (gibt dir mehr Zeit zum Erkunden)

---

### „In der Analyse fangen Bärte ständig an und hören wieder auf“

Du bearbeitest einen einzigen Bart, aber er wird als 3 getrennte Bärte gezählt.

**Lösung:**
- Heb die **Ausstiegsdauer** auf 5-8 s an (dauert länger bis zum Ausstieg)
- Senk den **Ausstiegs-Thermikwert** auf 0,15 (leichter, „drin“ zu bleiben)

---

### „Ich fliege Tandem und meine Bärte werden nicht erkannt“

Tandem = weitere Kreise, langsamere Kurven, vorsichtigeres Fliegen.

**Lösung:**
- Senk die **Mindest-Drehrate** auf 6-8 °/s
- Heb den **maximalen Kernradius** auf 100 m an
- Heb das **Zentrierfenster** auf 30 s an

---

## Die Anleitung „Sag mir einfach, was ich tun soll“

### Die meisten Piloten (Strecke, Freizeit)
**Nimm die Standardwerte.** Sie sind auf dich abgestimmt. Ehrlich.

### Wettkampfpiloten
- Senk die **Mindestdauer eines Barts** auf 10 s (jedes Steigen zählt)
- Senk die **Einstiegsdauer** auf 3 s (schnelle Erkennung)
- Heb das **Mindest-Vario** auf 0,5 an (nur gute Bärte zählen)

### Küste und Gelände
- Senk den **Mindest-Thermikwert** auf 0,25 (schwaches Steigen erwischen)
- Heb die **Ausstiegsdauer** auf 5 s an (zerrissene Bärte)
- Heb den **idealen Versatzquotienten** auf 0,5 an (Windversatz)

### Flachland (kräftige Sommerthermik)
- Heb das **Mindest-Vario** auf 0,5 m/s an (schwaches Steigen ignorieren)
- Senk den **maximalen Kernradius** auf 60 m (enge Kerne)
- Heb die **Mindest-Drehrate** auf 12 °/s an (engere Kreise)

### Alpen (schwache, zerrissene Thermik)
- Senk das **Mindest-Vario** auf 0,2 m/s
- Senk den **Mindest-Thermikwert** auf 0,25
- Heb die **Ausstiegsdauer** auf 8 s an (nicht zu früh aussteigen)

---

## FAQ: Fragen, die wir am Landeplatz gehört haben

### „Warum taucht mein Lieblingsbart nicht auf?“

Prüf diese Punkte der Reihe nach:
1. War er mindestens 15 s lang? (Mindestdauer eines Barts)
2. War das Steigen mindestens 0,3 m/s? (Mindest-Vario)
3. Bist du wirklich gekreist? (Mindest-Drehrate)
4. Hast du mindestens einen vollen 360° geflogen? (Mindestanzahl Kreise)

### „Kann ich etwas kaputt machen, wenn ich daran herumspiele?“

Nö! Schlimmstenfalls bekommst du seltsame Ergebnisse. Klick einfach auf „Auf Standard zurücksetzen“, und alles ist wieder normal.

### „Was passiert, wenn ich alles auf Maximum stelle?“

Dann wird wahrscheinlich kein einziger Bart erkannt. Der Algorithmus ruft „NICHTS IST GUT GENUG“ und lehnt alles ab. Wie bei Ansprüchen an ein Date, die so hoch sind, dass du am Ende allein dastehst. (Haben wir getestet. Für die Wissenschaft.)

### „Was passiert, wenn ich alles auf Minimum stelle?“

Alles wird zum Bart. Dein Groundhandling? Bart. Dein Ridge-Run am Hang? 47 Bärte. Als du mal mit der Flächenspitze den Boden gestreift hast? Überraschend guter Bart. Auch das haben wir getestet. Es war das reinste Chaos.

### „Beeinflussen diese Einstellungen meine Flugstatistik?“

Ja! Wenn sich ändert, was als „Bart“ zählt, ändern sich deine Anzahl der Bärte, der gesamte Höhengewinn in der Thermik, der mittlere Steigwert usw. Wenn du also Statistiken mit einem Freund vergleichst, achte darauf, dass ihr dieselben Einstellungen nutzt.

---

## Erweiterte Notizen für Nerds

(Kannst du gern überspringen, wenn du einfach nur fliegen willst)

Die Thermikerkennung nutzt einen **zusammengesetzten Wert aus mehreren Signalen**, der Folgendes kombiniert:
- Variowerte (steigst du?)
- Drehrate (kreist du?)
- Geometrie des GPS-Tracks (passt deine Flugbahn zum Kurbeln?)
- Kursänderungen (fliegst du volle Kreise?)

Jedes Signal wird auf 0-1 normiert, dann gewichtet und kombiniert. Der **Mindest-Thermikwert** ist die Schwelle für diesen kombinierten Wert.

Die **Hysterese-Parameter** (Einstiegs- und Ausstiegsdauer) bilden einen Zustandsautomaten mit Bestätigungsverzögerung, der Oszillieren verhindert. Das ist dasselbe Prinzip wie bei Thermostaten, Bremslichtern und im Grunde jedem System, das schnelles Ein- und Ausschalten vermeiden muss.

Die **Qualitätskennzahlen** nutzen Kreisstatistik, um die Versatzrichtung, die Position des Kerns und die Effizienz des Zentrierens zu berechnen. Dabei geht es um Skalarprodukte, Kursdifferenzen und etwas Koordinatengeometrie, auf die dein Mathelehrer stolz wäre (oder die ihn traumatisiert hätte).

## Zum Schluss

Am Ende des Tages sind diese Einstellungen nur Stellschrauben dafür, was der Algorithmus als „Bart“ ansieht. Das *echte* Lernen passiert, wenn du:

1. Den Flug fliegst
2. Dir die Analyse ansiehst
3. Sie mit dem vergleichst, was du in der Luft *gespürt* hast
4. Bei Bedarf die Einstellungen anpasst
5. Aus den Mustern lernst

Es geht nicht darum, das System für eine perfekte Statistik auszutricksen. Es geht darum, dein Fliegen besser zu verstehen. Hast du wirklich gut zentriert oder nur Glück mit einem kräftigen Kern gehabt? Hast du Bärte zu früh verlassen, oder sind sie wirklich gestorben?

Der Algorithmus ist ein Werkzeug, kein Richter. Nutze ihn, um besser zu werden, nicht um dich wegen Zahlen zu stressen.

Und jetzt raus mit dir, such dir ein paar Bärte. Die echten. In der Luft. Wo sie hingehören.

*Blauen Himmel und ruhige Luft,*
