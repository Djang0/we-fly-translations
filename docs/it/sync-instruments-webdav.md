---
title: Sincronizza automaticamente il tuo strumento
description: Invia i voli dal tuo Air³, dal vario o dal telefono direttamente a We-Fly via WebDAV, senza cavi e senza caricamenti manuali
category: Your Flights
order: 4
---

## Atterri, ti colleghi al Wi-Fi, fatto

Immagina: ti sganci all’atterraggio, ancora carico per quell’ultima salita in restituzione serale, e mentre finisci di piegare la vela la tua traccia è già su We-Fly: con punteggio, mappa e termiche analizzate. Nessun cavo. Nessun «lo carico stasera» che diventa la settimana prossima. Nessuna caccia tra le cartelle del telefono.

Questa è la **Sincronizzazione strumento e cloud (WebDAV)**. La configuri una volta e il tuo dispositivo passa in silenzio ogni nuovo volo al tuo libretto appena torni sotto Wi-Fi. È la guida che leggi una volta sola e poi non tocchi più i tuoi voli a mano.

La star dello spettacolo è l’**Air³** (il vario Android con XCTrack), ma lo stesso trucco funziona da qualsiasi telefono Android o da qualsiasi strumento che parli WebDAV. Colleghiamo tutto.

---

## Prima di tutto: prendi la password del dispositivo (una volta, in We-Fly)

Tutto ruota attorno a un’unica **password del dispositivo** che generi dentro We-Fly. Pensala come una chiave di scorta fatta apposta per un solo strumento. Se perdi o vendi il dispositivo, revochi quella chiave e nient’altro viene toccato.

1. Vai su **Profilo → Servizi collegati** e trova la scheda **«Sincronizzazione strumento e cloud (WebDAV)»**.
2. Scrivi un nome per il dispositivo, qualcosa che riconoscerai più avanti, come `Air³` o `Vecchio vario di scorta`.
3. Tocca **Genera**. Compare una **password del dispositivo**.
4. **Copiala subito.** Meglio copiarla immediatamente, ma se clicchi altrove non l’hai persa: ogni password resta **ricopiabile dalla riga del suo dispositivo** (la piccola icona di copia accanto) finché tieni aperta questa **scheda del browser**. Riaprire la finestra, o persino ricaricare la pagina, va benissimo. Il pulsante di copia è ancora lì. Sparisce solo quando **chiudi la scheda**, perché We-Fly conserva sempre e solo una versione cifrata, mai la password in chiaro. Se succede, nessun problema: generane una nuova.

La stessa scheda mostra anche le altre due impostazioni che ti servono, ognuna con il suo pulsante di copia. Così non devi mai scrivere niente a memoria.

> **Devi essere un membro completo di We-Fly**, registrato e con il consenso dato. Se sei ancora nella fase di attesa del consenso, completala prima e la scheda si attiverà.

---

## Le tre impostazioni che servono a ogni dispositivo

Qualunque app o strumento colleghi a We-Fly, ti chiederà sempre le stesse tre cose:

| Impostazione | Valore |
|---|---|
| **URL del server** | `https://we-fly.cloud/api/webdav` |
| **Nome utente** | l’email del tuo account We-Fly |
| **Password** | la password del dispositivo appena generata |

Tutto qui. Copia queste tre, tienile a portata di mano e sei pronto per qualsiasi app WebDAV del pianeta.

---

## Il piatto forte: Air³ / Android + XCTrack

Ecco la parte bella. XCTrack salva già ogni volo come tracklog `.igc` in una cartella del dispositivo. Noi mettiamo solo un piccolo robot su quella cartella che dice «file nuovo? mandalo su». Lo imposti e te ne dimentichi.

### Passo per passo

1. **Genera la password del dispositivo** in We-Fly (vedi sopra). Tieni a portata di mano le tre impostazioni.

2. **Installa un’app di sincronizzazione WebDAV** dal Play Store. Una qualsiasi di queste va benissimo. Scegli quella che ti piace di più:
   - **FolderSync**
   - **DAVx5**
   - **RoundSync** (o un’app simile in stile Autosync)

   Sono tutte app di sincronizzazione cartelle; nessuna è «ufficiale», semplicemente parlano tutte WebDAV alla perfezione.

3. **Aggiungi un nuovo account / remoto WebDAV** nell’app. Inserisci:
   - **URL del server** → `https://we-fly.cloud/api/webdav`
   - **Nome utente** → la tua email We-Fly
   - **Password** → la password del dispositivo

   Quasi tutte le app hanno un pulsante «Test connection». Toccalo e dovresti avere il via libera.

4. **Crea una coppia di sincronizzazione** (alcune app la chiamano coppia di cartelle):
   - **Cartella locale** → dove XCTrack salva i tuoi tracklog `.igc`, di solito `/Android/data/org.xcontest.XCTrack/files/Tracklogs/`. I percorsi cambiano un po’ tra dispositivi e versioni, quindi fidati più di «la cartella che contiene i tuoi file `.igc`» che di un percorso scritto a memoria.
   - **Cartella remota** → la connessione WebDAV appena aggiunta.

   > **Da Android 11 in poi quella cartella è nascosta ai normali selettori di file**. La tua app di sincronizzazione la vedrà vuota. È lo scoped storage che fa il suo lavoro, non un bug, e c’è una soluzione pulita da due minuti: **[Fai vedere la cartella di XCTrack alla tua app di sincronizzazione](/doc/xctrack-folder-permission)**. Fai una deviazione lì, poi torna qui.

5. **Imposta la direzione a senso unico, telefono → We-Fly** (solo caricamento). We-Fly è la destinazione, non uno specchio bidirezionale. Il dispositivo spinge i voli verso l’alto e non scarica mai niente. Poi attiva la **sincronizzazione automatica**: a ogni nuovo file, o sotto Wi-Fi dopo l’atterraggio, quello che offre la tua app.

