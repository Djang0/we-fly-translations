---
title: Impostazioni dell’analisi avanzata delle termiche
description: Configura i parametri usati per rilevare e valutare le tue termiche
category: Thermal Analysis
order: 2
---

*Ovvero: come insegnare all’algoritmo che aspetto ha una vera termica*

Hai caricato il volo, aperto l’Analisi avanzata delle termiche e ora fissi la scheda Impostazioni chiedendoti cosa facciano davvero tutti questi cursori e numeri. Buona notizia: sei nel posto giusto. Cattiva notizia: stiamo per diventare nerd (ma in modo divertente, promesso).

Pensa a queste impostazioni come al modo di spiegare al computer cosa consideri *tu* una "termica che vale la pena registrare". Perché diciamocelo: quella bolla debole e stentata che hai lavorato per 45 secondi perché eri basso? L’algoritmo potrebbe non contarla. Ma quel glorioso ascensore da 5 m/s che ti ha portato da "oh cavolo" a "base delle nubi, baby"? Quella sì che viene registrata.

---

## La versione in breve

**Il 99% dei piloti dovrebbe semplicemente usare le impostazioni predefinite.** Sono tarate sulle termiche tipiche del parapendio e funzionano benissimo per la maggior parte dei voli. Toccale solo se:

1. Voli in condizioni strane (termiche debolissime, vento pazzesco, microsalite vicino al pendio)
2. Sei un appassionato di dati e vuoi capire *esattamente* come funziona l’analisi
3. Hai bevuto una birra e hai deciso che sarebbe divertente vedere cosa succede mettendo tutto al massimo

Sei ancora qui? Bene, entriamo nel vivo.

---

## Soglie di rilevamento

*"Quando il girare in tondo diventa 'sono in termica'?"*

### Punteggio minimo di termica (predefinito: 0.35)

**Cosa fa:** l’algoritmo combina più segnali (salita, velocità di virata, movimento GPS) in un unico "punteggio di confidenza termica" da 0 a 1. Questa impostazione dice "non chiamarla termica finché la confidenza non arriva al 35%".

**In parole da pilota:** quanto sei esigente su cosa conta come termica?

- **Più basso (0.2-0.3):** "Lavoro tutto quello che sale." Prende le bolle deboli, ma può registrare qualche falso positivo quando stai solo virando in dinamica o raschiando il pendio.
- **Predefinito (0.35):** "Fammi vedere le termiche vere, non la spazzatura." Equilibrato per il volo di distanza tipico.
- **Più alto (0.4-0.5):** "Registra solo la roba buona." Perde le termiche deboli ma tiene pulite le tue statistiche.

**Detto tra noi:** se voli sulle Alpi e lavori spesso termiche da 0,5 m/s vicino al pendio, abbassalo. Se voli d’estate in pianura con nuclei da 4 m/s, puoi alzarlo.

---

### Punteggio di uscita dalla termica (predefinito: 0.2)

**Cosa fa:** una volta che sei "dentro" una termica, la confidenza deve scendere sotto il 20% prima che l’algoritmo cominci a pensare che tu ne sia uscito.

**In parole da pilota:** quanto continui a cercare prima di ammettere "sì, l’ho persa"?

- **Più basso (0.1-0.15):** "Sono decisamente fuori." Esce dalle termiche in fretta. Va bene se voli termiche pulite e regolari.
- **Predefinito (0.2):** "Ok, qui non funziona più." Tollera brevi discendenze o qualche giro sui bordi.
- **Più alto (0.25-0.3):** "Forse è ancora qui da qualche parte..." Ci mette di più a uscire. Utile per termiche spezzate e rotte in cui entri ed esci di continuo.

**Perché è più basso di quello di ingresso:** isteresi! Lo stesso motivo per cui il tuo termostato non accende il riscaldamento a 20°C per spegnerlo a 19,9°C. Evita che l’algoritmo registri 47 "termiche" separate quando stai lavorando una sola bolla spezzata.

---

### Vario minimo (predefinito: 0.3 m/s)

