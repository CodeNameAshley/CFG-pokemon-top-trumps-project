const Card = require("../src/card.js");

describe("Card", () => {
  it("can be instantiated", () => {
    const card = new Card("Charmander");

    expect(card).toBeInstanceOf(Object);
  });
});
