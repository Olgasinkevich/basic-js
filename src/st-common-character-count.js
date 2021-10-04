
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( str1, str2 ) {
  function countChars(arr){
    let obj = {};
    arr.forEach(i => obj[i] ? obj[i]++ : obj[i] = 1);
    return obj;
  }

  let s1 = countChars([...str1]);
  let s2 = countChars([...str2]);
  let count = 0;
  for(let key in s1){
    if(s2[key]) {
      count += Math.min(s1[key],s2[key]);
    }
  }
  return count;
}
