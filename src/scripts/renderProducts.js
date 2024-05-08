import { fetchProducts } from "./API";
import { ProductCard } from "./ProductCard";
import { store } from "./Srore";

export const renderProducts = async () => {
  const goodsList = document.querySelector(".goods__list");

  const updateList = () => {
    const products = store.getProducts();
    goodsList.innerHTML = "";

    goodsList.append(...products.map((item) => ProductCard(item)));
  };

  store.subscribe(updateList);
  updateList();
};
