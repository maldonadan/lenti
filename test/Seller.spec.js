const { expect } = require("chai");
const { Seller } = require("../src/Seller");

describe("Given a Seller", () => {
  describe("When is just created", () => {
    it("should has nothing to offer", () => {
      const seller = new Seller();
      const actual = seller.offers("helado torpedo");
      const expected = false;

      expect(actual).to.eqls(expected);
    });
  });

  describe("When publish an product, for instance: helado torpedo", () => {
    it("should know it can offer it", () => {
      const seller = new Seller();

      seller.publish("helado torpedo");

      const actual = seller.offers("helado torpedo");
      const expected = true;

      expect(actual).to.eqls(expected);
    });
  });

  describe("When asked for offers based on text", () => {
    it("should return nothing if has no published products", () => {
      const seller = new Seller();

      const actual = seller.offersFor("torpedo");
      const expected = [];

      expect(actual).to.eqls(expected);
    });
    it("should offers products that match that text", () => {
      const seller = new Seller();

      seller.publish("helado torpedo");

      const actual = seller.offersFor("frutillas");
      const expected = [];

      expect(actual).to.eqls(expected);
    });
  });
});
