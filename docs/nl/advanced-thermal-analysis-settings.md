---
title: Instellingen van de geavanceerde thermiekanalyse
description: Stel de parameters in waarmee je thermieken herkend en gescoord worden
category: Thermal Analysis
order: 2
---

*Of: hoe je het algoritme leert hoe een echte thermiek eruitziet*

Je hebt je vlucht geüpload, de geavanceerde thermiekanalyse geopend, en nu zit je naar het tabblad Instellingen te staren en vraag je je af wat al die schuifjes en getallen eigenlijk doen. Goed nieuws: je bent hier aan het juiste adres. Slecht nieuws: het wordt nu nerdy (maar op een leuke manier, beloofd).

Zie deze instellingen als een manier om de computer te leren wat *jij* een „thermiek die het loggen waard is“ vindt. Want laten we eerlijk zijn: dat zwakke, rafelige belletje dat je 45 seconden gedraaid hebt omdat je laag zat? Misschien telt het algoritme dat niet mee. Maar die glorieuze lift van 5 m/s die je van „oh shit“ naar „hallo wolkenbasis“ bracht? Die wordt zeker gelogd.

---

## De korte versie

**99% van de piloten gebruikt gewoon best de standaardinstellingen.** Die zijn afgesteld op typische thermiek voor paragliders en werken prima voor de meeste vluchten. Kom er alleen aan als:

1. Je in rare omstandigheden vliegt (superzwakke thermiek, gekke wind, microlift vlak bij het terrein)
2. Je een datanerd bent die *precies* wil begrijpen hoe de analyse werkt
3. Je een biertje op had en besloot dat het leuk zou zijn om te zien wat er gebeurt als je alles op het maximum zet

Nog altijd hier? Goed, we duiken erin.

---

## Detectiedrempels

*„Wanneer wordt rondjes draaien ‚ik zit in een thermiek‘?“*

### Min. thermiekscore (standaard: 0.35)

**Wat het doet:** het algoritme combineert meerdere signalen (stijgen, draaisnelheid, GPS-beweging) tot één „thermiekbetrouwbaarheidsscore“ van 0 tot 1. Deze instelling zegt: „noem het geen thermiek tenzij de betrouwbaarheid 35% haalt.“

**In pilotentaal:** hoe kieskeurig ben je over wat als thermiek telt?

- **Lager (0.2-0.3):** „Ik draai alles wat omhoog gaat.“ Vangt zwakke belletjes, maar logt misschien vals positieven als je gewoon draait in hellingwind of tegen het terrein aan krabt.
- **Standaard (0.35):** „Toon me echte thermiek, geen rommel.“ In balans voor gewoon overlandvliegen.
- **Hoger (0.4-0.5):** „Log alleen het goede spul.“ Mist zwakke thermiek, maar houdt je statistieken zuiver.

**Eerlijk gezegd:** vlieg je in de Alpen en draai je vaak thermiek van 0,5 m/s vlak bij het terrein, zet dit dan lager. Vlieg je 's zomers boven vlak land met kernen van 4 m/s, dan mag het hoger.

---

### Uitstapscore (standaard: 0.2)

**Wat het doet:** zodra je „in“ een thermiek zit, moet de betrouwbaarheid onder 20% zakken voor het algoritme denkt dat je eruit bent.

**In pilotentaal:** hoe lang blijf je zoeken voor je toegeeft: „ja, ik ben hem kwijt“?

- **Lager (0.1-0.15):** „Ik ben er echt uit.“ Verlaat thermiek snel. Goed als je in schone, regelmatige thermiek vliegt.
- **Standaard (0.2):** „Oké, dit werkt niet meer.“ Verdraagt even dalende lucht of wat rondzwerven aan de randen.
- **Hoger (0.25-0.3):** „Misschien zit hij hier nog ergens...“ Duurt langer voor je eruit bent. Handig voor rafelige, hakkelige thermiek waar je constant in en uit vliegt.

**Waarom lager dan bij het instappen:** hysteresis! Om dezelfde reden dat je thermostaat de verwarming niet aanzet bij 20°C en uitzet bij 19,9°C. Zo voorkom je dat het algoritme 47 aparte „thermieken“ logt terwijl je gewoon één rafelig belletje draait.

---

### Min. vario (standaard: 0.3 m/s)

**Wat het doet:** negeert elk cirkelen waarbij je vario minder aangeeft dan dit.

