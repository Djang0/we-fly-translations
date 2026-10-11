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

The Cockpit has six different views, each providing unique insights:

1. **Overview** - Statistics and totals about filtered data
2. **Glider** - Performance breakdown by wing
3. **Season** - Year-over-year comparison
4. **Country** - International flying statistics
5. **Takeoff** - Site-specific statistics with performance scores
6. **Month** - Monthly breakdown and seasonal patterns

### Navigation

- Use the main tabs to switch between views
- Each view is scoped by [filtered data](./data-filters.md)

## Overview Statistics

The Overview page [Cockpit](/cockpit) displays [filtered data](./data-filters.md) flying statistics.

### Flight Totals

#### Total Flights
- **Definition** - Count of all flights in your logbook

#### Total Air Time
- **Definition** - Sum of all flight durations
- **Unit** - Hours and minutes
- **Calculation** - Sum of all (Landing time to Takeoff time)

#### Total Thermaling Time
- **Definition** - Total time spent circling in thermals
- **Unit** - Hours and minutes
- **Breakdown** - Separated into left and right thermaling

#### Total Gliding Time
- **Definition** - Total time spent in straight flight
- **Unit** - Hours and minutes
- **Interpretation** - Higher gliding time = more efficient XC flying

### Distance & Scoring

All XC distances & scoring are computed by [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score) open source library maintened and created by [Momtchil Momtchev](https://github.com/mmomtchev).

#### Total XC Distance
- **Definition** - Sum of all scored cross-country distances
- **Unit** - Kilometers
- **Use** - Track your total XC achievement

#### Total XC Points
- **Definition** - Sum of all XContest scores
- **Includes** - All multipliers (free flight, triangles)
- **Use** - Compare your XC performance over time

#### Total Track Length
- **Definition** - Sum of all GPS track distances
- **Unit** - Kilometers
- **Always > Total XC Distance** - Includes all circling and deviations

### Personal Bests

#### Max XC Distance
- **Definition** - Longest scored cross-country flight
- **Display** - Distance and date
- **Achievement** - Your personal best XC!

#### Max XC Points
- **Definition** - Highest XContest score for a single flight
- **Display** - Points and date
- **Note** - May differ from max distance (due to triangle multipliers)

#### Max Altitude
- **Definition** - Highest altitude reached across all flights
- **Unit** - Meters above sea level (ASL)
- **Display** - Altitude

#### Max Height Gain
- **Definition** - Largest altitude gain in a single flight
- **Unit** - Meters
- **Calculation** - Max altitude - Min altitude

#### Strongest Thermal
- **Definition** - Best climb rate ever encountered
- **Unit** - Meters per second (m/s)
- **Display** - Climb rate

#### Max Speed
- **Definition** - Fastest ground speed recorded
- **Unit** - Kilometers per hour (km/h)
- **Note** - Includes wind effect

#### Max Duration
- **Definition** - Longest flight time
- **Unit** - Hours and minutes
- **Display** - Duration and date

## By Month View

Access at **/cockpit?view=month** to see monthly statistics.

### Monthly Breakdown

For each month with flights:
- Total flights that month
- Total distance
- Total points
- Average flight metrics

### Seasonal Patterns

Identify patterns:
- **Which months do you fly most?**
- **When are thermal conditions strongest?**
- **How does your flying change throughout the year?**

### Use Cases

- **Plan your season** - See when you typically fly best
- **Track consistency** - How many months per year are you active?
- **Identify peak season** - When do you achieve the best XC distances?

## By Season (Year) View

Access at **/cockpit?view=season** to see annual statistics.

### Year-over-Year Comparison

For each season (year):
- Total flights
- Total XC distance and points
- Average flight metrics
- Personal bests that year

### Progress Tracking

Compare years to see:
- Are you flying more?
- Are your XC distances increasing?
- How do different years compare?

### Use Cases

- **Track long-term progress**
- **Compare different years**
- **Set annual goals**

## By Glider View

Access at **/cockpit?view=glider** to compare wing performance.

### Per-Glider Statistics

For each glider in your logbook:
- Number of flights
- Total distance and points
- Average XC distance
- Average flight duration
- Max distance achieved
- Average climb rates

### Comparing Wings

Answer questions like:
- Which wing gives me the best XC performance?
- How do my different gliders compare?
- Which wing do I fly most often?

### Use Cases

- **Equipment decisions** - Choosing your next wing
- **Performance comparison** - Compare different wing classes
- **Specialization** - See which wing works best for different conditions

## By Takeoff View

Access at **/cockpit?view=takeoff** to analyze site-specific performance.

### Per-Site Statistics

For each takeoff site:
- Number of flights from that site
- Total XC distance
- Average XC distance
- Max distance from that site
- **Performance Score (Z-score)** - Statistical outlier detection (see: [Z Score Pilot Guide](/doc/z-score-pilot-guide))

## By Country View

Access at **/cockpit/?view=country** to see international statistics.

### Per-Country Statistics

For each country you've flown in:
- Number of flights
- Total XC distance
- Average metrics
- Top sites in that country

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
