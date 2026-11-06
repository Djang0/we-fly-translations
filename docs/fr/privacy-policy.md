---
title: Politique de confidentialité
description: Comment We-Fly collecte, utilise et protège tes données personnelles dans le cadre du RGPD
category: Account & Data
order: 3
---

**Dernière mise à jour :** 4 novembre 2026

## 1. Introduction

Bienvenue sur We-Fly. Nous nous engageons à protéger tes données personnelles et à respecter ta vie privée, conformément au Règlement général sur la protection des données (RGPD) (UE) 2016/679 et aux lois applicables en matière de protection des données.

Cette politique de confidentialité explique comment nous collectons, utilisons, conservons et protégeons tes informations personnelles quand tu utilises notre plateforme de suivi et d’analyse de vols en parapente.

### 1.1 Responsable du traitement

We-Fly est le responsable du traitement de tes données personnelles. Pour toute question sur cette politique de confidentialité ou sur tes droits, contacte-nous via les coordonnées indiquées à la section 15.

### 1.2 Champ d’application

Cette politique s’applique à tous les utilisateurs de la plateforme We-Fly, notamment :
- les utilisateurs inscrits disposant d’un compte
- les visiteurs de nos pages publiques
- les utilisateurs de nos liens de partage de vol

## 2. Les données que nous collectons

### 2.1 Informations de compte (via Google OAuth)

Quand tu crées un compte avec « Se connecter avec Google », nous collectons :

- **Adresse e-mail** - pour identifier ton compte et communiquer avec toi
- **Nom complet** - pour l’affichage de ton profil et l’attribution de tes vols
- **URL de la photo de profil** - issue de ton compte Google, pour l’affichage de ton profil
- **Statut de vérification de l’e-mail** - fourni par Google
- **Identifiant utilisateur Google** - identifiant unique fourni par Google OAuth

Nous ne collectons et ne stockons **aucun** mot de passe. Toute l’authentification est gérée de façon sécurisée par Google.

### 2.2 Données de vol (issues des fichiers IGC importés)

Quand tu importes tes vols en parapente, nous collectons et traitons :

**Métadonnées du fichier :**
- Nom du pilote (extrait du fichier IGC ou de ton nom de compte)
- Modèle et type de voile
- Informations sur l’appareil GPS (fabricant, numéro de série, firmware)
- Date et heure du vol
- Nom de fichier d’origine

**Données de trace GPS :**
- Trace GPS complète (latitude, longitude, altitude, horodatages)
- Lieu et heure de décollage
- Lieu et heure d’atterrissage
- Durée du vol
- Altitudes maximale et minimale
- Distance totale parcourue

**Analyses de vol calculées :**
- Analyse de l’activité thermique (taux de montée, durée, gain d’altitude)
- Estimations de la vitesse et de la direction du vent
- Indicateurs de performance du vol
- Données de score XContest (distance, points, type de vol)
- Données de validation FAI (si tu demandes une validation)
- Balises et segments du parcours

**Identifiants techniques :**
- Empreinte MD5 de la trace GPS (pour détecter les doublons)
- Identifiants des enregistrements en base de données
- Chemins de stockage des fichiers (si le stockage local est activé)

### 2.3 Données des sites de décollage

Nous tenons une base de données des décollages de parapente, qui contient :
- Le nom du site et ses coordonnées géographiques
- L’altitude
- La direction du vent dominant
- Le pays, la ville et le code postal (obtenus via le service de géocodage inverse Nominatim d’OpenStreetMap)

Ces données sont agrégées à partir des vols importés par les utilisateurs et de bases de données géographiques publiques. Les métadonnées de lieu sont enrichies avec des données OpenStreetMap (© contributeurs OpenStreetMap).

### 2.4 Données de profil et de préférences

- Rôle de l’utilisateur (utilisateur ou administrateur)
- Visibilité du profil (public ou privé)
- Préférences d’affichage (colonnes du tableau, tri, filtres)
- Thème choisi
- Préférences e-mail (si tu reçois ou non les conseils de prise en main)
- Dates de création et de modification du compte

### 2.5 Données statistiques

