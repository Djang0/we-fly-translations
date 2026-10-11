---
title: Glide polar pilot's guide
description: Reading the glide-phase performance chart (and what it can't tell you)
category: Your Flights
order: 5
---

*Or: How to look at a curvy blue line and figure out whether your wing or the atmosphere did the heavy lifting.*

## What the Hell is This Chart Anyway?

You've opened the **Vector vario** tab, scrolled past the time-series, and now you're staring at a moody blue blob with a couple of lines wandering through it. Welcome to the **Glide-phase performance** chart: we-fly's attempt to show you what your wing actually did at each speed during the glide bits of your flight.

**The Short Version:** It's a plot of your **vario (sink rate) vs your true airspeed (TAS)**, restricted to moments you were actually gliding. The shape of the lines is the closest thing we can give you to "your wing's polar on this specific day, in this specific air, with you in the harness."

**The Honest Version:** It is *not* your wing's manufacturer polar. It can't be. We don't know your harness drag, we don't know your all-up weight to the gram, and we definitely don't know what the atmosphere did between you and the ground. What we *do* know is what your logger recorded, and we report that, faithfully, with all the spread and uncertainty intact.

**What pilots actually want to know:**
- "What's my best glide on this wing?"
- "At what speed do I sink the slowest?"
- "How much of my 'glide' was actually free lift from the atmosphere?"
- "Is my wing matching its spec sheet, or did the marketing department oversell?"

This chart can answer the first three reasonably well. The fourth one needs a few more flights and a healthy dose of skepticism (we'll get there).

---

## Why Should I Care?

If you fly XC, glide performance is *the* thing that turns good thermal days into long flights. Sink less, glide further, get to the next cloud before your buddies. The chart gives you:

1. **A reality check on your wing**: Compare what you observed against the published polar. If the gap is huge, something's off (wing, weight, harness, or atmosphere).
2. **A speed-to-fly hint**: See where the dashed line bottoms out (min sink) and where it's tangent to the steepest glide-ratio line (best L/D).
3. **An honest read of the atmosphere**: The gap between "what I did" and "what my wing alone would do" is basically a thermometer for how lifty the air was.
4. **A debrief tool**: After a flight, did you feel like you were sinking out? The chart will tell you whether the wing was actually working hard or the air was just punishing you.

---

## Anatomy of the Chart

Before reading meaning into it, let's name the parts. Picture a chart with TAS along the bottom (24-53 km/h on a typical XC flight) and vario on the side (top around +0.5 m/s, bottom often down to -4 m/s).

### The X-axis: True Airspeed (km/h)
TAS = how fast you're moving through the air mass (not over the ground, that's GPS speed). Your sensors measure it directly via a pitot tube on the Vector Vario.

**Why it stops where it stops:** The chart only shows TAS bins with **at least 20 glide-phase samples**. If you only spent 5 seconds at full bar, that bin gets dropped. The chart deliberately ends where the data ends: no extrapolation, no invented curves over empty space.

### The Y-axis: Vario (m/s)
Zero is level flight. Negative is sinking (where you spend most glides). Positive is climbing, which yes, also happens during "glide" phases because thermals are sneaky.

### The Shaded Blue Band: 10th-90th Percentile
At each 1 km/h TAS bucket, this is the spread of vario values you recorded.

- **Wide band** = the atmosphere was all over the place (some sinkers, some lifters at the same TAS)
- **Narrow band** = consistent conditions, a more reliable read on your wing

### The Solid Blue Line: Median Vario
The middle of the data at each TAS. This is **what you actually did, on average**, when gliding at that speed.

**Sneaky truth:** On a good XC day this line looks suspiciously flattering, maybe -1 m/s at 40 km/h, giving you a glide ratio around 11:1. That's not your wing. That's your wing **plus all the free lift you flew through**. More on this in a moment.

### The Dashed Darker-Blue Line: Clean-Air Median
This is the median vario among the **coolest-netto quartile** of each TAS bin: the 25% of samples where the atmosphere was sinking the most (or lifting the least). It's our best empirical guess at "what the wing was doing when the air wasn't helping you."

**Same flight, very different story:** at 40 km/h this line might sit at -3 m/s, giving a glide ratio closer to 3.7:1. Steep. Honest. Closer to what a manufacturer would print on the spec sheet.

### The Scatter Cells (Faint, Behind Everything)
Each (TAS, vario) cell is coloured by **mean netto** (vario minus assumed wing sink):

- **Blue cells**: you were flying through sinking air
- **Peach/orange cells**: you were flying through lifting air
- **Bubble size**: how many samples landed in that cell

It's basically a heat map of how the atmosphere treated you at every speed. Pretty, and informative.

### The Glide-Ratio Isolines (Diagonal Grey Dashed Rays)
These are rays from the origin (0,0) at constant glide ratios, drawn at **3:1, 5:1, 7:1, 9:1, 12:1, 15:1, 20:1** (only the ones that fit inside the visible chart).

Because the chart starts at TAS=24 (not 0), the origin lives off-screen to the lower-left, and the isolines appear as dashed diagonals climbing from lower-left to upper-right.

**How to read them:**
- Where the **dashed clean-air line crosses an isoline** → that's the TAS at which the wing achieves that glide ratio in non-lifting air.
- Where an isoline is **tangent** to the dashed polar (touching without crossing) → that's your **best L/D on this flight**.

Quick example: if the dashed polar crosses the 5:1 ray at TAS=42 km/h, then at 42 km/h in cool air you'd have glided 5 km for every 1 km of altitude lost. If the 9:1 ray just barely kisses the dashed curve at TAS=32 km/h, that's your tangent point, your best glide of the day, at that speed.

### The Y=0 Reference Line (Dashed, Horizontal)
The boundary between sinking (below) and climbing (above). Above this line, the atmosphere was contributing more lift than the wing was generating sink. Useful for spotting how much of your "glides" were actually thermal-tinged.

### The Two Metric Cards Below the Chart

**Best observed sink (median):** The TAS bucket where the median vario was least negative, i.e., where you sank the slowest on average. Comes with sample count, the 10-90 spread, and the clean-air proxy value at the same TAS.

**Best observed glide ratio (median):** The TAS bucket with the highest glide ratio (TAS in m/s divided by absolute median vario). Same supporting stats.

---

## How to Actually Read It

Here's where it gets fun. There are two parallel readings, both valid, both telling you different things.

### Reading 1: "What did I achieve?"

Look at the **solid blue line**. This is your real performance, the wing plus whatever the atmosphere gifted you. On a typical XC flight:

- Median vario at 40 km/h: maybe **-1 m/s**
- Implied glide ratio: ~**11:1**

Looks great, doesn't it? That's because lots of your "glide" samples were taken in rising air (in-glide thermal flickers, ridge lift, convergence zones, that mysterious 0.5 m/s climb that lasted 90 seconds and saved your bacon). It's not lying. It's just reporting what happened. You did get an 11:1 average glide that day, because the air helped.

This is the line to watch when you're asking **"how am I doing on this flight?"**.

### Reading 2: "What does my wing alone do?"

Look at the **dashed line**. Same flight, same data, but only the coolest-netto samples, the ones where the atmosphere was the *least* generous. On that same XC flight:

- Clean-air median vario at 40 km/h: maybe **-3 m/s**
- Implied glide ratio: ~**3.7:1**

That's a lot steeper. Closer to a manufacturer's published polar (though not identical, see the limits section). This is the line to look at when you're asking **"how is my wing actually performing?"**.

### Reading 3 (the bonus one): "How lifty was it?"

Take the gap between the solid line and the dashed line at any given TAS. That gap is roughly **how much free lift the atmosphere handed you on average** at that speed.

- **Big gap** (solid line is way above dashed): you were riding lift through most of your "glides." That's often a *good* thing in XC: efficient cloud-streets, lifty lines, convergence chasing.
- **Small gap** (lines hug each other): you were genuinely just gliding through neutral or sinking air. Honest, possibly grinding, but at least you know.

This is the "atmospheric thermometer" reading. It tells you less about your wing and more about the conditions you flew in.

---

## Common Pilot Questions

### "Where's my min sink?"

Look at the dashed line and find its highest point (least negative vario). The metric card below the chart calls this out explicitly with TAS and sample count.

**Caveat:** If the chart starts at 24 km/h but your wing's true min-sink speed is at 22 km/h, the reported min sink is just *the slowest speed you actually flew*, not the wing's real peak. The chart can't read what you didn't record.

### "Where's my best L/D?"

Find the glide-ratio isoline that's **tangent** to the dashed line, the highest-ratio ray that still touches the curve. The TAS at the tangent point is your best-glide speed in clean air.

You'll usually find best L/D somewhere between min-sink TAS and trim speed. Faster than min sink (because faster = more horizontal distance per second), slower than trim (because at trim you're sinking faster than the L/D sweet spot).

