# Quick Start Guide

## What You Have

A modern Vite project demonstrating:
- ✅ jQuery 3.7.1 
- ✅ Bootstrap 3.4.1
- ✅ TypeScript for all code
- ✅ Modern ESM imports
- ✅ Fast dev server with HMR
- ✅ Optimized production builds

## Commands

### Start Development Server
```bash
npm run dev
```
- Opens at http://localhost:5173
- Changes auto-reload (HMR)
- No bundling during dev

### Build for Production
```bash
npm run build
```
- TypeScript type checking
- Bundles all code
- Optimizes for production
- Output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
- Test the production build locally

## Key Files

### `src/main.ts`
TypeScript code for event handlers:
- jQuery event binding
- Type-safe counter logic
- CSS/Bootstrap imports

### `index.html`
HTML markup with Bootstrap 3 components (panels, buttons, jumbotron).

### `package.json`
Dependencies:
- `jquery@3.7.1` - DOM manipulation
- `bootstrap@3.4.1` - CSS framework
- `@types/jquery` - TypeScript types for jQuery
- `vite@7.2.4` - Dev server and bundler
- `typescript@5.9.3` - TypeScript compiler

### `tsconfig.json`
TypeScript configuration for modern JavaScript output.

## How It Works

1. **Development**:
   - Vite serves files using native ES modules
   - HTML markup lives in `index.html`
   - TypeScript event handlers in `src/main.ts`
   - jQuery imported as `import $ from 'jquery'`
   - Bootstrap CSS imported as `import 'bootstrap/dist/css/bootstrap.css'`
   - TypeScript transformed on-the-fly

2. **Production**:
   - All code bundled into optimized files
   - CSS extracted to separate file
   - Assets (fonts) copied to dist/assets/
   - Ready to deploy

## Try It Out

1. Start dev server: `npm run dev`
2. Click "Show jQuery Alert" - shows jQuery version
3. Use the counter buttons - demonstrates typed event handlers
4. Make changes to `src/main.ts` - see instant HMR updates
5. Build for production: `npm run build`
6. Check `dist/` folder - your optimized app!

## Learn More

- `README.md` - Full project documentation
- `HOW_IT_WORKS.md` - Deep dive into Vite + ESM
- [Vite Docs](https://vite.dev)
- [jQuery Docs](https://api.jquery.com)

Enjoy exploring Vite with legacy technologies! 🚀
