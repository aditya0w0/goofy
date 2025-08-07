# MOBILE HERO SECTION - MAINTENANCE GUIDE

## What this file does:

- Shows the main hero section on mobile phones
- Has a top bar with logo and button
- Has centered text and a big button

## File location:

`components/hero/logic/MobileHeroSection.jsx`

## How to change things:

### Change the logo text:

Find this line: `<div className="text-white font-bold">Logo</div>`
Replace "Logo" with your actual logo text

### Change the main headline:

Find this section:

```jsx
<h1 className="text-4xl font-bold mb-6">
  See the whole board
  <br />
  <span className="text-blue-400">Not just the pieces.</span>
</h1>
```

Replace the text but keep the HTML structure

### Change the description:

Find this line: `The breakthrough you've been waiting for. Finally here.`
Replace with your description

### Change button text:

Find: `Get Started` and replace with your button text

### Change colors:

- `bg-gray-900` = main background (dark gray)
- `bg-gray-800` = top bar background (darker gray)
- `bg-blue-600` = button color (blue)
- `text-blue-400` = accent text color (light blue)
- `text-gray-400` = description text color (gray)

## Common changes:

### Make button a different color (like green):

Change `bg-blue-600` to `bg-green-600`
Change `hover:bg-blue-700` to `hover:bg-green-700`

### Make text bigger:

Change `text-4xl` to `text-5xl` or `text-6xl`

### Make text smaller:

Change `text-4xl` to `text-3xl` or `text-2xl`

## Structure:

```
SECTION (full screen)
├── TOP BAR (logo + button)
└── MAIN CONTENT (centered)
    ├── Headline
    ├── Description
    └── Big Button
```

## DON'T TOUCH:

- The `className` structure (unless you know CSS)
- The `flex` classes (they make things center properly)
- The `h-screen` class (makes it full screen height)

## IF SOMETHING BREAKS:

1. Check you didn't accidentally delete a `>` or `<`
2. Make sure all quotes match: `"like this"`
3. Make sure all brackets match: `{like this}`
4. Copy the original file from git if needed
