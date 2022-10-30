function solve(str){
  let upper = (str.match(/[A-Z]/g) || []).length;
  let lower = (str.match(/[a-z]/g) || []).length;
  let numbers = (str.match(/[0-9]/g) || []).length;
  let special = str.length - upper - lower - numbers;
  
  return [upper, lower, numbers, special];
}


console.log(solve(""));                                         // [0,0,0,0]
console.log(solve("aAbBcC"));                                   // [3,3,0,0]
console.log(solve("Codewars@codewars123.com"));                 // [1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ"));                       // [7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));        // [9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));   // [15,8,6,9]
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"));               // [10,7,3,6]
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));       // [7,13,4,10]