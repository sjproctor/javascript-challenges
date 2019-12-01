// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

isDivisibleBy = (num) => {
  if(num%3 === 0){
    return `${num} is divisble by three`
  } else {
    return `${num} is not divisble by three`
  }
}
console.log(isDivisibleBy(15))
console.log(isDivisibleBy(0))
console.log(isDivisibleBy(385))
console.log(isDivisibleBy(-7))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

const helloMe = {
  firstName: "Sarah",
  lastName: "Proctor",
  height: "tall",
  eyeColor: "brown",
  getInfo: function(){
    return `${this.firstName} ${this.lastName} is ${this.height} and has ${this.eyeColor} eyes.`
  }
}
console.log(helloMe.getInfo())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

getEveryOther = (array) => {
  let getStrings = array.filter((value, index) => {
    return index%2 === 0
  })
  return getStrings.join(" ")
}
console.log(getEveryOther(randomNouns))

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

createCapitals = (array) => {
  return array.map(value => {
     return value.charAt(0).toUpperCase().concat(value.substring(1))
  })
}
console.log(createCapitals(randomNouns))

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

getLength = (array) => {
  return array.map(value => {
    return value.length
  })
}
console.log(getLength(randomNouns))

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

alphabetSoup = (string) => {
  return string.split("").sort().join("")
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

comboAlphabetSoup = (...strings) => {
  let allTheStrings = [...strings]
  return allTheStrings.join("").split("").sort().join("")
}
console.log(comboAlphabetSoup(testString1, testString2, testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

numberTheAnimals = (nums, anis) => {
  let numberedAnimals = []
  for(let i=0; i<anis.length; i++){
    numberedAnimals.push(`${nums[i]} ${anis[i]}`)
  }
  return numberedAnimals.join(" ")
}
console.log(numberTheAnimals(amounts, animals))

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

numberTheAnimalsBetter = (nums, anis) => {
  let numberedAnimals = []
  for(let i=0; i<anis.length; i++){
    if(amounts[i] === 1){
      numberedAnimals.push(`1 ${anis[i].slice(0, anis[i].length-1)}`)
    } else {
      numberedAnimals.push(`${nums[i]} ${anis[i]}`)
    }
  }
  return numberedAnimals.join(" ")
}
console.log(numberTheAnimalsBetter(amounts, animals))
