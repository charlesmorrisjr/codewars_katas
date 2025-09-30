/* Mini-PEDAC

Problem:
- Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Input:
- Integer
- Integer

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- Input numbers are always integers
- Input integers can be positive, negative, or zero
- If the two input integers are the same, return one or the other
- The second integer can be less than the first integer

Data Structure:
- Integer

Examples:
lovefunc(1,4), true
lovefunc(2,2), false
lovefunc(0,1), true
lovefunc(0,0), false

Algorithm:
- If the remainder of the first input integer divided by 2 is not equal to the 
  remainder of the second input integer divided by 2, return true
- Else, return false

*/

function lovefunc(flower1, flower2){
  return (flower1 % 2) !== (flower2 % 2);
}