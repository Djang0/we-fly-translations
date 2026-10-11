---
title: Erweiterte Thermikanalyse
description: Jeder Bart, den du bearbeitet hast, im Detail, Zentrieren, Steigwert und Effizienz Flug für Flug bewertet
category: Thermal Analysis
order: 1
---

Hast du dich schon mal gefragt, ob du wirklich ein Thermikgenie bist oder einfach nur Glück hast? Willkommen bei der erweiterten Thermikanalyse, deinem persönlichen Debriefing-Partner, der jeden Kreis, den du geflogen bist, so auseinandernimmt wie ein Wettkampfrichter mit Doktortitel im Kurbeln.

## Was ist das für ein Ding?

Stell es dir als Analysetool nach dem Flug vor, das jede deiner Bewegungen in der Thermik beobachtet. Es sagt dir nicht nur „Hey, du bist 500 m gestiegen“. Es schaut genau hin, *wie* du gestiegen bist, ob du wie ein Profi den Kern gejagt hast oder wie ein Tourist herumgeirrt bist.

Das Tool erkennt automatisch jeden Bart, den du auf deinem Flug bearbeitet hast, und gibt jedem eine Qualitätsbewertung und eine ausführliche Aufschlüsselung. Als würde ein Coach deine GoPro-Aufnahmen durchgehen, nur dass er GPS-Tracks und Variodaten auswertet.

## Die Hauptansicht

Wenn du die Analyse startest, siehst du drei Hauptbereiche:

### Linker Bereich: Flugzusammenfassung und Liste der Bärte

Oben bekommst du die Vogelperspektive:
- **Bärte**: Wie viele du bearbeitet hast (oder *versucht* hast zu bearbeiten)
- **Gewinn**: Die ganze Höhe, die du zusammengekratzt hast
- **Ø Steigen**: Dein mittlerer Steigwert über alle Bärte
- **Qualität**: Gesamtbewertung der Thermikqualität (dazu gleich mehr)

Darunter steht deine Liste der Bärte, jeder Bart, den du erwischt hast, in zeitlicher Reihenfolge. Jede Karte zeigt:
- **Qualitätsabzeichen**: Reicht von „Mittel“ (autsch) bis „Exzellent“ (bring mir das bei)
- **Zeit**: Wann du in den Bart eingeflogen bist
- **Gewinn**: Wie viel Höhe du gutgemacht hast
- **Steigen**: Mittlere m/s in diesem Bart

Klick auf einen Bart, um ihn zu analysieren. Das kleine Zielscheiben-Symbol setzt den Kartenzoom zurück, wenn du herumgestöbert hast.

### Mittlerer Bereich: die Karte

Hier passiert die Magie. Du siehst:

**Deinen Track**: Farbcodierte GPS-Punkte, die deinen Weg durch den Bart zeigen
- 🟢 **Grüne Punkte**: Starkes Steigen (>3 m/s), du hast den Saft gefunden!
- 🔵 **Blaue Punkte**: Mäßiges Steigen (0-3 m/s), am Arbeiten
- 🔴 **Rote Punkte**: Sinken (<0 m/s), kennen wir alle

**Ausgewählter Bart**: Rot hervorgehoben mit weißem Rand. Das ist der Bart, den du gerade analysierst

**Andere Bärte**: Lila mit 40 % Deckkraft, als Kontext dafür, wo du sonst noch gestiegen bist

**Animationssteuerung**:
- ▶️ **Abspielen/Pause**: Sieh dir die Wiedergabe deines Flugs Frame für Frame an
- 🔄 **Zurücksetzen**: Zurück zum Anfang
- ⬅️➡️ **Frame-Navigation**: Geh jeden GPS-Punkt einzeln von Hand durch (oder nimm die Pfeiltasten, ja, wir haben an die Tastatur gedacht)
- **Frame-Zähler**: Zeigt genau, wo du im Bart bist (z. B. „42/156“)

Unter der Steuerung siehst du Echtzeitdaten für den aktuellen GPS-Punkt:
- **Zeit**: Genauer Zeitstempel
- **Höhe**: Aktuelle Höhe
- **Vario**: Vertikalgeschwindigkeit in diesem Moment

**Profi-Tipp**: Nimm die Pfeiltasten, um Frame für Frame durch den Bart zu spulen. Super, um genau zu sehen, wann du den Kern erwischt hast.

### Rechter Bereich: Details zum Bart

