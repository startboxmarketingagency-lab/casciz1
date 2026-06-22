/* === CaseCraft App - Shared Logic === */

// ============ PRODUCT DATA ============
const PRODUCTS = [
  { id:1, name:"Forest Green Matte", price:499, original:999, category:"hard", collection:"minimalist", badge:"New", colors:["#2e7d32","#1b5e20","#4caf50"], gradient:"linear-gradient(145deg, #e8f5e9, #c8e6c9)", desc:"Premium matte finish hard case with anti-slip grip. Military-grade drop protection up to 3 meters. Precise cutouts for all ports and buttons." },
  { id:2, name:"Sage Leaf Transparent", price:399, original:799, category:"soft", collection:"minimalist", badge:"Sale", colors:["#a5d6a7","#e8f5e9"], gradient:"linear-gradient(145deg, #f1f8e9, #dcedc8)", desc:"Crystal clear soft case with subtle sage tint. Ultra-slim profile at just 1.2mm. Scratch-resistant coating keeps it looking new." },
  { id:3, name:"Mint Breeze Soft Case", price:349, original:699, category:"soft", collection:"nature", badge:"", colors:["#80cbc4","#4db6ac","#b2dfdb"], gradient:"linear-gradient(145deg, #e0f2f1, #b2dfdb)", desc:"Silky smooth silicone case in refreshing mint. Raised edges for screen and camera protection. Lightweight and pocket-friendly." },
  { id:4, name:"Emerald Glass Premium", price:699, original:1299, category:"glass", collection:"minimalist", badge:"Hot", colors:["#388e3c","#1b5e20"], gradient:"linear-gradient(145deg, #f9fbe7, #f0f4c3)", desc:"Tempered glass back with emerald tint. 9H hardness rating. Anti-fingerprint oleophobic coating. Wireless charging compatible." },
  { id:5, name:"Bamboo Texture Grip", price:449, original:899, category:"hard", collection:"nature", badge:"", colors:["#8bc34a","#689f38"], gradient:"linear-gradient(145deg, #e8f5e9, #a5d6a7)", desc:"Natural bamboo-inspired textured case. Ergonomic grip design. Shock-absorbent TPU bumper. Eco-friendly materials." },
  { id:6, name:"Ocean Wave Silicone", price:299, original:599, category:"soft", collection:"trending", badge:"Sale", colors:["#4dd0e1","#26c6da","#80deea"], gradient:"linear-gradient(145deg, #e0f7fa, #b2ebf2)", desc:"Fluid wave pattern silicone case. Soft-touch matte finish. Full coverage button design. Available in ocean-inspired colors." },
  { id:7, name:"Botanical Print Case", price:549, original:1099, category:"hard", collection:"nature", badge:"", colors:["#7cb342","#558b2f"], gradient:"linear-gradient(145deg, #f1f8e9, #c5e1a5)", desc:"Hand-illustrated botanical print. UV-resistant ink that won't fade. Dual-layer protection with air cushion corners." },
  { id:8, name:"Army Green Rugged", price:599, original:1199, category:"hard", collection:"sports", badge:"New", colors:["#33691e","#558b2f","#689f38"], gradient:"linear-gradient(145deg, #e8f5e9, #dcedc8)", desc:"Heavy-duty rugged case for extreme protection. Multi-layer armor design. Built-in kickstand. MIL-STD-810G certified." },
  { id:9, name:"Pastel Dream Gradient", price:449, original:899, category:"glass", collection:"trending", badge:"", colors:["#a5d6a7","#81c784","#c8e6c9"], gradient:"linear-gradient(145deg, #e8f5e9, #f1f8e9)", desc:"Dreamy pastel gradient glass case. Smooth edge-to-edge print. Anti-yellowing technology. Slim and lightweight." },
  { id:10, name:"Geometric Pattern", price:399, original:799, category:"hard", collection:"anime", badge:"", colors:["#66bb6a","#43a047"], gradient:"linear-gradient(145deg, #e8f5e9, #dcedc8)", desc:"Bold geometric pattern design. Raised lip for camera protection. Precise cutouts. Impact-resistant polycarbonate shell." },
  { id:11, name:"Clear Shield Ultra", price:349, original:699, category:"soft", collection:"minimalist", badge:"Sale", colors:["#e8f5e9","#c8e6c9"], gradient:"linear-gradient(145deg, #fafffe, #e8f5e9)", desc:"Ultra-clear transparent case. Anti-yellowing formula lasts 12+ months. Air corner technology for drop protection." },
  { id:12, name:"Mountain Landscape", price:499, original:999, category:"glass", collection:"nature", badge:"", colors:["#2e7d32","#81c784"], gradient:"linear-gradient(145deg, #e0f2f1, #c8e6c9)", desc:"Stunning mountain landscape art case. HD printing with vibrant colors. Tempered glass back. Wireless charging safe." },
  { id:13, name:"Carbon Fiber Sport", price:649, original:1299, category:"hard", collection:"sports", badge:"Hot", colors:["#1b5e20","#33691e"], gradient:"linear-gradient(145deg, #e8f5e9, #c8e6c9)", desc:"Real carbon fiber texture. Ultra-grip side panels. Lightweight at just 28g. Perfect for active lifestyles." },
  { id:14, name:"Floral Garden Glass", price:599, original:1199, category:"glass", collection:"trending", badge:"", colors:["#66bb6a","#a5d6a7"], gradient:"linear-gradient(145deg, #f1f8e9, #e8f5e9)", desc:"Beautiful floral garden design. Premium tempered glass. Anti-fingerprint coating. Full edge protection." },
  { id:15, name:"Minimal Line Art", price:399, original:799, category:"soft", collection:"anime", badge:"New", colors:["#4caf50","#81c784"], gradient:"linear-gradient(145deg, #f9fbe7, #f1f8e9)", desc:"Clean minimal line art design. Soft matte finish. Flexible TPU material. Easy to install and remove." },
  { id:16, name:"Neon Green Glow", price:449, original:899, category:"soft", collection:"trending", badge:"", colors:["#76ff03","#64dd17","#b2ff59"], gradient:"linear-gradient(145deg, #f9fbe7, #f0f4c3)", desc:"Eye-catching neon green case. Glow-in-the-dark effect. Soft silicone construction. Stand out from the crowd." },
];

