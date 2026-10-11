---
title: Gestione delle vele
description: Come gestire le tue vele in We-Fly, rinominarle, classificarle in singolo o biposto e cosa cambia davvero quando lo fai
category: Your Flights
order: 3
---

## Le tue vele vivono nei tuoi voli

We-Fly non ha un «database delle vele» separato. Quando carichi un file IGC, il tuo strumento scrive il nome della vela nell’intestazione del file, ed è quello che We-Fly legge. Ogni volo porta con sé il proprio nome di vela, e la pagina **Vele** (`/flights/wings`) è solo un’aggregazione intelligente: raggruppa tutti i tuoi voli per nome di vela e ti mostra il quadro complessivo.

Questa distinzione conta, perché determina cosa fa davvero la rinomina, e cosa non fa.

---

## Cosa vedi nella pagina Vele

Ogni riga dell’elenco delle vele mostra:

- **Nome della vela**: esattamente come il tuo strumento l’ha registrato nel file IGC
- **Tipo**: Singolo, Biposto o Misto (ne parliamo sotto)
- **Voli**: numero totale di voli registrati con quella vela
- **Durata**: tempo di volo complessivo di tutti quei voli

Da qui puoi rinominare una vela, cambiarne il tipo e darle un **Colore della riga nel libretto**. Clicca una riga per aprire la sua impronta di volo, e usa **Confronta le vele** più in basso nella pagina per mettere più vele a confronto.

---

## Rinominare una vela

Ci sono tre punti in We-Fly da cui puoi aggiornare il nome di una vela, e ognuno agisce su un perimetro diverso.

### Dalla pagina Vele: rinomina tutto in una volta

Clicca l’icona della matita accanto a una vela, scrivi il **Nuovo nome** e conferma. We-Fly aggiorna il nome della vela su **tutti i voli** che avevano il vecchio nome. Quindici voli registrati come «Rush 6»? Diventano tutti «Ozone Rush 6» in un colpo solo. È lo strumento giusto quando vuoi ripulire un nome in tutto il libretto di volo.

### Dall’elenco dei voli: rinomina solo i voli selezionati

Su `/flights`, seleziona uno o più voli con le caselle di spunta. Compare un menu di azioni multiple. Aprilo e scegli **Aggiorna il nome della vela**. Vengono aggiornati solo i voli selezionati, qualunque fosse la vela su cui erano prima. Utile quando vuoi riassegnare una manciata di voli senza toccare gli altri.

### Da un singolo volo: rinomina un volo

Nel tuo libretto di volo, apri il menu **⋯** del volo e scegli **Cambia vela**. Viene aggiornato solo quel volo. Nessun altro volo viene toccato.

---

**Cosa cambia in tutti e tre i casi:**
- Il nome della vela sui voli interessati
- L’elenco delle vele (le voci compaiono, si uniscono o spariscono in base a ciò che resta)
- I filtri attivi che fanno riferimento a quel nome di vela

**Cosa non cambia:**
- Il tuo strumento. Il vario, il GPS o l’app sul telefono che ha prodotto quei file IGC ha ancora configurato il vecchio nome. La prossima volta che voli e carichi, il nuovo volo comparirà di nuovo con il vecchio nome, perché è quello che il tuo strumento ha scritto nell’intestazione IGC.

Se rinomini una vela in We-Fly, **aggiorna anche il nome della vela nelle impostazioni del tuo strumento**. Altrimenti dovrai rifare la rinomina a ogni caricamento.

> Rinominare una vela qui aggiorna solo i voli già presenti nel tuo database. Il tuo strumento di volo potrebbe essere ancora configurato con il vecchio nome della vela.

---

## Singolo o biposto

We-Fly tiene traccia di ogni volo come singolo o biposto. Questo influisce su come vengono mostrate le tue statistiche e può contare per il tuo libretto di volo.

### Come viene impostato il tipo

I voli sono **in singolo** per impostazione predefinita, a meno che We-Fly non trovi nel tuo libretto un volo biposto già esistente con lo stesso nome di vela. In quel caso il nuovo caricamento eredita automaticamente `tandem`, senza alcun passaggio manuale.

### Cambiare il tipo a mano

Nella pagina Vele ogni riga ha un selettore del tipo. Cliccalo per passare tutti i voli di quella vela da Singolo a Biposto o viceversa. È un’**operazione multipla**: aggiorna in un colpo solo tutti i voli con quel nome di vela, appena scegli il nuovo tipo.

Un messaggio ti dice poi quanti voli sono stati aggiornati. Se la vela aveva sia voli in singolo sia voli in biposto, ricevi anche un avviso che ora tutti condividono il nuovo tipo.

---

## Situazioni comuni

**«Volo sia in singolo sia in biposto con la stessa vela»**

Usa il trucco della rinomina: registra i voli in biposto, poi rinomina quella vela in qualcosa come «Fusion 30 Biposto» prima di contrassegnarli come biposto. Lascia i voli in singolo sotto il nome originale. Così entrambe compaiono come voci separate e pulite.

**«La mia vela compare con due nomi»**

La classica incoerenza tra strumenti: «Rush 6» da un logger, «OZONE Rush 6» da un altro, o persino un refuso dopo un aggiornamento del firmware. Rinomina le varianti con un unico nome di riferimento e si uniranno in una sola riga.

**«I nuovi voli mostrano ancora il vecchio nome della vela dopo la rinomina»**

Aggiorna il tuo strumento. We-Fly legge il nome scritto nel file IGC, qualunque esso sia. Non può scavalcare quello che ha scritto il tuo vario.

---

Cieli blu e nomi di vela coerenti a tutti.
