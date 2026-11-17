# Desire Chimtsitsi Portfolio

A personal developer portfolio built to present selected software-development, cybersecurity, blockchain, and AI/machine-learning work. The site provides project summaries, project-detail routes, category filtering, and contact configuration suitable for local development and static-site deployment.

## Main technologies

- React
- Vite
- JavaScript
- React Router
- Lucide React and React Icons
- CSS

## Portfolio features

- Responsive multi-page navigation
- Dark and light theme toggle with local storage persistence
- Filterable project catalogue generated from structured data
- Featured projects and individual project-detail pages
- Optional project links for source code, demos, and documentation
- Configurable email contact link
- Accessible interactions and reveal animations

## Project catalogue

The portfolio catalogue is defined in `src/data/projects.js`. It currently includes work across blockchain, cybersecurity, AI and machine learning, software development, and wireless security. Each entry can provide a summary, problem statement, technologies, status, optional image, and optional links.

Project statuses are intentionally descriptive: **Prototype / In Development** identifies work still being developed; **Research / Academic Project**, **Academic Project**, and **Security Assessment / Academic Project** identify academic or research work; and **Collaborative Project** identifies team-based work. These labels distinguish the nature and maturity of each project without implying completion or independent authorship where that would be inaccurate.

### Managing projects

Add or update project entries in `src/data/projects.js`. The Projects page, category filters, featured-project section, and project-detail routes are derived from that list. Each project uses `category` as its primary filter and may include `additionalCategories`.

Store project images in `public/images/`. Image paths in project data use the relative `images/...` convention—for example, `images/project-name.png`—with no leading slash. Missing or unavailable images use the built-in visual placeholder. Set optional `github`, `demo`, and `docs` values to real HTTP(S) URLs, or set them to `null` to hide those links.

Each project entry includes `id`, `title`, `category`, `description`, `problem`, `features`, `technologies`, `status`, `image`, `github`, `demo`, `docs`, and `featured`. Set `featured` to `true` to include it in the homepage featured-project section.

```js
{
  id: 'my-project',
  title: 'My Project',
  category: 'Web Development',
  additionalCategories: [],
  description: 'What the project does.',
  problem: 'The problem it addresses.',
  features: ['A key feature'],
  technologies: ['React'],
  status: 'In progress',
  image: 'images/project-name.png',
  github: null,
  demo: null,
  docs: null,
  featured: false,
}
```

## Installation

Prerequisite: install a current Node.js version compatible with the dependencies in `package.json`.

```bash
git clone https://github.com/desire1515/desire-portfolio.git
cd desire-portfolio
npm install
```

## Contact configuration

Create a root-level `.env.local` file from the provided template and set the contact value locally:

```bash
copy .env.example .env.local
```

Set `VITE_CONTACT_EMAIL` in `.env.local`. This file is ignored by Git and must not contain a value intended for public sharing. If the variable is unset, the portfolio displays its contact-not-configured message. Restart the development server after changing environment variables.

## Development and production commands

```bash
# Start the Vite development server
npm run dev

# Run static checks
npm run lint

# Create the production build in dist/
npm run build

# Preview the production build locally
npm run preview
```

## Deployment preparation

Before deploying, run `npm run lint` and `npm run build` locally. Deploy the generated `dist/` directory to a static-hosting provider. Configure `VITE_CONTACT_EMAIL` in the host's environment settings when an email contact link is required; do not upload `.env.local`. Review project links and image paths before release, ensuring project images remain under `public/images/` and use the `images/...` data-path convention.
