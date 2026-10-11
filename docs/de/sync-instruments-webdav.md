---
title: Dein Instrument automatisch synchronisieren
description: Schick Flüge von deinem Air³, Vario oder Handy per WebDAV direkt zu We-Fly, ohne Kabel und ohne manuelles Hochladen
category: Your Flights
order: 4
---

## Landen, ins WLAN, fertig

Stell dir vor: Du klinkst dich am Landeplatz aus, noch ganz aufgedreht vom letzten Abendthermik-Bart, und bis du den Schirm gepackt hast, liegt dein Track schon in We-Fly: gewertet, auf der Karte, Thermik ausgewertet. Kein Kabel. Kein „Ich lad's heute Abend hoch“, aus dem nächste Woche wird. Kein Suchen in Ordnern auf dem Handy.

Das ist **Instrument- und Cloud-Sync (WebDAV)**. Einmal einrichten, und dein Gerät reicht jeden neuen Flug still und leise an dein Flugbuch weiter, sobald du wieder im WLAN bist. Das ist die Doku, die du einmal liest, und danach fasst du deine Flüge nie wieder von Hand an.

Der Star der Show ist das **Air³** (das Android-Vario mit XCTrack), aber derselbe Trick klappt mit jedem Android-Handy und jedem WebDAV-fähigen Instrument. Verkabeln wir das Ganze.

---

## Zuerst: Hol dir dein Gerätepasswort (einmalig, in We-Fly)

Alles hängt an einem einzigen **Gerätepasswort**, das du in We-Fly erstellst. Stell es dir wie einen Zweitschlüssel vor, der nur für ein Instrument nachgemacht wurde. Verlierst oder verkaufst du das Gerät, widerrufst du genau diesen Schlüssel, und sonst ändert sich nichts.

1. Geh zu **Profil → Verbundene Dienste** und such die Karte **„Instrument- und Cloud-Sync (WebDAV)“**.
2. Gib einen Gerätenamen ein, den du später wiedererkennst, zum Beispiel `Air³` oder `Altes Ersatz-Vario`.
3. Tippe auf **Erstellen**. Ein **Gerätepasswort** erscheint.
4. **Kopier es sofort.** Am besten direkt, aber wenn du wegklickst, ist es nicht verloren: Jedes Passwort lässt sich **in seiner Gerätezeile erneut kopieren** (das kleine Kopiersymbol daneben), solange du diesen **Browser-Tab** offen lässt. Den Dialog erneut öffnen oder sogar die Seite neu laden ist kein Problem. Der Kopierknopf ist weiterhin da. Er verschwindet erst, wenn du **den Tab schließt**, denn We-Fly speichert nur eine unkenntlich gemachte Fassung (einen Hash), nie das Passwort selbst. Passiert das, ist es kein Drama: Erstell einfach ein neues.

Auf derselben Karte stehen auch die beiden anderen Einstellungen, die du brauchst, jeweils mit eigenem Kopierknopf. So musst du nichts davon aus dem Gedächtnis abtippen.

> **Du musst vollwertiges We-Fly-Mitglied sein**, also registriert und mit erteilter Einwilligung. Steckst du noch in der Phase vor der Einwilligung, schließ die erst ab, dann wird die Karte aktiv.

---

## Die drei Einstellungen, die jedes Gerät braucht

Egal welche App oder welches Instrument du auf We-Fly ausrichtest, es fragt immer nach denselben drei Dingen:

| Einstellung | Wert |
|---|---|
| **Server-URL** | `https://we-fly.cloud/api/webdav` |
| **Benutzername** | die E-Mail-Adresse deines We-Fly-Kontos |
| **Passwort** | das Gerätepasswort, das du gerade erstellt hast |

Das ist der ganze Handschlag. Kopier die drei, halt sie bereit, und du bist startklar für jede WebDAV-App auf diesem Planeten.

---

## Die Hauptnummer: Air³ / Android + XCTrack

Jetzt kommt der schöne Teil. XCTrack speichert jeden Flug sowieso als `.igc`-Tracklog in einem Ordner auf deinem Gerät. Wir setzen nur einen kleinen Roboter auf diesen Ordner, der sagt: „Neue Datei? Hoch damit.“ Einrichten und vergessen.

### Schritt für Schritt