Nous calculons des statistiques globales à partir de tes vols :
- Nombre total de vols et d’heures
- Distance totale parcourue
- Nombre de décollages et de pays différents
- Durée moyenne des vols
- Répartition par type de vol

### 2.6 Liens de partage de vol

Quand tu génères un lien de partage pour un vol, nous créons :
- Un identifiant cryptographiquement sûr de 43 caractères
- Il permet d’accéder publiquement à un seul vol sans exposer tout ton profil

### 2.7 Données de connexion

Quand tu utilises We-Fly en étant connecté, nous gardons les **5 dernières adresses IP différentes** depuis lesquelles tu t’es connecté. Pour chacune, nous enregistrons :
- L’adresse IP
- La date à laquelle nous l’avons vue pour la première et la dernière fois
- Ton type d’appareil, ton navigateur et ton système d’exploitation
- Une localisation approximative (ville, région et pays), calculée sur notre propre serveur à partir d’une base GeoIP (DB-IP). Ton adresse n’est jamais envoyée à un service extérieur pour la localiser.

Seuls les administrateurs de We-Fly peuvent voir ces informations, pour repérer le partage de compte, les connexions suspectes et les abus. Elles ne sont jamais montrées aux autres pilotes ni utilisées à d’autres fins. Quand tu te connectes depuis une sixième adresse, la plus ancienne est supprimée. Ces données figurent dans ton archive **Exporter mes données** et sont supprimées avec ton compte.

## 3. Base légale du traitement

Conformément à l’article 6 du RGPD, nous traitons tes données personnelles sur les bases suivantes :

### 3.1 Consentement (article 6(1)(a))
- Authentification Google OAuth (tu donnes ton consentement explicite en cliquant sur « Se connecter avec Google »)
- Réglages de visibilité du profil (tu choisis de rendre ton profil public)
- Intégrations d’API tierces (validation FAI, géocodage)

### 3.2 Exécution du contrat (article 6(1)(b))
- Traitement des vols que tu importes
- Analyse et statistiques de tes vols
- Gestion de ton compte et de tes préférences
- Fourniture des fonctionnalités principales de notre service

### 3.3 Intérêt légitime (article 6(1)(f))
- Éviter les vols importés en double
- Détecter et prévenir la fraude ou les abus
- Améliorer notre service et ton expérience
- Garantir la sécurité et l’intégrité du système
- Conserver tes 5 dernières adresses de connexion et leur localisation approximative pour détecter les connexions suspectes et les abus (voir 2.7)
- T’envoyer de temps en temps des conseils pour bien démarrer avec le service auquel tu t’es inscrit (tu peux te désinscrire à tout moment, voir 4.4)

Tu peux retirer ton consentement à tout moment en supprimant ton compte ou en modifiant tes réglages de confidentialité.

## 4. Comment nous utilisons tes données

Nous utilisons tes données personnelles pour :

### 4.1 Fournir les services principaux
- T’authentifier et t’identifier quand tu te connectes
- Lire, analyser et stocker tes vols
- Générer les statistiques et indicateurs de performance de tes vols
- Afficher ton carnet de vol et ton tableau de bord
- Associer automatiquement tes vols aux sites de décollage

### 4.2 Permettre les fonctionnalités communautaires
- Afficher les vols publics (uniquement si ton profil est public)
- Faire apparaître les profils de pilotes dans les classements de la communauté (avec ton consentement)
- Identifier les décollages les plus fréquentés
- Permettre aux autres pilotes de découvrir des parcours de vol

### 4.3 Améliorer notre plateforme
- Agréger des statistiques anonymes sur l’utilisation de la plateforme
- Identifier et corriger les problèmes techniques
- Améliorer les algorithmes d’analyse de vol
- Optimiser l’interface et l’expérience utilisateur

### 4.4 Communiquer avec toi
- T’envoyer des notifications liées au service
- T’envoyer de temps en temps des conseils de prise en main, par exemple un seul rappel si ton carnet de vol est encore vide une semaine après ton inscription. Tu peux les désactiver à tout moment dans **Profil → E-mails**, ou via le lien de désinscription en bas de chaque e-mail de conseils
- Répondre aux demandes d’assistance
- Te prévenir des changements importants de notre service ou de cette politique

