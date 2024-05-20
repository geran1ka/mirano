import { cartClose, cartElem, cartOpen } from "./const";
import { renderCart } from "./renderCart";
import { cartStore } from "./Store";

const toggleCart = () => {
  cartElem.classList.toggle("cart_open");

  if (cartElem.closest(".cart_open") && window.innerWidth > 1360) {
    cartElem.scrollIntoView({ behavior: "smooth" });
  }
};

const closeCart = () => {
  cartElem.classList.remove("cart_open");
};

export const initCart = async () => {
  await cartStore.init();

  cartOpen.textContent = cartStore.getCart().length;
  cartOpen.addEventListener("click", toggleCart);

  renderCart();

  cartStore.subscribe(() => {
    cartOpen.textContent = cartStore.getCart().length;
  });

  cartClose.addEventListener("click", closeCart);

  window.addEventListener("keydown", (e) => {
    if (cart.closest(".cart_open") && e.key === "Escape") {
      closeCart();
    }
  });
};
