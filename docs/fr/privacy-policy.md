---
title: Politique de confidentialité
description: Comment We-Fly collecte, utilise et protège tes données personnelles conformément au RGPD
category: Account & Data
order: 3
---

**Dernière mise à jour :** 11 octobre 2026

## 1. Introduction

Bienvenue sur We-Fly. Nous nous engageons à protéger tes données personnelles et à respecter tes droits en matière de vie privée, conformément au règlement général sur la protection des données (RGPD), règlement (UE) 2016/679, et aux lois applicables en matière de protection des données.

La présente politique de confidentialité explique comment nous collectons, utilisons, conservons et protégeons tes informations personnelles lorsque tu utilises notre plateforme de suivi et d’analyse de vols de parapente.

### 1.1 Responsable du traitement

We-Fly est le responsable du traitement de tes données personnelles. Pour toute question sur la présente politique de confidentialité ou sur tes droits relatifs à tes données, contacte-nous aux coordonnées indiquées à la section 15.

### 1.2 Champ d’application

Cette politique s’applique à tous les utilisateurs de la plateforme We-Fly, notamment :
- Les utilisateurs inscrits disposant d’un compte
- Les visiteurs de nos pages publiques
- Les utilisateurs de nos liens de partage de vols

## 2. Données que nous collectons

### 2.1 Informations de compte (via Google OAuth)

Lorsque tu crées un compte avec « Se connecter avec Google », nous collectons :

- **Adresse e-mail** : pour identifier le compte et communiquer avec toi
- **Nom complet** : pour l’affichage du profil et l’attribution des vols
- **URL de la photo de profil** : issue de ton compte Google, pour l’affichage du profil
- **Statut de vérification de l’adresse e-mail** : fourni par Google
- **Identifiant utilisateur Google** : identifiant unique issu de Google OAuth

Nous ne collectons ni ne conservons **aucun** mot de passe. Toute l’authentification est gérée de manière sécurisée par Google.

### 2.2 Données de vol (issues des fichiers IGC importés)

Lorsque tu importes des enregistrements de vols de parapente, nous collectons et traitons :

**Métadonnées du fichier :**
- Nom du pilote (extrait du fichier IGC ou du nom de ton compte)
- Modèle et type de voile
- Informations sur l’appareil GPS (fabricant, numéro de série, firmware)
- Date et heure du vol
- Nom de fichier d’origine

**Données de trace GPS :**
- Trace GPS complète (latitude, longitude, altitude, horodatages)
- Lieu et heure de décollage
- Lieu et heure d’atterrissage
- Durée du vol
- Altitudes maximale et minimale
- Distance totale parcourue

**Analyses de vol calculées :**
- Analyse de l’activité thermique (taux de montée, durée, gain d’altitude)
- Estimations de la vitesse et de la direction du vent
- Indicateurs de performance du vol
- Données de score XContest (distance, points, classification du type de vol)
- Données de validation FAI (si tu demandes la validation)
- Points de virage et segments de parcours

**Identifiants techniques :**
- Empreinte MD5 de la trace GPS (pour la détection des doublons)
- Identifiants des enregistrements en base de données
- Chemins de stockage des fichiers (si le stockage local est activé)

### 2.3 Données des sites de décollage

Nous tenons une base de données des sites de décollage de parapente contenant :
- Le nom du site et ses coordonnées géographiques
- L’altitude au-dessus du niveau de la mer
- La direction du vent dominant
- Le pays, la ville et le code postal (obtenus via le service de géocodage inverse Nominatim d’OpenStreetMap)

Ces données sont agrégées à partir des vols importés par les utilisateurs et de bases de données géographiques publiques. Les métadonnées de localisation sont enrichies à l’aide des données OpenStreetMap (© contributeurs d’OpenStreetMap).

### 2.4 Données de profil et de préférences

- Rôle de l’utilisateur (utilisateur ou administrateur)
- Préférence de visibilité du profil (public ou privé)
- Préférences d’affichage (colonnes du tableau, tri, filtres)
- Préférence de thème
- Préférences d’e-mails (si tu reçois ou non les conseils de démarrage)
- Horodatages de création et de modification du compte

