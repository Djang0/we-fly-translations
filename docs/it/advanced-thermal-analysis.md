---
title: Analisi avanzata delle termiche
description: Analisi dettagliata di ogni termica che hai sfruttato, con centratura, rateo di salita ed efficienza valutati volo per volo
category: Thermal Analysis
order: 1
---

Ti sei mai chiesto se sei davvero un genio delle termiche o se hai solo avuto fortuna? La scheda **Termiche** di ogni volo è il tuo compagno di debriefing: scompone ogni salita che hai lavorato, giro dopo giro.

## Che cos’è?

È un analizzatore post-volo che osserva ogni tua mossa in termica. Non si ferma a "hai guadagnato 500 m". Guarda *come* sei salito: se andavi a caccia del nucleo come un pro o se giravi sui bordi.

Quando carichi un volo, We-Fly rileva ogni termica che hai lavorato, assegna a ciascuna un punteggio di qualità su 100 e prepara un’analisi dettagliata. Pensalo come un istruttore che rivede la tua traccia e il tracciato del vario, una salita alla volta. Ti chiedi come viene riconosciuta una salita? Leggi [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings).

Apri un volo qualsiasi e scegli la scheda **Termiche**. Il numero accanto al nome della scheda indica quante termiche sono state trovate.

## La vista principale

La scheda si legge dall’alto in basso:

1. Una striscia di riepilogo per tutto il volo
2. Il grafico **Vario e raggio dei giri**
3. I filtri e una linea del tempo per scegliere una termica
4. Il visualizzatore della termica selezionata: mappa o vista 3D da un lato, dettagli dall’altro
5. Il grafico **Rateo di salita per quota e ora**

### Striscia di riepilogo del volo

La vista dall’alto della tua giornata:

- **Termiche**: quante salite hanno superato la selezione
- **Migliore**: il punteggio di qualità più alto del volo, con il numero della termica e la sua etichetta di qualità
- **Guadagno**: tutta la quota che hai guadagnato in termica
- **Salita media**: il tuo rateo di salita medio su tutte le termiche
- **Qualità**: il punteggio di qualità medio, con la mediana sotto

### Vario e raggio dei giri

Ogni giro completo che hai fatto diventa un punto: il raggio in orizzontale, il rateo di salita che ne hai ricavato in verticale. Lo sfondo è diviso in zone etichettate **rischioso**, **ideale**, **ok** e **stringi**, dai giri molto stretti a sinistra a quelli larghi a destra. Se la maggior parte dei tuoi punti migliori sta nella zona **stringi**, sai su cosa lavorare al prossimo volo.

### Scegliere una termica

Sopra la linea del tempo c’è una fila di filtri, ognuno con il numero di termiche che corrispondono:

- **Tutte**: ogni termica
- **Migliori 5**: le cinque salite più forti per rateo di salita medio
- **Sotto la mediana**: le termiche con un rateo di salita sotto la mediana del volo
- **Con deriva**: le termiche in cui hai derivato più di 30 m per ogni 100 m guadagnati (si considerano solo le salite di almeno 50 m)

Sotto i filtri, la linea del tempo dispone ogni termica lungo l’orario reale del volo. Il colore di ogni punto è la sua qualità e la dimensione è la quota guadagnata, così "quella grossa verso l’una e mezza" si trova subito. Clicca un punto per aprire quella termica nel visualizzatore.

La termica selezionata fa parte dell’indirizzo della pagina, così puoi condividere un link diretto alla "Termica #7".

### Il visualizzatore della termica

La barra del titolo mostra **Termica #N**, la sua etichetta di qualità, l’ora di inizio, la quota guadagnata e la salita media. A destra passi da **Mappa 2D** a **Vista 3D**.

**Sulla mappa 2D:**

- **La traccia della termica selezionata** è disegnata a punti colorati in base al vario: verde per salita forte (oltre 3 m/s), giallo per salita fino a 3 m/s, rosso per discendenza
- I marcatori **Punto di ingresso** e **Punto di uscita** mostrano dove la salita è iniziata e finita
- **Il nucleo** di ogni termica è un marcatore con un anello tratteggiato. Quello selezionato è rosso, gli altri sono rosa sbiadito per contesto. Passa sopra un nucleo per vederne la forza
- **Posizione attuale** è il marcatore azzurro che si muove durante la riproduzione

