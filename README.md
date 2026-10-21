# Thando Majola — Personal Tech Portfolio

A responsive editorial portfolio introducing Thando’s path into technology, interests in systems integration and automation, three selected projects, two reachable project repositories, and his supplied direct contact routes. The site intentionally avoids invented experience, personal details, statistics and outcomes.

## Stack and architecture

The frontend uses React 19.2.0, TypeScript 5.9.3 and Vite 7.2.2, with pnpm 11.25.0. Vite pre-renders meaningful page content into the initial HTML, then React hydrates it for interactive navigation. The backend uses Java 21, Spring Boot 4.1.1 and Maven 3.10.0 through the project Maven Wrapper. It provides only `GET /api/health` for readiness. There is no database, authentication, contact form or email delivery service.

The pnpm workspace sets `nodeLinker: hoisted`, which pnpm documents as a flat `node_modules` layout without symlinks. This avoids the symlinked install-tree format implicated in hosted source archiving. pnpm 11 reads linker configuration from `pnpm-workspace.yaml`, not `.npmrc`; see the official [node-modules settings](https://pnpm.io/settings/node-modules) and [pnpm 11 migration notes](https://pnpm.io/migration).

In local development, Vite serves the frontend on port 3000 and proxies `/api` to Spring Boot on port 8080. In managed deployment, the frontend is built as static output and the backend runs in a Java 21 container. Both share one public origin: `/api/*` reaches Spring Boot and page requests reach the static portfolio. The portfolio page itself does not currently call the health endpoint; the proxy and published route are ready for a future genuine server-backed feature. This avoids a separate browser API origin and custom CORS configuration.

## Important folders

- `frontend/src/components/` contains navigation, hero, headings, project cards, workflow diagram, contact and footer.
- `frontend/src/sections/` composes About, Projects and Technical Focus.
- `frontend/src/data/` contains profile/contact details, project facts and technical-focus labels.
- `frontend/src/types/` defines the project content model.
- `frontend/public/images/thando-majola.webp` contains the optimized, supplied portrait and is served as `/images/thando-majola.webp` in both Manus Preview and Vercel.
- `backend/src/main/java/` contains the Spring application and health controller; `backend/src/test/java/` tests its HTTP response with MockMvc.
- `docs/` explains setup, architecture and deployment; `docs/project-stack-verification.md` records repository-backed technology findings and source links.

## Prerequisites and local development

Use Java 21, Node.js 22 and pnpm 11.25.0. Install the pinned pnpm version once with npm:

```sh
npm install --global pnpm@11.25.0
```

Install frontend dependencies from the checked-in lockfile:

```sh
cd frontend
pnpm install --frozen-lockfile
```

In one terminal at the repository root, start the backend:

```sh
./backend/mvnw -f backend/pom.xml spring-boot:run
```

In another terminal, start Vite:

```sh
cd frontend
pnpm dev
```

The site listens on port 3000; the backend listens on port 8080 locally. The Vite `/api` proxy keeps any browser-side API request same-origin, although the current page has no API-backed feature. See [setup.md](docs/setup.md) for more detail.

## Tests and production build

```sh
cd frontend
pnpm typecheck
pnpm test
pnpm build
cd ..
./backend/mvnw -f backend/pom.xml test
```

The frontend build type-checks, bundles client assets and statically pre-renders the page. `GET /api/health` returns `{"status":"ok"}`. Only results actually run in this workspace should be reported as passed.

## Updating portfolio content

- The supplied photograph is stored in `frontend/public/images/thando-majola.webp`, and `profile.portraitPath` uses `/images/thando-majola.webp` in Preview and a future Vercel build. For future photo changes, keep a descriptive, optimised asset in `frontend/public/images/` and update the profile path.
- Edit the hero copy, central positioning statement and biography in `frontend/src/data/profile.ts`.
- Update the supplied email, LinkedIn, GitHub or CV values in `frontend/src/data/profile.ts` when they change. `frontend/src/data/socialLinks.ts` derives its links from those fields. The email is a `mailto:` link; the site does not store messages.
- Edit the case studies in `frontend/src/data/projects.ts`. The Influencer Intel and salon workflow cards link to their supplied public GitHub repositories. The current Influencer Intel Streamlit URL redirects anonymous visitors to authentication, so it is not shown as a public demo; add its updated Vercel URL when supplied. The SafeRide URL currently returns 404 and is intentionally not rendered. See `docs/project-stack-verification.md` for confirmed stacks and source evidence. `frontend/src/types/project.ts` documents optional screenshots, repository links, demo links and achievement information. Add links only after verifying public access.
- Add a project by appending a `PortfolioProject` to `projects.ts` with title, category, status, summary, technology verification state and case-study sections. Add workflow steps only when a diagram is useful.
- Update `frontend/src/data/technicalFocus.ts` while keeping prototype use, current learning and exploration distinct.

## Configuration and contact-delivery limits

`.env.example` has placeholder names only. The API route is relative `/api` and same-origin. The Contact section uses the supplied email, LinkedIn, GitHub and CV URLs, but no email-delivery service is configured, so the site has no form and sends no messages. Do not add a form until a real delivery provider is configured. Then validate and limit inputs, add basic abuse protection, keep credentials in the server environment, configure the actual production origin and report success only after the provider confirms delivery. Never log unnecessary personal data.

## Deployment

The project is configured for a static frontend plus Spring Boot container deployment. See [deployment.md](docs/deployment.md) for the exact pinned static build command, health path, routes, environment behavior, checkpoint and publication steps. The platform Preview is not a production URL; share a live URL only after publication is confirmed.
