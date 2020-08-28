//Business Logic for Pizza Constructor
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.addToppings = function(toppings) {
  let toppingPrice = 0;
  if (this.toppings.legnth -1 > 3) {
    toppingPrice += 1;
  } return toppingPrice;
}




// Business Logic for Shopping Cart
function ShoppingCart() {
  this.pizzas = [];
  this.pizzaId = 0;
}

ShoppingCart.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza),
  this.totalPizzas();
}

ShoppingCart.prototype.assignPizzaId = function() { //assign Id /giftCount
  this.pizzaId += 1;
  return this.pizzaId;
}


ShoppingCart.prototype.pizzaTracker = function(id) { //find contact or search
  for (let i=0; i< this.pizzas.length -1; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i]. id == id) {
        return this.pizzas[i];
      }
    } 
  };
  return false;
}

// User Interface Logic

//$(document).ready(function) 
