---
title: "Analyse avancée des thermiques"
description: "Plonge dans chaque thermique que tu as enroulé : centrage, taux de montée et efficacité notés vol par vol"
category: Thermal Analysis
order: 1
---

Tu t’es déjà demandé si tu étais un génie du thermique ou si tu avais juste de la chance ? Bienvenue dans l’outil d’analyse avancée des thermiques, ton partenaire de débrief perso qui décortique chaque tour que tu as fait, comme un juge de compète titulaire d’un doctorat en enroulement.

## C’est quoi, ce truc ?

Vois-le comme un analyseur d’après-vol qui observe chacun de tes gestes dans les thermiques. Il ne se contente pas de te dire « hé, tu as pris 500 m ». Il creuse *comment* tu es monté : est-ce que tu chassais le cœur comme un pro ou est-ce que tu te baladais comme un touriste ?

L’outil détecte automatiquement chaque thermique que tu as exploité pendant ton vol, puis attribue à chacun un score de qualité et une analyse détaillée. C’est comme si un moniteur regardait tes images GoPro, sauf qu’il analyse les traces GPS et les données du vario à la place.

## La vue principale

Quand tu lances l’analyse, tu vois trois panneaux principaux :

### Panneau de gauche : résumé du vol et liste des thermiques

En haut, tu as la vue d’ensemble :
- **Thermiques** : combien tu en as exploité (ou *tenté* d’exploiter)
- **Gain** : toute l’altitude que tu as grappillée
- **Montée moy.** : ton taux de montée moyen sur l’ensemble des thermiques
- **Qualité** : score de qualité global des thermiques (on y vient)

En dessous se trouve ta liste de thermiques, chaque thermique que tu as accroché, dans l’ordre chronologique. Chaque carte affiche :
- **Badge de qualité** : de « Moyen » (aïe) à « Excellent » (apprends-moi tes secrets)
- **Heure de début** : quand tu es entré dans le thermique
- **Gain** : combien d’altitude tu as mise en banque
- **Montée** : moyenne en m/s pour ce thermique

Clique sur n’importe quel thermique pour l’analyser. La petite icône de cible réinitialise le zoom de la carte si tu t’es un peu baladé.

### Panneau central : la carte

C’est là que la magie opère. Tu y vois :

**Ta trace** : des points GPS colorés qui montrent ton chemin dans le thermique
- 🟢 **Points verts** : forte montée (>3 m/s), tu as trouvé le jus !
- 🔵 **Points bleus** : montée modérée (0-3 m/s), tu bosses
- 🔴 **Points rouges** : dégueulante (<0 m/s), on est tous passés par là

**Thermique sélectionné** : surligné en rouge avec un contour blanc. C’est celui que tu analyses en ce moment

**Autres thermiques** : affichés en violet à 40 % d’opacité, pour situer où tu as monté ailleurs

**Commandes d’animation** :
- ▶️ **Lecture/Pause** : regarde le replay de ton vol image par image
- 🔄 **Réinitialiser** : retour au début
- ⬅️➡️ **Navigation image par image** : avance point GPS par point GPS à la main (ou avec les flèches du clavier, oui, on l’a rendu utilisable au clavier)
- **Compteur d’images** : montre exactement où tu en es dans le thermique (par ex. « 42/156 »)

Sous les commandes, tu vois les données en temps réel du point GPS courant :
- **Heure** : horodatage exact
- **Altitude** : hauteur actuelle
- **Vario** : vitesse verticale à ce moment-là

**L’astuce du pro** : utilise les flèches du clavier pour parcourir le thermique image par image. Idéal pour repérer le moment exact où tu as trouvé le cœur.

### Panneau de droite : détails du thermique

C’est ton rapport de coaching. Voyons chaque section :

#### Aperçu de la qualité
**Score global** : un chiffre composite (0-40) qui prend en compte plusieurs facteurs :
- L’efficacité du taux de montée
- Ta capacité à rester centré
- Le rapport entre dérive et montée
- La régularité de tes virages

La barre de progression montre où tu te situes sur l’échelle. Tu fais régulièrement 25+ ? Tu fais quelque chose de bien.

**Efficacité** : quel pourcentage de ton temps dans le thermique était vraiment de la montée productive. Un chiffre bas veut dire que tu as passé du temps à errer ou dans la dégueulante.

#### Dérive et vent
**Dérive** : de combien le thermique t’a poussé sous le vent pendant que tu montais. Moins, c’est généralement mieux (sauf si tu *voulais* dériver).

**Force du vent** : calculée à partir de ta dérive. Pratique pour comprendre les conditions.

**Rose du vent** : visuel qui montre la direction du vent. La flèche pointe là où le vent *va* (convention des météorologues, désolé les marins).

#### Performances de montée
Les chiffres bruts :
- **Gain** : nombre total de mètres gagnés
- **Montée moy.** : ta vitesse verticale moyenne
- **Montée max** : meilleur taux de montée atteint (en général quand tu étais pile dans le cœur)
- **Montée min** : le pire moment (souvent à l’entrée ou quand tu as perdu le cœur)
- **Variabilité** : la régularité de l’ascendance. Faible = thermique doux, élevée = thermique costaud et turbulent

#### Analyse du cœur
C’est là que ça devient technique :

**Force du cœur** : l’ascendance soutenue la plus forte que tu aies trouvée. C’est ton taux de montée « idéal ».

**Temps de centrage** : combien de temps il t’a fallu pour trouver le cœur et y rester après ton entrée. Moins, c’est mieux : ça veut dire que tu n’as pas perdu de temps à traîner sur les bords.

