# Desire Chimtsitsi Portfolio

A premium dark-themed portfolio for Desire Chimtsitsi, built with React, Vite, React Router, and Lucide React.

## Features

- Responsive multi-page navigation
- Dark/light theme toggle with localStorage persistence
- Filterable project gallery using structured project data
- Premium glassmorphism UI and dark startup-inspired visual system
- Smooth reveal animations and accessible interactions

## Managing projects

Add projects to `src/data/projects.js`; the Projects page, category filters, featured-project section, and project detail routes are generated from that list. Each project uses `category` as its primary filter and can include `additionalCategories`.

Images belong in `public/images/`. Set `image` to a path such as `/images/project-name.png`; missing or unavailable images use the built-in visual placeholder. Set optional `github`, `demo`, and `docs` values to real HTTP(S) URLs, or leave them `null` to hide those links.

Each project entry includes `id`, `title`, `category`, `description`, `problem`, `features`, `technologies`, `status`, `image`, `github`, `demo`, `docs`, and `featured`. Set `featured` to `true` to include it in the homepage featured-project section.

Use this shape for a new entry:

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
  image: null,
  github: null,
  demo: null,
  docs: null,
  featured: false,
}
```

## Stack

- React
- Vite
- JavaScript
- React Router
- Lucide React
- CSS3

## Getting started

1. Install dependencies:
   npm install
2. Set `VITE_CONTACT_EMAIL` in a root `.env.local` file to enable email contact. If it is unset, the portfolio displays a message that contact email is not configured.
3. Run the development server:
   npm run dev
4. Build for production:
   npm run build
5. Preview the production build:
   npm run preview

## Project structure

- src/components — shared UI components
- src/pages — Home, Projects, and About pages
- src/data — project data, with categories derived from project entries
- src/styles — design system and page styling
- src/App.jsx — routing and app-level state

## Deployment

Build the project with `npm run build` and deploy the generated `dist/` directory to any static hosting provider such as Vercel or Netlify.
