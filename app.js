class NodeQ {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNodeQ = new NodeQ(val);
    if (this.size === 0) {
      this.first = newNodeQ;
      this.last = newNodeQ;
    } else {
      this.last.next = newNodeQ;
      this.last = newNodeQ;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    return !this.size;
  }
}

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

  BFS() {
    let q = new Queue();
    let visited = [];
    q.enqueue(this.root);
    while (q.size > 0) {
      let temp = q.dequeue();
      if (temp.left) {
        q.enqueue(temp.left);
      }
      if (temp.right) {
        q.enqueue(temp.right);
      }
      visited.push(temp);
    }
    return visited;
  }

  DFSPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node);
    }

    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }

  heightOfTree() {
    function height(node) {
      if (!node) {
        return 0;
      }
      if (node.left === null && node.right === null) {
        return 0;
      }
      return 1 + Math.max(height(node.left), height(node.right));
    }
    return height(this.root);
  }
}

let tree = new BinarySearchTree();

// Both DFS and BFS have the same time complexities because we are visiting every node once (o(1))
// If a tree is branched then BFS can take a lot more space than DFS because it stores all the nodes in queue
