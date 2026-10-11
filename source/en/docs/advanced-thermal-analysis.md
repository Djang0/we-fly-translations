---
title: Advanced Thermal Analysis
description: Deep-dive into every thermal you worked, centering, climb rate, and efficiency scored flight by flight
category: Thermal Analysis
order: 1
---

Ever wondered if you're actually a thermal genius or just getting lucky? The **Thermals** tab on every flight is your personal debrief partner: it breaks down every climb you worked, circle by circle.

## What Is This Thing?

It's a post-flight analyser that watches every move you made in thermals. It doesn't stop at "you climbed 500 m". It looks at *how* you climbed: whether you were hunting the core like a pro or touring the edges.

When you upload a flight, We-Fly detects every thermal you worked, gives each one a quality score out of 100, and builds a detailed breakdown. Think of it as a coach reviewing your track and vario trace, one climb at a time. Curious how a climb gets recognised in the first place? See [How Thermal Detection Works](/doc/advanced-thermal-analysis-settings).

Open any flight and pick the **Thermals** tab. The number next to the tab name is how many thermals were found.

## The Main View

The tab reads from top to bottom:

1. A summary strip for the whole flight
2. The **Vario vs Circle Radius** chart
3. Filter chips and a timeline to pick a thermal
4. The viewer for the selected thermal: map or 3D view on one side, details on the other
5. The **Climb Rate by Altitude & Time** chart

### Flight Summary Strip

The bird's-eye view of your day:

- **Thermals**: how many climbs made the cut
- **Best**: the highest quality score of the flight, with the thermal number and its quality label
- **Gain**: all the height you gained in thermals
- **Avg climb**: your average climb rate across all thermals
- **Quality**: the average quality score, with the median underneath

### Vario vs Circle Radius

Every complete circle you flew becomes a dot: its radius along the bottom, the climb rate you got from it up the side. The background is split into zones labelled **risky**, **ideal**, **ok** and **tighten**, from very tight circles on the left to wide ones on the right. If most of your best dots sit in the **tighten** zone, you know what to work on next flight.

### Picking a Thermal

Above the timeline sits a row of filter chips, each showing how many thermals it matches:

- **All**: every thermal
- **Best 5**: the five strongest climbs by average climb rate
- **Below median**: thermals with a climb rate below the flight's median
- **Drifty**: thermals where you drifted more than 30 m for every 100 m gained (only climbs of 50 m or more are considered)

Below the chips, the timeline lays every thermal out along the flight's actual clock. Each dot's colour is its quality, and its size is the height gained, so "that big one around half past one" is easy to find. Click a dot to open that thermal in the viewer.

The selected thermal is part of the page address, so you can share a link straight to "Thermal #7".

### The Thermal Viewer

The title bar shows **Thermal #N**, its quality label, the start time, the height gained and the average climb. On the right you switch between **2D Map** and **3D View**.

**On the 2D map:**

- **The selected thermal's track** is drawn as dots coloured by vario: green for strong climb (above 3 m/s), yellow for climb up to 3 m/s, red for sink
- **Entry Point** and **Exit Point** markers show where the climb started and ended
- **The thermal core** of each thermal is a marker with a dashed ring. The selected one is red, the others are faded pink for context. Hover a core to see its strength
- **Current Position** is the light-blue marker that moves during playback

**In the 3D view**, the same climb is drawn as a spiral you can rotate, with a legend for **Strong lift**, **Weak lift**, **Sink**, **Thermal core**, **Leave altitude** and **Current position**.

## Animation Playback

Under the map or 3D view sits the playback bar:

- **Play** / **Pause**: replay the thermal fix by fix
- The circular arrow: back to the first fix
- The previous and next frame arrows: step through the climb one GPS fix at a time
- **Frame** counter: where you are in the thermal (for example 42/156)
- Time, altitude and vario at the current fix
- The target button: **Centre map on this thermal**, handy after you've been panning around

Stepping frame by frame is the best way to spot the exact moment you found the core, or lost it.

## Thermal Details

Next to the viewer (below it on a phone) is your coaching report. At the top, a big quality score with its label, plus two quick reads: **eff** (efficiency) and **ctr** (centering).

Below that, the details are folded into sections. One opens at a time, and each shows a one-line preview while folded, so you can scan the whole story without scrolling.

#### Climb

- **Gain**: total height gained
- **Avg**: average climb rate
- **Max**: best climb, smoothed over 5 seconds (the raw single-fix peak is shown underneath)
- **Min**: weakest moment, usually on entry or when you fell out of the core
- **Variab.**: how much the climb rate varied. Low means a smooth thermal, high means punchy or turbulent

#### Core

- **Strength**: average climb in the core, your sweet spot
- **Ctr time**: how long it took to reach the core after the thermal started. Lower is better
- **Size**: the core's lift radius
- **Mean dist**: how far, on average, you orbited from the core
- **Centering**: how close you stayed to the core, as a percentage. Circling at the core's own radius scores 100%

