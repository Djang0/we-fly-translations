---
title: Z-Score-Guide für Piloten
description: Die Geheimzutat, um Ausreißer zu erkennen
category: Cockpit
order: 3
---

*Oder: Wie du mathematisch beweist, dass sich die Fahrt zu deinem Lieblingsstartplatz wirklich lohnt*

## Was zum Teufel ist eigentlich ein Z-Score?

Du kennst doch den Kumpel, der ständig mit seinen „epischen“ Fluggebieten angibt, und du bist dir ziemlich sicher, dass er nur heiße Luft verbreitet? Z-Scores sind der mathematische Schwachsinnsdetektor, auf den du gewartet hast.

**Die Kurzfassung:** Ein Z-Score sagt dir, wie ungewöhnlich ein Datenpunkt im Vergleich zum Rest deiner Daten ist. Er fragt im Grunde: „Ist dieses Fluggebiet wirklich besonders, oder erinnere ich mich nur an den einen guten Tag?“

**Die Formel (nicht weglaufen):**

```
Z-Score = (Your Value - Average) / Standard Deviation
```

**Übersetzt für Piloten:** Wie viele „Standardabweichungen“ liegt das Ding vom Durchschnitt entfernt?

---

## Schritt für Schritt (weil nicht alle von uns Mathe-Nerds sind)

### Die Ausgangslage

Stell dir vor, du bist in der Saison von 10 verschiedenen Startplätzen geflogen. Du willst wissen, welche davon **wirklich** deine Stammplätze sind und welche du nur einmal an einem epischen Tag erwischt hast.

Hier sind deine Daten (mittlere Flugdauer pro Startplatz):

| Startplatz | Ø Dauer (Stunden) |
|------|---------------------|
| Annecy | 2,5 |
| Chamonix | 3,8 |
| Verbier | 2,2 |
| Bassano | 5,0 | ← Hm, interessant
| Kössen | 2,4 |
| Interlaken | 2,6 |
| Pokhara | 1,8 |
| Saint-Hilaire | 2,7 |
| Bir | 2,3 |
| Ölüdeniz | 2,4 |

**Mittelwert über alle Startplätze:** 2,77 Stunden
**Standardabweichung:** 0,91 Stunden

### Die Rechnung

Berechnen wir den Z-Score für **Bassano** (denn 5,0 Stunden sind verdächtig gut):

```
Z-Score = (5.0 - 2.77) / 0.91
Z-Score = 2.23 / 0.91
Z-Score = 2.45
```

**Was bedeutet 2,45?**
- Die mittlere Flugdauer in Bassano liegt 2,45 Standardabweichungen **über** dem Mittelwert
- Im Cockpit taucht das als dein **Leistungswert** auf
- Das ist statistisch signifikant (|z| > 2 = Ausreißergebiet)
- Übersetzung: Bassano ist nicht nur gut, es ist **wirklich außergewöhnlich**

Jetzt schauen wir uns **Pokhara** an (1,8 Stunden, fühlt sich kurz an):

```
Z-Score = (1.8 - 2.77) / 0.91
Z-Score = -0.97 / 0.91
Z-Score = -1.07
```

**Was bedeutet -1,07?**
- Pokhara liegt etwa 1 Standardabweichung **unter** dem Durchschnitt
- Nicht schlimm, aber auch nicht toll
- Vielleicht hattest du dort schlechte Tage, vielleicht ist es einfach ein Abgleiter-Gebiet

---

## Der Z-Score-Decoder

So interpretierst du deine Z-Scores:

| Z-Score-Bereich | Was er bedeutet | Übersetzt für Piloten |
|---------------|---------------|-------------------|
| **z > +2,0** | Extremer Ausreißer (positiv) | 🌟 **Dieses Gebiet geht ABSOLUT ab**: die 3 Stunden Fahrt wert |
| **+1,0 bis +2,0** | Über dem Durchschnitt | 👍 Solides Gebiet, hier machst du meistens was |
| **-1,0 bis +1,0** | Ziemlich durchschnittlich | 🤷 Naja. Die Bedingungen zählen mehr als das Gebiet |
| **-2,0 bis -1,0** | Unter dem Durchschnitt | 👎 Hier säufst du wahrscheinlich oft ab |
| **z < -2,0** | Extremer Ausreißer (negativ) | 💀 **Meiden, außer du landest gern gleich am Landeplatz** |

---

## Warum Z-Scores wichtig sind (aus Pilotensicht)

### Problem 1: Die „Weißt du noch damals?“-Falle

