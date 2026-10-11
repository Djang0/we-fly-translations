---
title: Synchroniser automatiquement ton instrument
description: Envoie tes vols depuis ton Air³, ton vario ou ton téléphone directement dans We-Fly par WebDAV, sans câble et sans import manuel
category: Your Flights
order: 4
---

## Pose-toi, connecte-toi au Wi-Fi, c’est fait

Imagine : tu te décroches à l’atterro, encore sur un nuage après cette dernière montée en restitution, et le temps de plier ta voile, ta trace est déjà dans We-Fly : scorée, cartographiée, thermiques décortiqués. Pas de câble. Pas de « je l’importe ce soir » qui devient la semaine prochaine. Pas de chasse aux dossiers sur ton téléphone.

C’est la **Synchro instrument et cloud (WebDAV)**. Tu la configures une fois, et ton appareil confie discrètement chaque nouveau vol à ton carnet de vol dès que tu retrouves le Wi-Fi. C’est la doc que tu lis une fois, et ensuite tu ne touches plus jamais tes vols à la main.

La vedette, c’est l’**Air³** (le vario Android qui fait tourner XCTrack), mais la même astuce marche depuis n’importe quel téléphone Android ou n’importe quel instrument compatible WebDAV. On branche tout ça.

---

## D’abord : récupère ton mot de passe d’appareil (une fois, dans We-Fly)

Tout repose sur un seul **mot de passe d’appareil**, que tu génères dans We-Fly. Vois-le comme un double de clé taillé pour un seul instrument. Si tu perds l’appareil ou que tu le vends, tu révoques cette clé-là et rien d’autre n’est touché.

1. Va dans **Profil → Services connectés** et trouve la carte **« Synchro instrument et cloud (WebDAV) »**.
2. Tape un nom d’appareil, quelque chose que tu reconnaîtras plus tard, comme `Air³` ou `Vieux vario de secours`.
3. Touche **Générer**. Un **mot de passe d’appareil** s’affiche.
4. **Copie-le tout de suite.** Mieux vaut le copier immédiatement, mais si tu cliques ailleurs, il n’est pas perdu : chaque mot de passe reste **copiable depuis sa ligne d’appareil** (la petite icône de copie à côté) tant que tu gardes cet **onglet du navigateur** ouvert. Rouvrir la fenêtre, ou même recharger la page, ne pose pas de problème : le bouton de copie est toujours là. Il ne disparaît qu’une fois **l’onglet fermé**, parce que We-Fly ne stocke qu’une version brouillée, jamais le mot de passe lui-même. Pas grave si ça arrive : génères-en simplement un nouveau.

Cette même carte affiche aussi les deux autres réglages dont tu as besoin, chacun avec son bouton de copie. Tu n’as donc jamais rien à taper de mémoire.

> **Il faut être membre à part entière de We-Fly**, inscrit et avec ton consentement donné. Si tu en es encore à l’étape d’incubation ou de consentement, termine-la d’abord et la carte s’activera.

---

## Les trois réglages dont chaque appareil a besoin

Quelle que soit l’appli ou l’instrument que tu relies à We-Fly, il demande toujours les trois mêmes choses :

| Réglage | Valeur |
|---|---|
| **URL du serveur** | `https://we-fly.cloud/api/webdav` |
| **Nom d’utilisateur** | l’adresse e-mail de ton compte We-Fly |
| **Mot de passe** | le mot de passe d’appareil que tu viens de générer |

C’est toute la poignée de main. Copie ces trois valeurs, garde-les sous la main, et tu es prêt pour n’importe quelle appli WebDAV de la planète.

---

## Le plat principal : Air³ / Android + XCTrack

Voici le plus beau. XCTrack enregistre déjà chaque vol en trace `.igc` dans un dossier de ton appareil. Tout ce qu’on fait, c’est poser sur ce dossier un petit robot qui dit « nouveau fichier ? Je l’envoie. » Tu règles, et tu oublies.

### Pas à pas

1. **Génère ton mot de passe d’appareil** dans We-Fly (voir plus haut). Garde ces trois réglages à portée de main.

