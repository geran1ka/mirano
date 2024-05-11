import { fetchProducts } from "./API";
import { filterForm, goodsSection, goodsTitle } from "./const";
import { debounce } from "./debounce";
import { callBackWithPreload } from "./preload";

export const filterProducts = () => {
  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get("type");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");
    const params = {};

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    callBackWithPreload(goodsSection, fetchProducts, params);
  };

  applyFilters();

  const applyPriceFilters = debounce(applyFilters, 500);

  filterForm.addEventListener("input", (e) => {
    const target = e.target;
    if (target.name === "type") {
      goodsTitle.textContent = target.labels[0].textContent;
      filterForm.minPrice.value = "";
      filterForm.maxPrice.value = "";

      applyFilters();
      return;
    }

    if (target.name === "minPrice" || target.name === "maxPrice") {
      applyPriceFilters();
    }
  });

  filterForm.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".filter__type-btn")) {
      callBackWithPreload(goodsSection, fetchProducts, {
        type: "bouquets",
        category: target.textContent,
      });
    }
  });
};
