---
title: Gids voor de polaire voor piloten
description: De prestatiegrafiek van je glijvluchtfasen lezen (en wat ze je niet kan vertellen)
category: Your Flights
order: 5
---

*Of: hoe je naar een kronkelende blauwe lijn kijkt en uitzoekt of je scherm of de atmosfeer het zware werk deed.*

## Wat is dit in godsnaam voor grafiek?

Je hebt het tabblad **Vector Vario** geopend, bent voorbij de tijdreeksen gescrold, en nu staar je naar een sombere blauwe vlek met een paar lijnen die erdoor dwalen. Welkom bij de grafiek **Prestaties in glijvlucht**: de poging van We-Fly om je te tonen wat je scherm echt deed bij elke snelheid tijdens de glijstukken van je vlucht.

**De korte versie:** het is een grafiek van je **vario (daalsnelheid) tegenover je ware luchtsnelheid (TAS)**, beperkt tot de momenten waarop je echt aan het glijden was. De vorm van de lijnen komt het dichtst bij wat we je kunnen geven als „de polaire van je scherm op deze dag, in deze lucht, met jou in het harnas“.

**De eerlijke versie:** het is *niet* de polaire van de fabrikant van je scherm. Dat kan ook niet. We kennen de weerstand van je harnas niet, we kennen je totaalgewicht niet tot op de gram, en we weten al zeker niet wat de atmosfeer deed tussen jou en de grond. Wat we *wel* weten, is wat je logger registreerde, en dat rapporteren we getrouw, met alle spreiding en onzekerheid erbij.

**Wat piloten echt willen weten:**
- „Wat is mijn beste glijgetal met dit scherm?“
- „Bij welke snelheid daal ik het traagst?“
- „Hoeveel van mijn ‚glijvlucht‘ was eigenlijk gratis stijgen van de atmosfeer?“
- „Haalt mijn scherm zijn specificaties, of heeft de marketingafdeling overdreven?“

Op de eerste drie kan deze grafiek redelijk goed antwoorden. Voor de vierde heb je nog een paar vluchten nodig en een gezonde dosis scepsis (daar komen we nog op).

---

## Waarom zou het me iets kunnen schelen?

Vlieg je overland, dan zijn je glijprestaties *hét* verschil tussen een goede thermiekdag en een lange vlucht. Minder dalen, verder glijden, bij de volgende wolk zijn voor je maten. De grafiek geeft je:

1. **Een realiteitscheck voor je scherm**: vergelijk wat je waarnam met de gepubliceerde polaire. Is het verschil enorm, dan klopt er iets niet (scherm, gewicht, harnas of atmosfeer).
2. **Een hint voor je speed-to-fly**: zie waar de stippellijn het hoogst uitkomt (minimale daalsnelheid) en waar ze raakt aan de steilste lijn van het glijgetal (beste L/D).
3. **Een eerlijke lezing van de atmosfeer**: het verschil tussen „wat ik deed“ en „wat mijn scherm alleen zou doen“ is eigenlijk een thermometer voor hoeveel stijgen er in de lucht zat.
4. **Een hulpmiddel voor de nabespreking**: had je na de vlucht het gevoel dat je naar beneden zakte? De grafiek zegt je of je scherm echt hard moest werken of dat de lucht je gewoon afstrafte.

---

## Anatomie van de grafiek

Voor we er betekenis in leggen, geven we de onderdelen een naam. Stel je een grafiek voor met de TAS onderaan (24-53 km/h op een typische XC-vlucht) en de vario aan de zijkant (bovenaan rond +0.5 m/s, onderaan vaak tot -4 m/s).

### De X-as: ware luchtsnelheid (km/h)
TAS = hoe snel je door de luchtmassa beweegt (niet over de grond, dat is de GPS-snelheid). Je sensoren meten ze rechtstreeks via een pitotbuis op de Vector Vario.

