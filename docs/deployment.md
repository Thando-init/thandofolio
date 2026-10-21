# Deployment status

I have not deployed my portfolio to Netlify, and I do not yet have a Netlify account or a public production URL. This guide records what I have built and what I still need to confirm before publishing; it is not evidence of a completed deployment.

## What I have built

I built the visitor-facing site as a React/Vite frontend that produces static files in `frontend/dist/`. My current page does not call the Spring Boot health endpoint. The repository also contains a small Java 21/Spring Boot API and a Dockerfile, but the API currently provides only `GET /api/health`; the static portfolio does not need it to display my content.

For my first public portfolio deployment, I plan to publish the static frontend only. I will decide whether I need a separate API host only if I add a real visitor-facing backend feature.

## Netlify work still to do

I have not connected this repository to Netlify or verified a Netlify build. Once I have an account, I will configure the frontend project, verify the pinned pnpm install and Vite build in Netlify, confirm that the built `dist/` output contains the site and its public assets, and test the preview before publishing. I will record the exact base directory, build command, publish directory, and any required environment settings after I have checked them in that deployment.

The CV is a same-origin static asset at `/cv/thando-majola-cv.pdf`; my portrait is at `/images/thando-majola.webp`. I will verify both download and image paths on the actual deployed URL before I call the site live.

## Limits and safe publication

I have not configured an email-delivery provider, authentication, a database, payment processing, or a contact form for this portfolio. My Contact section uses direct links and does not store or send form submissions. `.env.example` contains placeholders only; I do not put secrets in frontend source or commit real credentials.

Before I describe the site as live, I will confirm that the deployment completed, open the actual public URL, and test the page and its static assets. A local build or deployment preview alone is not a production URL.
