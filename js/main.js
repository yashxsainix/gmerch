const PRODUCTS = [
  {
    id: 'dog-hoodie-explorer',
    type: 'dog',
    name: 'Paw-some Explorer',
    description: 'A cloud-soft hoodie for brave little sniff adventurers and park princes.',
    price: 29.99,
    size: ['S', 'M', 'L'],
    color: 'Pink',
    accent: '#FF9EC8',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    alt: 'Cute dog styled like it is wearing a pastel hoodie.'
  },
  {
    id: 'cat-bandana-princess',
    type: 'cat',
    name: 'Meowgic Princess',
    description: 'A dainty twirl-ready bandana with storybook sparkle and royal cat energy.',
    price: 14.99,
    size: ['S', 'M'],
    color: 'Lavender',
    accent: '#E0BBE4',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80',
    alt: 'Cute cat posed with a stylish bandana-inspired look.'
  },
  {
    id: 'dog-raincoat-splashy',
    type: 'dog',
    name: 'Splashy Paws',
    description: 'Sunshiny rainy-day charm with puddle-jumping confidence and splash-proof cuteness.',
    price: 32.99,
    size: ['M', 'L'],
    color: 'Yellow',
    accent: '#FFE66D',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80',
    alt: 'Happy dog styled for a raincoat-themed product card.'
  },
  {
    id: 'cat-sweater-cozy',
    type: 'cat',
    name: 'Cozy Whiskers',
    description: 'The cuddle-approved knit look for nap champions and window-watch icons.',
    price: 27.99,
    size: ['S', 'M', 'L'],
    color: 'Mint',
    accent: '#B5EAD7',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
    alt: 'Relaxed cat styled like it is wearing a cozy sweater.'
  },
  {
    id: 'dog-bandana-goodboy',
    type: 'dog',
    name: 'Good Boy Club',
    description: 'A classic neckerchief moment for biscuit earners, tail waggers, and photo stars.',
    price: 12.99,
    size: ['S', 'M', 'L'],
    color: 'Sky Blue',
    accent: '#A2E8FF',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    alt: 'Cute dog styled for a bandana-inspired product card.'
  },
  {
    id: 'cat-collar-sparkle',
    type: 'cat',
    name: 'Sparkle Queen',
    description: 'A tiny glam collar with princess glitter vibes for the queen of the couch.',
    price: 18.99,
    size: ['S', 'M'],
    color: 'Pink',
    accent: '#FF9EC8',
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    alt: 'Cute cat styled like it is wearing a sparkly collar.'
  },
  {
    id: 'dog-tee-treat',
    type: 'dog',
    name: 'Treat Yourself',
    description: 'A pastel tee for snack-time celebrities, stroller babies, and brunch pups.',
    price: 24.99,
    size: ['S', 'M', 'L'],
    color: 'Mint',
    accent: '#B5EAD7',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    alt: 'Stylish dog posed for a playful pet t-shirt product card.'
  },
  {
    id: 'cat-hoodie-feline',
    type: 'cat',
    name: 'Feline Fine',
    description: 'A dreamy hoodie moment for tiny loafs with big attitude and warm paws.',
    price: 31.99,
    size: ['S', 'M', 'L'],
    color: 'Sky Blue',
    accent: '#A2E8FF',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=80',
    alt: 'Cute cat styled for a hoodie-inspired product card.'
  }
];

