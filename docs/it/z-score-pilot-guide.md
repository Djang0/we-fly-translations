---
title: Guida allo z-score per piloti
description: L’ingrediente segreto per scovare i valori anomali
category: Cockpit
order: 3
---

*Ovvero: come dimostrare matematicamente che il tuo decollo preferito vale davvero il viaggio*

## Ma che diavolo è uno z-score?

Hai presente quell’amico che si vanta sempre dei suoi siti «epici», ma tu sei quasi sicuro che sia solo aria fritta? Lo z-score è il rilevatore matematico di fandonie che aspettavi.

**La versione breve:** uno z-score ti dice quanto un dato è insolito rispetto al resto dei tuoi dati. In pratica si chiede: «Questo sito è davvero speciale, o mi ricordo solo quella giornata buona?»

**La formula (non scappare):**

```
Z-Score = (Your Value - Average) / Standard Deviation
```

**Traduzione per piloti:** a quante «deviazioni standard» dalla media si trova questa cosa?

---

## Scomponiamolo (perché non siamo tutti fissati con la matematica)

### La situazione

Immagina di aver volato da 10 decolli diversi nel corso della stagione. Vuoi sapere quali sono **davvero** i tuoi posti di riferimento e quali hai solo visitato una volta in una giornata epica.

Ecco i tuoi dati (durata media dei voli da ogni sito):

| Sito | Durata media (ore) |
|------|---------------------|
| Annecy | 2,5 |
| Chamonix | 3,8 |
| Verbier | 2,2 |
| Bassano | 5,0 | ← Mmm, interessante
| Kössen | 2,4 |
| Interlaken | 2,6 |
| Pokhara | 1,8 |
| Saint-Hilaire | 2,7 |
| Bir | 2,3 |
| Oludeniz | 2,4 |

**Media su tutti i siti:** 2,77 ore
**Deviazione standard:** 0,91 ore

### Il calcolo

Calcoliamo lo z-score di **Bassano** (perché 5,0 ore sono sospettosamente tante):

```
Z-Score = (5.0 - 2.77) / 0.91
Z-Score = 2.23 / 0.91
Z-Score = 2.45
```

**Cosa significa 2,45?**
- La durata media di Bassano è 2,45 deviazioni standard **sopra** la media
- Nel tuo **Cockpit** compare nella colonna **Z-score**
- È statisticamente significativo (|z| > 2 = territorio dei valori anomali)
- Traduzione: Bassano non è solo buono, è **davvero eccezionale**

Ora guardiamo **Pokhara** (1,8 ore, sembra poco):

```
Z-Score = (1.8 - 2.77) / 0.91
Z-Score = -0.97 / 0.91
Z-Score = -1.07
```

**Cosa significa -1,07?**
- Pokhara è circa 1 deviazione standard **sotto** la media
- Non terribile, ma neanche granché
- Forse l’hai beccato in giornate storte, o forse è solo un sito da planata diretta

---

## Il decodificatore dello z-score

Ecco come interpretare i tuoi z-score:

| Intervallo di z-score | Cosa significa | Traduzione per piloti |
|---------------|---------------|-------------------|
| **z > +2,0** | Valore anomalo estremo (positivo) | 🌟 **Questo sito spacca DAVVERO**: vale le 3 ore di macchina |
| **da +1,0 a +2,0** | Sopra la media | 👍 Sito solido, di solito qui fai un bel volo |
| **da -1,0 a +1,0** | Nella media | 🤷 Mah. Le condizioni contano più del sito |
| **da -2,0 a -1,0** | Sotto la media | 👎 Probabilmente qui resti spesso a terra o quasi |
| **z < -2,0** | Valore anomalo estremo (negativo) | 💀 **Da evitare, a meno che non ti piaccia andare dritto all’atterraggio** |

---

## Perché gli z-score contano (dal punto di vista del pilota)

### Problema 1: la trappola del «ti ricordi quella volta?»

Tu: «Raga, ADORO volare da [sito a caso]. È fantastico!»
Il tuo cervello: *ricorda quell’UNICO volo di distanza epico di 6 ore di 3 anni fa e dimentica comodamente le 15 planate dirette*

**La soluzione z-score:** se lo z-score del sito è negativo o vicino a zero, il tuo cervello ti sta mentendo. I dati no: lì vai giù quasi sempre.

### Problema 2: i giochetti con la dimensione del campione

Hai volato una volta a Bassano (5 ore, epico) e 47 volte dalla collina di casa (media 2,1 ore).

Qual è meglio? Difficile dirlo senza contesto, no?

**La soluzione z-score:** lo z-score tiene conto di **tutto l’insieme di dati**, quindi puoi confrontare mele con pere. Si chiede: «Rispetto a TUTTI i miei siti, come se la cava questo?»

### Problema 3: la stazione delle giustificazioni

