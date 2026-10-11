---
title: Guida al fattore G per piloti
description: Quanti G hai tirato davvero in quella termica?
category: Your Flights
order: 4
---

*Ovvero: come dimostrare matematicamente che non ti stai solo vantando di quel SAT che hai mandato*

## Ma che diavolo è il fattore G?

Hai presente quella sensazione quando chiudi la virata in una termica stretta e all’improvviso il tuo corpo pesa il doppio? O quando sbatti contro un muro di salita e vieni schiacciato nella selletta come un astronauta? È la forza G in azione, e ora puoi misurarla davvero.

**La versione breve:** il fattore G (o fattore di carico) ti dice quante volte ti senti più pesante rispetto a quando sei seduto sul divano. In piedi fermo? Fa 1 G. Una virata stretta in termica? Forse 1,4 G. Il tuo amico che giura di aver tirato 3 G in quella spirale? Probabilmente è vero (forse no).

**La versione un po’ più lunga:** il fattore G è il rapporto tra la forza totale che agisce su di te e il tuo peso. In volo livellato a velocità costante sei a 1 G. Se richiami o inclini forte, il fattore G aumenta. Se spingi oltre la sommità di un looping (se ti piace il genere), scende sotto 1 G (ciao, assenza di peso).

**Cosa interessa davvero ai piloti:**
- Stai lavorando quella termica in modo efficiente (senza andare in stallo)?
- Hai tirato davvero 2 G in quella spirale, o la memoria esagera?
- Il tuo pilotaggio è morbido o strattoni la vela come un aquilone in un uragano?

---

## Perché dovrebbe interessarmi?

Bella domanda. Quasi sempre voli a sensazione, non fissando numeri. Ma i dati del fattore G sono utili più di quanto pensi:

1. **Efficienza in termica**: più G in termica = virate più strette
2. **Pilotaggio morbido**: oscillazioni di G selvagge = stai combattendo con la vela invece di ballarci insieme
3. **Margini di sicurezza**: la maggior parte delle vele è omologata per +8.0/-3.5 G. Se in termica vedi spesso 4 G, dobbiamo parlare
4. **Vantarsi con i dati alla mano**: "Ho tirato 6 G in quel SAT" (con il tuo file IGC a confermarlo, così gli amici non possono dire che sono balle)

---

## La fisica (non scappare, è veloce)

### La formula di base

$$
n = 1 + \frac{a}{g}
$$

**Traduzione per umani:**
- **n** = fattore G (il numero che vogliamo)
- **a** = accelerazione (m/s²), quanto in fretta cambia la tua velocità
- **g** = gravità (9,81 m/s²), il modo della Terra per tenerti con i piedi per terra

**Il "1 +"** vuol dire che parti sempre da 1 G (la gravità c’è sempre). Qualsiasi accelerazione **aggiuntiva** (da virate, richiamate, ecc.) si somma a questa base.

**Esempi:**
- In crociera dritto e livellato, nessuna accelerazione → n = 1 + 0/9.81 = **1.0 G**
- Richiamata con un’accelerazione di 4,9 m/s² → n = 1 + 4.9/9.81 = **1.5 G**
- Virata aggressiva con un’accelerazione centripeta di 9,81 m/s² → n = 1 + 9.81/9.81 = **2.0 G**

---

## Due modi per tirare G (entrambi ugualmente scomodi)

Al tuo corpo non importa *perché* stai accelerando, gli importa solo che lo stai facendo. Ci sono due modi principali per accumulare G:

### 1. Accelerazione verticale (la richiamata)

È la classica manovra "tiri la cloche e ti si chiude lo stomaco".

**Cosa succede:** stai cambiando la tua velocità verticale (sali più in fretta o scendi più piano), il che crea un’accelerazione verso l’alto.

**La formula:**
$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Dove:
- **a_z** = accelerazione verticale (m/s²), quanto in fretta cambia il tuo rateo di salita
- Positiva = sali più in fretta (o scendi più piano)
- Negativa = scendi più in fretta (o sali più piano)

**Quando la senti:**
- Uscendo da una picchiata
- Entrando in una termica e prendendo una salita forte
- Al traino al verricello (ciao, 2+ G per 10 secondi di fila)
- Quel momento in cui l’onda attacca e vieni sparato verso il cielo

