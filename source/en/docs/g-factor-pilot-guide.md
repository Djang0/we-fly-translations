---
title: G-factor pilot's guide
description: How many Gs did you really pull in that thermal?
category: Your Flights
order: 4
---

*Or: How to mathematically prove you're not just bragging about that SAT you sent*

## What the Hell is a G-Factor Anyway?

You know that feeling when you're cranking into a tight thermal and your body suddenly weighs twice as much? Or when you hit a wall of lift and get pressed into your seat like an astronaut? That's G-force in action, and now you can actually measure it.

**The Short Version:** G-factor (or load factor) tells you how many times heavier you feel compared to sitting on your couch. Standing around? That's 1 G. Pulling a tight turn in a thermal? Maybe 1.4 G. Your buddy who claims they pulled 3 Gs in that spiral? Probably true (maybe not).

**The Slightly Longer Version:** G-factor is the ratio of the total force acting on you divided by your weight. In level flight at constant speed, you're at 1 G. Pull up or bank hard, and the G-factor increases. Push over the top of a loop (if you're into that), and it drops below 1 G (hello, weightlessness).

**What pilots actually care about:**
- Are you working that thermal efficiently (without stalling)?
- Did you really pull 2 Gs in that spiral, or is your memory exaggerating?
- Is your flying smooth or are you yanking the glider around like a kite in a hurricane?

---

## Why Should I Care?

Good question. Most of the time, you're flying by feel, not staring at numbers. But G-factor data is secretly useful:

1. **Thermal efficiency**: Higher Gs in thermals = tighter turns
2. **Smooth flying**: Wild G swings = you're fighting the wing instead of dancing with it
3. **Safety margins**: Most gliders are certified to +8.0/-3.5 G. If you're regularly seeing 4 G in thermals, we need to talk
4. **Bragging rights with data**: "I pulled 6 Gs on that SAT" (backed by your IGC file, so your buddies can't call BS)

---

## The Physics (Don't Run Away, It's Quick)

### The Basic Formula

$$
n = 1 + \frac{a}{g}
$$

**Translation for Humans:**
- **n** = G-factor (the number we want)
- **a** = acceleration (m/s²), how fast your velocity is changing
- **g** = gravity (9.81 m/s²), Earth's way of keeping you grounded

**The "1 +"** part means you always start at 1 G (gravity is always there). Any **additional** acceleration (from turning, pulling up, etc.) adds to that baseline.

**Examples:**
- Cruising straight and level, no acceleration → n = 1 + 0/9.81 = **1.0 G**
- Pulling up with 4.9 m/s² acceleration → n = 1 + 4.9/9.81 = **1.5 G**
- Aggressive turn with 9.81 m/s² centripetal acceleration → n = 1 + 9.81/9.81 = **2.0 G**

---

## Two Ways to Pull Gs (Both Equally Uncomfortable)

Your body doesn't care *why* you're accelerating, it just cares that you are. There are two main ways to rack up Gs:

### 1. Vertical Acceleration (The Pull-Up)

This is the classic "pull back on the stick and your stomach drops" maneuver.

**What's happening:** You're changing your vertical velocity (climbing faster or descending slower), which creates upward acceleration.

**The formula:**
$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Where:
- **a_z** = vertical acceleration (m/s²), how fast your climb rate is changing
- Positive = going up faster (or down slower)
- Negative = going down faster (or up slower)

**When you feel it:**
- Pulling out of a dive
- Entering a thermal and hitting strong lift
- Winch launch (hello, 2+ Gs for 10 seconds straight)
- That moment when wave lift kicks in and you get shoved skyward

**Real-world examples:**
- Smooth thermal entry: 1.2-1.4 G (a gentle squeeze)
- Aggressive pull-up: 1.8-2.5 G (your cheeks are now in your lap)
- Winch launch peak: 2.0-3.0 G (welcome to the pain train)

---

### 2. Lateral Acceleration (The Turn)

This is the "I'm cranking this thermal and my wingtip is pointed at the ground" situation.

**What's happening:** You're turning, which means you're constantly accelerating *toward the center of the turn* (centripetal acceleration). Your body feels heavier because the lift from the wing needs to both hold you up AND pull you through the turn.

**The formula:**
$$
n_{lat} = 1 + \frac{v \times \omega}{g}
$$

Where:
- **v** = ground speed (m/s), how fast you're moving
- **ω** (omega) = turn rate (rad/s), how fast you're changing direction
- **v × ω** = centripetal acceleration (the sideways "force" pulling you into the turn)

**Translation:** The faster you're flying, and the tighter you're turning, the more Gs you pull.

**When you feel it:**
- Every thermal (constant turn = constant lateral G)
- Steep turns
- Spirals (especially the fast, aggressive ones you regret mid-maneuver)
- Acro (wingover tops, spiral exits, SAT entries)

**Real-world examples:**
- Lazy thermal (shallow bank): 1.1-1.2 G (barely noticeable)
- Efficient thermal (moderate bank): 1.3-1.5 G (this is the sweet spot)
- Aggressive thermal (steep bank, high speed): 1.6-2.0 G (your sink rate just entered the shadow realm)
- SAT entry: 2.5+ G (congratulations, you now weigh 200 kg)

---

## How We-Fly Computes Your Gs from IGC Files

Here's where it gets nerdy (but stick with me, it's actually cool).

