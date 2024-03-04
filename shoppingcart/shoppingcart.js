'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.products');
    const cartList = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');

    let products = [];
    let cart = [];

    // Fetch product data from JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts();
        });

    // Display products on the page
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    }

    // Add event listener for add to cart button clicks
    productList.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.dataset.id);
            addToCart(productId);
        }
    });

    // Add product to cart
    function addToCart(productId) {
        const productToAdd = products.find(product => product.id === productId);
        const existingCartItem = cart.find(item => item.id === productId);
    
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cart.push({ 
                id: productToAdd.id,
                name: productToAdd.name,  // Ensure product name is included
                price: productToAdd.price,  // Ensure product price is included
                quantity: 1 
            });
        }
    
        updateCart();
    }

    // Remove item from cart
    cartList.addEventListener('click', event => {
        if (event.target.classList.contains('remove-from-cart')) {
            const itemId = parseInt(event.target.dataset.id);
            removeFromCart(itemId);
        }
    });

    function removeFromCart(itemId) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
        }
    }

 // Update cart UI and calculate total price
 // Update cart UI
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        if (item.name && item.price && !isNaN(item.price) && !isNaN(item.quantity)) {
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price} x ${item.quantity}</span>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartList.appendChild(cartItem);
            
            total += parseFloat(item.price) * parseInt(item.quantity); // Calculate total price
        }
    });

    totalPrice.textContent = total.toFixed(2); // Display total price

    // Save cart data to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

//  function updateCart() {
//     cartList.innerHTML = '';
//     let total = 0;

//     cart.forEach(item => {
//         const cartItem = document.createElement('li');
//         cartItem.innerHTML = `
//             <span>${item.name} - $${item.price} x ${item.quantity}</span>
//             <button class="remove-from-cart" data-id="${item.id}">Remove</button>
//         `;
//         cartList.appendChild(cartItem);

//         // Ensure price and quantity are valid numbers
//         const price = parseFloat(item.price);
//         const quantity = parseInt(item.quantity);

//         // Check if price and quantity are valid numbers
//         if (!isNaN(price) && !isNaN(quantity)) {
//             total += price * quantity; // Calculate total price
//         }
//     });

//     totalPrice.textContent = total.toFixed(2); // Display total price

//     // Save cart data to local storage
//     localStorage.setItem('cart', JSON.stringify(cart));
// }
 
    // Load cart data from local storage on page load
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
});

