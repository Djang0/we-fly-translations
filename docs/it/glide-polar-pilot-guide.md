---
title: Guida alla polare per piloti
description: Come leggere il grafico delle prestazioni in planata (e cosa non può dirti)
category: Your Flights
order: 5
---

*Ovvero: come guardare una linea blu tutta curve e capire se il lavoro grosso l’ha fatto la tua vela o l’atmosfera.*

## Ma che diavolo è questo grafico?

Hai aperto la scheda **Vector vario**, sei sceso oltre le serie temporali e ora stai fissando una macchia blu un po’ cupa con un paio di linee che ci vagano dentro. Benvenuto nel grafico **Prestazioni in planata**: il tentativo di we-fly di mostrarti cosa ha fatto davvero la tua vela a ogni velocità durante i tratti in planata del tuo volo.

**La versione breve:** è un grafico del tuo **vario (tasso di caduta) in funzione della velocità vera (TAS)**, limitato ai momenti in cui stavi davvero planando. La forma delle linee è la cosa più vicina che possiamo darti a "la polare della tua vela in questo giorno preciso, in quest’aria precisa, con te in selletta".

**La versione onesta:** *non* è la polare del costruttore della tua vela. Non può esserlo. Non conosciamo la resistenza della tua selletta, non conosciamo al grammo il tuo peso totale in volo e di certo non sappiamo cosa ha fatto l’atmosfera tra te e il suolo. Quello che *sappiamo* è cosa ha registrato il tuo logger, e lo riportiamo fedelmente, con tutta la dispersione e l’incertezza intatte.

**Cosa vogliono sapere davvero i piloti:**
- "Qual è la mia efficienza massima con questa vela?"
- "A che velocità scendo più piano?"
- "Quanta della mia 'planata' era in realtà salita gratis regalata dall’atmosfera?"
- "La mia vela rispetta la sua scheda tecnica, o il reparto marketing ha esagerato?"

Questo grafico risponde abbastanza bene alle prime tre. La quarta richiede qualche volo in più e una sana dose di scetticismo (ci arriviamo).

---

## Perché dovrebbe interessarmi?

Se fai volo di distanza, le prestazioni in planata sono *la* cosa che trasforma le belle giornate termiche in voli lunghi. Scendi meno, plani più lontano, arrivi alla nuvola successiva prima dei tuoi amici. Il grafico ti dà:

1. **Un confronto con la realtà sulla tua vela**: confronta quello che hai osservato con la polare pubblicata. Se lo scarto è enorme, qualcosa non va (vela, peso, selletta o atmosfera).
2. **Un’indicazione sulla velocità da tenere**: guarda dove la linea tratteggiata tocca il suo punto più alto (tasso di caduta minimo) e dove è tangente alla retta di efficienza più ripida (efficienza massima).
3. **Una lettura onesta dell’atmosfera**: lo scarto tra "quello che ho fatto" e "quello che farebbe la mia vela da sola" è in pratica un termometro di quanto l’aria era portante.
4. **Uno strumento di debriefing**: dopo un volo, avevi l’impressione di affondare? Il grafico ti dice se la vela stava davvero lavorando duro o se era l’aria a punirti.

---

## Anatomia del grafico

Prima di dargli un significato, diamo un nome alle parti. Immagina un grafico con la TAS in basso (24-53 km/h in un tipico volo di distanza) e il vario sul lato (in alto intorno a +0,5 m/s, in basso spesso fino a -4 m/s).

### L’asse X: velocità vera (km/h)
TAS = quanto veloce ti muovi rispetto alla massa d’aria (non rispetto al suolo, quella è la velocità GPS). I tuoi sensori la misurano direttamente con un tubo di Pitot sul Vector Vario.

**Perché si ferma dove si ferma:** il grafico mostra solo le fasce di TAS con **almeno 20 campioni in fase di planata**. Se hai passato solo 5 secondi tutto accelerato, quella fascia viene scartata. Il grafico finisce di proposito dove finiscono i dati: niente estrapolazioni, niente curve inventate sul vuoto.

### L’asse Y: vario (m/s)
Lo zero è il volo livellato. Negativo vuol dire che scendi (dove passi la maggior parte delle planate). Positivo vuol dire che sali, e sì, succede anche nelle fasi di "planata", perché le termiche sono subdole.