### 4.5 Assurer la sécurité
- Empêcher les accès non autorisés aux comptes
- Détecter et prévenir les activités frauduleuses
- Vérifier l’intégrité des données
- Tenir des journaux d’audit des événements de sécurité

Nous n’utilisons **pas** tes données pour :
- De la publicité ou du marketing pour des tiers
- Vendre ou louer tes informations personnelles
- Des décisions automatisées produisant des effets juridiques
- Du profilage à des fins commerciales

## 5. Services tiers et transferts de données

Nous partageons des données limitées avec les services tiers suivants :

### 5.1 Google OAuth
**Finalité :** authentification et vérification de l’identité
**Données partagées :** e-mail, nom, photo de profil (via le protocole OAuth)
**Localisation :** États-Unis (infrastructure Google)
**Politique de confidentialité :** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Base légale :** consentement (autorisation OAuth)

### 5.2 Nominatim (OpenStreetMap)
**Finalité :** géocodage inverse pour obtenir le nom des lieux à partir des coordonnées
**Données partagées :** uniquement la latitude et la longitude (aucun identifiant personnel)
**Fréquence :** déclenché par un administrateur, jamais automatique
**Politique de confidentialité :** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Base légale :** intérêt légitime (enrichir les informations des sites)
**Attribution :** données de lieu © contributeurs OpenStreetMap ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Finalité :** obtenir l’altitude des sites de décollage
**Données partagées :** uniquement la latitude et la longitude
**Fréquence :** déclenché par un administrateur
**Politique de confidentialité :** service public, sans inscription
**Base légale :** intérêt légitime (données de site exactes)

### 5.4 Service de validation de vol FAI CIVL
**Finalité :** valider les vols selon les normes FAI
**Données partagées :** contenu complet du fichier IGC (uniquement quand tu demandes explicitement une validation)
**Point d’accès :** vali.fai-civl.org/api/vali/json
**Politique de confidentialité :** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Base légale :** consentement (à ton initiative)

### 5.5 Fournisseurs de tuiles cartographiques
**Finalité :** afficher des cartes interactives pour visualiser les vols
**Services utilisés :**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Données partagées :** uniquement les requêtes de tuiles (aucune donnée personnelle)
**Base légale :** intérêt légitime (fonctionnement essentiel du service)

### 5.6 Transferts internationaux de données

Certains de nos prestataires tiers sont situés hors de l’Espace économique européen (EEE), notamment aux États-Unis. Quand nous transférons des données à l’international :

- Nous nous appuyons sur les **décisions d’adéquation** de la Commission européenne (quand elles existent)
- Nous mettons en place des **clauses contractuelles types (CCT)** approuvées par la Commission européenne
- Nous veillons à ce que les prestataires respectent des **normes de protection des données équivalentes au RGPD**

## 6. Cookies et technologies de suivi

### 6.1 Cookies essentiels (sans consentement requis)

**Cookies d’authentification :**
- **Finalité :** garder ta session ouverte
- **Type :** jetons JWT chiffrés, sécurisés, HTTP-only
- **Durée :** 30 jours après ta dernière visite, et jamais plus de 90 jours après ta connexion. Te déconnecter le supprime ; réinitialiser ton mot de passe ou supprimer ton compte y met fin sur tous tes appareils.
- **Fournisseur :** NextAuth.js
- **Désactivable :** non (indispensable au fonctionnement du service)

**Cookies de sécurité de connexion (autorouter) :**
- **Noms :** `ar_oauth_state`, `ar_oauth_return`
- **Finalité :** sécuriser la connexion à autorouter quand tu le relies pour les NOTAM, et te ramener à la page d’où tu venais
- **Type :** sécurisés, HTTP-only
- **Durée :** 10 minutes, supprimés dès que la connexion est établie
- **Désactivable :** non (déposés uniquement si tu choisis de connecter autorouter)

### 6.2 Cookies fonctionnels (intérêt légitime)

**Cookie d’état de la barre latérale :**
- **Nom :** `sidebar_state`
- **Finalité :** mémoriser si tu préfères la barre latérale ouverte ou repliée
- **Durée :** 7 jours
- **Données stockées :** "true" ou "false"

