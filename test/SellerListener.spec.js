const { expect } = require("chai");
const { Seller } = require("../src/Seller");
const { SellerListener } = require("../src/SellerListener");

describe("Given SellerListener", () => {
  it("should listen for publications", () => {
    const publishedProducts = [];

    const seller = new Seller();
    const sellerListener = new SellerListener(seller);

    sellerListener.onProductPublished((product) =>
      publishedProducts.push(product)
    );

    sellerListener.publish("torpedo");
    sellerListener.publish("frutillas");

    const expected = ["torpedo", "frutillas"];
    expect(publishedProducts).to.eqls(expected);
  });
  it("should stop listen for publications", () => {
    const publishedProducts = [];

    const seller = new Seller();
    const sellerListener = new SellerListener(seller);
    const handler = (product) => publishedProducts.push(product);

    sellerListener.onProductPublished(handler);
    sellerListener.removeProductPublished(handler);

    sellerListener.publish("torpedo");
    sellerListener.publish("frutillas");

    const expected = [];
    expect(publishedProducts).to.eqls(expected);
  });
});
