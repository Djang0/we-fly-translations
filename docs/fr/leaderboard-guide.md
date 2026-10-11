---
title: Guide des classements de la communauté
description: Qui vole le plus, et qui vole le mieux
category: Community
order: 2
---

*Ou : comment savoir si tu es le cheval de labour de la communauté, ou son pur-sang*

## Deux classements, deux questions

Les classements de la communauté We-Fly répondent à deux questions fondamentalement différentes :

1. **Activité :** « Qui vole le plus ? » (le volume)
2. **Efficacité :** « Qui vole le mieux ? » (la qualité)

Vois-le comme ça : l’Activité, c’est le nombre de pages de ton carnet de vol. L’Efficacité, c’est le meilleur de chaque page. L’un récompense le fait d’être là, l’autre le fait que ça compte quand tu y es.

On décortique les deux.

---

## Le classement Activité (l’onglet « Je vole plus que toi »)

### Ce qu’il mesure

Le **score cross** total de tes vols publics. C’est tout. Vole plus, vole plus loin, et le score grimpe.

### Les règles

Tous les vols ne comptent pas. Voici ce qui est éligible :

| Critère | Pourquoi |
|----------|-----|
| Distance cross >= 10 km | Écarte les plouf et le soaring au-dessus du parking |
| Vols non motorisés uniquement | Désolé les paramoteurs, celui-ci est pour les non-motorisés |
| Le vol doit être public | Les vols privés restent privés (on respecte tes secrets) |

### Ce que tu vois

| Colonne | Ce que ça veut dire |
|--------|--------------|
| Rang | Ta position au classement |
| Pilote | Prénom N. (respectueux de la vie privée) |
| Vols | Nombre total de vols éligibles |
| Heures | Temps de vol total sur les vols éligibles |
| XC km | Total des kilomètres de cross |
| Score cross | Le chiffre qui détermine ton rang |
| Niveau | Ton badge, selon ton total d’heures de vol publiques |

### Le système de niveaux (version courte)

Ton badge de niveau dépend de ton **total d’heures de vol publiques** et va du niveau Bronze jusqu’au niveau Titane. C’est un badge de progression, pas une note de pilotage : accumule assez d’heures et tu grimperas les niveaux. Vois-le comme des miles de grand voyageur, mais pour des gens qui volent vraiment.

### En résumé

L’Activité récompense **la régularité et l’assiduité**. Le pilote qui fait 200 petits cross passera devant celui qui en a fait 10 incroyables. C’est le classement « va voler, point », et il n’y a pas de raccourci. Soit tu fais les heures, soit tu ne les fais pas.

---

## Le classement Efficacité (l’onglet « Je vole mieux que toi »)

### Ce qu’il mesure

Ton **score d’efficacité** : un indicateur composite qui reflète à la fois ta façon de voler et ta régularité. C’est là que les crosseurs assidus brillent.

### Comment ça marche

Le score d’efficacité combine trois indicateurs, **à poids égal**, normalisés par z-score :

| Indicateur | Ce qu’il récompense |
|--------|----------------|
| **Distance par heure** (km/h) | Avancer efficacement : bon choix d’itinéraire, transitions solides, peu de gratte |
| **Distance par vol** (km) | Aller loin quand tu pars : s’engager dans un vrai cross, pas jeter l’éponge au premier vent de face |
| **Nombre de vols éligibles** | Être présent : plus de vols éligibles, c’est un engagement plus régulier en cross |

Ton score composite est la moyenne des trois z-scores :

```
Efficiency Score = (z_distance_per_hour + z_distance_per_flight + z_flight_count) / 3
```

Si les z-scores te donnent le regard vitreux, jette un œil au [guide du z-score pour pilotes](/doc/z-score-pilot-guide) pour tout comprendre. Mais voici la version rapide :

### L’antisèche du z-score

| Score | Couleur | Ce que ça veut dire | Traduction pilote |
|-------|-------|--------------|-------------------|
| +2.0 ou plus | Vert | Très au-dessus de la moyenne de la communauté | Tu ne voles pas, tu *voyages* |
| +1.0 à +2.0 | Vert | Nettement au-dessus de la moyenne | Pilote efficace, bonnes décisions |
| -1.0 à +1.0 | Neutre | Autour de la moyenne de la communauté | Normal, sain, rien à signaler |
| -1.0 à -2.0 | Rouge | Sous la moyenne | De la marge pour gagner en efficacité en cross |
| -2.0 ou moins | Rouge | Bien sous la moyenne | Beaucoup de vol de pente, peut-être ? |

Les trois indicateurs ont **le même poids**. Impossible de tricher en étant rapide mais court, ou en volant loin une fois par an. Il faut aller loin, aller vite, et continuer à venir.

### Critères d’éligibilité

Tout le monde n’entre pas au classement Efficacité. Ce n’est pas de l’élitisme, ce sont des statistiques :

