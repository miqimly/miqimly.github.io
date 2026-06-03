/* =================================================================
   main.js
   ================================================================= */

/* ── Restore theme + font instantly on load ── */
(function () {
  var t = localStorage.getItem('t');
  if (t) { var s = document.getElementById('theme'); if (s) s.value = t; }
  var f = localStorage.getItem('f');
  if (f) { var fs = document.getElementById('font-select'); if (fs) fs.value = f; applyFontFamily(f); }
})();

/* ── PAGE FADE IN ── */
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = '0';
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.style.transition = 'opacity .35s ease';
      document.body.style.opacity = '1';
    });
  });
});

/* ── bfcache: restore opacity on back/forward ── */
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    document.body.style.transition = 'none';
    document.body.style.opacity = '1';
  }
});

/* ── PAGE FADE OUT on link click ── */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href]');
  if (!link) return;
  var href = link.getAttribute('href');
  if (!href || href === '#' || href.startsWith('mailto:') ||
      href.startsWith('http') || href.startsWith('//') ||
      link.target === '_blank') return;
  e.preventDefault();
  document.body.style.transition = 'opacity .22s ease';
  document.body.style.opacity = '0';
  setTimeout(function () { window.location.href = href; }, 230);
});

/* ── THEME: apply instantly, no flash overlay ── */
function setTheme(val) {
  document.documentElement.setAttribute('data-theme', val);
  localStorage.setItem('t', val);
}

/* ── FONT ── */
function applyFontFamily(val) {
  var fam = val === 'googlesans'  ? "'Google Sans','Product Sans',sans-serif"
          : val === 'ibmplexmono' ? "'IBM Plex Mono',monospace"
          :                         "'Spectral',Georgia,'Book Antiqua',serif";
  document.documentElement.style.fontFamily = fam;
  document.body.style.fontFamily = fam;
}
function setFont(val) { applyFontFamily(val); localStorage.setItem('f', val); }

/* ── tag filter (legacy) ── */
function filterTag(btn) {
  document.querySelectorAll('.tag-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  var tag = btn.dataset.tag;
  document.querySelectorAll('.blog-card').forEach(function (c) {
    var tags = c.dataset.tags ? c.dataset.tags.split(' ') : [c.dataset.tag];
    c.classList.toggle('hidden', tag !== 'all' && tags.indexOf(tag) === -1);
  });
}
