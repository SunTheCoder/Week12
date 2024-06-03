// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null
  
    }
  
    insert(val, currentNode=this.root) {
      // Your code here
      
      if (!(this.root)) {
  
      this.root = new TreeNode(val)
      return 
      }
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val)
        } else {
          this.insert(val, currentNode.left)
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val)
        } else {
          this.insert(val, currentNode.right)
        }
      }
  
  
    }
  
    search(val) {
      // Your code here 
      if (!this.root) {
        return false
      }
      let currentNode = this.root
      while (currentNode) {
        if (val < currentNode.val) {
          currentNode = currentNode.left
        } else if (val > currentNode.val) {
          currentNode = currentNode.right
        } else {
          return true
        }
      }
      return false
    }
  
    //Depth first search
  
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here 
      if(!currentNode) return
  
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
  
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here 
      if(!currentNode) return
  
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here 
      if(!currentNode) return
  
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here 
  
      // const queue = []
      // if (this.root) queue.push(this.root) 
  
      // while (queue.length > 0) {
      //   let node = queue.shift()
      //   if (node) {
      //   console.log(node.val)
  
      //   queue.push(node.left)
      //   queue.push(node.right)
      //   }
      // }
      
      const queue = [this.root]
  
      while (queue.length) {
        const node = queue.shift()
        console.log(node.val)
  
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
  
     }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here 
      const stack = [this.root]
      
      while (stack.length > 0) {  //or while (stack) {}
        let node = stack.pop()
        
          console.log(node.val)
  
          if (node.left) stack.push(node.left)  //flip line 132 and 133 will technically do a pre-order traversal
          if (node.right) stack.push(node.right)      
      }
      
    }
  }

  module.exports = { BinarySearchTree, TreeNode };