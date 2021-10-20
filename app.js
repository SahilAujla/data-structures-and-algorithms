// Priority Queue

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

let qu = new PriorityQueue();

qu.enqueue("Head Shot", 1);
qu.enqueue("Gunshot Wound", 2);
qu.enqueue("High Fever", 3);
qu.enqueue("About to die", 0);

//------------------------------------------------------------------Priority-Queue-End------------------------------------------------------------------------------

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // for now I am not adding removeVertex() and removeEdge() methods but they are very similar to that of unweighted graphs, In that I just need to remove the object --> I can easily implement them

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push({ node: v2, weight });
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }

  // Dijktra's Algorithm

  shortestPath(start, end) {
    let q = new PriorityQueue();
    let distances = {};
    let previous = {};
    let smallest;
    let path = []; // to return at the end
    for (let property in this.adjacencyList) {
      if (property === start) {
        distances[property] = 0;
        q.enqueue(property, 0);
      } else {
        distances[property] = Infinity;
        q.enqueue(property, Infinity);
      }
      previous[property] = null;
    }

    while (q.values.length) {
      smallest = q.dequeue().val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] != Infinity) {
        for (let i = 0; i < this.adjacencyList[smallest].length; i++) {
          let newDistance =
            distances[smallest] + this.adjacencyList[smallest][i].weight;

          if (newDistance < distances[this.adjacencyList[smallest][i].node]) {
            distances[this.adjacencyList[smallest][i].node] = newDistance;
            previous[this.adjacencyList[smallest][i].node] = smallest;
            q.enqueue(this.adjacencyList[smallest][i].node, newDistance);
          }
        }
      }
    }
    console.log(path.concat(smallest).reverse());
    console.log(distances[end]);
  }
}

let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("E", "D", 3);
g.addEdge("C", "D", 2);
g.addEdge("F", "E", 1);
g.addEdge("D", "F", 1);
g.addEdge("C", "F", 4);