2. **Installe une appli de synchro WebDAV** depuis le Play Store. N’importe laquelle de celles-ci fait très bien le travail. Prends celle qui te plaît :
   - **FolderSync**
   - **DAVx5**
   - **RoundSync** (ou une appli comparable du genre Autosync)

   Ce sont toutes des applis de synchronisation de dossiers ; aucune n’est « officielle », elles parlent juste toutes couramment le WebDAV.

3. **Ajoute un nouveau compte WebDAV / serveur distant** dans l’appli. Saisis :
   - **URL du serveur** → `https://we-fly.cloud/api/webdav`
   - **Nom d’utilisateur** → ton adresse e-mail We-Fly
   - **Mot de passe** → ton mot de passe d’appareil

   La plupart des applis ont un bouton « Tester la connexion ». Touche-le, tu devrais avoir le feu vert.

4. **Crée une paire de synchro** (certaines applis disent paire de dossiers) :
   - **Dossier local** → là où XCTrack range tes traces `.igc`, en général `/Android/data/org.xcontest.XCTrack/files/Tracklogs/`. Le chemin varie un peu selon l’appareil et la version : fie-toi au « dossier qui contient tes fichiers `.igc` » plutôt qu’à un chemin tout fait.
   - **Dossier distant** → la connexion WebDAV que tu viens d’ajouter.

   > **Sous Android 11 et plus, ce dossier est caché aux sélecteurs de fichiers ordinaires**. Ton appli de synchro fera comme s’il était vide. C’est le stockage cloisonné qui fait son travail, pas un bug, et il existe une vraie solution en deux minutes : **[Donner à ton appli de synchro l’accès au dossier d’XCTrack](/doc/xctrack-folder-permission)**. Fais le détour, puis reviens ici.

5. **Règle le sens sur unidirectionnel, téléphone → We-Fly** (envoi seulement). We-Fly est la destination, pas un miroir dans les deux sens. Ton appareil envoie les vols et ne récupère jamais rien. Active ensuite la **synchro automatique** : à chaque nouveau fichier, ou sur Wi-Fi après l’atterrissage, selon ce que propose ton appli.

6. **Vole. Pose-toi. Connecte-toi au Wi-Fi.** Dès que tu es en ligne, ta trace monte toute seule dans We-Fly. Ouvre ton carnet de vol et la voilà : scorée, cartographiée, thermiques décodés. Va plier ta voile.

> **Astuce :** déclenche la synchro sur le Wi-Fi plutôt que sur les données mobiles, et la batterie (et ton forfait) te remercieront dans la navette de récup. Tes traces attendent sagement et partent à la seconde où tu captes le Wi-Fi du gîte.

---

## Autres instruments et ordinateurs

Le WebDAV est une langue universelle, donc les trois mêmes réglages fonctionnent bien au-delà de l’Air³.

**Les autres instruments compatibles WebDAV** (un Skytraxx, un appareil Android type Oudie, tout ce qui parle WebDAV) se configurent exactement pareil : ajoute le compte avec l’URL du serveur, ton adresse e-mail et le mot de passe d’appareil, puis pointe-le vers le dossier où il range les fichiers `.igc`.

**Ton ordinateur**. Tu peux monter la même URL comme lecteur réseau et y déposer tes fichiers :
- **Windows** → *Connecter un lecteur réseau* → colle l’URL du serveur, connecte-toi avec ton adresse e-mail + le mot de passe d’appareil.
- **macOS** → Finder → *Aller → Se connecter au serveur* → même URL, mêmes identifiants.
- **Linux** → monte-le avec ton gestionnaire de fichiers ou `davfs2`.

Il suffit alors de glisser des fichiers `.igc` dans ce lecteur pour les importer dans We-Fly. Pratique pour vider l’arriéré d’une vieille carte SD.

---

## Bon à savoir

