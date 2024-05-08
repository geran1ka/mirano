import { fetchProducts } from "./API";
import { debounce } from "./debounce";

const filterType = (type) => {
  fetchProducts({ type: type.value });
  const goodsTitle = document.querySelector(".goods__title");
  goodsTitle.textContent = document
    .querySelector(`[for="${type.value}"]`)
    .textContent.toLocaleUpperCase();
};

const filterPrice = (type, price) => {
  fetchProducts({ type: type.value, [price.name]: price.value });
};

export const filterProducts = () => {
  const filterForm = document.querySelector(".filter__form");
  filterType(filterForm.type);

  const handleInput = (e) => {
    const target = e.target;

    if (target.name === "minPrice" && target.value !== "") {
      filterPrice(filterForm.type, filterForm.minPrice);
    } else if (target.name === "maxPrice" && target.value !== "") {
      filterPrice(filterForm.type, filterForm.maxPrice);
    } else {
      filterType(filterForm.type);
    }
  };

  const debounceHandleInput = debounce(handleInput, 300);

  filterForm.addEventListener("input", debounceHandleInput);

  filterForm.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".filter__type-btn")) {
      fetchProducts({ type: "bouquets", category: target.textContent });
    }
  });
};