**Esempi reali:**
- Ingresso morbido in termica: 1,2-1,4 G (una leggera stretta)
- Richiamata aggressiva: 1,8-2,5 G (le guance ora sono in grembo)
- Picco al traino al verricello: 2,0-3,0 G (benvenuto sul treno del dolore)

---

### 2. Accelerazione laterale (la virata)

È la situazione "sto chiudendo questa termica e l’estremità della vela punta verso terra".

**Cosa succede:** stai virando, quindi stai accelerando di continuo *verso il centro della virata* (accelerazione centripeta). Ti senti più pesante perché la portanza della vela deve sia tenerti su SIA farti girare.

**La formula:**
$$
n_{lat} = 1 + \frac{v \times \omega}{g}
$$

Dove:
- **v** = velocità al suolo (m/s), quanto veloce ti muovi
- **ω** (omega) = velocità di virata (rad/s), quanto in fretta cambi direzione
- **v × ω** = accelerazione centripeta (la "forza" laterale che ti tira dentro la virata)

**Traduzione:** più veloce voli e più stretta viri, più G tiri.

**Quando la senti:**
- In ogni termica (virata costante = G laterale costante)
- Nelle virate strette
- Nelle spirali (soprattutto quelle veloci e aggressive di cui ti penti a metà manovra)
- Nell’acro (sommità dei wingover, uscite dalle spirali, ingressi in SAT)

**Esempi reali:**
- Termica pigra (poca inclinazione): 1,1-1,2 G (appena percettibile)
- Termica efficiente (inclinazione moderata): 1,3-1,5 G (è il punto ideale)
- Termica aggressiva (forte inclinazione, alta velocità): 1,6-2,0 G (il tuo tasso di caduta è appena entrato nel regno delle ombre)
- Ingresso in SAT: 2,5+ G (complimenti, ora pesi 200 kg)

---

## Come We-Fly calcola i tuoi G dai file IGC

Qui si fa sul serio da nerd (ma resta con me, è davvero interessante).

### Il problema: i file IGC non sono accelerometri

Il tuo logger non ha un accelerometro (a meno che non sia di quelli raffinati). Registra solo:
- Coordinate GPS (latitudine, longitudine)
- Quota barometrica (dal sensore di pressione)
- Quota GPS (dai satelliti)
- Timestamp (di solito 1 Hz, cioè una volta al secondo)

Quindi dobbiamo **dedurre** l’accelerazione dalle variazioni di posizione e quota nel tempo. È come capire quanto ha accelerato un’auto guardandola passare davanti a dei punti di riferimento: si può fare, ma non è perfetto.

---

### Passo 1: smussare i dati rumorosi

**La sfida:** i sensori GPS e di pressione sono rumorosi. Se prendiamo le letture grezze di quota e le deriviamo, otteniamo numeri che oscillano all’impazzata e non hanno senso fisico (tipo sostenere che hai tirato 47 G in volo rettilineo).

**La soluzione:** usiamo un **filtro di Savitzky-Golay**, una tecnica di smussamento raffinata che conserva la forma delle variazioni reali eliminando il rumore.

**Cosa fa:**
- Guarda una piccola finestra di dati (es. 5 secondi)
- Fa passare una curva polinomiale morbida per quei punti
- Usa quella curva per stimare il valore "vero" in ogni istante

**Perché conta:** senza smussamento, derivare è un suicidio. Con lo smussamento otteniamo numeri puliti e credibili.

---

### Passo 2: calcolare la velocità verticale (derivata prima)

Ora che abbiamo dati di quota smussati, possiamo calcolare quanto in fretta cambia la quota, cioè la tua velocità verticale (rateo di salita/discesa).

**La formula (metodo delle differenze centrali):**
$$
v_z(t) = \frac{alt(t+1) - alt(t-1)}{t_{t+1} - t_{t-1}}
$$

**Traduzione:** guarda la quota un secondo prima e un secondo dopo e dividi per la differenza di tempo.

**Risultato:** ora conosci il tuo rateo di salita in ogni istante (in m/s).

---

### Passo 3: calcolare l’accelerazione verticale (derivata seconda)

Ora deriviamo *di nuovo* per vedere quanto in fretta cambia il tuo rateo di salita: questa è l’accelerazione.

**La formula:**
$$
a_z(t) = \frac{v_z(t+1) - v_z(t-1)}{t_{t+1} - t_{t-1}}
$$

**Ma non è finita, altro smussamento!** Siccome la derivazione amplifica il rumore, smussiamo *di nuovo* la velocità prima di calcolare l’accelerazione.

