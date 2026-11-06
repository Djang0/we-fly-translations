---
title: Datenschutzerklärung
description: Wie We-Fly deine personenbezogenen Daten gemäß DSGVO erhebt, nutzt und schützt
category: Account & Data
order: 3
---

**Zuletzt aktualisiert:** 4. November 2026

## 1. Einleitung

Willkommen bei We-Fly. Wir schützen deine personenbezogenen Daten und respektieren deine Datenschutzrechte gemäß der Datenschutz-Grundverordnung (DSGVO) (EU) 2016/679 und den geltenden Datenschutzgesetzen.

Diese Datenschutzerklärung erklärt, wie wir deine personenbezogenen Daten erheben, nutzen, speichern und schützen, wenn du unsere Plattform zur Aufzeichnung und Analyse von Gleitschirmflügen nutzt.

### 1.1 Verantwortlicher

We-Fly ist der für deine personenbezogenen Daten Verantwortliche. Bei Fragen zu dieser Datenschutzerklärung oder zu deinen Rechten erreichst du uns über die Angaben in Abschnitt 15.

### 1.2 Geltungsbereich

Diese Erklärung gilt für alle Nutzer der We-Fly-Plattform, darunter:
- Registrierte Nutzer mit Konto
- Besucher unserer öffentlichen Seiten
- Nutzer unserer geteilten Flug-Links

## 2. Welche Daten wir erheben

### 2.1 Kontoinformationen (über Google OAuth)

Wenn du ein Konto über „Mit Google anmelden“ erstellst, erheben wir:

- **E-Mail-Adresse** – zur Identifizierung des Kontos und zur Kommunikation
- **Vollständiger Name** – für die Profilanzeige und die Zuordnung deiner Flüge
- **URL des Profilbilds** – aus deinem Google-Konto, für die Profilanzeige
- **Status der E-Mail-Verifizierung** – von Google bereitgestellt
- **Google-Nutzer-ID** – eindeutige Kennung aus Google OAuth

Wir erheben oder speichern **keine** Passwörter. Die gesamte Authentifizierung läuft sicher über Google.

### 2.2 Flugdaten (aus hochgeladenen IGC-Dateien)

Wenn du Gleitschirmflüge hochlädst, erheben und verarbeiten wir:

**Datei-Metadaten:**
- Pilotenname (aus der IGC-Datei oder deinem Kontonamen)
- Modell und Typ deines Schirms
- Informationen zum GPS-Gerät (Hersteller, Seriennummer, Firmware)
- Datum und Uhrzeit des Flugs
- Ursprünglicher Dateiname

**GPS-Trackdaten:**
- Vollständiger GPS-Track (Breitengrad, Längengrad, Höhe, Zeitstempel)
- Ort und Zeit des Starts
- Ort und Zeit der Landung
- Flugdauer
- Maximale und minimale Höhe
- Insgesamt zurückgelegte Strecke

**Berechnete Fluganalysen:**
- Thermikanalyse (Steigwerte, Dauer, Höhengewinn)
- Schätzungen von Windgeschwindigkeit und -richtung
- Leistungskennzahlen des Flugs
- XContest-Wertungsdaten (Strecke, Punkte, Einordnung des Flugtyps)
- FAI-Validierungsdaten (wenn du eine Validierung anforderst)
- Wendepunkte und Streckenabschnitte

**Technische Kennungen:**
- MD5-Hash des GPS-Tracks (zur Erkennung von Duplikaten)
- Datenbank-Kennungen
- Speicherpfade der Dateien (wenn die lokale Speicherung aktiviert ist)

### 2.3 Startplatzdaten

Wir pflegen eine Datenbank mit Startplätzen für Gleitschirme, die Folgendes enthält:
- Name und geografische Koordinaten des Startplatzes
- Höhe über dem Meeresspiegel
- Vorherrschende Windrichtung
- Land, Ort und Postleitzahl (ermittelt über den Reverse-Geocoding-Dienst Nominatim von OpenStreetMap)

Diese Daten stammen aus hochgeladenen Flügen und öffentlichen geografischen Datenbanken. Die Ortsangaben werden mit Daten von OpenStreetMap ergänzt (© OpenStreetMap-Mitwirkende).

### 2.4 Profil- und Einstellungsdaten

- Nutzerrolle (Nutzer oder Administrator)
- Sichtbarkeit des Profils (öffentlich oder privat)
- Anzeigeeinstellungen (Tabellenspalten, Sortierung, Filter)
- Gewähltes Design
- E-Mail-Einstellungen (ob du Tipps für den Einstieg erhältst)
- Zeitstempel der Kontoerstellung und -änderung

### 2.5 Statistische Daten

