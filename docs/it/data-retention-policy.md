---
title: Politica di conservazione dei dati
description: Periodi di conservazione dei dati e procedure di cancellazione di We-Fly nel dettaglio
category: Account & Data
order: 2
---

**Versione:** 1.1
**Data di entrata in vigore:** 2025-11-25
**Data dell’ultima revisione:** 2026-10-07
**Data della prossima revisione:** 2026-11-25
**Conformità al GDPR:** Articolo 5(1)(e): limitazione della conservazione; Articolo 17: diritto alla cancellazione

## 1. Finalità e ambito di applicazione

La presente Politica di conservazione dei dati stabilisce i periodi di conservazione e le procedure di cancellazione dei dati personali trattati da We-Fly in conformità all’Articolo 5(1)(e) del GDPR, il quale richiede che i dati personali siano «conservati in una forma che consenta l’identificazione degli interessati per un arco di tempo non superiore al conseguimento delle finalità per le quali sono trattati».

La presente politica si applica a tutti i dati personali raccolti, trattati e conservati da We-Fly, compresi:
- Le informazioni dell’account utente
- I dati di volo e le tracce GPS
- I registri di audit delle eliminazioni
- Le registrazioni dei consensi
- I dati di sessione
- I log di accesso
- I backup di sistema

## 2. Calendario di conservazione dei dati

### 2.1 Account utente e dati del profilo

**Periodo di conservazione:** indeterminato (fino all’eliminazione da parte dell’utente o a 3 anni di inattività)

**Base giuridica:** consenso (Articolo 6(1)(a) del GDPR)

**Descrizione:** gli account utente restano attivi a tempo indeterminato finché gli utenti continuano a usare il servizio. Gli utenti possono eliminare il proprio account in qualsiasi momento dalle impostazioni del profilo.

**Eliminazione automatica:** gli account senza alcun accesso per 3 anni consecutivi vengono eliminati automaticamente, dopo che l’utente ha ricevuto un’email di avviso al compimento dei 2,5 anni.

**Dati inclusi:**
- Indirizzo email
- Nome utente
- Informazioni del profilo
- Preferenze dell’account
- Data di creazione e marca temporale dell’ultimo accesso

### 2.2 Dati di volo e tracce GPS

**Periodo di conservazione:** indeterminato (fino all’eliminazione da parte dell’utente)

**Base giuridica:** consenso (Articolo 6(1)(a) del GDPR)

**Descrizione:** i dati di volo caricati dagli utenti sono conservati a tempo indeterminato perché costituiscono la funzionalità principale del servizio. Gli utenti possono eliminare singoli voli o tutti i dati di volo in qualsiasi momento.

**Eliminazione automatica:** i dati di volo NON vengono eliminati automaticamente. Quando un account utente viene eliminato (manualmente o per inattività), tutti i dati di volo associati vengono eliminati definitivamente.

**Dati inclusi:**
- Tracce GPS e percorsi di volo
- Metadati del volo (data, durata, distanza, ecc.)
- Luoghi di decollo e di atterraggio
- Condizioni meteo
- Informazioni sull’aeromobile

### 2.3 Registro di audit delle eliminazioni

**Periodo di conservazione:** 7 anni dalla data di eliminazione

**Base giuridica:** obbligo legale (normativa UE in materia fiscale e di tenuta dei registri)

**Descrizione:** quando un utente elimina il proprio account, viene creato un record pseudonimizzato nella collezione `account_deletions` per finalità di conformità e di prevenzione delle frodi. Questo record NON contiene informazioni che consentano l’identificazione personale.

**Eliminazione automatica:** i record più vecchi di 7 anni vengono eliminati automaticamente il primo giorno di ogni mese tramite un cron job pianificato.

**Dati inclusi:**
- ID utente anonimizzato (ObjectId MongoDB)
- Marca temporale dell’eliminazione
- Motivo dell’eliminazione (su iniziativa dell’utente o per inattività)
- Data dell’ultimo accesso (se l’eliminazione è dovuta a inattività)
- Data dell’avviso di inattività (se applicabile)

**Dati NON inclusi:**
- Indirizzo email
- Nome utente
- Qualsiasi informazione che consenta l’identificazione personale

### 2.4 Registrazioni dei consensi

**Periodo di conservazione:** indeterminato (finché esiste l’account utente)

