---
title: Privacybeleid
description: Hoe We-Fly je persoonsgegevens verzamelt, gebruikt en beschermt onder de AVG
category: Account & Data
order: 3
---

**Laatst bijgewerkt:** 11 oktober 2026

## 1. Inleiding

Welkom bij We-Fly. We zetten ons in om je persoonsgegevens te beschermen en je privacyrechten te respecteren, overeenkomstig de Algemene Verordening Gegevensbescherming (AVG), Verordening (EU) 2016/679, en de toepasselijke wetgeving inzake gegevensbescherming.

Dit privacybeleid legt uit hoe we je persoonsgegevens verzamelen, gebruiken, opslaan en beschermen wanneer je ons platform voor het registreren en analyseren van paraglidingvluchten gebruikt.

### 1.1 Verwerkingsverantwoordelijke

We-Fly is de verwerkingsverantwoordelijke voor je persoonsgegevens. Voor vragen over dit privacybeleid of over je rechten met betrekking tot je gegevens kun je contact met ons opnemen via de gegevens in sectie 15.

### 1.2 Toepassingsgebied

Dit beleid geldt voor alle gebruikers van het We-Fly-platform, waaronder:
- Geregistreerde gebruikers met een account
- Bezoekers van onze publieke pagina's
- Gebruikers van onze gedeelde vluchtlinks

## 2. Welke gegevens we verzamelen

### 2.1 Accountgegevens (via Google OAuth)

Wanneer je een account aanmaakt met „Inloggen met Google“, verzamelen we:

- **E-mailadres** - voor de identificatie van je account en voor communicatie
- **Volledige naam** - voor de weergave van je profiel en de toewijzing van vluchten
- **URL van je profielfoto** - uit je Google-account, voor de weergave van je profiel
- **Verificatiestatus van je e-mailadres** - verstrekt door Google
- **Google-gebruikers-ID** - unieke identificator uit Google OAuth

We verzamelen of bewaren **geen** wachtwoorden. Alle authenticatie wordt veilig door Google afgehandeld.

### 2.2 Vluchtgegevens (uit geüploade IGC-bestanden)

Wanneer je registraties van paraglidingvluchten uploadt, verzamelen en verwerken we:

**Metagegevens van het bestand:**
- Naam van de piloot (uit het IGC-bestand of je accountnaam)
- Model en type van je scherm
- Gegevens van het GPS-toestel (fabrikant, serienummer, firmware)
- Datum en tijdstip van de vlucht
- Oorspronkelijke bestandsnaam

**GPS-trackgegevens:**
- Volledige GPS-track (breedtegraad, lengtegraad, hoogte, tijdstempels)
- Locatie en tijdstip van de start
- Locatie en tijdstip van de landing
- Vluchtduur
- Maximale en minimale hoogte
- Totale afgelegde afstand

**Berekende vluchtanalyses:**
- Analyse van de thermiekactiviteit (stijgsnelheden, duur, hoogtewinst)
- Schattingen van windsnelheid en windrichting
- Prestatiemetingen van de vlucht
- XContest-scoregegevens (afstand, punten, indeling naar type vlucht)
- FAI-validatiegegevens (als je om validatie vraagt)
- Keerpunten en routesegmenten

**Technische identificatoren:**
- MD5-hash van de GPS-track (om dubbele vluchten op te sporen)
- Identificatoren van databaserecords
- Opslagpaden van bestanden (als lokale opslag is ingeschakeld)

### 2.3 Gegevens over startplaatsen

We houden een database bij van startplaatsen voor paragliding, met:
- Naam en geografische coördinaten van de plaats
- Hoogte boven zeeniveau
- Overheersende windrichting
- Land, stad en postcode (verkregen via de dienst voor omgekeerde geocodering Nominatim van OpenStreetMap)

Deze gegevens worden samengesteld uit door gebruikers geüploade vluchten en publieke geografische databases. Locatiemetagegevens worden aangevuld met gegevens van OpenStreetMap (© OpenStreetMap-bijdragers).

### 2.4 Profiel- en voorkeursgegevens

- Gebruikersrol (gebruiker of beheerder)
- Voorkeur voor de zichtbaarheid van je profiel (openbaar of privé)
- Weergavevoorkeuren (tabelkolommen, sortering, filters)
- Voorkeur voor het thema
- E-mailvoorkeuren (of je tips om aan de slag te gaan ontvangt)
- Tijdstippen van aanmaak en wijziging van het account

### 2.5 Statistische gegevens

