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
  return veggies.length;
}

Pizza.prototype.meatCheesePrice = function() {
  var meats = this.meats;
  var cheeses = this.cheeses;
  return (meats.length + cheeses.length) * 2;
}

Pizza.prototype.pizzaPrice = function() {
  return (this.basePrices() + ((this.vegPrice() + this.meatCheesePrice()) * this.pizzaToppingMultiplier()))
}


$(function() {
  $("#display-form-button").click(function() {
    $(".title-screen").slideToggle();
    $(".pizza-order").slideToggle();
  });


  $("#order-input").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#size-input input:radio:checked").val();
    var meatsInput = $("#meats-input input:checkbox:checked").map(function() {
      return $(this).val();
    }).get();
    var veggiesInput = $("#veggies-input input:checkbox:checked").map(function() {
      return $(this).val();
    }).get();
    var cheeseInput = $("#cheese-input input:checkbox:checked").map(function() {
      return $(this).val();
    }).get();
    pizzaOrder = new Pizza(sizeInput, meatsInput, veggiesInput, cheeseInput);
    console.log(pizzaOrder)
    $("#order-output").text(pizzaOrder.pizzaPrice());
    $(".pizza-order").slideToggle();
    $(".pizza-recall").slideToggle();
  });
});
