---
title: Guida al meteo storico
description: Scopri le condizioni atmosferiche reali registrate il giorno di qualsiasi volo del tuo libretto di volo
category: Your Flights
order: 3
---

# Il meteo storico: sapere in cosa stavi volando

Hai appena fatto una giornata di distanza da urlo, hai toccato la base delle nubi e ora sei di nuovo alla macchina chiedendoti cosa stesse succedendo lassù. O magari sei atterrato corto e vuoi sapere se ti ha fregato una convergenza o se hai solo fatto una scelta sbagliata. La scheda **Meteo** ti dà il quadro atmosferico completo di ogni volo del tuo libretto di volo, a posteriori.

Basata sull’**archivio storico di Open-Meteo**, questa scheda recupera il meteo realmente registrato sul tuo decollo nel giorno esatto in cui hai volato. Non una previsione. Non una stima. I numeri reali, ora per ora.

---

## Cosa vedi a colpo d’occhio

In alto nella scheda, sei schede di riepilogo ti danno i punti salienti della giornata:

| Scheda | Cosa ti dice |
|---|---|
| **Temperatura** | Massima e minima del giorno, più i valori "percepiti" |
| **Precipitazioni** | Pioggia totale del giorno in mm |
| **Vento max** | Vento medio di picco, raffica massima e direzione dominante |
| **Soleggiamento** | Quante ore di sole diretto hanno raggiunto il suolo |
| **Alba / Tramonto** | Orari locali della finestra di volo utile della giornata |

Sono i tuoi controlli rapidi: era una giornata di sole pieno o hai lottato con le velature tutto il pomeriggio?

---

## Tabella delle condizioni ora per ora

Qui si fa interessante. La tabella scompone le condizioni ora per ora su 13 colonne. Le ore che cadono nella tua **finestra di volo reale** (dal decollo all’atterraggio) sono evidenziate, così puoi concentrarti su cosa faceva l’atmosfera mentre eri in aria.

Ecco cosa significa ogni colonna:

### Ora
Ora locale della rilevazione (formato HH:MM). Il pallino blu accanto all’ora segna le ore che si sovrappongono al tuo volo.

### Cond.: condizioni meteo
Un’icona e un’etichetta meteo codificate WMO. Coprono tutto, da "Sereno" a "Temporale + grandine". Se stavi raschiando sotto un cielo grigio, qui hai la conferma se era coperto, parzialmente nuvoloso o nebbia vera e propria.

### Temp: temperatura a 2 m
Temperatura dell’aria al suolo (2 metri), in **°C**. Colori dal blu (gelo) passando per ciano, verde, giallo, arancione fino al rosso (caldo). Una scorciatoia visiva: il verde è la tua zona di comfort, l’arancione vuol dire che faceva caldo.

### Percepita: temperatura apparente
Quella che si sentiva davvero, tenendo conto di umidità e vento. Utile per capire perché in decollo faceva freddo anche se il termometro segnava 18°C.

### Umid.: umidità relativa
La percentuale di umidità nell’aria. Un’umidità alta (oltre l’80% circa) tende a frenare lo sviluppo delle termiche e può indicare un’instabilità in arrivo. Umidità bassa con sole forte è spesso il segno che la giornata è partita alla grande.

### Vento: velocità del vento a 10 m
Velocità del vento medio a 10 metri dal suolo, in **km/h**. È il riferimento ufficiale del vento al suolo, misurato all’altezza meteorologica standard.

### Dir.: direzione del vento
Il punto cardinale **da cui** soffia il vento (N, NE, E, ecc.), con una freccia ruotata di conseguenza. Risoluzione a sedici settori, così vedi se la brezza di valle teneva o se il vento sinottico cominciava a infilarsi.

### Raffiche: velocità delle raffiche
La raffica di picco registrata in quell’ora, in **km/h**. Se questo numero è molto più alto del vento medio, l’aria era turbolenta. Un fattore di raffica (raffiche ÷ vento) superiore a 1,5 è un segnale da tenere a mente.

### Nubi: copertura nuvolosa totale
Percentuale di cielo coperta da nubi a tutte le quote, mostrata con una barra. È il totale combinato. Vedi la sezione sulla suddivisione degli strati nuvolosi più sotto per un quadro più dettagliato.

### Pioggia: precipitazioni
La pioggia accumulata nell’ora, in **mm**. Mostrata in blu quando non è zero. Anche 0,1 mm può indicare un rovescio di passaggio; oltre 1 mm in una sola ora vuol dire che pioveva davvero da qualche parte vicino al tuo sito.

