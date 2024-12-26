// Define the Product class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Define the ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Calculate the total price for this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Define the ShoppingCart class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Add a product to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Remove a product from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Get the total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Display all items in the cart
    displayCart() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
        } else {
            console.log("Shopping Cart:");
            this.items.forEach(item => {
                console.log(`${item.product.name} - Quantity: ${item.quantity}, Total: $${item.getTotalPrice().toFixed(2)}`);
            });
            console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
        }
    }
}

// Test the shopping cart functionality
// Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Mouse", 20);
const product3 = new Product(3, "Keyboard", 50);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again
cart.displayCart();