1. **Erstell dein Gerätepasswort** in We-Fly (siehe oben). Halt die drei Einstellungen griffbereit.

2. **Installier eine WebDAV-Sync-App** aus dem Play Store. Jede dieser Apps macht den Job gut. Nimm die, die dir optisch am besten gefällt:
   - **FolderSync**
   - **DAVx5**
   - **RoundSync** (oder eine vergleichbare App im Stil von Autosync)

   Das sind alles Tools zum Synchronisieren von Ordnern; keine davon ist „offiziell“, sie sprechen nur alle fließend WebDAV.

3. **Füge in der App ein neues WebDAV-Konto bzw. einen neuen Remote hinzu.** Trag ein:
   - **Server-URL** → `https://we-fly.cloud/api/webdav`
   - **Benutzername** → deine We-Fly-E-Mail-Adresse
   - **Passwort** → dein Gerätepasswort

   Die meisten Apps haben einen Knopf „Verbindung testen“. Tippe darauf, dann sollte es grünes Licht geben.

4. **Leg ein Sync-Paar an** (manche Apps nennen es Ordnerpaar):
   - **Lokaler Ordner** → wo XCTrack deine `.igc`-Tracklogs ablegt, meistens `/Android/data/org.xcontest.XCTrack/files/Tracklogs/`. Die Pfade weichen je nach Gerät und Version etwas ab, verlass dich also lieber auf „den Ordner mit deinen `.igc`-Dateien“ als auf einen fest eingetippten Pfad.
   - **Remote-Ordner** → die WebDAV-Verbindung, die du gerade angelegt hast.

   > **Ab Android 11 ist dieser Ordner vor normalen Dateiauswahlen versteckt**. Deine Sync-App tut so, als wäre er leer. Das ist Scoped Storage, der seinen Job macht, kein Bug, und es gibt eine saubere Lösung in zwei Minuten: **[Gib deiner Sync-App Zugriff auf den XCTrack-Ordner](/doc/xctrack-folder-permission)**. Mach den Abstecher und komm dann hierher zurück.

5. **Stell die Richtung auf einseitig, Handy → We-Fly** (nur Upload). We-Fly ist das Ziel, kein Spiegel in beide Richtungen. Dein Gerät schiebt Flüge hoch und holt nie etwas herunter. Dann schalte **Auto-Sync** ein: bei neuer Datei oder im WLAN nach der Landung, je nachdem, was deine App anbietet.

6. **Fliegen. Landen. Ins WLAN.** Sobald du online bist, steigt dein Track von selbst zu We-Fly auf. Öffne dein Flugbuch, und da ist er: gewertet, auf der Karte, Thermik entschlüsselt. Pack deinen Schirm.

> **Profi-Tipp:** Lass Auto-Sync im WLAN statt über mobile Daten auslösen, dann danken es dir der Akku im Rückholbus (und dein Datentarif). Deine Tracks warten geduldig und landen in der Sekunde, in der du im WLAN der Unterkunft bist.

---

## Andere Instrumente und Computer

WebDAV ist eine universelle Sprache, deshalb funktionieren dieselben drei Einstellungen weit über das Air³ hinaus.

**Andere WebDAV-fähige Instrumente** (ein Skytraxx, ein Android-Gerät im Stil des Oudie, alles, was WebDAV spricht) richtest du genauso ein: Konto mit Server-URL, deiner E-Mail-Adresse und dem Gerätepasswort hinzufügen und dann auf den Ordner zeigen, in dem die `.igc`-Dateien liegen.

**Dein Computer**. Du kannst dieselbe URL als Netzlaufwerk einbinden und Dateien einfach hineinziehen:
- **Windows** → *Netzlaufwerk verbinden* → Server-URL einfügen, mit E-Mail-Adresse und Gerätepasswort anmelden.
- **macOS** → Finder → *Gehe zu → Mit Server verbinden* → gleiche URL und Zugangsdaten.
- **Linux** → über deinen Dateimanager oder `davfs2` einbinden.

Ziehst du dann `.igc`-Dateien auf dieses Laufwerk, werden sie zu We-Fly hochgeladen. Praktisch, um den Rückstau auf einer alten SD-Karte abzuarbeiten.

---

## Gut zu wissen

