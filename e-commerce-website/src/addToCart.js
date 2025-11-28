import { getCartProductFromLs } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock) => {
  let cart = getCartProductFromLs();

  const card = document.querySelector(`#card${id}`);
  const quantity = parseInt(card.querySelector(".productQuantity").innerText);

  let price = card.querySelector(".productPrice").innerText.replace("₹", "");
  price = Number(price) * quantity;

  // CHECK IF PRODUCT ALREADY EXISTS
  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    // UPDATE QUANTITY & PRICE
    existingProduct.quantity += quantity;
    existingProduct.price += price;
  } else {
    // ADD NEW PRODUCT
    cart.push({
      id,
      quantity,
      price,
    });
  }

  // SAVE TO LOCALSTORAGE
  localStorage.setItem("CartproductLs", JSON.stringify(cart));

  // UPDATE CART ICON COUNT
  updateCartValue(cart);

  alert("Product added to cart!");
};
