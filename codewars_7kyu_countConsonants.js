// Complete the function that takes a string of English-language
// text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

const v = 'aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#}';
function consonantCount(str) {
  // ...
  const vowels = [ 'a', 'e', 'i', 'o', 'u'];
  const strArr = str.toLowerCase().split('').filter(e => { 
    return e !== vowels.find(i => i === e) && e.charCodeAt() > 96 && e.charCodeAt() < 123;
  })

  return strArr.length;
}
console.log(consonantCount(v))