**In pilotentaal:** „Is het niet minstens zo goed, dan noem ik het geen thermiek.“

- **Lager (0.1-0.2):** logt zwak stijgen, krabben, misschien zelfs dynamisch hellingstijgen als je aan het draaien bent. Ideaal voor vluchten in „overlevingsmodus“.
- **Standaard (0.3):** de gewone drempel voor XC-thermiek. Haal je gemiddeld geen 0,3 m/s, dan blijf je op lange termijn waarschijnlijk niet boven.
- **Hoger (0.5-1.0):** logt alleen thermiek waarin je echt met een fatsoenlijk tempo hoogte wint.

**Leuk weetje:** de standaardwaarden zijn afgesteld op paragliders. Vlieg je een deltavlieger met een slechtere daalsnelheid, dan zet je dit misschien wat hoger.

---

### Min. draaisnelheid (standaard: 10 deg/s)

**Wat het doet:** hoe snel je moet draaien voor het algoritme denkt: „ja, die cirkelt.“

**In pilotentaal:** hoe krap zijn je cirkels?

- **Lager (5-8 deg/s):** wijde, luie cirkels. Goed voor tandem, beginnende leerlingen of als je een high-performance scherm vliegt en van zachte hellingshoeken houdt.
- **Standaard (10 deg/s):** gewoon thermieken. Eén volledige 360° per 36 seconden.
- **Hoger (15-20 deg/s):** krappe, agressieve cirkels. Eén 360° per 18-24 seconden. Mist misschien je thermieken als je wijd draait.

**Eerlijk gezegd:** de meeste piloten thermieken vanzelf aan 10-15 deg/s. Mist het algoritme duidelijke thermieken, dan draai je misschien wijder dan gemiddeld. Zet dit dan op 8. Logt het willekeurige „thermieken“ terwijl je gewoon S-bochten maakt in hellingwind, zet het dan op 12-15.

---

## Hysteresisparameters

*„Doe eens niet zo zenuwachtig, algoritme“*

Deze voorkomen dat de detector aan en uit flappert telkens je een rimpeling raakt of 2 seconden in dalende lucht zit. Zie ze als „bevestigingstijd“.

### Instapduur (standaard: 5 seconden)

**Wat het doet:** je moet zoveel seconden aan een stuk aan de voorwaarden voor thermiek voldoen voor het officieel als „thermiek binnengevlogen“ telt.

**In pilotentaal:** hoeveel bochten voor je je vastlegt en zegt: „ja, dit is een thermiek“?

- **Lager (2-3s):** „Ik zit erin!“ na een halve bocht. Logt thermiek snel, maar vangt misschien vals positieven.
- **Standaard (5s):** ongeveer 1,5 cirkel om te bevestigen. Goede balans.
- **Hoger (8-10s):** „Laat me eerst zeker zijn dat dit echt is.“ Neemt 2-3 cirkels om te loggen. Mist korte belletjes, maar geeft heel zuivere resultaten.

**Wanneer bijstellen:** lager als je in superrafelige omstandigheden vliegt waar thermieken klein zijn en je alles moet vangen. Hoger als er valse thermieken gelogd worden (vaak bij winderige of turbulente omstandigheden).

---

### Uitstapduur (standaard: 3 seconden)

**Wat het doet:** je moet zo lang *niet* aan de voorwaarden voor thermiek voldoen voor het als „thermiek verlaten“ telt.

**In pilotentaal:** hoe lang je blijft zoeken nadat het stijgen wegvalt, voor je doorvliegt.

- **Lager (1-2s):** „Nee, ik ben weg.“ Verlaat snel. Goed voor schone, regelmatige thermiek.
- **Standaard (3s):** „Wacht even, misschien is het hier gewoon zwak...“ Nog één bocht om te checken.
- **Hoger (5-8s):** „Ik werk hier nog wat aan...“ Meerdere bochten voor je opgeeft. Goed voor complexe thermiek met meerdere kernen.

**Pro-tip:** in sterke, pittige zomerthermiek kun je dit verlagen. In lente- of herfstomstandigheden met zwak, rafelig stijgen zet je het hoger.

---

### Min. thermiekduur (standaard: 15 seconden)

**Wat het doet:** cirkel je korter dan dit, dan telt het niet als „thermiek“ in de statistieken.

