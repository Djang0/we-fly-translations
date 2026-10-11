---
title: Datenschutzerklärung
description: Wie We-Fly deine personenbezogenen Daten nach der DSGVO erhebt, nutzt und schützt
category: Account & Data
order: 3
---

**Zuletzt aktualisiert:** 11. Oktober 2026

## 1. Einleitung

Willkommen bei We-Fly. Wir verpflichten uns, deine personenbezogenen Daten zu schützen und deine Rechte auf Privatsphäre gemäß der Datenschutz-Grundverordnung (DSGVO), Verordnung (EU) 2016/679, und den anwendbaren Datenschutzgesetzen zu achten.

Diese Datenschutzerklärung erläutert, wie wir deine personenbezogenen Daten erheben, nutzen, speichern und schützen, wenn du unsere Plattform zur Aufzeichnung und Analyse von Gleitschirmflügen nutzt.

### 1.1 Verantwortlicher

We-Fly ist der für deine personenbezogenen Daten Verantwortliche. Bei Fragen zu dieser Datenschutzerklärung oder zu deinen Rechten wende dich bitte über die in Abschnitt 15 angegebenen Kontaktdaten an uns.

### 1.2 Geltungsbereich

Diese Erklärung gilt für alle Nutzer der Plattform We-Fly, darunter:
- registrierte Nutzer mit einem Konto
- Besucher unserer öffentlichen Seiten
- Nutzer unserer Freigabelinks für Flüge

## 2. Welche Daten wir erheben

### 2.1 Kontoinformationen (über Google OAuth)

Wenn du ein Konto über „Mit Google anmelden“ erstellst, erheben wir:

- **E-Mail-Adresse**: zur Identifizierung des Kontos und zur Kommunikation
- **Vollständiger Name**: zur Anzeige im Profil und zur Zuordnung von Flügen
- **URL des Profilbilds**: aus deinem Google-Konto, zur Anzeige im Profil
- **Status der E-Mail-Verifizierung**: von Google bereitgestellt
- **Google-Nutzer-ID**: eindeutige Kennung aus Google OAuth

Wir erheben und speichern **keine** Passwörter. Die gesamte Authentifizierung wird sicher von Google abgewickelt.

### 2.2 Flugdaten (aus hochgeladenen IGC-Dateien)

Wenn du Aufzeichnungen von Gleitschirmflügen hochlädst, erheben und verarbeiten wir:

**Metadaten der Datei:**
- Pilotenname (aus der IGC-Datei oder deinem Kontonamen)
- Modell und Typ des Gleitschirms
- Angaben zum GPS-Gerät (Hersteller, Seriennummer, Firmware)
- Datum und Uhrzeit des Flugs
- Ursprünglicher Dateiname

**GPS-Trackdaten:**
- Vollständiger GPS-Track (Breitengrad, Längengrad, Höhe, Zeitstempel)
- Startort und Startzeit
- Landeort und Landezeit
- Flugdauer
- Maximale und minimale Höhe
- Insgesamt zurückgelegte Strecke

**Berechnete Flugauswertungen:**
- Analyse der Thermikaktivität (Steigwerte, Dauer, Höhengewinn)
- Schätzungen von Windgeschwindigkeit und Windrichtung
- Kennzahlen zur Flugleistung
- Wertungsdaten von XContest (Strecke, Punkte, Einordnung der Flugart)
- Daten der FAI-Validierung (wenn du eine Validierung anforderst)
- Wendepunkte und Streckenabschnitte

**Technische Kennungen:**
- MD5-Hash des GPS-Tracks (zur Erkennung von Duplikaten)
- Kennungen von Datenbankeinträgen
- Speicherpfade der Dateien (wenn die lokale Speicherung aktiviert ist)

### 2.3 Daten zu Startplätzen

Wir führen eine Datenbank mit Startplätzen für Gleitschirme. Sie enthält:
- Name und geografische Koordinaten des Startplatzes
- Höhe über dem Meeresspiegel
- Vorherrschende Windrichtung
- Land, Ort und Postleitzahl (ermittelt über den Reverse-Geocoding-Dienst Nominatim von OpenStreetMap)

Diese Daten werden aus den Flug-Uploads der Nutzer und aus öffentlichen geografischen Datenbanken zusammengeführt. Die Ortsangaben werden mit Daten von OpenStreetMap angereichert (© OpenStreetMap-Mitwirkende).

### 2.4 Profil- und Einstellungsdaten

- Nutzerrolle (Nutzer oder Administrator)
- Einstellung zur Sichtbarkeit des Profils (öffentlich oder privat)
- Anzeigeeinstellungen (Tabellenspalten, Sortierung, Filter)
- Design-Einstellung
- E-Mail-Einstellungen (ob du Einstiegstipps erhältst)
- Zeitstempel der Erstellung und Änderung des Kontos