Aus deinen Flügen berechnen wir zusammenfassende Statistiken:
- Gesamtzahl der Flüge und Stunden
- Insgesamt geflogene Strecke
- Anzahl der verschiedenen Startplätze und besuchten Länder
- Durchschnittliche Flugdauer
- Aufschlüsselung nach Flugtyp

### 2.6 Geteilte Flug-Links

Wenn du einen Freigabelink für einen bestimmten Flug erstellst, erzeugen wir:
- Eine kryptografisch sichere, 43 Zeichen lange Kennung
- Damit ist ein einzelner Flug öffentlich zugänglich, ohne dein ganzes Profil offenzulegen

### 2.7 Verbindungsdaten

Wenn du We-Fly angemeldet nutzt, speichern wir die **letzten 5 verschiedenen IP-Adressen**, von denen du dich verbunden hast. Zu jeder speichern wir:
- Die IP-Adresse
- Wann wir sie zuerst und zuletzt gesehen haben
- Deinen Gerätetyp, Browser und dein Betriebssystem
- Einen ungefähren Standort (Ort, Region und Land), den wir auf unserem eigenen Server aus einer GeoIP-Datenbank (DB-IP) ermitteln. Deine Adresse wird dafür nie an einen externen Dienst geschickt.

Nur We-Fly-Administratoren sehen diese Informationen, um geteilte Konten, verdächtige Anmeldungen und Missbrauch zu erkennen. Sie werden nie anderen Piloten angezeigt und für nichts anderes verwendet. Verbindest du dich von einer sechsten Adresse, wird die älteste gelöscht. Sie sind in deinem Archiv von **Daten exportieren** enthalten und werden mit deinem Konto gelöscht.

## 3. Rechtsgrundlage der Verarbeitung

Gemäß Artikel 6 DSGVO verarbeiten wir deine personenbezogenen Daten auf folgenden Grundlagen:

### 3.1 Einwilligung (Artikel 6 Abs. 1 lit. a)
- Authentifizierung über Google OAuth (du willigst ausdrücklich ein, indem du auf „Mit Google anmelden“ klickst)
- Einstellungen zur Profilsichtbarkeit (du entscheidest dich aktiv für ein öffentliches Profil)
- Anbindungen an Drittanbieter-APIs (FAI-Validierung, Geocoding)

### 3.2 Vertragserfüllung (Artikel 6 Abs. 1 lit. b)
- Verarbeitung der Flüge, die du hochlädst
- Bereitstellung von Fluganalysen und Statistiken
- Verwaltung deines Kontos und deiner Einstellungen
- Bereitstellung der Kernfunktionen unseres Dienstes

### 3.3 Berechtigtes Interesse (Artikel 6 Abs. 1 lit. f)
- Vermeidung doppelt hochgeladener Flüge
- Erkennung und Verhinderung von Betrug oder Missbrauch
- Verbesserung unseres Dienstes und der Nutzererfahrung
- Gewährleistung von Sicherheit und Systemintegrität
- Speicherung deiner letzten 5 Verbindungsadressen und ihres ungefähren Standorts, um verdächtige Anmeldungen und Missbrauch zu erkennen (siehe 2.7)
- Gelegentliche Tipps, die dir beim Einstieg in den Dienst helfen, für den du dich angemeldet hast (du kannst sie jederzeit abbestellen, siehe 4.4)

Du kannst deine Einwilligung jederzeit widerrufen, indem du dein Konto löschst oder deine Privatsphäre-Einstellungen änderst.

## 4. Wie wir deine Daten nutzen

Wir nutzen deine personenbezogenen Daten, um:

### 4.1 Kernfunktionen bereitzustellen
- Dich bei der Anmeldung zu authentifizieren und zu identifizieren
- Deine Flüge einzulesen, zu analysieren und zu speichern
- Flugstatistiken und Leistungskennzahlen zu erstellen
- Dein persönliches Flugbuch und Dashboard anzuzeigen
- Flüge automatisch Startplätzen zuzuordnen

### 4.2 Community-Funktionen zu ermöglichen
- Öffentliche Flüge anzuzeigen (nur wenn du ein öffentliches Profil aktivierst)
- Pilotenprofile in Ranglisten der Community zu zeigen (mit deiner Einwilligung)
- Beliebte Startplätze zu ermitteln
- Anderen Piloten das Entdecken von Flugrouten zu ermöglichen

### 4.3 Unsere Plattform zu verbessern
- Anonyme Nutzungsstatistiken zusammenzufassen
- Technische Probleme zu finden und zu beheben
- Die Algorithmen der Fluganalyse zu verbessern
- Oberfläche und Nutzererfahrung zu optimieren

### 4.4 Mit dir zu kommunizieren
- Dienstbezogene Benachrichtigungen zu senden
- Gelegentlich Tipps für den Einstieg zu senden, zum Beispiel eine einzige Erinnerung, wenn dein Flugbuch eine Woche nach der Anmeldung noch leer ist. Du kannst sie jederzeit unter **Profil → E-Mails** abschalten oder über den Abmeldelink am Ende jeder Tipp-E-Mail
- Auf Support-Anfragen zu antworten
- Dich über wichtige Änderungen an unserem Dienst oder dieser Erklärung zu informieren

