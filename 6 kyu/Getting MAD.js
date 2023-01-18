function getting_mad(arr) {
  let min_val = Infinity;

  for (let idx1 = 0; idx1 < arr.length - 1; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < arr.length; idx2++) {
      let abs_diff = Math.abs(arr[idx1] - arr[idx2]);
      if (abs_diff < min_val) {
        min_val = abs_diff;
      }
    }  
  }

  return min_val;
}

console.log(getting_mad([-10,0,-3,1]));           // 1
console.log(getting_mad([0,0,0,0]));              // 0
console.log(getting_mad([-570, 542]));            // 1112
console.log(getting_mad([-69, -808, 828, 57]));   // 126