function findOdd(arr) {
  for (let num of arr) {
    if (arr.filter(curNum => curNum === num).length % 2 === 1) {
      return num;
    }
  }
  return 0;
}