---
title: "Comment fonctionne la détection des thermiques"
description: "Les règles qu’utilise We-Fly pour décider où un thermique commence, où il se termine et quelles montées entrent dans la liste"
category: Thermal Analysis
order: 2
---

*Ou : comment l’analyse décide que tous ces tours étaient bien un thermique*

Chaque thermique que tu vois dans l’onglet **Thermiques** d’un vol a été trouvé par le même détecteur, avec les mêmes seuils, pour tous les pilotes. Pas de curseurs à régler, rien à réinitialiser : les règles sont fixes, pour que tes chiffres veuillent dire la même chose que ceux de ton pote, vol après vol.

Cette page explique ces règles, pour que tu saches pourquoi quand l’analyse ignore une montée que tu es sûr d’avoir travaillée (ou coupe un thermique en deux).

---

## La version express

1. Le détecteur regarde une courte fenêtre glissante de ta trace et se pose quatre questions : est-ce que tu montes, est-ce que tu tournes, est-ce que le virage est régulier, et est-ce que tu as gagné de la hauteur ?
2. Il combine les réponses en un seul **score de thermique** entre 0 et 1.
3. Une petite machine à états, qui hésite volontairement, transforme ce score en « transition » ou « enroulement », pour qu’un simple bouillon ou un tour dans la dégueulante ne fasse pas basculer le résultat.
4. Chaque montée candidate est ensuite recadrée sur les tours que tu as réellement faits, et n’est gardée que si elle dure assez longtemps, fait gagner de la hauteur et contient au moins deux tours complets.

Le reste de cette page détaille chaque étape.

Tous les seuils ci-dessous sont les valeurs qu’utilise le moteur en interne, en unités métriques. Tes unités d’affichage (pieds, nœuds, etc.) changent la façon dont les chiffres te sont montrés, pas l’endroit où les limites sont tracées.

---

## Étape 1 : quatre signaux tirés d’une fenêtre glissante

Pour chaque point GPS, le détecteur regarde les dix points précédents. Avec un enregistreur classique à un point par seconde, ça fait environ dix secondes de vol, soit à peu près un quart à une moitié de tour.

Dans cette fenêtre, il lit quatre signaux, chacun ramené sur une échelle de 0 à 1 :

| Signal | Ce qu’il mesure | Note maximale à | Poids |
|---|---|---|---|
| Vario | Vitesse verticale moyenne sur la fenêtre | 3 m/s | 45 % |
| Régularité de l’enroulement | La stabilité de ton taux de virage | virage parfaitement régulier | 25 % |
| Taux de virage | La vitesse à laquelle ton cap change | 30°/s | 20 % |
| Gain de hauteur | Altitude nette gagnée sur la fenêtre | 50 m | 10 % |

Le vario pèse le plus lourd parce que c’est la preuve la plus directe d’une ascendance. La régularité de l’enroulement vient ensuite, parce qu’elle distingue un thermique organisé (des tours fluides et réguliers) d’une turbulence aléatoire, où ton cap saute dans tous les sens. Le taux de virage et le gain de hauteur viennent confirmer le tableau.

La somme pondérée donne le **score de thermique**. Un pilote en transition rectiligne dans une masse d’air calme obtient un score proche de zéro ; un pilote qui enchaîne des tours réguliers dans un bon thermique dépasse largement 0,5.

---

## Étape 2 : la machine à états (pourquoi le détecteur hésite exprès)

Si le détecteur disait simplement « score au-dessus de X = thermique », le résultat clignoterait à chaque bosse ou à chaque passage côté dégueulante d’un cœur cassé. Il passe donc par quatre états :

