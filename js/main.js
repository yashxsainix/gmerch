const SIZE_OPTIONS = ['S', 'M', 'L'];
const COLOR_OPTIONS = [
  { name: 'Pink', hex: '#FF9EC8' },
  { name: 'Sky Blue', hex: '#A2E8FF' },
  { name: 'Yellow', hex: '#FFE66D' },
  { name: 'Mint', hex: '#B5EAD7' },
  { name: 'Lavender', hex: '#E0BBE4' }
];

const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || Boolean(navigator.connection && navigator.connection.saveData);

function runWhenIdle(callback, timeout = 300) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
  } else {
    window.setTimeout(callback, 1);
  }
}

function sizedImage(url, width = 720) {
  if (!url) return '';
  if (url.includes('images.pexels.com')) {
    return `${url}&auto=compress&cs=tinysrgb&w=${width}`;
  }
  if (url.includes('images.unsplash.com')) {
    return `${url}${url.includes('?') ? '&' : '?'}auto=format&fit=crop&w=${width}&q=80`;
  }
  return url;
}

const PRODUCTS = [
  {
    id: 'dog-hoodie-explorer',
    type: 'dog',
    name: 'Paw-some Explorer Hoodie',
    description: 'A plush little hoodie for city walks, cuddle breaks, and main-character dog energy.',
    price: 29.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FF9EC8',
    image: 'https://images.pexels.com/photos/4588437/pexels-photo-4588437.jpeg?cs=srgb&dl=pexels-shvetsa-4588437.jpg&fm=jpg',
    alt: 'Small dog wearing a bright hoodie.'
  },
  {
    id: 'dog-raincoat-splashy',
    type: 'dog',
    name: 'Splashy Paws Raincoat',
    description: 'Made for rainy-day struts, puddle jumps, and looking adorable in stormy weather.',
    price: 34.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FFE66D',
    image: 'https://images.pexels.com/photos/8499454/pexels-photo-8499454.jpeg?cs=srgb&dl=pexels-yaroslav-shuraev-8499454.jpg&fm=jpg',
    alt: 'Dog wearing a yellow raincoat outdoors.'
  },
  {
    id: 'dog-bandana-goodboy',
    type: 'dog',
    name: 'Good Boy Club Bandana',
    description: 'A classic neckerchief moment for treat hunters, car-ride fans, and camera-ready smiles.',
    price: 14.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#A2E8FF',
    image: 'https://images.pexels.com/photos/2463238/pexels-photo-2463238.jpeg?cs=srgb&dl=pexels-alexdolle-2463238.jpg&fm=jpg',
    alt: 'Corgi wearing a stylish bandana.'
  },
  {
    id: 'dog-tee-treat',
    type: 'dog',
    name: 'Treat Yourself Tee',
    description: 'A comfy outfit for brunch pups, stroller babies, and tiny fashion icons on the block.',
    price: 24.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#B5EAD7',
    image: 'https://images.pexels.com/photos/4085434/pexels-photo-4085434.jpeg?cs=srgb&dl=pexels-introspectivedsgn-4085434.jpg&fm=jpg',
    alt: 'Boston terrier wearing a black outfit and scarf.'
  },
  {
    id: 'dog-boots-puddle',
    type: 'dog',
    name: 'Puddle Prince Boots',
    description: 'Bright booties that keep paws cute, dry, and wildly photogenic on rainy walks.',
    price: 19.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FFE66D',
    image: 'https://images.pexels.com/photos/8499236/pexels-photo-8499236.jpeg?cs=srgb&dl=pexels-yaroslav-shuraev-8499236.jpg&fm=jpg',
    alt: 'Dog wearing rain boots and a matching coat.'
  },
  {
    id: 'dog-scarf-snuggle',
    type: 'dog',
    name: 'Snuggle Scout Scarf',
    description: 'A cozy wrap for chilly mornings, holiday photos, and snow-day compliments.',
    price: 16.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#E0BBE4',
    image: 'https://images.pexels.com/photos/1436134/pexels-photo-1436134.jpeg?cs=srgb&dl=pexels-benjaminlehman-1436134.jpg&fm=jpg',
    alt: 'Dog wearing a large knitted scarf in the snow.'
  },
  {
    id: 'dog-bowtie-bowwow',
    type: 'dog',
    name: 'Bow Wow Formal',
    description: 'A party-ready bow tie for birthdays, portraits, and looking extra distinguished.',
    price: 15.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FF9EC8',
    image: 'https://images.pexels.com/photos/15175666/pexels-photo-15175666.jpeg?cs=srgb&dl=pexels-sharon-snider-2339082-15175666.jpg&fm=jpg',
    alt: 'Black puppy wearing a plaid bow tie.'
  },
  {
    id: 'dog-tie-executive',
    type: 'dog',
    name: 'Pup Executive Tie',
    description: 'For office dogs, business brunches, and pups who negotiate for extra treats.',
    price: 17.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#A2E8FF',
    image: 'https://images.pexels.com/photos/16621594/pexels-photo-16621594.jpeg?cs=srgb&dl=pexels-anya-juarez-tenorio-227888521-16621594.jpg&fm=jpg',
    alt: 'Dog wearing a light purple neck tie.'
  },
  {
    id: 'dog-cap-fetch',
    type: 'dog',
    name: 'Fetch in Style Cap',
    description: 'A playful cap look for sporty pups who treat every sidewalk like a runway.',
    price: 18.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FFE66D',
    image: 'https://images.pexels.com/photos/24902934/pexels-photo-24902934.jpeg?cs=srgb&dl=pexels-yide-sun-84747826-24902934.jpg&fm=jpg',
    alt: 'Corgi wearing a cap and scarf-like outfit.'
  },
  {
    id: 'dog-trench-cloud',
    type: 'dog',
    name: 'Cloud Cruiser Trench',
    description: 'A hooded coat for tiny adventurers who like a little drama with their walk.',
    price: 32.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#E0BBE4',
    image: 'https://images.pexels.com/photos/27441409/pexels-photo-27441409.jpeg?cs=srgb&dl=pexels-venus-wong-1519801170-27441409.jpg&fm=jpg',
    alt: 'Bulldog wearing a tan hooded coat.'
  },
  {
    id: 'cat-sweater-meowgic',
    type: 'cat',
    name: 'Meowgic Princess Sweater',
    description: 'A sweet pastel sweater for little divas who deserve compliments every single day.',
    price: 27.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#E0BBE4',
    image: 'https://images.pexels.com/photos/26346315/pexels-photo-26346315.jpeg?cs=srgb&dl=pexels-el-joven-zag-719710251-26346315.jpg&fm=jpg',
    alt: 'Orange and white cat wearing a pastel sweater.'
  },
  {
    id: 'cat-knit-cozy',
    type: 'cat',
    name: 'Cozy Whiskers Knit',
    description: 'A chunky little sweater look for window-watchers, loaf experts, and nap royalty.',
    price: 28.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#B5EAD7',
    image: 'https://images.pexels.com/photos/11187356/pexels-photo-11187356.jpeg?cs=srgb&dl=pexels-createdstories-11187356.jpg&fm=jpg',
    alt: 'Gray cat wearing a knitted sweater.'
  },
  {
    id: 'cat-collar-sparkle',
    type: 'cat',
    name: 'Sparkle Queen Collar',
    description: 'A bell-collar moment for house queens who like their entrance noticed.',
    price: 14.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FF9EC8',
    image: 'https://images.pexels.com/photos/19134172/pexels-photo-19134172.jpeg?cs=srgb&dl=pexels-teerayoot-manochat-795813348-19134172.jpg&fm=jpg',
    alt: 'Cat wearing a bright collar with a bell.'
  },
  {
    id: 'cat-hoodie-feline',
    type: 'cat',
    name: 'Feline Fine Hoodie',
    description: 'A street-style cat hoodie with cozy energy and just enough attitude.',
    price: 31.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#A2E8FF',
    image: 'https://images.pexels.com/photos/27017416/pexels-photo-27017416.jpeg?cs=srgb&dl=pexels-el-joven-zag-719710251-27017416.jpg&fm=jpg',
    alt: 'Cat wearing a patterned hoodie.'
  },
  {
    id: 'cat-harness-whiskerwalk',
    type: 'cat',
    name: 'Whisker Walk Harness',
    description: 'Soft and secure for tiny outdoor explorers who still want to look extra cute.',
    price: 22.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FFE66D',
    image: 'https://images.pexels.com/photos/1262940/pexels-photo-1262940.jpeg?cs=srgb&dl=pexels-valeriya-1262940.jpg&fm=jpg',
    alt: 'Siamese cat wearing a harness outdoors.'
  },
  {
    id: 'cat-bowtie-purrfect',
    type: 'cat',
    name: 'Purr-fect Bow Tie',
    description: 'A tiny formal flourish for classy cats with dramatic side-eye and perfect posture.',
    price: 13.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FF9EC8',
    image: 'https://images.pexels.com/photos/14492413/pexels-photo-14492413.jpeg?cs=srgb&dl=pexels-feyzayildirimphoto-14492413.jpg&fm=jpg',
    alt: 'Cat wearing a red bow tie.'
  },
  {
    id: 'cat-shirt-sunbeam',
    type: 'cat',
    name: 'Sunbeam Shirt',
    description: 'A tiny shirt for fashion-forward cats who want a little vacation energy indoors.',
    price: 26.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#FFE66D',
    image: 'https://images.pexels.com/photos/31150206/pexels-photo-31150206.jpeg?cs=srgb&dl=pexels-vo-nguy-n-terri-2150303799-31150206.jpg&fm=jpg',
    alt: 'Sphynx cat wearing a Hawaiian-style shirt.'
  },
  {
    id: 'cat-pajamas-dreamydino',
    type: 'cat',
    name: 'Dreamy Dino Pajamas',
    description: 'Sleepy-time softness for blanket burritos, nap marathons, and nighttime cuddles.',
    price: 29.49,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#B5EAD7',
    image: 'https://images.pexels.com/photos/11926899/pexels-photo-11926899.jpeg?cs=srgb&dl=pexels-221095294-11926899.jpg&fm=jpg',
    alt: 'Tabby cat resting in a green hoodie-style pajama outfit.'
  },
  {
    id: 'cat-tee-princesspuff',
    type: 'cat',
    name: 'Princess Puff Tee',
    description: 'A lightweight little tee for sweet-faced cats who belong on every moodboard.',
    price: 23.99,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#A2E8FF',
    image: 'https://images.pexels.com/photos/26346313/pexels-photo-26346313.jpeg?cs=srgb&dl=pexels-el-joven-zag-719710251-26346313.jpg&fm=jpg',
    alt: 'Cat wearing a cute orange and mint tee.'
  },
  {
    id: 'cat-vest-moonlight',
    type: 'cat',
    name: 'Moonlight Vest',
    description: 'A sleek little vest for chic cats who like soft structure and polished flair.',
    price: 24.49,
    sizes: SIZE_OPTIONS,
    colors: COLOR_OPTIONS,
    accent: '#E0BBE4',
    image: 'https://images.pexels.com/photos/9660360/pexels-photo-9660360.jpeg?cs=srgb&dl=pexels-vanessa-rong-102493819-9660360.jpg&fm=jpg',
    alt: 'Fluffy cat wearing a stylish red vest or harness.'
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
    image: 'https://images.pexels.com/photos/4588437/pexels-photo-4588437.jpeg?cs=srgb&dl=pexels-shvetsa-4588437.jpg&fm=jpg',
    alt: 'Dog wearing a bright hoodie.'
  },
  {
    name: 'Biscuit serving bandana charm',
    image: 'https://images.pexels.com/photos/2463238/pexels-photo-2463238.jpeg?cs=srgb&dl=pexels-alexdolle-2463238.jpg&fm=jpg',
    alt: 'Dog wearing a plaid bandana.'
  },
  {
    name: 'Peaches in pastel princess knit',
    image: 'https://images.pexels.com/photos/26346315/pexels-photo-26346315.jpeg?cs=srgb&dl=pexels-el-joven-zag-719710251-26346315.jpg&fm=jpg',
    alt: 'Cat wearing a pastel sweater.'
  },
  {
    name: 'Tofu in cozy cloud knit',
    image: 'https://images.pexels.com/photos/11187356/pexels-photo-11187356.jpeg?cs=srgb&dl=pexels-createdstories-11187356.jpg&fm=jpg',
    alt: 'Gray cat wearing a knitted sweater.'
  },
  {
    name: 'Sunny and the splash parade',
    image: 'https://images.pexels.com/photos/8499236/pexels-photo-8499236.jpeg?cs=srgb&dl=pexels-yaroslav-shuraev-8499236.jpg&fm=jpg',
    alt: 'Dog wearing a raincoat and boots.'
  },
  {
    name: 'Luna in sparkle collar mode',
    image: 'https://images.pexels.com/photos/19134172/pexels-photo-19134172.jpeg?cs=srgb&dl=pexels-teerayoot-manochat-795813348-19134172.jpg&fm=jpg',
    alt: 'Cat wearing a collar with a bell.'
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
  },
  productSelections: {}
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-ready');
  injectSharedLayout();
  hydrateFeaturedPets();
  loadCart();
  initCartEvents();
  initMobileDrawer();
  initBlogModal();
  initShopPage();
  highlightActiveNav();

  if (!reduceMotion) {
    initAnimations();
    initHeroPhotoMotion();
  }

  runWhenIdle(() => {
    initTilt();
  });
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
      <footer class="footer-shell mt-16 pb-8 pt-10">
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
  mount.innerHTML = FEATURED_PETS.map((pet, index) => `
    <article class="photo-card tilt-card" ${index > 1 ? 'data-no-tilt="true"' : ''}>
      <img src="${sizedImage(pet.image, 640)}" alt="${pet.alt}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async" width="800" height="960">
      <div class="caption">
        <p class="heading-bubble text-xl">${pet.name}</p>
      </div>
    </article>
  `).join('');
}