**Waarom ze stopt waar ze stopt:** de grafiek toont alleen TAS-klassen met **minstens 20 samples uit glijvluchtfasen**. Zat je maar 5 seconden op volle speedbar, dan valt die klasse weg. De grafiek stopt bewust waar de gegevens stoppen: geen extrapolatie, geen verzonnen curves boven lege ruimte.

### De Y-as: vario (m/s)
Nul is horizontale vlucht. Negatief is dalen (waar je de meeste glijvluchten doorbrengt). Positief is stijgen, en ja, dat gebeurt ook tijdens „glijvluchtfasen“, want thermiek is geniepig.

### De blauwe zone: 10e-90e percentiel
Voor elke TAS-klasse van 1 km/h is dit de spreiding van de variowaarden die je registreerde.

- **Brede zone** = de atmosfeer ging alle kanten op (wat dalers, wat stijgers bij dezelfde TAS)
- **Smalle zone** = constante omstandigheden, een betrouwbaardere lezing van je scherm

### De volle blauwe lijn: mediaan van de vario
Het midden van de gegevens bij elke TAS. Dit is **wat je gemiddeld echt deed** als je aan die snelheid gleed.

**Geniepige waarheid:** op een goede XC-dag ziet deze lijn er verdacht flatterend uit, misschien -1 m/s bij 40 km/h, wat je een glijgetal van ongeveer 11:1 geeft. Dat is niet je scherm. Dat is je scherm **plus al het gratis stijgen waar je doorheen vloog**. Daarover zo meteen meer.

### De donkerblauwe stippellijn: mediaan in rustige lucht
Dit is de mediaan van de vario binnen het **kwartiel met de laagste netto** van elke TAS-klasse: de 25% samples waarin de atmosfeer het sterkst daalde (of het minst steeg). Het is onze beste empirische gok naar „wat het scherm deed toen de lucht je niet hielp“.

**Zelfde vlucht, heel ander verhaal:** bij 40 km/h ligt deze lijn misschien op -3 m/s, wat een glijgetal van eerder 3.7:1 geeft. Steil. Eerlijk. Dichter bij wat een fabrikant op het specificatieblad zou zetten.

### De spreidingscellen (vaag, achter alles)
Elke cel (TAS, vario) krijgt een kleur volgens de **gemiddelde netto** (vario min de veronderstelde daalsnelheid van het scherm):

- **Blauwe cellen**: je vloog door dalende lucht
- **Perzik- of oranje cellen**: je vloog door stijgende lucht
- **Grootte van de bel**: hoeveel samples er in die cel vielen

Het is eigenlijk een heatmap van hoe de atmosfeer je bij elke snelheid behandelde. Mooi, en leerrijk.

### De lijnen van het glijgetal (diagonale grijze gestippelde stralen)
Dit zijn stralen vanuit de oorsprong (0,0) met een constant glijgetal, getekend bij **3:1, 5:1, 7:1, 9:1, 12:1, 15:1, 20:1** (alleen de stralen die binnen de zichtbare grafiek passen).

Omdat de grafiek begint bij TAS=24 (niet 0), ligt de oorsprong buiten beeld linksonder, en verschijnen de lijnen als gestippelde diagonalen die van linksonder naar rechtsboven lopen.

**Zo lees je ze:**
- Waar de **stippellijn van de rustige lucht een glijgetallijn kruist** → dat is de TAS waarbij het scherm dat glijgetal haalt in lucht die niet stijgt.
- Waar een glijgetallijn de gestippelde polaire **raakt** (aanraakt zonder te kruisen) → dat is je **beste L/D op deze vlucht**.

Snel voorbeeld: kruist de gestippelde polaire de straal 5:1 bij TAS=42 km/h, dan zou je bij 42 km/h in koele lucht 5 km gegleden hebben per 1 km hoogteverlies. Raakt de straal 9:1 de stippellijn net bij TAS=32 km/h, dan is dat je raakpunt, je beste glijvlucht van de dag, bij die snelheid.