### 4.5 Sicherheit zu gewährleisten
- Unbefugten Zugriff auf Konten zu verhindern
- Betrügerische Aktivitäten zu erkennen und zu verhindern
- Die Datenintegrität zu prüfen
- Prüfprotokolle sicherheitsrelevanter Ereignisse zu führen

Wir nutzen deine Daten **nicht** für:
- Werbung oder Marketing für Dritte
- Verkauf oder Vermietung deiner personenbezogenen Daten
- Automatisierte Entscheidungen mit rechtlicher Wirkung
- Profiling zu kommerziellen Zwecken

## 5. Drittanbieter und Datenübermittlung

Mit folgenden Drittanbietern teilen wir begrenzte Daten:

### 5.1 Google OAuth
**Zweck:** Authentifizierung der Nutzer und Identitätsprüfung
**Weitergegebene Daten:** E-Mail, Name, Profilbild (über das OAuth-Protokoll)
**Standort:** Vereinigte Staaten (Google-Infrastruktur)
**Datenschutzerklärung:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Rechtsgrundlage:** Einwilligung (OAuth-Autorisierung)

### 5.2 Nominatim (OpenStreetMap)
**Zweck:** Reverse Geocoding, um Ortsnamen aus Koordinaten zu ermitteln
**Weitergegebene Daten:** Nur Breiten- und Längengrad (keine personenbezogenen Kennungen)
**Häufigkeit:** Von Administratoren ausgelöst, nicht automatisch
**Datenschutzerklärung:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Rechtsgrundlage:** Berechtigtes Interesse (Ergänzung der Startplatzinformationen)
**Quellenangabe:** Ortsdaten © OpenStreetMap-Mitwirkende ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Zweck:** Abruf von Höhendaten für Startplätze
**Weitergegebene Daten:** Nur Breiten- und Längengrad
**Häufigkeit:** Von Administratoren ausgelöst
**Datenschutzerklärung:** Öffentlicher Dienst, keine Registrierung erforderlich
**Rechtsgrundlage:** Berechtigtes Interesse (genaue Startplatzdaten)

### 5.4 Flugvalidierungsdienst der FAI CIVL
**Zweck:** Validierung von Flügen nach FAI-Standards
**Weitergegebene Daten:** Vollständiger Inhalt der IGC-Datei (nur wenn du ausdrücklich eine Validierung anforderst)
**Endpunkt:** vali.fai-civl.org/api/vali/json
**Datenschutzerklärung:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Rechtsgrundlage:** Einwilligung (von dir ausgelöst)

### 5.5 Anbieter von Kartenkacheln
**Zweck:** Anzeige interaktiver Karten zur Darstellung deiner Flüge
**Genutzte Dienste:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Weitergegebene Daten:** Nur Kachelanfragen (keine personenbezogenen Daten)
**Rechtsgrundlage:** Berechtigtes Interesse (notwendige Funktion des Dienstes)

### 5.6 Internationale Datenübermittlung

Einige unserer Drittanbieter sitzen außerhalb des Europäischen Wirtschaftsraums (EWR), vor allem in den Vereinigten Staaten. Bei internationalen Übermittlungen:

- stützen wir uns auf **Angemessenheitsbeschlüsse** der Europäischen Kommission (soweit vorhanden)
- verwenden wir von der Europäischen Kommission genehmigte **Standardvertragsklauseln (SCC)**
- stellen wir sicher, dass die Anbieter **Datenschutzstandards auf DSGVO-Niveau** einhalten

## 6. Cookies und Tracking-Technologien

### 6.1 Notwendige Cookies (keine Einwilligung erforderlich)

**Authentifizierungs-Cookies:**
- **Zweck:** Deine Anmeldesitzung aufrechterhalten
- **Typ:** HTTP-only, sicher, verschlüsselte JWT-Tokens
- **Dauer:** 30 Tage nach deinem letzten Besuch und nie mehr als 90 Tage nach der Anmeldung. Beim Abmelden wird es gelöscht; das Zurücksetzen deines Passworts oder das Löschen deines Kontos beendet es auf allen Geräten.
- **Anbieter:** NextAuth.js
- **Deaktivierbar:** Nein (für die Funktion des Dienstes notwendig)

**Cookies zur Verbindungssicherheit (autorouter):**
- **Namen:** `ar_oauth_state`, `ar_oauth_return`
- **Zweck:** Die Anmeldung bei autorouter absichern, wenn du es für NOTAMs verbindest, und dich zur ursprünglichen Seite zurückbringen
- **Typ:** HTTP-only, sicher
- **Dauer:** 10 Minuten, gelöscht, sobald die Verbindung hergestellt ist
- **Deaktivierbar:** Nein (wird nur gesetzt, wenn du autorouter verbindest)

