# Vendansh Financial Solutions

A premium, production-ready financial services website built with Next.js 15, React, TypeScript, Tailwind CSS, and PostgreSQL via Drizzle ORM.

## Overview

Vendansh Financial Solutions is a financial guidance and referral service website that helps customers explore loan and financing options with clarity. The website features:

- Premium editorial design with sophisticated typography
- Interactive EMI calculator with real-time calculations
- Customer enquiry and partner referral forms
- Comprehensive loan service pages
- Legal pages (Privacy Policy, Terms, Disclaimer, Grievance, Cookies)
- WhatsApp integration
- Responsive design for all devices
- SEO-optimised structure with sitemap and robots.txt

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** PostgreSQL with Drizzle ORM
- **Forms:** React Hook Form + Zod validation
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Plus Jakarta Sans

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up environment variables in `.env`:

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_BUSINESS_EMAIL=contact@vendansh.com
NEXT_PUBLIC_BUSINESS_PHONE=+91-99999-99999
NEXT_PUBLIC_BUSINESS_ADDRESS=Your Office Address
NEXT_PUBLIC_BUSINESS_HOURS=Mon-Fri, 9:00 AM - 6:00 PM
NEXT_PUBLIC_PRIVACY_CONTACT=privacy@vendansh.com
NEXT_PUBLIC_GRIEVANCE_CONTACT=grievance@vendansh.com
```

3. Push the database schema:

```bash
npx drizzle-kit push
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (enquiry, partner, health)
│   ├── services/[slug]/   # Dynamic service detail pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with enquiry form
│   ├── emi-calculator/    # Standalone EMI calculator page
│   ├── partner-with-us/   # Partner registration page
│   ├── privacy-policy/    # Legal pages
│   ├── terms-and-conditions/
│   ├── disclaimer/
│   ├── grievance-redressal/
│   ├── cookies/
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles and design tokens
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots
├── components/
│   ├── layout/            # Header, Footer, WhatsAppButton
│   ├── home/              # Homepage sections
│   ├── forms/             # EnquiryForm, PartnerForm
│   └── ui/                # Reusable UI components
├── config/
│   └── business.ts        # Central business configuration
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── services.ts        # Loan service data
│   ├── validations.ts     # Zod schemas
│   └── emi.ts             # EMI calculation logic
├── db/
│   ├── index.ts           # Database connection
│   └── schema.ts          # Drizzle schema definitions
└── public/                # Static assets
```

## Database Schema

### Enquiries Table
Stores customer loan enquiries with fields for personal details, loan category, amount, and message.

### Partner Enquiries Table
Stores referral partner enquiries with profession, company name, and contact details.

## Features

### Homepage Sections
1. **Hero** — Editorial layout with headline, CTAs, and professional imagery
2. **Financial Clarity** — Three guiding principles with numbered statements
3. **Loan Services** — Asymmetric grid featuring services with varied card sizes
4. **About Vendansh** — Mission, vision, and core values
5. **Why Choose Us** — Five service principles with large numerals
6. **How It Works** — Five-step horizontal process (vertical on mobile)
7. **EMI Calculator** — Fully functional interactive calculator with sliders
8. **Service Standards** — Trust-building principles
9. **Partner With Us** — Referral partner CTA
10. **FAQs** — Accessible accordion with 9 questions
11. **Final CTA** — Closing call-to-action section

### Loan Services
- Personal Loan
- Business Loan
- Home Loan
- Loan Against Property
- Car Loan
- Education Loan
- Professional Loan
- Machinery & Equipment Finance
- Working Capital Finance
- Loan Balance Transfer

Each service page includes use cases, eligibility, documents, steps, and FAQs.

### Forms
- **Customer Enquiry:** Full name, mobile, email, city, employment, loan category, amount, message
- **Partner Enquiry:** Full name, mobile, email, city, profession, company, message

Both forms include Zod validation, loading states, success/error feedback, and privacy acknowledgements.

### Design System
- **Colors:** Canvas `#F6F6F6`, Surface `#FFFFFF`, Primary `#191919`, Orange `#F75708`, Blue `#3898EC`, Green `#BEE0C0`
- **Typography:** Fluid clamp-based sizing for display, H1-H4, body, and small text
- **Spacing:** Generous section padding (100-140px desktop, 48-64px mobile)
- **Radius:** Large image panels (40px), cards (24-32px), buttons (pill-shaped)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Official business email |
| `NEXT_PUBLIC_BUSINESS_PHONE` | Official phone number |
| `NEXT_PUBLIC_BUSINESS_ADDRESS` | Office address |
| `NEXT_PUBLIC_BUSINESS_HOURS` | Business hours |
| `NEXT_PUBLIC_PRIVACY_CONTACT` | Privacy policy contact |
| `NEXT_PUBLIC_GRIEVANCE_CONTACT` | Grievance contact |

## SEO

- Unique metadata for every page
- Sitemap.xml with all routes
- Robots.txt configuration
- Semantic HTML structure
- Descriptive alt text for images
- Open Graph and Twitter card metadata

## Accessibility

- Keyboard-navigable mobile menu with Escape key support
- Accessible form labels and error messages
- Focus-visible states on interactive elements
- `prefers-reduced-motion` support
- Semantic heading hierarchy

## License

Proprietary — All rights reserved by Vendansh Financial Solutions.
