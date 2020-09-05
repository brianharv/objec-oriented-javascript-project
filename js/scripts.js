//Business Logic for Pizza Constructor
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.toppingsPrice = 0,
  this.sizeCost = 0,
  this.totalPrice = 0
}

Pizza.prototype.addToppings = function() {
  return this.toppingsPrice = this.toppings.length;
}  

// this.toppingsPrice = toppings.length;

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
  return this.sizeCost = price;
}  
  
Pizza.prototype.pizzaPrice = function () {
  return this.totalPrice = this.sizeCost + this.toppingsPrice;
}


// Business Logic for Shopping Cart
function ShoppingCart() {
  this.pizzas = [];
  this.pizzaId = 0;
}

ShoppingCart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignPizzaId();
  this.pizzas.push(pizza);
}

ShoppingCart.prototype.assignPizzaId = function() { //assign Id 
  this.pizzaId += 1;
  return this.pizzaId;
}

// User Interface Logic

function attachEventListeners(newPizza) {
  $("#confirm").click(function() {
    let sizePrice = newPizza.selectSize();
    let topPrice = newPizza.addToppings();
    let totalPrice = newPizza.pizzaPrice();

    $("#size-price").text(sizePrice);
    $("#toppings-price").text(topPrice);
    $("#pizza-price").text(totalPrice);
    $("#cost-output").show();
    $("#checkbox-output").hide();
    $("radio-output").hide();
  });
}

function resetCheckBoxes(){
  $('input[type=checkbox]').each(function() { 
    this.checked = false; 
  }); 
  $("input:radio[name=size]:checked").each(function() {
    this.checked = false;
  });

}



$(document).ready(function() {
  let shoppingCart = new ShoppingCart();    // Do this BEFORE submit in order to create Shopping Cart before submit function
    $("#radio-output").hide();
    $("#checkbox-output").hide();
    $("#cost-output").hide();
    $("#confirm").hide();
    $("#pizza-checkbox").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
    $("#pizza-size").text(pizzaSize);
    let toppingSelection = [];
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      //look at resetting the checkbox here
      const selectedToppings = $(this).val();
      $("#pizza-toppings").append("<li>" + selectedToppings + "</li>"); 
      toppingSelection.push(selectedToppings); 
    })
    let newPizza = new Pizza(pizzaSize, toppingSelection);
    shoppingCart.addPizza(newPizza);
    attachEventListeners(newPizza);
    resetCheckBoxes();
    $("#radio-output").show();
    $("#checkbox-output").show();
    $("#confirm").show();
    
    
  })
})
