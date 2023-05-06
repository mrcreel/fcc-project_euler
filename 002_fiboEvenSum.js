console.clear()
function fiboEvenSum ( n ) {

  let sum = 0
  let arr = [1, 1]
  let total=0
  do {
    sum = arr[0]+arr[1]
    if(arr[1]%2==0) {
      total += arr[1]
    }
    arr.push(sum)
    arr.shift()

  } while (arr[1] <= n);

  console.log(total);
  return total
}

fiboEvenSum(8) // should return 10.
// fiboEvenSum(10) // should return 10.
// fiboEvenSum(34) // should return 44.
// fiboEvenSum(60) // should return 44.
// fiboEvenSum(1000) // should return 798.
// fiboEvenSum(100000) // should return 60696.
fiboEvenSum(4000000) // should return 4613732.