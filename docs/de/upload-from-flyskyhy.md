---
title: Hochladen aus Flyskyhy
description: Schick Flüge direkt aus Flyskyhy auf deinem iPhone oder iPad zu We-Fly, richte einmal „Other Leonardo server“ ein, dann heißt es landen, tippen, eingetragen
category: Your Flights
order: 4
---

## Landen, tippen, eingetragen

Du bist gerade nach einem Knallerflug gelandet. Du bist noch voll aufgedreht, packst deinen Schirm zusammen, und der Flug wandert schon in dein We-Fly-Flugbuch, direkt vom Handy in deiner Tasche. Kein Kabel, kein Laptop, kein „Lad ich heute Abend hoch“, aus dem still und leise nächste Woche wird.

Wenn du mit **Flyskyhy** auf deinem iPhone oder iPad fliegst, kann es jetzt jeden Flug direkt nach der Landung an We-Fly übergeben. Wir haben We-Fly beigebracht, **Leonardo** zu sprechen, eine Sprache zum Hochladen von Flügen, die Flyskyhy schon kennt. Es bleibt also nur eine einmalige Einrichtung von fünf Minuten. Legen wir los.

> **Achtung:** Damit lädst du den **aufgezeichneten Track** eines Flugs hoch, den du geflogen bist (die `.igc`). Das ist kein Live-Tracking. Es ist die Art Upload nach dem Motto „erledigt, hier ist der Flug“.

---

## Zuerst: Hol dir dein Gerätepasswort (einmalig, in We-Fly)

Alles hängt an einem einzigen **Gerätepasswort**, das du in We-Fly erstellst. Stell es dir wie einen Zweitschlüssel vor, der nur für eine App nachgemacht wurde. Verlierst oder verkaufst du dein Handy, widerrufst du genau diesen Schlüssel, und sonst ändert sich nichts.

1. Geh zu **Profil → Verbundene Dienste** und such die Karte **„Instrument- und Cloud-Sync (WebDAV)“**.
2. Gib einen Gerätenamen ein, den du später wiedererkennst, zum Beispiel `iPhone - Flyskyhy`. Das ist *nur eine Bezeichnung für dich*; sie wird nirgendwohin gesendet, und Flyskyhy braucht sie nie.
3. Tippe auf **Erstellen**. Ein **Gerätepasswort** erscheint (es beginnt mit `wf_key_`).
4. **Kopier es sofort.** Es wird **nur einmal** angezeigt. Schließt du das Fenster, ohne zu kopieren, erstellst du einfach ein neues, kein Schaden entstanden. Erstellst du es am Laptop? Tippe auf **Aufs Handy scannen**, um es mit der Handykamera zu übernehmen, statt all die Zeichen abzutippen.

> **Du synchronisierst schon ein Vario über WebDAV?** Dann hast du bereits so ein Passwort. *Dasselbe* Gerätepasswort funktioniert auch für Flyskyhy. Du musst kein weiteres erstellen.

> **Du musst vollwertiges We-Fly-Mitglied sein**, also registriert und mit erteilter Einwilligung. Steckst du noch in der Phase vor der Einwilligung, schließ die erst ab, dann wird die Karte aktiv.

---

## Die drei Einstellungen, die Flyskyhy braucht

Was auch immer du sonst tust, Flyskyhy fragt immer nach denselben drei Dingen:

| Einstellung | Wert |
|---|---|
| **Submit URL** | `https://we-fly.cloud/api/leonardo/flight_submit.php` |
| **Username** | die E-Mail-Adresse deines We-Fly-Kontos |
| **Password** | das Gerätepasswort, das du gerade erstellt hast |

Kopier die drei, halt sie bereit, und du bist startklar.

---

## Schritt für Schritt in Flyskyhy

1. **Erstell dein Gerätepasswort** in We-Fly (siehe oben) und halt die drei Einstellungen griffbereit.

2. Geh in Flyskyhy zum Hochladen eines Flugs und wähl **„Other Leonardo server“**. Mit dieser Option richtest du die App auf einen eigenen Server aus: uns.

3. Füll die Angaben aus:
   - **Server name** → `We-Fly` (nur eine Bezeichnung, damit du ihn in der Liste wiedererkennst)
   - **Submit URL** → `https://we-fly.cloud/api/leonardo/flight_submit.php`
   - **Username** → deine We-Fly-E-Mail-Adresse
   - **Password** → dein Gerätepasswort