**Cosa fa:** ignora qualsiasi giro in cui il vario mostra meno di questo valore.

**In parole da pilota:** "Se non è almeno così buona, non la chiamo termica."

- **Più basso (0.1-0.2):** registra salite deboli, raschiate, forse anche la dinamica se stai virando. Ottimo per i voli in "modalità sopravvivenza".
- **Predefinito (0.3):** soglia standard per le termiche in volo di distanza. Se non fa in media 0,3 m/s, probabilmente non ti tiene su a lungo.
- **Più alto (0.5-1.0):** registra solo le termiche in cui stai davvero guadagnando quota a un ritmo decente.

**Curiosità:** i valori predefiniti sono tarati sul parapendio. Se voli in deltaplano con un tasso di caduta peggiore, potresti alzarlo un po’.

---

### Velocità di virata minima (predefinito: 10 deg/s)

**Cosa fa:** quanto velocemente devi virare perché l’algoritmo pensi "sì, sta girando".

**In parole da pilota:** quanto sono stretti i tuoi giri?

- **Più bassa (5-8 deg/s):** giri larghi e pigri. Va bene per il biposto, per gli allievi alle prime armi, o se voli una vela ad alte prestazioni e ti piacciono le inclinazioni dolci.
- **Predefinita (10 deg/s):** girare in termica normale. Un 360° completo ogni 36 secondi.
- **Più alta (15-20 deg/s):** giri stretti e aggressivi. Un 360° ogni 18-24 secondi. Può perdere le tue termiche se giri largo.

**Detto tra noi:** quasi tutti i piloti girano in termica a 10-15 deg/s in modo naturale. Se l’algoritmo perde termiche evidenti, forse giri più largo della media. Scendi a 8. Se registra "termiche" a caso quando fai solo delle S in dinamica, sali a 12-15.

---

## Parametri di isteresi

*"Smettila di essere così nervoso, algoritmo"*

Impediscono al rilevatore di accendersi e spegnersi ogni volta che prendi una bolla o passi 2 secondi in discendenza. Pensali come un "tempo di conferma".

### Durata di ingresso (predefinito: 5 secondi)

**Cosa fa:** devi soddisfare le condizioni di termica per questo numero di secondi di fila prima che conti ufficialmente come "ingresso in termica".

**In parole da pilota:** quanti giri prima di convincerti e dire "sì, questa è una termica"?

- **Più bassa (2-3 s):** "Ci sono!" dopo mezzo giro. Registra le termiche in fretta, ma può prendere falsi positivi.
- **Predefinita (5 s):** circa 1,5 giri per confermare. Un buon equilibrio.
- **Più alta (8-10 s):** "Prima voglio essere sicuro che sia vera." Servono 2-3 giri per registrarla. Perde le bolle brevi ma dà risultati molto puliti.

**Quando regolarla:** abbassala se voli in condizioni molto spezzate, con termiche piccole, e vuoi prendere tutto. Alzala se ti ritrovi termiche fasulle registrate (succede spesso con vento o turbolenza).

---

### Durata di uscita (predefinito: 3 secondi)

**Cosa fa:** devi *non* soddisfare le condizioni di termica per questo tempo prima che conti come "uscita dalla termica".

**In parole da pilota:** quanto continui a cercare dopo che la salita muore prima di andartene.

- **Più bassa (1-2 s):** "No, sono fuori." Esce in fretta. Va bene per termiche pulite e regolari.
- **Predefinita (3 s):** "Aspetta, forse qui è solo debole..." Un giro in più per controllare.
- **Più alta (5-8 s):** "La lavoro ancora un po’..." Più giri prima di arrendersi. Va bene per termiche complesse a più nuclei.

**Consiglio da pro:** con termiche estive forti e a strappi puoi abbassarla. In primavera o in autunno, con salite deboli e spezzate, alzala.

---

### Durata minima della termica (predefinito: 15 secondi)

**Cosa fa:** se giri per meno di questo tempo, nelle statistiche non conta come "termica".

**In parole da pilota:** "Era una termica o solo uno scossone?"

