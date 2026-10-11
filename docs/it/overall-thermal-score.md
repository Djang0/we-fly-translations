---
title: Il punteggio complessivo delle termiche spiegato
description: Come calcoliamo la qualità di una termica, con un esempio svolto
category: Thermal Analysis
order: 4
---

Hai mai visto quel punteggio di qualità nell’analisi avanzata delle termiche e ti sei chiesto se significa davvero qualcosa? Buone notizie: sì. Non è una sensazione a pelle. Vediamo esattamente come si calcola quel numero, così capisci cosa separa «Discreta» da «Ottima» e cosa puoi fare per migliorare.

## Il quadro generale

Il punteggio complessivo della termica (0-100) è una combinazione pesata di cinque fattori:

| Fattore | Peso | Cosa misura |
|--------|--------|------------------|
| **Rateo di salita** | 30% | Quanto era forte l’ascendenza? |
| **Efficienza** | 20% | Quanto è stata diretta la tua salita? |
| **Qualità della centratura** | 20% | Quanto sei rimasto nel nucleo? |
| **Regolarità** | 15% | Quanto erano stabili le letture del vario? |
| **Abilità sostenuta** | 15% | Hai davvero lavorato la termica? |

Ogni fattore viene normalizzato su una scala 0-1, moltiplicato per il suo peso, e poi il tutto viene riportato su 0-100. Semplice in teoria, rivelatore in pratica.

Il fattore **Abilità sostenuta** è fondamentale: impedisce punteggi alti per i semplici passaggi in ascendenza. Attraversare un’ascendenza forte per 15 secondi non dimostra di saper girare in termica; girare e lavorare davvero la termica sì.

---

## La formula

Ecco il calcolo reale, preso dal codice:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

### Come si calcola ogni componente

**1. Punteggio di salita**
```
climbScore = min(1, climbrate / 3.0)
```
Il tuo rateo di salita medio diviso per 3,0 m/s (con un massimo di 1). Quindi 3 m/s o più = punteggio pieno. Meno = proporzionalmente meno.

**2. Punteggio di efficienza**
```
efficiencyScore = heightGain / horizontalDistance
```
È già un valore tra 0 e 1. Efficienza perfetta (salire dritto verso l’alto) = 1,0. Più derivi in orizzontale, più scende.

**3. Punteggio di centratura**
```
centeringScore = centeringQuality
```
Viene dall’algoritmo di analisi del nucleo: quanto tempo hai passato vicino al punto migliore della termica. È già tra 0 e 1.

**4. Punteggio di regolarità**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
L’inverso della variabilità del vario (deviazione standard delle letture di salita). Termica morbida = punteggio alto. Rimbalzare tra +5 e -2 m/s = punteggio basso. Una variabilità di 2 m/s o più = contributo nullo alla regolarità.

**5. Punteggio sostenuto**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combina durata e numero di giri per premiare il vero lavoro in termica. Il punteggio pieno richiede ~90 secondi E almeno 2 giri completi. Un passaggio di 15 secondi con 0 giri qui vale quasi zero, anche se le altre metriche sembrano ottime.

---

## Esempio svolto: termica n. 9

Facciamo un calcolo reale con numeri concreti. Mettiamo che tu abbia lavorato una termica con questi dati:

| Metrica | Valore |
|--------|-------|
| Rateo di salita | 2,15 m/s |
| Efficienza | 0,41 (41%) |
| Qualità della centratura | 0,53 (53%) |
| Variabilità | 0,92 m/s |
| Durata | 75 secondi |
| Numero di giri | 3 giri |

### Passo 1: calcola il punteggio di ogni componente

**Punteggio di salita:**
```
climbScore = min(1, 2.15 / 3.0)
climbScore = min(1, 0.717)
climbScore = 0.717
```
Il tuo rateo di 2,15 m/s è il 71,7% del riferimento «perfetto» di 3,0 m/s.

**Punteggio di efficienza:**
```
efficiencyScore = 0.41
```
Già normalizzato. Hai guadagnato in verticale il 41% della distanza percorsa in orizzontale. Abbastanza tipico per una termica che deriva.

**Punteggio di centratura:**
```
centeringScore = 0.53
```
Hai passato circa metà del tempo in un’ascendenza decente. C’è margine, ma non è male.

**Punteggio di regolarità:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Una variabilità del vario di 0,92 m/s significa che l’ascendenza era un po’ turbolenta, ma niente di folle.

**Punteggio sostenuto:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Hai passato 75 secondi e fatto 3 giri completi: un solido lavoro in termica.

### Passo 2: applica i pesi

Ora moltiplica ogni punteggio per il suo peso:

| Componente | Punteggio | Peso | Contributo |
|-----------|-------|--------|--------------|
| Salita | 0,717 | 0,30 | 0,215 |
| Efficienza | 0,41 | 0,20 | 0,082 |
| Centratura | 0,53 | 0,20 | 0,106 |
| Regolarità | 0,54 | 0,15 | 0,081 |
| Sostenuta | 0,833 | 0,15 | 0,125 |
| **Totale** | | | **0,609** |

### Passo 3: riporta su 0-100

```
qualityScore = round(0.609 * 100) = 61
```

**Risultato: punteggio complessivo di 61**, ben dentro la fascia «Buona».

---

## Come interpretare il punteggio

| Fascia di punteggio | Valutazione | Cosa significa |
|-------------|--------|---------------|
| **70-100** | Ottima | Termica da gara. Hai trovato il nucleo in fretta e ci sei rimasto. |
| **50-69** | Buona | Lavoro solido. Hai preso quota senza perdere troppo tempo. |
| **25-49** | Discreta | Hai fatto il necessario, ma hai lasciato per strada un po’ di prestazione. |
| **0-24** | Scarsa | Hai faticato a trovare o tenere il nucleo, oppure le condizioni erano davvero pessime. |

---

## Cosa ti dice ogni componente

### Rateo di salita (peso 30%)

È quello che pesa di più perché... beh, lo scopo è salire. Ma non fissartici: a volte una termica da 1,5 m/s lavorata alla perfezione vale più chilometri di cross di una da 4,0 m/s da cui continui a cadere fuori.

**Punteggio di salita basso?**
- La termica era davvero debole (non è colpa tua)
- Hai passato troppo tempo sui bordi (controlla la centratura)
- Sei arrivato tardi alla festa e hai preso solo la parte alta

### Efficienza (peso 20%)

Efficienza = quota guadagnata / distanza orizzontale percorsa. Un’elica perfetta che sale dritta varrebbe 1,0 (e sarebbe anche impossibile con un qualsiasi vento reale).

Valori tipici:
- **0,3-0,4**: normale, un po’ di deriva
- **0,5-0,6**: molto buono, giri stretti
- **0,6+**: ottimo, deriva minima

**Efficienza bassa?**
- Vento forte che ti spinge di lato
- Giri larghi o inclinazione insufficiente
- Entrata sottovento senza mai correggere

### Qualità della centratura (peso 20%)

Quanto tempo hai passato nella parte buona invece di girovagare sui bordi. Si calcola con un decadimento esponenziale della distanza dal nucleo: più ti allontani dal centro, più in fretta scende il punteggio.

**Centratura bassa?**
- Ci hai messo un po’ a trovare il nucleo
- Continuavi a uscire e a ricentrare
- Il nucleo si spostava (termica a bolle) o era molto piccolo

### Regolarità (peso 15%)

Si basa sulla deviazione standard delle letture del vario. Bip morbido e costante = punteggio alto. Vario impazzito = punteggio basso.

**Regolarità bassa?**
- Termica turbolenta (non sempre è colpa tua)
- Continuavi ad attraversare il nucleo e uscire dall’altra parte
- Ascendenza e discendenza mescolate nello stesso giro

### Abilità sostenuta (peso 15%)

Combina durata e numero di giri per dimostrare che hai davvero lavorato la termica e non ci sei solo passato attraverso. Attraversare 4 m/s di ascendenza per 10 secondi non è girare in termica: è fortuna. Questo fattore premia i piloti che si impegnano nella termica e la lavorano come si deve.

Il punteggio pieno richiede:
- **~90 secondi** di durata (le termiche più brevi valgono proporzionalmente meno)
- **almeno 2 giri completi** (meno giri valgono proporzionalmente meno)

I due fattori si moltiplicano, quindi servono ENTRAMBI per fare punti qui. Una planata rettilinea di 2 minuti in ascendenza (0 giri) vale zero. Un solo 360 veloce in ascendenza debole (10 secondi) vale anche lui quasi zero.

**Punteggio sostenuto basso?**
- Hai lasciato la termica troppo presto
- Non ti sei impegnato a girare (semplice passaggio)
- La termica è morta prima che potessi lavorarla bene

---

## Come migliorare il punteggio

### Risultati rapidi

1. **Stringi appena trovi l’ascendenza**: non aspettare, inizia a girare appena il vario si impenna
2. **Sposta il giro verso l’ascendenza**: tecnica classica di centratura, allarga in uscita e stringi in entrata
3. **Occhio all’inclinazione**: troppo piatta = giri larghi = deriva. Troppo ripida = poco efficiente in ascendenza debole

### Segui i tuoi progressi

Apri la stessa termica nello strumento di analisi dopo diversi voli dallo stesso sito. Inizierai a vedere degli schemi:
- «Faccio sempre fatica a centrare su questo decollo»
- «Le mie termiche del pomeriggio sono più regolari»
- «La vela nuova ha davvero migliorato la mia efficienza»

