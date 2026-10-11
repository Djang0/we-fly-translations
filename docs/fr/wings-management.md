---
title: Gérer tes voiles
description: Comment gérer tes voiles dans We-Fly, les renommer, les classer en solo ou biplace, et ce qui change vraiment quand tu le fais
category: Your Flights
order: 3
---

## Tes voiles vivent dans tes vols

We-Fly n’a pas de « base de données des voiles » à part. Quand tu importes un fichier IGC, ton instrument a inscrit le nom de la voile dans l’en-tête du fichier, et c’est ce que We-Fly récupère. Chaque vol porte son propre nom de voile, et la page **Voiles** (`/flights/wings`) n’est qu’un regroupement malin : elle rassemble tous tes vols par nom de voile et t’en montre la vue d’ensemble.

Cette distinction compte, parce qu’elle détermine ce que fait vraiment un renommage, et ce qu’il ne fait pas.

---

## Ce que tu vois sur la page Voiles

Chaque ligne de ta liste de voiles affiche :

- **Nom de la voile** : exactement tel que ton instrument l’a enregistré dans le fichier IGC
- **Type** : Solo, Biplace ou Mixte (on y revient plus bas)
- **Vols** : le nombre total de vols enregistrés avec cette voile
- **Durée** : le temps de vol cumulé sur tous ces vols

De là, tu peux renommer une voile et changer son type. C’est tout, simple et propre.

---

## Renommer une voile

Il y a trois endroits où modifier un nom de voile dans We-Fly, et chacun a une portée différente.

### Depuis la page Voiles : tout renommer d’un coup

Appuie sur **Renommer** à côté d’une voile, tape le nouveau nom, confirme. We-Fly met à jour le nom de la voile sur **tous les vols** qui portaient l’ancien nom. Quinze vols enregistrés sous « Rush 6 » ? Ils deviennent tous « Ozone Rush 6 » d’un seul coup. C’est le bon outil pour nettoyer un nom dans tout ton carnet de vol.

### Depuis ta liste de vols : renommer seulement les vols sélectionnés

Sur `/flights`, sélectionne un ou plusieurs vols avec les cases à cocher. Un menu d’actions groupées apparaît. Ouvre-le et choisis **Renommer la voile**. Seuls les vols sélectionnés sont mis à jour, quelle que soit la voile qu’ils avaient avant. Pratique pour réattribuer une poignée de vols sans toucher au reste.

### Depuis un vol : renommer un seul vol

Sur la page de détail d’un vol, ouvre le menu des actions et choisis **Changer de voile**. Seul ce vol est mis à jour. Aucun autre vol n’est touché.

---

**Ce qui change dans les trois cas :**
- Le nom de la voile sur les vols concernés
- La liste des voiles (des lignes apparaissent, fusionnent ou disparaissent selon ce qui reste)
- Les filtres actifs qui utilisent ce nom de voile

**Ce qui ne change pas :**
- Ton instrument. Le vario, le GPS ou l’appli sur téléphone qui a produit ces fichiers IGC a toujours l’ancien nom dans ses réglages. La prochaine fois que tu voles et que tu importes, le nouveau vol réapparaîtra avec l’ancien nom, parce que c’est ce que ton instrument a écrit dans l’en-tête IGC.

Si tu renommes une voile dans We-Fly, **mets aussi à jour le nom de la voile dans les réglages de ton instrument**. Sinon, tu courras après ce renommage à chaque import.

> Renommer une voile ici ne met à jour que les vols déjà enregistrés. Ton instrument de vol est peut-être encore configuré avec l’ancien nom.

---

## Solo ou biplace

We-Fly note si chaque vol a été fait en solo ou en biplace. Ça change l’affichage de tes statistiques et ça peut compter pour ton carnet de vol.

### Comment le type est défini

Les vols sont en **solo** par défaut, sauf si We-Fly trouve dans ton carnet un vol biplace existant avec le même nom de voile. Dans ce cas, le nouvel import hérite automatiquement de `tandem`, sans rien à faire.

### Changer le type à la main

Sur la page Voiles, chaque ligne a un sélecteur de type. Clique dessus pour basculer tous les vols de cette voile entre Solo et Biplace. C’est une **opération groupée** : elle met à jour d’un coup tous les vols portant ce nom de voile.

Avant que tu confirmes, We-Fly t’indique exactement combien de vols seront touchés. Pas de surprise.

---

## Situations courantes

**« Je vole en solo et en biplace avec la même voile »**

Utilise l’astuce du renommage : enregistre les vols biplace, puis renomme cette voile en quelque chose comme « Fusion 30 Tandem » avant de les marquer en biplace. Garde les vols solo sous le nom d’origine. Comme ça, les deux apparaissent comme des lignes propres et séparées.

**« Ma voile apparaît sous deux noms »**

Le classique de l’instrument incohérent : « Rush 6 » d’un enregistreur, « OZONE Rush 6 » d’un autre, voire une faute de frappe après une mise à jour de firmware. Renomme les variantes vers un seul nom de référence et elles fusionneront en une ligne.

**« Mes nouveaux vols affichent toujours l’ancien nom de voile après le renommage »**

Mets à jour ton instrument. We-Fly lit le nom qui se trouve dans le fichier IGC. Il ne peut pas écraser ce que ton vario a écrit.

---

Bons vols, et des noms de voile cohérents là-haut.
