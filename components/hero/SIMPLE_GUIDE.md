# MOBILE HERO SECTION - SIMPLE VERSION

## What this does:

- Clean hero section with Framer Motion animations
- Simple animated background (no moving balls)
- Smooth text and button animations

## File: `MobileHeroSection.jsx`

## How to change things:

### Change text:

```jsx
// Main headline
See the whole board
Not just the pieces.

// Description
The breakthrough you've been waiting for. Finally here.

// Button
Get Started
```

### Change colors:

- `bg-slate-950` = main background
- `text-blue-400` = accent text
- `bg-blue-600` = button color
- `text-gray-300` = description color

### Change animations:

```jsx
// Speed up animations
transition={{ duration: 0.5 }}  // faster

// Slow down animations
transition={{ duration: 1.2 }}  // slower

// Remove animations
// Just delete the motion. and initial/animate props
```

### Background animation:

The background slowly shifts between blue and purple gradients.
To disable: remove the `animate` prop from motion.div

## Libraries used:

- **Framer Motion** - for smooth React animations
- **Next.js compatible** - works perfectly with server components

## Simple structure:

```
SECTION
├── Animated Background (gradient shift)
└── Content (text fades in sequence)
    ├── Title (fades in first)
    ├── Description (fades in second)
    └── Button (fades in last + hover effects)
```

## No complex CSS needed!

Everything is handled by Framer Motion - much easier to maintain.
