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

const cart = new ShoppingCart();
cart.addItem("item 1", 1, 15.5);
cart.addItem("item 2", 2, 3);
cart.addItem("item 3", 10, 2);
cart.addItem("item 4", 0, 2);
cart.addItem("item 5", 2, 0);

console.log(cart.total())
module.exports = ShoppingCart;
