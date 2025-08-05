# Modern Landing Page

A high-performance, responsive landing page built with Next.js 15, featuring smooth animations, intelligent loading states, and optimized Lighthouse scores.

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

### Performance

- **Sub-1s LCP**: Optimized for Core Web Vitals
- **Smart Loading**: Adaptive skeleton loading for slow connections
- **Critical CSS**: Inlined critical styles for faster rendering
- **Image Optimization**: Preloaded critical assets

### User Experience

- **Responsive Design**: Mobile-first approach with fluid breakpoints
- **Smooth Animations**: 60fps animations with cubic-bezier easing
- **Glass Morphism**: Modern backdrop blur effects
- **Accessibility**: WCAG 2.1 AA compliant

### Developer Experience

- **Component Architecture**: Modular, reusable components
- **TypeScript Ready**: Easy migration to TypeScript
- **Shadcn/ui Integration**: Professional component library
- **Performance Monitoring**: Built-in Core Web Vitals tracking

## Tech Stack

| Category        | Technology                       |
| --------------- | -------------------------------- |
| **Framework**   | Next.js 15 (App Router)          |
| **Styling**     | Tailwind CSS                     |
| **UI Library**  | Shadcn/ui                        |
| **Icons**       | Lucide React                     |
| **Performance** | Critical CSS, Image Optimization |
| **Animations**  | CSS Transitions                  |

## Architecture

```
src/
├── components/
│   ├── nav/
│   │   ├── navbar.jsx              # Main navigation
│   │   ├── NavbarSkeleton.jsx      # Loading state
│   │   └── Navigation/
│   │       └── MobileNav.jsx       # Mobile menu
│   ├── hero/
│   │   ├── HeroSection.jsx         # Hero component
│   │   └── HeroSkeleton.jsx        # Hero loading state
│   ├── ui/
│   │   ├── button.jsx              # Reusable button
│   │   └── skeleton.jsx            # Loading skeleton
│   └── PageLoader.jsx              # Smart connection detection
├── app/
│   ├── layout.js                   # Root layout
│   ├── page.js                     # Home page
│   └── globals.css                 # Global styles
└── public/
    └── assets/                     # Static assets
```

## Quick Start

### Prerequisites

- Node.js 18.0 or higher
- Package manager (npm, yarn, pnpm, or bun)

### Installation

```bash
git clone https://github.com/aditya0w0/goofy.git
cd goofy
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Performance Metrics

| Metric                       | Score   | Target  |
| ---------------------------- | ------- | ------- |
| **Largest Contentful Paint** | < 1.0s  | < 2.5s  |
| **First Input Delay**        | < 100ms | < 100ms |
| **Cumulative Layout Shift**  | < 0.1   | < 0.1   |
| **Performance Score**        | 95+     | 90+     |

### Optimization Techniques

- **Critical Resource Hints**: DNS prefetch, preconnect, preload
- **Smart Code Splitting**: Component-level lazy loading
- **Connection Awareness**: Adaptive loading based on network speed
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Display swap for better perceived performance

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

## Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Modern Landing Page"

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

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md).

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Submit a pull request

### Code Standards

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting enforced
- **Conventional Commits**: Required for PR acceptance

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [Project Wiki](https://github.com/aditya0w0/goofy/wiki)
- **Issues**: [GitHub Issues](https://github.com/aditya0w0/goofy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/aditya0w0/goofy/discussions)
