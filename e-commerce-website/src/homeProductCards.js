import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products = []) => {
  if (!Array.isArray(products) || products.length === 0) {
    console.warn("⚠ No products found.");
    return;
  }

  products.forEach((product) => {
    const { id, category, name, image, price, description, stock } = product;

    const productClone = document.importNode(productTemplate.content, true);

    // Give each card a unique ID
    const cardDiv = productClone.querySelector(".cards");
    cardDiv.setAttribute("id", `card${id}`);

    // Fix: Proper image path handling
    let imgPath = image;
    if (imgPath.startsWith("../")) {
      imgPath = imgPath.replace("../", "./");
    }
    productClone.querySelector(".productImage").src = imgPath;
    productClone.querySelector(".productImage").alt = name;

    // Add product details
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;

    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;

    // Quantity toggle (+/-)
    const stockElement = productClone.querySelector(".stockElement");
    stockElement.addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    // Add to Cart button
    const addCartBtn = productClone.querySelector(".add-to-cart-button");
    addCartBtn.addEventListener("click", (event) => {
      addToCart(event, id, stock);
    });

    // Add final product card into DOM
    productContainer.append(productClone);
  });
};