- **Più bassa (8-10 s):** conta le bolle brevi. Va bene se salti di proposito da una bolla all’altra.
- **Predefinita (15 s):** circa 4 giri minimo. Filtra i momenti "ho fatto due giri e me ne sono andato".
- **Più alta (20-30 s):** registra solo le termiche in cui sei davvero rimasto a lavorare. Statistiche più pulite, ma può perdere salite brevi legittime.

**Quando usarla:** se voli in gara e lavori ogni briciola, abbassala. Se fai volo di distanza tranquillo e vuoi solo termiche "vere" nelle statistiche, alzala.

---

## Rilevamento dei giri

*"Come distinguere il girare in termica dal semplice virare"*

### Finestra minima di giro (predefinito: 10 secondi)

**Cosa fa:** l’algoritmo guarda questo numero di secondi di volo alla volta per calcolare se stai girando.

**In parole da pilota:** quanta storia del volo analizzare per valutare la regolarità delle virate.

- **Più bassa (5-8 s):** risposta rapida. Rileva le termiche in fretta ma è più sensibile al rumore.
- **Predefinita (10 s):** circa 2,5 giri di dati. Un buon equilibrio tra velocità e precisione.
- **Più alta (15-20 s):** risposta più lenta ma molto precisa. Può metterci di più a rilevare l’ingresso in termica.

**Detto tra noi:** la maggior parte dei piloti non avrà bisogno di toccarla. È un parametro tecnico che influisce sulla fluidità dell’algoritmo, non tanto sul comportamento del pilota.

---

### Numero minimo di giri (predefinito: 1.0)

**Cosa fa:** devi completare almeno questo numero di 360° completi perché conti come "girare in termica".

**In parole da pilota:** quanti giri prima che sia ufficialmente una termica?

- **Più basso (0.5-0.8):** basta mezzo giro. Prende contatti con la termica molto brevi.
- **Predefinito (1.0):** almeno un 360° completo. Filtra i "ho virato due volte e me ne sono andato".
- **Più alto (2-3):** servono più giri completi. Molto prudente, perde le salite rapide.

**Quando regolarlo:** abbinalo alla Durata minima della termica. Se vuoi registrare tutto, mettile entrambe basse. Se vuoi statistiche pulite, mettile entrambe alte.

---

### Raggio massimo del nucleo (predefinito: 80 metri)

**Cosa fa:** quando calcola la "qualità della centratura", l’algoritmo misura quanto ti allontani dal nucleo della termica. Questa impostazione fissa il raggio massimo che considera ragionevole.

**In parole da pilota:** quanto ci aspettiamo che sia grande il giro?

- **Più basso (50-60 m):** nuclei stretti. Va bene per le termiche estive belle piene. Penalizza i giri larghi.
- **Predefinito (80 m):** lo standard per il parapendio. Un raggio di ~50-80 m è tipico.
- **Più alto (100-120 m):** termiche grandi e diffuse. Pianura, condizioni deboli, o se giri largo.

**Curiosità:** questo non cambia *cosa* viene registrato come termica, solo il punteggio di qualità. Una termica è una termica. Cambia solo quanto "buona" l’algoritmo pensa sia stata la tua centratura.

---

## Metriche di qualità

*"Quanto era buona davvero quella termica?"*

### Rapporto di deriva ideale (predefinito: 0.3)

**Cosa fa:** il rapporto tra distanza di deriva e quota guadagnata. Il valore predefinito 0.3 significa che idealmente derivi di 30 m di lato ogni 100 m di salita.

**In parole da pilota:** cosa conta come "ben centrato" e cosa come "fuori dal nucleo per deriva"?

- **Più basso (0.1-0.2):** molto severo. "Non dovresti derivare quasi per niente." Va bene con condizioni calme e termiche forti.
- **Predefinito (0.3):** realistico in condizioni medie. Un po’ di deriva è normale.
- **Più alto (0.4-0.6):** indulgente. "Derivare va bene, sto comunque salendo." Va bene nelle giornate ventose o con termiche deboli che derivano.

