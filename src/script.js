document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});

function loadProducts() {
  const products = [
    // Sample product data
    { id: 1, name: "Custom T-Shirt", price: 20.0, image: "shirt.jpg" },
    // Add more products here
  ];

  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productList.appendChild(productElement);
  });
}

function addToCart(productId) {
  // Implementation of adding to cart
  console.log(`Product ${productId} added to cart`);
  // In a real implementation, update cart in local storage or backend
}

// Additional JavaScript functionality as needed
// Function to load products from backend
function loadProductsFromBackend() {
  fetch("http://localhost:3000/products") // Adjust the URL based on your backend route
    .then((response) => response.json())
    .then((products) => displayProducts(products))
    .catch((error) => console.error("Error:", error));
}

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productList.appendChild(productElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProductsFromBackend();
});

function addToCart(productId, customization) {
  // Example customization object: { size: 'M', color: 'Red', text: 'Custom Text' }
  fetch("http://localhost:3000/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`, // Use the JWT token received upon login
    },
    body: JSON.stringify({ productId, customization }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
