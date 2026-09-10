/* =========================================================================
   THE BIJOU BOX — Store
   Cart + wishlist state, persisted to localStorage. No backend: this is a
   front-end prototype, so "orders" are saved locally, not sent anywhere.
   Depends on data.js (PRODUCTS) being loaded first.
   ========================================================================= */

const Store = (function () {
  const CART_KEY = 'bijou_cart_v1';
  const WISH_KEY = 'bijou_wishlist_v1';
  const ORDER_KEY = 'bijou_last_order_v1';
  const FREE_SHIP_THRESHOLD = 1999;
  const FLAT_SHIP_FEE = 79;

  const PROMO_CODES = {
    'WELCOME10': { type: 'percent', value: 10, label: '10% off your order' },
    'BIJOU200': { type: 'flat', value: 200, minSubtotal: 2500, label: '₹200 off orders above ₹2,500' },
  };

  function safeParse(json, fallback) {
    try { const v = JSON.parse(json); return v == null ? fallback : v; } catch (e) { return fallback; }
  }

  function read(key, fallback) {
    try { return safeParse(localStorage.getItem(key), fallback); } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable — state just won't persist */ }
  }

  function getProduct(id) {
    return (typeof PRODUCTS !== 'undefined') ? PRODUCTS.find(function (p) { return p.id === id; }) : null;
  }

  /* ---------------- Cart ---------------- */
  function getCart() { return read(CART_KEY, []); } // [{id, qty}]

  function saveCart(cart) {
    write(CART_KEY, cart);
    updateBadges();
    renderCartDrawer();
  }

  function addToCart(id, qty) {
    qty = qty || 1;
    const cart = getCart();
    const line = cart.find(function (l) { return l.id === id; });
    if (line) { line.qty += qty; } else { cart.push({ id: id, qty: qty }); }
    saveCart(cart);
    const p = getProduct(id);
    toast((p ? p.name : 'Item') + ' added to bag');
  }

  function setQty(id, qty) {
    let cart = getCart();
    if (qty <= 0) { cart = cart.filter(function (l) { return l.id !== id; }); }
    else {
      const line = cart.find(function (l) { return l.id === id; });
      if (line) line.qty = qty;
    }
    saveCart(cart);
  }

  function removeFromCart(id) {
    const cart = getCart().filter(function (l) { return l.id !== id; });
    saveCart(cart);
  }

  function clearCart() { saveCart([]); clearPromo(); }

  function getCartItems() {
    return getCart().map(function (l) {
      const p = getProduct(l.id);
      return p ? Object.assign({}, p, { qty: l.qty, lineTotal: p.price * l.qty }) : null;
    }).filter(Boolean);
  }

  function getCartCount() {
    return getCart().reduce(function (sum, l) { return sum + l.qty; }, 0);
  }

  function getSubtotal() {
    return getCartItems().reduce(function (sum, l) { return sum + l.lineTotal; }, 0);
  }

  /* ---------------- Promo codes (front-end demo only) ---------------- */
  function getAppliedPromo() { return read('bijou_promo_v1', null); }
  function clearPromo() { write('bijou_promo_v1', null); }
  function applyPromoCode(code) {
    const key = (code || '').trim().toUpperCase();
    const promo = PROMO_CODES[key];
    const subtotal = getSubtotal();
    if (!promo) return { ok: false, message: 'That code isn\'t valid.' };
    if (promo.minSubtotal && subtotal < promo.minSubtotal) {
      return { ok: false, message: 'Add ₹' + (promo.minSubtotal - subtotal) + ' more to use this code.' };
    }
    write('bijou_promo_v1', { code: key, type: promo.type, value: promo.value, label: promo.label });
    return { ok: true, message: promo.label + ' applied!' };
  }
  function getDiscount() {
    const promo = getAppliedPromo();
    if (!promo) return 0;
    const subtotal = getSubtotal();
    if (promo.type === 'percent') return Math.round(subtotal * promo.value / 100);
    return Math.min(promo.value, subtotal);
  }
  function getShipping() {
    const subtotal = getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= FREE_SHIP_THRESHOLD ? 0 : FLAT_SHIP_FEE;
  }
  function getTotal() {
    return Math.max(0, getSubtotal() - getDiscount()) + getShipping();
  }

  /* ---------------- Wishlist ---------------- */
  function getWishlist() { return read(WISH_KEY, []); } // [id, id, ...]
  function saveWishlist(list) { write(WISH_KEY, list); updateBadges(); }
  function isWishlisted(id) { return getWishlist().indexOf(id) > -1; }
  function toggleWishlist(id) {
    let list = getWishlist();
    let added;
    if (list.indexOf(id) > -1) { list = list.filter(function (x) { return x !== id; }); added = false; }
    else { list.push(id); added = true; }
    saveWishlist(list);
    const p = getProduct(id);
    toast(added ? ((p ? p.name : 'Item') + ' added to wishlist') : 'Removed from wishlist');
    return added;
  }
  function getWishlistItems() {
    return getWishlist().map(getProduct).filter(Boolean);
  }

  /* ---------------- Orders (mock — no backend) ---------------- */
  function placeOrder(details) {
    const items = getCartItems();
    const order = {
      orderId: 'BB' + Date.now().toString().slice(-8),
      createdAt: new Date().toISOString(),
      items: items,
      subtotal: getSubtotal(),
      discount: getDiscount(),
      promo: getAppliedPromo(),
      shipping: getShipping(),
      total: getTotal(),
      address: details,
    };
    write(ORDER_KEY, order);
    clearCart();
    return order;
  }
  function getLastOrder() { return read(ORDER_KEY, null); }

  /* ---------------- UI: badges, toast, cart drawer ---------------- */
  function updateBadges() {
    const cartCount = getCartCount();
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = cartCount;
      el.classList.toggle('show', cartCount > 0);
    });
    const wishCount = getWishlist().length;
    document.querySelectorAll('[data-wishlist-count]').forEach(function (el) {
      el.textContent = wishCount;
      el.classList.toggle('show', wishCount > 0);
    });
    document.querySelectorAll('[data-wish-btn]').forEach(function (btn) {
      btn.classList.toggle('active', isWishlisted(btn.getAttribute('data-wish-btn')));
    });
  }

  let toastTimer = null;
  function toast(message) {
    let el = document.querySelector('.bb-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'bb-toast';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  }

  function money(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

  function renderCartDrawer() {
    const body = document.querySelector('.cart-drawer .cart-drawer-body');
    const footer = document.querySelector('.cart-drawer .cart-drawer-footer');
    if (!body) return;
    const items = getCartItems();
    if (items.length === 0) {
      body.innerHTML = '<div class="cart-drawer-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>' +
        '<p>Your bag is empty</p>' +
        '<a href="shop.html" class="btn btn-primary btn-sm">Start Shopping</a></div>';
      if (footer) footer.style.display = 'none';
      return;
    }
    if (footer) footer.style.display = '';
    body.innerHTML = items.map(function (it) {
      return '<div class="cart-line" data-line="' + it.id + '">' +
        '<div class="frame ratio-1x1 cart-line-img"><img src="' + it.image + '" alt="' + escapeHtml(it.name) + '"><div class="ph-icon">' + iconSvg(it.icon) + '</div></div>' +
        '<div class="cart-line-info">' +
        '<span class="cat">' + it.categoryLabel + '</span>' +
        '<h4>' + escapeHtml(it.name) + '</h4>' +
        '<div class="cart-line-qty">' +
        '<button class="qty-minus" data-act="dec" aria-label="Decrease quantity">−</button>' +
        '<span>' + it.qty + '</span>' +
        '<button class="qty-plus" data-act="inc" aria-label="Increase quantity">+</button>' +
        '<button class="cart-line-remove" data-act="remove" aria-label="Remove">Remove</button>' +
        '</div></div>' +
        '<div class="cart-line-price">' + money(it.lineTotal) + '</div>' +
        '</div>';
    }).join('');

    body.querySelectorAll('.cart-line').forEach(function (line) {
      const id = line.getAttribute('data-line');
      const item = items.find(function (i) { return i.id === id; });
      line.querySelector('[data-act="dec"]').addEventListener('click', function () { setQty(id, item.qty - 1); });
      line.querySelector('[data-act="inc"]').addEventListener('click', function () { setQty(id, item.qty + 1); });
      line.querySelector('[data-act="remove"]').addEventListener('click', function () { removeFromCart(id); });
    });

    if (footer) {
      footer.innerHTML = '<div class="cart-drawer-subtotal"><span>Subtotal</span><strong>' + money(getSubtotal()) + '</strong></div>' +
        '<p class="cart-drawer-note">Shipping &amp; discounts calculated at checkout.</p>' +
        '<a href="cart.html" class="btn btn-outline btn-block">View Bag</a>' +
        '<a href="checkout.html" class="btn btn-primary btn-block">Checkout</a>';
    }
  }

  function openCartDrawer() {
    renderCartDrawer();
    const drawer = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawers() {
    document.querySelectorAll('.cart-drawer, .filter-drawer, .search-overlay').forEach(function (d) { d.classList.remove('open'); });
    const overlay = document.querySelector('.drawer-overlay');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Small inline icon set, keyed by category "icon" field in data.js */
  function iconSvg(key) {
    const icons = {
      necklace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="16" r="3"/><path d="M4 4c1 6 5 9 8 9s7-3 8-9"/></svg>',
      earring: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 3a4 4 0 0 1 4 4c0 3-4 5-4 9"/><circle cx="12" cy="18" r="2.4"/></svg>',
      ring: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="14" r="6"/><path d="M9 8l3-5 3 5"/></svg>',
      bracelet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="12" cy="12" rx="7" ry="9"/></svg>',
      anklet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="12" cy="17" rx="7" ry="3"/><path d="M8 6l2 8M16 6l-2 8"/></svg>',
      charm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 21s-7-4.4-7-10a4.5 4.5 0 0 1 7-3.7A4.5 4.5 0 0 1 19 11c0 5.6-7 10-7 10z"/></svg>',
    };
    return icons[key] || icons.charm;
  }

  return {
    getProduct: getProduct,
    getCart: getCart, addToCart: addToCart, setQty: setQty, removeFromCart: removeFromCart, clearCart: clearCart,
    getCartItems: getCartItems, getCartCount: getCartCount,
    getSubtotal: getSubtotal, getDiscount: getDiscount, getShipping: getShipping, getTotal: getTotal,
    applyPromoCode: applyPromoCode, getAppliedPromo: getAppliedPromo, clearPromo: clearPromo,
    getWishlist: getWishlist, isWishlisted: isWishlisted, toggleWishlist: toggleWishlist, getWishlistItems: getWishlistItems,
    placeOrder: placeOrder, getLastOrder: getLastOrder,
    updateBadges: updateBadges, toast: toast, money: money, escapeHtml: escapeHtml, iconSvg: iconSvg,
    renderCartDrawer: renderCartDrawer, openCartDrawer: openCartDrawer, closeDrawers: closeDrawers,
    FREE_SHIP_THRESHOLD: FREE_SHIP_THRESHOLD,
  };
})();
