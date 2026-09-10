/* =========================================================================
   THE BIJOU BOX — App
   Page rendering + interaction logic. Depends on data.js (PRODUCTS) and
   store.js (Store) being loaded first. One file, used by every page —
   each page runs initShared() plus whichever init*() matches
   document.body.dataset.page.
   ========================================================================= */

/* ---------------- small helpers ---------------- */
function qs(sel, root) { return (root || document).querySelector(sel); }
function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
function getParam(name) { return new URLSearchParams(window.location.search).get(name); }

function starsHtml(rating) {
  const full = Math.round(rating);
  let out = '<span class="stars-row">';
  for (let i = 1; i <= 5; i++) {
    out += i <= full
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2L12 16.4 5.7 21l2.3-7.2-6-4.6h7.6L12 2z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2L12 16.4 5.7 21l2.3-7.2-6-4.6h7.6L12 2z"/></svg>';
  }
  return out + '</span>';
}

function badgeHtml(p) {
  if (p.tags.indexOf('bestseller') > -1) return '<span class="badge gold">Bestseller</span>';
  if (p.tags.indexOf('trending') > -1) return '<span class="badge">Trending</span>';
  if (p.tags.indexOf('new') > -1) return '<span class="badge">New</span>';
  if (p.discount >= 25) return '<span class="badge">' + p.discount + '% Off</span>';
  return '';
}

function productCardHtml(p) {
  const wished = Store.isWishlisted(p.id) ? ' active' : '';
  const stockNote = p.stock <= 8 ? '<span class="stock-urgent">Only ' + p.stock + ' left</span>' : '';
  return (
    '<div class="product-card" data-id="' + p.id + '" data-category="' + p.category + '" data-price="' + p.price + '" data-rating="' + p.rating + '">' +
      badgeHtml(p) +
      '<button class="wish-btn' + wished + '" data-wish-btn="' + p.id + '" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-4.4-7-10a4.5 4.5 0 0 1 7-3.7A4.5 4.5 0 0 1 19 11c0 5.6-7 10-7 10z"/></svg></button>' +
      '<a href="product.html?id=' + p.id + '">' +
        '<div class="frame ratio-4x5"><img src="' + p.image + '" alt="' + Store.escapeHtml(p.name) + '" loading="lazy"><div class="ph-icon">' + Store.iconSvg(p.icon) + '</div></div>' +
      '</a>' +
      '<div class="quick-add"><button class="btn btn-light" data-add-cart="' + p.id + '">Add To Bag</button></div>' +
      '<div class="product-info">' +
        '<span class="cat">' + p.categoryLabel + '</span>' +
        '<a href="product.html?id=' + p.id + '"><h3>' + Store.escapeHtml(p.name) + '</h3></a>' +
        starsHtml(p.rating) + '<span class="rc">(' + p.reviews + ')</span>' +
        '<div class="price"><span class="now">' + Store.money(p.price) + '</span><span class="was">' + Store.money(p.mrp) + '</span><span class="off">' + p.discount + '% off</span></div>' +
        stockNote +
      '</div>' +
    '</div>'
  );
}

function renderGrid(container, list, emptyMsg) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<div class="empty-state"><p>' + (emptyMsg || 'No products found.') + '</p></div>';
    return;
  }
  container.innerHTML = list.map(productCardHtml).join('');
}

