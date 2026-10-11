---
title: FAI-validatie
description: Valideer je vlucht via de publieke API van de FAI
category: Your Flights
order: 2
---

## FAI-vluchtvalidatie

### Wat is FAI-validatie?

De FAI (Fédération Aéronautique Internationale) is de wereldwijde federatie voor luchtsporten. We-Fly kan vluchten indienen bij de officiële validatiedienst van de FAI CIVL.

### Wanneer gebruik je FAI-validatie?

Gebruik FAI-validatie voor:
- **Competitievluchten**: officiële controle voor wedstrijden
- **Recordaanvragen**: pogingen voor een wereld- of nationaal record
- **Officiële verificatie**: bewijs dat je vlucht echt is
- **Certificering**: vereisten voor badges en brevetten

### Hoe werkt het?

1. **Open je vlucht**: ga naar de detailpagina van de vlucht
2. **Klik op „Vlucht valideren (FAI)“**: dien hem in bij de dienst van de FAI CIVL
3. **Verwerking**: het IGC-bestand wordt naar http://vali.fai-civl.org gestuurd
4. **Resultaat**: het validatieresultaat komt terug
5. **Opslag**: het resultaat wordt bij de vlucht bewaard

### Validatieresultaten

Er zijn twee mogelijke uitkomsten:

#### PASSED
- De vlucht is geldig volgens de FAI-regels
- De integriteit van het IGC-bestand is bevestigd
- De GPS-track is echt
- Geen manipulatie vastgesteld
- Validatiecertificaat beschikbaar

#### FAILED
- De vlucht is niet door de validatie gekomen
- Mogelijke oorzaken:
  - problemen met de integriteit van het IGC-bestand
  - afwijkingen in de GPS-track
  - ongeldig gegevensformaat
  - vermoedelijke manipulatie

### Wat controleert de FAI?

De validatiedienst van de FAI controleert:
- **Integriteit van het G-record**: validatie van de beveiligingshandtekening
- **Bestandsformaat**: geldige IGC-structuur
- **Continuïteit van de GPS-track**: geen gaten of sprongen
- **Consistentie van de gegevens**: hoogte, positie en tijd kloppen met elkaar
- **Validatie van het instrument**: bekende of goedgekeurde GPS-toestellen

### Validatiecertificaat

Als je vlucht slaagt:
- Krijg je een link naar het validatiecertificaat
- Kun je het gebruiken voor officiële inzendingen
- Blijft het permanent bewaard op de servers van de FAI
- Heb je een bewijs dat je vlucht echt is

### Belangrijk om te weten

**FAI-validatie is NIET nodig voor:**
- Gewoon gebruik van We-Fly
- Je persoonlijke logboek
- Vluchten delen met vrienden
- Communityfuncties

**FAI-validatie IS nodig voor:**
- Officiële competities
- Recordaanvragen
- Brevetten en badges voor piloten
- Prijzen in wedstrijden opeisen
