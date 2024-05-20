import { sendOrder } from "./API";
import { cartElem, cartOrderBtn } from "./const";
import { Order } from "./Order";
import { OrderSuccess } from "./OrderSuccess";
import { cartStore } from "./Store";

const openOrder = () => {
  console.log("openOrder");
  const cart = cartStore.getCart();
  cartElem.classList.remove("cart_open");
  const totalPriceValue = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const order = Order(totalPriceValue);

  document.body.append(order);
  order.addEventListener("click", ({ target }) => {
    if (target === order || target.closest(".order__close")) {
      order.remove();
    }
  });

  const form = order.querySelector(".order__form");

  form.addEventListener("submit", async (e) => {
    console.log("submit");
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      buyer: {
        name: formData.get("name-buyer"),
        phone: formData.get("phone-buyer"),
      },
      recipient: {
        name: formData.get("name-recipient"),
        phone: formData.get("phone-recipient"),
      },
      address: `${formData.get("street")} ${formData.get("house")} ${formData.get("apartment")}`,
      paymentOnline: `${formData.get("payment-online") === "true"}`,
      deliveryDate: formData.get("delivery-data"),
      deliveryTime: formData.get("delivery-time"),
    };

    console.log("data: ", data);
    const result = await sendOrder(data);
    console.log("result: ", result);
    const orderSuccess = OrderSuccess(result.orderId);

    order.textContent = "";
    order.append(orderSuccess);
    cartStore.clearCart();
  });
};

export const initOrder = () => {
  const checkCart = () => {
    const cart = cartStore.getCart();
    cartOrderBtn.disabled = !cart.length;
  };

  cartStore.subscribe(checkCart);

  cartOrderBtn.addEventListener("click", openOrder);
};
