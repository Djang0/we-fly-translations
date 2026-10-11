---
title: Data Retention Policy
description: Detailed data retention periods and deletion procedures for We-Fly
category: Account & Data
order: 2
---

**Version:** 1.1
**Effective Date:** 2025-11-25
**Last Review Date:** 2026-10-07
**Next Review Date:** 2026-11-25
**GDPR Compliance:** Article 5(1)(e) - Storage Limitation, Article 17 - Right to Erasure

## 1. Purpose and Scope

This Data Retention Policy establishes the retention periods and deletion procedures for personal data processed by We-Fly in compliance with GDPR Article 5(1)(e), which requires that personal data be "kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed."

This policy applies to all personal data collected, processed, and stored by We-Fly, including:
- User account information
- Flight data and GPS tracks
- Deletion audit trails
- Consent records
- Session data
- Access logs
- System backups

## 2. Data Retention Schedule

### 2.1 User Accounts and Profile Data

**Retention Period:** Indefinite (until user-initiated deletion or 3-year inactivity)

**Legal Basis:** Consent (GDPR Article 6(1)(a))

**Description:** User accounts remain active indefinitely as long as users continue to use the service. Users can delete their accounts at any time through the profile settings.

**Automated Deletion:** Accounts with no login activity for 3 consecutive years will be automatically deleted after the user receives a warning email at the 2.5-year mark.

**Data Included:**
- Email address
- Username
- Profile information
- Account preferences
- Creation date and last login timestamp

### 2.2 Flight Data and GPS Tracks

**Retention Period:** Indefinite (until user-initiated deletion)

**Legal Basis:** Consent (GDPR Article 6(1)(a))

**Description:** Flight data uploaded by users is retained indefinitely as it represents the core functionality of the service. Users can delete individual flights or all flight data at any time.

**Automated Deletion:** Flight data is NOT automatically deleted. When a user account is deleted (manually or due to inactivity), all associated flight data is permanently deleted.

**Data Included:**
- GPS tracks and flight paths
- Flight metadata (date, duration, distance, etc.)
- Takeoff and landing locations
- Weather conditions
- Aircraft information

### 2.3 Deletion Audit Trail

**Retention Period:** 7 years from deletion date

**Legal Basis:** Legal obligation (EU tax and record-keeping laws)

**Description:** When a user deletes their account, a pseudonymized record is created in the `account_deletions` collection for compliance and fraud prevention purposes. This record does NOT contain personally identifiable information.

**Automated Deletion:** Records older than 7 years are automatically deleted on the first day of each month via scheduled cron job.

**Data Included:**
- Anonymized user ID (MongoDB ObjectId)
- Deletion timestamp
- Reason for deletion (user-initiated or inactivity)
- Last login date (if deletion was due to inactivity)
- Inactivity warning date (if applicable)

**Data NOT Included:**
- Email address
- Username
- Any personally identifiable information

### 2.4 Consent Records

**Retention Period:** Indefinite (as long as user account exists)

**Legal Basis:** Legal requirement (GDPR Article 7(1))

**Description:** Records of user consent (registration agreement, privacy policy acceptance, data processing consent) are retained for the lifetime of the user account to demonstrate compliance with GDPR consent requirements.

**Automated Deletion:** Consent records are deleted when the user account is deleted.

**Data Included:**
- Consent timestamp
- Consent type (registration, data processing, privacy policy)
- Privacy policy version accepted
- Consent status (accepted)

### 2.5 Access Logs

**Retention Period:** 1 year (if implemented)

**Legal Basis:** Legitimate interest (security and fraud prevention)

**Description:** Access logs tracking user authentication and API requests are retained for security purposes. **Note:** Access logs are not currently implemented in We-Fly.

**Automated Deletion:** Access logs older than 1 year are automatically deleted weekly via scheduled cron job (when implemented).

### 2.6 Session Data

**Retention Period:** 30 days after your last visit, and never more than 90 days after you sign in

