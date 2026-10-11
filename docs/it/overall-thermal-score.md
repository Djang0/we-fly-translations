---
title: Il punteggio complessivo delle termiche spiegato
description: Come calcoliamo la qualità di una termica, con un esempio svolto
category: Thermal Analysis
order: 4
---

Hai mai visto il punteggio di qualità di una termica nella scheda **Termiche** e ti sei chiesto se significa davvero qualcosa? Buone notizie: sì. Non è una sensazione a pelle. Vediamo esattamente come si calcola quel numero, così capisci cosa separa «Discreta» da «Ottima» e cosa puoi fare per migliorare.

## Il quadro generale

Il punteggio della termica (da 0 a 100) è una combinazione pesata di cinque fattori. Sono le stesse cinque righe che vedi nel **Dettaglio del punteggio** di una termica:

| Fattore | Peso | Cosa misura |
|--------|--------|------------------|
| **Salita** | 30% | Quanto era forte la salita al suo meglio? |
| **Efficienza** | 20% | Quanto è stata diretta la tua salita? |
| **Centratura** | 20% | Quanto sei rimasto nel nucleo? |
| **Regolarità** | 15% | Quanto erano stabili le letture del vario? |
| **Sostenuta** | 15% | Sei davvero rimasto a lavorare la termica? |

Ogni fattore viene normalizzato su una scala da 0 a 1, moltiplicato per il suo peso, e poi il tutto viene riportato su una scala da 0 a 100. Semplice in teoria, rivelatore in pratica.

Il fattore **Sostenuta** è fondamentale: impedisce alle visite brevi di ottenere punteggi alti. Prendere una salita forte per pochi giri non dimostra di saper girare in termica; restarci e lavorarla sì.

---

## La formula

Ecco il calcolo reale:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Le soglie all’interno della formula sono fisse in m/s e metri, qualunque siano le unità che visualizzi.

### Come si calcola ogni componente

**1. Punteggio di salita**
```
climbScore = min(1, maxClimb / 5.0)
```
La tua migliore salita sostenuta nella termica (il valore **Max** nei dettagli della termica, mediato su 5 secondi così che un singolo punto GPS rumoroso non possa barare) divisa per 5,0 m/s, con un tetto a 1. Solo il decimo migliore delle salite in We-Fly si avvicina al tetto; una salita media prende poco più della metà.

**2. Punteggio di efficienza**
```
efficiencyScore = min(1, heightGain / driftDistance)
```
La quota guadagnata divisa per la distanza orizzontale tra il punto in cui la termica è iniziata e quello in cui è finita. Guadagnare tanta quota quanta deriva hai fatto, o di più, vale il punteggio pieno di 1,0. Più il vento ti porta di lato, più questo valore scende.

**3. Punteggio di centratura**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Una vela non può girare sul posto, quindi girare esattamente al raggio del nucleo (o più stretto) vale un 1,0 perfetto. Ogni raggio di nucleo in più di distanza costa metà del punteggio: girare a due volte il raggio del nucleo vale 0,5, a tre volte vale zero. Prima si toglie la deriva del vento, confrontando ogni giro con il proprio centro locale.

**4. Punteggio di regolarità**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
L’inverso della variabilità del tuo vario (la deviazione standard del rateo di salita mediato). Termica regolare = punteggio alto. Rimbalzare tra salita forte e discendenza = punteggio basso. Una variabilità di 2 m/s o più = contributo nullo alla regolarità.

**5. Punteggio di salita sostenuta**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combina durata e numero di giri per premiare il vero lavoro in termica. Il punteggio pieno richiede circa 90 secondi E almeno 2 giri completi. Ogni termica dell’elenco ha già almeno due giri completi (vedi [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings)), quindi in pratica questo fattore penalizza soprattutto le salite brevi.

---

## Esempio svolto: termica n. 9

Facciamo un calcolo reale con numeri concreti. Mettiamo che tu abbia lavorato una termica con questi valori:

| Metrica | Valore |
|--------|-------|
| Salita max | 3,5 m/s |
| Efficienza | 0,41 (41%) |
| Centratura | 0,53 (53%) |
| Variabilità | 0,92 m/s |
| Durata | 75 secondi |
| Numero di giri | 3 giri |

### Passo 1: calcola il punteggio di ogni componente

**Punteggio di salita:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
La tua migliore salita sostenuta di 3,5 m/s è il 70% del riferimento di 5,0 m/s.

**Punteggio di efficienza:**
```
efficiencyScore = 0.41
```
Hai guadagnato il 41% della quota rispetto a quanto hai derivato di lato. Abbastanza tipico per una termica con deriva.

**Punteggio di centratura:**
```
centeringScore = 0.53
```
In media hai girato a poco meno di due volte il raggio del nucleo. C’è margine di miglioramento, ma non è male.

**Punteggio di regolarità:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Una variabilità del vario di 0,92 m/s vuol dire che la salita era un po’ turbolenta, ma niente di folle.

**Punteggio di salita sostenuta:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Hai passato 75 secondi e fatto 3 giri completi: un lavoro in termica solido, appena sotto la soglia dei 90 secondi.

