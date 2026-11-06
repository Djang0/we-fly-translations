---
title: Why Baro and GPS Altitudes Differ
description: What your logger's barometric altitude measures, why it disagrees with GPS, and how We-Fly sets it to your takeoff
category: Your Flights
order: 7
---

## Two altitudes, two references

Most instruments log two altitudes every second: one from the barometer, one from GPS. On the flight page, the **Baro / GPS** switch above the map picks which one the chart shows. They rarely agree, and on some days they are 200 m apart.

**GPS altitude** is your height above mean sea level, measured by satellites. It is noisy from second to second but has no daily bias.

**Baro altitude** comes from air pressure. It is smooth and precise from one second to the next, which is why your vario uses it. But the IGC standard asks loggers to record it against **standard pressure, 1013 hPa**, not against the real sea-level pressure of the day (the QNH). Your vario screen shows QNH if you set it before launch. The file always stores the standard version.

## How far off it can be

Near sea level, 1 hPa is about 8 m of height.

| Day | Sea-level pressure | Baro in the file reads |
|---|---|---|
| Standard | 1013 hPa | about right |
| Strong high | 1030 hPa | about 140 m too low |
| Winter high | 1040 hPa | about 225 m too low |
| Deep low | 985 hPa | about 230 m too high |

Temperature adds a smaller error that grows with height: in air warmer than standard, the barometer under-reads by about 4 % of your height per 10 °C.

On a strong high, a field near the coast reads below zero. A winch field at 30 m, under 1030 hPa, logs about -110 m. That reading is correct for the standard it uses; your logger is not broken.

## What We-Fly shows

On the altitude chart, the baro curve is **set to takeoff**: shifted once for the whole flight so that, on launch, it sits on the terrain, the way you set your vario before taking off. The readout above the chart says **Baro alt · set to takeoff**, and the **ⓘ** next to the Baro / GPS switch tells you the shift applied to that flight. When the track has no terrain data, the baro curve is lined up with GPS instead.

The same shift gives an estimate of the day's sea-level pressure: the **Heights** card on the flight summary shows it as **QNH of the day**. It is approximate, because temperature away from the standard atmosphere shifts it, more on high takeoffs.

The shift only moves the curve up or down. Your vario, climb rates, height gains and thermals are computed from differences in altitude, so they do not depend on it. Every absolute height in the analysis (maximum and minimum altitude, the ceiling, thermal tops, heights above ground) uses the same shift.

Your IGC file is never changed: downloads and exports give you the original, exactly as your instrument wrote it.

## Which one to trust

- **For climbs, sinks and height gained:** baro. It is smooth and the daily bias cancels out.
- **For absolute height, airspace and comparing with other pilots:** GPS, or baro set to takeoff. The airspace check on the flight map always uses GPS.
- **Phones without a barometer:** both curves are GPS. There is nothing to set, and the **ⓘ** says so.

If the two curves stay far apart all flight even after the shift, or the baro jumps by hundreds of metres, your instrument's pressure sensor may be faulty. We-Fly flags those flights under **Profile → Anomalies**.
