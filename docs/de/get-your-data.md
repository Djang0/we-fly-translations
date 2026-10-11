---
title: Hol dir deine Daten
description: Lade eine vollständige Kopie deiner Flugdaten herunter
category: Account & Data
order: 1
---

## Deine Daten, deine Regeln

Öffne dein **Profil** (über das Kontomenü oder direkt unter `/profile`). Klick im Bereich **Konto** auf **Daten exportieren**. Die Zeile zeigt, wie viele Flugdatensätze du hast, und einen Klick später landet eine ZIP-Datei in deinen Downloads, schneller als ein Abgleiter nach einem verpatzten Start.

Du musst nichts ausfüllen und auf keine E-Mail warten: Das Archiv wird sofort erstellt. Bei Hunderten von Flügen kann es einen Moment dauern, bis der Download startet, also gib ihm ein paar Sekunden, bevor du nochmal klickst.

## Was ist drin?

Die ZIP-Datei (sie heißt `we-fly-data-export-` gefolgt von einer Nummer) enthält einen Ordner `my-data` mit allem, was wir über dich haben, ganz im Sinne der DSGVO:

- **flights/**: alle deine IGC-Dateien, nach Datum sortiert (`flights/YYYY/MM/DD/`), damit du den epischen Thermiktag von 2021 wiederfindest. Jede Datei behält ihren ursprünglichen Namen und ist genau die Datei, die du hochgeladen hast, Byte für Byte
- **data-export.json**, das Zeug für Nerds: dein Profil und deine Einstellungen (Einheiten, Anzeigeeinstellungen, Schirmfarben, E-Mail-Einstellungen), die Metadaten jedes Flugs (Datum, Pilot, Schirm, Dauer, Strecke, Start- und Landeplatz, XC-Punkte, Freigabestatus), die mit deinem Profil verknüpften Anmeldekonten, deine Passkeys (nur Namen und Daten, nie Schlüsselmaterial) und deine Einwilligungsnachweise
- **README.txt**: erklärt, was was ist, plus eine kurze Zusammenfassung deiner Gesamtwerte, falls du es erst nach sechs Bier öffnest
- **missing.txt**: taucht nur auf, wenn wir eine IGC-Datei bei uns nicht finden konnten, und listet die betroffenen Flüge auf

Korrekturen, die du in We-Fly gemacht hast (ein korrigiertes Datum, ein umbenannter Schirm), stehen in `data-export.json`. Die IGC-Dateien selbst werden nie verändert, sie bleiben also genau so, wie dein Instrument sie aufgezeichnet hat.

## Wozu das Ganze?

- **Sicherung**: weil Festplatten kaputtgehen, die Thermik in der Cloud aber nicht
- **Umzug**: Du nimmst dein Flugbuch auf eine andere Plattform mit? IGC ist das Format, das jedes Flugbuch versteht
- **Beweis**: Du musst deinem Verein zeigen, dass du das Dreieck wirklich geflogen bist? Es ist alles da

## Technisches für Neugierige

IGC-Dateien funktionieren mit jeder Software zur Flugauswertung: XCTrack, SeeYou, was auch immer deine Truppe nutzt. Das JSON ist strukturiert und maschinenlesbar, also kannst du dir deine eigene Statistik skripten, wenn du so ein Pilot bist.

Kleine Warnung: Der Export ist mengenbegrenzt, also hämmer nicht auf die Schaltfläche ein, als würdest du dich durch eine Vorflugcheckliste klicken.

Du willst nur ein paar IGC-Dateien, nicht das ganze Archiv? Wähl die Flüge in deinem Flugbuch aus und nutze **IGC-Dateien herunterladen**, dann bekommst du genau diese als ZIP.
