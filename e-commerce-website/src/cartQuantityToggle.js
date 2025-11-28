import { updateCartValue } from "./updateCartValue.js";

export const cartQuantityToggle = (event, cartProducts) => {
  const incBtn = event.target.closest(".incBtn");
  const decBtn = event.target.closest(".decBtn");

  if (!incBtn && !decBtn) return;

  const id = Number(event.target.getAttribute("data-id"));
  const product = cartProducts.find((prod) => prod.id === id);

  if (!product) return;

  const unitPrice = product.price / product.quantity;

  if (incBtn) product.quantity += 1;
  if (decBtn && product.quantity > 1) product.quantity -= 1;

  product.price = product.quantity * unitPrice;

  localStorage.setItem("CartproductLs", JSON.stringify(cartProducts));
  updateCartValue(cartProducts);

  location.reload();
};