### 6.2 Funktionale Cookies (berechtigtes Interesse)

**Cookie für den Seitenleisten-Status:**
- **Name:** `sidebar_state`
- **Zweck:** Merkt sich, ob die Seitenleiste auf- oder zugeklappt ist
- **Dauer:** 7 Tage
- **Gespeicherte Daten:** „true“ oder „false“

**Sprach-Cookie:**
- **Name:** `NEXT_LOCALE`
- **Zweck:** Merkt sich die gewählte Sprache der Oberfläche (Englisch, Französisch, Deutsch, Niederländisch, Italienisch oder Spanisch)
- **Dauer:** 1 Jahr
- **Gespeicherte Daten:** Ein Sprachcode wie „fr“

**Cookie für die angezeigte Sprache:**
- **Name:** `wf-rl`
- **Zweck:** Merkt sich die Sprache der zuletzt angezeigten Seite, damit die App einmal neu lädt, wenn du beim Surfen die Sprache wechselst
- **Dauer:** Bis du deinen Browser schließt
- **Gespeicherte Daten:** Ein Sprachcode wie „fr“

**Cookie für bekannte Geräte:**
- **Name:** `wf-known-device`
- **Zweck:** Merkt sich, dass sich in diesem Browser schon einmal jemand angemeldet hat, damit die Startseite „Anmelden“ statt „Konto erstellen“ anbietet
- **Dauer:** Etwa 13 Monate
- **Gespeicherte Daten:** Nur „1“, nie deine E-Mail-Adresse oder Konto-ID

**Passkey-Hinweis-Cookie:**
- **Name:** `wf-passkey-hint`
- **Zweck:** Merkt sich, dass dieser Browser einen Passkey für We-Fly hat, damit die Anmeldeseite ihn zuerst anbietet
- **Dauer:** Etwa 13 Monate
- **Gespeicherte Daten:** Nur „1“

### 6.3 Lokaler Speicher

Wir nutzen den lokalen Speicher des Browsers für:

**Anzeigeeinstellungen der Flüge:**
- **Schlüssel:** `we-fly-flights-display-settings`
- **Zweck:** Spaltensichtbarkeit und Sortierung zwischenspeichern, damit die Seite schneller lädt
- **Daten:** JSON-Objekt mit Oberflächeneinstellungen
- **Synchronisiert:** Mit dem Server, für den Zugriff von mehreren Geräten

**Filtereinstellungen:**
- **Zweck:** Such- und Filtereinstellungen der Flüge beibehalten
- **Daten:** Suchkriterien, Zeiträume, Ortsfilter
- **Umfang:** Nur im Browser

Du kannst den lokalen Speicher jederzeit in deinen Browsereinstellungen leeren. Die Oberflächeneinstellungen werden dann auf die Standardwerte zurückgesetzt.

### 6.4 Analyse und Tracking

Derzeit nutzen wir **nicht**:
- Google Analytics oder ähnliche Analyseplattformen
- Werbetracker von Drittanbietern
- Social-Media-Pixel
- Websiteübergreifende Tracking-Mechanismen

## 7. Datenspeicherung und Sicherheit

### 7.1 Wo wir deine Daten speichern

**Datenbank:** MongoDB
- Nutzerkonten, Flüge, Startplatzinformationen
- Professionelle Datenbank mit Zugriffskontrollen
- Regelmäßige automatische Backups
- Verschlüsselte Verbindungen (TLS/SSL)

**Dateisystem (optional):**
- Original-IGC-Dateien und eingelesene JSON-Daten
- Gespeichert in nutzerspezifischen Verzeichnissen
- Schutz vor Path Traversal
- Zugriff nur über authentifizierte Anfragen

**Geografischer Standort:** Server in der EU 

### 7.2 Sicherheitsmaßnahmen

Wir setzen branchenübliche Sicherheitsmaßnahmen um:

**Technische Schutzmaßnahmen:**
- HTTPS-Verschlüsselung für alle übertragenen Daten (TLS 1.2+)
- Sichere HTTP-only-Cookies mit SameSite-Schutz
- Authentifizierung über JWT-Tokens mit Ablaufzeit
- Schutz vor MongoDB-Injection und Bereinigung von Eingaben
- Escaping regulärer Ausdrücke gegen ReDoS-Angriffe
- Schutz vor Path Traversal bei Dateioperationen
- ObjectId-Prüfung bei allen Datenbankabfragen

**Zugriffskontrollen:**
- Sitzungsbasierte Authentifizierung über NextAuth
- Rollenbasierte Zugriffskontrolle (Nutzer vs. Administrator)
- Nutzerspezifische Datenfilterung (Nutzer sehen nur ihre eigenen Flüge)
- Geschützte Bereiche, die eine Anmeldung erfordern

