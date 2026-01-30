# How Vite Works with jQuery and Bootstrap (MPA)

## The Modern ESM Approach

### What is ESM?
ESM (ECMAScript Modules) is the official JavaScript module system using `import` and `export`. Vite leverages native ESM in the browser during development.

### Project Structure (Multi-Page App)
- **hello-world.html** - First page with its own `<script>` tag
- **crud-testing.html** - Second page with its own `<script>` tag
- **src/hello-world/main.ts** - TypeScript for Hello World page
- **src/crud-testing/main.ts** - TypeScript for CRUD page
- **vite.config.ts** - Defines entry points for production build

### Development Mode (`npm run dev`)

1. **No bundling during dev**: Vite serves files on-demand
2. **Native ESM in browser**: Modern browsers load modules directly
3. **Fast HMR**: Changes reflect instantly without full reload
4. **On-the-fly transformation**: TypeScript → JavaScript happens per request

When you import jQuery:
```typescript
import $ from 'jquery'
```

Vite:
- Serves `node_modules/jquery/dist/jquery.module.js` (ESM version)
- Transforms it to work in the browser
- Browser loads it as a native ES module

**CSS Loading Strategy:**
Bootstrap CSS is loaded via a `<link>` tag in the HTML `<head>` rather than a JavaScript import. This prevents FOUC (Flash of Unstyled Content)—CSS in `<head>` blocks rendering until loaded, ensuring the page is styled from the start.

### Production Build (`npm run build`)

1. **TypeScript compilation**: `tsc` checks types
2. **MPA bundling**: Vite builds each entry point from `vite.config.ts`
3. **Code splitting**: Shared code (jQuery) extracted to common chunk
4. **Tree-shaking**: Removes unused code
5. **Minification**: Compresses for smaller file size
6. **Asset optimization**: CSS, fonts, images optimized

Output in `dist/`:
- `hello-world.html` - First page
- `crud-testing.html` - Second page
- `assets/hello-world-*.js` - Hello World bundle
- `assets/crud-testing-*.js` - CRUD Testing bundle
- `assets/jquery-*.js` - Shared jQuery chunk
- `assets/*.css` - Bundled CSS

### Why This Works with Legacy Libraries

**jQuery 3.7.1** includes an ESM build (`jquery.module.js`) that Vite uses automatically.

**Bootstrap 3.4.1** CSS can be imported directly:
```typescript
import 'bootstrap/dist/css/bootstrap.css'
```

Vite handles CSS imports by:
1. Processing the CSS file
2. Injecting it into the page during dev
3. Bundling it into a separate CSS file for production

### Key Vite Features Used

1. **MPA Support**: Multiple HTML entry points via `vite.config.ts`
2. **Dependency Pre-bundling**: Vite pre-bundles dependencies (jQuery) using esbuild
3. **Code Splitting**: Shared dependencies extracted to common chunks
4. **CSS Handling**: Bootstrap loaded via `<link>` to prevent FOUC
5. **Asset Handling**: Images, fonts automatically copied to `dist/assets/`
6. **TypeScript**: Built-in support, no extra config needed

### The TypeScript Magic

TypeScript knows about jQuery types thanks to `@types/jquery`:
```typescript
import $ from 'jquery'  // ✓ TypeScript knows $ is jQuery
$('#app').html('...')   // ✓ Type checking works
```

This gives you:
- Auto-completion
- Type checking
- Better IDE support

### Configuration

MPA requires a `vite.config.ts` to define entry points:

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        'hello-world': resolve(__dirname, 'hello-world.html'),
        'crud-testing': resolve(__dirname, 'crud-testing.html'),
      },
    },
  },
})
```

- `appType: 'mpa'` - Disables SPA fallback, gives proper 404 for missing pages

TypeScript config (`tsconfig.json`) tells Vite:
- Target: ES2022 (modern JavaScript)
- Module: ESNext (use latest module syntax)
- Bundler mode resolution (optimize for bundlers like Vite)

## Comparison: Old vs New

### Old Way (Before Vite)
```html
<script src="jquery.min.js"></script>
<script src="app.js"></script>
```
- Global variables (`$`, `jQuery`)
- Manual script order management
- Slow dev server (Webpack, etc.)

### Vite Way
```typescript
import $ from 'jquery'
```
- Explicit imports
- Automatic dependency management
- Lightning-fast dev server
- Modern build output

## Summary

Vite makes it easy to use legacy libraries like jQuery and Bootstrap 3 with modern tooling:
- ESM imports for everything
- TypeScript for type safety
- Fast development experience
- Optimized production builds

You get the best of both worlds: legacy library support + modern development workflow!
