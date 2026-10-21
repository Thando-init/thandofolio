# Thando Majola — Personal Tech Portfolio

I built this responsive editorial portfolio to introduce my path into technology, share selected projects, and make it easy to contact me. My current interests are systems integration, backend development, workflow automation, and practical AI-enabled workflows. I keep project claims evidence-led and distinguish what I have tested from what I am still exploring.

## Stack and architecture

I built the frontend with React 19.2.0, TypeScript 5.9.3, and Vite 7.2.2. Vite pre-renders the page into the initial HTML, and React hydrates it for interactive navigation and project details. I also included a small Java 21/Spring Boot 4.1.1 backend, built with Maven 3.10.0 through the project Maven Wrapper. It currently exposes only `GET /api/health`; I have not added a database, authentication, contact form, or email-delivery service.

I configured the pnpm workspace with `nodeLinker: hoisted` so dependencies install in a flat `node_modules` layout without symlinks. This avoids the symlinked install-tree format implicated in a hosted source-archive issue. pnpm 11 reads this setting from `pnpm-workspace.yaml`, not `.npmrc`; see the official [node-modules settings](https://pnpm.io/settings/node-modules) and [pnpm 11 migration notes](https://pnpm.io/migration).

When I develop locally, Vite serves the frontend on port 3000 and proxies `/api` to Spring Boot on port 8080. I prepared the same-origin route for a future server-backed feature, but my current portfolio page does not call the health endpoint. The page itself is static and does not need the backend to display its content.

## Where I keep things

- I keep navigation, the hero, project cards, the workflow diagram, contact links, and the footer in `frontend/src/components/`.
- I compose the About, Projects, and Technical Focus sections in `frontend/src/sections/`.
- I keep my profile and contact details, project facts, and technical-focus labels in `frontend/src/data/`.
- I define the project content model in `frontend/src/types/`.
- I keep my optimized portrait at `frontend/public/images/thando-majola.webp`; the site serves it from `/images/thando-majola.webp`.
- I keep my downloadable CV at `frontend/public/cv/thando-majola-cv.pdf`; the site serves it from `/cv/thando-majola-cv.pdf`.
- I keep the Java health application and its tests under `backend/src/`.
- I explain setup, architecture, deployment status, and project-stack evidence in `docs/`.

## Prerequisites and local development

I use Java 21, Node.js 22, and pnpm 11.25.0. To avoid replacing an existing global pnpm installation, I run the pinned pnpm version through `npx`:

```sh
npx --yes pnpm@11.25.0 --dir frontend install --frozen-lockfile
```

Start the backend from the repository root:

```sh
./backend/mvnw -f backend/pom.xml spring-boot:run
```

In another terminal, start Vite:

```sh
npx --yes pnpm@11.25.0 --dir frontend dev
```

The site listens on port 3000 and the backend listens on port 8080 locally. The Vite `/api` proxy keeps any browser-side API request same-origin, although the current page has no API-backed feature. I explain the local setup in [docs/setup.md](docs/setup.md).

## Tests and production build

I use these commands to type-check, test, and build the frontend, then test the backend:

```sh
npx --yes pnpm@11.25.0 --dir frontend typecheck
npx --yes pnpm@11.25.0 --dir frontend test
npx --yes pnpm@11.25.0 --dir frontend build
./backend/mvnw -f backend/pom.xml test
```

The frontend build bundles the client assets and statically pre-renders the page. `GET /api/health` returns `{"status":"ok"}`. I report only checks I have actually run.

## Updating my portfolio content

- I keep my hero copy, positioning statement, biography, portrait path, and contact URLs in `frontend/src/data/profile.ts`.
- I keep the downloadable CV file at `frontend/public/cv/thando-majola-cv.pdf`. To update it, I replace that PDF and keep the same filename, or change the path in `profile.ts` and the download filename in `frontend/src/data/socialLinks.ts` together.
- I keep my project summaries and case studies in `frontend/src/data/projects.ts`. The Influencer Intel and Salon Booking cards link to their supplied public GitHub repositories. I do not show the current authentication-gated Streamlit link as a public demo, and I keep the SafeRide repository link hidden while its supplied URL is unavailable. I document my source checks in `docs/project-stack-verification.md`.
- When I add a project, I add a `PortfolioProject` to `projects.ts` with its title, category, status, summary, technology verification state, and case-study sections. I add workflow steps only when a diagram helps explain the project.
- I keep my prototype tools, current learning, and future exploration distinct in `frontend/src/data/technicalFocus.ts`.

## Configuration and contact-delivery limits

I have not configured an email-delivery service. My Contact section displays my supplied email, LinkedIn, GitHub, and CV links; the email is a `mailto:` link, and the site does not store or send form submissions. `.env.example` contains placeholder names only. If I add a contact form later, I will configure a real delivery provider, validate and limit inputs, add basic abuse protection, keep credentials on the server, and report success only after the provider confirms delivery.

## Deployment status

I have not deployed this portfolio to Netlify, and I do not yet have a Netlify production URL. My current page is a static React/Vite site and does not call the Java health endpoint, so I plan to deploy the frontend first and leave the backend out of that static deployment. I will confirm the exact Netlify build settings after I have an account and can validate a deployment. See [docs/deployment.md](docs/deployment.md) for the current status.
