---
title: "Guide de la polaire pour pilotes"
description: "Lire le graphique des performances en transition (et ce qu’il ne peut pas te dire)"
category: Your Flights
order: 5
---

*Ou : comment regarder une ligne bleue toute en courbes et comprendre si c’est ta voile ou l’atmosphère qui a fait le gros du boulot.*

## Mais c’est quoi, ce graphique ?

Tu as ouvert l’onglet Vector Vario, fait défiler les séries temporelles, et te voilà face à une tache bleue un peu mystérieuse traversée par deux ou trois lignes. Bienvenue dans le graphique **Performances en transition** : la tentative de We-Fly de te montrer ce que ta voile a réellement fait à chaque vitesse pendant les transitions de ton vol.

**La version courte :** c’est un graphique de ton **vario (taux de chute) en fonction de ta vitesse air vraie (TAS)**, limité aux moments où tu étais réellement en transition. La forme des lignes est ce qui se rapproche le plus de « la polaire de ta voile ce jour-là, dans cet air-là, avec toi dans la sellette ».

**La version honnête :** ce n’est *pas* la polaire constructeur de ta voile. Ça ne peut pas l’être. On ne connaît pas la traînée de ta sellette, on ne connaît pas ton PTV au gramme près, et on ne sait vraiment pas ce que l’atmosphère a fait entre toi et le sol. Ce qu’on *sait*, c’est ce que ton enregistreur a mesuré, et on le restitue fidèlement, avec toute la dispersion et l’incertitude.

**Ce que les pilotes veulent vraiment savoir :**
- « Quelle est ma finesse max avec cette voile ? »
- « À quelle vitesse je chute le moins ? »
- « Quelle part de ma “transition” était en fait de l’ascendance gratuite offerte par l’atmosphère ? »
- « Ma voile tient-elle les chiffres de sa fiche technique, ou le service marketing en a-t-il trop promis ? »

Ce graphique répond assez bien aux trois premières. La quatrième demande quelques vols de plus et une bonne dose de scepticisme (on y viendra).

---

## Pourquoi je devrais m’y intéresser ?

Si tu fais du cross, la performance en transition est *ce qui* transforme une bonne journée thermique en long vol. Chuter moins, aller plus loin, atteindre le prochain nuage avant tes potes. Le graphique te donne :

1. **Un retour à la réalité sur ta voile** : compare ce que tu as observé avec la polaire publiée. Si l’écart est énorme, quelque chose cloche (voile, poids, sellette ou atmosphère).
2. **Une indication de vitesse à afficher** : regarde où la ligne pointillée atteint son point haut (taux de chute mini) et où elle est tangente à la droite de finesse la plus forte (finesse max).
3. **Une lecture honnête de l’atmosphère** : l’écart entre « ce que j’ai fait » et « ce que ma voile seule ferait » est en gros un thermomètre de la générosité de l’air.
4. **Un outil de débrief** : après un vol, tu as eu l’impression de couler ? Le graphique te dira si la voile travaillait vraiment dur ou si c’est l’air qui te punissait.

---

## Anatomie du graphique

Avant de lui faire dire quoi que ce soit, nommons les éléments. Imagine un graphique avec la TAS en bas (24-53 km/h sur un vol de cross typique) et le vario sur le côté (en haut autour de +0,5 m/s, en bas souvent jusqu’à -4 m/s).

### L’axe X : vitesse air vraie (km/h)
TAS = ta vitesse dans la masse d’air (pas par rapport au sol, ça c’est la vitesse GPS). Tes capteurs la mesurent directement grâce au tube de Pitot du Vector Vario.

**Pourquoi il s’arrête là où il s’arrête :** le graphique n’affiche que les tranches de TAS qui comptent **au moins 20 échantillons en transition**. Si tu n’as passé que 5 secondes à plein accélérateur, cette tranche est écartée. Le graphique s’arrête volontairement là où s’arrêtent les données : pas d’extrapolation, pas de courbes inventées dans le vide.

### L’axe Y : vario (m/s)
Zéro, c’est le vol en palier. En négatif, tu chutes (là où tu passes l’essentiel de tes transitions). En positif, tu montes, ce qui arrive aussi pendant les phases de « transition », parce que les thermiques sont sournois.

### La bande bleue ombrée : du 10e au 90e percentile
Pour chaque tranche de 1 km/h de TAS, c’est la dispersion des valeurs de vario que tu as enregistrées.

