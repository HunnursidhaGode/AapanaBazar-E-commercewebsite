import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// call the function to display in the card
//console.log(products);
showProductContainer(products);
