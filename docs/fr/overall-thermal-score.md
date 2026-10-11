---
title: Le score global de thermique expliqué
description: Comment on calcule la qualité d’un thermique, avec un exemple détaillé
category: Thermal Analysis
order: 4
---

Tu as déjà vu le score de qualité d’un thermique dans l’onglet **Thermiques** en te demandant s’il veut vraiment dire quelque chose ? Bonne nouvelle : oui. Ce n’est pas du ressenti. Voyons exactement comment ce chiffre est calculé, pour que tu comprennes ce qui sépare « Moyen » d’« Excellent », et ce que tu peux y faire.

## Vue d’ensemble

Le score de thermique (0 à 100) est une combinaison pondérée de cinq facteurs. Ce sont les cinq mêmes lignes que dans le **Détail du score** d’un thermique :

| Facteur | Poids | Ce qu’il mesure |
|--------|--------|------------------|
| **Montée** | 30% | Quelle était la force de l’ascendance au mieux ? |
| **Efficacité** | 20% | Ta montée était-elle bien directe ? |
| **Centrage** | 20% | Es-tu bien resté dans le cœur ? |
| **Régularité** | 15% | Les valeurs du vario étaient-elles stables ? |
| **Durée** | 15% | Es-tu vraiment resté exploiter le thermique ? |

Chaque facteur est ramené sur une échelle de 0 à 1, multiplié par son poids, puis l’ensemble est mis à l’échelle 0 à 100. Simple en théorie, révélateur en pratique.

Le facteur **Durée** est essentiel : il empêche les simples passages d’obtenir un score élevé. Attraper une bonne ascendance le temps de quelques tours ne prouve pas que tu sais enrouler ; rester et exploiter le thermique, si.

---

## La formule

Voici le calcul réel :

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Les seuils de la formule sont fixés en m/s et en mètres, quelles que soient les unités que tu affiches.

### Comment chaque composante est calculée

**1. Score de montée**
```
climbScore = min(1, maxClimb / 5.0)
```
Ta meilleure montée soutenue dans le thermique (la valeur **Max** dans le détail du thermique, lissée sur 5 secondes pour qu’un seul point GPS bruité ne puisse pas tricher) divisée par 5,0 m/s, plafonnée à 1. Seul le dixième supérieur des montées dans We-Fly approche du plafond ; une montée moyenne obtient un peu plus de la moitié.

**2. Score d’efficacité**
```
efficiencyScore = min(1, heightGain / driftDistance)
```
La hauteur gagnée divisée par la distance horizontale entre le début et la fin du thermique. Gagner autant de hauteur que tu as dérivé, ou plus, donne le score plein de 1,0. Plus le vent t’emporte de côté, plus il baisse.

**3. Score de centrage**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Une voile ne peut pas tourner sur place : tourner pile au rayon du cœur lui-même (ou plus serré) donne un 1,0 parfait. Chaque rayon de cœur de distance en plus coûte la moitié du score : tourner à deux fois le rayon du cœur donne 0,5, à trois fois, zéro. La dérive due au vent est retirée d’abord, en comparant chaque tour à son propre centre local.

**4. Score de régularité**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
L’inverse de la variabilité de ton vario (l’écart-type de ton taux de montée lissé). Thermique doux = score élevé. Passer sans cesse d’une forte ascendance à la dégueulante = score faible. À partir de 2 m/s de variabilité, la régularité ne rapporte plus rien.

**5. Score de durée**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Il combine la durée et le nombre de tours pour récompenser un vrai travail d’enroulement. Le score plein demande environ 90 secondes ET au moins 2 tours complets. Chaque thermique de la liste compte déjà au moins deux tours complets (voir [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings)) : en pratique, ce facteur pénalise donc surtout les montées courtes.

---

## Exemple détaillé : le thermique n° 9

Faisons un vrai calcul avec des chiffres concrets. Disons que tu as exploité un thermique avec ces stats :

| Indicateur | Valeur |
|--------|-------|
| Montée max | 3.5 m/s |
| Efficacité | 0.41 (41%) |
| Centrage | 0.53 (53%) |
| Variabilité | 0.92 m/s |
| Durée | 75 secondes |
| Nombre de tours | 3 tours |

### Étape 1 : calculer le score de chaque composante

**Score de montée :**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Ta meilleure montée soutenue de 3,5 m/s représente 70 % de la référence de 5,0 m/s.

**Score d’efficacité :**
```
efficiencyScore = 0.41
```
Tu as gagné en hauteur 41 % de ce que tu as dérivé de côté. Plutôt classique pour un thermique qui dérive.

**Score de centrage :**
```
centeringScore = 0.53
```
En moyenne, tu as tourné à un peu moins de deux fois le rayon du cœur. De la marge de progression, mais pas mal.

**Score de régularité :**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Une variabilité du vario de 0,92 m/s veut dire que l’ascendance était un peu turbulente, sans être folle.

**Score de durée :**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Tu y as passé 75 secondes et fait 3 tours complets : du bon travail d’enroulement, juste un peu en dessous des 90 secondes.

### Étape 2 : appliquer les poids

Multiplie maintenant chaque score par son poids :

