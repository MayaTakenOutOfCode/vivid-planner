# 🎨 VividCss – Documentation

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
  font-size: 200%;
  font-family: 'Inter', sans-serif;
  /* Dark theme variables */
  --background-color-dark: #232323;
  --primary-color-dark: #4F8A8B;
  --secondary-color-dark: #FF6F61;
  --accent-color-dark: #FFD700;
  --text-color-dark: #FAFAF8;
}
:root {
  background-color: var(--background-color);
  text-align: center;
  color: var(--text-color);
}
```

- **Font:** Inter (Google Fonts)  
- **Palette:** soft green, pink, and yellow accents on a clean background  
- **Dark theme:** `.dark-theme` class switches to dark palette

---

## ✍️ Typography

### Font Sizes
| Class       | Size     | Example Use           |
|-------------|----------|-----------------------|
| `.text-3xs`  | 0.5rem | small labels, captions, footers |
| `.text-2xs`  | 0.625rem | small labels, captions, footers |
| `.text-xs`  | 0.75rem | small labels, captions, footers |
| `.text-sm`  | 0.875rem | small labels, captions, footers |
| `.text-md`  | 1rem     | body text (default)   |
| `.text-lg`  | 1.125rem | slightly larger text  |
| `.text-xl`  | 1.25rem  | subheadings           |
| `.text-2xl` | 1.5rem   | section headings      |
| `.text-3xl` | 1.875rem | titles                |
| `.text-4xl` | 2.25rem  | page headers          |

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
.btn {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-soft);
  transition: 0.2s ease;
  cursor: pointer;
  border: none;
}
.btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}
```
- Rounded, padded, soft shadow  
- **Primary color (green)** by default  
- On hover → **secondary color (pink)** with lift effect  

### Card
```css
.card {
  background: var(--color-surface);
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: var(--shadow-soft);
}
```
- Rounded container with padding  
- Subtle shadow for content grouping  

---

## 📐 Layout Utilities

### Flexbox
| Class          | Description                          |
|----------------|--------------------------------------|
| `.flex`        | `display: flex`                      |
| `.flex-center` | Center horizontally & vertically     |
| `.flex-col`    | Column layout                        |

### Grid
| Class          | Description                          |
|----------------|--------------------------------------|
| `.grid`        | `display: grid`                      |
| `.grid-center` | Center both axes with `place-items`  |
| `.grid-cols-7` | 7 columns (repeat)                   |

### Spacing
| Class  | Value   |
|--------|---------|
| `.p-1` | 0.25rem |
| `.p-2` | 0.5rem  |
| `.p-4` | 1rem    |
| `.m-2` | 0.5rem  |
| `.m-4` | 1rem    |
| `.mt-1`| 0.25rem (margin-top) |

### Gap
| Class   | Value   |
|---------|---------|
| `.gap-2`| 0.5rem  |

---

## 🎨 Color Utilities

| Class         | Description                       |
|---------------|-----------------------------------|
| `.bg-primary`| Background: primary color         |
| `.text-primary` | Text: primary text color             |

---

## 🖼️ Miscellaneous

| Class      | Description                      |
|------------|----------------------------------|
| `.border`  | 1px solid border (secondary color)|
| `.rounded` | 0.25rem border-radius             |
| `.h-20`    | Height: 20px                      |

---

## 🌚 Dark Theme

Add `.dark-theme` to your root/container to enable dark colors:
```css
.dark-theme {
  --background-color: var(--background-color-dark);
  --primary-color: var(--primary-color-dark);
  --secondary-color: var(--secondary-color-dark);
  --accent-color: var(--accent-color-dark);
  --text-color: var(--text-color-dark);
}
```
