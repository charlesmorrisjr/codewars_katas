const arraySum = (arr) => arr.flat(10).reduce((total, num) => !isNaN(num) ? total + num : total);

console.log(arraySum([ 1, 2, 'pig', 3 ]));                    // 6
console.log(arraySum([ 1, 2, [ 1, 2, 3, [ 5, 1, 0 ] ] ]));    // 15