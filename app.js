import Cart from "./models/cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartlistNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartlistNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  // console.log(cartInstance);
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