### 2.5 Statistische Daten

Wir berechnen aus deinen Flügen zusammenfassende Statistiken:
- Gesamtzahl der Flüge und Flugstunden
- Insgesamt geflogene Strecke
- Anzahl der verschiedenen besuchten Startplätze und Länder
- Durchschnittliche Flugdauer
- Aufschlüsselung nach Flugarten

### 2.6 Freigabelinks für Flüge

Wenn du einen Freigabelink für einen bestimmten Flug erzeugst, erstellen wir:
- eine kryptografisch sichere Kennung aus 43 Zeichen
- Diese ermöglicht den öffentlichen Zugriff auf einen einzelnen Flug, ohne dein gesamtes Profil offenzulegen

## 3. Rechtsgrundlage der Verarbeitung

Nach Art. 6 DSGVO verarbeiten wir deine personenbezogenen Daten auf folgenden Grundlagen:

### 3.1 Einwilligung (Art. 6 Abs. 1 lit. a)
- Authentifizierung über Google OAuth (du willigst ausdrücklich ein, indem du auf „Mit Google anmelden“ klickst)
- Einstellungen zur Sichtbarkeit des Profils (du entscheidest dich aktiv dafür, dein Profil öffentlich zu machen)
- Anbindungen an APIs Dritter (FAI-Validierung, Geocoding)

### 3.2 Vertragserfüllung (Art. 6 Abs. 1 lit. b)
- Verarbeitung der Flüge, die du hochlädst
- Bereitstellung von Flugauswertungen und Statistiken
- Führung deines Kontos und deiner Nutzereinstellungen
- Bereitstellung der Kernfunktionen unseres Dienstes

### 3.3 Berechtigtes Interesse (Art. 6 Abs. 1 lit. f)
- Verhinderung doppelt hochgeladener Flüge
- Erkennung und Verhinderung von Betrug oder Missbrauch
- Verbesserung unseres Dienstes und der Nutzererfahrung
- Gewährleistung der Sicherheit und Integrität des Systems
- Versand gelegentlicher Tipps, die dir den Einstieg in den Dienst erleichtern, für den du dich registriert hast (du kannst dem jederzeit widersprechen, siehe 4.4)

Du kannst deine Einwilligung jederzeit widerrufen, indem du dein Konto löschst oder deine Privatsphäre-Einstellungen änderst.

## 4. Wie wir deine Daten nutzen

Wir nutzen deine personenbezogenen Daten, um:

### 4.1 Die Kerndienste bereitzustellen
- dich bei der Anmeldung zu authentifizieren und zu identifizieren
- deine Flugaufzeichnungen einzulesen, zu analysieren und zu speichern
- Flugstatistiken und Leistungskennzahlen zu erstellen
- dein persönliches Flugbuch und dein Dashboard anzuzeigen
- Flüge automatisch Startplätzen zuzuordnen

### 4.2 Community-Funktionen zu ermöglichen
- öffentliche Flüge anzuzeigen (nur wenn du das öffentliche Profil aktivierst)
- Pilotenprofile in den Community-Ranglisten anzuzeigen (mit deiner Einwilligung)
- beliebte Startplätze zu ermitteln
- anderen Piloten das Entdecken von Flugrouten zu ermöglichen

### 4.3 Unsere Plattform zu verbessern
- anonyme Statistiken zur Nutzung der Plattform zusammenzufassen
- technische Probleme zu erkennen und zu beheben
- die Algorithmen der Flugauswertung weiterzuentwickeln
- Benutzeroberfläche und Nutzererfahrung zu optimieren

### 4.4 Mit dir zu kommunizieren
- dienstbezogene Benachrichtigungen zu versenden
- gelegentlich Einstiegstipps zu versenden, zum Beispiel eine einzige Erinnerung, wenn dein Flugbuch eine Woche nach deiner Registrierung noch leer ist. Du kannst sie jederzeit unter **Profil → E-Mails** abschalten oder über den Abmeldelink am Ende jeder Tipp-E-Mail
- Supportanfragen zu beantworten
- dich über wichtige Änderungen an unserem Dienst oder an dieser Erklärung zu informieren

### 4.5 Die Sicherheit zu gewährleisten
- unbefugten Zugriff auf Konten zu verhindern
- betrügerische Aktivitäten zu erkennen und zu verhindern
- die Integrität der Daten zu prüfen
- Prüfprotokolle sicherheitsrelevanter Ereignisse zu führen

Wir nutzen deine Daten **nicht** für:
- Werbung oder Marketing gegenüber Dritten
- den Verkauf oder die Vermietung deiner personenbezogenen Daten
- automatisierte Entscheidungen mit rechtlicher Wirkung
- Profiling zu kommerziellen Zwecken

## 5. Dienste Dritter und Datenübermittlungen

Wir geben begrenzte Daten an die folgenden Dienste Dritter weiter:

### 5.1 Google OAuth
**Zweck:** Authentifizierung der Nutzer und Überprüfung der Identität
**Weitergegebene Daten:** E-Mail-Adresse, Name, Profilbild (über das OAuth-Protokoll)
**Standort:** Vereinigte Staaten (Infrastruktur von Google)
**Datenschutzerklärung:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Rechtsgrundlage:** Einwilligung (OAuth-Autorisierung)

### 5.2 Nominatim (OpenStreetMap)
**Zweck:** Reverse Geocoding, um aus Koordinaten Ortsnamen zu ermitteln
**Weitergegebene Daten:** Ausschließlich Breiten- und Längengrad (keine personenbezogenen Kennungen)
**Häufigkeit:** Von einem Administrator ausgelöst, nicht automatisch
**Datenschutzerklärung:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Rechtsgrundlage:** Berechtigtes Interesse (Ergänzung der Angaben zu Startplätzen)
**Namensnennung:** Ortsdaten © OpenStreetMap-Mitwirkende ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Zweck:** Abruf von Höhendaten für Startplätze
**Weitergegebene Daten:** Ausschließlich Breiten- und Längengrad
**Häufigkeit:** Von einem Administrator ausgelöst
**Datenschutzerklärung:** Öffentlicher Dienst, keine Registrierung erforderlich
**Rechtsgrundlage:** Berechtigtes Interesse (genaue Daten zu Startplätzen)

### 5.4 Flugvalidierungsdienst der FAI CIVL
**Zweck:** Validierung von Flugaufzeichnungen nach den Standards der FAI
**Weitergegebene Daten:** Vollständiger Inhalt der IGC-Datei (nur wenn du ausdrücklich eine Validierung anforderst)
**Endpunkt:** vali.fai-civl.org/api/vali/json
**Datenschutzerklärung:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Rechtsgrundlage:** Einwilligung (vom Nutzer ausgelöst)

### 5.5 Anbieter von Kartenkacheln
**Zweck:** Anzeige interaktiver Karten zur Darstellung von Flügen
**Genutzte Dienste:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Weitergegebene Daten:** Nur Anfragen nach Kacheln (keine personenbezogenen Daten)
**Rechtsgrundlage:** Berechtigtes Interesse (für den Dienst unerlässliche Funktionen)

### 5.6 Internationale Datenübermittlungen

Einige unserer Drittanbieter haben ihren Sitz außerhalb des Europäischen Wirtschaftsraums (EWR), insbesondere in den Vereinigten Staaten. Wenn wir Daten international übermitteln:

- stützen wir uns auf **Angemessenheitsbeschlüsse** der Europäischen Kommission (sofern vorhanden)
- setzen wir von der Europäischen Kommission genehmigte **Standardvertragsklauseln (SCC)** ein
- stellen wir sicher, dass die Anbieter **ein der DSGVO gleichwertiges Datenschutzniveau** einhalten

## 6. Cookies und Tracking-Technologien

### 6.1 Notwendige Cookies (keine Einwilligung erforderlich)

**Authentifizierungs-Cookies:**
- **Zweck:** Aufrechterhaltung deiner angemeldeten Sitzung
- **Art:** HTTP-only, sicher, verschlüsselte JWT-Tokens
- **Dauer:** 30 Tage nach deinem letzten Besuch und nie mehr als 90 Tage nach deiner Anmeldung. Beim Abmelden wird es gelöscht, und wenn du dein Passwort zurücksetzt oder dein Konto löschst, endet es auf jedem Gerät.
- **Anbieter:** NextAuth.js
- **Deaktivierbar:** Nein (für die Funktion des Dienstes unerlässlich)

**Cookies zur Absicherung der Verbindung (autorouter):**
- **Namen:** `ar_oauth_state`, `ar_oauth_return`
- **Zweck:** Absicherung der Anmeldung bei autorouter, wenn du es für NOTAMs verbindest, und Rückkehr zu der Seite, von der du gekommen bist
- **Art:** HTTP-only, sicher
- **Dauer:** 10 Minuten, gelöscht, sobald die Verbindung hergestellt ist
- **Deaktivierbar:** Nein (wird nur gesetzt, wenn du dich entscheidest, autorouter zu verbinden)

### 6.2 Funktionale Cookies (berechtigtes Interesse)

**Cookie für den Zustand der Seitenleiste:**
- **Name:** `sidebar_state`
- **Zweck:** Speichert, ob die Seitenleiste der Oberfläche auf- oder zugeklappt sein soll
- **Dauer:** 7 Tage
- **Gespeicherte Daten:** "true" oder "false"

**Sprach-Cookie:**
- **Name:** `NEXT_LOCALE`
- **Zweck:** Speichert die Sprache der Oberfläche, die du gewählt hast (Englisch, Französisch, Deutsch, Niederländisch, Italienisch oder Spanisch)
- **Dauer:** 1 Jahr
- **Gespeicherte Daten:** Ein Sprachcode wie "fr"

