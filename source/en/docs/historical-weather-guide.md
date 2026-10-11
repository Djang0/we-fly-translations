---
title: Historical Weather Guide
description: Understand the actual atmospheric conditions recorded on the day of any flight in your logbook
category: Your Flights
order: 3
---

# The Historical Weather: Know What You Were Flying In

You just had a cracking XC day, topped out at cloudbase, and now you're back at the car wondering what exactly was going on up there. Or maybe you landed short and want to know whether you got beaten by a convergence or just made a bad call. The **Weather Tab** gives you the full atmospheric picture for every flight in your logbook, after the fact.

Powered by the **Open-Meteo historical archive**, this tab pulls the actual recorded weather at your takeoff site for the exact day you flew. Not a forecast. Not an estimation. The real numbers, hour by hour.

---

## What You'll See at a Glance

At the top of the tab, six summary cards give you the day's highlights:

| Card | What it tells you |
|---|---|
| **Temperature** | Day max and min, plus "feels like" values |
| **Precipitation** | Total rainfall for the day |
| **Max Wind** | Peak sustained wind, max gust, and its direction |
| **Sunshine** | How many hours of direct sunlight hit the ground |
| **Sunrise** and **Sunset** | Local times for the day's usable flying window |

These are your quick sanity checks: was it a full-sun day or were you fighting through patches all afternoon?

---

## Hourly Conditions Table

This is where it gets interesting. The table breaks down conditions hour by hour across 13 columns. The hours that fall within your **actual flight window** (takeoff to landing) are highlighted, so you can zero in on what the atmosphere was doing while you were in the air.

Here's what each column means:

### Hour
Local hour of the reading (HH:MM format). The small dot next to the hour marks hours that overlap with your flight.

### Cond.: Weather Condition
A WMO-coded weather icon and label. Covers everything from "Clear sky" to "Thunderstorm with heavy hail". If you were scratching under a grey sky, this confirms whether it was overcast, partial cloud, or actual fog.

### Temp: Temperature at 2m
Air temperature at ground level (2 metres), in the temperature unit you picked in your profile. Colour-coded from blue (freezing) through cyan, green, yellow, orange, and red (hot). A quick visual shortcut: green is your comfort zone, orange means it was a warm one.

### Feels: Apparent Temperature
What it actually felt like, factoring in humidity and wind chill. Useful for understanding why launch felt cold even when the thermometer said 18°C.

### Humid.: Relative Humidity
The percentage of moisture in the air. High humidity (above ~80%) tends to suppress thermal development and can indicate incoming instability. Low humidity combined with strong sun is often a sign the day went off properly.

### Wind: Wind Speed at 10m
Sustained wind speed at 10 metres above ground, in your wind unit (shown in the column header). This is the official surface wind reference, measured at standard meteorological height.

### Dir.: Wind Direction
Compass direction the wind is blowing **from** (N, NE, E, etc.), with a rotated arrow to match. Sixteen-point resolution so you can see if the valley breeze was holding or whether the gradient started leaking in.

### Gusts: Wind Gust Speed
Peak gust recorded during that hour, in the same unit as the wind. If this number is significantly higher than the sustained wind, the air was turbulent. Gust factor (gusts ÷ wind) above 1.5 is a flag worth noting.

### Cloud: Total Cloud Cover
Percentage of the sky covered by clouds at all levels, shown with a visual bar. This is the combined total. See the cloud layer breakdown section below for a more granular picture.

### Rain: Precipitation
Rainfall accumulated during the hour (unit in the column header). Shown in blue when non-zero. Even a trace can indicate a passing shower; a steady hourly amount means it was properly raining somewhere near your site.

### Pressure: Mean Sea Level Pressure
Atmospheric pressure normalised to sea level, in **hPa**. A dropping pressure across the day points toward deteriorating conditions; a rising pressure generally means improvement. Most pilots look at this trend rather than the absolute value.

### PBL AGL: Planetary Boundary Layer Height
The ceiling of the convective mixing layer: essentially, the theoretical maximum altitude that thermals can reach under the given atmospheric conditions, in your altitude unit, **above ground level (AGL)**. This value is measured from the terrain at your takeoff site, not from sea level. If you were punching through cloudbase and wondering how high you could go, this is your number. High PBL (2000m+ AGL) on a sunny day usually means sky's the limit; low PBL (below 1000m AGL) and you were scratching.

> PBL data may not be available for all historical dates. When present, it also appears as an interactive bar chart below the table.

### Radiation: Shortwave Solar Radiation
Solar energy hitting the ground, in **W/m²**. This drives thermal production. Values above 600 W/m² with good atmospheric instability are typically where the day fires up. If radiation peaked at 800+ W/m² and you still couldn't find lift, blame the inversion.

---

## Boundary Layer Height Chart

When PBL data is available, a bar chart below the table visualises the boundary layer altitude across the day. Hours within your flight window are highlighted. Hovering over a bar shows the exact altitude for that hour.

Use this to see whether the ceiling was climbing through your flight or already collapsing when you launched late.

---

## Cloud Layer Breakdown

Below the hourly table, you'll find three values averaged across your **flight window only**:

- **Low clouds**: below 2 km. These are the ones that block solar heating at ground level and kill thermals.
- **Mid clouds**: 2 to 6 km. Less impact on thermal development, more relevant for XC visibility.
- **High clouds**: above 6 km. Cirrus and high-level ice cloud. Often cosmetic, but persistent high cloud can reduce radiation enough to soften the day.

---

## A Few Things to Keep in Mind

**This is historical archive data, not a point measurement.** Open-Meteo reconstructs conditions from ERA5 reanalysis and high-resolution models. The values are representative of conditions at your takeoff coordinates, but local terrain effects (valley winds, shadow zones, microclimate) won't all be captured. Use this as a meteorological context layer, not ground truth.

**Elevation matters.** The data is referenced to your takeoff's GPS elevation. Temperature and pressure columns account for this, but always remember that ridge, pass, or cloudbase conditions may differ from what the 2m sensor shows.

**The data is cached after the first load.** Historical weather never changes, so once fetched it's stored and subsequent views are instant.

---

## Practical Uses

- **Post-flight debrief**: Cross-reference when you hit the strongest lift with the solar radiation and PBL curves.
- **Troubleshooting a bad day**: Check if the humidity or cloud cover killed the thermals, or whether the gust factor made conditions rougher than expected.
- **Comparing similar days**: Pull up two flights from the same site and different seasons to see what atmospheric conditions made one day fly and the other not.
- **Training and analysis**: If you're working with a coach or trying to improve your weather reading, this gives you the verified atmospheric story behind every flight in your log.

---

*Weather data provided by [Open-Meteo](https://open-meteo.com), free, open historical weather archive.*