We berekenen geaggregeerde statistieken uit je vluchten:
- Totaal aantal vluchten en uren
- Totale gevlogen afstand
- Aantal unieke startplaatsen en bezochte landen
- Gemiddelde vluchtduur
- Verdeling naar type vlucht

### 2.6 Gedeelde vluchtlinks

Wanneer je een deelbare link voor een bepaalde vlucht aanmaakt, creëren we:
- Een cryptografisch veilige identificator van 43 tekens
- Daarmee is één vlucht publiek toegankelijk zonder dat je volledige profiel zichtbaar wordt

## 3. Rechtsgrond voor de verwerking

Op grond van artikel 6 AVG verwerken we je persoonsgegevens op basis van:

### 3.1 Toestemming (artikel 6, lid 1, onder a))
- Authenticatie via Google OAuth (je geeft uitdrukkelijk toestemming door op „Inloggen met Google“ te klikken)
- Instellingen voor de zichtbaarheid van je profiel (je kiest er zelf voor om je profiel openbaar te maken)
- Integraties met API's van derden (FAI-validatie, geocodering)

### 3.2 Uitvoering van een overeenkomst (artikel 6, lid 1, onder b))
- Verwerking van de vluchten die je uploadt
- Levering van vluchtanalyses en statistieken
- Beheer van je account en gebruikersvoorkeuren
- Levering van de kernfuncties van onze dienst

### 3.3 Gerechtvaardigd belang (artikel 6, lid 1, onder f))
- Voorkomen van dubbele uploads van vluchten
- Opsporen en voorkomen van fraude of misbruik
- Verbeteren van onze dienst en de gebruikerservaring
- Handhaven van de beveiliging en de integriteit van het systeem
- Af en toe tips sturen die je helpen aan de slag te gaan met de dienst waarvoor je je hebt ingeschreven (je kunt je op elk moment afmelden, zie 4.4)

Je kunt je toestemming op elk moment intrekken door je account te verwijderen of je privacyinstellingen te wijzigen.

## 4. Hoe we je gegevens gebruiken

We gebruiken je persoonsgegevens om:

### 4.1 Kerndiensten te leveren
- Je te authenticeren en te identificeren wanneer je inlogt
- Je vluchtregistraties te verwerken, te analyseren en op te slaan
- Vluchtstatistieken en prestatiemetingen te genereren
- Je persoonlijke vluchtlogboek en dashboard weer te geven
- Vluchten automatisch aan startplaatsen te koppelen

### 4.2 Communityfuncties mogelijk te maken
- Publieke vluchten weer te geven (alleen als je je profiel openbaar maakt)
- Pilotenprofielen te tonen in de ranglijsten van de community (met je toestemming)
- Populaire startplaatsen in kaart te brengen
- Andere piloten vluchtroutes te laten ontdekken

### 4.3 Ons platform te verbeteren
- Anonieme statistieken over het gebruik van het platform te verzamelen
- Technische problemen op te sporen en op te lossen
- Algoritmen voor vluchtanalyse te verbeteren
- De gebruikersinterface en de gebruikerservaring te optimaliseren

### 4.4 Met je te communiceren
- Meldingen over de dienst te sturen
- Af en toe tips te sturen om aan de slag te gaan, bijvoorbeeld één herinnering als je logboek een week na je inschrijving nog leeg is. Je kunt ze op elk moment uitzetten via **Profiel → E-mails**, of met de afmeldlink onderaan elke tipmail
- Op ondersteuningsverzoeken te antwoorden
- Je op de hoogte te brengen van belangrijke wijzigingen in onze dienst of in dit beleid

### 4.5 De beveiliging te waarborgen
- Onbevoegde toegang tot accounts te voorkomen
- Frauduleuze activiteiten op te sporen en te voorkomen
- De integriteit van gegevens te valideren
- Auditlogboeken van beveiligingsgebeurtenissen bij te houden

We gebruiken je gegevens **niet** voor:
- Reclame of marketing voor derden
- Het verkopen of verhuren van je persoonsgegevens
- Geautomatiseerde besluitvorming met rechtsgevolgen
- Profilering voor commerciële doeleinden

## 5. Diensten van derden en doorgifte van gegevens

We delen beperkte gegevens met de volgende diensten van derden:

### 5.1 Google OAuth
**Doel:** authenticatie van gebruikers en verificatie van hun identiteit
**Gedeelde gegevens:** e-mailadres, naam, profielfoto (via het OAuth-protocol)
**Locatie:** Verenigde Staten (infrastructuur van Google)
**Privacybeleid:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Rechtsgrond:** toestemming (OAuth-autorisatie)

