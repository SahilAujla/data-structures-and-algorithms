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
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          // that means val > current.value
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (val === current.value) return true;
      if (val > current.value) {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
        }
      }
    }
  }

  remove(val) {
    if (!this.root) return false;

    if (val === this.root.value) {
      this.root = null;
      return true;
    }
    let current = this.root;
    while (true) {
      if (val > current.value) {
        if (!current.right) {
          return false;
        } else {
          if (current.right.value === val) {
            current.right = null;
            return true;
          }
        }
        current = current.right;
      } else {
        if (!current.left) {
          return false;
        } else {
          if (current.left.value === val) {
            current.left = null;
            return true;
          }
          current = current.left;
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
// Binary search tree
