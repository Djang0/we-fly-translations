---
title: Wings Management
description: How to manage your wings in We-Fly, renaming, solo/tandem classification, and what actually changes when you do
category: Your Flights
order: 3
---

## Your wings live in your flights

We-Fly doesn't have a separate "wings database." When you upload an IGC file, your instrument embeds the glider name in the file header, and that's what We-Fly picks up. Every flight carries its own wing name, and the **Wings** page (`/flights/wings`) is just a smart aggregation: it groups all your flights by glider name and shows you the combined picture.

That distinction matters, because it shapes what renaming actually does, and doesn't do.

---

## What you see on the Wings page

Each row in your wings list shows:

- **Wing name**: exactly as your instrument recorded it in the IGC file
- **Type**: Solo, Tandem, or Mixed (more on this below)
- **Flights**: total number of flights logged with that wing
- **Duration**: combined airtime across all those flights

From here you can rename a wing and change its type. That's it, clean and simple.

---

## Renaming a wing

There are three places you can update a wing name in We-Fly, and the scope of each one is different.

### From the Wings page: rename everything at once

Hit **Rename** next to any wing, type the new name, confirm. We-Fly updates the glider name on **every flight** that had the old name. Fifteen flights logged as "Rush 6"? They all become "Ozone Rush 6" in one shot. This is the right tool when you want to clean up a name across your entire logbook.

### From your flight list: rename selected flights only

On `/flights`, select one or more flights using the checkboxes. A bulk action menu appears. Open it and choose **Update Wing Name**. Only the flights you selected get updated, regardless of what wing they were on before. Useful when you want to reassign a handful of flights without touching the rest.

### From a single flight: rename one flight

On any flight detail page, open the actions menu and choose **Change Wing**. This updates that flight only. No other flights are touched.

---

**What changes in all three cases:**
- The glider name on the affected flights
- The wings list (entries appear, merge, or disappear based on what's left)
- Any active filters referencing that wing name

**What doesn't change:**
- Your instrument. The vario, GPS, or phone app that produced those IGC files still has the old name configured. The next time you fly and upload, the new flight will show up with the old name again, because that's what your instrument wrote in the IGC header.

If you rename a wing in We-Fly, **also update the glider name in your instrument's settings**. Otherwise you'll be chasing this rename every upload.

> Renaming a wing here only updates existing flights in your database. Your flight instrument may still be configured with the old wing name.

---

## Solo vs Tandem

We-Fly tracks whether each flight was flown solo or tandem. This affects how your statistics are displayed and can matter for your flight log.

### How the type gets set

Flights default to **solo** unless We-Fly finds an existing tandem flight with the same wing name in your logbook. In that case, the new upload inherits `tandem` automatically, no manual step needed.

### Changing the type manually

On the Wings page, each row has a type selector. Click it to switch all flights with that wing between Solo and Tandem. This is a **bulk operation**: it updates every flight with that wing name in one go.

Before confirming, We-Fly tells you exactly how many flights will be affected. No surprises.

---

## Common situations

**"I fly both solo and tandem on the same glider"**

Use the rename trick: log the tandem flights, then rename that wing to something like "Fusion 30 Tandem" before marking them as tandem. Keep the solo flights under the original name. This way both show up as clean, separate entries.

**"My wing shows up under two names"**

Classic instrument inconsistency: "Rush 6" from one logger, "OZONE Rush 6" from another, or even a typo from a firmware update. Rename the variants to a single canonical name and they'll merge into one row.

**"My new flights keep showing the old wing name after I renamed"**

Update your instrument. We-Fly reads whatever name is in the IGC file. It can't override what your vario wrote.

---

Blue skies and consistent wing names out there.
