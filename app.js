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
}

let tree = new BinarySearchTree();
// Binary search tree
