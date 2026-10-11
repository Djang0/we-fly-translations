---
title: Le z-score expliqué aux pilotes
description: La recette secrète pour repérer les valeurs hors norme
category: Cockpit
order: 3
---

*Ou : comment prouver mathématiquement que ton déco préféré vaut vraiment la route*

## Mais c’est quoi, un z-score, au juste ?

Tu connais ce copain qui se vante toujours de ses sites « épiques », alors que tu es à peu près sûr qu’il brasse surtout du vent ? Le z-score, c’est le détecteur de baratin mathématique que tu attendais.

**La version courte :** un z-score te dit à quel point une valeur est inhabituelle par rapport au reste de tes données. En gros, il pose la question : « Ce site est-il vraiment spécial, ou est-ce que je me souviens juste de cette fameuse bonne journée ? »

**La formule (ne t’enfuis pas) :**

```
Z-Score = (Your Value - Average) / Standard Deviation
```

**Traduction pour pilotes :** à combien d’« écarts-types » de la moyenne se trouve ce truc ?

---

## On décortique (parce qu’on n’est pas tous des matheux)

### Le contexte

Imagine que tu as volé depuis 10 décollages différents dans la saison. Tu veux savoir lesquels sont **vraiment** tes sites de prédilection, et lesquels tu as juste visités une fois un jour d’exception.

Voici tes données (durée de vol moyenne par site) :

| Site | Durée moy. (heures) |
|------|---------------------|
| Annecy | 2.5 |
| Chamonix | 3.8 |
| Verbier | 2.2 |
| Bassano | 5.0 | ← Tiens, intéressant
| Kössen | 2.4 |
| Interlaken | 2.6 |
| Pokhara | 1.8 |
| Saint-Hilaire | 2.7 |
| Bir | 2.3 |
| Oludeniz | 2.4 |

**Moyenne sur tous les sites :** 2,77 heures
**Écart-type :** 0,91 heure

### Le calcul

Calculons le z-score de **Bassano** (parce que 5,0 heures, c’est louche tellement c’est bien) :

```
Z-Score = (5.0 - 2.77) / 0.91
Z-Score = 2.23 / 0.91
Z-Score = 2.45
```

**Que veut dire 2,45 ?**
- La durée moyenne à Bassano est 2,45 écarts-types **au-dessus** de la moyenne
- Dans le Cockpit, c’est la colonne **Score z**
- C’est statistiquement significatif (|z| > 2 = territoire des valeurs hors norme)
- Traduction : Bassano n’est pas juste bon, il est **réellement exceptionnel**

Regardons maintenant **Pokhara** (1,8 heure, ça paraît court) :

```
Z-Score = (1.8 - 2.77) / 0.91
Z-Score = -0.97 / 0.91
Z-Score = -1.07
```

**Que veut dire -1,07 ?**
- Pokhara est environ 1 écart-type **sous** la moyenne
- Pas catastrophique, mais pas terrible non plus
- Peut-être que tu y es tombé les mauvais jours, ou que c’est juste un site à plouf

---

## La grille de décodage du z-score

Voici comment interpréter tes z-scores :

| Plage de z-score | Ce que ça veut dire | Traduction pilote |
|---------------|---------------|-------------------|
| **z > +2.0** | Valeur extrême (positive) | 🌟 **Ce site envoie du lourd** : il vaut les 3 heures de route |
| **+1.0 to +2.0** | Au-dessus de la moyenne | 👍 Site solide, tu y fais généralement de bons vols |
| **-1.0 to +1.0** | Plutôt dans la moyenne | 🤷 Bof. Les conditions comptent plus que le site |
| **-2.0 to -1.0** | Sous la moyenne | 👎 Tu y vaches sans doute souvent |
| **z < -2.0** | Valeur extrême (négative) | 💀 **À éviter, sauf si tu aimes te poser direct à l’atterro** |

---

## Pourquoi le z-score compte (du point de vue du pilote)

### Problème 1 : le piège du « tu te souviens de la fois où ? »