### Pressione: pressione al livello medio del mare
Pressione atmosferica riportata al livello del mare, in **hPa**. Una pressione che scende nel corso della giornata indica un peggioramento; una pressione in salita in genere vuol dire miglioramento. La maggior parte dei piloti guarda la tendenza più che il valore assoluto.

### PBL AGL: altezza dello strato limite planetario
Il tetto dello strato di rimescolamento convettivo: in pratica, la quota massima teorica che le termiche possono raggiungere nelle condizioni atmosferiche date, in **metri dal suolo (AGL)**. Questo valore si misura dal terreno del tuo decollo, non dal livello del mare. Se stavi bucando la base delle nubi chiedendoti fin dove potevi salire, questo è il tuo numero. PBL alto (2000 m+ AGL) in una giornata di sole di solito vuol dire che il limite è il cielo; PBL basso (sotto i 1000 m AGL) e stavi raschiando.

> I dati PBL potrebbero non essere disponibili per tutte le date storiche. Quando ci sono, compaiono anche in un grafico a barre interattivo sotto la tabella.

### Radiazione: radiazione solare a onde corte
L’energia solare che raggiunge il suolo, in **W/m²**. È il motore della produzione di termiche. Valori sopra i 600 W/m² con una buona instabilità atmosferica sono di solito quelli in cui la giornata si accende. Se la radiazione ha toccato gli 800+ W/m² e non trovavi comunque salita, dai la colpa all’inversione.

---

## Grafico dell’altezza dello strato limite

Quando i dati PBL sono disponibili, un grafico a barre sotto la tabella mostra la quota dello strato limite nel corso della giornata. Le ore della tua finestra di volo sono evidenziate. Passando su una barra vedi la quota esatta di quell’ora.

Usalo per capire se il plafond stava salendo durante il tuo volo o se stava già crollando quando sei decollato tardi.

---

## Suddivisione degli strati nuvolosi

Sotto la tabella oraria trovi tre valori mediati **solo sulla tua finestra di volo**:

- **Nubi basse**: sotto i 2 km. Sono quelle che bloccano il riscaldamento solare al suolo e uccidono le termiche.
- **Nubi medie**: da 2 a 6 km. Meno impatto sullo sviluppo delle termiche, più rilevanti per la visibilità in volo di distanza.
- **Nubi alte**: sopra i 6 km. Cirri e nubi di ghiaccio d’alta quota. Spesso solo estetiche, ma una copertura alta persistente può ridurre la radiazione quanto basta per ammorbidire la giornata.

---

## Alcune cose da tenere a mente

**Sono dati d’archivio storico, non una misura puntuale.** Open-Meteo ricostruisce le condizioni dalla rianalisi ERA5 e da modelli ad alta risoluzione. I valori sono rappresentativi delle condizioni alle coordinate del tuo decollo, ma gli effetti locali del terreno (venti di valle, zone d’ombra, microclima) non vengono colti tutti. Usali come contesto meteorologico, non come verità assoluta.

**La quota conta.** I dati sono riferiti alla quota GPS del tuo decollo. Le colonne di temperatura e pressione ne tengono conto, ma ricorda sempre che le condizioni su una cresta, su un passo o alla base delle nubi possono essere diverse da quelle che mostra il sensore a 2 m.

**I dati vengono messi in cache dopo il primo caricamento.** Il meteo storico non cambia mai, quindi una volta recuperato viene salvato e le visualizzazioni successive sono istantanee.

---

## Usi pratici

- **Debriefing dopo il volo**: incrocia il momento in cui hai preso la salita più forte con le curve di radiazione solare e PBL.
- **Capire una giornata storta**: controlla se umidità o copertura nuvolosa hanno ucciso le termiche, o se il fattore di raffica ha reso le condizioni più turbolente del previsto.
- **Confrontare giornate simili**: apri due voli dallo stesso sito in stagioni diverse per vedere quali condizioni atmosferiche hanno fatto funzionare una giornata e non l’altra.
- **Formazione e analisi**: se lavori con un istruttore o cerchi di migliorare la tua lettura del meteo, qui hai la storia atmosferica verificata dietro ogni volo del tuo libretto.

---

*Dati meteo forniti da [Open-Meteo](https://open-meteo.com), archivio meteo storico libero e aperto.*
