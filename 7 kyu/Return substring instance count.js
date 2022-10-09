// Complete the solution so that it returns the number of times the search_text is found within the full_text.

/* Mini-PEDAC

Problem:
- Given a string and a search string, find the number of times that the search string appears in the string to search

Input:
- two strings
  - a string to search
  - a string to search for

Output:
- a number

Rules (Explicit/Implicit/Questions):
- Letters in given string are lowercase letters
- String can contain underscores
- Search string is lowercase
- Search string is only letters
- If no matches occur, return 0

Data Structure:
- a number to hold the number of times that the search string occurs in string

Examples:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

Algorithm:
- Declare a regular expression object `regEx` and initialize it with the string to search for and the global and case-insensitive flags
- Use `regEx` in a regular expression method to get the number of occurrences of the string to search for in the string being searched
- Check if a match was found,
  - If so, return the number of occurrences found
  - If not, return 0

*/

function solution(full_text, search_text) {
  let regEx = new RegExp(search_text, 'gi');
  
  return (full_text.match(regEx) || []).length
}

// Usage example:

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));
//# should return 2 since bb shows up twice

console.log(solution('aaabbbcccc', 'bbb'));
// # should return 1

console.log(solution('', 'b'))
// # should return 0