Toi : « J’ADORE voler à [site au hasard]. C’est génial ! »
Ton cerveau : *se souvient de CE cross épique de 6 heures d’il y a 3 ans, en oubliant opportunément les 15 plouf*

**La solution du z-score :** si le z-score du site est négatif ou proche de zéro, ton cerveau te ment. Les données, elles, ne mentent pas : là-bas, tu vaches surtout.

### Problème 2 : les embrouilles de taille d’échantillon

Tu as volé une fois à Bassano (5 heures, épique), et 47 fois sur ta colline locale (2,1 heures de moyenne).

Lequel est le meilleur ? Difficile à dire sans contexte, non ?

**La solution du z-score :** le z-score tient compte de **l’ensemble des données**, donc tu peux comparer des choux et des carottes. Il demande : « Comparé à TOUS mes sites, comment celui-ci se situe-t-il ? »

### Problème 3 : la station de justification

Tu veux justifier ces 4 heures de route auprès de ton conjoint, de ton patron, ou de ton excuse « je télétravaille aujourd’hui ».

**La solution du z-score :** imprime les stats de ton Cockpit qui montrent un z-score de +2,8 pour ce site. « Tu vois chéri(e), ce n’est pas juste du plaisir, c’est du plaisir STATISTIQUEMENT SIGNIFICATIF. C’est de la science. »

---

## Comment We-Fly utilise le z-score

### Dans le Cockpit

Quand tu regardes l’onglet **Décollage**, tu vois un **Score z** pour chaque site. Il est calculé à partir de ta **durée de vol moyenne par site** (le rapport entre le total d’heures et le nombre de vols).

```typescript
// From src/lib/utils.ts
export function computeZScore(dataSerie: chartData[]) {
  // For each takeoff site
  for (let indexx = 0; indexx < dataSerie.length; indexx++) {
    // Calculate the average ratio (avg hours per flight) across all sites
    let avg_ratio = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      avg_ratio += dataSerie[index].ratio;
    }
    avg_ratio = avg_ratio / dataSerie.length;

    // Calculate the standard deviation
    let sum_deviations = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      sum_deviations += Math.pow(dataSerie[index].ratio - avg_ratio, 2);
    }
    let deviation = Math.sqrt(sum_deviations / dataSerie.length);

    // Calculate z-score: (this site's ratio - average) / std deviation
    dataSerie[indexx].z = deviation === 0
      ? 0
      : (dataSerie[indexx].ratio - avg_ratio) / deviation;
  }
}
```

### Ce qu’on mesure vraiment

- **Valeur :** le nombre moyen d’heures par vol pour chaque décollage
- **Moyenne :** ta durée de vol moyenne globale, tous sites confondus
- **Écart-type :** à quel point tes durées de vol sont dispersées
- **Z-score :** à quel point chaque site est exceptionnel (ou nul)

### Détection des valeurs hors norme

Les commentaires du code disent : « Les valeurs avec |z| > 2 sont considérées comme des valeurs statistiquement hors norme. »

Autrement dit :
- **z > +2** : ce site sort du lot dans le BON sens (tu tiens en l’air bien plus longtemps que d’habitude)
- **z < -2** : ce site sort du lot dans le MAUVAIS sens (tu te poses bien plus tôt que d’habitude)

### Exemple concret tiré de ton Cockpit

Disons que tu ouvres l’onglet « Décollage » et que tu vois :

| Décollage | Heures totales | Vols | Moy./vol | **Score z** |
|--------------|-------------|---------|------------|-----------------------|
| Mont Blanc | 45.5h | 8 | 5.69h | **+2.84** 🌟 |
| Colline locale | 67.2h | 42 | 1.60h | **-0.52** 😐 |
| La fois unique | 3.2h | 1 | 3.20h | **+0.41** 🤷 |

**Ce que ça te dit :**
1. **Mont Blanc (z = +2,84) :** la vache, ce site est une licorne statistique. Chaque fois que tu y voles, tu es quasi sûr de faire un long vol. Réserve le gîte MAINTENANT.