### La banda blu ombreggiata: dal 10° al 90° percentile
Per ogni fascia di TAS da 1 km/h, è la dispersione dei valori di vario che hai registrato.

- **Banda larga** = l’atmosfera era imprevedibile (alla stessa TAS un po’ di discendenze, un po’ di ascendenze)
- **Banda stretta** = condizioni costanti, una lettura più affidabile della tua vela

### La linea blu continua: vario mediano
Il valore centrale dei dati a ogni TAS. È **quello che hai fatto davvero, in media**, planando a quella velocità.

**Verità subdola:** in una bella giornata di distanza questa linea sembra sospettosamente lusinghiera, magari -1 m/s a 40 km/h, che ti dà un’efficienza intorno a 11:1. Quella non è la tua vela. È la tua vela **più tutta la salita gratis che hai attraversato**. Ne riparliamo tra un attimo.

### La linea tratteggiata blu scuro: mediana in aria calma
È il vario mediano del **quartile a netto più basso** di ogni fascia di TAS: il 25% dei campioni in cui l’atmosfera scendeva di più (o saliva di meno). È la nostra migliore stima empirica di "cosa faceva la vela quando l’aria non ti aiutava".

**Stesso volo, storia molto diversa:** a 40 km/h questa linea potrebbe stare a -3 m/s, con un’efficienza più vicina a 3,7:1. Ripida. Onesta. Più vicina a quello che un costruttore stamperebbe sulla scheda tecnica.

### Le celle della nuvola di punti (tenui, dietro a tutto)
Ogni cella (TAS, vario) è colorata in base al **netto medio** (vario meno il tasso di caduta presunto della vela):

- **Celle blu**: stavi volando in aria che scende
- **Celle pesca/arancio**: stavi volando in aria che sale
- **Dimensione della bolla**: quanti campioni sono finiti in quella cella

In pratica è una mappa di calore di come ti ha trattato l’atmosfera a ogni velocità. Bella e istruttiva.

### Le isolinee di efficienza (raggi diagonali grigi tratteggiati)
Sono raggi che partono dall’origine (0,0) a efficienza costante, disegnati a **3:1, 5:1, 7:1, 9:1, 12:1, 15:1, 20:1** (solo quelli che stanno nel grafico visibile).

Siccome il grafico parte da TAS=24 (non da 0), l’origine sta fuori dallo schermo in basso a sinistra e le isolinee appaiono come diagonali tratteggiate che salgono da in basso a sinistra verso in alto a destra.

**Come leggerle:**
- Dove la **linea tratteggiata in aria calma incrocia un’isolinea** → quella è la TAS a cui la vela raggiunge quell’efficienza in aria senza ascendenza.
- Dove un’isolinea è **tangente** alla polare tratteggiata (la tocca senza attraversarla) → quella è la tua **efficienza massima in questo volo**.

Un esempio veloce: se la polare tratteggiata incrocia il raggio 5:1 a TAS=42 km/h, allora a 42 km/h in aria calma avresti planato 5 km per ogni km di quota persa. Se il raggio 9:1 sfiora appena la curva tratteggiata a TAS=32 km/h, quello è il tuo punto di tangenza, la tua migliore planata della giornata, a quella velocità.

### La linea di riferimento Y=0 (tratteggiata, orizzontale)
Il confine tra discesa (sotto) e salita (sopra). Sopra questa linea, l’atmosfera ti dava più salita di quanta caduta producesse la vela. Utile per capire quanto delle tue "planate" aveva in realtà un sapore di termica.

### Le due schede di metriche sotto il grafico

**Miglior tasso di caduta osservato (mediana):** la fascia di TAS in cui il vario mediano era il meno negativo, cioè dove in media scendevi più piano. Viene con il numero di campioni, la dispersione 10-90 e il valore stimato in aria calma alla stessa TAS.

**Miglior efficienza osservata (mediana):** la fascia di TAS con l’efficienza più alta (TAS in m/s divisa per il valore assoluto del vario mediano). Stesse statistiche a supporto.

---

## Come leggerlo davvero

Qui viene il bello. Ci sono due letture parallele, entrambe valide, che ti dicono cose diverse.

### Lettura 1: "Cosa ho ottenuto?"

Guarda la **linea blu continua**. È la tua prestazione reale, la vela più tutto quello che l’atmosfera ti ha regalato. In un tipico volo di distanza:

- Vario mediano a 40 km/h: magari **-1 m/s**
- Efficienza implicita: ~**11:1**

