---
title: Privacybeleid
description: Hoe We-Fly je persoonsgegevens verzamelt, gebruikt en beschermt volgens de AVG
category: Account & Data
order: 3
---

**Laatst bijgewerkt:** 4 november 2026

## 1. Inleiding

Welkom bij We-Fly. We beschermen je persoonsgegevens en respecteren je privacyrechten, in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) (EU) 2016/679 en de toepasselijke wetgeving inzake gegevensbescherming.

Dit privacybeleid legt uit hoe we je persoonsgegevens verzamelen, gebruiken, bewaren en beschermen wanneer je ons platform voor het registreren en analyseren van paraglidingvluchten gebruikt.

### 1.1 Verwerkingsverantwoordelijke

We-Fly is de verwerkingsverantwoordelijke voor je persoonsgegevens. Voor vragen over dit privacybeleid of over je rechten kun je contact met ons opnemen via de gegevens in sectie 15.

### 1.2 Toepassingsgebied

Dit beleid geldt voor alle gebruikers van het We-Fly-platform, onder wie:
- Geregistreerde gebruikers met een account
- Bezoekers van onze openbare pagina's
- Gebruikers van onze gedeelde vluchtlinks

## 2. Welke gegevens we verzamelen

### 2.1 Accountgegevens (via Google OAuth)

Als je een account aanmaakt met "Inloggen met Google", verzamelen we:

- **E-mailadres** - Om je account te identificeren en met je te communiceren
- **Volledige naam** - Voor de weergave van je profiel en het toewijzen van vluchten
- **URL van je profielfoto** - Uit je Google-account, voor de weergave van je profiel
- **Verificatiestatus van je e-mailadres** - Aangeleverd door Google
- **Google-gebruikers-ID** - Unieke identificatie vanuit Google OAuth

We verzamelen of bewaren **geen** wachtwoorden. Alle authenticatie verloopt veilig via Google.

### 2.2 Vluchtgegevens (uit geüploade IGC-bestanden)

Als je paraglidingvluchten uploadt, verzamelen en verwerken we:

**Metadata van het bestand:**
- Naam van de piloot (uit het IGC-bestand of je accountnaam)
- Model en type van je scherm
- Informatie over je GPS-toestel (fabrikant, serienummer, firmware)
- Datum en tijd van de vlucht
- Oorspronkelijke bestandsnaam

**GPS-trackgegevens:**
- Volledige GPS-track (breedtegraad, lengtegraad, hoogte, tijdstempels)
- Locatie en tijd van de start
- Locatie en tijd van de landing
- Vluchtduur
- Maximale en minimale hoogte
- Totaal afgelegde afstand

**Berekende vluchtanalyses:**
- Analyse van thermiek (stijgsnelheid, duur, hoogtewinst)
- Schattingen van windsnelheid en windrichting
- Prestatiecijfers van de vlucht
- XContest-scoregegevens (afstand, punten, indeling van het vluchttype)
- FAI-validatiegegevens (als je validatie aanvraagt)
- Keerpunten en routesegmenten

**Technische identificatoren:**
- MD5-hash van de GPS-track (om dubbele uploads te herkennen)
- Identificatoren van databaserecords
- Opslagpaden van bestanden (als lokale opslag is ingeschakeld)

### 2.3 Gegevens over startplaatsen

We houden een database bij van paragliding-startplaatsen met:
- Naam en geografische coördinaten van de startplaats
- Hoogte boven zeeniveau
- Overheersende windrichting
- Land, stad en postcode (verkregen via de reverse-geocodingdienst Nominatim van OpenStreetMap)

Deze gegevens worden samengesteld uit vluchtuploads van gebruikers en openbare geografische databases. Locatiemetadata wordt aangevuld met gegevens van OpenStreetMap (© OpenStreetMap-bijdragers).

### 2.4 Profiel- en voorkeursgegevens

- Gebruikersrol (gebruiker of beheerder)
- Zichtbaarheid van je profiel (openbaar of privé)
- Weergavevoorkeuren (tabelkolommen, sortering, filters)
- Voorkeur voor het thema
- E-mailvoorkeuren (of je tips om te starten ontvangt)
- Tijdstempels van het aanmaken en wijzigen van je account

### 2.5 Statistische gegevens

Uit je vluchten berekenen we geaggregeerde statistieken:
- Totaal aantal vluchten en uren
- Totaal gevlogen afstand
- Aantal verschillende startplaatsen en bezochte landen
- Gemiddelde vluchtduur
- Verdeling per vluchttype

### 2.6 Gedeelde vluchtlinks

