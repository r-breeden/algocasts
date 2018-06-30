// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
// function reverse(str) {
//   var str2 = str.split("").reverse().join("");
//   return str2;
// }

// SOLUTION 2
// function reverse(str) {
//   var reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// SOLUTION 3
// function reverse(str) {
//   return str.split('').reduce((reversed, char)=> {
//     return char + reversed;
//   }, '');
// }

// SOLUTION 3 simplified
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
