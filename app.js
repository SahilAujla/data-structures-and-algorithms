// A singly linked list if collection of nodes
// Each node contains a value and address to the next node

// Class for each node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let element = this.head;
    while (counter < index) {
      element = element.next;
      counter++;
    }
    return element;
  }

  set(index, value) {
    if (!this.get(index)) {
      return false;
    } else {
      this.get(index).val = value;
      return true;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(value);
    if (index === this.length) {
      this.push(value);
      return true;
    } else if (index === 0) {
      this.unshift(value);
      return true;
    } else {
      let pre = this.get(index - 1);
      let post = pre.next;
      pre.next = newNode;
      newNode.next = post;
      this.length++;
      return true;
    }
  }

  // // can also write it like this

  // insert(index, value) {
  //   if (index < 0 || index > this.length) return false;
  //   let newNode = new Node(value);
  //   if (index === this.length) !!this.push(value);
  //   if (index === 0) !!this.unshift(value);
  //   // here we are converting the lists returned by unshift and push functions to true(to its boolean ) by using double !!
  //   let pre = this.get(index - 1);
  //   let post = pre.next;
  //   pre.next = newNode;
  //   newNode.next = post;
  //   this.length++;
  //   return true;
  // }
}

let list = new SinglyLinkedList();
list.push("Sahil");
list.push("Aujla");
list.push("g");
console.log(list);
