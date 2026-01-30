# Vite + jQuery 3.7.1 + Bootstrap 3.4.1 Demo

A simple "Hello World" demo showing how to use Vite with legacy technologies (jQuery 3.7.1 and Bootstrap 3.4.1) using modern ESM imports and TypeScript.

## What This Demonstrates

- **Vite** as a modern dev server with HMR (Hot Module Replacement)
- **jQuery 3.7.1** imported as an ES module
- **Bootstrap 3.4.1** CSS imported as an ES module
- **TypeScript** for all application code
- Modern build process for production deployment

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
├── src/
│   ├── main.ts       # TypeScript entry point (event handlers)
│   └── style.css     # Custom styles
├── index.html        # HTML markup and entry point
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Dependencies

- **jquery**: 3.7.1
- **bootstrap**: 3.4.1
- **@types/jquery**: TypeScript definitions for jQuery
- **vite**: Modern build tool
- **typescript**: TypeScript compiler

## How It Works

1. **Vite** starts a dev server that serves `index.html`
2. `index.html` contains the markup and loads `src/main.ts` as an ES module
3. Vite transforms TypeScript on-the-fly during development
4. jQuery and Bootstrap are imported using modern ESM syntax
5. For production, Vite bundles everything into optimized static assets

This setup lets you use legacy libraries with modern tooling!
