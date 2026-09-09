THE BIJOU BOX — ECOMMERCE WEBSITE
=====================================

WHAT'S IN THIS FOLDER
------------------------------------------------
index.html                Home page
shop.html                 Shop All — filters (category/price/rating/collection/
                           stock), sort, search, "Load More" pagination
product.html              Product detail page — ONE template, works for every
                           product via ?id=... (see data.js below)
cart.html                 Full shopping bag — quantities, remove, move to
                           wishlist, promo codes, free-shipping progress bar
checkout.html             Delivery address, delivery method, payment method,
                           order summary, "Place Order"
order-confirmation.html   Order confirmed page + WhatsApp confirmation step
wishlist.html             Saved / wishlisted products
about.html                Our Story / brand page
contact.html              Contact form, WhatsApp/Instagram/email, FAQ
policies.html             Shipping / Returns / Terms / Privacy (tabbed)

style.css                 Every style on the site, in one file
data.js                   THE PRODUCT CATALOG — every product's name, price,
                           category, description and images. Add/edit/remove
                           products here; every page reads from this one file.
store.js                  Cart + wishlist engine (saved in the browser)
app.js                    Renders product grids/pages and wires up every
                           interaction: filters, search, cart, checkout, etc.

assets/                   The ONLY other folder — every image goes here
assets/image-list.txt     Exact file name, size and purpose for every image
                           the site expects, generated from data.js

There are no other folders, and no build tools/frameworks required — it's
plain HTML/CSS/JS. It opens directly in a browser and can be uploaded as-is
to any standard web host (Hostinger, Netlify, GitHub Pages, etc.).


THIS IS NOW A FULL SHOPPING EXPERIENCE
------------------------------------------------
- Browse a 39-product catalogue across Necklaces, Earrings, Rings, Bracelets,
  Anklets and Charms, with a live search (header + mobile), category
  quick-nav bar, and a Shop page with real filters (category, price range,
  rating, "Buy The Sea" collection, in-stock only) plus sort and pagination.
- Every product has its own page and its own URL (product.html?id=...),
  with a photo gallery, ratings, stock/urgency messaging, a pincode delivery
  checker, and related products — without needing a separate HTML file per
  product. Add a product in data.js and it automatically gets all of this.
- A real shopping bag: add to bag from any product card or the product page,
  adjust quantity, remove items, move items to your wishlist — with a
  slide-out mini-cart on every page and a full cart.html page. The cart and
  wishlist are saved in the visitor's own browser (localStorage), so they
  persist across a visit but are private to that device/browser.
- A full checkout flow: delivery address form (with validation), delivery
  method (standard/express), and a payment step — see note below.
- Mobile is treated as the primary experience: a fixed bottom nav bar
  (Home / Shop / Search / Wishlist / Bag) like a shopping app, a sticky
  "Add to Bag" bar on product pages, full-screen search, and a slide-in
  filter panel — every page was tested at phone width, not just resized
  from desktop.


WHAT'S INTENTIONALLY NOT INCLUDED YET (as discussed)
------------------------------------------------
- NO real payment gateway. Checkout only offers Cash on Delivery right now;
  Card/UPI/Net Banking is shown as a disabled option marked "Coming Soon" so
  the client can see where it will go. When you're ready to add Razorpay,
  Stripe, PayU, etc., that's a backend integration on top of this checkout
  form — happy to help wire it in as a next step.
- NO admin dashboard / inventory backend. Products live in data.js as a flat
  file, which is easy for a developer to edit but isn't a point-and-click
  admin panel. Building that (plus real order storage, a database, customer
  accounts) is the natural "phase 2" once the client signs off on this UI.
- NO order storage anywhere. There's no backend, so "placing an order" saves
  it only in that visitor's own browser (to show the confirmation page) —
  it is NOT sent to you automatically. That's why order-confirmation.html
  ends with a "Confirm Order on WhatsApp" button that opens a pre-filled
  WhatsApp message with the order ID, items, total and address — that
  message is the actual, real way an order reaches you today. Once a
  backend/admin exists, this can become automatic.
- NO real user accounts / login. Cart and wishlist are per-browser, not
  tied to a login — there's no account system in this phase.