4. **Hochladen.** Flyskyhy schickt den Track hoch, und We-Fly erledigt den Rest: Der Flug landet in deinem Flugbuch, schon gewertet, auf der Karte und mit entschlüsselten Bärten. Dafür musst du keinen Finger rühren.

5. Ab jetzt steht **„Upload to We-Fly“** direkt in deinen Optionen zum Hochladen. Landen, tippen, fertig.

> **Profi-Tipp:** Der allererste Upload ist das „Hallo“. Danach ist jeder neue Flug nur einen Tipp entfernt. Gewöhn dir an, ihn abzuschicken, während du noch zusammenpackst, und dein Flugbuch hängt nie wieder hinterher.

---

## Gut zu wissen

- **Es werden nur `.igc`-Tracklogs angenommen.** Genau das schickt Flyskyhy, also musst du dir keine Gedanken machen.
- **Duplikate werden automatisch übersprungen**, erkannt am tatsächlichen Inhalt des Flugs. Zweimal auf Hochladen getippt? Letzte Woche schon von Hand hochgeladen? We-Fly zuckt nur mit den Schultern und sagt: „Den hab ich schon.“ Du kannst so oft hochladen, wie du willst. Nichts wird doppelt.
- **Es ist dein Flugbuch, wie immer.** Ein Flug, der aus Flyskyhy kommt, ist identisch mit einem, den du auf der Website hochlädst: Alle Karten, Statistiken und die XC-Wertung gelten automatisch.

---

## Fehlersuche / FAQ

**Flyskyhy sagt, Benutzername oder Passwort sind falsch.**
In neun von zehn Fällen ist es das Gerätepasswort: Weil es nur einmal angezeigt wird, kann ein verrutschtes Kopieren und Einfügen zuschlagen. Geh zurück zu **Profil → Verbundene Dienste → Instrument- und Cloud-Sync (WebDAV)**, tippe auf **Erstellen**, um ein neues zu bekommen, und füg es erneut in Flyskyhy ein. Dein Benutzername ist deine We-Fly-**E-Mail-Adresse**, kein Spitzname.

**Prüf die Submit URL noch einmal.**
Sie muss genau `https://we-fly.cloud/api/leonardo/flight_submit.php` lauten, mit `https://` am Anfang und `/flight_submit.php` am Ende. Ein fehlendes `s` oder ein Tippfehler am Ende ist der andere übliche Verdächtige.

**In meinem Flugbuch ist nichts aufgetaucht?**
Stell sicher, dass der Upload wirklich fertig ist (du hast Empfang), und lade dann deine [Flugseite](/flights) neu. Hat Flyskyhy Erfolg gemeldet, ist der Flug drin. Gib der Seite einen Moment, dann erscheint er.

**Ist mein Passwort sicher?**
Es ist ein **Passwort pro Gerät**, nicht dein Konto-Login. Es taugt nur zum Hinzufügen von Flügen, und du kannst es **jederzeit widerrufen**, auf derselben Karte unter Verbundene Dienste. Damit ist Flyskyhy sofort abgeklemmt, und alle anderen Geräte bleiben unberührt. Du verkaufst dein Handy? Erst widerrufen.

**Werden dabei Flüge gelöscht?**
Niemals. Damit werden nur Flüge *hinzugefügt*. Löschen tust du selbst, in der We-Fly-App, mit Absicht. Nichts, was Flyskyhy tut, kann einen Flug entfernen.

---

## Du fliegst nicht mit Flyskyhy?

Flyskyhy gibt es nur für iPhone und iPad. Auf einem **Android-Vario oder dem Air³** nimmst du stattdessen **[Dein Instrument automatisch synchronisieren](/doc/sync-instruments-webdav)**: dasselbe Gerätepasswort, dieselbe Idee, über WebDAV.

---

## Fahrwerk rein

Richte das einmal ein, und dein Flugbuch füllt sich praktisch von selbst. Fliegen, landen, tippen, und die Zahlen warten schon auf dich, bevor du deine Leinen aufgenommen hast. So soll es sein.

Blauen Himmel und volle Flugbücher. 🪂
