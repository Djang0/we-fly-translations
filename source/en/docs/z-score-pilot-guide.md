---
title: Z-score pilot's guide
description: The Secret Sauce for detecting outliers
category: Cockpit
order: 3
---

*Or: How to mathematically prove that your favorite takeoff is actually worth the drive*

## What the Hell is a Z-Score Anyway?

You know that friend who always brags about their "epic" sites, but you're pretty sure they're just full of hot air? Z-scores are the mathematical BS detector you've been waiting for.

**The Short Version:** A z-score tells you how unusual a data point is compared to the rest of your data. It's basically asking: "Is this site actually special, or am I just remembering that one good day?"

**The Formula (don't run away):**

```
Z-Score = (Your Value - Average) / Standard Deviation
```

**Translation for Pilots:** How many "standard deviations" away from average is this thing?

---

## Breaking It Down (Because We're Not All Math Nerds)

### The Setup

Imagine you've flown from 10 different takeoff sites over the season. You want to know which ones are your **actual** go-to spots vs. which ones you just happened to visit once on an epic day.

Here's your data (average flight duration from each site):

| Site | Avg Duration (hours) |
|------|---------------------|
| Annecy | 2.5 |
| Chamonix | 3.8 |
| Verbier | 2.2 |
| Bassano | 5.0 | ← Hmm, interesting
| Kössen | 2.4 |
| Interlaken | 2.6 |
| Pokhara | 1.8 |
| Saint-Hilaire | 2.7 |
| Bir | 2.3 |
| Oludeniz | 2.4 |

**Average across all sites:** 2.77 hours
**Standard Deviation:** 0.91 hours

### The Calculation

Let's calculate the z-score for **Bassano** (because 5.0 hours is suspiciously good):

```
Z-Score = (5.0 - 2.77) / 0.91
Z-Score = 2.23 / 0.91
Z-Score = 2.45
```

**What does 2.45 mean?**
- Bassano's average duration is 2.45 standard deviations **above** the mean
- In your **Cockpit**, this shows up in the **Z-Score** column
- This is statistically significant (|z| > 2 = outlier territory)
- Translation: Bassano isn't just good, it's **legitimately exceptional**

Now let's check **Pokhara** (1.8 hours, feels short):

```
Z-Score = (1.8 - 2.77) / 0.91
Z-Score = -0.97 / 0.91
Z-Score = -1.07
```

**What does -1.07 mean?**
- Pokhara is about 1 standard deviation **below** average
- Not terrible, but not great either
- Maybe you caught it on bad days, or maybe it's just a sled ride site

---

## The Z-Score Decoder Ring

Here's how to interpret your z-scores:

| Z-Score Range | What It Means | Pilot Translation |
|---------------|---------------|-------------------|
| **z > +2.0** | Extreme outlier (positive) | 🌟 **This site absolutely RIPS** - worth the 3-hour drive |
| **+1.0 to +2.0** | Above average | 👍 Solid site, you'll usually score here |
| **-1.0 to +1.0** | Pretty average | 🤷 Meh. Conditions matter more than the site |
| **-2.0 to -1.0** | Below average | 👎 You're probably getting skunked here often |
| **z < -2.0** | Extreme outlier (negative) | 💀 **Avoid unless you enjoy landing in the LZ** |

---

## Why Z-Scores Matter (The Pilot's Perspective)

### Problem 1: The "Remember That One Time?" Trap

You: "Dude, I LOVE flying from [Random Site]. It's amazing!"
Your Brain: *Remembering that ONE epic 6-hour XC from 3 years ago while conveniently forgetting the 15 sled rides*

**Z-Score Solution:** If the site's z-score is negative or close to zero, your brain is lying to you. The data doesn't lie - you're mostly bombing out there.

### Problem 2: Sample Size Shenanigans

You've flown Bassano once (5 hours, epic), and you've flown your local hill 47 times (average 2.1 hours).

Which is better? Hard to say without context, right?

**Z-Score Solution:** The z-score accounts for the **whole dataset**, so you can compare apples to oranges. It asks: "Compared to ALL my sites, how does this one stack up?"

### Problem 3: The Validation Station

You want to justify that 4-hour drive to your partner/boss/"I'm working from home today" excuse.

**Z-Score Solution:** Print out your cockpit stats showing a z-score of +2.8 for that site. "See honey, it's not just fun, it's STATISTICALLY SIGNIFICANT fun. This is science."

---

## How We Use Z-Scores in We-Fly

### In the Cockpit Dashboard

When you open the **Takeoff** view of your **Cockpit**, you'll see a **Z-Score** for each takeoff location. This is the z-score, and it's calculated from your **average flight duration per site** (the ratio of total hours to number of flights).

```typescript
// From src/lib/utils.ts
export function computeZScore(dataSerie: chartData[]) {
  // For each takeoff site
  for (let indexx = 0; indexx < dataSerie.length; indexx++) {
    // Calculate the average ratio (avg hours per flight) across all sites
    let avg_ratio = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      avg_ratio += dataSerie[index].ratio;
    }
    avg_ratio = avg_ratio / dataSerie.length;

    // Calculate the standard deviation
    let sum_deviations = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      sum_deviations += Math.pow(dataSerie[index].ratio - avg_ratio, 2);
    }
    let deviation = Math.sqrt(sum_deviations / dataSerie.length);

    // Calculate z-score: (this site's ratio - average) / std deviation
    // (rounded to one decimal)
    dataSerie[indexx].z = deviation === 0
      ? 0
      : Number(((dataSerie[indexx].ratio - avg_ratio) / deviation).toFixed(1));
  }
}
```

### What We're Actually Measuring

- **Value:** Average hours per flight for each takeoff site
- **Mean:** Your overall average flight duration across all sites
- **Standard Deviation:** How spread out your flight times are
- **Z-Score:** How exceptional (or terrible) each site is

### Outlier Detection

The code comments say: "Values with |z| > 2 are considered statistical outliers."

This means:
- **z > +2**: This site is an outlier in a GOOD way (you're staying up way longer than average)
- **z < -2**: This site is an outlier in a BAD way (you're landing way earlier than average)

### Real Example from Your Cockpit

Let's say you open the **Takeoff** view and see:

| Takeoff Location | Flights | Total Hours | Avg/Flight | **Z-Score** |
|------------------|---------|-------------|------------|-------------|
| Mont Blanc | 8 | 45.5h | 5.69h | **2.80** 🌟 |
| Local Hill | 42 | 67.2h | 1.60h | **-0.50** 😐 |
| That One Time | 1 | 3.2h | 3.20h | **0.40** 🤷 |

The cockpit rounds each z-score to one decimal, so a site at 2.84 shows as 2.80.

**What this tells you:**
1. **Mont Blanc (z = +2.8):** Holy crap, this site is a statistical unicorn. Every time you fly here, you're almost guaranteed a long flight. Book the Airbnb NOW.

2. **Local Hill (z = -0.5):** Slightly below average, but not terrible. It's convenient, and you're building hours. Keep using it for practice, but don't expect epics.

3. **That One Time (z = +0.4):** Mildly above average, but you've only flown it once. Could be luck. Need more data before you know if it's actually good.

---

## The Fine Print (Edge Cases & Gotchas)

### When Z-Scores Break Down

**1. Small Sample Sizes**
- Flew a site once for 6 hours? Z-score might be +3.0, but that's just luck
- **Fix:** Look at the flight count. If it's low (< 5 flights), take the z-score with a grain of salt

**2. All Values Are The Same**
- If every site averages exactly 2.5 hours, the standard deviation is zero
- Can't divide by zero, so z-score = 0 for everything
- **Fix:** The code handles this: `deviation === 0 ? 0 : (value - avg) / deviation`

**3. Seasonal Bias**
- You only fly Site A in summer, Site B in winter
- Z-scores might reflect **season** more than **site quality**
- **Fix:** Use filters! Filter by season or date range to compare apples to apples

**4. Different Flight Styles**
- Site A is great for XC (long flights)
- Site B is perfect for acro (short flights)
- Z-score will favor Site A, but that doesn't make Site B "bad"
- **Fix:** Filter by flight type if that data is available

---

## Z-Scores in Other Contexts (Because We're Not Done Yet)

### By Glider

Which wing gives you the longest flights?

- **Glider A:** z = +1.8 → Above average, probably a good XC wing
- **Glider B:** z = -0.3 → Slightly below average, maybe your old beater wing

### By Month

When should you book your vacation?

- **July:** z = +2.1 → Consistently epic month, book time off
- **November:** z = -1.5 → Skunky month, stay home and fix your gear

### By Country

Which flying destination is worth the plane ticket?

- **France:** z = +1.2 → Above average flight times
- **That Random Island:** z = -2.0 → Beautiful, but you're not flying much

---

## Real-World Decision Making

### Scenario 1: The Road Trip Debate

Your buddy wants to drive 5 hours to a new site. You check your cockpit:

- **New site:** 1 flight, 4.5h avg, z = +1.5 (but only 1 flight!)
- **Nearby site:** 23 flights, 3.2h avg, z = +1.8

**Decision:** The nearby site has a higher z-score AND more data. It's the safer bet for a good day. Save the 5-hour drive for when you have more data on the new site.

### Scenario 2: Wing Shopping

You're deciding between two wings based on your logged flights:

- **Current Wing:** 89 flights, 2.1h avg, z = -0.4 (slightly below your average)
- **Friend's Wing (borrowed twice):** 2 flights, 3.5h avg, z = +1.2

**Decision:** Don't buy the friend's wing based on 2 flights. The z-score looks good, but sample size is too small. Could be luck, could be the friend is a better pilot than you.

### Scenario 3: Proving You're Not Crazy

Your partner: "You drive 2 hours to that site every weekend. Is it even worth it?"

You: "Check this out. Z-score of +2.3. I average 4.2 hours there vs. 2.1 hours at the local hill. That's statistically significant. I'm flying TWICE as long for a 2-hour drive. The math checks out."

**Result:** Your partner still thinks you're crazy, but at least now you have DATA.

---

## The Bottom Line (TL;DR for Impatient Pilots)

**What is a z-score?**
A measure of how unusual a value is compared to your average. It's normalized by standard deviation so you can compare different things.

**Why do we use it?**
To identify which takeoff sites (or gliders, or months, or countries) are **actually exceptional** vs. just lucky one-offs.

**How do I read it?**
- **Positive z-score:** Above average (good!)
- **Negative z-score:** Below average (meh)
- **|z| > 2:** Statistical outlier (extreme!)
- **|z| < 1:** Pretty normal (average)

**Where do I see it?**
In your **Cockpit**, in the **Z-score** column of the **Takeoff**, **Glider**, **Country** and **Season** views, and as the **Z-Score** metric in the **Month** view.

**What should I do with it?**
Use it to make smarter decisions about where to fly, what gear to use, and when to plan trips. The z-score is your data-driven wingman.

---

## Appendix: The Math (For the Nerds in the Back)

### Full Worked Example

Dataset: Average flight hours per site

```
Sites: [2.5, 3.8, 2.2, 5.0, 2.4, 2.6, 1.8, 2.7, 2.3, 2.4]
```

**Step 1: Calculate Mean**
```
Mean = (2.5 + 3.8 + 2.2 + 5.0 + 2.4 + 2.6 + 1.8 + 2.7 + 2.3 + 2.4) / 10
Mean = 27.7 / 10 = 2.77 hours
```

**Step 2: Calculate Standard Deviation**
```
Std Dev = √( Σ(x - mean)² / N )

For each value, compute (x - mean)²:
(2.5 - 2.77)² = 0.073
(3.8 - 2.77)² = 1.061
(2.2 - 2.77)² = 0.325
(5.0 - 2.77)² = 4.973  ← Bassano
(2.4 - 2.77)² = 0.137
(2.6 - 2.77)² = 0.029
(1.8 - 2.77)² = 0.941
(2.7 - 2.77)² = 0.005
(2.3 - 2.77)² = 0.221
(2.4 - 2.77)² = 0.137

Sum = 7.902
Std Dev = √(7.902 / 10) = √0.790 = 0.889 hours
```

**Step 3: Calculate Z-Scores**
```
Z(Bassano) = (5.0 - 2.77) / 0.889 = +2.51 🌟
Z(Pokhara) = (1.8 - 2.77) / 0.889 = -1.09 👎
Z(Annecy) = (2.5 - 2.77) / 0.889 = -0.30 🤷
```

---

## One Last Thing: Z-Scores Don't Lie, But Context Matters

A z-score tells you **what is unusual**, not **why it's unusual**.

- High z-score site? Could be great conditions, or you only fly it on perfect days
- Low z-score month? Could be bad weather, or you were injured that month
- High z-score glider? Could be a better wing, or you're more confident on it

**Always look at:**
1. Sample size (more flights = more reliable z-score)
2. Context (filters, date ranges, flight types)
3. Your own memory (does this FEEL right?)

Z-scores are a tool, not the truth. But they're a damn good tool for cutting through the BS and finding the signal in the noise.

Now get out there and fly! And when your friends ask why you're driving 3 hours to that one site, you can confidently say: "Because the z-score is +2.6, bro. SCIENCE."

---

*"In statistics we trust, but in thermals we must."*
*- Every data nerd pilot*
