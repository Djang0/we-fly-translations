---
title: "Guide du facteur de charge pour pilotes"
description: "Combien de G as-tu vraiment tiré dans ce thermique ?"
category: Your Flights
order: 4
---

*Ou : comment prouver mathématiquement que tu ne te vantes pas pour rien de ce SAT que tu as envoyé*

## Mais c’est quoi, ce facteur de charge ?

Tu connais cette sensation quand tu serres un thermique étroit et que ton corps pèse soudain deux fois plus lourd ? Ou quand tu tapes un mur d’ascendance et que tu te retrouves plaqué dans ta sellette comme un astronaute ? C’est la force G en action, et maintenant tu peux vraiment la mesurer.

**La version courte :** le facteur de charge (ou facteur G) te dit combien de fois tu te sens plus lourd que quand tu es assis dans ton canapé. Debout sans rien faire ? C’est 1 G. Un virage serré dans un thermique ? Peut-être 1,4 G. Ton pote qui jure avoir tiré 3 G dans sa spirale ? Probablement vrai (ou pas).

**La version un peu plus longue :** le facteur de charge est le rapport entre la force totale qui s’exerce sur toi et ton poids. En vol rectiligne à vitesse constante, tu es à 1 G. Ressource ou forte inclinaison, et le facteur de charge augmente. Passe par-dessus le sommet d’une boucle (si c’est ton truc), et il descend sous 1 G (bonjour l’apesanteur).

**Ce qui intéresse vraiment les pilotes :**
- Est-ce que tu exploites ce thermique efficacement (sans décrocher) ?
- As-tu vraiment tiré 2 G dans cette spirale, ou ta mémoire en rajoute ?
- Ton pilotage est-il fluide, ou est-ce que tu secoues ta voile comme un cerf-volant dans un ouragan ?

---

## Pourquoi je devrais m’y intéresser ?

Bonne question. La plupart du temps, tu voles aux sensations, pas les yeux rivés sur des chiffres. Mais les données de facteur de charge sont utiles en douce :

1. **L’efficacité en thermique** : plus de G en thermique = des virages plus serrés
2. **Un pilotage fluide** : de grosses variations de G = tu te bats contre ta voile au lieu de danser avec elle
3. **Les marges de sécurité** : la plupart des voiles sont homologuées à +8,0/-3,5 G. Si tu vois régulièrement 4 G en thermique, il faut qu’on parle
4. **Frimer, données à l’appui** : « J’ai tiré 6 G sur ce SAT » (avec ton fichier IGC pour le prouver, tes potes ne pourront pas dire que tu racontes des salades)

---

## La physique (ne fuis pas, c’est rapide)

### La formule de base

$$
n = 1 + \frac{a}{g}
$$

**Traduction pour humains :**
- **n** = facteur de charge (le chiffre qu’on cherche)
- **a** = accélération (m/s²), à quelle vitesse ta vitesse change
- **g** = gravité (9,81 m/s²), la façon qu’a la Terre de te garder les pieds sur terre

**Le « 1 + »** veut dire que tu pars toujours de 1 G (la gravité est toujours là). Toute accélération **supplémentaire** (virage, ressource, etc.) s’ajoute à cette base.

**Exemples :**
- Vol rectiligne en croisière, sans accélération → n = 1 + 0/9,81 = **1,0 G**
- Ressource avec une accélération de 4,9 m/s² → n = 1 + 4,9/9,81 = **1,5 G**
- Virage engagé avec une accélération centripète de 9,81 m/s² → n = 1 + 9,81/9,81 = **2,0 G**

---

## Deux façons de prendre des G (aussi inconfortables l’une que l’autre)

Ton corps se fiche de savoir *pourquoi* tu accélères, il sait juste que tu accélères. Il y a deux grandes façons d’accumuler des G :

### 1. L’accélération verticale (la ressource)

C’est la manœuvre classique du « je tire sur le manche et j’ai l’estomac qui tombe ».

**Ce qui se passe :** tu modifies ta vitesse verticale (tu montes plus vite ou tu descends moins vite), ce qui crée une accélération vers le haut.

**La formule :**
$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Où :
- **a_z** = accélération verticale (m/s²), à quelle vitesse ton taux de montée change
- Positive = tu montes plus vite (ou tu descends moins vite)
- Négative = tu descends plus vite (ou tu montes moins vite)

**Quand tu la sens :**
- En sortie de piqué
- En entrant dans un thermique et en tapant une ascendance forte
- Au treuil (bonjour les 2 G et plus pendant 10 secondes d’affilée)
- Ce moment où l’onde se met en route et te propulse vers le ciel

