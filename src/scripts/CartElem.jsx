import { API_URL } from "./API";
import { cartStore } from "./Store";

export const CartElem = ({ id, name, photoUrl, price, quantity }) => (
  <li class="cart__item">
    <article class="card-order">
      <img class="card-order__img" src={`${API_URL}${photoUrl}`} alt={name} />
      <div class="card-order__content">
        <h3 class="card-order__subtitle">{name}</h3>
        <div class="card-order__count-wrapper">
          <button
            class="card-order__btn card-order__btn--minus"
            onClick={() => {
              cartStore.postCart({ id, quantity: quantity - 1 });
            }}
          >
            -
            {/* <svg
              width="5"
              height="2"
              viewBox="0 0 5 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.44886 0.0880681V1.18182H-0.00568183V0.0880681H4.44886Z"
                fill="#2E3514"
              />
            </svg> */}
          </button>
          <input
            class="card-order__count"
            type="number"
            min="0"
            max="50"
            value={quantity}
          />
          <button
            class="card-order__btn card-order__btn--plus"
            onClick={() => {
              cartStore.postCart({ id, quantity: quantity + 1 });
            }}
          >
            +
            {/* <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.05682 7.30398V0.741477H4.17045V7.30398H3.05682ZM0.332386 4.57955V3.46591H6.89489V4.57955H0.332386Z"
                fill="#2E3514"
              />
            </svg> */}
          </button>
        </div>
        <p class="card-order__price">{price * quantity}&nbsp;₽</p>
      </div>
    </article>
  </li>
);
