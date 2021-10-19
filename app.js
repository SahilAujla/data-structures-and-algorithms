class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

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
}

let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "D", 7);
