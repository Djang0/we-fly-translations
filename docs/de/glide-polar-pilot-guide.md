---
title: Polare im Gleitflug, der Pilotenleitfaden
description: So liest du das Leistungsdiagramm für den Gleitflug (und was es dir nicht sagen kann)
category: Your Flights
order: 5
---

*Oder: Wie du auf eine geschwungene blaue Linie schaust und herausfindest, ob dein Schirm oder die Atmosphäre die Hauptarbeit gemacht hat.*

## Was zum Teufel ist das überhaupt für ein Diagramm?

Du hast den Tab **Vector Vario** geöffnet, bist an den Zeitreihen vorbeigescrollt und starrst jetzt auf einen launischen blauen Fleck, durch den ein paar Linien wandern. Willkommen beim Diagramm **Leistung im Gleitflug**: Damit versucht We-Fly dir zu zeigen, was dein Schirm in den Gleitphasen deines Flugs bei jeder Geschwindigkeit tatsächlich gemacht hat.

**Die Kurzfassung:** Es ist ein Plot deines **Varios (Sinkgeschwindigkeit) über deiner wahren Fahrt (TAS)**, beschränkt auf die Momente, in denen du wirklich im Gleitflug warst. Die Form der Linien ist das Nächste, was wir dir an „der Polare deines Schirms an genau diesem Tag, in genau dieser Luft, mit dir im Gurtzeug“ geben können.

**Die ehrliche Fassung:** Es ist *nicht* die Herstellerpolare deines Schirms. Das kann es gar nicht sein. Wir kennen den Widerstand deines Gurtzeugs nicht, wir kennen dein Startgewicht nicht aufs Gramm genau, und wir wissen ganz sicher nicht, was die Atmosphäre zwischen dir und dem Boden getrieben hat. Was wir *wissen*, ist, was dein Logger aufgezeichnet hat, und genau das zeigen wir, ehrlich, mit aller Streuung und Unsicherheit.

**Was Piloten wirklich wissen wollen:**
- „Was ist meine beste Gleitzahl mit diesem Schirm?“
- „Bei welcher Geschwindigkeit sinke ich am wenigsten?“
- „Wie viel von meinem ‚Gleitflug‘ war eigentlich geschenktes Steigen aus der Atmosphäre?“
- „Hält mein Schirm, was das Datenblatt verspricht, oder hat die Marketingabteilung übertrieben?“

Die ersten drei Fragen kann das Diagramm ziemlich gut beantworten. Für die vierte brauchst du noch ein paar Flüge und eine gesunde Portion Skepsis (dazu kommen wir noch).

---

## Warum sollte mich das interessieren?

Wenn du Streckenflug machst, ist die Gleitleistung *das* Ding, das aus guten Thermiktagen lange Flüge macht. Weniger sinken, weiter gleiten, vor deinen Kumpels an der nächsten Wolke sein. Das Diagramm gibt dir:

1. **Einen Realitätscheck für deinen Schirm**: Vergleiche, was du beobachtet hast, mit der veröffentlichten Polare. Ist die Lücke riesig, stimmt etwas nicht (Schirm, Gewicht, Gurtzeug oder Atmosphäre).
2. **Einen Hinweis zur Sollfahrt**: Sieh, wo die gestrichelte Linie ihren höchsten Punkt hat (geringstes Sinken) und wo sie die steilste Gleitzahl-Linie berührt (beste Gleitzahl).
3. **Eine ehrliche Lesart der Atmosphäre**: Die Lücke zwischen „was ich gemacht habe“ und „was mein Schirm allein machen würde“ ist im Grunde ein Thermometer dafür, wie tragend die Luft war.
4. **Ein Werkzeug fürs Debriefing**: Hattest du nach einem Flug das Gefühl, ständig abzusaufen? Das Diagramm sagt dir, ob der Schirm wirklich hart gearbeitet hat oder ob dich einfach die Luft bestraft hat.

---

## Anatomie des Diagramms

Bevor wir etwas hineindeuten, benennen wir die Teile. Stell dir ein Diagramm mit TAS auf der unteren Achse vor (24-53 km/h bei einem typischen Streckenflug) und dem Vario an der Seite (oben etwa +0,5 m/s, unten oft bis -4 m/s).

### Die X-Achse: wahre Fahrt (km/h)
TAS = wie schnell du dich durch die Luftmasse bewegst (nicht über Grund, das ist die GPS-Geschwindigkeit). Deine Sensoren messen sie direkt über ein Staurohr am Vector Vario.

