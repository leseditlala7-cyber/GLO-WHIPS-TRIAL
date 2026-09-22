// ======================================
// GLO WHIPS BAKERY — BUSINESS SETTINGS
// EDIT THESE VALUES
// ======================================

// Business name
const BUSINESS_NAME = "Glo Whips Bakery";

// WhatsApp number (include country code, NO + or spaces)
// Example for South Africa: 27821234567
// IMPORTANT: Replace with the real WhatsApp number
const WHATSAPP_NUMBER = "YOUR_NUMBER_HERE";

// Phone number (display format)
const PHONE_NUMBER = "YOUR_PHONE_HERE";

// Email address
const EMAIL_ADDRESS = "YOUR_EMAIL_HERE";

// Physical location / service area
const LOCATION = "YOUR LOCATION / SERVICE AREA HERE";

// Business hours
const BUSINESS_HOURS = "YOUR BUSINESS HOURS HERE (e.g. Mon–Sat 08:00–17:00)";

// Social media links
const INSTAGRAM_URL = "https://www.instagram.com/glo_whips_bakery_/";
const INSTAGRAM_JARCO_URL = "https://www.instagram.com/glowhipsjarco/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61568318670413";

// ======================================
// PRODUCT DATABASE
// DEMO PRODUCTS — Replace with real products
// To add a product: copy one object and change the values
// ======================================

const products = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    category: "Cakes",
    price: 320,
    oldPrice: null,
    image: "images/products/featured/chocolate-cake.jpg",
    description: "Rich, moist chocolate sponge layered with silky chocolate ganache. Perfect for celebrations.",
    badge: "",
    isNew: false,
    isSale: false,
    featured: true
  },
  {
    id: 2,
    name: "Vanilla Bean Cupcakes",
    category: "Cupcakes",
    price: 45,
    oldPrice: null,
    image: "images/products/featured/vanilla-cupcakes.jpg",
    description: "Soft vanilla cupcakes topped with smooth buttercream. Sold per piece or by the dozen.",
    badge: "Popular",
    isNew: false,
    isSale: false,
    featured: true
  },
  {
    id: 3,
    name: "Red Velvet Delight",
    category: "Cakes",
    price: 380,
    oldPrice: 450,
    image: "images/products/sale/red-velvet.jpg",
    description: "Velvety red sponge with cream cheese frosting. A timeless favourite now on special.",
    badge: "Sale",
    isNew: false,
    isSale: true,
    featured: true
  },
  {
    id: 4,
    name: "Lemon Meringue Tart",
    category: "Desserts",
    price: 95,
    oldPrice: null,
    image: "images/products/new/lemon-tart.jpg",
    description: "Tangy lemon curd in a crisp pastry shell, crowned with toasted meringue.",
    badge: "New",
    isNew: true,
    isSale: false,
    featured: true
  },
  {
    id: 5,
    name: "Glo Whips Chocolate Whip",
    category: "Whip Products",
    price: 65,
    oldPrice: null,
    image: "images/products/featured/chocolate-whip.jpg",
    description: "Signature chocolate whipped cream dessert. Light, airy and deeply chocolatey.",
    badge: "",
    isNew: false,
    isSale: false,
    featured: true
  },
  {
    id: 6,
    name: "Caramel Brownie Bites",
    category: "Treats",
    price: 55,
    oldPrice: 70,
    image: "images/products/sale/brownie-bites.jpg",
    description: "Fudgy brownie pieces swirled with salted caramel. Box of 6.",
    badge: "Sale",
    isNew: false,
    isSale: true,
    featured: false
  },
  {
    id: 7,
    name: "Berry Cheesecake Cups",
    category: "Desserts",
    price: 75,
    oldPrice: null,
    image: "images/products/new/berry-cheesecake.jpg",
    description: "Creamy no-bake cheesecake layered with fresh berry compote in individual cups.",
    badge: "New",
    isNew: true,
    isSale: false,
    featured: true
  },
  {
    id: 8,
    name: "Cinnamon Swirl Buns",
    category: "Treats",
    price: 40,
    oldPrice: null,
    image: "images/products/featured/cinnamon-buns.jpg",
    description: "Soft, fragrant cinnamon buns with a light glaze. Best enjoyed warm.",
    badge: "",
    isNew: false,
    isSale: false,
    featured: false
  },
  {
    id: 9,
    name: "White Chocolate Macadamia Cookies",
    category: "Treats",
    price: 35,
    oldPrice: null,
    image: "images/products/new/macadamia-cookies.jpg",
    description: "Chewy cookies packed with white chocolate chunks and roasted macadamia nuts.",
    badge: "New",
    isNew: true,
    isSale: false,
    featured: false
  },
  {
    id: 10,
    name: "Passion Fruit Mousse Cake",
    category: "Cakes",
    price: 360,
    oldPrice: 420,
    image: "images/products/sale/passion-mousse.jpg",
    description: "Light passion fruit mousse on a soft sponge base. Refreshing and elegant.",
    badge: "Sale",
    isNew: false,
    isSale: true,
    featured: true
  }
];