Du: „Alter, ich LIEBE es, von [irgendeinem Startplatz] zu fliegen. Der ist der Hammer!“
Dein Gehirn: *Erinnert sich an den EINEN epischen 6-Stunden-Streckenflug vor 3 Jahren und vergisst bequemerweise die 15 Abgleiter*

**Die Z-Score-Lösung:** Ist der Z-Score des Gebiets negativ oder nahe null, lügt dich dein Gehirn an. Die Daten lügen nicht: Meistens säufst du dort ab.

### Problem 2: Tricksereien mit der Stichprobengröße

Du bist Bassano einmal geflogen (5 Stunden, episch) und deinen Hausberg 47 Mal (im Schnitt 2,1 Stunden).

Was ist besser? Ohne Kontext schwer zu sagen, oder?

**Die Z-Score-Lösung:** Der Z-Score berücksichtigt den **ganzen Datensatz**, so kannst du Äpfel mit Birnen vergleichen. Er fragt: „Wie schlägt sich dieses Gebiet im Vergleich zu ALLEN meinen Gebieten?“

### Problem 3: Die Rechtfertigungsstelle

Du willst die 4 Stunden Fahrt vor deinem Partner, deinem Chef oder deiner „Ich bin heute im Homeoffice“-Ausrede rechtfertigen.

**Die Z-Score-Lösung:** Druck deine Cockpit-Statistik mit einem Z-Score von +2,8 für dieses Gebiet aus. „Siehst du, Schatz, das ist nicht nur Spaß, das ist STATISTISCH SIGNIFIKANTER Spaß. Das ist Wissenschaft.“

---

## Wie wir Z-Scores in We-Fly nutzen

### Im Cockpit-Dashboard

Wenn du dir deine Statistik nach **Startplätzen** anschaust, siehst du für jeden Startplatz einen **Leistungswert**. Das ist der Z-Score, und er wird aus deiner **mittleren Flugdauer pro Startplatz** berechnet (dem Verhältnis von Gesamtstunden zur Anzahl der Flüge).

```typescript
// From src/lib/utils.ts
export function computeZScore(dataSerie: chartData[]) {
  // For each takeoff site
  for (let indexx = 0; indexx < dataSerie.length; indexx++) {
    // Calculate the average ratio (avg hours per flight) across all sites
    let avg_ratio = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      avg_ratio += dataSerie[index].ratio;
    }
    avg_ratio = avg_ratio / dataSerie.length;

    // Calculate the standard deviation
    let sum_deviations = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      sum_deviations += Math.pow(dataSerie[index].ratio - avg_ratio, 2);
    }
    let deviation = Math.sqrt(sum_deviations / dataSerie.length);

    // Calculate z-score: (this site's ratio - average) / std deviation
    dataSerie[indexx].z = deviation === 0
      ? 0
      : (dataSerie[indexx].ratio - avg_ratio) / deviation;
  }
}
```

### Was wir tatsächlich messen

- **Wert:** Mittlere Stunden pro Flug für jeden Startplatz
- **Mittelwert:** Deine gesamte mittlere Flugdauer über alle Startplätze
- **Standardabweichung:** Wie stark deine Flugzeiten streuen
- **Z-Score:** Wie außergewöhnlich (oder furchtbar) jeder Startplatz ist

### Ausreißer erkennen

In den Code-Kommentaren steht: „Werte mit |z| > 2 gelten als statistische Ausreißer.“

Das heißt:
- **z > +2**: Dieses Gebiet ist ein Ausreißer im GUTEN Sinn (du bleibst viel länger oben als im Schnitt)
- **z < -2**: Dieses Gebiet ist ein Ausreißer im SCHLECHTEN Sinn (du landest viel früher als im Schnitt)

### Ein echtes Beispiel aus deinem Cockpit

Angenommen, du schaust unter „Startplätze“ nach und siehst:

| Startplatz | Stunden gesamt | Flüge | Ø/Flug | **Leistungswert** |
|--------------|-------------|---------|------------|-----------------------|
| Mont Blanc | 45,5 h | 8 | 5,69 h | **+2,84** 🌟 |
| Hausberg | 67,2 h | 42 | 1,60 h | **-0,52** 😐 |
| Das eine Mal | 3,2 h | 1 | 3,20 h | **+0,41** 🤷 |

**Was dir das sagt:**
1. **Mont Blanc (z = +2,84):** Heiliger Bimbam, dieses Gebiet ist ein statistisches Einhorn. Jedes Mal, wenn du hier fliegst, ist dir ein langer Flug fast sicher. Buch JETZT die Ferienwohnung.

