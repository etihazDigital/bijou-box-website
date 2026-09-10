// THE BIJOU BOX — product catalog.
// Add, edit or remove products here — every page (Home, Shop, Product, Cart, Search) reads from this one file.
// To add a product: copy an existing object, give it a new unique "id", and drop matching images into /assets
// named exactly "assets/product-<id>.jpg" (listing photo) and "assets/product-<id>-1.jpg" .. "-4.jpg" (gallery).
const PRODUCTS = [
  {
    "id": "shell-necklace-set",
    "name": "Shell Necklace Set",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 2799,
    "mrp": 3299,
    "discount": 15,
    "rating": 4.8,
    "reviews": 186,
    "tags": [
      "bestseller"
    ],
    "collection": "buy-the-sea",
    "stock": 22,
    "icon": "necklace",
    "image": "assets/product-shell-necklace-set.jpg",
    "gallery": [
      "assets/product-shell-necklace-set-1.jpg",
      "assets/product-shell-necklace-set-2.jpg",
      "assets/product-shell-necklace-set-3.jpg",
      "assets/product-shell-necklace-set-4.jpg"
    ],
    "shortDesc": "Two shell-clasp chains layered together, finished with a hand-set mother-of-pearl pendant.",
    "description": "Two shell-clasp chains layered together, finished with a hand-set mother-of-pearl pendant. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "wildflower-necklace",
    "name": "Wildflower Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1749,
    "mrp": 2399,
    "discount": 27,
    "rating": 4.7,
    "reviews": 94,
    "tags": [],
    "collection": null,
    "stock": 31,
    "icon": "necklace",
    "image": "assets/product-wildflower-necklace.jpg",
    "gallery": [
      "assets/product-wildflower-necklace-1.jpg",
      "assets/product-wildflower-necklace-2.jpg",
      "assets/product-wildflower-necklace-3.jpg",
      "assets/product-wildflower-necklace-4.jpg"
    ],
    "shortDesc": "A single pressed-flower pendant on a fine box chain, for an everyday touch of romance.",
    "description": "A single pressed-flower pendant on a fine box chain, for an everyday touch of romance. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "dual-heart-layered-necklace",
    "name": "Dual Heart Layered Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1749,
    "mrp": 2189,
    "discount": 20,
    "rating": 4.6,
    "reviews": 61,
    "tags": [
      "new"
    ],
    "collection": null,
    "stock": 18,
    "icon": "necklace",
    "image": "assets/product-dual-heart-layered-necklace.jpg",
    "gallery": [
      "assets/product-dual-heart-layered-necklace-1.jpg",
      "assets/product-dual-heart-layered-necklace-2.jpg",
      "assets/product-dual-heart-layered-necklace-3.jpg",
      "assets/product-dual-heart-layered-necklace-4.jpg"
    ],
    "shortDesc": "Two heart pendants at different chain lengths, designed to be worn layered or solo.",
    "description": "Two heart pendants at different chain lengths, designed to be worn layered or solo. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "tiny-treasure-necklace",
    "name": "Tiny Treasure Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1449,
    "mrp": 1839,
    "discount": 21,
    "rating": 4.7,
    "reviews": 58,
    "tags": [],
    "collection": null,
    "stock": 40,
    "icon": "necklace",
    "image": "assets/product-tiny-treasure-necklace.jpg",
    "gallery": [
      "assets/product-tiny-treasure-necklace-1.jpg",
      "assets/product-tiny-treasure-necklace-2.jpg",
      "assets/product-tiny-treasure-necklace-3.jpg",
      "assets/product-tiny-treasure-necklace-4.jpg"
    ],
    "shortDesc": "A miniature charm on a delicate chain — subtle enough for daily wear, sweet enough to notice.",
    "description": "A miniature charm on a delicate chain — subtle enough for daily wear, sweet enough to notice. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "outline-heart-necklace",
    "name": "Outline Heart Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1949,
    "mrp": 2379,
    "discount": 18,
    "rating": 4.6,
    "reviews": 47,
    "tags": [],
    "collection": null,
    "stock": 26,
    "icon": "necklace",
    "image": "assets/product-outline-heart-necklace.jpg",
    "gallery": [
      "assets/product-outline-heart-necklace-1.jpg",
      "assets/product-outline-heart-necklace-2.jpg",
      "assets/product-outline-heart-necklace-3.jpg",
      "assets/product-outline-heart-necklace-4.jpg"
    ],
    "shortDesc": "An open-outline heart pendant that catches the light without ever feeling heavy.",
    "description": "An open-outline heart pendant that catches the light without ever feeling heavy. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "interlock-star-moon-necklace",
    "name": "Interlock Star Moon Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1199,
    "mrp": 1689,
    "discount": 29,
    "rating": 4.5,
    "reviews": 39,
    "tags": [],
    "collection": null,
    "stock": 8,
    "icon": "necklace",
    "image": "assets/product-interlock-star-moon-necklace.jpg",
    "gallery": [
      "assets/product-interlock-star-moon-necklace-1.jpg",
      "assets/product-interlock-star-moon-necklace-2.jpg",
      "assets/product-interlock-star-moon-necklace-3.jpg",
      "assets/product-interlock-star-moon-necklace-4.jpg"
    ],
    "shortDesc": "A celestial star-and-moon pair, interlocked on a fine chain for a playful everyday layer.",
    "description": "A celestial star-and-moon pair, interlocked on a fine chain for a playful everyday layer. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "sunkissed-coin-necklace",
    "name": "Sunkissed Coin Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1599,
    "mrp": 2099,
    "discount": 24,
    "rating": 4.6,
    "reviews": 33,
    "tags": [
      "new"
    ],
    "collection": "buy-the-sea",
    "stock": 15,
    "icon": "necklace",
    "image": "assets/product-sunkissed-coin-necklace.jpg",
    "gallery": [
      "assets/product-sunkissed-coin-necklace-1.jpg",
      "assets/product-sunkissed-coin-necklace-2.jpg",
      "assets/product-sunkissed-coin-necklace-3.jpg",
      "assets/product-sunkissed-coin-necklace-4.jpg"
    ],
    "shortDesc": "A sun-textured coin pendant that brings warm, beachy energy to any neckline.",
    "description": "A sun-textured coin pendant that brings warm, beachy energy to any neckline. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "layered-initial-necklace",
    "name": "Layered Initial Necklace",
    "category": "necklaces",
    "categoryLabel": "Necklace",
    "price": 1899,
    "mrp": 2399,
    "discount": 21,
    "rating": 4.8,
    "reviews": 72,
    "tags": [
      "trending"
    ],
    "collection": null,
    "stock": 20,
    "icon": "necklace",
    "image": "assets/product-layered-initial-necklace.jpg",
    "gallery": [
      "assets/product-layered-initial-necklace-1.jpg",
      "assets/product-layered-initial-necklace-2.jpg",
      "assets/product-layered-initial-necklace-3.jpg",
      "assets/product-layered-initial-necklace-4.jpg"
    ],
    "shortDesc": "Two chains layered together — one plain, one carrying your initial — fully personalisable.",
    "description": "Two chains layered together — one plain, one carrying your initial — fully personalisable. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 16\"–19\" chain"
    ]
  },
  {
    "id": "dainty-everyday-earcuff",
    "name": "Dainty Everyday Earcuff",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 1499,
    "mrp": 1999,
    "discount": 25,
    "rating": 4.6,
    "reviews": 52,
    "tags": [],
    "collection": null,
    "stock": 34,
    "icon": "earring",
    "image": "assets/product-dainty-everyday-earcuff.jpg",
    "gallery": [
      "assets/product-dainty-everyday-earcuff-1.jpg",
      "assets/product-dainty-everyday-earcuff-2.jpg",
      "assets/product-dainty-everyday-earcuff-3.jpg",
      "assets/product-dainty-everyday-earcuff-4.jpg"
    ],
    "shortDesc": "A no-piercing-needed cuff that hugs the ear for an effortless everyday stack.",
    "description": "A no-piercing-needed cuff that hugs the ear for an effortless everyday stack. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "crystal-dual-layer-earcuff",
    "name": "Crystal Dual Layer Earcuff",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 1799,
    "mrp": 2279,
    "discount": 21,
    "rating": 4.7,
    "reviews": 66,
    "tags": [],
    "collection": null,
    "stock": 21,
    "icon": "earring",
    "image": "assets/product-crystal-dual-layer-earcuff.jpg",
    "gallery": [
      "assets/product-crystal-dual-layer-earcuff-1.jpg",
      "assets/product-crystal-dual-layer-earcuff-2.jpg",
      "assets/product-crystal-dual-layer-earcuff-3.jpg",
      "assets/product-crystal-dual-layer-earcuff-4.jpg"
    ],
    "shortDesc": "Two crystal-set bands in one cuff, for a sparkle that catches every angle.",
    "description": "Two crystal-set bands in one cuff, for a sparkle that catches every angle. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "crystal-dew-earcuff",
    "name": "Crystal Dew Earcuff",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 1599,
    "mrp": 2079,
    "discount": 23,
    "rating": 4.6,
    "reviews": 41,
    "tags": [],
    "collection": null,
    "stock": 27,
    "icon": "earring",
    "image": "assets/product-crystal-dew-earcuff.jpg",
    "gallery": [
      "assets/product-crystal-dew-earcuff-1.jpg",
      "assets/product-crystal-dew-earcuff-2.jpg",
      "assets/product-crystal-dew-earcuff-3.jpg",
      "assets/product-crystal-dew-earcuff-4.jpg"
    ],
    "shortDesc": "A single dew-drop crystal set low on a slim cuff band — quietly luxe.",
    "description": "A single dew-drop crystal set low on a slim cuff band — quietly luxe. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "dual-diamond-earcuff-single",
    "name": "Dual Diamond Earcuff (Single)",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 1199,
    "mrp": 1689,
    "discount": 29,
    "rating": 4.5,
    "reviews": 29,
    "tags": [],
    "collection": null,
    "stock": 9,
    "icon": "earring",
    "image": "assets/product-dual-diamond-earcuff-single.jpg",
    "gallery": [
      "assets/product-dual-diamond-earcuff-single-1.jpg",
      "assets/product-dual-diamond-earcuff-single-2.jpg",
      "assets/product-dual-diamond-earcuff-single-3.jpg",
      "assets/product-dual-diamond-earcuff-single-4.jpg"
    ],
    "shortDesc": "A single statement cuff with a dual-diamond-cut crystal setting. Sold individually.",
    "description": "A single statement cuff with a dual-diamond-cut crystal setting. Sold individually. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "triple-charm-earring",
    "name": "Triple Charm Earring",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 2149,
    "mrp": 2799,
    "discount": 23,
    "rating": 4.8,
    "reviews": 121,
    "tags": [
      "bestseller"
    ],
    "collection": null,
    "stock": 24,
    "icon": "earring",
    "image": "assets/product-triple-charm-earring.jpg",
    "gallery": [
      "assets/product-triple-charm-earring-1.jpg",
      "assets/product-triple-charm-earring-2.jpg",
      "assets/product-triple-charm-earring-3.jpg",
      "assets/product-triple-charm-earring-4.jpg"
    ],
    "shortDesc": "Three dangling charms on a single hook — our most-photographed earring, hands down.",
    "description": "Three dangling charms on a single hook — our most-photographed earring, hands down. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "pearl-drop-studs",
    "name": "Pearl Drop Studs",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 1349,
    "mrp": 1799,
    "discount": 25,
    "rating": 4.7,
    "reviews": 88,
    "tags": [],
    "collection": null,
    "stock": 36,
    "icon": "earring",
    "image": "assets/product-pearl-drop-studs.jpg",
    "gallery": [
      "assets/product-pearl-drop-studs-1.jpg",
      "assets/product-pearl-drop-studs-2.jpg",
      "assets/product-pearl-drop-studs-3.jpg",
      "assets/product-pearl-drop-studs-4.jpg"
    ],
    "shortDesc": "Classic freshwater-style pearl drops on a gold-plated post — the earring you'll reach for daily.",
    "description": "Classic freshwater-style pearl drops on a gold-plated post — the earring you'll reach for daily. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "huggie-hoop-set",
    "name": "Huggie Hoop Set",
    "category": "earrings",
    "categoryLabel": "Earring",
    "price": 1249,
    "mrp": 1649,
    "discount": 24,
    "rating": 4.6,
    "reviews": 54,
    "tags": [
      "new"
    ],
    "collection": null,
    "stock": 30,
    "icon": "earring",
    "image": "assets/product-huggie-hoop-set.jpg",
    "gallery": [
      "assets/product-huggie-hoop-set-1.jpg",
      "assets/product-huggie-hoop-set-2.jpg",
      "assets/product-huggie-hoop-set-3.jpg",
      "assets/product-huggie-hoop-set-4.jpg"
    ],
    "shortDesc": "A set of two huggie hoops in slightly different widths, made to be worn together or apart.",
    "description": "A set of two huggie hoops in slightly different widths, made to be worn together or apart. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Hypoallergenic posts"
    ]
  },
  {
    "id": "bow-adjustable-ring",
    "name": "Bow Adjustable Ring",
    "category": "rings",
    "categoryLabel": "Ring",
    "price": 1449,
    "mrp": 1839,
    "discount": 21,
    "rating": 4.6,
    "reviews": 45,
    "tags": [],
    "collection": null,
    "stock": 19,
    "icon": "ring",
    "image": "assets/product-bow-adjustable-ring.jpg",
    "gallery": [
      "assets/product-bow-adjustable-ring-1.jpg",
      "assets/product-bow-adjustable-ring-2.jpg",
      "assets/product-bow-adjustable-ring-3.jpg",
      "assets/product-bow-adjustable-ring-4.jpg"
    ],
    "shortDesc": "A dainty bow set on an open, adjustable band — one size that fits almost every finger.",
    "description": "A dainty bow set on an open, adjustable band — one size that fits almost every finger. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable, one size fits most"
    ]
  },
  {
    "id": "three-layered-emerald-ring",
    "name": "Three Layered Emerald Ring",
    "category": "rings",
    "categoryLabel": "Ring",
    "price": 1899,
    "mrp": 2289,
    "discount": 17,
    "rating": 4.8,
    "reviews": 103,
    "tags": [
      "bestseller"
    ],
    "collection": null,
    "stock": 17,
    "icon": "ring",
    "image": "assets/product-three-layered-emerald-ring.jpg",
    "gallery": [
      "assets/product-three-layered-emerald-ring-1.jpg",
      "assets/product-three-layered-emerald-ring-2.jpg",
      "assets/product-three-layered-emerald-ring-3.jpg",
      "assets/product-three-layered-emerald-ring-4.jpg"
    ],
    "shortDesc": "Three fine bands fused into one, each set with a single emerald-cut stone.",
    "description": "Three fine bands fused into one, each set with a single emerald-cut stone. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable, one size fits most"
    ]
  },
  {
    "id": "stackable-band-trio",
    "name": "Stackable Band Trio",
    "category": "rings",
    "categoryLabel": "Ring",
    "price": 1699,
    "mrp": 2199,
    "discount": 23,
    "rating": 4.7,
    "reviews": 64,
    "tags": [
      "trending"
    ],
    "collection": null,
    "stock": 25,
    "icon": "ring",
    "image": "assets/product-stackable-band-trio.jpg",
    "gallery": [
      "assets/product-stackable-band-trio-1.jpg",
      "assets/product-stackable-band-trio-2.jpg",
      "assets/product-stackable-band-trio-3.jpg",
      "assets/product-stackable-band-trio-4.jpg"
    ],
    "shortDesc": "Three slim bands sold as one set — wear them stacked or spread across different fingers.",
    "description": "Three slim bands sold as one set — wear them stacked or spread across different fingers. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable, one size fits most"
    ]
  },
  {
    "id": "baguette-solitaire-ring",
    "name": "Baguette Solitaire Ring",
    "category": "rings",
    "categoryLabel": "Ring",
    "price": 1549,
    "mrp": 1999,
    "discount": 23,
    "rating": 4.6,
    "reviews": 38,
    "tags": [],
    "collection": null,
    "stock": 12,
    "icon": "ring",
    "image": "assets/product-baguette-solitaire-ring.jpg",
    "gallery": [
      "assets/product-baguette-solitaire-ring-1.jpg",
      "assets/product-baguette-solitaire-ring-2.jpg",
      "assets/product-baguette-solitaire-ring-3.jpg",
      "assets/product-baguette-solitaire-ring-4.jpg"
    ],
    "shortDesc": "A single baguette-cut stone on a clean band, for the everyday minimalist.",
    "description": "A single baguette-cut stone on a clean band, for the everyday minimalist. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable, one size fits most"
    ]
  },
  {
    "id": "twist-knot-ring",
    "name": "Twist Knot Ring",
    "category": "rings",
    "categoryLabel": "Ring",
    "price": 1299,
    "mrp": 1699,
    "discount": 24,
    "rating": 4.5,
    "reviews": 27,
    "tags": [],
    "collection": null,
    "stock": 22,
    "icon": "ring",
    "image": "assets/product-twist-knot-ring.jpg",
    "gallery": [
      "assets/product-twist-knot-ring-1.jpg",
      "assets/product-twist-knot-ring-2.jpg",
      "assets/product-twist-knot-ring-3.jpg",
      "assets/product-twist-knot-ring-4.jpg"
    ],
    "shortDesc": "A sculptural twist-knot silhouette that looks hand-forged, sized to adjust.",
    "description": "A sculptural twist-knot silhouette that looks hand-forged, sized to adjust. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable, one size fits most"
    ]
  },
  {
    "id": "adjustable-pearl-ring",
    "name": "Adjustable Pearl Ring",
    "category": "rings",
    "categoryLabel": "Ring",
    "price": 1399,
    "mrp": 1799,
    "discount": 22,
    "rating": 4.7,
    "reviews": 49,
    "tags": [
      "new"
    ],
    "collection": null,
    "stock": 28,
    "icon": "ring",
    "image": "assets/product-adjustable-pearl-ring.jpg",
    "gallery": [
      "assets/product-adjustable-pearl-ring-1.jpg",
      "assets/product-adjustable-pearl-ring-2.jpg",
      "assets/product-adjustable-pearl-ring-3.jpg",
      "assets/product-adjustable-pearl-ring-4.jpg"
    ],
    "shortDesc": "A single freshwater-style pearl on an open adjustable band, dressed up or down.",
    "description": "A single freshwater-style pearl on an open adjustable band, dressed up or down. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable, one size fits most"
    ]
  },
  {
    "id": "eclipse-charm-cuff",
    "name": "Eclipse Charm Cuff",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 1949,
    "mrp": 2379,
    "discount": 18,
    "rating": 4.7,
    "reviews": 76,
    "tags": [
      "trending"
    ],
    "collection": null,
    "stock": 16,
    "icon": "bracelet",
    "image": "assets/product-eclipse-charm-cuff.jpg",
    "gallery": [
      "assets/product-eclipse-charm-cuff-1.jpg",
      "assets/product-eclipse-charm-cuff-2.jpg",
      "assets/product-eclipse-charm-cuff-3.jpg",
      "assets/product-eclipse-charm-cuff-4.jpg"
    ],
    "shortDesc": "An open cuff with a crescent charm that catches light from every angle.",
    "description": "An open cuff with a crescent charm that catches light from every angle. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "everbloom-bracelet",
    "name": "Everbloom Bracelet",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 1699,
    "mrp": 2179,
    "discount": 22,
    "rating": 4.6,
    "reviews": 52,
    "tags": [],
    "collection": null,
    "stock": 29,
    "icon": "bracelet",
    "image": "assets/product-everbloom-bracelet.jpg",
    "gallery": [
      "assets/product-everbloom-bracelet-1.jpg",
      "assets/product-everbloom-bracelet-2.jpg",
      "assets/product-everbloom-bracelet-3.jpg",
      "assets/product-everbloom-bracelet-4.jpg"
    ],
    "shortDesc": "A floral-link chain bracelet designed to layer beautifully with our necklaces.",
    "description": "A floral-link chain bracelet designed to layer beautifully with our necklaces. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "desert-stone-bracelet",
    "name": "Desert Stone Bracelet",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 1749,
    "mrp": 2399,
    "discount": 27,
    "rating": 4.7,
    "reviews": 68,
    "tags": [
      "bestseller"
    ],
    "collection": null,
    "stock": 24,
    "icon": "bracelet",
    "image": "assets/product-desert-stone-bracelet.jpg",
    "gallery": [
      "assets/product-desert-stone-bracelet-1.jpg",
      "assets/product-desert-stone-bracelet-2.jpg",
      "assets/product-desert-stone-bracelet-3.jpg",
      "assets/product-desert-stone-bracelet-4.jpg"
    ],
    "shortDesc": "Warm-toned natural-cut stones set along a fine gold-plated chain.",
    "description": "Warm-toned natural-cut stones set along a fine gold-plated chain. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "marina-stone-bracelet",
    "name": "Marina Stone Bracelet",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 1549,
    "mrp": 2129,
    "discount": 27,
    "rating": 4.6,
    "reviews": 44,
    "tags": [],
    "collection": "buy-the-sea",
    "stock": 20,
    "icon": "bracelet",
    "image": "assets/product-marina-stone-bracelet.jpg",
    "gallery": [
      "assets/product-marina-stone-bracelet-1.jpg",
      "assets/product-marina-stone-bracelet-2.jpg",
      "assets/product-marina-stone-bracelet-3.jpg",
      "assets/product-marina-stone-bracelet-4.jpg"
    ],
    "shortDesc": "Sea-glass toned stones strung along a delicate chain — a Buy The Sea signature.",
    "description": "Sea-glass toned stones strung along a delicate chain — a Buy The Sea signature. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "tennis-sparkle-bracelet",
    "name": "Tennis Sparkle Bracelet",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 2249,
    "mrp": 2899,
    "discount": 22,
    "rating": 4.8,
    "reviews": 97,
    "tags": [
      "trending"
    ],
    "collection": null,
    "stock": 14,
    "icon": "bracelet",
    "image": "assets/product-tennis-sparkle-bracelet.jpg",
    "gallery": [
      "assets/product-tennis-sparkle-bracelet-1.jpg",
      "assets/product-tennis-sparkle-bracelet-2.jpg",
      "assets/product-tennis-sparkle-bracelet-3.jpg",
      "assets/product-tennis-sparkle-bracelet-4.jpg"
    ],
    "shortDesc": "A row of continuous crystal stones set in classic tennis-bracelet style.",
    "description": "A row of continuous crystal stones set in classic tennis-bracelet style. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "beaded-charm-bracelet",
    "name": "Beaded Charm Bracelet",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 1299,
    "mrp": 1699,
    "discount": 24,
    "rating": 4.5,
    "reviews": 31,
    "tags": [
      "new"
    ],
    "collection": null,
    "stock": 33,
    "icon": "bracelet",
    "image": "assets/product-beaded-charm-bracelet.jpg",
    "gallery": [
      "assets/product-beaded-charm-bracelet-1.jpg",
      "assets/product-beaded-charm-bracelet-2.jpg",
      "assets/product-beaded-charm-bracelet-3.jpg",
      "assets/product-beaded-charm-bracelet-4.jpg"
    ],
    "shortDesc": "Mixed beads and a single charm on a stretch cord — easy on, easy off.",
    "description": "Mixed beads and a single charm on a stretch cord — easy on, easy off. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "classic-herringbone-kada",
    "name": "Classic Herringbone Kada",
    "category": "bracelets",
    "categoryLabel": "Bracelet",
    "price": 1899,
    "mrp": 2399,
    "discount": 21,
    "rating": 4.7,
    "reviews": 58,
    "tags": [],
    "collection": null,
    "stock": 18,
    "icon": "bracelet",
    "image": "assets/product-classic-herringbone-kada.jpg",
    "gallery": [
      "assets/product-classic-herringbone-kada-1.jpg",
      "assets/product-classic-herringbone-kada-2.jpg",
      "assets/product-classic-herringbone-kada-3.jpg",
      "assets/product-classic-herringbone-kada-4.jpg"
    ],
    "shortDesc": "A solid herringbone-textured cuff with the substantial feel of fine jewellery.",
    "description": "A solid herringbone-textured cuff with the substantial feel of fine jewellery. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 6\"–8\" fit"
    ]
  },
  {
    "id": "delicate-chain-anklet",
    "name": "Delicate Chain Anklet",
    "category": "anklets",
    "categoryLabel": "Anklet",
    "price": 999,
    "mrp": 1349,
    "discount": 26,
    "rating": 4.5,
    "reviews": 36,
    "tags": [],
    "collection": null,
    "stock": 30,
    "icon": "anklet",
    "image": "assets/product-delicate-chain-anklet.jpg",
    "gallery": [
      "assets/product-delicate-chain-anklet-1.jpg",
      "assets/product-delicate-chain-anklet-2.jpg",
      "assets/product-delicate-chain-anklet-3.jpg",
      "assets/product-delicate-chain-anklet-4.jpg"
    ],
    "shortDesc": "A fine box-chain anklet built for everyday wear — barely-there and beach-ready.",
    "description": "A fine box-chain anklet built for everyday wear — barely-there and beach-ready. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 8\"–10\" chain"
    ]
  },
  {
    "id": "shell-charm-anklet",
    "name": "Shell Charm Anklet",
    "category": "anklets",
    "categoryLabel": "Anklet",
    "price": 1099,
    "mrp": 1499,
    "discount": 27,
    "rating": 4.6,
    "reviews": 42,
    "tags": [
      "new"
    ],
    "collection": "buy-the-sea",
    "stock": 25,
    "icon": "anklet",
    "image": "assets/product-shell-charm-anklet.jpg",
    "gallery": [
      "assets/product-shell-charm-anklet-1.jpg",
      "assets/product-shell-charm-anklet-2.jpg",
      "assets/product-shell-charm-anklet-3.jpg",
      "assets/product-shell-charm-anklet-4.jpg"
    ],
    "shortDesc": "A single shell charm dangling from a delicate chain — the anklet version of our bestseller.",
    "description": "A single shell charm dangling from a delicate chain — the anklet version of our bestseller. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 8\"–10\" chain"
    ]
  },
  {
    "id": "beaded-boho-anklet",
    "name": "Beaded Boho Anklet",
    "category": "anklets",
    "categoryLabel": "Anklet",
    "price": 899,
    "mrp": 1249,
    "discount": 28,
    "rating": 4.4,
    "reviews": 22,
    "tags": [],
    "collection": null,
    "stock": 34,
    "icon": "anklet",
    "image": "assets/product-beaded-boho-anklet.jpg",
    "gallery": [
      "assets/product-beaded-boho-anklet-1.jpg",
      "assets/product-beaded-boho-anklet-2.jpg",
      "assets/product-beaded-boho-anklet-3.jpg",
      "assets/product-beaded-boho-anklet-4.jpg"
    ],
    "shortDesc": "Mixed natural beads strung on an adjustable cord for a laid-back, sun-soaked look.",
    "description": "Mixed natural beads strung on an adjustable cord for a laid-back, sun-soaked look. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 8\"–10\" chain"
    ]
  },
  {
    "id": "star-charm-anklet",
    "name": "Star Charm Anklet",
    "category": "anklets",
    "categoryLabel": "Anklet",
    "price": 1049,
    "mrp": 1399,
    "discount": 25,
    "rating": 4.6,
    "reviews": 29,
    "tags": [],
    "collection": null,
    "stock": 19,
    "icon": "anklet",
    "image": "assets/product-star-charm-anklet.jpg",
    "gallery": [
      "assets/product-star-charm-anklet-1.jpg",
      "assets/product-star-charm-anklet-2.jpg",
      "assets/product-star-charm-anklet-3.jpg",
      "assets/product-star-charm-anklet-4.jpg"
    ],
    "shortDesc": "A tiny star charm on a fine chain, adjustable to sit exactly where you like it.",
    "description": "A tiny star charm on a fine chain, adjustable to sit exactly where you like it. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Adjustable 8\"–10\" chain"
    ]
  },
  {
    "id": "emerald-heart-charm",
    "name": "Emerald Heart Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 899,
    "mrp": 1285,
    "discount": 30,
    "rating": 4.7,
    "reviews": 48,
    "tags": [],
    "collection": null,
    "stock": 40,
    "icon": "charm",
    "image": "assets/product-emerald-heart-charm.jpg",
    "gallery": [
      "assets/product-emerald-heart-charm-1.jpg",
      "assets/product-emerald-heart-charm-2.jpg",
      "assets/product-emerald-heart-charm-3.jpg",
      "assets/product-emerald-heart-charm-4.jpg"
    ],
    "shortDesc": "A single emerald-cut heart charm designed to clip onto any chain or hoop you already own.",
    "description": "A single emerald-cut heart charm designed to clip onto any chain or hoop you already own. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  },
  {
    "id": "crystal-heart-charm",
    "name": "Crystal Heart Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 899,
    "mrp": 1285,
    "discount": 30,
    "rating": 4.6,
    "reviews": 37,
    "tags": [],
    "collection": null,
    "stock": 38,
    "icon": "charm",
    "image": "assets/product-crystal-heart-charm.jpg",
    "gallery": [
      "assets/product-crystal-heart-charm-1.jpg",
      "assets/product-crystal-heart-charm-2.jpg",
      "assets/product-crystal-heart-charm-3.jpg",
      "assets/product-crystal-heart-charm-4.jpg"
    ],
    "shortDesc": "A sparkling crystal heart charm — the easiest way to refresh an existing necklace.",
    "description": "A sparkling crystal heart charm — the easiest way to refresh an existing necklace. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  },
  {
    "id": "hot-air-balloon-charm",
    "name": "Hot Air Balloon Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 899,
    "mrp": 1285,
    "discount": 30,
    "rating": 4.7,
    "reviews": 29,
    "tags": [
      "new"
    ],
    "collection": null,
    "stock": 26,
    "icon": "charm",
    "image": "assets/product-hot-air-balloon-charm.jpg",
    "gallery": [
      "assets/product-hot-air-balloon-charm-1.jpg",
      "assets/product-hot-air-balloon-charm-2.jpg",
      "assets/product-hot-air-balloon-charm-3.jpg",
      "assets/product-hot-air-balloon-charm-4.jpg"
    ],
    "shortDesc": "A whimsical hot-air-balloon silhouette charm, playful on a chain or bag clip.",
    "description": "A whimsical hot-air-balloon silhouette charm, playful on a chain or bag clip. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  },
  {
    "id": "initial-letter-charm",
    "name": "Initial Letter Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 799,
    "mrp": 1099,
    "discount": 27,
    "rating": 4.8,
    "reviews": 112,
    "tags": [
      "bestseller"
    ],
    "collection": null,
    "stock": 50,
    "icon": "charm",
    "image": "assets/product-initial-letter-charm.jpg",
    "gallery": [
      "assets/product-initial-letter-charm-1.jpg",
      "assets/product-initial-letter-charm-2.jpg",
      "assets/product-initial-letter-charm-3.jpg",
      "assets/product-initial-letter-charm-4.jpg"
    ],
    "shortDesc": "A single gold-plated initial charm — the easiest personalised layer to add to any chain.",
    "description": "A single gold-plated initial charm — the easiest personalised layer to add to any chain. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  },
  {
    "id": "evil-eye-charm",
    "name": "Evil Eye Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 849,
    "mrp": 1199,
    "discount": 29,
    "rating": 4.7,
    "reviews": 89,
    "tags": [
      "trending"
    ],
    "collection": null,
    "stock": 44,
    "icon": "charm",
    "image": "assets/product-evil-eye-charm.jpg",
    "gallery": [
      "assets/product-evil-eye-charm-1.jpg",
      "assets/product-evil-eye-charm-2.jpg",
      "assets/product-evil-eye-charm-3.jpg",
      "assets/product-evil-eye-charm-4.jpg"
    ],
    "shortDesc": "Our most-requested charm — a classic protective evil-eye motif in blue and gold.",
    "description": "Our most-requested charm — a classic protective evil-eye motif in blue and gold. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  },
  {
    "id": "butterfly-charm",
    "name": "Butterfly Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 799,
    "mrp": 1099,
    "discount": 27,
    "rating": 4.5,
    "reviews": 24,
    "tags": [],
    "collection": null,
    "stock": 22,
    "icon": "charm",
    "image": "assets/product-butterfly-charm.jpg",
    "gallery": [
      "assets/product-butterfly-charm-1.jpg",
      "assets/product-butterfly-charm-2.jpg",
      "assets/product-butterfly-charm-3.jpg",
      "assets/product-butterfly-charm-4.jpg"
    ],
    "shortDesc": "A delicate open-wing butterfly charm, light enough to layer three at once.",
    "description": "A delicate open-wing butterfly charm, light enough to layer three at once. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  },
  {
    "id": "sun-and-moon-charm",
    "name": "Sun & Moon Charm",
    "category": "charms",
    "categoryLabel": "Charm",
    "price": 899,
    "mrp": 1249,
    "discount": 28,
    "rating": 4.6,
    "reviews": 33,
    "tags": [],
    "collection": null,
    "stock": 17,
    "icon": "charm",
    "image": "assets/product-sun-and-moon-charm.jpg",
    "gallery": [
      "assets/product-sun-and-moon-charm-1.jpg",
      "assets/product-sun-and-moon-charm-2.jpg",
      "assets/product-sun-and-moon-charm-3.jpg",
      "assets/product-sun-and-moon-charm-4.jpg"
    ],
    "shortDesc": "A celestial sun-and-moon duo charm that clips onto any chain in seconds.",
    "description": "A celestial sun-and-moon duo charm that clips onto any chain in seconds. 18K gold plated over a waterproof, anti-tarnish base, so it keeps its glow through humidity, sweat and salt water alike. Comes in Bijou Box signature packaging, ready to gift.",
    "highlights": [
      "18K Gold Plated",
      "Waterproof",
      "Anti-Tarnish",
      "Fits any 3mm+ chain or hoop"
    ]
  }
];

if (typeof module !== 'undefined') { module.exports = { PRODUCTS }; }
