---
title: "Réglages de l’analyse avancée des thermiques"
description: "Configure les paramètres utilisés pour détecter et noter tes thermiques"
category: Thermal Analysis
order: 2
---

*Ou : comment apprendre à l’algorithme à quoi ressemble un vrai thermique*

Tu as importé ton vol, ouvert l’analyse avancée des thermiques, et te voilà devant l’onglet Réglages à te demander à quoi servent tous ces curseurs et ces chiffres. Bonne nouvelle : tu es au bon endroit. Mauvaise nouvelle : on va devenir un peu technique (mais de façon fun, promis).

Vois ces réglages comme une façon d’apprendre à l’ordinateur ce que *toi*, tu considères comme « un thermique qui mérite d’être compté ». Parce que soyons honnêtes : cette petite bulle pourrie que tu as grattée pendant 45 secondes parce que tu étais bas ? L’algorithme ne la comptera peut-être pas. Mais ce magnifique ascenseur à 5 m/s qui t’a fait passer de « oh mince » à « plafond, baby » ? Celui-là, il est compté.

---

## La version express

**99 % des pilotes devraient simplement garder les réglages par défaut.** Ils sont calés pour les thermiques typiques du parapente et marchent très bien pour la plupart des vols. Ne touche à ces réglages que si :

1. Tu voles dans des conditions bizarres (thermiques ultra faibles, vent de folie, micro-ascendances au ras du relief)
2. Tu es un geek des données qui veut comprendre *exactement* comment fonctionne l’analyse
3. Tu as bu une bière et tu t’es dit que ce serait marrant de voir ce qui se passe en mettant tout au maximum

Toujours là ? Très bien, on y va.

---

## Seuils de détection

*« À partir de quand tourner en rond devient “je suis dans un thermique” ? »*

### Score thermique min (par défaut : 0,35)

**Ce que ça fait :** l’algorithme combine plusieurs signaux (ascendance, taux de virage, déplacement GPS) en un seul « score de confiance thermique » de 0 à 1. Ce réglage dit : « n’appelle pas ça un thermique tant que la confiance n’atteint pas 35 % ».

**En langage pilote :** à quel point es-tu exigeant sur ce qui compte comme thermique ?

- **Plus bas (0,2-0,3) :** « J’exploite tout ce qui monte. » Attrape les bulles faibles, mais peut compter des faux positifs quand tu tournes juste en vol de pente ou que tu grattes le relief.
- **Par défaut (0,35) :** « Montre-moi de vrais thermiques, pas des miettes. » Équilibré pour du cross classique.
- **Plus haut (0,4-0,5) :** « Ne compte que le bon. » Rate les thermiques faibles mais garde tes stats propres.

**Pour être franc :** si tu voles dans les Alpes et que tu exploites souvent des thermiques à 0,5 m/s près du relief, baisse-le. Si tu voles en plaine l’été avec des cœurs à 4 m/s, tu peux le monter.

---

### Score de sortie (par défaut : 0,2)

**Ce que ça fait :** une fois que tu es « dans » un thermique, la confiance doit descendre sous 20 % avant que l’algorithme commence à penser que tu en es sorti.

**En langage pilote :** combien de temps tu continues à chercher avant d’admettre « bon, je l’ai perdu » ?

- **Plus bas (0,1-0,15) :** « Je suis clairement sorti. » Sort vite des thermiques. Bien si tu voles dans des thermiques propres et réguliers.
- **Par défaut (0,2) :** « Bon, ça ne marche plus. » Tolère de courts passages en dégueulante ou des errances sur les bords.
- **Plus haut (0,25-0,3) :** « Il est peut-être encore quelque part par là... » Met plus de temps à sortir. Utile pour les thermiques hachés où tu entres et sors sans arrêt.

**Pourquoi il est plus bas que le seuil d’entrée :** l’hystérésis ! C’est pour la même raison que ton thermostat ne lance pas le chauffage à 20 °C pour le couper à 19,9 °C. Ça évite que l’algorithme compte 47 « thermiques » séparés alors que tu n’exploites qu’une seule bulle hachée.

---

### Vario min (par défaut : 0,3 m/s)

**Ce que ça fait :** ignore toute spirale où ton vario indique moins que cette valeur.

