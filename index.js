import "@/scss/index.scss";

const header = document.querySelector(".header");
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener("resize", () => {
  headerHeight = header.offsetHeight;
});

window.addEventListener("scroll", () => {
  const scrollDistance = window.scrollY;

  if (scrollDistance > 200) {
    console.log(1);
    header.classList.add("header_fixed");
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove("header_fixed");
    body.style.paddingTop = `0`;
  }
});

// открытие фильтра

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
  window.addEventListener("resize", () => {
    adjustElementPosition(boxs[i]);
  });
}

const cartOpen = document.querySelector(".header__cart-btn");
const cartClose = document.querySelector(".cart__close");
const cart = document.querySelector(".cart");

cartOpen.addEventListener("click", () => {
  cart.classList.toggle("cart_open");
});

cartClose.addEventListener("click", () => {
  cart.classList.remove("cart_open");
});

window.addEventListener("keydown", (e) => {
  if (cart.closest(".cart_open") && e.key === "Escape") {
    cart.classList.remove("cart_open");
  }
});
