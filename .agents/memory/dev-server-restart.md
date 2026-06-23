---
name: Dev server restart behavior
description: When the "Start application" workflow needs a manual restart vs auto-reload
---

# Dev server restart on this repl

The "Start application" workflow runs the dev script (`tsx server/index.ts`, NOT watch mode).

**Rule:** Frontend (Vite) changes hot-reload automatically. Backend/server changes (server/*.ts) do NOT auto-restart — call `restart_workflow("Start application")` after editing server code.

**Why:** Editing server files without restarting leaves the old server running, so changes appear to have no effect. Earlier in the project, restarting also resolved transient EADDRINUSE (port 5000) errors.
