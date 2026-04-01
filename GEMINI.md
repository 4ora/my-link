# GEMINI.md - Project Context & Instructions

## Project Overview
This project, `my-link`, contains a Next.js application located in the `my-profile` directory. It is a modern web application leveraging the latest (as of 2026) versions of Next.js and React.

- **Main Technologies:**
  - **Next.js 16.2.1:** Utilizing the App Router architecture.
  - **React 19.2.4:** The core UI library.
  - **Tailwind CSS 4:** Used for utility-first styling with PostCSS.
  - **TypeScript:** Ensuring type safety across the codebase.
- **Architecture:** Standard Next.js App Router structure with the `app/` directory containing layouts, pages, and global styles.

## Important Note for AI Agents
Refer to `my-profile/AGENTS.md` for specific rules regarding this version of Next.js. It mentions potential breaking changes and suggests referring to documentation within `node_modules/next/dist/docs/` if available.

## Building and Running
All commands should be executed from within the `my-profile` directory.

- **Development Server:**
  ```bash
  cd my-profile
  npm run dev
  ```
- **Build for Production:**
  ```bash
  cd my-profile
  npm run build
  ```
- **Start Production Server:**
  ```bash
  cd my-profile
  npm run start
  ```
- **Linting:**
  ```bash
  cd my-profile
  npm run lint
  ```

## Development Conventions
- **Styling:** Use Tailwind CSS 4 utilities. Configuration is handled via `postcss.config.mjs` and the newer `@tailwindcss/postcss` integration.
- **Components:** Favor React Server Components (RSC) by default; use `"use client"` only when client-side interactivity is required.
- **Naming:** Follow standard PascalCase for components and camelCase for functions and variables.
- **Linting & Formatting:** ESLint is configured with `next/core-web-vitals`. Ensure all code passes linting before committing.
- **Metadata:** Use the Metadata API in `layout.tsx` or `page.tsx` for SEO and head management.

## Key Files & Directories
- `my-profile/app/`: Contains the application routes and components.
- `my-profile/public/`: Static assets like images and fonts.
- `my-profile/next.config.ts`: Next.js configuration.
- `my-profile/package.json`: Project dependencies and scripts.
- `my-profile/AGENTS.md`: Specific instructions for AI agents regarding this environment.
