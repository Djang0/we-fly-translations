---
title: Guida alle classifiche della community
description: Chi vola di più e chi vola meglio
category: Community
order: 2
---

*Ovvero: come capire se sei il mulo da lavoro della community o il suo purosangue*

## Due classifiche, due domande

Le classifiche della community di We-Fly rispondono a due domande molto diverse:

1. **Attività:** «Chi vola di più?» (quantità)
2. **Rendimento:** «Chi vola meglio?» (qualità)

Mettila così: l’Attività è il numero di pagine del tuo libretto di volo. Il Rendimento è quanti momenti da ricordare ci sono in ogni pagina. Una premia chi si presenta in decollo, l’altra premia chi, quando c’è, la fa contare.

Vediamole tutte e due.

---

## La classifica Attività (la scheda «Io volo più di te»)

### Cosa misura

Il **punteggio XC** totale dei tuoi voli pubblici. Tutto qui. Vola di più, vola più lontano, accumula punti.

### Le regole

Non tutti i voli entrano. Ecco quali sono validi:

| Criterio | Perché |
|----------|-----|
| Distanza XC >= 10 km | Esclude le planate dirette all’atterraggio e il soaring sopra il parcheggio |
| Solo voli senza motore | Spiacenti paramotori, questa è per chi vola senza motore |
| Il volo deve essere pubblico | I voli privati restano privati (rispettiamo i tuoi segreti) |

### Cosa vedi

La tabella **Top 10 piloti**, con **Attività** selezionata:

| Colonna | Cosa significa |
|--------|--------------|
| # | Il tuo posto in classifica |
| Pilota | Nome I. (rispettoso della privacy) |
| Voli | Numero totale di voli validi |
| Ore | Tempo di volo totale sui voli validi |
| XC | Distanza totale di volo di distanza, nella tua unità di distanza |
| Punteggio XC | Il numero che decide la tua posizione |

La classifica di sempre in cima alla pagina usa gli stessi voli validi. Passa tra **Punteggio XC**, **Distanza XC** e **Tempo di volo** per riordinare quei piloti secondo la metrica che ti interessa.

### In sintesi

L’Attività premia **costanza e dedizione**. Il pilota che fa 200 voli XC corti supererà quello che ne ha fatti 10 incredibili. È la classifica del «basta uscire a volare», e non ci sono scorciatoie. Le ore o le fai o non le fai.

---

## La classifica Rendimento (la scheda «Io volo meglio di te»)

### Cosa misura

Il tuo **punteggio di rendimento**: una metrica composita che misura quanto voli bene e con quanta costanza ti presenti. È qui che brillano i piloti di distanza più motivati.

### Come funziona

Il punteggio di rendimento combina tre metriche, **con lo stesso peso**, usando la normalizzazione z-score:

| Metrica | Cosa premia |
|--------|----------------|
| **Distanza all’ora** | Coprire terreno in modo efficiente: buona scelta della rotta, planata solida, poco tempo a raschiare |
| **Distanza per volo** | Andare lontano quando parti: impegnarsi in un vero volo di distanza, non mollare al primo vento contrario |
| **Numero di voli validi** | Esserci: più voli validi significano un impegno XC più costante |

Il tuo punteggio composito è la media dei tre z-score:

```
Efficiency Score = (z_distance_per_hour + z_distance_per_flight + z_flight_count) / 3
```

Se gli z-score ti fanno venire gli occhi a palla, dai un’occhiata alla [Guida allo z-score per piloti](/doc/z-score-pilot-guide) per tutti i dettagli. Ma ecco la versione rapida:

### Il bigino dello z-score

| Punteggio | Colore | Cosa significa | Traduzione per piloti |
|-------|-------|--------------|-------------------|
| +2,0 o più | Verde | Ben sopra la media della community | Non stai solo volando, stai *viaggiando* |
| da +1,0 a +2,0 | Verde | Nettamente sopra la media | Pilota efficiente, buone decisioni |
| da -1,0 a +1,0 | Verde sopra lo 0, rosso sotto | Intorno alla media della community | Normale, sano, niente da segnalare |
| da -1,0 a -2,0 | Rosso | Sotto la media | Margine di miglioramento sul rendimento XC |
| -2,0 o meno | Rosso | Ben sotto la media | Forse passi molto tempo a fare dinamica? |

Tutte e tre le metriche hanno **lo stesso peso**. Non puoi fregare il sistema essendo veloce ma su voli corti, o volando lontano una volta l’anno. Devi andare lontano, andare veloce e continuare a esserci.

### Criteri di ammissione

Non tutti entrano nella classifica Rendimento. Non è snobismo, è statistica:

| Requisito | Motivo |
|-------------|--------|
| Distanza XC >= 10 km | Come per l’Attività: solo veri voli di distanza |
| Durata del volo > 5 minuti | Se il tuo volo è durato meno di una pausa caffè, non conta |
| Solo voli senza motore | Il gas è un imbroglio (in questo contesto) |
| **Almeno 5 voli validi** | Evita le meteore e il rumore statistico |
| Almeno 2 piloti idonei nella community | Servono almeno due dati per calcolare gli z-score |

