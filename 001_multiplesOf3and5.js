function multiplesOf3and5 ( number ) {

  let sum = 0
  for ( let i = 1; i < number; i++ ) {
    if ( i % 3 == 0 || i % 5 == 0 ) {
      sum += i
    }
  }
  console.log( sum );
  return sum
}

// multiplesOf3and5( 10 )// should return a number.
// multiplesOf3and5( 49 )// should return 543.
// multiplesOf3and5( 1000 )// should return 233168.
// multiplesOf3and5( 8456 )// should return 16687353.
multiplesOf3and5( 19564 )// should return 89301183.