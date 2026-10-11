---
title: Validazione FAI
description: Usa l’API pubblica della FAI per validare il tuo volo
category: Your Flights
order: 2
---

## Validazione FAI del volo

### Che cos’è la validazione FAI?

La FAI (Fédération Aéronautique Internationale) è la federazione mondiale degli sport aerei. We-Fly può inviare i voli al servizio ufficiale di validazione FAI CIVL.

### Quando usare la validazione FAI

Usa la validazione FAI per:
- **Voli di gara**: verifica ufficiale in competizione
- **Richieste di record**: tentativi di record mondiale o nazionale
- **Verifica ufficiale**: prova che il file non è stato alterato
- **Richieste di badge**: quando una gara o una federazione chiede una traccia firmata

### Come funziona

1. **Apri il tuo volo**: la validazione è disponibile sui tuoi voli
2. **Clicca "Valida il volo (FAI)"**: l’icona di spunta nella barra strumenti del volo (sul telefono si trova nel menu **⋯**)
3. **Conferma**: la finestra **Validazione FAI del volo** spiega cosa succede; clicca **Procedi**
4. **Elaborazione**: We-Fly invia il file IGC originale, senza modifiche, al servizio di validazione FAI CIVL (vali.fai-civl.org)
5. **Risultati**: il pulsante diventa **Validazione FAI superata** o **Validazione FAI non superata**, e l’esito viene salvato con il volo

Clicca di nuovo il pulsante per aprire la finestra **Risultato della validazione FAI** (stato, messaggio e tutti i dati della validazione). Per ripetere il controllo, usa **Valida di nuovo (FAI)** nel menu **⋯** del volo.

### Esiti della validazione

Due esiti possibili:

#### PASSED
- Il servizio FAI ha accettato il file
- Il record di sicurezza IGC (record G) corrisponde al contenuto del file
- Il file non è stato alterato da quando lo strumento lo ha firmato

#### FAILED
- Il servizio FAI ha rifiutato il file
- Possibili motivi:
  - Record G mancante o danneggiato (alcune app e alcuni strumenti non firmano i loro file)
  - Il file è stato modificato dopo la registrazione
  - Lo strumento non è noto al servizio FAI
  - Formato dei dati non valido

Il **Messaggio** nella finestra del risultato ti dice cosa ha segnalato il servizio.

### Cosa controlla la FAI

Il servizio di validazione FAI verifica il file in sé, non il tuo modo di volare:
- **Integrità del record G**: la firma di sicurezza scritta dallo strumento
- **Formato del file**: struttura IGC valida
- **Validazione dello strumento**: la firma viene verificata con il programma di validazione del produttore dello strumento

Non giudica se il volo era regolare, se il punteggio è corretto o se era sicuro.

### Dove si trova il risultato

L’esito della validazione viene salvato con il volo in We-Fly, così puoi riaprirlo quando vuoi. Il servizio FAI restituisce un verdetto, non un certificato: se una gara o una richiesta di record chiede una prova, di solito vuole il file IGC originale, che We-Fly conserva byte per byte così come l’hai caricato.

### Note importanti

**La validazione FAI NON serve per:**
- L’uso normale di We-Fly
- Il libretto di volo personale
- Condividere i voli con gli amici
- Le funzioni della community

**Un file IGC firmato e valido è spesso richiesto per:**
- Le competizioni ufficiali
- Le richieste di record
- Alcune richieste di gara e di badge

Controlla il regolamento della gara o della federazione a cui invii il volo.
