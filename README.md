# Vite + jQuery 3.7.1 + Bootstrap 3.4.1 MPA Demo

A Multi-Page Application (MPA) demo showing how to use Vite with legacy technologies (jQuery 3.7.1 and Bootstrap 3.4.1) using modern ESM imports and TypeScript.

## What This Demonstrates

- **Vite** as a modern dev server with HMR (Hot Module Replacement)
- **Multi-Page Application** structure with separate entry points
- **jQuery 3.7.1** imported as an ES module
- **Bootstrap 3.4.1** CSS loaded via `<link>` tag
- **TypeScript** for all application code
- Modern build process for production deployment

## Pages

- **Hello World** (`/hello-world.html`) - Basic demo with counter
- **CRUD Testing** (`/crud-testing.html`) - Add, edit, delete items demo

## Key Concepts

### ESM Imports
Vite uses native ES modules during development. jQuery and Bootstrap are imported using modern `import` syntax:

```typescript
import $ from 'jquery'
```

**Note:** Bootstrap CSS is loaded via a `<link>` tag in `index.html` rather than a JavaScript import. This prevents FOUC (Flash of Unstyled Content)—the brief moment where the page appears unstyled before CSS loads.

### TypeScript Support
All app code is written in TypeScript with proper type checking for jQuery thanks to `@types/jquery`.

### Development vs Production
- **Dev mode**: Vite serves files with HMR, no bundling needed
- **Build mode**: Vite bundles everything into optimized static assets

## Getting Started

### Development
```bash
npm run dev
```
Opens dev server at http://localhost:5173 with hot module replacement.

### Production Build
```bash
npm run build
```
Builds optimized static files to `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally.

## Project Structure

```
vite-demo/
├── hello-world.html          # Hello World page
├── crud-testing.html         # CRUD Testing page
├── index.html                # Redirects to hello-world
├── vite.config.ts            # MPA build configuration
├── src/
│   ├── style.css             # Shared styles
│   ├── hello-world/
│   │   └── main.ts           # Hello World logic
│   └── crud-testing/
│       └── main.ts           # CRUD logic
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Dependencies

- **jquery**: 3.7.1
- **bootstrap**: 3.4.1
- **@types/jquery**: TypeScript definitions for jQuery
- **vite**: Modern build tool
- **typescript**: TypeScript compiler

## How It Works

1. **Vite** starts a dev server serving multiple HTML entry points
2. Each HTML page loads its own TypeScript module (e.g., `/src/hello-world/main.ts`)
3. `vite.config.ts` defines all entry points for production builds
4. Vite transforms TypeScript on-the-fly during development
5. jQuery is imported using modern ESM syntax
6. For production, Vite bundles each page separately with shared chunks

This setup lets you use legacy libraries with modern tooling!
