---
title: "Analyses du Cockpit"
description: "Analyse tes statistiques de vol, tes tendances et tes performances"
category: Cockpit
order: 1
---
Le Cockpit est ton tableau de bord de performances : il te donne des statistiques et des analyses complètes sur tous tes vols. Sers-t’en pour suivre ta progression, repérer des tendances et découvrir tes meilleurs sites et tes meilleures conditions de vol.

## Vue d’ensemble

Ouvre le [Cockpit](/cockpit) pour voir toutes tes statistiques de vol.

## Les vues du Cockpit

Le Cockpit propose six vues différentes, chacune avec son propre éclairage :

1. **Vue d’ensemble** : statistiques et totaux sur les données filtrées
2. **Voile** : performances détaillées par voile
3. **Saison** : comparaison d’une année sur l’autre
4. **Pays** : statistiques de tes vols à l’étranger
5. **Décollage** : statistiques par site avec scores de performance
6. **Mois** : détail mensuel et tendances saisonnières

### Navigation

- Utilise les onglets principaux pour passer d’une vue à l’autre
- Chaque vue porte sur les [données filtrées](./data-filters.md)

## Statistiques de la vue d’ensemble

La page Vue d’ensemble du [Cockpit](/cockpit) affiche les statistiques de vol de tes [données filtrées](./data-filters.md).

### Totaux de vol

#### Total des vols
- **Définition** : nombre de tous les vols de ton carnet

#### Temps de vol total
- **Définition** : somme des durées de tous tes vols
- **Unité** : heures et minutes
- **Calcul** : somme de tous les écarts (heure d’atterrissage moins heure de décollage)

#### Temps d’enroulement total
- **Définition** : temps total passé à enrouler dans les thermiques
- **Unité** : heures et minutes
- **Détail** : réparti entre enroulement à gauche et à droite

#### Temps de transition total
- **Définition** : temps total passé en vol rectiligne
- **Unité** : heures et minutes
- **Interprétation** : plus de temps en transition = cross plus efficace

### Distance et score

