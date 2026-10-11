---
title: "Guide de la météo historique"
description: "Comprends les conditions atmosphériques réellement mesurées le jour de chaque vol de ton carnet"
category: Your Flights
order: 3
---

# La météo historique : sache dans quoi tu volais

Tu viens de faire une super journée de cross, tu as tapé le plafond, et te voilà à la voiture à te demander ce qui se passait exactement là-haut. Ou alors tu t’es posé court et tu veux savoir si c’est une convergence qui t’a eu ou juste une mauvaise décision. L’onglet **Météo** te donne le tableau atmosphérique complet de chaque vol de ton carnet, après coup.

Alimenté par l’**archive historique d’Open-Meteo**, cet onglet récupère la météo réellement enregistrée à ton décollage le jour exact de ton vol. Pas une prévision. Pas une estimation. Les vrais chiffres, heure par heure.

---

## Ce que tu vois d’un coup d’œil

En haut de l’onglet, six cartes de synthèse te donnent les grandes lignes de la journée :

| Carte | Ce qu’elle t’apprend |
|---|---|
| **Température** | Max et min de la journée, plus les valeurs ressenties |
| **Précipitations** | Cumul de pluie de la journée |
| **Vent max** | Vent moyen le plus fort, rafale max et sa direction |
| **Ensoleillement** | Nombre d’heures de soleil direct au sol |
| **Lever du soleil** et **Coucher du soleil** | Heures locales qui bornent ta fenêtre de vol utile |

Ce sont tes vérifications rapides : grand soleil toute la journée, ou tu as bataillé sous des passages nuageux tout l’après-midi ?

---

## Tableau des conditions heure par heure

C’est là que ça devient intéressant. Le tableau détaille les conditions heure par heure sur 13 colonnes. Les heures comprises dans ton **créneau de vol réel** (du décollage à l’atterrissage) sont mises en évidence, pour que tu puisses te concentrer sur ce que faisait l’atmosphère pendant que tu étais en l’air.

Voici ce que veut dire chaque colonne :

### Heure
Heure locale de la mesure (format HH:MM). Le petit point à côté de l’heure signale les heures qui chevauchent ton vol.

### Cond. : conditions météo
Une icône et un libellé météo selon le code WMO. Ça couvre tout, de « Ciel dégagé » à « Orage + grêle ». Si tu grattais sous un ciel gris, ça te confirme si c’était couvert, partiellement nuageux ou carrément du brouillard.

### Temp. : température à 2 m
Température de l’air au niveau du sol (2 mètres), dans l’unité de température choisie dans ton profil. Code couleur du bleu (gel) au rouge (chaud), en passant par le cyan, le vert, le jaune et l’orange. Raccourci visuel : le vert, c’est ta zone de confort ; l’orange, c’est qu’il faisait chaud.

### Ressenti : température apparente
La température telle que tu l’as vraiment sentie, en tenant compte de l’humidité et du refroidissement dû au vent. Pratique pour comprendre pourquoi il faisait froid au déco alors que le thermomètre affichait 18 °C.

### Humid. : humidité relative
Le pourcentage d’humidité dans l’air. Une humidité élevée (au-dessus de ~80 %) a tendance à freiner le développement des thermiques et peut annoncer une dégradation instable. Une humidité basse avec un soleil franc, c’est souvent le signe d’une journée qui a vraiment envoyé.

### Vent : vitesse du vent à 10 m
Vent moyen à 10 mètres au-dessus du sol, dans ton unité de vent (indiquée dans l’en-tête de la colonne). C’est la référence officielle du vent de surface, mesurée à la hauteur météorologique standard.

### Dir. : direction du vent
Le point cardinal **d’où** vient le vent (N, NE, E, etc.), avec une flèche orientée en conséquence. Résolution sur seize secteurs, pour voir si la brise de vallée tenait ou si le vent météo commençait à s’infiltrer.

### Rafales : vitesse des rafales
Rafale maximale enregistrée pendant l’heure, dans la même unité que le vent. Si ce chiffre est nettement plus élevé que le vent moyen, l’air était turbulent. Un facteur de rafale (rafales ÷ vent) au-dessus de 1,5 mérite d’être noté.

### Nuages : couverture nuageuse totale
Pourcentage du ciel couvert par des nuages, tous étages confondus, affiché avec une barre. C’est le total combiné. Regarde la section sur les étages nuageux plus bas pour une vue plus fine.