/* ---------------- shared: nav, drawers, search, badges ---------------- */
function initShared() {
  qsa('.js-year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  qsa('.frame img').forEach(function (img) {
    img.addEventListener('error', function () { img.style.display = 'none'; }, { once: true });
  });

  // Mobile nav
  const burger = qs('.burger'), mobileNav = qs('.mobile-nav'), mobileNavClose = qs('.mobile-nav-close');
  function openNav() { if (mobileNav) { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; } }
  function closeNav() { if (mobileNav) { mobileNav.classList.remove('open'); document.body.style.overflow = ''; } }
  if (burger) burger.addEventListener('click', openNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeNav);
  qsa('.mobile-nav a').forEach(function (a) { a.addEventListener('click', closeNav); });

  // Accordions
  qsa('.accordion-item').forEach(function (item) {
    const head = qs('.accordion-head', item), panel = qs('.accordion-panel', item);
    if (!head || !panel) return;
    head.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');
      const group = item.parentElement;
      if (group && group.dataset.exclusive === 'true') {
        qsa('.accordion-item.open', group).forEach(function (o) {
          if (o !== item) { o.classList.remove('open'); qs('.accordion-panel', o).style.maxHeight = null; }
        });
      }
      if (isOpen) { item.classList.remove('open'); panel.style.maxHeight = null; }
      else { item.classList.add('open'); panel.style.maxHeight = panel.scrollHeight + 'px'; }
    });
  });

  // Back to top
  const backToTop = qs('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () { backToTop.classList.toggle('show', window.scrollY > 500); });
    backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // Cart drawer open/close
  qsa('[data-open-cart]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); Store.openCartDrawer(); });
  });
  qsa('.drawer-close, .drawer-overlay').forEach(function (el) {
    el.addEventListener('click', function () { Store.closeDrawers(); });
  });

  // Filter drawer (shop page) open/close
  qsa('[data-open-filters]').forEach(function (el) {
    el.addEventListener('click', function () {
      const panel = qs('.filters-panel');
      const overlay = qs('.drawer-overlay');
      if (panel) panel.classList.add('open');
      if (overlay) overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  // Search overlay
  const searchOverlay = qs('.search-overlay');
  const searchInput = qs('.search-overlay-input');
  qsa('[data-open-search]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (searchOverlay) { searchOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
      if (searchInput) setTimeout(function () { searchInput.focus(); }, 50);
    });
  });
  qsa('.search-overlay-close').forEach(function (el) {
    el.addEventListener('click', function () { Store.closeDrawers(); });
  });
  if (searchInput) {
    const resultsBox = qs('.search-overlay-results');
    function runSearch() {
      const q = searchInput.value.trim().toLowerCase();
      if (!resultsBox) return;
      if (q.length < 2) { resultsBox.innerHTML = '<p class="search-hint">Type at least 2 letters to search — try "necklace", "ring" or "charm".</p>'; return; }
      const matches = PRODUCTS.filter(function (p) {
        return p.name.toLowerCase().indexOf(q) > -1 || p.categoryLabel.toLowerCase().indexOf(q) > -1;
      }).slice(0, 8);
      if (!matches.length) { resultsBox.innerHTML = '<p class="search-hint">No matches for "' + Store.escapeHtml(searchInput.value) + '". Try another word.</p>'; return; }
      resultsBox.innerHTML = matches.map(function (p) {
        return '<a class="search-result-row" href="product.html?id=' + p.id + '">' +
          '<div class="frame ratio-1x1"><img src="' + p.image + '" alt=""><div class="ph-icon">' + Store.iconSvg(p.icon) + '</div></div>' +
          '<div><strong>' + Store.escapeHtml(p.name) + '</strong><span>' + p.categoryLabel + ' · ' + Store.money(p.price) + '</span></div>' +
        '</a>';
      }).join('') + '<a class="search-see-all btn btn-outline btn-sm" href="shop.html?q=' + encodeURIComponent(searchInput.value) + '">See All Results</a>';
    }
    searchInput.addEventListener('input', runSearch);
    qs('.search-overlay-form').addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'shop.html?q=' + encodeURIComponent(searchInput.value);
    });
  }

  // Global click delegation: add to cart / wishlist toggle
  document.addEventListener('click', function (e) {
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) { e.preventDefault(); Store.addToCart(addBtn.getAttribute('data-add-cart'), 1); return; }
    const wishBtn = e.target.closest('[data-wish-btn]');
    if (wishBtn) { e.preventDefault(); Store.toggleWishlist(wishBtn.getAttribute('data-wish-btn')); return; }
  });

  // Mobile bottom nav active state
  const page = document.body.dataset.page;
  qsa('.mobile-bottom-nav a').forEach(function (a) {
    a.classList.toggle('active', a.dataset.nav === page);
  });

  // Newsletter / contact forms — no backend wired up, shows a friendly
  // confirmation in place. Hook these up to a real form/email provider later.
  qsa('.js-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = form.parentElement.querySelector('.form-success') || form.querySelector('.form-success');
      if (success) { success.classList.add('show'); success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
  });

  Store.updateBadges();
  Store.renderCartDrawer();
}

