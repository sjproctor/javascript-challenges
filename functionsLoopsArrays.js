// Challenges
// DON'T FORGET TO PSEUDO CODE

// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
console.log("---------1 \n")
var testArr1 = [3, 9, 15, 4, 10]
mult3 = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(array[i]*3)
  }
  return newArr
}
console.log(mult3(testArr1))
// Expected output -->> [9, 27, 45, 12, 30]

// Write a function that takes in an array and returns a new array with only odd numbers.
console.log("---------2 \n")
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
oddsOnly = (array) => {
  let oddsArr = []
  for(let i=0; i<array.length; i++){
    if(array[i]%2 !== 0){
      oddsArr.push(array[i])
    }
  }
  return oddsArr
}
console.log(oddsOnly(testArr2))
// Expected output -->> [-7, 3, 5, 13]

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
console.log("---------3 \n")
var myMessage = "Hello There"
capitalizer = (string) => {
  return string.toUpperCase()
}
console.log(capitalizer(myMessage))
// Expected output -->> "HELLO THERE"

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
console.log("---------4 \n")
stringsOnly = (array) => {
  var newArr = []
  for(let i=0; i<array.length; i++){
    if(typeof array[i] === "string"){
      newArr.push(array[i])
    }
  }
  return newArr.join("")
}
console.log(stringsOnly(comboArr))
// Expected output -->> "nicework"

// Create a function that returns the highest number
console.log("---------5 \n")
var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
findTheHighest = (array) => {
  let highest = array[0]
  for(let i=0; i<array.length; i++){
    if(array[i] > highest){
      highest = array[i]
    }
  }
  return highest
}
console.log(findTheHighest(highestNumber))
// Expected output -->> 67

// Create a function that returns the lowest number
console.log("---------5 \n")
var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
findTheLowest = (array) => {
  let lowest = array[0]
  for(let i=0; i<array.length; i++){
    if(array[i] < lowest){
      lowest = array[i]
    }
  }
  return lowest
}
console.log(findTheLowest(lowestNumber))
// Expected output -->> -9

// Create a function that calculates the sum
console.log("---------6a \n")
var addThese1 = [1, 2, 3, 4]
addEmUp = (array) => {
  let total = 0
  for(let i=0; i<array.length; i++){
    total += array[i]
  }
  return total
}
console.log(addEmUp(addThese1))
// Expected output -->> 10

console.log("---------6b \n")
var addThese2 = []
addEmUp = (array) => {
  let total = 0
  for(let i=0; i<array.length; i++){
    total += array[i]
  }
  return total
}
console.log(addEmUp(addThese2))
// Expected output -->> 0

// Create a function that calculates the mean value
console.log("---------7 \n")
var meanChecker = [1, 2, 3]
function beTheMean(array){
  let total = 0
  for(let i=0; i<array.length; i++){
    total += array[i]
  }
  return total/array.length
}
console.log(beTheMean(meanChecker))
// Expected output -->> 2

// Create a function that finds the index of the highest number
console.log("---------8 \n")
var indexHighestNumber = [1, 4, 2]
getTheIndex = (array) => {
  let highest = array[0]
  for(let i=0; i<array.length; i++){
    if(array[i] > highest){
      highest = array[i]
    }
  }
  return array.indexOf(highest)
}
console.log(getTheIndex(indexHighestNumber))
// Expected output -->> 1

// Create a function that takes in a string and returns only the middle value
console.log("---------9a \n")
var testString1 = "hello"
getTheMiddle = (string) => {
  let splitTheString = string.split("")
  let middleHolder = []
  if(splitTheString.length%2 === 0){
    middleHolder.push(splitTheString[splitTheString.length/2-1], splitTheString[splitTheString.length/2+1])
  } else {
    return splitTheString[splitTheString.length/2-0.5]
  }
  return middleHolder.join("")
}
console.log(getTheMiddle(testString1))
// Expected output -->> "l"
console.log("---------9b \n")
var testString2 = "boogeyman"
console.log(getTheMiddle(testString2))
//Expected output -->> "e"

