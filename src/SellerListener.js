class SellerListener {
  constructor(seller) {
    this.listeners = [];
    this.seller = seller;
  }
  onProductPublished(listener) {
    this.listeners.push(listener);
  }
  removeProductPublished(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }
  publish(product) {
    this.seller.publish(product);
    this.listeners.forEach((listener) => listener(product));
  }
}

module.exports = {
  SellerListener,
};
