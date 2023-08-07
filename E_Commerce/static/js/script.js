const cart = []; //Creating an empty array
let totalQuantity = 0; //Initializing the value of totalquantity present in the cart

// Function to add an item to the cart
function addToCart(productId, productName, productPrice) {
  console.log(productId, productName, productPrice);
  event.preventDefault();

  const product = cart.findIndex((item) => item.id === productId);
  console.log(product);

  if (product !== -1) {
    cart[product].quantity++;
    cart[product].price += Number(productPrice);
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: Number(productPrice),
      quantity: 1,
    });
  }

  displayCart();
  totalQuantity++;
  document.getElementById("cart-count").innerHTML = totalQuantity;
  // console.log(cart)
  updateTotalAmount();
}

// Function to update the total count in the cart
function updateTotalAmount() {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById(
    "total-amount"
  ).innerHTML = `Total Amount: $${totalAmount.toFixed(2)}`;
}

// Function to display cart items
function displayCart() {
  const cartDiv = document.getElementById("cart-items_details");
  cartDiv.innerHTML = "<h2>Cart Items</h2>";

  cart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.innerHTML = `
            ${item.name} - ${item.price} - Quantity: ${item.quantity} 
        `;
    cartDiv.appendChild(cartItemDiv);
  });
  updateTotalAmount();
}

//Function to clear the cart
function emptyCart() {
  cart.length = 0;
  totalQuantity = 0;
  document.getElementById("cart-count").innerHTML = totalQuantity;
  displayCart();
  updateTotalAmount();
}

//Function to showcart
function ShowCart() {
  document.getElementById("cart-items_").style.display = "block";
}

//Function to hideCart
function hidecart() {
  document.getElementById("cart-items_").style.display = "none";
}