**Datenprüfung:**
- Größenbeschränkung für Dateien (maximal 3 MB für IGC-Uploads)
- Prüfung der Dateiendung (nur .igc)
- Prüfung der Koordinaten (Längengrad -180 bis 180, Breitengrad -90 bis 90)
- Erkennung doppelter Flüge über MD5-Hashing
- Datumsverarbeitung mit Formatprüfung

**Überwachung und Protokollierung:**
- Strukturierte Protokollierung sicherheitsrelevanter Ereignisse
- Prüfprotokolle für Aktionen von Administratoren
- Protokollierung unbefugter Zugriffsversuche
- Fehlerprotokolle mit Kontext für die Untersuchung

### 7.3 Vorgehen bei Datenpannen

Bei einer Datenpanne, die deine personenbezogenen Daten betrifft:
- melden wir sie der zuständigen Aufsichtsbehörde innerhalb von 72 Stunden (Artikel 33 DSGVO)
- informieren wir betroffene Nutzer unverzüglich (Artikel 34 DSGVO)
- beschreiben wir die Art der Panne und die ergriffenen Gegenmaßnahmen
- dokumentieren wir alle Pannen in unseren internen Unterlagen

## 8. Speicherdauer

### 8.1 Speicherfristen

**Kontodaten:**
- Gespeichert, solange dein Konto besteht
- Gelöscht, wenn du dein Konto schließt (siehe Abschnitt 9.3)

**Flüge:**
- Unbefristet gespeichert, solange dein Konto aktiv ist
- Du kannst einzelne Flüge jederzeit löschen
- Alle Flüge werden beim Schließen des Kontos gelöscht

**Sitzungs-Tokens:**
- JWT-Tokens laufen 30 Tage nach deinem letzten Besuch ab und nie später als 90 Tage nach der Anmeldung
- Abgelaufene Tokens gelten nicht mehr für die Authentifizierung

**Cookies:**
- `sidebar_state`: 7 Tage ab dem letzten Besuch
- Authentifizierungs-Cookies: 30 Tage ab dem letzten Besuch, höchstens 90 Tage (siehe Abschnitt 6.1)

**Lokaler Speicher:**
- Bleibt erhalten, bis du die Browserdaten löschst oder dein Konto löschst
- Keine Speicherung auf dem Server

**Verbindungsdaten:**
- Nur deine letzten 5 verschiedenen IP-Adressen und ihr ungefährer Standort werden gespeichert; jede neue Adresse ersetzt die älteste
- Gelöscht mit deinem Konto

**Protokolldateien:**
- Sicherheitsprotokolle werden 12 Monate aufbewahrt (berechtigtes Interesse an Sicherheit)
- Nach Ablauf der Frist automatisch gelöscht

### 8.2 Inaktive Konten

**Regel bei Inaktivität:** Konten ohne Anmeldung über 3 aufeinanderfolgende Jahre werden automatisch gelöscht, um dem Grundsatz der Speicherbegrenzung der DSGVO (Artikel 5 Abs. 1 lit. e) zu entsprechen.

**Warnsystem:**
- Nach **2,5 Jahren** Inaktivität erhältst du eine Warn-E-Mail, dass dein Konto in 6 Monaten gelöscht wird
- Du verhinderst die Löschung, indem du dich einfach vor Ablauf der 3 Jahre irgendwann anmeldest
- Meldest du dich nach einer Warnung an, wird der Inaktivitätszähler zurückgesetzt und die Warnung aufgehoben
- Ist die Schwelle von **3 Jahren** erreicht (und wurdest du vorher gewarnt), wird dein Konto automatisch gelöscht

**Was beim Löschen eines inaktiven Kontos passiert:**
- Alle Kontoinformationen werden endgültig gelöscht
- Alle Flugdaten und GPS-Tracks werden endgültig gelöscht
- Alle Einwilligungsnachweise werden endgültig gelöscht
- Ein pseudonymisierter Löschnachweis wird erstellt (siehe Abschnitt 8.3)

**So verhinderst du die Löschung:** Melde dich einfach irgendwann bei deinem Konto an, um den Inaktivitätszähler zurückzusetzen.

### 8.3 Löschnachweis

**Zweck:** Wenn du dein Konto löschst (selbst oder wegen Inaktivität), erstellen wir einen pseudonymisierten Nachweis, um die Einhaltung der DSGVO zu belegen und Betrug zu verhindern.

**Was gespeichert wird:**
- Anonymisierte Nutzer-ID (MongoDB ObjectId)
- Zeitpunkt der Löschung
- Grund der Löschung (durch dich ausgelöst oder wegen Inaktivität)
- Datum der letzten Anmeldung (bei Löschung wegen Inaktivität)
- Datum der Inaktivitätswarnung (falls zutreffend)

