

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr ) {
  if (!Array.isArray(arr)) {
   throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let checkedIndex = 0;
  let addElem = null;

  return arr.reduce((result, item, index, array) => {
    if( index < checkedIndex) {
      return result;
    }

    switch (item) {
      case '--discard-next':
        if (array[index + 2] === '--discard-prev' || array[index + 2] === '--double-prev') {
          checkedIndex += 3;
        } else {
          checkedIndex += 2;
        }
        break;
      case '--double-next':
        addElem = array[index + 1];
        if (array[index + 2] === '--double-prev') {
          checkedIndex += 3;
          result = [...result, addElem, addElem, addElem];
        } else {
          if (array[index + 2] === '--discard-prev') {
            checkedIndex += 3;
            result = [...result, addElem];
          } else {
            checkedIndex += 1;
            addElem && result.push(addElem);
          }
        }
        break;
      case '--discard-prev':
        addElem = array[index - 1];
        checkedIndex += 1;
        addElem && result.pop();
        break;
      case '--double-prev':
        addElem = array[index - 1];
        checkedIndex += 1;
        addElem && result.push(addElem);
        break;
      default:
        checkedIndex += 1;
        result.push(item);
    }
    return result;
  }, []);
}
