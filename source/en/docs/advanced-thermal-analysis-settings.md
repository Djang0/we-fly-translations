---
title: Advanced Thermal Analysis Settings
description: Configure the parameters used to detect and score your thermals
category: Thermal Analysis
order: 2
---

*Or: How to Teach the Algorithm What a Real Thermal Looks Like*

So you've uploaded your flight, opened the Advanced Thermal Analysis, and now you're staring at the Settings tab wondering what all these sliders and numbers actually do. Good news: you're in the right place. Bad news: we're about to get nerdy (but in a fun way, promise).

Think of these settings as teaching the computer what *you* consider a "thermal worth logging." Because let's be honest, that weak, scrapy bubble you worked for 45 seconds because you were getting low? The algorithm might not count it. But that glorious 5 m/s elevator that took you from "oh crap" to "cloud base baby"? Yeah, that's getting logged.

---

## The TL;DR Version

**99% of pilots should just use the default settings.** They're tuned for typical paragliding thermals and work great for most flights. Only mess with these if:

1. You fly in weird conditions (super weak thermals, crazy wind, flying microlift near terrain)
2. You're a data nerd who wants to understand *exactly* how the analysis works
3. You had a beer and decided it would be fun to see what happens when you set everything to maximum

Still here? Alright, let's dig in.

---

## Detection Thresholds

*"When does circling around become 'I'm in a thermal'?"*

### Min Thermal Score (Default: 0.35)

**What it does:** The algorithm combines multiple signals (lift, turn rate, GPS movement) into a single "thermal confidence score" from 0 to 1. This setting says "don't call it a thermal unless confidence hits 35%."

**In pilot terms:** How picky are you about what counts as a thermal?

- **Lower (0.2-0.3):** "I'll work anything that goes up." Catches weak bubbles, but might log some false positives when you're just turning in ridge lift or scratching terrain.
- **Default (0.35):** "Show me real thermals, not garbage." Balanced for typical XC flying.
- **Higher (0.4-0.5):** "Only log the good stuff." Misses weak thermals but keeps your stats clean.

**Real talk:** If you fly in the Alps and frequently work 0.5 m/s thermals near terrain, lower this. If you fly in summer flatlands with 4 m/s cores, you can bump it up.

---

### Exit Thermal Score (Default: 0.2)

**What it does:** Once you're "in" a thermal, confidence has to drop below 20% before the algorithm starts thinking you've left.

**In pilot terms:** How long do you keep searching before admitting "yep, I lost it"?

- **Lower (0.1-0.15):** "I'm definitely out." Exits thermals quickly. Good if you fly clean, consistent thermals.
- **Default (0.2):** "Okay, this isn't working anymore." Tolerates brief sink or wandering around the edges.
- **Higher (0.25-0.3):** "Maybe it's still here somewhere..." Takes longer to exit. Useful for broken, choppy thermals where you're constantly in/out.

**Why it's lower than entry:** Hysteresis! Same reason your thermostat doesn't turn the heat on at 20°C and off at 19.9°C. Prevents the algorithm from logging 47 separate "thermals" when you're just working one broken bubble.

---

### Min Vario (Default: 0.3 m/s)

**What it does:** Ignore any circling where your vario shows less than this.

**In pilot terms:** "If it's not at least this good, I'm not calling it a thermal."

- **Lower (0.1-0.2):** Logs weak lift, scratching, maybe even dynamic ridge lift if you're turning. Great for "survival mode" flights.
- **Default (0.3):** Standard XC thermal threshold. If it's not averaging 0.3 m/s, you're probably not staying up long-term.
- **Higher (0.5-1.0):** Only logs thermals where you're actually gaining altitude at a decent rate.

**Fun fact:** The defaults are tuned for paragliding. If you're flying a hang glider with a worse sink rate, you might want to bump this up a bit.

---

### Min Turn Rate (Default: 10 deg/s)

**What it does:** How fast you need to be turning for the algorithm to think "yeah, they're circling."

