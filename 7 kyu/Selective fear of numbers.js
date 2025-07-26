/* Mini-PEDAC

Problem:
- I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: 
The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm 
afraid or not. (return a boolean)

Input:
- String
- Number

Output:
- Boolean

Rules (Explicit/Implicit/Questions):
- Input string will always a day of the week
- First letter of the day of week will always be capitalized
- Input number will always be an integer
- Input number can be negative

Data Structure:
- String
- Integer

Examples:
Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Algorithm:
- Create an object variable named dayNumberMap
  - Monday --> 12
  - Wednesday --> 34
  - Thursday --> 0
  - Saturday --> 56
- If day of week is 'Tuesday' and number is greater than 95
  - Return true
- Else If day of week is 'Friday' and number is divisible by 2
  - Return true
- Else If day of week is 'Sunday' and number is 666 or -666
  - Return true
- Else
  - Iterate through dayNumberMap
    - If input day equals dayNumberMap.day and input number equals dayNumberMap.number
      - Return true
- Return false

*/

var AmIAfraid = function(day, num){
  const dayNumberMap = {
    'Monday': 12,
    'Wednesday': 34,
    'Thursday': 0,
    'Saturday': 56,
  };

  if (day === 'Tuesday' && num > 95) {
    return true;
  } else if (day === 'Friday' && num % 2 === 0) {
    return true;
  } else if (day === 'Sunday' && (num === 666 || num === -666)) {
    return true;
  } else {
    for (let dayInMap in dayNumberMap) {
      if (dayInMap === day && dayNumberMap[dayInMap] === num) {
        return true;
      }
    }
    
    return false;
  }
}
