---
title: Analyse avancée des thermiques
description: Plonge dans chaque thermique que tu as exploité, centrage, taux de montée et efficacité notés vol par vol
category: Thermal Analysis
order: 1
---

Tu t’es déjà demandé si tu étais un vrai génie du thermique ou juste chanceux ? L’onglet **Thermiques** de chaque vol est ton partenaire de débrief : il décortique chaque montée, spirale par spirale.

## C’est quoi, ce truc ?

C’est un outil d’analyse après le vol qui suit chacun de tes gestes dans les thermiques. Il ne s’arrête pas à « tu as pris 500 m ». Il regarde *comment* tu es monté : est-ce que tu traquais le cœur comme un pro ou est-ce que tu faisais le tour des bords ?

Quand tu importes un vol, We-Fly détecte chaque thermique que tu as exploité, lui donne une note de qualité sur 100 et en tire une analyse détaillée. Vois ça comme un coach qui relit ta trace et ton vario, montée après montée. Tu veux savoir comment une montée est repérée au départ ? Lis [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings).

Ouvre n’importe quel vol et choisis l’onglet **Thermiques**. Le chiffre à côté du nom de l’onglet, c’est le nombre de thermiques trouvés.

## La vue principale

L’onglet se lit de haut en bas :

1. Un bandeau de synthèse pour tout le vol
2. Le graphique **Vario selon le rayon de spirale**
3. Des filtres et une frise chronologique pour choisir un thermique
4. Le visualiseur du thermique sélectionné : carte ou vue 3D d’un côté, détails de l’autre
5. Le graphique **Taux de montée par altitude et heure**

### Bandeau de synthèse du vol

Ta journée vue d’en haut :

- **Thermiques** : le nombre de montées retenues
- **Meilleur** : la meilleure note de qualité du vol, avec le numéro du thermique et son appréciation
- **Gain** : tout le dénivelé gagné en thermique
- **Montée moy.** : ton taux de montée moyen sur l’ensemble des thermiques
- **Qualité** : la note de qualité moyenne, avec la médiane en dessous

### Vario selon le rayon de spirale

Chaque tour complet devient un point : son rayon en abscisse, le taux de montée que tu en as tiré en ordonnée. Le fond est découpé en zones **risqué**, **idéal**, **ok** et **à serrer**, des spirales très serrées à gauche aux plus larges à droite. Si la plupart de tes meilleurs points tombent dans la zone **à serrer**, tu sais sur quoi bosser au prochain vol.

### Choisir un thermique

Au-dessus de la frise, une rangée de filtres indique chacun combien de thermiques il retient :

- **Tous** : tous les thermiques
- **Top 5** : les cinq montées les plus fortes en taux de montée moyen
- **Sous la médiane** : les thermiques dont le taux de montée est inférieur à la médiane du vol
- **Dérivants** : les thermiques où tu as dérivé de plus de 30 m pour 100 m gagnés (seules les montées de 50 m ou plus sont prises en compte)

Sous les filtres, la frise place chaque thermique sur l’horaire réel du vol. La couleur de chaque point indique sa qualité et sa taille le gain, donc « le gros vers une heure et demie » se retrouve facilement. Clique sur un point pour ouvrir ce thermique dans le visualiseur.

Le thermique sélectionné fait partie de l’adresse de la page : tu peux partager un lien direct vers le « Thermique n° 7 ».

### Le visualiseur de thermique

La barre de titre affiche **Thermique n° N**, son appréciation, l’heure de début, le gain et la montée moyenne. À droite, tu bascules entre **Carte 2D** et **Vue 3D**.

**Sur la carte 2D :**

- **La trace du thermique sélectionné** est dessinée en points colorés selon le vario : vert pour une forte montée (au-dessus de 3 m/s), jaune pour une montée jusqu’à 3 m/s, rouge pour la dégueulante
- Les repères **Point d’entrée** et **Point de sortie** montrent où la montée a commencé et fini
- **Le cœur** de chaque thermique est un repère entouré d’un anneau en pointillés. Celui sélectionné est rouge, les autres sont en rose pâle pour le contexte. Survole un cœur pour voir sa force
- **Position actuelle** est le repère bleu clair qui se déplace pendant la lecture

**Dans la vue 3D**, la même montée est dessinée en spirale que tu peux faire pivoter, avec une légende pour **Ascendance forte**, **Ascendance faible**, **Descendance**, **Cœur du thermique**, **Altitude de sortie** et **Position actuelle**.

