---
title: Notions de statistiques pour pilotes
description: Parce que les maths ne peuvent pas faire plus peur que le vol
category: Cockpit
order: 2
---

*Un guide sans langue de bois pour comprendre tes données de vol sans t’endormir*

## Les trois piliers des statistiques

### La moyenne : la plus sociable

**Ce que c’est :** additionne tous tes chiffres et divise par leur nombre. Simple comme ta prévol… enfin, c’est ce que tu crois.

**Le calcul (pas de panique) :** somme de toutes les valeurs ÷ nombre de valeurs

**La réalité :** comme ce pilote qui parle toujours de « conditions moyennes » alors qu’il veut dire « franchement chaud, mais j’y suis allé quand même ». La moyenne, c’est ton chiffre du milieu de la route, mais c’est une piètre menteuse dès que tu as des valeurs extrêmes.

**Pourquoi ça compte :** ta moyenne te montre à quoi ressemble la « normale » sur l’ensemble de tes données, mais elle se fait facilement avoir par ce jour épique où tu as enroulé jusqu’au plafond, ou par ce cauchemar de dégueulante où tu t’es posé à l’atterro bien plus vite que prévu.

---

### La médiane : l’arbitre honnête

**Ce que c’est :** range tous tes chiffres du plus petit au plus grand et prends celui du milieu. Si tu en as un nombre pair, fais la moyenne des deux du milieu.

**Pour parler franchement :** c’est ta valeur « typique », celle qui ne se laisse pas griser par les extrêmes. Pendant que la moyenne fait la fête avec les valeurs folles, la médiane est le conducteur désigné qui garde les pieds sur terre.

**Pourquoi les pilotes l’adorent :** quand la moitié de tes vols sont des cross épiques et l’autre moitié des plouf, la médiane te dit à quoi ressemble vraiment un vol « normal ». La moyenne ? Cette menteuse est quelque part au pays des rêves.

---

### L’écart-type : le dramomètre

**Ce que c’est :** à quel point tes données s’éparpillent autour de la moyenne, exprimé dans tes unités d’origine (m/s, km/h, mètres, ce que tu as mesuré).

**En langage humain :** écart-type élevé = tes vols partent dans tous les sens. Un jour tu vaches, le lendemain tu tutoies les nuages. Écart-type faible = tu es M. Régulier : même altitude, mêmes thermiques, même nombre de bières après le vol.

**La règle empirique :**
- Environ 68 % de tes valeurs tombent à ±1 écart-type de la moyenne
- Environ 95 % à ±2 écarts-types
- Environ 99,7 % à ±3 écarts-types

**Traduction :** si ton écart-type est petit, tu es prévisible (ennuyeux mais sûr). S’il est énorme, tu es soit un héros soit un danger public, selon le jour.

---

## Passons à la pratique : tes données de vol

### Taux de montée (m/s, ou fpm si tu es de la vieille école)

**Taux de montée moyen :**
- **Ce qu’il te dit :** la force typique de tes thermiques sur un vol ou une saison
- **Exemple :** une montée moyenne de 2,5 m/s, ça sonne bien, jusqu’à ce que tu réalises que tu as passé 10 minutes à 5 m/s et 40 minutes à gratter à 0,5 m/s
- **Sagesse de pilote :** « Ouais, j’ai fait du 3 m/s de moyenne aujourd’hui ! » (2 minutes dans un thermique monstrueux et tout le reste à traire des cœurs mourants)

**Taux de montée médian :**
- **Ce qu’il te dit :** la vitesse à laquelle tu montes *vraiment* la plupart du temps
- **Exemple :** une médiane de 1,5 m/s pour une moyenne de 2,5 m/s ? Tu as passé l’essentiel du vol à gratter, mon ami
- **Sagesse de pilote :** la médiane ne ment pas sur ces 45 minutes de vol de pente que tu as appelées « thermiques »

**Écart-type du taux de montée :**
- **Ce qu’il te dit :** la régularité de tes thermiques
- **Écart-type faible (< 1 m/s) :** une ascendance douce et régulière toute la journée, le rêve
- **Écart-type élevé (> 2 m/s) :** des montagnes russes, de la ville dégueulante à l’ascenseur express : excitant ou terrifiant
- **Sagesse de pilote :** journée à fort écart-type ? Prévois les sacs à vomi et ton courage

---

### Gain d’altitude (mètres ou pieds)

**Gain d’altitude moyen :**
- **Ce qu’il te dit :** l’altitude moyenne gagnée par thermique ou par vol
- **Exemple :** 500 m de gain moyen par thermique ? Joli ! Mais as-tu exploité chaque thermique jusqu’en haut, ou en as-tu lâché la plupart ?
- **Sagesse de pilote :** faire la moyenne de tes montées, c’est comme faire la moyenne de tes atterrissages : un atterrissage parfait n’efface pas trois atterrissages limites

