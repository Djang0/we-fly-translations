---
title: Le score global des thermiques expliqué
description: Comment on calcule la qualité d'un thermique, avec un exemple chiffré
category: Thermal Analysis
order: 4
---

Tu as déjà vu le score de qualité d'un thermique dans l'onglet **Thermiques** en te demandant s'il voulait vraiment dire quelque chose ? Bonne nouvelle : oui. Ce n'est pas juste une impression. On décortique ici le calcul de ce chiffre pour que tu comprennes ce qui sépare « Moyen » d'« Excellent », et ce que tu peux y faire.

## Vue d'ensemble

Le score d'un thermique (de 0 à 100) est une combinaison pondérée de cinq facteurs. Ce sont les cinq mêmes lignes que dans le **Détail du score** d'un thermique :

| Facteur | Poids | Ce qu'il mesure |
|--------|--------|------------------|
| **Montée** | 30% | Quelle était la force de l'ascendance au meilleur moment ? |
| **Montée nette** | 20% | Quelle part de l'ascendance as-tu gardée ? |
| **Centrage** | 20% | À quel point es-tu resté dans le cœur ? |
| **Régularité** | 15% | Les valeurs du vario étaient-elles stables ? |
| **Durée** | 15% | As-tu vraiment pris le temps d'exploiter le thermique ? |

Chaque facteur est ramené sur une échelle de 0 à 1, multiplié par son poids, puis le tout est ramené sur 0 à 100. Simple en théorie, très parlant en pratique.

Le facteur **Durée** est essentiel : il empêche les passages éclair d'obtenir un score élevé. Choper une bonne ascendance sur quelques tours ne prouve pas qu'on sait enrouler ; rester et exploiter le thermique, si.

---

## La formule

Voici le calcul exact :

