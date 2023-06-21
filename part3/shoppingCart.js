
function addToCart(item, quantity) {
  if (!shoppingCart[item]) {
    shoppingCart[item] = 0;
  }
  shoppingCart[item] += quantity;
}

function removeFromCart(item, quantity) {
  if (shoppingCart[item]) {
    shoppingCart[item] -= quantity;
    if (shoppingCart[item] <= 0) {
      delete shoppingCart[item];
    }
  }
}

function calculateTotal() {
  let total = 0;
  for (const item in shoppingCart) {
    const itemQuantity = shoppingCart[item];
    const itemPrice = itemPrices[item];
    if (itemQuantity && itemPrice) {
      total += itemQuantity * itemPrice;
    }
  }
  return total;
}

module.exports = {addToCart, removeFromCart, calculateTotal};