**Cookie de langue :**
- **Nom :** `NEXT_LOCALE`
- **Finalité :** mémoriser la langue d’interface que tu as choisie (anglais, français, allemand, néerlandais, italien ou espagnol)
- **Durée :** 1 an
- **Données stockées :** un code de langue, par exemple "fr"

**Cookie de langue affichée :**
- **Nom :** `wf-rl`
- **Finalité :** noter la langue de la dernière page affichée, pour que l’appli puisse se rafraîchir une fois si tu changes de langue en cours de navigation
- **Durée :** jusqu’à la fermeture de ton navigateur
- **Données stockées :** un code de langue, par exemple "fr"

**Cookie d’appareil connu :**
- **Nom :** `wf-known-device`
- **Finalité :** retenir que quelqu’un s’est déjà connecté sur ce navigateur, pour que la page d’accueil propose « Se connecter » plutôt que « Créer un compte »
- **Durée :** environ 13 mois
- **Données stockées :** uniquement "1", jamais ton e-mail ni ton identifiant de compte

**Cookie d’indication de clé d’accès :**
- **Nom :** `wf-passkey-hint`
- **Finalité :** retenir que ce navigateur dispose d’une clé d’accès pour We-Fly, pour que la page de connexion la propose en premier
- **Durée :** environ 13 mois
- **Données stockées :** uniquement "1"

### 6.3 Stockage local

Nous utilisons le stockage local du navigateur pour :

**Réglages d’affichage des vols :**
- **Clé :** `we-fly-flights-display-settings`
- **Finalité :** garder en cache la visibilité des colonnes et le tri pour accélérer le chargement des pages
- **Données :** objet JSON contenant tes préférences d’interface
- **Synchronisation :** avec le serveur, pour y accéder depuis tous tes appareils

**Préférences de filtres :**
- **Finalité :** conserver tes recherches et filtres de vols
- **Données :** critères de recherche, périodes, filtres de lieu
- **Portée :** côté navigateur uniquement

Tu peux vider le stockage local à tout moment depuis les réglages de ton navigateur. Tes préférences d’interface reviendront alors à leurs valeurs par défaut.

### 6.4 Statistiques d’audience et suivi

Actuellement, nous n’utilisons **pas** :
- Google Analytics ou d’autres outils de mesure d’audience similaires
- De traceurs publicitaires tiers
- De pixels de réseaux sociaux
- De mécanismes de suivi entre sites

## 7. Stockage et sécurité des données

### 7.1 Où nous stockons tes données

**Base de données :** MongoDB
- Comptes utilisateurs, vols, informations sur les sites
- Base de données professionnelle avec contrôles d’accès
- Sauvegardes automatiques régulières
- Connexions chiffrées (TLS/SSL)

**Système de fichiers (optionnel) :**
- Fichiers IGC d’origine et données JSON analysées
- Stockés dans des répertoires propres à chaque utilisateur
- Protection contre la traversée de répertoires
- Accès réservé aux requêtes authentifiées

**Localisation géographique :** serveurs situés dans l’UE 

### 7.2 Mesures de sécurité

Nous appliquons les bonnes pratiques de sécurité du secteur :

**Protections techniques :**
- Chiffrement HTTPS de toutes les données en transit (TLS 1.2+)
- Cookies sécurisés HTTP-only avec protection SameSite
- Authentification par jetons JWT avec expiration
- Prévention des injections MongoDB et assainissement des entrées
- Échappement des expressions régulières pour éviter les attaques ReDoS
- Prévention de la traversée de répertoires pour les opérations sur fichiers
- Validation des ObjectId pour toutes les requêtes en base

**Contrôles d’accès :**
- Authentification par session via NextAuth
- Contrôle d’accès par rôle (utilisateur ou administrateur)
- Filtrage des données par utilisateur (chacun n’accède qu’à ses propres vols)
- Routes protégées nécessitant une authentification

