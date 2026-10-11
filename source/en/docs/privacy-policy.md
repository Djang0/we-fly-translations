---
title: Privacy Policy
description: How We-Fly collects, uses, and protects your personal data under GDPR
category: Account & Data
order: 3
---

**Last Updated:** October 7, 2026

## 1. Introduction

Welcome to We-Fly. We are committed to protecting your personal data and respecting your privacy rights in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and applicable data protection laws.

This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our paragliding flight tracking and analysis platform.

### 1.1 Data Controller

We-Fly is the data controller responsible for your personal data. For questions about this Privacy Policy or your data rights, please contact us at the details provided in Section 13.

### 1.2 Scope

This policy applies to all users of the We-Fly platform, including:
- Registered users with accounts
- Visitors to our public pages
- Users of our shared flight links

## 2. What Data We Collect

### 2.1 Account Information (via Google OAuth)

When you create an account using "Sign in with Google," we collect:

- **Email address** - For account identification and communication
- **Full name** - For profile display and flight attribution
- **Profile picture URL** - From your Google account for profile display
- **Email verification status** - Provided by Google
- **Google user ID** - Unique identifier from Google OAuth

We do **not** collect or store passwords. All authentication is handled securely by Google.

### 2.2 Flight Data (from IGC File Uploads)

When you upload paragliding flight records, we collect and process:

**File Metadata:**
- Pilot name (extracted from IGC file or your account name)
- Paraglider wing model and type
- GPS device information (manufacturer, serial number, firmware)
- Flight date and time
- Original filename

**GPS Track Data:**
- Complete GPS track (latitude, longitude, altitude, time stamps)
- Takeoff location and time
- Landing location and time
- Flight duration
- Maximum and minimum altitudes
- Total distance traveled

**Computed Flight Analytics:**
- Thermal activity analysis (climb rates, duration, altitude gain)
- Wind speed and direction estimates
- Flight performance metrics
- XContest scoring data (distance, points, flight type classification)
- FAI validation data (if you request validation)
- Turn points and route segments

**Technical Identifiers:**
- MD5 hash of GPS track (for duplicate detection)
- Database record identifiers
- File storage paths (if local storage is enabled)

### 2.3 Takeoff Site Data

