---
title: Le score global de thermique expliqué
description: Comment on calcule la qualité d’un thermique, avec un exemple détaillé
category: Thermal Analysis
order: 4
---

Tu as déjà vu ce score de qualité dans l’analyse avancée des thermiques en te demandant s’il veut vraiment dire quelque chose ? Bonne nouvelle : oui. Ce n’est pas du ressenti. Voyons exactement comment ce chiffre est calculé, pour que tu comprennes ce qui sépare « Moyen » d’« Excellent », et ce que tu peux y faire.

## Vue d’ensemble

Le score global de thermique (0 à 100) est une combinaison pondérée de cinq facteurs :

| Facteur | Poids | Ce qu’il mesure |
|--------|--------|------------------|
| **Montée** | 30% | Quelle était la force de l’ascendance ? |
| **Efficacité** | 20% | Ta montée était-elle bien verticale ? |
| **Centrage** | 20% | Es-tu bien resté dans le cœur ? |
| **Régularité** | 15% | Les valeurs du vario étaient-elles stables ? |
| **Durée** | 15% | As-tu vraiment exploité le thermique ? |

Chaque facteur est ramené sur une échelle de 0 à 1, multiplié par son poids, puis l’ensemble est mis à l’échelle 0 à 100. Simple en théorie, révélateur en pratique.

Le facteur **Durée** est essentiel : il empêche les scores élevés pour un simple passage dans l’ascendance. Traverser une bonne ascendance pendant 15 secondes ne prouve pas que tu sais enrouler ; tourner pour de bon et exploiter le thermique, si.

---

## La formule

Voici le calcul réel tiré du code :

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

### Comment chaque composante est calculée

**1. Score de montée**
```
climbScore = min(1, climbrate / 3.0)
```
Ton taux de montée moyen divisé par 3,0 m/s (plafonné à 1). Donc 3 m/s ou plus = score parfait. En dessous, c’est proportionnellement moins.

**2. Score d’efficacité**
```
efficiencyScore = heightGain / horizontalDistance
```
C’est déjà une valeur entre 0 et 1. Une efficacité parfaite (monter tout droit) = 1,0. Plus tu dérives à l’horizontale, plus elle baisse.

**3. Score de centrage**
```
centeringScore = centeringQuality
```
Il vient de l’algorithme d’analyse du cœur : le temps que tu as passé près du point le plus fort du thermique. Déjà entre 0 et 1.

**4. Score de régularité**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
L’inverse de la variabilité de ton vario (l’écart-type des valeurs de montée). Thermique doux = score élevé. Passer de +5 à -2 m/s = score faible. À partir de 2 m/s de variabilité, la régularité ne rapporte plus rien.

**5. Score de durée**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Il combine la durée et le nombre de tours pour récompenser un vrai travail d’enroulement. Le score plein demande environ 90 secondes ET au moins 2 tours complets. Un passage de 15 secondes sans aucun tour donne un score proche de zéro ici, même si les autres indicateurs sont excellents.

---

## Exemple détaillé : le thermique n° 9

Faisons un vrai calcul avec des chiffres concrets. Disons que tu as exploité un thermique avec ces stats :

| Indicateur | Valeur |
|--------|-------|
| Taux de montée | 2.15 m/s |
| Efficacité | 0.41 (41%) |
| Centrage | 0.53 (53%) |
| Variabilité | 0.92 m/s |
| Durée | 75 secondes |
| Nombre de tours | 3 tours |

### Étape 1 : calculer le score de chaque composante

**Score de montée :**
```
climbScore = min(1, 2.15 / 3.0)
climbScore = min(1, 0.717)
climbScore = 0.717
```
Ton taux de montée de 2,15 m/s représente 71,7 % de la référence « parfaite » de 3,0 m/s.

**Score d’efficacité :**
```
efficiencyScore = 0.41
```
Déjà normalisé. Tu as gagné en hauteur 41 % de la distance parcourue à l’horizontale. Plutôt classique pour un thermique qui dérive.

**Score de centrage :**
```
centeringScore = 0.53
```
Tu as passé à peu près la moitié du temps dans une ascendance correcte. De la marge de progression, mais pas mal.

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
Tu y as passé 75 secondes et fait 3 tours complets : du bon travail d’enroulement.

### Étape 2 : appliquer les poids

Multiplie maintenant chaque score par son poids :

| Composante | Score | Poids | Contribution |
|-----------|-------|--------|--------------|
| Montée | 0.717 | 0.30 | 0.215 |
| Efficacité | 0.41 | 0.20 | 0.082 |
| Centrage | 0.53 | 0.20 | 0.106 |
| Régularité | 0.54 | 0.15 | 0.081 |
| Durée | 0.833 | 0.15 | 0.125 |
| **Total** | | | **0.609** |

