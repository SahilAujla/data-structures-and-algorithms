class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// we are using a min binary heap to implement Priority Queue

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex === -1) return true;
    while (this.values[parentIndex].priority > this.values[index].priority) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      if (index === 0) return true;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return true;
  }

  bubbleDown(parentIndex) {
    while (parentIndex < this.values.length - 1) {
      let indexOfLeftChild = parentIndex * 2 + 1;
      let indexOfRightChild = parentIndex * 2 + 2;

      if (this.values[indexOfLeftChild] && this.values[indexOfRightChild]) {
        if (
          this.values[indexOfLeftChild].priority <
            this.values[indexOfRightChild].priority &&
          this.values[indexOfLeftChild].priority <
            this.values[parentIndex].priority
        ) {
          let childIndex = indexOfLeftChild;
          let temp = this.values[parentIndex];
          this.values[parentIndex] = this.values[indexOfLeftChild];
          this.values[indexOfLeftChild] = temp;
          parentIndex = childIndex;
        } else if (
          this.values[indexOfRightChild].priority <
            this.values[indexOfLeftChild].priority &&
          this.values[indexOfRightChild].priority <
            this.values[parentIndex].priority
        ) {
          let childIndex = indexOfRightChild;
          let temp = this.values[parentIndex];
          this.values[parentIndex] = this.values[indexOfRightChild];
          this.values[indexOfRightChild] = temp;
          parentIndex = childIndex;
        } else {
          return true;
        }
      } else if (
        this.values[indexOfLeftChild] &&
        !this.values[indexOfRightChild]
      ) {
        if (
          this.values[indexOfLeftChild].priority <
          this.values[parentIndex].priority
        ) {
          let childIndex = indexOfLeftChild;
          let temp = this.values[parentIndex];
          this.values[parentIndex] = this.values[indexOfLeftChild];
          this.values[indexOfLeftChild] = temp;
          parentIndex = childIndex;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    return this.bubbleUp(index);
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let oldRoot = this.values.pop();
    this.bubbleDown(0);
    return oldRoot;
  }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Head Shot", 1);
priorityQueue.enqueue("Gunshot Wound", 2);
priorityQueue.enqueue("High Fever", 3);
priorityQueue.enqueue("About to die", 0);

// Priority Queu
