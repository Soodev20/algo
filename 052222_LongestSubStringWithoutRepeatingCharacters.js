/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let str = '';
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const nowChar = s[i];

    if (str.includes(nowChar)) {
      const index = str.indexOf(nowChar);

      str =  str.slice(index + 1) + nowChar;
    } else {
      maxLength = Math.max(maxLength, (str + nowChar).length);
      str += nowChar;
    }
  }

  return maxLength
};
