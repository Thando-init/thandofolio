# Implementation Plan — Thando Majola Portfolio

## Product and implementation approach

Build the requested public portfolio as a small monorepo with a React + TypeScript + Vite frontend and a Java 21 + Spring Boot + Maven backend. Keep the site content in typed frontend data files. The backend will provide only a useful health endpoint; it will not accept or discard contact messages because no email delivery service is configured. Use the supplied email, LinkedIn, GitHub profile and CV URLs, omit city-level location and retain the country-level South Africa label. The supplied Influencer Intel and salon repositories are publicly reachable; the SafeRide URL currently returns 404 and must not be rendered until a corrected/public link is confirmed. The user supplied an actual portrait, optimized and tracked at `frontend/public/images/thando-majola.webp`. No project screenshots were supplied. Record technology evidence in `docs/project-stack-verification.md` rather than describing unverified features.

The static portfolio will be pre-rendered at build time so its meaningful content is present in the initial HTML, while React hydrates the same markup for the mobile navigation and project details. Development uses Vite on the configured preview port with a same-origin `/api` proxy to Spring Boot. Publication uses a static frontend build plus a small Spring Boot container: `/api/*` routes to the server, while the remaining public page routes serve the static frontend. This keeps one public origin, avoids unnecessary CORS, and adds no database or external contact-delivery dependency. The backend listens on the platform-provided `PORT` (default 3000 in the container) and exposes an unauthenticated health response for readiness.

Use the installed Java 21.0.12.1, Node 22.13.0, and pnpm 11.25.0 toolchains where applicable; pin package-manager and dependency versions and commit the lockfile and Maven wrapper. Configure pnpm 11's workspace-level `nodeLinker: hoisted` to avoid symlinked install trees in the hosting source archive while preserving the narrow `allowBuilds` policy for esbuild. Pin Spring Boot 4.1.1, whose official system requirements list Java 17–26 compatibility, and Maven 3.10.0, the current recommended release (JDK 8+). Maven is not installed globally in the current sandbox, so use the Maven 3.10.0 Wrapper for local verification and a Java 21 builder/runtime image in the backend Dockerfile.

## Site content and experience

The page will follow the supplied editorial direction: warm ivory, charcoal, a restrained deep-green accent, clear type hierarchy, generous whitespace, left-aligned section numbers, and a distinctive small connected-node monogram. A split hero introduces Thando alongside his supplied, optimized portrait. The hero keeps the supplied headline and supporting copy, the country-level “South Africa” eyebrow without a city, two anchor CTAs, and a compact fifth-place achievement note. The top-right “Let's Connect” CTA uses a rounded-rectangle shape rather than a pill.

Sections are Home, About, Projects, Technical Focus, and Contact. The About narrative is concise and follows business/finance → curiosity about systems → practical software projects → integration and automation. The projects section contains exactly Influencer Intel, Salon Booking and Payment Automation, and SafeRide, with separate status, summary, and detailed case-study content. A responsive semantic step diagram explains the salon workflow. The Influencer Intel case study uses the verified Python/Streamlit/Pandas/Altair dashboard stack and separate FastAPI/Pydantic backend, while unspecified current upgrade work and longer-term CreatorOps capabilities remain unclaimed or exploratory. The supplied Streamlit demo link redirects anonymous visitors to authentication and is not shown as a public demo; add the public Vercel URL when provided. The salon case study describes its source-confirmed Java/Spring Boot/PostgreSQL/ActiveMQ/n8n architecture and marks payment/external credentials honestly as a simulation/configuration boundary. SafeRide will be described only as a one-day Lovable hackathon MVP, with the fifth-place achievement, no unsupported outcome claims, and no unsupported framework stack.

The Technical Focus content will distinguish confirmed project tools from learning and exploration; it will not assert unsupported skill levels, credentials, or years. Contact CTAs will navigate to the contact section. Show the user-supplied email, LinkedIn, GitHub profile and CV links; no contact form will be offered without an actual delivery mechanism. Add public project repositories only when the supplied URLs are reachable; keep the SafeRide link absent until its 404 is resolved. Do not show the inaccessible Streamlit URL as a public demo; wait for the updated Vercel URL. Use semantic HTML, responsive navigation, keyboard-accessible interactions, visible focus states, and reduced-motion-aware transitions.

## Design system

