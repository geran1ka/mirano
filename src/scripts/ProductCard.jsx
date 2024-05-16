import { API_URL } from "./API";
import { cartStore } from "./Store";

export const ProductCard = ({ name, price, photoUrl, id }) => (
  <li class="goods__item">
    <article class="goods__card card">
      <img class="card__img" src={`${API_URL}${photoUrl}`} alt={name} />

      <div class="card__info">
        <h3 class="card__title">{name}</h3>

        <div class="card__order">
          <p class="card__delivery">сегодня в&nbsp;14:00</p>
          <button
            class="card__btn-cart btn"
            aria-label="Добавить букет в корзину"
            onMouseEnter={(e) => {
              e.target.textContent = "В корзину";
            }}
            onMouseLeave={(e) => {
              e.target.innerHTML = `${price}&nbsp;₽`;
            }}
            onClick={() => cartStore.addProductCart(id)}
          >
            {price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  </li>
);
