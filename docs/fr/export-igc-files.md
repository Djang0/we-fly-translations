---
title: Exporter tes fichiers IGC
description: Comment récupérer tes fichiers IGC depuis les plateformes et les instruments les plus courants
category: Your Flights
order: 3
---

## Tes vols sont déjà quelque part : ramenons-les à la maison

Tu déclares déjà sur XContest ou DHV-XC, ou tu as des années de traces qui dorment sur ton Syride ? Pas besoin de tout revoler. Voici comment extraire ces fichiers IGC de là où ils se cachent et les faire entrer dans We-Fly.

---

## Plateformes en ligne

### XContest

Le plus grand carnet de vol libre du monde. Tes traces y sont, il suffit d’aller les chercher.

1. Connecte-toi sur [xcontest.org](https://xcontest.org)
2. Clique sur ton nom d’utilisateur → **My flights**
3. Ouvre un vol de la liste
4. Sur la page de détail du vol, cherche l’**icône de téléchargement** (libellé « IGC file ») près de la carte de la trace
5. Clique dessus. Ton navigateur récupère le fichier `.igc`

Tu peux aussi tout télécharger d’un coup :
- Va sur [xcontest.org](https://xcontest.org)
- Ouvre **My flights**
- Choisis une saison qui contient déjà des vols ;
- Clique sur le lien **ALL IGC** (en bas à gauche)
- Télécharge le fichier ZIP

---

### DHV-XC

Le concours en ligne national allemand : des données en béton, une interface un peu touffue.

1. Connecte-toi sur [dhv-xc.de](https://www.dhv-xc.de)
2. Va dans **My flights** (Meine Flüge)
3. Ouvre la page de détail du vol
4. Trouve le **lien de téléchargement IGC** en bas de la page (souvent intitulé « Download IGC-File »)
5. C’est fait, récupère le fichier

---

## Applis mobiles

### Flyskyhy (iOS)

L’enregistreur de référence des pilotes sur Apple. Tes fichiers IGC sont directement dans l’appli.

1. Ouvre Flyskyhy → **Logbook**
2. Touche le vol voulu
3. Touche l’**icône de partage** (en haut à droite, le carré avec la flèche)
4. Choisis **send to XContest** ou **Send to DHV-XC**
5. Tu peux ensuite télécharger le fichier IGC depuis la plateforme.

**Astuce :** tu peux aussi retrouver tes fichiers IGC dans l’appli Fichiers, dans le dossier de Flyskyhy, si tu as activé l’accès aux Fichiers.

---

### XCTrack (Android)

L’appli instrument de vol pour parapente sous Android, et aussi le système qui fait tourner des instruments comme l’AIR³. Les traces s’enregistrent automatiquement après chaque vol.

**Avec le widget Share (le plus simple) :**
1. Sur l’écran principal, touche le **widget Share** (en haut à droite, une icône de partage ou d’envoi)
2. Choisis une appli installée : Gmail, WhatsApp, Telegram, Google Drive, etc.
3. Le fichier IGC est joint et part tout seul

**Avec le menu Tracklogs :**
1. Ouvre XCTrack → **Menu** (en haut à gauche) → **Tracklogs**
2. Appui long sur le vol, ou touche l’icône de menu à trois points
3. Choisis **Share** → sélectionne l’appli de destination
4. Envoie-le-toi ou enregistre-le directement sur ton téléphone

**Avec l’envoi automatique vers XContest (si déjà connecté) :**
1. Relie ton compte XContest dans **Menu → Preferences → Pilot**
2. Après l’atterrissage, dès que tu as internet, la trace part automatiquement
3. Télécharge ensuite l’IGC depuis XContest (voir plus haut)

**Par USB (récupération directe du fichier) :**
- Les fichiers sont dans `/storage/emulated/0/XCTrack/tracks/` (ou sur ta carte SD)
- Branche en USB → active le mode **Transfert de fichiers** → va dans ce dossier → copie les fichiers `.igc`

---

### XCSoar (Kobo / Android / Windows)

XCSoar enregistre nativement en IGC. Aucune conversion nécessaire.

1. Les vols sont enregistrés dans le dossier **XCSoar/logs/** de l’appareil
2. Sur Kobo : branche en USB → va dans `XCSoar/logs/` → copie les fichiers
3. Sur Android : même dossier, par transfert de fichiers USB ou avec un gestionnaire de fichiers
4. Les fichiers sont nommés par date : `2024-07-15-XCS-XXX-01.igc`

---

## Instruments et matériel

### Oudie / Naviter (Oudie N, Omni, Oudie IGC …)

Naviter fabrique plusieurs appareils : certains sont de purs enregistreurs, d’autres tournent sous Android. La marche à suivre dépend de celui que tu as.

**Oudie N / Oudie Omni (sous Android, avec SeeYou Navigator) :**

*Avec l’appli SeeYou Navigator :*
1. Ouvre **SeeYou Navigator** → touche **Menu** → **Logbook**
2. Choisis un vol
3. Touche l’icône **Upload** → choisis ta plateforme (XContest, DHV-XC, etc.)
4. Télécharge le vol depuis la plateforme choisie.

*Par USB :*
1. Branche en USB → active le **Transfert de fichiers** sur l’appareil
2. Va dans `Internal storage/SeeYou Navigator/` (ou un chemin proche)
3. Copie les fichiers `.igc`

*Avec SeeYou Cloud (si la synchro automatique est activée) :*
1. Connecte-toi sur [seeyou.cloud](https://seeyou.cloud)
2. Va dans **Flights** → ouvre un vol
3. Clique sur **Download IGC**

**Appli SeeYou Navigator (sur ton propre téléphone Android ou iOS) :**
- Comme pour l’Oudie N ci-dessus : Logbook → choisis le vol → envoie

---

### Skytraxx (2.1, 4.0, 5.0 …)

On branche et ça marche. Le Skytraxx apparaît comme une clé USB : pas de pilote, pas de prise de tête.

1. Branche ton Skytraxx à ton ordinateur en USB
2. Il apparaît comme un disque externe
3. Ouvre le disque → cherche le dossier **IGC** (ou les fichiers à la racine)
4. Copie les fichiers `.igc` voulus

---

### Syride (gamme SYS)

Des instruments français, solides comme un roc. Les fichiers passent par USB ou par le logiciel de bureau.

**Par USB (le plus rapide) :**
1. Branche ton instrument Syride en USB, il apparaît comme un disque
2. Ouvre le dossier **FLIGHTS** de l’appareil
3. Copie les fichiers `.igc` sur ton ordinateur

**Par [syride.com](https://syride.com) :**
1. Connecte-toi → **My flights**
2. Clique sur un vol → **Download IGC**

---

### Flymaster (B1 Nav, Live SD, …)

1. Branche ton Flymaster en USB, il apparaît comme un disque
2. Ouvre le dossier **TRACKS** ou **FLIGHTS**
3. Copie tes fichiers `.igc`

**Par [flymaster.net](https://flymaster.net) :**
1. Connecte-toi → **My flights**
2. Ouvre un vol → **Download IGC**

---

### SkyBean (SkyDrop, SkyDrop+)

Le SkyDrop est un petit enregistreur ultraléger qui produit des fichiers IGC.

1. Branche le SkyDrop à ton ordinateur en USB
2. Va dans le dossier **IGC** ou **FLIGHTS**
3. Copie les fichiers

---

## Une fois tes fichiers IGC en main

Va sur [/upload](/upload), dépose tes fichiers, et We-Fly s’occupe du reste : stats, thermiques, la totale. Tu as du retard à rattraper ? Dépose un dossier entier : on y cherche les fichiers `.igc`, et si tu atteins la limite d’envoi, le reste patiente dans une file d’attente et s’importe automatiquement.

Bons vols, et des carnets bien remplis.
