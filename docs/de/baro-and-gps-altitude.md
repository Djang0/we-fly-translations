---
title: Warum Baro- und GPS-Höhe voneinander abweichen
description: Was die barometrische Höhe deines Loggers misst, warum sie von GPS abweicht und wie We-Fly sie auf deinen Start abgleicht
category: Your Flights
order: 7
---

## Zwei Höhen, zwei Bezüge

Die meisten Instrumente zeichnen jede Sekunde zwei Höhen auf: eine vom Barometer, eine vom GPS. Auf der Flugseite wählst du mit dem Schalter **Baro / GPS** über der Karte, welche davon das Diagramm zeigt. Die beiden stimmen selten überein, und an manchen Tagen liegen 200 m dazwischen.

**GPS-Höhe** ist deine Höhe über dem mittleren Meeresspiegel, per Satellit gemessen. Sie springt von Sekunde zu Sekunde etwas hin und her, hat aber keinen Fehler, der sich mit dem Wetter des Tages ändert.

**Baro-Höhe** wird aus dem Luftdruck berechnet. Von Sekunde zu Sekunde ist sie ruhig und präzise, deshalb nutzt dein Vario sie. Der IGC-Standard verlangt aber, dass Logger sie auf den **Standarddruck von 1013 hPa** beziehen und nicht auf den tatsächlichen Luftdruck auf Meereshöhe an diesem Tag (das QNH). Hast du das QNH vor dem Start eingestellt, zeigt dein Vario-Display damit an. In der Datei steht aber immer die Standardhöhe.

## Wie weit sie danebenliegen kann

In Meeresnähe entspricht 1 hPa etwa 8 m Höhe.

| Tag | Luftdruck auf Meereshöhe | Baro-Höhe in der Datei |
|---|---|---|
| Standard | 1013 hPa | ungefähr richtig |
| Kräftiges Hoch | 1030 hPa | etwa 140 m zu niedrig |
| Winterhoch | 1040 hPa | etwa 225 m zu niedrig |
| Tiefes Tief | 985 hPa | etwa 230 m zu hoch |

Dazu kommt ein kleinerer Fehler durch die Temperatur, der mit der Höhe wächst: Ist die Luft wärmer als in der Standardatmosphäre, zeigt das Barometer pro 10 °C etwa 4 % deiner Höhe zu wenig an.

Bei einem kräftigen Hoch zeigt ein Gelände in Küstennähe unter null an. Ein Windenschlepp-Gelände auf 30 m loggt bei 1030 hPa etwa -110 m. Für den Standard, auf den er sich bezieht, ist dieser Wert richtig. Dein Logger ist also nicht kaputt.

## Was We-Fly anzeigt

Im Höhendiagramm ist die Baro-Kurve **auf den Start abgeglichen**. Sie wird für den ganzen Flug einmal so verschoben, dass sie beim Start auf dem Gelände liegt, so wie du vor dem Start dein Vario einstellst. Über dem Diagramm steht dann **Baro-Höhe · auf Start abgeglichen**, und das **ⓘ** neben dem Schalter Baro / GPS zeigt dir, um wie viel dieser Flug verschoben wurde. Hat der Track keine Geländedaten, wird die Baro-Kurve stattdessen an der GPS-Höhe ausgerichtet.

Aus derselben Verschiebung ergibt sich eine Schätzung des Luftdrucks auf Meereshöhe an diesem Tag. Die Karte **Höhen** in der Flugübersicht zeigt sie als **QNH des Tages** an. Der Wert ist nur ungefähr, denn wenn die Temperatur von der Standardatmosphäre abweicht, verschiebt sich die Schätzung. Bei hoch gelegenen Startplätzen ist der Effekt stärker.

Durch die Verschiebung wandert die Kurve nur nach oben oder unten. Vario, Steigwerte, Höhengewinne und Bärte berechnet We-Fly aus Höhendifferenzen, sie hängen also nicht davon ab. Alle absoluten Höhen in der Analyse (maximale und minimale Höhe, Basis, Oberkanten der Bärte, Höhen über Grund) verwenden dieselbe Verschiebung.

An deiner IGC-Datei wird nie etwas verändert. Bei Downloads und Exporten bekommst du das Original, genau so, wie dein Instrument es geschrieben hat.

## Welcher Höhe du trauen kannst

- **Für Steigen, Sinken und Höhengewinn:** Baro. Die Kurve ist ruhig, und der Fehler des Tages fällt bei Differenzen weg.
- **Für absolute Höhe, Luftraum und den Vergleich mit anderen Piloten:** GPS oder die auf den Start abgeglichene Baro-Höhe. Die Luftraumprüfung auf der Flugkarte verwendet immer GPS.
- **Handys ohne Barometer:** Beide Kurven kommen vom GPS. Es gibt nichts abzugleichen, und das zeigt dir auch das **ⓘ** an.

Wenn die beiden Kurven auch nach der Verschiebung den ganzen Flug über weit auseinanderliegen oder die Baro-Höhe um Hunderte Meter springt, ist vielleicht der Drucksensor deines Instruments defekt. We-Fly markiert solche Flüge unter **Profil → Anomalien**.
