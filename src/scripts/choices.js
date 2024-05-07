import { debounce } from "./debounce";

const adjustElementPosition = (elem, count = 0) => {
  const rect = elem.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  if (rect.left < 0) {
    elem.style.left = "0";
    elem.style.right = "auto";
    elem.style.translate = "0 0";
  } else if (rect.right > viewportWidth) {
    elem.style.left = "auto";
    elem.style.right = "0";
    elem.style.translate = "0 0";
    console.log("выпал вправо");
  } else {
    elem.style.left = "50%";
    elem.style.right = "auto";
    elem.style.translate = "-50% 0";
  }

  const postRect = elem.getBoundingClientRect();
  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(elem, count);
  }
};

export const initChoices = () => {
  const btns = document.querySelectorAll(".choices__btn");
  const boxs = document.querySelectorAll(".choices__box");

  for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener("click", (e) => {
      for (let j = 0; j < boxs.length; ++j) {
        if (
          boxs[j].classList.contains("choices__box--open") &&
          e.target !== btns[j]
        ) {
          boxs[j].classList.remove("choices__box--open");
          btns[j].classList.remove("filter__select--open");
        }
      }

      boxs[i].classList.toggle("choices__box--open");
      btns[i].classList.toggle("filter__select--open");

      adjustElementPosition(boxs[i]);
    });
    window.addEventListener(
      "resize",
      debounce(() => {
        adjustElementPosition(boxs[i]);
      })
    );
  }
};