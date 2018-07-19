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
  let string1Map = {};
  let string2Map = {};
 
  string1Map = createMapFromString(stringA);
  string2Map = createMapFromString(stringB);

  if (Object.keys(string1Map).length !== Object.keys(string2Map).length) return false; 
  
  for (let prop in string1Map) {
    if (string2Map[prop] !== string1Map[prop]) {
      return false;
    }
  }

  return true;
}

function createMapFromString(str) {
  obj = {}

  for (let el of str.replace(/[^\w]/g, " ").toLowerCase()){
    if (!str[el]) {
      obj[el] = obj[el] + 1 || 1;
    }
  }

  return obj;
}

module.exports = anagrams;
