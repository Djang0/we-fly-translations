---
title: Guide zu den Community-Ranglisten
description: Wer am meisten fliegt und wer am klügsten fliegt
category: Community
order: 2
---

*Oder: Wie du herausfindest, ob du das Arbeitspferd der Community bist oder ihr Vollblut*

## Zwei Ranglisten, zwei Fragen

Die Community-Ranglisten von We-Fly beantworten zwei grundverschiedene Fragen:

1. **Aktivität:** „Wer fliegt am meisten?“ (Menge)
2. **Effizienz:** „Wer fliegt am klügsten?“ (Qualität)

Stell es dir so vor: Aktivität ist die Seitenzahl deines Flugbuchs. Effizienz sind die Highlights pro Seite. Das eine belohnt, dass du auftauchst, das andere, dass du was daraus machst, wenn du da bist.

Nehmen wir beide auseinander.

---

## Die Rangliste Aktivität (der Tab „Ich fliege mehr als du“)

### Was sie misst

Die gesamten **XC-Punkte** aus deinen öffentlichen Flügen. Mehr nicht. Flieg mehr, flieg weiter, sammle Punkte.

### Die Regeln

Nicht jeder Flug zählt. Das hier wird gewertet:

| Kriterium | Warum |
|----------|-----|
| XC-Strecke >= 10 km | Filtert Abgleiter und Parkplatz-Soaren heraus |
| Nur Flüge ohne Motor | Sorry, Motorschirme, die hier ist für die Motorlosen |
| Der Flug muss öffentlich sein | Private Flüge bleiben privat (wir respektieren deine Geheimnisse) |

### Was du siehst

Die Tabelle **Top 10 Piloten**, mit **Aktivität** ausgewählt:

| Spalte | Was sie bedeutet |
|--------|--------------|
| # | Deine Position in der Rangliste |
| Pilot | Vorname N. (datenschutzfreundlich) |
| Flüge | Anzahl der gewerteten Flüge |
| Stunden | Gesamte Flugzeit der gewerteten Flüge |
| XC | Gesamte Streckenflug-Distanz, in deiner Streckeneinheit |
| XC-Punkte | Die Zahl, die deinen Rang bestimmt |

Die Gesamtrangliste oben auf der Seite nutzt dieselben gewerteten Flüge. Schalte sie zwischen **XC-Punkte**, **XC-Strecke** und **Flugzeit** um, um diese Piloten nach der Kennzahl zu sortieren, die dich interessiert.

### Unterm Strich

Aktivität belohnt **Beständigkeit und Hingabe**. Der Pilot mit 200 kurzen Streckenflügen landet vor dem Piloten mit 10 unglaublichen. Es ist die „Geh einfach raus“-Rangliste, und es gibt keine Abkürzung. Entweder du machst die Stunden oder nicht.

---

## Die Rangliste Effizienz (der Tab „Ich fliege klüger als du“)

### Was sie misst

Deinen **Effizienz-Score**: eine zusammengesetzte Kennzahl, die abbildet, wie gut du fliegst und wie regelmäßig du dabei bist. Hier glänzen die engagierten Streckenflieger.

### Wie es funktioniert

Der Effizienz-Score kombiniert drei Kennzahlen, **gleich gewichtet**, über eine Z-Score-Normalisierung:

| Kennzahl | Was sie belohnt |
|--------|----------------|
| **Strecke pro Stunde** | Effizient Strecke machen: gute Routenwahl, solider Gleitflug, wenig Kratzen |
| **Strecke pro Flug** | Weit fliegen, wenn du fliegst: echte Streckenflüge, statt beim ersten Gegenwind abzudrehen |
| **Anzahl gewerteter Flüge** | Dabei sein: Mehr gewertete Flüge stehen für mehr Beständigkeit im Streckenflug |

Dein Gesamtscore ist der Mittelwert der drei Z-Scores:

```
Efficiency Score = (z_distance_per_hour + z_distance_per_flight + z_flight_count) / 3
```

Wenn dir bei Z-Scores die Augen zufallen, schau in den [Z-Score-Guide für Piloten](/doc/z-score-pilot-guide), da steht alles ausführlich. Hier die Kurzfassung:

### Der Z-Score-Spickzettel

| Score | Farbe | Was er bedeutet | Übersetzt für Piloten |
|-------|-------|--------------|-------------------|
| +2,0 oder höher | Grün | Weit über dem Community-Durchschnitt | Du fliegst nicht nur, du *reist* |
| +1,0 bis +2,0 | Grün | Klar über dem Durchschnitt | Effizienter Pilot, gute Entscheidungen |
| -1,0 bis +1,0 | Grün über 0, rot darunter | Etwa im Community-Durchschnitt | Normal, gesund, alles in Ordnung |
| -1,0 bis -2,0 | Rot | Unter dem Durchschnitt | Luft nach oben bei der Streckenflug-Effizienz |
| -2,0 oder niedriger | Rot | Deutlich unter dem Durchschnitt | Vielleicht viel Zeit beim Soaren am Hang? |

Alle drei Kennzahlen haben **das gleiche Gewicht**. Du kannst das System nicht austricksen, indem du schnell, aber kurz fliegst oder einmal im Jahr weit. Du musst weit fliegen, schnell fliegen und immer wieder dabei sein.

### Voraussetzungen

Nicht jeder schafft es in die Effizienz-Rangliste. Das ist keine Türsteherei, das ist Statistik:

| Voraussetzung | Grund |
|-------------|--------|
| XC-Strecke >= 10 km | Wie bei Aktivität: nur echte Streckenflüge |
| Flugdauer > 5 Minuten | War dein Flug kürzer als eine Kaffeepause, zählt er nicht |
| Nur Flüge ohne Motor | Gashebel sind Schummeln (zumindest hier) |
| **5+ gewertete Flüge** | Vermeidet Eintagsfliegen und statistisches Rauschen |
| 2+ gewertete Piloten in der Community | Für Z-Scores braucht es mindestens zwei Datenpunkte |