**Cookie für die angezeigte Sprache:**
- **Name:** `wf-rl`
- **Zweck:** Merkt sich die Sprache der zuletzt angezeigten Seite, damit die App einmal neu laden kann, wenn du beim Surfen die Sprache wechselst
- **Dauer:** Bis du deinen Browser schließt
- **Gespeicherte Daten:** Ein Sprachcode wie "fr"

**Cookie für bekannte Geräte:**
- **Name:** `wf-known-device`
- **Zweck:** Merkt sich, dass sich in diesem Browser schon einmal jemand angemeldet hat, damit die Startseite „Anmelden“ statt „Konto erstellen“ anbietet
- **Dauer:** Etwa 13 Monate
- **Gespeicherte Daten:** Nur "1", nie deine E-Mail-Adresse oder Konto-ID

**Cookie für den Passkey-Hinweis:**
- **Name:** `wf-passkey-hint`
- **Zweck:** Merkt sich, dass dieser Browser einen Passkey für We-Fly hat, damit die Anmeldeseite ihn zuerst anbieten kann
- **Dauer:** Etwa 13 Monate
- **Gespeicherte Daten:** Nur "1"

### 6.3 Lokaler Speicher

Wir nutzen den lokalen Speicher des Browsers für:

**Anzeigeeinstellungen für Flüge:**
- **Schlüssel:** `we-fly-flights-display-settings`
- **Zweck:** Zwischenspeichern der Spaltensichtbarkeit und Sortiereinstellungen für schnelleres Laden der Seite
- **Daten:** JSON-Objekt mit Einstellungen der Oberfläche
- **Synchronisiert:** Mit dem Server, für den Zugriff von mehreren Geräten

**Filtereinstellungen:**
- **Zweck:** Speichern der Such- und Filtereinstellungen für Flüge
- **Daten:** Suchkriterien, Zeiträume, Ortsfilter
- **Umfang:** Nur auf dem Client

Du kannst den lokalen Speicher jederzeit über die Einstellungen deines Browsers leeren. Dadurch werden die Einstellungen der Oberfläche auf die Standardwerte zurückgesetzt.

### 6.4 Analyse und Tracking

Wir nutzen derzeit **keine**:
- Google Analytics oder ähnliche Analyseplattformen
- Werbetracker von Drittanbietern
- Social-Media-Pixel
- seitenübergreifenden Tracking-Mechanismen

## 7. Speicherung und Sicherheit der Daten

### 7.1 Wo wir deine Daten speichern

**Datenbank:** MongoDB
- Nutzerkonten, Flugaufzeichnungen, Angaben zu Startplätzen
- Professionelle Datenbank mit Zugriffskontrollen
- Regelmäßige automatische Sicherungen
- Verschlüsselte Verbindungen (TLS/SSL)

**Dateisystem (optional):**
- Original-IGC-Dateien und eingelesene JSON-Daten
- Gespeichert in nutzerspezifischen Verzeichnissen
- Schutz vor Path Traversal umgesetzt
- Zugriff auf authentifizierte Anfragen beschränkt

**Geografischer Standort:** Server in der EU

### 7.2 Sicherheitsmaßnahmen

Wir setzen branchenübliche Sicherheitsverfahren um:

**Technische Schutzmaßnahmen:**
- HTTPS-Verschlüsselung aller übertragenen Daten (TLS 1.2+)
- Sichere HTTP-only-Cookies mit SameSite-Schutz
- Tokenbasierte Authentifizierung mit JWT und Ablaufzeit
- Schutz vor MongoDB-Injection und Bereinigung von Eingaben
- Maskierung regulärer Ausdrücke zur Abwehr von ReDoS-Angriffen
- Schutz vor Path Traversal bei Dateioperationen
- Prüfung der ObjectId bei allen Datenbankabfragen

**Zugriffskontrollen:**
- Sitzungsbasierte Authentifizierung über NextAuth
- Rollenbasierte Zugriffskontrolle (Nutzer und Administrator)
- Nutzerspezifische Filterung der Daten (Nutzer können nur auf ihre eigenen Flüge zugreifen)
- Geschützte Routen, die eine Authentifizierung erfordern

**Datenprüfung:**
- Begrenzung der Dateigröße (höchstens 3 MB für IGC-Uploads)
- Prüfung der Dateiendung (nur .igc)
- Prüfung der Koordinaten (Längengrad -180 bis 180, Breitengrad -90 bis 90)
- Erkennung doppelter Flüge über MD5-Hashes
- Einlesen von Datumsangaben mit Formatprüfung