**Base giuridica:** obbligo legale (Articolo 7(1) del GDPR)

**Descrizione:** le registrazioni dei consensi dell’utente (accettazione delle condizioni di registrazione, accettazione dell’informativa sulla privacy, consenso al trattamento dei dati) sono conservate per tutta la durata dell’account utente, per dimostrare il rispetto dei requisiti del GDPR in materia di consenso.

**Eliminazione automatica:** le registrazioni dei consensi vengono eliminate quando viene eliminato l’account utente.

**Dati inclusi:**
- Marca temporale del consenso
- Tipo di consenso (registrazione, trattamento dei dati, informativa sulla privacy)
- Versione dell’informativa sulla privacy accettata
- Stato del consenso (accettato)

### 2.5 Log di accesso

**Periodo di conservazione:** 1 anno (se implementati)

**Base giuridica:** legittimo interesse (sicurezza e prevenzione delle frodi)

**Descrizione:** i log di accesso che registrano l’autenticazione degli utenti e le richieste API sono conservati per finalità di sicurezza. **Nota:** i log di accesso non sono attualmente implementati in We-Fly.

**Eliminazione automatica:** i log di accesso più vecchi di 1 anno vengono eliminati automaticamente ogni settimana tramite un cron job pianificato (quando saranno implementati).

### 2.6 Dati di sessione

**Periodo di conservazione:** 30 giorni dall’ultima visita, e mai più di 90 giorni dall’accesso

**Base giuridica:** legittimo interesse (autenticazione dell’utente)

**Descrizione:** l’accesso memorizza nel tuo browser un cookie di sessione cifrato e HTTP-only. Ogni visita lo rinnova per altri 30 giorni, quindi scade dopo 30 giorni senza aprire We-Fly, e ti viene chiesto di accedere di nuovo 90 giorni dopo l’accesso, indipendentemente da quanto spesso visiti il sito. Uscire dall’account elimina subito il cookie. Reimpostare la password o eliminare l’account termina ogni sessione, su ogni dispositivo, alla sua richiesta successiva.

**Eliminazione automatica:** le sessioni non sono conservate nel nostro database: la sessione è il cookie stesso. Il browser lo elimina alla scadenza, e il server rifiuta qualsiasi sessione scaduta, più vecchia di 90 giorni o terminata da una reimpostazione della password o da un’eliminazione dell’account.

**Dati inclusi:**
- ID utente, indirizzo email, nome visualizzato e URL dell’immagine del profilo
- Ruolo dell’account e stato del consenso
- Preferenze di visualizzazione (tema, visibilità del profilo)
- Ora dell’accesso e marca temporale di scadenza
- Versione della sessione (usata per terminare le sessioni in anticipo)

### 2.7 Account inattivi

**Periodo di conservazione:** 3 anni dall’ultimo accesso

**Base giuridica:** principio di limitazione della conservazione (Articolo 5(1)(e) del GDPR)

**Descrizione:** gli account utente a cui non si accede da 3 anni consecutivi sono considerati inattivi e vengono eliminati automaticamente.

**Sistema di avviso:**
- Dopo **2,5 anni** di inattività, gli utenti ricevono un’email di avviso che li informa che il loro account sarà eliminato entro 6 mesi
- Gli utenti possono evitare l’eliminazione semplicemente accedendo in qualsiasi momento prima della soglia dei 3 anni
- Una volta raggiunta la soglia dei **3 anni**, l’account viene eliminato automaticamente se l’utente era stato avvisato in precedenza

**Eliminazione automatica:** gli account inattivi vengono eliminati automaticamente ogni settimana tramite un cron job pianificato (ogni domenica alle 3:00 UTC).

### 2.8 Dati di backup

**Periodo di conservazione:** 7 giorni (conservazione a rotazione)

**Base giuridica:** legittimo interesse (ripristino in caso di disastro)

**Descrizione:** i backup del database sono conservati a rotazione su 7 giorni. I dati eliminati restano nei backup per un massimo di 7 giorni dopo l’eliminazione.

**Eliminazione automatica:** i backup più vecchi di 7 giorni vengono eliminati automaticamente dal sistema di backup.

**Importante:** gli utenti che chiedono una cancellazione immediata e completa dei dati devono essere informati che i dati eliminati possono restare nei backup per un massimo di 7 giorni. Trascorso questo periodo, i dati sono definitivamente irrecuperabili.

