---
title: Bewaarbeleid voor gegevens
description: Gedetailleerde bewaartermijnen en verwijderingsprocedures van We-Fly
category: Account & Data
order: 2
---

**Versie:** 1.1
**Ingangsdatum:** 2025-11-25
**Datum laatste herziening:** 2026-10-07
**Datum volgende herziening:** 2026-11-25
**Naleving AVG:** artikel 5, lid 1, onder e) - opslagbeperking, artikel 17 - recht op gegevenswissing

## 1. Doel en toepassingsgebied

Dit bewaarbeleid voor gegevens legt de bewaartermijnen en verwijderingsprocedures vast voor persoonsgegevens die We-Fly verwerkt, overeenkomstig artikel 5, lid 1, onder e), AVG, dat vereist dat persoonsgegevens „worden bewaard in een vorm die het mogelijk maakt de betrokkenen niet langer te identificeren dan voor de doeleinden waarvoor de persoonsgegevens worden verwerkt noodzakelijk is“.

Dit beleid geldt voor alle persoonsgegevens die We-Fly verzamelt, verwerkt en opslaat, waaronder:
- Gegevens van gebruikersaccounts
- Vluchtgegevens en GPS-tracks
- Auditlogboeken van verwijderingen
- Registraties van toestemming
- Sessiegegevens
- Toegangslogboeken
- Systeemback-ups

## 2. Bewaarschema

### 2.1 Gebruikersaccounts en profielgegevens

**Bewaartermijn:** onbepaald (tot verwijdering door de gebruiker of 3 jaar inactiviteit)

**Rechtsgrond:** toestemming (artikel 6, lid 1, onder a), AVG)

**Beschrijving:** gebruikersaccounts blijven onbepaalde tijd actief zolang gebruikers de dienst blijven gebruiken. Gebruikers kunnen hun account op elk moment verwijderen via de profielinstellingen.

**Automatische verwijdering:** accounts waarop 3 opeenvolgende jaren niet is ingelogd, worden automatisch verwijderd nadat de gebruiker na 2,5 jaar een waarschuwingsmail heeft ontvangen.

**Betrokken gegevens:**
- E-mailadres
- Gebruikersnaam
- Profielgegevens
- Accountvoorkeuren
- Aanmaakdatum en tijdstip van de laatste login

### 2.2 Vluchtgegevens en GPS-tracks

**Bewaartermijn:** onbepaald (tot verwijdering door de gebruiker)

**Rechtsgrond:** toestemming (artikel 6, lid 1, onder a), AVG)

**Beschrijving:** door gebruikers geüploade vluchtgegevens worden onbepaalde tijd bewaard, omdat ze de kernfunctie van de dienst vormen. Gebruikers kunnen op elk moment afzonderlijke vluchten of al hun vluchtgegevens verwijderen.

**Automatische verwijdering:** vluchtgegevens worden NIET automatisch verwijderd. Wanneer een gebruikersaccount wordt verwijderd (handmatig of wegens inactiviteit), worden alle bijbehorende vluchtgegevens definitief verwijderd.

**Betrokken gegevens:**
- GPS-tracks en vluchtroutes
- Metagegevens van vluchten (datum, duur, afstand enzovoort)
- Start- en landingslocaties
- Weersomstandigheden
- Gegevens over het luchtvaartuig

### 2.3 Auditlogboek van verwijderingen

**Bewaartermijn:** 7 jaar vanaf de datum van verwijdering

**Rechtsgrond:** wettelijke verplichting (EU-wetgeving inzake belastingen en het bijhouden van gegevens)

**Beschrijving:** wanneer een gebruiker zijn account verwijdert, wordt in de collectie `account_deletions` een gepseudonimiseerd record aangemaakt, met het oog op naleving en fraudepreventie. Dit record bevat GEEN persoonlijk identificeerbare gegevens.

**Automatische verwijdering:** records ouder dan 7 jaar worden automatisch verwijderd op de eerste dag van elke maand, via een geplande cronjob.

**Betrokken gegevens:**
- Geanonimiseerde gebruikers-ID (MongoDB ObjectId)
- Tijdstip van verwijdering
- Reden van verwijdering (door de gebruiker of wegens inactiviteit)
- Datum van de laatste login (bij verwijdering wegens inactiviteit)
- Datum van de waarschuwing wegens inactiviteit (indien van toepassing)

**NIET betrokken gegevens:**
- E-mailadres
- Gebruikersnaam
- Andere persoonlijk identificeerbare gegevens

### 2.4 Registraties van toestemming

**Bewaartermijn:** onbepaald (zolang het gebruikersaccount bestaat)