**In pilotentaal:** „Was dat een thermiek of gewoon een hobbel?“

- **Lager (8-10s):** telt korte belletjes mee. Goed als je bewust van belletje naar belletje springt.
- **Standaard (15s):** minimaal ongeveer 4 cirkels. Filtert de momenten „ik draaide twee keer en vertrok“ eruit.
- **Hoger (20-30s):** logt alleen thermiek waarin je echt bleef en hem uitwerkte. Zuiverdere statistieken, maar mist misschien echte korte stijgingen.

**Wanneer gebruiken:** vlieg je wedstrijden en draai je elk klein restje, zet het dan lager. Vlieg je ontspannen XC en wil je alleen „echte“ thermiek in je statistieken, zet het dan hoger.

---

## Cirkeldetectie

*„Hoe je het verschil ziet tussen thermieken en gewoon draaien“*

### Min. cirkelvenster (standaard: 10 seconden)

**Wat het doet:** het algoritme bekijkt telkens zoveel seconden vlucht om te berekenen of je aan het cirkelen bent.

**In pilotentaal:** hoeveel vluchtgeschiedenis er geanalyseerd wordt om de regelmaat van je bochten te beoordelen.

- **Lager (5-8s):** snelle reactie. Herkent thermiek snel, maar is gevoeliger voor ruis.
- **Standaard (10s):** gegevens van ongeveer 2,5 cirkel. Goede balans tussen snelheid en nauwkeurigheid.
- **Hoger (15-20s):** tragere reactie, maar heel nauwkeurig. Het kan langer duren voor het binnenvliegen van een thermiek herkend wordt.

**Eerlijk gezegd:** de meeste piloten hoeven hier niet aan te komen. Het is een technische parameter die bepaalt hoe vloeiend het algoritme werkt, niet echt je gedrag als piloot.

---

### Min. aantal cirkels (standaard: 1.0)

**Wat het doet:** je moet minstens zoveel volledige cirkels van 360° maken voor het als „cirkelen in een thermiek“ telt.

**In pilotentaal:** hoeveel bochten voor het officieel een thermiek is?

- **Lager (0.5-0.8):** een halve cirkel is genoeg. Vangt heel korte contacten met thermiek.
- **Standaard (1.0):** minstens één volledige 360°. Filtert „ik draaide twee keer en vertrok“ eruit.
- **Hoger (2-3):** meerdere volledige cirkels nodig. Heel voorzichtig, mist snelle stijgingen.

**Wanneer bijstellen:** combineer met Min. thermiekduur. Wil je alles loggen, zet ze dan allebei laag. Wil je zuivere statistieken, zet ze dan allebei hoog.

---

### Max. kernstraal (standaard: 80 meter)

**Wat het doet:** bij het berekenen van de „centreerkwaliteit“ meet het algoritme hoe ver je wegdrijft van de kern van de thermiek. Dit bepaalt de maximale straal die het nog redelijk vindt.

**In pilotentaal:** hoe groot verwachten we de cirkel?

- **Lager (50-60m):** krappe kernen. Goed voor zomerse knallers. Bestraft wijd cirkelen.
- **Standaard (80m):** standaard voor paragliding. Een straal van ~50-80m is gebruikelijk.
- **Hoger (100-120m):** grote, uitgespreide thermiek. Vlak land, zwakke omstandigheden, of als je wijde cirkels draait.

**Leuk weetje:** dit verandert niet *wat* als thermiek gelogd wordt, alleen de kwaliteitsscore. Een thermiek is een thermiek. Dit verandert alleen hoe „goed“ het algoritme je centreren vindt.

---

## Kwaliteitswaarden

*„Hoe goed was die thermiek nu echt?“*

### Ideale driftverhouding (standaard: 0.3)

**Wat het doet:** de verhouding tussen driftafstand en hoogtewinst. Standaard 0.3 betekent dat je idealiter 30m opzij drijft per 100m die je stijgt.

**In pilotentaal:** wat telt als „goed gecentreerd“ en wat als „uit de kern gedreven“?

- **Lager (0.1-0.2):** heel streng. „Je hoort amper te drijven.“ Goed voor rustige omstandigheden en sterke thermiek.
- **Standaard (0.3):** realistisch voor gemiddelde omstandigheden. Wat drift is normaal.
- **Hoger (0.4-0.6):** soepel. „Drijven mag, ik stijg nog altijd.“ Goed voor winderige dagen of zwakke, drijvende thermiek.

