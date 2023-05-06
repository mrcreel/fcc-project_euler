console.clear()
/**
 * Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
 */

function nthPrime(n) {

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }


  let result = 0

  let p = 0
  let i = 1
  do {
    if (isPrime(i)){
      p++
      result=i
    }
    i++
  } while (p < n)

  console.log(result)
  return result
}

nthPrime(6) // should return 13.
nthPrime(10) // should return 29.
nthPrime(100) // should return 541.
nthPrime(1000) // should return 7919.
nthPrime(10001) // should return 104743.