**Rechtsgrond:** wettelijk vereiste (artikel 7, lid 1, AVG)

**Beschrijving:** registraties van de toestemming van de gebruiker (registratieovereenkomst, aanvaarding van het privacybeleid, toestemming voor gegevensverwerking) worden bewaard zolang het gebruikersaccount bestaat, om aan te tonen dat aan de toestemmingsvereisten van de AVG is voldaan.

**Automatische verwijdering:** registraties van toestemming worden verwijderd wanneer het gebruikersaccount wordt verwijderd.

**Betrokken gegevens:**
- Tijdstip van de toestemming
- Soort toestemming (registratie, gegevensverwerking, privacybeleid)
- Aanvaarde versie van het privacybeleid
- Status van de toestemming (aanvaard)

### 2.5 Toegangslogboeken

**Bewaartermijn:** 1 jaar (indien geïmplementeerd)

**Rechtsgrond:** gerechtvaardigd belang (beveiliging en fraudepreventie)

**Beschrijving:** toegangslogboeken die de authenticatie van gebruikers en API-verzoeken registreren, worden om veiligheidsredenen bewaard. **Opmerking:** toegangslogboeken zijn momenteel niet geïmplementeerd in We-Fly.

**Automatische verwijdering:** toegangslogboeken ouder dan 1 jaar worden wekelijks automatisch verwijderd via een geplande cronjob (zodra geïmplementeerd).

### 2.6 Sessiegegevens

**Bewaartermijn:** 30 dagen na je laatste bezoek, en nooit langer dan 90 dagen nadat je bent ingelogd

**Rechtsgrond:** gerechtvaardigd belang (authenticatie van de gebruiker)

**Beschrijving:** wanneer je inlogt, wordt in je browser een versleutelde HTTP-only sessiecookie opgeslagen. Elk bezoek verlengt die met 30 dagen, zodat ze verloopt als je We-Fly 30 dagen niet opent, en 90 dagen na het inloggen wordt je gevraagd opnieuw in te loggen, hoe vaak je ook langskomt. Uitloggen verwijdert de cookie meteen. Je wachtwoord opnieuw instellen of je account verwijderen beëindigt elke sessie, op elk toestel, bij het volgende verzoek.

**Automatische verwijdering:** sessies worden niet in onze database opgeslagen: de cookie zelf is de sessie. Je browser verwijdert ze wanneer ze verloopt, en de server weigert elke sessie die verlopen is, ouder is dan 90 dagen of beëindigd werd door het opnieuw instellen van een wachtwoord of het verwijderen van een account.

**Betrokken gegevens:**
- Gebruikers-ID, e-mailadres, weergavenaam en URL van de profielfoto
- Accountrol en status van de toestemming
- Weergavevoorkeuren (thema, zichtbaarheid van het profiel)
- Tijdstip van inloggen en tijdstip van verloop
- Sessieversie (gebruikt om sessies vroegtijdig te beëindigen)

### 2.7 Inactieve accounts

**Bewaartermijn:** 3 jaar vanaf de laatste login

**Rechtsgrond:** beginsel van opslagbeperking (artikel 5, lid 1, onder e), AVG)

**Beschrijving:** gebruikersaccounts die 3 opeenvolgende jaren niet zijn gebruikt, worden als inactief beschouwd en automatisch verwijderd.

**Waarschuwingssysteem:**
- Na **2,5 jaar** inactiviteit krijgen gebruikers een waarschuwingsmail dat hun account binnen 6 maanden wordt verwijderd
- Gebruikers kunnen de verwijdering voorkomen door gewoon in te loggen, op elk moment vóór de grens van 3 jaar
- Zodra de grens van **3 jaar** is bereikt, wordt het account automatisch verwijderd als de gebruiker eerder werd gewaarschuwd

**Automatische verwijdering:** inactieve accounts worden wekelijks automatisch verwijderd via een geplande cronjob (elke zondag om 3:00 uur UTC).

### 2.8 Back-upgegevens

**Bewaartermijn:** 7 dagen (doorlopende bewaring)

**Rechtsgrond:** gerechtvaardigd belang (herstel na een calamiteit)

**Beschrijving:** databaseback-ups worden doorlopend 7 dagen bewaard. Verwijderde gegevens blijven tot 7 dagen na de verwijdering in back-ups staan.

**Automatische verwijdering:** back-ups ouder dan 7 dagen worden automatisch verwijderd door het back-upsysteem.

**Belangrijk:** gebruikers die om onmiddellijke en volledige wissing van hun gegevens vragen, moeten worden geïnformeerd dat verwijderde gegevens tot 7 dagen in back-ups kunnen blijven staan. Na deze periode zijn de gegevens definitief onherstelbaar.