**Was NICHT gespeichert wird:**
- E-Mail-Adresse
- Benutzername
- Irgendwelche personenbezogenen Daten

**Speicherdauer:** 7 Jahre ab dem Löschdatum (vorgeschrieben durch EU-Aufbewahrungsvorschriften)

**Automatische Löschung:** Nachweise, die älter als 7 Jahre sind, werden monatlich automatisch gelöscht.

**Rechtsgrundlage:** Rechtliche Verpflichtung (EU-Steuer- und Aufbewahrungsgesetze)

### 8.4 Aufbewahrung von Backups

**Backup-Regel:** Wir halten für die Wiederherstellung im Notfall rollierende Datenbank-Backups über 7 Tage vor.

**Wichtig:** Wenn du dein Konto oder einzelne Flüge löschst, bleiben die gelöschten Daten bis zu 7 Tage in den Backups. Danach sind sie endgültig nicht mehr wiederherstellbar.

**Sofortige Löschung anfordern:** Brauchst du eine sofortige, vollständige Löschung (z. B. aus rechtlichen Gründen oder in einem Notfall), kontaktiere uns, und wir entfernen die Daten manuell aus den aktuellen Backups. Das machen wir nur in Ausnahmefällen.

### 8.5 Vollständiger Aufbewahrungsplan

Einen umfassenden Überblick über alle Speicherfristen findest du in unserer ausführlichen [Richtlinie zur Datenaufbewahrung](/doc/data-retention-policy).

## 9. Deine Datenschutzrechte

Nach der DSGVO hast du folgende Rechte in Bezug auf deine personenbezogenen Daten:

### 9.1 Auskunftsrecht (Artikel 15)

Du kannst verlangen:
- Eine Bestätigung, ob wir deine personenbezogenen Daten verarbeiten
- Eine Kopie deiner personenbezogenen Daten
- Informationen darüber, wie wir deine Daten nutzen

**So geht’s:** Klicke im Bereich **Konto** deines **Profil**s auf **Daten exportieren**. Es wird eine ZIP-Datei erstellt, die alle deine IGC-Dateien nach Datum sortiert enthält, dazu eine strukturierte JSON-Datei mit deinem Profil, deinen Einstellungen, deinen Flügen, verknüpften Anmeldekonten und Einwilligungsnachweisen.

### 9.2 Recht auf Berichtigung (Artikel 16)

Du hast das Recht, unrichtige personenbezogene Daten berichtigen zu lassen.

**So geht’s:** Bearbeite deine Profilangaben in den Kontoeinstellungen. Die Genauigkeit der Flugdaten hängt von deinen hochgeladenen IGC-Dateien ab (lade bei Bedarf korrigierte Dateien hoch).

### 9.3 Recht auf Löschung / „Recht auf Vergessenwerden“ (Artikel 17)

Du kannst die Löschung deiner personenbezogenen Daten verlangen, wenn:
- die Daten für den ursprünglichen Zweck nicht mehr nötig sind
- du deine Einwilligung widerrufst (bei einwilligungsbasierter Verarbeitung)
- du der Verarbeitung widersprichst (und keine vorrangigen berechtigten Gründe bestehen)
- die Daten unrechtmäßig verarbeitet wurden

**So geht’s:** Klicke im Bereich **Konto** deines **Profil**s auf **Konto löschen**, gib zur Bestätigung deine E-Mail-Adresse ein und klicke dann auf **Mein Konto endgültig löschen**. Dein Konto und alle zugehörigen Daten werden sofort gelöscht.

**Was gelöscht wird:**
- Alle Kontoinformationen (E-Mail, Name, Profil)
- Alle Flugdaten und GPS-Tracks
- Alle Einwilligungsnachweise
- Alle Sitzungsdaten

**Was erhalten bleibt:**
- Pseudonymisierter Löschnachweis (7 Jahre, ohne personenbezogene Daten)
- Daten in Backups (bis zu 30 Tage, danach endgültig gelöscht)

**Ausnahmen:** Bestimmte Daten können wir aufbewahren, wenn das Gesetz es verlangt oder es berechtigten rechtlichen Zwecken dient (Details zum Löschnachweis in Abschnitt 8.3).

### 9.4 Recht auf Einschränkung der Verarbeitung (Artikel 18)

Du kannst verlangen, dass wir die Verarbeitung deiner Daten einschränken, wenn:
- du die Richtigkeit der Daten bestreitest
- die Verarbeitung unrechtmäßig ist, du aber eine Löschung ablehnst
- wir die Daten nicht mehr brauchen, du sie aber für Rechtsansprüche benötigst
- du der Verarbeitung widersprochen hast (bis die berechtigten Gründe geprüft sind)

