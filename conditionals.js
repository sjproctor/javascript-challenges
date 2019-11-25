// Challenges
// Make sure you try different options and change the variables to ensure properly working code.

// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 34
if(item <= 100){
  console.log("in budget")
} else {
  console.log("not in budget")
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let mood = "hungry"
if(mood === "hungry"){
  console.log("eat food")
} else {
  console.log("keep coding")
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "green"
if(trafficLight === "green"){
  console.log("go")
} else if(trafficLight === "yellow"){
  console.log("slow down")
} else if(trafficLight === "red"){
  console.log("stop")
} else {
  console.log("something went wrong")
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
let myFirstNum = 35
let mySecondNum = 71
if(myFirstNum > mySecondNum){
  console.log(`The larger number is ${myFirstNum}`)
} else if(myFirstNum < mySecondNum){
  console.log(`The larger number is ${mySecondNum}`)
} else if(myFirstNum === mySecondNum){
  console.log(`${myFirstNum} is equal to ${mySecondNum}`)
} else {
  console.log("something went wrong")
}

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let myNum = 56
if(myNum === 0){
  console.log(`The number is ${myNum}.`)
} else if(myNum % 2 === 0){
  console.log(`${myNum} is even.`)
} else if(myNum % 2 !== 0){
  console.log(`${myNum} is odd.`)
} else {
  console.log("something went wrong")
}

// Stretch Challenges
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available.
let myGrade = 55
if(myGrade === 100){
  console.log("Perfect Score!")
} else if(myGrade === 0){
  console.log("No grade available.")
}else if(myGrade >= 90){
  console.log(`${myGrade} gets you an A`)
} else if(myGrade >= 80){
  console.log(`${myGrade} gets you a B`)
} else if(myGrade >= 70){
  console.log(`${myGrade} gets you a C`)
} else if(myGrade >= 60){
  console.log(`${myGrade} gets you a D`)
} else if(myGrade >= 1){
  console.log(`${myGrade} gets you an F`)
} else {
  console.log("something went wrong")
}

// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
let myVar = true
if(typeof myVar === "boolean"){
  console.log(`${myVar} is a boolean`)
} else if(typeof myVar === "string"){
  console.log(`${myVar} is a string`)
} else {
  console.log("something went wrong")
}

// Epic Challenge
// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password". If the user’s password is equal to 8 or more characters OR includes !, then log "that password is strong enough!". Log "password is not strong enough" for every other input.
let myPassword = "abcde"
if(myPassword.length >= 12 && myPassword.includes("!")){
  console.log("That is a mighty strong password.")
} else if(myPassword.length >= 8 || myPassword.includes("!")){
  console.log("That password is strong enough!")
} else {
  console.log("Password is not strong enough.")
}
