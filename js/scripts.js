function Pizza(nameIn, sizeIn, crustIn, toppingsIn){
  this.name = nameIn;
  this.size = sizeIn;
  this.crust = crustIn; //Will be either Normal or Special
  this.toppings = toppingsIn;
}
Pizza.prototype.cost = function(){
  var thisPizzasCost;
  thisPizzasCost += this.size/2 * 2; //Formula I'm using to calculate cost of Pizza based on Size;
  thisPizzasCost += 2*(this.toppings.length); //Costs 2 Dollars per topping
  if(this.crust == special){
    thisPizzasCost += 2;
  }
  return thisPizzasCost;
}