## Lecture animée

Sous la carte ou la vue 3D, tu as la barre de lecture :

- **Lecture** / **Pause** : rejoue le thermique point par point
- La flèche circulaire : retour au premier point
- Les flèches image précédente et suivante : avance dans la montée un point GPS à la fois
- Compteur **Image** : où tu en es dans le thermique (par exemple 42/156)
- L’heure, l’altitude et le vario au point courant
- Le bouton cible : **Centrer la carte sur ce thermique**, pratique après avoir baladé la carte

Avancer image par image, c’est le meilleur moyen de repérer le moment exact où tu as trouvé le cœur, ou où tu l’as perdu.

## Détails du thermique

À côté du visualiseur (en dessous sur un téléphone), tu trouves ton rapport de coaching. En haut, une grosse note de qualité avec son appréciation, plus deux indicateurs rapides : **net** (montée nette, ta montée moyenne de l’entrée à la sortie) et **cent** (centrage).

En dessous, les détails sont rangés en sections repliables. Une seule s’ouvre à la fois, et chacune affiche un aperçu d’une ligne une fois repliée : tu parcours toute l’histoire sans faire défiler.

#### Montée

- **Gain** : dénivelé total gagné
- **Moy.** : taux de montée moyen
- **Max** : meilleure montée, lissée sur 5 secondes (le pic brut sur un seul point est affiché en dessous)
- **Min** : le moment le plus faible, en général à l’entrée ou quand tu es sorti du cœur
- **Variab.** : à quel point le taux de montée a varié. Faible, c’est un thermique doux ; élevé, c’est un thermique pêchu ou turbulent

#### Cœur

- **Force** : montée moyenne dans le cœur, ton point idéal
- **Tps centr.** : le temps qu’il t’a fallu pour atteindre le cœur après le début du thermique. Plus c’est court, mieux c’est
- **Taille** : le rayon d’ascendance du cœur
- **Dist. moy.** : à quelle distance du cœur tu as tourné, en moyenne
- **Centrage** : à quel point tu es resté près du cœur, en pourcentage. Tourner au rayon du cœur lui-même donne 100%

#### Dynamique de virage

- **Sens** : gauche ou droite (la plupart des pilotes ont un côté préféré, pas de jugement)
- **Tours** : nombre de tours complets
- **Cadence** : vitesse de rotation moyenne en degrés par seconde
- **Inclinaison** : estimée d’après la taille et la durée de tes tours, avec la vitesse air correspondante en dessous
- **Temps par tour** et **Rayon de spirale** : la dispersion de tes tours, en temps minimum, médian et maximum, et en rayon au 25e centile, médian et au 75e centile

#### Dérive et vent

- **Force du vent** : estimée à partir de la dérive de tes tours
- **Dérive** : la distance sur laquelle le thermique t’a emporté pendant que tu montais
- **Direction** : d’où venait le vent, avec une boussole. La flèche indique où le vent soufflait, et l’étiquette donne la direction « d’où » il vient, comme dans une prévision

#### Horaires

**Début**, **Fin** et **Durée** de la montée. Pratique pour recouper avec tes propres notes.

#### Détail du score

Montre comment la note de qualité est construite : une barre par critère (**Montée**, **Montée nette**, **Centrage**, **Régularité** et **Durée**), son poids, ta valeur réelle et les points qu’il a apportés. Le lien **Comment est-ce calculé ?** t’emmène vers la formule complète.

#### Recommandations

À partir des chiffres ci-dessus, tu reçois un retour précis sur cette montée, par exemple :

- Des points positifs sur fond vert : « Super entrée dans le cœur : ascendance la plus forte trouvée en 12 s. »
- Des suggestions sur fond orangé : « Entrée lente dans le cœur : … Essaie des premiers tours plus larges pour sentir le gradient. »

Les conseils s’appuient sur les mesures de ce thermique (taille du cœur, dérive, inclinaison, variabilité), pas sur des généralités. Pour une synthèse sur tout le vol, regarde le panneau **Coaching** dans l’onglet **Résumé** du vol.

## Taux de montée par altitude et heure

