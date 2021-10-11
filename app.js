class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = new Node(val);
      return this;
    } else {
      function search(node) {
        if (val === node.value) return undefined;
        if (val > node.value) {
          if (!node.right) {
            node.right = newNode;
            return;
          }
          search(node.right);
        } else {
          if (!node.left) {
            node.left = newNode;
            return;
          }
          search(node.left);
        }
      }
      search(this.root);
      console.log(this);
    }
  }
}

let tree = new BinarySearchTree();