**En langage pilote :** « Si ce n’est pas au moins aussi bon, je n’appelle pas ça un thermique. »

- **Plus bas (0,1-0,2) :** compte l’ascendance faible, le grattage, et peut-être même le dynamique si tu tournes. Parfait pour les vols en « mode survie ».
- **Par défaut (0,3) :** seuil standard pour un thermique en cross. Si ça ne fait pas 0,3 m/s de moyenne, tu ne tiendras probablement pas en l’air longtemps.
- **Plus haut (0,5-1,0) :** ne compte que les thermiques où tu gagnes vraiment de l’altitude à un bon rythme.

**Le saviez-tu :** les valeurs par défaut sont calées pour le parapente. Si tu voles en delta avec un moins bon taux de chute, tu voudras peut-être le monter un peu.

---

### Taux de virage min (par défaut : 10 °/s)

**Ce que ça fait :** à quelle vitesse tu dois tourner pour que l’algorithme se dise « ok, il spirale ».

**En langage pilote :** tes tours sont-ils serrés ?

- **Plus bas (5-8 °/s) :** tours larges et nonchalants. Bien pour le biplace, les élèves débutants, ou si tu voles une voile performante et que tu aimes les inclinaisons douces.
- **Par défaut (10 °/s) :** enroulement normal. Un 360° complet toutes les 36 secondes.
- **Plus haut (15-20 °/s) :** tours serrés et engagés. Un 360° toutes les 18 à 24 secondes. Risque de rater ton enroulement si tu tournes large.

**Pour être franc :** la plupart des pilotes enroulent naturellement à 10-15 °/s. Si l’algorithme rate des thermiques évidents, c’est peut-être que tu tournes plus large que la moyenne. Descends à 8. S’il compte des « thermiques » au hasard alors que tu fais juste des S en vol de pente, monte à 12-15.

---

## Paramètres d’hystérésis

*« Arrête d’être aussi nerveux, l’algorithme »*

Ils empêchent le détecteur de basculer on/off à chaque petite bulle ou à chaque passage de 2 secondes dans la dégueulante. Vois-les comme un « temps de confirmation ».

### Durée d’entrée (par défaut : 5 secondes)

**Ce que ça fait :** tu dois remplir les conditions de thermique pendant ce nombre de secondes d’affilée avant que ça compte officiellement comme une « entrée en thermique ».

**En langage pilote :** combien de tours avant de t’engager et de te dire « ok, c’est un thermique » ?

- **Plus bas (2-3 s) :** « J’y suis ! » après un demi-tour. Compte les thermiques vite, mais peut attraper des faux positifs.
- **Par défaut (5 s) :** environ 1,5 tour pour confirmer. Bon équilibre.
- **Plus haut (8-10 s) :** « Laisse-moi d’abord vérifier que c’est du vrai. » Il faut 2-3 tours pour compter. Rate les bulles courtes mais donne des résultats très propres.

**Quand l’ajuster :** baisse-le si tu voles dans des conditions très hachées où les thermiques sont petits et où tu as besoin de tout attraper. Monte-le si des faux thermiques sont comptés (fréquent par vent fort ou en conditions turbulentes).

---

### Durée de sortie (par défaut : 3 secondes)

**Ce que ça fait :** tu dois *ne pas* remplir les conditions de thermique pendant cette durée avant que ça compte comme une « sortie de thermique ».

**En langage pilote :** combien de temps tu continues à chercher une fois l’ascendance morte avant de partir en transition.

- **Plus bas (1-2 s) :** « Non, j’y vais. » Sort vite. Bien pour les thermiques propres et réguliers.
- **Par défaut (3 s) :** « Attends, c’est peut-être juste plus faible ici... » Un tour de plus pour vérifier.
- **Plus haut (5-8 s) :** « Je vais le travailler encore un peu... » Plusieurs tours avant d’abandonner. Bien pour les thermiques complexes à plusieurs cœurs.

**L’astuce du pro :** dans les thermiques d’été forts et punchy, tu peux le baisser. Au printemps et à l’automne, avec une ascendance faible et hachée, monte-le.

---

### Durée de thermique min (par défaut : 15 secondes)