6. **Vola. Atterra. Collegati al Wi-Fi.** Appena sei online, la tua traccia sale su We-Fly da sola. Apri il libretto ed eccola: punteggio, mappa, termiche decifrate. Vai a piegare la vela.

> **Consiglio:** fai partire la sincronizzazione automatica sotto Wi-Fi invece che con i dati mobili, e la batteria (e il piano dati) sul furgone del recupero ti ringrazierà. Le tue tracce aspettano pazienti e atterrano appena agganci il Wi-Fi del rifugio.

---

## Altri strumenti e computer

WebDAV è una lingua universale, quindi le stesse tre impostazioni funzionano ben oltre l’Air³.

**Altri strumenti compatibili con WebDAV** (uno Skytraxx, un dispositivo Android tipo Oudie, qualsiasi cosa parli WebDAV) si configurano esattamente allo stesso modo: aggiungi l’account con l’URL del server, la tua email e la password del dispositivo, poi puntalo sulla cartella in cui salva i file `.igc`.

**Il tuo computer**. Puoi collegare lo stesso URL come unità di rete e trascinarci dentro i file:
- **Windows** → *Connetti unità di rete* → incolla l’URL del server, accedi con la tua email + la password del dispositivo.
- **macOS** → Finder → *Vai → Connessione al server* → stesso URL e stesse credenziali.
- **Linux** → montalo dal tuo gestore file o con `davfs2`.

A quel punto trascinare i file `.igc` in quell’unità li carica su We-Fly. Comodo per smaltire un arretrato da una vecchia scheda SD.

---

## Buono a sapersi

- **Sono accettati solo i file `.igc`.** Tutto il resto che il dispositivo prova a inviare viene respinto e mai salvato. La tua app di sincronizzazione potrebbe segnare quei file come falliti, ed è innocuo, quindi non importa se nella cartella dei tracklog ci sono anche strani file di configurazione o di log.
- **I doppioni vengono saltati automaticamente**, riconosciuti dal contenuto reale del file. Risincronizzare la stessa cartella mille volte non creerà mai un solo volo doppio. Per questo puoi lasciarla girare per sempre senza pensieri.
- **Nello spirito è solo caricamento.** Il dispositivo spinge i voli verso l’alto; non torna mai indietro a modificare o rimuovere qualcosa. Vuoi eliminare un volo? Fallo nell’app We-Fly, mai dal dispositivo.

---

## Risoluzione dei problemi / FAQ

**Non è comparso niente nel mio libretto?**
Passa in rassegna i soliti sospetti: sei davvero sotto Wi-Fi (o dove è impostato l’avvio della sincronizzazione)? La sincronizzazione è partita davvero (controlla il log dell’app)? E il file è un vero tracklog `.igc`, non un file scritto a metà o rinominato? Nove volte su dieci è uno di questi tre.

**Posso sincronizzare tutto il mio archivio storico?**
Certo. Punta una volta una coppia di sincronizzazione sull’intera cartella dell’archivio, lasciala macinare e ogni vecchia traccia arriva su We-Fly. Visto che i doppioni sono riconosciuti dal contenuto, il rischio di duplicati è zero, anche se alcuni di quei voli sono già nel tuo libretto.

**La mia password è al sicuro?**
È una **password per dispositivo**, non quella di accesso al tuo account. Apre solo la tua cartella dei voli (caricare nuovi file `.igc`, leggere quelli già presenti) e non può mai eliminare un volo né toccare il tuo account. Puoi **revocarla quando vuoi** dalla stessa scheda Servizi collegati. La revoca taglia fuori subito quel dispositivo e lascia intatti tutti gli altri. Vendi il tuo Air³? Prima revoca.

**Questo elimina qualcuno dei miei voli?**
No. La sincronizzazione è a senso unico e serve solo a caricare. Le eliminazioni avvengono **solo** nell’app We-Fly, di proposito, per mano tua. Niente di ciò che fa il tuo strumento può rimuovere un volo.

---

## Vuoi che lo faccia direttamente XCTrack? Votalo

La combinazione WebDAV + app di sincronizzazione qui sopra funziona benissimo già oggi, ma diciamocelo, il sogno è ancora più semplice: XCTrack che carica direttamente su We-Fly appena atterri, esattamente come fa già con il caricamento automatico integrato verso XContest. Nessuna app intermedia, nessuna coppia di cartelle da configurare. Atterri, è fatto. Zero app.

Buone notizie: esiste una **richiesta ufficiale agli sviluppatori di XCTrack proprio per questo.** E il punto è che i voti dei piloti fanno davvero la differenza. Più siamo a votarla, più è probabile che salga nella lista delle priorità e venga davvero realizzata. Quindi facciamoci sentire; ogni voto conta.

Ci vuole circa un minuto:

1. Apri la richiesta: [gitlab.com/xcontest-public/xctrack-public/-/work_items/1293](https://gitlab.com/xcontest-public/xctrack-public/-/work_items/1293)
2. **Accedi a GitLab**: un account gratuito, si crea in un attimo se non ce l’hai (devi aver fatto l’accesso per votare).
3. Nella richiesta, clicca la **reazione emoji 👍** per aggiungere il tuo voto. Fatto. Hai votato.

Se arriva, questa guida diventerà molto più corta. Diamole una mano.

---

## Si parte

Configuralo una volta e il tuo libretto si riempie praticamente da solo. Vola, atterra, collegati, e i numeri ti aspettano prima ancora che tu abbia raccolto i cordini. Come dovrebbe essere.

Cieli blu e libretti pieni. 🪂
