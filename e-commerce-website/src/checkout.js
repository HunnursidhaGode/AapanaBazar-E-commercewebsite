import { getCartProductFromLs } from "./getCartProducts";
import products from "./api/products.json";

document.addEventListener("DOMContentLoaded", () => {
  let buyNowProduct = JSON.parse(localStorage.getItem("BuyNowProduct"));
  let cartProducts = getCartProductFromLs();

  let finalItems = [];

  // BUY NOW → Single product only
  if (buyNowProduct) {
    finalItems = [buyNowProduct];
    localStorage.removeItem("BuyNowProduct");
  } else {
    // FROM CART
    finalItems = cartProducts;
  }

  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");

  let total = 0;

  finalItems.forEach((item) => {
    const prod = products.find((p) => p.id === item.id);

    const div = document.createElement("div");
    div.classList.add("checkout-item");

    total += item.price;

    div.innerHTML = `
      <div class="checkout-product">
        <img src="${prod.image}" alt="${prod.name}" class="checkout-img">

        <div>
          <p><strong>${prod.name}</strong></p>
          <p>Qty: ${item.quantity}</p>
          <p>Price: ₹${item.price}</p>
        </div>
      </div>
    `;

    checkoutItems.appendChild(div);
  });

  checkoutTotal.textContent = "₹" + total;

  // PLACE ORDER
  document.getElementById("placeOrderBtn").addEventListener("click", () => {
    // Validate form
    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pincode").value;

    if (!name || !phone || !address || !city || !pin) {
      alert("Please fill all the shipping details.");
      return;
    }

    alert("🎉 Order Placed Successfully!");

    // Clear cart only if order via cart
    if (!buyNowProduct) {
      localStorage.removeItem("CartproductLs");
    }

    window.location.href = "index.html";
  });
});
