var pizzaOrder

function Pizza (size, meats, veggies, cheeses){
  this.size = size;
  this.meats = meats;
  this.veggies = veggies;
  this.cheeses = cheeses;
}

Pizza.prototype.basePrice = function() {
  if (this.size === "magro") {
    return 12
  } else if (this.size === "mezzano") {
    return 16
  } else if (this.size === "grasso") {
    return 20
  }
}

Pizza.prototype.vegPrice = function() {
  var veggies = this.veggies;
  return veggies.length * (1);
}

Pizza.prototype.meatPrice = function() {
  var meats = this.meats;
  return meats.length * (2);
}

Pizza.prototype.pizzaPrice = function() {
  return (this.basePrice() + this.vegPrice() + this.meatPrice())
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
  });


});
