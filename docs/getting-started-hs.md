# Getting Started with HubSpot Extension

**Welcome to the Container Tracker for HubSpot!**

The HubSpot Extension brings powerful container tracking functionality directly into your HubSpot CRM. Track ocean containers, view their history, and manage your shipments seamlessly from your Tickets.

## 🚀 Installation

To install the app in your HubSpot account:

### 1. Check Permissions
Make sure you have the right permissions. You must be a Super Admin or have **App Marketplace access permissions** in HubSpot to install apps.

### 2. Open HubSpot Marketplace
In your HubSpot account, click the **Marketplace icon** in the top navigation bar and select **App Marketplace**.

### 3. Find the App
In the Marketplace search bar, type **"Container Tracker"** and select it from the results.

### 4. Install & Authorize
1. Click **Install**.
2. Follow the prompts to authorize the app. 
3. Review the access scopes requested, then confirm to complete the installation.

### 5. Finish Setup

In HubSpot, go to **Settings** (gear icon in the top right).

#### Enable the app card on ticket records
1. In the left sidebar, navigate to **Integrations** → **Connected Apps**.
2. Find and click the installed app (**Container Tracking**).
3. In the app settings, open the **App cards** tab.
4. Find the **Container Tracking** card (type: sidebar / tickets).
5. Click **Manage locations**.
6. In the **Tickets** tab, check the box for the ticket view(s) where you want the card to appear (e.g. **Default**).
7. Click **Save**.

### 6. Verify on a ticket

1. Go to **Tickets** and open any ticket record.
2. In the right sidebar, you should now see the **Container Tracking** card.
3. If you don’t see it, refresh the page and check that:
   - You’re viewing a ticket in a layout where the card was enabled.
   - You have permission to customize or view that layout.

If anything doesn’t work or you don’t see the card after following these steps, please contact us at [ctms.developer@gmail.com](mailto:ctms.developer@gmail.com).

## What is Container Tracker?

Container Tracker is an extension that automatically tracks ocean containers across multiple carriers including MSC, Maersk, CMA-CGM, and Hapag-Lloyd. It provides real-time updates on container location, status, and key milestones throughout the shipping journey directly within your CRM records.

## How Container Tracking Works

### Automatic Tracking

For supported carriers (MSC, Maersk, CMA-CGM, Hapag-Lloyd), Container Tracker automatically retrieves tracking information directly from the carrier websites.

1. **Submit a Container**: Enter the container number and select the carrier in the Container Tracker card.
2. **Automatic Updates**: The system periodically checks for updates.
3. **Real-time Events**: New tracking events are automatically added to the container history.

### Manual Tracking

For carriers not yet supported with automatic tracking, or as a backup method, you can track containers manually:

1. **Manual Entry**: Add any container number.
2. **Flexible Updates**: Add individual events as they occur using the **"Add Event"** button.
3. **Control**: You have full control over the event date, location, and description.

### Importing from Screenshots (OCR)

For manually tracked containers, you can quickly import events using carrier tracking page screenshots instead of typing them out:

1. Open a manually tracked container's details in the HubSpot card.
2. Click **"📷 Import from screenshot"**.
3. Take a screenshot of the carrier's tracking page on their website.
4. Paste the screenshot into the import window (Ctrl+V or Cmd+V).
5. Click **"Import Events"**.
6. AI analyzes the image and extracts all tracking events automatically.

**What Gets Extracted**:
- Event descriptions
- Dates and times
- Locations
- Vessel names
- Container status

This feature saves time and ensures accuracy by letting AI do the data entry for you.

## Using Container Tracker in HubSpot

### Tracking Your First Container

1. Navigate to any **Ticket** in HubSpot.
2. Locate and expand the **Container Tracking** card in the right sidebar.
3. Click the **"Submit Container for Tracking"** button.
4. Enter the container number (e.g., `MSCU1234567`).
5. Select the carrier from the dropdown.
6. Click **Submit**.

The container is now linked to this Ticket and will be monitored automatically.

### Viewing Container History

To see the detailed tracking history:
1. Open the Ticket where the container is tracked.
2. In the **Container Tracking** card, click **"View Tracked Containers"**.
3. Select the container from your list to view its details.
4. View the complete event timeline, including:
   - Event descriptions ("Gate In", "Loaded", "Discharged")
   - Dates, times, and locations
   - Vessel information

### Understanding Milestones

The **Milestones View** summarizes key stages in the journey:
- **Gate In**
- **Loaded**
- **Departed**
- **Arrived**
- **Discharged**
- **Gate Out / Delivered**

Switch to this view for a high-level overview of the shipment's progress.

### AI Summary

Get a natural language summary of the container's status:
1. Open the container details.
2. Click **"View Summary"**.
3. Read an AI-generated update on current status, location, and expected next steps.

## Need Help?

- **Permissions**: Ensure you have access to view and edit Tickets.
- **Support**: For questions or issues, email us at [ctms.developer@gmail.com](mailto:ctms.developer@gmail.com).

Start tracking your containers today and bring automated ocean freight visibility to your HubSpot CRM!