**Validation des données :**
- Taille de fichier limitée (3 Mo maximum par import IGC)
- Vérification de l’extension (.igc uniquement)
- Validation des coordonnées (longitude de -180 à 180, latitude de -90 à 90)
- Détection des vols en double via empreinte MD5
- Lecture des dates avec validation du format

**Surveillance et journalisation :**
- Journalisation structurée des événements de sécurité
- Traçabilité des actions des administrateurs
- Journalisation des tentatives d’accès non autorisé
- Journalisation des erreurs avec leur contexte pour l’analyse

### 7.3 Procédure en cas de violation de données

En cas de violation touchant tes données personnelles :
- Nous préviendrons l’autorité de contrôle compétente dans les 72 heures (article 33 du RGPD)
- Nous informerons les utilisateurs concernés dans les meilleurs délais (article 34 du RGPD)
- Nous décrirons la nature de la violation et les mesures prises pour en limiter les effets
- Nous consignerons toutes les violations dans nos registres internes

## 8. Conservation des données

### 8.1 Durées de conservation

**Données de compte :**
- Conservées pendant toute la durée de vie de ton compte
- Supprimées à la fermeture du compte (voir section 9.3)

**Vols :**
- Conservés sans limite de durée tant que ton compte est actif
- Tu peux supprimer chaque vol à tout moment
- Tous les vols sont supprimés à la fermeture du compte

**Jetons de session :**
- Les jetons JWT expirent 30 jours après ta dernière visite, et jamais plus de 90 jours après ta connexion
- Les jetons expirés ne permettent plus de s’authentifier

**Cookies :**
- `sidebar_state` : 7 jours après la dernière visite
- Cookies d’authentification : 30 jours après la dernière visite, 90 jours maximum (voir section 6.1)

**Stockage local :**
- Conservé jusqu’à ce que tu vides les données de ton navigateur ou supprimes ton compte
- Aucune conservation côté serveur

**Données de connexion :**
- Seules tes 5 dernières adresses IP différentes et leur localisation approximative sont gardées ; chaque nouvelle adresse remplace la plus ancienne
- Supprimées avec ton compte

**Fichiers journaux :**
- Journaux de sécurité conservés 12 mois (intérêt légitime lié à la sécurité)
- Supprimés automatiquement à l’issue de cette période

### 8.2 Comptes inactifs

**Règle d’inactivité :** les comptes sans aucune connexion pendant 3 années consécutives sont supprimés automatiquement, conformément au principe de limitation de la conservation du RGPD (article 5(1)(e)).

**Système d’avertissement :**
- Après **2,5 ans** d’inactivité, tu reçois un e-mail t’avertissant que ton compte sera supprimé dans 6 mois
- Tu peux éviter la suppression en te connectant simplement à tout moment avant le seuil des 3 ans
- Si tu te connectes après avoir reçu l’avertissement, le compteur d’inactivité est remis à zéro et l’avertissement est levé
- Une fois le seuil de **3 ans** atteint (et si tu as été averti), ton compte est supprimé automatiquement

**Ce qui se passe à la suppression d’un compte inactif :**
- Toutes les informations du compte sont définitivement supprimées
- Tous les vols et traces GPS sont définitivement supprimés
- Tous les enregistrements de consentement sont définitivement supprimés
- Un enregistrement d’audit de suppression pseudonymisé est créé (voir section 8.3)

**Comment éviter la suppression :** connecte-toi simplement à ton compte, à n’importe quel moment, pour remettre le compteur d’inactivité à zéro.

### 8.3 Traçabilité des suppressions

**Finalité :** quand tu supprimes ton compte (toi-même ou pour cause d’inactivité), nous créons un enregistrement d’audit pseudonymisé pour démontrer notre conformité au RGPD et prévenir la fraude.

**Ce qui est conservé :**
- Identifiant utilisateur anonymisé (ObjectId MongoDB)
- Date et heure de la suppression
- Motif de la suppression (à ton initiative ou pour inactivité)
- Date de dernière connexion (si la suppression est due à l’inactivité)
- Date de l’avertissement d’inactivité (le cas échéant)

**Ce qui n’est PAS conservé :**
- Adresse e-mail
- Nom d’utilisateur
- Toute information permettant de t’identifier personnellement

