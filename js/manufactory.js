"use strict";

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */

function Car () {
  // Create the manufactured date property (see above)
  this.manufacturedDate = Date();
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */

function Ford () {
  // Define the manufacturer instance variable
  this.manufacturer = "Ford";
}
// Set the prototype to a new Car instance

Ford.prototype = new Car();

function Bronco () {
	this.horsePower = 185;
	this.capacity = 5;
	this.awesomeIndex = 100;
}
// Set the prototype to appropriate model you created above and set the model name argument
Bronco.prototype = new Ford();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new Bronco();
var mySecondFavoriteCar = new Bronco();
var myThirdFavoriteCar = new Bronco();


myFirstFavoriteCar.plate_number = "2pezcme";
mySecondFavoriteCar.plate_number = "i8abug";
myThirdFavoriteCar.plate_number = "other1";

/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function Pinto () {
this.explodes = "sometimes";
this.tires = "maybe";
}

/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.

 */
Pinto.prototype = new Ford();
/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */


var theNewSolution = new Pinto();

theNewSolution.plate_number = "holycow";


console.log("My Garage", myFirstFavoriteCar, mySecondFavoriteCar,
	myThirdFavoriteCar, theNewSolution);











