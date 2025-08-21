/* Mini-PEDAC

Problem:
- Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages

Input:
- Number

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- Input number will always be an integer

Data Structure:
- Number
- Boolean

Examples:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

Algorithm:
- If input number is negative, return false
- If the square root of the input number contains a decimal point return false
- Return true

*/

var isSquare = function(n){
  if (n < 0) return false;
  if (String(Math.sqrt(n)).indexOf(".") >= 0) return false;
  
  return true;
}