| État | Comment on y entre | Comment on en sort |
|---|---|---|
| **Transition** | État de départ | Le score atteint **0,35** → Entrée |
| **Entrée** | Le score a atteint 0,35 | Le score reste à 0,35 ou plus pendant **5 secondes** → Enroulement. Il repasse sous 0,35 → retour en Transition (fausse alerte) |
| **Enroulement** | Thermique confirmé | Le score passe sous **0,20** → Sortie |
| **Sortie** | Le score est passé sous 0,20 | Il reste sous 0,20 pendant **3 secondes** → Transition. Il remonte à 0,35 ou plus → de nouveau Enroulement |

Deux détails comptent ici :

- **L’entrée est plus exigeante que la sortie.** Il faut 0,35 pour démarrer un thermique, mais il suffit de rester au-dessus de 0,20 pour le garder. Cet écart (appelé hystérésis) empêche un thermique haché d’être découpé en cinq.
- **Entre les deux, le détecteur attend.** Si le score flotte entre 0,20 et 0,35 pendant que tu sors, il ne termine pas le thermique et ne le relance pas non plus tant que la situation n’est pas claire.

### Garde-fous pour les longues montées

Un long thermique accumule beaucoup de hauteur, et cette hauteur en banque peut masquer le moment où l’ascendance s’est vraiment arrêtée. Des règles supplémentaires rattrapent ce cas :

- **Contrôle de la tendance récente.** Pendant l’enroulement, si les 60 dernières secondes montrent une perte nette de hauteur, le thermique est clos immédiatement, aussi bon qu’il ait été avant.
- **Contrôle de la montée moyenne.** Après la première minute, la montée moyenne depuis le début du thermique doit rester au-dessus de 0,2 m/s. La barre passe à 0,3 m/s après trois minutes et à 0,4 m/s après cinq. Passe en dessous et le thermique est clos.
- **Coupure sur descente franche.** Une fois en sortie, perdre 30 m de plus termine le thermique immédiatement, même si quelques tours de recherche font brièvement remonter le score.

C’est grâce à ces règles que deux vraies montées reliées par une courte transition de recherche apparaissent comme deux thermiques, et pas un seul.

---

## Étape 3 : recadrer, puis garder ou écarter

Quand un thermique se termine, le détecteur le nettoie avant de décider s’il compte.

**Recadrage.** La machine à états ouvre un thermique quelques secondes après que tu commences à tourner et le ferme quelques secondes après que tu en sors. Ces bords sont surtout de la transition de recherche, donc le thermique est recadré pour aller du début de ton premier 360° complet à la fin du dernier. Un tour complet demande au moins huit points GPS, pour qu’un tortillement bruité ne compte pas.

**Garder ou écarter.** Après recadrage, un thermique n’est gardé que si :

- il a **fait gagner de la hauteur** au total,
- il a duré au moins **15 secondes**, et
- il contient au moins **deux tours complets**.

Tout le reste est considéré comme un passage dans une ascendance ou un tour de recherche, pas comme un thermique. Tu retrouves quand même ce temps dans l’onglet **Phases** : les tours qui n’ont pas passé la barre apparaissent en **Recherche**, et le reste en **Transition** ou **Flottement**.

### Décollages tractés et motorisés

Une montée au treuil, en remorquage ou au paramoteur est forte et régulière, exactement ce qui fait un bon score, mais ce n’est pas un thermique. Quand le type de décollage d’un vol est **Tracté** ou **Motorisé**, la détection ne commence qu’à ton premier enroulement soutenu (un taux de virage lissé d’au moins 8°/s tenu sur huit points consécutifs). Tout ce qui précède est traité comme la montée du décollage.

Si le type de décollage d’un vol est faux, corrige-le avec **Modifier le type de décollage** dans le menu des actions du vol. Le vol est réanalysé avec le nouveau réglage.

---

## Étape 4 : ce qui est mesuré sur chaque thermique

Une fois un thermique gardé, l’analyse le mesure. Ce sont les chiffres que tu vois dans le panneau de détail du thermique :