Das ist dein Coaching-Bericht. Gehen wir die Abschnitte einzeln durch:

#### Qualitätsübersicht
**Gesamtwert**: Eine zusammengesetzte Zahl (0-40), die mehrere Faktoren berücksichtigt:
- Effizienz des Steigens
- Wie gut du zentriert geblieben bist
- Verhältnis von Versatz zu Steigen
- Gleichmäßigkeit der Kreise

Der Fortschrittsbalken zeigt, wo du auf der Skala landest. Regelmäßig über 25? Dann machst du etwas richtig.

**Effizienz**: Welcher Anteil deiner Zeit im Bart wirklich produktives Steigen war. Niedrigere Werte heißen, dass du Zeit mit Herumirren oder im Saufen verbracht hast.

#### Versatz & Wind
**Versatz**: Wie weit dich der Bart beim Steigen mit dem Wind versetzt hat. Weniger ist meist besser (außer du *wolltest* versetzen).

**Windgeschwindigkeit**: Aus deinem Versatz berechnet. Praktisch, um die Bedingungen zu verstehen.

**Windkompass**: Zeigt die Windrichtung grafisch. Der Pfeil zeigt, *wohin* der Wind weht (Konvention der Meteorologen, sorry, liebe Segler).

#### Steigen
Die nackten Zahlen:
- **Gewinn**: Insgesamt gewonnene Meter
- **Ø**: Deine mittlere Vertikalgeschwindigkeit
- **Max.**: Bester Steigwert, den du erreicht hast (meist, als du den Kern getroffen hast)
- **Min.**: Schlechtester Moment (oft beim Einfliegen oder als du den Kern verloren hast)
- **Schwank.**: Wie gleichmäßig das Steigen war. Niedriger = ruhiger Bart, höher = knackig/turbulent

#### Kern
Jetzt wird es nerdig:

**Stärke**: Das stärkste anhaltende Steigen, das du gefunden hast. Das ist dein Steigwert im „Sweet Spot“.

**Zentrierzeit**: Wie lange du nach dem Einfliegen gebraucht hast, um den Kern zu finden und darin zu bleiben. Weniger ist besser, dann hast du keine Zeit am Rand verplempert.

**Zentrieren**: Anteil der Zeit in starkem gegenüber schwachem Steigen. Hohe Werte = du bist im guten Zeug geblieben.

#### Kurvendynamik
**Richtung**: Links oder rechts (die meisten Piloten haben eine Lieblingsseite, kein Urteil)

**Kreise**: Wie viele volle Kreise du geflogen bist

**Drehrate**: Mittlere Drehrate in Grad pro Sekunde. Zu langsam = du driftest raus, zu schnell = vielleicht zu viel Schräglage

#### Zeit
Nur die Zeitstempel und die Dauer. Nützlich, um sie mit deinen Notizen oder deinem Wettkampf-Logger abzugleichen.

#### Empfehlungen

Hier wird das Tool gesprächig. Anhand der Analyse bekommst du persönliches Feedback wie:
- 🟢 **Positives Feedback** (grüner Hintergrund): Was du gut gemacht hast, „Super in den Kern mit minimaler Suchzeit“
- 🟡 **Verbesserungsvorschläge** (bernsteinfarbener Hintergrund): Woran du arbeiten kannst, „Kreis enger, um den Versatz zu verringern“

Die Empfehlungen entstehen aus echten Leistungskennzahlen, nicht aus allgemeinen Ratschlägen.

## Wiedergabe der Animation

Die Wiedergabe ist ehrlich gesagt ziemlich cool. Drück auf Abspielen und sieh dir selbst beim Bearbeiten des Barts in Echtzeit zu (na gut, im Zeitraffer). Du kannst:

1. **Komplett abspielen**: Sieh dir deinen ganzen Bart vom Einfliegen bis zum Abfliegen an
2. **Pausieren und spulen**: Geh mit den Pfeiltasten durch die spannenden Momente
3. **Die Kennzahlen verfolgen**: Aktuelle Höhe, Vario und Zeit laufen mit, während du dich durch den Bart bewegst
4. **Mehrere Bärte vergleichen**: Wechsel zwischen verschiedenen Bärten, um zu sehen, wie sich deine Technik verändert hat

**Tastenkürzel**:
- **←** Vorheriges Frame
- **→** Nächstes Frame

## Die Qualitätsbewertung erklärt