**Gain d’altitude médian :**
- **Ce qu’il te dit :** le gain d’altitude que tu obtiens typiquement quand tu tentes d’enrouler
- **Exemple :** médiane à 300 m mais moyenne à 500 m ? De temps en temps tu cartonnes, mais d’habitude tu lâches trop tôt
- **Sagesse de pilote :** si ta médiane est bien plus basse que ta moyenne, soit tu quittes les thermiques trop vite, soit ta patience a lâché (sûrement les deux)

**Écart-type du gain d’altitude :**
- **Ce qu’il te dit :** ta régularité à exploiter les thermiques de bas en haut
- **Écart-type faible :** tu es discipliné, tu exploites chaque thermique jusqu’au bout, du pilotage de manuel
- **Écart-type élevé :** certains jours tu traires jusqu’au plafond, d’autres tu lâches au premier signe de dégueulante
- **Sagesse de pilote :** « J’ai pris 1200 m, une fois » (un écart-type de 800 m veut dire que c’était ta seule bonne montée du mois)

---

### Vitesse du vent (km/h, mph, nœuds, ou ce que ton appli météo a décidé aujourd’hui)

**Vitesse moyenne du vent :**
- **Ce qu’elle te dit :** les conditions de vent moyennes sur un vol ou une journée
- **Exemple :** 15 km/h de moyenne, ça a l’air volable, jusqu’à ce que tu regardes les rafales
- **Sagesse de pilote :** les applis météo adorent annoncer le vent moyen pendant que des rafales à 40 km/h te refont le portrait

**Vitesse médiane du vent :**
- **Ce qu’elle te dit :** la vitesse de vent que tu as eue la plupart du temps
- **Exemple :** médiane à 12 km/h, moyenne à 15 km/h ? Assez régulier, avec quelques périodes plus fortes
- **Sagesse de pilote :** quand médiane et moyenne sont proches, les conditions sont stables. Quand elles sont éloignées ? Attache ta ceinture

**Écart-type de la vitesse du vent :**
- **Ce qu’il te dit :** à quel point le vent te malmène
- **Écart-type faible (< 5 km/h) :** des conditions bien régulières : prépare ton approche, réussis ton atterrissage
- **Écart-type élevé (> 10 km/h) :** cauchemar en rafales : ton approche devient un livre dont tu es le héros
- **Sagesse de pilote :**
  - « Faible et variable » = écart-type élevé, moyenne faible (thermiques piégeux, atterrissage imprévisible)
  - « Fort et régulier » = écart-type faible, moyenne élevée (vent de face ou vent arrière musclé, mais au moins tu sais à quoi t’attendre)
  - « Fort et rafaleux » = écart-type élevé, moyenne élevée (plie la voile et file au bar)

---

## Exemple concret : histoire de deux journées

### Jour 1 : « la journée épique »
- **Montées :** 2,5, 3,0, 2,8, 2,6, 2,7 m/s
- **Moyenne :** 2,72 m/s
- **Médiane :** 2,7 m/s
- **Écart-type :** 0,19 m/s
- **Traduction :** des thermiques réguliers toute la journée, chaque cœur a tenu ses promesses, tu ne pouvais rien rater. C’est pour ces jours-là qu’on vit.

### Jour 2 : « la journée qui forge le caractère »
- **Montées :** 0,5, 5,0, 0,8, 1,0, 0,7 m/s
- **Moyenne :** 1,6 m/s (pas mal sur le papier !)
- **Médiane :** 0,8 m/s (aïe, la vérité fait mal)
- **Écart-type :** 1,71 m/s (le chaos incarné)
- **Traduction :** tu as accroché UN thermique monstrueux à 5 m/s et passé le reste de la journée à gratter comme un chat sur une moustiquaire. La moyenne dit « journée correcte », la médiane dit « mode survie », l’écart-type dit « grand n’importe quoi ».

---

## En résumé (pour les impatients)

- **Utilise la MOYENNE quand :** tu veux la vue d’ensemble sur toutes tes données (stats de saison, totaux annuels)
- **Utilise la MÉDIANE quand :** tu veux savoir ce qui est *vraiment typique* sans te fier aux extrêmes (la plupart du temps)
- **Utilise l’ÉCART-TYPE quand :** tu veux savoir si les conditions sont régulières (faible = prévisible, élevé = chaotique)

Retiens bien : les données ne mentent pas, mais les moyennes, si, dès que tu les laisses faire. La médiane garde les pieds sur terre, et l’écart-type te dit si tu peux te fier à tous ces chiffres.

Maintenant, va voler et produis des données qui valent la peine d’être analysées !

---

*« En théorie, la théorie et la pratique, c’est pareil. En pratique, non. »*
*Tout pilote après son premier thermique*
