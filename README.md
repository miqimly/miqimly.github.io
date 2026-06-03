# The Miqim's Archive

Personal website / blog by Tahfiz "Miqim" Habib.

## Structure

```
miqim-site/
├── index.html          # Blog listing (home page)
├── about.html          # About page
├── wishlist.html       # Wishlist / interests page
├── css/
│   └── style.css       # All styles + theme variables
├── js/
│   └── main.js         # Theme persistence + tag filter
└── posts/              # One HTML file per blog post
    ├── gnome-kde.html
    ├── captcha.html
    ├── captcha-pt2.html
    ├── custom-roms.html
    ├── terminals.html
    ├── grapheneos.html
    ├── grapheneos-privacy.html
    └── degoogling.html
```

## Adding a new post

1. Copy any existing file in `posts/` as a template.
2. Update `<title>`, `.post-title`, `.post-meta`, and body content.
3. Add a matching `<a class="blog-card" ...>` entry in `index.html` with the correct `href`, `data-tag`, and `data-tags`.

## Themes

Four themes are available via the selector in the nav — choice is saved to `localStorage`:

| Key | Name | Mode |
|---|---|---|
| `celadon` | Celadon | Light |
| `gruvbox` | Gruvbox | Dark |
| `lichen` | Lichen | Dark |
| `nightlight` | Nightlight | Dark |

## Deployment

This is a static site — no build step needed. Upload the entire folder as-is to:

- **GitHub Pages**: push to `main`, set Pages source to root or `/docs`
- **Netlify / Vercel**: drag-and-drop or connect repo, deploy root directory
- **Any static host**: upload folder contents to web root

## License

Content © 2026 Tahfiz "Miqim" Habib. All rights reserved.