**Exemples concrets :**
- Entrée en thermique en douceur : 1,2-1,4 G (une légère pression)
- Ressource musclée : 1,8-2,5 G (tes joues sont maintenant sur tes genoux)
- Pic au treuil : 2,0-3,0 G (bienvenue dans le train de la douleur)

---

### 2. L’accélération latérale (le virage)

C’est la situation « j’enroule ce thermique à fond et mon bout d’aile pointe vers le sol ».

**Ce qui se passe :** tu tournes, donc tu accélères en permanence *vers le centre du virage* (accélération centripète). Ton corps se sent plus lourd parce que la portance de la voile doit à la fois te porter ET t’emmener dans le virage.

**La formule :**
$$
n_{lat} = 1 + \frac{v \times \omega}{g}
$$

Où :
- **v** = vitesse sol (m/s), à quelle vitesse tu te déplaces
- **ω** (oméga) = taux de virage (rad/s), à quelle vitesse tu changes de direction
- **v × ω** = accélération centripète (la « force » latérale qui t’entraîne dans le virage)

**Traduction :** plus tu voles vite et plus tu tournes serré, plus tu prends de G.

**Quand tu la sens :**
- Dans chaque thermique (virage constant = G latéraux constants)
- Dans les virages engagés
- En spirale engagée (surtout les rapides et musclées que tu regrettes en pleine manœuvre)
- En acro (sommets de wingover, sorties de spirale, entrées de SAT)

**Exemples concrets :**
- Thermique paresseux (faible inclinaison) : 1,1-1,2 G (à peine perceptible)
- Thermique efficace (inclinaison modérée) : 1,3-1,5 G (c’est le bon réglage)
- Thermique engagé (forte inclinaison, vitesse élevée) : 1,6-2,0 G (ton taux de chute vient d’entrer dans la quatrième dimension)
- Entrée de SAT : 2,5+ G (félicitations, tu pèses maintenant 200 kg)

---

## Comment We-Fly calcule tes G à partir des fichiers IGC

C’est là que ça devient technique (mais accroche-toi, c’est vraiment cool).

### Le problème : les fichiers IGC ne sont pas des accéléromètres

Ton enregistreur de vol n’a pas d’accéléromètre (sauf si c’est un modèle haut de gamme). Il enregistre juste :
- Les coordonnées GPS (latitude, longitude)
- L’altitude pression (du capteur barométrique)
- L’altitude GPS (des satellites)
- Des horodatages (en général à 1 Hz, soit une fois par seconde)

Il faut donc **déduire** l’accélération des variations de position et d’altitude dans le temps. C’est comme deviner l’accélération d’une voiture en la regardant passer devant des repères : faisable, mais pas parfait.

---

### Étape 1 : lisser les données bruitées

**Le défi :** les capteurs GPS et de pression sont bruités. Si on dérive directement les altitudes brutes, on obtient des chiffres qui varient dans tous les sens et n’ont aucun sens physique (genre 47 G en vol rectiligne).

**La solution :** on utilise un **filtre de Savitzky-Golay**, une technique de lissage astucieuse qui conserve la forme des vraies variations tout en éliminant le bruit.

**Ce qu’il fait :**
- Il regarde une petite fenêtre de données (par ex. 5 secondes)
- Il fait passer une courbe polynomiale lisse par ces points
- Il utilise cette courbe pour estimer la valeur « réelle » à chaque instant

**Pourquoi c’est important :** sans lissage, la dérivation, c’est du suicide. Avec lissage, on obtient des chiffres propres et crédibles.

---

### Étape 2 : calculer la vitesse verticale (dérivée première)

Maintenant qu’on a des altitudes lissées, on peut calculer à quelle vitesse l’altitude change, c’est-à-dire ta vitesse verticale (taux de montée ou de chute).

**La formule (méthode des différences centrées) :**
$$
v_z(t) = \frac{alt(t+1) - alt(t-1)}{t_{t+1} - t_{t-1}}
$$

**Traduction :** on prend l’altitude une seconde avant et une seconde après, et on divise par l’écart de temps.

**Résultat :** tu connais ton taux de montée à chaque instant (en m/s).

---

### Étape 3 : calculer l’accélération verticale (dérivée seconde)

On dérive *encore une fois* pour voir à quelle vitesse ton taux de montée change : c’est l’accélération.

**La formule :**
$$
a_z(t) = \frac{v_z(t+1) - v_z(t-1)}{t_{t+1} - t_{t-1}}
$$

