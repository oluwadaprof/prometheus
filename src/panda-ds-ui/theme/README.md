# 🎨 Theme & Color Customization Guide

Welcome to the Panda DS UI theming guide! Here you’ll learn how to:
- Change the brand color (primary color)
- Add or customize color palettes
- Use semantic tokens for advanced theming

---

## 🚦 Quick Start: Change the Brand Color

1. **Open the theme colors file:**
   ```
   src/panda-ds-ui/theme/colors.ts
   ```
2. **Find the `primary` color group:**
   ```ts
   export const colors = defineTokens.colors({
     // ...
     primary: {
       1: { value: 'rgba(252, 252, 255, 1)' },
       // ...
       9: { value: 'rgba(12, 104, 195, 1)' }, // <-- Main brand color
       // ...
     },
     // ...
   })
   ```
3. **Change the value of `primary.9` (and optionally other shades) to your new brand color:**
   ```ts
   primary: {
     // ...
     9: { value: 'rgba(255, 0, 0, 1)' }, // Red as the new brand color
     // ...
   }
   ```
4. **Save and restart your dev server.**

Your UI will now use the new brand color everywhere `primary` is referenced!

---

## 🌈 Add or Customize Color Palettes

- You can add new color groups (e.g., `secondary`, `info`, `danger`) in `colors.ts`:
  ```ts
  export const colors = defineTokens.colors({
    ...
    secondary: {
      1: { value: '#F0F0F0' },
      9: { value: '#FF00FF' },
      // ...
    },
    ...
  })
  ```
- Reference them in your components using the design system’s style props or tokens.

---

## 🪄 Use Semantic Tokens

- Semantic tokens (in `colors.ts` as `semanticColors`) let you define colors by purpose, not just palette:
  ```ts
  export const semanticColors = defineSemanticTokens.colors({
    background: {
      app: { value: { base: '{colors.white}', _dark: '{colors.darkContrast}' } },
      // ...
    },
    text: {
      app: { value: { base: '{colors.grayAlpha.12}', _dark: '{colors.darkGrayAlpha.12}' } },
      // ...
    },
    // ...
  })
  ```
- Use these tokens in your components for automatic dark/light theming.

---

## 📚 Links
- [UI Primitives README](../README.md)
- [Root Project README](../../README.md)

---

**Happy theming!** 