En bas de l’onglet, chaque thermique est placé selon l’heure et l’altitude, coloré selon le taux de montée. Bascule la référence de hauteur entre **AMSL** et **AGL** (au-dessus du décollage). La ligne en pointillés, c’est le plafond exploitable du jour ; si elle se coupe en deux paliers, le plafond du matin et celui de l’après-midi étaient différents. Clique sur n’importe quel point pour remonter à ce thermique dans le visualiseur.

## La note de qualité expliquée

La note de qualité, ce n’est pas juste « bon taux de montée = bonne note ». C’est une note sur 100 qui combine cinq critères :

1. **Montée** : la force de l’ascendance à son meilleur
2. **Montée nette** : le dénivelé gagné rapporté au temps passé dans le thermique, que le vent ne modifie pas
3. **Centrage** : à quel point tu es resté près du cœur
4. **Régularité** : à quel point la montée était stable
5. **Durée** : si tu es vraiment resté pour enrouler, plutôt que de juste le traverser

Un thermique qui envoie mais dans lequel tu t’es baladé peut obtenir une note plus basse qu’un thermique moyen que tu as parfaitement exploité. C’est une question de technique, pas seulement de chance.

**Appréciations :**

| Note | Appréciation |
|---|---|
| 74 et plus | Exceptionnel |
| 68 à 73 | Excellent |
| 63 à 67 | Bon |
| 58 à 62 | Correct |
| Moins de 58 | Faible |

Ces paliers sont calibrés sur de vrais vols dans We-Fly : un thermique typique se situe autour de 65. La formule complète, avec un exemple détaillé, se trouve dans [Le score global des thermiques expliqué](/doc/overall-thermal-score).

## Les schémas que tu risques de repérer

**Forte dérive, centrage faible** : tu entres peut-être trop large, ou tu ne resserres pas assez vite quand tu trouves l’ascendance.

**Bon temps de centrage mais montée nette faible** : le thermique lui-même était peut-être faible, ou tu as fait des tours en dehors après avoir trouvé le cœur. Pas toujours ta faute !

**Forte variabilité** : ça peut venir des conditions (une journée bien turbulente) ou d’une inclinaison irrégulière. Les recommandations essaient de faire la différence en regardant à quel point ton rayon de spirale a varié.

**Entrée rapide dans le cœur sur un thermique, lente sur un autre** : regarde ta technique d’entrée. Tu es arrivé face au vent ou vent arrière ? Tu as dépassé le cœur ?

## Quand utiliser cet outil

- **Débrief après le vol** : comprendre ce qui a marché et ce qui n’a pas marché
- **Préparation de compétition** : analyser ta technique d’enroulement sous pression
- **Comparer les conditions** : voir comment la qualité des thermiques varie selon l’heure, le site ou la météo
- **Suivre ta progression** : regarder des vols de différents mois pour voir le chemin parcouru
- **Avant la prochaine bière** : prouver aux copains que tu *as bien* centré ce thermique monstrueux (preuve à l’appui !)

## Conseils pour une meilleure analyse

1. **Des données GPS propres, ça aide** : un signal GPS faible donne une analyse moins précise, et un enregistreur qui note un point par seconde donne les meilleurs résultats
2. **Compare des thermiques similaires** : compare ta technique dans des conditions proches pour en tirer des enseignements utiles
3. **Ne fais pas une fixette sur un vol** : les tendances sur de nombreux vols comptent plus qu’un thermique parfait
4. **Le vent change tout** : une note « Correct » un jour venté peut cacher un meilleur pilotage qu’un « Excellent » en air calme

## Ce que cet outil ne fait pas

- **Prédire les thermiques à venir** : c’est de l’analyse, pas de la prévision
- **Juger tes décisions** : fallait-il prendre cette montée à 11 h ou continuer ? Ça reste ton choix
- **Remplacer l’expérience** : l’outil montre les données, mais apprendre à *sentir* les thermiques demande toujours du temps de vol

## En résumé

Cet outil ne fera pas de toi un meilleur pilote du jour au lendemain, mais il te montre *exactement* ce que tu fais dans les thermiques. Que tu cherches à réduire ton temps de centrage ou que tu sois juste curieux de savoir pourquoi une montée t’a paru différente, l’onglet **Thermiques** est là pour toi.

Maintenant, va voler, trouve des thermiques, et reviens voir si tu es aussi bon que tu le crois.

---

Voir aussi : [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings) | [Le score global des thermiques expliqué](/doc/overall-thermal-score)
