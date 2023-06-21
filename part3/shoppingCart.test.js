const shoppingCart = require("./shoppingCart");

describe('Testing for Shopping Cart', () => {

  test("addToCart", () => {
    shoppingCart.addToCart("item1", 3);
    expect(cart).toEqual([
      {item:"item1", quantity:8}
    ]);
  });

  test("removeFromCart", () => {
    shoppingCart.addToCart("item1", 3);
    shoppingCart.removeFromCart("item1", 2);

    expect(cart).toEqual([
      {item:"item1", quantity:3},
      {item:"item3", quantity:2}
    ]);
  });

  test("calculateTotal function calculates the total cost correctly", () => {
    shoppingCart.addToCart("item1", 2);
    expect(shoppingCart.calculateTotal()).toBe(6);
  });
});
