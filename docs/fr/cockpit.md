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

Le Cockpit propose onze vues, chacune avec son propre éclairage :

1. **Vue d’ensemble** : statistiques et totaux sur les données filtrées
2. **Tendances** : ta pratique dans le temps, du jour par jour à l’année par année
3. **Enroulement** : taux de montée, enroulement et qualité des thermiques, saison par saison
4. **Phases** : comment ton temps de vol se répartit entre thermique, recherche, transition et flottement
5. **Voile** : répartition du temps de vol par voile
6. **Décollage** : statistiques par site avec z-scores
7. **Pays** : statistiques de tes vols à l’étranger
8. **Saison** : comparaison d’une année sur l’autre
9. **Mois** : détail mensuel et tendances saisonnières
10. **CIVL** : ton classement mondial CIVL
11. **Carte** : tes décollages sur une carte

### Navigation

- Choisis une vue dans le menu du Cockpit
- Chaque vue porte sur les [données filtrées](./data-filters.md)

## Statistiques de la vue d’ensemble

La page Vue d’ensemble du [Cockpit](/cockpit) affiche les statistiques de vol de tes [données filtrées](./data-filters.md). Chaque distance, altitude et vitesse s’affiche dans les unités choisies dans ton profil.

### Totaux de vol

Le bandeau en haut te donne les quatre chiffres clés :

#### Total des vols
- **Définition** : nombre de tous les vols de ton carnet

#### Temps de vol total
- **Définition** : somme des durées de tous tes vols
- **Unité** : heures et minutes
- **Calcul** : somme de tous les écarts (heure d’atterrissage moins heure de décollage)

#### Distance
- **Définition** : longueur de trace totale, tous vols confondus

#### Vol le plus long
- **Définition** : ton plus long temps de vol
- **Affichage** : durée ; clique dessus pour ouvrir ce vol

#### Efficacité en vol
- **Définition** : temps passé à enrouler dans les thermiques (**Enroulement**) comparé au temps passé en vol rectiligne (**Transition**)
- **Unité** : heures et minutes, avec la répartition en pourcentage

#### Équilibre d’enroulement
- **Définition** : comment ton temps d’enroulement se répartit entre **Virages à gauche** et **Virages à droite**

#### Répartition solo / biplace
- **Définition** : comment ton temps de vol se répartit entre vols **Solo** et **Biplace** (affiché seulement si tu as des vols en biplace)

### Distance et score

