---
title: Je instrument automatisch synchroniseren
description: Stuur vluchten van je Air³, vario of telefoon via WebDAV rechtstreeks naar We-Fly, zonder kabels en zonder handmatig uploaden
category: Your Flights
order: 4
---

## Landen, verbinden met wifi, klaar

Stel je voor: je klikt je los op de landingsplaats, nog helemaal opgewonden van die laatste stijging in de avondrestitutie, en tegen de tijd dat je scherm ingepakt is, staat je track al in We-Fly: gescoord, op de kaart, thermiek doorgerekend. Geen kabel. Geen „ik upload het vanavond“ dat volgende week wordt. Geen zoektocht door mappen op je telefoon.

Dat is **Instrument- en cloudsync (WebDAV)**. Eén keer instellen, en je toestel geeft elke nieuwe vlucht stilletjes door aan je logboek zodra je weer op wifi zit. Dit is de handleiding die je één keer leest, waarna je je vluchten nooit meer met de hand aanraakt.

De ster van de show is de **Air³** (de Android-vario met XCTrack), maar hetzelfde trucje werkt vanaf elke Android-telefoon en elk instrument dat WebDAV spreekt. Aan de slag.

---

## Eerst: maak je apparaatwachtwoord aan (één keer, in We-Fly)

Alles hangt aan één **apparaatwachtwoord** dat je in We-Fly aanmaakt. Zie het als een reservesleutel die speciaal voor één instrument is bijgemaakt. Raak je het toestel ooit kwijt of verkoop je het, dan trek je die ene sleutel in en verandert er verder niets.

1. Ga naar **Profiel → Gekoppelde diensten** en zoek de kaart **„Instrument- en cloudsync (WebDAV)“**.
2. Typ een naam voor het toestel, iets wat je later herkent, zoals `Air³` of `Oude reservevario`.
3. Tik op **Aanmaken**. Er verschijnt een **apparaatwachtwoord**.
4. **Kopieer het meteen.** Je kopieert het het best meteen, maar klik je weg, dan ben je het niet kwijt: elk wachtwoord blijft **opnieuw te kopiëren vanuit de rij van het toestel** (het kleine kopieericoon ernaast), zolang je dit **browsertabblad** open laat. Het venster opnieuw openen, of zelfs de pagina herladen, is geen probleem. De kopieerknop staat er nog. Hij verdwijnt pas als je **het tabblad sluit**, want We-Fly bewaart alleen een versleutelde versie, nooit het wachtwoord zelf. Gebeurt dat, geen ramp: maak gewoon een nieuw aan.

Diezelfde kaart toont ook de twee andere instellingen die je nodig hebt, elk met een eigen kopieerknop. Zo hoef je hier nooit iets uit je hoofd te typen.

> **Je moet een volwaardig lid van We-Fly zijn**, ingeschreven en met je toestemming gegeven. Zit je nog in de fase van toestemming, rond die dan eerst af en de kaart wordt actief.

---

## De drie instellingen die elk toestel nodig heeft

Welke app of welk instrument je ook naar We-Fly laat wijzen, het vraagt altijd dezelfde drie dingen:

| Instelling | Waarde |
|---|---|
| **Server-URL** | `https://we-fly.cloud/api/webdav` |
| **Gebruikersnaam** | het e-mailadres van je We-Fly-account |
| **Wachtwoord** | het apparaatwachtwoord dat je net hebt aangemaakt |

Meer is het niet. Kopieer die drie, houd ze bij de hand, en je bent klaar voor elke WebDAV-app op de planeet.

---

## Het hoofdnummer: Air³ / Android + XCTrack

Nu komt het mooie. XCTrack slaat elke vlucht al op als `.igc`-tracklog in een map op je toestel. Wij zetten alleen een robotje bij die map dat zegt: „nieuw bestand? naar boven ermee.“ Instellen en vergeten.

### Stap voor stap

