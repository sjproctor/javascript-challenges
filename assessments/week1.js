// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

console.log(mantra.includes("B"))

// 1b. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes("x"))

// 1c. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes("v"))

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

isThere = (string, letter) => {
  if(string.toLowerCase().includes(letter.toLowerCase())){
    return `The letter ${letter} is in "${string}".`
  } else {
    return `The letter ${letter} is not in "${string}".`
  }
}
console.log(isThere(mantra, "b"))
console.log(isThere(mantra, "B"))
console.log(isThere(mantra, "x"))

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

lengthChecker = (cat, dog) => {
  return cat.length < dog.length ? dog : cat
}
console.log(lengthChecker(myDog, myCat))

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

arrayMaker1 = (cat, dog) => {
  return [cat, dog]
}
console.log(arrayMaker1(myCat, myDog))
// --or--
arrayMaker2 = (cat, dog) => {
  let petArray = []
  petArray.push(cat, dog)
  return petArray
}
console.log(arrayMaker2(myCat, myDog))

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

lowerCaseString1 = (dog, cat) => {
  let myPets = dog + " " + cat
  return myPets.toLowerCase()
}
console.log(lowerCaseString1(myDog, myCat))
// --or--
lowerCaseString2 = (cat, dog) => {
  return `${cat.toLowerCase()} ${dog.toLowerCase()}`
}
console.log(lowerCaseString2(myDog, myCat))

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

for(let i=0; i<myMessage.length; i++){
  console.log("for", myMessage[i])
}
// 3b. Write the code that logs each letter of the message using map.
myMessage.split("").map(value => {
  console.log("map", value)
})

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

i = 0
while(i<myMessage.length){
  console.log("while", myMessage[i])
  i++
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

myMessage.split("").forEach(element => {
  console.log("for each", element)
})

// ------------------------------ Consider the following variable:

var myNumbers = [3, 78, 0, 62, -9]

// 3a. Write the code that multiplies each of the numbers by 2 using a for loop.

for(let i=0; i<myNumbers.length; i++){
  console.log("for", myNumbers[i]*2)
}

// 3b. Write the code multiplies each of the numbers by 2 using map.

myNumbers.map(value => {
  console.log("map", value*2)
})

// 3c. STRETCH: Write the code that multiplies each of the numbers by 2 using a while loop.

i = 0
while(i < myNumbers.length){
  console.log("while", myNumbers[i]*2)
  i++
}

// 3d. STRETCH: Write the code that multiplies each of the numbers by 2 using forEach().

myNumbers.forEach(value => {
  console.log("for each", value*2)
})

// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

vowelRemover = (string) => {
  let noVowels = string.split("").filter(value => {
    return value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i"
  })
  return noVowels.join("")
}
console.log(vowelRemover(testString))


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
var secondTestString = 89

vowelRemoverPlus = (string) => {
  if(typeof string === "string"){
    let noVowels = string.split("").filter(value => {
      return value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i"
    })
    return noVowels.join("")
  } else {
    return "Please enter the correct information"
  }
}
console.log(vowelRemoverPlus(testString))
console.log(vowelRemoverPlus(secondTestString))


// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

catsOnly = (array) => {
  return array.filter(value => {
    return value.animal === "cat"
  })
}
console.log(catsOnly(toonimals))

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

nonCatNames = (array) => {
  let nonCats = array.filter(value => {
    return value.animal !== "cat"
  })
  return nonCats.map(value => value.name).join(" ")
}
console.log(nonCatNames(toonimals))

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

getToonimalInfo = (array) => {
  let info = array.map(value => {
    return `${value.name} is a ${value.animal}.`
  })
  return info.join(" ")
}
console.log(getToonimalInfo(toonimals))