// ======================================
// GALLERY IMAGES
// Add new images by adding objects here
// ======================================

const galleryImages = [
  { src: "images/gallery/gallery-1.jpg", alt: "Assorted cakes and cupcakes display" },
  { src: "images/gallery/gallery-2.jpg", alt: "Chocolate cake with ganache drip" },
  { src: "images/gallery/gallery-3.jpg", alt: "Fresh cupcakes with buttercream" },
  { src: "images/gallery/gallery-4.jpg", alt: "Dessert table styling" },
  { src: "images/gallery/gallery-5.jpg", alt: "Close-up of whipped cream dessert" },
  { src: "images/gallery/gallery-6.jpg", alt: "Bakery packaging and presentation" },
  { src: "images/gallery/gallery-7.jpg", alt: "Seasonal specials arrangement" },
  { src: "images/gallery/gallery-8.jpg", alt: "Customer celebration cake" }
];

// ======================================
// ORDER / CART SYSTEM (localStorage)
// ======================================

const CART_KEY = "gloWhipsCart";

function getCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartIndicator();
}

function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`${product.name} added to order`);
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  item.quantity = quantity;
  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  showToast("Item removed from order");
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartIndicator();
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartIndicator() {
  const count = getCartCount();
  const indicators = document.querySelectorAll(".cart-count");
  indicators.forEach(el => {
    el.textContent = count > 0 ? count : "";
    el.style.display = count > 0 ? "inline-flex" : "none";
  });

  const orderLinks = document.querySelectorAll(".nav-order-text");
  orderLinks.forEach(el => {
    el.textContent = count > 0 ? `ORDER (${count})` : "ORDER";
  });
}

// ======================================
// TOAST NOTIFICATIONS
// ======================================

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ======================================
// WHATSAPP HELPERS
// ======================================

function getWhatsAppBaseUrl() {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}`;
}

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER === "YOUR_NUMBER_HERE") {
    alert("Please set the WhatsApp number in script.js (WHATSAPP_NUMBER).");
    return;
  }
  const url = `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function buildOrderMessage(customer) {
  const cart = getCart();
  if (cart.length === 0) {
    return null;
  }

  let msg = `Hello ${BUSINESS_NAME}!\n\nI would like to place an order.\n\n`;
  msg += `Customer:\n${customer.name}\n\n`;
  msg += `Phone:\n${customer.phone}\n\n`;
  if (customer.email) {
    msg += `Email:\n${customer.email}\n\n`;
  }
  msg += `Order:\n`;
  cart.forEach(item => {
    msg += `${item.quantity} x ${item.name} — R${(item.price * item.quantity).toFixed(0)}\n`;
  });
  msg += `\nTotal: R${getCartTotal().toFixed(0)}\n\n`;
  if (customer.date) {
    msg += `Preferred date:\n${customer.date}\n\n`;
  }
  if (customer.method) {
    msg += `Collection/Delivery:\n${customer.method}\n\n`;
  }
  if (customer.notes) {
    msg += `Special instructions:\n${customer.notes}\n\n`;
  }
  msg += `Thank you!`;
  return msg;
}