**Risultato:** ora hai l’accelerazione verticale (m/s²) in ogni istante.

---

### Passo 4: convertire in fattore G verticale

Infine inseriamo l’accelerazione nella formula:

$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Dove **g = 9.81 m/s²** (l’accelerazione di gravità terrestre).

**Cosa ottieni:**
- Volo stabile: 1,0 G
- Entrando in salita: 1,2-1,5 G
- Picco al traino al verricello: 1,5-2,0 G

---

### Passo 5: calcolare velocità al suolo e velocità di virata

Per i G laterali (dovuti alla virata) servono due cose:
1. **Velocità al suolo** (quanto veloce ti muovi)
2. **Velocità di virata** (quanto in fretta cambi direzione)

**Velocità al suolo (con la formula dell’emisenoverso):**

La formula dell’emisenoverso (haversine) calcola la distanza tra due coordinate GPS su una sfera (la Terra), tenendo conto della curvatura.

**Velocità di virata:**

La velocità di virata è quanto in fretta cambia la tua prua (rotta).

**La formula:**
$$
\omega = \frac{\Delta \psi}{\Delta t}
$$

Dove:
- **ψ** (psi) = angolo di rotta (la direzione in cui voli)
- **Δψ** = variazione di rotta tra due punti
- **Δt** = differenza di tempo

---

### Passo 6: convertire in fattore G laterale

Ora abbiamo tutto quello che serve:

$$
n_{lat} = 1 + \frac{v \times |\omega|}{g}
$$

**Perché il valore assoluto della velocità di virata?** Perché non ci interessa se giri a sinistra o a destra: i G si sentono uguali in entrambi i casi.

---

### Passo 7: combinare G verticali e laterali

Ecco il punto chiave: **in ogni istante senti il PIÙ ALTO dei due fattori G**, non la loro somma.

Perché? Perché è fisica, e zitto! Se tiri 1,3 G per una virata e 1,2 G entrando in salita, non senti 2,5 G in totale. Senti 1,3 G (la fonte dominante).

**La formula:**
$$
n_{combined} = \max(n_{vert}, n_{lat})
$$

**Controllo di buon senso:** limitiamo i valori irragionevoli (a volte si infila del rumore):

---

### Passo 8: calcolare le statistiche

Infine maciniamo i numeri per darti un riepilogo:

**Cosa ti dicono questi numeri:**
- **Max:** il tuo momento di picco di G (speriamo non in una spirale di cui ti sei pentito)
- **Media:** i G medi su tutto il volo (di solito 1,1-1,3 in volo termico)
- **Mediana:** i G che hai sentito *per la maggior parte del tempo* (più onesta della media)
- **Deviazione standard:** quanto il tuo pilotaggio è stato morbido o caotico
  - Bassa (< 0.2): pilotaggio morbido e regolare
  - Alta (> 0.5): eri dappertutto (o stavi facendo acro)

---

## Le avvertenze (importanti)

### 1. I dati IGC sono a bassa risoluzione
- La maggior parte dei logger registra a **1 Hz** (una volta al secondo)
- I picchi di G bruschi (come quando butti dentro la virata) vengono mediati
- **In realtà:** potresti toccare per un attimo 2,5 G, ma il tuo logger registra 1,8 G

**Traduzione:** aspettati una **sottostima** dei picchi di G. I numeri sono prudenti.

---

### 2. Quota barometrica contro quota GPS

Per l’accelerazione verticale usiamo la **quota barometrica** (non quella GPS). Perché?

| Fonte della quota | Pro | Contro |
|----|----|---|
| **Pressione** | Morbida, fisicamente coerente | Influenzata dagli errori di QNH e dalle variazioni di pressione |
| **GPS** | Riferimento assoluto | Rumorosa da morire, artefatti a scalini |

**Decisione:** la quota barometrica è **molto meglio** per calcolare le derivate (l’accelerazione). La quota GPS ci darebbe numeri spazzatura.

---

### 3. Lo smussamento nasconde la realtà (ma va bene così)

I filtri di smussamento sono un compromesso:
- **Pro:** eliminano il rumore, danno numeri credibili
- **Contro:** appiattiscono i picchi bruschi, mediano le variazioni rapide

**Il patto:** non cerchiamo di catturare ogni millisecondo del tuo volo. Cerchiamo di darti una **stima ragionevole e difendibile** di quello che è successo.

