---
title: "Importer depuis Flyskyhy"
description: "Envoie tes vols directement de Flyskyhy sur ton iPhone ou ton iPad vers We-Fly : configure « Other Leonardo server » une fois, puis pose-toi, tape, c’est dans le carnet"
category: Your Flights
order: 4
---

## Pose-toi, tape, c’est dans le carnet

Tu viens de te poser après un vol d’enfer. T’es encore sur un nuage, tu plies ta voile, et le vol part déjà dans ton carnet de vol We-Fly, directement depuis le téléphone dans ta poche. Pas de câble, pas d’ordi, pas de « je l’importerai ce soir » qui se transforme discrètement en la semaine prochaine.

Si tu voles avec **Flyskyhy** sur ton iPhone ou ton iPad, il peut maintenant confier chaque vol à We-Fly dès que tu te poses. On a appris à We-Fly à parler **Leonardo**, un langage d’envoi de vols que Flyskyhy connaît déjà, donc il ne reste qu’une configuration de cinq minutes, une seule fois. On branche tout ça.

> **Attention :** ça importe la **trace enregistrée** d’un vol que tu as fait (le `.igc`). Ce n’est pas du suivi en direct. C’est l’envoi du genre « boulot terminé, voilà le vol ».

---

## D’abord : récupère ton mot de passe d’appareil (une fois, dans We-Fly)

Tout repose sur un seul **mot de passe d’appareil** que tu génères dans We-Fly. Vois-le comme un double de clé taillé pour une seule appli. Tu perds ou tu vends ton téléphone, tu révoques cette clé-là sans toucher au reste.

1. Va dans **Profil → Services connectés** et trouve la carte **« Synchro instrument et cloud (WebDAV) »**.
2. Tape un nom d’appareil que tu reconnaîtras plus tard, comme `iPhone - Flyskyhy`. C’est *juste une étiquette pour toi* : elle n’est envoyée nulle part et Flyskyhy n’en a jamais besoin.
3. Tape sur **Générer**. Un **mot de passe d’appareil** apparaît (il commence par `wf_key_`).
4. **Copie-le tout de suite.** Si tu cliques ailleurs, tu peux encore le recopier depuis la ligne de son appareil tant que cet onglet du navigateur reste ouvert. Si tu fermes l’onglet sans le copier, tu en génères simplement un nouveau, aucun souci. Tu le génères sur un ordi ? Tape sur **Scanner sur le téléphone** pour le récupérer avec l’appareil photo de ton téléphone au lieu de taper tous ces caractères.

> **Tu synchronises déjà un vario en WebDAV ?** Alors tu as déjà un de ces mots de passe. Le *même* mot de passe d’appareil marche pour Flyskyhy. Pas besoin d’en créer un autre.

> **Il faut être membre à part entière de We-Fly**, inscrit et avec ton consentement donné. Si tu en es encore à l’étape d’incubation ou de consentement, termine-la d’abord et la carte s’activera.

---

## Les trois réglages dont Flyskyhy a besoin

Quoi que tu fasses d’autre, Flyskyhy demande toujours les trois mêmes choses :

| Réglage | Valeur |
|---|---|
| **Submit URL** | `https://we-fly.cloud/api/leonardo/flight_submit.php` |
| **Username** | l’e-mail de ton compte We-Fly |
| **Password** | le mot de passe d’appareil que tu viens de générer |

Copie ces trois valeurs, garde-les sous la main, et c’est parti.

---

## Pas à pas dans Flyskyhy

1. **Génère ton mot de passe d’appareil** dans We-Fly (voir plus haut) et garde ces trois réglages à portée de main.

2. Dans Flyskyhy, va dans l’envoi d’un vol et choisis **« Other Leonardo server »**. C’est l’option qui te permet de pointer l’appli vers un serveur perso : nous.

3. Remplis les champs :
   - **Server name** → `We-Fly` (juste une étiquette pour le reconnaître dans la liste)
   - **Submit URL** → `https://we-fly.cloud/api/leonardo/flight_submit.php`
   - **Username** → ton e-mail We-Fly
   - **Password** → ton mot de passe d’appareil

