# Shared HTML Partials

These snippets are repeated in every HTML page. Update in one place, then
propagate to all files (or use a static site generator / server-side includes).

## NAV (paste inside <body>, before fund-row / title-box)

```html
<nav aria-label="Primary">
  <div class="theme-wrap">
    <span>theme:</span>
    <select id="theme" onchange="setTheme(this.value)">
      <option value="celadon">celadon [light]</option>
      <option value="gruvbox">gruvbox [dark]</option>
      <option value="lichen">lichen [dark]</option>
      <option value="nightlight">nightlight [dark]</option>
    </select>
  </div>
  <div>
    <a href="index.html">'blog</a>
    <a href="#">hoard</a>
    <a href="wishlist.html">wishlist</a>
    <a href="#">projekts</a>
    <a href="about.html">about</a>
  </div>
</nav>
```

## FOOTER (paste before </body>)

```html
<footer>
  <div class="footer-left">
    <div class="footer-row1">© 2026 miqim <span>writing about systems &amp; software</span></div>
    <div class="footer-row2">
      <a href="mailto:tahfizhabib@proton.me">tahfizhabib@proton.me</a>
      <a href="https://bsky.app/profile/miqim.bsky.social" target="_blank" rel="noopener">bsky: miqim</a>
      <a href="https://github.com/tahfizhabib" target="_blank" rel="noopener">github: tahfizhabib</a>
      <a href="https://matrix.to/#/@miqim:matrix.org" target="_blank" rel="noopener">matrix: @miqim</a>
    </div>
  </div>
  <div class="footer-icons">
    <a href="mailto:tahfizhabib@proton.me" title="Email">
      <svg viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
    </a>
    <a href="https://bsky.app/profile/miqim.bsky.social" target="_blank" rel="noopener" title="Bluesky">
      <svg viewBox="0 0 360 320"><path d="M180 142c-16.3-33.4-60.4-95.8-101.5-126C36.8-13 0 9.2 0 58.5c0 9.9 1.4 19.7 4.2 29.1C14 122 48.8 131 80 128c-44.8 7.2-84 24-80 55.2C4.8 230.4 55 256 100 248c-32 24-56 72-100 72 44 16 108 24 180 24s136-8 180-24c-44 0-68-48-100-72 45 8 95.2-17.6 100-64.8C364 152 324.8 135.2 280 128c31.2 3 66-6 75.8-40.4 2.8-9.4 4.2-19.2 4.2-29.1C360 9.2 323.2-13 281.5 16 240.4 46.2 196.3 108.6 180 142z"/></svg>
    </a>
    <a href="https://matrix.to/#/@miqim:matrix.org" target="_blank" rel="noopener" title="Matrix">
      <svg viewBox="0 0 24 24"><path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.003 1.108.26-.374.636-.704 1.123-.993.489-.288 1.033-.434 1.634-.434.457 0 .883.064 1.272.188.39.125.722.314.996.569.274.255.485.583.635.985.148.4.224.873.224 1.417v5.728h-2.272V12.9c0-.287-.01-.558-.034-.806a1.75 1.75 0 0 0-.156-.633 1.015 1.015 0 0 0-.39-.42c-.174-.1-.41-.153-.706-.153-.296 0-.541.06-.733.18a1.28 1.28 0 0 0-.457.477 1.93 1.93 0 0 0-.23.674 5.54 5.54 0 0 0-.06.818v4.624H9.94V12.9c0-.26-.008-.517-.026-.775a1.935 1.935 0 0 0-.138-.652 1.04 1.04 0 0 0-.375-.46c-.172-.115-.416-.173-.728-.173-.104 0-.24.025-.407.073a1.245 1.245 0 0 0-.44.258 1.47 1.47 0 0 0-.344.518c-.093.217-.14.497-.14.837v5.15H5.065V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/></svg>
    </a>
    <a href="https://github.com/tahfizhabib" target="_blank" rel="noopener" title="GitHub">
      <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
  </div>
</footer>
```