2. **Hausberg (z = -0,52):** Leicht unter dem Durchschnitt, aber nicht schlimm. Er ist praktisch, und du sammelst Stunden. Nutz ihn weiter zum Üben, aber erwarte keine Epen.

3. **Das eine Mal (z = +0,41):** Etwas über dem Durchschnitt, aber du bist dort nur einmal geflogen. Kann Glück gewesen sein. Du brauchst mehr Daten, um zu wissen, ob es wirklich gut ist.

---

## Das Kleingedruckte (Sonderfälle und Stolperfallen)

### Wann Z-Scores versagen

**1. Kleine Stichproben**
- Einmal 6 Stunden an einem Gebiet geflogen? Der Z-Score ist vielleicht +3,0, aber das ist nur Glück
- **Lösung:** Schau auf die Anzahl der Flüge. Ist sie niedrig (< 5 Flüge), nimm den Z-Score mit Vorsicht

**2. Alle Werte sind gleich**
- Liegt jedes Gebiet bei genau 2,5 Stunden im Schnitt, ist die Standardabweichung null
- Durch null kann man nicht teilen, also ist der Z-Score überall 0
- **Lösung:** Der Code fängt das ab: `deviation === 0 ? 0 : (value - avg) / deviation`

**3. Saisonale Verzerrung**
- Gebiet A fliegst du nur im Sommer, Gebiet B nur im Winter
- Die Z-Scores spiegeln dann vielleicht eher die **Saison** als die **Qualität des Gebiets**
- **Lösung:** Nutze Filter! Filtere nach Saison oder Zeitraum, damit du Gleiches mit Gleichem vergleichst

**4. Unterschiedliche Flugstile**
- Gebiet A ist super für Streckenflug (lange Flüge)
- Gebiet B ist perfekt für Acro (kurze Flüge)
- Der Z-Score bevorzugt Gebiet A, aber deshalb ist Gebiet B nicht „schlecht“
- **Lösung:** Filtere nach Flugart, falls diese Daten vorhanden sind

---

## Z-Scores in anderen Zusammenhängen (wir sind noch nicht fertig)

### Nach Schirm

Mit welchem Schirm fliegst du am längsten?

- **Schirm A:** z = +1,8 → Über dem Durchschnitt, wahrscheinlich ein guter Streckenschirm
- **Schirm B:** z = -0,3 → Leicht unter dem Durchschnitt, vielleicht dein alter Trainingslappen

### Nach Monat

Wann solltest du deinen Urlaub buchen?

- **Juli:** z = +2,1 → Durchgehend epischer Monat, nimm dir frei
- **November:** z = -1,5 → Mieser Monat, bleib daheim und flick deine Ausrüstung

### Nach Land

Welches Flugziel ist das Flugticket wert?

- **Frankreich:** z = +1,2 → Flugzeiten über dem Durchschnitt
- **Diese eine Insel:** z = -2,0 → Wunderschön, aber du fliegst kaum

---

## Entscheidungen im echten Leben

### Szenario 1: Die Roadtrip-Debatte

Dein Kumpel will 5 Stunden zu einem neuen Gebiet fahren. Du schaust in dein Cockpit:

- **Neues Gebiet:** 1 Flug, Ø 4,5 h, z = +1,5 (aber nur 1 Flug!)
- **Gebiet in der Nähe:** 23 Flüge, Ø 3,2 h, z = +1,8

**Entscheidung:** Das Gebiet in der Nähe hat einen höheren Z-Score UND mehr Daten. Für einen guten Tag ist es die sicherere Wahl. Heb dir die 5 Stunden Fahrt auf, bis du mehr Daten zum neuen Gebiet hast.

### Szenario 2: Schirmkauf

Du schwankst anhand deiner geloggten Flüge zwischen zwei Schirmen:

- **Aktueller Schirm:** 89 Flüge, Ø 2,1 h, z = -0,4 (leicht unter deinem Durchschnitt)
- **Schirm vom Kumpel (zweimal ausgeliehen):** 2 Flüge, Ø 3,5 h, z = +1,2

**Entscheidung:** Kauf den Schirm deines Kumpels nicht wegen 2 Flügen. Der Z-Score sieht gut aus, aber die Stichprobe ist zu klein. Kann Glück gewesen sein, oder dein Kumpel ist einfach der bessere Pilot.

### Szenario 3: Beweisen, dass du nicht verrückt bist

Dein Partner: „Du fährst jedes Wochenende 2 Stunden zu diesem Gebiet. Lohnt sich das überhaupt?“

Du: „Schau mal. Z-Score von +2,3. Ich fliege dort im Schnitt 4,2 Stunden, am Hausberg 2,1. Das ist statistisch signifikant. Ich fliege DOPPELT so lange für 2 Stunden Fahrt. Die Rechnung geht auf.“

