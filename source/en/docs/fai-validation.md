---
title: FAI Validation
description: Use FAI public API to validate your flight
category: Your Flights
order: 2
---

## FAI Flight Validation

### What is FAI Validation?

FAI (Fédération Aéronautique Internationale) is the world air sports federation. We-Fly can submit flights to the official FAI CIVL validation service.

### When to Use FAI Validation

Use FAI validation for:
- **Competition flights** - Official contest verification
- **Record claims** - World/national record attempts
- **Official verification** - Proof of flight legitimacy
- **Certification** - Badge and rating requirements

### How It Works

1. **Open flight** - Navigate to flight detail page
2. **Click "Validate with FAI"** - Submit to FAI CIVL service
3. **Processing** - IGC file sent to http://vali.fai-civl.org
4. **Results** - Validation result returned
5. **Storage** - Result stored with flight

### Validation Results

Two possible outcomes:

#### PASSED
- Flight is valid according to FAI rules
- IGC file integrity confirmed
- GPS track is legitimate
- No tampering detected
- Validation certificate available

#### FAILED
- Flight did not pass validation
- Possible reasons:
  - IGC file integrity issues
  - GPS track anomalies
  - Invalid data format
  - Suspected tampering

### What FAI Checks

The FAI validation service verifies:
- **G-record integrity** - Security signature validation
- **File format** - Valid IGC structure
- **GPS track continuity** - No gaps or jumps
- **Data consistency** - Altitude, position, time correlation
- **Instrument validation** - Known/approved GPS devices

### Validation Certificate

If flight passes:
- Validation certificate link provided
- Can be used for official submissions
- Permanent record on FAI servers
- Proof of legitimate flight

### Important Notes

**FAI validation is NOT required for:**
- Regular We-Fly usage
- Personal logbook
- Sharing flights with friends
- Community features

**FAI validation IS required for:**
- Official competitions
- Record claims
- Pilot certification/badges
- Contest prize claims

