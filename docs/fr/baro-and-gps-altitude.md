---
title: Pourquoi l’altitude baro et l’altitude GPS diffèrent
description: Ce que mesure l’altitude barométrique de ton enregistreur, pourquoi elle ne colle pas au GPS, et comment We-Fly la cale sur ton décollage
category: Your Flights
order: 7
---

## Deux altitudes, deux références

La plupart des instruments enregistrent deux altitudes chaque seconde : une donnée par le baromètre, l’autre par le GPS. Sur la page du vol, le bouton **Baro / GPS** au-dessus de la carte choisit celle qu’affiche le graphique. Elles sont rarement d’accord, et certains jours elles ont 200 m d’écart.

L’**altitude GPS** est ta hauteur au-dessus du niveau moyen de la mer, mesurée par les satellites. Elle est bruitée d’une seconde à l’autre, mais n’a pas de biais lié au jour.

L’**altitude baro** vient de la pression de l’air. Elle est lisse et précise d’une seconde à l’autre, c’est pour ça que ton vario s’en sert. Mais la norme IGC demande aux enregistreurs de la noter par rapport à la **pression standard, 1013 hPa**, et non à la vraie pression au niveau de la mer ce jour-là (le QNH). L’écran de ton vario affiche le QNH si tu l’as réglé avant de décoller. Le fichier, lui, stocke toujours la version standard.

## Jusqu’où ça peut s’écarter

Près du niveau de la mer, 1 hPa vaut environ 8 m de hauteur.

| Jour | Pression au niveau de la mer | Le baro du fichier indique |
|---|---|---|
| Standard | 1013 hPa | à peu près juste |
| Fort anticyclone | 1030 hPa | environ 140 m trop bas |
| Anticyclone d’hiver | 1040 hPa | environ 225 m trop bas |
| Dépression creuse | 985 hPa | environ 230 m trop haut |

La température ajoute une erreur plus petite, qui grandit avec la hauteur : dans un air plus chaud que le standard, le baromètre sous-estime d’environ 4 % de ta hauteur par tranche de 10 °C.

Par fort anticyclone, un terrain proche de la côte passe sous zéro. Un terrain de treuil à 30 m, sous 1030 hPa, enregistre environ -110 m. Cette valeur est juste pour le standard qu’elle utilise : ton enregistreur n’est pas cassé.

## Ce qu’affiche We-Fly

Sur le graphique d’altitude, la courbe baro est **calée au déco** : décalée une seule fois pour tout le vol pour qu’au décollage elle soit posée sur le relief, comme quand tu cales ton vario avant de partir. L’affichage au-dessus du graphique indique **Alt baro · calée au déco**, et le **ⓘ** à côté du bouton Baro / GPS te donne le décalage appliqué à ce vol. Quand la trace n’a pas de données de relief, la courbe baro est alignée sur le GPS à la place.

Ce même décalage donne une estimation de la pression du jour au niveau de la mer : la carte **Hauteurs** du résumé du vol l’affiche en **QNH du jour**. C’est approximatif, car une température éloignée de l’atmosphère standard la fait varier, surtout sur les décollages en altitude.

Le décalage ne fait que monter ou descendre la courbe. Ton vario, les taux de montée, les gains de hauteur et les thermiques sont calculés à partir de différences d’altitude, ils n’en dépendent donc pas. Toutes les hauteurs absolues de l’analyse (altitude max et min, plafond, sommets des thermiques, hauteurs sol) utilisent le même décalage.

Ton fichier IGC n’est jamais modifié : les téléchargements et exports te donnent l’original, exactement tel que ton instrument l’a écrit.

## À laquelle se fier

- **Pour les montées, les descentes et le gain de hauteur :** le baro. Il est lisse et le biais du jour s’annule.
- **Pour la hauteur absolue, les espaces aériens et la comparaison avec d’autres pilotes :** le GPS, ou le baro calé au déco. La vérification des espaces aériens sur la carte du vol utilise toujours le GPS.
- **Téléphones sans baromètre :** les deux courbes sont en GPS. Il n’y a rien à caler, et le **ⓘ** te le dit.

Si les deux courbes restent très éloignées tout le vol même après le décalage, ou si le baro fait des sauts de plusieurs centaines de mètres, le capteur de pression de ton instrument est peut-être défaillant. We-Fly signale ces vols dans **Profil → Anomalies**.