| Condition | Raison |
|-------------|--------|
| Distance cross >= 10 km | Comme pour l’Activité : de vrais cross uniquement |
| Durée du vol > 5 minutes | Si ton vol a duré moins qu’une pause café, il ne compte pas |
| Vols non motorisés uniquement | La poignée des gaz, c’est de la triche (dans ce contexte) |
| **5 vols éligibles ou plus** | Évite les coups d’éclat isolés et le bruit statistique |
| 2 pilotes éligibles ou plus dans la communauté | Il faut au moins deux points de données pour calculer des z-scores |

### Le détail au survol

Survole une ligne (ou touche-la sur mobile) pour voir le détail du z-score par indicateur. Il te dit *d’où* vient ton efficacité :

- Beaucoup de km/h mais peu de km par vol ? Tu es rapide, mais sur des parcours courts.
- Peu de km/h mais beaucoup de km par vol ? Tu couvres de la distance, mais tu prends tout ton temps.
- Beaucoup de vols mais de petites distances ? Tu es assidu, mais tu ne pousses pas encore en cross.
- Les trois au top ? Tu es le pilote dont les autres se plaignent dans le groupe WhatsApp.

---

## Lire un z-score (la version en 30 secondes)

Un z-score te dit à quelle distance tu te trouves de la moyenne de la communauté, mesurée en écarts-types.

- **Score de 0** = tu ES la moyenne
- **Score de +1,5** = tu es 1,5 écart-type au-dessus de la moyenne (le territoire des ~7 % du haut)
- **Score de -0,5** = légèrement sous la moyenne (tout à fait normal, environ 30 % des pilotes sont là)
- **Score de +2,5** = valeur hors norme statistique : tu fais quelque chose de bien (ou tous les autres font quelque chose de travers)

Les z-scores sont **relatifs**. Si une bande de démons du cross rejoint la communauté demain, les scores de tout le monde bougent. Ton vol n’a pas changé ; c’est l’étalon qui a changé.

Tu veux la version approfondie, avec des exemples détaillés et du code ? Lis le [guide complet du z-score pour pilotes](/doc/z-score-pilot-guide).

---

## FAQ et pièges

### « Pourquoi je ne suis pas au classement Efficacité ? »

Il te faut **5 vols éligibles ou plus** (cross de 10 km et plus, non motorisé, plus de 5 minutes). Si tu as 4 vols éligibles et 47 plouf, il t’en manque encore. Va faire un vrai cross de plus et tu y es.

### « Je vole TOUT le temps, mais mon score d’efficacité est bas. »

C’est voulu. Le classement Efficacité se moque de la *fréquence* de tes vols : c’est le rôle du classement Activité. L’Efficacité mesure jusqu’où et à quelle vitesse tu vas *par vol*. Si tu enchaînes les petits vols locaux, ton rang en Activité grimpe pendant que ton score d’efficacité reste bof.

### « Mon score est négatif. Je suis un mauvais pilote ? »

Non. Un score négatif veut dire que tu es **sous la moyenne actuelle de la communauté** sur ces indicateurs. C’est relatif. Si la communauté est pleine de compétiteurs de cross, même un bon pilote loisir sera dans le négatif. Ça ne dit rien de ta sécurité, de ton aisance dans la turbulence, de ta précision à l’atterrissage, ni de ton talent pour choisir le bon bar après le vol.

### « Pourquoi ce minimum de 10 km ? »

Parce qu’on veut mesurer le vol de cross, pas l’enroulement au-dessus du parking. Le seuil de 10 km écarte les plouf, les sessions de soaring local et ces vols où tu as techniquement fait du « cross » en dérivant sous le vent jusqu’au champ le plus proche. Si tu n’as pas couvert une vraie distance, ce n’est pas du cross. C’est juste du vol, et il n’y a aucun mal à ça, mais ça relève d’un autre tableau de scores.

### « Pourquoi mon nom est-il raccourci ? »

Pour la vie privée. Tous les noms de pilotes s’affichent sous la forme **Prénom N.** (prénom + initiale du nom) dans les classements. Ton nom complet reste sur ton profil, mais les classements publics restent discrets.

### « Je peux apparaître dans les deux classements ? »

Bien sûr. La plupart des pilotes actifs y seront. Tu peux être 3e en Activité et 15e en Efficacité, ou l’inverse. Les deux classements mesurent des choses complètement différentes, et exceller dans l’un ne garantit rien dans l’autre.

---

## En résumé (version courte)

- **Activité** = score cross total des vols publics. Vole plus, monte au classement. Simple.
- **Efficacité** = jusqu’où, à quelle vitesse et à quelle fréquence tu fais du cross, normalisé sur la communauté. Vole mieux, monte au classement.
- Les deux exigent **10 km de cross minimum** et excluent les vols motorisés.
- L’Efficacité demande **5 vols éligibles ou plus** et utilise une **normalisation par z-score**.
- Score d’efficacité positif (vert) = au-dessus de la moyenne. Négatif (rouge) = en dessous. Ni l’un ni l’autre n’est un jugement sur ta personne.
- Survole une ligne pour voir le détail par indicateur.

Maintenant, arrête de lire sur les classements et va enregistrer un vol qui te fera gagner une place.

---

*« Il y a deux sortes de pilotes : ceux qui regardent le classement avant de voler, et les menteurs. »*
*Proverbe ancestral de We-Fly*
