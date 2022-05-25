/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const longerLength = Math.max(commonPrefix.length, strs[i].length);
    let provedPrefix = "";

    for (let j = 0; j < longerLength; j++) {
      if (commonPrefix[j] === strs[i][j]) {
        provedPrefix += commonPrefix[j]
      } else {
        commonPrefix = provedPrefix;
        break;
      }
    }
    if (commonPrefix.length === 0) return "";
  }

  return commonPrefix;
};
