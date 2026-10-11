---
title: Donner à ton appli de synchro l’accès au dossier d’XCTrack
description: Android cache les traces d’XCTrack aux autres applis. Voici la méthode, deux minutes et parfaitement sûre, pour confier ce seul dossier à ton appli de synchro
category: Your Flights
order: 4
---

## Le dossier qui n’est pas là

Ton compte WebDAV est prêt, tu es à un champ de ne plus jamais importer un vol à la main, et là, l’appli de synchro te demande le **dossier local**. Tu cherches les traces d’XCTrack et… rien. `Android/data/…` reste vide, ou le sélecteur passe carrément à côté, comme un thermique qui dérive juste quand tu arrives dessous.

Tes vols sont bien là. Android refuse simplement qu’une autre appli y jette un œil tant que tu ne l’as pas autorisé. Voici comment l’autoriser. Deux minutes, une seule fois, et c’est réglé.

---

## Pourquoi Android le cache, et pourquoi c’est sûr

Depuis Android 11, les applis ne peuvent plus fouiller dans les dossiers des autres. C’est le **[stockage cloisonné](https://source.android.com/docs/core/storage/scoped)** (*scoped storage*) : chaque appli a son propre espace, et aller au-delà doit être accordé volontairement, par toi, un dossier à la fois. Les fichiers `.igc` d’XCTrack vivent justement dans ce genre d’espace protégé, et c’est pour ça que ton gestionnaire de fichiers fait comme s’ils n’existaient pas.

> **Tu ne contournes rien.** Pas de root, rien de désactivé, aucun réglage caché douteux. Tu utilises le mécanisme exactement comme il a été conçu : Android te demande, à toi, propriétaire du téléphone, de désigner **un dossier précis** et de confirmer. Une appli (ton appli de synchro) reçoit un dossier (les traces d’XCTrack), pas tes photos, pas tes messages, rien d’autre. Et tu peux reprendre cet accès à tout moment, depuis l’écran même où tu l’as accordé. Ciblé, volontaire, réversible.

---

## D’abord : vérifie où XCTrack enregistre vraiment tes traces

Neuf fois sur dix, c’est :

`/Android/data/org.xcontest.XCTrack/files/Tracklogs/`

Mais « neuf fois sur dix », ce n’est pas « toujours » : le chemin change selon l’appareil et la version d’XCTrack, et si tu as un jour déplacé tes traces sur une carte SD, elles sont ailleurs. Alors ne te fie pas à un chemin tout fait quand l’instrument est dans ta main : ouvre **XCTrack → À propos**, et lis la ligne **« Dossier de données XCTrack »** (*XCTrack data folder* sur un téléphone en anglais).

![L’écran À propos d’XCTrack affichant le chemin du dossier de données XCTrack /Android/data/org.xcontest.XCTrack/files](/pict/doc/permissions/about_xctrack.jpg)

> **Attention au dernier étage.** Cet écran montre le dossier de *données*. Tes traces sont un niveau plus bas, dans son sous-dossier **`Tracklogs`** : quoi que t’affiche l’écran À propos, ajoute `/Tracklogs` à la fin.

---

## Pas à pas, dans FolderSync

Les captures ci-dessous montrent FolderSync 4.12 sur un téléphone en français, donc les libellés sont ceux que tu verras ; l’anglais est indiqué entre parenthèses la première fois. Quelle que soit la langue de ton téléphone, les lignes sont aux mêmes endroits.

### Étape 1 : ouvre Autorisations

Dans FolderSync, ouvre le menu de l’appli (le panneau avec le numéro de version en haut) et touche **Autorisations** (*Permissions*).

![Menu de FolderSync 4.12 avec la ligne Autorisations entourée](/pict/doc/permissions/step_1.jpg)

### Étape 2 : ajoute un dossier défini par l’utilisateur

Descends jusqu’à **Autorisations de dossier ajoutées** (*Added folder permissions*) et touche **Ajouter un dossier défini par l’utilisateur** (*Add user-defined folder*).

![Écran Autorisations de FolderSync avec le bouton « Ajouter un dossier défini par l’utilisateur » entouré](/pict/doc/permissions/step_2.jpg)

Remarque ce qui se trouve juste au-dessus de ce bouton : **Révoquer les autorisations** (*Revoke permissions*). C’est ton retour arrière, bien en vue, avant même d’avoir accordé quoi que ce soit.

### Étape 3 : tape le chemin, puis choisis XCTrack

Une fenêtre te demande de saisir le chemin à la main. Donne-lui :

`Android/data/org.xcontest.XCTrack/files/Tracklogs`

…ou ce que ton écran À propos t’a affiché, plus `/Tracklogs`.

Le sélecteur de fichiers d’Android prend alors le relais et te demande de choisir un dossier. Dans le volet **Ouvrir à partir de** (*Open from*) à gauche, touche l’entrée **XCTrack**.

![Le volet « Ouvrir à partir de » d’Android avec le raccourci XCTrack entouré](/pict/doc/permissions/step_3.jpg)

### Étape 4 : utilise ce dossier

Tu arrives dans **Tracklogs**, face à tes vrais vols : des fichiers datés, un par décollage. C’est la preuve que tu es au bon endroit. Touche **UTILISER CE DOSSIER** (*USE THIS FOLDER*) et confirme la boîte de dialogue d’Android.

![Le dossier Tracklogs avec des fichiers de vol datés et le bouton « Utiliser ce dossier » entouré](/pict/doc/permissions/step_4.jpg)

Le plus dur est fait. De retour dans FolderSync, le dossier peut maintenant être choisi comme **dossier local** de ta paire de synchro : retourne sur **[Synchroniser automatiquement ton instrument](/doc/sync-instruments-webdav)** et termine la création de la paire.

---

## Si ça part de travers

**Le sélecteur semble vide, ou il n’y a pas de raccourci XCTrack.** C’est presque toujours une faute de frappe dans le chemin saisi à la main. Retourne sur l’écran À propos d’XCTrack, relis le dossier caractère par caractère, et n’oublie pas le `Tracklogs` à la fin.

**Ton téléphone formule les choses autrement.** Les fabricants adorent renommer les boutons : tu verras peut-être « Autoriser l’accès au dossier XCTrack » ou quelque chose dans le genre. Le déroulé est identique : trouver le dossier, confirmer l’accès.

**Tu utilises une autre appli de synchro.** DAVx5, RoundSync, la famille Autosync : même limitation d’Android, même solution. Cherche leur équivalent de « ajouter une autorisation de dossier » ou « accorder l’accès à un dossier ». Une fois le sélecteur ouvert, tu es en terrain connu, parce que cet écran appartient à Android, pas à l’appli.

**Tes traces sont sur une carte SD.** Oublie le chemin défini par l’utilisateur et utilise plutôt **Ajouter un stockage USB** (*Add USB storage*), le bouton juste au-dessus, prévu exactement pour ça.

---

## Roues rentrées

Une autorisation, deux minutes, et ton téléphone arrête de faire comme si tes vols n’existaient pas. Ensuite, place au meilleur : voler, se poser, se connecter au Wi-Fi, et retrouver la trace déjà rangée dans ton carnet de vol.

Merci à Gabriel, qui a trouvé la solution sur son propre téléphone et a partagé les captures pour qu’on n’ait pas à le faire nous-mêmes.

Bons vols, et des carnets bien remplis. 🪂
