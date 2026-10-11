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
- **La vérification officielle** : preuve que le fichier n’a pas été modifié
- **Les demandes de badge** : quand une compétition ou une fédération demande une trace signée

### Comment ça marche

1. **Ouvre ton vol** : la validation est disponible sur tes propres vols
2. **Clique sur « Valider le vol (FAI) »** : l’icône de coche dans la barre d’outils du vol (sur téléphone, elle se trouve dans le menu **⋯**)
3. **Confirme** : la fenêtre **Validation FAI du vol** explique ce qui va se passer ; clique sur **Continuer**
4. **Traitement** : We-Fly envoie le fichier IGC d’origine, sans modification, au service de validation CIVL de la FAI (vali.fai-civl.org)
5. **Résultats** : le bouton devient **Validation FAI réussie** ou **Validation FAI échouée**, et le résultat est enregistré avec le vol

Clique à nouveau sur le bouton pour ouvrir la fenêtre **Résultat de la validation FAI** (statut, message et données complètes de la validation). Pour relancer la vérification, utilise **Revalider (FAI)** dans le menu **⋯** du vol.

### Résultats de la validation

Deux issues possibles :

#### PASSED (validé)
- Le service de la FAI a accepté le fichier
- L’enregistrement de sécurité IGC (enregistrement G) correspond au contenu du fichier
- Le fichier n’a pas été modifié depuis que l’instrument l’a signé

#### FAILED (échec)
- Le service de la FAI a rejeté le fichier
- Raisons possibles :
  - Enregistrement G absent ou cassé (certaines applis et certains instruments ne signent pas leurs fichiers)
  - Le fichier a été modifié après l’enregistrement
  - L’instrument n’est pas connu du service de la FAI
  - Format de données invalide

Le **Message** de la fenêtre de résultat t’indique ce que le service a signalé.

### Ce que la FAI vérifie

Le service de validation de la FAI contrôle le fichier lui-même, pas ta façon de voler :
- **L’intégrité de l’enregistrement G** : la signature de sécurité écrite par l’instrument
- **Le format du fichier** : structure IGC valide
- **La validation de l’instrument** : la signature est vérifiée avec le programme de validation du fabricant de l’instrument

Il ne juge pas si le vol était réglementaire, correctement scoré ou sûr.

### Où se trouve le résultat

Le résultat de la validation est enregistré avec le vol dans We-Fly, tu peux donc le rouvrir à tout moment. Le service de la FAI rend un verdict, pas un certificat : si une compétition ou une demande de record exige une preuve, elle veut en général le fichier IGC d’origine, que We-Fly conserve octet pour octet tel que tu l’as importé.

### À savoir

**La validation FAI n’est PAS nécessaire pour :**
- Utiliser We-Fly au quotidien
- Ton carnet de vol personnel
- Partager tes vols avec tes potes
- Les fonctions de la communauté

**Un fichier IGC signé et valide est souvent exigé pour :**
- Les compétitions officielles
- Les demandes de record
- Certaines demandes de compétition et de badge

Vérifie le règlement de la compétition ou de la fédération à laquelle tu soumets ton vol.
