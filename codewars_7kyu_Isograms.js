`An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false`

function isIsogram(str){
  //...
  const string = str.toLowerCase();

  let letters = {};

  for (char of string) {
    if (letters[char]) {
      return false;
    }
    letters[char] = true
  }
  return true
 
}
console.log(isIsogram('moose'))