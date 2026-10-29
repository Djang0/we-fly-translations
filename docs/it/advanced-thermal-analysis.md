---
title: Analisi avanzata delle termiche
description: Analisi dettagliata di ogni termica che hai lavorato, centratura, rateo di salita ed efficienza valutati volo per volo
category: Thermal Analysis
order: 1
---

Ti sei mai chiesto se sei davvero un genio della termica o se hai solo avuto fortuna? La scheda **Termiche** di ogni volo è il tuo compagno di debriefing: scompone ogni salita che hai lavorato, giro per giro.

## Che cos'è?

È un analizzatore post-volo che osserva ogni tua mossa in termica. Non si ferma a "sei salito di 500 m". Guarda *come* sei salito: se andavi a caccia del nucleo come un pro o facevi il giro turistico dei bordi.

Quando carichi un volo, We-Fly rileva ogni termica che hai lavorato, assegna a ciascuna un punteggio di qualità su 100 e costruisce un'analisi dettagliata. Immagina un istruttore che rivede la tua traccia e il tracciato del vario, una salita alla volta. Ti incuriosisce come viene riconosciuta una salita? Vedi [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings).

Apri un volo qualsiasi e scegli la scheda **Termiche**. Il numero accanto al nome della scheda indica quante termiche sono state trovate.

## La vista principale

La scheda si legge dall'alto in basso:

1. Una striscia di riepilogo dell'intero volo
2. Il grafico **Vario e raggio dei giri**
3. I filtri e una timeline per scegliere una termica
4. Il visualizzatore della termica selezionata: mappa o vista 3D da un lato, dettagli dall'altro
5. Il grafico **Rateo di salita per quota e ora**

### Striscia di riepilogo del volo

La tua giornata vista dall'alto:

- **Termiche**: quante salite hanno superato la selezione
- **Migliore**: il punteggio di qualità più alto del volo, con il numero della termica e la sua etichetta di qualità
- **Guadagno**: tutta la quota guadagnata in termica
- **Salita media**: il tuo rateo di salita medio su tutte le termiche
- **Qualità**: il punteggio di qualità medio, con la mediana sotto

### Vario e raggio dei giri

Ogni giro completo che hai fatto diventa un punto: il suo raggio in orizzontale, il rateo di salita che ne hai ricavato in verticale. Lo sfondo è diviso in zone etichettate **rischioso**, **ideale**, **ok** e **stringi**, dai giri molto stretti a sinistra a quelli larghi a destra. Se la maggior parte dei tuoi punti migliori sta nella zona **stringi**, sai su cosa lavorare al prossimo volo.

### Scegliere una termica

Sopra la timeline c'è una fila di filtri, ognuno con il numero di termiche che corrispondono:

- **Tutte**: tutte le termiche
- **Migliori 5**: le cinque salite più forti per rateo di salita medio
- **Sotto la mediana**: le termiche con un rateo di salita inferiore alla mediana del volo
- **Con deriva**: le termiche in cui sei derivato di più di 30 m per ogni 100 m guadagnati (si considerano solo le salite di almeno 50 m)

Sotto i filtri, la timeline dispone tutte le termiche sull'orario reale del volo. Il colore di ogni punto indica la qualità e la dimensione la quota guadagnata, così "quella bella grossa verso l'una e mezza" si trova al volo. Clicca un punto per aprire quella termica nel visualizzatore.

La termica selezionata fa parte dell'indirizzo della pagina, quindi puoi condividere un link diretto alla "Termica #7".

### Il visualizzatore della termica

La barra del titolo mostra **Termica #N**, la sua etichetta di qualità, l'ora di inizio, la quota guadagnata e la salita media. A destra passi da **Mappa 2D** a **Vista 3D**.

**Sulla mappa 2D:**

- **La traccia della termica selezionata** è disegnata a punti colorati in base al vario: verde per la salita forte (oltre 3 m/s), giallo per la salita fino a 3 m/s, rosso per la discendenza
- I marcatori **Punto di ingresso** e **Punto di uscita** mostrano dove la salita è iniziata e finita
- **Il nucleo della termica** di ogni termica è un marcatore con un anello tratteggiato. Quello selezionato è rosso, gli altri sono rosa sbiadito per contesto. Passa sopra un nucleo per vederne la forza
- **Posizione attuale** è il marcatore azzurro che si muove durante la riproduzione

