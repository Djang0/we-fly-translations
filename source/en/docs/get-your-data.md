---
title: Get your data
description: Download a complete copy of your flight data
category: Account & Data
order: 1
---

## Your data, your rules

Open your **Profile** (from the Account menu, or go straight to `/profile`). In the **Account** panel, click **Export data**. The row shows how many flight records you have, and one click later a ZIP file lands in your downloads, faster than a sledge ride after a blown launch.

There's nothing to fill in and no email to wait for: the archive is built on the spot. With hundreds of flights it can take a moment to start, so give it a few seconds before clicking again.

## What's in the box?

The ZIP (named `we-fly-data-export-` followed by a number) holds one `my-data` folder with everything we have on you, GDPR style:

- **flights/**: all your IGC files, organised by date (`flights/YYYY/MM/DD/`) so you can find that epic thermal day from 2021. Each file keeps its original name and is exactly the file you uploaded, byte for byte
- **data-export.json**, the nerdy stuff: your profile and preferences (units, display settings, wing colours, email preferences), every flight's metadata (date, pilot, wing, duration, distance, takeoff and landing, XC score, sharing status), the sign-in accounts linked to your profile, your passkeys (names and dates only, never key material) and your consent records
- **README.txt**: explains what's what, plus a short summary of your totals, in case you open it 6 beers later
- **missing.txt**: only appears if an IGC file could not be found on our side, and lists which flights are affected

Corrections you made in We-Fly (a fixed date, a renamed wing) live in `data-export.json`. The IGC files themselves are never modified, so they stay exactly as your instrument recorded them.

## Why bother?

- **Backup**: because hard drives fail but cloud thermals don't
- **Migrate**: taking your logbook to another platform? IGC is the format every logbook understands
- **Proof**: need to show your club you actually flew that triangle? It's all there

## Tech bits for the curious

IGC files work with any flight analysis software: XCTrack, SeeYou, whatever your crew uses. The JSON is structured and machine-readable, so you can script your own stats if you're that kind of pilot.

Fair warning: the export is rate-limited, so maybe don't spam the button like you're clicking through a pre-flight checklist.

Only want a few IGC files, not the whole archive? Select flights in your logbook and use **Download IGC Files** to get just those, as a ZIP.
