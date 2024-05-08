import { CategoryItem } from "./CategoryItem";
import { store } from "./Srore";

export const initChoicesType = () => {
  const typeChoices = document.querySelector(".filter__choices--type");
  const filterTypeList = typeChoices.querySelector(".filter__type-list");

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();

    if (categories.size) {
      typeChoices.style.display = "";
    } else {
      typeChoices.style.display = "none";
    }

    filterTypeList.innerHTML = "";

    categories.forEach((category) => {
      filterTypeList.append(CategoryItem(category));
    });

    store.subscribe(updateTypeChoicesVisibility);
  };
  updateTypeChoicesVisibility();
};