#### Turn Dynamics

- **Direction**: left or right (most pilots have a favourite side, no judgement)
- **Turns**: number of complete circles
- **Rate**: average turn rate in degrees per second
- **Bank angle**: estimated from your circle size and timing, with the implied airspeed underneath
- **Time per circle** and **Circle radius**: the spread of your circles, as minimum, median and maximum time, and 25th percentile, median and 75th percentile radius

#### Drift & Wind

- **Wind speed**: estimated from how your circles drifted
- **Drift dist.**: how far the thermal carried you while you climbed
- **Direction**: where the wind came from, with a compass. The compass arrow points the way the wind was blowing, and the label reads the "from" direction, like a forecast

#### Time

**Start**, **End** and **Duration** of the climb. Handy for matching against your own notes.

#### Score Breakdown

Shows how the quality score was built: one bar per factor (**Climb**, **Efficiency**, **Centering**, **Consistency** and **Sustained**), its weight, your actual value and the points it added. The **How is this calculated?** link takes you to the full formula.

#### Recommendations

Based on the numbers above, you get specific feedback for this climb, for example:

- Positive notes on a green background: "Great core entry: found the strongest lift in 12 s."
- Suggestions on an amber background: "Slow core entry: … Consider wider initial circles to feel the gradient."

The tips are built from this thermal's own measurements (core size, drift, bank angle, variability), not generic advice. For a summary across the whole flight, look at the **Coaching** panel on the flight's **Summary** tab.

## Climb Rate by Altitude & Time

At the bottom of the tab, every thermal is placed by time of day and altitude, coloured by climb rate. Switch the height reference between **AMSL** and **AGL** (above takeoff). The dashed line is the day's working ceiling; if it splits into two steps, the morning and afternoon ceilings were different. Click any point to jump back up to that thermal in the viewer.

## Quality Scoring Explained

The quality score isn't just "good climb rate = high score". It's a score out of 100 that blends five factors:

1. **Climb**: how strong the lift was at its best
2. **Efficiency**: height gained versus distance drifted
3. **Centering**: how close you stayed to the core
4. **Consistency**: how steady the climb was
5. **Sustained**: whether you actually stayed and circled, rather than passing through

A booming thermal you wandered around in can score lower than a moderate one you worked perfectly. It's about technique, not just luck.

**Quality labels:**

| Score | Label |
|---|---|
| 80 and above | Outstanding |
| 73 to 79 | Excellent |
| 66 to 72 | Good |
| 60 to 65 | Fair |
| Below 60 | Poor |

These bands are calibrated on real flights in We-Fly: a typical thermal lands in the mid-60s. The full formula, with a worked example, is in [Overall Thermal Score Explained](/doc/overall-thermal-score).

## Common Patterns You Might Notice

**High drift, low centering**: you might be entering too wide, or not tightening your circle fast enough when you find lift.

**Good centering time but low efficiency**: the thermal itself might have been weak, or the wind strong. Not always your fault!

**High variability**: could be the conditions (a rowdy day) or an inconsistent bank angle. The recommendations try to tell the two apart by looking at how much your circle radius changed.

**Quick core entry on one thermal, slow on another**: look at your entry technique. Did you come in upwind or downwind? Overshoot the core?

## When to Use This Tool

- **Post-flight debrief**: understand what worked and what didn't
- **Competition prep**: analyse your thermalling technique under pressure
- **Comparing conditions**: see how thermal quality varies with time of day, site or weather
- **Tracking improvement**: look at flights from different months to see your progression
- **Before the next beer**: show your mates that you *did* actually center that monster thermal (proof!)

## Tips for Better Analysis

1. **Clean GPS data helps**: a weak GPS signal means a less accurate analysis, and a logger recording every second gives the best results
2. **Compare similar thermals**: compare technique in similar conditions for meaningful insights
3. **Don't obsess over one flight**: trends over many flights matter more than one perfect thermal
4. **Wind context matters**: a "Fair" score on a windy day can be better flying than "Excellent" in still air

## What This Tool Doesn't Do

- **Predict future thermals**: it's analysis, not forecasting
- **Judge your decisions**: should you have taken that climb at 11 AM or pushed on? Still your call
- **Replace experience**: the tool shows data, but learning to *feel* thermals still takes airtime

## The Bottom Line

This tool won't make you a better pilot overnight, but it shows you *exactly* what you're doing in thermals. Whether you're trying to cut your centering time or just curious why one climb felt different, the **Thermals** tab has your back.

Now go fly, find some thermals, and come back to see if you're as good as you think you are.

---

See also: [How Thermal Detection Works](/doc/advanced-thermal-analysis-settings) | [Overall Thermal Score Explained](/doc/overall-thermal-score)
