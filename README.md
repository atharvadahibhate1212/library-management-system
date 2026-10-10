# Library Management System

A responsive Library Management System web application designed for an educational institution. This project showcases a modern library-themed interface and frontend development using React, TypeScript, and Tailwind CSS.

## Live Demo

- **Live Website:** https://library-management-system1-pnyeoll88-atharva-project1.vercel.app/
- **GitHub Repository:** https://github.com/atharvadahibhate1212/library-management-system

## Features

- Modern, library-themed user interface
- Responsive web design
- Login screen interface
- Clean component-based frontend structure
- Deployed online with Vercel

> Note: Only describe login/authentication or library-management functionality as fully working if it has been implemented and tested. A login screen by itself does not provide secure authentication.

## Tech Stack

- **React** — UI development
- **TypeScript** — typed JavaScript
- **Tailwind CSS** — styling
- **Vite** — development server and build tool
- **Lucide React** — icons
- **Vercel** — deployment
- **GitHub** — source-code hosting

## Run Locally

### Prerequisites

Install [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/atharvadahibhate1212/library-management-system.git
   ```

2. Open the project folder. If the project files are inside `Website Builder`, enter that folder:

   ```bash
   cd library-management-system
   cd "Website Builder"
   ```

   If `package.json` is in the repository root instead, skip the second `cd` command.

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open the local URL shown in your terminal (the project may use `http://localhost:8443/`).

## Create a Production Build

Run:

```bash
pnpm build
```

Vite generates the production build in the `dist` directory.

## Project Structure

```text
.
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

*The exact contents of `src/` may vary as the project evolves.*

## Deployment

The website is deployed using [Vercel](https://vercel.com/). The source code is available on GitHub.

## Future Improvements

- Connect the interface to a backend and database
- Implement secure user authentication and role-based access
- Add book search, issue/return, and availability management
- Add student, faculty, librarian, and administrator dashboards, if required

## Author

**Atharva Dahibhate**

---

If you find this project useful, feel free to explore the repository and share feedback.