### "Is this my wing's published polar?"

**No, and we should be very clear about this.** It's the empirical performance of *you + your wing + your harness + this atmosphere, on this flight*. The dashed line is the closest empirical proxy we can compute, but it's not the same thing. To compare against the spec sheet, look up your wing's polar separately (manufacturer page, DHV test report, paragliding forum threads, see the limits section).

### "Why does my chart end at 53 km/h when I know I pushed to 60?"

Because you probably only spent a few seconds there. Bins with fewer than 20 glide-phase samples get dropped to avoid statistical garbage. If you want the chart to extend further, fly longer at speed (or fly more flights, though right now this chart is single-flight only).

### "Why is the dashed line missing in some bins?"

The clean-air estimate needs **at least 4 netto-bearing samples** in a bucket to compute. Sparse bins skip it. Look for the dashed line to disappear at the edges of the TAS range.

---

## The Honest Limits (Read This Twice)

This is the part where we don't oversell. The chart is useful. It's also full of subtle traps.

### 1. We Don't Have Your Wing's Published Polar

We-fly doesn't store manufacturer polars per wing. We don't know your wing's aspect ratio in the way the manufacturer measures it, your harness's drag class, your exact all-up weight, or the certified test pilot's measurements. So **we can't draw an "ideal" reference curve** for comparison.

