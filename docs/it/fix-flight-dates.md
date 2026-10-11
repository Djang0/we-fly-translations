---
title: Correggere le date di volo sbagliate
description: Perché alcuni strumenti registrano la data sbagliata e come correggerla senza perdere il volo
category: Your Flights
order: 6
---

## Quando un volo finisce nel giorno sbagliato

Ogni file IGC riporta la data del volo nell’intestazione, scritta con il giorno per primo: `DDMMYY`. Alcuni strumenti la scrivono al contrario (`YYMMDD`). We-Fly allora legge l’anno come giorno e il giorno come anno, e un volo del 9 luglio 2026 può comparire come 26 luglio 2009.

La traccia, gli orari e i punteggi sono a posto. Solo la data è sbagliata, e questo mette il volo nella stagione sbagliata, nella serie sbagliata e nel punto sbagliato del tuo libretto di volo.

## Correggere un volo

Apri il menu **⋯** del volo e scegli **Cambia data**.

- Se la data sembra invertita, We-Fly mostra una **Correzione suggerita** accanto alla data attuale. Basta un tocco per applicarla.
- Altrimenti scegli il giorno giusto nel calendario. L’orario del volo resta lo stesso; cambia solo il giorno.

## Correggere molti voli insieme

Se uno strumento ha registrato un’intera stagione con le date invertite, seleziona quei voli nel libretto e usa **Correggi codifica date** dal menu della selezione. Inverte giorno e anno su tutti i voli selezionati in un colpo solo.

Usalo solo sui voli davvero interessati. Se lo applichi a un volo corretto, trasformi una data giusta in una sbagliata e la tua cronologia si scombina. Nel dubbio, correggi prima un solo volo e controlla il risultato.

## Prevenire il problema

Aggiorna il firmware del tuo strumento: la maggior parte dei produttori ha corretto il formato della data da tempo. Se il problema persiste, segnala al produttore che l’intestazione IGC non rispetta la regola `HFDTE` della specifica IGC.
