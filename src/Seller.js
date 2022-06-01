class Seller {
  constructor() {
    this.products = [];
  }
  publish(product) {
    this.products.push(product);
  }
  offers(productToFind) {
    return this.products.some((product) => product.includes(productToFind));
  }
  offersFor(productToFind) {
    return this.products.filter((product) => product.includes(productToFind));
  }
}

module.exports = {
  Seller,
};
