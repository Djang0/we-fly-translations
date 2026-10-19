---
title: Richtlinie zur Datenaufbewahrung
description: Aufbewahrungsfristen und Löschverfahren für Daten bei We-Fly im Detail
category: Account & Data
order: 2
---

**Version:** 1.1
**Gültig ab:** 2025-11-25
**Letzte Überprüfung:** 2026-10-07
**Nächste Überprüfung:** 2026-11-25
**DSGVO-Konformität:** Art. 5 Abs. 1 lit. e (Speicherbegrenzung), Art. 17 (Recht auf Löschung)

## 1. Zweck und Geltungsbereich

Diese Richtlinie zur Datenaufbewahrung legt die Aufbewahrungsfristen und Löschverfahren für personenbezogene Daten fest, die We-Fly verarbeitet. Sie dient der Einhaltung von Art. 5 Abs. 1 lit. e DSGVO, wonach personenbezogene Daten „in einer Form gespeichert werden [müssen], die die Identifizierung der betroffenen Personen nur so lange ermöglicht, wie es für die Zwecke, für die sie verarbeitet werden, erforderlich ist“.

Diese Richtlinie gilt für alle personenbezogenen Daten, die We-Fly erhebt, verarbeitet und speichert, darunter:
- Kontoinformationen der Nutzer
- Flugdaten und GPS-Tracks
- Protokolle über Löschungen (Audit-Trail)
- Einwilligungsnachweise
- Sitzungsdaten
- Zugriffsprotokolle
- Systemsicherungen (Backups)

## 2. Aufbewahrungsplan

### 2.1 Nutzerkonten und Profildaten

**Aufbewahrungsfrist:** Unbefristet (bis zur Löschung durch den Nutzer oder nach 3 Jahren Inaktivität)

**Rechtsgrundlage:** Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)

**Beschreibung:** Nutzerkonten bleiben unbefristet aktiv, solange die Nutzer den Dienst weiter nutzen. Nutzer können ihr Konto jederzeit über die Profileinstellungen löschen.

**Automatische Löschung:** Konten, bei denen 3 Jahre in Folge keine Anmeldung stattgefunden hat, werden automatisch gelöscht, nachdem der Nutzer nach 2,5 Jahren eine Warn-E-Mail erhalten hat.

**Umfasste Daten:**
- E-Mail-Adresse
- Benutzername
- Profilinformationen
- Kontoeinstellungen
- Erstellungsdatum und Zeitpunkt der letzten Anmeldung

### 2.2 Flugdaten und GPS-Tracks

**Aufbewahrungsfrist:** Unbefristet (bis zur Löschung durch den Nutzer)

**Rechtsgrundlage:** Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)

**Beschreibung:** Von Nutzern hochgeladene Flugdaten werden unbefristet aufbewahrt, da sie die Kernfunktion des Dienstes darstellen. Nutzer können einzelne Flüge oder alle Flugdaten jederzeit löschen.

**Automatische Löschung:** Flugdaten werden NICHT automatisch gelöscht. Wird ein Nutzerkonto gelöscht (manuell oder wegen Inaktivität), werden alle zugehörigen Flugdaten endgültig gelöscht.

**Umfasste Daten:**
- GPS-Tracks und Flugwege
- Flug-Metadaten (Datum, Dauer, Strecke usw.)
- Start- und Landeorte
- Wetterbedingungen
- Angaben zum Luftfahrzeug

### 2.3 Protokoll über Löschungen (Audit-Trail)

**Aufbewahrungsfrist:** 7 Jahre ab dem Löschdatum

**Rechtsgrundlage:** Rechtliche Verpflichtung (EU-Steuer- und Aufbewahrungsvorschriften)

**Beschreibung:** Löscht ein Nutzer sein Konto, wird zu Compliance-Zwecken und zur Betrugsprävention ein pseudonymisierter Eintrag in der Collection `account_deletions` angelegt. Dieser Eintrag enthält KEINE personenbezogenen Identifikationsdaten.

**Automatische Löschung:** Einträge, die älter als 7 Jahre sind, werden am ersten Tag jedes Monats durch einen geplanten Cron-Job automatisch gelöscht.