const BLOG_POSTS = {
  spring: {
    title: '10 Ways to Style Your Dog This Spring',
    readingTime: '4 min read',
    content: `
      <p>Spring is basically a runway for pups. Start with soft pastel bandanas, then layer a lightweight hoodie for chilly mornings. Mix textures like jersey cotton with quilted trims so your dog looks ready for brunch and the dog park.</p>
      <p>Add a pop of shine with a charm collar, then finish with a matching leash and poop bag holder. The cutest trick is choosing one hero color and repeating it in tiny details. Suddenly your dog looks like they have a stylist.</p>
      <p>For photo days, keep the palette simple and let the face stay center stage. A bandana and a confident sit can do more than an overdone outfit. Your goal is polished, playful, and comfortable enough for zoomies.</p>
    `
  },
  bandanas: {
    title: 'Why Cats Love Bandanas',
    readingTime: '3 min read',
    content: `
      <p>Cats may be mysterious, but they appreciate soft fabrics and anything that makes them the star of the room. A lightweight bandana gives them that extra flourish without adding bulk.</p>
      <p>The key is a gentle fit, breathable fabric, and short wear sessions. When it feels cozy rather than restrictive, even a dramatic cat can start serving full fashion editor energy.</p>
      <p>Bandanas also frame the face beautifully. That means more camera-ready moments, more compliments, and more reasons to fill your phone with adorable photos.</p>
    `
  },
  trends: {
    title: 'Pet Fashion Trends 2026',
    readingTime: '5 min read',
    content: `
      <p>This year is all about candy colors, plush textures, and matching pet-parent accessories. Think sherbet raincoats, bubble-letter embroidery, and sparkle hardware that catches the light without feeling fussy.</p>
      <p>We are also seeing more expressive basics: hoodies, tees, and collars that feel wearable every day but still look gift-worthy. Tiny details like scalloped edges, quilted pockets, and playful tags are everywhere.</p>
      <p>The biggest trend is joy. Pet fashion now leans into personality, comfort, and instantly shareable looks. Cute is still king, but cozy has officially joined the crown.</p>
    `
  }
};

const FEATURED_PETS = [
  {
    name: 'Mochi in a marshmallow hoodie',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    alt: 'Fluffy dog in a hoodie-inspired look.'
  },
  {
    name: 'Biscuit serving bandana charm',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    alt: 'Cute dog with a bandana-inspired look.'
  },
  {
    name: 'Peaches and her princess scarf',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80',
    alt: 'Cute cat with a scarf or bandana-inspired look.'
  },
  {
    name: 'Tofu in cozy cloud knit',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    alt: 'Cute cat with a sweater-inspired look.'
  },
  {
    name: 'Sunny and the splash parade',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    alt: 'Happy dog with a raincoat-inspired look.'
  },
  {
    name: 'Luna in sparkle-collar mode',
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80',
    alt: 'Cute cat with a collar-inspired look.'
  }
];

const CART_KEY = 'gmerch-cart';

