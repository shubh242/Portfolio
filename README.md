# Shubh Sanghvi — Portfolio

A Visual Studio Code themed developer portfolio built with Next.js and TypeScript, deployed on Vercel.

Each section of the site is a "file" in the editor — `home.tsx`, `about.html`, `projects.js`, `publications.json`, `github.md`, `contact.css`, `resume.pdf` — with a working Explorer, tabs, status bar, and five switchable color themes (GitHub Dark, Dracula, Ayu, Nord, Night Owl).

## Stack

- Next.js 15 (pages router) + React 19
- TypeScript
- CSS Modules (no UI library)
- `react-github-calendar` for the contributions graph
- Vercel Web Analytics + Speed Insights

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Create a `.env` file (or set these in the Vercel project settings):

```bash
NEXT_PUBLIC_GITHUB_USERNAME="shubh242"
# Optional: raises the GitHub API rate limit so builds never hit the 60/hr cap
GITHUB_TOKEN="<a github personal access token with public repo read access>"
```

The GitHub page fetches the profile and recent repos at build time and falls back to safe defaults if the API is unavailable.

## Project structure

```
components/   # VS Code chrome — Titlebar, Sidebar, Explorer, Tabsbar, Bottombar, cards
data/         # projects + technologies content
pages/        # one route per "file": index, about, projects, publications, github, contact, resume, settings
public/       # logos, theme thumbnails, social preview image
styles/       # CSS modules + global theme variables
types/        # shared TypeScript types
```

## Editing content

- **Projects:** `data/projects.ts`
- **Tech badges (home):** `data/technologies.ts`
- **About / experience / skills:** `pages/about.tsx`
- **Publications:** `pages/publications.tsx`
- **Contact links:** `components/ContactCode.tsx`
- **Resume:** `pages/resume.tsx` (Google Drive file ID)

## Deploying

Designed for Vercel:

```bash
vercel
```

Remember to set `NEXT_PUBLIC_GITHUB_USERNAME` in the Vercel environment variables and enable **Web Analytics** in the project dashboard for visit tracking.
