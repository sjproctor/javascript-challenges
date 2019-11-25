// Challenges
// Write a for loop that logs each number from 1 - 20.
console.log("---------1 \n")
for(let i=1; i<=20; i++){
    console.log(i)
  }

// Write a for loop that logs the result of each number from 1 - 20 tripled.
console.log("---------2 \n")
for(let i=1; i<=20; i++){
  console.log(i*3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD"
console.log("---------3 \n")
for(let i=1; i<=20; i++){
  if(i%2 !== 0){
    console.log("ODD")
  } else {
    console.log(i)
  }
}
// Expected output -->> ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:
var nums = [3, 57, -9, 20, 67]

// Create a loop that will log the highest number from the array
console.log("---------4 \n")
var highest = nums[0]
for(let i=0; i<nums.length; i++){
  if(nums[i] > highest){
    highest = nums[i]
  }
}
console.log(highest)
// Expected output -->> 67

// Create a loop that will log the lowest number from the array
console.log("---------5 \n")
var lowest = nums[0]
for(let i=0; i<nums.length; i++){
  if(nums[i] < lowest){
    lowest = nums[i]
  }
}
console.log(lowest)
// Expected output -->> -9

// Create a loop that will log the remainder of each number when divided by 2
console.log("---------6 \n")
for(let i=0; i<nums.length; i++){
  console.log(nums[i]%2)
}
// Expected output -->> 1, 1, -1, 0, 1

// Consider this variable:
var myString = "learn student"

// Write the code that will log the number of times the letter "e" occurs in the string
console.log("---------7 \n")
var eCounter = 0
for(let i=0; i<myString.length; i++){
  if(myString[i] === "e"){
    eCounter += 1
  }
}
console.log(eCounter)
// Expected output -->> 2

// STRETCH Challenges
// Odd or Even
// Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
console.log("---------Odd or Even \n")
for(let i=0; i<=15; i++){
  if(i%2 === 0){
    console.log(i + " is even")
  } else {
    console.log(i + " is odd")
  }
}

// Expected output -->> "0 is even" "1 is odd" "2 is even" ...etc

// Fizz Buzz
// Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
console.log("---------FizzBuzz \n")
for(let i=1; i<100; i++){
  if(i % 15 === 0){
    console.log("fizzbuzz")
  } else if(i % 5 === 0){
    console.log("buzz")
  } else if(i % 3 === 0){
    console.log("fizz")
  } else {
    console.log(i)
  }
}
// Expected output -->> 1, 2, "fizz", 4, "buzz", 6, 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