**Umfasste Daten:**
- Anonymisierte Nutzer-ID (MongoDB ObjectId)
- Zeitpunkt der Löschung
- Grund der Löschung (durch den Nutzer veranlasst oder Inaktivität)
- Datum der letzten Anmeldung (bei Löschung wegen Inaktivität)
- Datum der Inaktivitätswarnung (falls zutreffend)

**NICHT umfasste Daten:**
- E-Mail-Adresse
- Benutzername
- Jegliche personenbezogene Identifikationsdaten

### 2.4 Einwilligungsnachweise

**Aufbewahrungsfrist:** Unbefristet (solange das Nutzerkonto besteht)

**Rechtsgrundlage:** Gesetzliche Anforderung (Art. 7 Abs. 1 DSGVO)

**Beschreibung:** Nachweise über Einwilligungen der Nutzer (Zustimmung bei der Registrierung, Annahme der Datenschutzerklärung, Einwilligung in die Datenverarbeitung) werden für die gesamte Lebensdauer des Nutzerkontos aufbewahrt, um die Einhaltung der Einwilligungsanforderungen der DSGVO nachzuweisen.

**Automatische Löschung:** Einwilligungsnachweise werden gelöscht, wenn das Nutzerkonto gelöscht wird.

**Umfasste Daten:**
- Zeitpunkt der Einwilligung
- Art der Einwilligung (Registrierung, Datenverarbeitung, Datenschutzerklärung)
- Version der angenommenen Datenschutzerklärung
- Status der Einwilligung (angenommen)

### 2.5 Zugriffsprotokolle

**Aufbewahrungsfrist:** 1 Jahr (sofern umgesetzt)

**Rechtsgrundlage:** Berechtigtes Interesse (Sicherheit und Betrugsprävention)

**Beschreibung:** Zugriffsprotokolle, die Anmeldungen von Nutzern und API-Anfragen erfassen, werden zu Sicherheitszwecken aufbewahrt. **Hinweis:** Zugriffsprotokolle sind in We-Fly derzeit nicht umgesetzt.

**Automatische Löschung:** Zugriffsprotokolle, die älter als 1 Jahr sind, werden wöchentlich durch einen geplanten Cron-Job automatisch gelöscht (sobald umgesetzt).

### 2.6 Sitzungsdaten

**Aufbewahrungsfrist:** 30 Tage nach deinem letzten Besuch und nie mehr als 90 Tage nach deiner Anmeldung

**Rechtsgrundlage:** Berechtigtes Interesse (Authentifizierung der Nutzer)

**Beschreibung:** Bei der Anmeldung wird ein verschlüsseltes, HTTP-only Sitzungscookie in deinem Browser gespeichert. Jeder Besuch verlängert es um weitere 30 Tage. Es läuft also ab, wenn du We-Fly 30 Tage lang nicht öffnest, und 90 Tage nach der Anmeldung wirst du erneut zur Anmeldung aufgefordert, egal wie oft du die Seite besuchst. Beim Abmelden wird das Cookie sofort gelöscht. Setzt du dein Passwort zurück oder löschst du dein Konto, endet jede Sitzung auf jedem Gerät bei ihrer nächsten Anfrage.

**Automatische Löschung:** Sitzungen werden nicht in unserer Datenbank gespeichert: Das Cookie selbst ist die Sitzung. Dein Browser löscht es, wenn es abläuft, und der Server lehnt jede Sitzung ab, die abgelaufen ist, älter als 90 Tage ist oder durch ein Zurücksetzen des Passworts oder eine Kontolöschung beendet wurde.

**Umfasste Daten:**
- Nutzer-ID, E-Mail-Adresse, Anzeigename und URL des Profilbilds
- Kontorolle und Einwilligungsstatus
- Anzeigeeinstellungen (Design, Sichtbarkeit des Profils)
- Anmeldezeitpunkt und Ablaufzeitpunkt
- Sitzungsversion (dient dazu, Sitzungen vorzeitig zu beenden)

### 2.7 Inaktive Konten

**Aufbewahrungsfrist:** 3 Jahre ab der letzten Anmeldung

**Rechtsgrundlage:** Grundsatz der Speicherbegrenzung (Art. 5 Abs. 1 lit. e DSGVO)

