export const initCart = () => {
  const cartOpen = document.querySelector(".header__cart-btn");
  const cartClose = document.querySelector(".cart__close");
  const cart = document.querySelector(".cart");

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
  cartOpen.addEventListener("click", toggleCart);

  cartClose.addEventListener("click", closeCart);

  window.addEventListener("keydown", (e) => {
    if (cart.closest(".cart_open") && e.key === "Escape") {
      closeCart();
    }
  });
};
