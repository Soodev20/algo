// https://leetcode.com/problems/binary-tree-right-side-view/submissions/
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
 * @return {number[]}
 */

 const rightSideView = function(root) {
  const result = [];

  if (!root) return result;

  const storage = [root];

  while (storage.length > 0) {
    let size = storage.length;
    const level = [];

    while (size > 0) {
      const currNode = storage.shift();

      level.push(currNode.val);

      if (currNode.left) storage.push(currNode.left);
      if (currNode.right) storage.push(currNode.right);

      size -= 1;
    }

  result.push(level[level.length - 1]);
}

  return result;
};
