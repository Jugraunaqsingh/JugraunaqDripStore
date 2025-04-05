'use strict';



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});


// Add to Cart Logic
document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.product-btn');

  cartButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card');
      const title = card.querySelector('.card-title').textContent.trim();
      const price = card.querySelector('.price').textContent.trim();
      const imgSrc = card.querySelector('img').getAttribute('src');

      const item = { title, price, imgSrc };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${title} added to cart!`);
    });
  });
});
const products = [
  {
    id: 1,
    name: "Short Sleeve Shirt",
    price: 170,
    image: "./assets/images/product-1.png"
  },
  {
    id: 2,
    name: "Dead Sunglasses",
    price: 210,
    image: "./assets/images/product-2.png"
  },
  {
    id: 3,
    name: "Studios Trouser",
    price: 90,
    image: "./assets/images/product-3.png"
  },
  {
    id: 4,
    name: "Acne Baseball Cap",
    price: 80,
    image: "./assets/images/product-4.png"
  },
  {
    id: 5,
    name: "Short Sleeve Shirt",
    price: 170,
    image: "./assets/images/product-5.png"
  },
  {
    id: 6,
    name: "Garcons Parfums",
    price: 190,
    image: "./assets/images/product-6.png"
  },
  {
    id: 7,
    name: "Salomon Sneaker",
    price: 450,
    image: "./assets/images/product-7.png"
  },
  {
    id: 8,
    name: "Ribbed Beanie Hat",
    price: 120,
    image: "./assets/images/product-8.png"
  },
  {
    id: 9,
    name: "Acronym Khaki",
    price: 220,
    image: "./assets/images/product-9.png"
  },
];
// CART FUNCTIONALITY

// Initialize cart if not already in localStorage
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll(".product-btn").forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart"));
    const product = products[index];

    // Check if already in cart
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);

    // Optional: update cart count in header
    updateCartCount();
  });
});

// Update cart count in header
// Update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartBtn = document.querySelector(".cart-btn .span");
  if (cartBtn) {
    cartBtn.textContent = `Cart (${cart.length})`;
  }
}

// Call on page load
updateCartCount();