| Composante | Score | Poids | Contribution |
|-----------|-------|--------|--------------|
| Montée | 0.70 | 0.30 | 0.210 |
| Efficacité | 0.41 | 0.20 | 0.082 |
| Centrage | 0.53 | 0.20 | 0.106 |
| Régularité | 0.54 | 0.15 | 0.081 |
| Durée | 0.833 | 0.15 | 0.125 |
| **Total** | | | **0.604** |

### Étape 3 : mettre à l’échelle 0 à 100

```
qualityScore = round(0.604 * 100) = 60
```

**Résultat : un score de 60**, tout juste dans la catégorie « Moyen ». Des spirales plus serrées feraient monter à la fois l’efficacité et le centrage, et c’est là que se trouvent les points faciles.

---

## Interpréter ton score

| Plage de score | Note | Ce que ça veut dire |
|-------------|--------|---------------|
| **80 et plus** | Exceptionnel | Les meilleures montées de We-Fly. Une ascendance forte, bien exploitée. |
| **73 à 79** | Excellent | Mieux que trois thermiques sur quatre. Tu as trouvé le cœur vite et tu y es resté. |
| **66 à 72** | Bon | Au-dessus du thermique typique. Du bon travail. |
| **60 à 65** | Moyen | Vers le milieu du peloton. Le boulot est fait, avec un peu de performance laissée en route. |
| **Moins de 60** | Faible | Du mal à trouver ou à garder le cœur, une montée courte, ou des conditions vraiment pourries. |

Les plages sont calibrées sur de vrais thermiques volés par les pilotes de We-Fly : le thermique typique (médian) obtient environ 65, un quart des thermiques atteint 73 ou plus, et un sur dix atteint 80.

---

## Ce que te dit chaque composante

### Montée (poids de 30 %)

C’est la plus lourdement pondérée parce que… eh bien, tout l’intérêt est de monter. Elle utilise ta meilleure montée *soutenue* : elle récompense donc le fait de trouver la partie forte du thermique, pas juste de s’y accrocher. Mais n’en fais pas une obsession : parfois, un thermique faible exploité parfaitement rapporte plus de distance qu’un fort dont tu ne cesses de sortir.

**Score de montée faible ?**
- Le thermique était vraiment faible (pas ta faute)
- Tu n’as jamais trouvé la partie la plus forte du cœur (regarde le centrage)
- Tu es arrivé tard à la fête et tu n’as pris que le haut

### Efficacité (poids de 20 %)

Efficacité = hauteur gagnée / distance de dérive horizontale, plafonnée à 1,0. Un thermique où tu gagnes au moins autant de hauteur que tu dérives obtient le 1,0 plein, ce qui demande un vent faible ou une montée forte.

Valeurs typiques :
- **0,3 à 0,4** : normal, un peu de dérive
- **0,5 à 0,6** : très bien, des spirales serrées
- **au-dessus de 0,6** : excellent, dérive minimale

**Efficacité faible ?**
- Un vent fort qui te pousse de côté
- Des spirales larges ou une inclinaison insuffisante
- Une entrée sous le vent jamais corrigée

### Centrage (poids de 20 %)

À quelle distance du cœur tu as tourné. Tourner au rayon du cœur lui-même, c’est parfait ; le score baisse en ligne droite à mesure que ta distance moyenne augmente, jusqu’à zéro à trois fois le rayon du cœur.

**Centrage faible ?**
- Tu as mis du temps à trouver le cœur
- Tu sortais sans cesse et devais recentrer
- Le cœur bougeait (thermique en bulle) ou était tout petit

### Régularité (poids de 15 %)

Basée sur l’écart-type des valeurs de ton vario. Un bip doux et régulier = score élevé. Un vario qui s’affole = score faible.

**Régularité faible ?**
- Thermique turbulent (pas toujours ta faute)
- Tu traversais le cœur pour ressortir de l’autre côté
- Ascendance et descendance mêlées dans le même tour

### Durée (poids de 15 %)

Elle combine la durée et le nombre de tours pour prouver que tu as vraiment exploité le thermique, plutôt que de juste passer au travers. Ce facteur récompense les pilotes qui s’engagent dans le thermique et l’exploitent correctement.

Le score plein demande :
- **environ 90 secondes** de durée (les thermiques plus courts rapportent proportionnellement moins)
- **au moins 2 tours complets** (moins de tours rapportent proportionnellement moins)

Les deux facteurs se multiplient : il te faut LES DEUX pour bien scorer ici. Une montée de 30 secondes avec trois tours ne récolte qu’un tiers des points.

**Score de durée faible ?**
- Tu as quitté le thermique trop tôt
- Le thermique est mort avant que tu puisses l’exploiter correctement

---

## Comment améliorer ton score

### Gains rapides

1. **Serre dès que tu touches l’ascendance** : n’attends pas, commence à tourner dès que le vario s’emballe
2. **Décale ta spirale vers l’ascendance** : la technique de centrage classique, élargir côté faible, resserrer côté fort
3. **Surveille ton inclinaison** : trop à plat, ce sont des spirales larges et de la dérive ; trop inclinée, c’est inefficace dans le faible

