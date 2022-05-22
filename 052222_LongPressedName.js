/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
  let count = name.length;

  if (name.length === typed.length && name !== typed) return false;

  for (let i = typed.length; i >= 0; i--) {
    if (typed[i] === name[count]) count--;
    if (count === 0) return true;
  }

  return false;
};