**In pilot terms:** How tight are your circles?

- **Lower (5-8 deg/s):** Wide, lazy circles. Good for tandem, early students, or if you fly a high-performance wing and like gentle bank angles.
- **Default (10 deg/s):** Normal thermaling. One complete 360° every 36 seconds.
- **Higher (15-20 deg/s):** Tight, aggressive circles. One 360° every 18-24 seconds. Might miss your thermaling if you circle wide.

**Real talk:** Most pilots thermal at 10-15 deg/s naturally. If the algorithm is missing obvious thermals, maybe you circle wider than average. Drop this to 8. If it's logging random "thermals" when you're just S-turning in ridge lift, bump it to 12-15.

---

## Hysteresis Parameters

*"Stop being so twitchy, algorithm"*

These prevent the detector from flapping on/off every time you hit a burble or spend 2 seconds in sink. Think of them as "confirmation time."

### Entering Duration (Default: 5 seconds)

**What it does:** You need to meet thermal conditions for this many seconds straight before it officially counts as "thermal entry."

**In pilot terms:** How many turns before you commit and go "yeah, this is a thermal"?

- **Lower (2-3s):** "I'm in!" after half a turn. Logs thermals fast, but might catch false positives.
- **Default (5s):** About 1.5 circles to confirm. Good balance.
- **Higher (8-10s):** "Let me make sure this is real first." Takes 2-3 circles to log. Misses short bubbles but very clean results.

**When to adjust:** Lower if you fly in super broken conditions where thermals are small and you need to catch everything. Higher if you're getting false thermals logged (common in windy/turbulent conditions).

---

### Leaving Duration (Default: 3 seconds)

**What it does:** You need to *not* meet thermal conditions for this long before it counts as "thermal exit."

**In pilot terms:** How long you keep searching after the lift dies before you push out.

- **Lower (1-2s):** "Nope, I'm out." Exits fast. Good for clean, consistent thermals.
- **Default (3s):** "Hold on, maybe it's just weak here..." One more turn to check.
- **Higher (5-8s):** "I'm gonna work this a bit more..." Multiple turns before giving up. Good for complex, multi-core thermals.

**Pro tip:** In strong, punchy summer thermals, you can lower this. In spring/fall conditions with weak, broken lift, bump it up.

---

### Min Thermal Duration (Default: 15 seconds)

**What it does:** If you're only circling for less than this, it doesn't count as a "thermal" in the stats.

**In pilot terms:** "Was that a thermal or just a bump?"

- **Lower (8-10s):** Counts short bubbles. Good if you're deliberately jumping bubble to bubble.
- **Default (15s):** About 4 circles minimum. Filters out "I took two turns and left" moments.
- **Higher (20-30s):** Only logs thermals where you actually stayed and worked it. Cleaner stats but might miss legitimate short climbs.

**When to use:** If you're flying competition and working every little scrap, lower it. If you're doing casual XC and only want "real" thermals in your stats, bump it up.

---

## Circling Detection

*"How to tell the difference between thermaling and just turning"*

### Min Circling Window (Default: 10 seconds)

**What it does:** The algorithm looks at this many seconds of flight at a time to calculate if you're circling.

**In pilot terms:** How much flight history to analyze for turn consistency.

- **Lower (5-8s):** Fast response. Detects thermals quickly but more sensitive to noise.
- **Default (10s):** About 2.5 circles worth of data. Good balance between speed and accuracy.
- **Higher (15-20s):** Slower response but very accurate. Might take longer to detect thermal entry.

**Real talk:** Most pilots won't need to touch this. It's a technical parameter that affects algorithm smoothness, not really pilot behavior.

---

### Min Turn Count (Default: 1.0)

**What it does:** You need to complete at least this many full 360° circles for it to count as "circling in a thermal."

**In pilot terms:** How many turns before it's officially a thermal?

