// Everything does exactly as its name suggests.
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }
  clear() {
    this.items = [];
  }
  total() {
    return this.items.reduce((totalPrice, currentItem) => {
      return totalPrice + (currentItem.pricePerUnit * currentItem.quantity);
    }, 0);
  }
}

module.exports = ShoppingCart;