### Il dettaglio al passaggio del mouse

Passa il mouse (o tocca su mobile) su una riga per vedere il dettaglio dello z-score per ogni metrica. Ti dice *da dove* viene il tuo rendimento:

- km/h alti ma km/volo bassi? Sei veloce ma voli rotte corte.
- km/h bassi ma km/volo alti? Copri distanza ma te la prendi comoda.
- Tanti voli ma distanze basse? Sei costante ma non stai ancora spingendo sull’XC.
- Tutti e tre alti? Sei il pilota di cui gli altri si lamentano nel gruppo WhatsApp.

---

## Come leggere gli z-score (la versione da 30 secondi)

Uno z-score ti dice quanto sei lontano dalla media della community, misurato in deviazioni standard.

- **Punteggio 0** = SEI la media
- **Punteggio +1,5** = sei 1,5 deviazioni standard sopra la media (zona top 7% circa)
- **Punteggio -0,5** = poco sotto la media (assolutamente normale, circa il 30% dei piloti sta qui)
- **Punteggio +2,5** = valore anomalo in senso statistico: stai facendo qualcosa di giusto (o tutti gli altri stanno sbagliando qualcosa)

Gli z-score sono **relativi**. Se domani entra nella community un gruppo di fenomeni del cross, i punteggi di tutti si spostano. Il tuo volo non è cambiato; è cambiato il metro.

Vuoi l’approfondimento con esempi svolti e codice? Leggi la [Guida allo z-score per piloti completa](/doc/z-score-pilot-guide).

---

## FAQ e trabocchetti

### «Perché non sono nella classifica Rendimento?»

Ti servono **almeno 5 voli validi** (XC di 10+ km, senza motore, oltre i 5 minuti). Se hai 4 voli validi e 47 planate dirette all’atterraggio, sei ancora fuori. Vai a fare un altro vero volo di distanza e sei dentro.

### «Volo SEMPRE ma il mio punteggio di rendimento è basso.»

È voluto. La classifica Rendimento non guarda quanto *spesso* voli: per quello c’è la classifica Attività. Il Rendimento misura quanto lontano e quanto veloce vai *per volo*. Se registri un sacco di voli locali corti, sali nella classifica Attività mentre il punteggio di rendimento resta così così.

### «Il mio punteggio è negativo. Sono un cattivo pilota?»

No. Un punteggio negativo significa che sei **sotto la media attuale della community** su quelle tre metriche. È relativo. Se la community è piena di piloti da gara XC, anche un solido pilota amatoriale risulterà negativo. Non dice niente sulla tua sicurezza, sulla tua abilità in turbolenza, sulla precisione in atterraggio o sulla tua capacità di scegliere un bar dopo il volo.

### «Perché il minimo di 10 km?»

Perché vogliamo misurare il volo di distanza, non le termichette sopra il parcheggio. La soglia di 10 km esclude le planate dirette, le sessioni di soaring locale e quei voli in cui tecnicamente sei andato «in cross» ma ti sei solo fatto portare dal vento fino al primo prato. Se non hai coperto una distanza vera, non è XC: è semplicemente volare, e non c’è niente di male, ma va in un’altra classifica.

### «Perché il mio nome è abbreviato?»

Privacy. Nelle classifiche tutti i nomi dei piloti compaiono come **Nome I.** (nome + iniziale del cognome). Il nome completo resta nel tuo profilo, ma le classifiche pubbliche restano discrete.

### «Posso comparire in tutte e due le classifiche?»

Certo. La maggior parte dei piloti attivi ci sarà. Potresti essere 3° nell’Attività e 15° nel Rendimento, o viceversa. Le due classifiche misurano cose completamente diverse, ed eccellere in una non garantisce l’altra.

---

## In sintesi (per chi va di fretta)

- **Attività** = punteggio XC totale dei voli pubblici. Più voli, più sali. Semplice.
- **Rendimento** = quanto lontano, quanto veloce e quanto spesso voli in XC, normalizzato sulla community. Vola meglio, sali di più.
- Entrambe usano un **minimo di 10 km XC** ed escludono i voli a motore.
- Il Rendimento richiede **almeno 5 voli validi** e usa la **normalizzazione z-score**.
- Punteggio di rendimento positivo (verde) = sopra la media. Negativo (rosso) = sotto. Nessuno dei due è un giudizio sulla tua persona.
- Passa il mouse su una riga per vedere il dettaglio per metrica.

Ora smetti di leggere di classifiche e vai a registrare un volo che ti faccia salire di una posizione.

---

*«Ci sono due tipi di piloti: quelli che guardano la classifica prima di volare, e i bugiardi.»*
*- Antico proverbio di We-Fly*
