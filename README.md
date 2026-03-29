# Pets App

A responsive pet adoption browsing app built with Next.js 16 (App Router), TypeScript, and CSS Modules. Browse, filter, and sort pets — with a detail page for each one.

Live demo: [pets-dusky.vercel.app](https://pets-dusky.vercel.app)

## Features

- Browse all available pets on the home page
- Filter pets by species (Cat, Dog, etc.)
- Sort alphabetically by name (default) or by latest added
- Pet detail page with full information
- Skeleton loading states on both the listing and detail pages
- Error boundary with a retry action
- Fully responsive — mobile and desktop layouts
- Accessible: semantic HTML, ARIA attributes, keyboard navigable

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router, Server Components, API Routes
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- [pnpm](https://pnpm.io/) — package manager
- [Vercel](https://vercel.com/) — deployment

## Project structure

```
src/
  app/
    layout.tsx           # Root layout — header, footer, fonts
    page.tsx             # Home page — pet listing with filters
    error.tsx            # Error boundary
    loading.tsx          # Skeleton loading for home page
    api/pets/            # Internal REST API (GET /api/pets, GET /api/pets/[id])
    pets/[id]/           # Pet detail page
  components/
    Card/                # Pet card component
    Container/           # Max-width layout wrapper
    FilterBar/           # Species filter + "Latest added" toggle
    Header/              # Site header
  config/
    api.ts               # Base URL resolution (local / Vercel)
  services/
    pets.ts              # Fetch helpers — getPets, getPetById
  types/
    pet.ts               # Pet TypeScript type
```

## Getting started

**Requirements:** Node 20, pnpm

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable               | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_BASE_URL` | Full URL of the deployment (e.g. `https://pets-dusky.vercel.app`) |

When running locally this defaults to `http://localhost:3000` and no `.env` file is needed.

## Commands

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start development server (Turbopack) |
| `pnpm build`         | Create production build              |
| `pnpm start`         | Start production server              |
| `pnpm test`          | Run unit tests                       |
| `pnpm test:coverage` | Run tests with coverage report       |
| `pnpm test:watch`    | Run tests in watch mode              |
| `pnpm lint`          | Lint JS and CSS                      |
| `pnpm lint:fix`      | Auto-fix lint errors                 |
| `pnpm format`        | Format with Prettier                 |
| `pnpm typecheck`     | TypeScript type check                |

### Global dependencies

Make sure you have Node 20 installed:

- [Node.js](https://nodejs.org/)
- [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

Will open your default browser to [http://localhost:3000](http://localhost:3000).

### Build production bundles

```
npm run build
```

## Questions

- **Question**: Can I use NPM packages or frameworks like Material-ui?

- **Answer**: Yes, you can, but we don't recommend this since it decreases the chance of showing your skills.

If you have any other questions while working on the exercise feel free to reach out. We will be happy to help.

Happy coding! 😺

## All commands

| Command                 | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| **dev**                 | Start the Next.js development environment              |
| **build**               | Create a Next.js production build                      |
| **start**               | Start a webserver for the production build             |
| **lint**                | Lint the code using ESLint and Stylelint               |
| **lint:fix**            | Fix linting errors for all files                       |
| **format**              | Formats the code using Prettier                        |
| **test**                | Run unit tests                                         |
| **test:fix**            | Run unit tests with updating snapshots                 |
| **test:coverage**       | Run unit tests with code coverage enabled              |
| **test:watch**          | Run unit tests in watch mode                           |
| **test:watch:coverage** | Run unit tests in watch mode and code coverage enabled |
| **typecheck**           | Validate TypeScript compilation                        |
