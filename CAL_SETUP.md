# Cal.com Setup Guide for ConversAI Labs

## Step 1: Create Cal.com Account
1. Go to [Cal.com](https://cal.com) and sign up
2. Choose your username (e.g., `conversailabs` or `shashwat-conversai`)
3. Complete the onboarding process

## Step 2: Create Event Type
1. In your Cal.com dashboard, click "Event Types"
2. Create a new event type with these settings:
   - **Event Name**: "ConversAI Demo - 30 Min"
   - **Duration**: 30 minutes
   - **Description**: "Personalized demo of ConversAI Labs platform"
   - **Location**: Zoom/Google Meet (auto-generated)

## Step 3: Configure Booking Form
Add these custom fields to collect lead information:
- Company Name (required)
- Industry (dropdown with your 12 industries)
- Current monthly lead volume (optional)
- Biggest challenge with current lead process (optional)
- What interests you most about ConversAI? (optional)

## Step 4: Set Availability
- Configure your available hours
- Set buffer times between meetings
- Add any blackout dates

## Step 5: Environment Variable Configuration
1. Get your booking URL (e.g., `cal.com/your-username/30min`)
2. Add it to your environment variables:

**For Development (.env.local):**
```bash
NEXT_PUBLIC_CAL_LINK=your-actual-username/30min
```

**For Production (Vercel/hosting platform):**
Add the same environment variable in your hosting dashboard.

**Example values:**
- `NEXT_PUBLIC_CAL_LINK=conversailabs/demo`
- `NEXT_PUBLIC_CAL_LINK=shashwat-gupta/30min`

## Step 6: Advanced Settings (Optional)

### Email Templates
Customize confirmation and reminder emails with:
- ConversAI branding
- Agenda for the demo
- Preparation instructions
- Contact information

### Integrations
Connect Cal.com to:
- **CRM** (HubSpot, Salesforce, Pipedrive)
- **Email** (Gmail, Outlook)
- **Slack** for internal notifications
- **Zapier** for custom workflows

### Workflow Automations
Set up automatic:
- Lead scoring based on form responses
- Email sequences for no-shows
- Follow-up reminders
- Internal team notifications

## Step 7: Testing
1. Book a test appointment using the website
2. Verify all emails are sent correctly
3. Test the meeting link generation
4. Confirm CRM integration (if configured)

## Pricing
- **Free Plan**: Up to 100 bookings/month
- **Pro Plan**: $12/month for unlimited bookings and advanced features
- **Team Plan**: $24/month for multiple team members

## Alternative: Quick Setup with Calendly
If you prefer Calendly (easier setup):
1. Create Calendly account
2. Create "ConversAI Demo" event type
3. Replace Cal.com embed with Calendly embed:

```jsx
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/your-username/30min"
  style={{ minWidth: '320px', height: '700px' }}
/>
```

## Next Steps After Setup
1. Test the booking flow end-to-end
2. Train team members who will conduct demos
3. Create demo script/agenda
4. Set up follow-up email sequences
5. Track conversion metrics

## Support
- Cal.com docs: https://docs.cal.com
- For questions: support@cal.com
- Community: https://github.com/calcom/cal.com/discussions