---
title: Community Leaderboards Pilot Guide
description: Who's Flying the Most vs. Who's Flying the Smartest
category: Community
order: 2
---

*Or: How to figure out if you're the community workhorse or the community thoroughbred*

## Two Leaderboards, Two Questions

The We-Fly community leaderboards answer two fundamentally different questions:

1. **Activity:** "Who flies the most?" (volume)
2. **Efficiency:** "Who flies the smartest?" (quality)

Think of it like this: Activity is your flight logbook's page count. Efficiency is your highlight reel per page. One rewards showing up, the other rewards making it count when you do.

Let's break them both down.

---

## The Activity Leaderboard (The "I Fly More Than You" Tab)

### What It Measures

Total **XC score** from your public flights. That's it. Fly more, fly farther, rack up the score.

### The Rules

Not every flight makes the cut. Here's what qualifies:

| Criteria | Why |
|----------|-----|
| XC distance >= 10 km | Filters out sled rides and parking-lot soaring |
| Non-powered flights only | Sorry paramotors, this one's for the unpowered crowd |
| Flight must be public | Private flights stay private (we respect your secrets) |

### What You See

| Column | What It Means |
|--------|--------------|
| Rank | Your position on the board |
| Pilot | FirstName L. (privacy-friendly) |
| Flights | Total qualifying flight count |
| Hours | Total airtime across qualifying flights |
| XC Km | Total cross-country kilometers |
| XC Score | The number that determines your rank |
| Tier | Your badge based on total public flight hours |

### The Tier System (Quick Version)

Your tier badge is based on **total public flight hours** and goes from Bronze Wing all the way up to Titanium Wing. It's a progression badge, not a skill rating -- fly enough hours and you'll climb the tiers. Think of it as frequent flyer miles, but for people who actually fly.

### The Bottom Line

Activity rewards **consistency and dedication**. The pilot who flies 200 short XC flights will outrank the pilot who flew 10 incredible ones. It's the "just get out there" leaderboard, and there's no shortcut. You either put in the hours or you don't.

---

## The Efficiency Leaderboard (The "I Fly Smarter Than You" Tab)

### What It Measures

Your **efficiency score** -- a composite metric that captures how well you fly and how consistently you show up. This is where dedicated XC pilots shine.

### How It Works

The efficiency score combines three metrics, **equally weighted**, using z-score normalization:

| Metric | What It Rewards |
|--------|----------------|
| **Distance per hour** (km/h) | Covering ground efficiently -- good route planning, solid glide, minimal scratching |
| **Distance per flight** (km) | Going far when you go -- committing to real XC, not bailing at the first headwind |
| **Qualifying flight count** | Showing up -- more qualifying flights means more consistent XC commitment |

Your composite score is the average of the three z-scores:

```
Efficiency Score = (z_distance_per_hour + z_distance_per_flight + z_flight_count) / 3
```

If z-scores make your eyes glaze over, check out the [Z-Score Pilot Guide](/doc/z-score-pilot-guide) for the full rundown. But here's the quick version:

### The Z-Score Cheat Sheet

| Score | Color | What It Means | Pilot Translation |
|-------|-------|--------------|-------------------|
| +2.0 or higher | Green | Way above community average | You're not just flying, you're *traveling* |
| +1.0 to +2.0 | Green | Solidly above average | Efficient pilot, good decision-making |
| -1.0 to +1.0 | Neutral | Around the community average | Normal, healthy, nothing wrong here |
| -1.0 to -2.0 | Red | Below average | Room to improve on XC efficiency |
| -2.0 or lower | Red | Well below average | Maybe spending a lot of time ridge soaring? |

All three metrics carry **equal weight**. You can't game the system by being fast but short, or by flying far once a year. You need to go far, go fast, and keep showing up.

### Qualifying Criteria

Not everyone makes it onto the efficiency board. This isn't gatekeeping -- it's statistics:

| Requirement | Reason |
|-------------|--------|
| XC distance >= 10 km | Same as Activity -- real XC flights only |
| Flight duration > 5 minutes | If your flight was shorter than a coffee break, it doesn't count |
| Non-powered flights only | Throttles are cheating (in this context) |
| **5+ qualifying flights** | Avoids one-hit wonders and statistical noise |
| 2+ qualifying pilots in community | Need at least two data points to compute z-scores |

### The Breakdown on Hover

Hover (or tap on mobile) over any row to see the per-metric z-score breakdown. This tells you *where* your efficiency comes from:

- High km/h but low km/flight? You're fast but flying short routes.
- Low km/h but high km/flight? You're covering distance but taking your sweet time doing it.
- High flight count but low distances? You're dedicated but not pushing XC yet.
- All three high? You're the pilot other pilots complain about in the WhatsApp group.

---

## How to Read Z-Scores (The 30-Second Version)

A z-score tells you how far you are from the community average, measured in standard deviations.

- **Score of 0** = You ARE the average
- **Score of +1.5** = You're 1.5 standard deviations above average (top ~7% territory)
- **Score of -0.5** = Slightly below average (totally normal, roughly 30% of pilots are here)
- **Score of +2.5** = Statistical outlier -- you're doing something right (or everyone else is doing something wrong)

Z-scores are **relative**. If a bunch of XC demons join the community tomorrow, everyone's scores shift. Your flying didn't change; the measuring stick did.

Want the deep dive with worked examples and code? Read the [full Z-Score Pilot Guide](/doc/z-score-pilot-guide).

---

## FAQ / Gotchas

### "Why am I not on the Efficiency leaderboard?"

You need **5 or more qualifying flights** (10+ km XC, non-powered, over 5 minutes). If you've got 4 qualifying flights and 47 sled rides, you're still short. Go fly one more real XC and you're in.

### "I fly ALL the time but my efficiency score is low."

That's by design. The efficiency board doesn't care how *often* you fly -- that's what the Activity board is for. Efficiency measures how far and how fast you go *per flight*. If you're logging tons of short local flights, your Activity rank climbs while your efficiency score stays meh.

### "My score is negative. Am I a bad pilot?"

No. A negative score means you're **below the current community average** on those two metrics. It's relative. If the community is full of XC competition pilots, even a solid recreational pilot will show negative. It says nothing about your safety, your skill in turbulence, your landing accuracy, or your ability to pick a pub after flying.

### "Why the 10 km minimum?"

Because we want to measure cross-country flying, not parking-lot thermaling. The 10 km cutoff filters out sled rides, local soaring sessions, and those flights where you technically went "cross-country" but just drifted downwind to the nearest field. If you didn't cover real distance, it's not XC -- it's just flying, and there's nothing wrong with that, but it belongs on a different scoreboard.

### "Why is my name shortened?"

Privacy. All pilot names display as **FirstName L.** (first name + last initial) on the leaderboards. Your full name stays in your profile, but the public boards keep it respectful.

### "Can I appear on both leaderboards?"

Absolutely. Most active pilots will. You might rank 3rd on Activity and 15th on Efficiency, or vice versa. The two boards measure completely different things, and excelling at one doesn't guarantee the other.

---

## The Bottom Line (TL;DR)

- **Activity** = total XC score from public flights. Fly more, rank higher. Simple.
- **Efficiency** = how far, how fast, and how often you fly XC, normalized across the community. Fly smarter, rank higher.
- Both use a **10 km XC minimum** and exclude powered flights.
- Efficiency requires **5+ qualifying flights** and uses **z-score normalization**.
- Positive efficiency score (green) = above average. Negative (red) = below. Neither is a judgment on your character.
- Hover over a row to see the per-metric breakdown.

Now stop reading about leaderboards and go log a flight that moves you up one.

---

*"There are two types of pilots: those who check the leaderboard before flying, and liars."*
*- Ancient We-Fly proverb*