### 5.2 Nominatim (OpenStreetMap)
**Doel:** omgekeerde geocodering om plaatsnamen af te leiden uit coördinaten
**Gedeelde gegevens:** alleen breedte- en lengtegraad (geen persoonlijke identificatoren)
**Frequentie:** op initiatief van een beheerder, niet automatisch
**Privacybeleid:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Rechtsgrond:** gerechtvaardigd belang (aanvullen van gegevens over plaatsen)
**Naamsvermelding:** locatiegegevens © OpenStreetMap-bijdragers ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Doel:** opvragen van hoogtegegevens voor startplaatsen
**Gedeelde gegevens:** alleen breedte- en lengtegraad
**Frequentie:** op initiatief van een beheerder
**Privacybeleid:** publieke dienst, geen registratie vereist
**Rechtsgrond:** gerechtvaardigd belang (nauwkeurige gegevens over plaatsen)

### 5.4 Vluchtvalidatiedienst van de FAI CIVL
**Doel:** vluchtregistraties valideren volgens de normen van de FAI
**Gedeelde gegevens:** de volledige inhoud van het IGC-bestand (alleen wanneer je uitdrukkelijk om validatie vraagt)
**Endpoint:** vali.fai-civl.org/api/vali/json
**Privacybeleid:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Rechtsgrond:** toestemming (op initiatief van de gebruiker)

### 5.5 Aanbieders van kaarttegels
**Doel:** interactieve kaarten weergeven om vluchten te visualiseren
**Gebruikte diensten:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Gedeelde gegevens:** alleen verzoeken om tegels (geen persoonsgegevens)
**Rechtsgrond:** gerechtvaardigd belang (essentiële werking van de dienst)

### 5.6 Internationale doorgifte van gegevens

Sommige van onze externe dienstverleners bevinden zich buiten de Europese Economische Ruimte (EER), met name in de Verenigde Staten. Wanneer we gegevens internationaal doorgeven:

- Baseren we ons op **adequaatheidsbesluiten** van de Europese Commissie (waar beschikbaar)
- Passen we door de Europese Commissie goedgekeurde **standaardcontractbepalingen (SCC's)** toe
- Zorgen we ervoor dat aanbieders voldoen aan **normen voor gegevensbescherming die gelijkwaardig zijn aan de AVG**

## 6. Cookies en trackingtechnologieën

### 6.1 Essentiële cookies (geen toestemming vereist)

**Authenticatiecookies:**
- **Doel:** je ingelogde sessie behouden
- **Type:** HTTP-only, beveiligde, versleutelde JWT-tokens
- **Duur:** 30 dagen na je laatste bezoek, en nooit langer dan 90 dagen nadat je bent ingelogd. Uitloggen verwijdert de cookie, en je wachtwoord opnieuw instellen of je account verwijderen beëindigt hem op elk toestel.
- **Aanbieder:** NextAuth.js
- **Kan worden uitgeschakeld:** nee (essentieel voor de werking van de dienst)

**Cookies voor de beveiliging van de koppeling (autorouter):**
- **Namen:** `ar_oauth_state`, `ar_oauth_return`
- **Doel:** het inloggen bij autorouter beveiligen wanneer je het koppelt voor NOTAM's, en je terugbrengen naar de pagina waar je vandaan kwam
- **Type:** HTTP-only, beveiligd
- **Duur:** 10 minuten, verwijderd zodra de koppeling voltooid is
- **Kan worden uitgeschakeld:** nee (alleen geplaatst wanneer je ervoor kiest autorouter te koppelen)

### 6.2 Functionele cookies (gerechtvaardigd belang)

**Cookie voor de status van de zijbalk:**
- **Naam:** `sidebar_state`
- **Doel:** onthouden of je de zijbalk van de interface open- of dichtgeklapt wilt
- **Duur:** 7 dagen
- **Opgeslagen gegevens:** "true" of "false"

**Taalcookie:**
- **Naam:** `NEXT_LOCALE`
- **Doel:** onthouden welke interfacetaal je gekozen hebt (Engels, Frans, Duits, Nederlands, Italiaans of Spaans)
- **Duur:** 1 jaar
- **Opgeslagen gegevens:** een taalcode zoals "fr"

**Cookie voor de weergegeven taal:**
- **Naam:** `wf-rl`
- **Doel:** de taal van de laatst getoonde pagina noteren, zodat de app één keer kan vernieuwen als je tijdens het surfen van taal wisselt
- **Duur:** tot je je browser sluit
- **Opgeslagen gegevens:** een taalcode zoals "fr"

**Cookie voor een terugkerend toestel:**
- **Naam:** `wf-known-device`
- **Doel:** onthouden dat er al eens iemand in deze browser is ingelogd, zodat de startpagina „Inloggen“ aanbiedt in plaats van „Account aanmaken“
- **Duur:** ongeveer 13 maanden
- **Opgeslagen gegevens:** alleen "1", nooit je e-mailadres of account-ID

**Cookie met passkeyhint:**
- **Naam:** `wf-passkey-hint`
- **Doel:** onthouden dat deze browser een passkey voor We-Fly heeft, zodat de inlogpagina die als eerste kan aanbieden
- **Duur:** ongeveer 13 maanden
- **Opgeslagen gegevens:** alleen "1"

### 6.3 Lokale opslag

We gebruiken de lokale opslag van je browser voor:

**Weergave-instellingen van vluchten:**
- **Sleutel:** `we-fly-flights-display-settings`
- **Doel:** voorkeuren voor zichtbare kolommen en sortering tijdelijk bewaren, zodat pagina's sneller laden
- **Gegevens:** JSON-object met voorkeuren voor de interface
- **Gesynchroniseerd:** met de server, voor toegang vanaf verschillende toestellen

**Filtervoorkeuren:**
- **Doel:** instellingen voor het zoeken en filteren van vluchten bewaren
- **Gegevens:** zoekcriteria, periodes, locatiefilters
- **Bereik:** alleen aan de kant van de client

Je kunt de lokale opslag op elk moment wissen via de instellingen van je browser. Daarmee worden de voorkeuren voor de interface teruggezet naar de standaardwaarden.

### 6.4 Analyse en tracking

We gebruiken momenteel **geen**:
- Google Analytics of vergelijkbare analyseplatforms
- Advertentietrackers van derden
- Pixels van sociale media
- Mechanismen voor tracking over verschillende websites heen

## 7. Opslag en beveiliging van gegevens

### 7.1 Waar we je gegevens opslaan

**Database:** MongoDB
- Gebruikersaccounts, vluchtregistraties, gegevens over plaatsen
- Professionele database met toegangscontrole
- Regelmatige automatische back-ups
- Versleutelde verbindingen (TLS/SSL)

**Bestandssysteem (optioneel):**
- Oorspronkelijke IGC-bestanden en verwerkte JSON-gegevens
- Opgeslagen in mappen per gebruiker
- Beveiliging tegen path traversal geïmplementeerd
- Toegang beperkt tot geauthenticeerde verzoeken

**Geografische locatie:** servers in de EU 

### 7.2 Beveiligingsmaatregelen

We passen beveiligingspraktijken toe volgens de normen van de sector:

**Technische waarborgen:**
- HTTPS-versleuteling voor alle gegevens tijdens de overdracht (TLS 1.2+)
- Beveiligde HTTP-only cookies met SameSite-bescherming
- Authenticatie op basis van JWT-tokens met een vervaldatum
- Preventie van MongoDB-injectie en opschoning van invoer
- Escaping van reguliere expressies om ReDoS-aanvallen te voorkomen
- Preventie van path traversal bij bestandsbewerkingen
- Validatie van ObjectId's bij alle databasequery's

**Toegangscontrole:**
- Authenticatie op basis van sessies via NextAuth
- Toegangscontrole op basis van rollen (gebruiker of beheerder)
- Filtering van gegevens per gebruiker (gebruikers hebben alleen toegang tot hun eigen vluchten)
- Beveiligde routes waarvoor authenticatie vereist is

**Validatie van gegevens:**
- Limieten voor de bestandsgrootte (maximaal 3 MB voor IGC-uploads)
- Validatie van de bestandsextensie (alleen .igc)
- Validatie van coördinaten (lengtegraad -180 tot 180, breedtegraad -90 tot 90)
- Opsporing van dubbele vluchten via MD5-hashing
- Verwerking van datums met validatie van het formaat

**Monitoring en logging:**
- Gestructureerde logging van beveiligingsgebeurtenissen
- Auditlogboeken van acties van beheerders
- Logging van pogingen tot onbevoegde toegang
- Foutlogging met context voor onderzoek

### 7.3 Procedures bij een datalek

Bij een inbreuk in verband met persoonsgegevens die jouw gegevens treft:
- Melden we dit binnen 72 uur aan de bevoegde toezichthoudende autoriteit (artikel 33 AVG)
- Informeren we de betrokken gebruikers zonder onredelijke vertraging (artikel 34 AVG)
- Beschrijven we de aard van de inbreuk en de genomen maatregelen om de gevolgen te beperken
- Leggen we alle inbreuken vast in ons interne register

## 8. Bewaring van gegevens

### 8.1 Bewaartermijnen

**Accountgegevens:**
- Bewaard zolang je account bestaat
- Verwijderd bij de opheffing van je account (zie sectie 9.3)

**Vluchtregistraties:**
- Onbepaalde tijd bewaard zolang je account actief is
- Je kunt afzonderlijke vluchten op elk moment verwijderen
- Alle vluchten worden verwijderd bij de opheffing van je account

**Sessietokens:**
- JWT-tokens verlopen 30 dagen na je laatste bezoek, en nooit later dan 90 dagen nadat je bent ingelogd
- Verlopen tokens zijn niet langer geldig voor authenticatie

**Cookies:**
- `sidebar_state`: 7 dagen na je laatste bezoek
- Authenticatiecookies: 30 dagen na je laatste bezoek, maximaal 90 dagen (zie sectie 6.1)

**Lokale opslag:**
- Blijft bestaan tot je je browsergegevens wist of je account verwijdert
- Geen bewaring aan de kant van de server

**Logbestanden:**
- Beveiligingslogboeken worden 12 maanden bewaard (gerechtvaardigd belang bij beveiliging)
- Automatisch verwijderd na de bewaartermijn

### 8.2 Inactieve accounts

**Beleid voor inactiviteit:** accounts waarop 3 opeenvolgende jaren niet is ingelogd, worden automatisch verwijderd om te voldoen aan het beginsel van opslagbeperking van de AVG (artikel 5, lid 1, onder e)).

