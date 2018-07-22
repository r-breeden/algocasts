// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RAB SOLUTION
// function steps(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(' ');
//   }

//   for (let x = 0; x < n; x++) {
//     arr[x] = '#'
//     console.log(arr.join(''));
//   }
// }

// SOLUTION 2 RECURSIVE
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += '#';
    steps(n, row, stair);
  } else {
    stair += ' ';
    steps(n, row, stair);
  }
}

module.exports = steps;