**Ergebnis:** Dein Partner hält dich immer noch für verrückt, aber immerhin hast du jetzt DATEN.

---

## Unterm Strich (Kurzfassung für ungeduldige Piloten)

**Was ist ein Z-Score?**
Ein Maß dafür, wie ungewöhnlich ein Wert im Vergleich zu deinem Durchschnitt ist. Er wird über die Standardabweichung normiert, damit du verschiedene Dinge vergleichen kannst.

**Warum nutzen wir ihn?**
Um herauszufinden, welche Startplätze (oder Schirme, Monate, Länder) **wirklich außergewöhnlich** sind und welche nur einmal Glück hatten.

**Wie lese ich ihn?**
- **Positiver Z-Score:** Über dem Durchschnitt (gut!)
- **Negativer Z-Score:** Unter dem Durchschnitt (naja)
- **|z| > 2:** Statistischer Ausreißer (extrem!)
- **|z| < 1:** Ziemlich normal (Durchschnitt)

**Wo sehe ich ihn?**
In deinem **Cockpit-Dashboard**, als „Leistungswert“ für Startplätze, Schirme, Monate und so weiter.

**Was mache ich damit?**
Triff damit klügere Entscheidungen, wo du fliegst, welche Ausrüstung du nimmst und wann du Reisen planst. Der Z-Score ist dein datengestützter Flügelmann.

---

## Anhang: Die Mathematik (für die Nerds in der letzten Reihe)

### Vollständiges Rechenbeispiel

Datensatz: mittlere Flugstunden pro Gebiet

```
Sites: [2.5, 3.8, 2.2, 5.0, 2.4, 2.6, 1.8, 2.7, 2.3, 2.4]
```

**Schritt 1: Mittelwert berechnen**
```
Mean = (2.5 + 3.8 + 2.2 + 5.0 + 2.4 + 2.6 + 1.8 + 2.7 + 2.3 + 2.4) / 10
Mean = 27.7 / 10 = 2.77 hours
```

**Schritt 2: Standardabweichung berechnen**
```
Std Dev = √( Σ(x - mean)² / N )

For each value, compute (x - mean)²:
(2.5 - 2.77)² = 0.073
(3.8 - 2.77)² = 1.061
(2.2 - 2.77)² = 0.325
(5.0 - 2.77)² = 4.973  ← Bassano
(2.4 - 2.77)² = 0.137
(2.6 - 2.77)² = 0.029
(1.8 - 2.77)² = 0.941
(2.7 - 2.77)² = 0.005
(2.3 - 2.77)² = 0.221
(2.4 - 2.77)² = 0.137

Sum = 7.902
Std Dev = √(7.902 / 10) = √0.790 = 0.889 hours
```

**Schritt 3: Z-Scores berechnen**
```
Z(Bassano) = (5.0 - 2.77) / 0.889 = +2.51 🌟
Z(Pokhara) = (1.8 - 2.77) / 0.889 = -1.09 👎
Z(Annecy) = (2.5 - 2.77) / 0.889 = -0.30 🤷
```

---

## Noch eins: Z-Scores lügen nicht, aber der Kontext zählt

Ein Z-Score sagt dir, **was ungewöhnlich ist**, nicht **warum es ungewöhnlich ist**.

- Gebiet mit hohem Z-Score? Können tolle Bedingungen sein, oder du fliegst es nur an perfekten Tagen
- Monat mit niedrigem Z-Score? Kann schlechtes Wetter sein, oder du warst in dem Monat verletzt
- Schirm mit hohem Z-Score? Kann der bessere Schirm sein, oder du fühlst dich darauf einfach sicherer

**Schau immer auf:**
1. Die Stichprobengröße (mehr Flüge = verlässlicherer Z-Score)
2. Den Kontext (Filter, Zeiträume, Flugarten)
3. Deine eigene Erinnerung (FÜHLT sich das richtig an?)

Z-Scores sind ein Werkzeug, nicht die Wahrheit. Aber ein verdammt gutes Werkzeug, um den Schwachsinn wegzuschneiden und das Signal im Rauschen zu finden.

Und jetzt raus und fliegen! Und wenn deine Freunde fragen, warum du 3 Stunden zu diesem einen Gebiet fährst, kannst du selbstbewusst sagen: „Weil der Z-Score +2,6 ist, Alter. WISSENSCHAFT.“

---

*„Der Statistik vertrauen wir, doch kurbeln müssen wir selbst.“*
*- Jeder Datennerd unter den Piloten*
