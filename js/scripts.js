function Pizza (size, meats, veggies, cheeses){
  this.size = size;
  this.meats = meats;
  this.veggies = veggies;
  this.cheeses = cheeses;
}

Pizza.prototype.recall = function() {

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
    var newPizzaOrder = new Pizza(sizeInput, meatsInput, veggiesInput, cheeseInput);

  });
});
