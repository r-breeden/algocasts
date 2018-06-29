// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //solution 1
  // var str2 = str.split("").reverse().join("");
  // return str2;

  //solution 2
  var reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;


}

module.exports = reverse;
