// ===== KOILA BABA CROCHET - MAIN SCRIPT =====

const WHATSAPP_NUMBER = '8638733586';

// ===== DEFAULT PRODUCTS DATA =====
const DEFAULT_PRODUCTS = [
  // Characters
  { id: 1, name: 'Bunny Bouquet', emoji: '🐰', category: 'characters', price: 380, description: 'Adorable bunny holding a spring flower arrangement' },
  { id: 2, name: 'Teddy Bear', emoji: '🧸', category: 'characters', price: 420, description: 'Huggable bear holding a mini bouquet with love' },
  { id: 3, name: 'Hello Kitty', emoji: '🐱', category: 'characters', price: 390, description: 'Cute kitty crocheted with care and pink accents' },
  { id: 4, name: 'Little Owl', emoji: '🦉', category: 'characters', price: 360, description: 'Wise little owl with a tiny flower crown' },
  { id: 5, name: 'Sweet Elephant', emoji: '🐘', category: 'characters', price: 400, description: 'Gentle elephant with a bouquet of mini blooms' },
  { id: 6, name: 'Floppy Bunny', emoji: '🐇', category: 'characters', price: 370, description: 'Floppy-eared bunny in soft pastel yarn' },
  { id: 7, name: 'Baby Dino', emoji: '🦕', category: 'characters', price: 380, description: 'Cute dinosaur with a floral wreath around its neck' },
  { id: 8, name: 'Little Lamb', emoji: '🐑', category: 'characters', price: 360, description: 'Sweet white lamb with a ribbon and flower' },
  // Bouquet
  { id: 9, name: 'Spring Bouquet', emoji: '💐', category: 'bouquet', price: 450, description: 'Full spring bouquet with mixed blooms and ribbon' },
  { id: 10, name: 'Rose Bunch', emoji: '🌹', category: 'bouquet', price: 520, description: 'Classic crimson rose bunch in kraft wrap' },
  { id: 11, name: 'Pastel Mix', emoji: '🌸', category: 'bouquet', price: 480, description: 'Soft pastel blooms in a velvet-wrapped bundle' },
  { id: 12, name: 'Sunflower Delight', emoji: '🌻', category: 'bouquet', price: 400, description: 'Bright sunflowers with jute twine wrapping' },
  { id: 13, name: 'Lavender Dreams', emoji: '💜', category: 'bouquet', price: 430, description: 'Lavender and white blooms in lace wrap' },
  { id: 14, name: 'Mini Wildflowers', emoji: '🌼', category: 'bouquet', price: 380, description: 'Tiny wildflower cluster tied with satin ribbon' },
  // Pipe Cleaner Flowers
  { id: 15, name: 'Pipe Cleaner Bouquet', emoji: '🌺', category: 'pipe-cleaner', price: 180, description: 'Mini mixed bouquet of pipe cleaner flowers' },
  { id: 16, name: 'Pipe Cleaner Lily', emoji: '🌷', category: 'pipe-cleaner', price: 60, description: 'Elegant white lily crafted from pearl pipe cleaners' },
  { id: 17, name: 'PC Sunflower', emoji: '🌻', category: 'pipe-cleaner', price: 70, description: 'Cheerful sunflower in bright yellow pipe cleaner' },
  { id: 18, name: 'PC Rose', emoji: '🌹', category: 'pipe-cleaner', price: 80, description: 'Beautiful rose crafted from soft red pipe cleaners' },
  // Accessories
  { id: 19, name: 'Crochet Hairband', emoji: '🎀', category: 'accessories', price: 120, description: 'Handmade hairband with crochet flower detail' },
  { id: 20, name: 'Floral Brooch', emoji: '📌', category: 'accessories', price: 90, description: 'Dainty crochet flower brooch for bags or clothes' },
  { id: 21, name: 'Hair Clip Set', emoji: '✨', category: 'accessories', price: 110, description: 'Set of 3 crochet flower hair clips' },
  { id: 22, name: 'Wrist Corsage', emoji: '💍', category: 'accessories', price: 150, description: 'Elegant crochet corsage on elastic wristband' },
  // Bags
  { id: 23, name: 'Mini Tote', emoji: '👜', category: 'bags', price: 380, description: 'Handcrocheted mini tote in natural cotton yarn' },
  { id: 24, name: 'Flower Pouch', emoji: '🌸', category: 'bags', price: 260, description: 'Floral-patterned crochet pouch with zipper' },
  { id: 25, name: 'Market Basket', emoji: '🧺', category: 'bags', price: 520, description: 'Classic market basket crocheted from jute yarn' },
  // Charms
  { id: 26, name: 'Crochet Strawberry', emoji: '🍓', category: 'charms', price: 80, description: 'Tiny strawberry charm for bags or keys' },
  { id: 27, name: 'Mini Mushroom', emoji: '🍄', category: 'charms', price: 75, description: 'Adorable toadstool crochet keychain charm' },
  { id: 28, name: 'Flower Charm', emoji: '🌸', category: 'charms', price: 70, description: 'Sweet crochet bloom to clip anywhere' },
  { id: 29, name: 'Rainbow Cloud', emoji: '⛅', category: 'charms', price: 85, description: 'Pastel rainbow cloud crochet charm' },
];