### The Problem: IGC Files Are Not G-Meters

Your flight logger doesn't have an accelerometer (unless it's a fancy one). It just records:
- GPS coordinates (latitude, longitude)
- Pressure altitude (from barometric sensor)
- GPS altitude (from satellites)
- Timestamps (usually 1 Hz, or once per second)

So we have to **infer** acceleration from changes in position and altitude over time. This is like figuring out how fast a car accelerated by watching it drive past landmarks, doable, but not perfect.

---

### Step 1: Smooth the Noisy Data

**The Challenge:** GPS and pressure sensors are noisy. If we just take raw altitude readings and differentiate them, we'll get wildly fluctuating numbers that make no physical sense (like claiming you pulled 47 Gs in straight flight).

**The Fix:** We use a **Savitzky-Golay filter**, a fancy smoothing technique that preserves the shape of real changes while killing noise.

**What it does:**
- Looks at a small window of data (e.g., 5 seconds)
- Fits a smooth polynomial curve through those points
- Uses that curve to estimate the "true" value at each moment

**Why this matters:** Without smoothing, differentiation is suicide. With smoothing, we get clean, believable numbers.

---

### Step 2: Compute Vertical Velocity (First Derivative)

Now that we have smooth altitude data, we can compute how fast altitude is changing, i.e., your vertical velocity (climb/sink rate).

**The Formula (central difference method):**
$$
v_z(t) = \frac{alt(t+1) - alt(t-1)}{t_{t+1} - t_{t-1}}
$$

**Translation:** Look at the altitude one second before and one second after, divide by the time difference.

**Result:** You now know your climb rate at every moment (in m/s).

---

### Step 3: Compute Vertical Acceleration (Second Derivative)

Now we differentiate *again* to see how fast your climb rate is changing: that's acceleration.

**The Formula:**
$$
a_z(t) = \frac{v_z(t+1) - v_z(t-1)}{t_{t+1} - t_{t-1}}
$$

**But wait, there's more smoothing!** Because differentiation amplifies noise, we smooth the velocity *again* before computing acceleration.

**Result:** You now have vertical acceleration (m/s²) at every moment.

---

### Step 4: Convert to Vertical G-Factor

Finally, we plug acceleration into the formula:

