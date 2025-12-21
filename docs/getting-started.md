# Getting Started with Container Tracker

Welcome to Container Tracker! This guide will help you quickly understand how to track containers, view their history, and manage your tracking data effectively.

## What is Container Tracker?

Container Tracker is a Google Sheets add-on that automatically tracks ocean containers across multiple carriers including MSC, Maersk, CMA-CGM. It provides real-time updates on container location, status, and key milestones throughout the shipping journey.

## How Container Tracking Works

### Automatic Tracking

For supported carriers (MSC, Maersk, CMA-CGM), Container Tracker automatically scrapes carrier websites to gather tracking information:

1. **Submit a Container**: Enter the container number and select the carrier
2. **Automatic Updates**: The system periodically checks the carrier's website for updates
3. **Real-time Events**: New tracking events are automatically added to your container's history
4. **Lifecycle Tracking**: The system continues monitoring until the container is delivered

**Benefits**:
- Hands-free tracking with automatic updates
- No manual data entry required
- Comprehensive event history captured automatically

### Manual Tracking

For carriers not yet supported with automatic tracking, or as a backup method:

1. **Manual Entry**: Add containers and manually input tracking events
2. **Screenshot Import**: Paste a screenshot of the carrier's tracking page and let AI extract the events for you (see below)
3. **Flexible Updates**: Add individual events as they occur

**Benefits**:
- Track containers from any carrier
- Control over what events are recorded
- Quick screenshot-based data capture

## Tracking Your First Container

1. Open the Container Tracker add-on in Google Sheets
2. Click **"Submit Container"**
3. Enter the container number (e.g., MSCU1234567)
4. Select the carrier from the dropdown
5. Click **Submit**

The container will now appear in your **"View Tracked Containers"** list and will be monitored automatically.

## Viewing Container History

To see the detailed tracking history of a container:

1. Navigate to **"View Tracked Containers"**
2. Click on any container in the list
3. View the complete event timeline with:
   - Event descriptions (e.g., "Gate In", "Loaded on Vessel", "Discharged")
   - Dates and times
   - Locations and vessel information
   - Additional details for each event

### Export to Google Sheets

You can export any container's history directly to your spreadsheet:

1. Open the container's history view
2. Click **"Export to Sheet"** in the top actions
3. A new sheet will be created with all event data in a tabular format
4. Use this for reporting, analysis, or sharing with stakeholders

## Understanding Milestones

Milestones represent key stages in your container's journey. Instead of viewing dozens of individual events, the **Milestones View** shows only the most important checkpoints:

### Key Milestones:
- **Gate In** - Container accepted at origin terminal
- **Loaded** - Container loaded onto vessel
- **Departed** - Vessel departed from port
- **Arrived** - Vessel arrived at destination port
- **Discharged** - Container unloaded from vessel
- **Gate Out / Delivered** - Container picked up or delivered

### How to View Milestones:

1. Open a container's history
2. Click **"View as milestones"**
3. See a clean, summarized timeline of major events
4. Export milestones to a sheet for easy tracking of multiple containers

Milestones make it easy to quickly understand "where is my container?" without wading through technical details.

## AI Summary

The AI Summary feature provides a natural language summary of your container's journey:

1. Open any container's history
2. Click **"🤖 View Summary"**
3. Read an AI-generated summary that includes:
   - Current container status and location
   - Key journey milestones
   - Estimated or actual arrival dates
   - Notable delays or issues
   - Next expected steps

**Example Summary**:
> "Your container MSCU1234567 is currently at the Port of Los Angeles, where it was discharged from the vessel MSC MAYA on December 1st. The container is now awaiting pickup at the terminal. Based on the tracking history, it departed from Shanghai on November 20th and had a smooth transit. The container should be ready for collection within the next 2-3 business days."

This is perfect for quickly briefing stakeholders or understanding status at a glance.

## Importing from Screenshots

For manually tracked containers, you can quickly import events using carrier tracking page screenshots:

### How to Use Screenshot Import:

1. Open a manually tracked container's history
2. Click **"📷 Import from screenshot"**
3. Take a screenshot of the carrier's tracking page on their website
4. Paste the screenshot into the import window (Ctrl+V or Cmd+V)
5. Click **"Import Events"**
6. AI analyzes the image and extracts all tracking events automatically

**What Gets Extracted**:
- Event descriptions
- Dates and times
- Locations
- Vessel names
- Container status

This feature saves hours of manual data entry while ensuring accuracy.

## Managing Archived Containers

Once a container is delivered or no longer needs active monitoring, you can archive it:

### Archive a Container:

1. Go to **"View Tracked Containers"**
2. Click the **"⋮" (more options)** button next to the container
3. Select **"Archive"**
4. The container moves to your archived list

### View Archived Containers:

1. In **"View Tracked Containers"**
2. Click **"View Archived"** toggle
3. Browse all previously archived containers
4. Unarchive any container by clicking **"⋮"** → **"Unarchive"**

**Why Archive?**
- Keep your active tracking list clean and focused
- Maintain historical records without cluttering current operations
- Easily retrieve past shipment information when needed

## Exporting Data to Sheets

Container Tracker makes it easy to work with your data in Google Sheets:

### Export Tracked Containers List:
1. Navigate to **"View Tracked Containers"**
2. Click **"Export to Sheet"** in the header
3. A sheet named "Tracked Containers" is created with all active containers

### Export Container History:
1. Open any container's history view
2. Click **"Export to Sheet"**
3. A sheet named "History - [Container Number]" is created with:
   - Container information (carrier, type, ETA)
   - Complete event timeline with all details

### Export Milestones:
1. View container milestones
2. Click **"Export to Sheet"**
3. Get a clean summary of major milestones in spreadsheet format
4. Perfect for tracking multiple containers side-by-side

All exported data is formatted and ready for analysis, reporting, or integration with your existing workflows.

## Best Practices

### For Automatic Tracking:
- Submit containers as early in their journey as possible to capture complete history
- Check your tracked list regularly to monitor progress
- Use milestones view for quick daily check-ins

### For Manual Tracking:
- Use screenshot import whenever possible to save time
- Add events promptly to maintain accurate timelines
- Archive completed shipments to keep your workspace organized

### For Reporting:
- Export milestones for executive summaries
- Export full history for detailed analysis or compliance
- Use AI summaries for quick status updates to customers

## Need Help?

- **Profile Setup**: Make sure your customer profile is active before tracking containers
- **Carrier Support**: Check which carriers support automatic tracking
- **Credits**: Screenshot imports and AI summaries may consume LLM credits depending on your subscription

Start tracking your first container today and experience automated ocean freight visibility!