**Durée de conservation :** 7 ans à compter de la date de suppression (exigée par la réglementation européenne sur la tenue des registres)

**Suppression automatique :** les enregistrements d’audit de plus de 7 ans sont supprimés automatiquement chaque mois.

**Base légale :** obligation légale (lois européennes en matière fiscale et de tenue des registres)

### 8.4 Conservation des sauvegardes

**Politique de sauvegarde :** nous conservons des sauvegardes glissantes de la base de données sur 7 jours, pour pouvoir restaurer en cas d’incident.

**Important :** quand tu supprimes ton compte ou des vols, les données supprimées restent dans les sauvegardes jusqu’à 7 jours. Passé ce délai, elles sont définitivement irrécupérables.

**Demander un effacement immédiat :** si tu as besoin d’un effacement complet et immédiat (par exemple pour une obligation légale ou une urgence), contacte-nous et nous pourrons purger manuellement les données des sauvegardes récentes. Cette procédure n’est utilisée qu’à titre exceptionnel.

### 8.5 Calendrier complet de conservation

Pour une vue détaillée de toutes les durées de conservation, consulte notre [politique de conservation des données](/doc/data-retention-policy).

## 9. Tes droits sur tes données

Le RGPD te donne les droits suivants sur tes données personnelles :

### 9.1 Droit d’accès (article 15)

Tu as le droit de demander :
- La confirmation que nous traitons ou non tes données personnelles
- Une copie de tes données personnelles
- Des informations sur la manière dont nous les utilisons

**Comment l’exercer :** clique sur **Exporter mes données** dans le panneau **Compte** de ton **Profil**. Tu obtiens un fichier ZIP contenant tous tes fichiers IGC classés par date, ainsi qu’un fichier JSON structuré avec ton profil, tes préférences, tes vols, tes comptes de connexion liés et tes enregistrements de consentement.

### 9.2 Droit de rectification (article 16)

Tu as le droit de corriger des données personnelles inexactes.

**Comment l’exercer :** modifie les informations de ton profil dans les réglages du compte. L’exactitude des données de vol dépend des fichiers IGC que tu importes (importe des fichiers corrigés si besoin).

### 9.3 Droit à l’effacement / « droit à l’oubli » (article 17)

Tu as le droit de demander la suppression de tes données personnelles quand :
- Elles ne sont plus nécessaires à la finalité d’origine
- Tu retires ton consentement (pour les traitements fondés sur le consentement)
- Tu t’opposes au traitement (et aucun motif légitime impérieux ne prévaut)
- Elles ont fait l’objet d’un traitement illicite

**Comment l’exercer :** clique sur **Supprimer le compte** dans le panneau **Compte** de ton **Profil**, saisis ton adresse e-mail pour confirmer, puis clique sur **Supprimer définitivement mon compte**. Ton compte et toutes les données associées sont supprimés immédiatement.

**Ce qui est supprimé :**
- Toutes les informations du compte (e-mail, nom, profil)
- Tous les vols et traces GPS
- Tous les enregistrements de consentement
- Toutes les données de session

**Ce qui est conservé :**
- Un enregistrement d’audit de suppression pseudonymisé (7 ans, sans aucune information permettant de t’identifier)
- Les données présentes dans les sauvegardes (jusqu’à 30 jours, puis définitivement supprimées)

**Exceptions :** nous pouvons conserver certaines données si la loi l’exige ou pour des motifs juridiques légitimes (voir la section 8.3 pour le détail de la traçabilité des suppressions).

### 9.4 Droit à la limitation du traitement (article 18)

Tu as le droit de nous demander de limiter le traitement de tes données quand :
- Tu contestes leur exactitude
- Le traitement est illicite mais tu t’opposes à leur suppression
- Nous n’en avons plus besoin mais elles te sont nécessaires pour une action en justice
- Tu t’es opposé au traitement (en attendant la vérification des motifs légitimes)

**Comment l’exercer :** contacte-nous en précisant ta demande de limitation.

### 9.5 Droit à la portabilité (article 20)

Tu as le droit de recevoir tes données personnelles dans un format structuré, couramment utilisé et lisible par machine.