### 2.5 Données statistiques

Nous calculons des statistiques agrégées à partir de tes vols :
- Nombre total de vols et d’heures
- Distance totale parcourue en vol
- Nombre de sites de décollage et de pays distincts visités
- Durée de vol moyenne
- Répartition par type de vol

### 2.6 Liens de partage de vols

Lorsque tu génères un lien de partage pour un vol donné, nous créons :
- Un identifiant de 43 caractères, sécurisé par cryptographie
- Celui-ci permet un accès public à un seul vol sans exposer l’ensemble de ton profil

## 3. Base légale du traitement

Conformément à l’article 6 du RGPD, nous traitons tes données personnelles sur les bases suivantes :

### 3.1 Consentement (article 6, paragraphe 1, point a))
- Authentification Google OAuth (tu donnes ton consentement explicite en cliquant sur « Se connecter avec Google »)
- Réglages de visibilité du profil (tu choisis de rendre ton profil public)
- Intégrations d’API tierces (validation FAI, géocodage)

### 3.2 Exécution du contrat (article 6, paragraphe 1, point b))
- Traitement des vols que tu importes
- Fourniture des analyses et statistiques de vol
- Gestion de ton compte et de tes préférences d’utilisateur
- Fourniture des fonctions essentielles de notre service

### 3.3 Intérêt légitime (article 6, paragraphe 1, point f))
- Prévention des imports de vols en double
- Détection et prévention de la fraude ou des abus
- Amélioration de notre service et de l’expérience utilisateur
- Maintien de la sécurité et de l’intégrité du système
- Envoi occasionnel de conseils pour t’aider à prendre en main le service auquel tu t’es inscrit (tu peux t’y opposer à tout moment, voir 4.4)

Tu peux retirer ton consentement à tout moment en supprimant ton compte ou en modifiant tes réglages de confidentialité.

## 4. Comment nous utilisons tes données

Nous utilisons tes données personnelles pour :

### 4.1 Fournir les services essentiels
- T’authentifier et t’identifier lorsque tu te connectes
- Analyser, traiter et conserver tes enregistrements de vols
- Générer les statistiques de vol et les indicateurs de performance
- Afficher ton carnet de vol personnel et ton tableau de bord
- Associer automatiquement les vols aux sites de décollage

### 4.2 Permettre les fonctions communautaires
- Afficher les vols publics (uniquement si tu actives le profil public)
- Afficher les profils de pilotes dans les classements de la communauté (avec ton consentement)
- Identifier les sites de décollage populaires
- Permettre aux autres pilotes de découvrir des itinéraires de vol

### 4.3 Améliorer notre plateforme
- Agréger des statistiques anonymes sur l’utilisation de la plateforme
- Identifier et corriger les problèmes techniques
- Améliorer les algorithmes d’analyse de vol
- Optimiser l’interface et l’expérience utilisateur

### 4.4 Communiquer avec toi
- Envoyer des notifications liées au service
- Envoyer occasionnellement des conseils de démarrage, par exemple un rappel unique si ton carnet de vol est encore vide une semaine après ton inscription. Tu peux les désactiver à tout moment dans **Profil → E-mails**, ou avec le lien de désinscription en bas de chaque e-mail de conseil
- Répondre aux demandes d’assistance
- T’informer des changements importants de notre service ou de la présente politique

### 4.5 Assurer la sécurité
- Empêcher les accès non autorisés aux comptes
- Détecter et prévenir les activités frauduleuses
- Valider l’intégrité des données
- Tenir des journaux d’audit des événements de sécurité

Nous n’utilisons **pas** tes données pour :
- De la publicité ou du marketing pour le compte de tiers
- Vendre ou louer tes informations personnelles
- Des décisions automatisées produisant des effets juridiques
- Du profilage à des fins commerciales

## 5. Services tiers et transferts de données

Nous partageons des données limitées avec les services tiers suivants :

### 5.1 Google OAuth
**Finalité :** authentification des utilisateurs et vérification de leur identité
**Données partagées :** e-mail, nom, photo de profil (via le protocole OAuth)
**Localisation :** États-Unis (infrastructure Google)
**Politique de confidentialité :** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Base légale :** consentement (autorisation OAuth)