- **Seuls les fichiers `.igc` sont acceptés.** Tout ce que l’appareil essaie d’envoyer d’autre est refusé et jamais stocké. Ton appli de synchro peut signaler ces fichiers en échec, c’est sans conséquence : pas de souci donc si ton dossier de traces contient aussi des fichiers de config ou de log qui traînent.
- **Les doublons sont ignorés automatiquement**, repérés d’après le contenu réel du fichier. Resynchroniser mille fois le même dossier ne créera jamais un seul vol en double. C’est pour ça qu’on peut le laisser tourner pour toujours sans crainte.
- **C’est de l’envoi seulement, par principe.** L’appareil envoie les vols ; il ne revient jamais modifier ou supprimer quoi que ce soit. Tu veux supprimer un vol ? Fais-le dans l’appli We-Fly, jamais depuis l’appareil.

---

## Dépannage / FAQ

**Rien n’est apparu dans mon carnet de vol ?**
Passe en revue les suspects habituels : es-tu vraiment sur le Wi-Fi (ou sur ce qui déclenche ta synchro) ? La tâche de synchro a-t-elle vraiment tourné (regarde le journal de l’appli) ? Et le fichier est-il une vraie trace `.igc`, pas un fichier à moitié écrit ou renommé ? Neuf fois sur dix, c’est l’un des trois.

**Je peux synchroniser toutes mes archives ?**
Évidemment. Pointe une fois une paire de synchro sur tout ton dossier d’archives, laisse-la mouliner, et chaque vieille trace atterrit dans We-Fly. Comme les doublons sont repérés par leur contenu, aucun risque de vol en double, même si certains de ces vols sont déjà dans ton carnet de vol.

**Mon mot de passe est-il en sécurité ?**
C’est un **mot de passe par appareil**, pas l’identifiant de ton compte. Il n’ouvre que ton dossier de vols (envoyer de nouveaux fichiers `.igc`, lire ceux qui s’y trouvent déjà) et ne peut jamais supprimer un vol ni toucher à ton compte. Tu peux le **révoquer à tout moment** depuis la même carte Services connectés. La révocation coupe cet appareil instantanément et laisse tous les autres intacts. Tu vends ton Air³ ? Révoque d’abord.

**Est-ce que ça supprime certains de mes vols ?**
Non. La synchro est unidirectionnelle, en envoi seulement. Les suppressions se font **uniquement** dans l’appli We-Fly, volontairement, par toi. Rien de ce que fait ton instrument ne peut supprimer un vol.

---

## Tu veux qu’XCTrack le fasse tout seul ? Vote pour

Le duo WebDAV + appli de synchro ci-dessus marche très bien dès aujourd’hui, mais soyons honnêtes, le rêve est encore plus simple : XCTrack qui envoie directement vers We-Fly dès que tu te poses, exactement comme il le fait déjà avec son envoi automatique vers XContest. Pas d’appli intermédiaire, pas de paires de dossiers à configurer. Tu te poses, c’est fait. Zéro appli.

Bonne nouvelle : il existe une **demande officielle aux développeurs d’XCTrack pour exactement ça.** Et le truc, c’est que les votes des pilotes font vraiment bouger les choses. Plus on est nombreux à voter, plus elle a de chances de grimper dans la liste des priorités et de sortir pour de bon. Alors faisons du bruit ; chaque vote compte.

Ça prend à peu près une minute :

1. Ouvre la demande : [gitlab.com/xcontest-public/xctrack-public/-/work_items/1293](https://gitlab.com/xcontest-public/xctrack-public/-/work_items/1293)
2. **Connecte-toi à GitLab** : un compte gratuit, vite créé si tu n’en as pas (il faut être connecté pour voter).
3. Sur la demande, clique sur la **réaction emoji 👍** pour ajouter ton vote. C’est tout. Tu as voté.

Si ça sort, toute cette doc va bien maigrir. Aidons à ce que ça arrive.

---

## Roues rentrées

Configure ça une fois et ton carnet de vol se remplit pratiquement tout seul. Vole, pose-toi, connecte-toi, et les chiffres t’attendent avant même que tu aies lové tes suspentes. C’est comme ça que ça devrait être.

Bons vols, et des carnets bien remplis. 🪂
