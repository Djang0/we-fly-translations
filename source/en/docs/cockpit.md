---
title: Cockpit Analytics
description: Analyze your flying statistics, trends, and performance
category: Cockpit
order: 1
---
The Cockpit is your performance dashboard, providing comprehensive statistics and analytics across all your flights. Use it to track progress, identify patterns, and discover your best flying sites and conditions.

## Overview

Access the [Cockpit](/cockpit) to see your complete flying statistics.

## Cockpit Views

The Cockpit has eleven views, each providing unique insights:

1. **Overview** - Statistics and totals about filtered data
2. **Trends** - Your flying over time, day by day up to year by year
3. **Thermaling** - Climb rates, circling and thermal quality, season by season
4. **Phases** - How your air time splits between thermal, search, glide and float
5. **Glider** - Air time breakdown by wing
6. **Takeoff** - Site-specific statistics with z-scores
7. **Country** - International flying statistics
8. **Season** - Year-over-year comparison
9. **Month** - Monthly breakdown and seasonal patterns
10. **CIVL** - Your CIVL world ranking
11. **Map** - Your takeoffs on a map

### Navigation

- Pick a view from the Cockpit menu
- Each view is scoped by [filtered data](./data-filters.md)

## Overview Statistics

The Overview page [Cockpit](/cockpit) displays [filtered data](./data-filters.md) flying statistics. Every distance, altitude and speed is shown in the units you picked in your profile.

### Flight Totals

The headline strip at the top gives you the big four:

#### Total Flights
- **Definition** - Count of all flights in your logbook

#### Total Air Time
- **Definition** - Sum of all flight durations
- **Unit** - Hours and minutes
- **Calculation** - Sum of all (Landing time to Takeoff time)

#### Distance
- **Definition** - Total track length across all flights

#### Longest Flight
- **Definition** - Your longest flight time
- **Display** - Duration; click it to open that flight

#### Flight Efficiency
- **Definition** - Time spent circling in thermals (**Thermaling**) versus time spent in straight flight (**Gliding**)
- **Unit** - Hours and minutes, plus the split as a percentage

#### Thermaling Balance
- **Definition** - How your thermaling time splits between **Left turns** and **Right turns**

#### Flight Mode Balance
- **Definition** - How your air time splits between **Solo** and **Tandem** flights (only shown when you have tandem flights)

### Distance & Scoring

