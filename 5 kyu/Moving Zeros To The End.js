function moveZeros(arr) {
  let zeroArr = arr.filter(element => element === 0);
  let newArr = arr.filter(element => element !== 0);
  
  newArr = newArr.concat(zeroArr);  
 
  return newArr;
}