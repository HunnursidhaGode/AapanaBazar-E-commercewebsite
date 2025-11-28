export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");

  // Read current quantity directly from innerText
  let quantity = Number(productQuantity.innerText) || 1;

  const incBtn = event.target.closest(".cartIncrement");
  const decBtn = event.target.closest(".cartDecrement");

  // Increment
  if (incBtn) {
    quantity = quantity < stock ? quantity + 1 : stock;
  }

  // Decrement
  if (decBtn) {
    quantity = quantity > 1 ? quantity - 1 : 1;
  }

  // Update UI
  productQuantity.innerText = quantity;

  return quantity;
};