### 5.2 Nominatim (OpenStreetMap)
**Finalité :** géocodage inverse pour déterminer le nom des lieux à partir des coordonnées
**Données partagées :** coordonnées de latitude et de longitude uniquement (aucun identifiant personnel)
**Fréquence :** déclenché par un administrateur, non automatique
**Politique de confidentialité :** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Base légale :** intérêt légitime (enrichissement des informations sur les sites)
**Attribution :** données de localisation © contributeurs d’OpenStreetMap ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Finalité :** obtenir les données d’altitude des sites de décollage
**Données partagées :** coordonnées de latitude et de longitude uniquement
**Fréquence :** déclenché par un administrateur
**Politique de confidentialité :** service public, aucune inscription requise
**Base légale :** intérêt légitime (exactitude des données des sites)

### 5.4 Service de validation des vols FAI CIVL
**Finalité :** valider les enregistrements de vol selon les normes de la FAI
**Données partagées :** contenu complet du fichier IGC (uniquement lorsque tu demandes explicitement la validation)
**Point d’accès :** vali.fai-civl.org/api/vali/json
**Politique de confidentialité :** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Base légale :** consentement (à l’initiative de l’utilisateur)

### 5.5 Fournisseurs de tuiles cartographiques
**Finalité :** afficher des cartes interactives pour visualiser les vols
**Services utilisés :**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Données partagées :** uniquement les requêtes de tuiles (aucune donnée personnelle)
**Base légale :** intérêt légitime (fonctionnement essentiel du service)

### 5.6 Transferts internationaux de données

Certains de nos prestataires tiers sont situés en dehors de l’Espace économique européen (EEE), en particulier aux États-Unis. Lorsque nous transférons des données à l’international :

- Nous nous appuyons sur les **décisions d’adéquation** de la Commission européenne (lorsqu’elles existent)
- Nous mettons en œuvre les **clauses contractuelles types (CCT)** approuvées par la Commission européenne
- Nous veillons à ce que les prestataires respectent des **normes de protection des données équivalentes à celles du RGPD**

## 6. Cookies et technologies de suivi

### 6.1 Cookies essentiels (aucun consentement requis)

**Cookies d’authentification :**
- **Finalité :** maintenir ta session connectée
- **Type :** jetons JWT chiffrés, sécurisés, HTTP-only
- **Durée :** 30 jours après ta dernière visite, et jamais plus de 90 jours après ta connexion. La déconnexion le supprime, et la réinitialisation de ton mot de passe ou la suppression de ton compte y met fin sur tous les appareils.
- **Fournisseur :** NextAuth.js
- **Désactivable :** non (indispensable au fonctionnement du service)

**Cookies de sécurité de connexion (autorouter) :**
- **Noms :** `ar_oauth_state`, `ar_oauth_return`
- **Finalité :** protéger la connexion à autorouter quand tu le relies pour les NOTAM, et te ramener à la page d’où tu venais
- **Type :** HTTP-only, sécurisés
- **Durée :** 10 minutes, supprimés dès que la connexion aboutit
- **Désactivable :** non (déposés uniquement si tu choisis de connecter autorouter)

### 6.2 Cookies fonctionnels (intérêt légitime)

**Cookie d’état de la barre latérale :**
- **Nom :** `sidebar_state`
- **Finalité :** mémoriser ta préférence de barre latérale dépliée ou repliée
- **Durée :** 7 jours
- **Données stockées :** "true" ou "false"

**Cookie de langue :**
- **Nom :** `NEXT_LOCALE`
- **Finalité :** mémoriser la langue d’interface que tu as choisie (anglais, français, allemand, néerlandais, italien ou espagnol)
- **Durée :** 1 an
- **Données stockées :** un code de langue, par exemple "fr"

**Cookie de langue affichée :**
- **Nom :** `wf-rl`
- **Finalité :** noter la langue de la dernière page affichée, pour que l’appli puisse se rafraîchir une fois si tu changes de langue en cours de navigation
- **Durée :** jusqu’à la fermeture de ton navigateur
- **Données stockées :** un code de langue, par exemple "fr"