**Perché conta:** influisce sui punteggi di qualità delle termiche e sui consigli. Se voli con vento forte e derivi sempre di 50 m mentre sali, alzalo per non essere penalizzato.

---

### Finestra di centratura (predefinito: 20 secondi)

**Cosa fa:** l’algoritmo controlla i tuoi primi X secondi nella termica per vedere quanto in fretta hai trovato il nucleo.

**In parole da pilota:** "Quanto ci hai messo a trovare la salita migliore?"

- **Più bassa (10-15 s):** "L’hai centrata subito?" Molto severa sulla centratura iniziale.
- **Predefinita (20 s):** circa 5-6 giri per trovare il nucleo. Realistico per la maggior parte dei piloti.
- **Più alta (30-40 s):** "Prenditi il tuo tempo, tutti a volte facciamo fatica." Più indulgente se all’inizio giri un po’ a vuoto.

**Detto tra noi:** influisce sui feedback "Ottimo ingresso nel nucleo" / "Lavora sulla centratura". Se ricevi spesso "lavora sulla centratura" ma senti di centrare *bene*, magari il tuo stile è solo più esplorativo nei primi giri. Alzala.

---

## Scenari pratici: quando cambiare le impostazioni

### "L’algoritmo non registra le mie termiche deboli"

Voli in condizioni al limite, lavori salite da 0,3-0,8 m/s, ma l’analisi non mostra nessuna termica.

**Soluzione:**
- Abbassa il **Vario minimo** a 0.2
- Abbassa il **Punteggio minimo di termica** a 0.25
- Abbassa la **Durata minima della termica** a 10 s

---

### "Registra 'termiche' a caso che non erano termiche"

Vedi termiche registrate durante la planata, o quando stavi solo virando vicino al pendio.

**Soluzione:**
- Alza il **Punteggio minimo di termica** a 0.4
- Alza la **Velocità di virata minima** a 12-15 deg/s
- Alza la **Durata minima della termica** a 20 s

---

### "Ricevo 'lavora sulla centratura' ma io centro benissimo!"

L’algoritmo pensa che tu derivi troppo o che ci metta troppo a trovare il nucleo.

**Soluzione:**
- Alza il **Rapporto di deriva ideale** a 0.4-0.5 (soprattutto nelle giornate ventose)
- Alza la **Finestra di centratura** a 30 s (ti dà più tempo per esplorare)

---

### "Nell’analisi le termiche continuano a iniziare e finire"

Stai lavorando una sola termica ma viene registrata come 3 termiche separate.

**Soluzione:**
- Alza la **Durata di uscita** a 5-8 s (ci mette di più a uscire)
- Abbassa il **Punteggio di uscita dalla termica** a 0.15 (più facile restare "dentro")

---

### "Volo in biposto e non rileva le mie termiche"

Biposto = giri più larghi, virate più lente, pilotaggio più prudente.

**Soluzione:**
- Abbassa la **Velocità di virata minima** a 6-8 deg/s
- Alza il **Raggio massimo del nucleo** a 100 m
- Alza la **Finestra di centratura** a 30 s

---

## La guida "dimmi solo cosa fare"

### La maggior parte dei piloti (distanza, volo ricreativo)
**Usa i valori predefiniti.** Sono tarati per te. Davvero.

### Piloti da gara
- Abbassa la **Durata minima della termica** a 10 s (ogni salita conta)
- Abbassa la **Durata di ingresso** a 3 s (rilevamento rapido)
- Alza il **Vario minimo** a 0.5 (registra solo le termiche buone)

### Volo in costiera o vicino al pendio
- Abbassa il **Punteggio minimo di termica** a 0.25 (prende le salite deboli)
- Alza la **Durata di uscita** a 5 s (termiche spezzate)
- Alza il **Rapporto di deriva ideale** a 0.5 (deriva da vento)

### Volo in pianura (termiche estive forti)
- Alza il **Vario minimo** a 0.5 m/s (ignora le salite deboli)
- Abbassa il **Raggio massimo del nucleo** a 60 m (nuclei stretti)
- Alza la **Velocità di virata minima** a 12 deg/s (giri più stretti)

