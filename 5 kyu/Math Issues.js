Math.round = function(number) {
  let strNum = String(number);
  
  if (!strNum.includes('.')) return number;

  return (strNum[strNum.indexOf('.') + 1] >= 5) ? parseInt(strNum) + 1 : parseInt(strNum);
};

Math.ceil = function(number) {
  return String(number).includes('.') ? parseInt(String(number)) + 1 : number;
};

Math.floor = function(number) {
  return parseInt(String(number));
};

console.log(Math.ceil(0.3));
console.log(Math.floor(0.6));
console.log(Math.round(0.5));
console.log(Math.round(31.000001));