**Cookie d’appareil connu :**
- **Nom :** `wf-known-device`
- **Finalité :** mémoriser que quelqu’un s’est déjà connecté sur ce navigateur, pour que la page d’accueil propose « Se connecter » plutôt que « Créer un compte »
- **Durée :** environ 13 mois
- **Données stockées :** uniquement "1", jamais ton e-mail ni ton identifiant de compte

**Cookie d’indice de clé d’accès :**
- **Nom :** `wf-passkey-hint`
- **Finalité :** mémoriser que ce navigateur dispose d’une clé d’accès pour We-Fly, pour que la page de connexion puisse la proposer en premier
- **Durée :** environ 13 mois
- **Données stockées :** uniquement "1"

### 6.3 Stockage local

Nous utilisons le stockage local du navigateur pour :

**Réglages d’affichage des vols :**
- **Clé :** `we-fly-flights-display-settings`
- **Finalité :** mettre en cache la visibilité des colonnes et les préférences de tri pour accélérer le chargement des pages
- **Données :** objet JSON contenant les préférences d’interface
- **Synchronisé :** avec le serveur, pour un accès depuis plusieurs appareils

**Préférences de filtres :**
- **Finalité :** conserver les réglages de recherche et de filtrage des vols
- **Données :** critères de recherche, périodes, filtres de lieu
- **Portée :** côté client uniquement

Tu peux effacer le stockage local à tout moment dans les réglages de ton navigateur. Les préférences d’interface reviendront alors à leurs valeurs par défaut.

### 6.4 Mesure d’audience et suivi

Nous n’utilisons actuellement **pas** :
- Google Analytics ni aucune plateforme de mesure d’audience similaire
- De traceurs publicitaires tiers
- De pixels de réseaux sociaux
- De mécanismes de suivi intersites

## 7. Stockage et sécurité des données

### 7.1 Où nous stockons tes données

**Base de données :** MongoDB
- Comptes utilisateur, enregistrements de vols, informations sur les sites
- Base de données de qualité professionnelle avec contrôles d’accès
- Sauvegardes automatiques régulières
- Connexions chiffrées (TLS/SSL)

**Système de fichiers (facultatif) :**
- Fichiers IGC d’origine et données JSON analysées
- Stockés dans des répertoires propres à chaque utilisateur
- Protection contre la traversée de répertoires mise en place
- Accès réservé aux requêtes authentifiées

**Localisation géographique :** serveurs situés dans l’UE

### 7.2 Mesures de sécurité

Nous appliquons des pratiques de sécurité conformes aux standards du secteur :

**Garanties techniques :**
- Chiffrement HTTPS pour toutes les données en transit (TLS 1.2+)
- Cookies HTTP-only sécurisés avec protection SameSite
- Authentification par jetons JWT avec expiration
- Prévention des injections MongoDB et assainissement des entrées
- Échappement des expressions régulières pour prévenir les attaques ReDoS
- Prévention de la traversée de répertoires pour les opérations sur les fichiers
- Validation des ObjectId pour toutes les requêtes en base de données

**Contrôles d’accès :**
- Authentification par session via NextAuth
- Contrôle d’accès basé sur les rôles (utilisateur ou administrateur)
- Filtrage des données par utilisateur (chaque utilisateur ne peut accéder qu’à ses propres vols)
- Routes protégées nécessitant une authentification

**Validation des données :**
- Limites de taille de fichier (3 Mo maximum pour les imports IGC)
- Validation de l’extension des fichiers (.igc uniquement)
- Validation des coordonnées (longitude de -180 à 180, latitude de -90 à 90)
- Détection des vols en double par empreinte MD5
- Analyse des dates avec validation du format

**Surveillance et journalisation :**
- Journalisation structurée des événements de sécurité
- Journaux d’audit des actions des administrateurs
- Journalisation des tentatives d’accès non autorisé
- Journalisation des erreurs avec leur contexte, pour enquête

### 7.3 Procédures en cas de violation de données

