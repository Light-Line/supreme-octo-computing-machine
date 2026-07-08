# Scroll Pattern Notes - latecheckout.agency

## Animation Patterns Observed

### 1. Scroll-Triggered Fade-In (Primary Pattern)
**What it does:** Elements fade in as they enter the viewport
- **Easing:** Smooth ease-out curves (cubic-bezier approximation: 0.25, 0.1, 0.25, 1)
- **Duration:** 600-800ms for full opacity
- **Stagger:** 100-150ms between child elements in groups
- **Trigger:** Elements begin animating when ~20-30% visible

**Implementation reference:**
```jsx
whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 30 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

### 2. Slide-Up with Fade
**What it does:** Content slides up 20-40px while fading in
- **y offset:** 20-40px depending on element size
- **Purpose:** Creates depth, makes content feel like it's "rising" into view
- **Common use:** Section headlines, card groups, feature lists

**Implementation reference:**
```jsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
```

### 3. Staggered Children
**What it does:** Child elements animate in sequence
- **Stagger amount:** 0.1s (100ms) per child
- **Max stagger delay:** ~0.5s before full group is visible
- **Pattern:** Often used with `variants` for cleaner code

**Implementation reference:**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### 4. Section Transitions
**What it does:** Sections flow into each other without hard cuts
- **Overlap:** Next section content may start animating before previous fully exits
- **No parallax:** They avoid scroll-linked parallax effects (likely for performance)
- **Background contrast:** Sections alternate light/dark backgrounds for visual separation

### 5. Hover States (Micro-interactions)
**Observed behaviors:**
- **Cards:** Subtle scale (1.02-1.05x) + slight shadow lift on hover
- **Buttons:** Background color shift + subtle scale (1.02x)
- **Links:** Underline animation or color transition
- **Duration:** 200-300ms, ease-out

**Implementation reference:**
```jsx
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.2 }}
```

### 6. Navigation Behavior
- **Sticky header:** Navigation sticks to top on scroll
- **Background change:** Nav background becomes solid with backdrop blur when scrolled
- **No transform:** Navigation doesn't slide away, just stays fixed

### 7. Video Handling (Reference Patterns)
- **Autoplay muted:** Videos autoplay when visible, muted by default
- **Intersection Observer:** Videos pause when out of view to save resources
- **Placeholder:** Gray/gradient placeholder until video loads

### 8. Reduced Motion Support
**Important:** All animations should respect `prefers-reduced-motion`:
- Disable animations/transitions entirely
- Use instant state changes instead
- Framer Motion: `useReducedMotion()` hook

**Implementation reference:**
```jsx
import { useReducedMotion } from 'framer-motion'

function Component() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    />
  )
}
```

---

## Key Timing Patterns

| Element Type | Duration | Delay | Easing |
|--------------|----------|-------|--------|
| Headlines | 600-800ms | 0-100ms | ease-out |
| Body text | 400-600ms | 100-200ms | ease-out |
| Cards | 500-700ms | 100ms stagger | ease-out |
| Images | 600-800ms | 0-200ms | ease-out |
| Buttons/CTAs | 300-500ms | 0 | ease-out |
| Backgrounds | 800-1200ms | 0 | ease-in-out |

---

## Comparison to Current Implementation

### What's Already Good:
- Scroll-triggered fade-in using `whileInView`
- Staggered children with delay props
- Navigation sticky with background change
- Card hover effects with `whileHover`

### Improvements to Make:
1. Add `viewport={{ once: true }}` to all animated elements
2. Implement consistent stagger timing (100ms)
3. Add `useReducedMotion` hook for accessibility
4. Add subtle parallax-free background transitions
5. Improve section transitions with overlapping animations
