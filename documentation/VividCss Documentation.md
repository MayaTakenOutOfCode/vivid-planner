# 🎨 Cute CSS Library – Documentation

A simple and cute CSS utility library for **colors, typography, components, and layouts**.  
Uses [Inter](https://fonts.google.com/specimen/Inter) font and a minimal color palette.  

---

## 🌈 Global Styles
```css
:root {
  margin: 0;
  padding: 0;
  --background-color: #FAFAF8;
  --primary-color: #A3D9A5;
  --secondary-color: #F7C8C8;
  --accent-color: #FFE699;
  --text-color: #2E2E2E;
  font-size: 250%;
  font-family: 'Inter' sans-serif;
}
```

- **Font:** Inter (Google Fonts)  
- **Palette:** soft green, pink, and yellow accents on a clean background  

---

## ✍️ Typography

### Font Sizes
| Class       | Size   | Example Use           |
|-------------|--------|-----------------------|
| `.text-sm`  | 14px   | small labels, captions, footers |
| `.text-md`  | 16px   | body text (default)   |
| `.text-lg`  | 18px   | slightly larger text  |
| `.text-xl`  | 20px   | subheadings           |
| `.text-2xl` | 24px   | section headings      |
| `.text-3xl` | 30px   | titles                |
| `.text-4xl` | 36px   | page headers          |

### Line Height
| Class          | Value | Use Case              |
|----------------|-------|-----------------------|
| `.ln-height-sm`| 1.3   | tight text blocks     |
| `.ln-height-md`| 1.5   | normal readability    |

### Font Weight
| Class           | Weight | Use Case        |
|-----------------|--------|-----------------|
| `.font-wg-nm`   | 400    | normal text     |
| `.font-wg-bold` | 700    | emphasis/headers|

---

## 🧩 Components

### Button
```css
.btn { ... }
.btn:hover { ... }
```
- Rounded, padded, soft shadow  
- **Primary color (green)** by default  
- On hover → **secondary color (pink)** with lift effect  

### Card
```css
.card { ... }
```
- Rounded container with padding  
- Subtle shadow for content grouping  

---

## 📐 Layout Utilities

### Flexbox
| Class          | Description                          |
|----------------|--------------------------------------|
| `.flex`        | `display: flex`                     |
| `.flex-center` | Center horizontally & vertically    |
| `.flex-col`    | Column layout                       |

### Grid
| Class          | Description                          |
|----------------|--------------------------------------|
| `.grid`        | `display: grid`                     |
| `.grid-center` | Center both axes with `place-items` |

### Spacing
| Class  | Value   |
|--------|---------|
| `.p-2` | 0.5rem  |
| `.p-4` | 1rem    |
| `.m-2` | 0.5rem  |
| `.m-4` | 1rem    |

---