En cas de violation de données touchant tes données personnelles :
- Nous en informerons l’autorité de contrôle compétente dans un délai de 72 heures (article 33 du RGPD)
- Nous informerons les utilisateurs concernés dans les meilleurs délais (article 34 du RGPD)
- Nous décrirons la nature de la violation et les mesures prises pour en atténuer les effets
- Nous consignerons toutes les violations dans notre registre interne

## 8. Conservation des données

### 8.1 Durées de conservation

**Données de compte :**
- Conservées pendant toute la durée de vie de ton compte
- Supprimées à la clôture du compte (voir section 9.3)

**Enregistrements de vols :**
- Conservés sans limite de durée tant que ton compte est actif
- Tu peux supprimer un vol à tout moment
- Tous les vols sont supprimés à la clôture du compte

**Jetons de session :**
- Les jetons JWT expirent 30 jours après ta dernière visite, et jamais plus de 90 jours après ta connexion
- Les jetons expirés ne permettent plus l’authentification

**Cookies :**
- `sidebar_state` : 7 jours à compter de la dernière visite
- Cookies d’authentification : 30 jours à compter de la dernière visite, 90 jours au maximum (voir section 6.1)

**Stockage local :**
- Conservé jusqu’à ce que tu effaces les données de ton navigateur ou que tu supprimes ton compte
- Aucune conservation côté serveur

**Fichiers journaux :**
- Journaux de sécurité conservés 12 mois (intérêt légitime lié à la sécurité)
- Supprimés automatiquement à l’issue de la durée de conservation

### 8.2 Comptes inactifs

**Règle d’inactivité :** les comptes sans aucune connexion pendant 3 années consécutives sont automatiquement supprimés, conformément au principe de limitation de la conservation du RGPD (article 5, paragraphe 1, point e)).

**Système d’avertissement :**
- Au bout de **2 ans et demi** d’inactivité, tu reçois un e-mail d’avertissement t’informant que ton compte sera supprimé dans 6 mois
- Tu peux empêcher la suppression en te connectant simplement à tout moment avant le seuil de 3 ans
- Si tu te connectes après avoir reçu un avertissement, le compteur d’inactivité est remis à zéro et l’avertissement est effacé
- Une fois le seuil de **3 ans** atteint (et si tu as été averti au préalable), ton compte est automatiquement supprimé

**Ce qui se passe lorsqu’un compte inactif est supprimé :**
- Toutes les informations du compte sont définitivement supprimées
- Toutes les données de vol et traces GPS sont définitivement supprimées
- Toutes les preuves de consentement sont définitivement supprimées
- Un enregistrement d’audit pseudonymisé de la suppression est créé (voir section 8.3)

**Comment empêcher la suppression :** connecte-toi simplement à ton compte, à tout moment, pour remettre le compteur d’inactivité à zéro.

### 8.3 Journal d’audit des suppressions

**Finalité :** lorsque tu supprimes ton compte (manuellement ou pour inactivité), nous créons un enregistrement d’audit pseudonymisé afin de démontrer notre conformité au RGPD et de prévenir la fraude.

**Ce qui est conservé :**
- Identifiant utilisateur anonymisé (ObjectId MongoDB)
- Horodatage de la suppression
- Motif de la suppression (à l’initiative de l’utilisateur ou pour inactivité)
- Date de dernière connexion (si la suppression est due à l’inactivité)
- Date de l’avertissement d’inactivité (le cas échéant)

**Ce qui n’est PAS conservé :**
- Adresse e-mail
- Nom d’utilisateur
- Toute information permettant de t’identifier personnellement

**Durée de conservation :** 7 ans à compter de la date de suppression (exigée par la réglementation de l’UE en matière de tenue des registres)

**Suppression automatique :** les enregistrements d’audit de plus de 7 ans sont supprimés automatiquement chaque mois.

**Base légale :** obligation légale (législation de l’UE en matière fiscale et de tenue des registres)

### 8.4 Conservation des sauvegardes

**Règle de sauvegarde :** nous conservons des sauvegardes de la base de données sur une période glissante de 7 jours, à des fins de reprise après sinistre.

