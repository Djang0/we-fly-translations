---
title: Falsche Flugdaten korrigieren
description: Warum manche Instrumente das falsche Datum aufzeichnen und wie du es korrigierst, ohne deinen Flug zu verlieren
category: Your Flights
order: 6
---

## Wenn ein Flug am falschen Tag landet

Jede IGC-Datei enthält das Flugdatum in ihrem Header, mit dem Tag zuerst: `DDMMYY`. Ein paar Instrumente schreiben es andersherum (`YYMMDD`). We-Fly liest dann das Jahr als Tag und den Tag als Jahr, sodass ein Flug vom 9. Juli 2026 als 26. Juli 2009 auftauchen kann.

Dein Track, die Uhrzeiten und die Wertung stimmen. Nur das Datum ist falsch, und damit landet der Flug in der falschen Saison, in der falschen Serie und an der falschen Stelle in deinem Flugbuch.

## Einen Flug korrigieren

Öffne in deinem Flugbuch das **⋯**-Menü des Flugs und wähle **Datum ändern**.

- Sieht das Datum vertauscht aus, zeigt We-Fly **Korrekturvorschlag verfügbar** mit dem korrigierten Datum an. Tippe auf **Vorschlag übernehmen** und dann auf **Datum speichern**.
- Andernfalls wählst du den richtigen Tag im Kalender und tippst auf **Datum speichern**. Die Uhrzeit des Flugs bleibt gleich, nur der Tag ändert sich.

## Viele Flüge auf einmal korrigieren

Hat ein Instrument eine ganze Saison mit vertauschten Daten aufgezeichnet, wähl diese Flüge im Flugbuch aus und nutze **Datumsformat korrigieren** im Auswahlmenü. Damit werden Tag und Jahr bei allen ausgewählten Flügen in einem Rutsch getauscht.

Nutze das nur bei Flügen, die wirklich betroffen sind. Wendest du es auf einen korrekten Flug an, wird aus einem richtigen Datum ein falsches, und deine Zeitachse gerät durcheinander. Im Zweifel korrigierst du erst einen Flug und prüfst das Ergebnis.

## Vorbeugen

Aktualisiere die Firmware deines Instruments: Die meisten Hersteller haben das Datumsformat längst korrigiert. Bleibt das Problem bestehen, sag dem Hersteller, dass sein IGC-Header nicht der `HFDTE`-Regel der IGC-Spezifikation folgt.