**Ce que ça fait :** si tu spirales moins longtemps que ça, ce n’est pas compté comme un « thermique » dans les stats.

**En langage pilote :** « C’était un thermique ou juste une bosse ? »

- **Plus bas (8-10 s) :** compte les bulles courtes. Bien si tu sautes volontairement de bulle en bulle.
- **Par défaut (15 s) :** environ 4 tours minimum. Filtre les moments « j’ai fait deux tours et je suis parti ».
- **Plus haut (20-30 s) :** ne compte que les thermiques où tu es vraiment resté pour les exploiter. Stats plus propres, mais risque de rater de vraies montées courtes.

**Quand l’utiliser :** si tu voles en compète et que tu exploites la moindre miette, baisse-le. Si tu fais du cross tranquille et que tu ne veux que les « vrais » thermiques dans tes stats, monte-le.

---

## Détection de la spirale

*« Comment faire la différence entre enrouler et simplement tourner »*

### Fenêtre de spirale min (par défaut : 10 secondes)

**Ce que ça fait :** l’algorithme regarde ce nombre de secondes de vol à la fois pour calculer si tu spirales.

**En langage pilote :** combien d’historique de vol analyser pour juger la régularité des virages.

- **Plus bas (5-8 s) :** réaction rapide. Détecte vite les thermiques mais plus sensible au bruit.
- **Par défaut (10 s) :** environ 2,5 tours de données. Bon équilibre entre rapidité et précision.
- **Plus haut (15-20 s) :** réaction plus lente mais très précise. Peut mettre plus de temps à détecter l’entrée en thermique.

**Pour être franc :** la plupart des pilotes n’auront pas besoin d’y toucher. C’est un paramètre technique qui joue sur la fluidité de l’algorithme, pas vraiment sur le comportement du pilote.

---

### Nombre de tours min (par défaut : 1,0)

**Ce que ça fait :** tu dois faire au moins ce nombre de 360° complets pour que ça compte comme « enrouler un thermique ».

**En langage pilote :** combien de tours avant que ce soit officiellement un thermique ?

- **Plus bas (0,5-0,8) :** un demi-tour suffit. Attrape les contacts très courts avec un thermique.
- **Par défaut (1,0) :** au moins un 360° complet. Filtre les « j’ai tourné deux fois et je suis parti ».
- **Plus haut (2-3) :** plusieurs tours complets exigés. Très prudent, rate les montées rapides.

**Quand l’ajuster :** combine-le avec la durée de thermique min. Si tu veux tout compter, mets les deux bas. Si tu veux des stats propres, mets les deux haut.

---

### Rayon de cœur max (par défaut : 80 mètres)

**Ce que ça fait :** pour calculer la « qualité de centrage », l’algorithme mesure à quelle distance tu t’éloignes du cœur du thermique. Ce réglage fixe le rayon maximal qu’il juge raisonnable.

**En langage pilote :** à quelle taille de tour on s’attend ?

- **Plus bas (50-60 m) :** cœurs serrés. Bien pour l’été et les thermiques qui envoient. Pénalise les tours larges.
- **Par défaut (80 m) :** standard pour le parapente. Un rayon de ~50-80 m est typique.
- **Plus haut (100-120 m) :** thermiques larges et étalés. Plaine, conditions faibles, ou si tu fais des tours larges.

**Le saviez-tu :** ce réglage ne change pas *ce qui* est compté comme thermique, seulement le score de qualité. Un thermique reste un thermique. Ça change juste à quel point l’algorithme juge ton centrage « bon ».

---

## Indicateurs de qualité

*« Il était bon comment, ce thermique, en vrai ? »*

### Rapport de dérive idéal (par défaut : 0,3)

**Ce que ça fait :** rapport entre la distance de dérive et le gain d’altitude. La valeur par défaut de 0,3 signifie qu’idéalement tu dérives de 30 m sur le côté pour chaque 100 m de montée.

**En langage pilote :** qu’est-ce qui compte comme « bien centré » plutôt que « en train de dériver hors du cœur » ?

