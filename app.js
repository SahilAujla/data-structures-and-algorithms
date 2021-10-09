// A singly linked list if collection of nodes
// Each node contains a value and address to the next node

// Class for each node

// Singly Linked List all methods

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let returnElement = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      returnElement.prev = null;
    }
    this.length--;
    return returnElement;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      currentHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let element;
    if (index <= this.length / 2) {
      let counter = 0;
      element = this.head;
      while (counter < index) {
        element = element.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      element = this.tail;
      while (counter > index) {
        element = element.prev;
        counter--;
      }
    }
    return element;
  }

  set(index, value) {
    let element = this.get(index);
    if (element) {
      element.val = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else {
      let newNode = new Node(value);
      let pre = this.get(index - 1);
      let post = pre.next;
      pre.next = newNode;
      newNode.prev = pre;
      newNode.next = post;
      post.prev = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let pre = this.get(index - 1);
      let elementToRemove = pre.next;
      let post = elementToRemove.next;

      pre.next = post;
      post.prev = pre;
      elementToRemove.next = null;
      elementToRemove.prev = null;
      this.length--;
      return elementToRemove;
    }
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