**Un’analogia:** è come chiedere "A che velocità andavi?". La tua risposta è probabilmente una media ("Sui 100 all’ora"), non un grafico di ogni variazione di velocità ogni 0,1 secondi.

---

### 4. Questi numeri NON hanno valore di omologazione

Sia chiaro: **questa analisi serve per il debriefing, la formazione e la curiosità, NON per verifiche strutturali o contestazioni legali.**

**Va bene per:**
- Rivedere la tua tecnica di pilotaggio
- Confrontare i voli
- Dimostrare agli amici che hai tirato davvero dei G
- I debriefing di formazione

**NON va bene per:**
- Dimostrare che la tua vela regge 5,5 G (usa un vero accelerometro)
- Contenziosi legali
- Pratiche di omologazione

---

## Verifiche e controlli di buon senso

Se vedi numeri strani, ecco come capire cosa succede:

| Vedi | Cosa significa | Causa probabile |
|----|----|---|
| 1.0 G in crociera | ✅ Normale | Dati buoni |
| 1.3 G in termica | ✅ Volo efficiente | Stai lavorando bene i nuclei |
| 4.0 G in volo normale | ❌ Artefatto | Glitch GPS, filtraggio sbagliato, o stai mentendo |
| <=0.5 G in crociera | ❌ Strano | Probabilmente un errore del sensore (o stavi facendo acro?) |
| -5.0 G ovunque | ❌ Assurdo | Il tuo logger è rotto o posseduto |

**Regola d’oro:** se ti sembra sbagliato, probabilmente lo è. Fidati del tuo istinto, poi controlla i dati.

---

## Un’ultima cosa: il fattore G non mente, ma il contesto conta

G alti non sono automaticamente un male, e G bassi non sono automaticamente un bene. Il contesto è tutto:

- **G alti in termica** → può voler dire volo efficiente, o inclinazione eccessiva (controlla il tasso di caduta)
- **G bassi in crociera** → normale e positivo (non stai strattonando la vela)
- **Picchi di G al traino al verricello** → previsti (basta non andare in lockout)
- **Deviazione alta (dev. std)** → può voler dire aria turbolenta, o che voli in modo aggressivo (o che stai imparando)

**Usa i dati come uno strumento, non come un giudizio.** Sono lì per aiutarti a capire come voli, non per farti sentire in colpa per quella spirale di cui ti sei pentito.

---

## Un ultimo pensiero

L’analisi del fattore G non ti renderà un pilota migliore dall’oggi al domani, ma ti darà **spunti basati sui dati** su quello che fai davvero in aria, non solo su quello che *pensi* di fare.

Quindi la prossima volta che il tuo amico si vanta di aver tirato 3 G in quella termica, puoi tirare fuori con calma le tue statistiche del Cockpit e dire: "Bella storia. I dati dicono 1,7."

La scienza vince ancora.

---

## Riferimenti

La formula fondamentale del fattore G (n = 1 + a/g) e i concetti di fattore di carico sono documentati nei materiali standard di ingegneria aerospaziale e di formazione aeronautica:

### 1. FAA Pilot's Handbook of Aeronautical Knowledge (PHAK)
- **Capitolo 5: Aerodynamics of Flight**, sezione Load Factor
- Federal Aviation Administration
- PDF gratuito: [sito della FAA](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
- Tratta le basi del fattore di carico, i limiti strutturali e l’inviluppo di volo

### 2. Aerodynamics for Naval Aviators
- **Autore:** H.H. Hurt Jr.
- **Editore:** University of Southern California (in origine), rivisto dalla U.S. Navy
- Classico testo di ingegneria aerospaziale usato nella formazione al volo militare e civile
- La sezione "Load Factor and Airplane Limitation" fornisce derivazioni dettagliate
- Disponibile presso varie librerie aeronautiche e biblioteche

### 3. Introduction to Flight (8th Edition)
- **Autore:** John D. Anderson Jr.
- **Editore:** McGraw-Hill Education
- **Anno:** 2015
- **ISBN:** 978-0073380247
- Testo di riferimento dei corsi di ingegneria aerospaziale
- Equazione 5.18: derivazione del fattore di carico dall’accelerazione normale
- Trattazione completa delle basi della meccanica del volo

---

*"Alla gravità non importa dei tuoi sentimenti, ma ai tuoi sentimenti importa del fattore G."*
*- Ogni pilota fisico*
