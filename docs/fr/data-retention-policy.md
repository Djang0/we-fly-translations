---
title: Politique de conservation des données
description: Durées de conservation détaillées et procédures de suppression des données chez We-Fly
category: Account & Data
order: 2
---

**Version :** 1.1
**Date d’entrée en vigueur :** 2025-11-25
**Date de dernière révision :** 2026-10-07
**Date de prochaine révision :** 2026-11-25
**Conformité RGPD :** article 5, paragraphe 1, point e) (limitation de la conservation), article 17 (droit à l’effacement)

## 1. Objet et champ d’application

La présente politique de conservation des données fixe les durées de conservation et les procédures de suppression des données personnelles traitées par We-Fly, conformément à l’article 5, paragraphe 1, point e), du RGPD, qui exige que les données personnelles soient « conservées sous une forme permettant l’identification des personnes concernées pendant une durée n’excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ».

Cette politique s’applique à toutes les données personnelles collectées, traitées et stockées par We-Fly, notamment :
- Les informations de compte utilisateur
- Les données de vol et les traces GPS
- Les journaux d’audit des suppressions
- Les preuves de consentement
- Les données de session
- Les journaux d’accès
- Les sauvegardes du système

## 2. Calendrier de conservation des données

### 2.1 Comptes utilisateur et données de profil

**Durée de conservation :** illimitée (jusqu’à la suppression par l’utilisateur ou après 3 ans d’inactivité)

**Base légale :** consentement (article 6, paragraphe 1, point a), du RGPD)

**Description :** les comptes utilisateur restent actifs sans limite de durée tant que les utilisateurs continuent d’utiliser le service. Les utilisateurs peuvent supprimer leur compte à tout moment depuis les réglages de leur profil.

**Suppression automatique :** les comptes sans aucune connexion pendant 3 années consécutives sont automatiquement supprimés, après l’envoi d’un e-mail d’avertissement à l’utilisateur au bout de 2 ans et demi.

**Données concernées :**
- Adresse e-mail
- Nom d’utilisateur
- Informations de profil
- Préférences du compte
- Date de création et horodatage de la dernière connexion

### 2.2 Données de vol et traces GPS

**Durée de conservation :** illimitée (jusqu’à la suppression par l’utilisateur)

**Base légale :** consentement (article 6, paragraphe 1, point a), du RGPD)

**Description :** les données de vol importées par les utilisateurs sont conservées sans limite de durée, car elles constituent la fonction centrale du service. Les utilisateurs peuvent supprimer un vol en particulier ou l’ensemble de leurs données de vol à tout moment.

**Suppression automatique :** les données de vol ne sont PAS supprimées automatiquement. Lorsqu’un compte utilisateur est supprimé (manuellement ou pour inactivité), toutes les données de vol associées sont définitivement supprimées.

**Données concernées :**
- Traces GPS et trajectoires de vol
- Métadonnées de vol (date, durée, distance, etc.)
- Lieux de décollage et d’atterrissage
- Conditions météorologiques
- Informations sur l’aéronef

### 2.3 Journal d’audit des suppressions

**Durée de conservation :** 7 ans à compter de la date de suppression

**Base légale :** obligation légale (législation de l’UE en matière fiscale et de tenue des registres)

**Description :** lorsqu’un utilisateur supprime son compte, un enregistrement pseudonymisé est créé dans la collection `account_deletions` à des fins de conformité et de prévention de la fraude. Cet enregistrement ne contient AUCUNE information permettant d’identifier personnellement l’utilisateur.

**Suppression automatique :** les enregistrements de plus de 7 ans sont automatiquement supprimés le premier jour de chaque mois par une tâche planifiée (cron).

**Données concernées :**
- Identifiant utilisateur anonymisé (ObjectId MongoDB)
- Horodatage de la suppression
- Motif de la suppression (à l’initiative de l’utilisateur ou pour inactivité)
- Date de dernière connexion (si la suppression est due à l’inactivité)
- Date de l’avertissement d’inactivité (le cas échéant)

**Données NON concernées :**
- Adresse e-mail
- Nom d’utilisateur
- Toute information permettant d’identifier personnellement l’utilisateur

### 2.4 Preuves de consentement

**Durée de conservation :** illimitée (tant que le compte utilisateur existe)

**Base légale :** obligation légale (article 7, paragraphe 1, du RGPD)

**Description :** les preuves du consentement de l’utilisateur (acceptation lors de l’inscription, acceptation de la politique de confidentialité, consentement au traitement des données) sont conservées pendant toute la durée de vie du compte utilisateur, afin de démontrer le respect des exigences du RGPD en matière de consentement.