/* ---------------- Home ---------------- */
function initHome() {
  const bestsellers = PRODUCTS.filter(function (p) { return p.tags.indexOf('bestseller') > -1; }).slice(0, 8);
  const newArrivals = PRODUCTS.filter(function (p) { return p.tags.indexOf('new') > -1; }).slice(0, 8);
  renderGrid(qs('#bestsellersGrid'), bestsellers);
  renderGrid(qs('#newArrivalsGrid'), newArrivals);
}

/* ---------------- Shop ---------------- */
function initShop() {
  const grid = qs('#shopGrid');
  const resultCountEl = qs('.result-count .count');
  const loadMoreBtn = qs('.load-more-btn');
  const noResults = qs('.no-results');
  let visibleCount = 12;
  const PAGE_SIZE = 12;

  const state = {
    categories: new Set(),
    collections: new Set(),
    price: '',
    rating: '',
    inStock: false,
    sort: 'featured',
    q: (getParam('q') || '').toLowerCase(),
  };

  const initialCat = getParam('category');
  if (initialCat) state.categories.add(initialCat);
  const initialCollection = getParam('collection');
  if (initialCollection) state.collections.add(initialCollection);

  // reflect initial state into controls
  qsa('.f-category').forEach(function (cb) { cb.checked = state.categories.has(cb.value); });
  qsa('.f-collection').forEach(function (cb) { cb.checked = state.collections.has(cb.value); });
  const qInput = qs('.shop-search-input');
  if (qInput && state.q) qInput.value = getParam('q');

  function matches(p) {
    if (state.categories.size && !state.categories.has(p.category)) return false;
    if (state.collections.size && !state.collections.has(p.collection)) return false;
    if (state.inStock && p.stock <= 0) return false;
    if (state.rating && p.rating < parseFloat(state.rating)) return false;
    if (state.price) {
      const parts = state.price.split('-').map(Number);
      if (p.price < parts[0] || p.price > parts[1]) return false;
    }
    if (state.q && p.name.toLowerCase().indexOf(state.q) === -1 && p.categoryLabel.toLowerCase().indexOf(state.q) === -1) return false;
    return true;
  }

  function sortList(list) {
    const copy = list.slice();
    if (state.sort === 'price-asc') copy.sort(function (a, b) { return a.price - b.price; });
    else if (state.sort === 'price-desc') copy.sort(function (a, b) { return b.price - a.price; });
    else if (state.sort === 'rating-desc') copy.sort(function (a, b) { return b.rating - a.rating; });
    else if (state.sort === 'newest') copy.sort(function (a, b) { return (b.tags.indexOf('new') > -1) - (a.tags.indexOf('new') > -1); });
    return copy;
  }

  function render() {
    const filtered = sortList(PRODUCTS.filter(matches));
    if (resultCountEl) resultCountEl.textContent = filtered.length;
    if (!filtered.length) {
      if (grid) grid.innerHTML = '';
      if (noResults) noResults.style.display = 'block';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }
    if (noResults) noResults.style.display = 'none';
    renderGrid(grid, filtered.slice(0, visibleCount));
    if (loadMoreBtn) loadMoreBtn.style.display = filtered.length > visibleCount ? '' : 'none';
  }

  function resetAndRender() { visibleCount = PAGE_SIZE; render(); }

  qsa('.f-category').forEach(function (cb) {
    cb.addEventListener('change', function () {
      if (cb.checked) state.categories.add(cb.value); else state.categories.delete(cb.value);
      resetAndRender();
    });
  });
  qsa('.f-collection').forEach(function (cb) {
    cb.addEventListener('change', function () {
      if (cb.checked) state.collections.add(cb.value); else state.collections.delete(cb.value);
      resetAndRender();
    });
  });
  qsa('.f-price').forEach(function (r) { r.addEventListener('change', function () { state.price = r.value; resetAndRender(); }); });
  qsa('.f-rating').forEach(function (r) { r.addEventListener('change', function () { state.rating = r.value; resetAndRender(); }); });
  const inStockBox = qs('.f-instock');
  if (inStockBox) inStockBox.addEventListener('change', function () { state.inStock = inStockBox.checked; resetAndRender(); });

  const sortSelect = qs('.sort-select');
  if (sortSelect) sortSelect.addEventListener('change', function () { state.sort = sortSelect.value; resetAndRender(); });

  if (qInput) {
    qInput.addEventListener('input', function () { state.q = qInput.value.toLowerCase(); resetAndRender(); });
  }

  if (loadMoreBtn) loadMoreBtn.addEventListener('click', function () { visibleCount += PAGE_SIZE; render(); });

  qsa('.filters-clear').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.categories.clear(); state.collections.clear(); state.price = ''; state.rating = ''; state.inStock = false;
      qsa('.f-category, .f-collection').forEach(function (cb) { cb.checked = false; });
      qsa('.f-price, .f-rating').forEach(function (r) { r.checked = (r.value === ''); });
      if (inStockBox) inStockBox.checked = false;
      resetAndRender();
    });
  });

  qsa('.filters-close').forEach(function (btn) {
    btn.addEventListener('click', function () { Store.closeDrawers(); });
  });
  qsa('.filters-apply').forEach(function (btn) {
    btn.addEventListener('click', function () { Store.closeDrawers(); });
  });

  render();
}