**Nella vista 3D**, la stessa salita è disegnata come una spirale che puoi ruotare, con una legenda per **Salita forte**, **Salita debole**, **Discendenza**, **Nucleo della termica**, **Quota di uscita** e **Posizione attuale**.

## Riproduzione animata

Sotto la mappa o la vista 3D c'è la barra di riproduzione:

- **Riproduci** / **Pausa**: rivedi la termica punto per punto
- La freccia circolare: torna al primo punto
- Le frecce fotogramma precedente e successivo: avanza nella salita un punto GPS alla volta
- Contatore **Frame**: dove ti trovi nella termica (per esempio 42/156)
- Ora, quota e vario al punto corrente
- Il pulsante mirino: **Centra la mappa su questa termica**, comodo dopo che hai spostato la mappa in giro

Avanzare fotogramma per fotogramma è il modo migliore per individuare il momento esatto in cui hai trovato il nucleo, o l'hai perso.

## Dettagli della termica

Accanto al visualizzatore (sotto, su telefono) c'è il tuo report di coaching. In alto, un grande punteggio di qualità con la sua etichetta, più due letture rapide: **netta** (salita netta, la tua salita media dall'ingresso all'uscita) e **ctr** (centratura).

Più sotto, i dettagli sono raccolti in sezioni richiudibili. Se ne apre una alla volta e, da chiusa, ognuna mostra un'anteprima di una riga, così puoi scorrere tutta la storia senza scrollare.

#### Salita

- **Guadagno**: quota totale guadagnata
- **Media**: rateo di salita medio
- **Max**: la salita migliore, smussata su 5 secondi (il picco grezzo su un singolo punto è mostrato sotto)
- **Min**: il momento più debole, di solito all'ingresso o quando sei uscito dal nucleo
- **Variab.**: quanto è variato il rateo di salita. Basso vuol dire una termica regolare, alto vuol dire una termica nervosa o turbolenta

#### Nucleo

- **Forza**: salita media nel nucleo, il tuo punto ideale
- **Tempo centr.**: quanto ci hai messo a raggiungere il nucleo dall'inizio della termica. Meno è meglio
- **Dimensione**: il raggio di salita del nucleo
- **Dist. media**: a che distanza, in media, hai girato attorno al nucleo
- **Centratura**: quanto sei rimasto vicino al nucleo, in percentuale. Girare al raggio del nucleo vale il 100%

#### Dinamica dei giri

- **Senso**: sinistra o destra (quasi tutti i piloti hanno un lato preferito, nessun giudizio)
- **Giri**: numero di giri completi
- **Velocità**: velocità di rotazione media in gradi al secondo
- **Inclinazione**: stimata dalla dimensione e dai tempi dei tuoi giri, con la velocità all'aria che ne risulta sotto
- **Tempo per giro** e **Raggio del giro**: la dispersione dei tuoi giri, come tempo minimo, mediano e massimo, e raggio al 25° percentile, mediano e al 75° percentile

#### Deriva e vento

- **Velocità del vento**: stimata da come sono derivati i tuoi giri
- **Dist. deriva**: quanto lontano ti ha portato la termica mentre salivi
- **Direzione**: da dove veniva il vento, con una bussola. La freccia della bussola punta verso dove soffiava il vento, e l'etichetta indica la direzione di provenienza, come in una previsione meteo

#### Tempo

**Inizio**, **Fine** e **Durata** della salita. Comodo per confrontarli con i tuoi appunti.

#### Dettaglio del punteggio

Mostra come è stato costruito il punteggio di qualità: una barra per fattore (**Salita**, **Salita netta**, **Centratura**, **Costanza** e **Sostenuta**), il suo peso, il tuo valore effettivo e i punti che ha aggiunto. Il link **Come viene calcolato?** ti porta alla formula completa.

#### Consigli

In base ai numeri qui sopra, ricevi un feedback specifico per questa salita, per esempio:

- Note positive su sfondo verde: "Ottimo ingresso nel nucleo: hai trovato la salita più forte in 12 s."
- Suggerimenti su sfondo ambra: "Ingresso nel nucleo lento: … Prova giri iniziali più larghi per sentire il gradiente."

I consigli nascono dalle misure di questa termica (dimensione del nucleo, deriva, inclinazione, variabilità), non sono consigli generici. Per un riepilogo sull'intero volo, guarda il pannello **Coaching** nella scheda **Riepilogo** del volo.

## Rateo di salita per quota e ora

