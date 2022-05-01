/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

const longestZigZag = function (root) {
  let max = 0
  const aux = function (node) {
    if (!node) return { leftScore: -1, rightScore: -1 };

    const leftVal = aux(node.left).leftScore + 1;
    const rightVal = aux(node.right).rightScore + 1;

    max = Math.max(leftVal, rightVal, max);

    return { leftScore: rightVal, rightScore: leftVal };
  }

  aux(root);

  return max;
}
