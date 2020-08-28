//Business Logic for Pizza Constructor
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.toppingsPrice = 0,
  this.totalPrice = 0
}

Pizza.prototype.addToppings = function() {
  let priceOfToppings = 0;
  this.toppings.forEach(element => {
    priceOfToppings += 1;
  });
  this.toppingsPrice = priceOfToppings;
}

Pizza.prototype.selectSize = function() {
  let price = 0;
  if (this.size === "small") {
    price = 7;
  } else if (this.size === "medium") {
    price = 10;
  } else if (this.size === "large") {
    price = 15;
  } else if (this.size === "x-large") {
    price = 20;
  }
  return price;
}  
  
Pizza.prototype.pizzaPrice = function() {
  let subtotalToppings = addToppings();
  let subtotalSize = selectSize();
  this.totalPrice = subtotalSize + subtotalToppings;
}



// Business Logic for Shopping Cart
function ShoppingCart() {
  this.pizzas = [];
  this.pizzaId = 0;
}

ShoppingCart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignPizzaId();
  this.pizzas.push(pizza)
}

ShoppingCart.prototype.assignPizzaId = function() { //assign Id 
  this.pizzaId += 1;
  return this.pizzaId;
}


ShoppingCart.prototype.pizzaTracker = function(id) { //find contact or search
  for (let i=0; i< this.pizzas.length -1; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    } 
  };
  return false;
}

// User Interface Logic

let shoppingCart = new ShoppingCart();
/*
function displayPizzaSizeAndToppings(shoppingCartToDisplay) {
  let pizzaList = $("ul#pizza-toppings");
  let htmlForPizzaList = "";
  shoppingCartToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaList += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.toppings + "</li>";
  });
  pizzaList.html(htmlForPizzaList);
}
*/

$(document).ready(function() {
  $("#pizza-checkbox").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
    $("#pizza-size").text(pizzaSize);
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      const toppingSelection = $(this).val();
      $("#pizza-toppings").append(toppingSelection + "<br>");  
    })
    let newPizza = new Pizza(pizzaSize, selectedToppings)
    shoppingCart.addPizza(newPizza);
  })
})



/*
 for (let i= 0; i< this.toppings.length -1; i++) {
    if (i > 2) {                                                  //
        priceOfToppings += 1;
    }
  }
  */