function initTilt() {
  if (!window.VanillaTilt || isTouchDevice || reduceMotion) return;
  document.querySelectorAll('.tilt-card').forEach((node) => {
    if (node.dataset.tiltBound === 'true' || node.dataset.noTilt === 'true') return;
    VanillaTilt.init(node, {
      max: 7,
      speed: 350,
      glare: false,
      perspective: 1000,
      scale: 1.01,
    });
    node.dataset.tiltBound = 'true';
  });
}

function initAnimations() {
  if (!window.gsap || isTouchDevice || reduceMotion) return;

  const reveals = gsap.utils.toArray('.reveal-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      gsap.from(entry.target, {
        opacity: 0,
        y: 22,
        duration: 0.7,
        ease: 'power2.out'
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((item) => observer.observe(item));

  gsap.utils.toArray('.floating-chip').forEach((chip, index) => {
    gsap.to(chip, {
      y: index % 2 === 0 ? -5 : 5,
      duration: 2.6 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  gsap.utils.toArray('.hero-photo').forEach((photo, index) => {
    gsap.to(photo, {
      y: index % 2 === 0 ? -8 : 8,
      duration: 2.8 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  const shopBtn = document.querySelector('.hero-bounce-btn');
  if (shopBtn) {
    gsap.to(shopBtn, {
      y: -6,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}

function initHeroPhotoMotion() {
  if (isTouchDevice || reduceMotion) return;
  const hero = document.querySelector('[data-hero-parallax]');
  if (!hero) return;

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    hero.querySelectorAll('.hero-photo').forEach((photo, index) => {
      photo.style.transform = `translate(${x * (index + 1) * 0.25}px, ${y * (index + 1) * 0.18}px) rotate(${index === 0 ? 6 : index === 1 ? -8 : -4}deg)`;
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

  const sizeInfo = document.createElement('p');
  sizeInfo.className = 'mt-3 text-xs leading-6 text-slate-500';
  sizeInfo.innerHTML = 'Tap a size and color on any card before adding it to the cart. Every style comes in all three sizes and all five pastel colors.';
  document.querySelector('.filter-card .space-y-6')?.appendChild(sizeInfo);

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
    const addButton = event.target.closest('[data-add-to-cart]');
    if (addButton) {
      addToCart(addButton.dataset.addToCart);
      return;
    }

    const sizeButton = event.target.closest('[data-select-size]');
    if (sizeButton) {
      setProductSelection(sizeButton.dataset.productId, 'size', sizeButton.dataset.selectSize);
      renderProducts();
      return;
    }

    const colorButton = event.target.closest('[data-select-color]');
    if (colorButton) {
      setProductSelection(colorButton.dataset.productId, 'color', colorButton.dataset.selectColor);
      renderProducts();
    }
  });

  renderProducts();
}

function setProductSelection(productId, field, value) {
  const current = getProductSelection(productId);
  appState.productSelections[productId] = { ...current, [field]: value };
}

function getProductSelection(productId) {
  return appState.productSelections[productId] || {
    size: 'M',
    color: 'Pink'
  };
}

function renderProducts() {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;

  const filtered = PRODUCTS.filter((product) => {
    const sizeMatch = appState.filters.size === 'All' || product.sizes.includes(appState.filters.size);
    const colorMatch = appState.filters.color === 'All' || product.colors.some((color) => color.name === appState.filters.color);
    return product.type === appState.shopType && product.price <= appState.filters.priceMax && sizeMatch && colorMatch;
  });

  if (!filtered.length) {
    productGrid.innerHTML = `
      <div class="empty-state soft-card rounded-[2rem] p-8">
        <div>
          <div class="mb-3 text-5xl">🐾</div>
          <h3 class="heading-bubble text-3xl text-slate-800">No fluff matches yet</h3>
          <p class="mt-3 max-w-sm text-sm leading-7 text-slate-600">Try another price range to uncover more adorable picks.</p>
        </div>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map((product) => {
    const selection = getProductSelection(product.id);
    const selectedColor = COLOR_OPTIONS.find((color) => color.name === selection.color) || COLOR_OPTIONS[0];

    return `
      <article class="product-card tilt-card">
        <div class="product-media h-[240px]">
          <img src="${sizedImage(product.image, 720)}" alt="${product.alt}" loading="lazy" decoding="async" width="900" height="1080">
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

          <div class="rounded-[1.4rem] bg-pink-50/70 p-3">
            <div class="mb-3 flex items-center justify-between gap-3">
              <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Choose size</p>
              <span class="text-xs font-semibold text-pink-500">Selected: ${selection.size}</span>
            </div>
            <div class="flex flex-wrap gap-2">
              ${product.sizes.map((size) => `
                <button class="variant-chip ${selection.size === size ? 'active' : ''}" data-product-id="${product.id}" data-select-size="${size}" aria-label="Select size ${size} for ${product.name}">${size}</button>
              `).join('')}
            </div>
          </div>

          <div class="rounded-[1.4rem] bg-sky-50/60 p-3">
            <div class="mb-3 flex items-center justify-between gap-3">
              <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Choose color</p>
              <span class="text-xs font-semibold text-sky-600">${selection.color}</span>
            </div>
            <div class="flex flex-wrap gap-2">
              ${product.colors.map((color) => `
                <button class="color-choice ${selection.color === color.name ? 'active' : ''}" data-product-id="${product.id}" data-select-color="${color.name}" aria-label="Select ${color.name} for ${product.name}">
                  <span class="color-choice-dot" style="background:${color.hex}"></span>
                  <span>${color.name}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="flex items-center justify-between rounded-[1.4rem] bg-white px-3 py-2 ring-1 ring-pink-100">
            <p class="text-xs font-medium text-slate-500">Ready to add</p>
            <p class="text-sm font-semibold text-slate-700">${selection.size} · <span class="inline-block h-2.5 w-2.5 rounded-full align-middle" style="background:${selectedColor.hex}"></span> ${selection.color}</p>
          </div>

          <button class="cute-button w-full px-4 py-3 text-sm" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
      </article>
    `;
  }).join('');

  runWhenIdle(() => initTilt());
}

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    appState.cart = raw.map(normalizeCartItem).filter(Boolean);
  } catch (error) {
    appState.cart = [];
  }
  updateCartUI();
}

function normalizeCartItem(item) {
  if (!item) return null;
  if (item.productId) return item;
  const legacyProduct = PRODUCTS.find((product) => product.id === item.id);
  if (!legacyProduct) return null;
  return {
    id: `${legacyProduct.id}|M|Pink`,
    productId: legacyProduct.id,
    size: 'M',
    color: 'Pink',
    qty: item.qty || 1
  };
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(appState.cart));
  updateCartUI();
}

function addToCart(productId) {
  const selection = getProductSelection(productId);
  const cartId = `${productId}|${selection.size}|${selection.color}`;
  const existing = appState.cart.find((item) => item.id === cartId);

  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({
      id: cartId,
      productId,
      size: selection.size,
      color: selection.color,
      qty: 1
    });
  }

  saveCart();
  showToast('Added to cart', `${selection.size} · ${selection.color} is in the bag ✨`);
  if (window.confetti && !isTouchDevice && !reduceMotion) {
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
      const cartId = button.dataset.cartItem;
      const action = button.dataset.cartAction;
      updateCartQty(cartId, action);
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('#checkout-btn')) {
      showToast('Coming soon', 'We are still training the checkout puppies 🐶');
    }
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

function updateCartQty(cartId, action) {
  const item = appState.cart.find((entry) => entry.id === cartId);
  if (!item) return;
  if (action === 'increase') item.qty += 1;
  if (action === 'decrease') item.qty -= 1;
  if (action === 'remove' || item.qty <= 0) {
    appState.cart = appState.cart.filter((entry) => entry.id !== cartId);
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
    const product = PRODUCTS.find((productEntry) => productEntry.id === item.productId);
    if (!product) return '';
    subtotal += product.price * item.qty;
    const color = COLOR_OPTIONS.find((entry) => entry.name === item.color) || COLOR_OPTIONS[0];
    return `
      <div class="cart-item">
        <img class="cart-thumb" src="${sizedImage(product.image, 360)}" alt="${product.alt}" loading="lazy" decoding="async" width="176" height="176">
        <div>
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="heading-bubble text-2xl text-slate-800">${product.name}</h3>
              <p class="text-sm text-slate-500">${currency.format(product.price)}</p>
              <div class="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                <span class="rounded-full bg-pink-50 px-2.5 py-1">Size ${item.size}</span>
                <span class="rounded-full bg-sky-50 px-2.5 py-1"><span class="mr-1 inline-block h-2.5 w-2.5 rounded-full align-middle" style="background:${color.hex}"></span>${item.color}</span>
              </div>
            </div>
            <button class="text-sm font-semibold text-pink-500" data-cart-action="remove" data-cart-item="${item.id}">Remove</button>
          </div>
          <div class="mt-4 flex items-center justify-between gap-3">
            <div class="qty-wrap">
              <button class="qty-btn" aria-label="Decrease quantity" data-cart-action="decrease" data-cart-item="${item.id}">−</button>
              <span class="min-w-8 text-center text-sm font-semibold">${item.qty}</span>
              <button class="qty-btn" aria-label="Increase quantity" data-cart-action="increase" data-cart-item="${item.id}">+</button>
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