**Waarschuwingssysteem:**
- Na **2,5 jaar** inactiviteit ontvang je een waarschuwingsmail dat je account binnen 6 maanden wordt verwijderd
- Je kunt de verwijdering voorkomen door gewoon in te loggen, op elk moment vóór de grens van 3 jaar
- Log je in nadat je een waarschuwing hebt ontvangen, dan wordt de teller voor inactiviteit teruggezet en de waarschuwing gewist
- Zodra de grens van **3 jaar** is bereikt (en je eerder werd gewaarschuwd), wordt je account automatisch verwijderd

**Wat er gebeurt wanneer een inactief account wordt verwijderd:**
- Alle accountgegevens worden definitief verwijderd
- Alle vluchtgegevens en GPS-tracks worden definitief verwijderd
- Alle registraties van toestemming worden definitief verwijderd
- Er wordt een gepseudonimiseerd auditrecord van de verwijdering aangemaakt (zie sectie 8.3)

**Hoe je de verwijdering voorkomt:** log gewoon op elk moment in op je account om de teller voor inactiviteit terug te zetten.

### 8.3 Auditlogboek van verwijderingen

**Doel:** wanneer je account wordt verwijderd (door jou of wegens inactiviteit), maken we een gepseudonimiseerd auditrecord aan om naleving van de AVG aan te tonen en fraude te voorkomen.

**Wat wordt opgeslagen:**
- Geanonimiseerde gebruikers-ID (MongoDB ObjectId)
- Tijdstip van verwijdering
- Reden van verwijdering (door de gebruiker of wegens inactiviteit)
- Datum van de laatste login (bij verwijdering wegens inactiviteit)
- Datum van de waarschuwing wegens inactiviteit (indien van toepassing)

**Wat wordt NIET opgeslagen:**
- E-mailadres
- Gebruikersnaam
- Andere persoonlijk identificeerbare gegevens

**Bewaartermijn:** 7 jaar vanaf de datum van verwijdering (vereist door EU-regelgeving inzake het bijhouden van gegevens)

**Automatische verwijdering:** auditrecords ouder dan 7 jaar worden maandelijks automatisch verwijderd.

**Rechtsgrond:** wettelijke verplichting (EU-wetgeving inzake belastingen en het bijhouden van gegevens)

### 8.4 Bewaring van back-ups

**Back-upbeleid:** we houden doorlopend databaseback-ups van 7 dagen bij, met het oog op herstel na een calamiteit.

**Belangrijk:** wanneer je je account of afzonderlijke vluchten verwijdert, blijven de verwijderde gegevens tot 7 dagen in back-ups staan. Na deze periode zijn de gegevens definitief onherstelbaar.