Sembra ottimo, vero? È perché molti dei tuoi campioni di "planata" sono stati presi in aria che saliva (bolle termiche in planata, dinamica, zone di convergenza, quella misteriosa salita da 0,5 m/s durata 90 secondi che ti ha salvato la pelle). Non mente. Riporta solo quello che è successo. Quel giorno hai davvero fatto una planata media di 11:1, perché l’aria ti ha aiutato.

Questa è la linea da guardare quando ti chiedi **"come sto andando in questo volo?"**.

### Lettura 2: "Cosa fa la mia vela da sola?"

Guarda la **linea tratteggiata**. Stesso volo, stessi dati, ma solo i campioni a netto più basso, quelli in cui l’atmosfera è stata *meno* generosa. In quello stesso volo di distanza:

- Vario mediano in aria calma a 40 km/h: magari **-3 m/s**
- Efficienza implicita: ~**3,7:1**

Molto più ripida. Più vicina alla polare pubblicata da un costruttore (anche se non identica, vedi la sezione sui limiti). Questa è la linea da guardare quando ti chiedi **"come va davvero la mia vela?"**.

### Lettura 3 (bonus): "Quanto era portante?"

Prendi lo scarto tra la linea continua e quella tratteggiata a una TAS qualsiasi. Quello scarto è più o meno **quanta salita gratis ti ha regalato in media l’atmosfera** a quella velocità.

- **Scarto grande** (la linea continua sta molto sopra la tratteggiata): per gran parte delle tue "planate" stavi cavalcando delle ascendenze. Nel volo di distanza spesso è una cosa *buona*: strade di cumuli efficienti, linee portanti, inseguimento delle convergenze.
- **Scarto piccolo** (le linee si stanno appiccicate): stavi davvero solo planando in aria neutra o in discendenza. Onesto, magari faticoso, ma almeno lo sai.

È la lettura da "termometro atmosferico". Ti dice meno sulla tua vela e di più sulle condizioni in cui hai volato.

---

## Domande frequenti dei piloti

### "Dov’è il mio tasso di caduta minimo?"

Guarda la linea tratteggiata e trova il suo punto più alto (vario meno negativo). La scheda di metrica sotto il grafico lo indica esplicitamente con TAS e numero di campioni.

**Attenzione:** se il grafico parte da 24 km/h ma la vera velocità di caduta minima della tua vela è 22 km/h, il tasso di caduta minimo riportato è solo *la velocità più lenta a cui hai effettivamente volato*, non il vero picco della vela. Il grafico non può leggere quello che non hai registrato.

### "Dov’è la mia efficienza massima?"

Trova l’isolinea di efficienza **tangente** alla linea tratteggiata, il raggio con l’efficienza più alta che tocca ancora la curva. La TAS nel punto di tangenza è la tua velocità di massima efficienza in aria calma.

Di solito trovi l’efficienza massima da qualche parte tra la TAS di caduta minima e la velocità di trim. Più veloce della caduta minima (perché più veloce = più distanza orizzontale al secondo), più lenta del trim (perché al trim scendi più in fretta che nel punto ideale di efficienza).

### "È la polare pubblicata della mia vela?"

**No, e su questo vogliamo essere chiarissimi.** È la prestazione empirica di *te + la tua vela + la tua selletta + quest’atmosfera, in questo volo*. La linea tratteggiata è la stima empirica più vicina che possiamo calcolare, ma non è la stessa cosa. Per confrontarti con la scheda tecnica, cerca a parte la polare della tua vela (pagina del costruttore, rapporto di test DHV, discussioni sui forum di parapendio, vedi la sezione sui limiti).

### "Perché il mio grafico finisce a 53 km/h quando so di essere arrivato a 60?"

Perché probabilmente ci hai passato solo pochi secondi. Le fasce con meno di 20 campioni in fase di planata vengono scartate per evitare spazzatura statistica. Se vuoi che il grafico si estenda di più, vola più a lungo veloce (o fai più voli, anche se per ora questo grafico è solo per singolo volo).

### "Perché in alcune fasce manca la linea tratteggiata?"

La stima in aria calma ha bisogno di **almeno 4 campioni con il netto** in una fascia per essere calcolata. Le fasce troppo povere la saltano. Vedrai la linea tratteggiata sparire ai bordi dell’intervallo di TAS.

---

## I limiti onesti (leggilo due volte)