Die Qualitätsbewertung ist nicht einfach „guter Steigwert = hohe Bewertung“. Sie setzt sich zusammen aus:

1. **Effizienz des Steigens**: Tatsächliches Steigen gegenüber dem theoretischen Maximum
2. **Zentrierkönnen**: Wie schnell du den Kern gefunden hast und darin geblieben bist
3. **Umgang mit dem Versatz**: Ob du den Versatz mit dem Wind klein gehalten hast
4. **Gleichmäßigkeit**: Wie stabil dein Kreisen war

Ein 5-m/s-Bart, in dem du herumgeirrt bist, kann schlechter abschneiden als ein 2,5-m/s-Bart, den du perfekt bearbeitet hast. Es geht um Technik, nicht nur um Glück.

**Bewertungsbereiche**:
- **25-40 (Exzellent)**: Du gibst richtig Gas. Kurbeln auf Wettkampfniveau.
- **15-25 (Gut)**: Solide Arbeit. Du hast die Höhe gemacht und nicht zu viel Zeit verschwendet.
- **0-15 (Mittel)**: Hat seinen Zweck erfüllt, aber da ist noch Luft nach oben.

## Typische Muster, die dir auffallen könnten

**Viel Versatz, schlechtes Zentrieren**: Vielleicht fliegst du zu weit ein oder ziehst deinen Kreis nicht schnell genug enger, wenn du Steigen findest.

**Gute Zentrierzeit, aber geringe Effizienz**: Der Bart selbst war vielleicht schwach oder zerrissen. Nicht immer deine Schuld!

**Starke Schwankungen**: Können an den Bedingungen liegen (ruppiger Tag) oder an einer ungleichmäßigen Schräglage. Prüf, wie gleichmäßig deine Drehrate ist.

**In einem Bart schnell im Kern, in einem anderen langsam**: Achte auf deine Einflugtechnik. Bist du gegen den Wind oder mit dem Wind eingeflogen? Über den Kern hinausgeschossen?

## Wann du dieses Tool nutzt

- **Debriefing nach dem Flug**: Versteh, was funktioniert hat und was nicht
- **Wettkampfvorbereitung**: Analysiere deine Kurbeltechnik unter Druck
- **Bedingungen vergleichen**: Sieh, wie sich die Thermikqualität mit Tageszeit, Ort oder Wetter verändert
- **Fortschritte verfolgen**: Analysiere Flüge aus verschiedenen Monaten, um zu sehen, wie du dich entwickelst
- **Vor dem nächsten Bier**: Zeig deinen Kumpels, dass du den 6-m/s-Bart *wirklich* zentriert hast (Beweis!)

## Tipps für eine bessere Analyse

1. **Saubere GPS-Daten helfen**: Schwaches GPS-Signal = ungenauere Analyse
2. **Vergleiche ähnliche Bärte**: Vergleiche Techniken unter ähnlichen Bedingungen, dann sind die Erkenntnisse aussagekräftig
3. **Verbeiß dich nicht in einen einzigen Flug**: Trends über mehrere Flüge zählen mehr als ein perfekter Bart
4. **Der Wind gehört zum Kontext**: Ein „Mittel“ bei 30 km/h Wind kann besser sein als ein „Exzellent“ in toter Luft

## Was dieses Tool nicht kann

- **Künftige Bärte vorhersagen**: Es ist Analyse, keine Vorhersage (daran arbeiten wir... kleiner Scherz)
- **Deine Lebensentscheidungen beurteilen**: Ob du den Bart um 11 Uhr hättest nehmen oder lieber weiterfliegen sollen? Das bleibt deine Entscheidung
- **Erfahrung ersetzen**: Das Tool zeigt Daten, aber Thermik *spüren* lernst du nur mit Stunden in der Luft

## Unterm Strich

Dieses Tool macht dich nicht über Nacht zu einem besseren Piloten, aber es zeigt dir *genau*, was du in der Thermik machst. Ob du Sekunden bei deiner Zentrierzeit rausholen willst oder einfach neugierig bist, warum sich dieser eine Bart anders angefühlt hat: Die erweiterte Thermikanalyse hält dir den Rücken frei.

Und jetzt geh fliegen, hol dir ein paar Bärte und komm zurück, um zu sehen, ob du so gut bist, wie du glaubst.

---

Siehe auch: [Einstellungen der erweiterten Thermikanalyse](advanced-thermal-analysis-settings.md)
