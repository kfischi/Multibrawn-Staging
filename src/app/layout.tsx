The Netlify deploy errored, with the following guidance provided:

Diagnosis  
- [lines #L83-L97](#L83-L97) show Webpack failing because it cannot resolve the `@google/generative-ai`, `next-view-transitions`, and three local component modules (`@/components/AtmosphereBackground`, `@/components/SuperCloset`, `@/components/CustomCursor`). Any one of these missing modules stops the Next.js build.

Solution  
1. Verify that `@google/generative-ai` and `next-view-transitions` are listed in `package.json`. If either is missing, add it and run `npm install` locally so the lockfile updates, then commit the changes.  
   ```bash
   npm install @google/generative-ai next-view-transitions
   ```  
2. Ensure the files `src/components/AtmosphereBackground.tsx`, `src/components/SuperCloset.tsx`, and `src/components/CustomCursor.tsx` (or the paths you import from) actually exist in the repository with matching case-sensitive names. If they are missing, add/commit them. If they are stored under different names or folders, update the imports in `src/app/layout.tsx` so they point to the correct locations.

The relevant error logs are:

Line 67: [96m[1mbuild.command from netlify.toml                               [22m[39m
Line 68: [96m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 69: ​
Line 70: [36m$ npm run build[39m
Line 71: > multibrawn-staging@1.0.0 build
Line 72: > next build
Line 73:    [1m[38;2;173;127;168m▲ Next.js 15.1.3[39m[22m
Line 74:    - Experiments (use with caution):
Line 75:      · optimizeCss
Line 76:  [37m[1m [22m[39m Creating an optimized production build ...
Line 77: request to https://fonts.gstatic.com/s/outfit/v15/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2 failed, reason:
Line 78: Retrying 1/3...
Line 79: request to https://fonts.gstatic.com/s/outfit/v15/QGYvz_MVcBeNP4NJuktqUYLkn8BJ.woff2 failed, reason:
Line 80: Retrying 1/3...
Line 81: [31mFailed to compile.
Line 82: [39m
Line 83: ./src/app/api/chat/route.ts
Line 84: [31m[1mModule not found[22m[39m: Can't resolve '[32m@google/generative-ai[39m'
Line 85: https://nextjs.org/docs/messages/module-not-found
Line 86: ./src/app/layout.tsx
Line 87: [31m[1mModule not found[22m[39m: Can't resolve '[32mnext-view-transitions[39m'
Line 88: https://nextjs.org/docs/messages/module-not-found
Line 89: ./src/app/layout.tsx
Line 90: [31m[1mModule not found[22m[39m: Can't resolve '[32m@/components/AtmosphereBackground[39m'
Line 91: https://nextjs.org/docs/messages/module-not-found
Line 92: ./src/app/layout.tsx
Line 93: [31m[1mModule not found[22m[39m: Can't resolve '[32m@/components/SuperCloset[39m'
Line 94: https://nextjs.org/docs/messages/module-not-found
Line 95: ./src/app/layout.tsx
Line 96: [31m[1mModule not found[22m[39m: Can't resolve '[32m@/components/CustomCursor[39m'
Line 97: https://nextjs.org/docs/messages/module-not-found
Line 98: > Build failed because of webpack errors
Line 99: [91m[1m​[22m[39m
Line 100: [91m[1m"build.command" failed                                        [22m[39m
Line 101: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 102: ​
Line 103:   [31m[1mError message[22m[39m
Line 104:   Command failed with exit code 1: npm run build
Line 105: ​
Line 106:   [31m[1mError location[22m[39m
Line 107:   In build.command from netlify.toml:
Line 108:   npm run build
Line 109: ​
Line 110:   [31m[1mResolved config[22m[39m
Line 111:   build:
Line 112:     command: npm run build
Line 113:     commandOrigin: config
Line 114:     environment:
Line 115:       - CLOUDINARY_API_SECRET
Line 116:       - CLOUDINARY_URL
Line 117:       - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
Line 118:       - NODE_VERSION
Line 119:       - SECRETS_SCAN_ENABLED
Line 120:       - NEXT_PUBLIC_SUPABASE_URL
Line 121:       - NEXT_PUBLIC_SUPABASE_ANON_KEY
Line 122:     publish: /opt/build/repo/.next
Line 123:     publishOrigin: config
Line 124:   headers:
Line 125:     - for: /*
      values:
        Referrer-Policy: strict-origin-when-cross-origin
        X-Content-Type-Options: nosniff
   
Line 126: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 127: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 128: Failing build: Failed to build site
Line 129: Finished processing build request in 24.687s