Questa è la parte in cui non esageriamo. Il grafico è utile. È anche pieno di trappole sottili.

### 1. Non abbiamo la polare pubblicata della tua vela

We-fly non memorizza le polari dei costruttori per ogni vela. Non conosciamo l’allungamento della tua vela come lo misura il costruttore, la classe di resistenza della tua selletta, il tuo peso totale in volo esatto né le misure del collaudatore che l’ha omologata. Quindi **non possiamo disegnare una curva di riferimento "ideale"** per il confronto.

Per confrontare la tua vela con la scheda tecnica devi cercarla a parte. La maggior parte dei costruttori pubblica una polare (o qualcosa di simile) nelle note tecniche; i rapporti di test DHV la includono; a volte le discussioni sui forum scavano a fondo. La linea tratteggiata sul grafico è la tua **stima basata sul volo**, non la verità del costruttore.

### 2. La distorsione da salita in planata

Durante le fasi di planata i piloti attraversano di continuo aria che sale: bolle termiche in planata, dinamica sul lato sopravento di uno sperone, linee di convergenza, l’occasionale strada di cumuli fortunata. Quei campioni hanno *un vario più alto di quello che produrrebbe la vela da sola*.

La **linea mediana** ne viene gonfiata senza mezzi termini. La **linea tratteggiata in aria calma** cerca di compensare prendendo solo i campioni a netto più basso, ma non è perfetta: anche il quartile "calmo" potrebbe includere qualche debole ascendenza che non potevi vedere.

**Morale:** anche la linea tratteggiata è probabilmente un po’ lusinghiera rispetto alle vere prestazioni in aria perfettamente calma.

### 3. Il netto non è una verità magica

Il Vector Vario calcola il netto come `vario - configured_wing_polar(TAS)`. Quindi i valori di netto usati per scegliere il "quartile a netto basso" derivano a loro volta da **qualunque polare fosse configurata nel tuo VV**.

Se quella polare configurata è molto sbagliata (vela sbagliata nelle impostazioni, peso sbagliato, valori di fabbrica mai cambiati), il sottoinsieme in aria calma sarà distorto. La nostra "stima in aria calma" è una stima della polare *migliore* della mediana grezza, ma **non è una misura indipendente**. Dipende dalla polare già caricata nel tuo vario.

Traduzione: il grafico è coerente al suo interno ma non è calibrato in modo indipendente. Spazzatura in entrata, spazzatura un po’ migliore ma comunque non perfetta in uscita.

### 4. La TAS di caduta minima può essere un artefatto

La scheda "Miglior tasso di caduta osservato" riporta semplicemente la fascia di TAS con il vario mediano meno negativo. **Se non hai mai volato abbastanza piano** da raggiungere la vera velocità di caduta minima della tua vela, il valore riportato è solo la TAS più lenta a cui hai effettivamente volato.

Esempio: la vera caduta minima della vela è a 22 km/h, ma la tua planata sostenuta più lenta in questo volo era a 24 km/h. Il grafico riporterà 24 km/h come "miglior tasso di caduta osservato", anche se la vela avrebbe fatto meglio più piano. Il grafico **non estrapola** sotto la tua planata più lenta. È voluto: preferiamo riportare per difetto piuttosto che inventare.

### 5. Il grafico finisce dove finiscono i dati

Le fasce di TAS con meno di 20 campioni in fase di planata vengono scartate. Una breve accelerata a fondo di 10 secondi non genera abbastanza campioni per pubblicare un percentile, quindi il grafico semplicemente non arriva fin lì.

**Perché è una funzione e non un bug:** non vogliamo disegnare una curva su velocità a cui hai volato a malapena. La fine visibile del grafico è *letteralmente l’intervallo in cui abbiamo dati statisticamente significativi*. Se vuoi un grafico più ricco, vola più a lungo nell’intervallo di velocità che ti interessa.

### 6. Il rilevamento delle fasi di planata ha bordi sfumati

La "fase di planata" viene dall’analizzatore delle fasi di we-fly, che usa la stabilità della prua, le escursioni basse del vario e qualche altra euristica. Funziona bene quasi sempre, ma i casi limite si infilano:

- Un pilota che cerca tra una termica e l’altra con lunghe S potrebbe essere classificato "in planata" anche se, a ben vedere, stava girando in termica.
- Una termica debole e con molta deriva in cui giri a malapena potrebbe essere etichettata come planata.
- I secondi di transizione all’inizio e alla fine di una planata possono essere inclusi oppure no.

