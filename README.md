# Blokos Dev - Portfolio

A modern and responsive portfolio built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**. This project has been upgraded to Nuxt 4 and is deployed on Azure Static Web Apps with GitHub Actions CI/CD integration.

<https://blokos.dev>

## 🚀 Features

- **Nuxt 4** - Modern Vue fullstack framework
- **Vue 3** - Progressive JavaScript library
- **Tailwind CSS** - Utility-first CSS framework
- **Nuxt UI** - Components with integrated design system
- **Nuxt Fonts** - Optimized font management
- **TypeScript** - Static type checking
- **SSR + Static Generation** - Static pre-rendering
- **Azure Static Web Apps** - Deployment with GitHub Actions CI/CD

## 📋 Prerequisites

- **Node.js** version 18+
- **npm** or **yarn**

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/thaismr/blokos-dev-nuxt.git

# Navigate to the directory
cd blokos-dev-nuxt

# Install dependencies
npm install
```

## 🧑‍💻 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

### Development

```bash
npm run build
npm run preview
```

### Production - Static Generation

```bash
npm run generate
```

## 📁 Project Structure

```txt
.
├── app/
│ ├── app.vue # Root component
│ ├── app.config.ts # Application configuration
│ ├── assets/
│ │ └── css/
│ │ └── main.css # Global styles
│ ├── components/ # Reusable components
│ │ ├── MainHero.vue
│ │ ├── ProjectItem.vue
│ │ └── ProjectList.vue
│ ├── layouts/
│ │ └── default.vue # Default layout
│ └── pages/
│ └── index.vue # Home page
├── public/ # Static files
├── nuxt.config.ts # Nuxt configuration
├── tsconfig.json # TypeScript configuration
└── package.json # Project dependencies

```

## 🎨 Components

- **MainHero** - Main hero section of the page
- **ProjectList** - Portfolio projects list
- **ProjectItem** - Each project card

### Nuxt Config (`nuxt.config.ts`)

- **Preset**: `static` in production, `node-server` in development
- **Pre-render**: Automatic link crawling for static pre-rendering

### Tailwind CSS

The project uses **Tailwind CSS 4** integrated via `@tailwindcss/vite`.

## 📦 Main Dependencies

```json
{
  "nuxt": "^4.3.0",
  "vue": "^3.5.27",
  "tailwindcss": "^4.1.18",
  "@nuxt/ui": "^4.4.0",
  "@nuxt/fonts": "^0.13.0",
  "nuxt-gtag": "^4.1.0"
}
```

## 🌐 Deployment

This project is deployed on **Azure Static Web Apps** with **GitHub Actions** for CI/CD automation. Every push to the repository triggers automatic building and deployment.

### Deployment Process

The project is configured for static site generation:

```bash
npm run generate
```

Available Scripts

| Script             | Description                      |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start development server         |
| `npm run build`    | Build the application            |
| `npm run generate` | Generate static site             |
| `npm run preview`  | Preview production build locally |

> Deploys to Azure Static Web Apps

### Useful Links

- [Nuxt Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Nuxt UI](https://ui.nuxt.com)
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)

> This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for detail

---

**Status**: ✅ Nuxt 4 - Updated and optimized
