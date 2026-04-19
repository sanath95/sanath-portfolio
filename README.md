# Sanath Portfolio

Single-page portfolio site for Sanath Vijay Haritsa, built as a static GitHub Pages project site.

## Local Preview

Because this is a build-free static site, you can preview it with any local static server from the repo root.

With Node.js:

```powershell
npx serve .
```

Then open the local URL shown in the terminal.

If you prefer Python:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` contains the single-page shell
- `assets/css/styles.css` contains the visual system and responsive layout
- `assets/js/site.js` contains the portfolio content and rendering logic
- `assets/` also stores the resume, transcripts, and certification files

## GitHub Pages Deployment

This repo is set up to work as a project site at:

`https://sanath95.github.io/sanath-portfolio/`

To publish it on GitHub Pages:

1. Push the repository to GitHub under the `sanath-portfolio` repo.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings and wait for GitHub Pages to publish the site.

After deployment, GitHub will serve `index.html` from the repo root and keep all `assets/` links intact.
