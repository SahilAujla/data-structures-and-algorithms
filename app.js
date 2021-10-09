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
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