To check your wing against the spec, you have to look it up separately. Most manufacturers publish a polar (or close to it) in their tech notes; DHV test reports include them; forum threads sometimes dig deep. The dashed line on the chart is your **flight-based estimate**, not the manufacturer's truth.

### 2. Lift-During-Glide Bias

During glide phases, pilots routinely fly through rising air: in-glide thermal flickers, ridge lift on the windward side of a spur, convergence lines, the occasional lucky cloud-street. Those samples have *higher vario than the wing alone would produce*.

The **median line** is straight-up inflated by this. The **dashed clean-air line** tries to compensate by picking only the coolest-netto samples, but it isn't perfect: even the "cool" quartile might still include weak lift you couldn't see.

**Takeaway:** Even the dashed line is probably a little flattering compared to true still-air performance.

### 3. Netto Isn't a Magic Ground Truth

The Vector Vario computes netto as `vario - configured_wing_polar(TAS)`. So the netto values used to pick the "cool-netto quartile" are themselves derived from **whatever polar your VV was configured with**.

If that configured polar is way off (wrong wing in the settings, wrong weight, factory defaults you never changed), the cool-air subset will be skewed. Our "clean-air proxy" is a *better* polar estimate than the raw median, but it is **not an independent measurement**. It depends on the polar already loaded into your vario.

Translation: the chart is internally consistent but not independently calibrated. Garbage in, slightly-better-but-still-not-perfect garbage out.

### 4. Min-Sink TAS May Be Artifactual

The "Best observed sink" metric card simply reports the TAS bucket with the least-negative median vario. **If you never flew slowly enough** to reach your wing's true min-sink speed, the reported value is just the slowest TAS you actually flew.

Example: wing's true min sink is at 22 km/h, but your slowest sustained glide on this flight was 24 km/h. The chart will report 24 km/h as "best observed sink," even though the wing would have done better slower. The chart **does not extrapolate** below your slowest glide. This is by design: we'd rather under-report than invent.

