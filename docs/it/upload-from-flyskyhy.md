---
title: Caricare da Flyskyhy
description: Manda i voli dritti da Flyskyhy sul tuo iPhone o iPad a We-Fly, configura "Other Leonardo server" una volta sola, poi atterri, tocchi, registrato
category: Your Flights
order: 4
---

## Atterri, tocchi, registrato

Sei appena atterrato da un volo da urlo. Hai ancora l’adrenalina addosso, stai ripiegando la vela, e il volo sta già entrando nel tuo libretto di volo We-Fly, direttamente dal telefono che hai in tasca. Niente cavo, niente portatile, niente "lo carico stasera" che poi diventa la settimana prossima.

Se voli con **Flyskyhy** sul tuo iPhone o iPad, ora può passare ogni volo a We-Fly appena atterri. Abbiamo insegnato a We-Fly a parlare **Leonardo**, un linguaggio di caricamento dei voli che Flyskyhy conosce già, quindi resta solo una configurazione di cinque minuti, da fare una volta. Colleghiamo tutto.

> **Attenzione:** così carichi la **traccia registrata** di un volo che hai già fatto (il `.igc`). Non è tracciamento live. È il caricamento del tipo "fatto, ecco il volo".

---

## Prima di tutto: prendi la password del dispositivo (una volta, in We-Fly)

Tutto ruota attorno a un’unica **password del dispositivo** che generi in We-Fly. Pensala come una chiave di riserva tagliata apposta per una sola app. Perdi il telefono o lo vendi, e revochi quella chiave senza toccare nient’altro.

1. Vai su **Profilo → Servizi collegati** e trova la scheda **"Sincronizzazione strumento e cloud"**.
2. Scrivi un nome del dispositivo che riconoscerai più avanti, tipo `iPhone - Flyskyhy`. È *solo un’etichetta per te*: non viene inviato da nessuna parte e Flyskyhy non ne ha mai bisogno.
3. Tocca **Genera**. Compare una **password del dispositivo** (inizia con `wf_key_`).
4. **Copiala subito.** Viene mostrata **una sola volta**. Se chiudi il riquadro senza copiarla, ne generi semplicemente una nuova, nessun danno. La generi dal portatile? Tocca **Scansiona sul telefono** per prenderla con la fotocamera del telefono invece di digitare tutti quei caratteri.

> **Sincronizzi già un variometro via WebDAV?** Allora ne hai già una. La *stessa* password del dispositivo funziona anche per Flyskyhy. Non serve crearne un’altra.

> **Devi essere un membro We-Fly a tutti gli effetti**, registrato e con il consenso dato. Se sei ancora nella fase di attivazione/consenso, completala prima e la scheda si attiverà.

---

## Le tre impostazioni che servono a Flyskyhy

Qualunque cosa tu faccia, Flyskyhy chiede sempre le stesse tre cose:

| Impostazione | Valore |
|---|---|
| **Submit URL** | `https://we-fly.cloud/api/leonardo/flight_submit.php` |
| **Username** | l’email del tuo account We-Fly |
| **Password** | la password del dispositivo che hai appena generato |

Copia queste tre, tienile a portata di mano, e sei pronto.

---

## Passo per passo in Flyskyhy

1. **Genera la password del dispositivo** in We-Fly (vedi sopra) e tieni a portata di mano le tre impostazioni.

2. In Flyskyhy, vai a caricare un volo e scegli **"Other Leonardo server."** È l’opzione che ti permette di puntare l’app verso un server personalizzato: noi.

3. Compila i campi:
   - **Server name** → `We-Fly` (solo un’etichetta per riconoscerlo nell’elenco)
   - **Submit URL** → `https://we-fly.cloud/api/leonardo/flight_submit.php`
   - **Username** → la tua email We-Fly
   - **Password** → la password del dispositivo

4. **Carica.** Flyskyhy invia la traccia e We-Fly fa il resto: il volo arriva nel tuo libretto di volo già con punteggio, mappa e termiche decodificate. Per tutto questo non muovi un dito.

5. Da ora in poi, **"Upload to We-Fly"** è lì tra le tue opzioni di caricamento. Atterri, tocchi, fatto.

> **Consiglio da pro:** il primissimo caricamento è il "piacere di conoscerti". Dopo, ogni nuovo volo è a un tocco di distanza. Prendi l’abitudine di mandarlo mentre stai ancora impacchettando, e il tuo libretto di volo non resterà mai più indietro.

---

## Buono a sapersi

- **Sono accettati solo i tracklog `.igc`.** È esattamente quello che manda Flyskyhy, quindi non devi pensarci.
- **I doppioni vengono saltati automaticamente**, riconosciuti dal contenuto reale del volo. Hai toccato carica due volte? L’avevi caricato a mano la settimana scorsa? We-Fly alza le spalle e dice "questo ce l’ho già". Puoi caricare quanto vuoi. Niente viene mai duplicato.
- **È il tuo libretto di volo, come sempre.** Un volo che arriva da Flyskyhy è identico a uno caricato dal sito: mappe, statistiche e punteggio XC si applicano automaticamente.

---

## Risoluzione dei problemi / FAQ

**Flyskyhy dice che username o password sono sbagliati.**
Nove volte su dieci è la password del dispositivo: siccome viene mostrata una sola volta, un copia-incolla sbagliato può fregarti. Torna su **Profilo → Servizi collegati → Sincronizzazione strumento e cloud**, tocca **Genera** per averne una nuova e incollala di nuovo in Flyskyhy. Lo username è la tua **email** We-Fly, non un soprannome.

**Ricontrolla il Submit URL.**
Deve essere esattamente `https://we-fly.cloud/api/leonardo/flight_submit.php`, con `https://` all’inizio e `/flight_submit.php` alla fine. Una `s` mancante o un errore di battitura in fondo sono l’altro sospettato abituale.

**Nel mio libretto di volo non è comparso niente?**
Assicurati che il caricamento sia davvero terminato (che tu abbia campo), poi aggiorna la [pagina dei voli](/flights). Se Flyskyhy ha segnalato il successo, il volo c’è. Dai un attimo alla pagina e comparirà.

**La mia password è al sicuro?**
È una **password per dispositivo**, non quella di accesso al tuo account. Serve solo ad aggiungere voli e puoi **revocarla in qualsiasi momento** dalla stessa scheda Servizi collegati. Così tagli fuori Flyskyhy all’istante e lasci intatti tutti gli altri dispositivi. Vendi il telefono? Prima revoca.

**Questo cancella dei voli?**
Mai. Serve solo ad *aggiungere* voli. Cancellare lo fai tu, nell’app We-Fly, di proposito. Niente di quello che fa Flyskyhy può rimuovere un volo.

---

## Non voli con Flyskyhy?

Flyskyhy esiste solo per iPhone/iPad. Su un **variometro Android o sull’Air³**, usa invece **[Sincronizza automaticamente il tuo strumento](/doc/sync-instruments-webdav)**: stessa password del dispositivo, stessa idea, via WebDAV.

---

## Ruote su

Configuralo una volta e il tuo libretto di volo praticamente si riempie da solo. Voli, atterri, tocchi, e i numeri ti aspettano prima ancora che tu abbia raccolto i cordini. È così che dovrebbe essere.

Cieli blu e libretti pieni. 🪂