**Important :** lorsque tu supprimes ton compte ou un vol, les données supprimées restent dans les sauvegardes jusqu’à 7 jours. Passé ce délai, elles sont définitivement irrécupérables.

**Demander un effacement immédiat :** si tu as besoin d’un effacement immédiat et complet de tes données (par exemple, obligation légale, urgence), contacte-nous et nous pourrons purger manuellement les données des sauvegardes récentes. Cette procédure n’est utilisée que dans des circonstances exceptionnelles.

### 8.5 Calendrier complet de conservation

Pour une vue d’ensemble de toutes les durées de conservation des données, consulte notre [politique de conservation des données](/doc/data-retention-policy) détaillée.

## 9. Tes droits en matière de protection des données

En vertu du RGPD, tu disposes des droits suivants sur tes données personnelles :

### 9.1 Droit d’accès (article 15)

Tu as le droit de demander :
- La confirmation que nous traitons ou non tes données personnelles
- Une copie de tes données personnelles
- Des informations sur la manière dont nous utilisons tes données

**Comment l’exercer :** clique sur **Exporter mes données** dans le panneau **Compte** de ton **Profil**. Cela génère un fichier ZIP contenant tous tes fichiers IGC classés par date, ainsi qu’un fichier JSON structuré avec ton profil, tes préférences, tes vols, les comptes de connexion liés et l’historique de tes consentements.

### 9.2 Droit de rectification (article 16)

Tu as le droit de faire corriger des données personnelles inexactes.

**Comment l’exercer :** modifie les informations de ton profil dans les réglages du compte. L’exactitude des données de vol dépend des fichiers IGC que tu as importés (importe des fichiers corrigés si nécessaire).

### 9.3 Droit à l’effacement / « droit à l’oubli » (article 17)

Tu as le droit de demander la suppression de tes données personnelles lorsque :
- Les données ne sont plus nécessaires au regard de la finalité initiale
- Tu retires ton consentement (pour les traitements fondés sur le consentement)
- Tu t’opposes au traitement (et il n’existe pas de motif légitime impérieux)
- Les données ont fait l’objet d’un traitement illicite

**Comment l’exercer :** clique sur **Supprimer le compte** dans le panneau **Compte** de ton **Profil**, saisis ton adresse e-mail pour confirmer, puis clique sur **Supprimer définitivement mon compte**. Ton compte et toutes les données associées seront immédiatement supprimés.

**Ce qui est supprimé :**
- Toutes les informations du compte (e-mail, nom, profil)
- Toutes les données de vol et traces GPS
- Toutes les preuves de consentement
- Toutes les données de session

**Ce qui est conservé :**
- L’enregistrement d’audit pseudonymisé de la suppression (7 ans, sans aucune information permettant de t’identifier personnellement)
- Les données présentes dans les sauvegardes (jusqu’à 30 jours, puis définitivement supprimées)

**Exceptions :** nous pouvons conserver certaines données si la loi l’exige ou pour des finalités juridiques légitimes (voir la section 8.3 pour le détail du journal d’audit des suppressions).

### 9.4 Droit à la limitation du traitement (article 18)

Tu as le droit de demander que nous limitions le traitement de tes données lorsque :
- Tu contestes l’exactitude des données
- Le traitement est illicite mais tu t’opposes à leur effacement
- Nous n’avons plus besoin des données mais elles te sont nécessaires pour la constatation, l’exercice ou la défense de droits en justice
- Tu t’es opposé au traitement (pendant la vérification des motifs légitimes)

**Comment l’exercer :** contacte-nous en précisant ta demande de limitation.

### 9.5 Droit à la portabilité des données (article 20)

Tu as le droit de recevoir tes données personnelles dans un format structuré, couramment utilisé et lisible par machine.

**Comment l’exercer :**
- **Données de vol :** utilise **Exporter mes données** dans ton **Profil** pour télécharger une archive ZIP de tous tes fichiers IGC
- **Données du compte :** la même archive contient un fichier JSON (`data-export.json`) avec les informations de ton compte, tes préférences et tes vols

### 9.6 Droit d’opposition (article 21)

