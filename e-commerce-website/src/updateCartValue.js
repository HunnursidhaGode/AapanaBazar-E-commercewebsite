const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts = []) => {
  if (!Array.isArray(cartProducts)) cartProducts = [];

  // Total items = sum of all quantities
  const totalItems = cartProducts.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  cartValue.textContent = totalItems;
};