Toutes les distances et tous les scores de cross sont calculés par la bibliothèque open source [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), créée et maintenue par [Momtchil Momtchev](https://github.com/mmomtchev).

#### Distance de cross totale
- **Définition** : somme de toutes tes distances de cross au score
- **Unité** : kilomètres
- **Usage** : suivre l’ensemble de tes réalisations en cross

#### Total des points de cross
- **Définition** : somme de tous tes scores XContest
- **Inclut** : tous les coefficients (distance libre, triangles)
- **Usage** : comparer tes performances en cross dans le temps

#### Longueur de trace totale
- **Définition** : somme de toutes les distances de trace GPS
- **Unité** : kilomètres
- **Toujours > distance de cross totale** : inclut tous les tours et les détours

### Records personnels

#### Distance de cross max
- **Définition** : ton plus long vol de cross au score
- **Affichage** : distance et date
- **Réussite** : ton record perso en cross !

#### Points de cross max
- **Définition** : meilleur score XContest sur un seul vol
- **Affichage** : points et date
- **Remarque** : peut différer de la distance max (à cause des coefficients des triangles)

#### Altitude max
- **Définition** : altitude la plus haute atteinte, tous vols confondus
- **Unité** : mètres au-dessus du niveau de la mer
- **Affichage** : altitude

#### Gain d’altitude max
- **Définition** : plus grand gain d’altitude sur un seul vol
- **Unité** : mètres
- **Calcul** : altitude max moins altitude min

#### Thermique le plus fort
- **Définition** : meilleur taux de montée jamais rencontré
- **Unité** : mètres par seconde (m/s)
- **Affichage** : taux de montée

#### Vitesse max
- **Définition** : vitesse sol la plus élevée enregistrée
- **Unité** : kilomètres par heure (km/h)
- **Remarque** : inclut l’effet du vent

#### Durée max
- **Définition** : ton plus long temps de vol
- **Unité** : heures et minutes
- **Affichage** : durée et date

## Vue par mois

Va sur **/cockpit?view=month** pour voir les statistiques mensuelles.

### Détail mensuel

Pour chaque mois avec des vols :
- Nombre total de vols ce mois-là
- Distance totale
- Points totaux
- Moyennes des indicateurs de vol

### Tendances saisonnières

Repère les tendances :
- **Quels mois voles-tu le plus ?**
- **Quand les thermiques sont-ils les plus forts ?**
- **Comment ta pratique évolue-t-elle au fil de l’année ?**

### Cas d’usage

- **Planifier ta saison** : vois quand tu voles le mieux en général
- **Suivre ta régularité** : combien de mois par an es-tu actif ?
- **Identifier ta haute saison** : quand réalises-tu tes meilleures distances de cross ?

## Vue par saison (année)

Va sur **/cockpit?view=season** pour voir les statistiques annuelles.

### Comparaison d’une année sur l’autre

Pour chaque saison (année) :
- Nombre total de vols
- Distance et points de cross totaux
- Moyennes des indicateurs de vol
- Records personnels de l’année

### Suivi de la progression

Compare les années pour voir :
- Est-ce que tu voles plus ?
- Est-ce que tes distances de cross augmentent ?
- Comment se comparent les différentes années ?

### Cas d’usage

- **Suivre ta progression sur le long terme**
- **Comparer différentes années**
- **Te fixer des objectifs annuels**

## Vue par voile

Va sur **/cockpit?view=glider** pour comparer les performances de tes voiles.

### Statistiques par voile

Pour chaque voile de ton carnet :
- Nombre de vols
- Distance et points totaux
- Distance de cross moyenne
- Durée de vol moyenne
- Distance max réalisée
- Taux de montée moyens

### Comparer tes voiles

Réponds à des questions comme :
- Quelle voile me donne les meilleures performances en cross ?
- Comment se comparent mes différentes voiles ?
- Quelle voile est-ce que je vole le plus souvent ?

### Cas d’usage

- **Choix de matériel** : choisir ta prochaine voile
- **Comparaison de performances** : comparer différentes classes de voiles
- **Spécialisation** : voir quelle voile marche le mieux selon les conditions

## Vue par décollage

Va sur **/cockpit?view=takeoff** pour analyser tes performances site par site.

### Statistiques par site

Pour chaque décollage :
- Nombre de vols depuis ce site
- Distance de cross totale
- Distance de cross moyenne
- Distance max depuis ce site
- **Score de performance (Z-score)** : détection statistique des valeurs atypiques (voir : [Guide du Z-score pour pilotes](/doc/z-score-pilot-guide))

## Vue par pays

Va sur **/cockpit/?view=country** pour voir tes statistiques internationales.

### Statistiques par pays

Pour chaque pays où tu as volé :
- Nombre de vols
- Distance de cross totale
- Moyennes des indicateurs
- Meilleurs sites de ce pays

## Conseils et bonnes pratiques

### Construis ton jeu de données

- **Importe tous tes vols** : plus de données = de meilleures statistiques
- **Vols anciens** : importe tes vieux fichiers IGC pour avoir une vue complète
- **Régularité** : voler régulièrement donne des tendances plus fiables

### Utilise les filtres avec stratégie

- **Commence large** : regarde d’abord les tendances générales
- **Puis resserre** : applique des filtres pour des questions précises
- **Compare ce qui est comparable** : garde les mêmes filtres quand tu compares

### Tiens compte du contexte

Les statistiques sont puissantes, mais pense à :
- **Ta progression** : tu t’améliores avec le temps
- **Les changements de matériel** : une nouvelle voile change les performances
- **Les conditions** : la météo varie d’une saison à l’autre
- **La taille de l’échantillon** : 2 vols contre 200 vols (lequel est le plus fiable ?)

### Fixe-toi des objectifs

Sers-toi des statistiques pour :
- **Suivre ta progression** : compare avec les saisons précédentes
- **Te lancer des défis** : bats tes records perso
- **Planifier tes progrès** : identifie les points à travailler