**Comment l’exercer :**
- **Données de vol :** utilise **Exporter mes données** dans ton **Profil** pour télécharger une archive ZIP de tous tes fichiers IGC
- **Données de compte :** la même archive contient un fichier JSON (`data-export.json`) avec les informations de ton compte, tes préférences et tes vols

### 9.6 Droit d’opposition (article 21)

Tu as le droit de t’opposer aux traitements fondés sur l’intérêt légitime ou à des fins de prospection.

**Comment l’exercer :**
- **Fonctionnalités communautaires :** désactive **Profil public** dans **Confidentialité** pour ne plus apparaître dans les fonctionnalités communautaires
- **Autres traitements :** contacte-nous en précisant ton opposition

### 9.7 Droit de retirer ton consentement (article 7(3))

Quand un traitement repose sur ton consentement, tu peux le retirer à tout moment.

**Comment l’exercer :**
- **Authentification OAuth :** révoque l’accès dans les réglages de sécurité de ton compte Google
- **Profil public :** désactive **Profil public** dans **Confidentialité** sur ton **Profil**
- **Compte :** supprime ton compte pour retirer l’ensemble de tes consentements

**Remarque :** le retrait du consentement ne remet pas en cause la licéité des traitements effectués avant ce retrait.

### 9.8 Droit d’introduire une réclamation (article 77)

Tu as le droit d’introduire une réclamation auprès d’une autorité de contrôle, notamment :
- Dans l’État membre de l’UE où tu résides
- Sur ton lieu de travail
- Là où la violation présumée a eu lieu

**Autorités de contrôle de l’UE :** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

N’hésite pas à nous contacter d’abord, pour que nous puissions répondre directement à tes préoccupations.

### 9.9 Exercer tes droits

Pour exercer l’un de ces droits :
1. Contacte-nous via les coordonnées de la section 15
2. Fournis suffisamment d’informations pour vérifier ton identité (nous pouvons te demander de confirmer ton adresse e-mail)
3. Précise le ou les droits que tu souhaites exercer
4. Nous te répondrons sous **un mois** (prolongeable de deux mois pour les demandes complexes)

**Gratuit :** l’exercice de tes droits est gratuit, sauf demande manifestement infondée ou excessive.

## 10. Réglages de confidentialité et contrôle

### 10.1 Visibilité du profil

C’est toi qui décides si ton profil et tes vols sont visibles des autres utilisateurs :

**Profil public (par défaut) :**
- Tes vols apparaissent dans les fonctionnalités communautaires
- Ton profil est visible des autres utilisateurs
- Tu apparais dans les classements et statistiques des pilotes

**Profil privé :**
- Tes vols ne sont visibles que par toi
- Tu n’apparais pas dans les classements de la communauté
- Tu peux toujours générer des liens de partage secrets pour certains vols

**Comment le modifier :** ouvre ton **Profil**, clique sur **Confidentialité** dans le panneau **Compte** et active ou désactive **Profil public**. Le changement s’applique immédiatement.

### 10.2 Préférences d’affichage

Tu peux personnaliser :
- La visibilité des colonnes du tableau des vols
- Le tri
- Les filtres et la recherche
- Le thème de l’interface

Ces préférences sont synchronisées entre tes appareils.

### 10.3 Export des données

**Export en libre-service :**
- Ouvre ton **Profil** et clique sur **Exporter mes données** dans le panneau **Compte**
- Tu obtiens un fichier ZIP avec tous tes fichiers IGC, classés par date (arborescence AAAA/MM/JJ)
- Il contient un fichier JSON structuré avec ton profil, tes préférences, tes vols, tes comptes de connexion liés et tes enregistrements de consentement
- Il inclut la liste des vols sans fichier stocké

## 11. Protection des mineurs

We-Fly ne s’adresse pas aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles d’enfants de moins de 16 ans.

Si tu es parent ou tuteur et que tu penses que ton enfant nous a fourni des données personnelles :
- Contacte-nous immédiatement via les coordonnées de la section 15
- Nous supprimerons ces informations de nos systèmes sous 30 jours

## 12. Décisions automatisées et profilage