4. **Envoie.** Flyskyhy envoie la trace, et We-Fly fait le reste : le vol arrive dans ton carnet déjà scoré, cartographié, avec ses thermiques décortiqués. Tu ne lèves pas le petit doigt pour tout ça.

5. Désormais, **« Upload to We-Fly »** t’attend dans tes options d’envoi. Pose-toi, tape, c’est fait.

> **L’astuce du pro :** le tout premier envoi, c’est le « bonjour ». Ensuite, chaque nouveau vol est à un tap. Prends l’habitude de l’envoyer pendant que tu ranges ton matos, et ton carnet ne prendra plus jamais de retard.

---

## Bon à savoir

- **Seules les traces `.igc` sont acceptées.** C’est exactement ce qu’envoie Flyskyhy, donc rien à penser.
- **Les doublons sont ignorés automatiquement**, reconnus au contenu réel du vol. Tu as tapé deux fois sur envoyer ? Tu l’avais importé à la main la semaine dernière ? We-Fly hausse les épaules et dit « je l’ai déjà ». Tu peux envoyer autant que tu veux. Rien n’est jamais en double.
- **C’est ton carnet de vol, comme d’habitude.** Un vol qui arrive de Flyskyhy est identique à un vol importé sur le site : cartes, stats et score de cross s’appliquent automatiquement.

---

## Dépannage / FAQ

**Flyskyhy dit que le nom d’utilisateur ou le mot de passe est faux.**
Neuf fois sur dix, c’est le mot de passe d’appareil : il est long, et un copier-coller raté peut vite arriver. Retourne dans **Profil → Services connectés → Synchro instrument et cloud (WebDAV)**, tape sur **Générer** pour en avoir un nouveau, et colle-le à nouveau dans Flyskyhy. Ton nom d’utilisateur, c’est ton **e-mail** We-Fly, pas un pseudo.

**Vérifie bien la Submit URL.**
Elle doit être exactement `https://we-fly.cloud/api/leonardo/flight_submit.php`, avec `https://` au début et `/flight_submit.php` à la fin. Un `s` qui manque ou une faute de frappe à la fin, c’est l’autre suspect habituel.

**Rien n’est apparu dans mon carnet ?**
Vérifie que l’envoi s’est vraiment terminé (que tu as du réseau), puis rafraîchis ta [page des vols](/flights). Si Flyskyhy a indiqué un succès, le vol est bien arrivé. Laisse un instant à la page et il apparaîtra.

**Mon mot de passe est-il en sécurité ?**
C’est un **mot de passe par appareil**, pas l’identifiant de ton compte. Il n’ouvre que ton dossier de vols (ajouter des vols, lire ceux qui s’y trouvent déjà) et ne peut jamais supprimer un vol ni toucher à ton compte. Tu peux **le révoquer à tout moment** depuis la même carte Services connectés. Ça coupe Flyskyhy instantanément sans toucher aux autres appareils. Tu vends ton téléphone ? Révoque d’abord.

**Est-ce que ça supprime des vols ?**
Jamais. Ça ne fait qu’*ajouter* des vols. C’est toi qui supprimes, dans l’appli We-Fly, volontairement. Rien de ce que fait Flyskyhy ne peut retirer un vol.

---

## Tu ne voles pas avec Flyskyhy ?

Flyskyhy existe uniquement sur iPhone et iPad. Sur un **vario Android ou l’Air³**, utilise plutôt **[Synchroniser automatiquement ton instrument](/doc/sync-instruments-webdav)** : même mot de passe d’appareil, même principe, en WebDAV.

---

## Train rentré

Configure ça une fois et ton carnet de vol se remplit quasiment tout seul. Vole, pose-toi, tape, et les chiffres t’attendent avant même que tu aies lové tes suspentes. C’est comme ça que ça devrait être.

Ciel bleu et carnets bien remplis. 🪂
