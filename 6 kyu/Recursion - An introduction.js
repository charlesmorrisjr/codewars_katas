function stepDown(stair, width, stairArr = []){
  stairArr.unshift(stair);

  stair -= width;
  
  if (stair >= 0) stepDown(stair, width, stairArr);
  
  return stairArr;
}

console.log(stepDown(10,1))        // [0,1,2,3,4,5,6,7,8,9,10]
console.log(stepDown(80,10))       // [0,10,20,30,40,50,60,70,80]
console.log(stepDown(49,10))       // [9,19,29,39,49]
console.log(stepDown(5,7))         // [5]