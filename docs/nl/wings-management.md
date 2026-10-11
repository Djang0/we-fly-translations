---
title: Schermen beheren
description: Hoe je je schermen beheert in We-Fly, hernoemen, indeling solo/tandem, en wat er echt verandert als je dat doet
category: Your Flights
order: 3
---

## Je schermen zitten in je vluchten

We-Fly heeft geen aparte „schermendatabase“. Als je een IGC-bestand uploadt, zet je instrument de naam van je scherm in de header van het bestand, en dat is wat We-Fly oppikt. Elke vlucht draagt zijn eigen schermnaam, en de pagina **Schermen** (`/flights/wings`) is gewoon een slimme samenvatting: ze groepeert al je vluchten per schermnaam en toont je het totaalbeeld.

Dat onderscheid is belangrijk, want het bepaalt wat hernoemen echt doet, en wat niet.

---

## Wat je ziet op de pagina Schermen

Elke rij in je lijst met schermen toont:

- **Schermnaam**: precies zoals je instrument hem in het IGC-bestand heeft gezet
- **Type**: Solo, Tandem of Gemengd (verderop meer daarover)
- **Vluchten**: het totale aantal vluchten dat met dat scherm gelogd is
- **Duur**: de opgetelde vliegtijd van al die vluchten

Van hieruit kun je een scherm hernoemen en het type wijzigen. Dat is alles, netjes en eenvoudig.

---

## Een scherm hernoemen

Er zijn drie plaatsen waar je in We-Fly een schermnaam kunt aanpassen, en elk werkt op een ander bereik.

### Vanaf de pagina Schermen: alles in één keer hernoemen

Klik op **Hernoemen** naast een scherm, typ de nieuwe naam en bevestig. We-Fly past de schermnaam aan op **elke vlucht** met de oude naam. Vijftien vluchten gelogd als „Rush 6“? Ze worden allemaal in één klap „Ozone Rush 6“. Dit is het juiste gereedschap als je een naam in je hele logboek wilt opkuisen.

### Vanuit je vluchtenlijst: alleen geselecteerde vluchten hernoemen

Selecteer op `/flights` een of meer vluchten met de selectievakjes. Er verschijnt een menu met bulkacties. Open het en kies **Schermnaam wijzigen**. Alleen de vluchten die je geselecteerd hebt, worden aangepast, ongeacht met welk scherm ze eerst gevlogen waren. Handig als je een handvol vluchten aan een ander scherm wilt toewijzen zonder de rest aan te raken.

### Vanuit één vlucht: één vlucht hernoemen

Open op de detailpagina van een vlucht het actiemenu en kies **Scherm wijzigen**. Dat past alleen die vlucht aan. Andere vluchten blijven onaangeroerd.

---

**Wat er in alle drie de gevallen verandert:**
- De schermnaam op de betrokken vluchten
- De lijst met schermen (rijen verschijnen, smelten samen of verdwijnen, afhankelijk van wat er overblijft)
- Actieve filters die naar die schermnaam verwijzen

**Wat er niet verandert:**
- Je instrument. De vario, GPS of telefoonapp die die IGC-bestanden heeft gemaakt, staat nog altijd op de oude naam. De volgende keer dat je vliegt en uploadt, verschijnt de nieuwe vlucht weer met de oude naam, want dat is wat je instrument in de IGC-header schreef.

Hernoem je een scherm in We-Fly, **pas dan ook de schermnaam aan in de instellingen van je instrument**. Anders moet je die hernoeming na elke upload opnieuw doen.

> Een scherm hier hernoemen wijzigt alleen de bestaande vluchten in je database. Je vlieginstrument kan nog met de oude schermnaam ingesteld zijn.

---

## Solo of tandem

We-Fly houdt bij of elke vlucht solo of tandem gevlogen is. Dat bepaalt hoe je statistieken getoond worden en kan van belang zijn voor je vluchtlog.

### Hoe het type bepaald wordt

Vluchten zijn standaard **solo**, tenzij We-Fly in je logboek al een tandemvlucht met dezelfde schermnaam vindt. In dat geval krijgt de nieuwe upload automatisch `tandem`, zonder dat je iets hoeft te doen.

### Het type zelf wijzigen

Op de pagina Schermen heeft elke rij een typekeuze. Klik erop om alle vluchten met dat scherm tussen Solo en Tandem te wisselen. Dit is een **bulkbewerking**: ze past elke vlucht met die schermnaam in één keer aan.

Voor je bevestigt, vertelt We-Fly je precies hoeveel vluchten aangepast worden. Geen verrassingen.

---

## Veelvoorkomende situaties

**„Ik vlieg zowel solo als tandem met hetzelfde scherm“**

Gebruik het hernoemtrucje: log de tandemvluchten en hernoem dat scherm dan naar iets als „Fusion 30 Tandem“ voor je ze als tandem markeert. Houd de solovluchten onder de oorspronkelijke naam. Zo verschijnen ze allebei als nette, aparte rijen.

**„Mijn scherm verschijnt onder twee namen“**

Klassieke inconsistentie tussen instrumenten: „Rush 6“ van de ene logger, „OZONE Rush 6“ van een andere, of zelfs een typfout na een firmware-update. Hernoem de varianten naar één vaste naam en ze smelten samen tot één rij.

**„Mijn nieuwe vluchten tonen nog de oude schermnaam nadat ik hernoemd heb“**

Werk je instrument bij. We-Fly leest de naam die in het IGC-bestand staat. Het kan niet overschrijven wat je vario schreef.

---

Blue skies, en consistente schermnamen daarboven.
