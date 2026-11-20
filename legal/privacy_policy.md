# Privacy Policy for Container Tracker

**Last Updated:** November 2026

Container Tracker has created this Privacy Policy to explain how we collect, use, and share information when you use the Container Tracker Google Workspace Add-on in Google Sheets and Gmail, the Container Tracker package for Salesforce (section 1.F), and the CTMS connector for Claude and other assistant apps (section 1.I). By using this Add-on, the package or the connector, you agree to the collection and use of information in accordance with this policy.

## 1. Information We Collect

### A. Personal Information (Google User Data)
When you install and authenticate the Add-on, we access the following personal information via your Google Account, based on the permissions you grant:
*   **Email Address:** Used to identify your account, authenticate you with our backend system, and email you about your account and the service.
*   **Profile Name:** Used to personalize the user interface.

### B. Spreadsheet Content
To perform the service of tracking containers, the Add-on interacts with the **currently active Google Sheet**. 
*   **Sheets the Add-on writes:** The Add-on writes tracking status and free time (demurrage & detention) into its own sheets ("Milestones", "Free time"). To keep your notes next to the right container when it updates them, it reads those sheets' existing rows inside Google's Apps Script environment; your notes are not sent to our servers.
*   **D&D tariffs & contracts tab (paid plans, only when you click it):** When you click **Save to CTMS**, the Add-on reads the rows of its "D&D tariffs & contracts" tab and sends them to our servers, where they are stored as your contract terms (see section 1.E). **Load from CTMS** writes your saved terms back into that tab.
*   **Export to sheet (bookings and shipping instructions, only when you click it):** When you click **Export to sheet** on a saved shipment, the Add-on adds a new tab with a printable copy of that shipment (see section 1.H). The tab is your copy: the Add-on never reads it back and never sends it to our servers. It never changes a tab that already exists; a second export gets a new tab.
*   **Nothing else:** We do not read, retrieve, or store content from any other cells or sheets, nor do we access other files in your Google Drive. The only exception: if a sheet already has one of the names above, the Add-on reads its first row to check that it is its own sheet before writing to it (inside Google's Apps Script environment; nothing is sent to our servers).

### C. Gmail
If you use the Add-on in Gmail, it asks for two more permissions: to run as a Gmail add-on, and to read the email you have open while the Add-on is running.
*   **Reading the open email:** When you open an email with the Container Tracker side panel open, the Add-on reads that email's subject, plain text and sender, and the names and types of its attachments, **inside Google's Apps Script environment** to find container numbers and the carrier. This happens only for the email you open, never in the background, and never for other emails in your mailbox.
*   **What is sent when you open an email:** Only the container numbers found in it (at most 20) are sent to our servers, to show which of them you already track. They are not stored, and they are kept out of our request logs. No subject, text, sender or attachment is sent.
*   **Scan attachments:** Attachments are read only when you click **Scan attachments**. CSV and text files are read inside Google's Apps Script environment and never leave Google. PDF files (up to 3, 8 MB in total) are sent to our servers (Microsoft Azure) only to extract their text, which is returned to the Add-on to find container numbers. PDFs are processed in memory for that request and are not stored; our logs hold only counts and sizes, never content or file names.
*   **Tracking:** When you click **Track**, the container number and carrier are stored in your account, like any other container you track.
*   **Import to Container Tracker (booking and shipping instructions emails):** When you click **Import to Container Tracker** on a booking request, booking confirmation, cancellation or shipping instructions email, the Add-on reads that email's subject and text **inside Google's Apps Script environment**, by its layout and labels, without any AI or machine-learning model, and shows the values it found on a card for you to check and correct. When the shipping instructions are in a PDF, the PDF's text is extracted as for Scan attachments. Nothing is sent or stored until you click **Save**: then only the values on the card, as you confirmed or corrected them, are sent to our servers and stored as your shipment (section 1.H), with the email's date and, for INTTRA emails, the INTTRA number. The email itself, its sender and its attachments are not stored.
*   **No AI on your email:** Email content and attachments are not sent to Google Vertex AI or any other AI or machine-learning service, and are not used to train models.

### D. Slack (optional)
If you connect Slack (Home → **Slack alerts**), Slack asks you to pick one channel and to allow Container Tracker to post to it. We then store the name and ID of your Slack workspace and channel, the address we post to (an "incoming webhook" URL) and the access token Slack issues for the install. Container Tracker can only post to that channel: it cannot read your Slack messages, channels or members.

### E. Your free time and contract terms (optional)
If you use **Free time** (demurrage & detention), we store what you enter so we can work out the last free day of your containers: free days per carrier or per container, the day type (calendar or working days), whether a carrier's or a container's boxes are import or export, the country whose public holidays apply, dates you enter for a container (for example gate-out or empty return), notes, closed days, and, on paid plans, your contract terms (contract name, number and section, validity dates, trade lanes, equipment, free days, rates and currency). Contract terms are often confidential between you and your carrier. We treat them as your confidential business information.

**Morning alerts:** If you use Free time, we also store your spreadsheet's time zone, whether the free time email is switched on, and what we already told you per container (the last free day and which warnings went out), so you never get the same warning twice. This morning's counts (boxes in charges, due soon) are kept with your account so the Add-on's Home card can show them.

### F. Salesforce package
If you use the Container Tracker package in Salesforce, it runs inside your Salesforce org and sends only the following to our servers:
*   **To identify your account:** your API key (stored in a Salesforce External Credential, encrypted), your org ID and the package version.
*   **To track containers:** the container numbers and carriers you track, and the events you add by hand.
*   **Slack (optional):** when you connect Slack, your org's address, so the links in Slack messages open your org (see section 1.D).
*   **Free time (optional):** the free days and box terms you enter (as listed in section 1.E), the direction you set for a box, your org's time zone and address (for the morning alerts and their links), your org's name (only in the email that asks a new address to confirm), and the email addresses an admin adds for the morning email.

Your free days and box terms are stored with your Container Tracker account, not in your org; the package writes only the result (status, last free day, days left) onto your container records. No account names, contacts, opportunity data or other org data leave Salesforce. The morning email goes to the address that requested the API key, or, once each has confirmed by a link, to the addresses an admin adds (up to 5). Every morning email has a link to stop it for that address.

### G. Website Analytics
Our website (get-ctms.com) uses Cloudflare Web Analytics to count page visits. It does not use cookies, does not track you across sites and does not collect personal information such as your name or email address. It records aggregated data such as the page visited, the referring website, the country and the browser type.

### H. Your bookings and shipping instructions (optional)
If you use **Import to Container Tracker** in Gmail (section 1.C), we store the values you confirm on the Import card, one record per shipment: your reference and stage, the forwarder and carrier, booking number, vessel and voyage, places and ports, dates and cut-offs, containers booked, commodity, bill of lading details (type, originals, freight terms, place payable, Incoterms, quote number), your remarks, and per container the container and seal numbers, container type, packages, weights, volume, HS codes, description of goods and marks. When the first email you import for a shipment is a booking request, we also keep a copy of that request (containers, dates, vessel, ports, commodity), so we can show you what the confirmation changed. Each shipping instructions email you import is kept as a numbered SI version (up to 20 per shipment), with its INTTRA number when there is one; versions are not changed afterwards. Each import also adds a line to the shipment's document log (the kind of email, the email's date, the INTTRA number and which fields changed; up to 30 lines). We do not keep the emails themselves.