Vuoi giustificare quelle 4 ore di macchina con il partner, il capo o la scusa del «oggi lavoro da casa».

**La soluzione z-score:** stampa le statistiche del Cockpit con uno z-score di +2,8 per quel sito. «Vedi, amore, non è solo divertimento, è divertimento STATISTICAMENTE SIGNIFICATIVO. È scienza.»

---

## Come usiamo gli z-score in We-Fly

### Nella dashboard Cockpit

Quando apri la vista **Decollo** del tuo **Cockpit**, vedi uno **Z-score** per ogni decollo. È lo z-score, calcolato sulla **durata media dei tuoi voli per sito** (il rapporto tra ore totali e numero di voli).

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
    // (rounded to one decimal)
    dataSerie[indexx].z = deviation === 0
      ? 0
      : Number(((dataSerie[indexx].ratio - avg_ratio) / deviation).toFixed(1));
  }
}
```

### Cosa misuriamo davvero

- **Valore:** ore medie per volo per ogni decollo
- **Media:** la durata media complessiva dei tuoi voli su tutti i siti
- **Deviazione standard:** quanto sono sparpagliate le durate dei tuoi voli
- **Z-score:** quanto è eccezionale (o terribile) ogni sito

### Rilevamento dei valori anomali

I commenti nel codice dicono: «I valori con |z| > 2 sono considerati valori anomali statistici.»

Significa:
- **z > +2**: questo sito è anomalo in senso BUONO (resti in aria molto più a lungo della media)
- **z < -2**: questo sito è anomalo in senso CATTIVO (atterri molto prima della media)

### Un esempio reale dal tuo Cockpit

Mettiamo che apri la vista **Decollo** e vedi:

| Decollo | Voli | Ore totali | Media/volo | **Z-score** |
|---------|------|------------|------------|-------------|
| Mont Blanc | 8 | 45,5 h | 5,69 h | **2,80** 🌟 |
| Collina di casa | 42 | 67,2 h | 1,60 h | **-0,50** 😐 |
| Quella volta là | 1 | 3,2 h | 3,20 h | **0,40** 🤷 |

Il Cockpit arrotonda ogni z-score a un decimale, quindi un sito a 2,84 compare come 2,80.

**Cosa ti dice:**
1. **Mont Blanc (z = +2,8):** accidenti, questo sito è un unicorno statistico. Ogni volta che voli qui hai quasi la garanzia di un volo lungo. Prenota l’Airbnb SUBITO.

2. **Collina di casa (z = -0,5):** poco sotto la media, ma non terribile. È comoda e ci accumuli ore. Continua a usarla per allenarti, ma non aspettarti voli epici.

3. **Quella volta là (z = +0,4):** leggermente sopra la media, ma ci hai volato una volta sola. Potrebbe essere fortuna. Servono più dati prima di sapere se è davvero buono.

---

## Le note in piccolo (casi limite e trabocchetti)

### Quando gli z-score non funzionano

**1. Campioni piccoli**
- Hai volato da un sito una volta per 6 ore? Lo z-score potrebbe essere +3,0, ma è solo fortuna
- **Rimedio:** guarda il numero di voli. Se è basso (< 5 voli), prendi lo z-score con le pinze

**2. Tutti i valori sono uguali**
- Se ogni sito ha una media di esattamente 2,5 ore, la deviazione standard è zero
- Non si può dividere per zero, quindi lo z-score è 0 per tutto
- **Rimedio:** il codice gestisce il caso: `deviation === 0 ? 0 : (value - avg) / deviation`

**3. Distorsione stagionale**
- Voli dal sito A solo d’estate, dal sito B solo d’inverno
- Gli z-score potrebbero riflettere più la **stagione** che la **qualità del sito**
- **Rimedio:** usa i filtri! Filtra per stagione o per periodo per confrontare mele con mele

**4. Stili di volo diversi**
- Il sito A è ottimo per il volo di distanza (voli lunghi)
- Il sito B è perfetto per l’acro (voli corti)
- Lo z-score favorirà il sito A, ma questo non rende il sito B «cattivo»
- **Rimedio:** filtra per tipo di volo, se il dato è disponibile

---

## Gli z-score in altri contesti (perché non abbiamo ancora finito)

### Per vela

Quale vela ti regala i voli più lunghi?

- **Vela A:** z = +1,8 → sopra la media, probabilmente una buona vela da cross
- **Vela B:** z = -0,3 → poco sotto la media, forse la tua vecchia vela da battaglia

### Per mese

Quando prenotare le ferie?

- **Luglio:** z = +2,1 → mese epico con costanza, prendi ferie
- **Novembre:** z = -1,5 → mese da dimenticare, resta a casa e sistema l’attrezzatura

### Per paese

Quale destinazione di volo vale il biglietto aereo?

- **Francia:** z = +1,2 → durate dei voli sopra la media
- **Quell’isola a caso:** z = -2,0 → bellissima, ma voli poco

---

## Decisioni nel mondo reale

### Scenario 1: il dibattito sulla gita

Il tuo amico vuole fare 5 ore di macchina per un sito nuovo. Controlli il tuo Cockpit:

- **Sito nuovo:** 1 volo, media 4,5 h, z = +1,5 (ma un volo solo!)
- **Sito vicino:** 23 voli, media 3,2 h, z = +1,8

**Decisione:** il sito vicino ha uno z-score più alto E più dati. È la scommessa più sicura per una bella giornata. Tieni le 5 ore di macchina per quando avrai più dati sul sito nuovo.

### Scenario 2: comprare una vela

Stai scegliendo tra due vele in base ai voli registrati:

- **Vela attuale:** 89 voli, media 2,1 h, z = -0,4 (poco sotto la tua media)
- **Vela dell’amico (prestata due volte):** 2 voli, media 3,5 h, z = +1,2

**Decisione:** non comprare la vela dell’amico sulla base di 2 voli. Lo z-score sembra buono, ma il campione è troppo piccolo. Potrebbe essere fortuna, o potrebbe essere che il tuo amico è più bravo di te.

### Scenario 3: dimostrare che non sei matto

Il partner: «Fai 2 ore di macchina per quel sito ogni weekend. Ne vale almeno la pena?»

Tu: «Guarda qui. Z-score di +2,3. Lì faccio in media 4,2 ore contro le 2,1 della collina di casa. È statisticamente significativo. Volo il DOPPIO per 2 ore di macchina. I conti tornano.»

**Risultato:** il partner pensa ancora che tu sia matto, ma almeno adesso hai i DATI.

---

## In sintesi (per piloti impazienti)

**Cos’è uno z-score?**
Una misura di quanto un valore è insolito rispetto alla tua media. È normalizzato con la deviazione standard, così puoi confrontare cose diverse.

**Perché lo usiamo?**
Per capire quali decolli (o vele, mesi, paesi) sono **davvero eccezionali** e quali solo colpi di fortuna isolati.

**Come lo leggo?**
- **Z-score positivo:** sopra la media (bene!)
- **Z-score negativo:** sotto la media (mah)
- **|z| > 2:** valore anomalo statistico (estremo!)
- **|z| < 1:** piuttosto normale (nella media)

**Dove lo vedo?**
Nel tuo **Cockpit**, nella colonna **Z-score** delle viste **Decollo**, **Vela**, **Paese** e **Stagione**, e come metrica **Z-score** nella vista **Mese**.

**Cosa ci faccio?**
Usalo per decidere meglio dove volare, che attrezzatura usare e quando organizzare i viaggi. Lo z-score è il tuo gregario basato sui dati.

---

## Appendice: la matematica (per i secchioni in fondo all’aula)

### Esempio completo svolto

Dati: ore medie di volo per sito

```
Sites: [2.5, 3.8, 2.2, 5.0, 2.4, 2.6, 1.8, 2.7, 2.3, 2.4]
```

**Passo 1: calcola la media**
```
Mean = (2.5 + 3.8 + 2.2 + 5.0 + 2.4 + 2.6 + 1.8 + 2.7 + 2.3 + 2.4) / 10
Mean = 27.7 / 10 = 2.77 hours
```

**Passo 2: calcola la deviazione standard**
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

**Passo 3: calcola gli z-score**
```
Z(Bassano) = (5.0 - 2.77) / 0.889 = +2.51 🌟
Z(Pokhara) = (1.8 - 2.77) / 0.889 = -1.09 👎
Z(Annecy) = (2.5 - 2.77) / 0.889 = -0.30 🤷
```

---

## Un’ultima cosa: gli z-score non mentono, ma il contesto conta

Uno z-score ti dice **cosa è insolito**, non **perché è insolito**.

- Sito con z-score alto? Potrebbero essere condizioni ottime, o ci voli solo nelle giornate perfette
- Mese con z-score basso? Potrebbe essere il meteo brutto, o quel mese eri infortunato
- Vela con z-score alto? Potrebbe essere una vela migliore, o ci voli con più fiducia

**Guarda sempre:**
1. La dimensione del campione (più voli = z-score più affidabile)
2. Il contesto (filtri, periodi, tipi di volo)
3. La tua memoria (ti SEMBRA giusto?)

Gli z-score sono uno strumento, non la verità. Ma sono un ottimo strumento per eliminare le fandonie e trovare il segnale nel rumore.

Ora esci e vola! E quando gli amici ti chiedono perché fai 3 ore di macchina per quel sito, puoi rispondere sicuro: «Perché lo z-score è +2,6, fratello. SCIENZA.»

---

*«Nella statistica crediamo, ma in termica dobbiamo.»*
*- Ogni pilota fissato con i dati*
