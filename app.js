class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index]) {
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
          this.values[indexOfLeftChild] > this.values[indexOfRightChild] &&
          this.values[indexOfLeftChild] > this.values[parentIndex]
        ) {
          let childIndex = indexOfLeftChild;
          let temp = this.values[parentIndex];
          this.values[parentIndex] = this.values[indexOfLeftChild];
          this.values[indexOfLeftChild] = temp;
          parentIndex = childIndex;
        } else if (
          this.values[indexOfRightChild] > this.values[indexOfLeftChild] &&
          this.values[indexOfRightChild] > this.values[parentIndex]
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
        if (this.values[indexOfLeftChild] > this.values[parentIndex]) {
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

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    return this.bubbleUp(index);
  }

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let oldRoot = this.values.pop();
    this.bubbleDown(0);
    return oldRoot;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
