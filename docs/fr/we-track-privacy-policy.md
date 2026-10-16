---
title: Politique de confidentialité de We-Track
description: Ce que l'application d'instrument de vol We-Track fait de tes données, et ce qui ne quitte jamais ton téléphone
category: Account & Data
order: 5
---

**Dernière mise à jour :** 16 octobre 2026

## 1. Qui sommes-nous

We-Track est une application gratuite d'instrument de vol pour parapentistes, sur Android et iOS : carte mobile, vario, assistant de thermique, navigation de circuit, alertes d'espaces aériens et enregistrement des vols au format IGC.

**Responsable du traitement :** Upsky, Belgique.
**Contact :** [contact@we-fly.cloud](mailto:contact@we-fly.cloud) (indique « We-Track confidentialité » dans l'objet).

We-Track fonctionne seul, sans compte. Il peut aussi se connecter à **We-Fly** (we-fly.cloud), un service distinct de carnet de vol et d'analyse. Ce que We-Fly fait de tes données une fois reçues est décrit dans la [politique de confidentialité de We-Fly](https://we-fly.cloud/doc/privacy-policy).

## 2. En bref

- Tes vols, ta position et tes réglages restent **sur ton téléphone**.
- Ils n'en sortent que pour ce que tu as demandé : synchroniser avec We-Fly quand tu es connecté, charger les fonds de carte, charger un code de circuit, partager un fichier.
- Aucune mesure d'audience, aucune publicité, aucun pistage entre applications, aucun profilage. Nous ne vendons ni ne louons aucune donnée.
- We-Track n'a ni compte ni serveur à lui qui collecterait des données sur toi.
- La fréquence cardiaque n'est enregistrée dans tes fichiers de vol **que si tu l'actives**.

## 3. Données stockées sur ton téléphone

Tout ceci est conservé dans l'espace privé de l'application. Les autres applications ne peuvent pas le lire, et c'est **exclu des sauvegardes du téléphone** (iCloud, Google, transfert d'appareil). Revers de la médaille : les vols qui ne sont pas envoyés sur We-Fly sont perdus si tu perds ton téléphone ou désinstalles l'application.

| Donnée | Ce que c'est | Pourquoi |
|---|---|---|
| Position | Position GPS, vitesse, altitude pendant l'utilisation de l'application | Carte, navigation, vario, vent, détection et enregistrement du vol |
| Vols (fichiers IGC) | Ta trace GPS avec heures et altitudes, décollage et atterrissage, nom du pilote et voile (tirés de tes réglages ou de ton profil We-Fly), version de l'application, nom du système du téléphone (par ex. « android » ou « ios 18 ») et un identifiant d'enregistreur aléatoire | Ton carnet de vol, les fichiers que tu partages ou envoies |
| Données d'instrument | Données des instruments Bluetooth que tu connectes, par ex. un Vector Vario (pression, vitesse air, température, humidité, attitude, vent) | Affichées en vol et écrites dans tes fichiers IGC |
| Fréquence cardiaque | Battements par minute d'une ceinture cardio Bluetooth que tu connectes | Affichée en vol. Écrite dans les fichiers IGC **seulement avec ton accord** (section 6) |
| Réglages | Unités, écrans, voile et polaire, nom du pilote, préférences de son et d'affichage | Faire fonctionner l'application comme tu l'as réglée |
| Circuits, balises, cibles | Circuits que tu charges ou crées, collections de balises | Navigation |
| Espaces aériens et cartes | Fichiers d'espaces aériens importés ou téléchargés, zones de carte et de relief téléchargées pour le hors-ligne | Alertes et cartes sans réseau |
| Appareils connus | Nom et identifiant des instruments Bluetooth associés | S'y reconnecter |
| Mots de passe et jetons de connexion | Jetons de connexion We-Fly, mots de passe de comptes de compétition que tu choisis de mémoriser | Rester connecté |

Les mots de passe et jetons sont rangés dans le stockage sécurisé du téléphone (Trousseau iOS, Keystore Android). Ils ne sont jamais écrits dans les fichiers de réglages, les journaux ou les sauvegardes. Sur iOS, ils sont effacés au premier lancement après une réinstallation.

L'application ne tient aucun journal dans les versions publiées.

## 4. Autorisations demandées

Nous demandons chaque autorisation la première fois que tu utilises la fonction qui en a besoin.