Toutes les distances et tous les scores de cross sont calculés par la bibliothèque open source [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), créée et maintenue par [Momtchil Momtchev](https://github.com/mmomtchev).

#### Distance en cross
- **Définition** : somme de toutes tes distances de cross au score
- **Usage** : suivre l’ensemble de tes réalisations en cross

#### Points cross
- **Définition** : somme de tous tes scores XContest
- **Inclut** : tous les coefficients (distance libre, triangles)
- **Usage** : comparer tes performances en cross dans le temps

#### Longueur de trace
- **Définition** : somme de toutes les distances de trace GPS
- **Toujours > distance en cross** : inclut tous les tours et les détours

### Records perso

Chaque record renvoie au vol dont il vient : clique sur la valeur pour l’ouvrir.

#### Altitude max
- **Définition** : altitude la plus haute atteinte, tous vols confondus
- **Unité** : au-dessus du niveau de la mer

#### Gain d’altitude max
- **Définition** : plus grand gain d’altitude sur un seul vol
- **Calcul** : altitude max moins altitude min

#### Vitesse max
- **Définition** : vitesse sol la plus élevée tenue pendant 5 secondes, pics GPS filtrés
- **Remarque** : inclut l’effet du vent

#### Meilleure distance en cross
- **Définition** : ton plus long vol de cross au score
- **Réussite** : ton record perso en cross !

#### Meilleur score cross
- **Définition** : meilleur score XContest sur un seul vol
- **Remarque** : peut différer de la meilleure distance (à cause des coefficients des triangles)

#### Remontée de bas la plus basse
- **Définition** : le point le plus bas (en hauteur sol) d’où tu es remonté, et la hauteur que tu as regagnée

### Indicateurs de performance

- **Durée méd. d’un tour** : durée médiane d’un 360°
- **Rayon méd. d’un tour** : rayon de virage médian en enroulement
- **Facteur de charge médian** : facteur de charge (voir le [guide du facteur de charge pour pilotes](/doc/g-factor-pilot-guide))
- **Pic du thermique le plus fort** : meilleur taux de montée, tenu sur 5 secondes ; clique dessus pour aller directement à ce thermique

## Vue Tendances

Va sur **/cockpit?view=trends** pour voir comment ta pratique évolue dans le temps.

Choisis un **Indicateur** (**Temps de vol**, **Vols**, **Distance moy.**, **Temps de vol moy.**, **Vitesse moy.**), un **Intervalle** (**Jour**, **Semaine**, **Mois**, **Année**), une **Période** (**30 jours**, **12 mois**, **Cette année**, **Tout**) et une **Répartition** (**Total** ou **Par voile**). Bascule l’**Affichage** entre **Graphique** et **Tableau**. Clique sur une colonne pour ouvrir ses vols dans le carnet.

## Vue Enroulement

Va sur **/cockpit?view=thermaling** pour tes statistiques de montée sur tous les thermiques des vols filtrés : **Montée médiane**, **Meilleure montée**, **Gain médian**, **Thermiques/h**, **Temps d’enroulement**, durée et rayon des tours, et **Remontées de bas**. Les graphiques saison par saison sont regroupés sous **Efficacité**, **Volume**, **Technique** et **Maîtrise**.

## Vue Phases

Va sur **/cockpit?view=phases** pour voir comment ton temps de vol se répartit entre **Thermique**, **Recherche**, **Transition** et **Flottement**, avec ta **Finesse médiane**, ta **Vitesse médiane en transition** et tes **Tours / min**, saison par saison.

## Vue par mois

Va sur **/cockpit?view=month** pour voir les statistiques mensuelles.

### Détail mensuel

- **Mois les plus actifs** : tes mois les plus chargés, avec le **Total des vols** toutes années confondues, ton **Année la plus active** et l’**Activité par année**
- **Analyse visuelle** : **Durée**, **Nombre** et **Score z** par mois, pour chaque année, en barres **Groupé** ou **Empilé**
- **Détail mensuel par année** : un tableau mois par année de tes vols

### Tendances saisonnières

Repère les tendances :
- **Quels mois voles-tu le plus ?**
- **Quand les thermiques sont-ils les plus forts ?**
- **Comment ta pratique évolue-t-elle au fil de l’année ?**

### Cas d’usage

- **Planifier ta saison** : vois quand tu voles le mieux en général
- **Suivre ta régularité** : combien de mois par an es-tu actif ?
- **Identifier ta haute saison** : quand accumules-tu le plus de temps de vol ?

## Vue par saison (année)

Va sur **/cockpit?view=season** pour voir les statistiques annuelles.

### Comparaison d’une année sur l’autre

Pour chaque saison (année), le tableau affiche :
- **Vols**
- **Heures totales**
- **Moy./vol** (heures par vol)
- **Score z** du temps de vol moyen

Le graphique au-dessus te permet de comparer les saisons par **Durée**, **Nombre** ou **Score z**.

### Suivi de la progression

Compare les années pour voir :
- Est-ce que tu voles plus ?
- Est-ce que tes vols s’allongent ?
- Comment se comparent les différentes années ?

### Cas d’usage

- **Suivre ta progression sur le long terme**
- **Comparer différentes années**
- **Te fixer des objectifs annuels**

## Vue par voile

Va sur **/cockpit?view=glider** pour comparer tes voiles.

### Statistiques par voile

Pour chaque voile de ton carnet :
- **Vols**
- **Heures totales**
- **Moy./vol** (heures par vol)
- **Score z** du temps de vol moyen

### Comparer tes voiles

Réponds à des questions comme :
- Quelle voile me garde le plus longtemps en l’air ?
- Comment se comparent mes différentes voiles ?
- Quelle voile est-ce que je vole le plus souvent ?

### Cas d’usage

- **Choix de matériel** : choisir ta prochaine voile
- **Comparaison de performances** : comparer différentes classes de voiles
- **Spécialisation** : voir quelle voile marche le mieux selon les conditions

## Vue par décollage

Va sur **/cockpit?view=takeoff** pour analyser tes performances site par site.

### Statistiques par site

Pour chaque décollage, un tableau triable affiche :
- **Vols** depuis ce site
- **Heures totales**
- **Moy./vol** (heures par vol)
- **Score z** : détection statistique des valeurs atypiques (voir : [Guide du Z-score pour pilotes](/doc/z-score-pilot-guide))

## Vue par pays

Va sur **/cockpit?view=country** pour voir tes statistiques internationales.

### Statistiques par pays

Pour chaque pays où tu as volé :
- **Vols**
- **Heures totales**
- **Moy./vol** (heures par vol)
- **Score z** du temps de vol moyen

## Vue CIVL

Va sur **/cockpit?view=civl** pour voir ton classement CIVL (mondial, européen et national) et son historique. Ajoute d’abord ton identifiant CIVL dans les réglages de ton profil.

## Vue Carte

Va sur **/cockpit?view=map** pour voir sur une carte chaque décollage d’où tu as volé, avec le nombre de vols pour chacun.

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