**Überwachung und Protokollierung:**
- Strukturierte Protokollierung sicherheitsrelevanter Ereignisse
- Prüfprotokolle über Aktionen von Administratoren
- Protokollierung unbefugter Zugriffsversuche
- Fehlerprotokollierung mit Kontext zur Untersuchung

### 7.3 Vorgehen bei Datenschutzverletzungen

Im Fall einer Verletzung des Schutzes deiner personenbezogenen Daten:
- melden wir sie innerhalb von 72 Stunden der zuständigen Aufsichtsbehörde (Art. 33 DSGVO)
- benachrichtigen wir die betroffenen Nutzer unverzüglich (Art. 34 DSGVO)
- beschreiben wir die Art der Verletzung und die ergriffenen Gegenmaßnahmen
- dokumentieren wir alle Verletzungen in unseren internen Aufzeichnungen

## 8. Aufbewahrung der Daten

### 8.1 Aufbewahrungsfristen

**Kontodaten:**
- Aufbewahrt für die gesamte Lebensdauer deines Kontos
- Gelöscht bei Schließung des Kontos (siehe Abschnitt 9.3)

**Flugaufzeichnungen:**
- Unbefristet aufbewahrt, solange dein Konto aktiv ist
- Du kannst einzelne Flüge jederzeit löschen
- Alle Flüge werden bei Schließung des Kontos gelöscht

**Sitzungstokens:**
- JWT-Tokens laufen 30 Tage nach deinem letzten Besuch ab und nie später als 90 Tage nach deiner Anmeldung
- Abgelaufene Tokens sind für die Authentifizierung nicht mehr gültig

**Cookies:**
- `sidebar_state`: 7 Tage ab dem letzten Besuch
- Authentifizierungs-Cookies: 30 Tage ab dem letzten Besuch, höchstens 90 Tage (siehe Abschnitt 6.1)

**Lokaler Speicher:**
- Bleibt bestehen, bis du die Browserdaten löschst oder dein Konto löschst
- Keine Aufbewahrung auf dem Server

**Logdateien:**
- Sicherheitsprotokolle werden 12 Monate aufbewahrt (berechtigtes Interesse an der Sicherheit)
- Nach Ablauf der Frist automatisch gelöscht

### 8.2 Inaktive Konten

**Regelung zur Inaktivität:** Konten, bei denen 3 Jahre in Folge keine Anmeldung stattgefunden hat, werden automatisch gelöscht, um den Grundsatz der Speicherbegrenzung der DSGVO (Art. 5 Abs. 1 lit. e) einzuhalten.

**Warnsystem:**
- Nach **2,5 Jahren** Inaktivität erhältst du eine Warn-E-Mail, dass dein Konto in 6 Monaten gelöscht wird
- Du kannst die Löschung verhindern, indem du dich einfach jederzeit vor Ablauf der 3-Jahres-Frist anmeldest
- Meldest du dich nach Erhalt einer Warnung an, wird der Inaktivitätszähler zurückgesetzt und die Warnung aufgehoben
- Ist die **3-Jahres**-Frist erreicht (und wurdest du zuvor gewarnt), wird dein Konto automatisch gelöscht

**Was bei der Löschung eines inaktiven Kontos passiert:**
- Alle Kontoinformationen werden endgültig gelöscht
- Alle Flugdaten und GPS-Tracks werden endgültig gelöscht
- Alle Einwilligungsnachweise werden endgültig gelöscht
- Ein pseudonymisierter Eintrag im Löschprotokoll wird angelegt (siehe Abschnitt 8.3)

**So verhinderst du die Löschung:** Melde dich einfach jederzeit bei deinem Konto an, um den Inaktivitätszähler zurückzusetzen.

### 8.3 Protokoll über Löschungen (Audit-Trail)

**Zweck:** Wenn du dein Konto löschst (manuell oder wegen Inaktivität), legen wir einen pseudonymisierten Protokolleintrag an, um die Einhaltung der DSGVO nachzuweisen und Betrug zu verhindern.

**Was gespeichert wird:**
- Anonymisierte Nutzer-ID (MongoDB ObjectId)
- Zeitpunkt der Löschung
- Grund der Löschung (durch den Nutzer veranlasst oder Inaktivität)
- Datum der letzten Anmeldung (bei Löschung wegen Inaktivität)
- Datum der Inaktivitätswarnung (falls zutreffend)

**Was NICHT gespeichert wird:**
- E-Mail-Adresse
- Benutzername
- Jegliche personenbezogenen Identifikationsdaten

**Aufbewahrungsfrist:** 7 Jahre ab dem Löschdatum (nach EU-Aufbewahrungsvorschriften erforderlich)

**Automatische Löschung:** Protokolleinträge, die älter als 7 Jahre sind, werden monatlich automatisch gelöscht.

**Rechtsgrundlage:** Rechtliche Verpflichtung (EU-Steuer- und Aufbewahrungsvorschriften)

