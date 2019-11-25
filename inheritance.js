// 1. **Story**: As a programmer, I can make a car.
// - Write a variable called `myCar` which is an instance of the class `Car`

class Car{
  constructor(model, year){
    this.model = model
    this.year = year
    this.wheels = 4
    this.lights = "off"
    this.turnSignal = "off"
    this.mph = 0
  }
  lightSwitch(){
    if(this.lights === "off"){
      this.lights = "on"
    } else {
      this.lights = "off"
    }
  }
  signalRight(){
    this.turnSignal = "right"
  }
  signalLeft(){
    this.turnSignal = "left"
  }
  carInfo(){
    return `The ${this.year} ${this.model} has ${this.wheels} wheels, the lights are currently ${this.lights}, the turn signal is currently ${this.turnSignal}, and it is going ${this.mph}mph.`
  }
}
var myCar = new Car("generic car", "any year")
myCar.lightSwitch()
console.log("myCar:", myCar)

// 2. **Story**: As a programmer, I can give my car a model on initialization.
// - The model for the car class can be "generic car"
// 3. **Story**: As a programmer, I can give my car a year on initialization. // - The year for the car class can be "any year"
// 4. **Story**:	As a programmer, I can tell how many wheels myCar has.
// - Calling the method `wheels` will return 4

console.log("wheels:", myCar.wheels)

// 4. **Story**:	As a programmer, I can make a Tesla car.
// - class Tesla inherits from class Car
// - create an object called myTesla which is a instance of class Tesla

class Tesla extends Car{
  constructor(model, year){
    super(model, year)
  }
  accelerate(){
    this.mph +=10
  }
  brake(){
    this.mph -=7
  }
}
var myTesla = new Tesla("s3", 2020)
myTesla.accelerate()
myTesla.brake()
console.log(myTesla.carInfo())
console.log("myTesla:", myTesla)

// 5. **Story**: As a programmer, I can give my Telsa a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 6. **Story**: As a programmer, I can give my Tesla a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class


// 7. **Story**:	As a programmer, I can make a Toyota car.
// - class Toyota inherits from class Car
// - create an object called myToyota which is a instance of class Toyota

class Toyota extends Car{
  constructor(model, year){
    super(model, year)
  }
  accelerate(){
    this.mph +=5
  }
  brake(){
    this.mph -=2
  }
}
var myToyota = new Toyota("4Runner", 2018)
myToyota.signalRight()
myToyota.accelerate()
myToyota.brake()
console.log("myToyota:", myToyota)

// 8. **Story**: As a programmer, I can give my Toyota a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 9. **Story**: As a programmer, I can give my Toyota a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 10. **Story**:	As a programmer, I can make a Volkswagen car.
// - class Volkswagen inherits from class Car
// - create an object called myVolkswagen which is a instance of class Volkswagen

class Volkswagen extends Car{
  constructor(model, year){
    super(model, year)
  }
  accelerate(){
    this.mph +=7
  }
  brake(){
    this.mph -=5
  }
}
var myVolkswagen = new Volkswagen("Jetta", 2001)
myVolkswagen.lightSwitch()
myVolkswagen.signalLeft()
myVolkswagen.accelerate()
myVolkswagen.brake()
console.log(myVolkswagen.carInfo())
console.log("myVolkswagen:", myVolkswagen)

// 11. **Story**: As a programmer, I can give my Volkswagen a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 12. **Story**: As a programmer, I can give my Volkswagen a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 13. **Story**: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// 14. **Story**: As a programmer, I can turn the lights in all my cars on and off.

// 15. **Story**:  As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// 16. **Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// 17. **Story**:	As a programmer, I can speed my Teslas up by 10 per acceleration.

// 18. **Story**:	As a programmer, I can slow my Teslas down by 7 per braking.

// 19. **Story**:	As a programmer, I can speed my Toyota up by 5 per acceleration.

// 20. **Story**:	As a programmer, I can slow my Toyota down by 2 per braking.

// 21. **Story**:	As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// 22. **Story**:	As a programmer, I can slow my Volkswagen down by 5 per braking.

// 23. **Story**:  As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
// - The method can be created in the parent class and accessed by all child classes