// STRETCH Challenges
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
console.log("---------10a \n")
var isPalindrome1 = "racecar"
palChecker = (string) => {
  let flipped = string.split("").reverse().join("")
  if(string === flipped){
    return `Yup, ${string} is a palindrome.`
  } else {
    return `No, ${string} is not a palindrome.`
  }
}
console.log(palChecker(isPalindrome1))
// Expected output -->> "Yes racecar is a palindrome"
console.log("---------10b \n")
var isPalindrome2 = "albatross"
console.log(palChecker(isPalindrome2))
// Expected output -->> "No albatross is not a palindrome"

// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed
console.log("---------11a \n")
var fullString1 = "javascript is awesome"
vowelKicker = (string) => {
  let vowelsArr = string.split("")
  let noVowels = []
  for(let i=0; i<vowelsArr.length; i++){
    if(vowelsArr[i].toLowerCase() !== 'a' && vowelsArr[i].toLowerCase() !== 'e' && vowelsArr[i].toLowerCase() !== 'i' && vowelsArr[i].toLowerCase() !== 'o' && vowelsArr[i].toLowerCase() !== 'u'){
      noVowels.push(vowelsArr[i])
    }
  }
  return noVowels.join("")
}
console.log(vowelKicker(fullString1))
// Expected output -->> "jvscrpt s wsm"
console.log("---------11b \n")
var fullString2 = "I am a LEARN student"
console.log(vowelKicker(fullString2))
// Expected output -->> "m LRN stdnt"

// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
console.log("---------12 \n")
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
noDups = (array1, array2) => {
  let deDupe = []
  let combo = array1.concat(array2)
  for(let i=0; i<combo.length; i++){
    if(deDupe.indexOf(combo[i]) === -1){
      deDupe.push(combo[i])
    }
  }
  return deDupe
}
console.log(noDups(arr1, arr2))
// Expected output -->> [3, 7, 10, 5, 4, 8, 2, 1]

// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
console.log("---------13 \n")
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
cleanIt = (array) => {
  let noFalsy = []
  for(let i=0; i<array.length; i++){
    // array[i] on it's own will return a truthy or falsey value
    if(array[i] && array[i] !== " "){
      noFalsy.push(array[i])
    }
  }
  return noFalsy
}
console.log(cleanIt(filterArrayValues))
// Expected output -->> [58, "abcd", true]

// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
console.log("---------13a \n")
fillArray = (arrayLength, fillNumber) => {
  let newArr = []
  for(let i=0; i<arrayLength; i++){
    newArr.push(fillNumber)
  }
  return newArr
}
console.log(fillArray(6, 0))
// expected output -->> [0, 0, 0, 0, 0, 0]
console.log("---------13b \n")
console.log(fillArray(4, 11))
// expected output -->> [11, 11, 11, 11]

// Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
console.log("---------14a \n")
addUp = (num) => {
  let anchor = 0
  for(let i=1; i<=num; i++){
    anchor += i
  }
  return anchor
}
console.log(addUp(4))
// Expected output -->> 10
console.log("---------14b \n")
console.log(addUp(13))
// Expected output -->> 91
console.log("---------14c \n")
console.log(addUp(600))
// Expected output -->> 180300

// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won

// creating a random number outside the onclick function so the number won't change everytime the function runs
var randomNum = Math.ceil(Math.random() * 99)
console.log("random num", randomNum)
var counter = 7

highLow = () => {
  let guess = document.getElementById("guess").value
  counter -= 1
  document.getElementById("counter").innerHTML = `Turns Remaining: ${counter}`
  console.log("counter", counter)
  if(counter > 0){
    // using parseInt since the guess variable is being returned as a string from the html form
    if(parseInt(guess) < randomNum){
      document.getElementById("guessResult").innerHTML = "Too Low"
    } else if(parseInt(guess) > randomNum){
      document.getElementById("guessResult").innerHTML = "Too High"
    } else if(parseInt(guess) === randomNum){
      document.getElementById("guessResult").innerHTML = "You Win! 🌈"
      document.getElementById("counter").innerHTML = `The number was ${randomNum}`
      document.getElementById("gameBoard").innerHTML = ""
    }
  } else {
    document.getElementById("guessResult").innerHTML = "No more turns ☹️"
    document.getElementById("counter").innerHTML = `The number was ${randomNum}`
    document.getElementById("gameBoard").innerHTML = ""
  }
}

// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message
