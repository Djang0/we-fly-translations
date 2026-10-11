---
title: Upload from Flyskyhy
description: Send flights straight from Flyskyhy on your iPhone or iPad into We-Fly, set up "Other Leonardo server" once, then land, tap, logged
category: Your Flights
order: 4
---

## Land, tap, logged

You just landed a cracker. You're still buzzing, folding your wing, and the flight is already going into your We-Fly logbook, straight from the phone in your pocket. No cable, no laptop, no "I'll upload it tonight" that quietly becomes next week.

If you fly with **Flyskyhy** on your iPhone or iPad, it can now hand every flight to We-Fly the moment you land. We taught We-Fly to speak **Leonardo**, a flight-upload language Flyskyhy already knows, so all that's left is a one-time, five-minute setup. Let's wire it up.

> **Heads up:** this uploads the **recorded track** of a flight you've flown (the `.igc`). It isn't live tracking. It's the "job done, here's the flight" kind of upload.

---

## First: grab your device password (once, in We-Fly)

Everything hangs off a single **device password** you generate inside We-Fly. Think of it like a spare key cut just for one app. Lose your phone or sell it, and you revoke that one key without touching anything else.

1. Go to **Profile → Connected services** and find the **"Instrument & cloud sync (WebDAV)"** card.
2. Type a device name you'll recognise later, like `iPhone - Flyskyhy`. This is *just a label for you*; it isn't sent anywhere and Flyskyhy never needs it.
3. Tap **Generate**. A **device password** pops up (it starts with `wf_key_`).
4. **Copy it right now.** If you click away, it stays re-copyable from its device row for as long as this browser tab stays open. Close the tab without copying and you'll just generate a fresh one, no harm done. Generating on a laptop? Tap **Scan onto phone** to grab it with your phone camera instead of typing all those characters.

> **Already sync a vario over WebDAV?** Then you already have one of these. The *same* device password works for Flyskyhy. No need to make another.

> **You need to be a full We-Fly member**, signed up and consented. If you're still in the incubating/consent stage, finish that first and the card will light up.

---

## The three settings Flyskyhy needs

Whatever else you do, Flyskyhy always asks for the same three things:

| Setting | Value |
|---|---|
| **Submit URL** | `https://we-fly.cloud/api/leonardo/flight_submit.php` |
| **Username** | your We-Fly account email |
| **Password** | the device password you just generated |

Copy those three, keep them handy, and you're ready.

---

## Step by step in Flyskyhy

1. **Generate your device password** in We-Fly (see above) and keep those three settings within reach.

2. In Flyskyhy, go to upload a flight and choose **"Other Leonardo server."** This is the option that lets you point the app at a custom server: us.

3. Fill in the details:
   - **Server name** → `We-Fly` (just a label so you recognise it in the list)
   - **Submit URL** → `https://we-fly.cloud/api/leonardo/flight_submit.php`
   - **Username** → your We-Fly email
   - **Password** → your device password

4. **Upload.** Flyskyhy sends the track up, and We-Fly does the rest: the flight lands in your logbook already scored, mapped, and with its thermals decoded. You don't lift a finger for any of that.

5. From now on, **"Upload to We-Fly"** sits right there in your upload options. Land, tap, done.

> **Pro tip:** the very first upload is the "hello." After that, every new flight is one tap away. Get in the habit of firing it off while you're still packing up, and your logbook never falls behind again.

---

## Good things to know

- **Only `.igc` tracklogs are accepted.** That's exactly what Flyskyhy sends, so there's nothing to think about.
- **Duplicates are skipped automatically**, matched by the flight's actual contents. Tapped upload twice? Uploaded it by hand last week? We-Fly just shrugs and says "already got that one." You can upload as freely as you like. Nothing ever doubles up.
- **It's your logbook, same as always.** A flight that arrives from Flyskyhy is identical to one you'd upload on the website: all the maps, stats, and XC scoring apply automatically.

---

## Troubleshooting / FAQ

**Flyskyhy says the username or password is wrong.**
Nine times out of ten it's the device password: it's long, and a stray copy-paste can bite. Pop back into **Profile → Connected services → Instrument & cloud sync (WebDAV)**, tap **Generate** for a fresh one, and paste it into Flyskyhy again. Your username is your We-Fly **email**, not a nickname.

**Double-check the Submit URL.**
It must be exactly `https://we-fly.cloud/api/leonardo/flight_submit.php`, with `https://` at the front and ending in `/flight_submit.php`. A missing `s` or a typo in the tail is the other usual suspect.

**Nothing showed up in my logbook?**
Make sure the upload actually finished (you're on a signal), then refresh your [flights page](/flights). If Flyskyhy reported success, the flight is in. Give the page a moment and it'll appear.

**Is my password safe?**
It's a **per-device password**, not your account login. It only opens your flight folder (add flights, read the ones already there) and can never delete a flight or touch your account. You can **revoke it anytime** from the same Connected services card. That cuts Flyskyhy off instantly and leaves every other device untouched. Selling your phone? Revoke first.

**Does this delete any flights?**
Never. This only *adds* flights. Deleting is done by you, in the We-Fly app, on purpose. Nothing Flyskyhy does can remove a flight.

---

## Not flying with Flyskyhy?

Flyskyhy is iPhone/iPad only. On an **Android vario or the Air³**, use **[Auto-Sync Your Instrument](/doc/sync-instruments-webdav)** instead: same device password, same idea, over WebDAV.

---

## Wheels up

Set this up once and your logbook basically fills itself. Fly, land, tap, and the numbers are waiting for you before you've coiled your lines. That's how it should be.

Blue skies and full logbooks. 🪂