**Waarom dit telt:** het beïnvloedt je kwaliteitsscores en tips. Vlieg je in sterke wind en drijf je constant 50m weg terwijl je stijgt, zet dit dan hoger zodat je er niet voor gestraft wordt.

---

### Centreervenster (standaard: 20 seconden)

**Wat het doet:** het algoritme bekijkt je eerste X seconden in de thermiek om te zien hoe snel je de kern vond.

**In pilotentaal:** „Hoe snel vond je het beste stijgen?“

- **Lager (10-15s):** „Zat je meteen goed?“ Heel streng voor het eerste centreren.
- **Standaard (20s):** ongeveer 5-6 cirkels om de kern te vinden. Realistisch voor de meeste piloten.
- **Hoger (30-40s):** „Neem je tijd, we sukkelen allemaal wel eens.“ Vergevingsgezinder als je eerst wat rondzwerft.

**Eerlijk gezegd:** dit beïnvloedt de feedback „Mooie instap in de kern“ / „Werk aan je centreren“. Krijg je vaak „werk aan je centreren“ terwijl je het gevoel hebt dat je *wel* goed centreert, dan is je vliegstijl in de eerste bochten misschien gewoon wat meer verkennend. Zet dit hoger.

---

## Praktijkvoorbeelden: wanneer bijstellen?

### „Het algoritme logt mijn zwakke thermiek niet“

Je vliegt in marginale omstandigheden en draait stijgen van 0,3-0,8 m/s, maar de analyse toont geen thermiek.

**Oplossing:**
- Verlaag **Min. vario** naar 0.2
- Verlaag **Min. thermiekscore** naar 0.25
- Verlaag **Min. thermiekduur** naar 10s

---

### „Het logt willekeurige ‚thermieken‘ die geen thermieken waren“

Je ziet thermieken gelogd tijdens je glijvlucht, of terwijl je gewoon vlak bij het terrein aan het draaien was.

**Oplossing:**
- Verhoog **Min. thermiekscore** naar 0.4
- Verhoog **Min. draaisnelheid** naar 12-15 deg/s
- Verhoog **Min. thermiekduur** naar 20s

---

### „Ik krijg ‚werk aan je centreren‘ maar ik centreer prima!“

Het algoritme denkt dat je te veel drijft of te lang zoekt naar de kern.

**Oplossing:**
- Verhoog **Ideale driftverhouding** naar 0.4-0.5 (zeker op winderige dagen)
- Verhoog **Centreervenster** naar 30s (geeft je meer tijd om te verkennen)

---

### „Thermieken blijven starten en stoppen in de analyse“

Je draait één thermiek, maar die wordt als 3 aparte thermieken gelogd.

**Oplossing:**
- Verhoog **Uitstapduur** naar 5-8s (duurt langer voor je eruit bent)
- Verlaag **Uitstapscore** naar 0.15 (makkelijker om „erin“ te blijven)

---

### „Ik vlieg tandem en mijn thermieken worden niet herkend“

Tandem = wijdere cirkels, tragere bochten, voorzichtiger vliegen.

**Oplossing:**
- Verlaag **Min. draaisnelheid** naar 6-8 deg/s
- Verhoog **Max. kernstraal** naar 100m
- Verhoog **Centreervenster** naar 30s

---

## De gids „Zeg me gewoon wat ik moet doen“

### De meeste piloten (XC, recreatief)
**Gebruik de standaardwaarden.** Ze zijn op jou afgesteld. Echt.

### Wedstrijdpiloten
- Verlaag **Min. thermiekduur** naar 10s (elke stijging telt)
- Verlaag **Instapduur** naar 3s (snelle detectie)
- Verhoog **Min. vario** naar 0.5 (log alleen goede thermiek)

### Vliegen aan de kust of langs het terrein
- Verlaag **Min. thermiekscore** naar 0.25 (vang zwak stijgen)
- Verhoog **Uitstapduur** naar 5s (rafelige thermiek)
- Verhoog **Ideale driftverhouding** naar 0.5 (drift door de wind)

### Vliegen boven vlak land (sterke zomerthermiek)
- Verhoog **Min. vario** naar 0.5 m/s (negeer zwak stijgen)
- Verlaag **Max. kernstraal** naar 60m (krappe kernen)
- Verhoog **Min. draaisnelheid** naar 12 deg/s (krappere cirkels)

