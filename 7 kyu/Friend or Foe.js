/* Mini-PEDAC

Problem:
- Make a program that filters a list of strings and returns a list with only your friends' name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input:
- Array of strings

Output:
- Array of strings

Rules (Explicit/Implicit/Questions):
- Strings within input arrays will only contain letters

Data Structure:
- Array
- String

Examples:
Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []

Algorithm:
- Create an empty array named 'friendList'
- Iterate through the input array
  - If the length of the string at the current iteration is 4, push it onto friendList
- Return friendList

*/

function friend(friends){
  return friends.filter(person => person.length === 4);
}

friend(["Ryan", "Kieran", "Mark"])
