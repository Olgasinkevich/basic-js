import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const multiply = (string, number, separator) => {
  let str = string;
  if (str === null) {
    str = String(str);
  }
  const arr = new Array(number);
  return arr.fill(str).join(separator);
}

export default function repeater(string, options) {
  const {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options;
  const addString = multiply(addition, additionRepeatTimes, additionSeparator);
  return multiply(string + addString, repeatTimes, separator);
}
