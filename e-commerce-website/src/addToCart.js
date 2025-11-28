import { updateCartValue } from "./updateCartValue.js";
import { getCartProductFromLs } from "./getCartProducts.js";

export const addToCart = (event, id, stock) => {
  let cartItems = getCartProductFromLs();

  const card = document.querySelector(`#card${id}`);

  let quantity = Number(card.querySelector(".productQuantity").innerText);
  let price = Number(
    card.querySelector(".productPrice").innerText.replace("₹", "")
  );

  // NEW: get image + name
  let image = card.querySelector(".productImage").src;
  let name = card.querySelector(".productName").innerText;

  let finalPrice = price * quantity;

  let existing = cartItems.find((item) => item.id === id);

  if (existing) {
    existing.quantity += quantity;
    existing.price = existing.quantity * price;
  } else {
    cartItems.push({
      id,
      quantity,
      price: finalPrice,
      image,
      name,
    });
  }

  localStorage.setItem("CartproductLs", JSON.stringify(cartItems));
  updateCartValue(cartItems);
};