### De referentielijn Y=0 (gestippeld, horizontaal)
De grens tussen dalen (eronder) en stijgen (erboven). Boven deze lijn leverde de atmosfeer meer stijgen dan je scherm aan daalsnelheid opwekte. Handig om te zien hoeveel van je „glijvluchten“ eigenlijk een thermiekrandje hadden.

### De twee kaarten met waarden onder de grafiek

**Beste waargenomen daalsnelheid (mediaan):** de TAS-klasse waarin de mediaan van de vario het minst negatief was, dus waar je gemiddeld het traagst daalde. Met het aantal samples, de spreiding 10-90 en de benadering in rustige lucht bij dezelfde TAS.

**Beste waargenomen glijgetal (mediaan):** de TAS-klasse met het hoogste glijgetal (TAS in m/s gedeeld door de absolute mediaan van de vario). Met dezelfde ondersteunende statistieken.

---

## Hoe je het echt leest

Hier wordt het leuk. Er zijn twee parallelle lezingen, allebei geldig, en ze vertellen je allebei iets anders.

### Lezing 1: „Wat heb ik gehaald?“

Kijk naar de **volle blauwe lijn**. Dit zijn je echte prestaties: het scherm plus wat de atmosfeer je cadeau gaf. Op een typische XC-vlucht:

- Mediaan van de vario bij 40 km/h: misschien **-1 m/s**
- Afgeleid glijgetal: ~**11:1**

Ziet er geweldig uit, niet? Dat komt omdat veel van je samples uit de „glijvlucht“ in stijgende lucht genomen werden (thermiekflarden onderweg, hellingstijgen, convergentiezones, dat mysterieuze stijgen van 0,5 m/s dat 90 seconden duurde en je vlucht redde). Het liegt niet. Het rapporteert gewoon wat er gebeurde. Je haalde die dag echt een gemiddeld glijgetal van 11:1, omdat de lucht hielp.

Dit is de lijn om naar te kijken als je je afvraagt: **„hoe doe ik het op deze vlucht?“**.

### Lezing 2: „Wat doet mijn scherm alleen?“

Kijk naar de **stippellijn**. Zelfde vlucht, zelfde gegevens, maar alleen de samples met de laagste netto, die waarin de atmosfeer het *minst* gul was. Op diezelfde XC-vlucht:

- Mediaan van de vario in rustige lucht bij 40 km/h: misschien **-3 m/s**
- Afgeleid glijgetal: ~**3.7:1**

Dat is een pak steiler. Dichter bij de gepubliceerde polaire van een fabrikant (al is het niet hetzelfde, zie het onderdeel over de grenzen). Dit is de lijn om naar te kijken als je je afvraagt: **„hoe presteert mijn scherm echt?“**.

### Lezing 3 (de bonus): „Hoeveel stijgen zat er in de lucht?“

Neem het verschil tussen de volle lijn en de stippellijn bij een willekeurige TAS. Dat verschil is ongeveer **hoeveel gratis stijgen de atmosfeer je gemiddeld gaf** bij die snelheid.

- **Groot verschil** (de volle lijn ligt ver boven de stippellijn): je surfte tijdens het grootste deel van je „glijvluchten“ op stijgen. In XC is dat vaak *goed*: efficiënte wolkenstraten, dragende lijnen, convergenties najagen.
- **Klein verschil** (de lijnen liggen tegen elkaar): je gleed echt gewoon door neutrale of dalende lucht. Eerlijk, misschien zwoegen, maar je weet het tenminste.

Dit is de lezing als „atmosferische thermometer“. Ze zegt je minder over je scherm en meer over de omstandigheden waarin je vloog.

---

## Veelgestelde vragen van piloten

### „Waar is mijn minimale daalsnelheid?“

Kijk naar de stippellijn en zoek het hoogste punt (de minst negatieve vario). De kaart onder de grafiek vermeldt dit expliciet, met de TAS en het aantal samples.

