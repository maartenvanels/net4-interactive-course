# net4-interactive-course

Interactive online presentation environment for the Netwerken 4 course.

## Vision

This project aims to transform the Netwerken 4 course material into a dynamic, online learning environment that is:

- **Centrally Accessible:** A main hub page provides access to all lecture modules and interactive tools.
- **Promotes Active Learning:** Students can actively explore concepts through integrated interactive simulations and visualizations.
- **Modular and Maintainable:** Each lecture is a self-contained module, simplifying updates.
- **Consistent and Modern:** Uniform, modern look and feel across the site.
- **Effectively Leverages Technology:** Enhances didactics using SvelteKit, Tailwind CSS, Reveal.js, and Plotly.js, hosted on GitHub Pages.
- **Creates a Sustainable Workflow:** Markdown/HTML-based workflow for easier content development and maintenance.

## Features

- **Responsive Design:** Works on desktop and mobile devices
- **Light/Dark Mode:** Toggle between light and dark interface (in progress)
- **Interactive Tools:** Dynamic visualizations to help understand concepts
- **Modern Presentation:** Using Reveal.js for slide-based lectures

## Technologies Used

- **Web Framework:** SvelteKit
- **Styling:** Tailwind CSS
- **Presentations:** Reveal.js (integrated within SvelteKit)
- **Interactive Plotting:** Plotly.js (integrated within SvelteKit components)
- **Hosting:** GitHub Pages (via `adapter-static`)

## Project Structure (Simplified)

```
/src/
    routes/
        +page.svelte            (Hub page)
        lectures/
            [lecture_id]/
                +page.svelte    (Loads Reveal.js presentation)
        tools/
            [tool_id]/
                +page.svelte    (Loads interactive tool)
    lib/
        components/             (Reusable Svelte components like RevealPresentation, PlotlyChart)
        styles/                 (Global styles if needed)
        utils/                  (Utility functions)
/static/                        (Static assets like images)
/lecture_specific_assets/       (Consider placing within /static/lectures/[id]/)
/tailwind.config.cjs
/svelte.config.js
/package.json
/README.md
/PRD.md
```

## Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Development Server:**

    ```bash
    npm run dev -- --open
    ```

    This will start the development server, usually on `http://localhost:5173`.

3.  **Build for Production (GitHub Pages):**
    ```bash
    npm run build
    ```
    This uses `adapter-static` to create a production-ready build in the `build/` directory, suitable for hosting on GitHub Pages.

## Adding a New Lecture

1.  Create a new directory under `src/routes/lectures/`, e.g., `src/routes/lectures/2/`.
2.  Inside this directory, create a `+page.svelte` file.
3.  Use a `RevealPresentation` component (or similar structure) within `+page.svelte` to define the lecture slides using Markdown or HTML `<section>` tags.
4.  Add content, LaTeX (using configured MathJax/KaTeX), and images (place images in `static/` or a relevant subdirectory).
5.  If needed, create an associated interactive tool under `src/routes/tools/`.
6.  Update the hub page (`src/routes/+page.svelte`) to link to the new lecture route (`/lectures/2`).
7.  Test locally using `npm run dev`.

## Live Site

(Link to be added once deployed on GitHub Pages)