2. **Colline locale (z = -0,52) :** un peu sous la moyenne, mais pas terrible pour autant. C’est pratique, et tu accumules des heures. Continue d’y aller pour t’entraîner, mais n’en attends pas des vols épiques.

3. **La fois unique (z = +0,41) :** légèrement au-dessus de la moyenne, mais tu n’y as volé qu’une fois. C’est peut-être de la chance. Il faut plus de données pour savoir s’il est vraiment bon.

---

## Les petites lignes (cas limites et pièges)

### Quand le z-score ne tient plus

**1. Petits échantillons**
- Tu as volé une fois 6 heures sur un site ? Le z-score sera peut-être de +3,0, mais c’est juste de la chance
- **Solution :** regarde le nombre de vols. S’il est faible (< 5 vols), prends le z-score avec des pincettes

**2. Toutes les valeurs sont identiques**
- Si chaque site a exactement 2,5 heures de moyenne, l’écart-type vaut zéro
- On ne peut pas diviser par zéro, donc z-score = 0 pour tout
- **Solution :** le code le gère : `deviation === 0 ? 0 : (value - avg) / deviation`

**3. Biais saisonnier**
- Tu ne voles le site A qu’en été, le site B qu’en hiver
- Les z-scores reflètent peut-être plus la **saison** que la **qualité du site**
- **Solution :** utilise les filtres ! Filtre par saison ou par période pour comparer ce qui est comparable

**4. Styles de vol différents**
- Le site A est top pour le cross (vols longs)
- Le site B est parfait pour l’acro (vols courts)
- Le z-score favorisera le site A, mais ça ne rend pas le site B « mauvais »
- **Solution :** filtre par type de vol si cette donnée est disponible

---

## Le z-score dans d’autres contextes (parce qu’on n’a pas fini)

### Par voile

Quelle voile te donne les vols les plus longs ?

- **Voile A :** z = +1,8 → au-dessus de la moyenne, sans doute une bonne voile de cross
- **Voile B :** z = -0,3 → légèrement sous la moyenne, peut-être ta vieille voile de tous les jours

### Par mois

Quand poser tes vacances ?

- **Juillet :** z = +2,1 → mois épique de façon régulière, pose tes congés
- **Novembre :** z = -1,5 → mois pourri, reste chez toi et révise ton matos

### Par pays

Quelle destination vaut le billet d’avion ?

- **France :** z = +1,2 → durées de vol au-dessus de la moyenne
- **Cette île au hasard :** z = -2,0 → magnifique, mais tu n’y voles pas beaucoup

---

## Prendre des décisions dans la vraie vie

### Scénario 1 : le débat du road trip

Ton pote veut faire 5 heures de route vers un nouveau site. Tu regardes ton Cockpit :

- **Nouveau site :** 1 vol, 4,5 h de moyenne, z = +1,5 (mais un seul vol !)
- **Site proche :** 23 vols, 3,2 h de moyenne, z = +1,8

**Décision :** le site proche a un z-score plus élevé ET plus de données. C’est le pari le plus sûr pour une bonne journée. Garde les 5 heures de route pour quand tu auras plus de données sur le nouveau site.

### Scénario 2 : acheter une voile

Tu hésites entre deux voiles d’après les vols de ton carnet :

- **Voile actuelle :** 89 vols, 2,1 h de moyenne, z = -0,4 (légèrement sous ta moyenne)
- **Voile du copain (empruntée deux fois) :** 2 vols, 3,5 h de moyenne, z = +1,2

**Décision :** n’achète pas la voile du copain sur la foi de 2 vols. Le z-score est flatteur, mais l’échantillon est trop petit. C’est peut-être de la chance, ou peut-être que ton copain pilote mieux que toi.

### Scénario 3 : prouver que tu n’es pas fou

Ton conjoint : « Tu fais 2 heures de route jusqu’à ce site tous les week-ends. Ça vaut vraiment le coup ? »

Toi : « Regarde ça. Un z-score de +2,3. J’y vole 4,2 heures en moyenne, contre 2,1 heures sur la colline du coin. C’est statistiquement significatif. Je vole DEUX FOIS plus longtemps pour 2 heures de route. Le calcul tient. »

