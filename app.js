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

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    return this.bubbleUp(index);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
