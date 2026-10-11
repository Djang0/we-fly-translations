---
title: Zo werkt de thermiekdetectie
description: De regels waarmee We-Fly bepaalt waar een thermiek begint, waar ze eindigt en welke stijgingen op de lijst komen
category: Thermal Analysis
order: 2
---

*Of: hoe de analyse beslist dat al dat gedraai echt een thermiek was*

Elke thermiek die je in het tabblad **Thermiek** van een vlucht ziet, is gevonden door dezelfde detector, met dezelfde drempels, voor elke piloot. Er zijn geen schuifjes om aan te draaien en niets om terug te zetten: de regels liggen vast, zodat jouw cijfers hetzelfde betekenen als die van je vliegmaat, vlucht na vlucht.

Deze pagina legt die regels uit. Negeert de analyse een stijging waarvan je zeker weet dat je ze gewerkt hebt (of splitst ze één thermiek in twee), dan weet je waarom.

---

## De korte versie

1. De detector bekijkt een kort schuivend venster van je track en stelt vier vragen: ga je omhoog, draai je, is de bocht regelmatig, en heb je hoogte gewonnen?
2. Hij voegt de antwoorden samen tot één **thermiekscore** tussen 0 en 1.
3. Een kleine toestandsmachine met ingebouwde aarzeling zet die score om in „glijden“ en „thermieken“, zodat één bobbel of één rondje in dalende lucht het resultaat niet omgooit.
4. Elke kandidaat-stijging wordt daarna bijgesneden tot de cirkels die je echt gevlogen hebt, en blijft alleen behouden als ze lang genoeg duurt, hoogte wint en minstens twee volledige cirkels bevat.

De rest van deze pagina geeft de details achter elke stap.

Alle drempels hieronder zijn de waarden die de engine intern gebruikt, in metrische eenheden. Je weergave-eenheden (voet, knopen enzovoort) veranderen hoe de getallen aan jou getoond worden, niet waar de grenzen liggen.

---

## Stap 1: vier signalen uit een schuivend venster

Voor elk GPS-punt kijkt de detector terug naar de tien vorige punten. Met een gewone logger die één punt per seconde opneemt, is dat ongeveer tien seconden vliegen, zo'n kwart tot een halve cirkel.

Uit dat venster leest hij vier signalen, elk samengeperst op een schaal van 0 tot 1:

| Signaal | Wat het meet | Volle punten bij | Gewicht |
|---|---|---|---|
| Vario | Gemiddelde verticale snelheid over het venster | 3 m/s | 45% |
| Regelmaat van het draaien | Hoe constant je draaisnelheid is | perfect regelmatig draaien | 25% |
| Draaisnelheid | Hoe snel je koers verandert | 30°/s | 20% |
| Hoogtewinst | Netto gewonnen hoogte over het venster | 50 m | 10% |

De vario weegt het zwaarst, omdat hij het meest rechtstreekse bewijs van stijgende lucht is. Daarna komt de regelmaat van het draaien, omdat die een georganiseerde thermiek (vloeiende, herhaalbare cirkels) onderscheidt van willekeurige turbulentie, waarin je koers alle kanten op springt. Draaisnelheid en hoogtewinst bevestigen het beeld.

De gewogen som is de **thermiekscore**. Een piloot die rechtdoor glijdt in stille lucht scoort bijna nul; een piloot die regelmatige cirkels draait in goede stijging scoort ruim boven 0,5.

---

## Stap 2: de toestandsmachine (waarom de detector bewust aarzelt)

Zou de detector gewoon zeggen „score boven X is thermiek“, dan zou het resultaat aan en uit flikkeren telkens als je een bobbel raakt of de dalende kant van een gebroken kern doorkruist. Daarom doorloopt hij in plaats daarvan vier toestanden:

| Toestand | Hoe je erin komt | Hoe je eruit komt |
|---|---|---|
| **Glijden** | Begintoestand | Score bereikt **0,35** → Binnenkomen |
| **Binnenkomen** | Score bereikte 0,35 | Score blijft **5 seconden** op of boven 0,35 → Thermieken. Zakt onder 0,35 → terug naar Glijden (vals alarm) |
| **Thermieken** | Bevestigde thermiek | Score zakt onder **0,20** → Verlaten |
| **Verlaten** | Score viel onder 0,20 | Blijft **3 seconden** onder 0,20 → Glijden. Klimt terug naar 0,35 of meer → opnieuw Thermieken |

