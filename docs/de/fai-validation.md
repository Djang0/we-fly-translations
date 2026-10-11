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
- **Offizielle Prüfung**: Nachweis, dass der Flug echt ist
- **Nachweise**: Anforderungen für Abzeichen und Qualifikationen

### So funktioniert es

1. **Flug öffnen**: Geh zur Detailseite des Flugs
2. **Auf „Flug validieren (FAI)“ klicken**: An den Dienst der FAI CIVL senden
3. **Verarbeitung**: Die IGC-Datei wird an http://vali.fai-civl.org gesendet
4. **Ergebnis**: Das Validierungsergebnis kommt zurück
5. **Speicherung**: Das Ergebnis wird mit dem Flug gespeichert

### Validierungsergebnisse

Zwei mögliche Ergebnisse:

#### BESTANDEN
- Der Flug ist nach den Regeln der FAI gültig
- Die Integrität der IGC-Datei ist bestätigt
- Der GPS-Track ist echt
- Keine Manipulation festgestellt
- Ein Validierungszertifikat ist verfügbar

#### NICHT BESTANDEN
- Der Flug hat die Validierung nicht bestanden
- Mögliche Gründe:
  - Probleme mit der Integrität der IGC-Datei
  - Auffälligkeiten im GPS-Track
  - Ungültiges Datenformat
  - Verdacht auf Manipulation

### Was die FAI prüft

Der Validierungsdienst der FAI prüft:
- **Integrität des G-Datensatzes**: Prüfung der Sicherheitssignatur
- **Dateiformat**: Gültige IGC-Struktur
- **Durchgängigkeit des GPS-Tracks**: Keine Lücken oder Sprünge
- **Stimmigkeit der Daten**: Zusammenhang von Höhe, Position und Zeit
- **Prüfung des Instruments**: Bekannte bzw. zugelassene GPS-Geräte

### Validierungszertifikat

Wenn der Flug besteht:
- Du bekommst einen Link zum Validierungszertifikat
- Es kann für offizielle Einreichungen genutzt werden
- Dauerhafter Eintrag auf den Servern der FAI
- Nachweis, dass der Flug echt ist

### Wichtige Hinweise

**Die FAI-Validierung ist NICHT nötig für:**
- Die normale Nutzung von We-Fly
- Dein persönliches Flugbuch
- Das Teilen von Flügen mit Freunden
- Die Funktionen der Community

**Die FAI-Validierung IST nötig für:**
- Offizielle Wettkämpfe
- Rekordanträge
- Qualifikationen und Abzeichen von Piloten
- Ansprüche auf Preise in Wettbewerben
