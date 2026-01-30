# Quick Start Guide

## What You Have

A Multi-Page Application (MPA) demonstrating:
- ✅ jQuery 3.7.1 
- ✅ Bootstrap 3.4.1
- ✅ TypeScript for all code
- ✅ Modern ESM imports
- ✅ Fast dev server with HMR
- ✅ Optimized production builds
- ✅ Two separate pages with navigation

## Pages

- **Hello World** (`/hello-world.html`) - Counter demo, jQuery alert
- **CRUD Testing** (`/crud-testing.html`) - Add, edit, delete items

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

### `hello-world.html` / `crud-testing.html`
HTML pages with Bootstrap 3 markup and navigation.

### `src/hello-world/main.ts`
TypeScript for the Hello World page - counter and alert demo.

### `src/crud-testing/main.ts`
TypeScript for CRUD page - typed interfaces, add/edit/delete logic.

### `vite.config.ts`
MPA configuration defining multiple entry points for production builds.

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
   - Vite serves multiple HTML pages
   - Each page has its own TypeScript entry point
   - Bootstrap CSS loaded via `<link>` in `<head>` (prevents FOUC)
   - jQuery imported as `import $ from 'jquery'`
   - TypeScript transformed on-the-fly
   - Navigate between pages using the navbar

2. **Production**:
   - `vite.config.ts` defines entry points
   - Each page gets its own JS bundle
   - Shared code (jQuery) extracted to common chunk
   - CSS extracted to separate file
   - Assets (fonts) copied to dist/assets/

## Try It Out

1. Start dev server: `npm run dev`
2. Visit http://localhost:5173/hello-world.html
3. Click "Show jQuery Alert" - shows jQuery version
4. Use the counter buttons - demonstrates typed event handlers
5. Navigate to CRUD Testing page via navbar
6. Add, edit, and delete items - demonstrates typed interfaces
7. Make changes to any `.ts` file - see instant HMR updates
8. Build for production: `npm run build`
9. Check `dist/` folder - separate bundles per page!

## Learn More

- `README.md` - Full project documentation
- `HOW_IT_WORKS.md` - Deep dive into Vite + ESM
- [Vite Docs](https://vite.dev)
- [jQuery Docs](https://api.jquery.com)

Enjoy exploring Vite with legacy technologies! 🚀
