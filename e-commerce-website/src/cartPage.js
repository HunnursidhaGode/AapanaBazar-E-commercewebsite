import { getCartProductFromLs } from "./getCartProducts.js";
import { updateCartValue } from "./updateCartValue.js";
import { removeCartItem } from "./removeCartItem.js";
import { cartQuantityToggle } from "./cartQuantityToggle.js";
import "./style.css";

const cartItemsContainer = document.querySelector("#cartItemsContainer");
const emptyCartMessage = document.querySelector("#emptyCartMessage");
const cartTotalSection = document.querySelector("#cartTotalSection");
const cartSubtotal = document.querySelector("#cartSubtotal");
const clearCartBtn = document.querySelector("#clearCartBtn");

let cartProducts = getCartProductFromLs();
updateCartValue(cartProducts);

export const loadCartItems = () => {
  cartItemsContainer.innerHTML = "";

  if (cartProducts.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartTotalSection.classList.add("hidden");
    return;
  }

  emptyCartMessage.classList.add("hidden");
  cartTotalSection.classList.remove("hidden");

  let totalAmount = 0;

  cartProducts.forEach((item) => {
    const { id, quantity, price, image, name } = item;

    const productEl = document.createElement("div");
    productEl.classList.add("cart-item");

    productEl.innerHTML = `
      <div class="cart-left">
        <img src="${image}" class="cart-img"/>
        <div>
          <h3>${name}</h3>
          <p>Unit Price: ₹${price / quantity}</p>
        </div>
      </div>

      <div class="cart-center">
        <button class="decBtn" data-id="${id}">-</button>
        <span class="quantity">${quantity}</span>
        <button class="incBtn" data-id="${id}">+</button>
      </div>

      <div class="cart-right">
        <p>Total: ₹${price}</p>
        <button class="removeBtn" data-id="${id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    cartItemsContainer.append(productEl);

    totalAmount += price;
  });

  cartSubtotal.textContent = totalAmount;

  // Quantity
  cartItemsContainer.addEventListener("click", (e) =>
    cartQuantityToggle(e, cartProducts)
  );

  // Remove Item
  cartItemsContainer.addEventListener("click", (e) =>
    removeCartItem(e, cartProducts)
  );

  // Clear Cart
  clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("CartproductLs");
    cartProducts = [];
    updateCartValue(cartProducts);
    loadCartItems();
  });
};

loadCartItems();