**Warum sie dort aufhört, wo sie aufhört:** Das Diagramm zeigt nur TAS-Klassen mit **mindestens 20 Messwerten aus Gleitphasen**. Wenn du nur 5 Sekunden voll beschleunigt geflogen bist, fällt diese Klasse weg. Das Diagramm endet absichtlich dort, wo die Daten enden: keine Extrapolation, keine erfundenen Kurven über leeren Bereichen.

### Die Y-Achse: Vario (m/s)
Null ist Horizontalflug. Negativ ist Sinken (da verbringst du die meisten Gleitflüge). Positiv ist Steigen, und ja, das passiert auch in „Gleitphasen“, weil Thermik hinterhältig ist.

### Das blau schattierte Band: 10. bis 90. Perzentil
In jeder TAS-Klasse von 1 km/h ist das die Streuung der Variowerte, die du aufgezeichnet hast.

- **Breites Band** = die Atmosphäre war völlig durcheinander (bei gleicher TAS mal Saufen, mal Steigen)
- **Schmales Band** = gleichmäßige Bedingungen, eine verlässlichere Aussage über deinen Schirm

### Die durchgezogene blaue Linie: Median-Vario
Die Mitte der Daten bei jeder TAS. Das ist **was du im Schnitt tatsächlich gemacht hast**, wenn du mit dieser Geschwindigkeit geglitten bist.

**Hinterhältige Wahrheit:** An einem guten Streckentag sieht diese Linie verdächtig schmeichelhaft aus, vielleicht -1 m/s bei 40 km/h, was eine Gleitzahl von etwa 11:1 ergibt. Das ist nicht dein Schirm. Das ist dein Schirm **plus all das geschenkte Steigen, durch das du geflogen bist**. Gleich mehr dazu.

### Die gestrichelte dunkelblaue Linie: Median in ruhiger Luft
Das ist das Median-Vario im **Quartil mit dem niedrigsten Netto** jeder TAS-Klasse: die 25 % der Messwerte, bei denen die Atmosphäre am stärksten gesunken ist (oder am wenigsten gestiegen). Das ist unsere beste empirische Schätzung dafür, „was der Schirm gemacht hat, als die Luft dir nicht geholfen hat“.

**Gleicher Flug, ganz andere Geschichte:** Bei 40 km/h liegt diese Linie vielleicht bei -3 m/s, was eine Gleitzahl von eher 3,7:1 ergibt. Steil. Ehrlich. Näher an dem, was ein Hersteller ins Datenblatt schreiben würde.

### Die Streuzellen (blass, hinter allem)
Jede Zelle (TAS, Vario) ist nach **mittlerem Netto** eingefärbt (Vario minus angenommenes Eigensinken des Schirms):

- **Blaue Zellen**: Du bist durch sinkende Luft geflogen
- **Pfirsich-/orangefarbene Zellen**: Du bist durch steigende Luft geflogen
- **Blasengröße**: wie viele Messwerte in dieser Zelle gelandet sind

Im Grunde eine Heatmap dafür, wie dich die Atmosphäre bei jeder Geschwindigkeit behandelt hat. Hübsch und aufschlussreich.

### Die Gleitzahl-Linien (diagonale graue gestrichelte Strahlen)
Das sind Strahlen vom Ursprung (0,0) mit konstanter Gleitzahl, eingezeichnet bei **3:1, 5:1, 7:1, 9:1, 12:1, 15:1, 20:1** (nur die, die in den sichtbaren Bereich des Diagramms passen).

Weil das Diagramm bei TAS=24 beginnt (nicht bei 0), liegt der Ursprung außerhalb des Bildes unten links, und die Linien erscheinen als gestrichelte Diagonalen, die von unten links nach oben rechts ansteigen.

**So liest du sie:**
- Wo die **gestrichelte Linie für ruhige Luft eine Gleitzahl-Linie schneidet** → das ist die TAS, bei der der Schirm diese Gleitzahl in nicht tragender Luft erreicht.
- Wo eine Gleitzahl-Linie die gestrichelte Polare **tangiert** (berührt, ohne sie zu schneiden) → das ist deine **beste Gleitzahl auf diesem Flug**.

Kurzes Beispiel: Schneidet die gestrichelte Polare den 5:1-Strahl bei TAS=42 km/h, dann wärst du bei 42 km/h in kühler Luft 5 km pro 1 km Höhenverlust geglitten. Streift der 9:1-Strahl die gestrichelte Kurve gerade so bei TAS=32 km/h, ist das dein Tangentenpunkt, deine beste Gleitzahl des Tages, bei dieser Geschwindigkeit.

