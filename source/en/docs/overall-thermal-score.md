---
title: Overall Thermal Score Explained
description: How we calculate thermal quality - with a worked example
category: Thermal Analysis
order: 4
---

Ever see that quality score in Advanced Thermal Analysis and wonder if it actually means anything? Good news: it does. It's not just vibes. Let's break down exactly how that number gets calculated so you can understand what separates "Fair" from "Excellent" - and what you can do about it.

## The Big Picture

The Overall Thermal Score (0-100) is a weighted combination of five factors:

| Factor | Weight | What It Measures |
|--------|--------|------------------|
| **Climb Rate** | 30% | How strong was the lift? |
| **Efficiency** | 20% | How direct was your climb? |
| **Centering Quality** | 20% | How well did you stay in the core? |
| **Consistency** | 15% | How stable were the vario readings? |
| **Sustained Skill** | 15% | Did you actually work the thermal? |

Each factor gets normalized to a 0-1 scale, multiplied by its weight, then the whole thing gets scaled to 0-100. Simple in theory, revealing in practice.

The **Sustained Skill** factor is key: it prevents high scores from brief pass-throughs. Flying through strong lift for 15 seconds doesn't prove thermalling skill - actually circling and working the thermal does.

---

## The Formula

Here's the actual calculation from the codebase:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

### How Each Component Is Calculated

**1. Climb Score**
```
climbScore = min(1, climbrate / 3.0)
```
Your average climb rate divided by 3.0 m/s (capped at 1). So 3 m/s or better = perfect score. Lower = proportionally less.

**2. Efficiency Score**
```
efficiencyScore = heightGain / horizontalDistance
```
Already a 0-1 value. Perfect efficiency (going straight up) = 1.0. The more you drift horizontally, the lower this gets.

**3. Centering Score**
```
centeringScore = centeringQuality
```
This comes from the core analysis algorithm - how much time you spent near the thermal's sweet spot. Already 0-1.

**4. Consistency Score**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
Inverse of your vario variability (standard deviation of climb readings). Smooth thermal = high score. Bouncing between +5 and -2 m/s = low score. Variability of 2 m/s or more = zero consistency contribution.

**5. Sustained Score**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combines duration and turn count to reward actual thermalling work. Full score requires ~90 seconds AND 2+ complete turns. A 15-second pass-through with 0 turns scores near zero here, even if the other metrics look great.

---

## Worked Example: Thermal #9

Let's walk through a real calculation using concrete numbers. Say you worked a thermal with these stats:

| Metric | Value |
|--------|-------|
| Climb Rate | 2.15 m/s |
| Efficiency | 0.41 (41%) |
| Centering Quality | 0.53 (53%) |
| Variability | 0.92 m/s |
| Duration | 75 seconds |
| Turn Count | 3 turns |

### Step 1: Calculate Each Component Score

**Climb Score:**
```
climbScore = min(1, 2.15 / 3.0)
climbScore = min(1, 0.717)
climbScore = 0.717
```
Your 2.15 m/s climb rate is 71.7% of the "perfect" 3.0 m/s benchmark.

**Efficiency Score:**
```
efficiencyScore = 0.41
```
Already normalized. You gained 41% as much vertical as you traveled horizontal. Pretty typical for a drifty thermal.

**Centering Score:**
```
centeringScore = 0.53
```
You spent about half your time in decent lift. Room for improvement, but not bad.

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
You spent 75 seconds and made 3 complete turns - solid thermalling work.

### Step 2: Apply the Weights

Now multiply each score by its weight:

| Component | Score | Weight | Contribution |
|-----------|-------|--------|--------------|
| Climb | 0.717 | 0.30 | 0.215 |
| Efficiency | 0.41 | 0.20 | 0.082 |
| Centering | 0.53 | 0.20 | 0.106 |
| Consistency | 0.54 | 0.15 | 0.081 |
| Sustained | 0.833 | 0.15 | 0.125 |
| **Total** | | | **0.609** |

### Step 3: Scale to 0-100

```
qualityScore = round(0.609 * 100) = 61
```

**Result: Overall Score of 61** - solidly in the "Good" range.

---

## Interpreting Your Score

| Score Range | Rating | What It Means |
|-------------|--------|---------------|
| **70-100** | Excellent | Competition-level thermalling. You found the core fast and stayed in it. |
| **50-69** | Good | Solid work. You got the altitude without wasting too much time. |
| **25-49** | Fair | Got the job done, but left some performance on the table. |
| **0-24** | Poor | Struggled to find/keep the core, or conditions were truly awful. |

---

## What Each Component Tells You

### Climb Rate (30% weight)

This is the most heavily weighted because... well, the whole point is going up. But don't obsess over it - sometimes a 1.5 m/s thermal you work perfectly is worth more XC miles than a 4.0 m/s thermal you keep falling out of.

**Low climb score?**
- The thermal was genuinely weak (not your fault)
- You spent too much time on the edges (check centering)
- You were late to the party and caught only the top

### Efficiency (20% weight)

Efficiency = height gained / horizontal distance traveled. A perfect helix going straight up would score 1.0 (and also be impossible in any real wind).

Typical values:
- **0.3-0.4**: Normal, some drift
- **0.5-0.6**: Very good, tight circles
- **0.6+**: Excellent, minimal drift

**Low efficiency?**
- Strong wind pushing you sideways
- Wide circles or poor bank angle
- Entering downwind and never correcting

### Centering Quality (20% weight)