**Kanttekening:** begint de grafiek bij 24 km/h maar ligt de echte snelheid van minimale daalsnelheid van je scherm bij 22 km/h, dan is de gerapporteerde minimale daalsnelheid gewoon *de traagste snelheid die je echt gevlogen hebt*, niet de echte top van het scherm. De grafiek kan niet lezen wat je niet geregistreerd hebt.

### „Waar is mijn beste L/D?“

Zoek de glijgetallijn die de stippellijn **raakt**, de straal met het hoogste glijgetal die de curve nog aanraakt. De TAS bij het raakpunt is je snelheid voor het beste glijgetal in rustige lucht.

Je vindt de beste L/D meestal ergens tussen de TAS van minimale daalsnelheid en de trimsnelheid. Sneller dan minimale daalsnelheid (want sneller = meer horizontale afstand per seconde), trager dan trim (want op trim daal je sneller dan bij de sweet spot van de L/D).

### „Is dit de gepubliceerde polaire van mijn scherm?“

**Nee, en daar willen we heel duidelijk over zijn.** Het zijn de empirische prestaties van *jou + je scherm + je harnas + deze atmosfeer, op deze vlucht*. De stippellijn is de beste empirische benadering die we kunnen berekenen, maar het is niet hetzelfde. Om te vergelijken met het specificatieblad zoek je de polaire van je scherm apart op (pagina van de fabrikant, testrapport van de DHV, topics op paraglidingforums, zie het onderdeel over de grenzen).

### „Waarom stopt mijn grafiek bij 53 km/h terwijl ik weet dat ik tot 60 doorduwde?“

Omdat je daar waarschijnlijk maar een paar seconden zat. Klassen met minder dan 20 samples uit glijvluchtfasen vallen weg om statistische rommel te vermijden. Wil je dat de grafiek verder loopt, vlieg dan langer op snelheid (of vlieg meer vluchten, al toont deze grafiek voorlopig maar één vlucht).

### „Waarom ontbreekt de stippellijn in sommige klassen?“

De schatting in rustige lucht heeft **minstens 4 samples met netto** in een klasse nodig. Dunne klassen slaan ze over. Je ziet de stippellijn verdwijnen aan de randen van het TAS-bereik.

---

## De eerlijke grenzen (lees dit twee keer)

Dit is het stuk waar we niets mooier maken dan het is. De grafiek is nuttig. Ze zit ook vol subtiele valkuilen.

### 1. We hebben de gepubliceerde polaire van je scherm niet

We-Fly bewaart geen polaires van fabrikanten per scherm. We kennen het aspectratio van je scherm niet zoals de fabrikant het meet, de weerstandsklasse van je harnas niet, je exacte totaalgewicht niet, en de metingen van de testpiloot voor de certificering ook niet. Dus **kunnen we geen „ideale“ referentiecurve tekenen** om mee te vergelijken.

Om je scherm te toetsen aan de specificaties moet je die apart opzoeken. De meeste fabrikanten publiceren een polaire (of iets wat erop lijkt) in hun technische notities; de testrapporten van de DHV bevatten ze; op forums wordt soms diep gegraven. De stippellijn in de grafiek is je **schatting op basis van de vlucht**, niet de waarheid van de fabrikant.

### 2. Vertekening door stijgen tijdens de glijvlucht

Tijdens glijvluchtfasen vliegen piloten geregeld door stijgende lucht: thermiekflarden onderweg, hellingstijgen aan de loefzijde van een uitloper, convergentielijnen, af en toe een geluksvoltreffer met een wolkenstraat. Die samples hebben een *hogere vario dan het scherm alleen zou geven*.

De **mediaanlijn** wordt daardoor gewoon opgeblazen. De **stippellijn van de rustige lucht** probeert dat te compenseren door alleen de samples met de laagste netto te nemen, maar ze is niet perfect: zelfs het „koele“ kwartiel kan nog zwak stijgen bevatten dat je niet zag.

**Conclusie:** zelfs de stippellijn is waarschijnlijk een beetje flatterend vergeleken met de echte prestaties in stilstaande lucht.