### Passo 2: applica i pesi

Ora moltiplica ogni punteggio per il suo peso:

| Componente | Punteggio | Peso | Contributo |
|-----------|-------|--------|--------------|
| Salita | 0,70 | 0,30 | 0,210 |
| Efficienza | 0,41 | 0,20 | 0,082 |
| Centratura | 0,53 | 0,20 | 0,106 |
| Regolarità | 0,54 | 0,15 | 0,081 |
| Sostenuta | 0,833 | 0,15 | 0,125 |
| **Totale** | | | **0,604** |

### Passo 3: riporta su 0-100

```
qualityScore = round(0.604 * 100) = 60
```

**Risultato: un punteggio di 60**, appena dentro «Discreta». Giri più stretti alzerebbero sia l’efficienza sia la centratura, ed è lì che i punti si prendono facilmente.

---

## Come interpretare il punteggio

| Fascia di punteggio | Etichetta | Cosa significa |
|-------------|--------|---------------|
| **80 e oltre** | Eccezionale | Le salite migliori in We-Fly. Salita forte, lavorata come si deve. |
| **Da 73 a 79** | Ottima | Meglio di tre termiche su quattro. Hai trovato il nucleo in fretta e ci sei rimasto. |
| **Da 66 a 72** | Buona | Sopra la termica tipica. Lavoro solido. |
| **Da 60 a 65** | Discreta | Più o meno a metà del gruppo. Hai portato a casa il risultato, lasciando qualcosa sul tavolo. |
| **Sotto 60** | Scarsa | Fatica a trovare o a tenere il nucleo, una salita breve o condizioni davvero pessime. |

Le fasce sono calibrate su termiche reali volate dai piloti di We-Fly: la termica tipica (mediana) prende circa 65, un quarto delle termiche prende 73 o più e una su dieci arriva a 80.

---

## Cosa ti dice ogni componente

### Forza della salita (peso 30%)

È il fattore con il peso maggiore perché... beh, lo scopo è salire. Usa la tua migliore salita *sostenuta*, quindi premia chi trova la parte forte della termica, non chi si limita a restarci appeso. Ma non fissarti: a volte una termica debole lavorata alla perfezione vale più distanza di una forte da cui continui a cadere fuori.

**Punteggio di salita basso?**
- La termica era davvero debole (non è colpa tua)
- Non hai mai trovato la parte più forte del nucleo (controlla la centratura)
- Sei arrivato tardi alla festa e hai preso solo la parte alta

### Efficienza (peso 20%)

Efficienza = quota guadagnata / distanza di deriva orizzontale, con un tetto a 1,0. Una termica in cui guadagni almeno tanta quota quanta deriva fai vale il punteggio pieno di 1,0, cosa che richiede vento debole o una salita forte.

Valori tipici:
- **Da 0,3 a 0,4**: normale, un po’ di deriva
- **Da 0,5 a 0,6**: molto buono, giri stretti
- **Oltre 0,6**: ottimo, deriva minima

**Efficienza bassa?**
- Vento forte che ti spinge di lato
- Giri larghi o inclinazione troppo bassa
- Ingresso sottovento senza mai correggere

### Qualità della centratura (peso 20%)

Quanto vicino al nucleo hai girato. Girare al raggio stesso del nucleo è perfetto; il punteggio scende in linea retta man mano che la tua distanza media cresce, fino ad arrivare a zero a tre volte il raggio del nucleo.

**Centratura bassa?**
- Ci hai messo un po’ a trovare il nucleo
- Continuavi a uscire e a ricentrare
- Il nucleo si spostava (termica a bolle) o era molto piccolo

### Regolarità (peso 15%)

Si basa sulla deviazione standard delle letture del vario. Bip regolare e costante = punteggio alto. Vario impazzito = punteggio basso.

**Regolarità bassa?**
- Termica turbolenta (non sempre è colpa tua)
- Continuavi ad attraversare il nucleo e a uscire dall’altra parte
- Salita e discendenza mescolate nello stesso giro

### Abilità sostenuta (peso 15%)

Combina durata e numero di giri per dimostrare che hai davvero lavorato la termica invece di passarci attraverso. Questo fattore premia i piloti che si impegnano nella termica e la lavorano come si deve.

Il punteggio pieno richiede:
- **circa 90 secondi** di durata (le termiche più brevi prendono proporzionalmente meno)
- **almeno 2 giri completi** (con meno giri si prende proporzionalmente meno)

I due fattori si moltiplicano, quindi ti servono ENTRAMBI per andare bene qui. Una salita di 30 secondi con tre giri prende solo un terzo dei punti.

**Punteggio di salita sostenuta basso?**
- Hai lasciato la termica troppo presto
- La termica si è spenta prima che potessi lavorarla bene

---

## Come migliorare il punteggio

### Risultati rapidi

1. **Stringi appena trovi la salita**: non aspettare, inizia a girare appena il vario si sveglia
2. **Sposta il giro verso la salita**: tecnica di centratura classica, allarga sul lato debole, stringi sul lato forte
3. **Attenzione all’inclinazione**: troppo bassa vuol dire giri larghi e deriva, troppo alta è inefficiente nelle salite deboli

