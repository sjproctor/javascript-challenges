// Challenges: Array Methods Practice

// Exercise 1 - Consider this variable:
var groceryList1 = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList1.push("soda")
console.log(groceryList1)

// Exercise 2 - Consider this variable:
var numbers1 = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
numbers1.unshift(0)
console.log(numbers1)

// Write the code that will add the number 12 to the end of the array.
numbers1.push(12)
console.log(numbers1)

// Write the code that will remove the first number from the array.
numbers1.shift()
console.log(numbers1)

// Exercise 3 - Consider this variable:
var groceryList2 = ["apples", "carrots", "oatmeal"]

// Write the code that will add "granola" to the end of array without altering the original array.
let newGroceries = groceryList2.concat("granola")
console.log(groceryList2, newGroceries)

// Exercise 4 - Consider this variable:
var numbers2 = [1, 2, 3, 4, 5]

// Write the code that will add the number 0 to the beginning of the array without altering the original array.
let newNumbers = [0].concat(numbers2)
console.log(numbers2, newNumbers)

// Exercise 5 - Consider this variable:
var numbers3 = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numbers3.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
console.log(numbers3.lastIndexOf(2))

// Exercise 6 - Consider this variable:
var chars = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the chars array together into a string.
console.log(chars.join(""))

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
let charsReversed = chars.reverse()
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
console.log(charsReversed.join("-"))

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
console.log(charsReversed.join(""))

// Exercise 7 - Create two arrays consisting of three first names of your cohort members in each.
let firstArray = ["Alice", "Jasmine", "Cinderella"]
let secondArray = ["Snow", "Belle", "Ariel"]

// Sort the names in alphabetical order.
console.log(firstArray.sort())
console.log(secondArray.sort())

// Sort the names in reverse alphabetical order.
console.log(firstArray.sort().reverse())
console.log(secondArray.sort().reverse())

// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.
let comboArray = firstArray.concat(secondArray).sort()
console.log(comboArray)

// Magic 8 Ball
// Create an array with 6 different (appropriate) Magic 8 Ball answers
let magic = ["Yup", "Nope", "Heck, yes", "Yaaaas", "Umm...sure?", "Great"]
// Create a random number to select one of the answers (hint: use Math.random()
let random = Math.floor(Math.random() * magic.length)
// Output the random answer
console.log(magic[random])
