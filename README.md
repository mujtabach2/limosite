# Apex Executive Limo - Premium Luxury Transportation Website

A modern, SEO-optimized website for a luxury limousine service in the Greater Toronto Area, built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 Modern, sleek design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast page loads with Next.js App Router
- 🔍 SEO-optimized with proper meta tags and structured data
- 📝 Blog system for content marketing
- 📋 Lead capture forms for conversions
- 🚗 Fleet showcase with detailed information
- 💼 Service pages optimized for search
- 📞 Multiple contact options and CTAs

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** React Icons
- **Animations:** Framer Motion
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd limo_site
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── blog/            # Blog pages
│   ├── book/            # Booking/lead capture page
│   ├── contact/         # Contact page
│   ├── fleet/           # Fleet showcase
│   ├── services/        # Services page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── CTA.tsx
│   ├── FleetPreview.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Environment Variables

Add any necessary environment variables in your Vercel dashboard under Project Settings → Environment Variables.

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Modify Colors/Branding

Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Add More Blog Posts

Add new blog posts in `app/blog/[slug]/page.tsx` in the `blogPosts` object. For production, connect to a CMS like:
- Contentful
- Sanity
- WordPress (headless)
- Strapi

### Form Integration

The booking and contact forms currently show alerts. Integrate with:
- EmailJS
- SendGrid
- Resend
- Your own API endpoint

## SEO Optimization

Each page includes:
- Optimized meta titles and descriptions
- Open Graph tags for social sharing
- Structured data (can be added)
- Semantic HTML
- Fast loading times
- Mobile responsiveness

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal dependencies
- Static generation where possible

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For support, email info@apexexecutivelimo.com or call (647) 720-7100

