const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts = []) => {
  if (!cartValue) return;
  cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`;
};
