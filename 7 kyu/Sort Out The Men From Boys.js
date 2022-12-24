function menFromBoys(arr) {
  arr = [...new Set(arr)];

  let evens = arr.filter(num => num % 2 === 0);
  let odds = arr.filter(num => num % 2);
  
  evens.sort((a, b) => a - b);
  odds.sort((a, b) => b - a);
  
  let newArr = evens.concat(odds);
  
  return newArr;
}

console.log(menFromBoys([7,3,14,17]), [14,17,7,3]);
console.log(menFromBoys([-32,-39,-35,-41]),  [-32,-35,-39,-41]);
console.log(menFromBoys([82,91,72,76,76,100,85]), [72,76,82,100,91,85]);
