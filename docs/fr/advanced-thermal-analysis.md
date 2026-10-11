---
title: "Analyse avancée des thermiques"
description: "Plonge dans chaque thermique que tu as enroulé : centrage, taux de montée et efficacité notés vol par vol"
category: Thermal Analysis
order: 1
---

Tu t’es déjà demandé si tu étais un génie du thermique ou si tu avais juste de la chance ? L’onglet **Thermiques** de chaque vol est ton partenaire de débrief perso : il décortique chaque montée que tu as exploitée, spirale par spirale.

## C’est quoi, ce truc ?

C’est un analyseur d’après-vol qui observe chacun de tes gestes dans les thermiques. Il ne se contente pas de te dire « tu as pris 500 m ». Il regarde *comment* tu es monté : est-ce que tu chassais le cœur comme un pro ou est-ce que tu faisais le tour des bords ?

Quand tu importes un vol, We-Fly détecte chaque thermique que tu as exploité, attribue à chacun un score de qualité sur 100 et en tire une analyse détaillée. Vois-le comme un moniteur qui passe en revue ta trace et ton vario, une montée à la fois. Tu te demandes comment une montée est reconnue au départ ? Va voir [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings).

Ouvre n’importe quel vol et choisis l’onglet **Thermiques**. Le chiffre à côté du nom de l’onglet indique combien de thermiques ont été trouvés.

## La vue principale

L’onglet se lit de haut en bas :

1. Un bandeau de résumé pour tout le vol
2. Le graphique **Vario selon le rayon de spirale**
3. Des filtres et une frise chronologique pour choisir un thermique
4. La visionneuse du thermique sélectionné : carte ou vue 3D d’un côté, détails de l’autre
5. Le graphique **Taux de montée par altitude et heure**

### Bandeau de résumé du vol

La vue d’ensemble de ta journée :

- **Thermiques** : combien de montées ont été retenues
- **Meilleur** : le score de qualité le plus haut du vol, avec le numéro du thermique et sa note de qualité
- **Gain** : toute l’altitude que tu as prise en thermique
- **Montée moy.** : ton taux de montée moyen sur l’ensemble des thermiques
- **Qualité** : le score de qualité moyen, avec la médiane en dessous

### Vario selon le rayon de spirale

Chaque spirale complète que tu as faite devient un point : son rayon en abscisse, le taux de montée que tu en as tiré en ordonnée. Le fond est découpé en zones nommées **risqué**, **idéal**, **ok** et **à serrer**, des spirales très serrées à gauche aux plus larges à droite. Si la plupart de tes meilleurs points tombent dans la zone **à serrer**, tu sais quoi travailler au prochain vol.

### Choisir un thermique

Au-dessus de la frise se trouve une rangée de filtres, chacun indiquant combien de thermiques il retient :

- **Tous** : tous les thermiques
- **Top 5** : les cinq montées les plus fortes selon le taux de montée moyen
- **Sous la médiane** : les thermiques dont le taux de montée est sous la médiane du vol
- **Dérivants** : les thermiques où tu as dérivé de plus de 30 m pour 100 m gagnés (seules les montées de 50 m ou plus sont prises en compte)

Sous les filtres, la frise place chaque thermique sur l’heure réelle du vol. La couleur de chaque point indique sa qualité, et sa taille la hauteur gagnée : « le gros vers une heure et demie » se retrouve facilement. Clique sur un point pour ouvrir ce thermique dans la visionneuse.

Le thermique sélectionné fait partie de l’adresse de la page : tu peux partager un lien qui mène directement au « Thermique n° 7 ».

### La visionneuse de thermique

La barre de titre affiche **Thermique n° N**, sa note de qualité, l’heure de début, la hauteur gagnée et la montée moyenne. À droite, tu bascules entre **Carte 2D** et **Vue 3D**.

**Sur la carte 2D :**

- **La trace du thermique sélectionné** est dessinée en points colorés selon le vario : vert pour une forte montée (au-dessus de 3 m/s), jaune pour une montée jusqu’à 3 m/s, rouge pour la dégueulante
- Les marqueurs **Point d’entrée** et **Point de sortie** montrent où la montée a commencé et fini
- **Le cœur** de chaque thermique est un marqueur entouré d’un anneau en pointillés. Celui du thermique sélectionné est rouge, les autres sont en rose pâle pour le contexte. Survole un cœur pour voir sa force
- **Position actuelle** est le marqueur bleu clair qui se déplace pendant la lecture

