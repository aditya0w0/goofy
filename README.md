# Modern Landing Page

⚠️ **AI-GENERATED CODE WARNING** ⚠️  
This project was built by AI assistance. Expect bugs, questionable decisions, and code that might make senior developers cry. Use at your own risk.

A high-performance, responsive landing page built with Next.js 15, featuring smooth animations, intelligent loading states, and optimized Lighthouse scores (when it works).

![Landing Page Preview](./docs/screenshots/hero-desktop.png)

## Live Demo

🔗 **[View Repository](https://github.com/aditya0w0/goofy)**

## Screenshots

<div align="center">
  <img src="./docs/screenshots/desktop-navbar.png" alt="Desktop Navigation" width="45%">
  <img src="./docs/screenshots/mobile-menu.png" alt="Mobile Menu" width="45%">
</div>

<div align="center">
  <img src="./docs/screenshots/lighthouse-score.png" alt="Lighthouse Performance Score" width="90%">
</div>

## Features

### ⚠️ Disclaimer: AI-Generated Features (Your Mileage May Vary)

### Performance

- **Sub-1s LCP**: Optimized for Core Web Vitals (supposedly)
- **Smart Loading**: Adaptive skeleton loading for slow connections (might just be regular loading)
- **Critical CSS**: Inlined critical styles for faster rendering (AI thought this was a good idea)
- **Image Optimization**: Preloaded critical assets (or just random images)

### User Experience

- **Responsive Design**: Mobile-first approach with fluid breakpoints (tested on AI's imagination)
- **Smooth Animations**: 60fps animations with cubic-bezier easing (may cause seizures)
- **Glass Morphism**: Modern backdrop blur effects (because AI loves trendy stuff)
- **Accessibility**: WCAG 2.1 AA compliant (AI claims, humans didn't verify)

### Developer Experience

- **Component Architecture**: Modular, reusable components (AI tried its best)
- **TypeScript Ready**: Easy migration to TypeScript (good luck with that)
- **Shadcn/ui Integration**: Professional component library (AI copy-pasted from docs)
- **Performance Monitoring**: Built-in Core Web Vitals tracking (might be tracking wrong things)

## Tech Stack

| Category        | Technology                       |
| --------------- | -------------------------------- |
| **Framework**   | Next.js 15 (App Router)          |
| **Backend**     | Firebase (Firestore + Auth)      |
| **Styling**     | Tailwind CSS                     |
| **UI Library**  | Shadcn/ui                        |
| **Icons**       | Lucide React                     |
| **Performance** | Critical CSS, Image Optimization |
| **Animations**  | CSS Transitions                  |

## Architecture

```
goofy/
├── components/
│   ├── nav/
│   │   ├── navbar.jsx              # Main navigation
│   │   ├── NavbarSkeleton.jsx      # Loading state
│   │   └── logic/
│   │       ├── DesktopNav.jsx      # Desktop navigation
│   │       └── MobileNavbar.jsx    # Mobile navigation
│   ├── hero/
│   │   ├── HeroSection.jsx         # Hero component
│   │   └── HeroSkeleton.jsx        # Hero loading state
│   ├── ui/
│   │   ├── button.jsx              # Reusable button
│   │   └── skeleton.jsx            # Loading skeleton
│   └── PageLoader.jsx              # Smart connection detection
├── lib/
│   ├── firebase/                   # Firebase config & initialization
│   ├── api/                        # API utility functions
│   ├── hooks/                      # Custom React hooks for Firebase
│   ├── services/                   # Business logic services
│   └── utils.js                    # Utility functions
├── app/
│   ├── api/                        # Next.js API routes
│   ├── layout.js                   # Root layout
│   ├── page.js                     # Home page
│   └── globals.css                 # Global styles
├── types/                          # TypeScript type definitions
└── public/                         # Static assets
```

## Quick Start

### ⚠️ AI Warning: These instructions might work, but no guarantees

### Prerequisites

- Node.js 18.0 or higher
- Package manager (npm, yarn, pnpm, or bun)
- Firebase account (for backend services)
- Patience (lots of it)
- Low expectations

### Installation

```bash
git clone https://github.com/aditya0w0/goofy.git
cd goofy
npm install
```

### Firebase Setup

```bash
# 1. Create Firebase project at https://console.firebase.google.com
# 2. Enable Firestore Database
# 3. Enable Authentication
# 4. Copy config to .env.local (see Environment Variables section)
```

### Development

```bash
npm run dev
# Pray it works on first try
```

Open [http://localhost:3000](http://localhost:3000) in your browser (or whatever port it decides to use).

### Production Build

```bash
npm run build
npm run start
# Cross your fingers
```

## Performance Metrics

| Metric                       | AI Claims | Reality Check | Target  |
| ---------------------------- | --------- | ------------- | ------- |
| **Largest Contentful Paint** | < 1.0s    | TBD by humans | < 2.5s  |
| **First Input Delay**        | < 100ms   | Probably not  | < 100ms |
| **Cumulative Layout Shift**  | < 0.1     | LOL           | < 0.1   |
| **Performance Score**        | 95+       | 🤷‍♂️            | 90+     |

### Optimization Techniques

- **Critical Resource Hints**: DNS prefetch, preconnect, preload (AI read this somewhere)
- **Smart Code Splitting**: Component-level lazy loading (may cause more problems)
- **Connection Awareness**: Adaptive loading based on network speed (revolutionary!)
- **Image Optimization**: WebP format with fallbacks (because PNG is for peasants)
- **Font Loading**: Display swap for better perceived performance (perception vs reality)

## Component Documentation

### Navigation System

```jsx
// Smart navigation with responsive behavior
<Navbar />                    // Main navigation wrapper
<DesktopNav />               // Desktop navigation links
<MobileNav />                // Mobile hamburger menu
```

### Loading States

```jsx
// Intelligent loading based on connection speed
<PageLoader />               // Main loader with connection detection
<NavbarSkeleton />          // Navigation loading state
<HeroSkeleton />            // Hero section loading state
```

### Firebase Integration

```jsx
// Custom hooks for Firebase operations (coming soon)
useAuth(); // Authentication state management
useFirestore(); // Firestore data operations
useFirebaseStorage(); // File upload/download
```

## Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Modern Landing Page"

# Firebase Configuration (get from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Customization

#### Colors and Theming

```css
/* globals.css */
:root {
  --primary: 220 14% 96%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

#### Animation Timing

```css
/* Custom cubic-bezier for Apple-style animations */
.smooth-animation {
  transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

#### Content Updates

- **Hero Text**: `components/hero/HeroSection.jsx`
- **Navigation Links**: `components/nav/navbar.jsx`
- **Brand Assets**: `public/` directory

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aditya0w0/goofy)

### Manual Deployment

```bash
npm run build
# Upload 'out' folder to your hosting provider
```

### Environment Setup

1. **Production**: Set `NODE_ENV=production`
2. **Configure**: Update `next.config.js` for your domain
3. **Analytics**: Add tracking codes to `layout.js`

## Performance Monitoring

Monitor your site's performance:

- **Core Web Vitals**: Use Google PageSpeed Insights
- **Real User Monitoring**: Implement with Vercel Analytics
- **Error Tracking**: Integration ready for Sentry

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) (which probably doesn't exist).

⚠️ **REALITY CHECK**: This is AI-generated code. Contributing means fixing what AI broke.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/fix-ai-mistakes`
3. Make your changes (probably fixing everything)
4. Run tests: `npm run test` (tests may not exist)
5. Submit a pull request (good luck explaining AI decisions)

### Code Standards

- **ESLint**: Configured with Next.js recommended rules (AI hopes they work)
- **Prettier**: Code formatting enforced (by robots, for robots)
- **Conventional Commits**: Required for PR acceptance (humans must clean up AI mess properly)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [Project Wiki](https://github.com/aditya0w0/goofy/wiki) (may contain AI hallucinations)
- **Issues**: [GitHub Issues](https://github.com/aditya0w0/goofy/issues) (expect many)
- **Discussions**: [GitHub Discussions](https://github.com/aditya0w0/goofy/discussions) (mostly about what AI got wrong)

## Final Disclaimer

🤖 **This entire project was built with AI assistance. What could go wrong?**

- Code quality: Questionable at best
- Best practices: AI tried, humans should verify
- Security: Please audit before production (especially for government data!)
- Performance: Theoretical until proven otherwise
- Maintainability: Good luck future developers

🏛️ **AUDIT HEADACHE WARNING**:

- Firebase for government data = compliance nightmare
- Performance scores that'll make auditors cry
- AI-generated code in sensitive systems = career suicide
- 5.2s loading times = security vulnerabilities waiting to happen
- Your IT department will need therapy after reviewing this

🔥 **Firebase Reality Check**:

- ✅ Early phase prototyping: Sure, why not
- ❌ Production government use: Compliance nightmare
- ⚠️ Data residency: Google controls where your data lives
- 🤷‍♂️ FedRAMP compliance: Good luck with that paperwork
- 💸 Audit costs: More expensive than rewriting from scratch

**TL;DR**: AI wrote this. Humans beware. Your server bills AND security audits may thank you for not using this in production. Government agencies should run away screaming.
