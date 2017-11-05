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
  return (this.basePrices() + ((this.vegPrice() + this.meatCheesePrice()) * this.pizzaToppingMultiplier())).toFixed(2)
}

Pizza.prototype.toppingsOutput = function() {
  var meats = this.meats;
  var veggies = this.veggies;
  var cheeses = this.cheeses;
  var toppings = meats.concat(veggies.concat(cheeses));
  var toppingsBeforeAnd = [];
  for (i = 0; i < (toppings.length - 1); i++) {
    toppingsBeforeAnd.push(toppings[i]);
  }
  var output = "You ordered a " + this.size + " size";
  if (toppings.length > 1) {
    output += " pizza with " + toppingsBeforeAnd.join(", ") + " and " + toppings[toppings.length - 1] + ".";
  } else if (toppings.length = 1) {
    output += " pizza with " + toppings[1] + "."
  } else {
    output += " plain cheese pizza."
  }
  return output
}

$(function() {

  $("#display-form-button").click(function() {
    $(".title-screen").slideToggle();
    $(".pizza-order").slideToggle();
  });

  $("#another-pizza-button").click(function() {
    $("#new-pizzas").append('<div class="new-pizza">' +
                            '<div id="size-input">' +
                              '<h3>Please select a pizza size:</h3>' +
                              '<h4>$12/$16/$20</h4>' +
                              '<div class="form-check form-check-inline">' +
                                '<label class="form-check-label">' +
                                  '<input class="form-check-input" type="radio" name="pizza-size" value="magro" required>' +
                                  'Magro (25cm)' +
                                '</label>' +
                              '</div>' +
                              '<div class="form-check form-check-inline">' +
                                '<label class="form-check-label">' +
                                  '<input class="form-check-input" type="radio" name="pizza-size" value="mezzano">' +
                                  'Mezzano (35cm)' +
                                '</label>' +
                              '</div>' +
                              '<div class="form-check form-check-inline">' +
                                '<label class="form-check-label">' +
                                  '<input class="form-check-input" type="radio" name="pizza-size" value="grasso">' +
                                  'Grasso (45cm)' +
                                '</label>' +
                              '</div>' +
                              '</div>' +
                              '<div class="card-group">' +
                              '<div class="card">' +
                                '<div class="card-body">' +
                                  '<h3 class="card-title">Carni</h3>' +
                                  '<h4>$2/$3/$4</h4>' +
                                  '<div id="meats-input">' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="prosciutto di parma">' +
                                        'Prosciutto di Parma' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="fennel sausage">' +
                                        'Fennel sausage' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="calabrese salami">' +
                                        'Calabrese salami' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="pancetta">' +
                                        'Pancetta' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="mortadella">' +
                                        'Mortadella' +
                                      '</label>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                              '<div class="card">' +
                                '<div class="card-body">' +
                                  '<h3 class="card-title">Verdure</h3>' +
                                  '<h4>$1/$1.5/$2</h4>' +
                                  '<div id="veggies-input">' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="leeks">' +
                                        'Leeks' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="heirloom tomato">' +
                                        'Heirloom tomato' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="mushroom">' +
                                        'Mushroom' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="arugula">' +
                                        'Arugula' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="kale">' +
                                        'Kale' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="scallion">' +
                                        'Scallion' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="roasted potato">' +
                                        'Roasted potato' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="Mama Lil\'s peppers">' +
                                        'Mama Lil\'s peppers' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="garlic">' +
                                        'Garlic' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="Castelvetrano olives">' +
                                        'Castelvetrano olives' +
                                      '</label>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                              '<div class="card">' +
                                '<div class="card-body">' +
                                  '<h3 class="card-title">Formaggi</h3>' +
                                  '<h4>$2/$3/$4</h4>' +
                                  '<div id="cheese-input">' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="mozzarella di bufala">' +
                                        'Mozzarella di bufala' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="taleggio">' +
                                        'Taleggio' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="robiola">' +
                                        'Robiola' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="pecorino romano">' +
                                        'Pecorino Romano' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="form-check">' +
                                      '<label class="form-check-label">' +
                                        '<input class="form-check-input" type="checkbox" value="provolone piccante">' +
                                        'Provolone piccante' +
                                      '</label>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                            '</div>'
    );
  });

  $("#order-input").submit(function(event) {
    event.preventDefault();

    var allPizzas = [];

    $(".new-pizza").each(function() {
      var sizeInput = $(this).find("#size-input input:radio:checked").val();
      var meatsInput = $(this).find("#meats-input input:checkbox:checked").map(function() {
        return $(this).val();
      }).get();
      var veggiesInput = $(this).find("#veggies-input input:checkbox:checked").map(function() {
        return $(this).val();
      }).get();
      var cheeseInput = $(this).find("#cheese-input input:checkbox:checked").map(function() {
        return $(this).val();
      }).get();

      var pizzaOrder = new Pizza(sizeInput, meatsInput, veggiesInput, cheeseInput)
      allPizzas.push(pizzaOrder)
      $("#order-output").text(pizzaOrder.toppingsOutput());
      $("#price-output").text(pizzaOrder.pizzaPrice());
    });

    $(".pizza-order").slideToggle();
    $(".pizza-recall").slideToggle();
  });
});