**Onmiddellijke wissing aanvragen:** heb je onmiddellijke en volledige wissing van je gegevens nodig (bijvoorbeeld wegens een wettelijke verplichting of een noodgeval), neem dan contact met ons op; we kunnen de gegevens dan handmatig uit recente back-ups verwijderen. Deze procedure wordt alleen in uitzonderlijke omstandigheden gebruikt.

### 8.5 Volledig bewaarschema

Voor een volledig overzicht van alle bewaartermijnen, zie ons gedetailleerde [bewaarbeleid voor gegevens](/doc/data-retention-policy).

## 9. Je rechten inzake gegevensbescherming

Op grond van de AVG heb je de volgende rechten met betrekking tot je persoonsgegevens:

### 9.1 Recht van inzage (artikel 15)

Je hebt het recht om te vragen:
- Of we je persoonsgegevens verwerken
- Om een kopie van je persoonsgegevens
- Om informatie over hoe we je gegevens gebruiken

**Hoe je dit uitoefent:** klik op **Gegevens exporteren** in het paneel **Account** van je **Profiel**. Dat maakt een ZIP-bestand aan met al je IGC-bestanden, geordend op datum, plus een gestructureerd JSON-bestand met je profiel, voorkeuren, vluchtrecords, gekoppelde inlogaccounts en toestemmingen.

### 9.2 Recht op rectificatie (artikel 16)

Je hebt het recht om onjuiste persoonsgegevens te laten corrigeren.

**Hoe je dit uitoefent:** wijzig je profielgegevens in de accountinstellingen. De juistheid van vluchtgegevens hangt af van de IGC-bestanden die je uploadt (upload indien nodig gecorrigeerde bestanden).

### 9.3 Recht op gegevenswissing / „recht op vergetelheid“ (artikel 17)

Je hebt het recht om de verwijdering van je persoonsgegevens te vragen wanneer:
- De gegevens niet langer nodig zijn voor het oorspronkelijke doel
- Je je toestemming intrekt (bij verwerking op basis van toestemming)
- Je bezwaar maakt tegen de verwerking (en er geen prevalerende gerechtvaardigde gronden zijn)
- De gegevens onrechtmatig zijn verwerkt

**Hoe je dit uitoefent:** klik op **Account verwijderen** in het paneel **Account** van je **Profiel**, typ je e-mailadres ter bevestiging en klik dan op **Mijn account definitief verwijderen**. Je account en alle bijbehorende gegevens worden onmiddellijk verwijderd.

**Wat wordt verwijderd:**
- Alle accountgegevens (e-mailadres, naam, profiel)
- Alle vluchtgegevens en GPS-tracks
- Alle registraties van toestemming
- Alle sessiegegevens

**Wat wordt bewaard:**
- Een gepseudonimiseerd auditrecord van de verwijdering (7 jaar, zonder persoonlijk identificeerbare gegevens)
- Gegevens in back-ups (tot 30 dagen, daarna definitief verwijderd)

**Uitzonderingen:** we kunnen bepaalde gegevens bewaren als de wet dat vereist of voor gerechtvaardigde juridische doeleinden (zie sectie 8.3 voor details over het auditlogboek van verwijderingen).

### 9.4 Recht op beperking van de verwerking (artikel 18)

Je hebt het recht om ons te vragen de verwerking van je gegevens te beperken wanneer:
- Je de juistheid van de gegevens betwist
- De verwerking onrechtmatig is, maar je je tegen verwijdering verzet
- Wij de gegevens niet meer nodig hebben, maar jij ze nodig hebt voor een rechtsvordering
- Je bezwaar hebt gemaakt tegen de verwerking (in afwachting van de beoordeling van de gerechtvaardigde gronden)

**Hoe je dit uitoefent:** neem contact met ons op met je concrete verzoek tot beperking.

### 9.5 Recht op overdraagbaarheid van gegevens (artikel 20)

Je hebt het recht om je persoonsgegevens te ontvangen in een gestructureerde, gangbare en machineleesbare vorm.

**Hoe je dit uitoefent:**
- **Vluchtgegevens:** gebruik **Gegevens exporteren** in je **Profiel** om een ZIP-archief met al je IGC-bestanden te downloaden
- **Accountgegevens:** hetzelfde archief bevat een JSON-bestand (`data-export.json`) met je accountgegevens, voorkeuren en vluchtrecords

### 9.6 Recht van bezwaar (artikel 21)

Je hebt het recht om bezwaar te maken tegen verwerking op basis van gerechtvaardigd belang of voor direct marketing.