### 8.4 Aufbewahrung von Sicherungen

**Sicherungsregelung:** Wir halten zur Wiederherstellung im Notfall rollierende Datenbanksicherungen über 7 Tage vor.

**Wichtig:** Wenn du dein Konto oder einzelne Flüge löschst, bleiben die gelöschten Daten bis zu 7 Tage lang in den Sicherungen erhalten. Nach Ablauf dieser Frist sind die Daten endgültig nicht mehr wiederherstellbar.

**Sofortige Löschung verlangen:** Brauchst du eine sofortige und vollständige Löschung deiner Daten (z. B. aufgrund einer gesetzlichen Anforderung oder eines Notfalls), kontaktiere uns, dann können wir die Daten manuell aus den jüngsten Sicherungen entfernen. Dieses Verfahren wird nur unter außergewöhnlichen Umständen angewendet.

### 8.5 Vollständiger Aufbewahrungsplan

Eine umfassende Übersicht über alle Aufbewahrungsfristen findest du in unserer ausführlichen [Richtlinie zur Datenaufbewahrung](/doc/data-retention-policy).

## 9. Deine Datenschutzrechte

Nach der DSGVO hast du in Bezug auf deine personenbezogenen Daten die folgenden Rechte:

### 9.1 Auskunftsrecht (Art. 15)

Du hast das Recht, Folgendes zu verlangen:
- eine Bestätigung, ob wir personenbezogene Daten von dir verarbeiten
- eine Kopie deiner personenbezogenen Daten
- Informationen darüber, wie wir deine Daten nutzen

**So übst du es aus:** Klick im Bereich **Konto** deines **Profils** auf **Daten exportieren**. Dadurch wird eine ZIP-Datei mit all deinen IGC-Dateien, nach Datum geordnet, erstellt, dazu eine strukturierte JSON-Datei mit deinem Profil, deinen Einstellungen, deinen Flugdatensätzen, den verknüpften Anmeldekonten und deinen Einwilligungsnachweisen.

### 9.2 Recht auf Berichtigung (Art. 16)

Du hast das Recht, unrichtige personenbezogene Daten berichtigen zu lassen.

**So übst du es aus:** Bearbeite deine Profilangaben in den Kontoeinstellungen. Die Richtigkeit der Flugdaten hängt von den hochgeladenen IGC-Dateien ab (lade bei Bedarf korrigierte Dateien hoch).

### 9.3 Recht auf Löschung („Recht auf Vergessenwerden“) (Art. 17)

Du hast das Recht, die Löschung deiner personenbezogenen Daten zu verlangen, wenn:
- die Daten für den ursprünglichen Zweck nicht mehr notwendig sind
- du deine Einwilligung widerrufst (bei einer Verarbeitung auf Grundlage einer Einwilligung)
- du der Verarbeitung widersprichst (und keine vorrangigen berechtigten Gründe vorliegen)
- die Daten unrechtmäßig verarbeitet wurden

**So übst du es aus:** Klick im Bereich **Konto** deines **Profils** auf **Konto löschen**, gib zur Bestätigung deine E-Mail-Adresse ein und klick dann auf **Mein Konto endgültig löschen**. Dein Konto und alle zugehörigen Daten werden sofort gelöscht.

**Was gelöscht wird:**
- Alle Kontoinformationen (E-Mail-Adresse, Name, Profil)
- Alle Flugdaten und GPS-Tracks
- Alle Einwilligungsnachweise
- Alle Sitzungsdaten

**Was aufbewahrt wird:**
- Pseudonymisierter Eintrag im Löschprotokoll (7 Jahre, keine personenbezogenen Identifikationsdaten)
- Daten in Sicherungen (bis zu 30 Tage, danach endgültig gelöscht)

**Ausnahmen:** Wir können bestimmte Daten aufbewahren, wenn dies gesetzlich vorgeschrieben ist oder berechtigten rechtlichen Zwecken dient (Einzelheiten zum Löschprotokoll in Abschnitt 8.3).

### 9.4 Recht auf Einschränkung der Verarbeitung (Art. 18)

Du hast das Recht zu verlangen, dass wir die Verarbeitung deiner Daten einschränken, wenn:
- du die Richtigkeit der Daten bestreitest
- die Verarbeitung unrechtmäßig ist, du aber die Löschung ablehnst
- wir die Daten nicht mehr benötigen, du sie aber zur Geltendmachung von Rechtsansprüchen brauchst
- du Widerspruch gegen die Verarbeitung eingelegt hast (solange noch nicht feststeht, ob berechtigte Gründe überwiegen)

**So übst du es aus:** Kontaktiere uns mit deinem konkreten Anliegen zur Einschränkung.

### 9.5 Recht auf Datenübertragbarkeit (Art. 20)

Du hast das Recht, deine personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.