- **Bande large** = l’atmosphère partait dans tous les sens (de la dégueulante et de l’ascendance à la même TAS)
- **Bande étroite** = conditions régulières, une lecture plus fiable de ta voile

### La ligne bleue pleine : vario médian
Le milieu des données à chaque TAS. C’est **ce que tu as réellement fait, en moyenne**, en transition à cette vitesse.

**La vérité sournoise :** par une bonne journée de cross, cette ligne a l’air étrangement flatteuse, peut-être -1 m/s à 40 km/h, ce qui te donne une finesse d’environ 11. Ce n’est pas ta voile. C’est ta voile **plus toute l’ascendance gratuite que tu as traversée**. On en reparle juste après.

### La ligne pointillée bleu foncé : médiane air calme
C’est le vario médian parmi le **quartile au netto le plus bas** de chaque tranche de TAS : les 25 % d’échantillons où l’atmosphère descendait le plus (ou montait le moins). C’est notre meilleure estimation empirique de « ce que faisait la voile quand l’air ne t’aidait pas ».

**Même vol, histoire très différente :** à 40 km/h, cette ligne peut se trouver à -3 m/s, ce qui donne une finesse plus proche de 3,7. Raide. Honnête. Plus proche de ce qu’un constructeur imprimerait sur la fiche technique.

### Les cellules du nuage de points (pâles, derrière tout le reste)
Chaque cellule (TAS, vario) est colorée selon le **netto moyen** (vario moins le taux de chute supposé de la voile) :

- **Cellules bleues** : tu traversais de l’air descendant
- **Cellules pêche/orange** : tu traversais de l’air ascendant
- **Taille des bulles** : combien d’échantillons sont tombés dans cette cellule

C’est en gros une carte de chaleur de la façon dont l’atmosphère t’a traité à chaque vitesse. Joli, et instructif.

### Les isolignes de finesse (rayons gris pointillés en diagonale)
Ce sont des rayons partant de l’origine (0,0) à finesse constante, en général tracés à **5:1, 8:1, 10:1, 12:1, 15:1**.

Comme le graphique commence à TAS=24 (et pas 0), l’origine se trouve hors de l’écran en bas à gauche, et les isolignes apparaissent comme des diagonales pointillées qui montent du bas à gauche vers le haut à droite.

**Comment les lire :**
- Là où la **ligne pointillée air calme croise une isoligne** → c’est la TAS à laquelle la voile atteint cette finesse en air non ascendant.
- Là où une isoligne est **tangente** à la polaire pointillée (elle la touche sans la croiser) → c’est ta **finesse max sur ce vol**.

Petit exemple : si la polaire pointillée croise le rayon 5:1 à TAS=42 km/h, alors à 42 km/h en air calme tu aurais parcouru 5 km pour chaque kilomètre d’altitude perdu. Si le rayon 8:1 effleure tout juste la courbe pointillée à TAS=32 km/h, c’est ton point de tangence, ta meilleure finesse de la journée, à cette vitesse.

### La ligne de référence Y=0 (pointillée, horizontale)
La frontière entre chute (en dessous) et montée (au-dessus). Au-dessus de cette ligne, l’atmosphère apportait plus d’ascendance que la voile ne générait de chute. Pratique pour repérer quelle part de tes « transitions » avait en fait un goût de thermique.

### Les deux cartes d’indicateurs sous le graphique

**Meilleur taux de chute observé (médiane) :** la tranche de TAS où le vario médian était le moins négatif, c’est-à-dire là où tu as chuté le moins en moyenne. Accompagné du nombre d’échantillons, de la dispersion 10-90 et de la valeur approchée en air calme à la même TAS.

**Meilleure finesse observée (médiane) :** la tranche de TAS avec la meilleure finesse (TAS en m/s divisée par la valeur absolue du vario médian). Mêmes statistiques d’appui.

---

## Comment le lire, concrètement

C’est là que ça devient amusant. Il y a deux lectures en parallèle, toutes deux valables, qui te disent des choses différentes.

### Lecture 1 : « Qu’est-ce que j’ai réalisé ? »

Regarde la **ligne bleue pleine**. C’est ta performance réelle, la voile plus tout ce que l’atmosphère t’a offert. Sur un vol de cross typique :

- Vario médian à 40 km/h : peut-être **-1 m/s**
- Finesse correspondante : ~**11**

