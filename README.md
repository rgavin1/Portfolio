# Portfolio

## 🧰 Tools and Technologies

Who

### What tools are you using?

- React
- React Hooks
- React Icons
- Typescript
- Jest
- Yarn
- Tailwind CSS
- Git:

  - Use the imperative mood in the subject line [🔗](https://youtu.be/JiZACkPNm8U)

    - 🚫 **Do Not** use past or future tense in the message
    - Example:

    ```bash
    Summary: 🙈 Added text to readme

    Body: We are just demoing what a good commit message looks like
    ```

  - Write a better commit message:

    - 🟢 Use the body to explain what and why vs how
    - Example:

    ```bash
    Summary: Add text to readme

    Body: We are just demoing what a good commit message looks like
    ```

- AWS

When
Why
How

## 📂 File Structure

## 🖌️ Design

| Theme (Mode)     | 🌕 Dark   | 🌞 Light  | Saturation |
| :--------------- | :-------- | :-------- | :--------- |
| Background Color | `#121212` | `#ffffff` |
| Primary Color    | `NA`      | `NA`      |
| Secondary Color  | `NA`      | `NA`      |
| Error Color      | `NA`      | `NA`      |
| Disabled Color   | `NA`      | `NA`      |
| Hover Color      | `NA`      | `NA`      |
| Text Color       | `#ffffff` | `#000000` |
| Drop Shadow      | `NA`      | `NA`      |
| Inner Shadow     | `NA`      | `NA`      |
| Icon             | `NA`      | `NA`      |

- Font Family
- Font Style
- Font Size

- Pending/Sending/Loading

- Button

- Errors - This will be used for a form

## How to install Tailwind CSS

Setup 👉 https://tailwindcss.com/docs/guides/create-react-app

Responsiveness:

```bash
# tailwind.config.js

theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1280px',
    },
  },


```

```html
<div className="md:col-span-2">...</div>
```

Colors:

```bash

# tailwind.config.js

theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },
  },

```

```css
/* src/index.css */

:root {
  --color-primary: #121212;
  --color-secondary: #ecc94b;
  --text_primary: #ffffff;
}

html,
body {
  background-color: var(--color-primary);
  color: var(--text_primary);
}
```

## What did I learn from this project?

-