### Die Referenzlinie Y=0 (gestrichelt, horizontal)
Die Grenze zwischen Sinken (darunter) und Steigen (darüber). Oberhalb dieser Linie hat die Atmosphäre mehr Steigen beigesteuert, als der Schirm an Sinken erzeugt hat. Praktisch, um zu erkennen, wie viel deiner „Gleitflüge“ eigentlich thermisch angehaucht waren.

### Die zwei Kennzahl-Karten unter dem Diagramm

**Bestes beobachtetes Sinken (Median):** Die TAS-Klasse, in der das Median-Vario am wenigsten negativ war, also wo du im Schnitt am langsamsten gesunken bist. Mit Anzahl der Messwerte, der 10-90-Streuung und dem Wert für ruhige Luft bei derselben TAS.

**Beste beobachtete Gleitzahl (Median):** Die TAS-Klasse mit der höchsten Gleitzahl (TAS in m/s geteilt durch den Betrag des Median-Varios). Dieselben Zusatzwerte.

---

## Wie du es wirklich liest

Jetzt wird es spannend. Es gibt zwei parallele Lesarten, beide gültig, und beide erzählen dir etwas anderes.

### Lesart 1: „Was habe ich erreicht?“

Schau auf die **durchgezogene blaue Linie**. Das ist deine echte Leistung, der Schirm plus alles, was dir die Atmosphäre geschenkt hat. Auf einem typischen Streckenflug:

- Median-Vario bei 40 km/h: vielleicht **-1 m/s**
- Daraus folgende Gleitzahl: ~**11:1**

Sieht super aus, oder? Das liegt daran, dass viele deiner „Gleitflug“-Messwerte in steigender Luft entstanden sind (kurzes Thermikzupfen im Gleitflug, Hangaufwind, Konvergenzzonen, diese mysteriösen 0,5 m/s Steigen, die 90 Sekunden hielten und dir den Hintern gerettet haben). Das ist keine Lüge. Es zeigt nur, was passiert ist. Du bist an dem Tag wirklich im Schnitt 11:1 geglitten, weil die Luft geholfen hat.

Auf diese Linie schaust du, wenn du fragst: **„Wie schlage ich mich auf diesem Flug?“**

### Lesart 2: „Was macht mein Schirm allein?“

Schau auf die **gestrichelte Linie**. Gleicher Flug, gleiche Daten, aber nur die Messwerte mit dem niedrigsten Netto, also die, bei denen die Atmosphäre *am wenigsten* großzügig war. Auf demselben Streckenflug:

- Median-Vario in ruhiger Luft bei 40 km/h: vielleicht **-3 m/s**
- Daraus folgende Gleitzahl: ~**3,7:1**

Das ist deutlich steiler. Näher an der veröffentlichten Polare eines Herstellers (wenn auch nicht identisch, siehe den Abschnitt zu den Grenzen). Auf diese Linie schaust du, wenn du fragst: **„Wie gut ist mein Schirm wirklich?“**

### Lesart 3 (die Bonusrunde): „Wie tragend war es?“

Nimm die Lücke zwischen der durchgezogenen und der gestrichelten Linie bei einer beliebigen TAS. Diese Lücke ist ungefähr **wie viel geschenktes Steigen dir die Atmosphäre im Schnitt** bei dieser Geschwindigkeit gegeben hat.

- **Große Lücke** (die durchgezogene Linie liegt weit über der gestrichelten): Du bist in den meisten deiner „Gleitflüge“ auf Steigen gesurft. Im Streckenflug ist das oft etwas *Gutes*: effiziente Wolkenstraßen, tragende Linien, Konvergenzen abgeflogen.
- **Kleine Lücke** (die Linien liegen eng beieinander): Du bist wirklich nur durch neutrale oder sinkende Luft geglitten. Ehrlich, vielleicht zäh, aber wenigstens weißt du es.

Das ist die Lesart als „Thermometer der Atmosphäre“. Sie sagt dir weniger über deinen Schirm und mehr über die Bedingungen, in denen du geflogen bist.

---

## Häufige Fragen von Piloten

### „Wo ist mein geringstes Sinken?“

Schau auf die gestrichelte Linie und suche ihren höchsten Punkt (am wenigsten negatives Vario). Die Kennzahl-Karte unter dem Diagramm nennt ihn ausdrücklich, mit TAS und Anzahl der Messwerte.