### Volo in montagna (termiche deboli e spezzate)
- Abbassa il **Vario minimo** a 0.2 m/s
- Abbassa il **Punteggio minimo di termica** a 0.25
- Alza la **Durata di uscita** a 8 s (non uscire troppo in fretta)

---

## FAQ: domande sentite in atterraggio

### "Perché la mia termica preferita non compare?"

Controlla questi punti in ordine:
1. È durata almeno 15 s? (Durata minima della termica)
2. La salita era di almeno 0,3 m/s? (Vario minimo)
3. Stavi davvero girando? (Velocità di virata minima)
4. Hai completato almeno un 360° completo? (Numero minimo di giri)

### "Posso rompere qualcosa giocando con queste impostazioni?"

No! Nel caso peggiore ottieni risultati strani. Premi "Ripristina i valori predefiniti" e torni alla normalità.

### "Cosa succede se metto tutto al massimo?"

Probabilmente non verrà rilevata nessuna termica. L’algoritmo dirà "NIENTE È ABBASTANZA BUONO" e scarterà tutto. È come alzare così tanto le pretese negli appuntamenti da finire da solo. (L’abbiamo provato. Per la scienza.)

### "E se metto tutto al minimo?"

Tutto diventa una termica. Il tuo gonfiaggio a terra? Termica. Il tuo passaggio in dinamica lungo la cresta? 47 termiche. Quella volta che hai sfiorato il pendio con l’estremità della vela? Una termica sorprendentemente buona. Anche questo l’abbiamo provato. Era il caos.

### "Queste impostazioni cambiano le statistiche dei miei voli?"

Sì! Cambiare cosa conta come "termica" cambia il numero di termiche, la quota totale guadagnata in termica, il rateo di salita medio, ecc. Quindi se confronti le statistiche con un amico, assicurati di usare le stesse impostazioni.

---

## Note avanzate per nerd

(Saltale pure se vuoi solo volare)

Il rilevamento delle termiche usa un **punteggio composito multi-segnale** che combina:
- Letture del vario (stai salendo?)
- Velocità di virata (stai girando?)
- Geometria della traccia GPS (la tua traiettoria è compatibile con il girare in termica?)
- Variazioni di rotta (stai completando i giri?)

Ogni segnale viene normalizzato tra 0 e 1, poi pesato e combinato. Il **Punteggio minimo di termica** è la soglia per questo punteggio combinato.

I **parametri di isteresi** (Durata di ingresso/uscita) implementano una macchina a stati con ritardi di conferma per evitare oscillazioni. È lo stesso principio usato nei termostati, nelle luci dei freni e in praticamente qualsiasi sistema che debba evitare accensioni e spegnimenti a raffica.

Le **metriche di qualità** usano la statistica circolare per calcolare la direzione della deriva, la posizione del nucleo della termica e l’efficienza di centratura. I calcoli coinvolgono prodotti scalari, differenze di rotta e un po’ di geometria delle coordinate che renderebbe fiero (o traumatizzato) il tuo prof di matematica del liceo.

## Considerazioni finali

Alla fine della fiera, queste impostazioni sono solo manopole che regolano cosa l’algoritmo considera una "termica". L’apprendimento *vero* avviene quando:

1. Fai il volo
2. Guardi l’analisi
3. La confronti con quello che hai *sentito* in aria
4. Regoli le impostazioni se serve
5. Impari dagli schemi ricorrenti

L’obiettivo non è truccare il sistema per avere statistiche perfette. È capire meglio come voli. Hai centrato bene davvero, o hai solo avuto fortuna con un nucleo forte? Sei uscito dalle termiche troppo presto, o stavano davvero morendo?

L’algoritmo è uno strumento, non un giudice. Usalo per migliorare, non per stressarti con i numeri.

Ora vai là fuori a cercare qualche termica. Quelle vere. In aria. Dove devono stare.

*Cieli blu e aria morbida,*