const appState = {
  cart: [],
  shopType: 'dog',
  filters: {
    size: 'All',
    color: 'All',
    priceMax: 35
  }
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

document.addEventListener('DOMContentLoaded', () => {
  injectSharedLayout();
  hydrateFeaturedPets();
  loadCart();
  initCartEvents();
  initMobileDrawer();
  initAnimations();
  initTilt();
  initBlogModal();
  initShopPage();
  initHeroPhotoMotion();
  highlightActiveNav();
});

function injectSharedLayout() {
  const navMount = document.getElementById('site-nav');
  const footerMount = document.getElementById('site-footer');
  const cartMount = document.getElementById('cart-root');
  const drawerMount = document.getElementById('drawer-root');
  const toastMount = document.getElementById('toast-root');
  const currentPage = document.body.dataset.page || 'home';

  if (navMount) {
    navMount.innerHTML = `
      <header class="fixed inset-x-0 top-0 z-50">
        <div class="container-cute pt-4">
          <nav class="glass-nav rounded-[2rem] px-4 py-3 md:px-6" aria-label="Main navigation">
            <div class="flex items-center justify-between gap-4">
              <a href="index.html" class="flex items-center gap-3">
                <span class="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 shadow-lg">
                  <svg class="paw-bounce h-7 w-7 text-pink-500" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
                    <circle cx="21" cy="20" r="7"></circle>
                    <circle cx="40" cy="18" r="6"></circle>
                    <circle cx="13" cy="35" r="6"></circle>
                    <circle cx="50" cy="34" r="6"></circle>
                    <path d="M31 28c9.5 0 17 5.6 17 13.4C48 49.2 41 54 32 54S15 49.1 15 41.4C15 33.6 21.3 28 31 28Z"></path>
                  </svg>
                </span>
                <div>
                  <div class="heading-bubble text-2xl font-semibold text-pink-500">GMerch</div>
                  <p class="text-xs font-medium text-slate-500">gmerch.com</p>
                </div>
              </a>

              <div class="hidden items-center gap-2 md:flex">
                ${navLink('Home', 'index.html', currentPage === 'home')}
                ${navLink('Shop', 'shop.html', currentPage === 'shop')}
                ${navLink('About', 'about.html', currentPage === 'about')}
              </div>

              <div class="flex items-center gap-2">
                <button id="open-cart" aria-label="Open shopping cart" class="cute-button-outline focus-ring flex h-12 w-12 items-center justify-center rounded-full text-slate-700">
                  <span class="relative inline-flex">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <circle cx="9" cy="20" r="1"></circle>
                      <circle cx="18" cy="20" r="1"></circle>
                      <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 7H7"></path>
                    </svg>
                    <span id="cart-count" class="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-pink-500 px-1.5 text-xs font-bold text-white shadow-lg">0</span>
                  </span>
                </button>
                <button id="open-drawer" aria-label="Open mobile menu" class="cute-button-outline focus-ring flex h-12 w-12 items-center justify-center rounded-full md:hidden">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round">
                    <path d="M4 7h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 17h12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    `;
  }

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="footer-shell mt-20 pb-8 pt-10">
        <div class="container-cute">
          <div class="grid gap-8 rounded-[2rem] bg-white/70 p-6 shadow-xl md:grid-cols-[1.3fr_1fr_1fr] md:p-8">
            <div>
              <div class="mb-4 flex items-center gap-3">
                <span class="grid h-12 w-12 place-items-center rounded-2xl bg-pink-100 text-pink-500 shadow-lg">
                  🐾
                </span>
                <div>
                  <div class="heading-bubble text-2xl text-pink-500">GMerch</div>
                  <p class="text-sm text-slate-500">Where pets get their glow-up.</p>
                </div>
              </div>
              <p class="max-w-md text-sm leading-7 text-slate-600">
                Adorable pet merch for dogs and cats with main-character energy, marshmallow-soft styling, and plenty of sparkle.
              </p>
            </div>
            <div>
              <h2 class="heading-bubble mb-3 text-xl text-slate-800">Quick links</h2>
              <ul class="space-y-2 text-sm text-slate-600">
                <li><a href="index.html" class="nav-link inline-flex p-0 hover:bg-transparent">Home</a></li>
                <li><a href="shop.html" class="nav-link inline-flex p-0 hover:bg-transparent">Shop</a></li>
                <li><a href="about.html" class="nav-link inline-flex p-0 hover:bg-transparent">About</a></li>
              </ul>
            </div>
            <div>
              <h2 class="heading-bubble mb-3 text-xl text-slate-800">Follow the fluff</h2>
              <div class="flex gap-3">
                <a href="#" class="social-pill" aria-label="Instagram">📸</a>
                <a href="#" class="social-pill" aria-label="TikTok">🎵</a>
                <a href="#" class="social-pill" aria-label="Pinterest">📌</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  if (cartMount) {
    cartMount.innerHTML = `
      <div id="cart-modal" class="modal-shell" aria-hidden="true">
        <div class="modal-backdrop" data-close-cart></div>
        <div class="modal-panel cart-panel soft-card">
          <div class="cart-panel rounded-[2rem] p-4 md:p-5">
            <div class="mb-4 flex items-start justify-between gap-4">
              <div>
                <p class="hero-badge mb-3 px-3 py-1 text-xs font-semibold text-pink-600">🛒 Cart cuddles</p>
                <h2 class="heading-bubble text-3xl text-slate-800">Your fluffy picks</h2>
                <p class="mt-1 text-sm text-slate-500">Everything you added for the next glow-up.</p>
              </div>
              <button class="cute-button-outline h-11 w-11 rounded-full" aria-label="Close cart" data-close-cart>✕</button>
            </div>
            <div id="cart-items" class="grid gap-3"></div>
            <div class="mt-5 rounded-[1.6rem] bg-pink-50/80 p-4">
              <div class="mb-4 flex items-center justify-between text-base font-semibold text-slate-700">
                <span>Subtotal</span>
                <span id="cart-subtotal">$0.00</span>
              </div>
              <button id="checkout-btn" class="cute-button w-full px-5 py-4 text-base">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (drawerMount) {
    drawerMount.innerHTML = `
      <div id="mobile-drawer" class="drawer-shell" aria-hidden="true">
        <div class="drawer-backdrop" data-close-drawer></div>
        <aside class="mobile-drawer soft-card rounded-l-[2rem] bg-white/92">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-2xl bg-pink-100 text-2xl">🐾</span>
              <div>
                <div class="heading-bubble text-2xl text-pink-500">GMerch</div>
                <p class="text-xs text-slate-500">cute menu mode</p>
              </div>
            </div>
            <button class="cute-button-outline h-11 w-11 rounded-full" aria-label="Close mobile menu" data-close-drawer>✕</button>
          </div>
          <div class="grid gap-3">
            ${mobileNavLink('Home', 'index.html')}
            ${mobileNavLink('Shop', 'shop.html')}
            ${mobileNavLink('About', 'about.html')}
          </div>
          <div class="mt-8 rounded-[1.8rem] bg-gradient-to-br from-pink-100 to-sky-100 p-5">
            <p class="heading-bubble text-xl text-slate-800">Tiny sparkle reminder</p>
            <p class="mt-2 text-sm leading-7 text-slate-600">Every outfit is designed to make your pet look absurdly adorable in photos.</p>
          </div>
        </aside>
      </div>
    `;
  }

  if (toastMount) {
    toastMount.innerHTML = '<div class="toast-shell"><div id="toast-wrap" class="toast-wrap"></div></div>';
  }
}

function navLink(label, href, active) {
  return `<a href="${href}" class="nav-link ${active ? 'active' : ''}">${label}</a>`;
}

function mobileNavLink(label, href) {
  return `<a href="${href}" class="soft-card rounded-[1.5rem] px-4 py-4 text-base font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-pink-50">${label} <span class="ml-2">🐾</span></a>`;
}

function hydrateFeaturedPets() {
  const mount = document.getElementById('featured-pets-row');
  if (!mount) return;
  mount.innerHTML = FEATURED_PETS.map((pet) => `
    <article class="photo-card tilt-card">
      <img src="${pet.image}" alt="${pet.alt}" loading="lazy" width="800" height="960">
      <div class="caption">
        <p class="heading-bubble text-xl">${pet.name}</p>
      </div>
    </article>
  `).join('');
}

function initTilt() {
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
      max: 10,
      speed: 450,
      glare: true,
      'max-glare': 0.16,
      perspective: 1000,
      scale: 1.02,
    });
  }
}

function initAnimations() {
  if (!window.gsap) return;

  const reveals = gsap.utils.toArray('.reveal-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      gsap.to(entry.target, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out'
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  reveals.forEach((item) => observer.observe(item));

  gsap.utils.toArray('.floating-chip').forEach((chip, index) => {
    gsap.to(chip, {
      y: index % 2 === 0 ? -10 : 10,
      duration: 2.2 + index * 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  gsap.utils.toArray('.hero-photo').forEach((photo, index) => {
    gsap.to(photo, {
      y: index % 2 === 0 ? -12 : 12,
      duration: 2.6 + index * 0.25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  const shopBtn = document.querySelector('.hero-bounce-btn');
  if (shopBtn) {
    gsap.to(shopBtn, {
      y: -8,
      duration: 1.15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}

function initHeroPhotoMotion() {
  const hero = document.querySelector('[data-hero-parallax]');
  if (!hero) return;

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    hero.querySelectorAll('.hero-photo').forEach((photo, index) => {
      photo.style.transform = `translate(${x * (index + 1) * 0.35}px, ${y * (index + 1) * 0.2}px) rotate(${index === 1 ? -8 : 6}deg)`;
    });
  });

  hero.addEventListener('pointerleave', () => {
    hero.querySelectorAll('.hero-photo').forEach((photo, index) => {
      photo.style.transform = index === 0 ? 'rotate(6deg)' : index === 1 ? 'rotate(-8deg)' : 'rotate(-4deg)';
    });
  });
}

function initBlogModal() {
  const cards = document.querySelectorAll('[data-blog-open]');
  if (!cards.length) return;

  const modal = document.getElementById('blog-modal');
  const modalBody = document.getElementById('blog-modal-body');
  const modalTitle = document.getElementById('blog-modal-title');
  const modalMeta = document.getElementById('blog-modal-meta');

  const openPost = (card) => {
    const key = card.dataset.blogOpen;
    const post = BLOG_POSTS[key];
    if (!post || !modal) return;
    modalTitle.textContent = post.title;
    modalMeta.textContent = post.readingTime;
    modalBody.innerHTML = post.content;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => openPost(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPost(card);
      }
    });
  });

  modal?.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-blog]')) {
      closeBlogModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeBlogModal();
      closeCart();
      closeDrawer();
    }
  });
}

function closeBlogModal() {
  const modal = document.getElementById('blog-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initShopPage() {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;

  document.querySelectorAll('[data-shop-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.shopType = button.dataset.shopTab;
      document.querySelectorAll('[data-shop-tab]').forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });
      renderProducts();
    });
  });

  document.querySelectorAll('[data-size-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.filters.size = button.dataset.sizeFilter;
      document.querySelectorAll('[data-size-filter]').forEach((pill) => pill.classList.toggle('active', pill === button));
      renderProducts();
    });
  });

  document.querySelectorAll('[data-color-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.filters.color = button.dataset.colorFilter;
      document.querySelectorAll('[data-color-filter]').forEach((pill) => pill.classList.toggle('active', pill === button));
      renderProducts();
    });
  });

  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  priceRange?.addEventListener('input', () => {
    appState.filters.priceMax = Number(priceRange.value);
    priceValue.textContent = `$${Number(priceRange.value).toFixed(2)}`;
    renderProducts();
  });

  document.getElementById('reset-filters')?.addEventListener('click', () => {
    appState.filters = { size: 'All', color: 'All', priceMax: 35 };
    document.querySelectorAll('[data-size-filter]').forEach((pill) => pill.classList.toggle('active', pill.dataset.sizeFilter === 'All'));
    document.querySelectorAll('[data-color-filter]').forEach((pill) => pill.classList.toggle('active', pill.dataset.colorFilter === 'All'));
    if (priceRange) priceRange.value = 35;
    if (priceValue) priceValue.textContent = '$35.00';
    renderProducts();
  });

  productGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-add-to-cart]');
    if (!button) return;
    addToCart(button.dataset.addToCart);
  });

  renderProducts();
}

function renderProducts() {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;

  const filtered = PRODUCTS.filter((product) => {
    const typeMatch = product.type === appState.shopType;
    const sizeMatch = appState.filters.size === 'All' || product.size.includes(appState.filters.size);
    const colorMatch = appState.filters.color === 'All' || product.color === appState.filters.color;
    const priceMatch = product.price <= appState.filters.priceMax;
    return typeMatch && sizeMatch && colorMatch && priceMatch;
  });

  if (!filtered.length) {
    productGrid.innerHTML = `
      <div class="empty-state soft-card rounded-[2rem] p-8">
        <div>
          <div class="mb-3 text-5xl">🐾</div>
          <h3 class="heading-bubble text-3xl text-slate-800">No fluff matches yet</h3>
          <p class="mt-3 max-w-sm text-sm leading-7 text-slate-600">Try another size, color, or price range to uncover more adorable picks.</p>
        </div>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card tilt-card">
      <div class="product-media h-[240px]">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" width="900" height="1080">
        <span class="sparkle-pill absolute left-4 top-4 px-3 py-1 text-xs font-semibold text-slate-700">✨ ${product.type === 'dog' ? 'Dog edit' : 'Cat edit'}</span>
      </div>
      <div class="space-y-4 p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="heading-bubble text-2xl text-slate-800">${product.name}</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600">${product.description}</p>
          </div>
          <span class="price-pill rounded-full px-3 py-2 text-sm font-bold" style="background:${product.accent}; color:#52364d;">${currency.format(product.price)}</span>
        </div>
        <div class="flex flex-wrap gap-2 text-xs text-slate-600">
          ${product.size.map((size) => `<span class="rounded-full bg-slate-100 px-3 py-1 font-medium">${size}</span>`).join('')}
          <span class="rounded-full bg-white px-3 py-1 font-medium ring-1 ring-pink-100">${product.color}</span>
        </div>
        <button class="cute-button w-full px-4 py-3 text-sm" data-add-to-cart="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join('');

  initTilt();
}

function loadCart() {
  try {
    appState.cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (error) {
    appState.cart = [];
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(appState.cart));
  updateCartUI();
}

function addToCart(productId) {
  const existing = appState.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  showToast('Added to cart', 'Your pet just got one step closer to a glow-up ✨');
  if (window.confetti) {
    window.confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.75 },
      scalar: 0.85,
      zIndex: 1000
    });
  }
}

