/* Mini-PEDAC

Problem:
- The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Given a year, return the century it is in.

Input:
- Integer

Output:
- Integer

Rules (Explicit/Implicit/Questions):
- Input will always be a positive integer

Data Structure:
- Integer

Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Algorithm:
- Divide the year by 100 and round up to get the century

*/

function century(year) {
  return Math.ceil(year / 100);
}