**Achtung:** Beginnt das Diagramm bei 24 km/h, die Geschwindigkeit des geringsten Sinkens deines Schirms liegt aber bei 22 km/h, dann ist das angezeigte geringste Sinken einfach *die langsamste Geschwindigkeit, die du tatsächlich geflogen bist*, nicht der echte Bestwert des Schirms. Das Diagramm kann nicht lesen, was du nicht aufgezeichnet hast.

### „Wo ist meine beste Gleitzahl?“

Suche die Gleitzahl-Linie, die die gestrichelte Linie **tangiert**, also den Strahl mit der höchsten Gleitzahl, der die Kurve gerade noch berührt. Die TAS am Tangentenpunkt ist deine Geschwindigkeit des besten Gleitens in ruhiger Luft.

Die beste Gleitzahl findest du meist irgendwo zwischen der TAS des geringsten Sinkens und der Trimmgeschwindigkeit. Schneller als beim geringsten Sinken (weil schneller = mehr horizontale Strecke pro Sekunde), langsamer als Trimm (weil du bei Trimm schneller sinkst, als es für die beste Gleitzahl ideal wäre).

### „Ist das die veröffentlichte Polare meines Schirms?“

**Nein, und das wollen wir ganz klar sagen.** Es ist die empirische Leistung von *dir + deinem Schirm + deinem Gurtzeug + dieser Atmosphäre, auf diesem Flug*. Die gestrichelte Linie ist die beste empirische Annäherung, die wir berechnen können, aber nicht dasselbe. Für den Vergleich mit dem Datenblatt suchst du die Polare deines Schirms separat heraus (Herstellerseite, DHV-Testbericht, Threads in Gleitschirmforen, siehe den Abschnitt zu den Grenzen).

### „Warum endet mein Diagramm bei 53 km/h, obwohl ich weiß, dass ich bis 60 gedrückt habe?“

Weil du dort wahrscheinlich nur ein paar Sekunden verbracht hast. Klassen mit weniger als 20 Messwerten aus Gleitphasen fallen weg, um statistischen Müll zu vermeiden. Soll das Diagramm weiter reichen, flieg länger schnell (oder mehr Flüge, auch wenn dieses Diagramm im Moment nur einen einzelnen Flug zeigt).

### „Warum fehlt die gestrichelte Linie in manchen Klassen?“

Die Schätzung für ruhige Luft braucht **mindestens 4 Messwerte mit Netto** in einer Klasse. Dünn besetzte Klassen überspringen sie. Achte darauf, wie die gestrichelte Linie an den Rändern des TAS-Bereichs verschwindet.

---

## Die ehrlichen Grenzen (lies das zweimal)

Hier versprechen wir nicht zu viel. Das Diagramm ist nützlich. Es steckt aber auch voller subtiler Fallen.

### 1. Wir haben die veröffentlichte Polare deines Schirms nicht

We-Fly speichert keine Herstellerpolaren pro Schirm. Wir kennen weder die Streckung deines Schirms so, wie der Hersteller sie misst, noch die Widerstandsklasse deines Gurtzeugs, dein genaues Startgewicht oder die Messungen des zertifizierten Testpiloten. Deshalb **können wir keine „ideale“ Referenzkurve** zum Vergleich zeichnen.

Um deinen Schirm mit dem Datenblatt zu vergleichen, musst du die Polare separat nachschlagen. Die meisten Hersteller veröffentlichen eine Polare (oder etwas Ähnliches) in ihren technischen Unterlagen; DHV-Testberichte enthalten sie; Forenthreads gehen manchmal richtig in die Tiefe. Die gestrichelte Linie im Diagramm ist deine **flugbasierte Schätzung**, nicht die Wahrheit des Herstellers.

### 2. Verzerrung durch Steigen im Gleitflug

In Gleitphasen fliegen Piloten ständig durch steigende Luft: kurzes Thermikzupfen im Gleitflug, Hangaufwind an der Luvseite eines Rückens, Konvergenzlinien, ab und zu eine glückliche Wolkenstraße. Diese Messwerte haben *ein höheres Vario, als der Schirm allein erzeugen würde*.

Die **Median-Linie** wird dadurch schlicht aufgebläht. Die **gestrichelte Linie für ruhige Luft** versucht das auszugleichen, indem sie nur die Messwerte mit dem niedrigsten Netto nimmt, aber perfekt ist das nicht: Selbst das „kühle“ Quartil kann noch schwaches Steigen enthalten, das du nicht sehen konntest.

