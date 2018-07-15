// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// RAB SOLUTION
function anagrams(stringA, stringB) {
  let string1 = stringA.replace(/[^\w]/g, " ").toLowerCase();
  const string2 = stringB.replace(/[^\w]/g, " ").toLowerCase();

  const string1Map = {};
  const string2Map = {};
 
  for (let el of string1){
    if (!string1Map.el) {
      string1Map[el] = 1;
    } else {
      string1Map[el]++;
    }
  }

   for (let el of string2){
    if (!string2Map.el) {
      string2Map[el] = 1;
    } else {
      string2Map[el]++;
    }
  }

  if ( Object.keys(string1Map).length !== Object.keys(string2Map).length) return false;

  for (let prop in string1Map) {
    if (!string2Map[prop] || string2Map[prop] !== string1Map[prop]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