/* ---------------- Product detail ---------------- */
function initProduct() {
  const id = getParam('id') || (PRODUCTS[0] && PRODUCTS[0].id);
  const p = Store.getProduct(id);
  if (!p) { qs('main').innerHTML = '<div class="container section"><p>Product not found. <a href="shop.html">Back to shop</a>.</p></div>'; return; }

  document.title = p.name + ' — The Bijou Box';

  qs('.pd-breadcrumb-cat').textContent = p.categoryLabel + 's';
  qs('.pd-breadcrumb-cat').setAttribute('href', 'shop.html?category=' + p.category);
  qs('.pd-breadcrumb-name').textContent = p.name;
  qs('.pd-eyebrow').textContent = p.categoryLabel + (p.collection ? ' · Buy The Sea Collection' : '');
  qs('.pd-title').textContent = p.name;
  qs('.pd-stars').outerHTML = starsHtml(p.rating);
  qs('.pd-rating-text').textContent = p.rating.toFixed(1) + ' (' + p.reviews + ' reviews)';
  qs('.pd-now').textContent = Store.money(p.price);
  qs('.pd-was').textContent = Store.money(p.mrp);
  qs('.pd-off').textContent = p.discount + '% Off';
  qs('.pd-desc').textContent = p.shortDesc;
  qs('.pd-materials').textContent = p.description;
  const stockEl = qs('.pd-stock');
  if (p.stock <= 8) { stockEl.style.display = ''; stockEl.textContent = 'Only ' + p.stock + ' left in stock — order soon'; }
  else stockEl.style.display = 'none';

  const tagsWrap = qs('.pd-tags');
  tagsWrap.innerHTML = p.highlights.map(function (h) {
    return '<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 6L9 17l-5-5"/></svg>' + Store.escapeHtml(h) + '</span>';
  }).join('');

  // Gallery
  const mainImg = qs('.pd-gallery-main img');
  const mainPh = qs('.pd-gallery-main .ph-icon');
  mainImg.setAttribute('src', p.gallery[0]);
  mainImg.setAttribute('alt', p.name);
  mainPh.innerHTML = Store.iconSvg(p.icon);
  const thumbsWrap = qs('.pd-thumbs');
  thumbsWrap.innerHTML = p.gallery.map(function (src, i) {
    return '<div class="frame ratio-1x1' + (i === 0 ? ' active' : '') + '" data-src="' + src + '">' +
      '<img src="' + src + '" alt="' + Store.escapeHtml(p.name) + ' view ' + (i + 1) + '"><div class="ph-icon">' + Store.iconSvg(p.icon) + '</div></div>';
  }).join('');
  qsa('.pd-thumbs .frame').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      qsa('.pd-thumbs .frame').forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      mainImg.setAttribute('src', thumb.getAttribute('data-src'));
    });
  });

  // Qty stepper
  const qtyInput = qs('.pd-qty-input');
  qs('.pd-qty-minus').addEventListener('click', function () { qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1); });
  qs('.pd-qty-plus').addEventListener('click', function () { qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1; });

  // Add to cart / buy now / wishlist
  function currentQty() { return Math.max(1, parseInt(qtyInput.value, 10) || 1); }
  qsa('.pd-add-cart').forEach(function (btn) { btn.addEventListener('click', function () { Store.addToCart(p.id, currentQty()); }); });
  qsa('.pd-buy-now').forEach(function (btn) { btn.addEventListener('click', function () { Store.addToCart(p.id, currentQty()); window.location.href = 'checkout.html'; }); });
  qsa('.pd-wish').forEach(function (btn) {
    btn.setAttribute('data-wish-btn', p.id);
    btn.classList.toggle('active', Store.isWishlisted(p.id));
  });

  // Sticky mobile bar
  const stickyName = qs('.pd-sticky-name'); if (stickyName) stickyName.textContent = p.name;
  const stickyPrice = qs('.pd-sticky-price'); if (stickyPrice) stickyPrice.textContent = Store.money(p.price);

  // WhatsApp fallback link (secondary contact option, prefilled)
  const waLink = qs('.pd-whatsapp-link');
  if (waLink) waLink.setAttribute('href', 'https://wa.me/919152642733?text=' + encodeURIComponent("Hi! I have a question about the " + p.name + " (" + Store.money(p.price) + ")."));

  // Pincode check (cosmetic demo)
  const pinForm = qs('.pincode-form');
  if (pinForm) {
    pinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const val = qs('.pincode-input').value.trim();
      const resultEl = qs('.pincode-result');
      if (!/^\d{6}$/.test(val)) { resultEl.textContent = 'Please enter a valid 6-digit pincode.'; resultEl.className = 'pincode-result error'; return; }
      const eta = new Date(); eta.setDate(eta.getDate() + 4);
      resultEl.textContent = 'Delivers by ' + eta.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) + ' to ' + val + '. COD available.';
      resultEl.className = 'pincode-result success';
    });
  }

  // Related products
  const related = PRODUCTS.filter(function (r) { return r.category === p.category && r.id !== p.id; }).slice(0, 4);
  renderGrid(qs('#relatedGrid'), related);
}