Questi casi limite distorcono leggermente il grafico. Non tanto, ma ci sono.

### 7. Un volo ≠ la tua vela

Questo grafico mostra **un volo specifico**. Il tuo peso quel giorno, la configurazione della selletta, il tuo stile di pilotaggio (attivo o passivo), la massa d’aria, il regime convettivo. Tutto conta. Per caratterizzare davvero la tua vela servirebbero molti voli aggregati.

Qui we-fly non aggrega più voli (per ora). Quindi considera il grafico come **una singola osservazione**, non come una conclusione sulla vela.

---

## Quindi… la mia vela va bene?

È la domanda a cui tutti vogliono davvero una risposta. Ecco lo schema onesto.

### Passo 1: guarda la linea tratteggiata su più voli

Un volo è rumore. Tre voli con condizioni di carico alare simili (stesso peso, stessa selletta, stessa vela) cominciano a essere un segnale. Se la linea tratteggiata sta costantemente 1-1,5 m/s sotto la polare pubblicata dal costruttore alla stessa TAS, è uno scarto di prestazioni reale che vale la pena indagare.

### Passo 2: confronta con la scheda tecnica

Recupera la polare pubblicata della tua vela. Di solito i costruttori pubblicano:
- Tasso di caduta minimo (m/s) a una certa TAS (km/h)
- Velocità di trim e tasso di caduta al trim
- A volte uno schizzo della polare completa

Riporta mentalmente quei punti sul grafico. Se la tua linea tratteggiata è sensibilmente più ripida della scheda tecnica, i candidati per lo scarto sono:
- Peso del pilota troppo alto o troppo basso (carico alare fuori forcella)
- Resistenza della selletta (un pod ad alta resistenza contro la selletta da gara affusolata del collaudatore)
- Cordini da rifare (porosità, allungamento dei cordini, età)
- Una vela con qualche centinaio di ore e un leggero calo di prestazioni
- Regolazioni del trim o delle bretelle non ottimali
- Hai volato in un’aria leggermente in discendenza per tutto il volo (succede)

### Passo 3: segui la tendenza

Se registri decine di voli e la linea tratteggiata è stabile, quello è l’inviluppo di prestazioni reale della tua vela con te. Confrontalo con i voli dell’anno prossimo per vedere se la vela invecchia, o con la configurazione identica di un amico per capire se è la vela o il pilota.

### In conclusione

Il grafico è uno **strumento di debriefing**, non un verdetto. Usalo per farti domande migliori sul tuo volo, sulla tua vela e sulle giornate in cui voli. Non usarlo per chiudere le discussioni al bar: i dati hanno troppe avvertenze per quello.

---

## Promemoria rapido

| Domanda | Dove guardare |
|---|---|
| Cosa ho volato davvero oggi? | Linea blu continua (mediana) |
| Cosa fa la mia vela senza aiuti? | Linea tratteggiata scura (mediana del quartile a netto basso) |
| Quanto erano variabili le condizioni? | Larghezza della banda blu |
| A questa velocità l’aria saliva o scendeva? | Colore delle celle (pesca = ascendenza, blu = discendenza) |
| Qual è la mia efficienza massima? | Isolinea tangente alla linea tratteggiata |
| Qual è la mia velocità di caduta minima? | Punto più alto della linea tratteggiata (o scheda di metrica) |
| Quanta "salita gratis" ho preso in media? | Scarto verticale tra linea continua e tratteggiata |

---

## Un ultimo pensiero

Il grafico della polare non mente, ma non dice nemmeno tutta la verità. Ti dice cosa ha registrato il tuo logger, con tutta la dispersione e l’incertezza intatte. In realtà è più utile di una stima puntuale sicura di sé: ti costringe a farti domande invece di ingoiare un numero.

Quindi la prossima volta che qualcuno al club si vanta della sua "planata a 11:1 per tutto il volo", apri il tuo grafico, indica la linea tratteggiata alla stessa TAS e chiedi con gentilezza: "in aria calma, o con le termiche a fare metà del lavoro?"

L’atmosfera è generosa. La tua vela è onesta. Il grafico ti mostra entrambe.

Vola lontano, plana piatto, e che la tua linea tratteggiata sia sempre meno ripida di quanto temevi.
