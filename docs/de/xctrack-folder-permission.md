---
title: Gib deiner Sync-App Zugriff auf den XCTrack-Ordner
description: Android versteckt die Tracklogs von XCTrack vor anderen Apps. So gibst du genau diesen einen Ordner in zwei Minuten und völlig sicher für deine Sync-App frei
category: Your Flights
order: 4
---

## Der Ordner, der nicht da ist

Dein WebDAV-Konto ist eingerichtet, du bist nur noch ein Feld davon entfernt, nie wieder einen Flug von Hand hochzuladen, und dann fragt die Sync-App nach dem **lokalen Ordner**. Du suchst die Tracklogs von XCTrack und … nichts. `Android/data/…` ist entweder leer oder die Dateiauswahl springt glatt daran vorbei, wie ein Bart, der genau dann versetzt, wenn du ankommst.

Deine Flüge sind ganz sicher da drin. Android lässt nur keine andere App hineinschauen, bis du es erlaubst. So erlaubst du es. Zwei Minuten, einmal, und nie wieder.

---

## Warum Android ihn versteckt und warum das hier sicher ist

Seit Android 11 dürfen Apps nicht mehr in den Ordnern anderer Apps herumwühlen. Das ist **[Scoped Storage](https://source.android.com/docs/core/storage/scoped)**: Jede App bekommt ihren eigenen Bereich, und alles darüber hinaus musst du bewusst freigeben, selbst und Ordner für Ordner. Die `.igc`-Dateien von XCTrack liegen genau in so einem geschützten Bereich, deshalb tut dein Dateimanager so, als gäbe es sie nicht.

> **Du umgehst hier gar nichts.** Kein Root, nichts deaktiviert, keine dubiose versteckte Einstellung. Du nutzt den Mechanismus genau so, wie er gedacht ist: Android bittet dich, den Besitzer des Handys, auf **einen bestimmten Ordner** zu zeigen und das zu bestätigen. Eine App (deine Sync-App) bekommt einen Ordner (die Tracklogs von XCTrack), nicht deine Fotos, nicht deine Nachrichten, sonst nichts. Und du kannst die Freigabe jederzeit zurücknehmen, auf demselben Bildschirm, auf dem du sie erteilt hast. Eng begrenzt, bewusst, umkehrbar.

---

## Zuerst: Prüf, wo XCTrack deine Tracklogs wirklich speichert

In neun von zehn Fällen ist es:

`/Android/data/org.xcontest.XCTrack/files/Tracklogs/`

Aber „neun von zehn“ heißt nicht „immer“: Der Pfad ändert sich je nach Gerät und XCTrack-Version, und wenn du deine Tracklogs je auf eine SD-Karte verschoben hast, liegen sie ganz woanders. Verlass dich also nicht auf einen fest eingetippten Pfad, wenn du das Instrument direkt in der Hand hast: Öffne **XCTrack → About** und lies die Zeile **„XCTrack data folder“** (auf einem deutschen Handy entsprechend auf Deutsch, auf einem französischen *Dossier de données XCTrack*).

![About-Bildschirm von XCTrack mit dem Pfad des XCTrack-Datenordners /Android/data/org.xcontest.XCTrack/files](/pict/doc/permissions/about_xctrack.jpg)

> **Achte auf den letzten Schritt.** Dieser Bildschirm zeigt den *Daten*ordner. Deine Tracklogs liegen eine Ebene tiefer, im Unterordner **`Tracklogs`**. Was auch immer der About-Bildschirm anzeigt, häng `/Tracklogs` hinten dran.

---

## Die Anleitung in FolderSync

Die Screenshots unten zeigen FolderSync 4.12 auf einem französischen Handy, deshalb steht bei jeder Beschriftung beim ersten Mal die französische Fassung in Klammern. Egal in welcher Sprache dein Handy läuft, die Zeilen sitzen an denselben Stellen.

### Schritt 1: Permissions öffnen

Öffne in FolderSync das App-Menü (das Panel mit der Versionsnummer oben) und tippe auf **Permissions** (*Autorisations*).

![App-Menü von FolderSync 4.12 mit eingekreister Zeile Permissions](/pict/doc/permissions/step_1.jpg)

### Schritt 2: Einen benutzerdefinierten Ordner hinzufügen

Scroll nach unten zu **Added folder permissions** (*Autorisations de dossier ajoutées*) und tippe auf **Add user-defined folder** (*Ajouter un dossier défini par l'utilisateur*).

![Bildschirm Permissions in FolderSync mit eingekreistem Knopf „Add user-defined folder“](/pict/doc/permissions/step_2.jpg)

Schau mal, was direkt über diesem Knopf steht: **Revoke permissions** (*Révoquer les autorisations*). Das ist dein Rückgängig-Knopf, gut sichtbar, noch bevor du überhaupt etwas freigegeben hast.

### Schritt 3: Pfad eintippen, dann XCTrack wählen

Ein Feld erscheint, in das du den Pfad von Hand eintippen sollst. Gib ein:

`Android/data/org.xcontest.XCTrack/files/Tracklogs`

… oder was auch immer dein About-Bildschirm angezeigt hat, plus `/Tracklogs`.

Danach übernimmt die Dateiauswahl von Android und bittet dich, einen Ordner zu wählen. Tippe in der Leiste **Open from** (*Ouvrir à partir de*) links auf den Eintrag **XCTrack**.

![Leiste „Open from“ von Android mit eingekreister Verknüpfung XCTrack](/pict/doc/permissions/step_3.jpg)

### Schritt 4: Diesen Ordner verwenden

Du landest im Ordner **Tracklogs** und siehst deine echten Flüge vor dir, Dateien mit Datum, eine pro Start. Das ist deine Bestätigung, dass du am richtigen Ort bist. Tippe auf **USE THIS FOLDER** (*UTILISER CE DOSSIER*, auf einem deutschen Handy *DIESEN ORDNER VERWENDEN*) und bestätige den Android-Dialog.

![Der Ordner Tracklogs mit datierten Flugdateien und eingekreistem Knopf „Use this folder“](/pict/doc/permissions/step_4.jpg)

Damit ist der schwierige Teil geschafft. Zurück in FolderSync lässt sich der Ordner jetzt als **lokaler Ordner** deines Sync-Paars auswählen. Geh also zurück zu **[Dein Instrument automatisch synchronisieren](/doc/sync-instruments-webdav)** und leg das Paar fertig an.

---

## Wenn es schiefgeht

**Die Dateiauswahl ist leer oder es gibt keine Verknüpfung zu XCTrack.** Fast immer ein Tippfehler im Pfad, den du von Hand eingegeben hast. Geh zurück zum About-Bildschirm von XCTrack, lies den Ordner nochmal Zeichen für Zeichen und vergiss das `Tracklogs` am Ende nicht.

**Dein Handy formuliert es anders.** Hersteller benennen Knöpfe gern um: Vielleicht steht da „Zugriff auf den XCTrack-Ordner erlauben“ oder etwas in der Art. Der Ablauf ist identisch: Ordner finden, Freigabe bestätigen.

**Du nutzt eine andere Sync-App.** DAVx5, RoundSync, die Autosync-Familie: dieselbe Android-Einschränkung, dieselbe Lösung. Such nach ihrer Variante von „Ordnerberechtigung hinzufügen“ oder „Ordnerzugriff erteilen“. Sobald sich die Dateiauswahl öffnet, bist du auf vertrautem Terrain, denn dieser Bildschirm gehört zu Android, nicht zur App.

**Deine Tracklogs liegen auf einer SD-Karte.** Lass den benutzerdefinierten Pfad weg und nimm stattdessen **Add USB storage** (*Ajouter un stockage USB*), den Knopf direkt darüber, der genau dafür gedacht ist.

---

## Abflug

Eine Freigabe, zwei Minuten, und dein Handy hört auf so zu tun, als gäbe es deine Flüge nicht. Dann geht's zurück zum schönen Teil: fliegen, landen, ins WLAN, und der Track liegt schon in deinem Flugbuch.

Danke an Gabriel, der das auf seinem eigenen Handy herausgefunden und die Screenshots geteilt hat, damit wir anderen es nicht müssen.

Allzeit gute Thermik und volle Flugbücher. 🪂
