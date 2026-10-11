---
title: Fai vedere la cartella di XCTrack alla tua app di sincronizzazione
description: Android nasconde i tracklog di XCTrack alle altre app. Ecco il modo, sicurissimo e da due minuti, per affidare quella sola cartella alla tua app di sincronizzazione
category: Your Flights
order: 4
---

## La cartella che non c’è

Hai configurato il tuo account WebDAV, ti manca un solo campo per non caricare mai più un volo a mano, e poi l’app di sincronizzazione ti chiede la **cartella locale**. Vai a cercare i tracklog di XCTrack e... niente. `Android/data/…` è vuota oppure il selettore la salta del tutto, come una termica che scappa via proprio quando arrivi.

I tuoi voli sono lì, garantito. Android semplicemente non lascia guardare un’altra app finché non sei tu a dirlo. Ecco come dirlo. Due minuti, una volta sola, e mai più.

---

## Perché Android la nasconde, e perché è sicuro

Da Android 11 le app non possono frugare nelle cartelle delle altre. È lo **[scoped storage](https://source.android.com/docs/core/storage/scoped)**: ogni app ha il suo spazio, e uscirne deve essere concesso apposta, da te, una cartella alla volta. I file `.igc` di XCTrack stanno proprio in uno spazio protetto di questo tipo, ed è per questo che il tuo gestore file fa finta che non esistano.

> **Non stai aggirando niente.** Niente root, niente disattivato, nessuna strana impostazione nascosta. Usi il meccanismo esattamente come è stato pensato: Android chiede a te, proprietario del telefono, di indicare **una cartella precisa** e di confermarla. Un’app (la tua app di sincronizzazione) riceve una cartella (i tracklog di XCTrack), non le tue foto, non i tuoi messaggi, nient’altro. E puoi revocarlo in qualsiasi momento, dalla stessa schermata in cui l’hai concesso. Limitato, voluto, reversibile.

---

## Prima di tutto: controlla dove XCTrack salva davvero i tracklog

Nove volte su dieci è:

`/Android/data/org.xcontest.XCTrack/files/Tracklogs/`

Ma «nove volte su dieci» non è «sempre»: il percorso cambia tra dispositivi e versioni di XCTrack, e se hai mai spostato i tracklog su una scheda SD saranno da tutt’altra parte. Quindi non fidarti di un percorso scritto a memoria quando hai lo strumento in mano: apri **XCTrack → About** e leggi la riga **«XCTrack data folder»** (*Dossier de données XCTrack* su un telefono in francese).

![Schermata About di XCTrack che mostra il percorso della cartella dati di XCTrack /Android/data/org.xcontest.XCTrack/files](/pict/doc/permissions/about_xctrack.jpg)

> **Attento all’ultimo passo.** Quella schermata mostra la cartella *dati*. I tracklog stanno un livello più sotto, nella sottocartella **`Tracklogs`**, quindi qualunque cosa ti dica la schermata About, aggiungi `/Tracklogs` in fondo.

---

## La procedura, in FolderSync

Gli screenshot qui sotto sono di FolderSync 4.12 su un telefono in francese, quindi ogni etichetta riporta il francese tra parentesi la prima volta. In qualunque lingua parli il tuo telefono, le voci sono negli stessi punti.

### Passo 1: apri Permissions

In FolderSync apri il menu dell’app (il pannello con il numero di versione in alto) e tocca **Permissions** (*Autorisations*).

![Menu dell’app FolderSync 4.12 con la voce Permissions cerchiata](/pict/doc/permissions/step_1.jpg)

### Passo 2: aggiungi una cartella definita dall’utente

Scorri fino a **Added folder permissions** (*Autorisations de dossier ajoutées*) e tocca **Add user-defined folder** (*Ajouter un dossier défini par l'utilisateur*).

![Schermata Permissions di FolderSync con il pulsante «Add user-defined folder» cerchiato](/pict/doc/permissions/step_2.jpg)

Guarda cosa c’è subito sopra quel pulsante: **Revoke permissions** (*Révoquer les autorisations*). È il tuo tasto annulla, bene in vista, prima ancora di aver concesso qualcosa.

### Passo 3: scrivi il percorso, poi scegli XCTrack

Compare un riquadro che ti chiede di scrivere il percorso a mano. Inserisci:

`Android/data/org.xcontest.XCTrack/files/Tracklogs`

…o quello che ti ha mostrato la schermata About, più `/Tracklogs`.

A quel punto subentra il selettore di file di Android, che ti chiede di scegliere una cartella. Nel pannello **Open from** (*Ouvrir à partir de*) a sinistra, tocca la voce **XCTrack**.

![Pannello «Open from» di Android con la scorciatoia XCTrack cerchiata](/pict/doc/permissions/step_3.jpg)

### Passo 4: usa questa cartella

Ti ritrovi dentro **Tracklogs**, davanti ai tuoi voli veri, file datati, uno per decollo. È la conferma che sei nel posto giusto. Tocca **USE THIS FOLDER** (*UTILISER CE DOSSIER*) e conferma la finestra di Android.

![La cartella Tracklogs con i file di volo datati e il pulsante «Use this folder» cerchiato](/pict/doc/permissions/step_4.jpg)

Il grosso è fatto. Tornato in FolderSync, la cartella ora si può scegliere come **cartella locale** della tua coppia di sincronizzazione, quindi torna a **[Sincronizza automaticamente il tuo strumento](/doc/sync-instruments-webdav)** e finisci di creare la coppia.

---

## Se qualcosa va storto

**Il selettore sembra vuoto, o non c’è la scorciatoia XCTrack.** Quasi sempre è un errore di battitura nel percorso scritto a mano. Torna alla schermata About di XCTrack, rileggi la cartella carattere per carattere e non dimenticare `Tracklogs` in fondo.

**Il tuo telefono usa parole diverse.** I produttori adorano rinominare i pulsanti: potresti vedere «Consenti l’accesso alla cartella XCTrack» o qualcosa del genere. La forma della procedura è identica: trova la cartella, conferma l’autorizzazione.

**Usi un’altra app di sincronizzazione.** DAVx5, RoundSync, la famiglia Autosync: stessa limitazione di Android, stessa soluzione. Cerca la loro versione di «aggiungi autorizzazione cartella» o «concedi accesso alla cartella». Una volta aperto il selettore sei in territorio noto, perché quella schermata è di Android, non dell’app.

**I tuoi tracklog stanno su una scheda SD.** Salta il percorso definito dall’utente e usa invece **Add USB storage** (*Ajouter un stockage USB*), il pulsante subito sopra, pensato proprio per questo.

---

## Si parte

Un’autorizzazione, due minuti, e il tuo telefono smette di fingere che i tuoi voli non esistano. Poi si torna alla parte bella: voli, atterri, ti colleghi al Wi-Fi e trovi la traccia già nel tuo libretto di volo.

Un grazie a Gabriel, che ci è arrivato da solo sul suo telefono e ha condiviso gli screenshot perché noi altri non dovessimo farlo.

Cieli blu e libretti pieni. 🪂
