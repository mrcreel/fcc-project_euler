console.clear()
/**
 * Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
 */

function specialPythagoreanTriplet ( n ) {
  let sumOfabc = n;
  let result = 1

  for ( let a = 1; a <= sumOfabc - 3; a++ ) {
    for ( let b = 2; b <= sumOfabc - 3; b++ ) {
      let c = sumOfabc - b - a
      if ( c > 0 ) {
        if ( a ** 2 + b ** 2 == c ** 2 ) {
          console.log( `[a, b, c, n] -> [${ a }, ${ b }, ${ c }, ${ n }] ` );
          console.log( `[a + b + c = n] -> [${ a } + ${ b } + ${ c } = ${ n }] => ${ a + b + c == n }` );
          console.log( `[a^2 + b^2 = c^2] -> [${ a ** 2 } + ${ b ** 2 } = ${ c ** 2 }] => ${ a ** 2 + b ** 2 == c ** 2 }` );
          console.log( `[a * b * c n] -> [${ a } * ${ b } * ${ c } ${ n }] => ${ a * b * c }` );
          return a * b * c
          console.log( '=======================================' );
        }
      }
    }
  }

  /*
  let a = 1
  let b = 2
  let c = sumOfabc - a - b

  console.log(`[a, b, c, n] -> [${a}, ${b}, ${c}, ${n}]`);
  console.log(`[a + b + c = n] -> [${a} + ${b} + ${c} = ${n}] ==> ${a+b+c==n}`);
  console.log(`[a^2 + b^2 = c^2, n] -> [${a**2} + ${b**2} = ${c**2}, ${n}] ==> ${a**2 + b**2 == c**2}`);
  */

  console.log( result )
  return result
}

specialPythagoreanTriplet( 12 ) // should return 480.
// specialPythagoreanTriplet(12) // should return 480.
// specialPythagoreanTriplet(120) // should return 49920, 55080 or 60000.
// specialPythagoreanTriplet(1000) // should return 31875000.
