import { CartElem } from "./CartElem";
import { cartList, cartTotapPrice } from "./const";
import { cartStore } from "./Store";

export const renderCart = () => {
  const updateList = () => {
    const cart = cartStore.getCart();

    cartList.textContent = "";
    if (!cart.length) {
      const messageItem = document.createElement("li");
      messageItem.textContent = "Корзина пуста";
      messageItem.classList.add("cart__no-product");
      cartList.append(messageItem);
      cartTotapPrice.innerHTML = `0&nbsp;₽`;
      return;
    }

    const productCards = cart.map(CartElem);
    cartList.append(...productCards);

    const totalPriceValue = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );

    cartTotapPrice.innerHTML = `${totalPriceValue}&nbsp;₽`;
  };

  cartStore.subscribe(updateList);
  updateList();
};
