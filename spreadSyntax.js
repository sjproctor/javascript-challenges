// Challenges

// Exercise 1
// Consider this function:
function combineArrays(arrOne, arrTwo){
  return arrOne.concat(arrTwo)
}
console.log(combineArrays([2, 4, 2], [4, 6, 11]))

// Refactor this function to use the spread operator to combine the arrays.
combineArraysRefactor = (arrOne, arrTwo) => {
  return [...arrOne, ...arrTwo]
}
console.log(combineArraysRefactor([2, 4, 2], [4, 6, 11]))

// Exercise 2
// Consider this function:
function combineAndFilterOdd(arrOne, arrTwo, arrThree){
  return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 != 0)
}
console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

// Refactor this function to use the spread operator to combine the array arguments.
function combineAndFilterOddRefactor(arrOne, arrTwo, arrThree){
  let comboArr = [...arrOne, ...arrTwo, ...arrThree]
  return comboArr.filter(num => num % 2 !== 0)
}
console.log(combineAndFilterOddRefactor([3, 2, 5], [5, 8, 7], [4, 5, 6]))

// STRETCH
// Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.
function combineAndFilterOddRefactor2(...arrays){
  // the ...arrays comes in as an array of arrays
  let comboArray = arrays.shift().concat(...arrays)
  return comboArray.filter(num => num % 2 !== 0)
}
console.log(combineAndFilterOddRefactor2([3, 2, 5], [5, 8, 7], [4, 5, 6]))