## 3. Verwijderingsprocedures

### 3.1 Verwijdering van het account door de gebruiker

Gebruikers kunnen hun account op elk moment verwijderen via de pagina met profielinstellingen:

1. Ga naar Profiel en open **Account verwijderen** in de sectie Account
2. Lees de waarschuwingen over de verwijdering
3. Typ je e-mailadres om te bevestigen
4. Klik op **Mijn account definitief verwijderen**
5. Het account en alle bijbehorende gegevens worden definitief verwijderd

**Wat wordt verwijderd:**
- Het gebruikersaccount en de profielgegevens
- Alle vluchtgegevens en GPS-tracks
- Alle registraties van toestemming
- Alle sessiegegevens

**Wat wordt bewaard:**
- Het gepseudonimiseerde auditlogboek van verwijderingen (gedurende 7 jaar)

### 3.2 Automatische verwijdering van inactieve accounts

Inactieve accounts (3 jaar geen login) worden automatisch verwijderd:

1. Na 2,5 jaar inactiviteit ontvangt de gebruiker een waarschuwingsmail
2. Het gebruikersrecord wordt gemarkeerd met `inactivityWarned: true` en het tijdstip `inactivityWarnedAt`
3. Als de gebruiker inlogt, wordt de waarschuwingsmarkering gewist
4. Na 3 jaar inactiviteit (als de gebruiker niet heeft ingelogd) wordt het account automatisch verwijderd
5. Het auditlogboek van verwijderingen registreert de verwijdering wegens inactiviteit

### 3.3 Automatische opschoning van het auditlogboek van verwijderingen

Records in het auditlogboek van verwijderingen die ouder zijn dan 7 jaar, worden automatisch verwijderd:

1. De cronjob draait maandelijks (op de 1e dag van elke maand om middernacht UTC)
2. Records met een tijdstip `deletedAt` ouder dan 7 jaar worden opgespoord
3. De records worden definitief verwijderd uit de collectie `account_deletions`
4. Het aantal verwijderingen wordt gelogd voor monitoring

### 3.4 Handmatige verwijdering uit back-ups (noodprocedure)

In uitzonderlijke gevallen waarin onmiddellijke wissing van gegevens vereist is (bijvoorbeeld een gerechtelijk bevel of een dringend AVG-verzoek):

1. Het gebruikersaccount wordt via de normale procedure verwijderd
2. De databasebeheerder spoort de gegevens handmatig op in recente back-ups en verwijdert ze
3. Toegang tot back-ups is beperkt tot bevoegde beheerders
4. De handmatige verwijdering uit back-ups wordt gelogd en gemeld aan de functionaris voor gegevensbescherming

**Opmerking:** deze procedure wordt alleen in uitzonderlijke omstandigheden gebruikt, omdat ze een handmatige ingreep in de database vereist.

## 4. Rechtsgrond voor de bewaring

### 4.1 Gebruikersaccounts en vluchtgegevens

**Rechtsgrond:** toestemming (artikel 6, lid 1, onder a), AVG)

Gebruikers geven uitdrukkelijk toestemming voor de gegevensverwerking wanneer ze zich bij We-Fly registreren. Gebruikers hebben zeggenschap over hun gegevens en kunnen ze op elk moment verwijderen.

### 4.2 Auditlogboek van verwijderingen

**Rechtsgrond:** wettelijke verplichting (EU-vereisten inzake het bijhouden van gegevens)

Europese belasting- en financiële regelgeving vereist dat gegevens 7 jaar worden bijgehouden. Hoewel We-Fly geen financiële instelling is, is een bewaartermijn van 7 jaar een algemeen aanvaarde norm om naleving van de regelgeving inzake gegevensbescherming aan te tonen.

### 4.3 Verwijdering van inactieve accounts

**Rechtsgrond:** beginsel van opslagbeperking (artikel 5, lid 1, onder e), AVG)

Inactieve accounts onbepaalde tijd bewaren schendt het beginsel van opslagbeperking. Na 3 jaar inactiviteit is er geen gerechtvaardigd doel meer om de gegevens te bewaren.

### 4.4 Back-ups

**Rechtsgrond:** gerechtvaardigd belang (herstel na een calamiteit)

Een bewaring van back-ups gedurende 7 dagen is een redelijk evenwicht tussen de mogelijkheid tot herstel na een calamiteit en de beginselen van minimale gegevensverwerking.

## 5. Automatische handhaving

Bewaartermijnen worden gehandhaafd via automatische, geplande taken:

### 5.1 Taak voor de opschoning van het auditlogboek van verwijderingen