const CATEGORIES = [
  { id:"hard", name:"Hard Cases", desc:"Maximum protection", gradient:"linear-gradient(135deg, #a8e6cf, #88d4ab)" },
  { id:"soft", name:"Soft Cases", desc:"Flexible & lightweight", gradient:"linear-gradient(135deg, #b8d8be, #7fb890)" },
  { id:"glass", name:"Glass Back", desc:"Premium finish", gradient:"linear-gradient(135deg, #c5e8d5, #96c9ae)" },
  { id:"custom", name:"Custom Cases", desc:"Your design, your way", gradient:"linear-gradient(135deg, #d4f0e0, #a3d9bf)" },
];

const COLLECTIONS = [
  { id:"minimalist", name:"Minimalist", gradient:"linear-gradient(135deg, #c8e6c9, #81c784)" },
  { id:"anime", name:"Anime Series", gradient:"linear-gradient(135deg, #a5d6a7, #66bb6a)" },
  { id:"sports", name:"Sports Edition", gradient:"linear-gradient(135deg, #b9dbbe, #7cc48e)" },
  { id:"nature", name:"Nature Vibes", gradient:"linear-gradient(135deg, #dcedc1, #a5c97d)" },
  { id:"trending", name:"Trending Now", gradient:"linear-gradient(135deg, #b2dfdb, #80cbc4)" },
  { id:"combo", name:"Combo Deals", gradient:"linear-gradient(135deg, #c5e1a5, #9ccc65)" },
];

