import { fetchProducts } from "./API";
import { goodsList } from "./const";
import { ProductCard } from "./ProductCard";
import { productStore } from "./Store";

export const renderProducts = async () => {
  // const goodsList = document.querySelector(".goods__list");

  const updateList = () => {
    const products = productStore.getProducts();
    goodsList.innerHTML = "";

    if (!products.length) {
      const messageItem = document.createElement("li");
      messageItem.classList.add("goods__no-product");
      messageItem.textContent = "Товары не найдены";
      goodsList.append(messageItem);
      return;
    }

    goodsList.append(...products.map((item) => ProductCard(item)));
  };

  productStore.subscribe(updateList);
  updateList();
};