// ===== FLOWERS BUILDER DATA =====
const FLOWERS_DATA = [
  { id: 'f1', name: 'Crimson Rose', emoji: '🌹', price: 120 },
  { id: 'f2', name: 'Blush Peony', emoji: '🌸', price: 140 },
  { id: 'f3', name: 'Sunlit Daisy', emoji: '🌼', price: 90 },
  { id: 'f4', name: 'Lavender Bloom', emoji: '💜', price: 110 },
  { id: 'f5', name: 'Ivory Magnolia', emoji: '🤍', price: 160 },
  { id: 'f6', name: 'Wild Sunflower', emoji: '🌻', price: 100 },
  { id: 'f7', name: 'Blue Hydrangea', emoji: '💙', price: 130 },
  { id: 'f8', name: 'Dusty Tulip', emoji: '🌷', price: 120 },
];

const WRAPPERS_DATA = [
  { id: 'w1', name: 'Kraft Paper', emoji: '📜', price: 50 },
  { id: 'w2', name: 'Satin Ribbon', emoji: '🎀', price: 80 },
  { id: 'w3', name: 'Jute Twine', emoji: '🪢', price: 60 },
  { id: 'w4', name: 'Velvet Wrap', emoji: '🟥', price: 100 },
  { id: 'w5', name: 'Gift Box', emoji: '📦', price: 120 },
  { id: 'w6', name: 'Lace Wrap', emoji: '🤍', price: 90 },
];

const EXTRAS_DATA = [
  { id: 'e1', name: 'Gold Bow', emoji: '🎗️', price: 40 },
  { id: 'e2', name: 'Tissue Paper', emoji: '🗒️', price: 25 },
  { id: 'e3', name: 'Greeting Card', emoji: '💌', price: 55 },
  { id: 'e4', name: "Baby's Breath", emoji: '🌿', price: 55 },
  { id: 'e5', name: 'Dried Leaves', emoji: '🍂', price: 45 },
  { id: 'e6', name: 'Scent Sachet', emoji: '🌿', price: 60 },
];

// ===== LOCAL STORAGE HELPERS =====
function getProducts() {
  const stored = localStorage.getItem('kbc_products');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  localStorage.setItem('kbc_products', JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem('kbc_products', JSON.stringify(products));
}

function getNextId() {
  const products = getProducts();
  return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
}

// ===== WHATSAPP HELPERS =====
function buildWhatsAppURL(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function orderProduct(name, price) {
  const msg = `Hi Koila Baba Crochet! 🌸\n\nI'd like to order:\n• ${name} — ₹${price}\n\nPlease confirm availability and delivery details. Thank you!`;
  window.open(buildWhatsAppURL(msg), '_blank');
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== NAVBAR / HAMBURGER =====
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== PRODUCT CARD HTML =====
function createProductCardHTML(product) {
  return `
    <div class="product-card">
      <div class="product-card-img">
        <span class="product-badge">${getCategoryLabel(product.category)}</span>
        <span style="font-size:52px">${product.emoji}</span>
      </div>
      <div class="product-card-body">
        <h4>${product.name}</h4>
        <p class="desc">${product.description}</p>
        <div class="product-card-footer">
          <span class="price">₹${product.price}</span>
          <a class="btn-order" href="#" onclick="orderProduct('${product.name.replace(/'/g,"\\'")}', ${product.price}); return false;">
            <span>⊕</span> ORDER
          </a>
        </div>
      </div>
    </div>
  `;
}

function getCategoryLabel(cat) {
  const map = {
    'characters': 'Character',
    'bouquet': 'Bouquet',
    'pipe-cleaner': 'Pipe Cleaner',
    'accessories': 'Accessory',
    'bags': 'Bag',
    'charms': 'Charm'
  };
  return map[cat] || cat;
}

// ===== INIT BASED ON PAGE =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'shop') initShop();
  if (page === 'flowers') initFlowers();
  if (page === 'admin') initAdmin();
});

// ===== HOME PAGE =====
function initHome() {
  renderFeaturedProducts();
}

function renderFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;
  const products = getProducts().slice(0, 4);
  container.innerHTML = products.map(createProductCardHTML).join('');
}
// ===== SHOP PAGE =====
let currentCategory = 'all';

