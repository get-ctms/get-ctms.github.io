# Privacy Policy for Container Tracker

**Last Updated:** 03.Jan.2026

Container Tracker has created this Privacy Policy to explain how we collect, use, and share information when you use the Container Tracker Google Workspace Add-on.

By using this Add-on, you agree to the collection and use of information in accordance with this policy.

## 1. Information We Collect

### A. Personal Information (Google User Data)
When you install and authenticate the Add-on, we access the following personal information via your Google Account, based on the permissions you grant:
*   **Email Address:** Used to identify your account and authenticate you with our backend system.
*   **Profile Name:** Used to personalize the user interface.

### B. Spreadsheet Content
To perform the service of tracking containers, the Add-on accesses data within the **currently active Google Sheet**. Specifically:
*   We write tracking status updates back into your spreadsheet.
*   **Note:** We do not access other files in your Google Drive.

## 2. How We Use Your Information

We use the information we collect for the following purposes:
*   **Service Provision:** To process container numbers and retrieve tracking status from shipping lines.
*   **Authentication:** To verify your identity and ensure you are authorized to use the backend services.
*   **Improvement:** To monitor the performance of the Add-on and fix technical issues.
*   **AI-Enhanced Features:** To provide optional summarization and OCR capabilities upon your specific request.

## 3. Data Processing and Third-Party Services

To provide real-time tracking information and AI features, specific data must be processed outside of Google's servers.

*   **Microsoft Azure:** The backend infrastructure for Container Tracker is hosted on Microsoft Azure. When you use the Add-on, your Email Address (for auth) and the Container Numbers (for tracking) are transmitted to our API hosted on Azure (`azurewebsites.net`).
*   **Google Vertex AI / Gemini:** We use Google's enterprise-grade AI services to process specific data *only when requested by you* (e.g., summarizing container history or extracting text from a pasted screenshot).
*   **Shipping Carriers:** Container numbers are queried against public shipping line databases to retrieve status updates.

## 4. Google API Services User Data Policy

Container Tracker's use and transfer to any other app of information received from Google APIs will adhere to the **[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)**, including the **Limited Use** requirements.

We do not sell your Google user data to third parties. We do not use your Google user data for advertising purposes. We do not allow third-party AI models to use your data for training purposes.

## 5. Data Security

We value your trust in providing us your Personal Information, and we store data on secure servers provided by Microsoft Azure. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.

## 6. Data Retention and Deletion

We are committed to managing your data responsibly.

*   **Google User Data (Transient):** Our application does not retrieve, read, or collect any data from Google Workspace APIs (such as spreadsheet cell content, emails, or Drive files). The application’s interaction with Google Workspace is strictly limited to a one-way export: data fetched from our secure external database (Azure) or provided directly by the user is written into the active spreadsheet only upon the user's explicit request.
*   **Container History:** Container tracking events are stored in our secure database (Azure) for as long as your account is active to provide the tracking history service.
*   **AI Processing Data:** Data sent to our AI service (summaries or screenshots) is not retained by the AI provider for model training and is not stored by us after the session is complete.
*   **Account Deletion:** You have the right to request the deletion of your account and all associated data at any time. To do so, please contact us at **ctms.developer@gmail.com**. We will process data deletion requests within 30 days.

## 7. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

## 8. Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at

**Email:** ctms.developer@gmail.com
