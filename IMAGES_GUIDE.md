# Service Images & Animations Guide

## Overview
QuickBook now features custom SVG illustrations for each appliance service with smooth animations and gradient effects.

## Service Images

### 1. **Washing Machine Repair** 🔧
- **SVG Component**: `WashingMachineImage`
- **Primary Color**: Blue (#2563EB → #0EA5E9)
- **Features**:
  - Machine body with gradient fill
  - Spinning door animation
  - Control panel with interactive buttons
  - Real-time feedback indicators
  
**Animations**:
- Door rotates continuously (4s cycle)
- Buttons pulse in sequence
- Subtle machine vibration effect

---

### 2. **Geyser Installation & Repair** 💧
- **SVG Component**: `GeyserImage`
- **Primary Color**: Cyan (#0EA5E9 → #2563EB)
- **Features**:
  - Tank with gradient design
  - Water level visualization
  - Heating element indicator
  - Steam particles floating upward
  - Temperature display (50°C)

**Animations**:
- Water level ripples gently
- Heating element glows (opacity pulse)
- Steam rises with fade effect
- Tank body has subtle scale animation

---

### 3. **Water Purifier Service** 💧
- **SVG Component**: `WaterPurifierImage`
- **Primary Color**: Green (#22C55E → #0EA5E9)
- **Features**:
  - Multi-stage filter system (3 levels)
  - Output tap with water drop
  - Filter stage labels
  - Clean water indicator

**Animations**:
- Filters glow in sequence
- Water drops fall from tap
- Opacity changes to show filtration process
- Filter stages light up with glow effect

---

### 4. **Refrigerator Repair** ❄️
- **SVG Component**: `RefrigeratorImage`
- **Primary Color**: Slate (#64748B → #475569)
- **Features**:
  - Dual compartment fridge
  - Freezer section (top)
  - Fresh food section (bottom)
  - Realistic door with handles
  - Temperature indication

**Animations**:
- Freezer section has ice glow effect
- Fresh section pulses gently
- Handle moves subtly
- Outer glow effect on hover
- Temperature indicator flickers

---

## Implementation Details

### Service Card Layout
```
┌─────────────────────────┐
│   IMAGE SECTION (h-48)  │  ← SVG illustrations render here
│                         │  ← Animated background gradients
├─────────────────────────┤
│  Service Title          │
│                         │
│  Description (flex-grow)│
│                         │
│  [BOOK NOW] Button      │
└─────────────────────────┘
```

### Animation Timeline

Each service card has a staggered animation:
1. **Fade In** (0.6s) - Cards appear with upward fade
2. **Image Load** (0.2-0.8s) - SVG image animates in with scale
3. **Continuous** - Internal SVG animations loop infinitely

### Hover Effects

When users hover over service cards:
- **Card**: Lifts up (y: -10px) with enhanced shadow
- **Image**: Scales to 1.05x
- **Shadow**: Increases from lg to 2xl
- **Animation**: All effects smooth with 300ms transitions

---

## Customization Options

### Change Image Colors
Edit the SVG `<linearGradient>` definitions in each image:

```jsx
// Example: Change WashingMachineImage colors
<linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stopColor="#NEW_COLOR_1" />
  <stop offset="100%" stopColor="#NEW_COLOR_2" />
</linearGradient>
```

### Adjust Animation Speed
Update Tailwind or Framer Motion animation properties:
- `duration: 4` → Change to 2 for faster, 6 for slower
- `repeat: Infinity` → Remove to play once
- `ease: "linear"` → Change to easeInOut, easeOut, etc.

### Add More Details
Each SVG is scalable and can include:
- Additional animated elements
- Text labels
- More complex shapes
- Custom paths and lines

---

## Component Files

1. **ServiceImages.tsx** - Main SVG components
   - WashingMachineImage
   - GeyserImage
   - WaterPurifierImage
   - RefrigeratorImage

2. **ServiceImagesAnimated.tsx** - Enhanced versions with Framer Motion
   - WashingMachineImageAnimated
   - GeyserImageAnimated
   - WaterPurifierImageAnimated
   - RefrigeratorImageAnimated

3. **ServiceCard.tsx** - Card wrapper with image display
   - Handles image rendering
   - Manages hover states
   - Controls animations

4. **ServicesSection.tsx** - Grid layout
   - Maps services to cards
   - Handles click actions
   - Manages responsive grid

---

## Browser Compatibility

All SVG animations work in:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Performance Notes

- **SVG Optimized**: Minimal code, no external images needed
- **Bundle Size**: Each SVG adds ~2-3KB gzipped
- **Animation**: GPU-accelerated via Framer Motion
- **Rendering**: CSS gradients rendered at device scale
- **Load Time**: Instant (no external image requests)

---

## Future Enhancements

Potential additions:
- SVG text animation effects
- Interactive SVG elements (clickable parts)
- Service-specific sound effects
- More detailed appliance illustrations
- Extended animation palette
- Dark mode themed colors

---

**Last Updated**: March 8, 2026  
**Version**: 2.0 (with images and animations)
