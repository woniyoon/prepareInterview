// 그래프
// 노드와 연결의 조합
// 트리와 달리 시작점(parent node, entry point, ...)이 없음
// 
// ex) 소셜 네트워킹, 위치/지도, 길찾기, 추천 기능, 파일 시스템 최적화, ...
//
// 용어
// 1. vertex = 정점, 노드
// 2. edge = 정점간의 연결, 선
// 3. weighted/unweighted
//    가중  - 간선에 값 O (ex.길찾기)
//    비가중 - 간선에 값 X
// 4. directed/undirected
//    무방향 - 정해진 방향이 없음, 단방향이 아님 (ex.페이스북)
//    방향  - 간선이 화살표로 표시될 수 있음,
//           한 정점에서 다른 정점으로 바로 가지 못하고 거쳐가야하는 경우 (ex. 인스타(맞팔 여부))

// 정점간의 관계를 표현하는 방법
//  1. 인접배열
//     - nxn 배열을 이용. 이때, (n, n)이 의미하는 바는 n과 n이 연결여부.
//     - 배열내 값으로 boolean(true, false), number(1, 0) 혹은 string('yes', 'no') 아무거나 상관없음
//     - 간선이 많지 않고 데이터가 퍼져있으면 인접배열 비추
//     - Big O (|V|: 정점 개수, |E|: 간선 개수)
//        정점 추가: O(|V^2|)
//        간선 추가: O(1)
//        정점 제거: O(|V^2|)
//        간선 제거: O(1)
//        쿼리: O(1)
//        저장: O(|V^2|)      * 행과 열을 한 줄씩 더 추가하기 때문
//  2. 인접리스트
//     - 만약 정점의 값이 숫자일 경우, 리스트에서 이 값을 인덱스로 표현 & 해당 인덱스에 있는 값은 이 정점과 연결돼있는 다른 정점들의 값
//     - 공간을 많이 차지 않음. 인접배열보다 현실 데이터에 적용하기 좋음. (인접배열은 데이터가 집약적일 때!)
//     - 정점의 값이 숫자가 아니더라도 해시맵을 이용하면 표현할 수 있음. 
//        ex) {
//              A: ['B', 'F'],
//              B: ['A', 'C'],
//              ...
//              F: ['E', 'A']
//            }
//     - Big O (|V|: 정점 개수, |E|: 간선 개수)
//        정점 추가: O(1)
//        간선 추가: O(1)
//        정점 제거: O(|V| + |E|)
//        간선 제거: O(|E|)
//        쿼리: O(|V| + |E|)     * 특정 간선이 있는지 알아보고 싶을 때 배열과 달리 인덱스로 찾을 수 없어서 오래 걸림
//        저장: O(|V| + |E|)


// IMPLEMENTATION!

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) throw new Error("existing vertex!");

    // 아직 없는 정점일 때
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // 아직 없는 정점이면, 추가해줌
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])) throw new Error("non-existing vertex/vertices!")

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1);
  }

  removeVertex(vertex) {
    for (const v in this.adjacencyList) {
      // v는 key라서 string, vertex는 숫자라서 엄격 비교를 하면 false로 나옴
      if (v == vertex) { 
        delete this.adjacencyList[v];
      } else {
        // 각 정점이 지울 vertex를 가지고 있는 경우 하나 하나 다 돌면서 제거
        this.adjacencyList[v] = this.adjacencyList[v].filter(e => e !== vertex);
      }
    }
  }

  // 처음에 작성을 위와 같이 했으나, 사실상 모든 정점을 둘러볼 필요가 없기 때문에 강의상에서는 아래와 같이 작성
  betterRemoveVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      // 이 과정을 통해 지우려는 정점과 연결된 정점을 모두 제거 & 그 정점들과 연결된 정점들만 체크할 수 있음
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  recursiveDFS(start) {
    const isVisited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    
    function check(vertex) {
      if (isVisited[vertex]) return null;

      isVisited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!isVisited[neighbor]) {
          return check(neighbor);
        }
      })
    }

    check(start);

    return result;
  }

  iterativeDFS(start) {
    const isVisited = {};
    const result = [];
    const vertices = [start];
    isVisited[start] = true;

    while (vertices.length) {
      let vertex = vertices.pop();

      isVisited[vertex] = true;
      result.push(vertex);
      
      this.adjacencyList[vertex].forEach(v => {
        if (!isVisited[v]) {
          isVisited[v] = true;
          vertices.push(v);
        }
      })
    }

    return result;
  }
}

const graph = new Graph();

// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addVertex(5);
// graph.addVertex(6);
// graph.addEdge(1,3);
// graph.addEdge(1,2);
// graph.addEdge(2,4);
// graph.addEdge(2,6);
// graph.addEdge(3,5);
// graph.removeVertex(2);
// graph.removeVertex(6);
// console.log(graph);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");
graph.recursiveDFS("A");  // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
graph.loopDFS("A");       // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
