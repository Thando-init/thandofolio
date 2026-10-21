# Setup and development

## Prerequisites

Use Java 21, Node.js 22 and pnpm 11.25.0. The backend uses Spring Boot 4.1.1. Maven 3.10.0 is pinned through `backend/.mvn/wrapper/maven-wrapper.properties`; the wrapper downloads the required Maven distribution on first use, so a separate global Maven install is unnecessary. Frontend dependency versions are pinned in `frontend/package.json` and `frontend/pnpm-lock.yaml`.

Install pnpm 11.25.0 through npm:

```sh
npm install --global pnpm@11.25.0
pnpm --version
```

The version command should print `11.25.0`.

## Install frontend dependencies

```sh
cd frontend
pnpm install --frozen-lockfile
```

The checked-in `pnpm-workspace.yaml` explicitly permits the esbuild installation step needed by Vite; it does not blanket-allow arbitrary package scripts. It also sets pnpm 11's `nodeLinker: hoisted`, producing a flat `node_modules` without symlinks for compatibility with hosted source archiving. In pnpm 11, this linker setting belongs in `pnpm-workspace.yaml`, not `.npmrc`; see the official [node-modules settings](https://pnpm.io/settings/node-modules) and [migration notes](https://pnpm.io/migration).

## Run both applications

From the repository root, start the backend in one terminal:

```sh
./backend/mvnw -f backend/pom.xml spring-boot:run
```

It listens on `http://localhost:8080` by default. In a second terminal, start the frontend:

```sh
cd frontend
pnpm dev
```

Vite serves the site on port 3000. Its `/api` proxy forwards to `http://127.0.0.1:8080`, keeping the browser request same-origin. Check the backend directly with:

```sh
curl -i http://localhost:8080/api/health
```

A healthy response is HTTP 200 with JSON `{"status":"ok"}`. The Preview process should listen on the configured site port; the backend is a separate local service.

## Build and test

```sh
cd frontend
pnpm typecheck
pnpm test
pnpm build
cd ..
./backend/mvnw -f backend/pom.xml test
```

The Vite build includes static pre-rendering. It writes visitor-facing files to `frontend/dist/`; the temporary server-render bundle goes to `frontend/.prerender/`, which is ignored by Git.

## Updating profile content

The optimized, supplied portrait is tracked at `frontend/public/images/thando-majola.webp`; `profile.portraitPath` uses `/images/thando-majola.webp`, which is the same-origin static path for both Manus Preview and Vercel. Edit the hero copy, country-level location, central positioning statement and About biography in `frontend/src/data/profile.ts`. The supplied email, LinkedIn, GitHub and CV values are already configured there; `socialLinks.ts` reads those fields and renders only real values. Project details and supplied repository URLs live in `frontend/src/data/projects.ts`; use the `PortfolioProject` shape in `frontend/src/types/project.ts` when adding a project. Do not add the SafeRide repository URL until a corrected/public link is confirmed. Technical focus groups live in `frontend/src/data/technicalFocus.ts`. Confirmed project-stack details and source links are in `docs/project-stack-verification.md`.

The Contact section has no form or message storage. Before adding one, configure a real delivery service and recipient, keep its secret in the runtime environment, validate and limit submissions, and add basic abuse protection. Return success only after delivery is confirmed. Update the frontend response states and deployment/security documentation at the same time.

## Version references

Spring Boot 4.1.1 was selected from the stable release line; the official [Spring Boot system requirements](https://docs.spring.io/spring-boot/system-requirements.html) state Java 17 through 26 compatibility, which includes Java 21. The [Spring Boot 4.1.1 release announcement](https://spring.io/blog/2026/08/20/spring-boot-4-1-1-available-now) confirms availability from Maven Central. Apache’s [Maven download page](https://maven.apache.org/download.cgi) lists Maven 3.10.0 as its current recommended release and requires JDK 8 or later. Update these references together with the selected versions if the project is upgraded.