Ça a l’air génial, non ? C’est parce que beaucoup de tes échantillons de « transition » ont été pris dans de l’air qui montait (bouffées thermiques en transition, dynamique, zones de convergence, ce mystérieux +0,5 m/s qui a duré 90 secondes et t’a sauvé la mise). Ce n’est pas un mensonge. C’est juste le compte rendu de ce qui s’est passé. Tu as bien fait une finesse moyenne de 11 ce jour-là, parce que l’air t’a aidé.

C’est la ligne à surveiller quand tu te demandes **« comment je m’en sors sur ce vol ? »**.

### Lecture 2 : « Que fait ma voile toute seule ? »

Regarde la **ligne pointillée**. Même vol, mêmes données, mais seulement les échantillons au netto le plus bas, ceux où l’atmosphère était la *moins* généreuse. Sur ce même vol de cross :

- Vario médian air calme à 40 km/h : peut-être **-3 m/s**
- Finesse correspondante : ~**3,7**

C’est bien plus raide. Plus proche de la polaire publiée par un constructeur (sans être identique, voir la section sur les limites). C’est la ligne à regarder quand tu te demandes **« comment ma voile se comporte-t-elle vraiment ? »**.

### Lecture 3 (le bonus) : « L’air était-il porteur ? »

Prends l’écart entre la ligne pleine et la ligne pointillée à n’importe quelle TAS. Cet écart, c’est à peu près **la quantité d’ascendance gratuite que l’atmosphère t’a offerte en moyenne** à cette vitesse.

- **Grand écart** (la ligne pleine est bien au-dessus de la pointillée) : tu as surfé l’ascendance pendant la plupart de tes « transitions ». C’est souvent une *bonne* chose en cross : rues de nuages efficaces, lignes porteuses, chasse aux convergences.
- **Petit écart** (les lignes se collent) : tu étais vraiment juste en transition dans de l’air neutre ou descendant. Honnête, sans doute laborieux, mais au moins tu le sais.

C’est la lecture « thermomètre atmosphérique ». Elle t’en dit moins sur ta voile et plus sur les conditions dans lesquelles tu as volé.

---

## Questions fréquentes des pilotes

### « Où est mon taux de chute mini ? »

Regarde la ligne pointillée et trouve son point le plus haut (le vario le moins négatif). La carte d’indicateur sous le graphique l’affiche explicitement avec la TAS et le nombre d’échantillons.

**Attention :** si le graphique commence à 24 km/h mais que la vraie vitesse de taux de chute mini de ta voile est à 22 km/h, le taux de chute mini affiché correspond juste à *la vitesse la plus lente à laquelle tu as réellement volé*, pas au vrai optimum de la voile. Le graphique ne peut pas lire ce que tu n’as pas enregistré.

### « Où est ma finesse max ? »

Trouve l’isoligne de finesse **tangente** à la ligne pointillée, le rayon de finesse la plus élevée qui touche encore la courbe. La TAS au point de tangence est ta vitesse de finesse max en air calme.

Tu trouveras en général la finesse max quelque part entre la TAS du taux de chute mini et la vitesse bras hauts. Plus vite que le taux de chute mini (parce que plus vite = plus de distance horizontale par seconde), plus lent que bras hauts (parce que bras hauts, tu chutes plus vite que l’optimum de finesse).

### « C’est la polaire publiée de ma voile ? »

**Non, et il faut être très clair là-dessus.** C’est la performance empirique de *toi + ta voile + ta sellette + cette atmosphère, sur ce vol*. La ligne pointillée est l’approximation empirique la plus proche qu’on puisse calculer, mais ce n’est pas la même chose. Pour comparer avec la fiche technique, cherche la polaire de ta voile de ton côté (page du constructeur, rapport de test DHV, fils de forums de parapente, voir la section sur les limites).

### « Pourquoi mon graphique s’arrête à 53 km/h alors que je sais que j’ai poussé à 60 ? »

Parce que tu n’y as sans doute passé que quelques secondes. Les tranches avec moins de 20 échantillons en transition sont écartées pour éviter des statistiques bidon. Si tu veux que le graphique aille plus loin, vole plus longtemps à haute vitesse (ou fais plus de vols, même si pour l’instant ce graphique ne porte que sur un seul vol).

### « Pourquoi la ligne pointillée manque dans certaines tranches ? »

L’estimation air calme a besoin d’**au moins 4 échantillons avec netto** dans une tranche pour être calculée. Les tranches trop maigres la sautent. Attends-toi à voir la ligne pointillée disparaître aux bords de la plage de TAS.

---

## Les limites, en toute honnêteté (à lire deux fois)