**Suppression automatique :** les preuves de consentement sont supprimées lors de la suppression du compte utilisateur.

**Données concernées :**
- Horodatage du consentement
- Type de consentement (inscription, traitement des données, politique de confidentialité)
- Version de la politique de confidentialité acceptée
- Statut du consentement (accepté)

### 2.5 Journaux d’accès

**Durée de conservation :** 1 an (s’ils sont mis en place)

**Base légale :** intérêt légitime (sécurité et prévention de la fraude)

**Description :** les journaux d’accès, qui enregistrent les authentifications des utilisateurs et les requêtes à l’API, sont conservés à des fins de sécurité. **Remarque :** les journaux d’accès ne sont pas mis en place actuellement dans We-Fly.

**Suppression automatique :** les journaux d’accès de plus d’un an sont automatiquement supprimés chaque semaine par une tâche planifiée (cron) (une fois mis en place).

### 2.6 Données de session

**Durée de conservation :** 30 jours après ta dernière visite, et jamais plus de 90 jours après ta connexion

**Base légale :** intérêt légitime (authentification de l’utilisateur)

**Description :** quand tu te connectes, un cookie de session chiffré et HTTP-only est enregistré dans ton navigateur. Chaque visite le prolonge de 30 jours : il expire donc après 30 jours sans ouvrir We-Fly, et il te sera demandé de te reconnecter 90 jours après ta connexion, quelle que soit la fréquence de tes visites. Te déconnecter supprime le cookie immédiatement. Réinitialiser ton mot de passe ou supprimer ton compte met fin à toutes les sessions, sur tous les appareils, dès leur requête suivante.

**Suppression automatique :** les sessions ne sont pas stockées dans notre base de données : le cookie lui-même constitue la session. Ton navigateur le supprime à son expiration, et le serveur refuse toute session expirée, vieille de plus de 90 jours ou close par une réinitialisation de mot de passe ou une suppression de compte.

**Données concernées :**
- Identifiant utilisateur, adresse e-mail, nom affiché et URL de la photo de profil
- Rôle du compte et statut du consentement
- Préférences d’affichage (thème, visibilité du profil)
- Heure de connexion et horodatage d’expiration
- Version de session (utilisée pour mettre fin aux sessions de manière anticipée)

### 2.7 Comptes inactifs

**Durée de conservation :** 3 ans à compter de la dernière connexion

**Base légale :** principe de limitation de la conservation (article 5, paragraphe 1, point e), du RGPD)

**Description :** les comptes utilisateur auxquels personne ne s’est connecté pendant 3 années consécutives sont considérés comme inactifs et seront automatiquement supprimés.

**Système d’avertissement :**
- Au bout de **2 ans et demi** d’inactivité, l’utilisateur reçoit un e-mail l’avertissant que son compte sera supprimé dans 6 mois
- L’utilisateur peut empêcher la suppression en se connectant simplement à tout moment avant le seuil de 3 ans
- Une fois le seuil de **3 ans** atteint, le compte est automatiquement supprimé si l’utilisateur a été averti au préalable

**Suppression automatique :** les comptes inactifs sont automatiquement supprimés chaque semaine par une tâche planifiée (cron) (tous les dimanches à 3 h 00 UTC).

### 2.8 Données de sauvegarde

**Durée de conservation :** 7 jours (conservation glissante)

**Base légale :** intérêt légitime (reprise après sinistre)

**Description :** les sauvegardes de la base de données sont conservées sur une période glissante de 7 jours. Les données supprimées restent dans les sauvegardes jusqu’à 7 jours après leur suppression.

**Suppression automatique :** les sauvegardes de plus de 7 jours sont automatiquement supprimées par le système de sauvegarde.

**Important :** les utilisateurs qui demandent un effacement immédiat et complet de leurs données doivent être informés que les données supprimées peuvent rester dans les sauvegardes jusqu’à 7 jours. Passé ce délai, les données sont définitivement irrécupérables.

### 2.9 Fichiers d’espaces aériens enregistrés

**Durée de conservation :** 30 jours à compter de l’enregistrement du fichier

**Base légale :** exécution du contrat (le service de préparation de vol que tu as demandé)

**Description :** à la fin du Planificateur XC, tu peux enregistrer sous le nom de ton choix le fichier d’espaces aériens OpenAir que tu as préparé. Il est privé et seuls les applications et instruments connectés à ton compte avec l’autorisation espaces aériens peuvent le télécharger.

