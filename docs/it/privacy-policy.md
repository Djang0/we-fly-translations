---
title: Informativa sulla privacy
description: Come We-Fly raccoglie, usa e protegge i tuoi dati personali ai sensi del GDPR
category: Account & Data
order: 3
---

**Ultimo aggiornamento:** 4 novembre 2026

## 1. Introduzione

Benvenuto su We-Fly. Ci impegniamo a proteggere i tuoi dati personali e a rispettare i tuoi diritti alla privacy, in conformità con il Regolamento generale sulla protezione dei dati (GDPR) (UE) 2016/679 e con le leggi applicabili in materia di protezione dei dati.

Questa Informativa sulla privacy spiega come raccogliamo, usiamo, conserviamo e proteggiamo le tue informazioni personali quando usi la nostra piattaforma di tracciamento e analisi dei voli in parapendio.

### 1.1 Titolare del trattamento

We-Fly è il titolare del trattamento dei tuoi dati personali. Per domande su questa Informativa sulla privacy o sui tuoi diritti, contattaci ai recapiti indicati nella Sezione 15.

### 1.2 Ambito di applicazione

Questa informativa si applica a tutti gli utenti della piattaforma We-Fly, tra cui:
- Utenti registrati con un account
- Visitatori delle nostre pagine pubbliche
- Utenti dei nostri link di condivisione dei voli

## 2. Quali dati raccogliamo

### 2.1 Informazioni dell'account (tramite Google OAuth)

Quando crei un account con "Accedi con Google", raccogliamo:

- **Indirizzo email** - Per identificare l'account e comunicare con te
- **Nome completo** - Per mostrarlo nel profilo e attribuirti i voli
- **URL dell'immagine del profilo** - Dal tuo account Google, per mostrarla nel profilo
- **Stato di verifica dell'email** - Fornito da Google
- **ID utente Google** - Identificativo univoco fornito da Google OAuth

**Non** raccogliamo né conserviamo password. Tutta l'autenticazione è gestita in modo sicuro da Google.

### 2.2 Dati di volo (dal caricamento dei file IGC)

Quando carichi le registrazioni dei tuoi voli in parapendio, raccogliamo e trattiamo:

**Metadati del file:**
- Nome del pilota (estratto dal file IGC o dal nome del tuo account)
- Modello e tipo della vela
- Informazioni sul dispositivo GPS (produttore, numero di serie, firmware)
- Data e ora del volo
- Nome originale del file

**Dati della traccia GPS:**
- Traccia GPS completa (latitudine, longitudine, quota, marcatori temporali)
- Luogo e ora del decollo
- Luogo e ora dell'atterraggio
- Durata del volo
- Quota massima e minima
- Distanza totale percorsa

**Analisi di volo calcolate:**
- Analisi dell'attività termica (rateo di salita, durata, guadagno di quota)
- Stime della velocità e della direzione del vento
- Metriche di prestazione del volo
- Dati di punteggio XContest (distanza, punti, classificazione del tipo di volo)
- Dati di validazione FAI (se richiedi la validazione)
- Boe e segmenti del percorso

