# Privacy Policy for Container Tracker

**Last Updated:** November 2026

Container Tracker has created this Privacy Policy to explain how we collect, use, and share information when you use the Container Tracker Google Workspace Add-on in Google Sheets and Gmail. By using this Add-on, you agree to the collection and use of information in accordance with this policy.

## 1. Information We Collect

### A. Personal Information (Google User Data)
When you install and authenticate the Add-on, we access the following personal information via your Google Account, based on the permissions you grant:
*   **Email Address:** Used to identify your account, authenticate you with our backend system, and email you about your account and the service.
*   **Profile Name:** Used to personalize the user interface.

### B. Spreadsheet Content
To perform the service of tracking containers, the Add-on interacts with the **currently active Google Sheet**. 
*   **Sheets the Add-on writes:** The Add-on writes tracking status and free time (demurrage & detention) into its own sheets ("Milestones", "Free time"). To keep your notes next to the right container when it updates them, it reads those sheets' existing rows inside Google's Apps Script environment; your notes are not sent to our servers.
*   **Contract terms tab (paid plans, only when you click it):** When you click **Save to CTMS**, the Add-on reads the rows of its "Contract terms" tab and sends them to our servers, where they are stored as your contract terms (see section 1.E). **Load from CTMS** writes your saved terms back into that tab.
*   **Nothing else:** We do not read, retrieve, or store content from any other cells or sheets, nor do we access other files in your Google Drive. The only exception: if a sheet already has one of the names above, the Add-on reads its first row to check that it is its own sheet before writing to it (inside Google's Apps Script environment; nothing is sent to our servers).

### C. Gmail
If you use the Add-on in Gmail, it asks for two more permissions: to run as a Gmail add-on, and to read the email you have open while the Add-on is running.
*   **Reading the open email:** When you open an email with the Container Tracker side panel open, the Add-on reads that email's subject, plain text and sender, and the names and types of its attachments, **inside Google's Apps Script environment** to find container numbers and the carrier. This happens only for the email you open, never in the background, and never for other emails in your mailbox.
*   **What is sent when you open an email:** Only the container numbers found in it (at most 20) are sent to our servers, to show which of them you already track. They are not stored, and they are kept out of our request logs. No subject, text, sender or attachment is sent.
*   **Scan attachments:** Attachments are read only when you click **Scan attachments**. CSV and text files are read inside Google's Apps Script environment and never leave Google. PDF files (up to 3, 8 MB in total) are sent to our servers (Microsoft Azure) only to extract their text, which is returned to the Add-on to find container numbers. PDFs are processed in memory for that request and are not stored; our logs hold only counts and sizes, never content or file names.
*   **Tracking:** When you click **Track**, the container number and carrier are stored in your account, like any other container you track.
*   **No AI on your email:** Email content and attachments are not sent to Google Vertex AI or any other AI or machine-learning service, and are not used to train models.

### D. Slack (optional)
If you connect Slack (Home → **Slack alerts**), Slack asks you to pick one channel and to allow Container Tracker to post to it. We then store the name and ID of your Slack workspace and channel, the address we post to (an "incoming webhook" URL) and the access token Slack issues for the install. Container Tracker can only post to that channel: it cannot read your Slack messages, channels or members.

### E. Your free time and contract terms (optional)
If you use **Free time** (demurrage & detention), we store what you enter so we can work out the last free day of your containers: free days per carrier or per container, the day type (calendar or working days), whether a carrier's or a container's boxes are import or export, the country whose public holidays apply, dates you enter for a container (for example gate-out or empty return), notes, closed days, and, on paid plans, your contract terms (contract name, number and section, validity dates, trade lanes, equipment, free days, rates and currency). Contract terms are often confidential between you and your carrier. We treat them as your confidential business information.

### F. Website Analytics
Our website (get-ctms.com) uses Cloudflare Web Analytics to count page visits. It does not use cookies, does not track you across sites and does not collect personal information such as your name or email address. It records aggregated data such as the page visited, the referring website, the country and the browser type.

## 2. How We Use Your Information

We use the information we collect for the following purposes:
*   **Service Provision:** To process container numbers and retrieve tracking status from shipping lines.
*   **Authentication:** To verify your identity and ensure you are authorized to use the backend services.
*   **Improvement:** To monitor the performance of the Add-on and fix technical issues.
*   **AI-Enhanced Features:** To provide optional summarization and OCR capabilities upon your specific request.
*   **Gmail:** To find container numbers in the email you open and, when you ask for it, in its attachments.
*   **Free time:** To calculate the last free day, the days left and the charges for your own containers, and to show you how they were calculated. Your free days and contract terms are used only for your account: they are not shown to other users, not combined with other customers' terms, not sold or shared, and not sent to any AI service.
*   **Slack alerts:** To post a message to the Slack channel you chose when one of your containers reaches a milestone, gets a new ETA or stops updating.
*   **Service messages:** To email you about your account and the service, including an occasional request for feedback. We don't send advertising by email, and you can opt out at any time by replying to the message.

## 3. Data Sharing, Transfer, and Disclosure

We do not sell, rent, or trade your Google user data. We only share, transfer, or disclose your information to third parties in the following limited circumstances:

*   **Microsoft Azure:** We transfer authentication data (Email), container numbers and, if you use Free time, your free days and contract terms to our backend infrastructure hosted on Microsoft Azure to provide the core tracking service. When you click Scan attachments in Gmail, PDF attachments are also sent there to extract their text (see section 1.C).
*   **Google Vertex AI / Gemini:** We transfer specific data (container history or user-provided screenshots) to Google’s enterprise AI services only when you explicitly trigger an AI feature. This data is processed to provide the requested output and is not used to train global models. Email content and attachments are never sent to these services.
*   **Slack (a recipient you choose):** If you connect Slack, we send the container number, shipping line, the event (for example "departed Savannah"), its date and the ETA to the Slack channel you picked. Everyone who can see that channel can read these messages. No email content, spreadsheet content or email address is sent to Slack.
*   **Resend:** We send service messages through Resend, an email delivery provider, which receives your email address and the message.
*   **Shipping Carriers:** Container numbers are shared with public shipping line APIs to retrieve current status updates.
*   **Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
*   **Service Providers:** We may share data with service providers who perform services on our behalf, provided they comply with strict data protection requirements and only use the data to provide the requested services.

## 4. Google API Services User Data Policy

Container Tracker's use and transfer to any other app of information received from Google APIs will adhere to the **[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)**, including the **Limited Use** requirements.

Specifically:
*   We do not use Google user data for advertising purposes.
*   We do not allow humans to read your email content, unless you give us permission (for example, for support), it is necessary for security purposes, or it is required by law.
*   We do not allow third-party AI models to use data obtained via Google APIs for training generalized AI models.
*   We only transfer Google user data to third parties if necessary to provide or improve the add-on’s features and only with your consent.

## 5. Data Security

We value your trust in providing us your Personal Information, and we store data on secure servers provided by Microsoft Azure. We use industry-standard encryption and security protocols to protect your data in transit and at rest. However, remember that no method of transmission over the internet or method of electronic storage is 100% secure.

## 6. Data Retention and Deletion

We are committed to managing your data responsibly.

*   **Google User Data (Transient):** We do not permanently store Google Workspace data (such as spreadsheet content, email content or attachments) on our servers. Any interaction is performed in-memory to execute the add-on’s functions. The one exception is the contract terms you choose to save from the Contract terms tab (**Save to CTMS**): they are stored as described in section 1.E and below.
*   **Container History:** Container tracking events are stored in our secure database (Azure) for as long as your account is active to provide the tracking history service.
*   **AI Processing Data:** Data sent to our AI service (summaries or screenshots) is not retained by the AI provider for model training and is not stored by us after the session is complete.
*   **Free time and contract terms:** Stored while your account is active. You can remove them at any time (Free time → **Remove**, a container's **Clear**, or **Delete** in the Contract terms tab). They are deleted when your account is deleted. Saved contract terms are kept, but not applied, if you move from a paid to the free plan, so they work again when you upgrade.
*   **Slack connection:** Stored while Slack is connected. It is deleted when you disconnect Slack (in the Add-on or with the "Alert settings" link under each Slack message) or when your account is deleted. To remove the app from your Slack workspace as well, remove "CTMS Container Alerts" in Slack's app settings.
*   **Account Deletion:** You have the right to request the deletion of your account and all associated data at any time. To do so, please contact us at **support@get-ctms.com**. We will process data deletion requests within 3 business days.

## 7. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.

## 8. Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.

**Email:** support@get-ctms.com