### Die Aufschlüsselung beim Darüberfahren

Fahr mit der Maus über eine Zeile (oder tippe auf dem Handy darauf), um die Z-Scores pro Kennzahl zu sehen. So erfährst du, *woher* deine Effizienz kommt:

- Viel km/h, aber wenig km pro Flug? Du bist schnell, fliegst aber kurze Routen.
- Wenig km/h, aber viel km pro Flug? Du machst Strecke, lässt dir dabei aber gemütlich Zeit.
- Viele Flüge, aber kurze Strecken? Du bist fleißig, drückst aber noch nicht auf Strecke.
- Alles drei hoch? Du bist der Pilot, über den sich die anderen in der WhatsApp-Gruppe beschweren.

---

## Z-Scores lesen (die 30-Sekunden-Fassung)

Ein Z-Score sagt dir, wie weit du vom Community-Durchschnitt entfernt bist, gemessen in Standardabweichungen.

- **Score 0** = Du BIST der Durchschnitt
- **Score +1,5** = Du liegst 1,5 Standardabweichungen über dem Durchschnitt (etwa in den Top 7 %)
- **Score -0,5** = Leicht unter dem Durchschnitt (völlig normal, hier stehen grob 30 % der Piloten)
- **Score +2,5** = Statistischer Ausreißer: Du machst etwas richtig (oder alle anderen etwas falsch)

Z-Scores sind **relativ**. Wenn morgen ein Haufen Streckenflug-Teufel der Community beitritt, verschieben sich alle Scores. Dein Fliegen hat sich nicht verändert, der Maßstab schon.

Du willst es ganz genau wissen, mit Rechenbeispielen und Code? Lies den [kompletten Z-Score-Guide für Piloten](/doc/z-score-pilot-guide).

---

## FAQ und Stolperfallen

### „Warum stehe ich nicht in der Effizienz-Rangliste?“

Du brauchst **5 oder mehr gewertete Flüge** (10+ km XC, ohne Motor, über 5 Minuten). Hast du 4 gewertete Flüge und 47 Abgleiter, fehlt dir noch einer. Flieg noch einen echten Streckenflug, und du bist drin.

### „Ich fliege STÄNDIG, aber mein Effizienz-Score ist niedrig.“

Das ist Absicht. Der Effizienz-Rangliste ist egal, wie *oft* du fliegst, dafür gibt es die Rangliste Aktivität. Effizienz misst, wie weit und wie schnell du *pro Flug* kommst. Loggst du jede Menge kurze lokale Flüge, steigt dein Rang bei Aktivität, während dein Effizienz-Score mau bleibt.

### „Mein Score ist negativ. Bin ich ein schlechter Pilot?“

Nein. Ein negativer Score heißt, dass du bei diesen drei Kennzahlen **unter dem aktuellen Community-Durchschnitt** liegst. Das ist relativ. Ist die Community voller Streckenflug-Wettkampfpiloten, steht selbst ein solider Genusspilot im Minus. Über deine Sicherheit, dein Können in Turbulenzen, deine Ziellandegenauigkeit oder dein Händchen bei der Wahl der Kneipe nach dem Fliegen sagt das nichts aus.

### „Warum mindestens 10 km?“

Weil wir Streckenflug messen wollen, nicht Kurbeln überm Parkplatz. Die 10-km-Grenze filtert Abgleiter, lokale Soaring-Sessions und die Flüge heraus, bei denen du technisch gesehen „über Land“ geflogen bist, aber nur mit dem Wind aufs nächste Feld getrieben bist. Wenn du keine echte Strecke gemacht hast, ist es kein Streckenflug, sondern einfach Fliegen, und daran ist nichts falsch, aber es gehört auf eine andere Anzeigetafel.

### „Warum ist mein Name abgekürzt?“

Datenschutz. In den Ranglisten erscheinen alle Pilotennamen als **Vorname N.** (Vorname plus Anfangsbuchstabe des Nachnamens). Dein voller Name bleibt in deinem Profil, aber die öffentlichen Ranglisten bleiben respektvoll.

### „Kann ich in beiden Ranglisten stehen?“

Na klar. Die meisten aktiven Piloten tun das. Du kannst bei Aktivität auf Platz 3 stehen und bei Effizienz auf Platz 15 oder umgekehrt. Die beiden Ranglisten messen völlig unterschiedliche Dinge, und wer in der einen glänzt, glänzt nicht automatisch in der anderen.

---

## Unterm Strich (Kurzfassung)

- **Aktivität** = gesamte XC-Punkte aus öffentlichen Flügen. Mehr fliegen, höher ranken. Ganz einfach.
- **Effizienz** = wie weit, wie schnell und wie oft du Streckenflüge machst, normalisiert über die Community. Klüger fliegen, höher ranken.
- Beide setzen **mindestens 10 km XC** voraus und schließen Flüge mit Motor aus.
- Effizienz verlangt **5+ gewertete Flüge** und nutzt eine **Z-Score-Normalisierung**.
- Positiver Effizienz-Score (grün) = über dem Durchschnitt. Negativ (rot) = darunter. Keins von beiden ist ein Urteil über deinen Charakter.
- Fahr über eine Zeile, um die Aufschlüsselung pro Kennzahl zu sehen.

Und jetzt hör auf, über Ranglisten zu lesen, und logg einen Flug, der dich einen Platz nach oben bringt.

---

*„Es gibt zwei Sorten Piloten: die, die vor dem Fliegen auf die Rangliste schauen, und Lügner.“*
*- Uraltes We-Fly-Sprichwort*