**Mais attends, ce n’est pas tout, on lisse encore !** Comme la dérivation amplifie le bruit, on lisse *à nouveau* la vitesse avant de calculer l’accélération.

**Résultat :** tu as l’accélération verticale (m/s²) à chaque instant.

---

### Étape 4 : convertir en facteur de charge vertical

Enfin, on injecte l’accélération dans la formule :

$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Où **g = 9,81 m/s²** (l’accélération de la pesanteur terrestre).

**Ce que tu obtiens :**
- Vol stabilisé : 1,0 G
- Entrée dans l’ascendance : 1,2-1,5 G
- Pic au treuil : 1,5-2,0 G

---

### Étape 5 : calculer la vitesse sol et le taux de virage

Pour les G latéraux (dus au virage), il nous faut deux choses :
1. **La vitesse sol** (à quelle vitesse tu te déplaces)
2. **Le taux de virage** (à quelle vitesse tu changes de direction)

**Vitesse sol (avec la formule de haversine) :**

La formule de haversine calcule la distance entre deux coordonnées GPS sur une sphère (la Terre), en tenant compte de la courbure.

**Taux de virage :**

Le taux de virage, c’est la vitesse à laquelle ton cap (ta route) change.

**La formule :**
$$
\omega = \frac{\Delta \psi}{\Delta t}
$$

Où :
- **ψ** (psi) = angle de cap (la direction dans laquelle tu voles)
- **Δψ** = variation de cap entre deux points
- **Δt** = écart de temps

---

### Étape 6 : convertir en facteur de charge latéral

On a maintenant tout ce qu’il faut :

$$
n_{lat} = 1 + \frac{v \times |\omega|}{g}
$$

**Pourquoi la valeur absolue du taux de virage ?** Parce qu’on se fiche que tu tournes à gauche ou à droite : les G se sentent pareil dans les deux sens.

---

### Étape 7 : combiner G verticaux et latéraux

Voici l’idée clé : **à chaque instant, tu subis le PLUS GRAND des deux facteurs de charge**, pas leur somme.

Pourquoi ? Parce que c’est la physique, point ! Si tu tires 1,3 G d’un virage et 1,2 G en entrant dans l’ascendance, tu ne sens pas 2,5 G au total. Tu sens 1,3 G (la source dominante).

**La formule :**
$$
n_{combined} = \max(n_{vert}, n_{lat})
$$

**Contrôle de cohérence :** on plafonne les valeurs aberrantes (le bruit se glisse parfois dedans) :

---

### Étape 8 : calculer les statistiques

Pour finir, on mouline les chiffres pour te donner un résumé :

**Ce que ces chiffres te disent :**
- **Max :** ton pic de G (espérons que ce n’était pas dans une spirale que tu as regrettée)
- **Moyenne :** les G moyens sur le vol (en général 1,1-1,3 en vol thermique)
- **Médiane :** les G que tu as subis *la plupart du temps* (plus honnête que la moyenne)
- **Écart type :** à quel point ton pilotage était fluide ou chaotique
  - Faible (< 0,2) : pilotage fluide et régulier
  - Élevé (> 0,5) : tu partais dans tous les sens (ou tu faisais de l’acro)

---

## Les petites lignes (mises en garde importantes)

### 1. Les données IGC sont en basse résolution
- La plupart des enregistreurs enregistrent à **1 Hz** (une fois par seconde)
- Les pics de G brefs (comme un virage pris sèchement) sont moyennés
- **En réalité :** tu as peut-être touché 2,5 G un instant, mais ton enregistreur note 1,8 G

**Traduction :** attends-toi à une **sous-estimation** des pics de G. Les chiffres sont prudents.

---

### 2. Altitude pression contre altitude GPS

On utilise l’**altitude pression** pour l’accélération verticale (pas l’altitude GPS). Pourquoi ?

| Source d’altitude | Avantages | Inconvénients |
|----|----|---|
| **Pression** | Lisse, physiquement cohérente | Sensible aux erreurs de QNH et aux variations de pression |
| **GPS** | Référence absolue | Bruitée à mort, artefacts en escalier |

**Décision :** l’altitude pression est **bien meilleure** pour calculer des dérivées (l’accélération). L’altitude GPS nous donnerait des chiffres bons pour la poubelle.

---

### 3. Le lissage masque la réalité (mais ce n’est pas grave)

Les filtres de lissage sont un compromis :
- **Le bon côté :** ils éliminent le bruit et donnent des chiffres crédibles
- **Le mauvais côté :** ils émoussent les pics nets et moyennent les variations rapides

**Le deal :** on n’essaie pas de capturer chaque milliseconde de ton vol. On essaie de te donner une **estimation raisonnable et défendable** de ce qui s’est passé.

