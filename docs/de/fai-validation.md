---
title: FAI-Validierung
description: Lass deinen Flug über die öffentliche FAI-API validieren
category: Your Flights
order: 2
---

## Validierung von Flügen durch die FAI

### Was ist die FAI-Validierung?

Die FAI (Fédération Aéronautique Internationale) ist der Weltverband des Luftsports. We-Fly kann Flüge an den offiziellen Validierungsdienst der FAI CIVL senden.

### Wann du die FAI-Validierung nutzt

Nutze die FAI-Validierung für:
- **Wettkampfflüge**: Offizielle Prüfung im Wettbewerb
- **Rekordanträge**: Versuche für Welt- oder Landesrekorde
- **Offizielle Prüfung**: Nachweis, dass die Datei nicht verändert wurde
- **Abzeichen-Anträge**: Wenn ein Wettbewerb oder Verband einen signierten Track verlangt

### So funktioniert es

1. **Öffne deinen Flug**: Die Validierung gibt es für deine eigenen Flüge
2. **Klick auf „Flug validieren (FAI)“**: Das Häkchen-Symbol in der Werkzeugleiste des Flugs (am Handy steckt es im **⋯**-Menü)
3. **Bestätigen**: Der Dialog **FAI-Flugvalidierung** erklärt, was passiert; klick auf **Weiter**
4. **Verarbeitung**: We-Fly schickt die originale IGC-Datei unverändert an den Validierungsdienst der FAI CIVL (vali.fai-civl.org)
5. **Ergebnis**: Der Button wird zu **FAI-Validierung bestanden** oder **FAI-Validierung fehlgeschlagen**, und das Ergebnis wird mit dem Flug gespeichert

Klick erneut auf den Button, um den Dialog **Ergebnis der FAI-Validierung** zu öffnen (Status, Meldung und die vollständigen Validierungsdaten). Um die Prüfung noch einmal laufen zu lassen, nutze **Erneut validieren (FAI)** im **⋯**-Menü des Flugs.

### Validierungsergebnisse

Zwei mögliche Ergebnisse:

#### BESTANDEN
- Der Dienst der FAI hat die Datei angenommen
- Der Sicherheitsdatensatz der IGC-Datei (G-Datensatz) passt zum Inhalt der Datei
- Die Datei wurde nicht verändert, seit das Instrument sie signiert hat

#### NICHT BESTANDEN
- Der Dienst der FAI hat die Datei abgelehnt
- Mögliche Gründe:
  - Fehlender oder beschädigter G-Datensatz (manche Apps und Instrumente signieren ihre Dateien nicht)
  - Die Datei wurde nach der Aufzeichnung bearbeitet
  - Das Instrument ist dem Dienst der FAI nicht bekannt
  - Ungültiges Datenformat

Die **Meldung** im Ergebnisdialog sagt dir, was der Dienst zurückgemeldet hat.

### Was die FAI prüft

Der Validierungsdienst der FAI prüft die Datei selbst, nicht dein Fliegen:
- **Integrität des G-Datensatzes**: Die Sicherheitssignatur, die das Instrument geschrieben hat
- **Dateiformat**: Gültige IGC-Struktur
- **Prüfung des Instruments**: Die Signatur wird mit dem Validierungsprogramm des Instrumentenherstellers geprüft

Er beurteilt nicht, ob der Flug regelkonform, richtig gewertet oder sicher war.

### Wo das Ergebnis liegt

Das Validierungsergebnis wird in We-Fly mit dem Flug gespeichert, sodass du es jederzeit wieder öffnen kannst. Der Dienst der FAI selbst liefert ein Urteil, kein Zertifikat: Verlangt ein Wettbewerb oder ein Rekordantrag einen Nachweis, will er meist die originale IGC-Datei, und die bewahrt We-Fly Byte für Byte so auf, wie du sie hochgeladen hast.

### Wichtige Hinweise

**Die FAI-Validierung ist NICHT nötig für:**
- Die normale Nutzung von We-Fly
- Dein persönliches Flugbuch
- Das Teilen von Flügen mit Freunden
- Die Funktionen der Community

**Eine signierte, gültige IGC-Datei ist oft nötig für:**
- Offizielle Wettkämpfe
- Rekordanträge
- Manche Wettbewerbs- und Abzeichen-Anträge

Prüf die Regeln des Wettbewerbs oder Verbands, bei dem du einreichst.