**Hoe je dit uitoefent:**
- **Communityfuncties:** zet **Openbaar profiel** uit in **Privacy-instellingen** om niet in de communityfuncties te verschijnen
- **Andere verwerkingen:** neem contact met ons op met je concrete bezwaar

### 9.7 Recht om je toestemming in te trekken (artikel 7, lid 3)

Wanneer de verwerking op toestemming berust, kun je die toestemming op elk moment intrekken.

**Hoe je dit uitoefent:**
- **OAuth-authenticatie:** trek de toegang in via de beveiligingsinstellingen van je Google-account
- **Openbaar profiel:** zet **Openbaar profiel** uit in **Privacy-instellingen** op je **Profiel**
- **Account:** verwijder je account om al je toestemmingen in te trekken

**Opmerking:** de intrekking doet geen afbreuk aan de rechtmatigheid van de verwerking op basis van toestemming vóór de intrekking.

### 9.8 Recht om een klacht in te dienen (artikel 77)

Je hebt het recht om een klacht in te dienen bij een toezichthoudende autoriteit, met name in:
- De EU-lidstaat waar je woont
- De plaats waar je werkt
- De plaats waar de vermeende inbreuk heeft plaatsgevonden

**Toezichthoudende autoriteiten in de EU:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

We moedigen je aan eerst contact met ons op te nemen, zodat we je zorgen rechtstreeks kunnen behandelen.

### 9.9 Je rechten uitoefenen

Om een van deze rechten uit te oefenen:
1. Neem contact met ons op via de gegevens in sectie 15
2. Verstrek voldoende informatie om je identiteit te verifiëren (we kunnen je vragen je e-mailadres te bevestigen)
3. Geef aan welk(e) recht(en) je wilt uitoefenen
4. We antwoorden binnen **één maand** (te verlengen met twee maanden voor complexe verzoeken)

**Geen kosten:** het uitoefenen van je rechten is kosteloos, tenzij verzoeken kennelijk ongegrond of buitensporig zijn.

## 10. Privacyinstellingen en zeggenschap

### 10.1 Zichtbaarheid van je profiel

Jij bepaalt of je profiel en je vluchten zichtbaar zijn voor andere gebruikers:

**Openbaar profiel (standaard):**
- Je vluchten verschijnen in de communityfuncties
- Je profiel is zichtbaar voor andere gebruikers
- Je verschijnt in de ranglijsten en statistieken van piloten

**Privéprofiel:**
- Je vluchten zijn alleen zichtbaar voor jou
- Je verschijnt niet in de ranglijsten van de community
- Je kunt nog altijd geheime deelbare links voor afzonderlijke vluchten aanmaken

**Hoe je dit wijzigt:** open je **Profiel**, klik op **Privacy-instellingen** in het paneel **Account** en zet **Openbaar profiel** aan of uit. De wijziging geldt onmiddellijk.

### 10.2 Weergavevoorkeuren

Je kunt aanpassen:
- Welke kolommen zichtbaar zijn in de vluchtentabel
- Sorteervoorkeuren
- Filter- en zoekinstellingen
- Voorkeur voor het thema van de interface

Deze voorkeuren worden tussen je toestellen gesynchroniseerd.

### 10.3 Export van gegevens

**Export in selfservice:**
- Open je **Profiel** en klik op **Gegevens exporteren** in het paneel **Account**
- Maakt een ZIP-bestand aan met al je IGC-bestanden, geordend op datum (mappenstructuur JJJJ/MM/DD)
- Bevat een gestructureerd JSON-bestand met je profiel, voorkeuren, vluchtrecords, gekoppelde inlogaccounts en toestemmingen
- Bevat een lijst van eventuele vluchten zonder opgeslagen bestand

## 11. Privacy van kinderen

We-Fly is niet gericht op kinderen jonger dan 16 jaar. We verzamelen niet bewust persoonsgegevens van kinderen jonger dan 16 jaar.

Ben je ouder of voogd en denk je dat je kind ons persoonsgegevens heeft verstrekt:
- Neem dan onmiddellijk contact met ons op via de gegevens in sectie 15
- We verwijderen die gegevens binnen 30 dagen uit onze systemen

## 12. Geautomatiseerde besluitvorming en profilering

We doen **niet** aan:
- Geautomatiseerde besluitvorming met rechtsgevolgen of vergelijkbare aanzienlijke gevolgen (artikel 22 AVG)
- Profilering voor marketing- of commerciële doeleinden
- Algoritmische beslissingen die je toegang tot diensten beïnvloeden