**Legal Basis:** Legitimate interest (user authentication)

**Description:** Signing in stores an encrypted, HTTP-only session cookie in your browser. Each visit renews it for another 30 days, so it expires after 30 days without opening We-Fly, and you are asked to sign in again 90 days after signing in, however often you visit. Signing out deletes the cookie straight away. Resetting your password or deleting your account ends every session, on every device, at its next request.

**Automated Deletion:** Sessions are not stored in our database: the cookie itself is the session. Your browser deletes it when it expires, and the server refuses any session that has expired, is more than 90 days old or was ended by a password reset or account deletion.

**Data Included:**
- User ID, email address, display name and profile picture URL
- Account role and consent status
- Display preferences (theme, profile visibility)
- Sign-in time and expiration timestamp
- Session version (used to end sessions early)

### 2.7 Inactive Accounts

**Retention Period:** 3 years from last login

**Legal Basis:** Storage limitation principle (GDPR Article 5(1)(e))

**Description:** User accounts that have not been accessed for 3 consecutive years are considered inactive and will be automatically deleted.

**Warning System:**
- At **2.5 years** of inactivity, users receive an email warning that their account will be deleted in 6 months
- Users can prevent deletion by simply logging in at any time before the 3-year threshold
- Once the **3-year** threshold is reached, the account is automatically deleted if the user was previously warned

**Automated Deletion:** Inactive accounts are automatically deleted weekly via scheduled cron job (every Sunday at 3:00 AM UTC).

### 2.8 Backup Data

**Retention Period:** 7 days (rolling retention)

**Legal Basis:** Legitimate interest (disaster recovery)

**Description:** Database backups are retained on a rolling 7-day basis. Deleted data remains in backups for up to 7 days after deletion.

**Automated Deletion:** Backups older than 7 days are automatically deleted by the backup system.

**Important:** Users requesting immediate and complete data erasure should be informed that deleted data may remain in backups for up to 7 days. After this period, the data is permanently unrecoverable.

## 3. Deletion Procedures

### 3.1 User-Initiated Account Deletion

Users can delete their accounts at any time through the profile settings page:

1. Navigate to Profile and open **Delete account** in the Account section
2. Read the deletion warnings
3. Type your email address to confirm
4. Click **Delete My Account Permanently**
5. Account and all associated data are permanently deleted

**What is deleted:**
- User account and profile information
- All flight data and GPS tracks
- All consent records
- All session data

**What is retained:**
- Pseudonymized deletion audit trail (for 7 years)

### 3.2 Automated Inactive Account Deletion

Inactive accounts (3 years no login) are automatically deleted:

1. At 2.5 years of inactivity, user receives warning email
2. User record is flagged with `inactivityWarned: true` and `inactivityWarnedAt` timestamp
3. If user logs in, the warning flag is cleared
4. At 3 years of inactivity (if user did not log in), account is automatically deleted
5. Deletion audit trail records the inactivity-based deletion

### 3.3 Automated Deletion Audit Trail Cleanup

Deletion audit trail records older than 7 years are automatically deleted:

1. Cron job runs monthly (1st day of each month at midnight UTC)
2. Records with `deletedAt` timestamp older than 7 years are identified
3. Records are permanently deleted from `account_deletions` collection
4. Deletion count is logged for monitoring

### 3.4 Manual Backup Deletion (Emergency Procedure)

In exceptional cases where immediate data erasure is required (e.g., legal order, emergency GDPR request):

1. User account is deleted through normal procedure
2. Database administrator manually identifies and purges data from recent backups
3. Access to backups is restricted to authorized administrators only
4. Manual backup deletion is logged and reported to data protection officer

**Note:** This procedure is only used in exceptional circumstances as it requires manual database intervention.

## 4. Legal Basis for Retention

### 4.1 User Accounts and Flight Data

**Legal Basis:** Consent (GDPR Article 6(1)(a))

Users explicitly consent to data processing when registering for We-Fly. Users control their data and can delete it at any time.