**Nella vista 3D**, la stessa salita è disegnata come una spirale che puoi ruotare, con una legenda per **Salita forte**, **Salita debole**, **Discendenza**, **Nucleo della termica**, **Quota di uscita** e **Posizione attuale**.

## Riproduzione animata

Sotto la mappa o la vista 3D c’è la barra di riproduzione:

- **Riproduci** / **Pausa**: rivedi la termica punto per punto
- La freccia circolare: torna al primo punto
- Le frecce fotogramma precedente e successivo: scorri la salita un punto GPS alla volta
- Il contatore **Fotogramma**: dove sei nella termica (per esempio 42/156)
- Ora, quota e vario al punto attuale
- Il pulsante con il mirino: **Centra la mappa su questa termica**, comodo dopo che hai spostato la mappa in giro

Avanzare fotogramma per fotogramma è il modo migliore per individuare il momento esatto in cui hai trovato il nucleo, o in cui lo hai perso.

## Dettagli della termica

Accanto al visualizzatore (sotto, sul telefono) c’è il tuo rapporto di coaching. In alto, un grande punteggio di qualità con la sua etichetta, più due letture rapide: **eff** (efficienza) e **ctr** (centratura).

Sotto, i dettagli sono raccolti in sezioni. Se ne apre una alla volta e, quando è chiusa, ognuna mostra un’anteprima di una riga, così scorri tutta la storia senza scrollare.

#### Salita

- **Guadagno**: la quota totale guadagnata
- **Media**: il rateo di salita medio
- **Max**: la salita migliore, mediata su 5 secondi (il picco grezzo su un singolo punto compare sotto)
- **Min**: il momento più debole, di solito all’ingresso o quando sei uscito dal nucleo
- **Variab.**: quanto è variato il rateo di salita. Bassa vuol dire una termica regolare, alta vuol dire secca o turbolenta

#### Nucleo

- **Forza**: la salita media nel nucleo, il tuo punto ideale
- **Tempo centr.**: quanto ci hai messo a raggiungere il nucleo dall’inizio della termica. Meno è meglio
- **Dimensione**: il raggio di salita del nucleo
- **Dist. media**: a che distanza, in media, hai girato dal nucleo
- **Centratura**: quanto sei rimasto vicino al nucleo, in percentuale. Girare al raggio stesso del nucleo vale il 100%

#### Dinamica delle virate

- **Senso**: sinistra o destra (quasi tutti i piloti hanno un lato preferito, nessun giudizio)
- **Giri**: il numero di giri completi
- **Velocità**: la velocità di virata media in gradi al secondo
- **Inclinazione**: stimata dalla dimensione e dalla durata dei tuoi giri, con sotto la velocità all’aria che ne deriva
- **Tempo per giro** e **Raggio del giro**: la dispersione dei tuoi giri, come tempo minimo, mediano e massimo, e raggio al 25° percentile, mediano e al 75° percentile

#### Deriva e vento

- **Velocità del vento**: stimata da come sono derivati i tuoi giri
- **Dist. deriva**: quanto lontano ti ha portato la termica mentre salivi
- **Direzione**: da dove veniva il vento, con una bussola. La freccia della bussola punta dove soffiava il vento e l’etichetta indica la direzione di provenienza, come in una previsione

#### Tempo

**Inizio**, **Fine** e **Durata** della salita. Comodo per confrontarli con i tuoi appunti.

#### Dettaglio del punteggio

Mostra come si compone il punteggio di qualità: una barra per fattore (**Salita**, **Efficienza**, **Centratura**, **Regolarità** e **Sostenuta**), il suo peso, il tuo valore reale e i punti che ha aggiunto. Il link **Come viene calcolato?** ti porta alla formula completa.

#### Consigli

In base ai numeri qui sopra, ricevi indicazioni specifiche per questa salita, per esempio:

- Note positive su sfondo verde: "Ottimo ingresso nel nucleo: hai trovato la salita più forte in 12 s."
- Suggerimenti su sfondo ambra: "Ingresso lento nel nucleo: … Prova giri iniziali più larghi per sentire il gradiente."

I consigli nascono dalle misure di questa termica (dimensione del nucleo, deriva, inclinazione, variabilità), non da indicazioni generiche. Per un riepilogo su tutto il volo, guarda il pannello **Coaching** nella scheda **Riepilogo** del volo.

