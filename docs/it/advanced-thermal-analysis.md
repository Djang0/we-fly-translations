---
title: Analisi avanzata delle termiche
description: Analisi dettagliata di ogni termica che hai sfruttato, con centratura, rateo di salita ed efficienza valutati volo per volo
category: Thermal Analysis
order: 1
---

Ti sei mai chiesto se sei davvero un genio delle termiche o se hai solo avuto fortuna? Benvenuto nello strumento di Analisi avanzata delle termiche, il tuo compagno di debriefing che scompone ogni giro che hai fatto come un giudice di gara con un dottorato in termica.

## Che cos’è?

Pensalo come un analizzatore post-volo che osserva ogni tua mossa in termica. Non si limita a dirti "ehi, hai guadagnato 500 m". Va a fondo su *come* sei salito: se andavi a caccia del nucleo come un pro o se girovagavi come un turista.

Lo strumento rileva automaticamente ogni termica che hai lavorato durante il volo, poi assegna a ciascuna un punteggio di qualità e un’analisi dettagliata. È come avere un istruttore che rivede le riprese della tua GoPro, solo che analizza tracce GPS e dati del variometro.

## La vista principale

Quando avvii l’analisi, vedi tre pannelli principali:

### Pannello sinistro: riepilogo del volo ed elenco delle termiche

In alto hai la vista dall’alto:
- **Termiche**: quante ne hai lavorate (o hai *provato* a lavorare)
- **Guadagno**: tutta la quota che hai racimolato
- **Salita media**: il tuo rateo di salita medio su tutte le termiche
- **Qualità**: il punteggio complessivo di qualità delle termiche (ci arriviamo)

Sotto trovi l’elenco delle termiche, tutte quelle che hai preso, in ordine cronologico. Ogni scheda mostra:
- **Badge di qualità**: va da "Discreta" (ahia) a "Ottima" (insegnami i tuoi segreti)
- **Ora di inizio**: quando sei entrato nella termica
- **Guadagno**: quanta quota hai messo in cassaforte
- **Salita**: m/s medi in quella termica

Clicca una termica per analizzarla. La piccola icona a bersaglio reimposta lo zoom della mappa se hai curiosato in giro.

### Pannello centrale: la mappa

Qui succede la magia. Vedrai:

**La tua traccia**: punti GPS colorati che mostrano il tuo percorso nella termica
- 🟢 **Punti verdi**: salita forte (>3 m/s), hai trovato il succo!
- 🔵 **Punti blu**: salita moderata (0-3 m/s), la stai lavorando
- 🔴 **Punti rossi**: discendenza (<0 m/s), ci siamo passati tutti

**Termica selezionata**: evidenziata in rosso con il bordo bianco. È quella che stai analizzando

**Altre termiche**: mostrate in viola con opacità al 40%, per darti il contesto di dove altro sei salito

**Controlli dell’animazione**:
- ▶️ **Riproduci/Pausa**: guarda il replay del volo fotogramma per fotogramma
- 🔄 **Reimposta**: torna all’inizio
- ⬅️➡️ **Navigazione tra i fotogrammi**: passa manualmente da un punto GPS all’altro (o usa le frecce, sì, l’abbiamo reso comodo da tastiera)
- **Contatore dei fotogrammi**: mostra esattamente dove sei nella termica (es. "42/156")

Sotto i controlli vedi i dati in tempo reale del punto GPS corrente:
- **Ora**: il timestamp esatto
- **Quota**: la quota attuale
- **Vario**: la velocità verticale in quel momento

**Consiglio da pro**: usa le frecce per scorrere la termica fotogramma per fotogramma. Perfetto per individuare il momento esatto in cui hai preso il nucleo.

### Pannello destro: dettagli della termica

Questo è il tuo rapporto da istruttore. Vediamo ogni sezione:

#### Panoramica della qualità
**Punteggio complessivo**: un numero composito (0-40) che tiene conto di più fattori:
- Efficienza del rateo di salita
- Quanto sei rimasto centrato
- Rapporto tra deriva e salita
- Regolarità delle virate

La barra di avanzamento mostra dove ti collochi sulla scala. Fai 25+ con costanza? Stai facendo qualcosa di giusto.

**Efficienza**: la percentuale del tempo in termica che è stata davvero salita produttiva. Numeri più bassi vogliono dire che hai passato tempo a girovagare o in discendenza.

#### Deriva e vento
**Distanza di deriva**: quanto la termica ti ha portato sottovento mentre salivi. Di solito meno è meglio (a meno che tu non *volessi* derivare).

**Velocità del vento**: calcolata dalla tua deriva. Utile per capire le condizioni.

**Bussola del vento**: mostra graficamente la direzione del vento. La freccia punta verso dove il vento *va* (convenzione dei meteorologi, scusate velisti).

#### Salita
I numeri grezzi:
- **Guadagno**: i metri totali guadagnati
- **Media**: la tua velocità verticale media
- **Max**: il miglior rateo di salita che hai preso (di solito quando hai centrato il nucleo)
- **Min**: il momento peggiore (spesso all’ingresso o quando hai perso il nucleo)
- **Variabilità**: quanto è stata regolare la salita. Più bassa = termica morbida, più alta = termica a strappi/turbolenta

#### Nucleo
Qui si fa sul serio da nerd:

**Forza**: la salita sostenuta più forte che hai trovato. È il tuo rateo di salita "ideale".

**Tempo di centratura**: quanto ci hai messo a trovare il nucleo e a restarci dopo essere entrato. Meno è meglio: vuol dire che non hai perso tempo a girovagare ai bordi.