Als je een deellink voor een vlucht aanmaakt, maken we:
- Een cryptografisch veilige identificatie van 43 tekens
- Daarmee is één vlucht openbaar toegankelijk zonder dat je hele profiel zichtbaar wordt

### 2.7 Verbindingsgegevens

Als je We-Fly gebruikt terwijl je bent ingelogd, bewaren we de **laatste 5 verschillende IP-adressen** waarmee je verbinding maakte. Voor elk adres bewaren we:
- Het IP-adres
- Wanneer we het voor het eerst en voor het laatst zagen
- Je type toestel, browser en besturingssysteem
- Een geschatte locatie (stad, regio en land), bepaald op onze eigen server met een GeoIP-database (DB-IP). Je adres wordt nooit naar een externe dienst gestuurd om het te lokaliseren.

Alleen beheerders van We-Fly kunnen deze informatie zien, om het delen van accounts, verdachte logins en misbruik op te sporen. Ze wordt nooit aan andere piloten getoond en nergens anders voor gebruikt. Maak je verbinding vanaf een zesde adres, dan wordt het oudste verwijderd. Deze gegevens zitten in je archief van **Gegevens exporteren** en worden samen met je account verwijderd.

## 3. Rechtsgrond voor de verwerking

Op grond van artikel 6 van de AVG verwerken we je persoonsgegevens op basis van:

### 3.1 Toestemming (artikel 6, lid 1, a)
- Authenticatie via Google OAuth (je geeft uitdrukkelijk toestemming door op "Inloggen met Google" te klikken)
- Instellingen voor de zichtbaarheid van je profiel (je kiest er zelf voor om je profiel openbaar te maken)
- Koppelingen met API's van derden (FAI-validatie, geocoding)

### 3.2 Uitvoering van de overeenkomst (artikel 6, lid 1, b)
- Het verwerken van de vluchten die je uploadt
- Het leveren van vluchtanalyses en statistieken
- Het beheren van je account en gebruikersvoorkeuren
- Het aanbieden van de kernfuncties van onze dienst

### 3.3 Gerechtvaardigd belang (artikel 6, lid 1, f)
- Het voorkomen van dubbele vluchtuploads
- Het opsporen en voorkomen van fraude of misbruik
- Het verbeteren van onze dienst en de gebruikerservaring
- Het waarborgen van de beveiliging en de integriteit van het systeem
- Het bewaren van je laatste 5 verbindingsadressen en hun geschatte locatie om verdachte logins en misbruik op te sporen (zie 2.7)
- Het af en toe sturen van tips om je op weg te helpen met de dienst waarvoor je je hebt aangemeld (je kunt je op elk moment afmelden, zie 4.4)

Je kunt je toestemming op elk moment intrekken door je account te verwijderen of je privacy-instellingen aan te passen.

## 4. Hoe we je gegevens gebruiken

We gebruiken je persoonsgegevens om:

### 4.1 Kerndiensten te leveren
- Je te authenticeren en te identificeren wanneer je inlogt
- Je vluchten in te lezen, te analyseren en op te slaan
- Vluchtstatistieken en prestatiecijfers te berekenen
- Je persoonlijke logboek en dashboard te tonen
- Vluchten automatisch aan startplaatsen te koppelen

### 4.2 Communityfuncties mogelijk te maken
- Openbare vluchten te tonen (alleen als je je profiel openbaar maakt)
- Pilotenprofielen te tonen in de ranglijsten van de community (met je toestemming)
- Populaire startplaatsen te herkennen
- Andere piloten vluchtroutes te laten ontdekken

### 4.3 Ons platform te verbeteren
- Anonieme statistieken over het gebruik van het platform samen te stellen
- Technische problemen op te sporen en op te lossen
- De algoritmen voor vluchtanalyse te verbeteren
- De gebruikersinterface en -ervaring te optimaliseren

### 4.4 Met je te communiceren
- Meldingen over de dienst te sturen
- Af en toe tips te sturen om je op weg te helpen, bijvoorbeeld één herinnering als je logboek een week na je aanmelding nog leeg is. Je kunt deze op elk moment uitzetten via **Profiel → E-mails**, of met de afmeldlink onderaan elke tipmail
- Op ondersteuningsvragen te antwoorden
- Je op de hoogte te brengen van belangrijke wijzigingen in onze dienst of in dit beleid

### 4.5 De beveiliging te waarborgen
- Onbevoegde toegang tot accounts te voorkomen
- Frauduleuze activiteiten op te sporen en te voorkomen
- De integriteit van gegevens te controleren
- Auditlogs van beveiligingsgebeurtenissen bij te houden

