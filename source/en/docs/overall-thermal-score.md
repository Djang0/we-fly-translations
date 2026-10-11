---
title: Overall Thermal Score Explained
description: How we calculate thermal quality, with a worked example
category: Thermal Analysis
order: 4
---

Ever see the quality score on a thermal in the **Thermals** tab and wonder if it actually means anything? Good news: it does. It's not just vibes. Let's break down exactly how that number gets calculated so you can understand what separates "Fair" from "Excellent", and what you can do about it.

## The Big Picture

The thermal score (0 to 100) is a weighted combination of five factors. These are the same five rows you see in a thermal's **Score Breakdown**:

| Factor | Weight | What It Measures |
|--------|--------|------------------|
| **Climb** | 30% | How strong was the lift at its best? |
| **Efficiency** | 20% | How direct was your climb? |
| **Centering** | 20% | How well did you stay in the core? |
| **Consistency** | 15% | How stable were the vario readings? |
| **Sustained** | 15% | Did you actually stay and work the thermal? |

Each factor gets normalised to a 0 to 1 scale, multiplied by its weight, then the whole thing gets scaled to 0 to 100. Simple in theory, revealing in practice.

The **Sustained** factor is key: it keeps short visits from scoring high. Grabbing strong lift for a few turns doesn't prove thermalling skill; staying and working the thermal does.

---

## The Formula

Here's the actual calculation:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

The thresholds inside the formula are fixed in m/s and metres, whatever units you display in.

### How Each Component Is Calculated