**Comparaison :** c’est comme quand on te demande « Tu roulais à combien ? ». Ta réponse est sans doute une moyenne (« Dans les 100 »), pas un graphique de chaque variation de vitesse au dixième de seconde.

---

### 4. Ces chiffres n’ont PAS valeur d’homologation

Soyons clairs : **cette analyse sert au débrief, à la formation et à la curiosité, PAS à une validation structurelle ni à des démarches juridiques.**

**Bien pour :**
- Revoir ta technique de pilotage
- Comparer des vols
- Prouver à tes potes que tu as vraiment tiré des G
- Les débriefs de formation

**PAS bien pour :**
- Prouver que ta voile encaisse 5,5 G (utilise un vrai accéléromètre)
- Les litiges juridiques
- Les demandes d’homologation

---

## Validation et contrôles de cohérence

Si tu vois des chiffres bizarres, voici comment enquêter :

| Tu vois | Ce que ça veut dire | Cause probable |
|----|----|---|
| 1,0 G en croisière | ✅ Normal | Données correctes |
| 1,3 G en thermique | ✅ Pilotage efficace | Tu exploites bien les cœurs |
| 4,0 G en vol normal | ❌ Artefact | Bug GPS, mauvais filtrage, ou tu mens |
| <=0,5 G en croisière | ❌ Bizarre | Sans doute une erreur de capteur (ou tu faisais de l’acro ?) |
| -5,0 G n’importe où | ❌ Absurde | Ton enregistreur est cassé ou hanté |

**Règle d’or :** si ça te semble faux, ça l’est probablement. Fais confiance à ton instinct, puis vérifie les données.

---

## Un dernier mot : le facteur de charge ne ment pas, mais le contexte compte

Beaucoup de G, ce n’est pas forcément mauvais, et peu de G, pas forcément bon. Tout est question de contexte :

- **Beaucoup de G en thermique** → peut vouloir dire un pilotage efficace, ou trop d’inclinaison (regarde ton taux de chute)
- **Peu de G en croisière** → normal et bien (tu ne secoues pas ta voile)
- **Pic de G au treuil** → attendu (évite juste le verrouillage)
- **Forte dispersion (écart type)** → peut vouloir dire de l’air turbulent, ou un pilotage engagé (ou que tu apprends)

**Utilise les données comme un outil, pas comme un jugement.** Elles sont là pour t’aider à comprendre ton pilotage, pas pour te faire culpabiliser de cette spirale que tu as regrettée.

---

## Le mot de la fin

L’analyse du facteur de charge ne fera pas de toi un meilleur pilote du jour au lendemain, mais elle te donnera des **enseignements appuyés sur des données** sur ce que tu fais réellement en l’air, et pas seulement sur ce que tu *crois* faire.

Alors la prochaine fois que ton pote se vante d’avoir tiré 3 G dans ce thermique, tu pourras sortir calmement tes stats du Cockpit et répondre : « Belle histoire. Les données disent 1,7. »

La science gagne encore.

---

## Références

La formule fondamentale du facteur de charge (n = 1 + a/g) et les notions de facteur de charge sont documentées dans les ouvrages classiques d’ingénierie aérospatiale et de formation aéronautique :

### 1. FAA Pilot’s Handbook of Aeronautical Knowledge (PHAK)
- **Chapitre 5 : Aerodynamics of Flight** : section Load Factor
- Federal Aviation Administration
- PDF gratuit : [site de la FAA](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
- Couvre les bases du facteur de charge, les limites structurelles et le domaine de vol

### 2. Aerodynamics for Naval Aviators
- **Auteur :** H.H. Hurt Jr.
- **Éditeur :** University of Southern California (à l’origine), révisé par l’U.S. Navy
- Manuel classique d’ingénierie aérospatiale utilisé dans la formation au pilotage militaire et civile
- La section « Load Factor and Airplane Limitation » donne des démonstrations détaillées
- Disponible chez divers libraires aéronautiques et en bibliothèque

### 3. Introduction to Flight (8e édition)
- **Auteur :** John D. Anderson Jr.
- **Éditeur :** McGraw-Hill Education
- **Année :** 2015
- **ISBN :** 978-0073380247
- Manuel de référence des cursus d’ingénierie aérospatiale
- Équation 5.18 : démonstration du facteur de charge à partir de l’accélération normale
- Couverture complète des bases de la mécanique du vol

---

*« La gravité se fiche de tes sentiments, mais tes sentiments ne se fichent pas du facteur de charge. »*
*Tout pilote physicien*