- **Position, pendant l'utilisation de l'application.** Pour afficher ta position, naviguer et enregistrer ton vol. En vol, l'enregistrement continue écran éteint ; pendant ce temps, Android affiche une notification permanente et iOS l'indicateur de localisation bleu. Nous ne demandons jamais la position « Toujours ».
- **Bluetooth.** Pour connecter tes instruments (varios, ceintures cardio). Sur Android, la recherche Bluetooth est déclarée comme n'étant jamais utilisée pour te localiser.
- **Appareil photo.** Uniquement pour scanner les QR codes de circuit. Les images sont traitées sur le téléphone, jamais conservées ni envoyées.
- **Notifications** (Android). Pour la notification affichée pendant l'enregistrement d'un vol.
- **Mouvements et forme** (iOS). Pour lire le baromètre du téléphone (altitude et vitesse verticale).

## 5. Ce qui quitte ton téléphone, et vers qui

### 5.1 We-Fly (seulement si tu te connectes)

La connexion à We-Fly est facultative. We-Track te connecte via la page de We-Fly : il ne voit jamais ton mot de passe We-Fly et ne reçoit pas ton adresse e-mail. Une fois connecté :

- **Les vols que tu enregistres sont envoyés automatiquement** dans ton carnet We-Fly après l'atterrissage, avec tout ce que contient le fichier IGC (section 3). Tu peux aussi envoyer les vols que tu as importés.
- Tes vols, circuits, collections de balises et écrans We-Fly sont synchronisés dans les deux sens.
- We-Track lit ton nom de profil (pour le nom du pilote dans l'IGC) et ta liste d'amis (pour l'écran Amis).
- Quand tu télécharges des espaces aériens, We-Fly reçoit la zone choisie (un pays, ou une zone de 300 km autour de ta position) pour t'envoyer les espaces correspondants.
- We-Track n'envoie **pas** ta position en direct à We-Fly.

Tu peux te déconnecter à tout moment dans les Réglages. La déconnexion révoque l'accès côté We-Fly. Tu peux aussi choisir d'effacer de ton téléphone les données recopiées depuis We-Fly ; les vols enregistrés sur le téléphone ne sont jamais effacés par une déconnexion. Pour effacer les données stockées sur We-Fly, passe par ton profil We-Fly (voir la [politique de confidentialité de We-Fly](https://we-fly.cloud/doc/privacy-policy)).

### 5.2 Serveurs de cartes et de relief

Pour dessiner la carte, l'application télécharge des images de carte (« tuiles ») chez le fournisseur du fond de carte que tu choisis. Comme n'importe quel site web, ces serveurs voient ton adresse IP, le nom de l'application et la zone de carte que tu regardes, ce qui leur indique à peu près où tu te trouves. Nous ne leur transmettons aucun compte ni identifiant.

| Fournisseur | Utilisé pour |
|---|---|
| [Fondation OpenStreetMap](https://osmfoundation.org/wiki/Privacy_Policy) (tile.openstreetmap.org) | Fond de carte « thème We-Fly » |
| [OpenTopoMap](https://opentopomap.org/about) | Fond de carte topographique |
| [Esri](https://www.esri.com/en-us/privacy/overview) (ArcGIS Online) | Fond de carte satellite |
| [OpenFreeMap](https://openfreemap.org) | Fond de carte Relief et cartes hors-ligne |
| [Mapterhorn](https://mapterhorn.com) | Ombrage du relief et altitude du sol, en ligne et hors-ligne |

Les zones hors-ligne que tu télécharges viennent d'OpenFreeMap et de Mapterhorn ; une fois téléchargées, ces cartes fonctionnent sans contacter personne.

### 5.3 Codes de circuit XContest

Quand tu saisis un code de circuit XContest, ce code est envoyé à tools.xcontest.org pour récupérer le circuit. Aucune autre donnée n'est envoyée.

### 5.4 Lecture des QR codes sur Android (Google ML Kit)

Sur Android, les QR codes de circuit sont lus avec Google ML Kit. Les images sont traitées sur le téléphone. Google ML Kit peut envoyer à Google des données techniques sur le fonctionnement du lecteur (par exemple des statistiques de performance et d'utilisation), indépendamment de We-Track. Voir les [conditions et la confidentialité de Google ML Kit](https://developers.google.com/ml-kit/terms).

### 5.5 Fichiers que tu partages

Quand tu exportes ou partages un fichier IGC ou un circuit, l'application le confie au menu de partage du système ; c'est toi qui choisis où il va.

## 6. Fréquence cardiaque

La fréquence cardiaque est une donnée de santé, que le droit européen protège plus strictement.

- L'affichage de la fréquence cardiaque fonctionne dès qu'une ceinture est connectée et n'est jamais enregistré.
- La fréquence cardiaque n'est écrite dans tes fichiers de vol IGC que si tu actives **Enregistrer la fréquence cardiaque dans les fichiers de vol** et confirmes ton accord. C'est désactivé par défaut.
- Quand c'est activé, elle est conservée dans tes fichiers de vol sur le téléphone et, si tu es connecté à We-Fly, envoyée avec tes vols.
- Tu peux la désactiver à tout moment. Les vols enregistrés ensuite ne la contiennent plus ; les vols déjà enregistrés la gardent jusqu'à ce que tu les supprimes de ton carnet (et de We-Fly).

## 7. Bases légales (RGPD)

- **Fournir les fonctions que tu utilises** (art. 6, §1, b) : enregistrer tes vols, afficher les cartes, synchroniser avec We-Fly quand tu te connectes, charger des circuits.
- **Ton consentement** (art. 6, §1, a et, pour la fréquence cardiaque, art. 9, §2, a) : la fréquence cardiaque dans les fichiers de vol. Tu peux le retirer à tout moment, sans effet sur ce qui a été fait avant.
- **Intérêt légitime** (art. 6, §1, f) : les données techniques dont les serveurs de cartes ont besoin pour envoyer les tuiles.

## 8. Durée de conservation

- **Sur ton téléphone :** jusqu'à ce que tu les supprimes dans l'application ou désinstalles celle-ci. Rien n'est gardé dans les sauvegardes.
- **Sur We-Fly :** comme décrit dans la [politique de confidentialité de We-Fly](https://we-fly.cloud/doc/privacy-policy).
- **Serveurs de cartes, XContest, Google :** selon leurs propres politiques (section 5).

## 9. Sécurité

- Stockage privé de l'application uniquement, aucun stockage partagé.
- Connexions chiffrées (HTTPS) pour chaque requête réseau.
- Mots de passe et jetons dans le stockage sécurisé du téléphone, jamais dans des fichiers en clair ni dans des journaux.
- La connexion à We-Fly utilise OAuth avec PKCE : l'application ne manipule jamais ton mot de passe We-Fly.

## 10. Transferts hors de l'Union européenne

Certains fournisseurs cités à la section 5 peuvent traiter des données hors de l'Union européenne (par exemple Esri et Google aux États-Unis). Ils sont responsables des garanties qu'ils appliquent ; consulte leurs politiques.

## 11. Tes droits

Tu as le droit d'accéder à tes données personnelles, de les corriger, de les effacer et d'en recevoir une copie, de t'opposer à leur traitement ou de le limiter, et de retirer ton consentement à tout moment.

La plupart de tes données ne nous parviennent jamais : tu peux les consulter, les exporter et les effacer directement dans l'application. Pour les données sur We-Fly, passe par ton profil We-Fly ou contacte We-Fly. Pour tout le reste, écris à [contact@we-fly.cloud](mailto:contact@we-fly.cloud). Nous répondons dans un délai d'un mois.

Tu peux aussi introduire une réclamation auprès de l'Autorité de protection des données belge ([www.dataprotectionauthority.be](https://www.dataprotectionauthority.be)) ou de l'autorité du pays où tu vis.

## 12. Enfants

We-Track ne s'adresse pas aux enfants de moins de 13 ans. La synchronisation avec We-Fly suppose de respecter l'âge minimum de We-Fly (voir la [politique de confidentialité de We-Fly](https://we-fly.cloud/doc/privacy-policy)). Si tu penses qu'un enfant de moins de 13 ans nous a transmis des données personnelles, contacte-nous et nous les effacerons.

## 13. Modifications

Si cette politique change, nous mettons à jour la date en haut de page et, pour les changements importants, nous te prévenons dans l'application avant qu'ils ne s'appliquent.

## 14. Contact

**Responsable du traitement :** Upsky, Belgique
**E-mail :** [contact@we-fly.cloud](mailto:contact@we-fly.cloud), objet « We-Track confidentialité »