### 3. Netto is geen magische absolute waarheid

De Vector Vario berekent netto als `vario - configured_wing_polar(TAS)`. De nettowaarden waarmee het „koele nettokwartiel“ gekozen wordt, zijn dus zelf afgeleid van **de polaire die in je VV ingesteld was**.

Zit die ingestelde polaire er ver naast (verkeerd scherm in de instellingen, verkeerd gewicht, fabrieksinstellingen die je nooit aangepast hebt), dan is de deelverzameling in koele lucht scheef. Onze „benadering in rustige lucht“ is een *betere* schatting van de polaire dan de ruwe mediaan, maar ze is **geen onafhankelijke meting**. Ze hangt af van de polaire die al in je vario geladen is.

Vertaling: de grafiek is intern consistent, maar niet onafhankelijk gekalibreerd. Rommel erin, iets betere maar nog altijd niet perfecte rommel eruit.

### 4. De TAS van minimale daalsnelheid kan een artefact zijn

De kaart „Beste waargenomen daalsnelheid“ rapporteert gewoon de TAS-klasse met de minst negatieve mediaan van de vario. **Heb je nooit traag genoeg gevlogen** om de echte snelheid van minimale daalsnelheid van je scherm te halen, dan is de gerapporteerde waarde gewoon de traagste TAS die je echt gevlogen hebt.

Voorbeeld: de echte minimale daalsnelheid van het scherm ligt bij 22 km/h, maar je traagste aangehouden glijvlucht op deze vlucht was 24 km/h. De grafiek rapporteert dan 24 km/h als „beste waargenomen daalsnelheid“, ook al zou het scherm het trager beter gedaan hebben. De grafiek **extrapoleert niet** onder je traagste glijvlucht. Dat is zo bedoeld: we rapporteren liever te weinig dan dat we iets verzinnen.

### 5. De grafiek stopt waar de gegevens stoppen

TAS-klassen met minder dan 20 samples uit glijvluchtfasen vallen weg. Een korte duw van 10 seconden op volle speedbar levert niet genoeg samples op om een percentiel te publiceren, dus daar loopt de grafiek gewoon niet door.

**Waarom dit een feature is en geen bug:** we willen geen curve tekenen over snelheden die je amper gevlogen hebt. Het zichtbare einde van de grafiek is *letterlijk het bereik waarover we statistisch zinvolle gegevens hebben*. Wil je een rijkere grafiek, vlieg dan langer in het snelheidsbereik dat je interesseert.

### 6. De detectie van glijvluchtfasen heeft vage randen

De „glijvluchtfase“ komt uit de fase-analyse van We-Fly, die kijkt naar de stabiliteit van de koers, kleine uitschieters van de vario en nog een paar andere heuristieken. Dat werkt meestal goed, maar er sluipen randgevallen in:

- Een piloot die tussen twee thermieken een lang zoekpatroon in S-bochten vliegt, kan als „glijvlucht“ ingedeeld worden, ook al was hij eigenlijk aan het thermieken.
- Een zwakke, drijvende thermiek waarin je amper cirkelt, kan als glijvlucht gelabeld worden.
- De overgangsseconden aan het begin en einde van een glijvlucht worden soms wel, soms niet meegeteld.

Die randgevallen vertekenen de grafiek subtiel. Niet veel, maar ze zijn er.

### 7. Eén vlucht ≠ je scherm

Deze grafiek toont **één specifieke vlucht**. Je gewicht die dag, de afstelling van je harnas, je stuurstijl (actief of passief), de luchtmassa, het convectieregime. Ze spelen allemaal mee. Om je scherm echt te karakteriseren, heb je veel samengevoegde vluchten nodig.

We-Fly voegt hier (nog) geen vluchten samen. Beschouw de grafiek dus als **één enkele waarneming**, niet als een conclusie over je scherm.

---

## Dus… is mijn scherm goed?

Dit is de vraag waar iedereen echt een antwoord op wil. Hier is het eerlijke kader.

