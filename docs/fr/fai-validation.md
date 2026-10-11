---
title: "Validation FAI"
description: "Utilise l’API publique de la FAI pour valider ton vol"
category: Your Flights
order: 2
---

## Validation FAI d’un vol

### C’est quoi, la validation FAI ?

La FAI (Fédération Aéronautique Internationale) est la fédération mondiale des sports aériens. We-Fly peut envoyer tes vols au service officiel de validation de la CIVL de la FAI.

### Quand utiliser la validation FAI

Utilise la validation FAI pour :
- **Les vols de compétition** : vérification officielle en compète
- **Les demandes de record** : tentatives de record du monde ou national
- **La vérification officielle** : preuve que ton vol est authentique
- **La certification** : exigences pour les badges et les qualifications

### Comment ça marche

1. **Ouvre le vol** : va sur la page de détail du vol
2. **Clique sur « Valider le vol (FAI) »** : envoi au service CIVL de la FAI
3. **Traitement** : le fichier IGC est envoyé à http://vali.fai-civl.org
4. **Résultats** : le résultat de la validation revient
5. **Stockage** : le résultat est enregistré avec le vol

### Résultats de la validation

Deux issues possibles :

#### PASSED (validé)
- Le vol est valide selon les règles de la FAI
- L’intégrité du fichier IGC est confirmée
- La trace GPS est authentique
- Aucune falsification détectée
- Un certificat de validation est disponible

#### FAILED (échec)
- Le vol n’a pas passé la validation
- Raisons possibles :
  - Problèmes d’intégrité du fichier IGC
  - Anomalies dans la trace GPS
  - Format de données invalide
  - Falsification suspectée

### Ce que la FAI vérifie

Le service de validation de la FAI contrôle :
- **L’intégrité de l’enregistrement G** : vérification de la signature de sécurité
- **Le format du fichier** : structure IGC valide
- **La continuité de la trace GPS** : ni trous ni sauts
- **La cohérence des données** : corrélation entre altitude, position et heure
- **La validation de l’instrument** : appareils GPS connus et homologués

### Certificat de validation

Si le vol passe :
- Un lien vers le certificat de validation est fourni
- Il peut servir pour les déclarations officielles
- Il est conservé de façon permanente sur les serveurs de la FAI
- C’est une preuve que ton vol est authentique

### À savoir

**La validation FAI n’est PAS nécessaire pour :**
- Utiliser We-Fly au quotidien
- Ton carnet de vol personnel
- Partager tes vols avec tes potes
- Les fonctions de la communauté

**La validation FAI EST nécessaire pour :**
- Les compétitions officielles
- Les demandes de record
- Les qualifications et badges de pilote
- Réclamer un prix de compétition
