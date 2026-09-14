# Quran Online

A production-ready Quran Online learning platform.

## Architecture

- **frontend** — Next.js application (App Router, UI, and API Route Handlers)
- **backend** — TypeScript backend / business-logic package (services, repositories, validators)
- **database** — Supabase PostgreSQL (to be connected later)
- **deployment** — single Vercel project

```
User → Next.js Frontend → API Route Handlers → Backend Services → Repositories → Supabase PostgreSQL
```

## Current status

This repository is in the **initial architecture / setup** stage.

Folder structure and workspace configuration are in place. Application features, APIs, database connectivity, and UI have not been implemented yet.

## Getting started

```bash
npm install
npm run dev
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the frontend for production |
| `npm run lint` | Lint the frontend |
| `npm run typecheck` | Type-check backend and frontend |