**So geht’s:** Kontaktiere uns mit deinem konkreten Einschränkungswunsch.

### 9.5 Recht auf Datenübertragbarkeit (Artikel 20)

Du hast das Recht, deine personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.

**So geht’s:**
- **Flugdaten:** Nutze **Daten exportieren** in deinem **Profil**, um ein ZIP-Archiv mit all deinen IGC-Dateien herunterzuladen
- **Kontodaten:** Dasselbe Archiv enthält eine JSON-Datei (`data-export.json`) mit deinen Kontoinformationen, Einstellungen und Flügen

### 9.6 Widerspruchsrecht (Artikel 21)

Du kannst einer Verarbeitung widersprechen, die auf berechtigtem Interesse beruht oder der Direktwerbung dient.

**So geht’s:**
- **Community-Funktionen:** Schalte **Öffentliches Profil** unter **Privatsphäre** aus, damit du in Community-Funktionen nicht angezeigt wirst
- **Andere Verarbeitungen:** Kontaktiere uns mit deinem konkreten Widerspruch

### 9.7 Recht auf Widerruf der Einwilligung (Artikel 7 Abs. 3)

Beruht eine Verarbeitung auf deiner Einwilligung, kannst du sie jederzeit widerrufen.

**So geht’s:**
- **OAuth-Authentifizierung:** Entziehe den Zugriff in den Sicherheitseinstellungen deines Google-Kontos
- **Öffentliches Profil:** Schalte **Öffentliches Profil** unter **Privatsphäre** in deinem **Profil** aus
- **Konto:** Lösche dein Konto, um alle Einwilligungen zu widerrufen

**Hinweis:** Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung, die bis zum Widerruf auf Grundlage der Einwilligung erfolgt ist.

### 9.8 Beschwerderecht (Artikel 77)

Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren, insbesondere:
- in dem EU-Mitgliedstaat, in dem du wohnst
- an deinem Arbeitsort
- am Ort des mutmaßlichen Verstoßes

**EU-Aufsichtsbehörden:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

Am liebsten ist es uns, wenn du dich zuerst an uns wendest, damit wir dein Anliegen direkt klären können.

### 9.9 Deine Rechte wahrnehmen

So nimmst du eines dieser Rechte wahr:
1. Kontaktiere uns über die Angaben in Abschnitt 15
2. Gib genug Informationen an, damit wir deine Identität prüfen können (wir bitten eventuell um Bestätigung deiner E-Mail-Adresse)
3. Gib an, welche(s) Recht(e) du wahrnehmen möchtest
4. Wir antworten innerhalb **eines Monats** (bei komplexen Anfragen um zwei Monate verlängerbar)

**Keine Gebühren:** Die Wahrnehmung deiner Rechte ist kostenlos, außer bei offensichtlich unbegründeten oder exzessiven Anfragen.

## 10. Privatsphäre-Einstellungen und Kontrolle

### 10.1 Sichtbarkeit des Profils

Du entscheidest, ob dein Profil und deine Flüge für andere Nutzer sichtbar sind:

**Öffentliches Profil (Standard):**
- Deine Flüge erscheinen in Community-Funktionen
- Dein Profil ist für andere Nutzer sichtbar
- Du erscheinst in Ranglisten und Statistiken der Piloten

**Privates Profil:**
- Deine Flüge siehst nur du
- Du erscheinst nicht in den Ranglisten der Community
- Du kannst weiterhin geheime Freigabelinks für einzelne Flüge erstellen

**So änderst du es:** Öffne dein **Profil**, klicke im Bereich **Konto** auf **Privatsphäre** und schalte **Öffentliches Profil** ein oder aus. Die Änderung gilt sofort.

### 10.2 Anzeigeeinstellungen

Du kannst anpassen:
- Sichtbarkeit der Spalten in der Flugtabelle
- Sortierung
- Filter- und Sucheinstellungen
- Design der Oberfläche

Diese Einstellungen werden zwischen deinen Geräten synchronisiert.

### 10.3 Datenexport

**Export in Eigenregie:**
- Öffne dein **Profil** und klicke im Bereich **Konto** auf **Daten exportieren**
- Erstellt eine ZIP-Datei mit all deinen IGC-Dateien, nach Datum sortiert (Verzeichnisstruktur JJJJ/MM/TT)
- Enthält eine strukturierte JSON-Datei mit deinem Profil, deinen Einstellungen, deinen Flügen, verknüpften Anmeldekonten und Einwilligungsnachweisen
- Enthält eine Liste aller Flüge ohne gespeicherte Datei

## 11. Datenschutz bei Kindern

We-Fly richtet sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 16.

Wenn du Elternteil oder Erziehungsberechtigter bist und glaubst, dass dein Kind uns personenbezogene Daten übermittelt hat:
- Kontaktiere uns sofort über die Angaben in Abschnitt 15
- Wir löschen diese Daten innerhalb von 30 Tagen aus unseren Systemen