Tu as le droit de t’opposer à un traitement fondé sur l’intérêt légitime ou effectué à des fins de prospection.

**Comment l’exercer :**
- **Fonctions communautaires :** désactive **Profil public** dans **Confidentialité** pour ne plus apparaître dans les fonctions communautaires
- **Autres traitements :** contacte-nous en précisant ton opposition

### 9.7 Droit de retirer ton consentement (article 7, paragraphe 3)

Lorsque le traitement est fondé sur le consentement, tu peux retirer ton consentement à tout moment.

**Comment l’exercer :**
- **Authentification OAuth :** révoque l’accès dans les réglages de sécurité de ton compte Google
- **Profil public :** désactive **Profil public** dans **Confidentialité** sur ton **Profil**
- **Compte :** supprime ton compte pour retirer l’ensemble de tes consentements

**Remarque :** le retrait du consentement ne compromet pas la licéité du traitement fondé sur le consentement effectué avant ce retrait.

### 9.8 Droit d’introduire une réclamation (article 77)

Tu as le droit d’introduire une réclamation auprès d’une autorité de contrôle, notamment dans :
- L’État membre de l’UE de ta résidence habituelle
- L’État membre de ton lieu de travail
- L’État membre du lieu où la violation aurait été commise

**Autorités de contrôle de l’UE :** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

Nous t’encourageons à nous contacter d’abord, afin que nous puissions répondre directement à tes préoccupations.

### 9.9 Exercer tes droits

Pour exercer l’un de ces droits :
1. Contacte-nous à l’aide des informations de la section 15
2. Fournis suffisamment d’informations pour vérifier ton identité (nous pouvons te demander de confirmer ton adresse e-mail)
3. Précise le ou les droits que tu souhaites exercer
4. Nous te répondrons dans un délai d’**un mois** (prolongeable de deux mois pour les demandes complexes)

**Gratuité :** l’exercice de tes droits est gratuit, sauf si les demandes sont manifestement infondées ou excessives.

## 10. Réglages de confidentialité et maîtrise de tes données

### 10.1 Visibilité du profil

Tu choisis si ton profil et tes vols sont visibles par les autres utilisateurs :

**Profil public (par défaut) :**
- Tes vols apparaissent dans les fonctions communautaires
- Ton profil est visible par les autres utilisateurs
- Tu apparais dans les classements et les statistiques des pilotes

**Profil privé :**
- Tes vols ne sont visibles que par toi
- Tu n’apparais pas dans les classements de la communauté
- Tu peux toujours générer des liens de partage secrets pour des vols individuels

**Comment le modifier :** ouvre ton **Profil**, clique sur **Confidentialité** dans le panneau **Compte** et active ou désactive **Profil public**. Le changement s’applique immédiatement.

### 10.2 Préférences d’affichage

Tu peux personnaliser :
- La visibilité des colonnes du tableau des vols
- Les préférences de tri
- Les réglages de filtres et de recherche
- La préférence de thème de l’interface

Ces préférences sont synchronisées entre tes appareils.

### 10.3 Export des données

**Export en libre-service :**
- Ouvre ton **Profil** et clique sur **Exporter mes données** dans le panneau **Compte**
- Génère un fichier ZIP contenant tous tes fichiers IGC, classés par date (arborescence de répertoires AAAA/MM/JJ)
- Inclut un fichier JSON structuré avec ton profil, tes préférences, tes vols, les comptes de connexion liés et l’historique de tes consentements
- Inclut la liste des éventuels vols sans fichier stocké

## 11. Vie privée des enfants

We-Fly ne s’adresse pas aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles d’enfants de moins de 16 ans.

Si tu es parent ou tuteur et penses que ton enfant nous a fourni des données personnelles :
- Contacte-nous immédiatement aux coordonnées indiquées à la section 15
- Nous supprimerons ces informations de nos systèmes dans un délai de 30 jours

## 12. Décision automatisée et profilage

Nous ne pratiquons **pas** :
- De décision automatisée produisant des effets juridiques ou des effets similaires significatifs (article 22 du RGPD)
- De profilage à des fins de marketing ou commerciales
- De décisions algorithmiques affectant ton accès aux services