**So übst du es aus:**
- **Flugdaten:** Nutze **Daten exportieren** in deinem **Profil**, um ein ZIP-Archiv mit all deinen IGC-Dateien herunterzuladen
- **Kontodaten:** Dasselbe Archiv enthält eine JSON-Datei (`data-export.json`) mit deinen Kontoinformationen, Einstellungen und Flugdatensätzen

### 9.6 Widerspruchsrecht (Art. 21)

Du hast das Recht, einer Verarbeitung zu widersprechen, die auf berechtigtem Interesse beruht oder der Direktwerbung dient.

**So übst du es aus:**
- **Community-Funktionen:** Schalte **Öffentliches Profil** unter **Privatsphäre** aus, damit du nicht in den Community-Funktionen angezeigt wirst
- **Sonstige Verarbeitung:** Kontaktiere uns mit deinem konkreten Widerspruch

### 9.7 Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3)

Beruht eine Verarbeitung auf einer Einwilligung, kannst du diese jederzeit widerrufen.

**So übst du es aus:**
- **OAuth-Authentifizierung:** Entziehe den Zugriff in den Sicherheitseinstellungen deines Google-Kontos
- **Öffentliches Profil:** Schalte **Öffentliches Profil** unter **Privatsphäre** in deinem **Profil** aus
- **Konto:** Lösche dein Konto, um alle Einwilligungen zu widerrufen

**Hinweis:** Der Widerruf berührt nicht die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung.

### 9.8 Recht auf Beschwerde (Art. 77)

Du hast das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen, insbesondere in:
- dem EU-Mitgliedstaat deines gewöhnlichen Aufenthaltsorts
- dem Mitgliedstaat deines Arbeitsplatzes
- dem Mitgliedstaat des Orts des mutmaßlichen Verstoßes

**Aufsichtsbehörden in der EU:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

Wir bitten dich, dich zuerst an uns zu wenden, damit wir uns direkt um dein Anliegen kümmern können.

### 9.9 Ausübung deiner Rechte

So übst du eines dieser Rechte aus:
1. Kontaktiere uns über die Angaben in Abschnitt 15
2. Mach ausreichende Angaben, damit wir deine Identität überprüfen können (wir können eine Bestätigung deiner E-Mail-Adresse anfordern)
3. Gib an, welche(s) Recht(e) du ausüben möchtest
4. Wir antworten innerhalb **eines Monats** (bei komplexen Anfragen um zwei Monate verlängerbar)

**Keine Gebühren:** Die Ausübung deiner Rechte ist kostenlos, es sei denn, Anfragen sind offenkundig unbegründet oder exzessiv.

## 10. Privatsphäre-Einstellungen und Kontrolle

### 10.1 Sichtbarkeit des Profils

Du entscheidest, ob dein Profil und deine Flüge für andere Nutzer sichtbar sind:

**Öffentliches Profil (Standard):**
- Deine Flüge erscheinen in den Community-Funktionen
- Dein Profil ist für andere Nutzer sichtbar
- Du erscheinst in Pilotenranglisten und Statistiken

**Privates Profil:**
- Deine Flüge sind nur für dich sichtbar
- Du erscheinst nicht in den Community-Ranglisten
- Du kannst weiterhin geheime Freigabelinks für einzelne Flüge erzeugen

**So änderst du es:** Öffne dein **Profil**, klick im Bereich **Konto** auf **Privatsphäre** und schalte **Öffentliches Profil** ein oder aus. Die Änderung gilt sofort.

### 10.2 Anzeigeeinstellungen

Du kannst anpassen:
- Sichtbarkeit der Spalten in der Flugtabelle
- Sortiereinstellungen
- Filter- und Sucheinstellungen
- Design der Oberfläche

Diese Einstellungen werden geräteübergreifend synchronisiert.

### 10.3 Datenexport

**Export in Eigenregie:**
- Öffne dein **Profil** und klick im Bereich **Konto** auf **Daten exportieren**
- Erstellt eine ZIP-Datei mit all deinen IGC-Dateien, nach Datum geordnet (Verzeichnisstruktur JJJJ/MM/TT)
- Enthält eine strukturierte JSON-Datei mit deinem Profil, deinen Einstellungen, deinen Flugdatensätzen, den verknüpften Anmeldekonten und deinen Einwilligungsnachweisen
- Enthält eine Liste aller Flüge, zu denen keine Datei gespeichert ist

## 11. Privatsphäre von Kindern

We-Fly richtet sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 16 Jahren.

Wenn du Elternteil oder Erziehungsberechtigter bist und glaubst, dass dein Kind uns personenbezogene Daten übermittelt hat:
- Kontaktiere uns umgehend über die Angaben in Abschnitt 15
- Wir löschen diese Informationen innerhalb von 30 Tagen aus unseren Systemen

## 12. Automatisierte Entscheidungsfindung und Profiling

