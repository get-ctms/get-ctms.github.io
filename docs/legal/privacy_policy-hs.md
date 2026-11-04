# Privacy Policy for Container Tracker (HubSpot Extension)

**Last Updated:** November 2026

Container Tracker has created this Privacy Policy to explain how we collect, use, and share information when you use the Container Tracker HubSpot Extension. By using this Extension, you agree to the collection and use of information in accordance with this policy.

## 1. Information We Collect

### A. HubSpot Data
When you install and use the Extension in your HubSpot account, we access specific data based on the permissions you grant:
*   **Ticket ID:** We strictly limit our access to the `ticketId` of the record where you are using the extension. This is used solely to associate tracking information with the correct ticket context.
*   **No Sensitive Record Access:** We **do not** access, read, or store your Contacts, Companies, or Deal properties. We are designed to operate independently of your CRM's sensitive customer data.

### B. User Account Information
*   **Email Address:** Used to identify your account, authenticate you with our backend system, and email you about your account and the service.
*   **Profile Name:** Used to personalize the user interface.

### C. Slack (optional)
If you connect Slack (card → **Slack alerts**), Slack asks you to pick one channel and to allow Container Tracker to post to it. We then store the name and ID of your Slack workspace and channel, the address we post to (an "incoming webhook" URL) and the access token Slack issues for the install. The connection belongs to your HubSpot account, like your containers. Container Tracker can only post to that channel: it cannot read your Slack messages, channels or members.

### D. Website Analytics
Our website (get-ctms.com) uses Cloudflare Web Analytics to count page visits. It does not use cookies, does not track you across sites and does not collect personal information such as your name or email address. It records aggregated data such as the page visited, the referring website, the country and the browser type.

## 2. How We Use Your Information

We use the information we collect for the following purposes:
*   **Service Provision:** To process container numbers and retrieve tracking status from shipping lines.
*   **Contextual Integration:** To display relevant tracking information within your HubSpot Ticket view.
*   **Authentication:** To verify your identity and ensure you are authorized to use the backend services.
*   **Improvement:** To monitor the performance of the Extension and fix technical issues.
*   **AI-Enhanced Features:** To provide optional summarization and OCR capabilities upon your specific request.
*   **Slack alerts:** To post a message to the Slack channel you chose when one of your containers reaches a milestone, gets a new ETA or stops updating.
*   **Service messages:** To email you about your account and the service, including a welcome note when you install the Extension. We don't send advertising by email, and you can opt out at any time by replying to the message.

## 3. Data Sharing, Transfer, and Disclosure

We do not sell, rent, or trade your HubSpot data. We only share, transfer, or disclose your information to third parties in the following limited circumstances:

*   **Microsoft Azure:** We transfer authentication data (Email) and container numbers to our backend infrastructure hosted on Microsoft Azure to provide the core tracking service.
*   **Google Vertex AI / Gemini:** We transfer specific data (container history or user-provided screenshots) to Google’s enterprise AI services only when you explicitly trigger an AI feature (e.g., "View Summary" or "Import from Screenshot"). This data is processed to provide the requested output and is not used to train global models.
*   **Slack (a recipient you choose):** If you connect Slack, we send the container number, shipping line, the event (for example "departed Savannah"), its date and the ETA to the Slack channel you picked. Everyone who can see that channel can read these messages. No HubSpot record data or email address is sent to Slack.
*   **Resend:** We send service messages through Resend, an email delivery provider, which receives your email address and the message.
*   **Shipping Carriers:** Container numbers are shared with public shipping line APIs to retrieve current status updates.
*   **Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).

## 4. Data Security

We value your trust in providing us your Personal Information, and we store data on secure servers provided by Microsoft Azure. We use industry-standard encryption and security protocols to protect your data in transit and at rest. However, remember that no method of transmission over the internet or method of electronic storage is 100% secure.

## 5. Data Retention and Deletion

We are committed to managing your data responsibly.

*   **HubSpot Data (Transient):** We do not permanently store HubSpot record data on our servers. Any interaction with the Ticket ID is performed to facilitate the immediate user session and context.
*   **Container History:** Container tracking events are stored in our secure database (Azure) for as long as your account is active to provide the tracking history service.
*   **AI Processing Data:** Data sent to our AI service (summaries or screenshots) is not retained by the AI provider for model training and is not stored by us after the session is complete.
*   **Slack connection:** Stored while Slack is connected. It is deleted when you disconnect Slack (in the card or with the "Alert settings" link under each Slack message) or when your account is deleted. To remove the app from your Slack workspace as well, remove "CTMS Container Alerts" in Slack's app settings.
*   **Account Deletion:** You have the right to request the deletion of your account and all associated data at any time. To do so, please contact us at **support@get-ctms.com**. We will process data deletion requests within 3 business days.

## 6. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.

## 7. Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.

**Email:** support@get-ctms.com