**Beschreibung:** Nutzerkonten, auf die 3 Jahre in Folge nicht zugegriffen wurde, gelten als inaktiv und werden automatisch gelöscht.

**Warnsystem:**
- Nach **2,5 Jahren** Inaktivität erhalten Nutzer eine Warn-E-Mail, dass ihr Konto in 6 Monaten gelöscht wird
- Nutzer können die Löschung verhindern, indem sie sich einfach jederzeit vor Ablauf der 3-Jahres-Frist anmelden
- Ist die **3-Jahres**-Frist erreicht, wird das Konto automatisch gelöscht, sofern der Nutzer zuvor gewarnt wurde

**Automatische Löschung:** Inaktive Konten werden wöchentlich durch einen geplanten Cron-Job automatisch gelöscht (jeden Sonntag um 3:00 Uhr UTC).

### 2.8 Sicherungsdaten (Backups)

**Aufbewahrungsfrist:** 7 Tage (rollierende Aufbewahrung)

**Rechtsgrundlage:** Berechtigtes Interesse (Wiederherstellung im Notfall)

**Beschreibung:** Datenbanksicherungen werden rollierend 7 Tage lang aufbewahrt. Gelöschte Daten bleiben nach der Löschung bis zu 7 Tage lang in den Sicherungen erhalten.

**Automatische Löschung:** Sicherungen, die älter als 7 Tage sind, werden vom Sicherungssystem automatisch gelöscht.

**Wichtig:** Nutzer, die eine sofortige und vollständige Löschung ihrer Daten verlangen, sind darauf hinzuweisen, dass gelöschte Daten bis zu 7 Tage lang in Sicherungen verbleiben können. Nach Ablauf dieser Frist sind die Daten endgültig nicht mehr wiederherstellbar.

### 2.9 Gespeicherte Luftraumdateien

**Aufbewahrungsfrist:** 30 Tage ab dem Zeitpunkt, an dem du die Datei speicherst

**Rechtsgrundlage:** Vertragserfüllung (der Planungsdienst, den du angefordert hast)

**Beschreibung:** Am Ende des XC-Planers kannst du die OpenAir-Luftraumdatei, die du erstellt hast, unter einem Namen deiner Wahl speichern. Sie ist privat, und die Apps und Fluginstrumente, die du mit der Luftraum-Berechtigung mit deinem Konto verbunden hast, können sie herunterladen.

**Automatische Löschung:** Jede Datei wird 30 Tage nach dem Speichern automatisch gelöscht und ab diesem Moment nicht mehr ausgeliefert. Du kannst sie vorher im Planer löschen. Wenn du dein Konto löschst, werden alle Dateien gelöscht.

**Enthaltene Daten:**
- Der von dir gewählte Dateiname und das geplante Flugdatum
- Der OpenAir-Text (die Lufträume und NOTAMs, die du ausgewählt hast)
- Die OpenAir-Version, die Größe und der Zeitpunkt des Speicherns

## 3. Löschverfahren

### 3.1 Kontolöschung durch den Nutzer

Nutzer können ihr Konto jederzeit über die Seite mit den Profileinstellungen löschen:

1. Zu Profil navigieren und im Abschnitt Konto **Konto löschen** öffnen
2. Die Warnhinweise zur Löschung lesen
3. Zur Bestätigung die eigene E-Mail-Adresse eingeben
4. Auf **Mein Konto endgültig löschen** klicken
5. Das Konto und alle zugehörigen Daten werden endgültig gelöscht

**Was gelöscht wird:**
- Nutzerkonto und Profilinformationen
- Alle Flugdaten und GPS-Tracks
- Alle Einwilligungsnachweise
- Alle Sitzungsdaten

**Was aufbewahrt wird:**
- Pseudonymisiertes Protokoll über die Löschung (7 Jahre lang)

### 3.2 Automatische Löschung inaktiver Konten

Inaktive Konten (3 Jahre ohne Anmeldung) werden automatisch gelöscht:

1. Nach 2,5 Jahren Inaktivität erhält der Nutzer eine Warn-E-Mail
2. Der Nutzereintrag wird mit `inactivityWarned: true` und dem Zeitstempel `inactivityWarnedAt` markiert
3. Meldet sich der Nutzer an, wird die Warnmarkierung entfernt
4. Nach 3 Jahren Inaktivität (falls sich der Nutzer nicht angemeldet hat) wird das Konto automatisch gelöscht
5. Das Löschprotokoll hält die Löschung wegen Inaktivität fest

### 3.3 Automatische Bereinigung des Löschprotokolls

Einträge im Löschprotokoll, die älter als 7 Jahre sind, werden automatisch gelöscht:

1. Der Cron-Job läuft monatlich (am 1. Tag jedes Monats um Mitternacht UTC)
2. Einträge, deren Zeitstempel `deletedAt` älter als 7 Jahre ist, werden ermittelt
3. Die Einträge werden endgültig aus der Collection `account_deletions` gelöscht
4. Die Anzahl der Löschungen wird zur Überwachung protokolliert

### 3.4 Manuelle Löschung aus Sicherungen (Notfallverfahren)

In Ausnahmefällen, in denen eine sofortige Löschung der Daten erforderlich ist (z. B. gerichtliche Anordnung, dringender DSGVO-Antrag):

1. Das Nutzerkonto wird im normalen Verfahren gelöscht
2. Ein Datenbankadministrator ermittelt die Daten in den jüngsten Sicherungen und entfernt sie manuell
3. Der Zugriff auf Sicherungen ist ausschließlich befugten Administratoren vorbehalten
4. Die manuelle Löschung aus Sicherungen wird protokolliert und dem Datenschutzbeauftragten gemeldet

**Hinweis:** Dieses Verfahren wird nur unter außergewöhnlichen Umständen angewendet, da es einen manuellen Eingriff in die Datenbank erfordert.

## 4. Rechtsgrundlage der Aufbewahrung

### 4.1 Nutzerkonten und Flugdaten

**Rechtsgrundlage:** Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)

Nutzer willigen bei der Registrierung bei We-Fly ausdrücklich in die Datenverarbeitung ein. Nutzer haben die Kontrolle über ihre Daten und können sie jederzeit löschen.

### 4.2 Protokoll über Löschungen

**Rechtsgrundlage:** Rechtliche Verpflichtung (EU-Aufbewahrungsvorschriften)

Europäische Steuer- und Finanzvorschriften verlangen, Unterlagen 7 Jahre lang aufzubewahren. Auch wenn We-Fly kein Finanzinstitut ist, ist die Aufbewahrungsfrist von 7 Jahren ein weithin anerkannter Standard, um die Einhaltung von Datenschutzvorschriften nachzuweisen.

### 4.3 Löschung inaktiver Konten

**Rechtsgrundlage:** Grundsatz der Speicherbegrenzung (Art. 5 Abs. 1 lit. e DSGVO)

Inaktive Konten unbefristet aufzubewahren verstößt gegen den Grundsatz der Speicherbegrenzung. Nach 3 Jahren Inaktivität gibt es keinen berechtigten Zweck mehr für die Aufbewahrung der Daten.

### 4.4 Sicherungen

**Rechtsgrundlage:** Berechtigtes Interesse (Wiederherstellung im Notfall)

Eine Aufbewahrung von Sicherungen für 7 Tage stellt einen angemessenen Ausgleich zwischen der Fähigkeit zur Wiederherstellung im Notfall und dem Grundsatz der Datenminimierung dar.

## 5. Automatische Durchsetzung

Die Aufbewahrungsgrenzen werden durch automatisch geplante Jobs durchgesetzt:

### 5.1 Job zur Bereinigung des Löschprotokolls

- **Zeitplan:** Monatlich (am 1. Tag des Monats um Mitternacht UTC)
- **Auslöser:** Cron-Job
- **Aktion:** Einträge löschen, die älter als 7 Jahre sind

### 5.2 Job für inaktive Konten

- **Zeitplan:** Wöchentlich (sonntags um 3:00 Uhr UTC)
- **Auslöser:** Cron-Job
- **Aktionen:**
  - Warn-E-Mails an Nutzer nach 2,5 Jahren Inaktivität senden
  - Konten nach 3 Jahren Inaktivität löschen (sofern gewarnt)

## 6. Rechte der Nutzer

### 6.1 Recht auf Löschung (Art. 17 DSGVO)

