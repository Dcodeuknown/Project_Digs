# Daniel Digol Portfolio

A personal portfolio built with Next.js, React, and Tailwind CSS. Version 1 is a static frontend; a backend or database can be added if a real product need emerges.

## Getting started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```text
src/app/       App Router pages, metadata, and global styles
```

Portfolio copy and project statuses are starter content based on the supplied project plan. Confirm contact details, biography, skills, and project facts before publishing.

Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical URL to populate the sitemap.

## Deploying to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the static site whenever code is pushed to `main`. It can also be run manually from the repository's Actions tab.

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set the publishing source to **GitHub Actions**.
3. Push a commit or run **Deploy portfolio to GitHub Pages** from the Actions tab.

The workflow uses `npm install` because this starter does not yet have a committed `package-lock.json`. After installing dependencies locally and committing the generated lockfile, change that workflow step to `npm ci` for repeatable installs.
