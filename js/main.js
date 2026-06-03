/* =================================================================
   main.js
   ================================================================= */

/* ── Restore theme + font on load ── */
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
      document.body.style.opacity   = '1';
    });
  });
});

/* ── PAGE FADE OUT ── */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href]');
  if (!link) return;
  var href = link.getAttribute('href');
  if (!href || href === '#' || href.startsWith('mailto:') ||
      href.startsWith('http') || href.startsWith('//') ||
      link.target === '_blank') return;
  e.preventDefault();
  document.body.style.transition = 'opacity .25s ease';
  document.body.style.opacity    = '0';
  setTimeout(function () { window.location.href = href; }, 260);
});

/* ── THEME flash then settle ── */
function setTheme(val) {
  var fl = document.getElementById('t-flash');
  if (!fl) {
    fl = document.createElement('div');
    fl.id = 't-flash';
    fl.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;opacity:0;background:#fff;will-change:opacity';
    document.body.appendChild(fl);
  }
  fl.style.transition = 'none';
  fl.style.opacity    = '0.55';
  setTimeout(function () {
    document.documentElement.setAttribute('data-theme', val);
    localStorage.setItem('t', val);
    fl.style.transition = 'opacity .38s ease';
    fl.style.opacity    = '0';
  }, 60);
}

/* ── FONT ── */
function applyFontFamily(val) {
  var fam = val === 'googlesans'  ? "'Google Sans','Product Sans',sans-serif"
          : val === 'ibmplexmono' ? "'IBM Plex Mono',monospace"
          :                         "'Spectral',Georgia,'Book Antiqua',serif";
  document.documentElement.style.fontFamily = fam;
  document.body.style.fontFamily            = fam;
}
function setFont(val) { applyFontFamily(val); localStorage.setItem('f', val); }

/* ── BLOG CARD TOOLTIP (single system, data-preview attr only) ── */
document.addEventListener('DOMContentLoaded', function () {
  var tip = document.createElement('div');
  tip.id = 'blog-tip';
  tip.style.cssText = [
    'position:fixed', 'z-index:200', 'pointer-events:none',
    'max-width:300px', 'width:max-content',
    'padding:.7rem .9rem',
    'background:var(--bg2)',
    'border:1px solid var(--border)',
    'box-shadow:0 6px 24px rgba(0,0,0,.22)',
    'font-size:.88rem', 'line-height:1.6',
    'color:var(--ink)',
    'opacity:0', 'transform:translateY(6px)',
    'transition:opacity .2s ease,transform .2s ease',
    'display:none'
  ].join(';');
  document.body.appendChild(tip);

  function showTip(card, x, y) {
    var text = card.getAttribute('data-preview');
    if (!text) return;
    tip.textContent = text;
    tip.style.display = 'block';
    positionTip(x, y);
    requestAnimationFrame(function () {
      tip.style.opacity = '1';
      tip.style.transform = 'translateY(0)';
    });
  }

  function hideTip() {
    tip.style.opacity = '0';
    tip.style.transform = 'translateY(6px)';
    setTimeout(function () { tip.style.display = 'none'; }, 200);
  }

  function positionTip(x, y) {
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var vw = window.innerWidth, vh = window.innerHeight;
    var left = x + 14;
    var top  = y - th - 10;
    if (left + tw > vw - 12) left = x - tw - 14;
    if (top < 8) top = y + 20;
    tip.style.left = left + 'px';
    tip.style.top  = top  + 'px';
  }

  /* Desktop hover */
  document.querySelectorAll('[data-preview]').forEach(function (card) {
    card.addEventListener('mouseenter', function (e) {
      showTip(card, e.clientX, e.clientY);
    });
    card.addEventListener('mousemove', function (e) {
      positionTip(e.clientX, e.clientY);
    });
    card.addEventListener('mouseleave', hideTip);
  });

  /* Mobile tap: first tap shows tip, second tap navigates */
  document.querySelectorAll('[data-preview]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (!window.matchMedia('(hover:none)').matches) return;
      if (!card.classList.contains('tip-open')) {
        e.preventDefault();
        document.querySelectorAll('.tip-open').forEach(function(c){ c.classList.remove('tip-open'); });
        card.classList.add('tip-open');
        var r = card.getBoundingClientRect();
        showTip(card, r.left + r.width / 2, r.top);
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-preview]')) {
      hideTip();
      document.querySelectorAll('.tip-open').forEach(function(c){ c.classList.remove('tip-open'); });
    }
  });
});

/* ── tag filter (legacy) ── */
function filterTag(btn) {
  document.querySelectorAll('.tag-btn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  var tag = btn.dataset.tag;
  document.querySelectorAll('.blog-card').forEach(function(c){
    var tags = c.dataset.tags ? c.dataset.tags.split(' ') : [c.dataset.tag];
    c.classList.toggle('hidden', tag !== 'all' && tags.indexOf(tag) === -1);
  });
}