### 4.2 Deletion Audit Trail

**Legal Basis:** Legal obligation (EU record-keeping requirements)

European tax and financial regulations require maintaining records for 7 years. While We-Fly is not a financial institution, the 7-year retention period is a widely accepted standard for demonstrating compliance with data protection regulations.

### 4.3 Inactive Account Deletion

**Legal Basis:** Storage limitation principle (GDPR Article 5(1)(e))

Retaining inactive accounts indefinitely violates the storage limitation principle. After 3 years of inactivity, there is no legitimate purpose for retaining the data.

### 4.4 Backups

**Legal Basis:** Legitimate interest (disaster recovery)

7-day backup retention represents a reasonable balance between disaster recovery capabilities and data minimization principles.

## 5. Automated Enforcement

Data retention limits are enforced through automated scheduled jobs:

### 5.1 Deletion Audit Trail Cleanup Job

- **Schedule:** Monthly (1st day of month at midnight UTC)
- **Trigger:** Cron Job
- **Action:** Delete records older than 7 years

### 5.2 Inactive Account Handler Job

- **Schedule:** Weekly (Sunday at 3:00 AM UTC)
- **Trigger:** Cron Job
- **Actions:**
  - Send warning emails to users at 2.5 years inactivity
  - Delete accounts at 3 years inactivity (if warned)

## 6. User Rights

### 6.1 Right to Erasure (GDPR Article 17)

Users can request immediate deletion of their account and all associated data at any time through the profile settings.

**Exception:** Deletion audit trail is retained for 7 years as a legal requirement, but contains no personally identifiable information.

### 6.2 Right to Data Portability (GDPR Article 20)

Users can export their data at any time: **Export data** in the Account section of their profile downloads their original IGC files together with their flight records, and individual IGC files can be downloaded from the flights pages.

### 6.3 Right to Access (GDPR Article 15)

Users can access all their personal data at any time through their profile and flight history pages.

### 6.4 Right to Object (GDPR Article 21)

Users can object to automated inactive account deletion by simply logging in before the 3-year threshold. This prevents automatic deletion.

## 7. Policy Review and Updates

### 7.1 Review Schedule

This policy is reviewed annually on the anniversary of the effective date. The next scheduled review is **2026-11-25**.

### 7.2 Update Triggers

This policy will be reviewed and updated when:
- GDPR regulations or interpretations change
- New data types are collected
- Retention requirements change
- Automated deletion systems are modified
- User feedback indicates policy improvements needed

### 7.3 User Notification

When this policy is updated:
- Version number is incremented
- Changes are documented in privacy policy changelog
- Users are notified via email if changes affect their data retention
- Updated policy is published at `/doc/data-retention-policy`

## 8. Monitoring and Compliance

### 8.1 Cron Job Monitoring

Retention enforcement cron jobs are monitored through:
- Server cron job logs
- Application logs for successful executions
- Error logging for failed executions

**Expected Log Output:**
- Audit trail cleanup: "Deleted X old deletion records (older than 7 years)"
- Inactive accounts: "Sent warnings to X users, deleted Y inactive accounts"

### 8.2 Compliance Verification

Compliance with this policy is verified through:
- Monthly review of cron job execution logs
- Quarterly database queries to verify retention limits are enforced
- Annual GDPR compliance audit

## 9. Contact Information

For questions or concerns about this data retention policy:

- **Privacy Policy:** [View Privacy Policy](/doc/privacy-policy)
- **GDPR Requests:** Use account deletion feature in profile settings

## 10. References

- [GDPR Article 5](https://gdpr-info.eu/art-5-gdpr/)
- [GDPR Article 17](https://gdpr-info.eu/art-17-gdpr/)
- [ICO Storage Limitation Guidance](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/storage-limitation/)
- [We-Fly Privacy Policy](/doc/privacy-policy)

---

**Document History:**
- v1.0 (2025-11-25): Initial policy creation
