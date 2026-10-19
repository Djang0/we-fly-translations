---
title: Privacybeleid van We-Track
description: Wat de vlieginstrument-app We-Track met je gegevens doet, en wat je telefoon nooit verlaat
category: Account & Data
order: 5
---

**Laatst bijgewerkt:** 16 oktober 2026

## 1. Wie we zijn

We-Track is een gratis vlieginstrument-app voor paraglidingpiloten, voor Android en iOS: bewegende kaart, vario, thermiekassistent, taaknavigatie, luchtruimwaarschuwingen en registratie van je vluchten in IGC.

**Verwerkingsverantwoordelijke:** Upsky, België.
**Contact:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud) (zet "We-Track privacy" in de onderwerpregel).

We-Track werkt op zichzelf, zonder account. De app kan ook verbinden met **We-Fly** (we-fly.cloud), een aparte dienst voor je logboek en vluchtanalyse. Wat We-Fly met je gegevens doet zodra het ze ontvangt, staat in het [Privacybeleid van We-Fly](https://we-fly.cloud/doc/privacy-policy).

## 2. In het kort

- Je vluchten, je positie en je instellingen blijven **op je telefoon**.
- Ze verlaten je telefoon alleen voor iets waar je zelf om vroeg: synchroniseren met We-Fly als je ingelogd bent, kaarttegels laden, een taakcode laden, een bestand delen.
- Geen analytics, geen reclame, geen tracking over apps heen, geen profilering. We verkopen of verhuren geen gegevens.
- We-Track heeft geen eigen account en geen eigen server die gegevens over jou verzamelt.
- Je hartslag wordt **alleen als je dat inschakelt** in je vluchtbestanden opgeslagen.

## 3. Gegevens die op je telefoon staan

Dit alles staat in de privéopslag van de app. Andere apps kunnen het niet lezen, en het is **uitgesloten van telefoonback-ups** (iCloud, Google, overzetten naar een nieuw toestel). Het nadeel: vluchten die niet naar We-Fly geüpload zijn, ben je kwijt als je je telefoon verliest of de app verwijdert.

| Gegevens | Wat het is | Waarom |
|---|---|---|
| Positie | GPS-positie, snelheid en hoogte terwijl je de app gebruikt | Kaart, navigatie, vario, wind, vluchtdetectie en registratie |
| Vluchten (IGC-bestanden) | Je GPS-track met tijden en hoogtes, start en landing, pilotennaam en scherm (uit je instellingen of je We-Fly-profiel), app-versie, naam van het besturingssysteem (bv. "android" of "ios 18") en een willekeurige recorder-ID | Je logboek, de bestanden die je deelt of uploadt |
| Instrumentgegevens | Gegevens van Bluetooth-instrumenten die je koppelt, bv. een Vector Vario (druk, luchtsnelheid, temperatuur, luchtvochtigheid, standhoek, wind) | Getoond tijdens de vlucht en in je IGC-bestanden geschreven |
| Hartslag | Slagen per minuut van een Bluetooth-hartslagband die je koppelt | Getoond tijdens de vlucht. **Alleen met je toestemming** in IGC-bestanden geschreven (sectie 6) |
| Instellingen | Eenheden, schermindelingen, scherm en polaire, pilotennaam, voorkeuren voor geluid en weergave | De app laten werken zoals jij hem instelde |
| Taken, waypoints, doelen | Taken die je laadt of maakt, waypointcollecties | Navigatie |
| Luchtruim en kaarten | Luchtruimbestanden die je importeert of downloadt, offline kaart- en terreingebieden die je downloadt | Waarschuwingen en kaarten zonder netwerk |
| Bekende toestellen | Naam en ID van Bluetooth-instrumenten die je gekoppeld hebt | Er opnieuw mee verbinden |
| Wachtwoorden en inlogtokens | We-Fly-inlogtokens, wachtwoorden van wedstrijdaccounts die je laat onthouden | Ingelogd blijven |

Wachtwoorden en tokens staan in de beveiligde opslag van je telefoon (iOS-sleutelhanger, Android Keystore). Ze worden nooit in instellingenbestanden, logs of back-ups geschreven. Op iOS worden ze gewist de eerste keer dat de app na een herinstallatie opstart.

De app houdt in de releaseversies geen logs bij.

## 4. Toestemmingen die we vragen

We vragen elke toestemming pas wanneer je voor het eerst de functie gebruikt die ze nodig heeft.

- **Locatie, tijdens gebruik van de app.** Om je positie te tonen, te navigeren en je vlucht te registreren. Tijdens een vlucht gaat de registratie door met het scherm uit; zolang dat zo is, toont Android een vaste melding en iOS de blauwe locatie-indicator. We vragen nooit om locatietoegang "Altijd".
- **Bluetooth.** Om instrumenten te koppelen (vario's, hartslagbanden). Op Android is het scannen via Bluetooth aangegeven als nooit gebruikt om je locatie te bepalen.
- **Camera.** Alleen om QR-codes van taken te scannen. De beelden worden op de telefoon verwerkt en nooit opgeslagen of verstuurd.
- **Meldingen** (Android). Voor de melding die verschijnt terwijl een vlucht geregistreerd wordt.
- **Beweging en fitness** (iOS). Om de barometer van de telefoon te lezen voor hoogte en verticale snelheid.

## 5. Wat je telefoon verlaat, en naar wie

### 5.1 We-Fly (alleen als je inlogt)

Inloggen bij We-Fly is optioneel. We-Track logt in via de eigen pagina van We-Fly; We-Track ziet je We-Fly-wachtwoord nooit en krijgt je e-mailadres niet. Zodra je ingelogd bent:

- **Vluchten die je registreert, worden na de landing automatisch geüpload** naar je We-Fly-logboek, met alles wat het IGC-bestand bevat (sectie 3). Je kunt ook geïmporteerde vluchten uploaden.
- Je We-Fly-vluchten, taken, waypointcollecties en schermindelingen worden in beide richtingen gesynchroniseerd.
- We-Track leest je profielnaam (voor de pilotennaam in het IGC-bestand) en je vriendenlijst (voor het scherm Vrienden).
- Als je luchtruimgegevens downloadt, krijgt We-Fly het gebied dat je koos (een land, of een gebied van 300 km rond je positie) om het bijbehorende luchtruim te sturen.
- We-Track stuurt je live positie **niet** naar We-Fly.

Je kunt op elk moment uitloggen in Instellingen. Uitloggen trekt de aanmelding aan de kant van We-Fly in. Je kunt er ook voor kiezen de We-Fly-gegevens te wissen die op je telefoon gespiegeld zijn; vluchten die op de telefoon geregistreerd zijn, worden nooit gewist door uit te loggen. Om gegevens op We-Fly te verwijderen, gebruik je je We-Fly-profiel (zie het [Privacybeleid van We-Fly](https://we-fly.cloud/doc/privacy-policy)).

### 5.2 Kaart- en terreinservers

Om kaarten te tekenen, downloadt de app kaartafbeeldingen ("tegels") bij de aanbieder van de basiskaart die je kiest. Net als bij elke website zien die servers je IP-adres, de naam van de app en het kaartgebied dat je bekijkt, waardoor ze ongeveer weten waar je bent. Ze krijgen van ons geen account of ID.

| Aanbieder | Gebruikt voor |
|---|---|
| [OpenStreetMap Foundation](https://osmfoundation.org/wiki/Privacy_Policy) (tile.openstreetmap.org) | Basiskaart "We-Fly theme" |
| [OpenTopoMap](https://opentopomap.org/about) | Topografische basiskaart |
| [Esri](https://www.esri.com/en-us/privacy/overview) (ArcGIS Online) | Satellietbasiskaart |
| [OpenFreeMap](https://openfreemap.org) | Terreinbasiskaart en offline kaarten |
| [Mapterhorn](https://mapterhorn.com) | Reliëf en terreinhoogte, online en offline |

Offline gebieden die je downloadt, komen van OpenFreeMap en Mapterhorn; eenmaal gedownload werken die kaarten zonder met iemand contact te maken.

### 5.3 XContest-taakcodes

Als je een XContest-taakcode intypt, wordt de code naar tools.xcontest.org gestuurd om de taak op te halen. Er worden geen andere gegevens verstuurd.

### 5.4 QR-codes scannen op Android (Google ML Kit)

Op Android worden QR-codes van taken gelezen met Google ML Kit. De beelden worden op de telefoon verwerkt. Google ML Kit kan, los van We-Track, technische gegevens over de werking van de scanner naar Google sturen (bijvoorbeeld prestatie- en gebruiksstatistieken). Zie [de voorwaarden en het privacybeleid van Google ML Kit](https://developers.google.com/ml-kit/terms).

### 5.5 Bestanden die je deelt

Als je een IGC-bestand of een taak exporteert of deelt, geeft de app het door aan het deelmenu van het systeem; jij kiest waar het naartoe gaat.

## 6. Hartslag

Hartslag is een gezondheidsgegeven, dat de Europese wetgeving strenger beschermt.

- De hartslagweergave werkt zodra een band gekoppeld is en wordt nooit opgeslagen.
- Je hartslag wordt alleen in je IGC-vluchtbestanden geschreven als je **Record heart rate in flight files** inschakelt en je toestemming bevestigt. Standaard staat dit uit.
- Staat het aan, dan wordt je hartslag opgeslagen in je vluchtbestanden op de telefoon en, als je ingelogd bent bij We-Fly, samen met je vluchten geüpload.
- Je kunt het op elk moment uitschakelen. Vluchten die je daarna registreert, bevatten geen hartslag meer; vluchten die al geregistreerd zijn, houden hem tot je ze uit je logboek (en uit We-Fly) verwijdert.

## 7. Rechtsgronden (AVG)

- **De functies leveren die je gebruikt** (art. 6, lid 1, onder b)): vluchten registreren, kaarten, synchroniseren met We-Fly als je inlogt, taken laden.
- **Je toestemming** (art. 6, lid 1, onder a) en, voor de hartslag, art. 9, lid 2, onder a)): hartslag in vluchtbestanden. Je kunt ze op elk moment intrekken; dat doet niets af aan wat eerder gebeurde.
- **Gerechtvaardigd belang** (art. 6, lid 1, onder f)): de technische gegevens die kaartservers nodig hebben om kaarttegels te sturen.

## 8. Hoe lang gegevens bewaard worden

- **Op je telefoon:** tot je ze in de app verwijdert of de app verwijdert. Er wordt niets in back-ups bewaard.
- **Op We-Fly:** zoals beschreven in het [Privacybeleid van We-Fly](https://we-fly.cloud/doc/privacy-policy).
- **Kaartservers, XContest, Google:** volgens hun eigen beleid (sectie 5).

## 9. Beveiliging

- Alleen privéopslag van de app; geen gedeelde opslag.
- Versleutelde verbindingen (HTTPS) voor elk netwerkverzoek.
- Wachtwoorden en tokens in de beveiligde opslag van de telefoon, nooit in gewone bestanden of logs.
- Inloggen bij We-Fly gebeurt via OAuth met PKCE: de app komt nooit aan je We-Fly-wachtwoord.

## 10. Doorgifte buiten de Europese Unie

Sommige aanbieders uit sectie 5 kunnen gegevens buiten de Europese Unie verwerken (bijvoorbeeld Esri en Google in de Verenigde Staten). Zij zijn verantwoordelijk voor de waarborgen die ze toepassen; zie hun beleid.

## 11. Je rechten

Je hebt het recht om je persoonsgegevens in te zien, te verbeteren, te laten wissen en er een kopie van te krijgen, om bezwaar te maken tegen de verwerking of die te laten beperken, en om je toestemming op elk moment in te trekken.

De meeste van je gegevens komen nooit bij ons terecht: je kunt ze rechtstreeks in de app bekijken, exporteren en verwijderen. Voor gegevens op We-Fly gebruik je je We-Fly-profiel of neem je contact op met We-Fly. Voor al het andere schrijf je naar [contact@we-fly.cloud](mailto:contact@we-fly.cloud). We antwoorden binnen een maand.

Je kunt ook een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit ([www.dataprotectionauthority.be](https://www.dataprotectionauthority.be)) of bij de toezichthouder van het land waar je woont.

## 12. Kinderen

We-Track is niet bedoeld voor kinderen jonger dan 13 jaar. Om met We-Fly te synchroniseren moet je voldoen aan de minimumleeftijd van We-Fly zelf (zie het [Privacybeleid van We-Fly](https://we-fly.cloud/doc/privacy-policy)). Denk je dat een kind jonger dan 13 ons persoonsgegevens heeft gestuurd, neem dan contact met ons op en we verwijderen ze.

## 13. Wijzigingen

Als dit beleid verandert, passen we de datum bovenaan aan en, bij belangrijke wijzigingen, laten we het je in de app weten voordat ze ingaan.

## 14. Contact

**Verwerkingsverantwoordelijke:** Upsky, België
**E-mail:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud), onderwerp "We-Track privacy"
