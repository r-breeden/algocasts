// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // RAB SOLUTION
  var index2 = str.length - 1;
  for ( let index = 0; index < str.length / 2; index++){
    if(str[index] !== str[index2]) return false;
    index2--;
  }
  return true;
}

module.exports = palindrome;
