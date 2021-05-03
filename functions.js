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
    return `Both strings are ${string1.length}`
  } else if(string1.length > string2.length) {
    return `${string1} is longer`
  } else if(string1.length < string2.length) {
    return `${string2} is longer`
  } else {
    return "Something went wrong."
  }
}

console.log(isLonger("hello", "hey"))
console.log(isLonger("hello", "there"))
console.log(isLonger("yo", "hola"))

// 9. Write a function named `greaterNum` that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (num1, num2) => {
  if(num1 === num2) {
    return `Both numbers are ${num1}`
  } else if(num1 > num2) {
    return `${num1} is larger`
  } else if(num1 < num2) {
    return `${num2} is larger`
  } else {
    return "Something went wrong."
  }
}

console.log(greaterNum(2, 5))
console.log(greaterNum(6, 5))
console.log(greaterNum(42, 42))

// 10. Write a function named `yelling` that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

const helloWorld = (code = "en") => {
  if(code === "es") {
    return "Hola mundo"
  } else if(code === "de") {
    return "Hallo welt"
  } else if(code === "ja") {
    return "Kon'nichiwa"
  } else if(code === "fr") {
    return "Bonjour"
  } else if(code === "ru") {
    return "Privet"
  } else if(code === "en") {
    return "Hello world"
  }
}
console.log(helloWorld("es"))
console.log(helloWorld("de"))
console.log(helloWorld("ja"))
console.log(helloWorld("fr"))
console.log(helloWorld("ru"))
console.log(helloWorld())

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

const pluralizer = (num, animal) => {
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

// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const bonusPluralizer = (num, noun) => {
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
