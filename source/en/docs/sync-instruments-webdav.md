---
title: Auto-Sync Your Instrument
description: Push flights from your Air³, vario, or phone straight into We-Fly over WebDAV, no cables, no manual uploads
category: Your Flights
order: 4
---

## Land, connect to Wi-Fi, done

Picture this: you clip out at the LZ, still buzzing from that last glass-off climb, and by the time you've packed your wing your track is already sitting in We-Fly: scored, mapped, thermals crunched. No cable. No "I'll upload it tonight" that becomes next week. No hunting through folders on your phone.

That's **Instrument & cloud sync (WebDAV)**. Set it up once, and your device quietly hands every new flight to your logbook the moment you're back on Wi-Fi. This is the doc you read once and then never touch your flights manually again.

The star of the show is the **Air³** (the Android vario running XCTrack), but the same trick works from any Android phone or any WebDAV-capable instrument. Let's wire it up.

---

## First: grab your device password (once, in We-Fly)

Everything hangs off a single **device password** you generate inside We-Fly. Think of it like a spare key cut just for one instrument. If you ever lose the device or sell it, you revoke that one key and nothing else is affected.

1. Go to **Profile → Connected services** and find the **"Instrument & cloud sync (WebDAV)"** card.
2. Type a device name, something you'll recognise later, like `Air³` or `Old backup vario`.
3. Tap **Generate**. A **device password** pops up.
4. **Copy it right now.** Prefer copying it straight away, but if you click away, you haven't lost it: each password stays **re-copyable from its device row** (the little copy icon next to it) for as long as you keep this **browser tab** open. Reopening the dialog, or even reloading the page, is fine. The copy button is still there. It only disappears once you **close the tab**, because We-Fly only ever stores a scrambled version, never the password itself. No harm if that happens, just generate a fresh one.

That same card also shows the other two settings you need, each with its own copy button. So you never have to type any of this from memory.

> **You need to be a full We-Fly member**, signed up and consented. If you're still in the incubating/consent stage, finish that first and the card will light up.

---

## The three settings every device needs

Whatever app or instrument you're pointing at We-Fly, it always asks for the same three things:

| Setting | Value |
|---|---|
| **Server URL** | `https://we-fly.cloud/api/webdav` |
| **Username** | your We-Fly account email |
| **Password** | the device password you just generated |

That's the whole handshake. Copy those three, keep them handy, and you're ready for any WebDAV app on the planet.

---

## The main event: Air³ / Android + XCTrack

Here's the beautiful part. XCTrack already saves every flight as an `.igc` tracklog into a folder on your device. All we're doing is putting a little robot on that folder that says "new file? send it up." Set it and forget it.

### Step by step

1. **Generate your device password** in We-Fly (see above). Keep those three settings within reach.

2. **Install a WebDAV sync app** from the Play Store. Any of these do the job nicely. Pick whichever you like the look of:
   - **FolderSync**
   - **DAVx5**
   - **RoundSync** (or a comparable Autosync-style app)

   They're all folder-syncing tools; none is "official," they just all speak WebDAV fluently.

3. **Add a new WebDAV account / remote** in the app. Punch in:
   - **Server URL** → `https://we-fly.cloud/api/webdav`
   - **Username** → your We-Fly email
   - **Password** → your device password

   Most apps have a "Test connection" button. Tap it and you should get a green light.

4. **Create a sync pair** (some apps call it a folder pair):
   - **Local folder** → where XCTrack stores your `.igc` tracklogs, usually `/Android/data/org.xcontest.XCTrack/files/Tracklogs/`. Paths shift a little between devices and versions, so trust "the folder with your `.igc` files in it" over any hard-coded path.
   - **Remote folder** → the WebDAV connection you just added.

   > **On Android 11 and up, that folder is hidden from ordinary file pickers**. Your sync app will act like it's empty. That's scoped storage doing its job, not a bug, and there's a proper two-minute fix: **[Let Your Sync App See XCTrack's Folder](/doc/xctrack-folder-permission)**. Detour through it, then come back here.