C’est la partie où on ne survend rien. Le graphique est utile. Il est aussi plein de pièges subtils.

### 1. On n’a pas la polaire publiée de ta voile

We-Fly ne stocke pas les polaires constructeur par voile. On ne connaît pas l’allongement de ta voile tel que le constructeur le mesure, la classe de traînée de ta sellette, ton PTV exact ou les mesures du pilote d’essai de l’homologation. Donc **on ne peut pas tracer de courbe de référence « idéale »** pour comparer.

Pour confronter ta voile à sa fiche technique, il faut chercher de ton côté. La plupart des constructeurs publient une polaire (ou presque) dans leurs notes techniques ; les rapports de test DHV en contiennent ; les fils de forums creusent parfois loin. La ligne pointillée du graphique est ton **estimation basée sur le vol**, pas la vérité du constructeur.

### 2. Le biais de l’ascendance en transition

Pendant les transitions, les pilotes traversent régulièrement de l’air qui monte : bouffées thermiques en transition, dynamique au vent d’un éperon, lignes de convergence, la rue de nuages de temps en temps quand on a de la chance. Ces échantillons ont un *vario plus élevé que ce que produirait la voile seule*.

La **ligne médiane** est carrément gonflée par ce phénomène. La **ligne pointillée air calme** essaie de compenser en ne gardant que les échantillons au netto le plus bas, mais elle n’est pas parfaite : même le quartile « calme » peut encore contenir une ascendance faible que tu ne pouvais pas voir.

**À retenir :** même la ligne pointillée est sans doute un peu flatteuse par rapport à la vraie performance en air parfaitement calme.

### 3. Le netto n’est pas une vérité magique

Le Vector Vario calcule le netto comme `vario - configured_wing_polar(TAS)`. Donc les valeurs de netto utilisées pour choisir le « quartile au netto bas » découlent elles-mêmes de **la polaire configurée dans ton VV, quelle qu’elle soit**.

Si cette polaire configurée est très fausse (mauvaise voile dans les réglages, mauvais poids, valeurs d’usine jamais changées), le sous-ensemble air calme sera biaisé. Notre « approximation air calme » est une *meilleure* estimation de la polaire que la médiane brute, mais ce n’est **pas une mesure indépendante**. Elle dépend de la polaire déjà chargée dans ton vario.

Traduction : le graphique est cohérent en interne mais pas calibré de façon indépendante. Des données pourries en entrée donnent en sortie des données un peu moins pourries, mais toujours pas parfaites.

### 4. La TAS du taux de chute mini peut être un artefact

La carte d’indicateur « Meilleur taux de chute observé » donne simplement la tranche de TAS au vario médian le moins négatif. **Si tu n’as jamais volé assez lentement** pour atteindre la vraie vitesse de taux de chute mini de ta voile, la valeur affichée est juste la TAS la plus lente à laquelle tu as réellement volé.

Exemple : le vrai taux de chute mini de la voile est à 22 km/h, mais ta transition soutenue la plus lente sur ce vol était à 24 km/h. Le graphique affichera 24 km/h comme « meilleur taux de chute observé », alors que la voile aurait fait mieux plus lentement. Le graphique **n’extrapole pas** en dessous de ta transition la plus lente. C’est voulu : on préfère sous-estimer qu’inventer.

### 5. Le graphique s’arrête là où s’arrêtent les données

Les tranches de TAS avec moins de 20 échantillons en transition sont écartées. Une brève poussée de 10 secondes à plein accélérateur ne génère pas assez d’échantillons pour publier un percentile, donc le graphique ne va tout simplement pas jusque-là.

**Pourquoi c’est une fonctionnalité et pas un bug :** on ne veut pas tracer une courbe sur des vitesses où tu as à peine volé. La fin visible du graphique, c’est *littéralement la plage sur laquelle on a des données statistiquement significatives*. Si tu veux un graphique plus riche, vole plus longtemps dans la plage de vitesse qui t’intéresse.

### 6. La détection des transitions a des bords flous

La « phase de transition » vient de l’analyseur de phases de We-Fly, qui s’appuie sur la stabilité du cap, de faibles écarts de vario et quelques autres heuristiques. Ça marche bien la plupart du temps, mais des cas limites se glissent dedans :

- Un pilote qui fait de longs S de recherche entre deux thermiques peut être classé « en transition » alors qu’il était sans doute en train d’enrouler.
- Un thermique faible et dérivant où tu tournes à peine peut être étiqueté comme transition.
- Les secondes de bascule au début et à la fin d’une transition peuvent être incluses ou non.