### Vliegen in de Alpen (zwakke, rafelige thermiek)
- Verlaag **Min. vario** naar 0.2 m/s
- Verlaag **Min. thermiekscore** naar 0.25
- Verhoog **Uitstapduur** naar 8s (niet te snel eruit)

---

## FAQ: vragen die we op de landingsplaats hoorden

### „Waarom verschijnt mijn favoriete thermiek niet?“

Controleer deze punten in volgorde:
1. Duurde hij minstens 15s? (Min. thermiekduur)
2. Was het stijgen minstens 0,3 m/s? (Min. vario)
3. Was je echt aan het cirkelen? (Min. draaisnelheid)
4. Heb je minstens één volledige 360° gemaakt? (Min. aantal cirkels)

### „Kan ik iets kapotmaken door hieraan te prutsen?“

Nee hoor! In het slechtste geval krijg je rare resultaten. Klik gewoon op „Standaardwaarden herstellen“ en alles is weer normaal.

### „Wat gebeurt er als ik alles op het maximum zet?“

Dan wordt er waarschijnlijk geen enkele thermiek herkend. Het algoritme roept „NIETS IS GOED GENOEG“ en verwerpt alles. Een beetje zoals je eisen bij het daten zo hoog leggen dat je alleen eindigt. (We hebben het getest. Voor de wetenschap.)

### „Wat gebeurt er als ik alles op het minimum zet?“

Dan wordt alles een thermiek. Je groundhandling? Thermiek. Je run langs de helling? 47 thermieken. Die keer dat je een vleugeltip over de grond sleepte? Verrassend goede thermiek. Ook dit hebben we getest. Het was chaos.

### „Beïnvloeden deze instellingen mijn vluchtstatistieken?“

Ja! Als je verandert wat als „thermiek“ telt, verandert ook je aantal thermieken, de totale hoogte gewonnen in thermiek, je gemiddelde stijgsnelheid enzovoort. Vergelijk je statistieken met een vriend, zorg dan dat jullie dezelfde instellingen gebruiken.

---

## Geavanceerde nerdnotities

(Sla dit gerust over als je gewoon wilt vliegen)

De thermiekdetectie gebruikt een **samengestelde score uit meerdere signalen** die combineert:
- Variowaarden (ga je omhoog?)
- Draaisnelheid (ben je aan het cirkelen?)
- Geometrie van de GPS-track (past je vliegpad bij thermieken?)
- Koersveranderingen (maak je volledige bochten?)

Elk signaal wordt genormaliseerd tussen 0 en 1, daarna gewogen en gecombineerd. De **Min. thermiekscore** is de drempel voor die gecombineerde score.

De **hysteresisparameters** (Instapduur/Uitstapduur) vormen een toestandsmachine met bevestigingsvertragingen om schommelen te voorkomen. Hetzelfde principe zit in thermostaten, remlichten en eigenlijk elk systeem dat snel aan- en uitschakelen moet vermijden.

De **kwaliteitswaarden** gebruiken circulaire statistiek om de koers van de drift, de positie van de kern en de centreerefficiëntie te berekenen. Daar komen inproducten, koersverschillen en wat coördinatenmeetkunde bij kijken waar je wiskundeleraar van het middelbaar trots op zou zijn (of een trauma van zou krijgen).

## Tot slot

Kijk, uiteindelijk zijn deze instellingen gewoon knoppen die bijstellen wat het algoritme als een „thermiek“ beschouwt. Het *echte* leren gebeurt wanneer je:

1. De vlucht vliegt
2. De analyse bekijkt
3. Ze vergelijkt met wat je in de lucht *voelde*
4. De instellingen bijstelt als het nodig is
5. Leert uit de patronen

Het doel is niet om het systeem te bespelen voor perfecte statistieken. Het doel is je eigen vliegen beter te begrijpen. Centreerde je echt goed, of had je gewoon geluk met een sterke kern? Verliet je thermieken te vroeg, of stierven ze echt uit?

Het algoritme is een hulpmiddel, geen jury. Gebruik het om beter te worden, niet om je druk te maken over cijfers.

Ga nu naar buiten en zoek wat thermiek. De echte. In de lucht. Waar ze thuishoort.

*Blauwe luchten en rustige lucht,*
