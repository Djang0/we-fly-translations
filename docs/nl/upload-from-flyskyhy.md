---
title: Uploaden vanuit Flyskyhy
description: Stuur vluchten rechtstreeks vanuit Flyskyhy op je iPhone of iPad naar We-Fly. Stel één keer "Other Leonardo server" in, en daarna is het landen, tikken, gelogd
category: Your Flights
order: 4
---

## Landen, tikken, gelogd

Je bent net geland na een knaller. Je zit nog vol adrenaline, je plooit je scherm op, en de vlucht gaat al naar je We-Fly-logboek, rechtstreeks vanaf de telefoon in je zak. Geen kabel, geen laptop, geen „ik upload hem vanavond wel“ dat stilletjes volgende week wordt.

Vlieg je met **Flyskyhy** op je iPhone of iPad? Dan kan die elke vlucht aan We-Fly doorgeven zodra je landt. We hebben We-Fly **Leonardo** leren spreken, een taal om vluchten te uploaden die Flyskyhy al kent, dus je hoeft alleen nog één keer vijf minuten iets in te stellen. Aan de slag.

> **Let op:** dit uploadt de **opgenomen track** van een vlucht die je gevlogen hebt (de `.igc`). Het is geen live volgen. Het is de upload van het type „klaar, hier is de vlucht“.

---

## Eerst: haal je apparaatwachtwoord op (één keer, in We-Fly)

Alles draait om één **apparaatwachtwoord** dat je in We-Fly aanmaakt. Zie het als een reservesleutel die speciaal voor één app is bijgemaakt. Raak je je telefoon kwijt of verkoop je hem, dan trek je die ene sleutel in zonder aan iets anders te komen.

1. Ga naar **Profiel → Gekoppelde diensten** en zoek de kaart **„Instrument- en cloudsync (WebDAV)“**.
2. Typ een apparaatnaam die je later herkent, zoals `iPhone - Flyskyhy`. Dat is *alleen een label voor jezelf*; het wordt nergens heen gestuurd en Flyskyhy heeft het nooit nodig.
3. Tik op **Aanmaken**. Er verschijnt een **apparaatwachtwoord** (het begint met `wf_key_`).
4. **Kopieer het meteen.** Klik je weg, dan blijft het opnieuw te kopiëren vanuit de rij van het apparaat, zolang dit browsertabblad open blijft. Sluit je het tabblad zonder te kopiëren, dan maak je gewoon een nieuw aan, geen probleem. Maak je het aan op een laptop? Tik op **Scannen met telefoon** om het met de camera van je telefoon over te nemen in plaats van al die tekens over te typen.

> **Synchroniseer je al een vario via WebDAV?** Dan heb je er al zo een. *Hetzelfde* apparaatwachtwoord werkt voor Flyskyhy. Je hoeft geen nieuw te maken.

> **Je moet een volwaardig We-Fly-lid zijn**, ingeschreven en met gegeven toestemming. Zit je nog in de fase van inschrijving of toestemming, rond die dan eerst af en de kaart wordt actief.

---

## De drie instellingen die Flyskyhy nodig heeft

Wat je verder ook doet, Flyskyhy vraagt altijd naar dezelfde drie dingen:

| Instelling | Waarde |
|---|---|
| **Submit URL** | `https://we-fly.cloud/api/leonardo/flight_submit.php` |
| **Username** | het e-mailadres van je We-Fly-account |
| **Password** | het apparaatwachtwoord dat je net hebt aangemaakt |

Kopieer die drie, houd ze bij de hand en je bent klaar.

---

## Stap voor stap in Flyskyhy

1. **Maak je apparaatwachtwoord aan** in We-Fly (zie hierboven) en houd die drie instellingen binnen handbereik.

2. Ga in Flyskyhy naar het uploaden van een vlucht en kies **„Other Leonardo server.“** Met die optie stuur je de app naar een eigen server: die van ons.

3. Vul de gegevens in:
   - **Server name** → `We-Fly` (gewoon een label om hem in de lijst te herkennen)
   - **Submit URL** → `https://we-fly.cloud/api/leonardo/flight_submit.php`
   - **Username** → je We-Fly-e-mailadres
   - **Password** → je apparaatwachtwoord