**Suppression automatique :** chaque fichier est supprimé automatiquement 30 jours après son enregistrement et n’est plus servi à partir de ce moment. Tu peux le supprimer plus tôt depuis le planificateur. Supprimer ton compte les supprime tous.

**Données concernées :**
- Le nom de fichier que tu as choisi et la date de vol prévue
- Le texte OpenAir (les espaces aériens et NOTAM que tu as choisis)
- La version OpenAir, la taille et la date d’enregistrement

## 3. Procédures de suppression

### 3.1 Suppression du compte à l’initiative de l’utilisateur

Les utilisateurs peuvent supprimer leur compte à tout moment depuis la page des réglages du profil :

1. Aller dans Profil et ouvrir **Supprimer le compte** dans la section Compte
2. Lire les avertissements de suppression
3. Saisir son adresse e-mail pour confirmer
4. Cliquer sur **Supprimer définitivement mon compte**
5. Le compte et toutes les données associées sont définitivement supprimés

**Ce qui est supprimé :**
- Le compte utilisateur et les informations de profil
- Toutes les données de vol et les traces GPS
- Toutes les preuves de consentement
- Toutes les données de session

**Ce qui est conservé :**
- Le journal d’audit pseudonymisé de la suppression (pendant 7 ans)

### 3.2 Suppression automatique des comptes inactifs

Les comptes inactifs (3 ans sans connexion) sont automatiquement supprimés :

1. Au bout de 2 ans et demi d’inactivité, l’utilisateur reçoit un e-mail d’avertissement
2. L’enregistrement de l’utilisateur est marqué avec `inactivityWarned: true` et l’horodatage `inactivityWarnedAt`
3. Si l’utilisateur se connecte, le marqueur d’avertissement est effacé
4. Au bout de 3 ans d’inactivité (si l’utilisateur ne s’est pas connecté), le compte est automatiquement supprimé
5. Le journal d’audit des suppressions enregistre la suppression pour inactivité

### 3.3 Nettoyage automatique du journal d’audit des suppressions

Les enregistrements du journal d’audit des suppressions de plus de 7 ans sont automatiquement supprimés :

1. La tâche cron s’exécute chaque mois (le 1er jour de chaque mois à minuit UTC)
2. Les enregistrements dont l’horodatage `deletedAt` date de plus de 7 ans sont identifiés
3. Les enregistrements sont définitivement supprimés de la collection `account_deletions`
4. Le nombre de suppressions est journalisé à des fins de surveillance

### 3.4 Suppression manuelle dans les sauvegardes (procédure d’urgence)

Dans les cas exceptionnels où un effacement immédiat des données est requis (par exemple, décision de justice, demande RGPD urgente) :

1. Le compte utilisateur est supprimé selon la procédure normale
2. L’administrateur de la base de données identifie et purge manuellement les données des sauvegardes récentes
3. L’accès aux sauvegardes est réservé aux seuls administrateurs autorisés
4. La suppression manuelle dans les sauvegardes est journalisée et signalée au délégué à la protection des données

**Remarque :** cette procédure n’est utilisée que dans des circonstances exceptionnelles, car elle nécessite une intervention manuelle sur la base de données.

## 4. Base légale de la conservation

### 4.1 Comptes utilisateur et données de vol

**Base légale :** consentement (article 6, paragraphe 1, point a), du RGPD)

Les utilisateurs consentent explicitement au traitement de leurs données lors de leur inscription à We-Fly. Les utilisateurs gardent la maîtrise de leurs données et peuvent les supprimer à tout moment.

### 4.2 Journal d’audit des suppressions

**Base légale :** obligation légale (exigences de l’UE en matière de tenue des registres)

Les réglementations fiscales et financières européennes imposent de conserver les registres pendant 7 ans. Bien que We-Fly ne soit pas un établissement financier, la durée de conservation de 7 ans est une norme largement admise pour démontrer le respect de la réglementation sur la protection des données.

### 4.3 Suppression des comptes inactifs

**Base légale :** principe de limitation de la conservation (article 5, paragraphe 1, point e), du RGPD)

Conserver indéfiniment des comptes inactifs enfreint le principe de limitation de la conservation. Après 3 ans d’inactivité, aucune finalité légitime ne justifie la conservation des données.

### 4.4 Sauvegardes

**Base légale :** intérêt légitime (reprise après sinistre)

Une conservation des sauvegardes de 7 jours constitue un équilibre raisonnable entre la capacité de reprise après sinistre et le principe de minimisation des données.

