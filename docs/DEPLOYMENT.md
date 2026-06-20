# GitHub Pages Deployment for Koshiv Roadlines

## Deployment Overview
This project uses GitHub Actions to deploy the frontend application from `frontend/dist` to GitHub Pages.

## Workflow Behavior
- The workflow is triggered only on `push` to the `main` branch.
- It also supports manual dispatch with `workflow_dispatch`.
- The `develop` branch is for development, and `main` is production.

## Build Process
- The workflow checks out the repository.
- It sets up Node.js 20.
- It installs dependencies with `npm ci` inside the `frontend/` folder.
- It runs `npm run build` from `frontend/`.
- The output folder is `frontend/dist`.

## GitHub Pages Configuration
- The GitHub Pages source should be set to GitHub Actions in repository settings.
- The deployment artifact is uploaded from `frontend/dist`.
- Custom domain `koshivroadlines.in` will be configured later after DNS planning.
- Do not add a `CNAME` file until the custom domain setup is ready.

## Post-Deployment Verification
After deployment, verify that:
- The homepage loads.
- The favicon loads.
- `/robots.txt` loads.
- `/sitemap.xml` loads.
- The page title and meta tags are present.