const PHONE_BRANDS = {
  "Apple": ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone SE (3rd Gen)", "iPhone SE (2nd Gen)"],
  "Samsung": ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE", "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy Z Fold 5", "Galaxy Z Flip 5", "Galaxy A54", "Galaxy A34", "Galaxy A14", "Galaxy M54", "Galaxy M34", "Galaxy M14"],
  "Nothing": ["Nothing Phone (2)", "Nothing Phone (2a)", "Nothing Phone (1)"],
  "OnePlus": ["OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus 11R", "OnePlus Nord 3", "OnePlus Nord CE 3", "OnePlus Nord CE 3 Lite", "OnePlus Nord N30", "OnePlus 10 Pro", "OnePlus 10T", "OnePlus Nord 2T"],
  "Redmi": ["Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro+", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi 13C", "Redmi 12", "Redmi 12C", "Redmi A3"],
  "Realme": ["Realme GT 5 Pro", "Realme GT Neo 5", "Realme 12 Pro+", "Realme 12 Pro", "Realme 12", "Realme 11 Pro+", "Realme 11 Pro", "Realme 11", "Realme Narzo 60 Pro", "Realme Narzo 60", "Realme C67", "Realme C55"],
  "Motorola": ["Motorola Edge 50 Ultra", "Motorola Edge 50 Pro", "Motorola Edge 40 Pro", "Motorola Edge 40", "Motorola Razr 40 Ultra", "Motorola Razr 40", "Motorola G84", "Motorola G54", "Motorola G34", "Motorola G24", "Motorola E13"],
  "Oppo": ["Oppo Find X7 Ultra", "Oppo Find X7", "Oppo Reno 11 Pro", "Oppo Reno 11", "Oppo Reno 10 Pro+", "Oppo Reno 10 Pro", "Oppo Reno 10", "Oppo A79", "Oppo A78", "Oppo A58", "Oppo A38", "Oppo F25 Pro"],
  "Vivo": ["Vivo X100 Pro", "Vivo X100", "Vivo V30 Pro", "Vivo V30", "Vivo V29 Pro", "Vivo V29", "Vivo T2 Pro", "Vivo T2", "Vivo Y200 Pro", "Vivo Y200", "Vivo Y100", "Vivo Y36"],
  "Google Pixel": ["Pixel 8 Pro", "Pixel 8", "Pixel 8a", "Pixel 7 Pro", "Pixel 7", "Pixel 7a", "Pixel 6 Pro", "Pixel 6", "Pixel 6a"],
  "iQOO": ["iQOO 12", "iQOO 12 Pro", "iQOO Neo 9 Pro", "iQOO Neo 7 Pro", "iQOO Z9", "iQOO Z9 Pro", "iQOO Z7 Pro", "iQOO Z7"]
};

const BUNDLE_PRICING = {
  "Metal Case": {
    1: 349,
    2: 569,
    3: 799,
    4: 999
  },
  "Glass Case": {
    1: 399,
    2: 599,
    3: 859,
    4: 1159
  }
};

function getBundlePrice(caseType, quantity) {
  if (quantity > 4) quantity = 4;
  return BUNDLE_PRICING[caseType][quantity] || BUNDLE_PRICING[caseType][1] * quantity;
}

function getRegularPrice(caseType, quantity) {
  const singlePrice = caseType === "Metal Case" ? 349 : 399;
  return singlePrice * quantity;
}

function getSavings(caseType, quantity) {
  return getRegularPrice(caseType, quantity) - getBundlePrice(caseType, quantity);
}

// ============ CART MANAGEMENT ============
const Cart = {
  getItems() {
    return JSON.parse(localStorage.getItem('casecraft_cart') || '[]');
  },
  saveItems(items) {
    localStorage.setItem('casecraft_cart', JSON.stringify(items));
    this.updateBadge();
  },
  // Each cart item = one case: { id, productName, caseType, phoneModel, uid }
  addItem(productId, caseType, phoneModels) {
    const items = this.getItems();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    phoneModels.forEach(model => {
      const uid = `${productId}-${caseType}-${model}-${Date.now()}-${Math.random()}`;
      items.push({
        id: productId,
        productName: product.name,
        caseType,
        phoneModel: model,
        uid
      });
    });
    
    this.saveItems(items);
    showToast(`Added ${phoneModels.length} case${phoneModels.length > 1 ? 's' : ''} to cart!`);
  },
  removeItem(uid) {
    let items = this.getItems();
    items = items.filter(i => i.uid !== uid);
    this.saveItems(items);
  },
  clear() {
    localStorage.setItem('casecraft_cart', '[]');
    this.updateBadge();
  },
  // Group items by case type and calculate bundle pricing
  getCartSummary() {
    const items = this.getItems();
    const groups = {};
    
    // Group by caseType
    items.forEach(item => {
      if (!groups[item.caseType]) {
        groups[item.caseType] = [];
      }
      groups[item.caseType].push(item);
    });
    
    let totalRegular = 0;
    let totalBundle = 0;
    let totalSavings = 0;
    const groupDetails = [];
    
    Object.keys(groups).forEach(caseType => {
      const groupItems = groups[caseType];
      const qty = groupItems.length;
      const singlePrice = caseType === "Metal Case" ? 349 : 399;
      const regularPrice = singlePrice * qty;
      const bundlePrice = getBundlePrice(caseType, qty);
      const savings = regularPrice - bundlePrice;
      
      totalRegular += regularPrice;
      totalBundle += bundlePrice;
      totalSavings += savings;
      
      groupDetails.push({
        caseType,
        items: groupItems,
        qty,
        regularPrice,
        bundlePrice,
        savings
      });
    });
    
    return {
      items,
      totalItems: items.length,
      groups: groupDetails,
      totalRegular,
      totalBundle,
      totalSavings
    };
  },
  getCount() {
    return this.getItems().length;
  },
  updateBadge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = this.getCount();
    });
  }
};