function initCartEvents() {
  document.addEventListener('click', (event) => {
    if (event.target.closest('#open-cart')) openCart();
    if (event.target.matches('[data-close-cart]')) closeCart();
    if (event.target.closest('[data-cart-action]')) {
      const button = event.target.closest('[data-cart-action]');
      const productId = button.dataset.cartItem;
      const action = button.dataset.cartAction;
      updateCartQty(productId, action);
    }
  });

  document.getElementById('checkout-btn')?.addEventListener('click', () => {
    showToast('Coming soon', 'We are still training the checkout puppies 🐶');
  });
}

function openCart() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.getElementById('blog-modal')?.classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

function updateCartQty(productId, action) {
  const item = appState.cart.find((entry) => entry.id === productId);
  if (!item) return;
  if (action === 'increase') item.qty += 1;
  if (action === 'decrease') item.qty -= 1;
  if (action === 'remove' || item.qty <= 0) {
    appState.cart = appState.cart.filter((entry) => entry.id !== productId);
  }
  saveCart();
}

function updateCartUI() {
  const badge = document.getElementById('cart-count');
  const count = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = count;
  renderCart();
}

function renderCart() {
  const mount = document.getElementById('cart-items');
  const subtotalMount = document.getElementById('cart-subtotal');
  if (!mount || !subtotalMount) return;

  if (!appState.cart.length) {
    mount.innerHTML = `
      <div class="soft-card rounded-[1.8rem] bg-gradient-to-br from-white to-pink-50 p-8 text-center">
        <div class="mb-3 text-5xl">🧺</div>
        <h3 class="heading-bubble text-3xl text-slate-800">Your cart is snoozing</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">Pick a hoodie, bandana, or collar and make it a party.</p>
      </div>
    `;
    subtotalMount.textContent = currency.format(0);
    return;
  }

  let subtotal = 0;
  mount.innerHTML = appState.cart.map((item) => {
    const product = PRODUCTS.find((productEntry) => productEntry.id === item.id);
    if (!product) return '';
    subtotal += product.price * item.qty;
    return `
      <div class="cart-item">
        <img class="cart-thumb" src="${product.image}" alt="${product.alt}" width="176" height="176">
        <div>
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="heading-bubble text-2xl text-slate-800">${product.name}</h3>
              <p class="text-sm text-slate-500">${currency.format(product.price)}</p>
            </div>
            <button class="text-sm font-semibold text-pink-500" data-cart-action="remove" data-cart-item="${product.id}">Remove</button>
          </div>
          <div class="mt-4 flex items-center justify-between gap-3">
            <div class="qty-wrap">
              <button class="qty-btn" aria-label="Decrease quantity" data-cart-action="decrease" data-cart-item="${product.id}">−</button>
              <span class="min-w-8 text-center text-sm font-semibold">${item.qty}</span>
              <button class="qty-btn" aria-label="Increase quantity" data-cart-action="increase" data-cart-item="${product.id}">+</button>
            </div>
            <p class="font-semibold text-slate-700">${currency.format(product.price * item.qty)}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  subtotalMount.textContent = currency.format(subtotal);
}

function initMobileDrawer() {
  document.addEventListener('click', (event) => {
    if (event.target.closest('#open-drawer')) openDrawer();
    if (event.target.matches('[data-close-drawer]')) closeDrawer();
    if (event.target.closest('.mobile-drawer a')) closeDrawer();
  });
}

function openDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer) return;
  drawer.classList.add('active');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer) return;
  drawer.classList.remove('active');
  drawer.setAttribute('aria-hidden', 'true');
}

function showToast(title, message) {
  const wrap = document.getElementById('toast-wrap');
  if (!wrap) return;
  const toast = document.createElement('article');
  toast.className = 'toast-card';
  toast.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="grid h-12 w-12 place-items-center rounded-2xl bg-pink-100 text-2xl">💖</div>
      <div>
        <h3 class="heading-bubble text-xl text-slate-800">${title}</h3>
        <p class="mt-1 text-sm leading-7 text-slate-600">${message}</p>
      </div>
    </div>
  `;
  wrap.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 320);
  }, 2800);
}

function highlightActiveNav() {
  const currentPage = document.body.dataset.page || 'home';
  const map = {
    home: 'index.html',
    shop: 'shop.html',
    about: 'about.html'
  };
  document.querySelectorAll('a.nav-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === map[currentPage]);
  });
}
