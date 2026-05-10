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