- Contact form and newsletter box are front-end only (show a "Thanks!"
  message but don't send anywhere) — connect them to Formspree, Google
  Sheets, or an email provider whenever convenient.


THE PRODUCT CATALOG — data.js
------------------------------------------------
This is the most important file for day-to-day use. It currently has 39
products — the ~20 real ones from your existing catalogue at
thebijoubox.in, plus ~19 additional demo products (new names in the same
categories/collections) added to make the shop feel like a fuller store, as
discussed. Swap, edit, remove or add to these freely:

  { "id": "shell-necklace-set", "name": "Shell Necklace Set",
    "category": "necklaces", "categoryLabel": "Necklace",
    "price": 2799, "mrp": 3299, "discount": 15,
    "rating": 4.8, "reviews": 186, "tags": ["bestseller"],
    "collection": "buy-the-sea", "stock": 22, "icon": "necklace",
    "image": "assets/product-shell-necklace-set.jpg",
    "gallery": ["assets/product-shell-necklace-set-1.jpg", ...],
    "shortDesc": "...", "description": "...", "highlights": [...] }

To add a product: copy one whole entry, give it a new unique "id" (this
becomes its URL and its image file names), fill in the details, and drop
its 5 photos into /assets using the naming pattern in image-list.txt. No
other file needs to change. To remove a product, delete its entry. Ratings,
reviews, stock numbers and the extra ~19 demo products are placeholder —
please replace with real figures before this goes live to customers.


HOW TO ADD YOUR PHOTOS
------------------------------------------------
Open assets/image-list.txt — it lists the exact file name the site is
already looking for, for every image on the site (logo, hero, category
tiles, every product's listing photo + 4-photo gallery, Instagram grid).
Save photos into /assets using those exact names and they appear
immediately, no code changes needed. Anything not added yet shows a soft
pastel placeholder instead of a broken image, so the site never looks
unfinished while photography is still being gathered.

Note on assets/logo.png: your real round logo badge is now in place here
(cropped clean and transparent from the Instagram profile photo) and
shows on every page — header, mobile menu, and footer — as a round mark
sized to be eye-catching but not oversized (46px on desktop, 38px on
mobile, 50px in the footer). If you ever get a higher-resolution or
redesigned version of the logo, just replace assets/logo.png with the new
file (keep the name the same) and it updates everywhere automatically —
no code changes needed. If that file is ever missing or fails to load,
the site quietly falls back to a small gold gem icon + "The Bijou Box" in
italic serif type instead of showing a broken image.

Update: all 39 products now have real product photography (matched from
your photo collection by jewelry type and motif, and renamed into the
exact files the site looks for) — the shop grid, cart, wishlist, and every
product page all show real photos now, not placeholders. Some photos are
intentionally reused across similar products or across a product's 4
gallery slots, since 39 products x 5 photos is more than your collection
had unique matches for — see the note at the top of assets/image-list.txt
for exactly which ones, and swap in a better photo any time by saving a
new file over the same exact name. The site-wide photos (hero, category
tiles, "Buy The Sea" banner, About page, Instagram grid) were left
untouched, as you'd already added those yourself.


THE WHATSAPP HANDOFF (important to understand)
------------------------------------------------
Because there's no backend yet, "Place Order" on checkout.html does not
notify you anywhere by itself — it only stores the order in that
customer's own browser so it can show them a confirmation page. The
confirmation page's "Confirm Order On WhatsApp" button is what actually
gets the order to you: it opens WhatsApp (+91 91526 42733) with a message
pre-filled with the order ID, items, total, payment method and address.
Make sure someone is monitoring that number to catch these. This is a
deliberate, honest bridge given "no payment gateway / no admin yet" — once
either of those exists, this step can be automated away.


HOW TO PREVIEW IT
------------------------------------------------
Double-click index.html to open it in your browser, or drag the whole
folder into a browser window. Every internal link, the cart, and checkout
all work correctly as long as every file stays together in one folder
(browser localStorage is per-site, so the cart/wishlist you build up while
testing locally will still be there if you open the folder again later).


HOW TO PUBLISH IT
------------------------------------------------
Any standard web host works: upload every file and the assets folder,
keeping this exact structure, to your hosting provider — or drag the
folder into a free host like Netlify, Vercel or GitHub Pages. No build
step, no dependencies to install.