### Suis ta progression

Compare les thermiques de plusieurs vols sur le même site. Des tendances vont apparaître :
- « J’ai toujours du mal à centrer à ce déco »
- « Mes thermiques de l’après-midi sont plus réguliers »
- « Cette nouvelle voile a vraiment amélioré mon efficacité »

### Ne cours pas après le chiffre

Un score de 55 dans un thermique cassé et musclé peut refléter un meilleur pilotage qu’un 80 dans une belle colonne large et douce. Le contexte compte. Sers-toi du score pour suivre ta propre progression dans le temps, pas pour te comparer aux autres sur des journées différentes.

---

## En coulisses : pourquoi ces poids ?

Les poids (30/20/20/15/15) ne sortent pas d’un chapeau. Ils reposent sur ce qui compte vraiment pour bien enrouler :

- **La montée mène la danse** (30 %) parce que le but premier est de monter. Un thermique faible exploité parfaitement reste un thermique faible.

- **L’efficacité et le centrage se partagent la part technique** (20 % chacun) parce qu’ils relèvent tous deux du pilotage. On peut avoir l’un sans l’autre (bon centrage mais en dérivant, ou spirales serrées au mauvais endroit).

- **La régularité est un modulateur** (15 %) parce qu’une partie de la turbulence ne dépend pas de toi. Elle influe sur ton score sans le dominer.

- **La durée filtre les coups de chance** (15 %) parce que quelques tours dans une forte ascendance, ce n’est pas exploiter un thermique. Ce facteur garantit que les scores élevés vont aux pilotes qui se sont vraiment engagés dans la montée.

---

## Exemples de scénarios

### L’ascenseur chanceux

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Montée max | 5.6 m/s | 1.0 (plafonné) |
| Efficacité | 0.65 | 0.65 |
| Centrage | 0.78 | 0.78 |
| Régularité | 0.38 m/s | 0.81 |
| Durée / tours | 120s / 4 tours | 1.0 |

**Contributions :** 0.30 + 0.13 + 0.156 + 0.121 + 0.15 = **0.858**
**Score :** 86 (Exceptionnel)

Tu es tombé sur un thermique monstrueux, tu es resté dans le cœur et tu l’as exploité pendant deux bonnes minutes. Le scénario de rêve.

### Le simple passage (pénalisé)

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Montée max | 4.8 m/s | 0.96 |
| Efficacité | 0.72 | 0.72 |
| Centrage | 0.85 | 0.85 |
| Régularité | 0.45 m/s | 0.78 |
| Durée / tours | 25s / 2 tours | 0.28 |

**Contributions :** 0.288 + 0.144 + 0.17 + 0.116 + 0.042 = **0.760**
**Score :** 76 (Excellent)

Une ascendance forte, un super centrage, mais tu n’es resté que deux tours. Si tu l’avais exploité 90 secondes avec la même technique, le facteur durée aurait ajouté les points manquants et le score serait de 87.

### La montée arrachée

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Montée max | 2.6 m/s | 0.52 |
| Efficacité | 0.38 | 0.38 |
| Centrage | 0.45 | 0.45 |
| Régularité | 1.4 m/s | 0.30 |
| Durée / tours | 180s / 6 tours | 1.0 |

**Contributions :** 0.156 + 0.076 + 0.09 + 0.045 + 0.15 = **0.517**
**Score :** 52 (Faible)

Thermique faible, cœur cassé, beaucoup de recherche. La note est sévère, mais elle décrit le thermique plus que toi : tu t’es accroché pendant 3 minutes et 6 tours, et le facteur durée t’a donné tous ses points. Un jour pareil, la montée qui t’a gardé en l’air était le bon choix.

### Le roi du centrage

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Montée max | 3.4 m/s | 0.68 |
| Efficacité | 0.52 | 0.52 |
| Centrage | 0.85 | 0.85 |
| Régularité | 0.65 m/s | 0.68 |
| Durée / tours | 95s / 3 tours | 1.0 |

**Contributions :** 0.204 + 0.104 + 0.17 + 0.101 + 0.15 = **0.729**
**Score :** 73 (Excellent)

Thermique moyen, mais tu as parfaitement centré et tu l’as exploité correctement. La technique avant la puissance.

---

## En résumé

Le score de thermique n’est pas là pour te juger, mais pour te faire un retour. Un résumé chiffré de « ce qui s’est passé là-dedans », pour que tu apprennes de chaque thermique au lieu de te souvenir seulement que « celui-là était bien ».

Sers-t’en pour :
- Repérer des tendances dans ton vol
- Suivre ta progression dans le temps
- Identifier des points faibles précis à travailler
- Te vanter auprès de tes potes, données à l’appui

Et n’oublie pas : même un thermique « Moyen » qui t’a amené à la montée suivante vaut mieux qu’un « Excellent » que tu n’as pas pris parce que tu attendais mieux.

Maintenant, va voler !

---

Voir aussi : [Analyse avancée des thermiques](/doc/advanced-thermal-analysis) | [Comment fonctionne la détection des thermiques](/doc/advanced-thermal-analysis-settings)
