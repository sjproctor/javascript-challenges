// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// 1. Write a function named `marco` that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco())

// 2. Write a function named `greeting` that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}
console.log(greeting("Learn Student"))

// 3. Write a function named `oddOrEven` that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if(number % 2 === 0){
    return "even"
  } else {
    return "odd"
  }
}
console.log(oddOrEven(5))
console.log(oddOrEven(9))
console.log(oddOrEven(10))

// 4. Write a function named `triple` that takes a number as an argument and returns the result of that number multiplied by 3.
triple = (number) => {
  return number * 3
}
console.log(triple(5))
console.log(triple(2))
console.log(triple(4))

// 5. Write a function named `multiply` that takes two numbers as arguments and returns the result of the numbers multiplied together.
multiply = (num1, num2) => {
  return num1 * num2
}
console.log(multiply(3, 4))
console.log(multiply(6, 9))
console.log(multiply(4, 7))

// 6. Write a function named `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
divisibleBy = (num1, num2) => {
  if(num1 % num2 === 0){
    return `${num1} is evenly divisible by ${num2}`
  } else {
    return `${num1} is not evenly divisible by ${num2}`
  }
}
console.log(divisibleBy(10, 5))
console.log(divisibleBy(10, 4))
console.log(divisibleBy(10, 2))

// 7. Write a function named `assignGrade` that takes a number score as an argument and returns the letter grade for the score.
assignGrade = (score) => {
  if(typeof score !== "number" || score < 0 || score >= 100){
    return "please enter a valid score"
  } else if(score >= 90){
    return "you got an A"
  } else if(score >= 80){
    return "you got a B"
  } else if(score >= 70){
    return "you got a C"
  } else if(score >= 60){
    return "you got a D"
  } else {
    return "boo, you got an F"
  }
}
console.log(assignGrade(108))
console.log(assignGrade(-9))
console.log(assignGrade(true))
console.log(assignGrade(90))
console.log(assignGrade(87))
console.log(assignGrade(8))

// 8. Write a function named `isLonger` that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
  if(string1.length === string2.length) {
    return `Both strings are ${string.length}`
  } else if(string1.length > string2.length)
}
// 9. Write a function named `greaterNum` that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// 10. Write a function named `yelling` that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges
// Test your functions with multiple calls

// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number
console.log("---------7 \n")
greaterNum = (num1, num2) => {
  if(num1 === num2){
    return "The numbers are equal"
  } else if(num1 > num2){
    return `${num1} is bigger`
  } else {
    return `${num2} is bigger`
  }
}
console.log(greaterNum(3, 6))
console.log(greaterNum(89, 0))
console.log(greaterNum(-7, -7))

// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)
console.log("---------8 \n")
helloWorld = (code) => {
  if(code === "es"){
    return "hola mundo"
  } else if(code === "de"){
    return "hallo welt"
  } else {
    return "hello world"
  }
}
console.log(helloWorld("es"))
console.log(helloWorld("de"))
console.log(helloWorld("en"))

// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary
console.log("---------9 \n")
pluralizer = (num, animal) => {
  if(num === 1){
    return `${num} ${animal}`
  } else {
    return `${num} ${animal}s`
  }
}
console.log(pluralizer(5, "cat"))
// Expected outcome -->> "5 cats"
console.log(pluralizer(1, "dog"))
// Expected outcome -->> "1 dog"

// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species"
console.log("---------9 \n")
bonusPluralizer = (num, noun) => {
  if(noun === "sheep"){
    return `${num} sheep`
  } else if(noun === "species"){
    return `${num} species`
  } else if(noun === "goose" && num > 1){
    return `${num} geese`
  } else if(noun === "child" && num > 1){
    return `${num} children`
  } else if(noun === "person" && num > 1){
    return `${num} people`
  } else if(num === 1){
    return `${num} ${noun}`
  } else {
    return `${num} ${noun}s`
  }
}
console.log(bonusPluralizer(3, "species"))
console.log(bonusPluralizer(1, "person"))
console.log(bonusPluralizer(6, "person"))
console.log(bonusPluralizer(6, "cat"))
console.log(bonusPluralizer(4, "goose"))
console.log(bonusPluralizer(1, "goose"))
console.log(bonusPluralizer(5, "flamingo"))

// EPIC Challenge: Magic8 Ball with HTML
// As a user I can enter a question and get a random answer to my question.
// Create an HTML page linked to the JavaScript file - you will need to research onClick events, document.getElementById() and innerHTML.
// More information about linking HTML to JavaScript here
magic8 = () => {
  let magic = ["Yup", "Nope", "Heck, yes", "Yaaaas", "Umm...sure?", "Great"]
  let random = Math.floor(Math.random() * magic.length)
  document.getElementById("answer").innerHTML = magic[random]
}
