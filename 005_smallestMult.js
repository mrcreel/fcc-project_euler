console.clear()

function getPrimes(num) {
  let result = []
  for (let i = 2; i <= num; i++) {
    let arr = []
    for (let j = 1; j <= i / 2; j++) {
      if (j > 1 && i % j == 0) {
        arr.push(j)
        break
      }
    }
    if (arr.length == 0) result.push(i)
  }
  return result
}

function getPrimeFactors(num) {
  const primesBelow = getPrimes(num)

  let target = num
  let arr = []

  let factors = {}
  for (let p = 0; p <= primesBelow.length - 1; p++) {
    factors[primesBelow[p].toString()] = 0
    do {
      if (target % primesBelow[p] == 0) {
        factors[primesBelow[p].toString()] = factors[primesBelow[p].toString()] + 1
        arr.push(primesBelow[p])
        target = target / primesBelow[p]
      }
    } while (target % primesBelow[p] == 0)
  }
  return factors
}


function smallestMult(n) {

  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(getPrimeFactors(i))
  }

  let template = result[result.length - 1]

  result.forEach(obj => {
    for (const [key, value] of Object.entries(obj)) {
      if(value > template[key]) template[key] = value
    }
  })
  console.log(template)
  const factArr = []
  let total = 1
  for (const [key, value] of Object.entries(template)) {
    total = total * parseInt(key)**value
  }

  console.log('The smallest commons multiple of 1 to', n, 'is', total)
  console.log('===========')
  return total;
}

// smallestMult(5) // should return 60.
// smallestMult(7)  //should return 420.
// smallestMult(10) // should return 2520.
// smallestMult(13) // should return 360360.
smallestMult(20) // should return 232792560.
