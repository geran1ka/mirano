import { fetchProducts } from "./API";
import {
  filterRadioInputs,
  goodsSection,
  goodsTitle,
  headerForm,
} from "./const";
import { callBackWithPreload } from "./preload";

export const initSearchProducts = () => {
  headerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get("search").trim();

    if (searchQuery) {
      goodsTitle.textContent = "Результат поиска";

      callBackWithPreload(goodsSection, fetchProducts, { search: searchQuery });

      headerForm.reset();
      filterRadioInputs.forEach((input) => {
        if (!input.checked) {
          return;
        }
        input.checked = false;
      });
    }
  });
};