4. **Uploaden.** Flyskyhy stuurt de track door en We-Fly doet de rest: de vlucht komt in je logboek, al gescoord, op de kaart en met ontcijferde thermiek. Daarvoor hoef je geen vinger uit te steken.

5. Vanaf nu staat **„Upload to We-Fly“** gewoon tussen je uploadopties. Landen, tikken, klaar.

> **Pro-tip:** de allereerste upload is het „hallo“. Daarna is elke nieuwe vlucht één tik verwijderd. Maak er een gewoonte van om hem door te sturen terwijl je nog aan het inpakken bent, en je logboek loopt nooit meer achter.

---

## Goed om te weten

- **Alleen `.igc`-tracklogs worden aanvaard.** Dat is precies wat Flyskyhy stuurt, dus je hoeft er niet bij na te denken.
- **Dubbele vluchten worden automatisch overgeslagen**, herkend aan de echte inhoud van de vlucht. Twee keer op uploaden getikt? Vorige week al met de hand geüpload? We-Fly haalt zijn schouders op en zegt „die heb ik al“. Je mag zo vaak uploaden als je wilt. Er wordt nooit iets dubbel.
- **Het is je logboek, zoals altijd.** Een vlucht die via Flyskyhy binnenkomt, is identiek aan een vlucht die je op de website uploadt: alle kaarten, statistieken en XC-scores worden automatisch toegepast.

---

## Problemen oplossen / FAQ

**Flyskyhy zegt dat de gebruikersnaam of het wachtwoord fout is.**
Negen keer op de tien is het het apparaatwachtwoord: het is lang, en een verkeerde copy-paste kan je parten spelen. Ga terug naar **Profiel → Gekoppelde diensten → Instrument- en cloudsync (WebDAV)**, tik op **Aanmaken** voor een nieuw wachtwoord en plak het opnieuw in Flyskyhy. Je gebruikersnaam is je We-Fly-**e-mailadres**, geen bijnaam.

**Controleer de Submit URL nog eens.**
Die moet precies `https://we-fly.cloud/api/leonardo/flight_submit.php` zijn, met `https://` vooraan en eindigend op `/flight_submit.php`. Een ontbrekende `s` of een tikfout op het einde is de andere gebruikelijke boosdoener.

**Er verschijnt niets in mijn logboek?**
Controleer of de upload echt klaar is (je hebt bereik), en vernieuw dan je [vluchtenpagina](/flights). Meldde Flyskyhy dat het gelukt is, dan is de vlucht binnen. Geef de pagina even de tijd en ze verschijnt.

**Is mijn wachtwoord veilig?**
Het is een **wachtwoord per apparaat**, niet de login van je account. Het opent alleen je vluchtenmap (vluchten toevoegen, de vluchten die er al staan lezen) en kan nooit een vlucht verwijderen of aan je account komen. Je kunt het **op elk moment intrekken** via dezelfde kaart bij Gekoppelde diensten. Dat sluit Flyskyhy meteen af en laat al je andere apparaten ongemoeid. Verkoop je je telefoon? Trek het eerst in.

**Verwijdert dit vluchten?**
Nooit. Dit *voegt* alleen vluchten toe. Verwijderen doe jij, in de We-Fly-app, bewust. Niets wat Flyskyhy doet kan een vlucht weghalen.

---

## Vlieg je niet met Flyskyhy?

Flyskyhy bestaat alleen voor iPhone en iPad. Met een **Android-vario of de Air³** gebruik je in de plaats **[Synchroniseer je instrument automatisch](/doc/sync-instruments-webdav)**: hetzelfde apparaatwachtwoord, hetzelfde idee, via WebDAV.

---

## Wielen omhoog

Stel dit één keer in en je logboek vult zichzelf zo goed als vanzelf. Vliegen, landen, tikken, en de cijfers wachten op je nog voor je je lijnen hebt opgerold. Zo hoort het.

Blauwe luchten en volle logboeken. 🪂