- **Nur `.igc`-Dateien werden angenommen.** Alles andere, was das Gerät hochschieben will, wird höflich ignoriert: keine Fehler, kein Durcheinander. Es macht also nichts, wenn in deinem Tracklog-Ordner noch irgendwelche Konfigurations- oder Logdateien herumliegen.
- **Duplikate werden automatisch übersprungen**, erkannt am tatsächlichen Inhalt der Datei. Du kannst denselben Ordner tausendmal synchronisieren, es entsteht nie ein einziger doppelter Flug. Deshalb kannst du es bedenkenlos für immer laufen lassen.
- **Im Prinzip ist es reiner Upload.** Das Gerät schiebt Flüge hoch; es greift nie zurück, um etwas zu ändern oder zu löschen. Willst du einen Flug löschen? Mach das in der We-Fly-App, nie vom Gerät aus.

---

## Fehlersuche / FAQ

**In meinem Flugbuch ist nichts aufgetaucht?**
Geh die üblichen Verdächtigen durch: Bist du wirklich im WLAN (oder wo auch immer dein Sync auslösen soll)? Ist der Sync-Auftrag tatsächlich gelaufen (schau ins Log der App)? Und ist die Datei ein echter `.igc`-Tracklog und keine halb geschriebene oder umbenannte Datei? In neun von zehn Fällen ist es eins von diesen dreien.

**Kann ich mein ganzes altes Archiv synchronisieren?**
Na klar. Richte einmal ein Sync-Paar auf deinen kompletten Archivordner ein, lass es durchlaufen, und jeder alte Track landet in We-Fly. Weil Duplikate am Inhalt erkannt und übersprungen werden, besteht null Risiko für Doppelte, selbst wenn einige dieser Flüge schon in deinem Flugbuch sind.

**Ist mein Passwort sicher?**
Es ist ein **Passwort pro Gerät**, nicht dein Konto-Login. Es taugt nur zum Hochladen von `.igc`-Dateien, und du kannst es **jederzeit widerrufen**, auf derselben Karte unter Verbundene Dienste. Widerrufen kappt genau dieses eine Gerät sofort und lässt alle anderen Geräte unberührt. Du verkaufst dein Air³? Erst widerrufen.

**Löscht das irgendwelche meiner Flüge?**
Nein. Der Sync ist einseitig und reiner Upload. Gelöscht wird **nur** in der We-Fly-App, absichtlich und von dir. Nichts, was dein Instrument tut, kann einen Flug entfernen.

---

## Soll XCTrack das einfach selbst erledigen? Stimm dafür

Die Kombination aus WebDAV und Sync-App oben funktioniert heute schon wunderbar, aber mal ehrlich, der Traum ist noch einfacher: XCTrack lädt direkt nach der Landung zu We-Fly hoch, genau wie es das mit dem eingebauten Auto-Upload zu XContest schon tut. Keine App dazwischen, keine Ordnerpaare zum Einrichten. Du landest, es ist erledigt. Null Apps.

Gute Nachricht: Es gibt einen **offiziellen Feature-Request an die XCTrack-Entwickler, der genau das fordert.** Und das Entscheidende: Stimmen von Piloten bewegen wirklich etwas. Je mehr von uns dafür stimmen, desto eher klettert er in der Prioritätenliste nach oben und wird tatsächlich umgesetzt. Also machen wir etwas Lärm; jede Stimme zählt.

Dauert etwa eine Minute:

1. Öffne den Request: [gitlab.com/xcontest-public/xctrack-public/-/work_items/1293](https://gitlab.com/xcontest-public/xctrack-public/-/work_items/1293)
2. **Melde dich bei GitLab an**: ein kostenloses Konto, schnell angelegt, falls du noch keins hast (zum Abstimmen musst du angemeldet sein).
3. Klick im Issue auf die **👍-Reaktion (Daumen hoch)**, um deine Stimme abzugeben. Das war's. Du hast abgestimmt.

Wird es umgesetzt, schrumpft diese ganze Doku gewaltig. Helfen wir mit, dass es klappt.

---

## Abflug

Einmal einrichten, und dein Flugbuch füllt sich praktisch von selbst. Fliegen, landen, verbinden, und die Zahlen warten auf dich, bevor du deine Leinen aufgenommen hast. So soll es sein.

Allzeit gute Thermik und volle Flugbücher. 🪂
