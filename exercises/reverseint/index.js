// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// RAB SOLUTION
// function reverseInt(n) {
//   if (n === 0) return 0;
  
//   var isNeg = n < 0; 
//   number = n;

//   if(isNeg){
//     number = number * -1;
//   }

//   number = number.toString().split("").reverse().join("");

//   if(isNeg){
//     return number * -1;
//   }
//   return number * 1;
// }

//SOLUTION 2
function reverseInt(n) {
  var number = n
  .toString()
  .split("")
  .reverse()
  .join("");

  return parseInt(number) * Math.sign(n);
}

module.exports = reverseInt;
