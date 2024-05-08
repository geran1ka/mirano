class Store {
  constructor() {
    this.observers = [];
    this.products = [];
    this.categories = new Set();
  }

  // метод для добавления новых наблюдателей, функций которые вызываются при изменении состояния
  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }

  // метод для уведомления всех наблюдателей об изменения в хранилище
  notifyObservers() {
    this.observers.forEach((observer) => observer());
  }

  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObservers();
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(products) {
    this.categories.clear();

    products.forEach((product) => {
      if (product.categories) {
        product.categories.forEach((category) => {
          this.categories.add(category);
        });
      }
    });
    this.notifyObservers();
  }
}

export const store = new Store("Иван", 33);