**Analyse des vols :** si nous utilisons des algorithmes pour analyser les données de vol (détection des thermiques, score, analyse du vent), il s’agit de calculs techniques qui enrichissent ton expérience et ne constituent pas un profilage au sens du RGPD.

## 13. Modifications de la présente politique de confidentialité

Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre pour tenir compte :
- De l’évolution de nos pratiques en matière de données
- De nouvelles fonctions ou de nouveaux services
- D’exigences légales ou réglementaires
- Des retours des utilisateurs et des bonnes pratiques

**Notification des modifications :**
- Nous mettrons à jour la date de « Dernière mise à jour » en haut de la présente politique
- En cas de modification substantielle, nous t’informerons par e-mail ou par un avis bien visible sur notre plateforme
- La poursuite de l’utilisation de notre service après ces modifications vaut acceptation de la nouvelle politique

**Historique des versions :** nous conservons les versions antérieures de la politique à des fins de transparence et de conformité.

## 14. Cadre juridique et conformité

La présente politique de confidentialité est régie par :
- Le **RGPD**, règlement (UE) 2016/679, règlement général sur la protection des données
- La **directive « vie privée et communications électroniques »** 2002/58/CE (telle que modifiée)
- Les lois nationales applicables en matière de protection des données dans les États membres de l’UE

**Principes relatifs à la protection des données (article 5 du RGPD) :**
- **Licéité, loyauté, transparence :** nous traitons les données de manière licite, loyale et transparente
- **Limitation des finalités :** les données sont collectées pour des finalités déterminées, explicites et légitimes
- **Minimisation des données :** nous ne collectons que les données adéquates et nécessaires à nos finalités
- **Exactitude :** nous tenons les données personnelles exactes et à jour
- **Limitation de la conservation :** les données ne sont conservées que le temps nécessaire
- **Intégrité et confidentialité :** nous garantissons une sécurité appropriée des données personnelles
- **Responsabilité :** nous démontrons le respect de ces principes

## 15. Nous contacter

Pour toute question sur la présente politique de confidentialité, ou si tu souhaites exercer tes droits sur tes données, contacte-nous :

**Responsable du traitement :** We-Fly
**E-mail :** contact@we-fly.cloud
**Délai de réponse :** nous nous efforçons de répondre à toutes les demandes sous 5 jours ouvrés

**Pour les demandes liées au RGPD :**
- Indique « GDPR Request » dans l’objet du message
- Fournis suffisamment d’informations pour vérifier ton identité
- Précise la nature de ta demande (accès, suppression, portabilité, etc.)
- Nous te répondrons dans un délai d’un mois, comme l’exige l’article 12, paragraphe 3, du RGPD

---

## 16. Définitions et interprétation

**Données personnelles :** toute information se rapportant à une personne physique identifiée ou identifiable (par exemple, nom, e-mail, données de localisation, identifiant en ligne).

**Traitement :** toute opération effectuée sur des données personnelles, notamment la collecte, la conservation, l’utilisation, la communication ou la suppression.

**Responsable du traitement :** l’entité qui détermine les finalités et les moyens du traitement des données personnelles (We-Fly).

**Sous-traitant :** une entité qui traite des données personnelles pour le compte du responsable du traitement (par exemple, l’hébergeur MongoDB).

**Personne concernée :** la personne physique à laquelle se rapportent les données personnelles (toi, l’utilisateur).

**Consentement :** toute manifestation de volonté, libre, spécifique, éclairée et univoque, par laquelle la personne accepte le traitement de ses données personnelles.

**Fichier IGC :** format de fichier de l’International Gliding Commission pour les enregistrements de vol GPS, contenant les points de trace et des métadonnées.

**OAuth :** norme ouverte de délégation d’accès, couramment utilisée pour l’authentification de connexion via des fournisseurs tiers (Google).

---

**Reconnaissance :** en utilisant We-Fly, tu reconnais avoir lu et compris la présente politique de confidentialité et l’accepter.

---

*La présente politique de confidentialité a été révisée et approuvée pour la dernière fois le 19 décembre 2025.*