We maintain a database of paragliding launch sites containing:
- Site name and geographic coordinates
- Elevation above sea level
- Predominant wind direction
- Country, city, and postal code (obtained via OpenStreetMap's Nominatim reverse geocoding service)

This data is aggregated from user flight uploads and public geographic databases. Location metadata is enriched using OpenStreetMap data (© OpenStreetMap contributors).

### 2.4 Profile and Preference Data

- User role (user or administrator)
- Profile visibility preference (public or private)
- Display preferences (table columns, sorting, filters)
- Theme preference
- Email preferences (whether you receive getting-started tips)
- Account creation and modification timestamps

### 2.5 Statistical Data

We compute aggregate statistics from your flights:
- Total flight count and hours
- Total distance flown
- Number of unique takeoff sites and countries visited
- Average flight duration
- Flight type breakdown

### 2.6 Shared Flight Links

When you generate a shareable link for a specific flight, we create:
- A cryptographically secure 43-character identifier
- This allows public access to a single flight without exposing your entire profile

## 3. Legal Basis for Processing

Under GDPR Article 6, we process your personal data based on:

### 3.1 Consent (Article 6(1)(a))
- Google OAuth authentication (you explicitly consent by clicking "Sign in with Google")
- Profile visibility settings (you opt-in to make your profile public)
- Third-party API integrations (FAI validation, geocoding)

### 3.2 Contract Performance (Article 6(1)(b))
- Processing flight uploads you submit
- Providing flight analysis and statistics
- Maintaining your account and user preferences
- Delivering the core features of our service

### 3.3 Legitimate Interest (Article 6(1)(f))
- Preventing duplicate flight uploads
- Detecting and preventing fraud or abuse
- Improving our service and user experience
- Maintaining security and system integrity
- Sending occasional tips that help you get started with the service you signed up for (you can opt out at any time, see 4.4)

You may withdraw consent at any time by deleting your account or changing your privacy settings.

## 4. How We Use Your Data

We use your personal data to:

### 4.1 Provide Core Services
- Authenticate and identify you when you log in
- Parse, analyze, and store your flight records
- Generate flight statistics and performance metrics
- Display your personal flight logbook and dashboard
- Match flights to takeoff sites automatically

### 4.2 Enable Community Features
- Display public flights (only if you enable public profile)
- Show pilot profiles in community leaderboards (with your consent)
- Identify popular takeoff sites
- Allow other pilots to discover flight routes

### 4.3 Improve Our Platform
- Aggregate anonymous statistics on platform usage
- Identify and fix technical issues
- Enhance flight analysis algorithms
- Optimize user interface and experience

### 4.4 Communicate with You
- Send service-related notifications
- Send occasional getting-started tips, for example a single reminder if your logbook is still empty a week after you join. You can turn these off at any time in **Profile → Emails**, or with the unsubscribe link at the bottom of every tip email
- Respond to support requests
- Notify you of important changes to our service or this policy

### 4.5 Ensure Security
- Prevent unauthorized access to accounts
- Detect and prevent fraudulent activity
- Validate data integrity
- Maintain audit logs of security events

We do **not** use your data for:
- Advertising or marketing to third parties
- Selling or renting your personal information
- Automated decision-making with legal effects
- Profiling for commercial purposes

## 5. Third-Party Services and Data Transfers

We share limited data with the following third-party services:

### 5.1 Google OAuth
**Purpose:** User authentication and identity verification
**Data Shared:** Email, name, profile picture (via OAuth protocol)
**Location:** United States (Google infrastructure)
**Privacy Policy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Legal Basis:** Consent (OAuth authorization)

### 5.2 Nominatim (OpenStreetMap)
**Purpose:** Reverse geocoding to determine location names from coordinates
**Data Shared:** Latitude and longitude coordinates only (no personal identifiers)
**Frequency:** Admin-triggered, not automatic
**Privacy Policy:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Legal Basis:** Legitimate interest (enhancing site information)
**Attribution:** Location data © OpenStreetMap contributors ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Purpose:** Retrieve elevation data for takeoff sites
**Data Shared:** Latitude and longitude coordinates only
**Frequency:** Admin-triggered
**Privacy Policy:** Public service, no registration required
**Legal Basis:** Legitimate interest (accurate site data)

### 5.4 FAI CIVL Flight Validation Service
**Purpose:** Validate flight records according to FAI standards
**Data Shared:** Complete IGC file content (only when you explicitly request validation)
**Endpoint:** vali.fai-civl.org/api/vali/json
**Privacy Policy:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Legal Basis:** Consent (user-initiated)

### 5.5 Map Tile Providers
**Purpose:** Display interactive maps for flight visualization
**Services Used:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Data Shared:** Only tile requests (no personal data)
**Legal Basis:** Legitimate interest (essential service functionality)

### 5.6 International Data Transfers

Some of our third-party service providers are located outside the European Economic Area (EEA), particularly in the United States. When we transfer data internationally:

- We rely on **adequacy decisions** by the European Commission (where available)
- We implement **standard contractual clauses (SCCs)** approved by the European Commission
- We ensure providers comply with **GDPR-equivalent data protection standards**

## 6. Cookies and Tracking Technologies

### 6.1 Essential Cookies (No Consent Required)

**Authentication Cookies:**
- **Purpose:** Maintain your logged-in session
- **Type:** HTTP-only, secure, encrypted JWT tokens
- **Duration:** 30 days after your last visit, and never more than 90 days after you sign in. Signing out deletes it, and resetting your password or deleting your account ends it on every device.
- **Provider:** NextAuth.js
- **Can be disabled:** No (essential for service functionality)

### 6.2 Functional Cookies (Legitimate Interest)

**Sidebar State Cookie:**
- **Name:** `sidebar_state`
- **Purpose:** Remember UI sidebar expanded/collapsed preference
- **Duration:** 7 days
- **Data Stored:** "true" or "false"

### 6.3 Local Storage

We use browser local storage for:

**Flight Display Settings:**
- **Key:** `we-fly-flights-display-settings`
- **Purpose:** Cache column visibility and sorting preferences for faster page load
- **Data:** JSON object with UI preferences
- **Synced:** To server for cross-device access

**Filter Preferences:**
- **Purpose:** Persist flight search and filter settings
- **Data:** Search criteria, date ranges, location filters
- **Scope:** Client-side only

You can clear local storage at any time through your browser settings. This will reset UI preferences to defaults.

### 6.4 Analytics and Tracking

We currently do **not** use:
- Google Analytics or similar analytics platforms
- Third-party advertising trackers
- Social media pixels
- Cross-site tracking mechanisms

## 7. Data Storage and Security

### 7.1 Where We Store Your Data

**Database:** MongoDB
- User accounts, flight records, site information
- Professional-grade database with access controls
- Regular automated backups
- Encrypted connections (TLS/SSL)

**File System (Optional):**
- Original IGC files and parsed JSON data
- Stored in user-specific directories
- Path traversal protection implemented
- Access restricted to authenticated requests

**Geographic Location:** EU-based servers 

### 7.2 Security Measures

We implement industry-standard security practices:

**Technical Safeguards:**
- HTTPS encryption for all data in transit (TLS 1.2+)
- Secure HTTP-only cookies with SameSite protection
- JWT token-based authentication with expiration
- MongoDB injection prevention and input sanitization
- Regular expression escaping to prevent ReDoS attacks
- Path traversal prevention for file operations
- ObjectId validation for all database queries

**Access Controls:**
- Session-based authentication via NextAuth
- Role-based access control (user vs. admin)
- User-specific data filtering (users can only access their own flights)
- Protected routes requiring authentication

**Data Validation:**
- File size limits (maximum 3MB for IGC uploads)
- File extension validation (.igc only)
- Coordinate validation (longitude -180 to 180, latitude -90 to 90)
- Duplicate flight detection via MD5 hashing
- Date parsing with format validation

**Monitoring and Logging:**
- Structured security event logging
- Admin action audit trails
- Unauthorized access attempt logging
- Error logging with context for investigation

### 7.3 Data Breach Procedures

In the event of a data breach affecting your personal data:
- We will notify the relevant supervisory authority within 72 hours (GDPR Article 33)
- We will inform affected users without undue delay (GDPR Article 34)
- We will describe the nature of the breach and mitigation steps
- We will document all breaches in our internal records

## 8. Data Retention

### 8.1 Retention Periods

**Account Data:**
- Retained for the lifetime of your account
- Deleted upon account closure (see Section 9.5)

**Flight Records:**
- Retained indefinitely while your account is active
- You can delete individual flights at any time
- All flights deleted upon account closure

**Session Tokens:**
- JWT tokens expire 30 days after your last visit, and never more than 90 days after you sign in
- Expired tokens are no longer valid for authentication

**Cookies:**
- `sidebar_state`: 7 days from last visit
- Authentication cookies: 30 days from last visit, 90 days at most (see Section 6.1)

**Local Storage:**
- Persists until you clear browser data or delete your account
- No server-side retention

**Log Files:**
- Security logs retained for 12 months (legitimate interest in security)
- Automatically deleted after retention period

### 8.2 Inactive Accounts

**Inactivity Policy:** Accounts with no login activity for 3 consecutive years will be automatically deleted to comply with GDPR storage limitation principles (Article 5(1)(e)).

**Warning System:**
- At **2.5 years** of inactivity, you will receive a warning email notifying you that your account will be deleted in 6 months
- You can prevent deletion by simply logging in at any time before the 3-year threshold
- If you log in after receiving a warning, the inactivity counter is reset and the warning is cleared
- Once the **3-year** threshold is reached (and you were previously warned), your account will be automatically deleted

**What happens when an inactive account is deleted:**
- All account information is permanently deleted
- All flight data and GPS tracks are permanently deleted
- All consent records are permanently deleted
- A pseudonymized deletion audit record is created (see Section 8.3)

**How to prevent deletion:** Simply log in to your account at any time to reset the inactivity counter.

### 8.3 Deletion Audit Trail

**Purpose:** When you delete your account (manually or due to inactivity), we create a pseudonymized audit record to demonstrate GDPR compliance and prevent fraud.

**What is stored:**
- Anonymized user ID (MongoDB ObjectId)
- Deletion timestamp
- Reason for deletion (user-initiated or inactivity)
- Last login date (if deletion was due to inactivity)
- Inactivity warning date (if applicable)

**What is NOT stored:**
- Email address
- Username
- Any personally identifiable information

**Retention Period:** 7 years from deletion date (required by EU record-keeping regulations)

**Automated Deletion:** Audit records older than 7 years are automatically deleted monthly.

**Legal Basis:** Legal obligation (EU tax and record-keeping laws)

### 8.4 Backup Retention

**Backup Policy:** We maintain rolling 7-day database backups for disaster recovery purposes.

**Important:** When you delete your account or individual flights, the deleted data will remain in backups for up to 7 days. After this period, the data is permanently unrecoverable.

**Requesting Immediate Erasure:** If you need immediate complete data erasure (e.g., legal requirement, emergency), contact us and we can manually purge data from recent backups. This procedure is only used in exceptional circumstances.

### 8.5 Complete Retention Schedule

For a comprehensive overview of all data retention periods, see our detailed [Data Retention Policy](/doc/data-retention-policy).

## 9. Your Data Protection Rights

Under GDPR, you have the following rights regarding your personal data:

### 9.1 Right of Access (Article 15)

You have the right to request:
- Confirmation of whether we process your personal data
- A copy of your personal data
- Information about how we use your data

**How to exercise:** Use the "Export My Data" feature in your profile settings, which generates a ZIP file containing all your IGC files organized by date.

### 9.2 Right to Rectification (Article 16)

You have the right to correct inaccurate personal data.

**How to exercise:** Edit your profile information in account settings. Flight data accuracy depends on your uploaded IGC files (upload corrected files as needed).

### 9.3 Right to Erasure / "Right to be Forgotten" (Article 17)

You have the right to request deletion of your personal data when:
- Data is no longer necessary for the original purpose
- You withdraw consent (for consent-based processing)
- You object to processing (and no overriding legitimate grounds exist)
- Data has been unlawfully processed

**How to exercise:** Use the "Delete Account" feature in your profile settings. Your account and all associated data will be immediately deleted.

**What is deleted:**
- All account information (email, name, profile)
- All flight data and GPS tracks
- All consent records
- All session data

**What is retained:**
- Pseudonymized deletion audit record (7 years, no personally identifiable information)
- Data in backups (up to 30 days, then permanently deleted)

**Exceptions:** We may retain certain data if required by law or for legitimate legal purposes (see Section 8.3 for details on the deletion audit trail).

### 9.4 Right to Restriction of Processing (Article 18)

You have the right to request we limit processing of your data when:
- You contest the accuracy of the data
- Processing is unlawful but you oppose deletion
- We no longer need the data but you need it for legal claims
- You have objected to processing (pending verification of legitimate grounds)

**How to exercise:** Contact us with your specific restriction request.

### 9.5 Right to Data Portability (Article 20)

You have the right to receive your personal data in a structured, commonly used, and machine-readable format.

**How to exercise:**
- **Flight Data:** Use the "Export My Data" feature to download a ZIP archive of all your IGC files
- **Account Data:** Contact us for a JSON export of your account information

### 9.6 Right to Object (Article 21)

You have the right to object to processing based on legitimate interest or for direct marketing purposes.

**How to exercise:**
- **Community Features:** Disable "Public Profile" in privacy settings to prevent display in community features
- **Other Processing:** Contact us with your specific objection

### 9.7 Right to Withdraw Consent (Article 7(3))

Where processing is based on consent, you can withdraw consent at any time.

**How to exercise:**
- **OAuth Authentication:** Revoke access via your Google account security settings
- **Public Profile:** Toggle off "Public Profile" in account settings
- **Account:** Delete your account to withdraw all consent

**Note:** Withdrawal does not affect the lawfulness of processing based on consent before withdrawal.

### 9.8 Right to Lodge a Complaint (Article 77)

You have the right to lodge a complaint with a supervisory authority, particularly in:
- Your EU member state of residence
- Your place of work
- The place of the alleged infringement

**EU Supervisory Authorities:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

We encourage you to contact us first so we can address your concerns directly.

### 9.9 Exercising Your Rights

To exercise any of these rights:
1. Contact us using the information in Section 13
2. Provide sufficient information to verify your identity (we may request confirmation of your email address)
3. Specify which right(s) you wish to exercise
4. We will respond within **one month** (extendable by two months for complex requests)

**No fees:** Exercising your rights is free of charge unless requests are manifestly unfounded or excessive.

## 10. Privacy Settings and Control

### 10.1 Profile Visibility

You control whether your profile and flights are visible to other users:

**Public Profile (Default):**
- Your flights appear in community features
- Your profile is visible to other users
- You appear in pilot leaderboards and statistics

**Private Profile:**
- Your flights are visible only to you
- You do not appear in community leaderboards
- You can still generate secret shareable links for individual flights

**How to change:** Go to Profile Settings > Privacy > Toggle "Public Profile"

### 10.2 Display Preferences

You can customize:
- Flight table column visibility
- Sorting preferences
- Filter and search settings
- UI theme preference

These preferences are synced across devices.

### 10.3 Data Export

**Self-Service Export:**
- Navigate to Profile > Export My Data
- Generates a ZIP file with all your IGC files
- Organized by date (YYYY/MM/DD directory structure)
- Includes a list of any flights without stored files

## 11. Children's Privacy

We-Fly is not directed to children under the age of 16. We do not knowingly collect personal data from children under 16.

If you are a parent or guardian and believe your child has provided us with personal data:
- Contact us immediately using the details in Section 13
- We will delete such information from our systems within 30 days

## 12. Automated Decision-Making and Profiling

We do **not** engage in:
- Automated decision-making with legal or similarly significant effects (GDPR Article 22)
- Profiling for marketing or commercial purposes
- Algorithmic decisions that affect your access to services

**Flight Analysis:** While we use algorithms to analyze flight data (thermal detection, scoring, wind analysis), these are technical computations that enhance your experience and do not constitute profiling under GDPR.

## 13. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect:
- Changes in our data practices
- New features or services
- Legal or regulatory requirements
- User feedback and best practices

**Notification of Changes:**
- We will update the "Last Updated" date at the top of this policy
- For material changes, we will notify you via email or prominent notice on our platform
- Continued use of our service after changes constitutes acceptance of the new policy

**Version History:** We maintain records of previous policy versions for transparency and compliance purposes.

## 14. Legal Framework and Compliance

This Privacy Policy is governed by:
- **GDPR** (EU) 2016/679 - General Data Protection Regulation
- **ePrivacy Directive** 2002/58/EC (as amended)
- Applicable national data protection laws in EU member states

**Data Protection Principles (GDPR Article 5):**
- **Lawfulness, fairness, transparency:** We process data legally, fairly, and transparently
- **Purpose limitation:** Data collected for specified, explicit, legitimate purposes
- **Data minimisation:** We collect only data adequate and necessary for our purposes
- **Accuracy:** We keep personal data accurate and up to date
- **Storage limitation:** Data retained only as long as necessary
- **Integrity and confidentiality:** We ensure appropriate security of personal data
- **Accountability:** We demonstrate compliance with these principles

## 15. Contact Us

If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:

**Data Controller:** We-Fly
**Email:** contact@we-fly.cloud
**Response Time:** We aim to respond to all inquiries within 5 business days

**For GDPR-related requests:**
- Include "GDPR Request" in the subject line
- Provide sufficient information to verify your identity
- Specify the nature of your request (access, deletion, portability, etc.)
- We will respond within one month as required by GDPR Article 12(3)

---

## 16. Definitions and Interpretations

**Personal Data:** Any information relating to an identified or identifiable natural person (e.g., name, email, location data, online identifier).

**Processing:** Any operation performed on personal data, including collection, storage, use, disclosure, or deletion.

**Data Controller:** The entity that determines the purposes and means of processing personal data (We-Fly).

**Data Processor:** An entity that processes personal data on behalf of the controller (e.g., MongoDB hosting provider).

**Data Subject:** The individual to whom personal data relates (you, the user).

**Consent:** Freely given, specific, informed, and unambiguous indication of agreement to processing of personal data.

**IGC File:** International Gliding Commission file format for GPS flight logs, containing track points and metadata.

**OAuth:** Open standard for access delegation, commonly used for login authentication via third-party providers (Google).

---

**Acknowledgment:** By using We-Fly, you acknowledge that you have read, understood, and agree to this Privacy Policy.

---

*This Privacy Policy was last reviewed and approved on December 19, 2025.*
