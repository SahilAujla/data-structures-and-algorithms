// Queues using Singly-Linked-List.
// (can also implement using doubly linked-list which is also preferred way).

// here we are removing from the beginning because we need O(1) time complexity and adding to the last.

// Queues --> FIFO principle --> First-in-first-out
// Stacks --> LIFO principle --> Last-in-first-out

class Node {
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
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
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

let q = new Queue();
