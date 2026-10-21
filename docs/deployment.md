# Deployment

## Serving model

The portfolio is configured for a single public origin with a statically built, pre-rendered frontend and a small Spring Boot API container. The frontend output is `frontend/dist/`; the backend listens on the platform-provided `PORT` (the image defaults to 3000) and exposes unauthenticated `GET /api/health` for readiness.

The saved WebDev hosting configuration is:

- Static output directory: `frontend/dist`.
- Server: enabled; database: disabled.
- Container: root `Dockerfile`, using Java 21; health path `/api/health`.
- Published routing: `/api/*` to the server first, then `/*` to static output. The site has one public `/` page and navigates by section anchors; no SPA deep-link fallback is declared.
- Automatic publishing: disabled. A new checkpoint does not go live until an explicit publish is requested and succeeds.

The static host uses npm to fetch the pinned pnpm release, avoiding reliance on an already-installed package manager or the local Corepack signature cache. Its exact configured build command is:

```sh
npm exec --yes --package=pnpm@11.25.0 -- pnpm --dir frontend install --frozen-lockfile && npm exec --yes --package=pnpm@11.25.0 -- pnpm --dir frontend build
```

This command has been run locally: it selected pnpm `11.25.0`, completed the frozen-lockfile install and produced `frontend/dist/index.html`.

The checked-in workspace sets pnpm 11's `nodeLinker: hoisted`. This gives each dependency a normal directory instead of pnpm's isolated `.pnpm` symlink tree, addressing the specific paths rejected by the earlier hosted source archive. The installed tree retains only ordinary `.bin` executable shims. The node-linker setting is documented in the root [README](../README.md) and [setup guide](setup.md).

The published API is available under the relative `/api` path on the same origin. The Vite development proxy has the same shape. The current portfolio page does not call the health endpoint; it is used by readiness checks. A future browser-side server feature can use `/api` without a separate origin, so no permissive custom CORS configuration is needed. If the API is later hosted separately, configure the actual public frontend origin and allow only the required methods and headers.

## Environment and contact delivery

The current app needs no private environment variables, database URL, authentication secret or payment credentials. `.env.example` contains placeholders only. Never put secrets in the frontend build or source control. The Contact section shows the supplied email, LinkedIn, GitHub and CV links, but contains no form because no message-delivery service is configured. If delivery is added later, store its credential as a server runtime secret, validate and limit submissions, protect the public endpoint against abuse, and report success only after the delivery provider confirms delivery.

## Optional Vercel deployment (static frontend only)

The current visitor-facing portfolio is a static React/Vite site and does not call the Spring Boot health endpoint. Vercel can host the frontend without deploying the Java container. For the current monorepo, configure the Vercel project with the `frontend/` directory as its project root, the Vite framework preset, `pnpm build` as the build command, and `dist` as the output directory. The frontend pins pnpm 11.25.0 in its package manifest. No API environment variable is required for the current page. The optimized portrait is tracked at `frontend/public/images/thando-majola.webp` and served from `/images/thando-majola.webp` in both Manus Preview and Vercel.

The current canonical Git remote is the Manus-managed project repository, not a personal GitHub repository. A Git-connected Vercel deployment requires the site source to be available in a GitHub repository the user can access; connecting or switching the Manus project to that repository is a separate action and has not been performed. Vercel CLI is another supported deployment route when the user has a local checkout and the CLI is configured.

The existing root Dockerfile and Spring Boot backend are for the Manus hybrid deployment path, not the static Vercel project. If a future visitor-facing feature needs the backend, deploy Java/Spring Boot separately to a Java-capable host and configure the actual public frontend origin/CORS policy, or choose a host that supports the whole container. Vercel's documented Functions runtime list does not provide a Java runtime.

Official references: [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github), [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Vercel Functions runtimes](https://vercel.com/docs/functions/runtimes), and [Vercel deployments and CLI](https://vercel.com/docs/deployments).

## Publishing the current version

1. Build and test the frontend and backend using the commands in the root `README.md` and `docs/setup.md`.
2. Confirm `GET /manus-routes.json` returns the declared page route as JSON, `/api/health` returns HTTP 200, and the frontend build output contains `index.html`.
3. Commit the intended files to the project's canonical `main` branch. Fetch and integrate the latest `origin/main` immediately before pushing; preserve any concurrent changes and never force-push.
4. Confirm Manus recorded the accepted main commit as a checkpoint. A local commit or Preview is not a checkpoint.
5. Explicitly publish that checkpoint because auto-publish is disabled. Wait for the publish job's returned result and verify the actual public URL and `/api/health` before describing the site as live.

If managed publication fails, use its concrete error to address the specific cause. Do not claim a public URL based on the Preview link, successful local build or saved configuration alone. The platform Preview is the development URL and is not the production domain.