## 12. Automatisierte Entscheidungen und Profiling

Wir betreiben **keine**:
- Automatisierten Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung (Artikel 22 DSGVO)
- Profilbildung zu Marketing- oder kommerziellen Zwecken
- Algorithmischen Entscheidungen, die deinen Zugang zu Diensten beeinflussen

**Fluganalyse:** Wir nutzen zwar Algorithmen zur Auswertung deiner Flugdaten (Thermikerkennung, Wertung, Windanalyse), doch das sind technische Berechnungen, die dein Erlebnis verbessern, und kein Profiling im Sinne der DSGVO.

## 13. Änderungen dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Folgendes abzubilden:
- Änderungen in unserem Umgang mit Daten
- Neue Funktionen oder Dienste
- Rechtliche oder regulatorische Anforderungen
- Feedback der Nutzer und bewährte Verfahren

**Benachrichtigung über Änderungen:**
- Wir aktualisieren das Datum „Zuletzt aktualisiert“ oben in dieser Erklärung
- Bei wesentlichen Änderungen informieren wir dich per E-Mail oder über einen gut sichtbaren Hinweis auf unserer Plattform
- Nutzt du unseren Dienst nach den Änderungen weiter, gilt das als Zustimmung zur neuen Erklärung

**Versionsverlauf:** Wir bewahren frühere Fassungen der Erklärung aus Gründen der Transparenz und Compliance auf.

## 14. Rechtsrahmen und Compliance

Diese Datenschutzerklärung unterliegt:
- **DSGVO** (EU) 2016/679 – Datenschutz-Grundverordnung
- **ePrivacy-Richtlinie** 2002/58/EG (in der geänderten Fassung)
- Den geltenden nationalen Datenschutzgesetzen der EU-Mitgliedstaaten

**Grundsätze des Datenschutzes (Artikel 5 DSGVO):**
- **Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz:** Wir verarbeiten Daten rechtmäßig, fair und transparent
- **Zweckbindung:** Daten werden für festgelegte, eindeutige und legitime Zwecke erhoben
- **Datenminimierung:** Wir erheben nur Daten, die für unsere Zwecke angemessen und notwendig sind
- **Richtigkeit:** Wir halten personenbezogene Daten richtig und aktuell
- **Speicherbegrenzung:** Daten werden nur so lange gespeichert wie nötig
- **Integrität und Vertraulichkeit:** Wir sorgen für eine angemessene Sicherheit personenbezogener Daten
- **Rechenschaftspflicht:** Wir weisen die Einhaltung dieser Grundsätze nach

## 15. Kontakt

Wenn du Fragen zu dieser Datenschutzerklärung hast oder deine Datenschutzrechte wahrnehmen möchtest, kontaktiere uns:

**Verantwortlicher:** We-Fly
**E-Mail:** contact@we-fly.cloud
**Antwortzeit:** Wir bemühen uns, alle Anfragen innerhalb von 5 Werktagen zu beantworten

**Für Anfragen zur DSGVO:**
- Schreib „DSGVO-Anfrage“ in die Betreffzeile
- Gib genug Informationen an, damit wir deine Identität prüfen können
- Gib die Art deiner Anfrage an (Auskunft, Löschung, Übertragbarkeit usw.)
- Wir antworten innerhalb eines Monats, wie es Artikel 12 Abs. 3 DSGVO vorschreibt

---

## 16. Begriffsbestimmungen

**Personenbezogene Daten:** Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, E-Mail, Standortdaten, Online-Kennung).

**Verarbeitung:** Jeder Vorgang mit personenbezogenen Daten, einschließlich Erhebung, Speicherung, Nutzung, Offenlegung oder Löschung.

**Verantwortlicher:** Die Stelle, die über Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet (We-Fly).

**Auftragsverarbeiter:** Eine Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet (z. B. der MongoDB-Hosting-Anbieter).

**Betroffene Person:** Die Person, auf die sich die personenbezogenen Daten beziehen (du als Nutzer).

**Einwilligung:** Eine freiwillige, für den konkreten Fall, in informierter Weise und unmissverständlich abgegebene Zustimmung zur Verarbeitung personenbezogener Daten.

**IGC-Datei:** Dateiformat der International Gliding Commission für GPS-Flugaufzeichnungen, mit Trackpunkten und Metadaten.

**OAuth:** Offener Standard zur Delegation von Zugriffsrechten, häufig für die Anmeldung über Drittanbieter genutzt (Google).

---

**Bestätigung:** Mit der Nutzung von We-Fly bestätigst du, dass du diese Datenschutzerklärung gelesen und verstanden hast und ihr zustimmst.

---

*Diese Datenschutzerklärung wurde zuletzt am 19. Dezember 2025 geprüft und freigegeben.*
