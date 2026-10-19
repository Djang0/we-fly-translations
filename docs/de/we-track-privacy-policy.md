---
title: Datenschutzerklärung von We-Track
description: Was die Fluginstrument-App We-Track mit deinen Daten macht und was dein Handy nie verlässt
category: Account & Data
order: 5
---

**Zuletzt aktualisiert:** 16. Oktober 2026

## 1. Wer wir sind

We-Track ist eine kostenlose Fluginstrument-App für Gleitschirmpiloten, für Android und iOS: Moving Map, Vario, Thermikassistent, Task-Navigation, Luftraumwarnungen und IGC-Flugaufzeichnung.

**Verantwortlicher:** Upsky, Belgien.
**Kontakt:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud) (schreib „We-Track privacy“ in den Betreff).

We-Track funktioniert für sich allein, ohne Konto. Die App kann sich auch mit **We-Fly** (we-fly.cloud) verbinden, einem eigenständigen Dienst für Flugbuch und Flugauswertung. Was We-Fly mit deinen Daten macht, sobald sie dort ankommen, regelt die [Datenschutzerklärung von We-Fly](https://we-fly.cloud/doc/privacy-policy).

## 2. Kurz gesagt

- Deine Flüge, deine Position und deine Einstellungen bleiben **auf deinem Handy**.
- Sie verlassen es nur für etwas, das du selbst angestoßen hast: die Synchronisierung mit We-Fly, wenn du angemeldet bist, das Laden von Kartenkacheln, das Laden eines Task-Codes, das Teilen einer Datei.
- Keine Analyse-Tools, keine Werbung, kein appübergreifendes Tracking, kein Profiling. Wir verkaufen und vermieten keine Daten.
- We-Track hat kein eigenes Konto und keinen eigenen Server, der Daten über dich sammelt.
- Die Herzfrequenz wird **nur dann, wenn du das einschaltest,** in deine Flugdateien geschrieben.

## 3. Daten auf deinem Handy

All das liegt im privaten Speicher der App. Andere Apps können es nicht lesen, und es ist **von Handy-Backups ausgenommen** (iCloud, Google, Geräteumzug). Der Nachteil: Flüge, die nicht zu We-Fly hochgeladen sind, gehen verloren, wenn du dein Handy verlierst oder die App deinstallierst.

| Daten | Was es ist | Wozu |
|---|---|---|
| Position | GPS-Position, Geschwindigkeit, Höhe, während die App genutzt wird | Karte, Navigation, Vario, Wind, Flugerkennung und Aufzeichnung |
| Flüge (IGC-Dateien) | Dein GPS-Track mit Zeiten und Höhen, Start und Landung, Pilotenname und Schirm (aus deinen Einstellungen oder deinem We-Fly-Profil), App-Version, Name des Betriebssystems (z. B. „android“ oder „ios 18“) und eine zufällige Kennung des Aufzeichnungsgeräts | Dein Flugbuch, die Dateien, die du teilst oder hochlädst |
| Instrumentendaten | Daten von Bluetooth-Instrumenten, die du verbindest, z. B. einem Vector Vario (Luftdruck, Fahrt, Temperatur, Luftfeuchtigkeit, Fluglage, Wind) | Im Flug angezeigt und in deine IGC-Dateien geschrieben |
| Herzfrequenz | Schläge pro Minute von einem Bluetooth-Brustgurt, den du verbindest | Im Flug angezeigt. Nur **mit deiner Einwilligung** in IGC-Dateien geschrieben (Abschnitt 6) |
| Einstellungen | Einheiten, Layouts, Schirm und Polare, Pilotenname, Audio- und Anzeigeeinstellungen | Damit die App so läuft, wie du sie eingerichtet hast |
| Tasks, Wegpunkte, Ziele | Tasks, die du lädst oder erstellst, Wegpunktsammlungen | Navigation |
| Lufträume und Karten | Luftraumdateien, die du importierst oder herunterlädst, Offline-Karten und Geländegebiete, die du herunterlädst | Warnungen und Karten ohne Netz |
| Bekannte Geräte | Name und Kennung der Bluetooth-Instrumente, die du gekoppelt hast | Erneutes Verbinden |
| Passwörter und Anmelde-Tokens | We-Fly-Anmelde-Tokens, Passwörter von Wettbewerbskonten, die du speichern lässt | Angemeldet bleiben |

Passwörter und Tokens liegen im sicheren Speicher des Handys (iOS-Schlüsselbund, Android Keystore). Sie werden nie in Einstellungsdateien, Logs oder Backups geschrieben. Unter iOS werden sie beim ersten Start nach einer Neuinstallation gelöscht.

In Release-Versionen führt die App keine Logs.

## 4. Berechtigungen, die wir anfragen

Wir fragen jede Berechtigung erst an, wenn du die Funktion, die sie braucht, zum ersten Mal nutzt.

- **Standort, während die App genutzt wird.** Um deine Position anzuzeigen, zu navigieren und deinen Flug aufzuzeichnen. Im Flug läuft die Aufzeichnung auch bei ausgeschaltetem Bildschirm weiter; währenddessen zeigt Android eine dauerhafte Benachrichtigung und iOS die blaue Standortanzeige. Wir fragen nie nach dem Standortzugriff „Immer“.
- **Bluetooth.** Um Instrumente zu verbinden (Varios, Herzfrequenz-Brustgurte). Unter Android ist der Bluetooth-Scan als nie zur Standortbestimmung genutzt deklariert.
- **Kamera.** Nur zum Scannen von Task-QR-Codes. Die Bilder werden auf dem Handy verarbeitet und nie gespeichert oder verschickt.
- **Benachrichtigungen** (Android). Für die Benachrichtigung, die während der Flugaufzeichnung angezeigt wird.
- **Bewegung und Fitness** (iOS). Um das Barometer des Handys für Höhe und Vertikalgeschwindigkeit auszulesen.

## 5. Was dein Handy verlässt, und an wen

### 5.1 We-Fly (nur wenn du dich anmeldest)

Die Anmeldung bei We-Fly ist freiwillig. We-Track meldet dich über die eigene Seite von We-Fly an; We-Track sieht dein We-Fly-Passwort nie und bekommt deine E-Mail-Adresse nicht. Sobald du angemeldet bist:

- **Flüge, die du aufzeichnest, werden nach der Landung automatisch** in dein We-Fly-Flugbuch hochgeladen, mit allem, was die IGC-Datei enthält (Abschnitt 3). Du kannst auch importierte Flüge hochladen.
- Deine We-Fly-Flüge, Tasks, Wegpunktsammlungen und Screen-Layouts werden in beide Richtungen synchronisiert.
- We-Track liest deinen Profilnamen (für den Pilotennamen in der IGC-Datei) und deine Freundesliste (für den Bildschirm „Freunde“).
- Wenn du Luftraumdaten herunterlädst, erfährt We-Fly das Gebiet, das du gewählt hast (ein Land oder ein Gebiet von 300 km um deine Position), um die passenden Lufträume zu schicken.
- We-Track schickt deine Live-Position **nicht** an We-Fly.

Du kannst dich jederzeit in den Einstellungen abmelden. Die Abmeldung widerruft die Anmeldung auch auf der Seite von We-Fly. Du kannst außerdem die auf dem Handy gespiegelten We-Fly-Daten löschen lassen; auf dem Handy aufgezeichnete Flüge werden durch die Abmeldung nie gelöscht. Um Daten zu löschen, die bei We-Fly gespeichert sind, nutze dein We-Fly-Profil (siehe die [Datenschutzerklärung von We-Fly](https://we-fly.cloud/doc/privacy-policy)).

### 5.2 Karten- und Geländeserver

Um Karten zu zeichnen, lädt die App Kartenbilder („Kacheln“) vom Anbieter der Basiskarte, die du wählst. Wie jede Website sehen diese Server deine IP-Adresse, den App-Namen und den Kartenausschnitt, den du dir ansiehst, und wissen damit ungefähr, wo du bist. Sie bekommen von uns weder ein Konto noch eine Kennung.

| Anbieter | Genutzt für |
|---|---|
| [OpenStreetMap Foundation](https://osmfoundation.org/wiki/Privacy_Policy) (tile.openstreetmap.org) | Basiskarte „We-Fly-Design“ |
| [OpenTopoMap](https://opentopomap.org/about) | Topografische Basiskarte |
| [Esri](https://www.esri.com/en-us/privacy/overview) (ArcGIS Online) | Satelliten-Basiskarte |
| [OpenFreeMap](https://openfreemap.org) | Gelände-Basiskarte und Offline-Karten |
| [Mapterhorn](https://mapterhorn.com) | Geländerelief und Geländehöhe, online und offline |

Offline-Gebiete, die du herunterlädst, kommen von OpenFreeMap und Mapterhorn; einmal heruntergeladen funktionieren diese Karten, ohne irgendwen zu kontaktieren.

### 5.3 XContest-Task-Codes

Wenn du einen XContest-Task-Code eingibst, wird der Code an tools.xcontest.org geschickt, um den Task abzurufen. Sonst werden keine Daten verschickt.

### 5.4 QR-Code-Scan unter Android (Google ML Kit)

Unter Android werden Task-QR-Codes mit Google ML Kit gelesen. Die Bilder werden auf dem Handy verarbeitet. Google ML Kit kann unabhängig von We-Track technische Daten darüber, wie der Scanner läuft, an Google schicken (zum Beispiel Leistungs- und Nutzungsstatistiken). Siehe [Google ML Kit terms and privacy](https://developers.google.com/ml-kit/terms).

### 5.5 Dateien, die du teilst

Wenn du eine IGC-Datei oder einen Task exportierst oder teilst, übergibt die App sie an das Teilen-Menü des Systems; du entscheidest, wohin sie geht.

## 6. Herzfrequenz

Die Herzfrequenz ist eine Gesundheitsangabe, die das europäische Recht besonders streng schützt.

- Die Herzfrequenzanzeige funktioniert immer, wenn ein Brustgurt verbunden ist, und wird nie gespeichert.
- Die Herzfrequenz wird nur dann in deine IGC-Flugdateien geschrieben, wenn du **Herzfrequenz in Flugdateien aufzeichnen** einschaltest und deine Einwilligung bestätigst. Standardmäßig ist das aus.
- Ist es eingeschaltet, wird die Herzfrequenz in deinen Flugdateien auf dem Handy gespeichert und, wenn du bei We-Fly angemeldet bist, mit deinen Flügen hochgeladen.
- Du kannst es jederzeit ausschalten. Danach aufgezeichnete Flüge enthalten keine Herzfrequenz mehr; bereits aufgezeichnete Flüge behalten sie, bis du sie aus deinem Flugbuch (und bei We-Fly) löschst.

## 7. Rechtsgrundlagen (DSGVO)

- **Bereitstellung der Funktionen, die du nutzt** (Art. 6 Abs. 1 lit. b): Flüge aufzeichnen, Karten, Synchronisierung mit We-Fly, wenn du angemeldet bist, Tasks laden.
- **Deine Einwilligung** (Art. 6 Abs. 1 lit. a und, für die Herzfrequenz, Art. 9 Abs. 2 lit. a): Herzfrequenz in Flugdateien. Du kannst sie jederzeit widerrufen; was vorher geschehen ist, bleibt davon unberührt.
- **Berechtigtes Interesse** (Art. 6 Abs. 1 lit. f): die technischen Daten, die Kartenserver brauchen, um Kartenkacheln zu schicken.

## 8. Wie lange Daten aufbewahrt werden

- **Auf deinem Handy:** bis du sie in der App löschst oder die App deinstallierst. In Backups wird nichts aufbewahrt.
- **Bei We-Fly:** wie in der [Datenschutzerklärung von We-Fly](https://we-fly.cloud/doc/privacy-policy) beschrieben.
- **Kartenserver, XContest, Google:** nach ihren eigenen Richtlinien (Abschnitt 5).

## 9. Sicherheit

- Nur privater App-Speicher, kein gemeinsamer Speicher.
- Verschlüsselte Verbindungen (HTTPS) für jede Netzwerkanfrage.
- Passwörter und Tokens im sicheren Speicher des Handys, nie in einfachen Dateien oder Logs.
- Die Anmeldung bei We-Fly nutzt OAuth mit PKCE: Die App bekommt dein We-Fly-Passwort nie in die Hände.

## 10. Übermittlungen außerhalb der Europäischen Union

Einige der in Abschnitt 5 genannten Anbieter können Daten außerhalb der Europäischen Union verarbeiten (zum Beispiel Esri und Google in den USA). Für die Schutzmaßnahmen, die sie anwenden, sind sie selbst verantwortlich; siehe ihre Richtlinien.

## 11. Deine Rechte

Du hast das Recht auf Auskunft, Berichtigung, Löschung und eine Kopie deiner personenbezogenen Daten, das Recht, der Verarbeitung zu widersprechen oder sie einschränken zu lassen, und das Recht, deine Einwilligung jederzeit zu widerrufen.

Die meisten deiner Daten erreichen uns nie: Du kannst sie direkt in der App ansehen, exportieren und löschen. Für Daten bei We-Fly nutze dein We-Fly-Profil oder kontaktiere We-Fly. Für alles andere schreib an [contact@we-fly.cloud](mailto:contact@we-fly.cloud). Wir antworten innerhalb eines Monats.

Du kannst außerdem Beschwerde bei der belgischen Datenschutzbehörde ([www.dataprotectionauthority.be](https://www.dataprotectionauthority.be)) oder bei der Behörde des Landes einlegen, in dem du lebst.

## 12. Kinder

We-Track ist nicht für Kinder unter 13 Jahren gedacht. Für die Synchronisierung mit We-Fly gilt das Mindestalter von We-Fly (siehe die [Datenschutzerklärung von We-Fly](https://we-fly.cloud/doc/privacy-policy)). Wenn du glaubst, dass uns ein Kind unter 13 Jahren personenbezogene Daten geschickt hat, kontaktiere uns, und wir löschen sie.

## 13. Änderungen

Wenn sich diese Erklärung ändert, aktualisieren wir das Datum oben und informieren dich bei wichtigen Änderungen in der App, bevor sie gelten.

## 14. Kontakt

**Verantwortlicher:** Upsky, Belgien
**E-Mail:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud), Betreff „We-Track privacy“