- **Lower (0.5-0.8):** Half a circle is enough. Catches very short thermal contacts.
- **Default (1.0):** At least one complete 360°. Filters out "I turned twice and left."
- **Higher (2-3):** Multiple complete circles required. Very conservative, misses quick climbs.

**When to adjust:** Combine with Min Thermal Duration. If you want to log everything, set both low. If you want clean stats, set both high.

---

### Max Core Radius (Default: 80 meters)

**What it does:** When calculating "centering quality," the algorithm measures how far you drift from the thermal core. This sets the maximum radius it considers reasonable.

**In pilot terms:** How big of a circle are we expecting?

- **Lower (50-60m):** Tight cores. Good for summer, boomer thermals. Penalizes wide circling.
- **Default (80m):** Standard for paragliding. Radius of ~50-80m is typical.
- **Higher (100-120m):** Large, spread-out thermals. Flatlands, weak conditions, or if you fly wide circles.

**Fun fact:** This doesn't affect *what* gets logged as a thermal, only the quality score. A thermal is a thermal. This just changes how "good" the algorithm thinks your centering was.

---

## Quality Metrics

*"How good was that thermal, really?"*

### Ideal Drift Ratio (Default: 0.3)

**What it does:** Ratio of drift distance to altitude gain. Default 0.3 means ideally you drift 30m sideways for every 100m you climb.

**In pilot terms:** What counts as "well-centered" vs "drifting off-core"?

- **Lower (0.1-0.2):** Very strict. "You should barely drift at all." Good for calm conditions, strong thermals.
- **Default (0.3):** Realistic for average conditions. Some drift is normal.
- **Higher (0.4-0.6):** Lenient. "It's okay to drift, I'm still climbing." Good for windy days or weak, drifting thermals.

**Why this matters:** Affects your thermal quality scores and recommendations. If you fly in strong wind and constantly drift 50m while climbing, bump this up so you don't get penalized.

---

### Centering Window (Default: 20 seconds)

**What it does:** The algorithm checks your first X seconds in the thermal to see how quickly you found the core.

**In pilot terms:** "How fast did you find the best lift?"

- **Lower (10-15s):** "Did you nail it immediately?" Very strict about initial centering.
- **Default (20s):** About 5-6 circles to find the core. Realistic for most pilots.
- **Higher (30-40s):** "Take your time, we all struggle sometimes." More forgiving if you wander a bit at first.

**Real talk:** This affects the "Great core entry" / "Work on centering" feedback. If you're getting "work on centering" a lot but you feel like you *are* centering well, your flying style might just be more exploratory in the first few turns. Bump this up.

---

## Practical Scenarios: When to Adjust Settings

### "The algorithm isn't logging my weak thermals"

You're flying in marginal conditions, working 0.3-0.8 m/s lift, but the analysis shows no thermals.

**Fix:**
- Lower **Min Vario** to 0.2
- Lower **Min Thermal Score** to 0.25
- Lower **Min Thermal Duration** to 10s

---

### "It's logging random 'thermals' that weren't thermals"

You see thermals logged during your glide, or when you were just turning near terrain.

**Fix:**
- Raise **Min Thermal Score** to 0.4
- Raise **Min Turn Rate** to 12-15 deg/s
- Raise **Min Thermal Duration** to 20s

---

### "I'm getting 'work on centering' but I center fine!"

The algorithm thinks you drift too much or take too long to find the core.

**Fix:**
- Raise **Ideal Drift Ratio** to 0.4-0.5 (especially for windy days)
- Raise **Centering Window** to 30s (gives you more time to explore)

---

### "Thermals keep starting/stopping in the analysis"

You're working one thermal but it's logging it as 3 separate thermals.

**Fix:**
- Raise **Leaving Duration** to 5-8s (takes longer to exit)
- Lower **Exit Thermal Score** to 0.15 (easier to stay "in")

---

### "I fly tandems and it's not detecting my thermals"

Tandem = wider circles, slower turns, more conservative flying.

