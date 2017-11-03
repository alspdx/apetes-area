var pizzaOrder;

function Pizza (size, meats, veggies, cheeses){
  this.size = size;
  this.meats = meats;
  this.veggies = veggies;
  this.cheeses = cheeses;
}

Pizza.prototype.basePrices = function() {
  if (this.size === "magro") {
    return 12
  } else if (this.size === "mezzano") {
    return 16
  } else if (this.size === "grasso") {
    return 20
  }
}

Pizza.prototype.pizzaToppingMultiplier = function() {
  if (this.size === "magro") {
    return 1
  } else if (this.size === "mezzano") {
    return 1.5
  } else if (this.size === "grasso") {
    return 2
  }
}

Pizza.prototype.vegPrice = function() {
  var veggies = this.veggies;
  return veggies.length * (1 * this.pizzaToppingMultiplier());
}

Pizza.prototype.meatCheesePrice = function() {
  var meats = this.meats;
  var cheeses = this.cheeses;
  return (meats.length + cheeses.length) * (2 + this.pizzaToppingMultiplier());
}

Pizza.prototype.pizzaPrice = function() {
  return (this.basePrices() + this.vegPrice() + this.meatCheesePrice())
}


$(function() {
  $("#order-pizza-input").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#size-input input:radio:checked").val();
    console.log(sizeInput);
    var meatsInput = $("#meats-input input:checkbox:checked").map(function() {
      return $(this).val();
    }).get();
    console.log(meatsInput);
    var veggiesInput = $("#veggies-input input:checkbox:checked").map(function() {
      return $(this).val();
    }).get();
    console.log(veggiesInput);
    var cheeseInput = $("#cheese-input input:checkbox:checked").map(function() {
      return $(this).val();
    }).get();
    console.log(cheeseInput);
    pizzaOrder = new Pizza(sizeInput, meatsInput, veggiesInput, cheeseInput);
    console.log(pizzaOrder.pizzaPrice());
    console.log(pizzaOrder.pizzaToppingMultiplier());
  });
});
