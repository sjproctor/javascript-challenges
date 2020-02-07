// Challenges
// Coffee Maker

class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee.
var blackCoffee = new Coffee("black", "no", "no")
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars.
var blondeCoffee = new Coffee("blonde", 1, 2)
console.log(blondeCoffee.coffeeProfile())

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var sweetCoffee = new Coffee("sweet", "no", 2)
console.log(sweetCoffee.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte{
  constructor(flavor, milk, shot){
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  }
  // Write a method for your Latte class that outputs the latte's profile.
  latteProfile(){
    return `${this.flavor} latte with ${this.milk} milk and ${this.shots()}.`
  }
  shots(){
    if (this.shot > 1){
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }

}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var singleShot = new Latte("Regular", "regular", 1)
console.log(singleShot.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelnut = new Latte("Hazelnut", "almond", 2)
console.log(hazelnut.latteProfile())

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder{
  constructor(height, radius){
    this.height = height
    this.radius = radius
  }
  calculateVolume(){
    let pi = Math.PI
    let volume = pi*this.radius*2*this.height
    return `The volume is ${volume}.`
  }
}
// Write the code that creates three unique cylinder objects
var cylinder1 = new Cylinder(2, 4)
var cylinder2 = new Cylinder(3, 5)
var cylinder3 = new Cylinder(4, 6)
console.log(cylinder1.calculateVolume())
console.log(cylinder2.calculateVolume())
console.log(cylinder3.calculateVolume())