Twee details zijn hier belangrijk:

- **Erin komen is strenger dan eruit gaan.** Je hebt 0,35 nodig om een thermiek te beginnen, maar hoeft maar boven 0,20 te blijven om ze te houden. Dat verschil (hysterese genoemd) zorgt ervoor dat één rafelige thermiek niet in vijf stukken gehakt wordt.
- **Daartussen wacht de detector.** Blijft de score tijdens het verlaten tussen 0,20 en 0,35 hangen, dan beëindigt hij de thermiek niet en start hij ze ook niet opnieuw, tot het beeld duidelijk is.

### Vangnetten voor lange stijgingen

Een lange thermiek bouwt veel hoogte op, en die opgespaarde hoogte kan het moment verbergen waarop de stijging echt ophield. Twee extra regels vangen dat op:

- **Controle van de recente trend.** Tonen de laatste 60 seconden tijdens het thermieken een netto hoogteverlies, dan wordt de thermiek meteen afgesloten, hoe goed ze eerder ook was.
- **Controle van de gemiddelde stijging.** Na de eerste minuut moet de gemiddelde stijging sinds het begin van de thermiek boven 0,2 m/s blijven. De lat gaat naar 0,3 m/s na drie minuten en naar 0,4 m/s na vijf. Zak je eronder, dan wordt de thermiek afgesloten.
- **Harde onderbreking bij dalen.** Ben je aan het verlaten, dan beëindigt nog eens 30 m hoogteverlies de thermiek onmiddellijk, ook als een paar zoekcirkels de score even terug omhoog duwen.

Door deze regels verschijnen twee echte stijgingen, verbonden door een korte zoekglijvlucht, als twee thermieken en niet als één.

---

## Stap 3: bijsnijden, dan behouden of weggooien

Wanneer een thermiek afgesloten wordt, ruimt de detector ze op voor hij beslist of ze meetelt.

**Bijsnijden.** De toestandsmachine opent een thermiek een paar seconden nadat je begint te draaien en sluit ze een paar seconden nadat je vertrekt. Die randen zijn meestal zoekglijvlucht, dus de thermiek wordt bijgesneden zodat ze loopt van het begin van je eerste volledige cirkel van 360° tot het einde van je laatste. Een volledige cirkel heeft minstens acht GPS-punten nodig, dus een rommelige kronkel telt niet.

**Behouden of weggooien.** Na het bijsnijden blijft een thermiek alleen behouden als ze:

- in totaal **hoogte gewonnen** heeft,
- minstens **15 seconden** geduurd heeft, en
- minstens **twee volledige cirkels** bevat.

Al het andere wordt gezien als een doortocht door stijgende lucht of een zoekcirkel, niet als een thermiek. Je ziet die tijd wel terug in het tabblad **Fases**: gedraai dat de lat niet haalde, verschijnt als **Zoeken**, en de rest als **Glijvlucht** of **Zweven**.

### Gesleepte en gemotoriseerde starts

Een klim aan de lier, achter een sleep of met een paramotor is sterk en regelmatig, precies wat goed scoort, maar het is geen thermiek. Is het starttype van een vlucht **Gesleept** of **Gemotoriseerd**, dan begint de detectie pas bij je eerste aanhoudende gedraai (een afgevlakte draaisnelheid van minstens 8°/s, volgehouden over acht opeenvolgende punten). Alles daarvoor wordt als de startklim behandeld.

Klopt het starttype van een vlucht niet, verbeter het dan met **Starttype wijzigen** in het actiemenu van de vlucht. De vlucht wordt opnieuw geanalyseerd met de nieuwe instelling.

---

## Stap 4: wat er van elke thermiek gemeten wordt

Zodra een thermiek behouden is, meet de analyse ze. Dit zijn de getallen die je in het detailpaneel van de thermiek ziet:

