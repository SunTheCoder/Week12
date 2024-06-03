const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here 
  if (!rootNode) return null 
  let stack = [rootNode]
  let nums = []

  while (stack.length) {
    let curr = stack.pop()
    nums.push(curr.val)
    
    if (curr.left) stack.push(curr.left)
   
  }

  return Math.min(...nums)
}

function findMaxBST (rootNode) {
  // Your code here 
  if (!rootNode) return null 
  let stack = [rootNode]
  let nums = []

  while (stack.length) {
    let curr = stack.pop()
    nums.push(curr.val)
    
    
    if (curr.right) stack.push(curr.right)
  }

  return Math.max(...nums)
}

function findMinBT (rootNode) {
  // Your code here 
  if (!rootNode) return null 
  let stack = [rootNode]
  let nums = []

  while (stack.length) {
    let curr = stack.pop()
    nums.push(curr.val)
    
    if (curr.left) stack.push(curr.left)
    if (curr.right) stack.push(curr.right)
  }

  return Math.min(...nums)
}

function findMaxBT (rootNode) {
  // Your code here 
  if (!rootNode) return null 
  let stack = [rootNode]
  let nums = []

  while (stack.length) {
    let curr = stack.pop()
    nums.push(curr.val)
    
    if (curr.left) stack.push(curr.left)
    if (curr.right) stack.push(curr.right)
  }

  return Math.max(...nums)
}

function getHeight (rootNode) {
  // Your code here 
  if (!rootNode) return -1

  let queue = [rootNode]
  let height = 0
  let curr;
  
  rootNode.height = height

  while(queue.length) {

    curr = queue.shift()


    if (curr.left) {
      curr.left.height = curr.height +1
      queue.push(curr.left)
    }
    if (curr.right) {
      curr.right.height = curr.height +1
      queue.push(curr.right)
    }
    height = curr.height
  }
  return height
}

function balancedTree (rootNode) {
  // Your code here 
  if (!rootNode) return true

  let leftHeight = getHeight(rootNode.left)
  let rightHeight  = getHeight(rootNode.right)

  return Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right)

}

function countNodes (rootNode) {
  // Your code here 
  if (!rootNode) return 0
  let queue = [rootNode]
  let count = 0
  while (queue.length) {
    let curr = queue.shift()
    if(curr) count++

    if (curr.left) queue.push(curr.left)
    if (curr.right) queue.push(curr.right)

  }
  return count
}

function getParentNode (rootNode, target) {
  // Your code here 
  const stack = [rootNode]    //create a stack
  if (rootNode.val === target) return null //if no root; return null

  while (stack.length) { //while stack has a length/nodes contine looping
    let node = stack.pop() //pop from your stack

    if (node.left) {  //check the left nodes existence
      if (node.left.val === target) { // if it exist; check if the val === target
      return node   //if so; return the parent node/prev node
      } else {
      stack.push(node.left) //or push to the stack
      }
    }
    if (node.right) {  //check the right nodes existence
      if (node.right.val === target) { //...
      return node //...
    } else {
      stack.push(node.right) //...
    }
    }
  }
  return undefined //if the target was never found; return undefined
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
  if (!rootNode) return null

  if (target <= rootNode.val) return inOrderPredecessor(rootNode.left, target)
  else {
    const node = inOrderPredecessor(rootNode.right, target)
    if (node) return node
    else return rootNode.val
  }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

  // console.log('Tree Root:', bstRoot.val, 'Tree Root Right:', bstRoot.right.val, 'Tree Root Left:', bstRoot.left.val, '\nRight:', bstRoot.right.val, '\nLeft:', bstRoot.left.val)
  
  // Do a traversal to find the node. Keep track of the currNode
  let parentNode = getParentNode(rootNode, target);
  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;
  
  if (target < rootNode.val)
    rootNode.left = deleteNodeBST(rootNode.left, target)
  // If the key to be deleted is greater than the root's key, then it lies in the right subtree
  else if (target > rootNode.val)
    rootNode.right = deleteNodeBST(rootNode.right, target)
  // If key is same as root's key, then this is the node to be deleted
  else {
    // Node with only one child or no child
    if (!rootNode.left)
      return rootNode.right
    else if (!rootNode.right)
      return rootNode.left
    // Node with two children: Get the inorder successor (larger in the right subtree)
    rootNode.val = findMinBST(rootNode.rightl)
    // Delete the inorder successor
    rootNode.right = deleteNodeBST(rootNode.right, rootNode.val)
  }
  return rootNode
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