Nous ne pratiquons **pas** :
- De décisions automatisées produisant des effets juridiques ou des effets significatifs similaires (article 22 du RGPD)
- De profilage à des fins marketing ou commerciales
- De décisions algorithmiques qui conditionnent ton accès aux services

**Analyse de vol :** nous utilisons des algorithmes pour analyser tes vols (détection des thermiques, score, analyse du vent), mais ce sont des calculs techniques qui enrichissent ton expérience et ne constituent pas un profilage au sens du RGPD.

## 13. Modifications de cette politique de confidentialité

Nous pouvons mettre à jour cette politique de confidentialité de temps en temps pour tenir compte :
- De changements dans nos pratiques en matière de données
- De nouvelles fonctionnalités ou de nouveaux services
- D’exigences légales ou réglementaires
- Des retours des utilisateurs et des bonnes pratiques

**Information sur les modifications :**
- Nous mettrons à jour la date de « Dernière mise à jour » en haut de cette politique
- Pour les changements importants, nous te préviendrons par e-mail ou par un avis bien visible sur la plateforme
- Continuer à utiliser notre service après ces changements vaut acceptation de la nouvelle politique

**Historique des versions :** nous conservons les versions précédentes de cette politique, par souci de transparence et de conformité.

## 14. Cadre juridique et conformité

Cette politique de confidentialité est régie par :
- Le **RGPD** (UE) 2016/679 - Règlement général sur la protection des données
- La **directive ePrivacy** 2002/58/CE (telle que modifiée)
- Les lois nationales applicables en matière de protection des données dans les États membres de l’UE

**Principes de protection des données (article 5 du RGPD) :**
- **Licéité, loyauté, transparence :** nous traitons les données de façon licite, loyale et transparente
- **Limitation des finalités :** données collectées pour des finalités déterminées, explicites et légitimes
- **Minimisation des données :** nous ne collectons que les données adéquates et nécessaires à nos finalités
- **Exactitude :** nous tenons les données personnelles exactes et à jour
- **Limitation de la conservation :** données conservées uniquement le temps nécessaire
- **Intégrité et confidentialité :** nous assurons une sécurité appropriée des données personnelles
- **Responsabilité :** nous démontrons notre respect de ces principes

## 15. Nous contacter

Pour toute question sur cette politique de confidentialité ou pour exercer tes droits, contacte-nous :

**Responsable du traitement :** We-Fly
**E-mail :** contact@we-fly.cloud
**Délai de réponse :** nous visons une réponse à toutes les demandes sous 5 jours ouvrés

**Pour les demandes liées au RGPD :**
- Indique « Demande RGPD » dans l’objet
- Fournis suffisamment d’informations pour vérifier ton identité
- Précise la nature de ta demande (accès, suppression, portabilité, etc.)
- Nous te répondrons sous un mois, comme l’exige l’article 12(3) du RGPD

---

## 16. Définitions et interprétation

**Données personnelles :** toute information se rapportant à une personne physique identifiée ou identifiable (par exemple nom, e-mail, données de localisation, identifiant en ligne).

**Traitement :** toute opération effectuée sur des données personnelles, notamment la collecte, la conservation, l’utilisation, la communication ou la suppression.

**Responsable du traitement :** l’entité qui détermine les finalités et les moyens du traitement des données personnelles (We-Fly).

**Sous-traitant :** une entité qui traite des données personnelles pour le compte du responsable du traitement (par exemple l’hébergeur MongoDB).

**Personne concernée :** la personne à qui se rapportent les données personnelles (toi, l’utilisateur).

**Consentement :** manifestation de volonté libre, spécifique, éclairée et univoque par laquelle tu acceptes le traitement de tes données personnelles.

**Fichier IGC :** format de fichier de l’International Gliding Commission pour les enregistrements de vol GPS, contenant les points de trace et des métadonnées.

**OAuth :** standard ouvert de délégation d’accès, couramment utilisé pour se connecter via un fournisseur tiers (Google).

---

**Acceptation :** en utilisant We-Fly, tu reconnais avoir lu et compris cette politique de confidentialité et l’accepter.

---

*Cette politique de confidentialité a été revue et approuvée pour la dernière fois le 19 décembre 2025.*