// ======================================
// PRODUCT HELPERS
// ======================================

function getProductById(id) {
  return products.find(p => p.id === parseInt(id, 10));
}

function formatPrice(price) {
  return `R${price.toFixed(0)}`;
}

function getDiscountPercent(oldPrice, price) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function createProductCard(product, options = {}) {
  const { showCategory = true } = options;
  const discount = getDiscountPercent(product.oldPrice, product.price);

  let badgeHtml = "";
  if (product.isSale && discount > 0) {
    badgeHtml = `<span class="badge badge-sale">-${discount}%</span>`;
  } else if (product.isNew) {
    badgeHtml = `<span class="badge badge-new">New</span>`;
  } else if (product.badge) {
    badgeHtml = `<span class="badge badge-info">${product.badge}</span>`;
  }

  const oldPriceHtml = product.oldPrice
    ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>`
    : "";

  const categoryHtml = showCategory
    ? `<span class="product-category">${product.category}</span>`
    : "";

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-wrap">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy"
               onerror="this.onerror=null;this.src='images/branding/placeholder.jpg';this.classList.add('img-fallback');">
        </a>
        ${badgeHtml}
      </div>
      <div class="product-body">
        ${categoryHtml}
        <h3 class="product-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price-row">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${oldPriceHtml}
        </div>
        <div class="product-actions">
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">View Details</a>
          <button type="button" class="btn btn-primary btn-sm add-to-order" data-id="${product.id}">
            Add to Order
          </button>
        </div>
      </div>
    </article>
  `;
}

// ======================================
// RENDER FUNCTIONS
// ======================================

function renderFeaturedProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const featured = products.filter(p => p.featured).slice(0, 8);
  container.innerHTML = featured.map(p => createProductCard(p)).join("");
  bindAddToOrderButtons(container);
}

function renderNewArrivals(containerId, limit = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = products.filter(p => p.isNew).slice(0, limit);
  if (items.length === 0) {
    container.innerHTML = `<p class="empty-message">No new arrivals at the moment. Check back soon!</p>`;
    return;
  }
  container.innerHTML = items.map(p => createProductCard(p)).join("");
  bindAddToOrderButtons(container);
}

function renderSaleProducts(containerId, limit = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = products.filter(p => p.isSale).slice(0, limit);
  if (items.length === 0) {
    container.innerHTML = `<p class="empty-message">No items currently on sale. Check back soon!</p>`;
    return;
  }
  container.innerHTML = items.map(p => createProductCard(p)).join("");
  bindAddToOrderButtons(container);
}

function renderAllProducts(containerId, filterFn = null, sortFn = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let list = [...products];
  if (filterFn) list = list.filter(filterFn);
  if (sortFn) list = list.sort(sortFn);

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-message">No products found. Try a different search or filter.</p>`;
    return;
  }

  container.innerHTML = list.map(p => createProductCard(p)).join("");
  bindAddToOrderButtons(container);
}

function bindAddToOrderButtons(container) {
  container.querySelectorAll(".add-to-order").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id, 10);
      addToCart(id, 1);
    });
  });
}

// ======================================
// SHOP PAGE FILTERS & SEARCH
// ======================================

function getUniqueCategories() {
  const cats = [...new Set(products.map(p => p.category))];
  return ["All", ...cats.sort()];
}