Wir betreiben **keine**:
- automatisierte Entscheidungsfindung mit rechtlicher oder ähnlich erheblicher Wirkung (Art. 22 DSGVO)
- Profiling zu Marketing- oder kommerziellen Zwecken
- algorithmischen Entscheidungen, die deinen Zugang zu den Diensten beeinflussen

**Flugauswertung:** Wir nutzen zwar Algorithmen zur Auswertung von Flugdaten (Thermikerkennung, Wertung, Windanalyse), doch handelt es sich dabei um technische Berechnungen, die dein Nutzungserlebnis verbessern, und nicht um Profiling im Sinne der DSGVO.

## 13. Änderungen dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Folgendes abzubilden:
- Änderungen unseres Umgangs mit Daten
- neue Funktionen oder Dienste
- rechtliche oder regulatorische Anforderungen
- Rückmeldungen von Nutzern und bewährte Verfahren

**Benachrichtigung über Änderungen:**
- Wir aktualisieren das Datum „Zuletzt aktualisiert“ oben in dieser Erklärung
- Bei wesentlichen Änderungen benachrichtigen wir dich per E-Mail oder durch einen deutlich sichtbaren Hinweis auf unserer Plattform
- Nutzt du unseren Dienst nach Änderungen weiter, gilt dies als Annahme der neuen Erklärung

**Versionsverlauf:** Wir bewahren frühere Fassungen der Erklärung aus Gründen der Transparenz und der Compliance auf.

## 14. Rechtsrahmen und Compliance

Diese Datenschutzerklärung unterliegt:
- der **DSGVO**, Verordnung (EU) 2016/679, Datenschutz-Grundverordnung
- der **ePrivacy-Richtlinie** 2002/58/EG (in der geänderten Fassung)
- den anwendbaren nationalen Datenschutzgesetzen der EU-Mitgliedstaaten

**Grundsätze der Datenverarbeitung (Art. 5 DSGVO):**
- **Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz:** Wir verarbeiten Daten rechtmäßig, fair und nachvollziehbar
- **Zweckbindung:** Daten werden für festgelegte, eindeutige und legitime Zwecke erhoben
- **Datenminimierung:** Wir erheben nur Daten, die für unsere Zwecke angemessen und notwendig sind
- **Richtigkeit:** Wir halten personenbezogene Daten richtig und auf dem neuesten Stand
- **Speicherbegrenzung:** Daten werden nur so lange wie nötig aufbewahrt
- **Integrität und Vertraulichkeit:** Wir gewährleisten eine angemessene Sicherheit personenbezogener Daten
- **Rechenschaftspflicht:** Wir weisen die Einhaltung dieser Grundsätze nach

## 15. Kontakt

Wenn du Fragen zu dieser Datenschutzerklärung hast oder deine Rechte ausüben möchtest, kontaktiere uns:

**Verantwortlicher:** We-Fly
**E-Mail:** contact@we-fly.cloud
**Antwortzeit:** Wir bemühen uns, alle Anfragen innerhalb von 5 Werktagen zu beantworten

**Für Anfragen zur DSGVO:**
- Schreib „GDPR Request“ in die Betreffzeile
- Mach ausreichende Angaben, damit wir deine Identität überprüfen können
- Gib an, worum es geht (Auskunft, Löschung, Übertragbarkeit usw.)
- Wir antworten innerhalb eines Monats, wie es Art. 12 Abs. 3 DSGVO vorschreibt

---

## 16. Begriffsbestimmungen und Auslegung

**Personenbezogene Daten:** Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, E-Mail-Adresse, Standortdaten, Online-Kennung).

**Verarbeitung:** Jeder Vorgang im Zusammenhang mit personenbezogenen Daten, einschließlich Erhebung, Speicherung, Verwendung, Offenlegung oder Löschung.

**Verantwortlicher:** Die Stelle, die über die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet (We-Fly).

**Auftragsverarbeiter:** Eine Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet (z. B. der Hosting-Anbieter von MongoDB).

**Betroffene Person:** Die natürliche Person, auf die sich die personenbezogenen Daten beziehen (du, der Nutzer).

**Einwilligung:** Jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung, mit der die Verarbeitung personenbezogener Daten gebilligt wird.

**IGC-Datei:** Dateiformat der International Gliding Commission für GPS-Flugaufzeichnungen, das Trackpunkte und Metadaten enthält.

**OAuth:** Offener Standard für die Delegation von Zugriffsrechten, häufig für die Anmeldung über Drittanbieter (Google) genutzt.

---

**Kenntnisnahme:** Mit der Nutzung von We-Fly bestätigst du, dass du diese Datenschutzerklärung gelesen und verstanden hast und ihr zustimmst.

---

*Diese Datenschutzerklärung wurde zuletzt am 19. Dezember 2025 überprüft und freigegeben.*