/* ---------------- Cart page ---------------- */
function initCart() {
  const listEl = qs('#cartPageList');
  const emptyEl = qs('.cart-page-empty');
  const summaryEl = qs('.cart-summary');

  function render() {
    const items = Store.getCartItems();
    if (!items.length) {
      if (listEl) listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      if (summaryEl) summaryEl.style.display = 'none';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    if (summaryEl) summaryEl.style.display = '';

    listEl.innerHTML = items.map(function (it) {
      return '<div class="cart-page-row" data-line="' + it.id + '">' +
        '<a href="product.html?id=' + it.id + '" class="frame ratio-1x1 cart-page-img"><img src="' + it.image + '" alt="' + Store.escapeHtml(it.name) + '"><div class="ph-icon">' + Store.iconSvg(it.icon) + '</div></a>' +
        '<div class="cart-page-info">' +
          '<span class="cat">' + it.categoryLabel + '</span>' +
          '<a href="product.html?id=' + it.id + '"><h3>' + Store.escapeHtml(it.name) + '</h3></a>' +
          '<div class="price"><span class="now">' + Store.money(it.price) + '</span><span class="was">' + Store.money(it.mrp) + '</span></div>' +
          '<button class="cart-page-move-wish" data-move-wish="' + it.id + '">Move to Wishlist</button>' +
        '</div>' +
        '<div class="cart-page-qty">' +
          '<div class="qty-box"><button class="qty-minus" data-dec="' + it.id + '">−</button><input type="text" value="' + it.qty + '" readonly><button class="qty-plus" data-inc="' + it.id + '">+</button></div>' +
          '<button class="cart-page-remove" data-remove="' + it.id + '">Remove</button>' +
        '</div>' +
        '<div class="cart-page-linetotal">' + Store.money(it.lineTotal) + '</div>' +
      '</div>';
    }).join('');

    qsa('[data-dec]', listEl).forEach(function (b) { b.addEventListener('click', function () { const it = items.find(i => i.id === b.dataset.dec); Store.setQty(b.dataset.dec, it.qty - 1); render(); }); });
    qsa('[data-inc]', listEl).forEach(function (b) { b.addEventListener('click', function () { const it = items.find(i => i.id === b.dataset.inc); Store.setQty(b.dataset.inc, it.qty + 1); render(); }); });
    qsa('[data-remove]', listEl).forEach(function (b) { b.addEventListener('click', function () { Store.removeFromCart(b.dataset.remove); render(); }); });
    qsa('[data-move-wish]', listEl).forEach(function (b) {
      b.addEventListener('click', function () {
        const id = b.dataset.moveWish;
        if (!Store.isWishlisted(id)) Store.toggleWishlist(id);
        Store.removeFromCart(id);
        render();
      });
    });

    renderSummary();
  }

  function renderSummary() {
    const subtotal = Store.getSubtotal();
    const discount = Store.getDiscount();
    const shipping = Store.getShipping();
    const total = Store.getTotal();
    const promo = Store.getAppliedPromo();
    const remaining = Store.FREE_SHIP_THRESHOLD - subtotal;

    qs('.summary-subtotal').textContent = Store.money(subtotal);
    const discRow = qs('.summary-discount-row');
    if (discount > 0) { discRow.style.display = ''; qs('.summary-discount').textContent = '−' + Store.money(discount); }
    else discRow.style.display = 'none';
    qs('.summary-shipping').textContent = shipping === 0 ? 'FREE' : Store.money(shipping);
    qs('.summary-total').textContent = Store.money(total);

    const shipNote = qs('.free-ship-note');
    if (remaining > 0) { shipNote.style.display = ''; shipNote.textContent = 'Add ' + Store.money(remaining) + ' more for FREE shipping'; }
    else { shipNote.style.display = ''; shipNote.textContent = "You've unlocked FREE shipping!"; shipNote.classList.add('unlocked'); }
    const bar = qs('.free-ship-bar-fill');
    if (bar) bar.style.width = Math.min(100, (subtotal / Store.FREE_SHIP_THRESHOLD) * 100) + '%';

    const promoMsg = qs('.promo-message');
    if (promo && promoMsg) { promoMsg.textContent = 'Code "' + promo.code + '" applied — ' + promo.label; promoMsg.className = 'promo-message success'; }
  }

  const promoForm = qs('.promo-form');
  if (promoForm) {
    promoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = qs('.promo-input');
      const res = Store.applyPromoCode(input.value);
      const msg = qs('.promo-message');
      msg.textContent = res.message;
      msg.className = 'promo-message ' + (res.ok ? 'success' : 'error');
      if (res.ok) render();
    });
  }

  render();
}

