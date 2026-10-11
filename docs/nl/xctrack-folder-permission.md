---
title: Laat je sync-app de map van XCTrack zien
description: Android verbergt de tracklogs van XCTrack voor andere apps. Zo geef je die ene map in twee minuten, volkomen veilig, aan je sync-app
category: Your Flights
order: 4
---

## De map die er niet is

Je WebDAV-account staat klaar, je bent nog één veld verwijderd van nooit meer een vlucht met de hand uploaden, en dan vraagt de sync-app naar de **lokale map**. Je gaat op zoek naar de tracklogs van XCTrack en... niets. `Android/data/…` is leeg of de bestandskiezer slaat hem gewoon over, als een thermiek die wegdrijft net als jij aankomt.

Je vluchten staan er wel degelijk. Android laat een andere app er alleen niet in kijken tot jij het toestaat. Zo sta je het toe. Twee minuten, één keer, en daarna nooit meer.

---

## Waarom Android de map verbergt, en waarom dit veilig is

Sinds Android 11 mogen apps niet meer in elkaars mappen snuffelen. Dat is **[scoped storage](https://source.android.com/docs/core/storage/scoped)**: elke app krijgt zijn eigen ruimte, en daarbuiten kijken moet bewust worden toegestaan, door jou, map per map. De `.igc`-bestanden van XCTrack staan precies in zo'n beschermde ruimte, en daarom doet je bestandsbeheerder alsof ze niet bestaan.

> **Je omzeilt niets.** Geen root, niets uitgeschakeld, geen louche verborgen instelling. Je gebruikt het mechanisme precies zoals het bedoeld is: Android vraagt jou, de eigenaar van de telefoon, om **één bepaalde map** aan te wijzen en te bevestigen. Eén app (je sync-app) krijgt één map (de tracklogs van XCTrack), niet je foto's, niet je berichten, niets anders. En je kunt het op elk moment intrekken, vanuit hetzelfde scherm waar je het toestond. Beperkt, bewust, omkeerbaar.

---

## Eerst: kijk waar XCTrack je tracklogs echt opslaat

Negen keer op tien is het:

`/Android/data/org.xcontest.XCTrack/files/Tracklogs/`

Maar „negen keer op tien“ is niet „altijd“: het pad verschilt per toestel en per versie van XCTrack, en als je je tracklogs ooit naar een SD-kaart hebt verplaatst, staan ze helemaal ergens anders. Vertrouw dus niet op een vast pad terwijl je het instrument gewoon in je hand hebt: open **XCTrack → About** en lees de regel **„XCTrack data folder“** (*Dossier de données XCTrack* op een Franse telefoon).

![Het scherm About van XCTrack met het pad van de XCTrack data folder /Android/data/org.xcontest.XCTrack/files](/pict/doc/permissions/about_xctrack.jpg)

> **Let op de laatste stap.** Dat scherm toont de *data*map. Je tracklogs staan één niveau dieper, in de submap **`Tracklogs`**, dus wat het scherm About ook zegt, plak er `/Tracklogs` achter.

---

## Stap voor stap, in FolderSync

De screenshots hieronder komen van FolderSync 4.12 op een Franse telefoon, dus bij elk label staat de eerste keer het Frans tussen haakjes. In welke taal je telefoon ook staat, de regels staan op dezelfde plaats.

### Stap 1: open Permissions

Open in FolderSync het app-menu (het paneel met het versienummer bovenaan) en tik op **Permissions** (*Autorisations*).

![App-menu van FolderSync 4.12 met de regel Permissions omcirkeld](/pict/doc/permissions/step_1.jpg)

### Stap 2: voeg een zelfgekozen map toe

Scrol naar **Added folder permissions** (*Autorisations de dossier ajoutées*) en tik op **Add user-defined folder** (*Ajouter un dossier défini par l'utilisateur*).

![Het scherm Permissions van FolderSync met de knop „Add user-defined folder“ omcirkeld](/pict/doc/permissions/step_2.jpg)

Kijk wat er net boven die knop staat: **Revoke permissions** (*Révoquer les autorisations*). Dat is je herstelknop, in het volle zicht, nog voor je iets hebt toegestaan.

### Stap 3: typ het pad en kies XCTrack

Er verschijnt een vak waarin je het pad met de hand moet typen. Geef dit in:

`Android/data/org.xcontest.XCTrack/files/Tracklogs`

…of wat je scherm About toonde, plus `/Tracklogs`.

Daarna neemt de bestandskiezer van Android het over en vraagt je een map te kiezen. Tik in de lade **Open from** (*Ouvrir à partir de*) links op **XCTrack**.

![De lade „Open from“ van Android met de snelkoppeling XCTrack omcirkeld](/pict/doc/permissions/step_3.jpg)

### Stap 4: gebruik deze map

Je komt terecht in **Tracklogs** en kijkt naar je echte vluchten: bestanden met een datum, één per start. Dat is je bevestiging dat je op de juiste plek zit. Tik op **USE THIS FOLDER** (*UTILISER CE DOSSIER*) en bevestig het venster van Android.

![De map Tracklogs met vluchtbestanden met een datum, en de knop „Use this folder“ omcirkeld](/pict/doc/permissions/step_4.jpg)

Het moeilijkste is gedaan. Terug in FolderSync kun je de map nu kiezen als **lokale map** van je sync-paar, dus ga terug naar **[Je instrument automatisch synchroniseren](/doc/sync-instruments-webdav)** en maak het paar af.

---

## Als het misloopt

**De bestandskiezer lijkt leeg, of er is geen snelkoppeling XCTrack.** Bijna altijd een typfout in het pad dat je met de hand intypte. Ga terug naar het scherm About van XCTrack, lees de map nog eens letter per letter en vergeet `Tracklogs` op het einde niet.

**Je telefoon zegt het anders.** Fabrikanten hernoemen graag knoppen: je krijgt misschien „Allow access to XCTrack folder“ of iets in die geest. De stappen zijn dezelfde: zoek de map, bevestig de toegang.

**Je gebruikt een andere sync-app.** DAVx5, RoundSync, de Autosync-familie: dezelfde beperking van Android, dezelfde oplossing. Zoek hun versie van „add folder permission“ of „grant folder access“. Zodra de bestandskiezer opent, ben je op bekend terrein, want dat scherm hoort bij Android, niet bij de app.

**Je tracklogs staan op een SD-kaart.** Sla het zelfgekozen pad over en gebruik in de plaats **Add USB storage** (*Ajouter un stockage USB*), de knop er net boven, precies daarvoor gemaakt.

---

## Wielen omhoog

Eén toestemming, twee minuten, en je telefoon doet niet langer alsof je vluchten niet bestaan. Dan terug naar het leuke deel: vliegen, landen, verbinden met wifi, en de track staat al in je logboek.

Met dank aan Gabriel, die dit op zijn eigen telefoon uitzocht en de screenshots deelde, zodat de rest van ons dat niet hoeft te doen.

Blue skies en volle logboeken. 🪂