**Identificativi tecnici:**
- Hash MD5 della traccia GPS (per rilevare i duplicati)
- Identificativi dei record nel database
- Percorsi di archiviazione dei file (se è attiva l'archiviazione locale)

### 2.3 Dati dei decolli

Gestiamo un database di decolli di parapendio che contiene:
- Nome del sito e coordinate geografiche
- Quota sul livello del mare
- Direzione prevalente del vento
- Paese, città e codice postale (ottenuti tramite il servizio di geocodifica inversa Nominatim di OpenStreetMap)

Questi dati sono aggregati dai voli caricati dagli utenti e da database geografici pubblici. I metadati di posizione sono arricchiti con i dati di OpenStreetMap (© contributori di OpenStreetMap).

### 2.4 Dati del profilo e delle preferenze

- Ruolo utente (utente o amministratore)
- Preferenza di visibilità del profilo (pubblico o privato)
- Preferenze di visualizzazione (colonne della tabella, ordinamento, filtri)
- Preferenza del tema
- Preferenze email (se ricevi o meno i consigli per iniziare)
- Data e ora di creazione e modifica dell'account

### 2.5 Dati statistici

Calcoliamo statistiche aggregate dai tuoi voli:
- Numero totale di voli e ore
- Distanza totale volata
- Numero di decolli diversi e di paesi visitati
- Durata media dei voli
- Suddivisione per tipo di volo

### 2.6 Link di condivisione dei voli

Quando generi un link condivisibile per un volo specifico, creiamo:
- Un identificativo crittograficamente sicuro di 43 caratteri
- Questo permette l'accesso pubblico a un singolo volo senza esporre l'intero profilo

### 2.7 Dati di connessione

Quando usi We-Fly dopo aver effettuato l'accesso, conserviamo gli **ultimi 5 indirizzi IP diversi** da cui ti sei collegato. Per ciascuno salviamo:
- L'indirizzo IP
- Quando l'abbiamo visto la prima e l'ultima volta
- Il tipo di dispositivo, il browser e il sistema operativo
- Una posizione approssimativa (città, regione e paese) calcolata sul nostro server da un database GeoIP (DB-IP). Il tuo indirizzo non viene mai inviato a un servizio esterno per localizzarlo.

Solo gli amministratori di We-Fly possono vedere queste informazioni, per individuare account condivisi, accessi sospetti e abusi. Non vengono mai mostrate ad altri piloti né usate per altri scopi. Quando ti colleghi da un sesto indirizzo, il più vecchio viene eliminato. Questi dati sono inclusi nell'archivio di **Esporta i dati** e vengono eliminati insieme al tuo account.

## 3. Base giuridica del trattamento

Ai sensi dell'articolo 6 del GDPR, trattiamo i tuoi dati personali sulla base di:

### 3.1 Consenso (art. 6, par. 1, lett. a)
- Autenticazione Google OAuth (dai il tuo consenso esplicito cliccando su "Accedi con Google")
- Impostazioni di visibilità del profilo (scegli tu di rendere pubblico il profilo)
- Integrazioni con API di terze parti (validazione FAI, geocodifica)

### 3.2 Esecuzione del contratto (art. 6, par. 1, lett. b)
- Trattamento dei voli che carichi
- Analisi e statistiche dei voli
- Gestione del tuo account e delle tue preferenze
- Erogazione delle funzioni principali del servizio

### 3.3 Legittimo interesse (art. 6, par. 1, lett. f)
- Prevenire il caricamento di voli duplicati
- Rilevare e prevenire frodi o abusi
- Migliorare il servizio e l'esperienza d'uso
- Garantire la sicurezza e l'integrità del sistema
- Conservare i tuoi ultimi 5 indirizzi di connessione e la loro posizione approssimativa per rilevare accessi sospetti e abusi (vedi 2.7)
- Inviare di tanto in tanto consigli che ti aiutano a iniziare con il servizio a cui ti sei iscritto (puoi disattivarli in qualsiasi momento, vedi 4.4)

Puoi revocare il consenso in qualsiasi momento eliminando il tuo account o modificando le impostazioni privacy.

## 4. Come usiamo i tuoi dati

Usiamo i tuoi dati personali per:

### 4.1 Fornire i servizi principali
- Autenticarti e identificarti quando accedi
- Leggere, analizzare e conservare i tuoi voli
- Generare statistiche e metriche di prestazione dei voli
- Mostrare il tuo libretto di volo personale e la tua dashboard
- Associare automaticamente i voli ai decolli

### 4.2 Abilitare le funzioni della community
- Mostrare i voli pubblici (solo se attivi il profilo pubblico)
- Mostrare i profili dei piloti nelle classifiche della community (con il tuo consenso)
- Individuare i decolli più frequentati
- Permettere ad altri piloti di scoprire percorsi di volo

### 4.3 Migliorare la piattaforma
- Aggregare statistiche anonime sull'uso della piattaforma
- Individuare e risolvere problemi tecnici
- Migliorare gli algoritmi di analisi dei voli
- Ottimizzare l'interfaccia e l'esperienza d'uso

### 4.4 Comunicare con te
- Inviare notifiche relative al servizio
- Inviare di tanto in tanto consigli per iniziare, per esempio un unico promemoria se il tuo libretto di volo è ancora vuoto una settimana dopo l'iscrizione. Puoi disattivarli in qualsiasi momento in **Profilo → Email**, oppure con il link di disiscrizione in fondo a ogni email di consigli
- Rispondere alle richieste di supporto
- Avvisarti di cambiamenti importanti al servizio o a questa informativa

### 4.5 Garantire la sicurezza
- Impedire accessi non autorizzati agli account
- Rilevare e prevenire attività fraudolente
- Verificare l'integrità dei dati
- Tenere registri di audit degli eventi di sicurezza

**Non** usiamo i tuoi dati per:
- Pubblicità o marketing per conto di terzi
- Vendere o affittare le tue informazioni personali
- Processi decisionali automatizzati con effetti giuridici
- Profilazione a fini commerciali

## 5. Servizi di terze parti e trasferimenti di dati

Condividiamo una quantità limitata di dati con i seguenti servizi di terze parti:

### 5.1 Google OAuth
**Scopo:** Autenticazione degli utenti e verifica dell'identità
**Dati condivisi:** Email, nome, immagine del profilo (tramite il protocollo OAuth)
**Sede:** Stati Uniti (infrastruttura Google)
**Informativa sulla privacy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Base giuridica:** Consenso (autorizzazione OAuth)

### 5.2 Nominatim (OpenStreetMap)
**Scopo:** Geocodifica inversa per ricavare i nomi dei luoghi dalle coordinate
**Dati condivisi:** Solo coordinate di latitudine e longitudine (nessun identificativo personale)
**Frequenza:** Avviata da un amministratore, non automatica
**Informativa sulla privacy:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Base giuridica:** Legittimo interesse (arricchire le informazioni sui siti)
**Attribuzione:** Dati di posizione © contributori di OpenStreetMap ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Scopo:** Ottenere i dati di quota dei decolli
**Dati condivisi:** Solo coordinate di latitudine e longitudine
**Frequenza:** Avviata da un amministratore
**Informativa sulla privacy:** Servizio pubblico, nessuna registrazione richiesta
**Base giuridica:** Legittimo interesse (dati dei siti accurati)

### 5.4 Servizio di validazione dei voli FAI CIVL
**Scopo:** Validare i voli secondo gli standard FAI
**Dati condivisi:** Contenuto completo del file IGC (solo quando richiedi esplicitamente la validazione)
**Endpoint:** vali.fai-civl.org/api/vali/json
**Informativa sulla privacy:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Base giuridica:** Consenso (avviato dall'utente)

### 5.5 Fornitori di tile cartografiche
**Scopo:** Mostrare mappe interattive per visualizzare i voli
**Servizi utilizzati:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Dati condivisi:** Solo le richieste delle tile (nessun dato personale)
**Base giuridica:** Legittimo interesse (funzionalità essenziale del servizio)

### 5.6 Trasferimenti internazionali di dati

Alcuni dei nostri fornitori di servizi terzi si trovano al di fuori dello Spazio economico europeo (SEE), in particolare negli Stati Uniti. Quando trasferiamo dati all'estero:

- Ci basiamo sulle **decisioni di adeguatezza** della Commissione europea (ove disponibili)
- Adottiamo le **clausole contrattuali standard (SCC)** approvate dalla Commissione europea
- Ci assicuriamo che i fornitori rispettino **standard di protezione dei dati equivalenti al GDPR**

## 6. Cookie e tecnologie di tracciamento

### 6.1 Cookie essenziali (nessun consenso richiesto)

**Cookie di autenticazione:**
- **Scopo:** Mantenere attiva la tua sessione
- **Tipo:** Token JWT cifrati, HTTP-only e sicuri
- **Durata:** 30 giorni dall'ultima visita, e mai più di 90 giorni dall'accesso. Uscendo dall'account il cookie viene eliminato; reimpostando la password o eliminando l'account la sessione termina su tutti i dispositivi.
- **Fornitore:** NextAuth.js
- **Disattivabile:** No (essenziale per il funzionamento del servizio)

**Cookie di sicurezza della connessione (autorouter):**
- **Nomi:** `ar_oauth_state`, `ar_oauth_return`
- **Scopo:** Proteggere l'accesso ad autorouter quando lo colleghi per i NOTAM, e riportarti alla pagina da cui sei partito
- **Tipo:** HTTP-only, sicuri
- **Durata:** 10 minuti, eliminati non appena la connessione è completata
- **Disattivabile:** No (impostati solo quando scegli di collegare autorouter)

### 6.2 Cookie funzionali (legittimo interesse)

**Cookie dello stato della barra laterale:**
- **Nome:** `sidebar_state`
- **Scopo:** Ricordare se preferisci la barra laterale aperta o chiusa
- **Durata:** 7 giorni
- **Dati salvati:** "true" o "false"

**Cookie della lingua:**
- **Nome:** `NEXT_LOCALE`
- **Scopo:** Ricordare la lingua dell'interfaccia che hai scelto (inglese, francese, tedesco, olandese, italiano o spagnolo)
- **Durata:** 1 anno
- **Dati salvati:** Un codice lingua come "fr"

**Cookie della lingua visualizzata:**
- **Nome:** `wf-rl`
- **Scopo:** Annotare la lingua dell'ultima pagina mostrata, così l'app può aggiornarsi una volta se cambi lingua durante la navigazione
- **Durata:** Fino alla chiusura del browser
- **Dati salvati:** Un codice lingua come "fr"

**Cookie del dispositivo già usato:**
- **Nome:** `wf-known-device`
- **Scopo:** Ricordare che qualcuno ha già effettuato l'accesso da questo browser, così la home propone "Accedi" invece di "Crea un account"
- **Durata:** Circa 13 mesi
- **Dati salvati:** Solo "1", mai la tua email o l'id del tuo account

**Cookie di suggerimento passkey:**
- **Nome:** `wf-passkey-hint`
- **Scopo:** Ricordare che questo browser ha una passkey per We-Fly, così la pagina di accesso può proportela per prima
- **Durata:** Circa 13 mesi
- **Dati salvati:** Solo "1"

### 6.3 Archiviazione locale

Usiamo l'archiviazione locale del browser per:

**Impostazioni di visualizzazione dei voli:**
- **Chiave:** `we-fly-flights-display-settings`
- **Scopo:** Memorizzare la visibilità delle colonne e le preferenze di ordinamento per caricare le pagine più velocemente
- **Dati:** Oggetto JSON con le preferenze dell'interfaccia
- **Sincronizzazione:** Con il server, per l'accesso da più dispositivi

**Preferenze dei filtri:**
- **Scopo:** Mantenere le impostazioni di ricerca e dei filtri dei voli
- **Dati:** Criteri di ricerca, intervalli di date, filtri per luogo
- **Ambito:** Solo lato client

Puoi cancellare l'archiviazione locale in qualsiasi momento dalle impostazioni del browser. Le preferenze dell'interfaccia torneranno ai valori predefiniti.

### 6.4 Analisi e tracciamento

Attualmente **non** usiamo:
- Google Analytics o piattaforme di analisi simili
- Tracker pubblicitari di terze parti
- Pixel dei social media
- Meccanismi di tracciamento tra siti

## 7. Archiviazione e sicurezza dei dati

### 7.1 Dove conserviamo i tuoi dati

**Database:** MongoDB
- Account utente, voli, informazioni sui siti
- Database di livello professionale con controlli di accesso
- Backup automatici regolari
- Connessioni cifrate (TLS/SSL)

**File system (facoltativo):**
- File IGC originali e dati JSON elaborati
- Salvati in cartelle specifiche per ogni utente
- Protezione contro il path traversal
- Accesso limitato alle richieste autenticate

**Posizione geografica:** Server situati nell'UE 

### 7.2 Misure di sicurezza

Adottiamo pratiche di sicurezza standard del settore:

**Misure tecniche:**
- Cifratura HTTPS per tutti i dati in transito (TLS 1.2+)
- Cookie HTTP-only sicuri con protezione SameSite
- Autenticazione basata su token JWT con scadenza
- Prevenzione delle injection MongoDB e sanificazione degli input
- Escape delle espressioni regolari per prevenire attacchi ReDoS
- Prevenzione del path traversal nelle operazioni sui file
- Validazione degli ObjectId in tutte le query al database

**Controlli di accesso:**
- Autenticazione basata su sessione tramite NextAuth
- Controllo degli accessi basato sui ruoli (utente o amministratore)
- Filtraggio dei dati per utente (ogni utente accede solo ai propri voli)
- Percorsi protetti che richiedono l'autenticazione

**Validazione dei dati:**
- Limiti di dimensione dei file (massimo 3MB per i file IGC caricati)
- Validazione dell'estensione dei file (solo .igc)
- Validazione delle coordinate (longitudine da -180 a 180, latitudine da -90 a 90)
- Rilevamento dei voli duplicati tramite hash MD5
- Lettura delle date con validazione del formato

**Monitoraggio e registrazione:**
- Registrazione strutturata degli eventi di sicurezza
- Registri di audit delle azioni degli amministratori
- Registrazione dei tentativi di accesso non autorizzato
- Registrazione degli errori con il contesto necessario per le verifiche

### 7.3 Procedure in caso di violazione dei dati

In caso di violazione che riguardi i tuoi dati personali:
- Informeremo l'autorità di controllo competente entro 72 ore (art. 33 GDPR)
- Informeremo gli utenti interessati senza ingiustificato ritardo (art. 34 GDPR)
- Descriveremo la natura della violazione e le misure adottate per limitarla
- Documenteremo tutte le violazioni nei nostri registri interni

## 8. Conservazione dei dati

### 8.1 Periodi di conservazione

**Dati dell'account:**
- Conservati per tutta la durata del tuo account
- Eliminati alla chiusura dell'account (vedi Sezione 9.3)

**Voli:**
- Conservati senza limiti di tempo finché il tuo account è attivo
- Puoi eliminare i singoli voli in qualsiasi momento
- Tutti i voli vengono eliminati alla chiusura dell'account

**Token di sessione:**
- I token JWT scadono 30 giorni dopo l'ultima visita, e mai più di 90 giorni dopo l'accesso
- I token scaduti non sono più validi per l'autenticazione

**Cookie:**
- `sidebar_state`: 7 giorni dall'ultima visita
- Cookie di autenticazione: 30 giorni dall'ultima visita, al massimo 90 giorni (vedi Sezione 6.1)

**Archiviazione locale:**
- Resta finché non cancelli i dati del browser o elimini il tuo account
- Nessuna conservazione lato server

**Dati di connessione:**
- Conserviamo solo i tuoi ultimi 5 indirizzi IP diversi e la loro posizione approssimativa; ogni nuovo indirizzo sostituisce il più vecchio
- Eliminati insieme al tuo account

**File di log:**
- Log di sicurezza conservati per 12 mesi (legittimo interesse alla sicurezza)
- Eliminati automaticamente alla fine del periodo di conservazione

### 8.2 Account inattivi

**Regola sull'inattività:** Gli account senza alcun accesso per 3 anni consecutivi vengono eliminati automaticamente, nel rispetto del principio di limitazione della conservazione del GDPR (art. 5, par. 1, lett. e).

**Sistema di avviso:**
- Dopo **2,5 anni** di inattività riceverai un'email di avviso che ti informa che il tuo account sarà eliminato entro 6 mesi
- Puoi evitare l'eliminazione semplicemente accedendo in qualsiasi momento prima della soglia dei 3 anni
- Se accedi dopo aver ricevuto un avviso, il contatore di inattività si azzera e l'avviso viene annullato
- Una volta raggiunta la soglia dei **3 anni** (e se sei stato avvisato in precedenza), il tuo account viene eliminato automaticamente

**Cosa succede quando un account inattivo viene eliminato:**
- Tutte le informazioni dell'account vengono eliminate definitivamente
- Tutti i dati di volo e le tracce GPS vengono eliminati definitivamente
- Tutti i registri dei consensi vengono eliminati definitivamente
- Viene creato un record di audit pseudonimizzato dell'eliminazione (vedi Sezione 8.3)

**Come evitare l'eliminazione:** Basta accedere al tuo account in qualsiasi momento per azzerare il contatore di inattività.

### 8.3 Registro di audit delle eliminazioni

**Scopo:** Quando elimini il tuo account (manualmente o per inattività), creiamo un record di audit pseudonimizzato per dimostrare la conformità al GDPR e prevenire frodi.

**Cosa viene conservato:**
- ID utente anonimizzato (ObjectId MongoDB)
- Data e ora dell'eliminazione
- Motivo dell'eliminazione (su richiesta dell'utente o per inattività)
- Data dell'ultimo accesso (se l'eliminazione è dovuta a inattività)
- Data dell'avviso di inattività (se presente)

