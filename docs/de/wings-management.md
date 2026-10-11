---
title: Schirme verwalten
description: So verwaltest du deine Schirme in We-Fly, mit Umbenennen, Einteilung in Solo und Tandem und was sich dabei wirklich ändert
category: Your Flights
order: 3
---

## Deine Schirme stecken in deinen Flügen

We-Fly hat keine eigene „Schirmdatenbank“. Wenn du eine IGC-Datei hochlädst, schreibt dein Instrument den Schirmnamen in den Header der Datei, und genau den übernimmt We-Fly. Jeder Flug trägt seinen eigenen Schirmnamen, und die Seite **Schirme** (`/flights/wings`) ist nur eine schlaue Zusammenfassung: Sie gruppiert alle deine Flüge nach Schirmnamen und zeigt dir das Gesamtbild.

Dieser Unterschied ist wichtig, denn er bestimmt, was das Umbenennen tatsächlich bewirkt und was nicht.

---

## Was du auf der Seite Schirme siehst

Jede Zeile in deiner Schirmliste zeigt:

- **Schirmname**: genau so, wie dein Instrument ihn in der IGC-Datei aufgezeichnet hat
- **Typ**: Solo, Tandem oder gemischt (mehr dazu weiter unten)
- **Flüge**: Gesamtzahl der Flüge, die mit diesem Schirm geloggt sind
- **Dauer**: zusammengerechnete Flugzeit all dieser Flüge

Von hier aus kannst du einen Schirm umbenennen und seinen Typ ändern. Das war's, schlicht und einfach.

---

## Einen Schirm umbenennen

Es gibt in We-Fly drei Stellen, an denen du einen Schirmnamen ändern kannst, und jede wirkt auf einen anderen Umfang.

### Auf der Seite Schirme: alles auf einmal umbenennen

Tippe neben einem Schirm auf **Umbenennen**, gib den neuen Namen ein und bestätige. We-Fly ändert den Schirmnamen bei **jedem Flug**, der den alten Namen hatte. Fünfzehn Flüge als „Rush 6“ geloggt? Mit einem Klick heißen alle „Ozone Rush 6“. Das ist das richtige Werkzeug, wenn du einen Namen in deinem ganzen Flugbuch aufräumen willst.

### In deiner Flugliste: nur ausgewählte Flüge umbenennen

Wähle auf `/flights` einen oder mehrere Flüge über die Checkboxen aus. Ein Menü für Sammelaktionen erscheint. Öffne es und wähle **Schirmnamen ändern**. Nur die ausgewählten Flüge werden geändert, egal mit welchem Schirm sie vorher geloggt waren. Praktisch, wenn du ein paar Flüge einem anderen Schirm zuordnen willst, ohne den Rest anzufassen.

### Bei einem einzelnen Flug: einen Flug umbenennen

Öffne auf der Detailseite eines Flugs das Aktionsmenü und wähle **Schirm ändern**. Das ändert nur diesen einen Flug. Alle anderen Flüge bleiben unberührt.

---

**Was sich in allen drei Fällen ändert:**
- Der Schirmname bei den betroffenen Flügen
- Die Schirmliste (Einträge kommen hinzu, werden zusammengeführt oder verschwinden, je nachdem, was übrig bleibt)
- Alle aktiven Filter, die sich auf diesen Schirmnamen beziehen

**Was sich nicht ändert:**
- Dein Instrument. Im Vario, GPS oder in der Handy-App, die diese IGC-Dateien erzeugt hat, ist noch der alte Name eingestellt. Wenn du das nächste Mal fliegst und hochlädst, taucht der neue Flug wieder mit dem alten Namen auf, denn den hat dein Instrument in den IGC-Header geschrieben.

Wenn du einen Schirm in We-Fly umbenennst, **ändere den Schirmnamen auch in den Einstellungen deines Instruments**. Sonst rennst du dieser Umbenennung bei jedem Upload hinterher.

> Wenn du einen Schirm hier umbenennst, werden nur die vorhandenen Flüge in deiner Datenbank geändert. In deinem Fluginstrument ist eventuell noch der alte Schirmname eingestellt.

---

## Solo oder Tandem

We-Fly merkt sich, ob jeder Flug solo oder im Tandem geflogen wurde. Das beeinflusst, wie deine Statistiken angezeigt werden, und kann für dein Flugbuch wichtig sein.

### Wie der Typ festgelegt wird

Flüge sind standardmäßig **Solo**, außer We-Fly findet in deinem Flugbuch schon einen Tandemflug mit demselben Schirmnamen. Dann übernimmt der neue Upload automatisch `tandem`, ganz ohne Handarbeit.

### Den Typ von Hand ändern

Auf der Seite Schirme hat jede Zeile eine Typauswahl. Klick darauf, um alle Flüge mit diesem Schirm zwischen Solo und Tandem umzustellen. Das ist eine **Sammelaktion**: Sie ändert jeden Flug mit diesem Schirmnamen in einem Rutsch.

Bevor du bestätigst, sagt dir We-Fly genau, wie viele Flüge betroffen sind. Keine Überraschungen.

---

## Typische Situationen

**„Ich fliege denselben Schirm solo und im Tandem“**

Nutze den Umbenennen-Trick: Logge die Tandemflüge und benenne diesen Schirm dann zum Beispiel in „Fusion 30 Tandem“ um, bevor du die Flüge als Tandem markierst. Die Soloflüge behältst du unter dem ursprünglichen Namen. So erscheinen beide als saubere, getrennte Einträge.

**„Mein Schirm taucht unter zwei Namen auf“**

Der Klassiker unter den Instrument-Ungereimtheiten: „Rush 6“ vom einen Logger, „OZONE Rush 6“ vom anderen oder sogar ein Tippfehler nach einem Firmware-Update. Benenne die Varianten in einen einheitlichen Namen um, dann werden sie zu einer Zeile zusammengeführt.

**„Meine neuen Flüge zeigen nach dem Umbenennen wieder den alten Schirmnamen“**

Aktualisiere dein Instrument. We-Fly liest den Namen, der in der IGC-Datei steht. Was dein Vario geschrieben hat, kann es nicht überschreiben.

---

Allzeit gute Thermik und einheitliche Schirmnamen da draußen.