function initShop() {
  renderShopProducts();
  setupCategoryFilter();
}

function setupCategoryFilter() {
  const btns = document.querySelectorAll('.cat-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      updateCatIndicator(btn.dataset.cat);
      renderShopProducts();
    });
  });
}

function updateCatIndicator(cat) {
  const cats = ['all','characters','bouquet','pipe-cleaner','accessories','bags','charms'];
  const idx = cats.indexOf(cat);
  document.querySelectorAll('.cat-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

function renderShopProducts() {
  const products = getProducts();
  const filtered = currentCategory === 'all' ? products : products.filter(p => p.category === currentCategory);
  
  const labels = {
    'all': 'All Items',
    'characters': 'Characters',
    'bouquet': 'Bouquet',
    'pipe-cleaner': 'Pipe Cleaner Flowers',
    'accessories': 'Accessories',
    'bags': 'Bags',
    'charms': 'Charms'
  };

  const titleEl = document.getElementById('grid-title');
  const countEl = document.getElementById('grid-count');
  const gridEl = document.getElementById('product-grid');
  
  if (titleEl) titleEl.textContent = labels[currentCategory] || 'All Items';
  if (countEl) countEl.textContent = `${filtered.length} items`;
  if (gridEl) {
    if (filtered.length === 0) {
      gridEl.innerHTML = '<div class="no-products">No products in this category yet.</div>';
    } else {
      gridEl.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }
}

// ===== FLOWERS BUILDER =====
let selectedFlowers = [];
let selectedWrapper = null;
let selectedExtras = [];

function initFlowers() {
  renderFlowers();
  renderWrappers();
  renderExtras();
  updateSummary();
}

function renderFlowers() {
  const container = document.getElementById('flowers-grid');
  if (!container) return;
  container.innerHTML = FLOWERS_DATA.map(f => `
    <div class="item-card" id="flower-${f.id}" onclick="toggleFlower('${f.id}')">
      <span class="item-emoji">${f.emoji}</span>
      <span class="item-name">${f.name}</span>
      <span class="item-price">₹${f.price}</span>
    </div>
  `).join('');
}

function renderWrappers() {
  const container = document.getElementById('wrappers-grid');
  if (!container) return;
  container.innerHTML = WRAPPERS_DATA.map(w => `
    <div class="item-card" id="wrapper-${w.id}" onclick="selectWrapper('${w.id}')">
      <span class="item-emoji">${w.emoji}</span>
      <span class="item-name">${w.name}</span>
      <span class="item-price">₹${w.price}</span>
    </div>
  `).join('');
}

function renderExtras() {
  const container = document.getElementById('extras-grid');
  if (!container) return;
  container.innerHTML = EXTRAS_DATA.map(e => `
    <div class="item-card" id="extra-${e.id}" onclick="toggleExtra('${e.id}')">
      <span class="item-emoji">${e.emoji}</span>
      <span class="item-name">${e.name}</span>
      <span class="item-price">₹${e.price}</span>
    </div>
  `).join('');
}

function toggleFlower(id) {
  const idx = selectedFlowers.indexOf(id);
  if (idx > -1) {
    selectedFlowers.splice(idx, 1);
    document.getElementById('flower-' + id)?.classList.remove('selected');
  } else {
    selectedFlowers.push(id);
    document.getElementById('flower-' + id)?.classList.add('selected');
  }
  updateSummary();
}

function selectWrapper(id) {
  if (selectedWrapper) {
    document.getElementById('wrapper-' + selectedWrapper)?.classList.remove('selected');
  }
  if (selectedWrapper === id) {
    selectedWrapper = null;
  } else {
    selectedWrapper = id;
    document.getElementById('wrapper-' + id)?.classList.add('selected');
  }
  updateSummary();
}

function toggleExtra(id) {
  const idx = selectedExtras.indexOf(id);
  if (idx > -1) {
    selectedExtras.splice(idx, 1);
    document.getElementById('extra-' + id)?.classList.remove('selected');
  } else {
    selectedExtras.push(id);
    document.getElementById('extra-' + id)?.classList.add('selected');
  }
  updateSummary();
}

function updateSummary() {
  let total = 0;
  const parts = [];

  const flowers = selectedFlowers.map(id => FLOWERS_DATA.find(f => f.id === id)).filter(Boolean);
  flowers.forEach(f => { total += f.price; parts.push(`${f.emoji} ${f.name}`); });

  if (selectedWrapper) {
    const w = WRAPPERS_DATA.find(w => w.id === selectedWrapper);
    if (w) { total += w.price; parts.push(`${w.emoji} ${w.name} (wrapper)`); }
  }

  const extras = selectedExtras.map(id => EXTRAS_DATA.find(e => e.id === id)).filter(Boolean);
  extras.forEach(e => { total += e.price; parts.push(`${e.emoji} ${e.name}`); });

  const totalEl = document.getElementById('bouquet-total');
  const itemsEl = document.getElementById('bouquet-items');
  const emptyEl = document.getElementById('bouquet-empty');

  if (totalEl) totalEl.textContent = `₹${total}`;
  if (itemsEl) {
    if (parts.length > 0) {
      itemsEl.style.display = 'block';
      itemsEl.textContent = parts.join(', ');
      if (emptyEl) emptyEl.style.display = 'none';
    } else {
      itemsEl.style.display = 'none';
      if (emptyEl) emptyEl.style.display = 'block';
    }
  }
}

function orderBouquet() {
  const flowers = selectedFlowers.map(id => FLOWERS_DATA.find(f => f.id === id)).filter(Boolean);
  const wrapper = selectedWrapper ? WRAPPERS_DATA.find(w => w.id === selectedWrapper) : null;
  const extras = selectedExtras.map(id => EXTRAS_DATA.find(e => e.id === id)).filter(Boolean);

  if (flowers.length === 0) {
    showToast('Please select at least one flower 🌸');
    return;
  }
  if (!wrapper) {
    showToast('Please choose a wrapper 🎀');
    return;
  }

  let total = 0;
  let lines = ['*Custom Bouquet Order* 🌸\n'];
  
  lines.push('*Flowers:*');
  flowers.forEach(f => { lines.push(`  • ${f.emoji} ${f.name} — ₹${f.price}`); total += f.price; });
  
  lines.push(`\n*Wrapper:*\n  • ${wrapper.emoji} ${wrapper.name} — ₹${wrapper.price}`);
  total += wrapper.price;
  
  if (extras.length > 0) {
    lines.push('\n*Extras:*');
    extras.forEach(e => { lines.push(`  • ${e.emoji} ${e.name} — ₹${e.price}`); total += e.price; });
  }

  lines.push(`\n*Total: ₹${total}*`);
  lines.push('\nPlease confirm availability and delivery. Thank you! 🌹');

  window.open(buildWhatsAppURL(lines.join('\n')), '_blank');
}

// ===== ADMIN PAGE =====
const ADMIN_PASSWORD = '234123';

function initAdmin() {
  const loginSection = document.getElementById('admin-login');
  const panelSection = document.getElementById('admin-panel');
  const isLoggedIn = sessionStorage.getItem('kbc_admin') === 'true';

  if (isLoggedIn) {
    if (loginSection) loginSection.style.display = 'none';
    if (panelSection) panelSection.style.display = 'block';
    renderAdminDashboard();
  } else {
    if (loginSection) loginSection.style.display = 'flex';
    if (panelSection) panelSection.style.display = 'none';
  }
}

function adminLogin() {
  const input = document.getElementById('admin-password');
  const error = document.getElementById('login-error');
  if (!input) return;

  if (input.value === ADMIN_PASSWORD) {
    sessionStorage.setItem('kbc_admin', 'true');
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    renderAdminDashboard();
  } else {
    if (error) { error.style.display = 'block'; error.textContent = 'Incorrect password. Try again.'; }
    input.value = '';
    input.focus();
  }
}

function adminLogout() {
  sessionStorage.removeItem('kbc_admin');
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-panel').style.display = 'none';
}

function renderAdminDashboard() {
  const products = getProducts();
  const cats = { flowers: 0, characters: 0, occasions: 0, bases: 0, extras: 0 };
  products.forEach(p => {
    if (['bouquet','pipe-cleaner'].includes(p.category)) cats.flowers++;
    if (p.category === 'characters') cats.characters++;
  });

  setEl('stat-total', products.length);
  setEl('stat-flowers', products.filter(p => ['bouquet','pipe-cleaner'].includes(p.category)).length);
  setEl('stat-characters', products.filter(p => p.category === 'characters').length);
  setEl('stat-occasions', products.filter(p => p.category === 'accessories').length);
  setEl('stat-bags', products.filter(p => p.category === 'bags').length);
  setEl('stat-extras', products.filter(p => p.category === 'charms').length);

  renderAdminProducts(products.slice().reverse().slice(0, 6), 'recent-products-list');
}

function setEl(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderAdminProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map(p => `
    <div class="admin-product-card">
      <div class="admin-product-emoji-wrap">${p.emoji}</div>
      <div class="admin-product-info">
        <h4>${p.name}</h4>
        <div class="admin-price">₹${p.price}</div>
      </div>
      <div class="admin-product-actions">
        <button class="btn-edit" onclick="openEditModal(${p.id})">Edit</button>
        <button class="btn-delete" onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function renderAllAdminProducts() {
  const products = getProducts();
  const container = document.getElementById('all-products-list');
  if (!container) return;
  renderAdminProducts(products, 'all-products-list');
  container.parentElement.style.display = 'flex';
  document.getElementById('all-products-section').style.display = 'block';
  document.getElementById('recent-products-section').style.display = 'none';
}

function openAddModal() {
  const modal = document.getElementById('product-modal');
  const title = document.getElementById('modal-title');
  if (!modal) return;
  clearForm();
  if (title) title.textContent = 'Add New Product';
  document.getElementById('modal-product-id').value = '';
  modal.classList.add('open');
}

function openEditModal(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-product-id').value = p.id;
  document.getElementById('modal-name').value = p.name;
  document.getElementById('modal-emoji').value = p.emoji;
  document.getElementById('modal-price').value = p.price;
  document.getElementById('modal-category').value = p.category;
  document.getElementById('modal-description').value = p.description;
  document.getElementById('modal-title').textContent = 'Edit Product';
  document.getElementById('product-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('open');
}

function clearForm() {
  ['modal-name','modal-emoji','modal-price','modal-description'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function saveProduct() {
  const id = document.getElementById('modal-product-id').value;
  const name = document.getElementById('modal-name').value.trim();
  const emoji = document.getElementById('modal-emoji').value.trim();
  const price = parseInt(document.getElementById('modal-price').value);
  const category = document.getElementById('modal-category').value;
  const description = document.getElementById('modal-description').value.trim();

  if (!name || !emoji || !price || !category) {
    showToast('Please fill all required fields');
    return;
  }

  let products = getProducts();
  if (id) {
    products = products.map(p => p.id === parseInt(id) ? { ...p, name, emoji, price, category, description } : p);
    showToast('Product updated! ✓');
  } else {
    products.push({ id: getNextId(), name, emoji, price, category, description });
    showToast('Product added! ✓');
  }

  saveProducts(products);
  closeModal();
  renderAdminDashboard();
  
  const allSection = document.getElementById('all-products-section');
  if (allSection && allSection.style.display !== 'none') {
    renderAllAdminProducts();
  }
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  saveProducts(products);
  showToast('Product deleted');
  renderAdminDashboard();
  
  const allSection = document.getElementById('all-products-section');
  if (allSection && allSection.style.display !== 'none') {
    renderAllAdminProducts();
  }
}

function resetAllProducts() {
  if (!confirm('Reset all products to defaults? This cannot be undone.')) return;
  saveProducts(DEFAULT_PRODUCTS);
  showToast('Products reset to defaults ✓');
  renderAdminDashboard();
  document.getElementById('all-products-section').style.display = 'none';
  document.getElementById('recent-products-section').style.display = 'block';
}

// Enter key for login
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.body.dataset.page === 'admin') {
    const loginVisible = document.getElementById('admin-login')?.style.display !== 'none';
    if (loginVisible) adminLogin();
  }
});