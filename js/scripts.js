var myPremadePizzaList = [];//Will store standard Pizzas
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
  return "Name: " + this.name + "Size: " + this.size + "Crust: " + this.crust + "Toppings: " + this.toppings.toString() + "Cost: " + this.cost();
}
$(document).ready(function(){
  $("filler").click(function(){
  });
  $("form#pizzaForm").submit(function(event) {
  event.preventDefault();

  });
});

var one = new Pizza("Cheese", 12, "Normal", ["Anchovies, Tomatoes"]);
one.cost();
one.toString();