### Non inseguire il numero

Un 45 in una termica spezzata e cattiva può valere più pilotaggio di un 70 in una colonna larga e morbida. Il contesto conta. Usa il punteggio per seguire i tuoi progressi nel tempo, non per confrontarti con gli altri in giornate diverse.

---

## Dietro le quinte: perché questi pesi?

I pesi (30/20/20/15/15) non sono tirati a caso. Si basano su ciò che conta davvero per girare in termica in modo efficace:

- **Il rateo di salita è in testa** (30%) perché l’obiettivo principale è salire. Una termica debole lavorata alla perfezione resta una termica debole.

- **Efficienza e centratura si dividono il peso della tecnica** (20% ciascuna) perché riguardano entrambe l’abilità. Puoi avere l’una senza l’altra (buona centratura ma deriva, o giri stretti nel posto sbagliato).

- **La regolarità è un correttivo** (15%) perché una parte della turbolenza non dipende da te. Influisce sul punteggio, ma non lo domina.

- **L’abilità sostenuta filtra i colpi di fortuna** (15%) perché attraversare per poco un’ascendenza forte non è girare in termica: è fortuna. Questo fattore fa sì che i punteggi alti vadano ai piloti che si sono davvero impegnati a lavorare la termica.

---

## Scenari di esempio

### Il fortunato giro in ascensore

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Rateo di salita | 4,2 m/s | 1,0 (al massimo) |
| Efficienza | 0,65 | 0,65 |
| Centratura | 0,78 | 0,78 |
| Regolarità | 0,38 m/s | 0,81 |
| Durata / giri | 120 s / 4 giri | 1,0 |

**Contributi:** 0,30 + 0,13 + 0,156 + 0,122 + 0,15 = **0,86**
**Punteggio:** 86 (Ottima)

Hai preso una termica mostruosa, sei rimasto nel nucleo e l’hai cavalcata per due minuti buoni. Lo scenario dei sogni.

### Il semplice passaggio (penalizzato)

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Rateo di salita | 3,5 m/s | 1,0 (al massimo) |
| Efficienza | 0,72 | 0,72 |
| Centratura | 0,85 | 0,85 |
| Regolarità | 0,45 m/s | 0,78 |
| Durata / giri | 18 s / 0 giri | 0,0 |

**Contributi:** 0,30 + 0,144 + 0,17 + 0,117 + 0,0 = **0,73**
**Punteggio:** 73 (Ottima... ma per un pelo)

Ascendenza forte, ottime letture del vario, ma sei passato dritto senza impegnarti a girare. Il punteggio sostenuto a zero lo abbassa parecchio. Con il vecchio sistema di punteggio sarebbe stato 85 o più.

### La salita sudata

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Rateo di salita | 1,8 m/s | 0,60 |
| Efficienza | 0,38 | 0,38 |
| Centratura | 0,45 | 0,45 |
| Regolarità | 1,4 m/s | 0,30 |
| Durata / giri | 180 s / 6 giri | 1,0 |

**Contributi:** 0,18 + 0,076 + 0,09 + 0,045 + 0,15 = **0,54**
**Punteggio:** 54 (Buona)

Termica debole, nucleo spezzato, tanta ricerca. Ma ci sei rimasto 3 minuti e hai fatto 6 giri. La tenacia viene premiata.

### Lo specialista del nucleo

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Rateo di salita | 2,4 m/s | 0,80 |
| Efficienza | 0,52 | 0,52 |
| Centratura | 0,85 | 0,85 |
| Regolarità | 0,65 m/s | 0,68 |
| Durata / giri | 95 s / 3 giri | 1,0 |

**Contributi:** 0,24 + 0,104 + 0,17 + 0,102 + 0,15 = **0,77**
**Punteggio:** 77 (Ottima)

Termica media, ma hai centrato alla perfezione e l’hai lavorata come si deve. La tecnica batte la potenza.

---

## In sintesi

Il punteggio complessivo della termica non serve a giudicarti, serve a darti un riscontro. Un riassunto in numeri di «cosa è successo là dentro», così puoi imparare da ogni termica invece di ricordare solo «quella era buona».

Usalo per:
- Riconoscere degli schemi nel tuo modo di volare
- Seguire i miglioramenti nel tempo
- Individuare punti deboli precisi su cui lavorare
- Vantarti con gli amici con dati veri

E ricorda: anche una termica «Discreta» che ti ha portato alla salita successiva vale più di una «Ottima» che non hai preso perché aspettavi qualcosa di meglio.

Adesso vai a volare!

---

Vedi anche: [Analisi avanzata delle termiche](advanced-thermal-analysis.md) | [Impostazioni dell’analisi](advanced-thermal-analysis-settings.md)
