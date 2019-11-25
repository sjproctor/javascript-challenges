// Challenges
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.
describe("hello", () => {
  test ("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
  })
})

hello = () => {
  return "hi"
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.
describe("areYouStressed", () => {
  test ("determines your stress and responds appropriately", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  })
})

areYouStressed = (level) => {
  return level === "yes" ? "relax" : "keep going"
}

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.
describe("budgetChecker", () => {
  test ("determines if the product is in budget, reponds appropriately", () => {
    expect(budgetChecker(250)).toEqual("in budget")
    expect(budgetChecker(350)).toEqual("too rich for my blood")
  })
})

budgetChecker = (cost) => {
  return cost < 300 ? "in budget" : "too rich for my blood"
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.
describe("littleNum", () => {
  test ("returns smaller of the two numbers", () => {
    expect(littleNum(3, 5)).toEqual(3)
    expect(littleNum(67, -9)).toEqual(-9)
  })
})

littleNum = (num1, num2) => {
  if(num1 < num2){
    return num1
  } else {
    return num2
  }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.
describe("isOdd", () => {
  test ("determines if the number is odd", () => {
    expect(isOdd(56)).toEqual("no")
    expect(isOdd(77)).toEqual("yes")
  })
})

isOdd = (num) => {
  return num%2 !== 0 ? "yes" : "no"
}

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
describe("fruitColor", () => {
  test ("returns yellow if the argument is banana, red if apple and purple if grape", () => {
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
  })
})

fruitColor = (fruit) => {
  if(fruit === "banana"){
    return "yellow"
  } else if(fruit === "apple"){
    return "red"
  } else if(fruit === "grape"){
    return "purple"
  }
}

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.
describe("rick", () => {
  test ("function should return Morty", () => {
    expect(rick()).toEqual("Morty")
  })
})

rick = () => {
  return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.
describe("greeter", () => {
  test ("returns a greeting with a name", () => {
    expect(greeter("Sarah")).toEqual("Hello, Sarah!")
    expect(greeter("Matt")).toEqual("Hello, Matt!")
  })
})

greeter = (name) => {
  return `Hello, ${name}!`
}

// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.
describe("oddOrEven", () => {
  test ("takes an number and logs whether the number is odd or even", () => {
    expect(oddOrEven(-78)).toEqual("even")
    expect(oddOrEven(55)).toEqual("odd")
  })
})

oddOrEven = (num) => {
  return num%2 !== 0 ? "odd" : "even"
}

// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.
describe("doubler", () => {
  test ("returns the result of a number multiplied by 2", () => {
    expect(doubler(5)).toEqual(10)
    expect(doubler(8)).toEqual(16)
  })
})

doubler = (num) => {
  return num*2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.
describe("multiply", () => {
  test ("akes two numbers and logs the result of the numbers multiplied", () => {
    expect(multiply(3, 6)).toEqual(18)
    expect(multiply(5, 7)).toEqual(35)
  })
})

multiply = (num1, num2) => {
  return num1*num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.
describe("divisibleBy", () => {
  test ("takes two numbers and returns whether the first number is evenly divisible by the second", () => {
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    expect(divisibleBy(7, 2)).toEqual("7 is not evenly divisible by 2")
  })
})

divisibleBy = (num1, num2) => {
  return num1%num2 === 0 ? `${num1} is evenly divisible by ${num2}` : `${num1} is not evenly divisible by ${num2}`
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
describe("fizzBuzz", () => {
  test ("classic fizzbuzz stuff", () => {
    expect(fizzBuzz(9)).toEqual("fizz")
    expect(fizzBuzz(10)).toEqual("buzz")
    expect(fizzBuzz(15)).toEqual("fizzbuzz")
  })
})

fizzBuzz = (num) => {
  if(num%15 === 0){
    return "fizzbuzz"
  } else if(num%3 === 0){
    return "fizz"
  } else if(num%5 === 0){
    return "buzz"
  } else {
    return num
  }
}
