import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { buyNow } from "./buyNow";

export const showProductContainer = (
  products,
  containerSelector = "#productContainer"
) => {
  const productContainer = document.querySelector(containerSelector);
  const productTemplate = document.querySelector("#productTemplate");

  if (!productContainer || !productTemplate) {
    console.warn("Product container or template not found");
    return;
  }

  productContainer.innerHTML = "";

  products.forEach((product) => {
    const { id, category, name, image, price, description, stock } = product;

    const productClone = document.importNode(productTemplate.content, true);

    const cardDiv = productClone.querySelector(".cards");
    cardDiv.setAttribute("id", `card${id}`);

    const imgPath = image.startsWith("../")
      ? image.replace("../", "./")
      : image;
    const imgElem = productClone.querySelector(".productImage");
    imgElem.src = imgPath;
    imgElem.alt = name;

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;

    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;

    const stockElement = productClone.querySelector(".stockElement");
    stockElement.addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    const addCartBtn = productClone.querySelector(".add-to-cart-button");
    addCartBtn.addEventListener("click", (event) => {
      addToCart(event, id, stock);
    });

    const buyNowBtn = productClone.querySelector(".buy-now-button");
    buyNowBtn.addEventListener("click", (event) => {
      buyNow(event, id, stock);
    });

    productContainer.append(productClone);
  });
};