### Segui i tuoi progressi

Confronta le termiche di più voli nello stesso sito. Comincerai a vedere degli schemi:
- «Fatico sempre a centrare in questo decollo»
- «Le mie termiche del pomeriggio sono più regolari»
- «Quella vela nuova ha davvero migliorato la mia efficienza»

### Non inseguire il numero

Un 55 in una termica spezzata e secca può rappresentare un volo migliore di un 80 in una colonna larga e regolare. Il contesto conta. Usa il punteggio per seguire i tuoi progressi nel tempo, non per confrontarti con altri in giornate diverse.

---

## Dietro le quinte: perché questi pesi?

I pesi (30/20/20/15/15) non sono stati tirati fuori dal cappello. Si basano su ciò che conta davvero per girare bene in termica:

- **La forza della salita è in testa** (30%) perché l’obiettivo principale è salire. Una termica debole lavorata alla perfezione resta una termica debole.

- **Efficienza e centratura si dividono il peso della tecnica** (20% ciascuna) perché riguardano entrambe l’abilità. Puoi avere l’una senza l’altra (buona centratura ma deriva, o giri stretti nel posto sbagliato).

- **La regolarità è un correttivo** (15%) perché un po’ di turbolenza sfugge al tuo controllo. Influisce sul punteggio, ma non lo domina.

- **L’abilità sostenuta filtra i colpi di fortuna** (15%) perché qualche giro in una salita forte non equivale a lavorare una termica. Questo fattore fa sì che i punteggi alti vadano ai piloti che si sono davvero impegnati nella salita.

---

## Scenari di esempio

### Il fortunato giro in ascensore

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 5,6 m/s | 1,0 (al tetto) |
| Efficienza | 0,65 | 0,65 |
| Centratura | 0,78 | 0,78 |
| Regolarità | 0,38 m/s | 0,81 |
| Durata / giri | 120 s / 4 giri | 1,0 |

**Contributi:** 0,30 + 0,13 + 0,156 + 0,121 + 0,15 = **0,858**
**Punteggio:** 86 (Eccezionale)

Hai preso una termica mostruosa, sei rimasto nel nucleo e l’hai cavalcata per due minuti buoni. Lo scenario dei sogni.

### Il colpo veloce (penalizzato)

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 4,8 m/s | 0,96 |
| Efficienza | 0,72 | 0,72 |
| Centratura | 0,85 | 0,85 |
| Regolarità | 0,45 m/s | 0,78 |
| Durata / giri | 25 s / 2 giri | 0,28 |

**Contributi:** 0,288 + 0,144 + 0,17 + 0,116 + 0,042 = **0,760**
**Punteggio:** 76 (Ottima)

Salita forte, centratura ottima, ma sei rimasto solo per due giri. Se l’avessi lavorata per 90 secondi con la stessa tecnica, il fattore sostenuta avrebbe aggiunto i punti mancanti e il punteggio sarebbe stato 87.

### La salita sudata

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 2,6 m/s | 0,52 |
| Efficienza | 0,38 | 0,38 |
| Centratura | 0,45 | 0,45 |
| Regolarità | 1,4 m/s | 0,30 |
| Durata / giri | 180 s / 6 giri | 1,0 |

**Contributi:** 0,156 + 0,076 + 0,09 + 0,045 + 0,15 = **0,517**
**Punteggio:** 52 (Scarsa)

Termica debole, nucleo spezzato, tanta ricerca. L’etichetta è dura, ma descrive la termica più che te: ci sei rimasto per 3 minuti e 6 giri, e il fattore sostenuta ti ha dato tutti i suoi punti. In una giornata così, la salita che ti ha tenuto in aria era la scelta giusta.

### Lo specialista del nucleo

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 3,4 m/s | 0,68 |
| Efficienza | 0,52 | 0,52 |
| Centratura | 0,85 | 0,85 |
| Regolarità | 0,65 m/s | 0,68 |
| Durata / giri | 95 s / 3 giri | 1,0 |

**Contributi:** 0,204 + 0,104 + 0,17 + 0,101 + 0,15 = **0,729**
**Punteggio:** 73 (Ottima)

Termica moderata, ma hai centrato alla perfezione e l’hai lavorata come si deve. La tecnica batte la potenza.

---

## In sintesi

Il punteggio della termica non serve a giudicarti, serve a darti un riscontro. Un riassunto numerico di «cosa è successo là dentro», così puoi imparare da ogni termica invece di ricordarti solo «quella era buona».

Usalo per:
- Individuare degli schemi nel tuo modo di volare
- Seguire i tuoi progressi nel tempo
- Identificare punti deboli precisi su cui lavorare
- Vantarti con gli amici, dati alla mano

E ricorda: anche una termica «Discreta» che ti ha portato alla salita successiva vale più di una «Ottima» che non hai preso perché aspettavi qualcosa di meglio.

Ora vai a volare!

---

Vedi anche: [Analisi avanzata delle termiche](/doc/advanced-thermal-analysis) | [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings)