**Fix:**
- Lower **Min Turn Rate** to 6-8 deg/s
- Raise **Max Core Radius** to 100m
- Raise **Centering Window** to 30s

---

## The "Just Tell Me What to Do" Guide

### Most pilots (XC, recreational)
**Use the defaults.** They're tuned for you. Seriously.

### Competition pilots
- Lower **Min Thermal Duration** to 10s (every climb counts)
- Lower **Entering Duration** to 3s (fast detection)
- Raise **Min Vario** to 0.5 (only log good thermals)

### Coastal/terrain flying
- Lower **Min Thermal Score** to 0.25 (catch weak lift)
- Raise **Leaving Duration** to 5s (broken thermals)
- Raise **Ideal Drift Ratio** to 0.5 (wind drift)

### Flatland flying (strong summer thermals)
- Raise **Min Vario** to 0.5 m/s (ignore weak lift)
- Lower **Max Core Radius** to 60m (tight cores)
- Raise **Min Turn Rate** to 12 deg/s (tighter circles)

### Alpine flying (weak, broken thermals)
- Lower **Min Vario** to 0.2 m/s
- Lower **Min Thermal Score** to 0.25
- Raise **Leaving Duration** to 8s (don't exit too fast)

---

## FAQ: Questions We've Heard at the Landing Field

### "Why isn't my favorite thermal showing up?"

Check these in order:
1. Was it at least 15s long? (Min Thermal Duration)
2. Was lift at least 0.3 m/s? (Min Vario)
3. Were you actually circling? (Min Turn Rate)
4. Did you complete at least one full 360°? (Min Turn Count)

### "Can I break anything by messing with these?"

Nope! Worst case, you get weird results. Just hit "Reset to Default" and you're back to normal.

### "What happens if I set everything to maximum?"

You'll probably get zero thermals detected. The algorithm will be like "NOTHING IS GOOD ENOUGH" and reject everything. It's like setting your dating standards so high you end up alone. (We've tested this. For science.)

### "What happens if I set everything to minimum?"

Everything becomes a thermal. Your ground handling? Thermal. Your ridge run? 47 thermals. That time you did a wingtip drag? Surprisingly good thermal. Again, we tested it. It was chaos.

### "Do these settings affect my flight stats?"

Yes! Changing what counts as a "thermal" changes your thermal count, total altitude gained in thermals, average climb rate, etc. So if you're comparing stats with a friend, make sure you're using the same settings.

---

## Advanced Nerd Notes

(Feel free to skip this if you just want to fly)

The thermal detection uses a **multi-signal composite score** that combines:
- Vario readings (are you going up?)
- Turn rate (are you circling?)
- GPS track geometry (is your flight path consistent with thermaling?)
- Bearing changes (are you completing turns?)

Each signal is normalized 0-1, then weighted and combined. The **Min Thermal Score** is the threshold for that combined score.

The **hysteresis parameters** (Entering/Leaving Duration) implement a state machine with confirmation delays to prevent oscillation. This is the same principle used in thermostats, brake lights, and basically any system that needs to avoid rapid on/off switching.

The **quality metrics** use circular statistics to calculate drift bearing, thermal core position, and centering efficiency. The math involves dot products, bearing deltas, and some coordinate geometry that would make your high school math teacher proud (or traumatized).

## Final Thoughts

Look, at the end of the day, these settings are just knobs that adjust what the algorithm considers a "thermal." The *real* learning happens when you:

1. Fly the flight
2. Look at the analysis
3. Compare it to what you *felt* in the air
4. Adjust settings if needed
5. Learn from the patterns

The goal isn't to game the system for perfect stats. It's to understand your flying better. Did you actually center well, or did you just get lucky with a strong core? Did you leave thermals too early, or were they genuinely dying?

The algorithm is a tool, not a judge. Use it to improve, not to stress about numbers.

Now get out there and go find some thermals. The real ones. In the air. Where they belong.

*Blue skies and smooth air,*