## 5. Application automatisée

Les limites de conservation des données sont appliquées par des tâches planifiées automatisées :

### 5.1 Tâche de nettoyage du journal d’audit des suppressions

- **Planification :** mensuelle (le 1er jour du mois à minuit UTC)
- **Déclencheur :** tâche cron
- **Action :** supprimer les enregistrements de plus de 7 ans

### 5.2 Tâche de traitement des comptes inactifs

- **Planification :** hebdomadaire (le dimanche à 3 h 00 UTC)
- **Déclencheur :** tâche cron
- **Actions :**
  - Envoyer des e-mails d’avertissement aux utilisateurs inactifs depuis 2 ans et demi
  - Supprimer les comptes inactifs depuis 3 ans (s’ils ont été avertis)

## 6. Droits des utilisateurs

### 6.1 Droit à l’effacement (article 17 du RGPD)

Les utilisateurs peuvent demander à tout moment la suppression immédiate de leur compte et de toutes les données associées depuis les réglages de leur profil.

**Exception :** le journal d’audit des suppressions est conservé pendant 7 ans en vertu d’une obligation légale, mais il ne contient aucune information permettant d’identifier personnellement l’utilisateur.

### 6.2 Droit à la portabilité des données (article 20 du RGPD)

Les utilisateurs peuvent exporter leurs données à tout moment : **Exporter mes données**, dans la section Compte de leur profil, télécharge leurs fichiers IGC d’origine accompagnés de leurs enregistrements de vol, et chaque fichier IGC peut être téléchargé individuellement depuis les pages des vols.

### 6.3 Droit d’accès (article 15 du RGPD)

Les utilisateurs peuvent accéder à toutes leurs données personnelles à tout moment depuis leur profil et les pages de leur historique de vols.

### 6.4 Droit d’opposition (article 21 du RGPD)

Les utilisateurs peuvent s’opposer à la suppression automatique de leur compte inactif en se connectant simplement avant le seuil de 3 ans. Cela empêche la suppression automatique.

## 7. Révision et mise à jour de la politique

### 7.1 Calendrier de révision

Cette politique est révisée chaque année à la date anniversaire de son entrée en vigueur. La prochaine révision est prévue le **2026-11-25**.

### 7.2 Événements déclenchant une mise à jour

Cette politique sera révisée et mise à jour lorsque :
- La réglementation RGPD ou son interprétation évolue
- De nouveaux types de données sont collectés
- Les exigences de conservation changent
- Les systèmes de suppression automatisée sont modifiés
- Les retours des utilisateurs montrent que la politique doit être améliorée

### 7.3 Information des utilisateurs

Lorsque cette politique est mise à jour :
- Le numéro de version est incrémenté
- Les modifications sont consignées dans l’historique des versions de la politique de confidentialité
- Les utilisateurs sont prévenus par e-mail si les modifications concernent la conservation de leurs données
- La politique mise à jour est publiée à l’adresse `/doc/data-retention-policy`

## 8. Surveillance et conformité

### 8.1 Surveillance des tâches cron

Les tâches cron qui appliquent la conservation sont surveillées au moyen :
- Des journaux de tâches cron du serveur
- Des journaux de l’application pour les exécutions réussies
- De la journalisation des erreurs pour les exécutions en échec

**Sortie de journal attendue :**
- Nettoyage du journal d’audit : "Deleted X old deletion records (older than 7 years)"
- Comptes inactifs : "Sent warnings to X users, deleted Y inactive accounts"

### 8.2 Vérification de la conformité

Le respect de cette politique est vérifié par :
- Un examen mensuel des journaux d’exécution des tâches cron
- Des requêtes trimestrielles sur la base de données pour vérifier que les limites de conservation sont appliquées
- Un audit annuel de conformité au RGPD

## 9. Coordonnées

Pour toute question ou préoccupation concernant la présente politique de conservation des données :

- **Politique de confidentialité :** [Voir la politique de confidentialité](/doc/privacy-policy)
- **Demandes RGPD :** utiliser la fonction de suppression du compte dans les réglages du profil

## 10. Références

- [Article 5 du RGPD](https://gdpr-info.eu/art-5-gdpr/)
- [Article 17 du RGPD](https://gdpr-info.eu/art-17-gdpr/)
- [Guide de l’ICO sur la limitation de la conservation](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/storage-limitation/)
- [Politique de confidentialité de We-Fly](/doc/privacy-policy)

---

**Historique du document :**
- v1.0 (2025-11-25) : création initiale de la politique
