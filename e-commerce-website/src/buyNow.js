export const buyNow = (event, id, stock) => {
  const currentCard = document.querySelector(`#card${id}`);

  let quantity = currentCard.querySelector(".productQuantity").innerText;
  let price = currentCard
    .querySelector(".productPrice")
    .innerText.replace("₹", "");

  quantity = Number(quantity);
  price = Number(price) * quantity;

  const buyNowProduct = { id, quantity, price };

  localStorage.setItem("BuyNowProduct", JSON.stringify(buyNowProduct));

  window.location.href = "checkout.html";
};
