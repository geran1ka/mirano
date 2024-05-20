const openSelect = () => {
  const selecrtWrapper = document.querySelector(".order__select-wrapper");
  selecrtWrapper.classList.add("order__select-wrapper_active");
};

const closeSelect = () => {
  const selecrtWrapper = document.querySelector(".order__select-wrapper");
  selecrtWrapper.classList.remove("order__select-wrapper_active");
};

export const Order = (totalPriceValue) => {
  const date = new Date();

  date.setDate(date.getDate() + 1);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  const deliveryDate = `${day}.${month}`;

  return (
    <div class="order">
      <div class="order__wrapper">
        <h2 class="order__title">Оформить заказ</h2>

        <form id="order" class="order__form">
          <fieldset class="order__fieldset">
            <legend class="order__ledgend">Данные заказчика</legend>

            <div class="order__input-group">
              <input
                type="text"
                class="order__input"
                name="name-buyer"
                placeholder="Имя"
              />
              <input
                type="text"
                class="order__input"
                name="phone-buyer"
                placeholder="Телефон"
              />
            </div>
          </fieldset>
          <fieldset class="order__fieldset">
            <legend class="order__ledgend">Данные получателя</legend>

            <div class="order__input-group">
              <input
                type="text"
                class="order__input"
                name="name-recipient"
                placeholder="Имя"
              />
              <input
                type="text"
                class="order__input"
                name="phone-recipient"
                placeholder="Телефон"
              />
            </div>
          </fieldset>
          <fieldset class="order__fieldset">
            <legend class="order__ledgend">Адрес</legend>

            <div class="order__input-group">
              <input
                type="text"
                class="order__input"
                name="street"
                placeholder="Улица"
              />
              <input
                type="text"
                class="order__input order__input_min"
                name="house"
                placeholder="Дом"
              />
              <input
                type="text"
                class="order__input order__input_min"
                name="apartment"
                placeholder="Квартира"
              />
            </div>
          </fieldset>
          <fieldset class="order__fieldset">
            <div class="order__payment">
              <label class="order__label-radio">
                <input
                  class="order__radio"
                  type="radio"
                  name="payment-online"
                  value="true"
                  checked
                />
                <span>Оплата онлайн</span>
              </label>
            </div>

            <div class="order__delivery">
              <label for="delivery" class="order__label-delivery">
                Доставка {deliveryDate}
              </label>
              <input type="hidden" name="delivery-data" value={deliveryDate} />

              <div class="order__select-wrapper">
                <select
                  class="order__select"
                  name="delivery-time"
                  id="delivery"
                  onFocus={openSelect}
                  onBlur={closeSelect}
                >
                  <option value="9-12">с 9:00 до 12:00</option>
                  <option value="12-15">с 12:00 до 15:00</option>
                  <option value="15-18">с 15:00 до 18:00</option>
                  <option value="18-21">с 18:00 до 21:00</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>

        <div class="order__footer">
          <p class="order__totap-price">{totalPriceValue}&nbsp;₽</p>
          <button class="order__button" type="submit" form="order">
            Заказать
          </button>
        </div>
      </div>

      <button
        class="order__close"
        aria-label="Закрыть модальное окно оформления заказа"
      >
        &times;
      </button>
    </div>
  );
};
