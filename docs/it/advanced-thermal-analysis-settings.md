---
title: Come funziona il rilevamento delle termiche
description: Le regole che We-Fly usa per decidere dove inizia una termica, dove finisce e quali salite entrano nell’elenco
category: Thermal Analysis
order: 2
---

*Ovvero: come l’analisi decide che tutto quel girare era davvero una termica*

Ogni termica che vedi nella scheda **Termiche** di un volo è stata trovata dallo stesso rilevatore, con le stesse soglie, per ogni pilota. Non ci sono cursori da regolare né niente da azzerare: le regole sono fisse, così i tuoi numeri vogliono dire la stessa cosa di quelli del tuo compagno di volo, volo dopo volo.

Questa pagina spiega quelle regole, così quando l’analisi ignora una salita che sei sicuro di aver lavorato (o divide una termica in due), sai perché.

---

## La versione breve

1. Il rilevatore guarda una breve finestra mobile della tua traccia e si fa quattro domande: stai salendo, stai girando, la virata è regolare, hai guadagnato quota?
2. Fonde le risposte in un unico **punteggio di termica** tra 0 e 1.
3. Una piccola macchina a stati con un’esitazione incorporata trasforma quel punteggio in "planata" e "in termica", così una singola bolla o un giro nella discendenza non ribaltano il risultato.
4. Ogni salita candidata viene poi ritagliata sui giri che hai davvero fatto e tenuta solo se è abbastanza lunga, guadagna quota e contiene almeno due virate complete.

Il resto della pagina è il dettaglio dietro ogni passaggio.

Tutte le soglie qui sotto sono i valori che il motore usa internamente, in unità metriche. Le tue unità di visualizzazione (piedi, nodi e così via) cambiano il modo in cui ti vengono mostrati i numeri, non dove vengono tracciati i limiti.

---

## Passaggio 1: quattro segnali da una finestra mobile

Per ogni punto GPS, il rilevatore guarda indietro ai dieci punti precedenti. Con un tipico registratore che salva un punto al secondo, sono circa dieci secondi di volo, più o meno tra un quarto e metà di un giro.

Da quella finestra legge quattro segnali, ognuno ricondotto a una scala da 0 a 1:

| Segnale | Cosa misura | Punteggio pieno a | Peso |
|---|---|---|---|
| Vario | Velocità verticale media sulla finestra | 3 m/s | 45% |
| Regolarità della virata | Quanto è costante la tua velocità di virata | virata perfettamente regolare | 25% |
| Velocità di virata | Quanto in fretta cambia la tua prua | 30°/s | 20% |
| Guadagno di quota | Quota netta guadagnata sulla finestra | 50 m | 10% |

Il vario pesa di più perché è la prova più diretta della portanza. Segue la regolarità della virata, perché distingue una termica organizzata (giri morbidi e ripetibili) dalla turbolenza casuale, dove la tua prua salta da una parte all’altra. Velocità di virata e guadagno di quota confermano il quadro.

La somma pesata è il **punteggio di termica**. Un pilota che plana dritto in aria calma ha un punteggio vicino a zero; un pilota che disegna giri regolari in una buona ascendenza supera nettamente 0,5.

---

## Passaggio 2: la macchina a stati (perché il rilevatore esita apposta)

Se il rilevatore dicesse semplicemente "punteggio sopra X vuol dire termica", il risultato si accenderebbe e spegnerebbe ogni volta che prendi uno scossone o passi dal lato in discendenza di un nucleo spezzato. Per questo passa invece per quattro stati:

| Stato | Come ci entri | Come ne esci |
|---|---|---|
| **Planata** | Stato iniziale | Il punteggio arriva a **0,35** → Ingresso |
| **Ingresso** | Il punteggio ha raggiunto 0,35 | Il punteggio resta a 0,35 o più per **5 secondi** → In termica. Scende sotto 0,35 → di nuovo Planata (falso allarme) |
| **In termica** | Termica confermata | Il punteggio scende sotto **0,20** → Uscita |
| **Uscita** | Il punteggio è sceso sotto 0,20 | Resta sotto 0,20 per **3 secondi** → Planata. Risale a 0,35 o più → di nuovo In termica |

Qui contano due dettagli:

- **Entrare è più difficile che uscire.** Ti serve 0,35 per iniziare una termica, ma per tenerla basta restare sopra 0,20. Questo scarto (si chiama isteresi) è ciò che impedisce a una termica sfilacciata di essere tagliata in cinque pezzi.
- **Nel mezzo, il rilevatore aspetta.** Se il punteggio resta tra 0,20 e 0,35 mentre stai uscendo, non chiude la termica né la fa ripartire finché il quadro non è chiaro.

### Reti di sicurezza per le salite lunghe

Una termica lunga accumula molta quota, e quella quota messa da parte può nascondere il momento in cui la portanza si è davvero fermata. Due regole in più se ne accorgono:

- **Controllo dell’andamento recente.** Mentre sei in termica, se gli ultimi 60 secondi mostrano una perdita netta di quota, la termica viene chiusa subito, per quanto fosse buona prima.
- **Controllo della salita media.** Dopo il primo minuto, la salita media dall’inizio della termica deve restare sopra 0,2 m/s. La soglia sale a 0,3 m/s dopo tre minuti e a 0,4 m/s dopo cinque. Se scendi sotto, la termica viene chiusa.
- **Interruzione per discesa netta.** Una volta in uscita, perdere altri 30 m chiude subito la termica, anche se qualche giro di ricerca fa risalire per un attimo il punteggio.

Queste regole sono il motivo per cui due salite vere unite da una breve planata di ricerca compaiono come due termiche, non una.

---

## Passaggio 3: ritagliare, poi tenere o scartare