5. **Set the direction to one-way, phone → We-Fly** (upload only). We-Fly is the destination, not a two-way mirror. Your device pushes flights up and never pulls anything down. Then flip on **auto-sync**: on new file, or on Wi-Fi after you land, whatever your app offers.

6. **Fly. Land. Connect to Wi-Fi.** The moment you're online, your track climbs into We-Fly on its own. Open your logbook and there it is: scored, mapped, thermals decoded. Go pack your wing.

> **Pro tip:** Set auto-sync to fire on Wi-Fi rather than mobile data, and your retrieve-truck battery (and data plan) will thank you. Your tracks wait patiently and land the second you hit that gîte Wi-Fi.

---

## Other instruments and desktops

WebDAV is a universal language, so the same three settings work far beyond the Air³.

**Other WebDAV-capable instruments** (a Skytraxx, an Oudie-style Android device, anything that can talk WebDAV) set it up exactly the same way: add the account with the Server URL, your email, and the device password, then point it at the folder where it stores `.igc` files.

**Your computer**. You can map the same URL as a network drive and just drop files in:
- **Windows** → *Map network drive* → paste the Server URL, sign in with your email + device password.
- **macOS** → Finder → *Go → Connect to Server* → same URL and credentials.
- **Linux** → mount it via your file manager or `davfs2`.

Then dragging `.igc` files into that drive uploads them to We-Fly. Handy for clearing a backlog off an old SD card.

---

## Good things to know

- **Only `.igc` files are accepted.** Anything else the device tries to push is politely ignored: no errors, no mess. So it's fine if your tracklog folder also has odd config or log files hanging around.
- **Duplicates are skipped automatically**, matched by the file's actual contents. Re-syncing the same folder a thousand times will never create a single duplicate flight. This is why it's safe to just leave it running forever.
- **It's upload-only in spirit.** The device pushes flights up; it never reaches back to change or remove anything. Want to delete a flight? Do it in the We-Fly app, never from the device.

---

## Troubleshooting / FAQ

**Nothing showed up in my logbook?**
Run down the usual suspects: are you actually on Wi-Fi (or wherever your sync is set to trigger)? Did the sync task actually run (check the app's log)? And is the file a genuine `.igc` tracklog, not a half-written or renamed file? Nine times out of ten it's one of those three.

**Can I sync my whole back-catalogue?**
Absolutely. Point a sync pair at your entire archive folder once, let it churn through, and every old track lands in We-Fly. Because duplicates are skipped by content, there's zero risk of doubling up, even if some of those flights are already in your logbook.

**Is my password safe?**
It's a **per-device password**, not your account login. It only works for uploading `.igc` files, and you can **revoke it anytime** from the same Connected services card. Revoking cuts that one device off instantly and leaves every other device untouched. Selling your Air³? Revoke first.

**Does this delete any of my flights?**
No. Sync is one-way and upload-only. Deletions happen **only** in the We-Fly app, on purpose, by you. Nothing your instrument does can remove a flight.

---

## Want XCTrack to just do it for you? Vote it up

The WebDAV + sync-app combo above works beautifully today, but let's be honest, the dream is even simpler: XCTrack uploading straight to We-Fly the moment you land, exactly like its built-in XContest auto-upload already does. No middleman app, no folder pairs to configure. You land, it's done. Zero apps.

Good news: there's an **official feature request asking the XCTrack developers for exactly that.** And here's the thing: pilot votes genuinely move the needle. The more of us who upvote it, the more likely it climbs the priority list and actually ships. So let's make some noise; every vote counts.

Takes about a minute:

1. Open the request: [gitlab.com/xcontest-public/xctrack-public/-/work_items/1293](https://gitlab.com/xcontest-public/xctrack-public/-/work_items/1293)
2. **Log in to GitLab**: a free account, quick to make if you don't have one (you need to be logged in to vote).
3. On the issue, click the **👍 thumbs-up emoji reaction** to add your upvote. That's it. You've cast your vote.

If it ships, this whole doc gets a lot shorter. Let's help it happen.

---

## Wheels up

Set this up once and your logbook basically fills itself. Fly, land, connect, and the numbers are waiting for you before you've coiled your lines. That's how it should be.

Blue skies and full logbooks. 🪂
