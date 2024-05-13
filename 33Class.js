/**
 * In JavaScript, a class is a blueprint for creating objects with predefined properties and methods.
 * It's a way to define a new type of object, encapsulating data and behavior into a single unit.
 */

class Car {
  constructor(model) {
    this.model = model;
  }
}
const benz = new Car("Mercedes Benz");
console.log(benz.model);

/*

Here, we're creating a blueprint called 'Car'. Think of it as a template for making cars.

* The 'constructor' method is like a special function that gets called when we make a new car using this blueprint.
 It sets up the car when it's first created.
* model is a piece of information that every car made from this blueprint will have. It's like a characteristic that describes the car.

* const benz = new Car("Mercedes Benz");
Now, we're using the Car blueprint to make a new car called benz. We're telling it that the model of this car is "Mercedes Benz".


* console.log(benz.model);
Here, we're asking the benz car to tell us what its model is. It should print out "Mercedes Benz"
 because that's what we told it when we made the car.

So, in simple terms, we're creating a blueprint for cars called Car, and each car made from this blueprint will have a model.
 When we make a new car using this blueprint, we can tell it what model it should have.
*/

// Using getters and setters
/**
 * Obtain a value from an object
 * Set a value of a property to an object
 *
 * Getters functions are simply meant to return or get the values of an object private variable to the user,
 * without the user directly accessing the private variable
 */
function makeClass() {
  class Temperature {
    constructor(temp) {
      this._temp = 5 / 9(temp - 32); //  Fahrenheit to Celsius
    }
  }
}