**Résultat :** ton conjoint pense toujours que tu es fou, mais au moins tu as des DONNÉES.

---

## En résumé (pour les pilotes pressés)

**C’est quoi, un z-score ?**
Une mesure de l’écart entre une valeur et ta moyenne. Il est normalisé par l’écart-type, ce qui permet de comparer des choses différentes.

**Pourquoi on l’utilise ?**
Pour repérer quels décollages (ou voiles, ou mois, ou pays) sont **vraiment exceptionnels**, et lesquels sont juste des coups de chance isolés.

**Comment le lire ?**
- **Z-score positif :** au-dessus de la moyenne (bien !)
- **Z-score négatif :** sous la moyenne (bof)
- **|z| > 2 :** valeur statistiquement hors norme (extrême !)
- **|z| < 1 :** plutôt normal (dans la moyenne)

**Où le voir ?**
Dans ton **Cockpit**, dans la colonne « Score z » des onglets décollages, voiles, mois, etc.

**Qu’en faire ?**
T’en servir pour mieux décider où voler, avec quel matériel, et quand planifier tes voyages. Le z-score, c’est ton coéquipier qui s’appuie sur les données.

---

## Annexe : les maths (pour les matheux du fond de la classe)

### Exemple complet

Jeu de données : heures de vol moyennes par site

```
Sites: [2.5, 3.8, 2.2, 5.0, 2.4, 2.6, 1.8, 2.7, 2.3, 2.4]
```

**Étape 1 : calculer la moyenne**
```
Mean = (2.5 + 3.8 + 2.2 + 5.0 + 2.4 + 2.6 + 1.8 + 2.7 + 2.3 + 2.4) / 10
Mean = 27.7 / 10 = 2.77 hours
```

**Étape 2 : calculer l’écart-type**
```
Std Dev = √( Σ(x - mean)² / N )

For each value, compute (x - mean)²:
(2.5 - 2.77)² = 0.073
(3.8 - 2.77)² = 1.061
(2.2 - 2.77)² = 0.325
(5.0 - 2.77)² = 4.973  ← Bassano
(2.4 - 2.77)² = 0.137
(2.6 - 2.77)² = 0.029
(1.8 - 2.77)² = 0.941
(2.7 - 2.77)² = 0.005
(2.3 - 2.77)² = 0.221
(2.4 - 2.77)² = 0.137

Sum = 7.902
Std Dev = √(7.902 / 10) = √0.790 = 0.889 hours
```

**Étape 3 : calculer les z-scores**
```
Z(Bassano) = (5.0 - 2.77) / 0.889 = +2.51 🌟
Z(Pokhara) = (1.8 - 2.77) / 0.889 = -1.09 👎
Z(Annecy) = (2.5 - 2.77) / 0.889 = -0.30 🤷
```

---

## Une dernière chose : le z-score ne ment pas, mais le contexte compte

Un z-score te dit **ce qui est inhabituel**, pas **pourquoi c’est inhabituel**.

- Site à z-score élevé ? Peut-être de super conditions, ou peut-être que tu n’y voles que les jours parfaits
- Mois à z-score faible ? Peut-être la météo, ou peut-être que tu étais blessé ce mois-là
- Voile à z-score élevé ? Peut-être une meilleure voile, ou peut-être que tu es plus en confiance dessous

**Regarde toujours :**
1. La taille de l’échantillon (plus de vols = z-score plus fiable)
2. Le contexte (filtres, périodes, types de vol)
3. Ta propre mémoire (est-ce que ça te PARAÎT juste ?)

Le z-score est un outil, pas la vérité. Mais c’est un sacré bon outil pour couper court au baratin et trouver le signal dans le bruit.

Maintenant, va voler ! Et quand tes potes te demanderont pourquoi tu fais 3 heures de route pour ce site-là, tu pourras répondre avec aplomb : « Parce que le z-score est de +2,6, mon pote. LA SCIENCE. »

---

*« Dans les stats nous croyons, mais dans les thermiques nous montons. »*
*Tout pilote matheux*
