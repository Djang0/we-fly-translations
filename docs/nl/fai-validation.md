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
- **Officiële verificatie**: bewijs dat het bestand niet gewijzigd is
- **Badgeaanvragen**: als een wedstrijd of federatie een ondertekende track vraagt

### Hoe werkt het?

1. **Open je vlucht**: validatie is beschikbaar voor je eigen vluchten
2. **Klik op „Vlucht valideren (FAI)“**: het vinkicoon in de werkbalk van de vlucht (op een telefoon staat het in het menu **⋯**)
3. **Bevestig**: het venster **FAI-vluchtvalidatie** legt uit wat er gebeurt; klik op **Doorgaan**
4. **Verwerking**: We-Fly stuurt het originele IGC-bestand, ongewijzigd, naar de validatiedienst van de FAI CIVL (vali.fai-civl.org)
5. **Resultaat**: de knop verandert in **FAI-validatie geslaagd** of **FAI-validatie mislukt**, en het resultaat wordt bij de vlucht bewaard

Klik opnieuw op de knop om het venster **Resultaat FAI-validatie** te openen (status, bericht en de volledige validatiegegevens). Wil je de controle opnieuw uitvoeren, gebruik dan **Opnieuw valideren (FAI)** in het menu **⋯** van de vlucht.

### Validatieresultaten

Er zijn twee mogelijke uitkomsten:

#### PASSED
- De dienst van de FAI heeft het bestand aanvaard
- Het beveiligingsrecord van het IGC-bestand (G-record) klopt met de inhoud van het bestand
- Het bestand is niet gewijzigd sinds het instrument het ondertekende

#### FAILED
- De dienst van de FAI heeft het bestand geweigerd
- Mogelijke oorzaken:
  - ontbrekend of beschadigd G-record (sommige apps en instrumenten ondertekenen hun bestanden niet)
  - het bestand is na de opname bewerkt
  - het instrument is niet bekend bij de dienst van de FAI
  - ongeldig gegevensformaat

Het **Bericht** in het resultaatvenster vertelt je wat de dienst gemeld heeft.

### Wat controleert de FAI?

De validatiedienst van de FAI controleert het bestand zelf, niet hoe je gevlogen hebt:
- **Integriteit van het G-record**: de beveiligingshandtekening die het instrument heeft geschreven
- **Bestandsformaat**: geldige IGC-structuur
- **Validatie van het instrument**: de handtekening wordt gecontroleerd met het validatieprogramma van de fabrikant van het instrument

Ze oordeelt niet of de vlucht reglementair was, correct gescoord werd of veilig was.

### Waar het resultaat staat

Het validatieresultaat wordt in We-Fly bij de vlucht bewaard, zodat je het op elk moment opnieuw kunt openen. De dienst van de FAI geeft zelf een oordeel terug, geen certificaat: vraagt een wedstrijd of een recordaanvraag om bewijs, dan willen ze meestal het originele IGC-bestand, en dat bewaart We-Fly byte voor byte zoals je het geüpload hebt.

### Belangrijk om te weten

**FAI-validatie is NIET nodig voor:**
- Gewoon gebruik van We-Fly
- Je persoonlijke logboek
- Vluchten delen met vrienden
- Communityfuncties

**Een ondertekend, geldig IGC-bestand is vaak nodig voor:**
- Officiële competities
- Recordaanvragen
- Sommige aanvragen voor wedstrijden en badges

Kijk de regels na van de wedstrijd of federatie waar je indient.