How much time you spent in the good stuff vs. wandering the edges. Calculated using an exponential distance decay from the core: the further from center, the faster your score drops.

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

Combines duration and turn count to prove you actually worked the thermal vs. just passing through. Flying through 4 m/s lift for 10 seconds isn't thermalling - it's luck. This factor rewards pilots who commit to the thermal and work it properly.

Full score requires:
- **~90 seconds** of duration (shorter thermals score proportionally less)
- **2+ complete turns** (fewer turns score proportionally less)

The two factors multiply together, so you need BOTH to score well here. A 2-minute straight glide through lift (0 turns) scores zero. A single quick 360 in weak lift (10 seconds) also scores near zero.

**Low sustained score?**
- You left the thermal too early
- You didn't commit to circling (pass-through)
- The thermal died before you could work it properly

---

## How to Improve Your Score

### Quick Wins

1. **Tighten up when you hit lift** - Don't wait, start turning immediately when the vario spikes
2. **Shift your circle toward the lift** - Classic centering technique: widen on the way out, tighten on the way in
3. **Watch your bank angle** - Too shallow = wide circles = drift. Too steep = inefficient in weak lift

### Track Your Progress

Open the same thermal in the analysis tool after multiple flights from the same site. You'll start to see patterns:
- "I always struggle centering at this launch"
- "My afternoon thermals have better consistency"
- "That new wing really improved my efficiency"

### Don't Chase the Number

A score of 45 in a broken, punchy thermal might represent better flying than a 70 in a smooth, fat column. Context matters. Use the score to track your own progress over time, not to compare yourself to others on different days.

---

## Behind the Scenes: Why These Weights?

The weights (30/20/20/15/15) weren't pulled from thin air. They're based on what actually matters for effective thermalling:

- **Climb rate leads** (30%) because the primary goal is going up. A weak thermal worked perfectly is still a weak thermal.

- **Efficiency and centering share technique weight** (20% each) because they're both about skill. You can have one without the other (good centering but drifting out, or tight circles in the wrong spot).

- **Consistency is a modifier** (15%) because some turbulence is out of your control. It affects your score, but doesn't dominate it.

- **Sustained skill filters flukes** (15%) because briefly flying through strong lift isn't thermalling - it's luck. This factor ensures high scores go to pilots who actually committed to working the thermal.

---

## Example Scenarios

### The Lucky Elevator Ride

| Metric | Value | Score |
|--------|-------|-------|
| Climb Rate | 4.2 m/s | 1.0 (capped) |
| Efficiency | 0.65 | 0.65 |
| Centering | 0.78 | 0.78 |
| Consistency | 0.38 m/s | 0.81 |
| Duration / Turns | 120s / 4 turns | 1.0 |

**Contributions:** 0.30 + 0.13 + 0.156 + 0.122 + 0.15 = **0.86**
**Score:** 86 (Excellent)

You hit a monster thermal, stayed in the core, and rode it for two solid minutes. Dream scenario.

### The Brief Pass-Through (Penalized)

| Metric | Value | Score |
|--------|-------|-------|
| Climb Rate | 3.5 m/s | 1.0 (capped) |
| Efficiency | 0.72 | 0.72 |
| Centering | 0.85 | 0.85 |
| Consistency | 0.45 m/s | 0.78 |
| Duration / Turns | 18s / 0 turns | 0.0 |

**Contributions:** 0.30 + 0.144 + 0.17 + 0.117 + 0.0 = **0.73**
**Score:** 73 (Excellent... but barely)

Strong lift, great vario readings - but you flew straight through without committing to circle. The zero sustained score pulls this down significantly. In the old scoring system, this would have been 85+.

### The Hard-Fought Climb

| Metric | Value | Score |
|--------|-------|-------|
| Climb Rate | 1.8 m/s | 0.60 |
| Efficiency | 0.38 | 0.38 |
| Centering | 0.45 | 0.45 |
| Consistency | 1.4 m/s | 0.30 |
| Duration / Turns | 180s / 6 turns | 1.0 |

**Contributions:** 0.18 + 0.076 + 0.09 + 0.045 + 0.15 = **0.54**
**Score:** 54 (Good)

Weak thermal, broken core, lots of searching. But you stuck with it for 3 minutes and made 6 turns. That persistence is rewarded.

### The Core Crusher

| Metric | Value | Score |
|--------|-------|-------|
| Climb Rate | 2.4 m/s | 0.80 |
| Efficiency | 0.52 | 0.52 |
| Centering | 0.85 | 0.85 |
| Consistency | 0.65 m/s | 0.68 |
| Duration / Turns | 95s / 3 turns | 1.0 |

**Contributions:** 0.24 + 0.104 + 0.17 + 0.102 + 0.15 = **0.77**
**Score:** 77 (Excellent)

Moderate thermal, but you absolutely nailed the centering and worked it properly. Technique over power.

---

## The Bottom Line

The Overall Thermal Score isn't meant to judge you - it's meant to give you feedback. A numerical summary of "what happened in there" so you can learn from each thermal instead of just remembering "that was a good one."

Use it to:
- Spot patterns in your flying
- Track improvement over time
- Identify specific weaknesses to work on
- Brag to your friends with actual data

And remember: even a "Fair" thermal that got you to the next climb is better than an "Excellent" one you didn't take because you were waiting for something better.

Now go fly something!

---

See also: [Advanced Thermal Analysis](advanced-thermal-analysis.md) | [Analysis Settings](advanced-thermal-analysis-settings.md)
