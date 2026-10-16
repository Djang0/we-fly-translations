---
title: We-Track Privacy Policy
description: What the We-Track flight instrument app does with your data, and what never leaves your phone
category: Account & Data
order: 5
---

**Last Updated:** October 16, 2026

## 1. Who we are

We-Track is a free flight instrument app for paragliding pilots, for Android and iOS: moving map, vario, thermal assistant, task navigation, airspace alerts and IGC flight recording.

**Data controller:** Upsky, Belgium.
**Contact:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud) (put "We-Track privacy" in the subject line).

We-Track works on its own, without an account. It can also connect to **We-Fly** (we-fly.cloud), a separate logbook and flight analysis service. What We-Fly does with your data once it receives it is covered by the [We-Fly Privacy Policy](https://we-fly.cloud/doc/privacy-policy).

## 2. In short

- Your flights, your position and your settings stay **on your phone**.
- They leave it only for something you asked for: syncing with We-Fly when you are signed in, loading map tiles, loading a task code, sharing a file.
- No analytics, no advertising, no tracking across apps, no profiling. We do not sell or rent any data.
- We-Track has no account of its own and no server of its own that collects data about you.
- Heart rate is recorded in your flight files **only if you turn that on**.

## 3. Data stored on your phone

All of this is kept in the app's private storage. Other apps cannot read it, and it is **excluded from phone backups** (iCloud, Google, device transfer). The downside: flights not uploaded to We-Fly are lost if you lose your phone or uninstall the app.

| Data | What it is | Why |
|---|---|---|
| Position | GPS position, speed, altitude while the app is in use | Map, navigation, vario, wind, flight detection and recording |
| Flights (IGC files) | Your GPS track with times and altitudes, take-off and landing, pilot name and glider (from your settings or your We-Fly profile), app version, phone system name (e.g. "android" or "ios 18") and a random recorder identifier | Your logbook, the files you share or upload |
| Instrument data | Data from Bluetooth instruments you connect, e.g. a Vector Vario (pressure, airspeed, temperature, humidity, attitude, wind) | Shown in flight and written into your IGC files |
| Heart rate | Beats per minute from a Bluetooth heart-rate belt you connect | Shown in flight. Written into IGC files **only with your consent** (section 6) |
| Settings | Units, layouts, wing and polar, pilot name, audio and display preferences | Running the app the way you set it up |
| Tasks, waypoints, targets | Tasks you load or create, waypoint collections | Navigation |
| Airspace and maps | Airspace files you import or download, offline map and terrain areas you download | Alerts and maps without network |
| Known devices | Name and identifier of Bluetooth instruments you paired | Reconnecting to them |
| Passwords and sign-in tokens | We-Fly sign-in tokens, contest account passwords you choose to remember | Staying signed in |

Passwords and tokens are stored in the phone's secure storage (iOS Keychain, Android Keystore). They are never written to settings files, logs or backups. On iOS, they are erased the first time the app starts after a reinstall.

The app keeps no logs in release builds.

## 4. Permissions we ask for

We ask for each permission when you first use the feature that needs it.

- **Location, while using the app.** To show your position, navigate and record your flight. During a flight, recording continues with the screen off; while it does, Android shows a persistent notification and iOS shows the blue location indicator. We never ask for "Always" location.
- **Bluetooth.** To connect instruments (varios, heart-rate belts). On Android, Bluetooth scanning is declared as never used to find your location.
- **Camera.** Only to scan task QR codes. Images are processed on the phone and never stored or sent.
- **Notifications** (Android). For the notification shown while a flight is being recorded.
- **Motion and fitness** (iOS). To read the phone's barometer for altitude and vertical speed.

## 5. What leaves your phone, and to whom

### 5.1 We-Fly (only when you sign in)

Signing in to We-Fly is optional. We-Track signs in through We-Fly's own page; We-Track never sees your We-Fly password, and does not receive your e-mail address. Once you are signed in:

- **Flights you record are uploaded automatically** to your We-Fly logbook after landing, with everything the IGC file contains (section 3). You can also upload flights you imported.
- Your We-Fly flights, tasks, waypoint collections and screen layouts are synchronised both ways.
- We-Track reads your profile name (for the IGC pilot name) and your friends list (for the Friends screen).
- When you download airspace data, We-Fly receives the area you chose (a country, or a 300 km area around your position) to send the matching airspace.
- We-Track does **not** send your live position to We-Fly.

You can sign out at any time in Settings. Signing out revokes the sign-in on We-Fly's side. You can also choose to delete the We-Fly data mirrored on your phone; flights recorded on the phone are never deleted by signing out. To delete data stored on We-Fly, use your We-Fly profile (see the [We-Fly Privacy Policy](https://we-fly.cloud/doc/privacy-policy)).

### 5.2 Map and terrain servers

To draw maps, the app downloads map images ("tiles") from the provider of the base map you choose. Like any website, these servers see your IP address, the app name and the map area you are looking at, which tells them roughly where you are. They receive no account or identifier from us.

| Provider | Used for |
|---|---|
| [OpenStreetMap Foundation](https://osmfoundation.org/wiki/Privacy_Policy) (tile.openstreetmap.org) | "We-Fly theme" base map |
| [OpenTopoMap](https://opentopomap.org/about) | Topographic base map |
| [Esri](https://www.esri.com/en-us/privacy/overview) (ArcGIS Online) | Satellite base map |
| [OpenFreeMap](https://openfreemap.org) | Terrain base map and offline maps |
| [Mapterhorn](https://mapterhorn.com) | Terrain relief and ground elevation, online and offline |

Offline areas you download come from OpenFreeMap and Mapterhorn; once downloaded, those maps work without contacting anyone.

### 5.3 XContest task codes

When you type an XContest task code, the code is sent to tools.xcontest.org to fetch the task. No other data is sent.

### 5.4 QR code scanning on Android (Google ML Kit)

On Android, task QR codes are read with Google ML Kit. The images are processed on the phone. Google ML Kit may send Google technical data about how the scanner runs (for example performance and usage statistics), independently of We-Track. See [Google ML Kit terms and privacy](https://developers.google.com/ml-kit/terms).

### 5.5 Files you share

When you export or share an IGC file or a task, the app hands it to the system share sheet; you choose where it goes.

## 6. Heart rate

Heart rate is health data, which European law protects more strictly.

- The heart-rate display works whenever a belt is connected and is never saved.
- Heart rate is written into your IGC flight files only if you turn on **Record heart rate in flight files** and confirm your consent. It is off by default.
- When it is on, heart rate is stored in your flight files on the phone and, if you are signed in to We-Fly, uploaded with your flights.
- You can turn it off at any time. Flights recorded afterwards no longer contain heart rate; flights already recorded keep it until you delete them from your logbook (and from We-Fly).

## 7. Legal bases (GDPR)

- **Providing the features you use** (Art. 6(1)(b)): recording flights, maps, syncing with We-Fly when you sign in, loading tasks.
- **Your consent** (Art. 6(1)(a) and, for heart rate, Art. 9(2)(a)): heart rate in flight files. You can withdraw it at any time; this does not affect what was done before.
- **Legitimate interest** (Art. 6(1)(f)): the technical data map servers need to send map tiles.

## 8. How long data is kept

- **On your phone:** until you delete it in the app or uninstall the app. Nothing is kept in backups.
- **On We-Fly:** as described in the [We-Fly Privacy Policy](https://we-fly.cloud/doc/privacy-policy).
- **Map servers, XContest, Google:** according to their own policies (section 5).

## 9. Security

- App-private storage only; no shared storage.
- Encrypted connections (HTTPS) for every network request.
- Passwords and tokens in the phone's secure storage, never in plain files or logs.
- Sign-in to We-Fly uses OAuth with PKCE: the app never handles your We-Fly password.

## 10. Transfers outside the European Union

Some providers listed in section 5 may process data outside the European Union (for example Esri and Google in the United States). They are responsible for the safeguards they apply; see their policies.

## 11. Your rights

You have the right to access, correct, delete and receive a copy of your personal data, to object to or restrict its processing, and to withdraw your consent at any time.

Most of your data never reaches us: you can see, export and delete it directly in the app. For data on We-Fly, use your We-Fly profile or contact We-Fly. For anything else, write to [contact@we-fly.cloud](mailto:contact@we-fly.cloud). We answer within one month.

You can also file a complaint with the Belgian Data Protection Authority ([www.dataprotectionauthority.be](https://www.dataprotectionauthority.be)) or the authority of the country where you live.

## 12. Children

We-Track is not intended for children under 13. Syncing with We-Fly requires meeting We-Fly's own minimum age (see the [We-Fly Privacy Policy](https://we-fly.cloud/doc/privacy-policy)). If you believe a child under 13 has sent us personal data, contact us and we will delete it.

## 13. Changes

If this policy changes, we update the date at the top and, for important changes, tell you in the app before they apply.

## 14. Contact

**Data controller:** Upsky, Belgium
**E-mail:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud), subject "We-Track privacy"