**1. Climb Score**
```
climbScore = min(1, maxClimb / 5.0)
```
Your best sustained climb in the thermal (the **Max** value in the thermal details, smoothed over 5 seconds so a single noisy GPS fix can't cheat) divided by 5.0 m/s, capped at 1. Only the top tenth of climbs in We-Fly get close to the cap; an average climb scores a bit over half.

**2. Efficiency Score**
```
efficiencyScore = min(1, heightGain / driftDistance)
```
Height gained divided by the horizontal distance between where the thermal started and where it ended. Gaining as much height as you drifted, or more, scores the full 1.0. The more the wind carries you sideways, the lower this gets.

**3. Centering Score**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
A wing can't turn on the spot, so orbiting right at the core's own radius (or tighter) scores a perfect 1.0. Every extra core radius of distance costs half the score: circling at twice the core radius scores 0.5, at three times it scores zero. Wind drift is removed first by comparing each turn with its own local centre.

**4. Consistency Score**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Inverse of your vario variability (the standard deviation of your smoothed climb rate). Smooth thermal = high score. Bouncing between strong lift and sink = low score. Variability of 2 m/s or more = zero consistency contribution.

**5. Sustained Score**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combines duration and turn count to reward actual thermalling work. Full score requires about 90 seconds AND 2 or more complete turns. Every thermal in the list already has at least two complete turns (see [How Thermal Detection Works](/doc/advanced-thermal-analysis-settings)), so in practice this factor mostly penalises short climbs.

---

## Worked Example: Thermal #9

Let's walk through a real calculation using concrete numbers. Say you worked a thermal with these stats:

| Metric | Value |
|--------|-------|
| Max Climb | 3.5 m/s |
| Efficiency | 0.41 (41%) |
| Centering | 0.53 (53%) |
| Variability | 0.92 m/s |
| Duration | 75 seconds |
| Turn Count | 3 turns |

### Step 1: Calculate Each Component Score

**Climb Score:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Your best sustained climb of 3.5 m/s is 70% of the 5.0 m/s benchmark.

**Efficiency Score:**
```
efficiencyScore = 0.41
```
You gained 41% as much height as you drifted sideways. Pretty typical for a drifty thermal.

**Centering Score:**
```
centeringScore = 0.53
```
You orbited a bit under twice the core radius on average. Room for improvement, but not bad.

**Consistency Score:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Your vario variability of 0.92 m/s means the lift was somewhat turbulent, but not crazy.

**Sustained Score:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
You spent 75 seconds and made 3 complete turns: solid thermalling work, just short of the 90-second mark.

### Step 2: Apply the Weights

Now multiply each score by its weight:

| Component | Score | Weight | Contribution |
|-----------|-------|--------|--------------|
| Climb | 0.70 | 0.30 | 0.210 |
| Efficiency | 0.41 | 0.20 | 0.082 |
| Centering | 0.53 | 0.20 | 0.106 |
| Consistency | 0.54 | 0.15 | 0.081 |
| Sustained | 0.833 | 0.15 | 0.125 |
| **Total** | | | **0.604** |

### Step 3: Scale to 0-100

```
qualityScore = round(0.604 * 100) = 60
```

**Result: a score of 60**, just inside "Fair". Tighter circles would lift both efficiency and centering, and that's where the easy points are.

---

## Interpreting Your Score

| Score Range | Label | What It Means |
|-------------|--------|---------------|
| **80 and above** | Outstanding | The best climbs in We-Fly. Strong lift, worked properly. |
| **73 to 79** | Excellent | Better than three thermals out of four. You found the core fast and stayed in it. |
| **66 to 72** | Good | Above the typical thermal. Solid work. |
| **60 to 65** | Fair | Around the middle of the pack. Got the job done, with some performance left on the table. |
| **Below 60** | Poor | Struggled to find or keep the core, a short climb, or conditions that were truly awful. |

The bands are calibrated on real thermals flown by We-Fly pilots: the typical (median) thermal scores about 65, a quarter of thermals score 73 or more, and one in ten reaches 80.

---

## What Each Component Tells You

### Climb Strength (30% weight)

This is the most heavily weighted factor because... well, the whole point is going up. It uses your best *sustained* climb, so it rewards finding the strong part of the thermal, not just hanging on. But don't obsess over it: sometimes a weak thermal you work perfectly is worth more distance than a strong one you keep falling out of.

**Low climb score?**
- The thermal was genuinely weak (not your fault)
- You never found the strongest part of the core (check centering)
- You were late to the party and caught only the top

### Efficiency (20% weight)

Efficiency = height gained / horizontal drift distance, capped at 1.0. A thermal where you gain at least as much height as you drift scores the full 1.0, which takes light wind or a strong climb.

Typical values:
- **0.3 to 0.4**: Normal, some drift
- **0.5 to 0.6**: Very good, tight circles
- **above 0.6**: Excellent, minimal drift

**Low efficiency?**
- Strong wind pushing you sideways
- Wide circles or a shallow bank angle
- Entering downwind and never correcting

### Centering Quality (20% weight)

How close you orbited to the core. Circling at the core's own radius is perfect; the score drops in a straight line as your average distance grows, reaching zero at three times the core radius.

**Low centering?**
- Took a while to find the core
- Kept drifting out and re-centering
- The core moved (bubble thermal) or was very small

### Consistency (15% weight)

Based on the standard deviation of your vario readings. Smooth, steady beep = high score. Vario going nuts = low score.

**Low consistency?**
- Turbulent thermal (not always your fault)
- Kept flying through the core and out the other side
- Mixed lift and sink in the same turn

### Sustained Skill (15% weight)

Combines duration and turn count to prove you actually worked the thermal rather than just passing through. This factor rewards pilots who commit to the thermal and work it properly.

Full score requires:
- **about 90 seconds** of duration (shorter thermals score proportionally less)
- **2 or more complete turns** (fewer turns score proportionally less)

The two factors multiply together, so you need BOTH to score well here. A 30-second climb with three turns only gets a third of the points.

**Low sustained score?**
- You left the thermal too early
- The thermal died before you could work it properly

---

## How to Improve Your Score

### Quick Wins

1. **Tighten up when you hit lift**: don't wait, start turning as soon as the vario picks up
2. **Shift your circle toward the lift**: classic centering technique, widen on the weak side, tighten on the strong side
3. **Watch your bank angle**: too shallow means wide circles and drift, too steep is inefficient in weak lift

### Track Your Progress

Compare thermals from several flights at the same site. You'll start to see patterns:
- "I always struggle centering at this launch"
- "My afternoon thermals have better consistency"
- "That new wing really improved my efficiency"

### Don't Chase the Number

A score of 55 in a broken, punchy thermal might represent better flying than an 80 in a smooth, fat column. Context matters. Use the score to track your own progress over time, not to compare yourself to others on different days.

---

## Behind the Scenes: Why These Weights?

The weights (30/20/20/15/15) weren't pulled from thin air. They're based on what actually matters for effective thermalling:

- **Climb strength leads** (30%) because the primary goal is going up. A weak thermal worked perfectly is still a weak thermal.

- **Efficiency and centering share technique weight** (20% each) because they're both about skill. You can have one without the other (good centering but drifting out, or tight circles in the wrong spot).

- **Consistency is a modifier** (15%) because some turbulence is out of your control. It affects your score, but doesn't dominate it.

- **Sustained skill filters flukes** (15%) because a few turns in strong lift isn't the same as working a thermal. This factor makes sure high scores go to pilots who actually committed to the climb.

---

## Example Scenarios

### The Lucky Elevator Ride

| Metric | Value | Score |
|--------|-------|-------|
| Max Climb | 5.6 m/s | 1.0 (capped) |
| Efficiency | 0.65 | 0.65 |
| Centering | 0.78 | 0.78 |
| Consistency | 0.38 m/s | 0.81 |
| Duration / Turns | 120s / 4 turns | 1.0 |

**Contributions:** 0.30 + 0.13 + 0.156 + 0.121 + 0.15 = **0.858**
**Score:** 86 (Outstanding)

You hit a monster thermal, stayed in the core, and rode it for two solid minutes. Dream scenario.

### The Quick Hit (Penalized)

| Metric | Value | Score |
|--------|-------|-------|
| Max Climb | 4.8 m/s | 0.96 |
| Efficiency | 0.72 | 0.72 |
| Centering | 0.85 | 0.85 |
| Consistency | 0.45 m/s | 0.78 |
| Duration / Turns | 25s / 2 turns | 0.28 |

**Contributions:** 0.288 + 0.144 + 0.17 + 0.116 + 0.042 = **0.760**
**Score:** 76 (Excellent)

Strong lift, great centering, but you only stayed for two turns. Had you worked it for 90 seconds with the same technique, the sustained factor would have added the missing points and the score would be 87.

### The Hard-Fought Climb

| Metric | Value | Score |
|--------|-------|-------|
| Max Climb | 2.6 m/s | 0.52 |
| Efficiency | 0.38 | 0.38 |
| Centering | 0.45 | 0.45 |
| Consistency | 1.4 m/s | 0.30 |
| Duration / Turns | 180s / 6 turns | 1.0 |

**Contributions:** 0.156 + 0.076 + 0.09 + 0.045 + 0.15 = **0.517**
**Score:** 52 (Poor)

Weak thermal, broken core, lots of searching. The label is harsh, but it describes the thermal more than you: you stuck with it for 3 minutes and 6 turns, and the sustained factor gave you every one of its points. On a day like that, the climb that kept you in the air was the right call.

### The Core Crusher

| Metric | Value | Score |
|--------|-------|-------|
| Max Climb | 3.4 m/s | 0.68 |
| Efficiency | 0.52 | 0.52 |
| Centering | 0.85 | 0.85 |
| Consistency | 0.65 m/s | 0.68 |
| Duration / Turns | 95s / 3 turns | 1.0 |

**Contributions:** 0.204 + 0.104 + 0.17 + 0.101 + 0.15 = **0.729**
**Score:** 73 (Excellent)

Moderate thermal, but you absolutely nailed the centering and worked it properly. Technique over power.

---

## The Bottom Line

The thermal score isn't meant to judge you; it's meant to give you feedback. A numerical summary of "what happened in there" so you can learn from each thermal instead of just remembering "that was a good one."

Use it to:
- Spot patterns in your flying
- Track improvement over time
- Identify specific weaknesses to work on
- Brag to your friends with actual data

And remember: even a "Fair" thermal that got you to the next climb is better than an "Excellent" one you didn't take because you were waiting for something better.

Now go fly something!

---

See also: [Advanced Thermal Analysis](/doc/advanced-thermal-analysis) | [How Thermal Detection Works](/doc/advanced-thermal-analysis-settings)
