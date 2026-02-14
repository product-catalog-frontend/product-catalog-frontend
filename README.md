# Product Catalog

An online store for phones, tablets, and accessories built with React, TypeScript, and Vite.

## 🎯 Project Overview

This is a modern e-commerce application featuring:

- Product catalog with phones, tablets, and accessories
- Shopping cart functionality
- Favorites list
- Product details pages
- Responsive design

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS Modules** - Component-scoped styling
- **ESLint** - Code linting with plugins for React, TypeScript, a11y
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## 📋 Prerequisites

- Node.js 20.x or higher
- npm

## 🛠️ Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd product-catalog-frontend

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm run preview`      | Preview production build     |
| `npm run lint`         | Run ESLint with auto-fix     |
| `npm run lint:check`   | Run ESLint without auto-fix  |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |
| `npm run fix-style`    | Run both Prettier and ESLint |

## 📁 Project Structure
needs to be updated
```
src/
├── components/          # Shared components
│   └── ComponentName/
│       ├── index.ts
│       ├── ComponentName.tsx
│       └── ComponentName.module.scss
├── modules/            # Feature modules
│   ├── HomePage/
│   ├── ProductsPage/
│   ├── CartPage/
│   ├── FavoritesPage/
│   └── shared/        # Shared module content
├── App.tsx
└── main.tsx
```

## ✨ Features

### Implemented

- [x] Project setup with Vite + React + TypeScript
- [x] ESLint and Prettier configuration
- [x] Pre-commit hooks with Husky
- [x] GitHub Actions for CI/CD
- [x] Deployment to GitHub Pages

### To Be Implemented

- [ ] Header with navigation, favorites, and cart icons
- [ ] Footer with GitHub link and "Back to top" button
- [ ] Home page with sliders and category blocks
- [ ] Product pages (Phones, Tablets, Accessories)
- [ ] Product details page
- [ ] Shopping cart functionality
- [ ] Favorites functionality
- [ ] Search with debounce
- [ ] Pagination
- [ ] Sorting (Newest, Alphabetically, Cheapest)
- [ ] Breadcrumbs navigation
- [ ] 404 Not Found page

## 🔧 Code Quality

This project uses several tools to maintain code quality:

- **ESLint** with plugins:
  - `eslint-plugin-react` - React-specific rules
  - `eslint-plugin-react-hooks` - React Hooks rules
  - `eslint-plugin-jsx-a11y` - Accessibility rules
  - `eslint-plugin-import` - Import/export syntax rules
  - `typescript-eslint` - TypeScript rules

- **Prettier** for consistent code formatting
- **Husky** for pre-commit hooks
- **lint-staged** to run checks only on staged files

### Pre-commit Hooks

Before each commit, the following checks run automatically on staged files:

- Code formatting with Prettier
- Linting with ESLint

## 🚢 Deployment

The application is automatically deployed to GitHub Pages on every push to the `main` branch.

**Live Demo:** [Your GitHub Pages URL]

### CI/CD Pipeline

- **Deploy Action**: Runs on push to `main`, builds and deploys to GitHub Pages
- **Lint Action**: Runs on Pull Requests, checks code quality

## 🤝 Contributing

### Workflow

1. Pull the latest `main` branch
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Push your branch to GitHub
4. Open a Pull Request to `main`
5. Write your code and push changes
6. Request review from teammates
7. Address review comments if needed
8. Merge after approval

### Branch Protection Rules

The `main` branch is protected:

- ✅ Requires pull request reviews before merging
- ✅ Requires status checks to pass (linting)
- ✅ No direct pushes allowed
- ✅ No force pushes

### Code Style Guidelines

- Use **CSS Modules** for styling
- Keep `.module.scss` files together with components
- Each component in separate folder with `index.ts`, `ComponentName.tsx`, `ComponentName.module.scss`
- Use **TypeScript** for type safety
- Follow **ESLint** and **Prettier** rules

## 📊 Data Structure

### Product Object

```typescript
{
  id: string; // Required for fetching details
  name: string; // Product name
  image: string; // Link to image (relative to public folder)
  price: number; // Current price
  fullPrice: number; // Original price (for discount)
  year: number; // Used for sorting by newest
  capacity: string; // e.g., "64GB"
  color: string; // e.g., "black"
}
```

## 📄 License

This project is private and proprietary.

## 👥 Team

[Add your team members here]

---

**Made with ❤️**