**Qualité de centrage** : pourcentage du temps passé dans l’ascendance forte plutôt que dans la faible. Chiffre élevé = tu es resté dans le bon.

#### Dynamique de virage
**Sens** : gauche ou droite (la plupart des pilotes ont un côté préféré, on ne juge pas)

**Tours** : combien de tours complets tu as faits

**Taux** : taux de virage moyen en degrés par seconde. Trop lent = tu sors du thermique en dérivant, trop rapide = tu prends peut-être trop d’inclinaison

#### Horaires
Juste les horodatages et la durée. Utile pour recouper avec tes notes ou ton enregistreur de compète.

#### Conseils

C’est là que l’outil devient bavard. En fonction de l’analyse, tu reçois des retours personnalisés comme :
- 🟢 **Retours positifs** (fond vert) : ce que tu as bien fait, « Excellente entrée dans le cœur avec un temps de recherche minimal »
- 🟡 **Pistes d’amélioration** (fond orangé) : les points à travailler, « Essaie de resserrer ton rayon de virage pour limiter la dérive »

Les conseils sont générés à partir de tes vraies mesures de performance, pas de conseils génériques.

## Lecture de l’animation

Franchement, la fonction replay est plutôt cool. Appuie sur lecture et regarde-toi exploiter le thermique en temps réel (enfin, en accéléré). Tu peux :

1. **Tout regarder** : vois ton thermique en entier, de l’entrée à la sortie
2. **Mettre en pause et parcourir** : utilise les flèches pour avancer pas à pas sur les moments intéressants
3. **Suivre les mesures** : l’altitude, le vario et l’heure se mettent à jour pendant que tu avances dans le thermique
4. **Comparer plusieurs thermiques** : passe d’un thermique à l’autre pour voir comment ta technique a varié

**Raccourcis clavier** :
- **←** Image précédente
- **→** Image suivante

## Le score de qualité expliqué

Le score de qualité, ce n’est pas juste « bon taux de montée = bon score ». C’est un composite qui prend en compte :

1. **L’efficacité de montée** : montée réelle par rapport au maximum théorique
2. **La technique de centrage** : la rapidité avec laquelle tu as trouvé le cœur et la façon dont tu y es resté
3. **La gestion de la dérive** : si tu as limité la dérive sous le vent
4. **La régularité** : la stabilité de tes tours

Un thermique à 5 m/s où tu t’es baladé peut avoir un score plus bas qu’un thermique à 2,5 m/s que tu as parfaitement exploité. C’est une question de technique, pas seulement de chance.

**Plages de score** :
- **25-40 (Excellent)** : tu envoies du lourd. Enroulement de niveau compète.
- **15-25 (Bon)** : du bon boulot. Tu as pris l’altitude sans trop perdre de temps.
- **0-15 (Moyen)** : le boulot est fait, mais il y a de la marge de progression.

## Schémas fréquents que tu pourrais remarquer

**Forte dérive, faible qualité de centrage** : tu entres peut-être trop large ou tu ne resserres pas tes tours assez vite quand tu trouves l’ascendance.

**Bon temps de centrage mais faible efficacité** : le thermique lui-même était peut-être faible ou haché. Ce n’est pas toujours ta faute !

**Forte variabilité** : ça peut venir des conditions (journée musclée), ou d’une inclinaison irrégulière. Vérifie la régularité de ton taux de virage.

**Entrée rapide dans le cœur sur un thermique, lente sur un autre** : fais attention à ta technique d’entrée. Tu es entré au vent ou sous le vent ? Tu as dépassé le cœur ?

## Quand utiliser cet outil

- **Débrief après le vol** : comprendre ce qui a marché et ce qui n’a pas marché
- **Préparation de compète** : analyser ta technique d’enroulement sous pression
- **Comparer les conditions** : voir comment la qualité des thermiques varie selon l’heure, le lieu ou la météo
- **Suivre ta progression** : lancer l’analyse sur des vols de mois différents pour voir l’évolution de ta technique
- **Avant la prochaine bière** : prouver à tes potes que tu as *vraiment* centré ce 6 m/s (preuve à l’appui !)

## Conseils pour une meilleure analyse

1. **Des données GPS propres aident** : un signal GPS faible = une analyse moins précise
2. **Compare des thermiques similaires** : compare ta technique dans des conditions similaires pour en tirer des enseignements utiles
3. **Ne fais pas une fixation sur un seul vol** : les tendances sur plusieurs vols comptent plus qu’un thermique parfait
4. **Le contexte de vent compte** : un score « Moyen » par 30 km/h de vent vaut peut-être mieux qu’un « Excellent » dans l’air calme

## Ce que cet outil ne fait pas

- **Prédire les thermiques à venir** : c’est de l’analyse, pas de la prévision (on y travaille... on rigole)
- **Juger tes choix de vie** : fallait-il prendre ce thermique à 11 h ou pousser plus loin ? Ça reste ta décision
- **Remplacer l’expérience** : l’outil montre des données, mais apprendre à *sentir* les thermiques demande toujours des heures de vol

## En résumé

Cet outil ne fera pas de toi un meilleur pilote du jour au lendemain, mais il te montrera *exactement* ce que tu fais dans les thermiques. Que tu cherches à grappiller des secondes sur ton temps de centrage ou que tu sois juste curieux de savoir pourquoi ce thermique-là était différent, l’analyse avancée des thermiques est là pour toi.

Maintenant, va voler, enroule quelques thermiques, et reviens voir si tu es aussi bon que tu le penses.

---

À voir aussi : [Réglages de l’analyse avancée des thermiques](advanced-thermal-analysis-settings.md)
