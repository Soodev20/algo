/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

 const leafSimilar = function (root1, root2) {
  const findLeaves = function (node, leaves = []) {
    if (node) {
      if (!node.left && !node.right) leaves.push(node.val);

      findLeaves(node.left, leaves);
      findLeaves(node.right, leaves);
    }

    return leaves;
  };

  const leaves1 = findLeaves(root1);
  const leaves2 = findLeaves(root2);

  return leaves1.length === leaves2.length && leaves1.every((value, i) => value === leaves2[i]);
};
