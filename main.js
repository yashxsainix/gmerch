// --- Cart Logic ---
let cart = JSON.parse(localStorage.getItem('gmerch_cart')) || [];

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if(cartCount) cartCount.innerText = totalItems;

    // Render Items
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-gray-400 text-center mt-10">Your cart is feeling a little empty 🥺</p>';
        } else {
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                cartItemsContainer.innerHTML += `
                    <div class="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-gray-100">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-xl">
                        <div class="flex-1">
                            <h4 class="font-fredoka font-bold text-sm leading-tight">${item.name}</h4>
                            <div class="text-hotPink font-bold text-sm">$${item.price}</div>
                        </div>
                        <div class="flex items-center bg-white rounded-full px-2 border">
                            <button onclick="changeQty(${index}, -1)" class="px-2 text-gray-500 hover:text-hotPink">-</button>
                            <span class="text-sm font-bold w-4 text-center">${item.quantity}</span>
                            <button onclick="changeQty(${index}, 1)" class="px-2 text-gray-500 hover:text-hotPink">+</button>
                        </div>
                    </div>
                `;
            });
        }
        if(cartTotal) cartTotal.innerText = `$${total.toFixed(2)}`;
    }
}

function addToCart(id, name, price, image) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('gmerch_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Confetti effect!
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9EC8', '#A2E8FF', '#FFE66D']
    });

    // Auto open cart
    document.getElementById('cartModal').classList.remove('hidden');
    document.getElementById('cartModal').classList.add('flex');
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('gmerch_cart', JSON.stringify(cart));
    updateCartUI();
}

function checkout() {
    alert("🐶 Coming soon — our checkout puppies are still in training! Check back later.");
}

// --- DOM Interactivity ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    // Modals & Menus
    const cartModal = document.getElementById('cartModal');
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    
    if(cartBtn) cartBtn.addEventListener('click', () => { cartModal.classList.remove('hidden'); cartModal.classList.add('flex'); });
    if(closeCartBtn) closeCartBtn.addEventListener('click', () => { cartModal.classList.add('hidden'); cartModal.classList.remove('flex'); });

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => { mobileMenu.classList.remove('hidden'); mobileMenu.classList.add('flex'); });
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', () => { mobileMenu.classList.add('hidden'); mobileMenu.classList.remove('flex'); });

    // Vanilla Tilt Init
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    // GSAP Scroll Animations
    if(typeof gsap !== 'undefined') {
        gsap.from(".gsap-hero", { opacity: 0, y: 50, duration: 1, stagger: 0.2, ease: "back.out(1.7)" });
        
        const fadeElements = document.querySelectorAll('.gsap-fade');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target, 
                        { opacity: 0, y: 30 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));
    }
});
