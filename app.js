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