When you click **Export to sheet**, the Add-on writes a copy of the shipment into a new tab of your spreadsheet. That copy is yours: we don't read it, and it stays in your spreadsheet when you delete the shipment here.

These records include the **names and addresses of the shipper, consignee and notify party** in the emails you import or the values you type on the Import card, which can be personal data of other people (for example a sole trader or a contact named in an address). You decide what you enter and why; for these details you are the controller, and we process them only on your behalf, to store them for you and give them back to you. Please enter only what your shipping instructions need. We treat your bookings as your confidential business information.

### I. CTMS connector for Claude and other assistant apps
You can connect CTMS to an assistant app such as Claude (by Anthropic), so that you can ask it about your containers. The connector uses the Model Context Protocol and its own CTMS account, separate from your account in Google Sheets, Gmail, HubSpot, Salesforce, monday.com or Shopify.
*   **Sign-in:** You sign in on our page at mcp.get-ctms.com, either with a 6-digit code we email you or with Google. With Google, we receive only your email address and whether Google has verified it. Your CTMS account for the connector is created from that email address, which we also use to email you about your account and the service (for example a welcome email after the first sign-in).
*   **What the assistant app sends us:** Only the requests it makes to CTMS's actions on your behalf, with what they need: container numbers and carriers to track or stop, filters for your list (for example a port, carrier or date), and free days you ask to save. We never receive your chats, your other messages or files, your Claude account details, or what you do with other connectors.
*   **What the assistant app receives:** The answers to those requests: your plan and usage, your containers with their status, events, milestones, ETAs and earlier ETAs, your saved free days and the last free days, and links to upgrade or manage your plan. The assistant app's provider (for Claude: Anthropic) handles them under its own privacy policy, as part of your chat.
*   **What we store:** Your connector account (email address and plan), the containers you track and the free days you save, as for the other surfaces (section 1.E). For the sign-in: the name and return address the assistant app registered with us, a record linking that app to your account, and only a one-way hash of each access and refresh token (never the tokens themselves). While you sign in, we briefly keep the sign-in request and a hash of the emailed code, and a counter per email address (keyed by a hash of the address) to limit how many codes are sent.
*   **Logs:** For each request, which action was used, whether it worked, how long it took and your account ID, and, as on the other surfaces, the container numbers and carriers of tracking requests. Not the questions you asked the assistant app.
*   **IP addresses:** Used only in memory to limit repeated attempts; we don't store them with your account.