/* ---------------- Checkout ---------------- */
function initCheckout() {
  const items = Store.getCartItems();
  if (!items.length) { window.location.href = 'cart.html'; return; }

  const summaryList = qs('#checkoutSummaryList');
  summaryList.innerHTML = items.map(function (it) {
    return '<div class="checkout-summary-row">' +
      '<div class="frame ratio-1x1 checkout-summary-img"><img src="' + it.image + '" alt="' + Store.escapeHtml(it.name) + '"><div class="ph-icon">' + Store.iconSvg(it.icon) + '</div><span class="checkout-qty-pill">' + it.qty + '</span></div>' +
      '<div><strong>' + Store.escapeHtml(it.name) + '</strong><span>' + Store.money(it.price) + ' × ' + it.qty + '</span></div>' +
      '<div class="checkout-line-total">' + Store.money(it.lineTotal) + '</div>' +
    '</div>';
  }).join('');

  function refreshTotals() {
    qs('.co-subtotal').textContent = Store.money(Store.getSubtotal());
    const discount = Store.getDiscount();
    const discRow = qs('.co-discount-row');
    if (discount > 0) { discRow.style.display = ''; qs('.co-discount').textContent = '−' + Store.money(discount); } else discRow.style.display = 'none';
    const expressFee = qs('input[name="delivery"]:checked').value === 'express' ? 150 : 0;
    const shipping = Store.getShipping() + expressFee;
    qs('.co-shipping').textContent = shipping === 0 ? 'FREE' : Store.money(shipping);
    qs('.co-total').textContent = Store.money(Math.max(0, Store.getSubtotal() - discount) + shipping);
  }
  qsa('input[name="delivery"]').forEach(function (r) { r.addEventListener('change', refreshTotals); });
  refreshTotals();

  const form = qs('#checkoutForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    qsa('.co-error').forEach(function (el) { el.textContent = ''; });

    function require(fieldId, msg, pattern) {
      const el = qs('#' + fieldId);
      const errEl = qs('[data-error-for="' + fieldId + '"]');
      const val = el.value.trim();
      if (!val || (pattern && !pattern.test(val))) {
        if (errEl) errEl.textContent = msg;
        valid = false;
      }
    }
    require('coName', 'Please enter your full name');
    require('coPhone', 'Enter a valid 10-digit phone number', /^\d{10}$/);
    require('coEmail', 'Enter a valid email address', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    require('coAddress1', 'Please enter your address');
    require('coCity', 'Please enter your city');
    require('coState', 'Please enter your state');
    require('coPincode', 'Enter a valid 6-digit pincode', /^\d{6}$/);

    if (!valid) { qs('.co-error:not(:empty)').closest('.form-row').scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }

    const details = {
      name: qs('#coName').value.trim(),
      phone: qs('#coPhone').value.trim(),
      email: qs('#coEmail').value.trim(),
      address1: qs('#coAddress1').value.trim(),
      address2: qs('#coAddress2').value.trim(),
      city: qs('#coCity').value.trim(),
      state: qs('#coState').value.trim(),
      pincode: qs('#coPincode').value.trim(),
      delivery: qs('input[name="delivery"]:checked').value,
      payment: qs('input[name="payment"]:checked').value,
    };
    Store.placeOrder(details);
    window.location.href = 'order-confirmation.html';
  });
}