// ============ AUTH MANAGEMENT ============
const Auth = {
  getUser() {
    return JSON.parse(localStorage.getItem('casecraft_user') || 'null');
  },
  login(email, name) {
    const user = { email, name: name || email.split('@')[0], loggedIn: true };
    localStorage.setItem('casecraft_user', JSON.stringify(user));
    this.updateUI();
    return user;
  },
  logout() {
    localStorage.removeItem('casecraft_user');
    this.updateUI();
  },
  isLoggedIn() {
    return !!this.getUser();
  },
  updateUI() {
    const user = this.getUser();
    document.querySelectorAll('.user-greeting').forEach(el => {
      el.textContent = user ? `Hi, ${user.name}` : '';
    });
    document.querySelectorAll('.auth-link-text').forEach(el => {
      el.textContent = user ? 'Account' : 'Login';
    });
  }
};

// ============ SEARCH ============
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.collection.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  );
}

function filterProducts(filters = {}) {
  let results = [...PRODUCTS];
  if (filters.category) results = results.filter(p => p.category === filters.category);
  if (filters.collection) results = results.filter(p => p.collection === filters.collection);
  if (filters.minPrice) results = results.filter(p => p.price >= filters.minPrice);
  if (filters.maxPrice) results = results.filter(p => p.price <= filters.maxPrice);
  if (filters.sort === 'price-low') results.sort((a,b) => a.price - b.price);
  if (filters.sort === 'price-high') results.sort((a,b) => b.price - a.price);
  if (filters.sort === 'name') results.sort((a,b) => a.name.localeCompare(b.name));
  return results;
}

// ============ TOAST ============
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg><span></span>';
    document.body.appendChild(toast);
  }
  toast.querySelector('span').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============ RENDER HELPERS ============
function renderProductCard(product) {
  const discount = Math.round((1 - product.price / product.original) * 100);
  return `
    <div class="product-card reveal" onclick="window.location.href='product-detail.html?id=${product.id}'">
      ${product.badge ? `<span class="product-badge ${product.badge === 'Sale' ? 'sale' : ''}">${product.badge}</span>` : ''}
      <div class="product-image">
        <div class="product-image-bg" style="background: ${product.gradient};"></div>
        <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${product.id})">+ Quick Add</button>
      </div>
      <div class="product-info">
        <h4>${product.name}</h4>
        <div class="product-price">
          <span class="current">₹${product.price}</span>
          <span class="original">₹${product.original}</span>
          <span class="discount">${discount}% OFF</span>
        </div>
        <div class="product-colors">
          ${product.colors.map(c => `<span class="color-dot" style="background:${c};"></span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function addToCart(productId) {
  Cart.addItem(productId, 'Glass Case', ['iPhone 15 Pro Max']);
}

// ============ INIT ============
function initApp() {
  Cart.updateBadge();
  Auth.updateUI();

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile menu
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileNav.querySelector('.mobile-nav-close')?.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.addEventListener('click', (e) => { if (e.target === mobileNav) mobileNav.classList.remove('open'); });
  }

  // Header search
  const searchBtn = document.querySelector('.header-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      window.location.href = 'search.html';
    });
  }
}

document.addEventListener('DOMContentLoaded', initApp);
