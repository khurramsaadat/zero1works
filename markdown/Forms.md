# Forms - Contact Us Submission Process

## Overview

The site uses [Formspree](https://formspree.io) for contact form submissions. Formspree handles form data collection, email forwarding, and spam filtering without requiring a backend server - compatible with our static export deployment.

---

## Setup Steps

### 1. Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email (free tier: 50 submissions/month)
3. Create a new form
4. Copy the **Form ID** (looks like `xyzabcde`)

### 2. Update the Form Endpoint

Open `src/components/ContactUs.tsx` and replace the placeholder:

```typescript
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID:

```typescript
const FORMSPREE_URL = "https://formspree.io/f/xyzabcde";
```

### 3. Configure Formspree Dashboard

In your Formspree dashboard:

- **Email notifications:** Set to `khurram@zerooneworks.com`
- **Spam protection:** Enable reCAPTCHA (optional, Formspree has built-in honeypot)
- **Auto-response:** Configure an auto-reply email to thank the sender
- **Allowed domains:** Add `zerooneworks.com` and `localhost` (for testing)

---

## Form Fields

| Field | Name attribute | Required | Type | Validation |
|---|---|---|---|---|
| Full Name | `name` | Yes | text | Cannot be empty |
| Email Address | `email` | Yes | email | Valid email format |
| Company Name | `company` | No | text | - |
| Project Budget | `budget` | No | select | Predefined ranges (GBP) |
| Project Details | `message` | Yes | textarea | Minimum 20 characters |
| File Attachment | `attachment` | No | file | Max 10MB, accepted: .pdf, .doc, .docx, .png, .jpg, .jpeg, .figma, .sketch, .zip |

### Budget Ranges

- Under 1,000 GBP
- 1,000 - 5,000 GBP
- 5,000 - 10,000 GBP
- 10,000 - 25,000 GBP
- 25,000+ GBP

---

## Submission Flow

```
User fills form
    |
    v
Client-side validation (name, email format, message length)
    |
    v
FormData object built (includes file if attached)
    |
    v
POST to Formspree endpoint
    |
    v
Formspree processes:
  - Spam filtering
  - Email notification to khurram@zerooneworks.com
  - Auto-response to sender (if configured)
  - Stores submission in dashboard
    |
    v
Success: Toast "Message sent successfully. We will get back to you within 24 hours."
Error: Toast "Failed to send message. Please try again or email us directly."
```

---

## Testing Locally

1. Replace `YOUR_FORM_ID` with your real Formspree ID
2. Run `npm run dev`
3. Navigate to the contact section on the homepage
4. Submit a test message
5. Check your Formspree dashboard and email for the submission

---

## Formspree Free Tier Limits

- 50 submissions per month
- 50MB total file upload storage
- Email notifications
- Spam filtering
- Dashboard to view submissions

For higher volumes, upgrade to Formspree Gold (unlimited submissions, custom redirects, webhooks).

---

## File Location

- Component: `src/components/ContactUs.tsx`
- Used on: Homepage (`src/app/page.tsx`) via `<ContactUs />` in the `#contact` section

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "Failed to send message" | Check Formspree ID is correct, check browser console for CORS errors |
| No email received | Check Formspree dashboard, check spam folder, verify email in Formspree settings |
| File upload fails | Ensure file is under 10MB, check accepted file types |
| Form works locally but not in production | Add production domain to Formspree allowed domains |