- **Plus bas (0,1-0,2) :** très strict. « Tu ne devrais quasiment pas dériver. » Bien pour les conditions calmes et les thermiques forts.
- **Par défaut (0,3) :** réaliste pour des conditions moyennes. Un peu de dérive, c’est normal.
- **Plus haut (0,4-0,6) :** indulgent. « Ce n’est pas grave de dériver, je monte quand même. » Bien pour les journées ventées ou les thermiques faibles qui dérivent.

**Pourquoi c’est important :** ça influe sur tes scores de qualité des thermiques et sur les conseils. Si tu voles par vent fort et que tu dérives toujours de 50 m en montant, monte ce réglage pour ne pas être pénalisé.

---

### Fenêtre de centrage (par défaut : 20 secondes)

**Ce que ça fait :** l’algorithme regarde tes X premières secondes dans le thermique pour voir à quelle vitesse tu as trouvé le cœur.

**En langage pilote :** « En combien de temps as-tu trouvé la meilleure ascendance ? »

- **Plus bas (10-15 s) :** « Tu l’as eu tout de suite ? » Très strict sur le centrage initial.
- **Par défaut (20 s) :** environ 5-6 tours pour trouver le cœur. Réaliste pour la plupart des pilotes.
- **Plus haut (30-40 s) :** « Prends ton temps, on galère tous parfois. » Plus indulgent si tu tâtonnes un peu au début.

**Pour être franc :** ce réglage influe sur les retours « Super entrée dans le cœur » / « Travaille ton centrage ». Si tu reçois souvent « travaille ton centrage » alors que tu as l’impression de *bien* centrer, ton style est peut-être juste plus exploratoire dans les premiers tours. Monte-le.

---

## Cas pratiques : quand ajuster les réglages

### « L’algorithme ne compte pas mes thermiques faibles »

Tu voles dans des conditions limites, tu exploites de l’ascendance à 0,3-0,8 m/s, mais l’analyse n’affiche aucun thermique.

**La solution :**
- Baisse **Vario min** à 0,2
- Baisse **Score thermique min** à 0,25
- Baisse **Durée de thermique min** à 10 s

---

### « Il compte des “thermiques” au hasard qui n’en étaient pas »

Tu vois des thermiques comptés pendant ta transition, ou quand tu tournais juste près du relief.

**La solution :**
- Monte **Score thermique min** à 0,4
- Monte **Taux de virage min** à 12-15 °/s
- Monte **Durée de thermique min** à 20 s

---

### « On me dit “travaille ton centrage” alors que je centre bien ! »

L’algorithme pense que tu dérives trop ou que tu mets trop de temps à trouver le cœur.

**La solution :**
- Monte **Rapport de dérive idéal** à 0,4-0,5 (surtout les jours de vent)
- Monte **Fenêtre de centrage** à 30 s (ça te laisse plus de temps pour explorer)

---

### « Les thermiques n’arrêtent pas de commencer et de s’arrêter dans l’analyse »

Tu exploites un seul thermique mais il est compté comme 3 thermiques séparés.

**La solution :**
- Monte **Durée de sortie** à 5-8 s (sortie plus lente)
- Baisse **Score de sortie** à 0,15 (plus facile de rester « dedans »)

---

### « Je vole en biplace et il ne détecte pas mes thermiques »

Biplace = tours plus larges, virages plus lents, pilotage plus prudent.

**La solution :**
- Baisse **Taux de virage min** à 6-8 °/s
- Monte **Rayon de cœur max** à 100 m
- Monte **Fenêtre de centrage** à 30 s

---

## Le guide « dis-moi juste quoi faire »

### La plupart des pilotes (cross, loisir)
**Garde les valeurs par défaut.** Elles sont calées pour toi. Sérieusement.

### Pilotes de compète
- Baisse **Durée de thermique min** à 10 s (chaque montée compte)
- Baisse **Durée d’entrée** à 3 s (détection rapide)
- Monte **Vario min** à 0,5 (ne compter que les bons thermiques)

### Vol en bord de mer ou près du relief
- Baisse **Score thermique min** à 0,25 (attraper l’ascendance faible)
- Monte **Durée de sortie** à 5 s (thermiques hachés)
- Monte **Rapport de dérive idéal** à 0,5 (dérive due au vent)