Ces cas limites biaisent subtilement le graphique. Pas beaucoup, mais ils sont là.

### 7. Un vol ≠ ta voile

Ce graphique montre **un vol précis**. Ton poids ce jour-là, le réglage de ta sellette, ton style de pilotage (actif ou passif), la masse d’air, le régime de convection. Tout ça entre en jeu. Pour vraiment caractériser ta voile, il faudrait agréger de nombreux vols.

We-Fly n’agrège pas plusieurs vols ici (pas encore). Considère donc le graphique comme **une observation isolée**, pas comme une conclusion sur la voile.

---

## Alors… ma voile est-elle bonne ?

C’est la question à laquelle tout le monde veut vraiment une réponse. Voici une méthode honnête.

### Étape 1 : regarde la ligne pointillée sur plusieurs vols

Un vol, c’est du bruit. Trois vols avec une charge alaire similaire (même poids, même sellette, même voile), ça commence à être un signal. Si la ligne pointillée se trouve systématiquement 1-1,5 m/s sous la polaire publiée par le constructeur à la même TAS, c’est un vrai écart de performance qui mérite qu’on creuse.

### Étape 2 : compare avec la fiche technique

Ressors la polaire publiée de ta voile. Les constructeurs publient en général :
- Le taux de chute mini (m/s) à une certaine TAS (km/h)
- La vitesse bras hauts et le taux de chute bras hauts
- Parfois une esquisse de la polaire complète

Place mentalement ces points sur le graphique. Si ta ligne pointillée est nettement plus raide que la fiche, les causes possibles de l’écart sont :
- Un poids pilote trop élevé ou trop faible (charge alaire hors plage)
- La traînée de la sellette (un cocon à forte traînée face à la sellette de course profilée du pilote d’essai)
- Des suspentes à revoir (porosité, allongement des suspentes, âge)
- Une voile qui a quelques centaines d’heures et une légère baisse de performance
- Un calage ou des élévateurs pas optimaux
- Tu étais dans de l’air légèrement descendant pendant tout le vol (ça arrive)

### Étape 3 : surveille la tendance

Si tu enregistres des dizaines de vols et que la ligne pointillée reste stable, c’est l’enveloppe de performance réelle de ta voile avec toi dessous. Compare avec les vols de l’année suivante pour voir si la voile vieillit, ou avec le même équipement chez un pote pour voir si c’est la voile ou le pilote.

### En résumé

Le graphique est un **outil de débrief**, pas un verdict. Sers-t’en pour te poser de meilleures questions sur ton pilotage, ta voile et les journées où tu voles. Ne t’en sers pas pour trancher les débats au bar : les données ont trop de réserves pour ça.

---

## Antisèche

| Question | Où regarder |
|---|---|
| Qu’est-ce que j’ai réellement volé aujourd’hui ? | Ligne bleue pleine (médiane) |
| Que fait ma voile sans aide ? | Ligne pointillée plus foncée (médiane du quartile au netto bas) |
| À quel point les conditions variaient-elles ? | Largeur de la bande bleue |
| L’air montait-il ou descendait-il à cette vitesse ? | Couleur des cellules (pêche = ascendance, bleu = dégueulante) |
| Quelle est ma meilleure finesse ? | Isoligne tangente à la ligne pointillée |
| Quelle est ma vitesse de taux de chute mini ? | Point le plus haut de la ligne pointillée (ou carte d’indicateur) |
| Combien d’« ascendance gratuite » ai-je eue en moyenne ? | Écart vertical entre ligne pleine et ligne pointillée |

---

## Le mot de la fin

Le graphique de la polaire ne ment pas, mais il ne dit pas non plus toute la vérité. Il te dit ce que ton enregistreur a mesuré, avec toute la dispersion et l’incertitude. C’est en fait plus utile qu’une estimation ponctuelle bien sûre d’elle : ça t’oblige à te poser des questions au lieu d’avaler un chiffre.

Alors la prochaine fois que quelqu’un au club se vante de sa « finesse de 11 sur tout le vol », sors ton graphique, montre la ligne pointillée à la même TAS et demande gentiment : « en air calme, ou avec les thermiques qui faisaient la moitié du boulot ? »

L’atmosphère est généreuse. Ta voile est honnête. Le graphique te montre les deux.

Vole loin, transite à plat, et que ta ligne pointillée soit toujours moins raide que tu ne le craignais.
