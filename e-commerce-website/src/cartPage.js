import { getCartProductFromLs } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

document.addEventListener("DOMContentLoaded", () => {
  let cartProducts = getCartProductFromLs();

  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const cartTotalSection = document.getElementById("cartTotalSection");
  const cartSubtotal = document.getElementById("cartSubtotal");

  // If cart is empty → show message
  if (cartProducts.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartTotalSection.classList.add("hidden");
    updateCartValue(cartProducts);
    return;
  }

  let subtotal = 0;

  cartProducts.forEach((item) => {
    subtotal += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <div class="cart-item-info">
        <p><strong>Product ID:</strong> ${item.id}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
        <p><strong>Price:</strong> ₹${item.price}</p>
      </div>
    `;

    cartItemsContainer.appendChild(div);
  });

  cartSubtotal.textContent = subtotal;

  cartTotalSection.classList.remove("hidden");

  // Clear Cart
  document.getElementById("clearCartBtn").addEventListener("click", () => {
    localStorage.removeItem("CartproductLs");
    window.location.reload();
  });

  // Proceed to Checkout
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  updateCartValue(cartProducts);
});
