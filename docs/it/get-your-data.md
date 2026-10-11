---
title: Scarica i tuoi dati
description: Scarica una copia completa dei dati dei tuoi voli
category: Account & Data
order: 1
---

## I tuoi dati, le tue regole

Apri il tuo **Profilo** (dal menu Account, oppure vai direttamente su `/profile`). Nel pannello **Account**, clicca **Esporta i dati**. La riga mostra quanti record di volo hai e, un clic dopo, un file ZIP finisce nei tuoi download più in fretta di una planata dopo un decollo abortito.

Non c’è niente da compilare e nessuna email da aspettare: l’archivio viene creato al momento. Con centinaia di voli può metterci un attimo a partire, quindi aspetta qualche secondo prima di cliccare di nuovo.

## Cosa c’è dentro?

Lo ZIP (chiamato `we-fly-data-export-` seguito da un numero) contiene una cartella `my-data` con tutto quello che abbiamo su di te, in stile GDPR:

- **flights/**: tutti i tuoi file IGC, ordinati per data (`flights/YYYY/MM/DD/`) così ritrovi quella giornata di termiche epica del 2021. Ogni file conserva il suo nome originale ed è esattamente il file che hai caricato, byte per byte
- **data-export.json**, la parte da nerd: il tuo profilo e le tue preferenze (unità, impostazioni di visualizzazione, colori delle vele, preferenze email), i metadati di ogni volo (data, pilota, vela, durata, distanza, decollo e atterraggio, punteggio XC, stato di condivisione), gli account di accesso collegati al tuo profilo, le tue passkey (solo nomi e date, mai il materiale delle chiavi) e le tue registrazioni del consenso
- **README.txt**: spiega cosa c’è e dove, più un breve riepilogo dei tuoi totali, nel caso lo apri dopo 6 birre
- **missing.txt**: compare solo se non abbiamo trovato un file IGC dalla nostra parte, ed elenca i voli interessati

Le correzioni che hai fatto in We-Fly (una data sistemata, una vela rinominata) stanno in `data-export.json`. I file IGC invece non vengono mai modificati, quindi restano esattamente come li ha registrati il tuo strumento.

## Perché farlo?

- **Backup**: perché i dischi si rompono, le termiche nel cloud no
- **Migrazione**: porti il tuo libretto di volo su un’altra piattaforma? IGC è il formato che ogni libretto di volo capisce
- **Prova**: devi dimostrare al tuo club che quel triangolo l’hai volato davvero? È tutto lì

## Dettagli tecnici per i curiosi

I file IGC funzionano con qualsiasi software di analisi del volo: XCTrack, SeeYou, quello che usa il tuo gruppo. Il JSON è strutturato e leggibile da una macchina, così puoi scriverti le tue statistiche se sei quel tipo di pilota.

Un avvertimento: l’esportazione ha un limite di frequenza, quindi non martellare il pulsante come se stessi scorrendo la checklist pre-volo.

Ti servono solo alcuni file IGC e non l’intero archivio? Seleziona i voli nel tuo libretto di volo e usa **Scarica file IGC** per avere solo quelli, in uno ZIP.