- **Planning:** maandelijks (1e dag van de maand om middernacht UTC)
- **Trigger:** cronjob
- **Actie:** records ouder dan 7 jaar verwijderen

### 5.2 Taak voor de afhandeling van inactieve accounts

- **Planning:** wekelijks (zondag om 3:00 uur UTC)
- **Trigger:** cronjob
- **Acties:**
  - Waarschuwingsmails sturen naar gebruikers na 2,5 jaar inactiviteit
  - Accounts verwijderen na 3 jaar inactiviteit (indien gewaarschuwd)

## 6. Rechten van de gebruiker

### 6.1 Recht op gegevenswissing (artikel 17 AVG)

Gebruikers kunnen op elk moment via de profielinstellingen vragen om onmiddellijke verwijdering van hun account en alle bijbehorende gegevens.

**Uitzondering:** het auditlogboek van verwijderingen wordt als wettelijk vereiste 7 jaar bewaard, maar bevat geen persoonlijk identificeerbare gegevens.

### 6.2 Recht op overdraagbaarheid van gegevens (artikel 20 AVG)

Gebruikers kunnen hun gegevens op elk moment exporteren: **Gegevens exporteren** in de sectie Account van hun profiel downloadt hun originele IGC-bestanden samen met hun vluchtgegevens, en afzonderlijke IGC-bestanden kunnen worden gedownload via de vluchtenpagina's.

### 6.3 Recht van inzage (artikel 15 AVG)

Gebruikers hebben op elk moment toegang tot al hun persoonsgegevens via hun profiel en de pagina's met hun vluchtgeschiedenis.

### 6.4 Recht van bezwaar (artikel 21 AVG)

Gebruikers kunnen bezwaar maken tegen de automatische verwijdering van inactieve accounts door gewoon in te loggen vóór de grens van 3 jaar. Dat voorkomt de automatische verwijdering.

## 7. Herziening en bijwerking van het beleid

### 7.1 Herzieningsschema

Dit beleid wordt jaarlijks herzien op de verjaardag van de ingangsdatum. De volgende geplande herziening is op **2026-11-25**.

### 7.2 Aanleidingen voor een bijwerking

Dit beleid wordt herzien en bijgewerkt wanneer:
- De AVG-regelgeving of de interpretatie ervan verandert
- Nieuwe soorten gegevens worden verzameld
- Bewaarvereisten veranderen
- Systemen voor automatische verwijdering worden aangepast
- Feedback van gebruikers aangeeft dat het beleid verbeterd moet worden

### 7.3 Kennisgeving aan gebruikers

Wanneer dit beleid wordt bijgewerkt:
- Wordt het versienummer verhoogd
- Worden de wijzigingen vastgelegd in de wijzigingsgeschiedenis van het privacybeleid
- Worden gebruikers per e-mail op de hoogte gebracht als de wijzigingen gevolgen hebben voor de bewaring van hun gegevens
- Wordt het bijgewerkte beleid gepubliceerd op `/doc/data-retention-policy`

## 8. Monitoring en naleving

### 8.1 Monitoring van cronjobs

De cronjobs voor de handhaving van de bewaartermijnen worden gemonitord via:
- De logboeken van cronjobs op de server
- Applicatielogboeken voor geslaagde uitvoeringen
- Foutregistratie voor mislukte uitvoeringen

**Verwachte loguitvoer:**
- Opschoning van het auditlogboek: "Deleted X old deletion records (older than 7 years)"
- Inactieve accounts: "Sent warnings to X users, deleted Y inactive accounts"

### 8.2 Controle op naleving

De naleving van dit beleid wordt gecontroleerd via:
- Een maandelijkse controle van de uitvoeringslogboeken van de cronjobs
- Driemaandelijkse databasequery's om na te gaan of de bewaartermijnen worden gehandhaafd
- Een jaarlijkse audit op naleving van de AVG

## 9. Contactgegevens

Voor vragen of opmerkingen over dit bewaarbeleid voor gegevens:

- **Privacybeleid:** [Privacybeleid bekijken](/doc/privacy-policy)
- **AVG-verzoeken:** gebruik de functie om je account te verwijderen in de profielinstellingen

## 10. Referenties

- [Artikel 5 AVG](https://gdpr-info.eu/art-5-gdpr/)
- [Artikel 17 AVG](https://gdpr-info.eu/art-17-gdpr/)
- [Richtlijnen van de ICO over opslagbeperking](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/storage-limitation/)
- [Privacybeleid van We-Fly](/doc/privacy-policy)

---

**Documentgeschiedenis:**
- v1.0 (2025-11-25): eerste opstelling van het beleid
