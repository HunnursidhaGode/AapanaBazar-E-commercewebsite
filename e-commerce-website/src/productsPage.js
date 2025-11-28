import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";
import { getCartProductFromLs } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

document.addEventListener("DOMContentLoaded", () => {
  showProductContainer(products, "#productList");
  updateCartValue(getCartProductFromLs());
});
