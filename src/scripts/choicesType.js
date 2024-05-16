import { CategoryItem } from "./CategoryItem";
import { choicesBox, filterTypeList, typeChoices } from "./const";
import { ListType } from "./ListType";
import { productStore } from "./Store";

export const initChoicesType = () => {
  // const typeChoices = document.querySelector(".filter__choices--type");
  // const choicesBox = document.querySelector(".filter__choices-box--type");
  // const filterTypeList = typeChoices.querySelector(".filter__type-list");

  const updateTypeChoicesVisibility = () => {
    const categories = productStore.getCategories();

    if (categories.size) {
      typeChoices.style.display = "";
      choicesBox.textContent = "";

      const listType = ListType([...categories]);
      choicesBox.append(listType);
    } else {
      typeChoices.style.display = "none";
    }

    filterTypeList.innerHTML = "";

    categories.forEach((category) => {
      filterTypeList.append(CategoryItem(category));
    });

    productStore.subscribe(updateTypeChoicesVisibility);
  };
  updateTypeChoicesVisibility();
};

export const initChoicesTypeAlt = () => {
  // const typeChoices = document.querySelector(".filter__choices--type");
  // const filterTypeList = typeChoices.querySelector(".filter__type-list");

  const updateTypeChoicesVisibility = () => {
    const categories = productStore.getCategories();

    if (categories.size) {
      typeChoices.style.display = "";
      filterTypeList.innerHTML = "";

      categories.forEach((category) => {
        filterTypeList.append(CategoryItem(category));
      });
    } else {
      typeChoices.style.display = "none";
    }

    productStore.subscribe(updateTypeChoicesVisibility);
  };
  updateTypeChoicesVisibility();
};