**Dans la vue 3D**, la même montée est dessinée en spirale que tu peux faire pivoter, avec une légende pour **Ascendance forte**, **Ascendance faible**, **Descendance**, **Cœur du thermique**, **Altitude de sortie** et **Position actuelle**.

## Lecture de l’animation

Sous la carte ou la vue 3D se trouve la barre de lecture :

- **Lecture** / **Pause** : rejoue le thermique point par point
- La flèche circulaire : retour au premier point
- Les flèches image précédente et image suivante : avance dans la montée un point GPS à la fois
- Compteur **Image** : où tu en es dans le thermique (par exemple 42/156)
- L’heure, l’altitude et le vario au point courant
- Le bouton cible : **Centrer la carte sur ce thermique**, pratique après t’être un peu baladé sur la carte

Avancer image par image, c’est le meilleur moyen de repérer le moment exact où tu as trouvé le cœur, ou celui où tu l’as perdu.

## Détails du thermique

À côté de la visionneuse (en dessous sur téléphone), c’est ton rapport de coaching. En haut, un grand score de qualité avec sa note, plus deux indicateurs rapides : **eff** (efficacité) et **cent** (centrage).

En dessous, les détails sont repliés en sections. Une seule s’ouvre à la fois, et chacune affiche un aperçu d’une ligne quand elle est repliée : tu parcours toute l’histoire sans faire défiler.

#### Montée

- **Gain** : hauteur totale gagnée
- **Moy.** : taux de montée moyen
- **Max** : meilleure montée, lissée sur 5 secondes (le pic brut sur un seul point est affiché en dessous)
- **Min** : le pire moment, souvent à l’entrée ou quand tu es sorti du cœur
- **Variab.** : à quel point le taux de montée a varié. Faible = thermique doux, élevée = thermique costaud ou turbulent

#### Cœur

- **Force** : montée moyenne dans le cœur, ton point idéal
- **Tps centr.** : le temps qu’il t’a fallu pour atteindre le cœur après le début du thermique. Moins, c’est mieux
- **Taille** : le rayon d’ascendance du cœur
- **Dist. moy.** : à quelle distance du cœur tu as tourné en moyenne
- **Centrage** : à quel point tu es resté près du cœur, en pourcentage. Tourner au rayon du cœur lui-même donne 100 %

#### Dynamique de virage

- **Sens** : gauche ou droite (la plupart des pilotes ont un côté préféré, on ne juge pas)
- **Tours** : nombre de tours complets
- **Taux** : taux de virage moyen en degrés par seconde
- **Inclinaison** : estimée à partir de la taille et de la durée de tes spirales, avec la vitesse air qui en découle en dessous
- **Temps par tour** et **Rayon de spirale** : la dispersion de tes spirales, en temps minimum, médian et maximum, et en rayon au 25e percentile, médian et au 75e percentile

#### Dérive et vent

- **Force du vent** : estimée à partir de la dérive de tes spirales
- **Dérive** : la distance sur laquelle le thermique t’a emporté pendant que tu montais
- **Direction** : d’où venait le vent, avec une rose des vents. La flèche pointe dans le sens où soufflait le vent, et l’étiquette indique la direction « d’où » il vient, comme dans une prévision

#### Horaires

**Début**, **Fin** et **Durée** de la montée. Utile pour recouper avec tes propres notes.

#### Détail du score

Montre comment le score de qualité a été construit : une barre par facteur (**Montée**, **Efficacité**, **Centrage**, **Régularité** et **Durée**), son poids, ta valeur réelle et les points qu’il a rapportés. Le lien **Comment est-ce calculé ?** t’emmène vers la formule complète.

#### Conseils

À partir des chiffres ci-dessus, tu reçois des retours précis sur cette montée, par exemple :

- Des points positifs sur fond vert : « Super entrée dans le cœur : plus forte ascendance trouvée en 12 s. »
- Des suggestions sur fond orangé : « Entrée lente dans le cœur : … Fais des premiers tours plus larges pour sentir le gradient. »

Les conseils sont construits à partir des mesures de ce thermique-là (taille du cœur, dérive, inclinaison, variabilité), pas de conseils génériques. Pour un bilan sur tout le vol, regarde le panneau **Coaching** dans l’onglet **Résumé** du vol.

## Taux de montée par altitude et heure