- **Design Movement:** Contemporary Swiss editorial design expressed as personal technical field notes.
- **Core Principles:** Honest representation; useful information hierarchy; calm precision; accessible, responsive interaction.
- **Color Philosophy:** Warm ivory makes the site feel personal and approachable; charcoal carries long-form readability; deep green signals practical growth and systems thinking without competing with content.
- **Layout Paradigm:** Left-aligned editorial composition with an asymmetric split hero, broad whitespace, and stacked project case studies rather than a centered generic card grid.
- **Signature Elements:** Numbered section labels; a fine connector-line motif echoing workflows; a compact connected-node “TM” mark.
- **Interaction Philosophy:** Navigation and detail controls remain explicit and predictable; hover never substitutes for focus or labels; missing links are not rendered as active actions.
- **Animation:** Short restrained state transitions only; honor `prefers-reduced-motion`; no oversized animated headline or scroll-dependent effects.
- **Typography System:** Newsreader for editorial headings and DM Sans for body/UI, with robust system fallbacks and a clear size/weight hierarchy.
- **Brand Essence:** Practical solutions that connect systems and simplify work for teams and individuals; curious, grounded, deliberate.
- **Brand Voice:** Direct, conversational, evidence-led. Example lines: “I build systems that make work simpler.” “I’m interested in how the pieces work together.”
- **Wordmark & Logo:** A custom compact “TM” monogram joined by a small connector path, paired with a restrained text wordmark.
- **Signature Brand Color:** Deep systems green, used sparingly for links, focus treatment, and the achievement accent.

## Project structure

```text
thandofolio/
├── README.md
├── plan.md
├── TODO.md
├── .gitignore
├── .editorconfig
├── .env.example
├── Dockerfile
├── app.config.ts
├── docs/
│   ├── architecture.md
│   ├── setup.md
│   ├── deployment.md
│   └── project-stack-verification.md
├── frontend/
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── pnpm-workspace.yaml
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── public/
│   │   ├── manus-routes.json
│   │   ├── favicon.svg
│   │   └── images/thando-majola.webp
│   ├── scripts/prerender.mjs
│   └── src/
│       ├── main.tsx
│       ├── entry-server.tsx
│       ├── App.tsx
│       ├── components/
│       ├── sections/
│       ├── data/
│       ├── types/
│       └── styles/
└── backend/
    ├── pom.xml
    ├── mvnw
    ├── .mvn/wrapper/
    └── src/
        ├── main/java/za/co/thandomajola/portfolio/
        │   ├── PortfolioApplication.java
        │   └── controller/HealthController.java
        ├── main/resources/application.yml
        └── test/java/za/co/thandomajola/portfolio/HealthControllerTest.java
```

Responsibilities remain intentionally direct: `data/` contains profile, social, and project facts; `components/` contains reusable navigation, headings, cards, diagram, and footer; `sections/` composes page content. There is no frontend API client because no visitor-facing feature currently needs one; the health API is for local and deployment readiness. The same-origin Vite proxy and published `/api/*` route are available for a future genuine server feature. The backend controller handles HTTP and its test verifies the real response. The documentation explains each part and how to extend it; `docs/project-stack-verification.md` traces project-technology claims to repository sources.

## Build and delivery workflow

1. After plan approval, create `TODO.md` with the actual portfolio acceptance criteria, then register TypeScript diagnostics and pin/install the frontend toolchain.
2. Implement the frontend, typed content model, responsive styling, accessible interactions, project case studies, supplied contact links and portrait, route manifest, custom brand SVG, and static prerender build. Keep the SafeRide repository link absent until its 404 is resolved; omit the login-gated Streamlit demo until a public deployment is supplied.
3. Implement the minimal Spring Boot health API, validation only where meaningful, Maven wrapper, focused tests, and CORS-free same-origin development/deployment flow.
4. Add the multi-stage backend `Dockerfile`, static build declaration, deploy health path, and ordered publication routes after verifying the application behavior; keep user auto-publish disabled.
5. Write README and setup, architecture, deployment and project-stack-verification guides, including version choices, API behavior, photo/content replacement, environment variables, repository evidence, honest limitations, and deployment instructions.
6. Run the frontend production build and tests, Maven wrapper build/tests, health endpoint check, route-manifest check, and focused responsive/accessibility inspection. Fix observed issues and report only checks actually completed.
7. Commit the intended files to the project's canonical `main` checkpoint. Publish only after the deployable configuration and checkpoint are verified; report the published URL only if publication succeeds, otherwise provide the Preview URL and exact remaining steps.

## Material constraints and open personal details

The user supplied a portrait, which is optimized and tracked at `frontend/public/images/thando-majola.webp`; the public `/images/thando-majola.webp` asset path works consistently in Manus Preview and Vercel. No project screenshots were supplied. The user has supplied contact/CV URLs and three repository URLs; Influencer Intel and salon are public, while the SafeRide URL returns 404 and is omitted pending correction. Repository verification confirms the current Influencer Intel and salon stacks; see `docs/project-stack-verification.md`. The supplied Streamlit demo requires authentication, so no public demo link is shown until the user supplies an updated Vercel URL. No real booking/payment transaction or salon production deployment is claimed. No contact delivery integration, database, authentication, or live form is included unless a genuine requirement and configuration are later supplied.
