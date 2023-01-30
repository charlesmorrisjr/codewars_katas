function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}

let returnNum = createFunctions(5);

console.log(returnNum[0]());    // 0
console.log(returnNum[2]());    // 2