We gebruiken je gegevens **niet** voor:
- Advertenties of marketing voor derden
- Het verkopen of verhuren van je persoonsgegevens
- Geautomatiseerde besluitvorming met rechtsgevolgen
- Profilering voor commerciële doeleinden

## 5. Diensten van derden en doorgifte van gegevens

We delen beperkte gegevens met de volgende diensten van derden:

### 5.1 Google OAuth
**Doel:** Authenticatie van gebruikers en verificatie van hun identiteit
**Gedeelde gegevens:** E-mailadres, naam, profielfoto (via het OAuth-protocol)
**Locatie:** Verenigde Staten (infrastructuur van Google)
**Privacybeleid:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Rechtsgrond:** Toestemming (OAuth-autorisatie)

### 5.2 Nominatim (OpenStreetMap)
**Doel:** Reverse geocoding om plaatsnamen af te leiden uit coördinaten
**Gedeelde gegevens:** Alleen breedte- en lengtegraad (geen persoonlijke identificatoren)
**Frequentie:** Gestart door een beheerder, niet automatisch
**Privacybeleid:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Rechtsgrond:** Gerechtvaardigd belang (aanvullen van informatie over startplaatsen)
**Bronvermelding:** Locatiegegevens © OpenStreetMap-bijdragers ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Doel:** Hoogtegegevens van startplaatsen ophalen
**Gedeelde gegevens:** Alleen breedte- en lengtegraad
**Frequentie:** Gestart door een beheerder
**Privacybeleid:** Openbare dienst, geen registratie nodig
**Rechtsgrond:** Gerechtvaardigd belang (nauwkeurige gegevens over startplaatsen)

### 5.4 Vluchtvalidatiedienst van FAI CIVL
**Doel:** Vluchten valideren volgens de FAI-normen
**Gedeelde gegevens:** De volledige inhoud van het IGC-bestand (alleen als je zelf uitdrukkelijk om validatie vraagt)
**Endpoint:** vali.fai-civl.org/api/vali/json
**Privacybeleid:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Rechtsgrond:** Toestemming (op initiatief van de gebruiker)

### 5.5 Aanbieders van kaarttegels
**Doel:** Interactieve kaarten tonen om vluchten te visualiseren
**Gebruikte diensten:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Gedeelde gegevens:** Alleen verzoeken om kaarttegels (geen persoonsgegevens)
**Rechtsgrond:** Gerechtvaardigd belang (essentiële werking van de dienst)

### 5.6 Internationale doorgifte van gegevens

Sommige van onze dienstverleners bevinden zich buiten de Europese Economische Ruimte (EER), met name in de Verenigde Staten. Bij internationale doorgifte van gegevens:

- Baseren we ons op **adequaatheidsbesluiten** van de Europese Commissie (waar beschikbaar)
- Passen we **modelcontractbepalingen (SCC's)** toe die door de Europese Commissie zijn goedgekeurd
- Zorgen we ervoor dat aanbieders zich houden aan **normen voor gegevensbescherming die gelijkwaardig zijn aan de AVG**

## 6. Cookies en trackingtechnologieën

### 6.1 Essentiële cookies (geen toestemming nodig)

**Authenticatiecookies:**
- **Doel:** Je ingelogde sessie behouden
- **Type:** HTTP-only, beveiligde, versleutelde JWT-tokens
- **Duur:** 30 dagen na je laatste bezoek, en nooit langer dan 90 dagen nadat je inlogt. Uitloggen verwijdert de cookie; je wachtwoord opnieuw instellen of je account verwijderen beëindigt hem op elk toestel.
- **Aanbieder:** NextAuth.js
- **Uit te schakelen:** Nee (essentieel voor de werking van de dienst)

**Beveiligingscookies voor de verbinding (autorouter):**
- **Namen:** `ar_oauth_state`, `ar_oauth_return`
- **Doel:** De login bij autorouter beveiligen wanneer je die koppelt voor NOTAM's, en je terugbrengen naar de pagina waar je vandaan kwam
- **Type:** HTTP-only, beveiligd
- **Duur:** 10 minuten, verwijderd zodra de koppeling voltooid is
- **Uit te schakelen:** Nee (alleen geplaatst als je ervoor kiest autorouter te koppelen)

### 6.2 Functionele cookies (gerechtvaardigd belang)

**Cookie voor de zijbalkstatus:**
- **Naam:** `sidebar_state`
- **Doel:** Onthouden of je de zijbalk open- of dichtgeklapt wilt
- **Duur:** 7 dagen
- **Opgeslagen gegevens:** "true" of "false"

**Taalcookie:**
- **Naam:** `NEXT_LOCALE`
- **Doel:** Onthouden welke interfacetaal je hebt gekozen (Engels, Frans, Duits, Nederlands, Italiaans of Spaans)
- **Duur:** 1 jaar
- **Opgeslagen gegevens:** Een taalcode zoals "fr"

**Cookie voor de weergegeven taal:**
- **Naam:** `wf-rl`
- **Doel:** De taal van de laatst getoonde pagina bijhouden, zodat de app één keer kan vernieuwen als je tijdens het surfen van taal wisselt
- **Duur:** Tot je je browser sluit
- **Opgeslagen gegevens:** Een taalcode zoals "fr"

**Cookie voor een bekend toestel:**
- **Naam:** `wf-known-device`
- **Doel:** Onthouden dat er al eens iemand in deze browser is ingelogd, zodat de startpagina "Inloggen" aanbiedt in plaats van "Account aanmaken"
- **Duur:** Ongeveer 13 maanden
- **Opgeslagen gegevens:** Alleen "1", nooit je e-mailadres of account-ID

**Passkey-cookie:**
- **Naam:** `wf-passkey-hint`
- **Doel:** Onthouden dat deze browser een passkey voor We-Fly heeft, zodat de inlogpagina die als eerste kan aanbieden
- **Duur:** Ongeveer 13 maanden
- **Opgeslagen gegevens:** Alleen "1"

### 6.3 Lokale opslag

We gebruiken de lokale opslag van je browser voor:

**Weergave-instellingen van vluchten:**
- **Sleutel:** `we-fly-flights-display-settings`
- **Doel:** Zichtbaarheid van kolommen en sorteervoorkeuren bewaren zodat pagina's sneller laden
- **Gegevens:** JSON-object met interfacevoorkeuren
- **Gesynchroniseerd:** Met de server, zodat ze op al je toestellen werken

**Filtervoorkeuren:**
- **Doel:** Zoek- en filterinstellingen voor vluchten onthouden
- **Gegevens:** Zoekcriteria, datumbereiken, locatiefilters
- **Bereik:** Alleen in je browser

Je kunt de lokale opslag op elk moment wissen via de instellingen van je browser. Je interfacevoorkeuren worden dan teruggezet naar de standaardwaarden.

### 6.4 Analyse en tracking

We gebruiken momenteel **geen**:
- Google Analytics of vergelijkbare analyseplatforms
- Advertentietrackers van derden
- Pixels van sociale media
- Mechanismen voor tracking over websites heen

## 7. Opslag en beveiliging van gegevens

### 7.1 Waar we je gegevens bewaren

**Database:** MongoDB
- Gebruikersaccounts, vluchten, informatie over startplaatsen
- Professionele database met toegangscontrole
- Regelmatige automatische back-ups
- Versleutelde verbindingen (TLS/SSL)

**Bestandssysteem (optioneel):**
- Oorspronkelijke IGC-bestanden en verwerkte JSON-gegevens
- Opgeslagen in mappen per gebruiker
- Beveiliging tegen path traversal
- Toegang alleen via geauthenticeerde verzoeken

**Geografische locatie:** Servers in de EU 

### 7.2 Beveiligingsmaatregelen

We passen beveiligingspraktijken toe die in de sector gangbaar zijn:

**Technische waarborgen:**
- HTTPS-versleuteling voor alle gegevens tijdens het transport (TLS 1.2+)
- Beveiligde HTTP-only cookies met SameSite-bescherming
- Authenticatie op basis van JWT-tokens met vervaldatum
- Bescherming tegen MongoDB-injectie en opschoning van invoer
- Escaping van reguliere expressies tegen ReDoS-aanvallen
- Bescherming tegen path traversal bij bestandsbewerkingen
- Validatie van ObjectId's bij alle databasequery's

**Toegangscontrole:**
- Authenticatie op basis van sessies via NextAuth
- Toegangscontrole op basis van rollen (gebruiker of beheerder)
- Filtering van gegevens per gebruiker (je hebt alleen toegang tot je eigen vluchten)
- Beveiligde routes die authenticatie vereisen

**Validatie van gegevens:**
- Limiet op de bestandsgrootte (maximaal 3 MB per IGC-upload)
- Controle van de bestandsextensie (alleen .igc)
- Validatie van coördinaten (lengtegraad -180 tot 180, breedtegraad -90 tot 90)
- Herkenning van dubbele vluchten via MD5-hashing
- Inlezen van datums met controle van het formaat

**Monitoring en logging:**
- Gestructureerde logging van beveiligingsgebeurtenissen
- Audittrails van acties door beheerders
- Logging van pogingen tot onbevoegde toegang
- Foutlogging met context voor onderzoek

### 7.3 Procedure bij datalekken

Bij een datalek dat je persoonsgegevens treft:
- Melden we dit binnen 72 uur aan de bevoegde toezichthoudende autoriteit (artikel 33 AVG)
- Informeren we de betrokken gebruikers zonder onnodige vertraging (artikel 34 AVG)
- Beschrijven we de aard van het lek en de genomen maatregelen
- Documenteren we alle lekken in ons interne register

## 8. Bewaring van gegevens

### 8.1 Bewaartermijnen

**Accountgegevens:**
- Bewaard zolang je account bestaat
- Verwijderd wanneer je je account opheft (zie sectie 9.3)

**Vluchten:**
- Onbeperkt bewaard zolang je account actief is
- Je kunt afzonderlijke vluchten op elk moment verwijderen
- Alle vluchten worden verwijderd wanneer je je account opheft

**Sessietokens:**
- JWT-tokens verlopen 30 dagen na je laatste bezoek, en nooit later dan 90 dagen nadat je inlogt
- Verlopen tokens zijn niet meer geldig voor authenticatie

**Cookies:**
- `sidebar_state`: 7 dagen na het laatste bezoek
- Authenticatiecookies: 30 dagen na het laatste bezoek, maximaal 90 dagen (zie sectie 6.1)

**Lokale opslag:**
- Blijft bestaan tot je je browsergegevens wist of je account verwijdert
- Geen bewaring op de server

**Verbindingsgegevens:**
- Alleen je laatste 5 verschillende IP-adressen en hun geschatte locatie worden bewaard; elk nieuw adres vervangt het oudste
- Verwijderd samen met je account

**Logbestanden:**
- Beveiligingslogs worden 12 maanden bewaard (gerechtvaardigd belang voor de beveiliging)
- Automatisch verwijderd na afloop van de bewaartermijn

### 8.2 Inactieve accounts

**Inactiviteitsbeleid:** Accounts waarop 3 jaar op rij niet is ingelogd, worden automatisch verwijderd om te voldoen aan het beginsel van opslagbeperking van de AVG (artikel 5, lid 1, e).

**Waarschuwingssysteem:**
- Na **2,5 jaar** inactiviteit krijg je een waarschuwingsmail dat je account over 6 maanden wordt verwijderd
- Je kunt de verwijdering voorkomen door gewoon in te loggen vóór de grens van 3 jaar
- Log je in nadat je een waarschuwing hebt gekregen, dan wordt de inactiviteitsteller teruggezet en vervalt de waarschuwing
- Zodra de grens van **3 jaar** bereikt is (en je eerder gewaarschuwd bent), wordt je account automatisch verwijderd

**Wat er gebeurt als een inactief account wordt verwijderd:**
- Alle accountgegevens worden definitief verwijderd
- Alle vluchtgegevens en GPS-tracks worden definitief verwijderd
- Alle toestemmingsregistraties worden definitief verwijderd
- Er wordt een gepseudonimiseerd auditrecord van de verwijdering aangemaakt (zie sectie 8.3)

**Hoe je verwijdering voorkomt:** Log op elk moment in op je account om de inactiviteitsteller terug te zetten.

### 8.3 Audittrail van verwijderingen

**Doel:** Als je account wordt verwijderd (door jou of wegens inactiviteit), maken we een gepseudonimiseerd auditrecord aan om naleving van de AVG aan te tonen en fraude te voorkomen.

**Wat wordt bewaard:**
- Geanonimiseerde gebruikers-ID (MongoDB ObjectId)
- Tijdstempel van de verwijdering
- Reden van de verwijdering (op verzoek van de gebruiker of wegens inactiviteit)
- Datum van de laatste login (bij verwijdering wegens inactiviteit)
- Datum van de inactiviteitswaarschuwing (indien van toepassing)

**Wat NIET wordt bewaard:**
- E-mailadres
- Gebruikersnaam
- Andere persoonlijk identificeerbare informatie

**Bewaartermijn:** 7 jaar na de datum van verwijdering (vereist door EU-regels voor het bijhouden van administratie)

**Automatische verwijdering:** Auditrecords die ouder zijn dan 7 jaar worden maandelijks automatisch verwijderd.

**Rechtsgrond:** Wettelijke verplichting (EU-wetgeving op belastingen en administratie)

### 8.4 Bewaring van back-ups

**Back-upbeleid:** We houden doorlopende databaseback-ups van 7 dagen bij voor herstel na een calamiteit.

**Belangrijk:** Als je je account of afzonderlijke vluchten verwijdert, blijven de verwijderde gegevens nog tot 7 dagen in de back-ups staan. Daarna zijn ze definitief onherstelbaar.

**Onmiddellijke wissing aanvragen:** Heb je onmiddellijke en volledige wissing van je gegevens nodig (bijvoorbeeld wegens een wettelijke verplichting of een noodgeval), neem dan contact met ons op; dan kunnen we de gegevens handmatig uit recente back-ups verwijderen. Deze procedure gebruiken we alleen in uitzonderlijke gevallen.

### 8.5 Volledig bewaarschema

Voor een volledig overzicht van alle bewaartermijnen, zie ons gedetailleerde [beleid voor gegevensbewaring](/doc/data-retention-policy).

## 9. Je rechten inzake gegevensbescherming

Onder de AVG heb je de volgende rechten met betrekking tot je persoonsgegevens:

### 9.1 Recht op inzage (artikel 15)

Je hebt het recht om te vragen:
- Of we je persoonsgegevens verwerken
- Een kopie van je persoonsgegevens
- Informatie over hoe we je gegevens gebruiken

**Zo gebruik je dit recht:** Klik op **Gegevens exporteren** in het paneel **Account** van je **Profiel**. Je krijgt een ZIP-bestand met al je IGC-bestanden, geordend op datum, plus een gestructureerd JSON-bestand met je profiel, voorkeuren, vluchten, gekoppelde inlogaccounts en toestemmingsregistraties.

### 9.2 Recht op rectificatie (artikel 16)

Je hebt het recht om onjuiste persoonsgegevens te laten corrigeren.

**Zo gebruik je dit recht:** Pas je profielgegevens aan in je accountinstellingen. De juistheid van vluchtgegevens hangt af van de IGC-bestanden die je uploadt (upload zo nodig gecorrigeerde bestanden).

### 9.3 Recht op gegevenswissing / "recht om vergeten te worden" (artikel 17)

Je hebt het recht om verwijdering van je persoonsgegevens te vragen wanneer:
- De gegevens niet langer nodig zijn voor het oorspronkelijke doel
- Je je toestemming intrekt (bij verwerking op basis van toestemming)
- Je bezwaar maakt tegen de verwerking (en er geen zwaarwegende gerechtvaardigde gronden zijn)
- De gegevens onrechtmatig zijn verwerkt

**Zo gebruik je dit recht:** Klik op **Account verwijderen** in het paneel **Account** van je **Profiel**, typ ter bevestiging je e-mailadres en klik op **Mijn account definitief verwijderen**. Je account en alle bijbehorende gegevens worden onmiddellijk verwijderd.

**Wat wordt verwijderd:**
- Alle accountgegevens (e-mailadres, naam, profiel)
- Alle vluchtgegevens en GPS-tracks
- Alle toestemmingsregistraties
- Alle sessiegegevens

**Wat wordt bewaard:**
- Gepseudonimiseerd auditrecord van de verwijdering (7 jaar, zonder persoonlijk identificeerbare informatie)
- Gegevens in back-ups (tot 30 dagen, daarna definitief verwijderd)

**Uitzonderingen:** We kunnen bepaalde gegevens bewaren als de wet dat vereist of voor gerechtvaardigde juridische doeleinden (zie sectie 8.3 voor details over de audittrail van verwijderingen).

### 9.4 Recht op beperking van de verwerking (artikel 18)

Je hebt het recht om te vragen dat we de verwerking van je gegevens beperken wanneer:
- Je de juistheid van de gegevens betwist
- De verwerking onrechtmatig is, maar je je verzet tegen verwijdering
- We de gegevens niet meer nodig hebben, maar jij ze nodig hebt voor een rechtsvordering
- Je bezwaar hebt gemaakt tegen de verwerking (in afwachting van de beoordeling van gerechtvaardigde gronden)

**Zo gebruik je dit recht:** Neem contact met ons op met je concrete verzoek tot beperking.

### 9.5 Recht op overdraagbaarheid van gegevens (artikel 20)

Je hebt het recht om je persoonsgegevens te ontvangen in een gestructureerd, gangbaar en machineleesbaar formaat.

**Zo gebruik je dit recht:**
- **Vluchtgegevens:** Gebruik **Gegevens exporteren** in je **Profiel** om een ZIP-archief met al je IGC-bestanden te downloaden
- **Accountgegevens:** Hetzelfde archief bevat een JSON-bestand (`data-export.json`) met je accountgegevens, voorkeuren en vluchten

### 9.6 Recht van bezwaar (artikel 21)

Je hebt het recht om bezwaar te maken tegen verwerking op basis van gerechtvaardigd belang of voor direct marketing.

**Zo gebruik je dit recht:**
- **Communityfuncties:** Zet **Openbaar profiel** uit in **Privacy-instellingen** om niet in communityfuncties te verschijnen
- **Andere verwerkingen:** Neem contact met ons op met je concrete bezwaar

### 9.7 Recht om toestemming in te trekken (artikel 7, lid 3)

Bij verwerking op basis van toestemming kun je die toestemming op elk moment intrekken.

**Zo gebruik je dit recht:**
- **OAuth-authenticatie:** Trek de toegang in via de beveiligingsinstellingen van je Google-account
- **Openbaar profiel:** Zet **Openbaar profiel** uit in **Privacy-instellingen** op je **Profiel**
- **Account:** Verwijder je account om alle toestemming in te trekken

**Let op:** Intrekking doet niets af aan de rechtmatigheid van de verwerking op basis van toestemming vóór de intrekking.

### 9.8 Recht om een klacht in te dienen (artikel 77)

Je hebt het recht om een klacht in te dienen bij een toezichthoudende autoriteit, met name in:
- De EU-lidstaat waar je woont
- De plaats waar je werkt
- De plaats waar de vermeende inbreuk heeft plaatsgevonden

**Toezichthoudende autoriteiten in de EU:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

We raden je aan eerst contact met ons op te nemen, zodat we je vragen rechtstreeks kunnen behandelen.

### 9.9 Je rechten uitoefenen

Om een van deze rechten uit te oefenen:
1. Neem contact met ons op via de gegevens in sectie 15
2. Geef voldoende informatie om je identiteit te verifiëren (we kunnen om bevestiging van je e-mailadres vragen)
3. Geef aan welk(e) recht(en) je wilt uitoefenen
4. We antwoorden binnen **één maand** (te verlengen met twee maanden bij complexe verzoeken)

**Geen kosten:** Je rechten uitoefenen is gratis, tenzij verzoeken kennelijk ongegrond of buitensporig zijn.

## 10. Privacy-instellingen en controle

### 10.1 Zichtbaarheid van je profiel

Jij bepaalt of je profiel en vluchten zichtbaar zijn voor andere gebruikers:

**Openbaar profiel (standaard):**
- Je vluchten verschijnen in communityfuncties
- Je profiel is zichtbaar voor andere gebruikers
- Je verschijnt in de ranglijsten en statistieken van piloten

**Privéprofiel:**
- Je vluchten zijn alleen voor jou zichtbaar
- Je verschijnt niet in de ranglijsten van de community
- Je kunt nog steeds geheime deellinks voor afzonderlijke vluchten aanmaken

**Zo pas je dit aan:** Open je **Profiel**, klik op **Privacy-instellingen** in het paneel **Account** en zet **Openbaar profiel** aan of uit. De wijziging gaat meteen in.

### 10.2 Weergavevoorkeuren

Je kunt aanpassen:
- Zichtbaarheid van kolommen in de vluchtentabel
- Sorteervoorkeuren
- Filter- en zoekinstellingen
- Voorkeur voor het thema van de interface

Deze voorkeuren worden gesynchroniseerd tussen je toestellen.

### 10.3 Gegevensexport

**Zelf exporteren:**
- Open je **Profiel** en klik op **Gegevens exporteren** in het paneel **Account**
- Je krijgt een ZIP-bestand met al je IGC-bestanden, geordend op datum (mappenstructuur JJJJ/MM/DD)
- Met een gestructureerd JSON-bestand met je profiel, voorkeuren, vluchten, gekoppelde inlogaccounts en toestemmingsregistraties
- Met een lijst van vluchten waarvan geen bestand is opgeslagen

## 11. Privacy van kinderen

We-Fly is niet bedoeld voor kinderen jonger dan 16 jaar. We verzamelen niet bewust persoonsgegevens van kinderen jonger dan 16.

Ben je ouder of voogd en denk je dat je kind ons persoonsgegevens heeft verstrekt:
- Neem dan onmiddellijk contact met ons op via de gegevens in sectie 15
- We verwijderen die gegevens binnen 30 dagen uit onze systemen

## 12. Geautomatiseerde besluitvorming en profilering

We doen **niet** aan:
- Geautomatiseerde besluitvorming met rechtsgevolgen of vergelijkbare aanzienlijke gevolgen (artikel 22 AVG)
- Profilering voor marketing- of commerciële doeleinden
- Algoritmische beslissingen die je toegang tot de dienst beïnvloeden

**Vluchtanalyse:** We gebruiken wel algoritmen om vluchtgegevens te analyseren (herkenning van thermiek, scoring, windanalyse), maar dat zijn technische berekeningen die je ervaring verbeteren en geen profilering in de zin van de AVG.

## 13. Wijzigingen in dit privacybeleid

We kunnen dit privacybeleid van tijd tot tijd bijwerken naar aanleiding van:
- Wijzigingen in hoe we met gegevens omgaan
- Nieuwe functies of diensten
- Wettelijke of regelgevende vereisten
- Feedback van gebruikers en goede praktijken

**Melding van wijzigingen:**
- We passen de datum "Laatst bijgewerkt" bovenaan dit beleid aan
- Bij belangrijke wijzigingen laten we het je weten per e-mail of met een duidelijke melding op ons platform
- Blijf je de dienst na wijzigingen gebruiken, dan aanvaard je het nieuwe beleid

**Versiegeschiedenis:** We bewaren eerdere versies van het beleid voor transparantie en naleving.

## 14. Juridisch kader en naleving

Dit privacybeleid valt onder:
- **AVG** (EU) 2016/679 - Algemene Verordening Gegevensbescherming
- **ePrivacyrichtlijn** 2002/58/EG (zoals gewijzigd)
- De toepasselijke nationale wetgeving inzake gegevensbescherming in de EU-lidstaten

**Beginselen van gegevensbescherming (artikel 5 AVG):**
- **Rechtmatigheid, behoorlijkheid, transparantie:** We verwerken gegevens wettig, eerlijk en transparant
- **Doelbinding:** Gegevens worden verzameld voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden
- **Minimale gegevensverwerking:** We verzamelen alleen gegevens die toereikend en noodzakelijk zijn voor onze doeleinden
- **Juistheid:** We houden persoonsgegevens juist en actueel
- **Opslagbeperking:** Gegevens worden niet langer bewaard dan nodig
- **Integriteit en vertrouwelijkheid:** We zorgen voor een passende beveiliging van persoonsgegevens
- **Verantwoordingsplicht:** We tonen aan dat we deze beginselen naleven

## 15. Contact

Heb je vragen over dit privacybeleid of wil je je rechten uitoefenen? Neem dan contact met ons op:

**Verwerkingsverantwoordelijke:** We-Fly
**E-mail:** contact@we-fly.cloud
**Reactietijd:** We streven ernaar alle vragen binnen 5 werkdagen te beantwoorden

**Voor verzoeken in het kader van de AVG:**
- Vermeld "AVG-verzoek" in de onderwerpregel
- Geef voldoende informatie om je identiteit te verifiëren
- Geef aan wat voor verzoek het is (inzage, verwijdering, overdraagbaarheid, enz.)
- We antwoorden binnen één maand, zoals vereist door artikel 12, lid 3, van de AVG

---

## 16. Definities en interpretaties

**Persoonsgegevens:** Alle informatie over een geïdentificeerde of identificeerbare natuurlijke persoon (bijv. naam, e-mailadres, locatiegegevens, online identificator).

**Verwerking:** Elke bewerking van persoonsgegevens, zoals verzamelen, opslaan, gebruiken, verstrekken of verwijderen.

**Verwerkingsverantwoordelijke:** De entiteit die het doel en de middelen van de verwerking van persoonsgegevens bepaalt (We-Fly).

**Verwerker:** Een entiteit die persoonsgegevens verwerkt namens de verwerkingsverantwoordelijke (bijv. de hostingprovider van MongoDB).

**Betrokkene:** De persoon op wie de persoonsgegevens betrekking hebben (jij, de gebruiker).

**Toestemming:** Een vrije, specifieke, geïnformeerde en ondubbelzinnige wilsuiting waarmee je instemt met de verwerking van persoonsgegevens.

**IGC-bestand:** Bestandsformaat van de International Gliding Commission voor GPS-vluchtlogs, met trackpunten en metadata.

**OAuth:** Open standaard voor het delegeren van toegang, vaak gebruikt om in te loggen via een externe aanbieder (Google).

---

**Bevestiging:** Door We-Fly te gebruiken, bevestig je dat je dit privacybeleid hebt gelezen, begrepen en ermee akkoord gaat.

---

*Dit privacybeleid is voor het laatst herzien en goedgekeurd op 19 december 2025.*