function initShopPage() {
  const grid = document.getElementById("shop-grid");
  const searchInput = document.getElementById("search-input");
  const categoryContainer = document.getElementById("category-filters");
  const sortSelect = document.getElementById("sort-select");

  if (!grid) return;

  // Build category buttons
  if (categoryContainer) {
    const categories = getUniqueCategories();
    categoryContainer.innerHTML = categories.map((cat, i) => `
      <button type="button" class="filter-btn ${i === 0 ? "active" : ""}" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

    categoryContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        categoryContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyShopFilters();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => applyShopFilters());
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => applyShopFilters());
  }

  applyShopFilters();
}

function applyShopFilters() {
  const searchInput = document.getElementById("search-input");
  const categoryContainer = document.getElementById("category-filters");
  const sortSelect = document.getElementById("sort-select");

  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const activeCatBtn = categoryContainer
    ? categoryContainer.querySelector(".filter-btn.active")
    : null;
  const category = activeCatBtn ? activeCatBtn.dataset.category : "All";
  const sortValue = sortSelect ? sortSelect.value : "featured";

  let filterFn = (p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesSearch =
      !searchTerm ||
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  };

  let sortFn = null;
  switch (sortValue) {
    case "price-low":
      sortFn = (a, b) => a.price - b.price;
      break;
    case "price-high":
      sortFn = (a, b) => b.price - a.price;
      break;
    case "newest":
      sortFn = (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      break;
    case "az":
      sortFn = (a, b) => a.name.localeCompare(b.name);
      break;
    case "featured":
    default:
      sortFn = (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      break;
  }

  renderAllProducts("shop-grid", filterFn, sortFn);
}

// ======================================
// PRODUCT DETAIL PAGE
// ======================================

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = getProductById(id);

  const container = document.getElementById("product-detail");
  if (!container) return;

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>Product not found</h2>
        <p>Sorry, we couldn't find that product.</p>
        <a href="shop.html" class="btn btn-primary">Back to Shop</a>
      </div>
    `;
    return;
  }

  // Update page title and meta
  document.title = `${product.name} | ${BUSINESS_NAME}`;

  const discount = getDiscountPercent(product.oldPrice, product.price);
  let badgeHtml = "";
  if (product.isSale && discount > 0) {
    badgeHtml = `<span class="badge badge-sale">Sale −${discount}%</span>`;
  } else if (product.isNew) {
    badgeHtml = `<span class="badge badge-new">New</span>`;
  }

  const oldPriceHtml = product.oldPrice
    ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>`
    : "";

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}"
             onerror="this.onerror=null;this.src='images/branding/placeholder.jpg';this.classList.add('img-fallback');">
        ${badgeHtml}
      </div>
      <div class="product-detail-info">
        <span class="product-category">${product.category}</span>
        <h1>${product.name}</h1>
        <div class="product-price-row large">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${oldPriceHtml}
        </div>
        <p class="product-full-desc">${product.description}</p>
        <div class="quantity-selector">
          <label for="qty">Quantity</label>
          <div class="qty-controls">
            <button type="button" class="qty-btn" id="qty-minus" aria-label="Decrease quantity">−</button>
            <input type="number" id="qty" value="1" min="1" max="99" aria-label="Quantity">
            <button type="button" class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="product-detail-actions">
          <button type="button" class="btn btn-primary" id="add-to-order-detail">
            Add to Order
          </button>
          <button type="button" class="btn btn-whatsapp" id="order-whatsapp-detail">
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  // Quantity controls
  const qtyInput = document.getElementById("qty");
  document.getElementById("qty-minus").addEventListener("click", () => {
    const val = Math.max(1, parseInt(qtyInput.value, 10) - 1);
    qtyInput.value = val;
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    const val = Math.min(99, parseInt(qtyInput.value, 10) + 1);
    qtyInput.value = val;
  });

  document.getElementById("add-to-order-detail").addEventListener("click", () => {
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    addToCart(product.id, qty);
  });

  document.getElementById("order-whatsapp-detail").addEventListener("click", () => {
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    const msg = `Hello ${BUSINESS_NAME}!\n\nI would like to order:\n${qty} x ${product.name} — R${(product.price * qty).toFixed(0)}\n\nPlease let me know availability. Thank you!`;
    openWhatsApp(msg);
  });

  // Related products
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const relatedContainer = document.getElementById("related-products");
  if (relatedContainer) {
    if (related.length === 0) {
      relatedContainer.innerHTML = "";
    } else {
      relatedContainer.innerHTML = `
        <h2 class="section-title">You may also like</h2>
        <div class="product-grid">
          ${related.map(p => createProductCard(p, { showCategory: false })).join("")}
        </div>
      `;
      bindAddToOrderButtons(relatedContainer);
    }
  }
}

// ======================================
// ORDER PAGE
// ======================================

function initOrderPage() {
  const container = document.getElementById("order-items");
  const totalEl = document.getElementById("order-total");
  const form = document.getElementById("order-form");
  const emptyState = document.getElementById("order-empty");
  const orderContent = document.getElementById("order-content");

  if (!container) return;

  function renderOrder() {
    const cart = getCart();

    if (cart.length === 0) {
      if (emptyState) emptyState.style.display = "block";
      if (orderContent) orderContent.style.display = "none";
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (orderContent) orderContent.style.display = "block";

    container.innerHTML = cart.map(item => `
      <div class="order-item" data-id="${item.id}">
        <div class="order-item-image">
          <img src="${item.image}" alt="${item.name}"
               onerror="this.onerror=null;this.src='images/branding/placeholder.jpg';">
        </div>
        <div class="order-item-info">
          <h3>${item.name}</h3>
          <p class="order-item-price">${formatPrice(item.price)} each</p>
        </div>
        <div class="order-item-qty">
          <button type="button" class="qty-btn order-minus" data-id="${item.id}" aria-label="Decrease">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button type="button" class="qty-btn order-plus" data-id="${item.id}" aria-label="Increase">+</button>
        </div>
        <div class="order-item-subtotal">
          ${formatPrice(item.price * item.quantity)}
        </div>
        <button type="button" class="order-remove" data-id="${item.id}" aria-label="Remove item">
          &times;
        </button>
      </div>
    `).join("");

    if (totalEl) {
      totalEl.textContent = formatPrice(getCartTotal());
    }

    // Bind quantity buttons
    container.querySelectorAll(".order-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const cart = getCart();
        const item = cart.find(i => i.id === id);
        if (item) updateCartQuantity(id, item.quantity - 1);
        renderOrder();
      });
    });

    container.querySelectorAll(".order-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const cart = getCart();
        const item = cart.find(i => i.id === id);
        if (item) updateCartQuantity(id, item.quantity + 1);
        renderOrder();
      });
    });

    container.querySelectorAll(".order-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        removeFromCart(id);
        renderOrder();
      });
    });
  }

  renderOrder();

  // Clear order button
  const clearBtn = document.getElementById("clear-order");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Clear your entire order?")) {
        clearCart();
        renderOrder();
      }
    });
  }

  // Form submit → WhatsApp
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const cart = getCart();
      if (cart.length === 0) {
        alert("Your order is empty.");
        return;
      }

      const name = document.getElementById("customer-name").value.trim();
      const phone = document.getElementById("customer-phone").value.trim();
      const email = document.getElementById("customer-email").value.trim();
      const date = document.getElementById("customer-date").value;
      const method = document.getElementById("customer-method").value;
      const notes = document.getElementById("customer-notes").value.trim();

      if (!name || !phone) {
        alert("Please enter your name and WhatsApp/phone number.");
        return;
      }

      const message = buildOrderMessage({
        name,
        phone,
        email,
        date,
        method,
        notes
      });

      if (message) {
        openWhatsApp(message);
      }
    });
  }
}

// ======================================
// NEW ARRIVALS PAGE
// ======================================

function initNewArrivalsPage() {
  const grid = document.getElementById("new-arrivals-grid");
  if (!grid) return;

  const items = products.filter(p => p.isNew);
  if (items.length === 0) {
    grid.innerHTML = `<p class="empty-message">No new arrivals right now. Check back soon for fresh creations!</p>`;
    return;
  }

  grid.innerHTML = items.map(p => createProductCard(p)).join("");
  bindAddToOrderButtons(grid);
}

// ======================================
// SALE PAGE
// ======================================

function initSalePage() {
  const grid = document.getElementById("sale-grid");
  if (!grid) return;

  const items = products.filter(p => p.isSale);
  if (items.length === 0) {
    grid.innerHTML = `<p class="empty-message">No sale items at the moment. Follow us on Instagram for upcoming promotions!</p>`;
    return;
  }

  grid.innerHTML = items.map(p => createProductCard(p)).join("");
  bindAddToOrderButtons(grid);
}

// ======================================
// GALLERY PAGE + LIGHTBOX
// ======================================

function initGalleryPage() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = galleryImages.map((img, index) => `
    <button type="button" class="gallery-item" data-index="${index}" aria-label="View ${img.alt}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy"
           onerror="this.onerror=null;this.src='images/branding/placeholder.jpg';this.classList.add('img-fallback');">
    </button>
  `).join("");

  // Lightbox
  let currentIndex = 0;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Image lightbox");
  lightbox.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
    <button type="button" class="lightbox-prev" aria-label="Previous image">‹</button>
    <button type="button" class="lightbox-next" aria-label="Next image">›</button>
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-img">
      <p class="lightbox-counter"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const counter = lightbox.querySelector(".lightbox-counter");

  function openLightbox(index) {
    currentIndex = index;
    const img = galleryImages[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox(currentIndex);
  }

  grid.querySelectorAll(".gallery-item").forEach(btn => {
    btn.addEventListener("click", () => {
      openLightbox(parseInt(btn.dataset.index, 10));
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", showPrev);
  lightbox.querySelector(".lightbox-next").addEventListener("click", showNext);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });
}

// ======================================
// CONTACT FORM
// ======================================

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }

    let msg = `Hello ${BUSINESS_NAME}!\n\n`;
    msg += `Contact form message:\n\n`;
    msg += `Name: ${name}\n`;
    if (email) msg += `Email: ${email}\n`;
    if (phone) msg += `Phone: ${phone}\n`;
    if (subject) msg += `Subject: ${subject}\n`;
    msg += `\nMessage:\n${message}\n\nThank you!`;

    openWhatsApp(msg);
  });
}

// ======================================
// FAQ ACCORDION
// ======================================

function initFaq() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

// ======================================
// MOBILE NAVIGATION
// ======================================

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".nav-overlay");

  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.classList.remove("active");
    menu.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    toggle.classList.add("active");
    menu.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Close on link click
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// ======================================
// FLOATING WHATSAPP BUTTON
// ======================================

function initFloatingWhatsApp() {
  const btn = document.querySelector(".floating-whatsapp");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const msg = `Hello ${BUSINESS_NAME}! I would like to enquire about your products.`;
    openWhatsApp(msg);
  });
}

// ======================================
// ACTIVE NAV HIGHLIGHT
// ======================================

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ======================================
// PLACEHOLDER IMAGE FALLBACK
// Create a simple data URI fallback if needed
// ======================================

function ensurePlaceholder() {
  // CSS handles .img-fallback styling
}

// ======================================
// INIT ON DOM READY
// ======================================

document.addEventListener("DOMContentLoaded", () => {
  updateCartIndicator();
  initMobileNav();
  setActiveNav();
  initFloatingWhatsApp();
  ensurePlaceholder();

  // Page-specific inits
  const page = document.body.dataset.page;

  if (page === "home") {
    renderFeaturedProducts("featured-products");
    renderNewArrivals("home-new-arrivals", 4);
    renderSaleProducts("home-sale-products", 3);
  }

  if (page === "shop") {
    initShopPage();
  }

  if (page === "product") {
    initProductPage();
  }

  if (page === "order") {
    initOrderPage();
  }

  if (page === "new-arrivals") {
    initNewArrivalsPage();
  }

  if (page === "sale") {
    initSalePage();
  }

  if (page === "gallery") {
    initGalleryPage();
  }

  if (page === "contact") {
    initContactForm();
  }

  if (page === "faq") {
    initFaq();
  }
});
