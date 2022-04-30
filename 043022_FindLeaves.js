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

  return leaves1.length === leaves2.length && leaves1.every((value, i)=> value === leaves2[i]) ;
};





// tried short cut, perhaps need to use yield?
// let leafSimilar = function (root1, root2) {
//   let leaves1 = [];
//   let leaves2 = [];

//   const findLeaves = function (node1, node2, leaves1) {
//     if (node1) {
//       if (!node1.left && !node1.right) leaves1.push(node.val);

//       findLeaves(node1.left, node2, leaves1);
//       findLeaves(node1.right, node2, leaves1);
//     }

//     if (node2) {
//       if (!node2.left && !node2.right) {
//         if (node2.val !== leaves[0]) {
//           return false;
//         }
//         leaves1.shift();
//       }

//       findLeaves(node1, node2.left, leaves1);
//       findLeaves(node1, node2.right, leaves1);
//     }

//     return true;
//   }
// };


