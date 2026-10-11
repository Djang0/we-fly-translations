---
title: Corriger une date de vol erronée
description: Pourquoi certains instruments enregistrent une mauvaise date, et comment la corriger sans perdre ton vol
category: Your Flights
order: 6
---

## Quand un vol atterrit au mauvais jour

Chaque fichier IGC porte la date du vol dans son en-tête, jour en premier : `DDMMYY`. Quelques instruments l’écrivent à l’envers (`YYMMDD`). We-Fly lit alors l’année comme le jour et le jour comme l’année, et un vol du 9 juillet 2026 peut s’afficher au 26 juillet 2009.

Ta trace, tes horaires et tes scores sont bons. Seule la date est fausse, ce qui range le vol dans la mauvaise saison, la mauvaise série et au mauvais endroit de ton carnet de vol.

## Corriger un vol

Dans ton carnet de vol, ouvre le menu **⋯** du vol et choisis **Changer la date**.

- Si la date semble inversée, We-Fly affiche **Correction suggérée** avec la date corrigée. Tape sur **Utiliser la date suggérée**, puis sur **Enregistrer la date**.
- Sinon, choisis le bon jour dans le calendrier et tape sur **Enregistrer la date**. L’heure du vol ne bouge pas, seul le jour change.

## Corriger plusieurs vols d’un coup

Si un instrument a enregistré toute une saison avec des dates inversées, sélectionne ces vols dans le carnet de vol et utilise **Corriger l’encodage des dates** dans le menu de sélection. Il inverse jour et année sur tous les vols sélectionnés en une fois.

Ne l’utilise que sur les vols vraiment concernés. Sur un vol correct, il transforme une bonne date en mauvaise et ta chronologie s’emmêle. Dans le doute, corrige d’abord un seul vol et vérifie le résultat.

## Éviter le problème

Mets à jour le firmware de ton instrument : la plupart des fabricants ont corrigé le format de date depuis longtemps. Si le problème persiste, signale au fabricant que son en-tête IGC ne respecte pas la règle `HFDTE` de la spécification IGC.
