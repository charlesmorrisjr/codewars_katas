/* Mini-PEDAC

Problem:
- Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Input:
- String

Output:
- String or null

Rules (Explicit/Implicit/Questions):
- Input string can be a string, an empty string, or null
- Output can be a string, or null

Data Structure:
- String
- null

Examples:
  greet("Niks") === "hello Niks!";
  greet("") === null; // Return null if input is empty string
  greet(null) === null; // Return null if input is null

Algorithm:
- If input string is equal to "" or null, return null
- Return "hello" + input string

*/

function greet(name) {
  return (name !== "" && name !== null) ? `hello ${name}!` : null;
}

function optimizedGreet(name) {
  return name ? `hello ${name}!` : null;
}

