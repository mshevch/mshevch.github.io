# Art Portfolio Site

A simple 4-page static site: Home, Works, About Me, Contact.

## Files
- `index.html`, `works.html`, `about.html`, `contact.html` — the pages
- `style.css` — all styling (light blue theme)
- `script.js` — mobile nav toggle, gallery filter, lightbox, contact form validation
- `images/` — put your artwork files here

## Swapping in your own images
Every image spot is currently a dashed placeholder box. To replace one:

1. Drop your file into `images/` (e.g. `images/piece-1.jpg`)
2. Find the matching `<div class="placeholder">...</div>` in the HTML
3. Replace it with an `<img>` tag, for example:

```html
<img src="images/piece-1.jpg" alt="Untitled Study I, soft pastel">
```

Keep the `alt` text descriptive — it's what screen readers announce.

## The contact form
It currently just validates the fields and shows a confirmation message —
it isn't wired to actually send email, since GitHub Pages can't run backend
code. To make it functional, sign up for a free form service like
[Formspree](https://formspree.io) or [Getform](https://getform.io), then
point the `<form>` tag's `action` at the endpoint they give you.

## Publishing to GitHub Pages
1. Create a repo named `yourusername.github.io`
2. Push these files to the `main` branch
3. In the repo's Settings → Pages, confirm the source is `main` / root
4. Your site will be live at `https://yourusername.github.io`

If you'd rather host it as a project page instead (e.g.
`yourusername.github.io/art-portfolio`), any repo name works — just enable
Pages the same way from Settings.
