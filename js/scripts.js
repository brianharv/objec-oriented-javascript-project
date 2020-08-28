//Business Logic for Pizza Constructor
function Pizza(size, toppings, toppingsPrice) {
  this.size = size,
  this.toppings = toppings,
  this.toppingsPrice = toppingsPrice
}

Pizza.prototype.addToppings = function() {
  let toppingsPrice = 0;
  for (let i= 0; i< this.toppings.length -1; i++) {
    if (this.toppings[i] > 2) {
        this.toppingsPrice += 1;
    }
  }
  return toppingsPrice;
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

//let shoppingCart = new ShoppingCart();

//$(document).ready(function) 



/*
let toppingPrice = 0;
  for (let i=0; i< this.toppings.length -1; i++){
    if (this.toppings.length -1 > 3) {
      return toppingPrice += 1;
    }  
  }
  return toppingPrice;
  */