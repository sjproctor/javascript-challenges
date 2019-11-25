// Challenges
// DON'T FORGET TO PSEUDO CODE

// Use .map() or .filter() to complete the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
console.log("---------1a \n")
var arr1 = [3, 9, 15, 4, 10]
tenTimes1 = (array) => {
  let newArray = array.map(value => {
    return value*10
  })
  return newArray
}
console.log(tenTimes1(arr1))
// -or-
console.log("---------1b \n")
tenTimes2 = (array) => {
  return array.map(value => value*10)
}
console.log(tenTimes2(arr1))
console.log("---------1c \n")
//-or-
tenTimes3 = (number) => {
  return number * 10
}
console.log(arr1.map(tenTimes3))

// Expected output -->> [30, 90, 150, 40, 100]

// Write a function that takes in an array and returns a new array with only odd numbers.
console.log("---------2a \n")
var arr2 = [2, 7, 3, 5, 8, 10, 13]
onlyOdds1 = (array) => {
  let odds = array.filter(value => {
    return value%2 !== 0
  })
  return odds
}
console.log(onlyOdds1(arr2))
//-or-
console.log("---------2b \n")
onlyOdds2 = (array) => {
  return array.filter(value => value%2 !== 0)
}
console.log(onlyOdds2(arr2))
// Expected output -->> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
console.log("---------3 \n")
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
makeAString = (array) => {
  let lettersOnly = array.filter(value => {
    return typeof value === "string"
  })
  return lettersOnly.join("")
}
console.log(makeAString(comboArr))
// Expected output -->> "nicework"

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
console.log("---------4 \n")
var str = "javascript is awesome"
vowelKicker = (string) => {
  let vowelsArr = string.toLowerCase().split("")
  let noVowels = vowelsArr.filter(value => {
    return value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u'
  })
  return noVowels.join("")
}
console.log(vowelKicker(str))
// Expected output -->> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
console.log("---------5 \n")
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
deDup1 = (arr1, arr2) => {
  let combo = arr1.concat(arr2)
  let noDups = combo.filter((value, index) => {
    return combo.indexOf(value) === index
  })
  return noDups
}
console.log(deDup1(arr1, arr2))
// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