In fondo alla scheda, ogni termica è collocata per ora del giorno e quota, colorata in base al rateo di salita. Cambia il riferimento di quota tra **s.l.m.** e **AGL** (rispetto al decollo). La linea tratteggiata è il plafond operativo della giornata; se si divide in due gradini, il plafond del mattino e quello del pomeriggio erano diversi. Clicca un punto qualsiasi per tornare su a quella termica nel visualizzatore.

## Il punteggio di qualità spiegato

Il punteggio di qualità non è semplicemente "buon rateo di salita = punteggio alto". È un punteggio su 100 che combina cinque fattori:

1. **Salita**: quanto era forte la salita nel suo momento migliore
2. **Salita netta**: la quota guadagnata rispetto al tempo passato in termica, che il vento non cambia
3. **Centratura**: quanto sei rimasto vicino al nucleo
4. **Costanza**: quanto è stata regolare la salita
5. **Sostenuta**: se ci sei rimasto davvero a girare, invece di attraversarla e basta

Una termica potentissima in cui hai vagato a casaccio può valere meno di una moderata che hai lavorato alla perfezione. Conta la tecnica, non solo la fortuna.

**Etichette di qualità:**

| Punteggio | Etichetta |
|---|---|
| 74 e oltre | Eccezionale |
| Da 68 a 73 | Eccellente |
| Da 63 a 67 | Buona |
| Da 58 a 62 | Discreta |
| Sotto 58 | Scarsa |

Queste fasce sono tarate su voli reali in We-Fly: una termica tipica si piazza a metà dei 60. La formula completa, con un esempio svolto, è in [Il punteggio complessivo delle termiche spiegato](/doc/overall-thermal-score).

## Schemi ricorrenti che potresti notare

**Deriva alta, centratura bassa**: forse entri troppo largo, o non stringi il giro abbastanza in fretta quando trovi la salita.

**Buon tempo di centratura ma salita netta bassa**: forse la termica stessa era debole, o hai fatto dei giri fuori dopo aver trovato il nucleo. Non sempre è colpa tua!

**Variabilità alta**: possono essere le condizioni (una giornata ballerina) o un'inclinazione poco costante. I consigli cercano di distinguere i due casi guardando quanto è cambiato il raggio dei tuoi giri.

**Ingresso nel nucleo rapido in una termica, lento in un'altra**: guarda la tua tecnica di ingresso. Sei arrivato sopravento o sottovento? Hai superato il nucleo?

## Quando usare questo strumento

- **Debriefing post-volo**: capire cosa ha funzionato e cosa no
- **Preparazione alle gare**: analizzare la tua tecnica in termica sotto pressione
- **Confrontare le condizioni**: vedere come cambia la qualità delle termiche con l'ora, il sito di volo o il meteo
- **Seguire i progressi**: guardare voli di mesi diversi per vedere come migliori
- **Prima della prossima birra**: dimostrare agli amici che quella termica mostruosa l'hai *davvero* centrata (prove alla mano!)

## Consigli per un'analisi migliore

1. **Dati GPS puliti aiutano**: un segnale GPS debole significa un'analisi meno precisa, e uno strumento che registra ogni secondo dà i risultati migliori
2. **Confronta termiche simili**: confronta la tecnica in condizioni simili per ricavarne qualcosa di utile
3. **Non fissarti su un solo volo**: le tendenze su molti voli contano più di una singola termica perfetta
4. **Il vento conta**: un punteggio "Discreta" in una giornata ventosa può valere più di un "Eccellente" in aria calma

## Cosa non fa questo strumento

- **Prevedere le termiche future**: è analisi, non previsione
- **Giudicare le tue scelte**: dovevi prendere quella salita alle 11 o tirare dritto? Resta una tua decisione
- **Sostituire l'esperienza**: lo strumento mostra i dati, ma imparare a *sentire* le termiche richiede comunque ore di volo

## In conclusione

Questo strumento non ti renderà un pilota migliore dall'oggi al domani, ma ti mostra *esattamente* cosa fai in termica. Che tu voglia ridurre il tempo di centratura o sia solo curioso di capire perché una salita ti è sembrata diversa, la scheda **Termiche** ti dà una mano.

Ora vai a volare, trova qualche termica e torna a vedere se sei bravo quanto pensi.

---

Vedi anche: [Come funziona il rilevamento delle termiche](/doc/advanced-thermal-analysis-settings) | [Il punteggio complessivo delle termiche spiegato](/doc/overall-thermal-score)
