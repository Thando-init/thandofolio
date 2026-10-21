# Setup and development

I use this guide to install the dependencies, run the portfolio locally, and check the frontend and backend.

## Prerequisites

I use Java 21, Node.js 22, and pnpm 11.25.0. My backend uses Spring Boot 4.1.1. I pin Maven 3.10.0 through `backend/.mvn/wrapper/maven-wrapper.properties`, so the Maven Wrapper downloads the required distribution on first use and I do not need a separate global Maven installation. I pin frontend dependency versions in `frontend/package.json` and `frontend/pnpm-lock.yaml`.

To avoid changing or overwriting a global package-manager installation, I run the pinned pnpm version through `npx`:

```sh
npx --yes pnpm@11.25.0 --version
```

The command should print `11.25.0`.

## Install frontend dependencies

From the repository root, run:

```sh
npx --yes pnpm@11.25.0 --dir frontend install --frozen-lockfile
```

I configured `pnpm-workspace.yaml` to allow the esbuild installation step needed by Vite without allowing arbitrary package scripts. I also set pnpm 11's `nodeLinker: hoisted`, which produces a flat `node_modules` layout without symlinks for compatibility with hosted source archiving. pnpm 11 reads this setting from `pnpm-workspace.yaml`, not `.npmrc`; see the official [node-modules settings](https://pnpm.io/settings/node-modules) and [migration notes](https://pnpm.io/migration).

## Run both applications

From the repository root, start the backend in one terminal:

```sh
./backend/mvnw -f backend/pom.xml spring-boot:run
```

The backend listens on `http://localhost:8080` by default. In a second terminal, start the frontend:

```sh
npx --yes pnpm@11.25.0 --dir frontend dev
```

Vite serves the site on port 3000. Its `/api` proxy forwards to `http://127.0.0.1:8080`, keeping browser requests same-origin. Check the backend directly with:

```sh
curl -i http://localhost:8080/api/health
```

A healthy response is HTTP 200 with JSON `{"status":"ok"}`. The portfolio page currently does not call this endpoint; I keep it for local and deployment readiness checks.

## Build and test

Run the frontend checks and build from the repository root:

```sh
npx --yes pnpm@11.25.0 --dir frontend typecheck
npx --yes pnpm@11.25.0 --dir frontend test
npx --yes pnpm@11.25.0 --dir frontend build
./backend/mvnw -f backend/pom.xml test
```

My Vite build includes static pre-rendering. It writes the site to `frontend/dist/` and a temporary server-render bundle to `frontend/.prerender/`, which Git ignores.

## Updating my profile and projects

I keep the optimized portrait at `frontend/public/images/thando-majola.webp` and use `/images/thando-majola.webp` as its same-origin static path. I keep the downloadable CV at `frontend/public/cv/thando-majola-cv.pdf` and use `/cv/thando-majola-cv.pdf` for the download link. To replace either asset, keep its path or update the corresponding profile reference.

I keep my hero copy, country-level location, positioning statement, biography, and contact URLs in `frontend/src/data/profile.ts`. I keep project details and supplied repository URLs in `frontend/src/data/projects.ts`, and I use `frontend/src/types/project.ts` as the `PortfolioProject` shape when I add a project. I do not add the SafeRide repository URL until I can confirm a corrected or public link. I keep my technical-focus groups in `frontend/src/data/technicalFocus.ts`, and I record source-backed stack findings in `docs/project-stack-verification.md`.

My Contact section has no form or message storage. Before I add one, I will configure a real delivery service and recipient, keep its secret in the runtime environment, validate and limit submissions, and add basic abuse protection. I will show success only after delivery is confirmed.

## Version references

I pinned Spring Boot 4.1.1 from the stable release line. The official [Spring Boot system requirements](https://docs.spring.io/spring-boot/system-requirements.html) state Java 17 through 26 compatibility, which includes Java 21. The [Spring Boot 4.1.1 release announcement](https://spring.io/blog/2026/08/20/spring-boot-4-1-1-available-now) confirms its availability from Maven Central. Apache's [Maven download page](https://maven.apache.org/download.cgi) lists Maven 3.10.0 as its current recommended release and requires JDK 8 or later. I update these references together with the selected versions if I upgrade the project.