- **Stijging.** Winst, gemiddelde, maximale en minimale stijging. Maximum en minimum worden afgevlakt over 5 seconden, zodat één rommelig GPS-punt geen record kan zetten; de ruwe pieken van één punt staan ernaast als „piek“.
- **Kern.** Voor elke volledige cirkel zoekt de analyse het centrum van de stijging, met meer gewicht voor de punten waar je het best steeg. Die centra per cirkel worden samengevoegd tot de positie, de sterkte en de grootte van de kern van de thermiek.
- **Centreertijd.** De tijd vanaf het begin van de thermiek tot je voor het eerst binnen 50 m van de kern zat, terwijl je steeg met meer dan 70% van de sterkte van de kern.
- **Centrering.** Hoe dicht je rond de kern draaide. Draaien op de straal van de kern zelf (of krapper) scoort 100%; elke extra kernstraal afstand kost 50%, dus draaien op drie keer de kernstraal scoort nul. Winddrift wordt eruit gehaald door elke cirkel met zijn eigen lokale centrum te vergelijken.
- **Efficiëntie.** Gewonnen hoogte gedeeld door de horizontale afstand tussen waar de thermiek begon en waar ze eindigde, met een maximum van 100%.
- **Draaigedrag.** Richting, aantal volledige cirkels, gemiddelde draaisnelheid, tijd per cirkel, cirkelstraal, en een geschatte hellingshoek en luchtsnelheid op basis van de straal en de duur van de cirkel.
- **Drift en wind.** Driftafstand en een schatting van windsnelheid en windrichting, afgeleid uit hoe je cirkels over de grond verschoven.

Deze getallen voeden de **kwaliteitsscore** van de thermiek en haar **Tips**. De scoreformule heeft een eigen pagina: [De algemene thermiekscore uitgelegd](/doc/overall-thermal-score).

---

## Veelgestelde vragen

### Waarom staat mijn favoriete stijging niet in de lijst?

Controleer deze punten in volgorde:

1. Heb je minstens **twee volledige cirkels** gedraaid? Een stijging waar je rechtdoor doorheen vloog, of met maar één cirkel, telt niet.
2. Duurde ze minstens **15 seconden** nadat ze bijgesneden was tot je cirkels?
3. Heb je tussen je eerste en je laatste volledige cirkel echt **hoogte gewonnen**?
4. Was het vlak na een sleep- of motorklim? Bij een vlucht met **Gesleept** of **Gemotoriseerd** telt niets vóór je eerste aanhoudende gedraai.

### Waarom werd één thermiek in twee gesplitst?

Meestal sloeg de controle van de recente trend of de harde onderbreking bij dalen aan: ergens in het midden verloor je een minuut lang hoogte, of verloor je 30 m terwijl de score laag was. Vanuit het standpunt van de track verliet je de ene thermiek en vond je een andere.

### Kan ik de drempels aanpassen?

Nee. Vroegere versies van We-Fly hadden daar een instellingenpaneel voor; dat is verdwenen. Vaste regels betekenen dat het aantal thermieken, de stijgsnelheden en de kwaliteitsscores eerlijk vergeleken kunnen worden, tussen je eigen vluchten en met andere piloten.

### Veranderen deze regels mijn vluchtstatistieken?

Ze bepalen ze. Je aantal thermieken, de hoogte die je in thermiek won, je gemiddelde stijging en de thermiekcijfers in de Cockpit komen allemaal van deze detector. Omdat iedereen dezelfde regels krijgt, vergelijk je appels met appels.

### Maakt het opname-interval van mijn logger uit?

Een beetje. Het schuivende venster en de test voor een „volledige cirkel“ tellen GPS-punten. Loggers die elke seconde opnemen, geven het zuiverste resultaat. Een logger die om de paar seconden opneemt, ziet minder punten per cirkel, waardoor korte of krappe thermieken makkelijker gemist worden.

---

## Verder lezen

- [Geavanceerde thermiekanalyse](/doc/advanced-thermal-analysis): een rondleiding door het tabblad **Thermiek**
- [De algemene thermiekscore uitgelegd](/doc/overall-thermal-score): hoe de score van elke thermiek opgebouwd wordt