/* ---------------- Order confirmation ---------------- */
function initOrderConfirmation() {
  const order = Store.getLastOrder();
  if (!order) { window.location.href = 'index.html'; return; }

  qs('.oc-order-id').textContent = order.orderId;
  const eta = new Date(order.createdAt); eta.setDate(eta.getDate() + (order.address.delivery === 'express' ? 2 : 4));
  qs('.oc-eta').textContent = eta.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  qs('.oc-address').innerHTML = [order.address.name, order.address.address1, order.address.address2, order.address.city + ', ' + order.address.state + ' ' + order.address.pincode, 'Phone: ' + order.address.phone].filter(Boolean).join('<br>');
  qs('.oc-payment').textContent = order.address.payment === 'cod' ? 'Cash on Delivery' : order.address.payment;

  qs('#ocItemsList').innerHTML = order.items.map(function (it) {
    return '<div class="oc-item-row"><div class="frame ratio-1x1"><img src="' + it.image + '" alt="' + Store.escapeHtml(it.name) + '"><div class="ph-icon">' + Store.iconSvg(it.icon) + '</div></div>' +
      '<div><strong>' + Store.escapeHtml(it.name) + '</strong><span>Qty ' + it.qty + '</span></div><div>' + Store.money(it.lineTotal) + '</div></div>';
  }).join('');
  qs('.oc-subtotal').textContent = Store.money(order.subtotal);
  qs('.oc-shipping').textContent = order.shipping === 0 ? 'FREE' : Store.money(order.shipping);
  qs('.oc-total').textContent = Store.money(order.total);

  const waMsg = 'Hi! I just placed an order on The Bijou Box website.%0A%0AOrder ID: ' + order.orderId +
    '%0AItems: ' + order.items.map(function (i) { return i.name + ' x' + i.qty; }).join(', ') +
    '%0ATotal: ' + Store.money(order.total) +
    '%0APayment: ' + (order.address.payment === 'cod' ? 'Cash on Delivery' : order.address.payment) +
    '%0A%0AAddress: ' + [order.address.address1, order.address.city, order.address.state, order.address.pincode].filter(Boolean).join(', ') +
    '%0A%0APlease confirm my order — thank you!';
  const waLink = qs('.oc-whatsapp-confirm');
  if (waLink) waLink.setAttribute('href', 'https://wa.me/919152642733?text=' + waMsg);
}

/* ---------------- Wishlist page ---------------- */
function initWishlist() {
  const grid = qs('#wishlistGrid');
  const empty = qs('.wishlist-empty');
  function render() {
    const items = Store.getWishlistItems();
    if (!items.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    renderGrid(grid, items);
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-wish-btn]')) setTimeout(render, 0);
  });
  render();
}

/* ---------------- bootstrap ---------------- */
document.addEventListener('DOMContentLoaded', function () {
  initShared();
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  else if (page === 'shop') initShop();
  else if (page === 'product') initProduct();
  else if (page === 'cart') initCart();
  else if (page === 'checkout') initCheckout();
  else if (page === 'order-confirmation') initOrderConfirmation();
  else if (page === 'wishlist') initWishlist();
});
