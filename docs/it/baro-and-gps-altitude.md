---
title: Perché quota baro e quota GPS non coincidono
description: Cosa misura la quota barometrica del tuo logger, perché non coincide con il GPS e come We-Fly la tara sul tuo decollo
category: Your Flights
order: 7
---

## Due quote, due riferimenti

Quasi tutti gli strumenti registrano due quote ogni secondo: una dal barometro, una dal GPS. Nella pagina del volo, l'interruttore **Baro / GPS** sopra la mappa sceglie quale delle due mostra il grafico. Coincidono di rado, e in certe giornate ci sono 200 m di differenza.

La **quota GPS** è la tua altezza sul livello medio del mare, misurata dai satelliti. Oscilla parecchio da un secondo all'altro, ma non ha errori sistematici legati alla giornata.

La **quota baro** viene dalla pressione dell'aria. È regolare e precisa da un secondo all'altro, ed è per questo che la usa il tuo variometro. Però lo standard IGC chiede ai logger di registrarla rispetto alla **pressione standard, 1013 hPa**, non alla pressione reale al livello del mare della giornata (il QNH). Lo schermo del vario mostra la quota QNH se l'hai impostato prima del decollo. Il file contiene sempre la versione standard.

## Di quanto può sbagliare

Vicino al livello del mare, 1 hPa corrisponde a circa 8 m di quota.

| Giornata | Pressione al livello del mare | La quota baro nel file risulta |
|---|---|---|
| Standard | 1013 hPa | più o meno giusta |
| Alta pressione forte | 1030 hPa | circa 140 m troppo bassa |
| Alta pressione invernale | 1040 hPa | circa 225 m troppo bassa |
| Bassa pressione profonda | 985 hPa | circa 230 m troppo alta |

La temperatura aggiunge un errore più piccolo che cresce con la quota: con aria più calda dello standard, il barometro sottostima di circa il 4 % della tua quota ogni 10 °C.

Con un'alta pressione forte, un campo vicino alla costa risulta sotto zero. Un campo di traino al verricello a 30 m, con 1030 hPa, registra circa -110 m. Il valore è corretto rispetto allo standard che usa: il tuo logger non è rotto.

## Cosa mostra We-Fly

Nel grafico della quota, la curva baro è **tarata al decollo**: spostata una sola volta per tutto il volo in modo che, al decollo, coincida con il terreno, come fai tu col vario prima di partire. L'indicazione sopra il grafico dice **Quota baro · tarata al decollo**, e la **ⓘ** accanto all'interruttore Baro / GPS ti dice lo spostamento applicato a quel volo. Quando la traccia non ha dati del terreno, la curva baro viene allineata al GPS.

Lo stesso spostamento dà una stima della pressione al livello del mare della giornata: la scheda **Quote** nel riepilogo del volo la mostra come **QNH del giorno**. È approssimativa, perché una temperatura diversa dall'atmosfera standard la falsa, di più sui decolli alti.

Lo spostamento sposta la curva solo in su o in giù. Vario, rateo di salita, guadagni di quota e termiche si calcolano sulle differenze di quota, quindi non ne dipendono. Ogni quota assoluta nell'analisi (quota massima e minima, il plafond, il top delle termiche, la quota dal suolo) usa lo stesso spostamento.

Il tuo file IGC non viene mai modificato: download ed esportazioni ti danno l'originale, esattamente come l'ha scritto il tuo strumento.

## Di quale fidarsi

- **Per salite, discendenze e quota guadagnata:** baro. È regolare e l'errore della giornata si annulla.
- **Per la quota assoluta, lo spazio aereo e il confronto con altri piloti:** GPS, oppure baro tarata al decollo. Il controllo dello spazio aereo sulla mappa del volo usa sempre il GPS.
- **Telefoni senza barometro:** entrambe le curve sono GPS. Non c'è niente da tarare, e la **ⓘ** te lo dice.

Se le due curve restano molto distanti per tutto il volo anche dopo lo spostamento, o la baro salta di centinaia di metri, il sensore di pressione del tuo strumento potrebbe essere difettoso. We-Fly segnala quei voli in **Profilo → Anomalie**.