**Fazit:** Selbst die gestrichelte Linie ist im Vergleich zur echten Leistung in ruhiger Luft wahrscheinlich noch etwas geschönt.

### 3. Netto ist keine magische Grundwahrheit

Das Vector Vario berechnet Netto als `vario - configured_wing_polar(TAS)`. Die Netto-Werte, mit denen das „Quartil mit dem niedrigsten Netto“ ausgewählt wird, hängen also selbst von **der Polare ab, die in deinem VV eingestellt war**.

Liegt diese eingestellte Polare weit daneben (falscher Schirm in den Einstellungen, falsches Gewicht, Werkseinstellungen, die du nie geändert hast), ist die Auswahl für ruhige Luft verzerrt. Unser „Näherungswert für ruhige Luft“ ist eine *bessere* Schätzung der Polare als der rohe Median, aber er ist **keine unabhängige Messung**. Er hängt von der Polare ab, die bereits in deinem Vario geladen ist.

Auf gut Deutsch: Das Diagramm ist in sich stimmig, aber nicht unabhängig kalibriert. Müll rein, etwas besserer, aber immer noch nicht perfekter Müll raus.

### 4. Die TAS des geringsten Sinkens kann ein Artefakt sein

Die Kennzahl-Karte „Bestes beobachtetes Sinken“ zeigt einfach die TAS-Klasse mit dem am wenigsten negativen Median-Vario. **Bist du nie langsam genug geflogen**, um die echte Geschwindigkeit des geringsten Sinkens deines Schirms zu erreichen, ist der angezeigte Wert nur die langsamste TAS, die du tatsächlich geflogen bist.

Beispiel: Das echte geringste Sinken des Schirms liegt bei 22 km/h, aber dein langsamster anhaltender Gleitflug auf diesem Flug lag bei 24 km/h. Das Diagramm zeigt 24 km/h als „bestes beobachtetes Sinken“, obwohl der Schirm langsamer besser gewesen wäre. Das Diagramm **extrapoliert nicht** unter deinen langsamsten Gleitflug. Das ist Absicht: Lieber zeigen wir zu wenig, als etwas zu erfinden.

### 5. Das Diagramm endet, wo die Daten enden

TAS-Klassen mit weniger als 20 Messwerten aus Gleitphasen fallen weg. Ein kurzer Stoß von 10 Sekunden mit vollem Beschleuniger liefert nicht genug Messwerte für ein Perzentil, also reicht das Diagramm einfach nicht dorthin.

**Warum das ein Feature ist und kein Bug:** Wir wollen keine Kurve über Geschwindigkeiten zeichnen, die du kaum geflogen bist. Das sichtbare Ende des Diagramms ist *buchstäblich der Bereich, für den wir statistisch aussagekräftige Daten haben*. Willst du ein reichhaltigeres Diagramm, flieg länger im Geschwindigkeitsbereich, der dich interessiert.

### 6. Die Erkennung der Gleitphasen hat unscharfe Ränder

Die „Gleitphase“ kommt aus der Phasenanalyse von We-Fly, die Kursstabilität, geringe Vario-Ausschläge und ein paar weitere Heuristiken nutzt. Meistens funktioniert das gut, aber Grenzfälle schleichen sich ein:

- Ein Pilot, der zwischen zwei Thermiken lange S-Kurven zum Suchen fliegt, kann als „Gleitflug“ eingestuft werden, obwohl er streng genommen am Kurbeln war.
- Ein schwacher, versetzter Bart, in dem du kaum kreist, kann als Gleitflug markiert werden.
- Die Übergangssekunden am Anfang und Ende eines Gleitflugs können dabei sein oder auch nicht.

Diese Grenzfälle verzerren das Diagramm leicht. Nicht stark, aber sie sind da.

### 7. Ein Flug ≠ dein Schirm

Dieses Diagramm zeigt **einen bestimmten Flug**. Dein Gewicht an dem Tag, dein Gurtzeug-Setup, dein Flugstil (aktiv oder passiv), die Luftmasse, die Konvektionslage. Alles spielt mit hinein. Um deinen Schirm wirklich zu charakterisieren, bräuchtest du viele zusammengefasste Flüge.

We-Fly fasst hier (noch) keine Flüge zusammen. Behandle das Diagramm also als **einzelne Beobachtung**, nicht als Urteil über den Schirm.

---

## Also… taugt mein Schirm was?

