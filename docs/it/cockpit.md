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

Il Cockpit ha sei viste diverse, ognuna con le sue analisi:

1. **Panoramica**: statistiche e totali sui dati filtrati
2. **Vela**: prestazioni suddivise per vela
3. **Stagione**: confronto anno su anno
4. **Paese**: statistiche dei voli all’estero e in casa
5. **Decollo**: statistiche per sito con punteggi di prestazione
6. **Mese**: suddivisione mensile e andamenti stagionali

### Navigazione

- Usa le schede principali per passare da una vista all’altra
- Ogni vista lavora sui [dati filtrati](./data-filters.md)

## Statistiche della Panoramica

La pagina Panoramica del [Cockpit](/cockpit) mostra le statistiche di volo dei [dati filtrati](./data-filters.md).

### Totali dei voli

#### Voli totali
- **Definizione**: numero di tutti i voli nel tuo libretto di volo

#### Tempo di volo totale
- **Definizione**: somma delle durate di tutti i voli
- **Unità**: ore e minuti
- **Calcolo**: somma di tutti gli intervalli (dall’ora di decollo all’ora di atterraggio)

#### Tempo totale in termica
- **Definizione**: tempo totale passato a girare in termica
- **Unità**: ore e minuti
- **Suddivisione**: separato tra giri a sinistra e giri a destra

#### Tempo totale in planata
- **Definizione**: tempo totale passato in volo rettilineo
- **Unità**: ore e minuti
- **Interpretazione**: più tempo in planata = volo di distanza più efficiente

### Distanza e punteggio

Tutte le distanze e i punteggi XC sono calcolati dalla libreria open source [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), creata e mantenuta da [Momtchil Momtchev](https://github.com/mmomtchev).

#### Distanza XC totale
- **Definizione**: somma di tutte le distanze valide dei voli di distanza
- **Unità**: chilometri
- **A cosa serve**: misurare il totale dei tuoi risultati XC

#### Punti XC totali
- **Definizione**: somma di tutti i punteggi XContest
- **Comprende**: tutti i coefficienti (distanza libera, triangoli)
- **A cosa serve**: confrontare nel tempo le tue prestazioni XC

#### Lunghezza traccia totale
- **Definizione**: somma delle distanze di tutte le tracce GPS
- **Unità**: chilometri
- **Sempre > distanza XC totale**: comprende tutti i giri in termica e le deviazioni

### Record personali

#### Distanza XC massima
- **Definizione**: il volo di distanza con la distanza valida più lunga
- **Mostra**: distanza e data
- **Traguardo**: il tuo record personale XC!

#### Punti XC massimi
- **Definizione**: il punteggio XContest più alto su un singolo volo
- **Mostra**: punti e data
- **Nota**: può essere diverso dalla distanza massima (per via dei coefficienti dei triangoli)

#### Quota massima
- **Definizione**: la quota più alta raggiunta in tutti i voli
- **Unità**: metri sul livello del mare (ASL)
- **Mostra**: quota

#### Guadagno di quota max
- **Definizione**: il maggior guadagno di quota in un singolo volo
- **Unità**: metri
- **Calcolo**: quota max - quota min

#### Termica più forte
- **Definizione**: il miglior rateo di salita mai incontrato
- **Unità**: metri al secondo (m/s)
- **Mostra**: rateo di salita

#### Velocità massima
- **Definizione**: la velocità al suolo più alta registrata
- **Unità**: chilometri orari (km/h)
- **Nota**: include l’effetto del vento

#### Durata massima
- **Definizione**: il tempo di volo più lungo
- **Unità**: ore e minuti
- **Mostra**: durata e data

## Vista per mese

Apri **/cockpit?view=month** per vedere le statistiche mensili.

### Suddivisione mensile

Per ogni mese con dei voli:
- Voli totali del mese
- Distanza totale
- Punti totali
- Medie dei voli

### Andamenti stagionali

Scopri le ricorrenze:
- **In quali mesi voli di più?**
- **Quando le condizioni termiche sono più forti?**
- **Come cambia il tuo volo nel corso dell’anno?**

### Casi d’uso

- **Pianifica la stagione**: guarda quando di solito voli meglio
- **Misura la costanza**: quanti mesi all’anno sei attivo?
- **Individua l’alta stagione**: quando fai le distanze XC migliori?

## Vista per stagione (anno)

Apri **/cockpit?view=season** per vedere le statistiche annuali.

### Confronto anno su anno

Per ogni stagione (anno):
- Voli totali
- Distanza e punti XC totali
- Medie dei voli
- Record personali dell’anno

### Seguire i progressi

Confronta gli anni per capire:
- Stai volando di più?
- Le tue distanze XC aumentano?
- Come si confrontano i diversi anni?

### Casi d’uso

- **Seguire i progressi nel lungo periodo**
- **Confrontare anni diversi**
- **Fissare obiettivi annuali**

## Vista per vela

Apri **/cockpit?view=glider** per confrontare le prestazioni delle vele.

### Statistiche per vela

Per ogni vela del tuo libretto di volo:
- Numero di voli
- Distanza e punti totali
- Distanza XC media
- Durata media del volo
- Distanza massima raggiunta
- Ratei di salita medi

### Confrontare le vele

Rispondi a domande come:
- Con quale vela faccio le migliori prestazioni XC?
- Come si confrontano le mie diverse vele?
- Quale vela volo più spesso?

### Casi d’uso

- **Scelte di materiale**: scegliere la prossima vela
- **Confronto delle prestazioni**: confrontare classi di vela diverse
- **Specializzazione**: capire quale vela funziona meglio in quali condizioni

## Vista per decollo

Apri **/cockpit?view=takeoff** per analizzare le prestazioni sito per sito.

### Statistiche per sito

Per ogni decollo:
- Numero di voli da quel sito
- Distanza XC totale
- Distanza XC media
- Distanza massima da quel sito
- **Punteggio di prestazione (Z-score)**: individuazione statistica dei valori anomali (vedi: [Guida allo Z-score per piloti](/doc/z-score-pilot-guide))

## Vista per paese

Apri **/cockpit/?view=country** per vedere le statistiche internazionali.

### Statistiche per paese

Per ogni paese in cui hai volato:
- Numero di voli
- Distanza XC totale
- Medie
- I migliori siti di quel paese

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