## 3. Procedure di cancellazione

### 3.1 Eliminazione dell’account da parte dell’utente

Gli utenti possono eliminare il proprio account in qualsiasi momento dalla pagina delle impostazioni del profilo:

1. Vai su Profilo e apri **Elimina account** nella sezione Account
2. Leggi gli avvisi di eliminazione
3. Digita il tuo indirizzo email per confermare
4. Clicca **Elimina definitivamente il mio account**
5. L’account e tutti i dati associati vengono eliminati definitivamente

**Cosa viene eliminato:**
- L’account utente e le informazioni del profilo
- Tutti i dati di volo e le tracce GPS
- Tutte le registrazioni dei consensi
- Tutti i dati di sessione

**Cosa viene conservato:**
- Il registro di audit pseudonimizzato dell’eliminazione (per 7 anni)

### 3.2 Eliminazione automatica degli account inattivi

Gli account inattivi (3 anni senza accessi) vengono eliminati automaticamente:

1. Dopo 2,5 anni di inattività, l’utente riceve un’email di avviso
2. Il record dell’utente viene contrassegnato con `inactivityWarned: true` e con la marca temporale `inactivityWarnedAt`
3. Se l’utente accede, il contrassegno di avviso viene rimosso
4. Dopo 3 anni di inattività (se l’utente non ha effettuato l’accesso), l’account viene eliminato automaticamente
5. Il registro di audit delle eliminazioni registra l’eliminazione dovuta a inattività

### 3.3 Pulizia automatica del registro di audit delle eliminazioni

I record del registro di audit delle eliminazioni più vecchi di 7 anni vengono eliminati automaticamente:

1. Il cron job viene eseguito mensilmente (il 1° giorno di ogni mese a mezzanotte UTC)
2. Vengono individuati i record con marca temporale `deletedAt` più vecchia di 7 anni
3. I record vengono eliminati definitivamente dalla collezione `account_deletions`
4. Il numero di eliminazioni viene registrato a fini di monitoraggio

### 3.4 Eliminazione manuale dai backup (procedura di emergenza)

Nei casi eccezionali in cui è richiesta la cancellazione immediata dei dati (ad es. ordine dell’autorità giudiziaria, richiesta GDPR urgente):

1. L’account utente viene eliminato con la procedura ordinaria
2. L’amministratore del database individua ed elimina manualmente i dati dai backup recenti
3. L’accesso ai backup è riservato ai soli amministratori autorizzati
4. L’eliminazione manuale dai backup viene registrata e comunicata al responsabile della protezione dei dati

**Nota:** questa procedura è usata solo in circostanze eccezionali, poiché richiede un intervento manuale sul database.

## 4. Base giuridica della conservazione

### 4.1 Account utente e dati di volo

**Base giuridica:** consenso (Articolo 6(1)(a) del GDPR)

Gli utenti prestano il proprio consenso esplicito al trattamento dei dati al momento della registrazione su We-Fly. Gli utenti controllano i propri dati e possono eliminarli in qualsiasi momento.

### 4.2 Registro di audit delle eliminazioni

**Base giuridica:** obbligo legale (requisiti UE di tenuta dei registri)

Le normative fiscali e finanziarie europee impongono di conservare i registri per 7 anni. Sebbene We-Fly non sia un istituto finanziario, il periodo di conservazione di 7 anni è uno standard ampiamente accettato per dimostrare la conformità alle normative sulla protezione dei dati.

### 4.3 Eliminazione degli account inattivi

**Base giuridica:** principio di limitazione della conservazione (Articolo 5(1)(e) del GDPR)

Conservare a tempo indeterminato gli account inattivi viola il principio di limitazione della conservazione. Dopo 3 anni di inattività non esiste alcuna finalità legittima per conservare i dati.

### 4.4 Backup

**Base giuridica:** legittimo interesse (ripristino in caso di disastro)

Una conservazione dei backup di 7 giorni rappresenta un equilibrio ragionevole tra le capacità di ripristino in caso di disastro e il principio di minimizzazione dei dati.

## 5. Applicazione automatica

I limiti di conservazione dei dati sono applicati tramite processi pianificati automatici:

### 5.1 Processo di pulizia del registro di audit delle eliminazioni

