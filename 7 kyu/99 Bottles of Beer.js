/* Mini-PEDAC

Problem:
- Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Input:
- None

Output:
- Array of strings

Rules (Explicit/Implicit/Questions):
- Code size is limited to 1000 characters
- Decrement from 99 bottles of beer to no bottles of beer
- First line of the song lyrics should start with 99 bottles of beer
- Last line of the lyrics should end with no bottles of beer

Data Structure:
- Array
- String

Examples:
Output should be:
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]

Detailed Algorithm:
- Create an empty array named songLyrics
- Iterate from 99 to 3
  - Push the string "[current iteration] bottles of beer on the wall, [current iteration] bottles of beer." into songLyrics
  - Push the string "Take one down and pass it around, [current iteration - 1] bottles of beer on the wall." into songLyrics
- Push the following strings into songLyrics:
   "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall."
- Return songLyrics
*/

var sing = function () {
  let songLyrics = [];

  for (let i = 99; i > 2; i--) {
    songLyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    songLyrics.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
  }

  songLyrics.push(
    "2 bottles of beer on the wall, 2 bottles of beer.",
    "Take one down and pass it around, 1 bottle of beer on the wall.",
    "1 bottle of beer on the wall, 1 bottle of beer.",
    "Take one down and pass it around, no more bottles of beer on the wall.",
    "No more bottles of beer on the wall, no more bottles of beer.",
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
  
  return songLyrics;
};

console.log(sing());