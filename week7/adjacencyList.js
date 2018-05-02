function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  let vertex2Index = this.adjacencyList[vertex1].indexOf(vertex2)
  this.adjacencyList[vertex1].splice(vertex2Index, 1)
  let vertex1Index = this.adjacencyList[vertex2].indexOf(vertex1)
  this.adjacencyList[vertex2].splice(vertex1Index, 1)
}

Graph.prototype.removeVertex = function (vertex) {
  delete this.adjacencyList[vertex]
  Object.keys(this.adjacencyList).forEach(key => {
    const targetIndex = this.adjacencyList[key].indexOf(vertex)
    if (targetIndex > 0) {
      this.adjacencyList[key].splice(targetIndex, 1)
    }
  })
}

Graph.prototype.numEdges = function () {
  const vertices = this.adjacencyList;
  let totalEdges = 0;
  Object.keys(vertices).forEach(key => {
    totalEdges += vertices[key]
  });
  return totalEdges / 2;
}

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.numEdges(); // 4

var graph2 = new Graph();

graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');

graph2.addEdge('A', 'B');
graph2.addEdge('A', 'C');

graph2.numEdges(); // 2