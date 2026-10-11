---
title: Fixing Wrong Flight Dates
description: Why some instruments record the wrong date, and how to correct it without losing your flight
category: Your Flights
order: 6
---

## When a flight lands on the wrong day

Every IGC file carries the flight date in its header, written day first: `DDMMYY`. A few instruments write it the other way round (`YYMMDD`). We-Fly then reads the year as the day and the day as the year, so a flight from 9 July 2026 can show up as 26 July 2009.

Your track, times and scores are fine. Only the date is off, which puts the flight in the wrong season, the wrong streak and the wrong spot in your logbook.

## Fix one flight

Open the flight's **⋯** menu and choose **Change Date**.

- If the date looks swapped, We-Fly shows a **Suggested fix** next to the current date. One tap applies it.
- Otherwise pick the right day in the calendar. The time of the flight stays the same; only the day changes.

## Fix many flights at once

If one instrument logged a whole season with swapped dates, select those flights in the logbook and use **Fix Date Encoding** from the selection menu. It swaps day and year on every selected flight in one go.

Use it only on flights that are really affected. Running it on a correct flight swaps a good date into a wrong one, and your timeline gets mixed up. If in doubt, fix one flight first and check the result.

## Prevent it

Update your instrument's firmware: most vendors fixed the date format long ago. If the problem stays, tell the vendor their IGC header doesn't follow the `HFDTE` rule of the IGC specification.