**Centratura**: percentuale del tempo passato nella salita forte rispetto a quella debole. Numeri alti = sei rimasto nel buono.

#### Dinamica delle virate
**Senso**: sinistra o destra (quasi tutti i piloti hanno un lato preferito, nessun giudizio)

**Giri**: quanti giri completi hai fatto

**Velocità**: velocità media di virata in gradi al secondo. Troppo lenta = esci dalla termica per deriva, troppo veloce = forse stai inclinando troppo

#### Tempo
Solo i timestamp e la durata. Utile per incrociarli con i tuoi appunti o con il logger di gara.

#### Consigli

Qui lo strumento diventa chiacchierone. In base all’analisi ricevi un feedback personalizzato, per esempio:
- 🟢 **Feedback positivo** (sfondo verde): cose che hai fatto bene, "Ottimo ingresso nel nucleo con un tempo di ricerca minimo"
- 🟡 **Suggerimenti di miglioramento** (sfondo ambra): aspetti su cui lavorare, "Prova a stringere il raggio di virata per ridurre la deriva"

I consigli sono generati dalle metriche reali della tua prestazione, non sono consigli generici.

## Riproduzione dell’animazione

Il replay è davvero carino. Premi play e guardati lavorare la termica in tempo reale (beh, accelerato). Puoi:

1. **Guardarla tutta**: vedi l’intera termica dall’ingresso all’uscita
2. **Mettere in pausa e scorrere**: usa le frecce per passare dai momenti interessanti
3. **Seguire le metriche**: quota, vario e ora si aggiornano mentre ti muovi nella termica
4. **Confrontare più termiche**: passa da una termica all’altra per vedere come è cambiata la tua tecnica

**Scorciatoie da tastiera**:
- **←** Fotogramma precedente
- **→** Fotogramma successivo

## Il punteggio di qualità spiegato

Il punteggio di qualità non è solo "buon rateo di salita = punteggio alto". È un valore composito che considera:

1. **Efficienza di salita**: salita reale rispetto al massimo teorico
2. **Abilità di centratura**: quanto in fretta hai trovato il nucleo e ci sei rimasto
3. **Gestione della deriva**: se hai ridotto al minimo la deriva sottovento
4. **Regolarità**: quanto è stato stabile il tuo girare

Una termica da 5 m/s in cui hai girovagato può prendere un punteggio più basso di una da 2,5 m/s lavorata alla perfezione. Conta la tecnica, non solo la fortuna.

**Fasce di punteggio**:
- **25-40 (Ottima)**: vai a tutto gas. Girare in termica da livello gara.
- **15-25 (Buona)**: lavoro solido. Hai preso la quota senza perdere troppo tempo.
- **0-15 (Discreta)**: hai portato a casa il risultato, ma c’è margine di miglioramento.

## Schemi ricorrenti che potresti notare

**Deriva alta, centratura bassa**: forse entri troppo largo o non stringi il giro abbastanza in fretta quando trovi la salita.

**Buon tempo di centratura ma efficienza bassa**: la termica stessa poteva essere debole o spezzata. Non è sempre colpa tua!

**Variabilità alta**: possono essere le condizioni (giornata vivace), oppure un’inclinazione poco costante. Controlla la regolarità della tua velocità di virata.

**Ingresso nel nucleo rapido in una termica, lento in un’altra**: fai attenzione alla tecnica di ingresso. Sei entrato sopravento o sottovento? Hai superato il nucleo?

## Quando usare questo strumento

- **Debriefing dopo il volo**: capisci cosa ha funzionato e cosa no
- **Preparazione alle gare**: analizza la tua tecnica in termica sotto pressione
- **Confronto delle condizioni**: guarda come varia la qualità delle termiche con l’ora del giorno, il posto o il meteo
- **Seguire i progressi**: lancia l’analisi su voli di mesi diversi per vedere come cresci
- **Prima della prossima birra**: dimostra ai tuoi amici che quella termica da 6 m/s l’hai *davvero* centrata (prove alla mano!)

## Consigli per un’analisi migliore

1. **Dati GPS puliti aiutano**: segnale GPS debole = analisi meno precisa
2. **Confronta termiche simili**: confronta le tecniche in condizioni simili per conclusioni sensate
3. **Non fissarti su un solo volo**: le tendenze su più voli contano più di una singola termica perfetta
4. **Il vento conta**: un punteggio "Discreta" con 30 km/h di vento può valere più di un "Ottima" in aria ferma

## Cosa questo strumento non fa

- **Prevedere le termiche future**: è analisi, non previsione (ci stiamo lavorando... scherzo)
- **Giudicare le tue scelte di vita**: se dovevi prendere quella termica alle 11 o tirare dritto? Resta una tua decisione
- **Sostituire l’esperienza**: lo strumento mostra i dati, ma imparare a *sentire* le termiche richiede ancora ore di volo

## In conclusione

Questo strumento non ti renderà un pilota migliore dall’oggi al domani, ma ti mostrerà *esattamente* cosa fai in termica. Che tu voglia limare qualche secondo dal tempo di centratura o sia solo curioso di capire perché quella termica era diversa, l’Analisi avanzata delle termiche ti copre le spalle.

Ora vai a volare, prendi qualche termica e torna a vedere se sei bravo quanto pensi.

---

Vedi anche: [Impostazioni dell’analisi avanzata delle termiche](advanced-thermal-analysis-settings.md)
