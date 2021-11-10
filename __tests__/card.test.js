const Card = require("../src/card.js");

describe("Card", () => {
  let card;
  let stat;

  beforeEach(() => {
    card = new Card("Charmander");
    stat = 10;
  });

  it("can be instantiated", () => {
    const card = new Card("Charmander");

    expect(card).toBeInstanceOf(Object);
  });
});