**Vluchtanalyse:** hoewel we algoritmen gebruiken om vluchtgegevens te analyseren (thermiekdetectie, scoring, windanalyse), zijn dat technische berekeningen die je ervaring verrijken en geen profilering in de zin van de AVG.

## 13. Wijzigingen in dit privacybeleid

We kunnen dit privacybeleid van tijd tot tijd bijwerken om rekening te houden met:
- Wijzigingen in onze omgang met gegevens
- Nieuwe functies of diensten
- Wettelijke of regelgevende vereisten
- Feedback van gebruikers en goede praktijken

**Kennisgeving van wijzigingen:**
- We passen de datum „Laatst bijgewerkt“ bovenaan dit beleid aan
- Bij wezenlijke wijzigingen brengen we je op de hoogte per e-mail of met een duidelijke melding op ons platform
- Als je onze dienst na de wijzigingen blijft gebruiken, aanvaard je het nieuwe beleid

**Versiegeschiedenis:** we bewaren eerdere versies van het beleid met het oog op transparantie en naleving.

## 14. Wettelijk kader en naleving

Dit privacybeleid valt onder:
- **AVG**, Verordening (EU) 2016/679 - Algemene Verordening Gegevensbescherming
- **ePrivacyrichtlijn** 2002/58/EG (zoals gewijzigd)
- De toepasselijke nationale wetgeving inzake gegevensbescherming in de EU-lidstaten

**Beginselen inzake gegevensbescherming (artikel 5 AVG):**
- **Rechtmatigheid, behoorlijkheid en transparantie:** we verwerken gegevens rechtmatig, behoorlijk en transparant
- **Doelbinding:** gegevens worden verzameld voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden
- **Minimale gegevensverwerking:** we verzamelen alleen gegevens die toereikend en noodzakelijk zijn voor onze doeleinden
- **Juistheid:** we houden persoonsgegevens juist en actueel
- **Opslagbeperking:** gegevens worden niet langer bewaard dan noodzakelijk
- **Integriteit en vertrouwelijkheid:** we zorgen voor een passende beveiliging van persoonsgegevens
- **Verantwoordingsplicht:** we tonen aan dat we deze beginselen naleven

## 15. Contact

Heb je vragen over dit privacybeleid of wil je je rechten met betrekking tot je gegevens uitoefenen, neem dan contact met ons op:

**Verwerkingsverantwoordelijke:** We-Fly
**E-mail:** contact@we-fly.cloud
**Antwoordtermijn:** we streven ernaar alle vragen binnen 5 werkdagen te beantwoorden

**Voor verzoeken in verband met de AVG:**
- Vermeld „GDPR Request“ in de onderwerpregel
- Verstrek voldoende informatie om je identiteit te verifiëren
- Geef aan wat voor verzoek het is (inzage, verwijdering, overdraagbaarheid enzovoort)
- We antwoorden binnen één maand, zoals vereist door artikel 12, lid 3, AVG

---

## 16. Definities en interpretaties

**Persoonsgegevens:** alle informatie over een geïdentificeerde of identificeerbare natuurlijke persoon (bijvoorbeeld naam, e-mailadres, locatiegegevens, online identificator).

**Verwerking:** elke bewerking van persoonsgegevens, waaronder verzamelen, opslaan, gebruiken, verstrekken of verwijderen.

**Verwerkingsverantwoordelijke:** de entiteit die het doel van en de middelen voor de verwerking van persoonsgegevens vaststelt (We-Fly).

**Verwerker:** een entiteit die namens de verwerkingsverantwoordelijke persoonsgegevens verwerkt (bijvoorbeeld de hostingprovider van MongoDB).

**Betrokkene:** de persoon op wie de persoonsgegevens betrekking hebben (jij, de gebruiker).

**Toestemming:** elke vrije, specifieke, geïnformeerde en ondubbelzinnige wilsuiting waarmee iemand instemt met de verwerking van persoonsgegevens.

**IGC-bestand:** bestandsformaat van de International Gliding Commission voor GPS-vluchtlogs, met trackpunten en metagegevens.

**OAuth:** open standaard voor het delegeren van toegang, veel gebruikt om in te loggen via externe aanbieders (Google).

---

**Bevestiging:** door We-Fly te gebruiken, bevestig je dat je dit privacybeleid hebt gelezen, begrepen en ermee instemt.

---

*Dit privacybeleid werd voor het laatst herzien en goedgekeurd op 19 december 2025.*