### Étape 3 : mettre à l’échelle 0 à 100

```
qualityScore = round(0.609 * 100) = 61
```

**Résultat : score global de 61**, bien installé dans la catégorie « Bon ».

---

## Interpréter ton score

| Plage de score | Note | Ce que ça veut dire |
|-------------|--------|---------------|
| **70-100** | Excellent | Un enroulement de niveau compétition. Tu as trouvé le cœur vite et tu y es resté. |
| **50-69** | Bon | Du bon travail. Tu as pris l’altitude sans perdre trop de temps. |
| **25-49** | Moyen | Le boulot est fait, mais tu as laissé de la performance en route. |
| **0-24** | Faible | Du mal à trouver ou à garder le cœur, ou des conditions vraiment pourries. |

---

## Ce que te dit chaque composante

### Montée (poids de 30 %)

C’est la plus lourdement pondérée parce que… eh bien, tout l’intérêt est de monter. Mais n’en fais pas une obsession : parfois, un thermique à 1,5 m/s exploité parfaitement rapporte plus de kilomètres de cross qu’un 4,0 m/s dont tu ne cesses de sortir.

**Score de montée faible ?**
- Le thermique était vraiment faible (pas ta faute)
- Tu as passé trop de temps sur les bords (regarde le centrage)
- Tu es arrivé tard à la fête et tu n’as pris que le haut

### Efficacité (poids de 20 %)

Efficacité = hauteur gagnée / distance horizontale parcourue. Une hélice parfaite qui monte tout droit ferait 1,0 (et serait impossible avec un vrai vent).

Valeurs typiques :
- **0.3-0.4** : normal, un peu de dérive
- **0.5-0.6** : très bien, des spirales serrées
- **0.6+** : excellent, dérive minimale

**Efficacité faible ?**
- Un vent fort qui te pousse de côté
- Des spirales larges ou une inclinaison insuffisante
- Une entrée sous le vent jamais corrigée

### Centrage (poids de 20 %)

Le temps passé dans le bon par rapport au temps passé à errer sur les bords. Calculé avec une décroissance exponentielle selon la distance au cœur : plus tu t’éloignes du centre, plus ton score chute vite.

**Centrage faible ?**
- Tu as mis du temps à trouver le cœur
- Tu sortais sans cesse et devais recentrer
- Le cœur bougeait (thermique en bulle) ou était tout petit

### Régularité (poids de 15 %)

Basée sur l’écart-type des valeurs de ton vario. Un bip doux et régulier = score élevé. Un vario qui s’affole = score faible.

**Régularité faible ?**
- Thermique turbulent (pas toujours ta faute)
- Tu traversais le cœur pour ressortir de l’autre côté
- Ascendance et descendance mêlées dans le même tour

### Durée (poids de 15 %)

Elle combine la durée et le nombre de tours pour prouver que tu as vraiment exploité le thermique, plutôt que de juste passer au travers. Traverser une ascendance à 4 m/s pendant 10 secondes, ce n’est pas enrouler, c’est de la chance. Ce facteur récompense les pilotes qui s’engagent dans le thermique et l’exploitent correctement.

Le score plein demande :
- **environ 90 secondes** de durée (les thermiques plus courts rapportent proportionnellement moins)
- **au moins 2 tours complets** (moins de tours rapportent proportionnellement moins)

Les deux facteurs se multiplient : il te faut LES DEUX pour bien scorer ici. Une transition en ligne droite de 2 minutes dans l’ascendance (0 tour) donne zéro. Un seul 360 rapide dans une ascendance faible (10 secondes) donne aussi presque zéro.

**Score de durée faible ?**
- Tu as quitté le thermique trop tôt
- Tu ne t’es pas engagé à enrouler (simple passage)
- Le thermique est mort avant que tu puisses l’exploiter correctement

---

## Comment améliorer ton score

### Gains rapides

1. **Serre dès que tu touches l’ascendance** : n’attends pas, commence à tourner dès que le vario s’emballe
2. **Décale ta spirale vers l’ascendance** : la technique de centrage classique, élargir côté faible, resserrer côté fort
3. **Surveille ton inclinaison** : trop à plat = spirales larges = dérive. Trop inclinée = inefficace dans le faible

### Suis ta progression

Ouvre le même thermique dans l’outil d’analyse après plusieurs vols depuis le même site. Des tendances vont apparaître :
- « J’ai toujours du mal à centrer à ce déco »
- « Mes thermiques de l’après-midi sont plus réguliers »
- « Cette nouvelle voile a vraiment amélioré mon efficacité »

### Ne cours pas après le chiffre

