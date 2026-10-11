---
title: Analisi del Cockpit
description: Analizza le tue statistiche di volo, le tendenze e le prestazioni
category: Cockpit
order: 1
---
Il Cockpit è la tua dashboard delle prestazioni: statistiche e analisi complete su tutti i tuoi voli. Usalo per seguire i tuoi progressi, individuare le ricorrenze e scoprire i siti di volo e le condizioni in cui voli meglio.

## Panoramica

Apri il [Cockpit](/cockpit) per vedere tutte le tue statistiche di volo.

## Le viste del Cockpit

Il Cockpit ha undici viste, ognuna con le sue analisi:

1. **Panoramica**: statistiche e totali sui dati filtrati
2. **Tendenze**: il tuo volo nel tempo, giorno per giorno fino ad anno per anno
3. **Termiche**: ratei di salita, giri in termica e qualità delle termiche, stagione per stagione
4. **Fasi**: come il tuo tempo di volo si divide tra termica, ricerca, planata e galleggiamento
5. **Vela**: tempo di volo suddiviso per vela
6. **Decollo**: statistiche per sito con z-score
7. **Paese**: statistiche dei voli nei diversi paesi
8. **Stagione**: confronto anno su anno
9. **Mese**: suddivisione mensile e andamenti stagionali
10. **CIVL**: la tua classifica mondiale CIVL
11. **Mappa**: i tuoi decolli su una mappa

### Navigazione

- Scegli una vista dal menu del Cockpit
- Ogni vista lavora sui [dati filtrati](./data-filters.md)

## Statistiche della Panoramica

La pagina Panoramica del [Cockpit](/cockpit) mostra le statistiche di volo dei [dati filtrati](./data-filters.md). Ogni distanza, quota e velocità è mostrata nelle unità che hai scelto nel tuo profilo.

### Totali dei voli

La striscia in cima ti dà i quattro numeri principali:

#### Voli totali
- **Definizione**: numero di tutti i voli nel tuo libretto di volo

#### Tempo di volo totale
- **Definizione**: somma delle durate di tutti i voli
- **Unità**: ore e minuti
- **Calcolo**: somma di tutti gli intervalli (dall’ora di decollo all’ora di atterraggio)

#### Distanza
- **Definizione**: lunghezza totale delle tracce di tutti i voli

#### Volo più lungo
- **Definizione**: il tuo tempo di volo più lungo
- **Mostra**: la durata; cliccala per aprire quel volo

#### Efficacia in volo
- **Definizione**: il tempo passato a girare in termica (**In termica**) rispetto al tempo passato in volo rettilineo (**In planata**)
- **Unità**: ore e minuti, più la ripartizione in percentuale

#### Equilibrio in termica
- **Definizione**: come il tuo tempo in termica si divide tra **Giri a sinistra** e **Giri a destra**

#### Singolo e biposto
- **Definizione**: come il tuo tempo di volo si divide tra voli in **Singolo** e in **Biposto** (compare solo se hai voli in biposto)

### Distanza e punteggio

