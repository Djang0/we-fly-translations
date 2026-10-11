---
title: "Récupère tes données"
description: "Télécharge une copie complète de tes données de vol"
category: Account & Data
order: 1
---

## Tes données, tes règles

Ouvre ton **Profil** (depuis le menu du compte, ou va directement sur `/profile`). Dans le panneau **Compte**, clique sur **Exporter mes données**. La ligne indique combien de vols tu as enregistrés, et un clic plus tard un fichier ZIP atterrit dans tes téléchargements, plus vite qu’un plouf après un décollage raté.

Rien à remplir et pas d’e-mail à attendre : l’archive est construite sur le moment. Avec des centaines de vols, elle peut mettre un instant à démarrer, alors laisse-lui quelques secondes avant de recliquer.

## Qu’est-ce qu’il y a dans la boîte ?

Le ZIP (nommé `we-fly-data-export-` suivi d’un nombre) contient un dossier `my-data` avec tout ce qu’on a sur toi, version RGPD :

- **flights/** : tous tes fichiers IGC, classés par date (`flights/YYYY/MM/DD/`) pour que tu retrouves cette journée de thermiques mémorable de 2021. Chaque fichier garde son nom d’origine et c’est exactement le fichier que tu as importé, à l’octet près
- **data-export.json**, la partie pour les geeks : ton profil et tes préférences (unités, réglages d’affichage, couleurs des voiles, préférences d’e-mail), les métadonnées de chaque vol (date, pilote, voile, durée, distance, décollage et atterrissage, score cross, statut de partage), les comptes de connexion liés à ton profil, tes clés d’accès (noms et dates uniquement, jamais de matériel de clé) et l’historique de tes consentements
- **README.txt** : explique ce qui est quoi, avec un petit résumé de tes totaux, au cas où tu l’ouvrirais six bières plus tard
- **missing.txt** : n’apparaît que si un fichier IGC est introuvable de notre côté, et liste les vols concernés

Les corrections que tu as faites dans We-Fly (une date corrigée, une voile renommée) se trouvent dans `data-export.json`. Les fichiers IGC eux-mêmes ne sont jamais modifiés : ils restent exactement tels que ton instrument les a enregistrés.

## Pourquoi s’embêter ?

- **Sauvegarde** : parce que les disques durs lâchent, mais pas les thermiques dans le cloud
- **Migration** : tu emmènes ton carnet de vol sur une autre plateforme ? L’IGC est le format que tous les carnets de vol comprennent
- **Preuve** : tu dois montrer à ton club que tu as vraiment bouclé ce triangle ? Tout est là

## Les détails techniques, pour les curieux

Les fichiers IGC marchent avec n’importe quel logiciel d’analyse de vol : XCTrack, SeeYou, ou ce qu’utilise ta bande. Le JSON est structuré et lisible par une machine, donc tu peux scripter tes propres stats si tu es ce genre de pilote.

Petit avertissement : l’export est limité en fréquence, alors évite de marteler le bouton comme si tu déroulais une check-list prévol.

Tu ne veux que quelques fichiers IGC, pas toute l’archive ? Sélectionne des vols dans ton carnet de vol et utilise **Télécharger les fichiers IGC** pour récupérer seulement ceux-là, dans un ZIP.