## 2. How We Use Your Information

We use the information we collect for the following purposes:
*   **Service Provision:** To process container numbers and retrieve tracking status from shipping lines.
*   **Authentication:** To verify your identity and ensure you are authorized to use the backend services.
*   **Improvement:** To monitor the performance of the Add-on and fix technical issues.
*   **AI-Enhanced Features:** To provide optional summarization and OCR capabilities upon your specific request.
*   **Gmail:** To find container numbers in the email you open and, when you ask for it, in its attachments.
*   **Free time:** To calculate the last free day, the days left and the charges for your own containers, and to show you how they were calculated. Your free days and contract terms are used only for your account: they are not shown to other users, not combined with other customers' terms, not sold or shared, and not sent to any AI service.
*   **Bookings and shipping instructions:** To read the booking and shipping instructions emails you import, check the values before they are saved (for example required fields), keep your shipments and show them to you in the Add-on, and write the printable copy when you click Export to sheet. Your bookings are used only for your account: they are not shown to other users, not combined with other customers' data, not sold or shared, and not sent to any AI service.
*   **Connector for assistant apps:** To sign you in, answer the requests the assistant app you connected makes on your behalf (section 1.I), keep the connection working without signing in again each time, and stop misuse (for example too many sign-in codes).
*   **Slack alerts:** To post a message to the Slack channel you chose when one of your containers reaches a milestone, gets a new ETA or stops updating.
*   **Free time alerts:** On mornings with news (about 07:00 in your spreadsheet's time zone), to email you, and post to your Slack channel if you connected Slack and left Free time switched on, when a container nears its last free day, is in charges, its last free day moves, its carrier data is out of date, or one of your contracts ends soon. On Mondays the email also lists the week ahead: the containers whose last free day falls in the next seven days and, on paid plans, the containers in charges with their estimated charges (Slack gets no weekly list). You can switch the email off in the Add-on (Free time → Morning alerts) or with the link in every email.
*   **Service messages:** To email you about your account and the service, including an occasional request for feedback. We don't send advertising by email, and you can opt out at any time by replying to the message.

## 3. Data Sharing, Transfer, and Disclosure

We do not sell, rent, or trade your Google user data. We only share, transfer, or disclose your information to third parties in the following limited circumstances:

*   **Microsoft Azure:** We transfer authentication data (Email), container numbers and, if you use Free time, your free days and contract terms and, if you use Bookings & shipping instructions, your saved shipments (including the shipper, consignee and notify party details, see section 1.H) to our backend infrastructure hosted on Microsoft Azure to provide the core tracking service. When you click Scan attachments in Gmail, PDF attachments are also sent there to extract their text (see section 1.C).
*   **Google Vertex AI / Gemini:** We transfer specific data (container history or user-provided screenshots) to Google’s enterprise AI services only when you explicitly trigger an AI feature. This data is processed to provide the requested output and is not used to train global models. Email content and attachments are never sent to these services.
*   **Slack (a recipient you choose):** If you connect Slack, we send the container number, shipping line, the event (for example "departed Savannah"), its date and the ETA to the Slack channel you picked. Everyone who can see that channel can read these messages. If Free time is switched on for the channel, the morning note also contains the container's last free day, days left and, on paid plans, the estimated charges. No email content, spreadsheet content or email address is sent to Slack.
*   **The assistant app you connect (a recipient you choose):** If you connect CTMS to an assistant app such as Claude, we send it the answers to the requests it makes on your behalf (section 1.I). Its provider (for Claude: Anthropic) processes them under its own terms and privacy policy.
*   **Google sign-in:** If you choose Continue with Google on the connector's sign-in page, Google receives the sign-in request and returns your email address to us.
*   **Resend:** We send service messages, including the free time alerts, the confirmation emails for new morning email addresses and the connector's sign-in codes, through Resend, an email delivery provider, which receives your email address and the message.
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

*   **Google User Data (Transient):** We do not permanently store Google Workspace data (such as spreadsheet content, email content or attachments) on our servers. Any interaction is performed in-memory to execute the add-on’s functions. The exceptions are what you choose to save: the contract terms from the D&D tariffs & contracts tab (**Save to CTMS**, stored as described in section 1.E and below) and the values you confirm when you import a booking or shipping instructions email (**Save** on the Import card, section 1.H and below).
*   **Container History:** Container tracking events are stored in our secure database (Azure) for as long as your account is active to provide the tracking history service.
*   **AI Processing Data:** Data sent to our AI service (summaries or screenshots) is not retained by the AI provider for model training and is not stored by us after the session is complete.
*   **Free time and contract terms:** Stored while your account is active. You can remove them at any time (Free time → **Remove**, a container's **Clear**, or **Delete** in the D&D tariffs & contracts tab). They are deleted when your account is deleted. Saved contract terms are kept, but not applied, if you move from a paid to the free plan, so they work again when you upgrade. What the morning alerts already told you is kept while the container is active and deleted when it is archived or your account is deleted.
*   **Bookings and shipping instructions:** Each shipment, with its booking request copy, its SI versions and its document log, is kept until you delete it (**Delete shipment** on its card in the Add-on), which removes all of it from our servers at once, or until your account is deleted. Tabs you exported live only in your spreadsheet and are not removed by either.
*   **Morning email addresses (Salesforce):** Stored while they are listed in Morning alerts. An address is deleted when an admin removes it or when its owner uses the stop link in the email; an unconfirmed address's confirmation link expires after 7 days.
*   **Slack connection:** Stored while Slack is connected. It is deleted when you disconnect Slack (in the Add-on or with the "Alert settings" link under each Slack message) or when your account is deleted. To remove the app from your Slack workspace as well, remove "CTMS Container Alerts" in Slack's app settings.
*   **Connector sign-in:** Sign-in requests and emailed codes expire after 15 and 10 minutes, access tokens after 1 hour; we delete expired ones daily. A connection ends 30 days after it was last used, and its record is then deleted; if the assistant app ends it earlier (for example when you disconnect, if the app tells us), the record is deleted 30 days after that. An app registration that no connection uses is deleted 30 days after it was registered. Code counters are deleted after 2 days. Your connector account, its containers and free days are kept while the account is active, as above.
*   **Account Deletion:** You have the right to request the deletion of your account and all associated data at any time. To do so, please contact us at **support@get-ctms.com**. We will process data deletion requests within 3 business days.

## 7. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.

## 8. Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.

**Email:** support@get-ctms.com