Tutte le distanze e i punteggi XC sono calcolati dalla libreria open source [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), creata e mantenuta da [Momtchil Momtchev](https://github.com/mmomtchev).

#### Distanza XC
- **Definizione**: somma di tutte le distanze valide dei voli di distanza
- **A cosa serve**: misurare il totale dei tuoi risultati XC

#### Punti XC
- **Definizione**: somma di tutti i punteggi XContest
- **Comprende**: tutti i coefficienti (distanza libera, triangoli)
- **A cosa serve**: confrontare nel tempo le tue prestazioni XC

#### Lunghezza traccia
- **Definizione**: somma delle distanze di tutte le tracce GPS
- **Sempre > distanza XC**: comprende tutti i giri in termica e le deviazioni

### Record personali

Ogni record porta al volo da cui viene: clicca il valore per aprirlo.

#### Quota massima
- **Definizione**: la quota più alta raggiunta in tutti i voli
- **Unità**: sul livello del mare (ASL)

#### Guadagno di quota max
- **Definizione**: il maggior guadagno di quota in un singolo volo
- **Calcolo**: quota max - quota min

#### Velocità massima
- **Definizione**: la velocità al suolo più alta mantenuta per 5 secondi, con i picchi GPS filtrati
- **Nota**: include l’effetto del vento

#### Miglior distanza XC
- **Definizione**: il volo di distanza con la distanza valida più lunga
- **Traguardo**: il tuo record personale XC!

#### Miglior punteggio XC
- **Definizione**: il punteggio XContest più alto su un singolo volo
- **Nota**: può essere diverso dalla distanza migliore (per via dei coefficienti dei triangoli)

#### Ripartenza più bassa
- **Definizione**: il punto più basso (dal suolo) da cui sei ripartito salendo, e quanta quota hai recuperato

### Prestazioni

- **Tempo giro med.**: tempo mediano per ogni virata di 360°
- **Raggio giro med.**: raggio di virata mediano mentre giri in termica
- **Fattore G mediano**: fattore di carico (vedi la [Guida al fattore G per piloti](/doc/g-factor-pilot-guide))
- **Picco della termica più forte**: il miglior rateo di salita, mantenuto per 5 secondi; cliccalo per saltare direttamente a quella termica

## Vista Tendenze

Apri **/cockpit?view=trends** per vedere come evolve il tuo volo nel tempo.

Scegli una **Metrica** (**Tempo di volo**, **Voli**, **Distanza media**, **Tempo di volo medio**, **Velocità media**), un **Intervallo** (**Giorno**, **Settimana**, **Mese**, **Anno**), un **Periodo** (**30 giorni**, **12 mesi**, **Quest'anno**, **Tutto**) e una **Suddivisione** (**Totale** o **Per vela**). Passa la **Vista** da **Grafico** a **Tabella**. Clicca una colonna per aprirne i voli nel libretto di volo.

## Vista Termiche

Apri **/cockpit?view=thermaling** per le statistiche di salita su tutte le termiche dei voli filtrati: **Salita mediana**, **Salita migliore**, **Guadagno di quota mediano**, **Termiche/h**, **Tempo in termica**, tempo e raggio del giro, e **Ripartenze da bassi**. I grafici stagione per stagione sono raggruppati in **Efficacia**, **Volume**, **Tecnica** e **Padronanza**.

## Vista Fasi

Apri **/cockpit?view=phases** per vedere come il tuo tempo di volo si divide tra **Termica**, **Ricerca**, **Planata** e **Galleggiamento**, con la tua **Efficienza mediana**, la **Velocità di planata mediana** e i **Giri / min**, stagione per stagione.

## Vista per mese

Apri **/cockpit?view=month** per vedere le statistiche mensili.

### Suddivisione mensile

- **Mesi più attivi**: i tuoi mesi più intensi, con i **Voli totali** su tutti gli anni, il tuo **Anno più attivo** e l’**Attività per anno**
- **Analisi visiva**: **Durata**, **Numero** e **Z-score** mensili, anno per anno, in barre **Affiancate** o **Impilate**
- **Dettaglio mensile per anno**: una tabella mese per anno dei tuoi voli

### Andamenti stagionali

Scopri le ricorrenze:
- **In quali mesi voli di più?**
- **Quando le condizioni termiche sono più forti?**
- **Come cambia il tuo volo nel corso dell’anno?**

### Casi d’uso

- **Pianifica la stagione**: guarda quando di solito voli meglio
- **Misura la costanza**: quanti mesi all’anno sei attivo?
- **Individua l’alta stagione**: quando accumuli più tempo di volo?

## Vista per stagione (anno)

Apri **/cockpit?view=season** per vedere le statistiche annuali.

### Confronto anno su anno

Per ogni stagione (anno), la tabella mostra:
- **Voli**
- **Ore totali**
- **Media/volo** (ore per volo)
- **Z-score** del tempo di volo medio

Il grafico sopra ti permette di confrontare le stagioni per **Durata**, **Numero** o **Z-score**.

### Seguire i progressi

Confronta gli anni per capire:
- Stai volando di più?
- I tuoi voli si allungano?
- Come si confrontano i diversi anni?

### Casi d’uso

- **Seguire i progressi nel lungo periodo**
- **Confrontare anni diversi**
- **Fissare obiettivi annuali**

## Vista per vela

Apri **/cockpit?view=glider** per confrontare le tue vele.

### Statistiche per vela

Per ogni vela del tuo libretto di volo:
- **Voli**
- **Ore totali**
- **Media/volo** (ore per volo)
- **Z-score** del tempo di volo medio

### Confrontare le vele

Rispondi a domande come:
- Con quale vela resto in aria più a lungo?
- Come si confrontano le mie diverse vele?
- Quale vela volo più spesso?

### Casi d’uso

- **Scelte di materiale**: scegliere la prossima vela
- **Confronto delle prestazioni**: confrontare classi di vela diverse
- **Specializzazione**: capire quale vela funziona meglio in quali condizioni

## Vista per decollo

Apri **/cockpit?view=takeoff** per analizzare le prestazioni sito per sito.

### Statistiche per sito

Per ogni decollo, una tabella ordinabile mostra:
- I **Voli** da quel sito
- Le **Ore totali**
- La **Media/volo** (ore per volo)
- Lo **Z-score**: individuazione statistica dei valori anomali (vedi: [Guida allo z-score per piloti](/doc/z-score-pilot-guide))

## Vista per paese

Apri **/cockpit?view=country** per vedere le statistiche nei diversi paesi.

### Statistiche per paese

Per ogni paese in cui hai volato:
- **Voli**
- **Ore totali**
- **Media/volo** (ore per volo)
- **Z-score** del tempo di volo medio

## Vista CIVL

Apri **/cockpit?view=civl** per vedere la tua classifica CIVL (mondiale, europea e nazionale) e il suo storico. Prima aggiungi il tuo ID CIVL nelle impostazioni del profilo.

## Vista Mappa

Apri **/cockpit?view=map** per vedere su una mappa tutti i decolli da cui hai volato, con il numero di voli da ciascuno.

## Consigli e buone pratiche

### Costruisci il tuo archivio

- **Carica tutti i voli**: più dati = statistiche migliori
- **Voli passati**: carica i vecchi file IGC per avere il quadro completo
- **Costanza**: volare con regolarità dà tendenze più affidabili

### Usa i filtri con strategia

- **Parti largo**: guarda prima le tendenze generali
- **Poi restringi**: applica i filtri per rispondere a domande precise
- **Confronta mele con mele**: usa gli stessi filtri quando fai un confronto

### Tieni conto del contesto

Le statistiche sono potenti, ma considera:
- **La progressione**: migliori con il tempo
- **I cambi di materiale**: una vela nuova cambia le prestazioni
- **Le condizioni**: il meteo varia da una stagione all’altra
- **La dimensione del campione**: 2 voli contro 200 voli (quale è più affidabile?)

### Fissa degli obiettivi

Usa le statistiche per:
- **Seguire i progressi**: confronta con le stagioni precedenti
- **Lanciarti delle sfide**: batti i tuoi record personali
- **Pianificare i miglioramenti**: individua i punti su cui lavorare