Un score de 45 dans un thermique cassé et musclé peut refléter un meilleur pilotage qu’un 70 dans une belle colonne large et douce. Le contexte compte. Sers-toi du score pour suivre ta propre progression dans le temps, pas pour te comparer aux autres sur des journées différentes.

---

## En coulisses : pourquoi ces poids ?

Les poids (30/20/20/15/15) ne sortent pas d’un chapeau. Ils reposent sur ce qui compte vraiment pour bien enrouler :

- **La montée mène la danse** (30 %) parce que le but premier est de monter. Un thermique faible exploité parfaitement reste un thermique faible.

- **L’efficacité et le centrage se partagent la part technique** (20 % chacun) parce qu’ils relèvent tous deux du pilotage. On peut avoir l’un sans l’autre (bon centrage mais en dérivant, ou spirales serrées au mauvais endroit).

- **La régularité est un modulateur** (15 %) parce qu’une partie de la turbulence ne dépend pas de toi. Elle influe sur ton score sans le dominer.

- **La durée filtre les coups de chance** (15 %) parce que traverser brièvement une forte ascendance, ce n’est pas enrouler, c’est de la chance. Ce facteur garantit que les scores élevés vont aux pilotes qui se sont vraiment engagés à exploiter le thermique.

---

## Exemples de scénarios

### L’ascenseur chanceux

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Taux de montée | 4.2 m/s | 1.0 (plafonné) |
| Efficacité | 0.65 | 0.65 |
| Centrage | 0.78 | 0.78 |
| Régularité | 0.38 m/s | 0.81 |
| Durée / tours | 120s / 4 tours | 1.0 |

**Contributions :** 0.30 + 0.13 + 0.156 + 0.122 + 0.15 = **0.86**
**Score :** 86 (Excellent)

Tu es tombé sur un thermique monstrueux, tu es resté dans le cœur et tu l’as exploité pendant deux bonnes minutes. Le scénario de rêve.

### Le simple passage (pénalisé)

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Taux de montée | 3.5 m/s | 1.0 (plafonné) |
| Efficacité | 0.72 | 0.72 |
| Centrage | 0.85 | 0.85 |
| Régularité | 0.45 m/s | 0.78 |
| Durée / tours | 18s / 0 tour | 0.0 |

**Contributions :** 0.30 + 0.144 + 0.17 + 0.117 + 0.0 = **0.73**
**Score :** 73 (Excellent… de justesse)

Une ascendance forte, de belles valeurs au vario, mais tu as traversé tout droit sans t’engager à enrouler. Le score de durée à zéro fait nettement baisser le total. Avec l’ancien système de score, ce thermique aurait dépassé 85.

### La montée arrachée

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Taux de montée | 1.8 m/s | 0.60 |
| Efficacité | 0.38 | 0.38 |
| Centrage | 0.45 | 0.45 |
| Régularité | 1.4 m/s | 0.30 |
| Durée / tours | 180s / 6 tours | 1.0 |

**Contributions :** 0.18 + 0.076 + 0.09 + 0.045 + 0.15 = **0.54**
**Score :** 54 (Bon)

Thermique faible, cœur cassé, beaucoup de recherche. Mais tu t’es accroché pendant 3 minutes et tu as fait 6 tours. Cette persévérance est récompensée.

### Le roi du centrage

| Indicateur | Valeur | Score |
|--------|-------|-------|
| Taux de montée | 2.4 m/s | 0.80 |
| Efficacité | 0.52 | 0.52 |
| Centrage | 0.85 | 0.85 |
| Régularité | 0.65 m/s | 0.68 |
| Durée / tours | 95s / 3 tours | 1.0 |

**Contributions :** 0.24 + 0.104 + 0.17 + 0.102 + 0.15 = **0.77**
**Score :** 77 (Excellent)

Thermique moyen, mais tu as parfaitement centré et tu l’as exploité correctement. La technique avant la puissance.

---

## En résumé

Le score global de thermique n’est pas là pour te juger, mais pour te faire un retour. Un résumé chiffré de « ce qui s’est passé là-dedans », pour que tu apprennes de chaque thermique au lieu de te souvenir seulement que « celui-là était bien ».

Sers-t’en pour :
- Repérer des tendances dans ton vol
- Suivre ta progression dans le temps
- Identifier des points faibles précis à travailler
- Te vanter auprès de tes potes, données à l’appui

Et n’oublie pas : même un thermique « Moyen » qui t’a amené à la montée suivante vaut mieux qu’un « Excellent » que tu n’as pas pris parce que tu attendais mieux.

Maintenant, va voler !

---

Voir aussi : [Analyse avancée des thermiques](advanced-thermal-analysis.md) | [Réglages de l’analyse](advanced-thermal-analysis-settings.md)