En bas de l’onglet, chaque thermique est placé selon l’heure de la journée et l’altitude, coloré selon le taux de montée. Bascule la référence de hauteur entre **AMSL** et **AGL** (au-dessus du décollage). La ligne en pointillés est le plafond exploitable du jour ; si elle se coupe en deux paliers, les plafonds du matin et de l’après-midi étaient différents. Clique sur n’importe quel point pour remonter à ce thermique dans la visionneuse.

## Le score de qualité expliqué

Le score de qualité, ce n’est pas juste « bon taux de montée = bon score ». C’est un score sur 100 qui combine cinq facteurs :

1. **Montée** : la force de l’ascendance au mieux
2. **Efficacité** : la hauteur gagnée par rapport à la distance de dérive
3. **Centrage** : à quel point tu es resté près du cœur
4. **Régularité** : la stabilité de la montée
5. **Durée** : si tu es vraiment resté enrouler, plutôt que de juste passer au travers

Un thermique musclé où tu t’es baladé peut avoir un score plus bas qu’un thermique moyen que tu as parfaitement exploité. C’est une question de technique, pas seulement de chance.

**Notes de qualité :**

| Score | Note |
|---|---|
| 80 et plus | Exceptionnel |
| 73 à 79 | Excellent |
| 66 à 72 | Bon |
| 60 à 65 | Moyen |
| Moins de 60 | Faible |

Ces plages sont calibrées sur de vrais vols dans We-Fly : un thermique typique tombe vers le milieu des 60. La formule complète, avec un exemple détaillé, se trouve dans [Le score global de thermique expliqué](/doc/overall-thermal-score).

## Schémas fréquents que tu pourrais remarquer

**Forte dérive, faible centrage** : tu entres peut-être trop large ou tu ne resserres pas tes tours assez vite quand tu trouves l’ascendance.

**Bon temps de centrage mais faible efficacité** : le thermique lui-même était peut-être faible, ou le vent fort. Ce n’est pas toujours ta faute !

**Forte variabilité** : ça peut venir des conditions (journée musclée) ou d’une inclinaison irrégulière. Les conseils essaient de faire la différence entre les deux en regardant à quel point ton rayon de spirale a varié.

**Entrée rapide dans le cœur sur un thermique, lente sur un autre** : fais attention à ta technique d’entrée. Tu es entré au vent ou sous le vent ? Tu as dépassé le cœur ?

## Quand utiliser cet outil

- **Débrief après le vol** : comprendre ce qui a marché et ce qui n’a pas marché
- **Préparation de compète** : analyser ta technique d’enroulement sous pression
- **Comparer les conditions** : voir comment la qualité des thermiques varie selon l’heure, le site ou la météo
- **Suivre ta progression** : regarder des vols de mois différents pour voir ton évolution
- **Avant la prochaine bière** : prouver à tes potes que tu as *vraiment* centré ce thermique monstrueux (preuve à l’appui !)

## Conseils pour une meilleure analyse

1. **Des données GPS propres aident** : un signal GPS faible donne une analyse moins précise, et un enregistreur qui note un point par seconde donne les meilleurs résultats
2. **Compare des thermiques similaires** : compare ta technique dans des conditions similaires pour en tirer des enseignements utiles
3. **Ne fais pas une fixation sur un seul vol** : les tendances sur plusieurs vols comptent plus qu’un thermique parfait
4. **Le contexte de vent compte** : un score « Moyen » par jour de vent peut refléter un meilleur pilotage qu’un « Excellent » dans l’air calme

## Ce que cet outil ne fait pas

- **Prédire les thermiques à venir** : c’est de l’analyse, pas de la prévision
- **Juger tes choix** : fallait-il prendre ce thermique à 11 h ou pousser plus loin ? Ça reste ta décision
- **Remplacer l’expérience** : l’outil montre des données, mais apprendre à *sentir* les thermiques demande toujours des heures de vol

## En résumé

Cet outil ne fera pas de toi un meilleur pilote du jour au lendemain, mais il te montre *exactement* ce que tu fais dans les thermiques. Que tu cherches à réduire ton temps de centrage ou que tu sois juste curieux de savoir pourquoi une montée t’a paru différente, l’onglet **Thermiques** est là pour toi.

Maintenant, va voler, trouve quelques thermiques, et reviens voir si tu es aussi bon que tu le penses.

---

À voir aussi : [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings) | [Le score global de thermique expliqué](/doc/overall-thermal-score)