1. **Maak je apparaatwachtwoord aan** in We-Fly (zie hierboven). Houd die drie instellingen binnen handbereik.

2. **Installeer een WebDAV-sync-app** uit de Play Store. Elk van deze doet het prima. Kies degene die je het mooist vindt:
   - **FolderSync**
   - **DAVx5**
   - **RoundSync** (of een vergelijkbare app in de stijl van Autosync)

   Het zijn allemaal tools om mappen te synchroniseren; geen enkele is „officieel“, ze spreken gewoon allemaal vloeiend WebDAV.

3. **Voeg in de app een nieuw WebDAV-account (remote) toe.** Vul in:
   - **Server-URL** → `https://we-fly.cloud/api/webdav`
   - **Gebruikersnaam** → je e-mailadres bij We-Fly
   - **Wachtwoord** → je apparaatwachtwoord

   De meeste apps hebben een knop om de verbinding te testen. Tik erop en je zou groen licht moeten krijgen.

4. **Maak een sync-paar** (sommige apps noemen het een mappenpaar):
   - **Lokale map** → waar XCTrack je `.igc`-tracklogs opslaat, meestal `/Android/data/org.xcontest.XCTrack/files/Tracklogs/`. Paden verschillen wat per toestel en per versie, dus vertrouw meer op „de map waarin je `.igc`-bestanden staan“ dan op een vast pad.
   - **Externe map** → de WebDAV-verbinding die je net hebt toegevoegd.

   > **Op Android 11 en hoger is die map verborgen voor gewone bestandskiezers.** Je sync-app doet alsof hij leeg is. Dat is scoped storage die zijn werk doet, geen bug, en er is een nette oplossing van twee minuten: **[Laat je sync-app de map van XCTrack zien](/doc/xctrack-folder-permission)**. Maak die omweg en kom dan hier terug.

5. **Zet de richting op eenrichtingsverkeer, telefoon → We-Fly** (alleen uploaden). We-Fly is de bestemming, geen spiegel in twee richtingen. Je toestel stuurt vluchten naar boven en haalt nooit iets binnen. Zet daarna **automatische synchronisatie** aan: bij een nieuw bestand, of op wifi na de landing, wat je app ook aanbiedt.

6. **Vliegen. Landen. Verbinden met wifi.** Zodra je online bent, klimt je track vanzelf naar We-Fly. Open je logboek en daar staat hij: gescoord, op de kaart, thermiek ontcijferd. Ga je scherm maar inpakken.

> **Tip:** laat de automatische synchronisatie op wifi starten in plaats van op mobiele data, en de batterij van je ophaalbus (en je databundel) zal je dankbaar zijn. Je tracks wachten geduldig en landen op de seconde dat je op de wifi van de gîte zit.

---

## Andere instrumenten en computers

WebDAV is een universele taal, dus dezelfde drie instellingen werken veel verder dan de Air³.

**Andere instrumenten die WebDAV spreken** (een Skytraxx, een Android-toestel zoals de Oudie, alles wat WebDAV kan) stel je precies hetzelfde in: voeg het account toe met de server-URL, je e-mailadres en het apparaatwachtwoord, en laat het wijzen naar de map waar het `.igc`-bestanden opslaat.

**Je computer**. Je kunt dezelfde URL als netwerkschijf koppelen en er gewoon bestanden in slepen:
- **Windows** → *Netwerkverbinding maken* → plak de server-URL, log in met je e-mailadres en apparaatwachtwoord.
- **macOS** → Finder → *Ga → Verbind met server* → dezelfde URL en inloggegevens.
- **Linux** → koppel hem via je bestandsbeheerder of `davfs2`.

Sleep je daarna `.igc`-bestanden naar die schijf, dan worden ze naar We-Fly geüpload. Handig om een achterstand van een oude SD-kaart weg te werken.

---

## Goed om te weten

