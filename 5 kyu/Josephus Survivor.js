/* PEDAC

Problem:
- Given two numbers that represent the number of people in a circle and the
  steps in which they are eliminated, return the last survivor; i.e., the last
  element of a Josephus permutation.

Input:
- integer representing number of people in circle
- integer representing the number of steps in which people are eliminated

Output:
- integer representing the number of the last survivor

Rules (Explicit/Implicit/Questions):
- Input numbers will always be >= 1
- If the end of the circle/array is reached when counting the next person to
  eliminate, continue at the beginning of the array

Examples:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains

Index is 0
[1,2,3,4,5,6,7] - initial sequence

Index becomes 2
[1,2,4,5,6,7] => 3 is counted out.

4 is at the position 3 was at, so continue counting from there

Index becomes 4
[1,2,4,5,7] => 6 is counted out
7 is at the position 6 was at, so continue counting from there

Index becomes 6 - 5 (current length of array) = 1
[1,4,5,7] => 2 is counted out
Continue counting from beginning of array
4 is at the position 2 was at, so continue counting from there

Index becomes 3
[1,4,5] => 7 is counted out

Index becomes 5 - 3 = 2
[1,4] => 5 is counted out

Index becomes 4 - 2 = 2 - 2 = 0
[4] => 1 counted out, 4 is the last element - the survivor!

Data Structure:
- An array that contains the circle of people
- An integer that contains the current position

Algorithm:
- If the passed in number of people equals 1, return 1
- Generate an array `survivors` containing a number sequence starting from
  1 and ending at the passed in number of people
- Declare a number variable `curIdx` and initialize it to 0
- Loop and iterate over `survivors` until the length of `survivors` is 1
  - Add the passed in step number - 1 to `curIdx`
  - Check if `curIdx` is greater than or equal to the current length of `survivors`
    - If so, loop until `curIdx` is less than the current length of `survivors`
      - If `curIdx` is >= the current length of `survivors`, subtract
        the current length of `survivors` from `curIdx`
  - Remove the element at `curIdx` from `survivors`
- Return the remaining element in `survivors`

*/

function josephusSurvivor(people, step) {
  if (people === 1) return 1;
  
  let survivors = [];
  let curIdx = 0;
  
  for (let idx = 1; idx <= people; idx++) {
    survivors.push(idx);
  }

  do {
    curIdx += (step - 1);
    
    if (curIdx >= survivors.length) {
      do {
        curIdx -= survivors.length;
      } while (curIdx >= survivors.length)
    }

    survivors.splice(curIdx, 1);
  } while (survivors.length > 1);

  return survivors[0];
}

console.log(josephusSurvivor(7,3));     // 4
console.log(josephusSurvivor(11,19));   // 10
console.log(josephusSurvivor(1,300));   // 1
console.log(josephusSurvivor(14,2));    // 13
console.log(josephusSurvivor(100,1));   // 100