---
title: Advanced Thermal Analysis
description: Deep-dive into every thermal you worked, centering, climb rate, and efficiency scored flight by flight
category: Thermal Analysis
order: 1
---

Ever wondered if you're actually a thermal genius or just getting lucky? Welcome to the Advanced Thermal Analysis tool, your personal debrief partner that breaks down every circle you flew like a competition judge with a PhD in thermalling.

## What Is This Thing?

Think of it as a post-flight analyzer that watches every move you made in thermals. It doesn't just tell you "hey, you climbed 500m". It deep-dives into *how* you climbed, whether you were core-hunting like a pro or wandering around like a tourist.

The tool automatically detects every thermal you worked during your flight, then gives each one a quality score and detailed breakdown. It's like having a coach review your GoPro footage, except it's analyzing GPS tracks and variometer data instead.

## The Main View

When you fire up the analysis, you'll see three main panels:

### Left Panel: Flight Summary & Thermal List

At the top, you get the bird's-eye view:
- **Total Thermals**: How many you worked (or *attempted* to work)
- **Total Gain**: All the altitude you scraped together
- **Avg Climb**: Your average climb rate across all thermals
- **Avg Quality**: Overall thermal quality score (we'll get to this)

Below that is your thermal list, every thermal you hit, ordered chronologically. Each card shows:
- **Quality Badge**: Ranges from "Fair" (ouch) to "Excellent" (teach me your ways)
- **Start Time**: When you entered the thermal
- **Height Gain**: How much altitude you banked
- **Climb Rate**: Average m/s for that thermal

Click any thermal to analyze it. The little target icon resets the map zoom if you've been poking around.

### Center Panel: The Map

This is where the magic happens. You'll see:

**Your Track**: Color-coded GPS points showing your path through the thermal
- 🟢 **Green dots**: Strong climb (>3 m/s), you found the juice!
- 🔵 **Blue dots**: Moderate climb (0-3 m/s), working it
- 🔴 **Red dots**: Sink (<0 m/s), we've all been there

**Selected Thermal**: Highlighted in red with a white border. This is what you're currently analyzing

**Other Thermals**: Shown in purple at 40% opacity, context for where else you climbed

**Animation Controls**:
- ▶️ **Play/Pause**: Watch your flight replay frame-by-frame
- 🔄 **Reset**: Back to the beginning
- ⬅️➡️ **Frame Navigation**: Step through each GPS point manually (or use arrow keys, yes, we made it keyboard-friendly)
- **Frame Counter**: Shows exactly where you are in the thermal (e.g., "42/156")

Below the controls, you'll see real-time data for the current GPS point:
- **Time**: Exact timestamp
- **Altitude**: Current height
- **Vario**: Vertical speed at that moment

**Pro tip**: Use the arrow keys to scrub through the thermal frame-by-frame. Great for spotting exactly when you hit the core.

### Right Panel: Thermal Details

This is your coaching report. Let's break down each section:

#### Quality Overview
**Overall Score**: A composite number (0-40) that considers multiple factors:
- Climb rate efficiency
- How well you stayed centered
- Drift vs. climb ratio
- Turn consistency

The progress bar shows where you land on the scale. Getting 25+ consistently? You're doing something right.

**Efficiency**: What percentage of your time in the thermal was actually productive climbing. Lower numbers mean you spent time wandering or in sink.

#### Drift & Wind
**Drift Distance**: How far the thermal blew you downwind while you climbed. Lower is usually better (unless you *wanted* to drift).

**Wind Speed**: Calculated from your drift. Handy for understanding conditions.

**Wind Compass**: Visual showing wind direction. The arrow points where the wind is blowing *to* (meteorologist convention, sorry sailors).

#### Climb Performance
The raw numbers:
- **Height Gain**: Total meters gained
- **Avg Climb**: Your average vertical speed
- **Max Climb**: Best climb rate you hit (usually when you nailed the core)
- **Min Climb**: Worst moment (often during entry or when you lost the core)
- **Variability**: How consistent the lift was. Lower = smooth thermal, Higher = punchy/turbulent

#### Core Analysis
This is where it gets nerdy:

**Core Strength**: The strongest sustained lift you found. This is your "sweet spot" climb rate.

**Centering Time**: How long it took you to find and stay in the core after entering. Lower is better, means you didn't waste time wandering around the edges.

**Centering Quality**: Percentage of time spent in strong lift vs. weak lift. High numbers = you stayed in the good stuff.

#### Turn Dynamics
**Direction**: Left or Right (most pilots have a favorite side, no judgment)

**Turns**: How many complete circles you made

**Rate**: Average turn rate in degrees per second. Too slow = drifting out, too fast = might be over-banking

#### Time Information
Just the timestamps and duration. Useful for correlating with your notes or competition logger.

#### Recommendations

Here's where the tool gets chatty. Based on the analysis, you'll get personalized feedback like:
- 🟢 **Positive feedback** (green background): Things you did well, "Excellent core entry with minimal search time"
- 🟡 **Improvement suggestions** (amber background): Areas to work on, "Consider tightening turn radius to reduce drift"

The recommendations are generated based on actual performance metrics, not generic advice.

## Animation Playback

The replay feature is honestly pretty cool. Hit play and watch yourself work the thermal in real-time (well, sped up). You can:

1. **Play it through**: See your entire thermal from entry to exit
2. **Pause and scrub**: Use arrow keys to step through interesting moments
3. **Watch the metrics**: Current altitude, vario, and time update as you move through the thermal
4. **Compare multiple thermals**: Switch between different thermals to see how your technique varied

**Keyboard shortcuts**:
- **←** Previous frame
- **→** Next frame

## Quality Scoring Explained

The quality score isn't just "good climb rate = high score." It's a composite that considers:

1. **Climb efficiency**: Actual climb vs. theoretical maximum
2. **Centering skill**: How quickly you found and stayed in the core
3. **Drift management**: Whether you minimized downwind drift
4. **Consistency**: How stable your circling was

A 5 m/s thermal where you wandered around might score lower than a 2.5 m/s thermal you worked perfectly. It's about technique, not just luck.

**Score Ranges**:
- **25-40 (Excellent)**: You're cooking with gas. Competition-level thermalling.
- **15-25 (Good)**: Solid work. You got the altitude and didn't waste too much time.
- **0-15 (Fair)**: Got the job done, but there's room for improvement.

## Common Patterns You Might Notice

**High drift, low centering quality**: You might be entering too wide or not tightening your circle fast enough when you find lift.

**Good centering time but low efficiency**: The thermal itself might have been weak or broken. Not always your fault!

**High variability**: Could be conditions (rowdy day), or could be inconsistent bank angle. Check your turn rate consistency.

**Quick core entry on one thermal, slow on another**: Pay attention to entry technique. Did you enter upwind vs. downwind? Overshoot the core?

## When to Use This Tool

- **Post-flight debrief**: Understand what worked and what didn't
- **Competition prep**: Analyze your thermalling technique under pressure
- **Comparing conditions**: See how thermal quality varies with time of day, location, or weather
- **Tracking improvement**: Run analysis on flights from different months to see skill progression
- **Before the next beer**: Show your mates that you *did* actually center that 6 m/s thermal (proof!)

## Tips for Better Analysis

1. **Clean GPS data helps**: Weak GPS signal = less accurate analysis
2. **Compare similar thermals**: Compare techniques in similar conditions for meaningful insights
3. **Don't obsess over one flight**: Trends over multiple flights matter more than one perfect thermal
4. **Wind context matters**: A "fair" score in 30 km/h wind might be better than "excellent" in dead air

## What This Tool Doesn't Do

- **Predict future thermals**: It's analysis, not forecasting (we're working on that... kidding)
- **Judge your life choices**: Whether you should have taken that thermal at 11 AM vs. pushing on? Still your call
- **Replace experience**: The tool shows data, but learning to *feel* thermals still requires stick time

## The Bottom Line

This tool won't make you a better pilot overnight, but it will show you *exactly* what you're doing in thermals. Whether you're trying to shave seconds off your centering time or just curious why that one thermal felt different, the Advanced Thermal Analysis has your back.

Now go fly, get some thermals, and come back to see if you're as good as you think you are.

---

See also : [Advanced thermal analysis settings](advanced-thermal-analysis-settings.md)