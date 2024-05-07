import { fetchProducts } from "./API";
import { ProductCard } from "./ProductCard";

export const renderProducts = async () => {
  const goodsList = document.querySelector(".goods__list");

  const products = await fetchProducts();

  goodsList.innerHTML = "";

  goodsList.append(...products.map((item) => ProductCard(item)));
};
