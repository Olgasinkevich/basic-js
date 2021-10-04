import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
  countCats([
   [0, 1, '^^'],
  [0, '^^', 2],
 ['^^', 1, 2]
 ]) => 3`
 *
 */
export default function countCats(matrix) {
  let count = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        count.push(j);
      }
      /*(j==='^^') ? count.push(j) : continue;*/
    }
  }
  return count.length;
}
