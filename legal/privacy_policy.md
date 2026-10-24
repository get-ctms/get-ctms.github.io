# Privacy Policy for Container Tracker

**Last Updated:** October 24, 2026

Container Tracker has created this Privacy Policy to explain how we collect, use, and share information when you use the Container Tracker Google Workspace Add-on in Google Sheets and Gmail. By using this Add-on, you agree to the collection and use of information in accordance with this policy.

## 1. Information We Collect

### A. Personal Information (Google User Data)
When you install and authenticate the Add-on, we access the following personal information via your Google Account, based on the permissions you grant:
*   **Email Address:** Used to identify your account and authenticate you with our backend system.
*   **Profile Name:** Used to personalize the user interface.

### B. Spreadsheet Content
To perform the service of tracking containers, the Add-on interacts with the **currently active Google Sheet**. 
*   **One-Way Export:** We only write tracking status updates back into your spreadsheet. 
*   **Note:** We do not read, retrieve, or store content from your existing spreadsheet cells, nor do we access other files in your Google Drive.

### C. Gmail
If you use the Add-on in Gmail, it asks for two more permissions: to run as a Gmail add-on, and to read the email you have open while the Add-on is running.
*   **Reading the open email:** When you open an email with the Container Tracker side panel open, the Add-on reads that email's subject, plain text and sender, and the names and types of its attachments, **inside Google's Apps Script environment** to find container numbers and the carrier. This happens only for the email you open, never in the background, and never for other emails in your mailbox.
*   **What is sent when you open an email:** Only the container numbers found in it (at most 20) are sent to our servers, to show which of them you already track. They are not stored, and they are kept out of our request logs. No subject, text, sender or attachment is sent.
*   **Scan attachments:** Attachments are read only when you click **Scan attachments**. CSV and text files are read inside Google's Apps Script environment and never leave Google. PDF files (up to 3, 8 MB in total) are sent to our servers (Microsoft Azure) only to extract their text, which is returned to the Add-on to find container numbers. PDFs are processed in memory for that request and are not stored; our logs hold only counts and sizes, never content or file names.
*   **Tracking:** When you click **Track**, the container number and carrier are stored in your account, like any other container you track.
*   **No AI on your email:** Email content and attachments are not sent to Google Vertex AI or any other AI or machine-learning service, and are not used to train models.

### D. Website Analytics
Our website (get-ctms.com) uses Cloudflare Web Analytics to count page visits. It does not use cookies, does not track you across sites and does not collect personal information such as your name or email address. It records aggregated data such as the page visited, the referring website, the country and the browser type.

## 2. How We Use Your Information

We use the information we collect for the following purposes:
*   **Service Provision:** To process container numbers and retrieve tracking status from shipping lines.
*   **Authentication:** To verify your identity and ensure you are authorized to use the backend services.
*   **Improvement:** To monitor the performance of the Add-on and fix technical issues.
*   **AI-Enhanced Features:** To provide optional summarization and OCR capabilities upon your specific request.
*   **Gmail:** To find container numbers in the email you open and, when you ask for it, in its attachments.

## 3. Data Sharing, Transfer, and Disclosure

We do not sell, rent, or trade your Google user data. We only share, transfer, or disclose your information to third parties in the following limited circumstances:

*   **Microsoft Azure:** We transfer authentication data (Email) and container numbers to our backend infrastructure hosted on Microsoft Azure to provide the core tracking service. When you click Scan attachments in Gmail, PDF attachments are also sent there to extract their text (see section 1.C).
*   **Google Vertex AI / Gemini:** We transfer specific data (container history or user-provided screenshots) to Google’s enterprise AI services only when you explicitly trigger an AI feature. This data is processed to provide the requested output and is not used to train global models. Email content and attachments are never sent to these services.
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

*   **Google User Data (Transient):** We do not permanently store Google Workspace data (such as spreadsheet content, email content or attachments) on our servers. Any interaction is performed in-memory to execute the add-on’s functions.
*   **Container History:** Container tracking events are stored in our secure database (Azure) for as long as your account is active to provide the tracking history service.
*   **AI Processing Data:** Data sent to our AI service (summaries or screenshots) is not retained by the AI provider for model training and is not stored by us after the session is complete.
*   **Account Deletion:** You have the right to request the deletion of your account and all associated data at any time. To do so, please contact us at **support@get-ctms.com**. We will process data deletion requests within 3 business days.

## 7. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.

## 8. Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.

**Email:** support@get-ctms.com