```
Quality Score = (climbScore * 0.30 +
                 netClimbScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Les seuils de la formule sont fixes, en m/s et en mètres, quelles que soient les unités que tu affiches.

### Comment chaque composante est calculée

**1. Score de montée**
```
climbScore = min(1, maxClimb / 5.0)
```
Ta meilleure montée soutenue dans le thermique (la valeur **Max** dans le détail du thermique, lissée sur 5 secondes pour qu'un point GPS bruité ne puisse pas tricher) divisée par 5,0 m/s, plafonnée à 1. Seul le dixième des meilleures montées dans We-Fly approche du plafond ; une montée moyenne obtient un peu plus de la moitié.

**2. Score de montée nette**
```
netClimbScore = min(1, (heightGain / duration) / 3.0)
```
Le gain de hauteur divisé par le temps passé dans le thermique : ta montée moyenne, de l'entrée à la sortie. 3,0 m/s donne le maximum de 1,0 ; environ un thermique sur cent seulement y arrive. Là où la montée max récompense le fait de trouver la partie forte, celui-ci récompense le fait d'y rester.

Les versions précédentes comparaient le gain de hauteur à la distance de dérive. Le vent faisait baisser ce score à lui seul, si bien que la même montée perdait une catégorie un jour venté. La montée nette ne dépend pas du vent.

**3. Score de centrage**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Une voile ne peut pas tourner sur place, donc enrouler pile au rayon du cœur (ou plus serré) donne un 1,0 parfait. Chaque rayon de cœur supplémentaire coûte la moitié du score : enrouler à deux fois le rayon du cœur donne 0,5, à trois fois, zéro. La dérive due au vent est retirée au préalable en comparant chaque tour à son propre centre local.

**4. Score de régularité**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
L'inverse de la variabilité de ton vario (l'écart type de ton taux de montée lissé). Thermique doux = score élevé. Ballotté entre grosse ascendance et dégueulante = score bas. Une variabilité de 2 m/s ou plus = aucune contribution de la régularité.

**5. Score de durée**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combine la durée et le nombre de tours pour récompenser un vrai travail d'enroulement. Le score maximal demande environ 90 secondes ET au moins 2 tours complets. Chaque thermique de la liste a déjà au moins deux tours complets (voir [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings)), donc en pratique ce facteur pénalise surtout les montées courtes.

---

## Exemple chiffré : thermique n° 9

Déroulons un vrai calcul avec des chiffres concrets. Imaginons que tu aies exploité un thermique avec ces valeurs :

| Mesure | Valeur |
|--------|-------|
| Montée max | 3,5 m/s |
| Montée nette | 1,8 m/s |
| Centrage | 0,53 (53%) |
| Variabilité | 0,92 m/s |
| Durée | 75 secondes |
| Nombre de tours | 3 tours |

### Étape 1 : calculer le score de chaque composante

**Score de montée :**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Ta meilleure montée soutenue de 3,5 m/s représente 70 % de la référence de 5,0 m/s.

**Score de montée nette :**
```
netClimbScore = min(1, 1.8 / 3.0)
netClimbScore = 0.60
```
Tu as fait 1,8 m/s de moyenne de l'entrée à la sortie, nettement au-dessus d'un thermique typique (environ 1 m/s).

**Score de centrage :**
```
centeringScore = 0.53
```
Tu as enroulé en moyenne à un peu moins de deux fois le rayon du cœur. Il y a de la marge, mais ce n'est pas mal.

**Score de régularité :**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Ta variabilité de vario de 0,92 m/s indique une ascendance un peu turbulente, mais rien de fou.

**Score de durée :**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Tu y as passé 75 secondes et fait 3 tours complets : un vrai travail d'enroulement, juste en dessous des 90 secondes.

### Étape 2 : appliquer les poids

Multiplie maintenant chaque score par son poids :

| Composante | Score | Poids | Contribution |
|-----------|-------|--------|--------------|
| Montée | 0,70 | 0,30 | 0,210 |
| Montée nette | 0,60 | 0,20 | 0,120 |
| Centrage | 0,53 | 0,20 | 0,106 |
| Régularité | 0,54 | 0,15 | 0,081 |
| Durée | 0,833 | 0,15 | 0,125 |
| **Total** | | | **0,642** |

### Étape 3 : ramener sur 0-100

```
qualityScore = round(0.642 * 100) = 64
```

**Résultat : un score de 64**, tout juste dans « Bon ». Des cercles plus serrés autour du cœur feraient monter à la fois le centrage et la montée nette : c'est là que sont les points faciles.

---

## Interpréter ton score

| Plage de score | Libellé | Ce que ça veut dire |
|-------------|--------|---------------|
| **74 et plus** | Exceptionnel | Les meilleures montées dans We-Fly. Une ascendance forte, bien exploitée. |
| **68 à 73** | Excellent | Mieux que trois thermiques sur cinq. Tu as trouvé le cœur vite et tu y es resté. |
| **63 à 67** | Bon | Au-dessus du thermique typique. Du bon travail. |
| **58 à 62** | Moyen | Dans le milieu du peloton. Le job est fait, mais il reste de la performance sur la table. |
| **Moins de 58** | Faible | Du mal à trouver ou à garder le cœur, une montée courte, ou des conditions vraiment pourries. |

Les catégories sont calibrées sur plus de 100 000 vrais thermiques volés par les pilotes We-Fly : le thermique typique (médian) obtient environ 66, un quart des thermiques font 73 ou plus, et un sur dix atteint 80.

---

## Ce que chaque composante te dit

### Force de la montée (poids de 30 %)

C'est le facteur le plus lourd parce que... bah, tout l'intérêt, c'est de monter. Il utilise ta meilleure montée *soutenue*, donc il récompense le fait de trouver la partie forte du thermique, pas juste de s'y accrocher. Mais n'en fais pas une obsession : parfois, un thermique faible que tu exploites parfaitement vaut plus de distance qu'un fort dont tu n'arrêtes pas de sortir.

**Score de montée bas ?**
- Le thermique était vraiment faible (pas ta faute)
- Tu n'as jamais trouvé la partie la plus forte du cœur (regarde le centrage)
- Tu es arrivé tard à la fête et n'as eu que le haut

### Montée nette (poids de 20 %)

Montée nette = gain de hauteur / temps dans le thermique, notée par rapport à 3,0 m/s. C'est la montée que tu as vraiment engrangée, de l'entrée à la sortie, donc chaque tour passé hors de l'ascendance te coûte ici. Le vent ne la change pas.

Valeurs typiques :
- **environ 1 m/s** : un thermique typique
- **2 m/s ou plus** : une montée forte, bien exploitée (le dixième du haut)
- **3 m/s ou plus** : la note maximale

**Montée nette basse ?**
- Le thermique était vraiment faible (pas ta faute)
- Des tours passés à chercher ou à sortir du cœur
- Des cercles trop larges ou une inclinaison trop faible dans un cœur étroit

### Qualité du centrage (poids de 20 %)

À quel point tu as enroulé près du cœur. Tourner au rayon même du cœur, c'est parfait ; le score baisse linéairement à mesure que ta distance moyenne augmente, jusqu'à zéro à trois fois le rayon du cœur.

**Centrage bas ?**
- Tu as mis du temps à trouver le cœur
- Tu n'arrêtais pas de sortir et de recentrer
- Le cœur bougeait (thermique en bulles) ou était tout petit

### Régularité (poids de 15 %)

Basée sur l'écart type des valeurs de ton vario. Bip régulier et tranquille = score élevé. Vario qui s'affole = score bas.

**Régularité basse ?**
- Thermique turbulent (pas toujours ta faute)
- Tu traversais le cœur pour ressortir de l'autre côté
- Ascendance et dégueulante mélangées dans le même tour

### Durée (poids de 15 %)

Combine la durée et le nombre de tours pour prouver que tu as vraiment exploité le thermique au lieu de juste passer dedans. Ce facteur récompense les pilotes qui s'engagent dans le thermique et le travaillent correctement.

Le score maximal demande :
- **environ 90 secondes** de durée (les thermiques plus courts marquent proportionnellement moins)
- **au moins 2 tours complets** (moins de tours marquent proportionnellement moins)

Les deux facteurs se multiplient, donc il te faut LES DEUX pour bien marquer ici. Une montée de 30 secondes en trois tours n'obtient qu'un tiers des points.

**Score de durée bas ?**
- Tu as quitté le thermique trop tôt
- Le thermique est mort avant que tu puisses vraiment l'exploiter

---

## Comment améliorer ton score

### Gains rapides

1. **Serre dès que tu touches l'ascendance** : n'attends pas, commence à tourner dès que le vario se réveille
2. **Décale ton cercle vers l'ascendance** : la technique de centrage classique, élargis côté faible, serre côté fort
3. **Surveille ton inclinaison** : trop faible, ce sont des cercles larges et de la dérive ; trop forte, c'est inefficace dans le faible

### Suis ta progression

Compare des thermiques de plusieurs vols sur le même site. Tu vas commencer à voir des tendances :
- « Je galère toujours à centrer à ce déco »
- « Mes thermiques de l'après-midi sont plus réguliers »
- « Cette nouvelle voile a vraiment amélioré ma montée nette »

### Ne cours pas après le chiffre

Un score de 55 dans un thermique cassé et musclé peut correspondre à un meilleur pilotage qu'un 80 dans une grosse colonne bien douce. Le contexte compte. Utilise le score pour suivre ta propre progression dans le temps, pas pour te comparer aux autres sur des jours différents.

---

## En coulisses : pourquoi ces poids ?

Les poids (30/20/20/15/15) ne sortent pas de nulle part. Ils reposent sur ce qui compte vraiment pour bien enrouler :

- **La force de la montée passe en premier** (30 %) parce que l'objectif principal, c'est de monter. Un thermique faible parfaitement exploité reste un thermique faible.

- **La montée nette et le centrage se partagent le poids technique** (20 % chacun) parce que les deux relèvent du pilotage. On peut avoir l'un sans l'autre (des cercles serrés au mauvais endroit, ou un bon centrage dans un thermique dont on n'arrête pas de sortir).

- **La régularité est un modulateur** (15 %) parce qu'une partie de la turbulence ne dépend pas de toi. Elle influence ton score sans le dominer.

- **La durée filtre les coups de chance** (15 %) parce que quelques tours dans une grosse ascendance, ce n'est pas la même chose qu'exploiter un thermique. Ce facteur garantit que les scores élevés vont aux pilotes qui se sont vraiment engagés dans la montée.

---

## Exemples de situations

### L'ascenseur tombé du ciel

| Mesure | Valeur | Score |
|--------|-------|-------|
| Montée max | 5,6 m/s | 1,0 (plafonné) |
| Montée nette | 3,4 m/s | 1,0 (plafonné) |
| Centrage | 0,78 | 0,78 |
| Régularité | 0,38 m/s | 0,81 |
| Durée / tours | 120 s / 4 tours | 1,0 |

**Contributions :** 0,30 + 0,20 + 0,156 + 0,121 + 0,15 = **0,927**
**Score :** 93 (Exceptionnel)

Tu es tombé sur un thermique monstrueux, tu es resté dans le cœur et tu l'as exploité pendant deux bonnes minutes. Le scénario de rêve.

### Le passage éclair (pénalisé)

| Mesure | Valeur | Score |
|--------|-------|-------|
| Montée max | 4,8 m/s | 0,96 |
| Montée nette | 2,4 m/s | 0,80 |
| Centrage | 0,85 | 0,85 |
| Régularité | 0,45 m/s | 0,78 |
| Durée / tours | 25 s / 2 tours | 0,28 |

**Contributions :** 0,288 + 0,16 + 0,17 + 0,116 + 0,042 = **0,776**
**Score :** 78 (Exceptionnel)

Grosse ascendance, super centrage, mais tu n'es resté que deux tours. Si tu l'avais exploité 90 secondes avec la même technique, le facteur de durée aurait apporté les points manquants et le score serait de 88.

### La montée arrachée

| Mesure | Valeur | Score |
|--------|-------|-------|
| Montée max | 2,6 m/s | 0,52 |
| Montée nette | 0,9 m/s | 0,30 |
| Centrage | 0,45 | 0,45 |
| Régularité | 1,4 m/s | 0,30 |
| Durée / tours | 180 s / 6 tours | 1,0 |

**Contributions :** 0,156 + 0,06 + 0,09 + 0,045 + 0,15 = **0,501**
**Score :** 50 (Faible)

Thermique faible, cœur cassé, beaucoup de recherche. Le libellé est dur, mais il décrit le thermique plus que toi : tu t'y es accroché pendant 3 minutes et 6 tours, et le facteur de durée t'a donné tous ses points. Un jour comme ça, la montée qui t'a gardé en l'air était le bon choix.

### Le chirurgien du cœur

| Mesure | Valeur | Score |
|--------|-------|-------|
| Montée max | 3,4 m/s | 0,68 |
| Montée nette | 1,8 m/s | 0,60 |
| Centrage | 0,85 | 0,85 |
| Régularité | 0,65 m/s | 0,68 |
| Durée / tours | 95 s / 3 tours | 1,0 |

**Contributions :** 0,204 + 0,12 + 0,17 + 0,101 + 0,15 = **0,745**
**Score :** 75 (Exceptionnel)

Thermique moyen, mais tu as parfaitement centré et tu l'as bien exploité. La technique avant la puissance.

---

## En résumé

Le score d'un thermique n'est pas là pour te juger, mais pour te faire un retour. Un résumé chiffré de « ce qui s'est passé là-dedans », pour que tu apprennes de chaque thermique au lieu de juste te souvenir que « celui-là était bien ».

Utilise-le pour :
- Repérer des tendances dans ton vol
- Suivre ta progression dans le temps
- Identifier des points faibles précis à travailler
- Frimer devant tes potes avec de vraies données

Et n'oublie pas : même un thermique « Moyen » qui t'a amené à la montée suivante vaut mieux qu'un « Excellent » que tu n'as pas pris parce que tu attendais mieux.

Maintenant, va voler !

---

Voir aussi : [Analyse avancée des thermiques](/doc/advanced-thermal-analysis) | [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings)