- **Pianificazione:** mensile (1° giorno del mese a mezzanotte UTC)
- **Avvio:** cron job
- **Azione:** eliminazione dei record più vecchi di 7 anni

### 5.2 Processo di gestione degli account inattivi

- **Pianificazione:** settimanale (domenica alle 3:00 UTC)
- **Avvio:** cron job
- **Azioni:**
  - Invio delle email di avviso agli utenti a 2,5 anni di inattività
  - Eliminazione degli account a 3 anni di inattività (se avvisati)

## 6. Diritti degli utenti

### 6.1 Diritto alla cancellazione (Articolo 17 del GDPR)

Gli utenti possono chiedere in qualsiasi momento l’eliminazione immediata del proprio account e di tutti i dati associati dalle impostazioni del profilo.

**Eccezione:** il registro di audit delle eliminazioni è conservato per 7 anni in quanto requisito di legge, ma non contiene informazioni che consentano l’identificazione personale.

### 6.2 Diritto alla portabilità dei dati (Articolo 20 del GDPR)

Gli utenti possono esportare i propri dati in qualsiasi momento: **Esporta i dati**, nella sezione Account del profilo, scarica i file IGC originali insieme alle registrazioni dei voli, e i singoli file IGC possono essere scaricati dalle pagine dei voli.

### 6.3 Diritto di accesso (Articolo 15 del GDPR)

Gli utenti possono accedere in qualsiasi momento a tutti i propri dati personali dal proprio profilo e dalle pagine dello storico dei voli.

### 6.4 Diritto di opposizione (Articolo 21 del GDPR)

Gli utenti possono opporsi all’eliminazione automatica degli account inattivi semplicemente accedendo prima della soglia dei 3 anni. In questo modo l’eliminazione automatica viene evitata.

## 7. Revisione e aggiornamenti della politica

### 7.1 Calendario di revisione

La presente politica viene rivista ogni anno nell’anniversario della data di entrata in vigore. La prossima revisione prevista è il **2026-11-25**.

### 7.2 Motivi di aggiornamento

La presente politica sarà rivista e aggiornata quando:
- Cambiano le norme del GDPR o la loro interpretazione
- Vengono raccolti nuovi tipi di dati
- Cambiano i requisiti di conservazione
- Vengono modificati i sistemi di eliminazione automatica
- I riscontri degli utenti indicano la necessità di migliorare la politica

### 7.3 Notifica agli utenti

Quando la presente politica viene aggiornata:
- Il numero di versione viene incrementato
- Le modifiche sono documentate nel registro delle modifiche dell’informativa sulla privacy
- Gli utenti vengono informati via email se le modifiche riguardano la conservazione dei loro dati
- La politica aggiornata viene pubblicata su `/doc/data-retention-policy`

## 8. Monitoraggio e conformità

### 8.1 Monitoraggio dei cron job

I cron job che applicano la conservazione sono monitorati tramite:
- I log dei cron job sul server
- I log dell’applicazione per le esecuzioni riuscite
- La registrazione degli errori per le esecuzioni non riuscite

**Output di log previsto:**
- Pulizia del registro di audit: "Deleted X old deletion records (older than 7 years)"
- Account inattivi: "Sent warnings to X users, deleted Y inactive accounts"

### 8.2 Verifica della conformità

La conformità alla presente politica viene verificata tramite:
- Revisione mensile dei log di esecuzione dei cron job
- Query trimestrali sul database per verificare che i limiti di conservazione siano applicati
- Audit annuale di conformità al GDPR

## 9. Contatti

Per domande o dubbi sulla presente politica di conservazione dei dati:

- **Informativa sulla privacy:** [Leggi l’informativa sulla privacy](/doc/privacy-policy)
- **Richieste GDPR:** usa la funzione di eliminazione dell’account nelle impostazioni del profilo

## 10. Riferimenti

- [Articolo 5 del GDPR](https://gdpr-info.eu/art-5-gdpr/)
- [Articolo 17 del GDPR](https://gdpr-info.eu/art-17-gdpr/)
- [Linee guida dell’ICO sulla limitazione della conservazione](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/storage-limitation/)
- [Informativa sulla privacy di We-Fly](/doc/privacy-policy)

---

**Cronologia del documento:**
- v1.0 (2025-11-25): creazione iniziale della politica