### Stap 1: bekijk de stippellijn over meerdere vluchten

Eén vlucht is ruis. Drie vluchten met vergelijkbare vleugelbelasting (zelfde gewicht, zelfde harnas, zelfde scherm) beginnen een signaal te worden. Ligt de stippellijn bij dezelfde TAS consequent 1-1.5 m/s onder de gepubliceerde polaire van de fabrikant, dan is dat een echt prestatieverschil dat het onderzoeken waard is.

### Stap 2: vergelijk met het specificatieblad

Zoek de gepubliceerde polaire van je scherm op. Fabrikanten publiceren meestal:
- De minimale daalsnelheid (m/s) bij een bepaalde TAS (km/h)
- De trimsnelheid en de daalsnelheid op trim
- Soms een schets van de volledige polaire

Leg die punten in gedachten op de grafiek. Is je stippellijn duidelijk steiler dan de specificaties, dan zijn mogelijke verklaringen voor het verschil:
- Pilotengewicht te hoog of te laag (vleugelbelasting buiten de specificaties)
- Weerstand van het harnas (een pod met veel weerstand tegenover het gestroomlijnde wedstrijdharnas van de testpiloot)
- Lijnen die aan vervanging toe zijn (porositeit, uitgerekte lijnen, ouderdom)
- Een scherm met een paar honderd uur op de teller en een lichte prestatiedip
- Niet optimale trim- of riserinstellingen
- Je zat de hele vlucht in licht dalende lucht (dat gebeurt)

### Stap 3: volg de trend

Log je tientallen vluchten en blijft de stippellijn stabiel, dan is dat het prestatiebereik van je scherm in de praktijk, met jou eronder. Vergelijk met de vluchten van volgend jaar om te zien of het scherm veroudert, of met de identieke uitrusting van een vriend om te zien of het aan het scherm of aan de piloot ligt.

### Waar het op neerkomt

De grafiek is een **hulpmiddel voor de nabespreking**, geen vonnis. Gebruik haar om betere vragen te stellen over je vliegen, je scherm en de dagen waarop je vliegt. Gebruik haar niet om discussies aan de toog te beslechten: daarvoor hebben de gegevens te veel kanttekeningen.

---

## Snelle spiekbrief

| Vraag | Waar kijken |
|---|---|
| Wat heb ik vandaag echt gevlogen? | Volle blauwe lijn (mediaan) |
| Wat doet mijn scherm zonder hulp? | Donkere stippellijn (mediaan van het laagste nettokwartiel) |
| Hoe wisselend waren de omstandigheden? | Breedte van de blauwe zone |
| Was de lucht stijgend of dalend bij deze snelheid? | Kleur van de cellen (perzik = stijgen, blauw = dalen) |
| Wat is mijn beste glijgetal? | Glijgetallijn die de stippellijn raakt |
| Wat is mijn snelheid van minimale daalsnelheid? | Hoogste punt van de stippellijn (of de kaart met de waarde) |
| Hoeveel „gratis stijgen“ kreeg ik gemiddeld? | Verticaal verschil tussen de volle lijn en de stippellijn |

---

## Tot slot

De grafiek van de polaire liegt niet, maar ze vertelt ook niet de hele waarheid. Ze vertelt je wat je logger registreerde, met alle spreiding en onzekerheid erbij. Dat is eigenlijk nuttiger dan een zelfverzekerde puntschatting: het dwingt je vragen te stellen in plaats van een getal te slikken.

Dus de volgende keer dat iemand in de club opschept over zijn „glijgetal van 11:1 de hele vlucht lang“, haal je je grafiek boven, wijs je naar de stippellijn bij dezelfde TAS en vraag je vriendelijk: „in koele lucht, of met thermiek die de helft van het werk deed?“

De atmosfeer is gul. Je scherm is eerlijk. De grafiek toont je allebei.

Vlieg lang, glij vlak, en mag je stippellijn altijd vlakker zijn dan je vreesde.
