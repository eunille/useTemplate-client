# 🧪 React + TypeScript + Vite Template

A ready-to-clone template designed for **fast, opinionated frontend setup** using React, TypeScript, and Vite. This repo comes with essential utilities, dependencies, and styling frameworks already configured — making it ideal for personal projects or quick prototyping.


## ⚡️ Features

- ✅ **Pre-configured** with `React`, `TypeScript`, and `Vite`
- 🎯 **ESLint setup** with optional strict and type-aware rules
- 🎨 **UI components** powered by [shadcn/ui](https://ui.shadcn.dev/)
- 🛠️ **Developer utilities** included for fast iteration
- 📦 Just clone and run `npm install` to get started

  ## 📁 Project Goals

- Serve as a **boilerplate for personal frontend projects**
- Provide a **clean and extensible folder structure** (coming soon)
- Minimize setup time while promoting good practices
- Make integration with other tools and libraries seamless

## 🚀 Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Install dependencies:
     npm install

3. Start your server:
    npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
