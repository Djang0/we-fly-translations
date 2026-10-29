---
title: Il punteggio complessivo della termica
description: Come calcoliamo la qualità di una termica, con un esempio svolto
category: Thermal Analysis
order: 4
---

Hai mai visto il punteggio di qualità di una termica nella scheda **Termiche** e ti sei chiesto se significa davvero qualcosa? Buone notizie: sì. Non è fatto a sensazione. Vediamo esattamente come viene calcolato quel numero, così capisci cosa separa "Discreta" da "Eccellente" e cosa puoi fare per migliorare.

## Il quadro generale

Il punteggio della termica (da 0 a 100) è una combinazione pesata di cinque fattori. Sono le stesse cinque righe che vedi nel **Dettaglio del punteggio** di una termica:

| Fattore | Peso | Cosa misura |
|--------|--------|------------------|
| **Salita** | 30% | Quanto era forte la salita nel suo punto migliore? |
| **Salita netta** | 20% | Quanta di quella salita hai portato a casa? |
| **Centratura** | 20% | Quanto sei rimasto nel nucleo? |
| **Regolarità** | 15% | Quanto erano stabili le letture del variometro? |
| **Sostenuta** | 15% | Sei rimasto davvero a lavorare la termica? |

Ogni fattore viene normalizzato su una scala da 0 a 1, moltiplicato per il suo peso, e poi il totale viene riportato su una scala da 0 a 100. Semplice in teoria, molto rivelatore in pratica.

Il fattore **Sostenuta** è fondamentale: impedisce che i passaggi brevi prendano punteggi alti. Agganciare una salita forte per qualche giro non dimostra di saper girare in termica; restarci e lavorarla sì.

---

## La formula

Ecco il calcolo vero e proprio:

```
Quality Score = (climbScore * 0.30 +
                 netClimbScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Le soglie nella formula sono fisse in m/s e metri, qualunque sia l'unità di misura che usi per la visualizzazione.

### Come viene calcolato ogni componente

**1. Punteggio della salita**
```
climbScore = min(1, maxClimb / 5.0)
```
La tua salita sostenuta migliore nella termica (il valore **Max** nei dettagli della termica, mediato su 5 secondi così un singolo punto GPS rumoroso non può barare) divisa per 5,0 m/s, con un massimo di 1. Solo il miglior decimo delle salite in We-Fly si avvicina al massimo; una salita media prende poco più della metà.

**2. Punteggio della salita netta**
```
netClimbScore = min(1, (heightGain / duration) / 3.0)
```
La quota guadagnata divisa per il tempo passato nella termica: la tua salita media, dall'ingresso all'uscita. 3,0 m/s valgono il punteggio pieno di 1,0; ci arriva circa una termica su cento. Mentre la salita di picco premia chi trova la parte forte, questo premia chi ci resta.

Le versioni precedenti usavano la quota guadagnata rispetto alla distanza di deriva. Il vento da solo la abbassava, quindi la stessa salita perdeva una fascia in una giornata ventosa. La salita netta se ne infischia del vento.

**3. Punteggio della centratura**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Una vela non può girare sul posto, quindi orbitare esattamente al raggio del nucleo (o più stretto) vale un 1,0 perfetto. Ogni raggio del nucleo in più di distanza costa metà del punteggio: girare a due volte il raggio del nucleo vale 0,5, a tre volte vale zero. Prima si elimina la deriva del vento, confrontando ogni giro con il proprio centro locale.

**4. Punteggio della regolarità**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
L'inverso della variabilità del variometro (la deviazione standard del rateo di salita mediato). Termica liscia = punteggio alto. Su e giù tra salita forte e discendenza = punteggio basso. Con una variabilità di 2 m/s o più la regolarità non contribuisce per niente.

**5. Punteggio della salita sostenuta**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combina durata e numero di giri per premiare il vero lavoro in termica. Il punteggio pieno richiede circa 90 secondi E almeno 2 giri completi. Ogni termica nell'elenco ha già almeno due giri completi (vedi [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings)), quindi in pratica questo fattore penalizza soprattutto le salite brevi.

---

## Esempio svolto: termica n. 9

Facciamo un calcolo reale con numeri concreti. Diciamo che hai lavorato una termica con questi dati:

| Metrica | Valore |
|--------|-------|
| Salita max | 3.5 m/s |
| Salita netta | 1.8 m/s |
| Centratura | 0.53 (53%) |
| Variabilità | 0.92 m/s |
| Durata | 75 secondi |
| Numero di giri | 3 giri |

### Passo 1: calcola il punteggio di ogni componente

**Punteggio della salita:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
La tua salita sostenuta migliore di 3,5 m/s è il 70% del riferimento di 5,0 m/s.

**Punteggio della salita netta:**
```
netClimbScore = min(1, 1.8 / 3.0)
netClimbScore = 0.60
```
Hai fatto in media 1,8 m/s dall'ingresso all'uscita, ben sopra la termica tipica (circa 1 m/s).

**Punteggio della centratura:**
```
centeringScore = 0.53
```
In media hai orbitato a poco meno di due volte il raggio del nucleo. C'è margine, ma non è male.

**Punteggio della regolarità:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Una variabilità del variometro di 0,92 m/s significa che la salita era un po' turbolenta, ma niente di folle.

**Punteggio della salita sostenuta:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Hai passato 75 secondi e fatto 3 giri completi: un buon lavoro in termica, appena sotto la soglia dei 90 secondi.

### Passo 2: applica i pesi

Ora moltiplica ogni punteggio per il suo peso:

| Componente | Punteggio | Peso | Contributo |
|-----------|-------|--------|--------------|
| Salita | 0.70 | 0.30 | 0.210 |
| Salita netta | 0.60 | 0.20 | 0.120 |
| Centratura | 0.53 | 0.20 | 0.106 |
| Regolarità | 0.54 | 0.15 | 0.081 |
| Sostenuta | 0.833 | 0.15 | 0.125 |
| **Totale** | | | **0.642** |

### Passo 3: riporta su 0-100

```
qualityScore = round(0.642 * 100) = 64
```

**Risultato: un punteggio di 64**, appena dentro "Buona". Giri più stretti attorno al nucleo alzerebbero sia la centratura sia la salita netta, ed è lì che ci sono i punti facili.

---

## Come leggere il tuo punteggio

| Fascia | Etichetta | Cosa significa |
|-------------|--------|---------------|
| **74 e oltre** | Eccezionale | Le migliori salite in We-Fly. Salita forte, lavorata come si deve. |
| **Da 68 a 73** | Eccellente | Meglio di tre termiche su cinque. Hai trovato il nucleo in fretta e ci sei rimasto. |
| **Da 63 a 67** | Buona | Sopra la termica tipica. Bel lavoro. |
| **Da 58 a 62** | Discreta | Più o meno a metà gruppo. Missione compiuta, ma con un po' di margine lasciato sul tavolo. |
| **Sotto 58** | Scarsa | Fatica a trovare o tenere il nucleo, una salita breve, o condizioni davvero pessime. |

Le fasce sono calibrate su oltre 100.000 termiche reali volate dai piloti We-Fly: la termica tipica (mediana) prende circa 66, un quarto delle termiche arriva a 73 o più, e una su dieci raggiunge 80.

---

## Cosa ti dice ogni componente

### Forza della salita (peso 30%)

È il fattore con il peso maggiore perché... beh, il punto è salire. Usa la tua salita *sostenuta* migliore, quindi premia chi trova la parte forte della termica, non chi ci si aggrappa e basta. Ma non fissarti: a volte una termica debole lavorata alla perfezione vale più distanza di una forte da cui continui a cadere fuori.

**Punteggio della salita basso?**
- La termica era davvero debole (non è colpa tua)
- Non hai mai trovato la parte più forte del nucleo (controlla la centratura)
- Sei arrivato tardi e hai preso solo la parte alta

### Salita netta (peso 20%)

Salita netta = quota guadagnata / tempo in termica, valutata rispetto a 3,0 m/s. È la salita che hai davvero messo in cassa, dall'ingresso all'uscita, quindi ogni giro passato fuori dalla salita qui si paga. Il vento non la cambia.

Valori tipici:
- **circa 1 m/s**: una termica tipica
- **2 m/s o più**: una salita forte, lavorata bene (il miglior decimo)
- **3 m/s o più**: punteggio pieno

**Salita netta bassa?**
- La termica era davvero debole (non è colpa tua)
- Giri passati a cercare o a cadere fuori dal nucleo
- Cerchi larghi o poca inclinazione in un nucleo stretto

### Qualità della centratura (peso 20%)

Quanto hai orbitato vicino al nucleo. Girare al raggio stesso del nucleo è perfetto; il punteggio cala in linea retta man mano che la distanza media cresce, fino ad arrivare a zero a tre volte il raggio del nucleo.

**Centratura bassa?**
- Ci hai messo un po' a trovare il nucleo
- Continuavi a scivolare fuori e a ricentrare
- Il nucleo si spostava (termica a bolla) o era molto piccolo

### Regolarità (peso 15%)

Si basa sulla deviazione standard delle letture del variometro. Bip regolare e costante = punteggio alto. Variometro impazzito = punteggio basso.

**Regolarità bassa?**
- Termica turbolenta (non sempre è colpa tua)
- Continuavi ad attraversare il nucleo e uscire dall'altra parte
- Salita e discendenza mescolate nello stesso giro

### Abilità sostenuta (peso 15%)

Combina durata e numero di giri per dimostrare che hai davvero lavorato la termica e non ci sei solo passato attraverso. Questo fattore premia i piloti che si impegnano nella termica e la lavorano come si deve.

Il punteggio pieno richiede:
- **circa 90 secondi** di durata (le termiche più brevi prendono proporzionalmente meno)
- **almeno 2 giri completi** (meno giri prendono proporzionalmente meno)

I due fattori si moltiplicano, quindi ti servono ENTRAMBI per andare bene qui. Una salita di 30 secondi con tre giri prende solo un terzo dei punti.

**Punteggio di salita sostenuta basso?**
- Hai lasciato la termica troppo presto
- La termica si è spenta prima che potessi lavorarla bene

---

## Come migliorare il punteggio

### Risultati rapidi

1. **Stringi appena trovi la salita**: non aspettare, inizia a girare non appena il variometro si sveglia
2. **Sposta il cerchio verso la salita**: la classica tecnica di centratura, allarga sul lato debole, stringi sul lato forte
3. **Occhio all'inclinazione**: troppo poca vuol dire cerchi larghi e deriva, troppa è inefficiente nella salita debole

### Tieni traccia dei progressi

Confronta le termiche di più voli nello stesso sito di volo. Inizierai a vedere degli schemi:
- "In questo decollo faccio sempre fatica a centrare"
- "Le mie termiche del pomeriggio sono più regolari"
- "Quella vela nuova mi ha davvero migliorato la salita netta"

### Non inseguire il numero

Un 55 in una termica spaccata e ruvida può valere un volo migliore di un 80 in una colonna larga e liscia. Il contesto conta. Usa il punteggio per seguire i tuoi progressi nel tempo, non per confrontarti con gli altri in giornate diverse.

---

## Dietro le quinte: perché questi pesi?

I pesi (30/20/20/15/15) non sono tirati fuori dal cappello. Si basano su quello che conta davvero per girare in termica in modo efficace:

- **La forza della salita è in testa** (30%) perché l'obiettivo principale è salire. Una termica debole lavorata alla perfezione resta una termica debole.

- **Salita netta e centratura si dividono il peso della tecnica** (20% ciascuna) perché riguardano entrambe l'abilità. Puoi avere l'una senza l'altra (cerchi stretti nel posto sbagliato, o un'orbita ben centrata in una termica da cui continui a uscire).

- **La regolarità è un correttivo** (15%) perché un po' di turbolenza non dipende da te. Incide sul punteggio, ma non lo domina.

- **L'abilità sostenuta filtra i colpi di fortuna** (15%) perché qualche giro in una salita forte non è come lavorare una termica. Questo fattore fa sì che i punteggi alti vadano ai piloti che si sono davvero impegnati nella salita.

---

## Scenari di esempio

### L'ascensore fortunato

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 5.6 m/s | 1.0 (al massimo) |
| Salita netta | 3.4 m/s | 1.0 (al massimo) |
| Centratura | 0.78 | 0.78 |
| Regolarità | 0.38 m/s | 0.81 |
| Durata / giri | 120s / 4 giri | 1.0 |

**Contributi:** 0.30 + 0.20 + 0.156 + 0.121 + 0.15 = **0.927**
**Punteggio:** 93 (Eccezionale)

Hai preso una termica mostruosa, sei rimasto nel nucleo e l'hai cavalcata per due minuti buoni. Lo scenario da sogno.

### Il colpo rapido (penalizzato)

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 4.8 m/s | 0.96 |
| Salita netta | 2.4 m/s | 0.80 |
| Centratura | 0.85 | 0.85 |
| Regolarità | 0.45 m/s | 0.78 |
| Durata / giri | 25s / 2 giri | 0.28 |

**Contributi:** 0.288 + 0.16 + 0.17 + 0.116 + 0.042 = **0.776**
**Punteggio:** 78 (Eccezionale)

Salita forte, ottima centratura, ma sei rimasto solo per due giri. Se l'avessi lavorata per 90 secondi con la stessa tecnica, il fattore di salita sostenuta avrebbe aggiunto i punti mancanti e il punteggio sarebbe stato 88.

### La salita sudata

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 2.6 m/s | 0.52 |
| Salita netta | 0.9 m/s | 0.30 |
| Centratura | 0.45 | 0.45 |
| Regolarità | 1.4 m/s | 0.30 |
| Durata / giri | 180s / 6 giri | 1.0 |

**Contributi:** 0.156 + 0.06 + 0.09 + 0.045 + 0.15 = **0.501**
**Punteggio:** 50 (Scarsa)

Termica debole, nucleo spaccato, tanta ricerca. L'etichetta è severa, ma descrive più la termica che te: ci sei rimasto per 3 minuti e 6 giri, e il fattore di salita sostenuta ti ha dato tutti i suoi punti. In una giornata così, la salita che ti ha tenuto in aria era la scelta giusta.

### Il re del nucleo

| Metrica | Valore | Punteggio |
|--------|-------|-------|
| Salita max | 3.4 m/s | 0.68 |
| Salita netta | 1.8 m/s | 0.60 |
| Centratura | 0.85 | 0.85 |
| Regolarità | 0.65 m/s | 0.68 |
| Durata / giri | 95s / 3 giri | 1.0 |

**Contributi:** 0.204 + 0.12 + 0.17 + 0.101 + 0.15 = **0.745**
**Punteggio:** 75 (Eccezionale)

Termica moderata, ma hai centrato alla perfezione e l'hai lavorata come si deve. La tecnica batte la potenza.

---

## In sintesi

Il punteggio della termica non serve a giudicarti, serve a darti un riscontro. Un riassunto numerico di "cosa è successo là dentro", così impari da ogni termica invece di ricordarti solo "quella era bella".

Usalo per:
- Scoprire degli schemi nel tuo modo di volare
- Seguire i tuoi progressi nel tempo
- Individuare punti deboli precisi su cui lavorare
- Tirartela con gli amici, dati alla mano

E ricorda: anche una termica "Discreta" che ti ha portato alla salita successiva vale più di una "Eccellente" che non hai preso perché aspettavi di meglio.

Adesso vai a volare!

---

Vedi anche: [Analisi avanzata delle termiche](/doc/advanced-thermal-analysis) | [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings)
