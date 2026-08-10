# Todo App

A simple, browser-based todo list built with **TypeScript**. Tasks are persisted in `localStorage` so they survive page reloads.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Build & run

```bash
npm start
```

This compiles the TypeScript source and starts a local server at **http://localhost:8080**.

Open that URL in your browser to use the app.

### 3. Build only (no server)

```bash
npm run build
```

Compiles `src/app.ts` → `dist/app.js`.


## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm start`     | Build and serve the app on port 8080         |
| `npm run build` | Compile TypeScript to JavaScript             |
| `npm test`      | *(placeholder — no tests configured yet)*    |

## Tech Stack

- **TypeScript** — type-safe application logic
- **Vanilla HTML & CSS** — no framework, no bundler
- **localStorage** — client-side persistence
- **[serve](https://www.npmjs.com/package/serve)** — zero-config local dev server (via `npx`)
