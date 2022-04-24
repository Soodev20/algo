// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// input root = {
//   val: 1,
//   children: [
//     { val: 3, children: [Array] },
//     { val: 2, children: [] },
//     { val: 4, children: [] }
//   ]
// }

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

 var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.children) return 1;

  let maximumDepth = 1;

  for (const child of root.children) {
    let childDepth = maxDepth(child) + 1;

    maximumDepth = Math.max(maximumDepth, childDepth);
  }

  return maximumDepth;
};