All XC distances & scoring are computed by [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score) open source library maintened and created by [Momtchil Momtchev](https://github.com/mmomtchev).

#### XC Distance
- **Definition** - Sum of all scored cross-country distances
- **Use** - Track your total XC achievement

#### XC Points
- **Definition** - Sum of all XContest scores
- **Includes** - All multipliers (free flight, triangles)
- **Use** - Compare your XC performance over time

#### Track Length
- **Definition** - Sum of all GPS track distances
- **Always > XC distance** - Includes all circling and deviations

### Personal Bests

Each best links to the flight it came from: click the value to open it.

#### Max Altitude
- **Definition** - Highest altitude reached across all flights
- **Unit** - Above sea level (ASL)

#### Max Height Gain
- **Definition** - Largest altitude gain in a single flight
- **Calculation** - Max altitude - Min altitude

#### Max Speed
- **Definition** - Fastest ground speed held for 5 seconds, with GPS spikes filtered out
- **Note** - Includes wind effect

#### Best XC Distance
- **Definition** - Longest scored cross-country flight
- **Achievement** - Your personal best XC!

#### Best XC Score
- **Definition** - Highest XContest score for a single flight
- **Note** - May differ from best distance (due to triangle multipliers)

#### Lowest Low Save
- **Definition** - The lowest point (above ground) from which you climbed back out, and how much height you regained

### Performance Metrics

- **Med. circle time** - Median time per 360° turn
- **Med. circle radius** - Median turn radius while circling
- **Median G-factor** - Load factor (see the [G-Factor Pilot Guide](/doc/g-factor-pilot-guide))
- **Strongest thermal peak** - Best climb rate, sustained over 5 seconds; click it to jump straight to that thermal

## Trends View

Access at **/cockpit?view=trends** to see how your flying evolves over time.

Choose a **Metric** (**Air time**, **Flights**, **Avg distance**, **Avg air time**, **Avg speed**), an **Interval** (**Day**, **Week**, **Month**, **Year**), a **Period** (**30 days**, **12 months**, **This year**, **All**) and a **Breakdown** (**Total** or **By glider**). Switch the **Display** between **Chart** and **Table**. Click a column to open its flights in the logbook.

## Thermaling View

Access at **/cockpit?view=thermaling** for your climbing statistics across every thermal in the filtered flights: **Median Climb**, **Best Climb**, **Median Height Gain**, **Thermals/hr**, **Thermaling Time**, circle time and radius, and **Low Saves**. The season-over-season charts are grouped under **Efficiency**, **Volume**, **Technique** and **Mastery**.

## Phases View

Access at **/cockpit?view=phases** to see how your air time splits between **Thermal**, **Search**, **Glide** and **Float**, with your **Median Glide Ratio**, **Median Glide Speed** and **Circles / min**, season by season.

## By Month View

Access at **/cockpit?view=month** to see monthly statistics.

### Monthly Breakdown

- **Most Active Months** - Your busiest months, with **Total Flights** across all years, your **Most Active Year** and **Activity by Year**
- **Visual Analysis** - Monthly **Duration**, **Count** and **Z-Score**, per year, as **Grouped** or **Stacked** bars
- **Monthly Breakdown by Year** - A month by year table of your flights

### Seasonal Patterns

Identify patterns:
- **Which months do you fly most?**
- **When are thermal conditions strongest?**
- **How does your flying change throughout the year?**

### Use Cases

- **Plan your season** - See when you typically fly best
- **Track consistency** - How many months per year are you active?
- **Identify peak season** - When do you rack up the most air time?

## By Season (Year) View

Access at **/cockpit?view=season** to see annual statistics.

### Year-over-Year Comparison

For each season (year), the table shows:
- **Flights**
- **Total hours**
- **Avg/flight** (hours per flight)
- **Z-score** of the average flight time

The chart above lets you compare seasons by **Duration**, **Count** or **Z-Score**.

### Progress Tracking

Compare years to see:
- Are you flying more?
- Are your flights getting longer?
- How do different years compare?

### Use Cases

- **Track long-term progress**
- **Compare different years**
- **Set annual goals**

## By Glider View

Access at **/cockpit?view=glider** to compare your wings.

### Per-Glider Statistics

For each glider in your logbook:
- **Flights**
- **Total hours**
- **Avg/flight** (hours per flight)
- **Z-score** of the average flight time

### Comparing Wings

Answer questions like:
- Which wing keeps me in the air longest?
- How do my different gliders compare?
- Which wing do I fly most often?

### Use Cases

- **Equipment decisions** - Choosing your next wing
- **Performance comparison** - Compare different wing classes
- **Specialization** - See which wing works best for different conditions

## By Takeoff View

Access at **/cockpit?view=takeoff** to analyze site-specific performance.

### Per-Site Statistics

For each takeoff site, a sortable table shows:
- **Flights** from that site
- **Total Hours**
- **Avg/Flight** (hours per flight)
- **Z-Score** - Statistical outlier detection (see: [Z Score Pilot Guide](/doc/z-score-pilot-guide))

## By Country View

Access at **/cockpit?view=country** to see international statistics.

### Per-Country Statistics

For each country you've flown in:
- **Flights**
- **Total hours**
- **Avg/flight** (hours per flight)
- **Z-score** of the average flight time

## CIVL View

Access at **/cockpit?view=civl** to see your CIVL ranking (world, Europe and country) and its history. Add your CIVL ID in your profile settings first.

## Map View

Access at **/cockpit?view=map** to see every takeoff you've flown from on a map, with the number of flights at each.

## Tips & Best Practices

### Build Your Dataset

- **Upload all flights** - More data = better statistics
- **Historical flights** - Upload old IGC files for complete picture
- **Consistency** - Regular flying builds better trends

### Use Filters Strategically

- **Start broad** - See overall patterns first
- **Then narrow** - Apply filters for specific questions
- **Compare apples to apples** - Use same filters when comparing

### Understand Context

Statistics are powerful, but consider:
- **Skill progression** - You improve over time
- **Equipment changes** - New gliders affect performance
- **Conditions** - Weather varies season to season
- **Sample size** - 2 flights vs 200 flights (which is more reliable?)

### Set Goals

Use statistics to:
- **Track progress** - Compare to previous seasons
- **Set challenges** - Beat your personal bests
- **Plan improvements** - Identify areas to develop