- **Alleen `.igc`-bestanden worden aanvaard.** Al de rest die het toestel probeert te sturen, wordt beleefd genegeerd: geen fouten, geen rommel. Het geeft dus niet als er in je tracklogmap ook vreemde configuratie- of logbestanden rondslingeren.
- **Dubbels worden automatisch overgeslagen**, herkend aan de echte inhoud van het bestand. Dezelfde map duizend keer opnieuw synchroniseren levert nooit één dubbele vlucht op. Daarom kun je het gerust altijd laten draaien.
- **Het is in wezen alleen uploaden.** Het toestel stuurt vluchten naar boven; het komt nooit terug om iets te wijzigen of te verwijderen. Wil je een vlucht verwijderen? Doe dat in de app van We-Fly, nooit vanaf het toestel.

---

## Problemen oplossen / FAQ

**Er verscheen niets in mijn logboek?**
Loop de gebruikelijke verdachten af: zit je echt op wifi (of waar je synchronisatie ook op moet starten)? Is de synchronisatietaak echt gelopen (kijk in het logboek van de app)? En is het bestand een echte `.igc`-tracklog, geen half geschreven of hernoemd bestand? Negen keer op tien is het een van die drie.

**Kan ik al mijn oude vluchten synchroniseren?**
Zeker. Laat een sync-paar één keer naar je volledige archiefmap wijzen, laat het doorwerken, en elke oude track landt in We-Fly. Omdat dubbels op inhoud worden overgeslagen, is er geen enkel risico op dubbele vluchten, ook niet als een deel van die vluchten al in je logboek staat.

**Is mijn wachtwoord veilig?**
Het is een **wachtwoord per toestel**, niet je accountlogin. Het werkt alleen om `.igc`-bestanden te uploaden, en je kunt het **op elk moment intrekken** vanuit dezelfde kaart in Gekoppelde diensten. Intrekken sluit dat ene toestel meteen af en laat alle andere toestellen ongemoeid. Verkoop je je Air³? Eerst intrekken.

**Verwijdert dit een van mijn vluchten?**
Nee. Synchronisatie gaat in één richting en is alleen uploaden. Verwijderen gebeurt **alleen** in de app van We-Fly, bewust, door jou. Niets wat je instrument doet, kan een vlucht verwijderen.

---

## Wil je dat XCTrack het gewoon voor je doet? Stem ervoor

De combinatie van WebDAV en een sync-app hierboven werkt vandaag prachtig, maar laten we eerlijk zijn: de droom is nog eenvoudiger. XCTrack dat meteen na de landing rechtstreeks naar We-Fly uploadt, precies zoals het dat nu al met zijn ingebouwde automatische upload naar XContest doet. Geen tussenapp, geen mappenparen om in te stellen. Je landt, en het is gebeurd. Nul apps.

Goed nieuws: er is een **officieel verzoek aan de ontwikkelaars van XCTrack om precies dat.** En het punt is: stemmen van piloten maken echt verschil. Hoe meer van ons het een duimpje geven, hoe groter de kans dat het hoger op de prioriteitenlijst komt en er echt komt. Laten we dus wat lawaai maken; elke stem telt.

Het duurt ongeveer een minuut:

1. Open het verzoek: [gitlab.com/xcontest-public/xctrack-public/-/work_items/1293](https://gitlab.com/xcontest-public/xctrack-public/-/work_items/1293)
2. **Log in op GitLab**: een gratis account, snel aangemaakt als je er nog geen hebt (je moet ingelogd zijn om te stemmen).
3. Klik op het issue op de **👍-reactie (duim omhoog)** om je stem toe te voegen. Dat is alles. Je hebt gestemd.

Als het er komt, wordt deze hele handleiding een stuk korter. Laten we het helpen gebeuren.

---

## Wielen omhoog

Stel dit één keer in en je logboek vult zich zo goed als vanzelf. Vliegen, landen, verbinden, en de cijfers wachten al op je voor je je lijnen hebt opgerold. Zo hoort het.

Blue skies en volle logboeken. 🪂