Nutzer können jederzeit über die Profileinstellungen die sofortige Löschung ihres Kontos und aller zugehörigen Daten verlangen.

**Ausnahme:** Das Löschprotokoll wird aufgrund einer gesetzlichen Anforderung 7 Jahre lang aufbewahrt, enthält aber keine personenbezogenen Identifikationsdaten.

### 6.2 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)

Nutzer können ihre Daten jederzeit exportieren: **Daten exportieren** im Abschnitt Konto ihres Profils lädt ihre originalen IGC-Dateien zusammen mit ihren Flugdatensätzen herunter, und einzelne IGC-Dateien können über die Flugseiten heruntergeladen werden.

### 6.3 Auskunftsrecht (Art. 15 DSGVO)

Nutzer können jederzeit über ihr Profil und die Seiten mit ihrer Flughistorie auf alle ihre personenbezogenen Daten zugreifen.

### 6.4 Widerspruchsrecht (Art. 21 DSGVO)

Nutzer können der automatischen Löschung inaktiver Konten widersprechen, indem sie sich einfach vor Ablauf der 3-Jahres-Frist anmelden. Damit wird die automatische Löschung verhindert.

## 7. Überprüfung und Aktualisierung der Richtlinie

### 7.1 Überprüfungsplan

Diese Richtlinie wird jährlich zum Jahrestag des Inkrafttretens überprüft. Die nächste planmäßige Überprüfung findet am **2026-11-25** statt.

### 7.2 Anlässe für Aktualisierungen

Diese Richtlinie wird überprüft und aktualisiert, wenn:
- sich die DSGVO-Vorschriften oder ihre Auslegung ändern
- neue Arten von Daten erhoben werden
- sich Aufbewahrungsanforderungen ändern
- die Systeme zur automatischen Löschung geändert werden
- Rückmeldungen von Nutzern zeigen, dass die Richtlinie verbessert werden muss

### 7.3 Benachrichtigung der Nutzer

Wird diese Richtlinie aktualisiert:
- wird die Versionsnummer erhöht
- werden die Änderungen im Änderungsprotokoll der Datenschutzerklärung dokumentiert
- werden Nutzer per E-Mail benachrichtigt, wenn die Änderungen die Aufbewahrung ihrer Daten betreffen
- wird die aktualisierte Richtlinie unter `/doc/data-retention-policy` veröffentlicht

## 8. Überwachung und Compliance

### 8.1 Überwachung der Cron-Jobs

Die Cron-Jobs zur Durchsetzung der Aufbewahrungsfristen werden überwacht über:
- die Cron-Job-Logs des Servers
- Anwendungslogs für erfolgreiche Ausführungen
- Fehlerprotokollierung für fehlgeschlagene Ausführungen

**Erwartete Log-Ausgabe:**
- Bereinigung des Löschprotokolls: "Deleted X old deletion records (older than 7 years)"
- Inaktive Konten: "Sent warnings to X users, deleted Y inactive accounts"

### 8.2 Prüfung der Einhaltung

Die Einhaltung dieser Richtlinie wird geprüft durch:
- eine monatliche Durchsicht der Ausführungslogs der Cron-Jobs
- vierteljährliche Datenbankabfragen, mit denen geprüft wird, ob die Aufbewahrungsgrenzen eingehalten werden
- ein jährliches Audit zur DSGVO-Konformität

## 9. Kontakt

Bei Fragen oder Anliegen zu dieser Richtlinie zur Datenaufbewahrung:

- **Datenschutzerklärung:** [Datenschutzerklärung ansehen](/doc/privacy-policy)
- **DSGVO-Anfragen:** Nutze die Funktion zur Kontolöschung in den Profileinstellungen

## 10. Quellen

- [Art. 5 DSGVO](https://gdpr-info.eu/art-5-gdpr/)
- [Art. 17 DSGVO](https://gdpr-info.eu/art-17-gdpr/)
- [ICO-Leitfaden zur Speicherbegrenzung](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/storage-limitation/)
- [Datenschutzerklärung von We-Fly](/doc/privacy-policy)

---

**Versionsverlauf:**
- v1.0 (2025-11-25): Erstfassung der Richtlinie