Quando una termica si chiude, il rilevatore la ripulisce prima di decidere se conta.

**Ritaglio.** La macchina a stati apre una termica qualche secondo dopo che hai iniziato a girare e la chiude qualche secondo dopo che ne sei uscito. Quei bordi sono soprattutto planata di ricerca, quindi la termica viene ritagliata per andare dall’inizio della tua prima virata completa di 360° alla fine dell’ultima. Una virata completa richiede almeno otto punti GPS, così un’oscillazione rumorosa non conta.

**Tenere o scartare.** Dopo il ritaglio, una termica viene tenuta solo se:

- ha **guadagnato quota** complessivamente,
- è durata almeno **15 secondi**, e
- contiene almeno **due virate complete**.

Tutto il resto viene considerato un passaggio in ascendenza o una virata di ricerca, non una termica. Quel tempo lo vedi comunque nella scheda **Fasi**: i giri che non hanno passato la selezione compaiono come **Ricerca**, e il resto come **Planata** o **Galleggiamento**.

### Decolli al traino e a motore

Una salita al traino, al verricello o in paramotore è forte e regolare, cioè esattamente ciò che ottiene un buon punteggio, ma non è una termica. Quando il tipo di decollo di un volo è **Al traino** o **A motore**, il rilevamento inizia solo dalla tua prima virata sostenuta (una velocità di virata livellata di almeno 8°/s mantenuta per otto punti consecutivi). Tutto ciò che viene prima è considerato la salita di decollo.

Se il tipo di decollo di un volo è sbagliato, correggilo con **Cambia tipo di decollo** nel menu delle azioni del volo. Il volo viene rianalizzato con la nuova impostazione.

---

## Passaggio 4: cosa viene misurato su ogni termica

Una volta tenuta una termica, l’analisi la misura. Questi sono i numeri che vedi nel pannello dei dettagli della termica:

- **Salita.** Guadagno, salita media, massima e minima. Massima e minima sono livellate su 5 secondi, così un singolo punto GPS rumoroso non può stabilire un record; i picchi grezzi su un solo punto sono mostrati accanto come "picco".
- **Nucleo.** Per ogni virata completa, l’analisi trova il centro della portanza, pesato verso i punti in cui salivi meglio. Quei centri per virata vengono combinati nella posizione, nella forza e nella dimensione del nucleo della termica.
- **Tempo di centratura.** Il tempo dall’inizio della termica al primo momento in cui eri entro 50 m dal nucleo salendo a più del 70% della forza del nucleo.
- **Centratura.** Quanto vicino al nucleo hai girato. Girare al raggio del nucleo stesso (o più stretto) vale il 100%; ogni raggio di nucleo in più di distanza costa il 50%, quindi girare a tre volte il raggio del nucleo vale zero. La deriva del vento viene tolta confrontando ogni virata con il proprio centro locale.
- **Efficienza.** La quota guadagnata divisa per la distanza orizzontale tra il punto in cui la termica è iniziata e quello in cui è finita, con un massimo del 100%.
- **Dinamica della virata.** Direzione, numero di virate complete, velocità di virata media, tempo per giro, raggio del giro, e una stima dell’inclinazione e della velocità all’aria ricavate dal raggio e dalla durata della virata.
- **Deriva e vento.** La distanza di deriva e una stima della velocità e della direzione del vento in base a come i tuoi giri si sono spostati sul terreno.

Questi valori alimentano il **punteggio di qualità** della termica e i suoi **Consigli**. La formula del punteggio ha una pagina tutta sua: [Il punteggio complessivo delle termiche spiegato](/doc/overall-thermal-score).

---

## Domande frequenti

### Perché la mia salita preferita non è nell’elenco?

Controlla questi punti in ordine:

1. Hai fatto almeno **due virate complete**? Una salita attraversata dritta, o con una sola virata, non viene contata.
2. È durata almeno **15 secondi** una volta ritagliata sui tuoi giri?
3. Hai davvero **guadagnato quota** tra la prima e l’ultima virata completa?
4. Era subito dopo un traino o una salita a motore? Su un volo **Al traino** o **A motore**, niente di ciò che precede la tua prima virata sostenuta conta.

### Perché una termica è stata divisa in due?

Il più delle volte è scattato il controllo dell’andamento recente o l’interruzione per discesa netta: a metà strada hai perso quota per un minuto, oppure hai perso 30 m mentre il punteggio era basso. Dal punto di vista della traccia, hai lasciato una termica e ne hai trovata un’altra.

### Posso cambiare le soglie?

No. Le versioni precedenti di We-Fly avevano un pannello di impostazioni per questo; non c’è più. Regole fisse significano che il numero di termiche, i ratei di salita e i punteggi di qualità si possono confrontare in modo equo tra i tuoi voli e con gli altri piloti.

### Queste regole cambiano le statistiche dei miei voli?

Le definiscono. Il numero di termiche, la quota guadagnata in termica, la salita media e i numeri del Cockpit sul volo in termica vengono tutti da questo rilevatore. Siccome tutti hanno le stesse regole, i confronti sono alla pari.

### L’intervallo di registrazione del mio strumento conta?

In parte. La finestra mobile e il test della "virata completa" contano i punti GPS. Gli strumenti che registrano ogni secondo danno il risultato più pulito. Uno strumento che registra ogni pochi secondi vede meno punti per giro, quindi le termiche brevi o strette sfuggono più facilmente.

---

## Per approfondire

- [Analisi avanzata delle termiche](/doc/advanced-thermal-analysis): un giro nella scheda **Termiche**
- [Il punteggio complessivo delle termiche spiegato](/doc/overall-thermal-score): come si costruisce il punteggio di ogni termica
