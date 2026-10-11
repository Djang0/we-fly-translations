---
title: How Thermal Detection Works
description: The rules We-Fly uses to decide where a thermal starts, where it ends, and which climbs make the list
category: Thermal Analysis
order: 2
---

*Or: how the analysis decides that all that circling was actually a thermal*

Every thermal you see in the **Thermals** tab of a flight was found by the same detector, using the same thresholds, for every pilot. There are no sliders to tune and nothing to reset: the rules are fixed so that your numbers mean the same thing as your mate's numbers, flight after flight.

This page explains those rules, so that when the analysis ignores a climb you are sure you worked (or splits one thermal into two), you know why.

---

## The short version

1. The detector looks at a short sliding window of your track and asks four questions: are you going up, are you turning, is the turn steady, and did you gain height?
2. It blends the answers into one **thermal score** between 0 and 1.
3. A small state machine with built-in hesitation turns that score into "gliding" and "thermalling", so a single burble or one lap of sink does not flip the result.
4. Every candidate climb is then trimmed to the circles you actually flew and kept only if it is long enough, gains height and contains at least two complete turns.

The rest of this page is the detail behind each step.

All thresholds below are the values the engine uses internally, in metric units. Your display units (feet, knots, and so on) change how numbers are shown to you, not where the lines are drawn.

---

## Step 1: Four signals from a sliding window

For each GPS fix, the detector looks back over the previous ten fixes. With a typical logger recording one fix per second, that is about ten seconds of flight, roughly a quarter to a half of a circle.

From that window it reads four signals, each squeezed onto a 0 to 1 scale:

| Signal | What it measures | Full marks at | Weight |
|---|---|---|---|
| Vario | Average vertical speed over the window | 3 m/s | 45% |
| Circling consistency | How steady your turn rate is | perfectly steady turning | 25% |
| Turn rate | How fast your heading is changing | 30°/s | 20% |
| Height gain | Net altitude gained across the window | 50 m | 10% |

Vario carries the most weight because it is the most direct proof of lift. Circling consistency comes next because it separates an organised thermal (smooth, repeatable turns) from random turbulence, where your heading jumps around. Turn rate and height gain confirm the picture.

The weighted sum is the **thermal score**. A pilot gliding straight in still air scores close to zero; a pilot carving steady circles in good lift scores well above 0.5.

---

## Step 2: The state machine (why the detector hesitates on purpose)

If the detector simply said "score above X means thermal", the result would flicker on and off every time you hit a bump or crossed the sink side of a broken core. So it moves through four states instead:

| State | How you get in | How you get out |
|---|---|---|
| **Gliding** | Starting state | Score reaches **0.35** → Entering |
| **Entering** | Score reached 0.35 | Score stays at or above 0.35 for **5 seconds** → Thermalling. Drops below 0.35 → back to Gliding (false alarm) |
| **Thermalling** | Confirmed thermal | Score drops below **0.20** → Leaving |
| **Leaving** | Score fell below 0.20 | Stays below 0.20 for **3 seconds** → Gliding. Climbs back to 0.35 or more → Thermalling again |

Two details matter here:

- **The way in is stricter than the way out.** You need 0.35 to start a thermal but only have to stay above 0.20 to keep it. This gap (called hysteresis) is what stops one ragged thermal from being chopped into five.
- **In between, the detector waits.** If the score hovers between 0.20 and 0.35 while you are leaving, it neither ends the thermal nor restarts it until the picture is clear.

### Safety nets for long climbs

A long thermal builds up a lot of height, and that banked height can hide the moment the lift actually stopped. Two extra rules catch this:

- **Recent trend check.** While thermalling, if the last 60 seconds show a net loss of height, the thermal is closed straight away, however good it was earlier.
- **Average climb check.** After the first minute, the average climb since the thermal started must stay above 0.2 m/s. The bar rises to 0.3 m/s after three minutes and 0.4 m/s after five. Fall below it and the thermal is closed.
- **Hard descent break.** Once you are leaving, losing 30 m more ends the thermal immediately, even if a few search turns briefly push the score back up.

These rules are why two real climbs joined by a short search glide show up as two thermals, not one.

---

