// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

getFib = (num) => {
  let fibArray = [1, 1]
  for(let i=1; i<num; i++){
    fibArray.push(fibArray[i]+fibArray[i-1])
  }
  return fibArray
}
console.log(getFib(10))

// --bonus: recursion--

getFibRecursion = (num) => {
	if(num === 1){
		return [1, 1]
	} else {
		let fibArray = getFibRecursion(num - 1)
  	return [...fibArray, fibArray[num-1] + fibArray[num-2]]
	}
}
console.log(getFibRecursion(10))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (array) => {
  return array.filter(value => {
    return typeof value === "number" && value%2 !== 0
  })
}
console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])
// --or--
const { specs } = bicycle.wheels
console.log(specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const flipIt = (array) => {
  return array.reverse()
}
console.log(flipIt(originalArray1))
console.log(flipIt(originalArray2))

// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

const lChecker1 = (string) => {
  let lNum = 0
  string.toLowerCase().split("").map(value => {
    if(value === "l"){
      lNum += 1
    }
  })
  return lNum
}
console.log(lChecker1(ourString))

//--or--

const lChecker2 = (string) => {
  let lArray = string.toLowerCase().split("").filter(value => {
    return value === "l"
  })
  return lArray.length
}
console.log(lChecker2(ourString))

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const getMiddle = (string) => {
  if(string.length%2 === 0){
    return string[string.length/2-1] + string[string.length/2]
  } else {
    return string[string.length/2+.5]
  }
}
console.log(getMiddle(middleLetters1))
console.log(getMiddle(middleLetters2))


// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
  }
  getArea(){
    return 4 * Math.PI * this.radius ** 2
  }
}
const sphere1 = new Sphere(3)
console.log(sphere1.getArea())
const sphere2 = new Sphere(4)
console.log(sphere2.getArea())
const sphere3 = new Sphere(5)
console.log(sphere3.getArea())


// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const { doors, transmission } = myCar.specs
console.log(doors)
console.log(transmission)

// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const addEmUp = (array) => {
  let runningTotal = 0
  return array.map(value => {
    return runningTotal+=value
  })
}
console.log(addEmUp(numbersToAdd1))
console.log(addEmUp(numbersToAdd2))
console.log(addEmUp(numbersToAdd3))


// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT TESTING
// Coding practical questions

// 1. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })
const multTwo = (array) => {
  return array.map(value => {
    return value*2
  })
}

// 2. Write the code that would make this test pass.

// describe("greeter", () => {
//   let person1 = "Snap"
//   let person2 = "Crackle"
//   let person3 = "Pop"
//   test("greets a person by name", () => {
//     expect(greeter(person1)).toEqual("Hello, Snap!")
//     expect(greeter(person2)).toEqual("Hello, Crackle!")
//     expect(greeter(person3)).toEqual("Hello, Pop!")
//   })
// })
const greeter = (name) => {
  return `Hello, ${name}!`
}
