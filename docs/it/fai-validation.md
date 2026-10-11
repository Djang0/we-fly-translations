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
- **Verifica ufficiale**: prova dell’autenticità del volo
- **Certificazione**: requisiti per badge e brevetti

### Come funziona

1. **Apri il volo**: vai alla pagina di dettaglio del volo
2. **Clicca "Valida il volo (FAI)"**: invio al servizio FAI CIVL
3. **Elaborazione**: il file IGC viene inviato a http://vali.fai-civl.org
4. **Risultati**: torna l’esito della validazione
5. **Archiviazione**: l’esito viene salvato con il volo

### Esiti della validazione

Due esiti possibili:

#### PASSED
- Il volo è valido secondo le regole FAI
- Integrità del file IGC confermata
- La traccia GPS è autentica
- Nessuna manomissione rilevata
- Certificato di validazione disponibile

#### FAILED
- Il volo non ha superato la validazione
- Possibili motivi:
  - Problemi di integrità del file IGC
  - Anomalie nella traccia GPS
  - Formato dei dati non valido
  - Sospetta manomissione

### Cosa controlla la FAI

Il servizio di validazione FAI verifica:
- **Integrità del record G**: verifica della firma di sicurezza
- **Formato del file**: struttura IGC valida
- **Continuità della traccia GPS**: nessun buco né salto
- **Coerenza dei dati**: correlazione tra quota, posizione e ora
- **Validazione dello strumento**: dispositivi GPS noti o approvati

### Certificato di validazione

Se il volo supera la validazione:
- Viene fornito il link al certificato di validazione
- Può essere usato per invii ufficiali
- Registrazione permanente sui server FAI
- Prova che il volo è autentico

### Note importanti

**La validazione FAI NON serve per:**
- L’uso normale di We-Fly
- Il libretto di volo personale
- Condividere i voli con gli amici
- Le funzioni della community

**La validazione FAI SERVE per:**
- Le competizioni ufficiali
- Le richieste di record
- Certificazioni e badge del pilota
- Rivendicare premi di gara