### 5. The Chart Ends Where Data Ends

TAS bins with fewer than 20 glide-phase samples are dropped. A brief 10-second push to full bar won't generate enough samples to publish a percentile, so the chart simply doesn't extend there.

**Why this is a feature, not a bug:** we don't want to draw a curve over speeds you barely flew. The visible end of the chart is *the literal range over which we have statistically meaningful data*. If you want a richer chart, fly longer in the speed range you care about.

### 6. Glide-Phase Detection Has Fuzzy Edges

The "glide phase" comes from we-fly's phase analyser, which uses heading stability, low vario excursions, and a few other heuristics. It works well most of the time, but edge cases creep in:

- A pilot in a long S-turn search pattern between thermals might be classified as "glide" even though they were arguably thermalling.
- A weak, drifty thermal where you're barely circling might get tagged as glide.
- The transition seconds at the start and end of a glide might or might not be included.

These edge cases bias the chart subtly. Not a lot, but they're there.

### 7. One Flight ≠ Your Wing

This chart shows **one specific flight**. Your weight that day, your harness setup, your pilot input style (active vs passive), the air mass, the convection regime. They all factor in. To truly characterise your wing, you'd need many flights aggregated.

We-fly doesn't aggregate across flights here (yet). So treat the chart as a **single observation**, not a wing-level conclusion.

---

## So… Is My Wing Any Good?

This is the question everyone really wants answered. Here's the honest framework.

### Step 1: Look at the dashed line on multiple flights

One flight is noise. Three flights with similar wing-loading conditions (same weight, same harness, same wing) start to be signal. If the dashed line consistently sits 1-1.5 m/s below the manufacturer's published polar at the same TAS, that's a real performance gap worth investigating.

### Step 2: Compare to the spec sheet

Pull up your wing's published polar. Manufacturers usually publish:
- Min sink (m/s) at some TAS (km/h)
- Trim speed and trim sink rate
- Sometimes a sketch of the full polar

Plot those points mentally on the chart. If your dashed line is meaningfully steeper than the spec, candidates for the gap include:
- Pilot weight too high or too low (off-spec wing loading)
- Harness drag (a high-drag pod vs the test pilot's slick race harness)
- Lines that need a refresh (porosity, line stretch, age)
- A wing that has a few hundred hours and a slight performance dip
- Sub-optimal trim settings or risers
- You were in subtly sinking air across the whole flight (it happens)

### Step 3: Watch the trend

If you log dozens of flights and the dashed line is stable, that's your wing's real-world performance envelope on you. Compare to next year's flights to see if the wing is ageing, or to a friend's identical setup to see if it's the wing or the pilot.

### The bottom line

The chart is a **debrief tool**, not a verdict. Use it to ask better questions about your flying, your wing, and the days you fly. Don't use it to settle bar arguments: the data has too many caveats for that.

---

## Quick Cheat Sheet

| Question | Where to Look |
|---|---|
| What did I actually fly today? | Solid blue line (median) |
| What does my wing do without help? | Dashed darker line (cool-netto quartile median) |
| How variable were conditions? | Width of the blue band |
| Was the air lifty or sinky at this speed? | Cell colours (peach = lift, blue = sink) |
| What's my best glide ratio? | Isoline tangent to the dashed line |
| What's my min sink speed? | Highest point of the dashed line (or metric card) |
| How much "free lift" did I get on average? | Vertical gap between solid and dashed lines |

---

## Final Thought

The glide polar chart doesn't lie, but it doesn't tell the whole truth either. It tells you what your logger recorded, with all the spread and uncertainty intact. That's actually more useful than a confident point estimate: it forces you to ask questions instead of swallowing a number.

So next time someone in the club brags about their "11:1 glide all flight", pull up your chart, point at the dashed line at the same TAS, and ask gently: "in cool air, or with thermals doing half the work?"

The atmosphere is generous. Your wing is honest. The chart shows you both.

Fly long, glide flat, and may your dashed line always be shallower than you feared.