$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Where **g = 9.81 m/s²** (Earth's gravitational acceleration).

**What you get:**
- Steady flight: 1.0 G
- Pulling into lift: 1.2-1.5 G
- Winch launch peak: 1.5-2.0 G

---

### Step 5: Compute Ground Speed and Turn Rate

For lateral Gs (from turning), we need two things:
1. **Ground speed** (how fast you're moving)
2. **Turn rate** (how fast you're changing direction)

**Ground Speed (using Haversine formula):**

The Haversine formula calculates distance between two GPS coordinates on a sphere (Earth), accounting for curvature.

**Turn Rate:**

Turn rate is how fast your heading (bearing) is changing.

**The Formula:**
$$
\omega = \frac{\Delta \psi}{\Delta t}
$$

Where:
- **ψ** (psi) = bearing angle (direction you're flying)
- **Δψ** = change in bearing between two points
- **Δt** = time difference

---

### Step 6: Convert to Lateral G-Factor

Now we have everything we need:

$$
n_{lat} = 1 + \frac{v \times |\omega|}{g}
$$

**Why absolute value of turn rate?** Because we don't care if you're turning left or right: Gs feel the same either way.

---

### Step 7: Combine Vertical and Lateral Gs

Here's the key insight: **At any given moment, you experience the HIGHER of the two G-factors**, not both added together.

Why? Because shut-up its physics! If you're pulling 1.3 Gs from a turn and 1.2 Gs from entering lift, you don't feel 2.5 Gs total. You feel 1.3 Gs (the dominant source).

**The Formula:**
$$
n_{combined} = \max(n_{vert}, n_{lat})
$$

**Sanity Check:** Cap unreasonable values (sometimes noise creeps in):

---

### Step 8: Compute Statistics

Finally, we crunch the numbers to give you a summary:

**What these numbers tell you:**
- **Max:** Your peak G moment (hopefully not in a spiral you regretted)
- **Mean:** Average Gs across the flight (usually 1.1-1.3 for thermal flying)
- **Median:** The G you experienced *most of the time* (more honest than mean)
- **Std Deviation:** How smooth vs chaotic your flying was
  - Low (< 0.2): Smooth, consistent flying
  - High (> 0.5): You were all over the place (or doing acro)

---

## The Fine Print (Important Caveats)

### 1. IGC Data is Low-Resolution
- Most loggers record at **1 Hz** (once per second)
- Sharp G-spikes (like snapping into a turn) get averaged out
- **Reality:** You might briefly hit 2.5 G, but your logger records 1.8 G

**Translation:** Expect **underestimation** of peak Gs. The numbers are conservative.

---

### 2. Pressure Altitude vs GPS Altitude

We use **pressure altitude** for vertical acceleration (not GPS altitude). Why?

| Altitude Source | Pros | Cons |
|----|----|---|
| **Pressure** | Smooth, physically consistent | Affected by QNH errors, pressure changes |
| **GPS** | Absolute reference | Noisy as hell, step-like artifacts |

**Decision:** Pressure altitude is **much better** for computing derivatives (acceleration). GPS altitude would give us garbage numbers.

---

### 3. Smoothing Hides Reality (But That's OK)

Smoothing filters are a trade-off:
- **Good:** Kills noise, gives believable numbers
- **Bad:** Dulls sharp peaks, averages out rapid changes

**The Deal:** We're not trying to capture every millisecond of your flight. We're trying to give you a **reasonable, defensible estimate** of what happened.

**Analogy:** It's like asking "How fast were you driving?" Your answer is probably an average ("About 60 mph"), not a graph of every 0.1-second speed change.

---

### 4. These Numbers Are NOT Certification-Grade

Let's be clear: **This analysis is for flight debriefing, training, and curiosity, NOT structural validation or legal claims.**

**Good for:**
- Reviewing your flying technique
- Comparing flights
- Proving to your friends you actually pulled Gs
- Training debriefs

**NOT good for:**
- Proving your wing can handle 5.5 Gs (use a real accelerometer)
- Legal disputes
- Certification claims

---

## Validation & Sanity Checks

If you see weird numbers, here's how to debug:

| You See | What It Means | Likely Cause |
|----|----|---|
| 1.0 G in cruise | ✅ Normal | Good data |
| 1.3 G in thermals | ✅ Efficient flying | You're working those cores |
| 4.0 G in normal flight | ❌ Artifact | GPS glitch, bad filtering, or you're lying |
| <=0.5 G in cruise | ❌ Weird | Probably a sensor error (or you're doing acro flight?) |
| -5.0 G anywhere | ❌ Nonsense | Your logger is broken or haunted |

**Golden Rule:** If it feels wrong, it probably is. Trust your gut, then check the data.

---

## One Last Thing: G-Factor Doesn't Lie, But Context Matters

High Gs aren't automatically bad, and low Gs aren't automatically good. Context is everything:

- **High Gs in thermals** → Could mean efficient flying, or over-banking (check your sink rate)
- **Low Gs in cruise** → Normal and good (you're not yanking the wing around)
- **Peak Gs on winch launch** → Expected (just don't lock out)
- **High deviation (std dev)** → Could mean rough air, or you're flying aggressively (or learning)

**Use the data as a tool, not a judgment.** It's there to help you understand your flying, not to make you feel bad about that spiral you regretted.

---

## Final Thought

G-factor analysis won't make you a better pilot overnight, but it will give you **data-backed insights** into what you're actually doing in the air, not just what you *think* you're doing.

So next time your buddy brags about pulling 3 Gs in that thermal, you can calmly pull out your cockpit stats and say: "Cool story. The data says 1.7."

Science wins again.

---

## References

The fundamental G-factor formula (n = 1 + a/g) and load factor concepts are documented in standard aerospace engineering and aviation training materials:

### 1. FAA Pilot's Handbook of Aeronautical Knowledge (PHAK)
- **Chapter 5: Aerodynamics of Flight** - Load Factor section
- Federal Aviation Administration
- Free PDF: [FAA Website](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
- Covers load factor fundamentals, structural limitations, and flight envelope

### 2. Aerodynamics for Naval Aviators
- **Author:** H.H. Hurt Jr.
- **Publisher:** University of Southern California (originally), revised by U.S. Navy
- Classic aerospace engineering textbook used in military and civilian flight training
- Section on "Load Factor and Airplane Limitation" provides detailed derivations
- Available from various aviation book retailers and libraries

### 3. Introduction to Flight (8th Edition)
- **Author:** John D. Anderson Jr.
- **Publisher:** McGraw-Hill Education
- **Year:** 2015
- **ISBN:** 978-0073380247
- Standard textbook for aerospace engineering programs
- Equation 5.18: Load factor derivation from normal acceleration
- Comprehensive coverage of flight mechanics fundamentals

---

*"Gravity doesn't care about your feelings, but your feelings care about G-factor."*
*- Every physicist pilot*
