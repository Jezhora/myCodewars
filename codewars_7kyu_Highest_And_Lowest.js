`highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.`

function highAndLow(numbers){
  // ...
 
  const arrNumbers = numbers.split(/\s+/)
  .map(Number)
  .sort((a, b) => a < b ? -1 : 1);
  
  return `${arrNumbers[arrNumbers.length -1]} ${arrNumbers[0]}`;

}
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))