## Step 3: Trim, then keep or discard

When a thermal closes, the detector cleans it up before deciding whether it counts.

**Trimming.** The state machine opens a thermal a few seconds after you start turning and closes it a few seconds after you leave. Those edges are mostly search glide, so the thermal is trimmed to run from the start of your first complete 360° turn to the end of your last one. A complete turn needs at least eight GPS fixes, so a noisy wiggle does not qualify.

**Keep or discard.** After trimming, a thermal is kept only if:

- it **gained height** overall,
- it lasted at least **15 seconds**, and
- it contains at least **two complete turns**.

Anything else is treated as a pass through lift or a search turn, not a thermal. You will still see that time in the **Phases** tab: circling that did not make the cut shows up as **Search**, and the rest as **Glide** or **Float**.

### Towed and powered launches

A tow, winch or paramotor climb-out is strong and steady, which is exactly what scores well, but it is not a thermal. When a flight's launch type is **Towed** or **Powered**, detection starts only at your first sustained circling (a smoothed turn rate of at least 8°/s held for eight consecutive fixes). Everything before that is treated as the launch climb.

If the launch type on a flight is wrong, fix it with **Change launch type** in the flight's actions menu. The flight is re-analysed with the new setting.

---

## Step 4: What gets measured on each thermal

Once a thermal is kept, the analysis measures it. These are the numbers you see in the thermal details panel:

- **Climb.** Gain, average, maximum and minimum climb. Maximum and minimum are smoothed over 5 seconds so a single noisy GPS fix cannot set a record; the raw one-fix peaks are shown alongside as "peak".
- **Core.** For each complete turn, the analysis finds the centre of the lift, weighted towards the fixes where you climbed best. Those per-turn centres are combined into the thermal's core position, strength and size.
- **Centering time.** Time from the start of the thermal until you were first within 50 m of the core while climbing at more than 70% of the core's strength.
- **Centering.** How close you orbited to the core. Circling at the core's own radius (or tighter) scores 100%; every extra core radius of distance costs 50%, so orbiting at three times the core radius scores zero. Wind drift is taken out by comparing each turn with its own local centre.
- **Efficiency.** Height gained divided by the horizontal distance between where the thermal started and where it ended, capped at 100%.
- **Turn dynamics.** Direction, number of complete turns, average turn rate, time per circle, circle radius, and an estimated bank angle and airspeed from the turn radius and period.
- **Drift and wind.** Drift distance and an estimate of wind speed and direction from how your circles moved across the ground.

These feed the thermal's **quality score** and its **Recommendations**. The scoring formula has its own page: [Overall Thermal Score Explained](/doc/overall-thermal-score).

---

## FAQ

### Why isn't my favourite climb in the list?

Check these in order:

1. Did you make at least **two complete turns**? A climb you flew straight through, or with a single turn, is not counted.
2. Did it last at least **15 seconds** once trimmed to your circles?
3. Did you actually **gain height** between your first and last complete turn?
4. Was it right after a tow or engine climb? On a **Towed** or **Powered** flight, nothing before your first sustained circling counts.

### Why was one thermal split into two?

Most often the recent trend check or the hard descent break fired: somewhere in the middle you lost height for a minute, or lost 30 m while the score was low. From the track's point of view, you left one thermal and found another.

### Can I change the thresholds?

No. Earlier versions of We-Fly had a settings panel for this; it is gone. Fixed rules mean that thermal counts, climb rates and quality scores can be compared fairly between your own flights and with other pilots.

### Do these rules change my flight statistics?

They define them. Your thermal count, height gained in thermals, average climb and the cockpit's thermalling numbers all come from this detector. Because everyone gets the same rules, the comparisons are like for like.

### Does my logger's recording interval matter?

Somewhat. The sliding window and the "complete turn" test count GPS fixes. Loggers recording every second give the cleanest result. A logger recording every few seconds sees fewer fixes per circle, so short or tight thermals are easier to miss.

---

## Further reading

- [Advanced Thermal Analysis](/doc/advanced-thermal-analysis): a tour of the **Thermals** tab
- [Overall Thermal Score Explained](/doc/overall-thermal-score): how each thermal's score is built