### Pluie : précipitations
Pluie accumulée pendant l’heure (unité dans l’en-tête de la colonne). Affichée en bleu quand elle n’est pas nulle. Même une trace peut signaler une averse passagère ; un cumul horaire soutenu, et il pleuvait franchement quelque part près de ton site.

### Pression : pression au niveau de la mer
Pression atmosphérique ramenée au niveau de la mer, en **hPa**. Une pression qui baisse au fil de la journée annonce une dégradation ; une pression qui monte signifie en général une amélioration. La plupart des pilotes regardent la tendance plutôt que la valeur absolue.

### CLP AGL : hauteur de la couche limite planétaire
Le plafond de la couche de mélange convective : en gros, l’altitude maximale théorique que les thermiques peuvent atteindre dans les conditions atmosphériques du moment, dans ton unité d’altitude, **au-dessus du sol (AGL)**. Cette valeur est mesurée depuis le relief de ton décollage, pas depuis le niveau de la mer. Si tu crevais le plafond en te demandant jusqu’où tu pouvais monter, c’est ton chiffre. Une CLP haute (2000 m+ AGL) par journée ensoleillée, c’est généralement le ciel pour limite ; une CLP basse (sous 1000 m AGL), et tu grattais.

> Les données de CLP ne sont pas disponibles pour toutes les dates passées. Quand elles le sont, elles apparaissent aussi sous forme de graphique en barres interactif sous le tableau.

### Rayonnement : rayonnement solaire de courte longueur d’onde
L’énergie solaire qui arrive au sol, en **W/m²**. C’est elle qui fabrique les thermiques. Au-delà de 600 W/m² avec une bonne instabilité, c’est en général là que la journée se déclenche. Si le rayonnement a culminé à 800+ W/m² et que tu n’as quand même pas trouvé d’ascendance, accuse l’inversion.

---

## Graphique de hauteur de la couche limite

Quand les données de CLP sont disponibles, un graphique en barres sous le tableau montre l’altitude de la couche limite au fil de la journée. Les heures de ton créneau de vol sont mises en évidence. Survole une barre pour voir l’altitude exacte de cette heure-là.

Sers-t’en pour voir si le plafond montait pendant ton vol ou s’il s’effondrait déjà quand tu as décollé tard.

---

## Étages nuageux

Sous le tableau horaire, tu trouves trois valeurs moyennées sur ton **créneau de vol uniquement** :

- **Nuages bas** : sous 2 km. Ce sont eux qui bloquent le chauffage du sol par le soleil et qui tuent les thermiques.
- **Nuages moyens** : de 2 à 6 km. Moins d’impact sur le développement des thermiques, plus importants pour la visibilité en cross.
- **Nuages hauts** : au-dessus de 6 km. Cirrus et nuages de glace d’altitude. Souvent juste décoratifs, mais un voile d’altitude persistant peut réduire assez le rayonnement pour ramollir la journée.

---

## Quelques points à garder en tête

**Ce sont des données d’archive, pas une mesure ponctuelle.** Open-Meteo reconstitue les conditions à partir de la réanalyse ERA5 et de modèles haute résolution. Les valeurs sont représentatives des conditions aux coordonnées de ton décollage, mais les effets locaux du relief (brises de vallée, zones d’ombre, microclimat) ne sont pas tous captés. Utilise-les comme contexte météo, pas comme vérité terrain.

**L’altitude compte.** Les données sont rapportées à l’altitude GPS de ton décollage. Les colonnes de température et de pression en tiennent compte, mais garde toujours en tête que les conditions sur une crête, un col ou au plafond peuvent différer de ce qu’indique le capteur à 2 m.

**Les données sont mises en cache après le premier chargement.** La météo passée ne change jamais : une fois récupérée, elle est stockée et les affichages suivants sont instantanés.

---

## Usages pratiques

- **Débrief après le vol** : croise le moment où tu as trouvé l’ascendance la plus forte avec les courbes de rayonnement et de CLP.
- **Comprendre une mauvaise journée** : vérifie si l’humidité ou la couverture nuageuse a tué les thermiques, ou si le facteur de rafale a rendu les conditions plus musclées que prévu.
- **Comparer des journées similaires** : ouvre deux vols du même site à des saisons différentes pour voir quelles conditions atmosphériques ont fait qu’une journée a marché et pas l’autre.
- **Progression et analyse** : si tu travailles avec un moniteur ou si tu cherches à mieux lire la météo, tu as là l’histoire atmosphérique vérifiée de chaque vol de ton carnet.

---

*Données météo fournies par [Open-Meteo](https://open-meteo.com), archive météo historique libre et ouverte.*