Das ist die Frage, die eigentlich alle beantwortet haben wollen. Hier ist der ehrliche Rahmen.

### Schritt 1: Schau dir die gestrichelte Linie auf mehreren Flügen an

Ein Flug ist Rauschen. Drei Flüge mit ähnlicher Flächenbelastung (gleiches Gewicht, gleiches Gurtzeug, gleicher Schirm) fangen an, ein Signal zu sein. Liegt die gestrichelte Linie bei gleicher TAS durchweg 1-1,5 m/s unter der veröffentlichten Polare des Herstellers, ist das eine echte Leistungslücke, der es sich nachzugehen lohnt.

### Schritt 2: Vergleiche mit dem Datenblatt

Hol dir die veröffentlichte Polare deines Schirms. Hersteller geben meist an:
- Geringstes Sinken (m/s) bei einer bestimmten TAS (km/h)
- Trimmgeschwindigkeit und Sinkgeschwindigkeit bei Trimm
- Manchmal eine Skizze der ganzen Polare

Trag diese Punkte gedanklich ins Diagramm ein. Ist deine gestrichelte Linie deutlich steiler als das Datenblatt, kommen als Ursachen in Frage:
- Pilotengewicht zu hoch oder zu niedrig (Flächenbelastung außerhalb des Bereichs)
- Widerstand des Gurtzeugs (ein Liegegurtzeug mit viel Widerstand gegenüber dem schlanken Wettkampfgurtzeug des Testpiloten)
- Leinen, die einen Check brauchen (Porosität, Leinendehnung, Alter)
- Ein Schirm mit ein paar hundert Stunden und einem leichten Leistungsabfall
- Nicht optimale Trimmeinstellungen oder Tragegurte
- Du warst den ganzen Flug über in leicht sinkender Luft (kommt vor)

### Schritt 3: Beobachte den Trend

Wenn du Dutzende Flüge aufzeichnest und die gestrichelte Linie stabil bleibt, ist das der reale Leistungsbereich deines Schirms mit dir. Vergleiche mit den Flügen im nächsten Jahr, um zu sehen, ob der Schirm altert, oder mit dem identischen Setup eines Freundes, um zu sehen, ob es am Schirm oder am Piloten liegt.

### Unterm Strich

Das Diagramm ist ein **Werkzeug fürs Debriefing**, kein Urteil. Nutze es, um bessere Fragen zu deinem Fliegen, deinem Schirm und deinen Flugtagen zu stellen. Nutze es nicht, um Streit an der Bar zu entscheiden: Dafür haben die Daten zu viele Haken.

---

## Kurzer Spickzettel

| Frage | Wo du hinschaust |
|---|---|
| Was bin ich heute tatsächlich geflogen? | Durchgezogene blaue Linie (Median) |
| Was macht mein Schirm ohne Hilfe? | Gestrichelte dunklere Linie (Median im Quartil mit dem niedrigsten Netto) |
| Wie wechselhaft waren die Bedingungen? | Breite des blauen Bands |
| War die Luft bei dieser Geschwindigkeit tragend oder sinkend? | Zellfarben (Pfirsich = Steigen, Blau = Sinken) |
| Was ist meine beste Gleitzahl? | Gleitzahl-Linie, die die gestrichelte Linie tangiert |
| Bei welcher Geschwindigkeit sinke ich am wenigsten? | Höchster Punkt der gestrichelten Linie (oder Kennzahl-Karte) |
| Wie viel „geschenktes Steigen“ hatte ich im Schnitt? | Senkrechter Abstand zwischen durchgezogener und gestrichelter Linie |

---

## Zum Schluss

Das Polarendiagramm lügt nicht, aber es sagt auch nicht die ganze Wahrheit. Es zeigt dir, was dein Logger aufgezeichnet hat, mit aller Streuung und Unsicherheit. Das ist eigentlich nützlicher als ein selbstbewusster Einzelwert: Es zwingt dich, Fragen zu stellen, statt eine Zahl einfach zu schlucken.

Wenn also das nächste Mal jemand im Verein mit seinem „11:1 über den ganzen Flug“ prahlt, hol dein Diagramm raus, zeig auf die gestrichelte Linie bei derselben TAS und frag freundlich: „In ruhiger Luft oder mit Thermik, die die halbe Arbeit gemacht hat?“

Die Atmosphäre ist großzügig. Dein Schirm ist ehrlich. Das Diagramm zeigt dir beides.

Flieg weit, gleite flach, und möge deine gestrichelte Linie immer flacher sein, als du befürchtet hast.