- **Montée.** Gain, montée moyenne, maximale et minimale. Le maximum et le minimum sont lissés sur 5 secondes, pour qu’un seul point GPS bruité ne puisse pas établir un record ; les pics bruts sur un point sont affichés à côté sous l’étiquette « pic ».
- **Cœur.** Pour chaque tour complet, l’analyse trouve le centre de l’ascendance, pondéré vers les points où tu montais le mieux. Ces centres tour par tour sont combinés pour donner la position, la force et la taille du cœur du thermique.
- **Temps de centrage.** Le temps entre le début du thermique et le premier moment où tu étais à moins de 50 m du cœur en montant à plus de 70 % de sa force.
- **Centrage.** La distance à laquelle tu as tourné autour du cœur. Enrouler au rayon du cœur (ou plus serré) donne 100 % ; chaque rayon de cœur supplémentaire de distance coûte 50 %, donc tourner à trois fois le rayon du cœur donne zéro. La dérive due au vent est retirée en comparant chaque tour à son propre centre local.
- **Efficacité.** La hauteur gagnée divisée par la distance horizontale entre le point de début et le point de fin du thermique, plafonnée à 100 %.
- **Dynamique de virage.** Sens, nombre de tours complets, taux de virage moyen, temps par tour, rayon de spirale, et une estimation de l’inclinaison et de la vitesse air à partir du rayon et de la période du virage.
- **Dérive et vent.** La distance de dérive et une estimation de la force et de la direction du vent, d’après la façon dont tes tours se sont déplacés au-dessus du sol.

Tout cela alimente le **score de qualité** du thermique et ses **Conseils**. La formule de notation a sa propre page : [Le score global de thermique expliqué](/doc/overall-thermal-score).

---

## FAQ

### Pourquoi ma montée préférée n’est-elle pas dans la liste ?

Vérifie dans cet ordre :

1. As-tu fait au moins **deux tours complets** ? Une montée traversée tout droit, ou avec un seul tour, ne compte pas.
2. A-t-elle duré au moins **15 secondes** une fois recadrée sur tes tours ?
3. As-tu vraiment **gagné de la hauteur** entre ton premier et ton dernier tour complet ?
4. Était-ce juste après une montée au treuil ou au moteur ? Sur un vol **Tracté** ou **Motorisé**, rien ne compte avant ton premier enroulement soutenu.

### Pourquoi un thermique a-t-il été coupé en deux ?

Le plus souvent, c’est le contrôle de la tendance récente ou la coupure sur descente franche qui s’est déclenché : quelque part au milieu, tu as perdu de la hauteur pendant une minute, ou perdu 30 m alors que le score était bas. Du point de vue de la trace, tu as quitté un thermique et tu en as trouvé un autre.

### Puis-je modifier les seuils ?

Non. Les anciennes versions de We-Fly avaient un panneau de réglages pour ça ; il a disparu. Des règles fixes permettent de comparer honnêtement le nombre de thermiques, les taux de montée et les scores de qualité entre tes propres vols et avec les autres pilotes.

### Ces règles changent-elles mes statistiques de vol ?

Elles les définissent. Ton nombre de thermiques, la hauteur gagnée en thermique, ta montée moyenne et les chiffres d’enroulement du Cockpit viennent tous de ce détecteur. Comme tout le monde a les mêmes règles, les comparaisons se font à armes égales.

### L’intervalle d’enregistrement de mon instrument compte-t-il ?

Un peu. La fenêtre glissante et le test du « tour complet » comptent des points GPS. Les enregistreurs à un point par seconde donnent le résultat le plus propre. Un enregistreur qui prend un point toutes les quelques secondes voit moins de points par tour, donc les thermiques courts ou serrés sont plus faciles à rater.

---

## Pour aller plus loin

- [Analyse avancée des thermiques](/doc/advanced-thermal-analysis) : une visite de l’onglet **Thermiques**
- [Le score global de thermique expliqué](/doc/overall-thermal-score) : comment se construit le score de chaque thermique
