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
- **Official verification** - Proof that the file was not altered
- **Badge claims** - When a contest or federation asks for a signed track

### How It Works

1. **Open your flight** - Validation is available on your own flights
2. **Click "Validate flight (FAI)"** - The check icon in the flight's toolbar (on a phone, it sits in the **⋯** menu)
3. **Confirm** - The **FAI Flight Validation** dialog explains what happens; click **Proceed**
4. **Processing** - We-Fly sends the original IGC file, unchanged, to the FAI CIVL validation service (vali.fai-civl.org)
5. **Results** - The button turns into **FAI validation passed** or **FAI validation failed**, and the result is stored with the flight

Click the button again to open the **FAI Validation Result** dialog (status, message and the full validation data). To run the check again, use **Re-validate (FAI)** in the flight's **⋯** menu.

### Validation Results

Two possible outcomes:

#### PASSED
- The FAI service accepted the file
- The IGC security record (G-record) matches the file content
- The file has not been altered since the instrument signed it

#### FAILED
- The FAI service rejected the file
- Possible reasons:
  - Missing or broken G-record (some apps and instruments do not sign their files)
  - The file was edited after recording
  - The instrument is not known to the FAI service
  - Invalid data format

The **Message** in the result dialog tells you what the service reported.

### What FAI Checks

The FAI validation service verifies the file itself, not your flying:
- **G-record integrity** - The security signature written by the instrument
- **File format** - Valid IGC structure
- **Instrument validation** - The signature is checked against the instrument maker's validation program

It does not judge whether the flight was legal, scored correctly or safe.

### Where the Result Lives

The validation result is saved with the flight in We-Fly, so you can open it again at any time. The FAI service itself returns a verdict, not a certificate: if a contest or record claim asks for proof, it usually wants the original IGC file, which We-Fly keeps byte for byte as you uploaded it.

### Important Notes

**FAI validation is NOT required for:**
- Regular We-Fly usage
- Personal logbook
- Sharing flights with friends
- Community features

**A signed, valid IGC file is often required for:**
- Official competitions
- Record claims
- Some contest and badge claims

Check the rules of the contest or federation you submit to.