### Vol en plaine (thermiques d’été forts)
- Monte **Vario min** à 0,5 m/s (ignorer l’ascendance faible)
- Baisse **Rayon de cœur max** à 60 m (cœurs serrés)
- Monte **Taux de virage min** à 12 °/s (tours plus serrés)

### Vol en montagne (thermiques faibles et hachés)
- Baisse **Vario min** à 0,2 m/s
- Baisse **Score thermique min** à 0,25
- Monte **Durée de sortie** à 8 s (ne pas sortir trop vite)

---

## FAQ : questions entendues à l’atterro

### « Pourquoi mon thermique préféré n’apparaît pas ? »

Vérifie dans cet ordre :
1. A-t-il duré au moins 15 s ? (Durée de thermique min)
2. L’ascendance faisait-elle au moins 0,3 m/s ? (Vario min)
3. Est-ce que tu spiralais vraiment ? (Taux de virage min)
4. As-tu fait au moins un 360° complet ? (Nombre de tours min)

### « Je peux casser quelque chose en bidouillant ces réglages ? »

Non ! Au pire, tu obtiens des résultats bizarres. Clique simplement sur « Réinitialiser par défaut » et tout redevient normal.

### « Que se passe-t-il si je mets tout au maximum ? »

Tu auras probablement zéro thermique détecté. L’algorithme fera genre « RIEN N’EST ASSEZ BIEN » et rejettera tout. C’est comme placer la barre si haut en amour que tu finis seul. (On a testé. Pour la science.)

### « Et si je mets tout au minimum ? »

Tout devient un thermique. Ton gonflage ? Thermique. Ton aller-retour sur la crête ? 47 thermiques. Cette fois où tu as frotté un bout d’aile ? Étonnamment bon thermique. Là encore, on a testé. C’était le chaos.

### « Ces réglages modifient-ils mes stats de vol ? »

Oui ! Changer ce qui compte comme « thermique » change ton nombre de thermiques, l’altitude totale gagnée en thermique, le taux de montée moyen, etc. Donc si tu compares tes stats avec un pote, vérifiez que vous utilisez les mêmes réglages.

---

## Notes avancées pour les geeks

(Tu peux sauter cette partie si tu veux juste voler)

La détection des thermiques utilise un **score composite multi-signaux** qui combine :
- Les mesures du vario (est-ce que tu montes ?)
- Le taux de virage (est-ce que tu spirales ?)
- La géométrie de la trace GPS (ta trajectoire est-elle cohérente avec un enroulement ?)
- Les changements de cap (est-ce que tu fais des tours complets ?)

Chaque signal est normalisé entre 0 et 1, puis pondéré et combiné. Le **Score thermique min** est le seuil de ce score combiné.

Les **paramètres d’hystérésis** (durée d’entrée et de sortie) mettent en œuvre une machine à états avec des délais de confirmation pour éviter les oscillations. C’est le même principe que dans les thermostats, les feux stop et à peu près tout système qui doit éviter de basculer on/off en rafale.

Les **indicateurs de qualité** utilisent des statistiques circulaires pour calculer le cap de dérive, la position du cœur du thermique et l’efficacité du centrage. Les calculs font intervenir des produits scalaires, des écarts de cap et un peu de géométrie analytique qui rendrait fier ton prof de maths du lycée (ou le traumatiserait).

## Pour finir

Au bout du compte, ces réglages ne sont que des boutons qui ajustent ce que l’algorithme considère comme un « thermique ». Le *vrai* apprentissage se fait quand tu :

1. Fais le vol
2. Regardes l’analyse
3. La compares avec ce que tu as *senti* en l’air
4. Ajustes les réglages si besoin
5. Tires les leçons des tendances

Le but n’est pas de truquer le système pour avoir des stats parfaites. C’est de mieux comprendre ta façon de voler. As-tu vraiment bien centré, ou as-tu juste eu de la chance avec un cœur puissant ? Es-tu sorti des thermiques trop tôt, ou étaient-ils vraiment en train de mourir ?

L’algorithme est un outil, pas un juge. Sers-t’en pour progresser, pas pour stresser sur des chiffres.

Maintenant, va dehors trouver des thermiques. Des vrais. En l’air. Là où ils doivent être.

*Ciel bleu et air doux,*
