function fibonacci(nth) {
  let sum = 2;
  let fNum = 1;
  let fNum1 = 1;
  let fNum2 = 1;

  for (let idx = 3; idx <= nth; idx++) {
    fNum = fNum1 + fNum2;
    sum += fNum;
    fNum1 = fNum2;
    fNum2 = fNum;
  }

  return sum;
}

1, 1, 2, 3, 5, 8, 13, 21
console.log(fibonacci(8));
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050