**Cosa NON viene conservato:**
- Indirizzo email
- Nome utente
- Qualsiasi informazione che permetta di identificarti

**Periodo di conservazione:** 7 anni dalla data di eliminazione (richiesto dalle norme UE sulla tenuta dei registri)

**Eliminazione automatica:** I record di audit più vecchi di 7 anni vengono eliminati automaticamente ogni mese.

**Base giuridica:** Obbligo legale (normativa UE fiscale e sulla tenuta dei registri)

### 8.4 Conservazione dei backup

**Regola sui backup:** Manteniamo backup del database a rotazione di 7 giorni per il ripristino in caso di emergenza.

**Importante:** Quando elimini il tuo account o singoli voli, i dati eliminati restano nei backup per un massimo di 7 giorni. Trascorso questo periodo, i dati non sono più recuperabili in alcun modo.

**Richiesta di cancellazione immediata:** Se hai bisogno della cancellazione completa e immediata dei dati (per esempio per un obbligo legale o un'emergenza), contattaci e possiamo rimuovere manualmente i dati dai backup recenti. Questa procedura si usa solo in casi eccezionali.

### 8.5 Calendario completo di conservazione

Per una panoramica completa di tutti i periodi di conservazione dei dati, consulta la nostra [Politica di conservazione dei dati](/doc/data-retention-policy) dettagliata.

## 9. I tuoi diritti sulla protezione dei dati

Ai sensi del GDPR, hai i seguenti diritti sui tuoi dati personali:

### 9.1 Diritto di accesso (art. 15)

Hai il diritto di chiedere:
- Conferma che stiamo trattando o meno i tuoi dati personali
- Una copia dei tuoi dati personali
- Informazioni su come usiamo i tuoi dati

**Come esercitarlo:** Clicca su **Esporta i dati** nel pannello **Account** del tuo **Profilo**. Viene generato un file ZIP con tutti i tuoi file IGC organizzati per data, più un file JSON strutturato con il tuo profilo, le preferenze, i voli, gli account di accesso collegati e i registri dei consensi.

### 9.2 Diritto di rettifica (art. 16)

Hai il diritto di correggere i dati personali inesatti.

**Come esercitarlo:** Modifica le informazioni del profilo nelle impostazioni dell'account. L'accuratezza dei dati di volo dipende dai file IGC che carichi (carica file corretti se serve).

### 9.3 Diritto alla cancellazione / "Diritto all'oblio" (art. 17)

Hai il diritto di chiedere la cancellazione dei tuoi dati personali quando:
- I dati non sono più necessari per lo scopo originario
- Revochi il consenso (per i trattamenti basati sul consenso)
- Ti opponi al trattamento (e non esistono motivi legittimi prevalenti)
- I dati sono stati trattati illecitamente

**Come esercitarlo:** Clicca su **Elimina account** nel pannello **Account** del tuo **Profilo**, digita il tuo indirizzo email per confermare, poi clicca su **Elimina definitivamente il mio account**. Il tuo account e tutti i dati associati vengono eliminati immediatamente.

**Cosa viene eliminato:**
- Tutte le informazioni dell'account (email, nome, profilo)
- Tutti i dati di volo e le tracce GPS
- Tutti i registri dei consensi
- Tutti i dati di sessione

**Cosa viene conservato:**
- Record di audit pseudonimizzato dell'eliminazione (7 anni, nessuna informazione che permetta di identificarti)
- Dati nei backup (fino a 30 giorni, poi eliminati definitivamente)

**Eccezioni:** Possiamo conservare alcuni dati se richiesto dalla legge o per legittimi scopi legali (vedi la Sezione 8.3 per i dettagli sul registro di audit delle eliminazioni).

### 9.4 Diritto di limitazione del trattamento (art. 18)

Hai il diritto di chiederci di limitare il trattamento dei tuoi dati quando:
- Contesti l'esattezza dei dati
- Il trattamento è illecito ma ti opponi alla cancellazione
- Non abbiamo più bisogno dei dati ma ti servono per far valere un diritto in sede legale
- Ti sei opposto al trattamento (in attesa della verifica dei motivi legittimi)

**Come esercitarlo:** Contattaci indicando la tua specifica richiesta di limitazione.

### 9.5 Diritto alla portabilità dei dati (art. 20)

Hai il diritto di ricevere i tuoi dati personali in un formato strutturato, di uso comune e leggibile da dispositivo automatico.

**Come esercitarlo:**
- **Dati di volo:** Usa **Esporta i dati** nel tuo **Profilo** per scaricare un archivio ZIP con tutti i tuoi file IGC
- **Dati dell'account:** Lo stesso archivio include un file JSON (`data-export.json`) con le informazioni del tuo account, le preferenze e i voli

### 9.6 Diritto di opposizione (art. 21)

Hai il diritto di opporti al trattamento basato sul legittimo interesse o a fini di marketing diretto.

**Come esercitarlo:**
- **Funzioni della community:** Disattiva **Profilo pubblico** in **Impostazioni privacy** per non comparire nelle funzioni della community
- **Altri trattamenti:** Contattaci indicando la tua specifica opposizione

### 9.7 Diritto di revocare il consenso (art. 7, par. 3)

Quando il trattamento si basa sul consenso, puoi revocarlo in qualsiasi momento.

**Come esercitarlo:**
- **Autenticazione OAuth:** Revoca l'accesso dalle impostazioni di sicurezza del tuo account Google
- **Profilo pubblico:** Disattiva **Profilo pubblico** in **Impostazioni privacy** nel tuo **Profilo**
- **Account:** Elimina il tuo account per revocare ogni consenso

**Nota:** La revoca non pregiudica la liceità del trattamento basato sul consenso prima della revoca.

### 9.8 Diritto di proporre reclamo (art. 77)

Hai il diritto di proporre reclamo a un'autorità di controllo, in particolare nello Stato:
- Membro dell'UE in cui risiedi
- In cui lavori
- In cui si è verificata la presunta violazione

**Autorità di controllo UE:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

Ti invitiamo a contattarci prima, così possiamo occuparci direttamente delle tue richieste.

### 9.9 Come esercitare i tuoi diritti

Per esercitare uno qualsiasi di questi diritti:
1. Contattaci usando le informazioni della Sezione 15
2. Fornisci informazioni sufficienti a verificare la tua identità (potremmo chiederti di confermare il tuo indirizzo email)
3. Indica quale o quali diritti vuoi esercitare
4. Ti risponderemo entro **un mese** (prorogabile di due mesi per le richieste complesse)

**Nessun costo:** Esercitare i tuoi diritti è gratuito, salvo richieste manifestamente infondate o eccessive.

## 10. Impostazioni privacy e controllo

### 10.1 Visibilità del profilo

Sei tu a decidere se il tuo profilo e i tuoi voli sono visibili agli altri utenti:

**Profilo pubblico (predefinito):**
- I tuoi voli compaiono nelle funzioni della community
- Il tuo profilo è visibile agli altri utenti
- Compari nelle classifiche e nelle statistiche dei piloti

**Profilo privato:**
- I tuoi voli sono visibili solo a te
- Non compari nelle classifiche della community
- Puoi comunque generare link segreti condivisibili per i singoli voli

**Come cambiarla:** Apri il tuo **Profilo**, clicca su **Impostazioni privacy** nel pannello **Account** e attiva o disattiva **Profilo pubblico**. La modifica ha effetto immediato.

### 10.2 Preferenze di visualizzazione

Puoi personalizzare:
- La visibilità delle colonne della tabella dei voli
- Le preferenze di ordinamento
- Le impostazioni di filtri e ricerca
- Il tema dell'interfaccia

Queste preferenze sono sincronizzate su tutti i tuoi dispositivi.

### 10.3 Esportazione dei dati

**Esportazione in autonomia:**
- Apri il tuo **Profilo** e clicca su **Esporta i dati** nel pannello **Account**
- Genera un file ZIP con tutti i tuoi file IGC, organizzati per data (struttura di cartelle AAAA/MM/GG)
- Include un file JSON strutturato con il tuo profilo, le preferenze, i voli, gli account di accesso collegati e i registri dei consensi
- Include un elenco degli eventuali voli senza file archiviati

## 11. Privacy dei minori

We-Fly non è rivolto ai minori di 16 anni. Non raccogliamo consapevolmente dati personali di minori di 16 anni.

Se sei un genitore o un tutore e ritieni che tuo figlio ci abbia fornito dati personali:
- Contattaci subito usando i recapiti della Sezione 15
- Elimineremo queste informazioni dai nostri sistemi entro 30 giorni

## 12. Processi decisionali automatizzati e profilazione

**Non** effettuiamo:
- Processi decisionali automatizzati con effetti giuridici o effetti analoghi significativi (art. 22 GDPR)
- Profilazione a fini di marketing o commerciali
- Decisioni algoritmiche che incidono sul tuo accesso ai servizi

**Analisi dei voli:** Anche se usiamo algoritmi per analizzare i dati di volo (rilevamento delle termiche, punteggio, analisi del vento), si tratta di calcoli tecnici che migliorano la tua esperienza e non costituiscono profilazione ai sensi del GDPR.

## 13. Modifiche a questa Informativa sulla privacy

Possiamo aggiornare questa Informativa sulla privacy di tanto in tanto per riflettere:
- Cambiamenti nel modo in cui trattiamo i dati
- Nuove funzioni o servizi
- Requisiti legali o normativi
- Feedback degli utenti e buone pratiche

**Notifica delle modifiche:**
- Aggiorneremo la data di "Ultimo aggiornamento" in cima a questa informativa
- Per le modifiche sostanziali ti avviseremo via email o con un avviso ben visibile sulla piattaforma
- Continuare a usare il servizio dopo le modifiche equivale ad accettare la nuova informativa

**Cronologia delle versioni:** Conserviamo le versioni precedenti dell'informativa per trasparenza e conformità.

## 14. Quadro normativo e conformità

Questa Informativa sulla privacy è regolata da:
- **GDPR** (UE) 2016/679 - Regolamento generale sulla protezione dei dati
- **Direttiva ePrivacy** 2002/58/CE (e successive modifiche)
- Leggi nazionali sulla protezione dei dati applicabili negli Stati membri dell'UE

**Principi di protezione dei dati (art. 5 GDPR):**
- **Liceità, correttezza e trasparenza:** Trattiamo i dati in modo lecito, corretto e trasparente
- **Limitazione della finalità:** Dati raccolti per finalità determinate, esplicite e legittime
- **Minimizzazione dei dati:** Raccogliamo solo i dati adeguati e necessari ai nostri scopi
- **Esattezza:** Manteniamo i dati personali esatti e aggiornati
- **Limitazione della conservazione:** Dati conservati solo per il tempo necessario
- **Integrità e riservatezza:** Garantiamo un'adeguata sicurezza dei dati personali
- **Responsabilizzazione:** Dimostriamo il rispetto di questi principi

## 15. Contattaci

Se hai domande su questa Informativa sulla privacy o vuoi esercitare i tuoi diritti sui dati, contattaci:

**Titolare del trattamento:** We-Fly
**Email:** contact@we-fly.cloud
**Tempi di risposta:** Cerchiamo di rispondere a tutte le richieste entro 5 giorni lavorativi

**Per le richieste relative al GDPR:**
- Scrivi "Richiesta GDPR" nell'oggetto
- Fornisci informazioni sufficienti a verificare la tua identità
- Indica il tipo di richiesta (accesso, cancellazione, portabilità, ecc.)
- Ti risponderemo entro un mese, come previsto dall'art. 12, par. 3 del GDPR

---

## 16. Definizioni e interpretazioni

**Dati personali:** Qualsiasi informazione riguardante una persona fisica identificata o identificabile (per esempio nome, email, dati di posizione, identificativo online).

**Trattamento:** Qualsiasi operazione compiuta sui dati personali, tra cui raccolta, conservazione, uso, comunicazione o cancellazione.

**Titolare del trattamento:** Il soggetto che determina le finalità e i mezzi del trattamento dei dati personali (We-Fly).

**Responsabile del trattamento:** Un soggetto che tratta i dati personali per conto del titolare (per esempio il fornitore di hosting MongoDB).

**Interessato:** La persona a cui si riferiscono i dati personali (tu, l'utente).

**Consenso:** Manifestazione di volontà libera, specifica, informata e inequivocabile con cui accetti il trattamento dei dati personali.

**File IGC:** Formato di file dell'International Gliding Commission per i registri di volo GPS, che contiene i punti della traccia e i metadati.

**OAuth:** Standard aperto per la delega degli accessi, usato comunemente per l'accesso tramite fornitori terzi (Google).

---

**Presa d'atto:** Usando We-Fly, dichiari di aver letto, compreso e accettato questa Informativa sulla privacy.

---

*Questa Informativa sulla privacy è stata rivista e approvata l'ultima volta il 19 dicembre 2025.*
