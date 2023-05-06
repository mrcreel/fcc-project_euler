console.clear()
/**
 * Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
 */

function sumSquareDifference(n) {
  let result = 0
  let sumOfSquares = 0

  for(let i = 1; i <=n; i++){
    result += i
    sumOfSquares += i**2
  }
  result = result**2 - sumOfSquares
  console.log(result)
  return result
}

// sumSquareDifference(10) // should return 2640.
sumSquareDifference(20) // should return 41230.
// sumSquareDifference(100)