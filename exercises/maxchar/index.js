// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var map = {};

  for (let char of str){
    map[char] = map[char] + 1 || 1;
  }

  var mostFrequentValue = 0;
  var mostFrequentKey;

  for (let key in map) {
    if(mostFrequentValue < map[key]){
      mostFrequentValue = map[key];
      mostFrequentKey = key;
    }
  }

  return mostFrequentKey;
}

module.exports = maxChar;
