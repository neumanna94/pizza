var myPizzaOrders = []; //Will store all my stores current Pizza orders.

function Pizza(nameIn, sizeIn, crustIn, toppingsIn){
  this.name = nameIn;
  this.size = sizeIn;
  this.crust = crustIn; //Will be either Normal or Special
  this.toppings = toppingsIn;
}
Pizza.prototype.cost = function(){
  var thisPizzasCost = 0;
  thisPizzasCost += this.size/2 * 2; //Formula I'm using to calculate cost of Pizza based on Size;
  thisPizzasCost += 2*(this.toppings.length); //Costs 2 Dollars per topping not including first.
  if(this.crust == "Special"){
    thisPizzasCost += 2;
  }
  return thisPizzasCost;
}
Pizza.prototype.toString = function(){
  return "<strong>Name:</strong> " + this.name + "<br>" + " <strong>Size:</strong> " + this.size + "<br>" + " <strong>Crust:</strong> " + this.crust + "<br>" + " <strong>Toppings:</strong> " + this.toppings.toString() + "<br>" + " <strong>Cost:</strong> " + this.cost();
}

function printMyPizzaOrders(){
  $("#results").text("");
  $("#results").prepend("<h4><strong>" + "Pizza Order List:" + "</strong><h4>");
  var resultString = "";
  var totalCost = 0;
  for(var i = 0; i < myPizzaOrders.length; i ++){
    resultString = "";
    resultString += myPizzaOrders[i].toString();
    totalCost += myPizzaOrders[i].cost();
    $("#results").append("<p>" + resultString + "</p>");
  }
    $("#results").append("<h6><strong>" + "Total Cost: "+ "</strong></h6>" + totalCost);
}
$(document).ready(function(){
  $("#showResults").click(function(){
      $("#results").toggle();
      printMyPizzaOrders();
  });
  $("form#pizzaForm").submit(function(event) {
  event.preventDefault();
  var nameIn = $("#name").val();
  var sizeIn = parseInt($("#sizeOf").val());
  var crustIn = $("#crust").val();
  var toppings = [];
  //Looping through each topping Checkbox;
  $("input:checkbox[name=topping]:checked").each(function(){
    toppings.push($(this).val());
  });
  var newPizza = new Pizza(nameIn, sizeIn, crustIn,toppings);
  myPizzaOrders.push(newPizza);

  });
});