## Rateo di salita per quota e ora

In fondo alla scheda, ogni termica è posizionata per ora del giorno e quota, colorata in base al rateo di salita. Cambia il riferimento di quota tra **s.l.m.** e **AGL** (sopra il decollo). La linea tratteggiata è il plafond utile della giornata; se si divide in due gradini, il plafond del mattino e quello del pomeriggio erano diversi. Clicca un punto qualsiasi per tornare su a quella termica nel visualizzatore.

## Il punteggio di qualità spiegato

Il punteggio di qualità non è solo "buon rateo di salita = punteggio alto". È un punteggio su 100 che combina cinque fattori:

1. **Salita**: quanto era forte la salita al suo meglio
2. **Efficienza**: quota guadagnata rispetto alla distanza di deriva
3. **Centratura**: quanto sei rimasto vicino al nucleo
4. **Regolarità**: quanto è stata costante la salita
5. **Sostenuta**: se sei davvero rimasto a girare, invece di passarci attraverso

Una termica potente in cui hai girovagato può prendere un punteggio più basso di una moderata lavorata alla perfezione. Conta la tecnica, non solo la fortuna.

**Etichette di qualità:**

| Punteggio | Etichetta |
|---|---|
| 80 e oltre | Eccezionale |
| Da 73 a 79 | Ottima |
| Da 66 a 72 | Buona |
| Da 60 a 65 | Discreta |
| Sotto 60 | Scarsa |

Queste fasce sono calibrate su voli reali in We-Fly: una termica tipica si colloca a metà dei 60. La formula completa, con un esempio svolto, è in [Il punteggio complessivo delle termiche spiegato](/doc/overall-thermal-score).

## Schemi ricorrenti che potresti notare

**Deriva alta, centratura bassa**: forse entri troppo largo, o non stringi il giro abbastanza in fretta quando trovi la salita.

**Buon tempo di centratura ma efficienza bassa**: la termica stessa poteva essere debole, o il vento forte. Non è sempre colpa tua!

**Variabilità alta**: possono essere le condizioni (una giornata vivace) o un’inclinazione poco costante. I consigli provano a distinguere i due casi guardando quanto è cambiato il raggio dei tuoi giri.

**Ingresso nel nucleo rapido in una termica, lento in un’altra**: guarda la tua tecnica di ingresso. Sei entrato sopravento o sottovento? Hai superato il nucleo?

## Quando usare questo strumento

- **Debriefing dopo il volo**: capisci cosa ha funzionato e cosa no
- **Preparazione alle gare**: analizza la tua tecnica in termica sotto pressione
- **Confronto delle condizioni**: guarda come varia la qualità delle termiche con l’ora del giorno, il sito o il meteo
- **Seguire i progressi**: guarda voli di mesi diversi per vedere come cresci
- **Prima della prossima birra**: dimostra ai tuoi amici che quella termica mostruosa l’hai *davvero* centrata (prove alla mano!)

## Consigli per un’analisi migliore

1. **Dati GPS puliti aiutano**: un segnale GPS debole vuol dire un’analisi meno precisa, e uno strumento che registra un punto al secondo dà i risultati migliori
2. **Confronta termiche simili**: confronta la tecnica in condizioni simili per conclusioni sensate
3. **Non fissarti su un solo volo**: le tendenze su molti voli contano più di una singola termica perfetta
4. **Il vento conta**: un punteggio "Discreta" in una giornata ventosa può valere più di un "Ottima" in aria ferma

## Cosa questo strumento non fa

- **Prevedere le termiche future**: è analisi, non previsione
- **Giudicare le tue scelte**: se dovevi prendere quella salita alle 11 o tirare dritto? Resta una tua decisione
- **Sostituire l’esperienza**: lo strumento mostra i dati, ma imparare a *sentire* le termiche richiede ancora ore di volo

## In conclusione

Questo strumento non ti renderà un pilota migliore dall’oggi al domani, ma ti mostra *esattamente* cosa fai in termica. Che tu voglia ridurre il tempo di centratura o sia solo curioso di capire perché una salita era diversa, la scheda **Termiche** ti copre le spalle.

Ora vai a volare, trova qualche termica e torna a vedere se sei bravo quanto pensi.

---

Vedi anche: [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings) | [Il punteggio complessivo delle termiche spiegato](/doc/overall-thermal-score)
