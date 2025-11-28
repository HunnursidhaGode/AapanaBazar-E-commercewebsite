import "./style.css";
import products from "./api/products.json";

import { showProductContainer } from "./homeProductCards.js";
import { getCartProductFromLs } from "./getCartProducts.js";
import { updateCartValue } from "./updateCartValue.js";

showProductContainer(products);
updateCartValue(getCartProductFromLs());
