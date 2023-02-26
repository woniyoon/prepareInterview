// 트리
// ex) HTML DOM, 네트워크 라우팅, Abstract Syntax Tree, AI, 폴더(Finder, 탐색기)
// 
// 트리 종류
// Trees: 자식 노드 개수에 대한 룰 x
// Binary Trees: 자식 노드를 최대 2개까지 가질 수 있음
// Binary Search Trees: Binary Trees의 한 예로 데이터가 정렬돼있고 순회가 쉬움.
//                      부모노드를 기준으로 그보다 작은 노드들은 왼쪽으로, 더 큰 노드들은 오른쪽으로 내려감
//
// 시간복잡도
// insertion / search
// best: O(logN)
// avg: O(logN)
// worst: O(N)  (한쪽으로 치우쳐진 Binary Tree라면 단방향연결리스트처럼 모든 노드들을 체크해야함)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode
      return this;
    } 
    
    let parentNode = this.root;

    while (true) {
      // 이미 있는 값을 입력할 때
      if (val === parentNode.val) return undefined;

      if (val < parentNode.val) {
        if (parentNode.left === null) {
          parentNode.left = newNode; 
          return this;
        } else {
          parentNode = parentNode.left;
        }
      } else {
        if (parentNode.right === null) {
          parentNode.right = newNode;
          return this;
        } else {
          parentNode = parentNode.right;
        }
      }
    }
  }

  // 처음 작성한 코드가 있는 값은 문제없이 찾는데, 없는 값을 찾을 때 계속 parentNode가 null이라 val에 접근할 수 없다고 에러가 났다.
  // 이유가 무엇일까 계속 생각했는데 if 분기처리를 else로 묶지않은 상태에서 parentNode 값을 변경하고 while컨디션을 체크하는게 아니라
  // 다음 if 컨디션 체크로 이어져서 뜻대로 작동하지 않았던 것이었다!!!!
  find(val) {
    let parentNode = this.root;

    while(!!parentNode) {
      if (val < parentNode.val) {
        parentNode = parentNode.left;
      } else if (val > parentNode.val) {
        parentNode = parentNode.right;
      } else {
        return parentNode;
      }
    }
    return undefined;
  }

  // 선형 자료구조와 달리 트리를 순회하는 방법은 여러가지
  // ex) BFS(너비우선탐색), DFS(깊이우선탐색)
  BFS() {
    const queue = [this.root];
    const visited = [];

    while (queue.length > 0) {
      let node = queue.shift();

      visited.push(node);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  // DFS 전위순회
  DFSPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node);
      // 재귀헬퍼함수를 이용해 왼쪽에 있는 노드를 전부 배열에 push하고
      // 왼쪽에 더 이상 없을 때 콜스택에서 pop된 순서대로 오른쪽 노드들을 다시 배열에 push
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}


let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS().map(item => item.val));
console.log(tree.DFSPreOrder().map(item => item.val));
// console.log(tree.find(5));    // Node
// console.log(tree.find(200));  // Node 
// console.log(tree.find(20));   // undefined

