import { updateCartValue } from "./updateCartValue.js";

export const removeCartItem = (event, cartProducts) => {
  const btn = event.target.closest(".removeBtn");
  if (!btn) return;

  const id = Number(btn.getAttribute("data-id"));

  const updatedCart = cartProducts.filter((prod) => prod.id !== id);

  localStorage.setItem("CartproductLs", JSON.stringify(updatedCart));
  updateCartValue(updatedCart);

  location.reload();
};
