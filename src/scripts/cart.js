import { cart, cartClose, cartOpen } from "./const";
import { renderCart } from "./renderCart";
import { cartStore } from "./Store";

const toggleCart = () => {
  cart.classList.toggle("cart_open");

  if (cart.closest(".cart_open") && window.innerWidth > 1360) {
    cart.scrollIntoView({ behavior: "smooth" });
  }
};

const closeCart = () => {
  console.log("closeCart");
  cart.classList.remove("cart_open");
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
