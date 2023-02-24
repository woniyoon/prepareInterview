// 트리
// ex) HTML DOM, 네트워크 라우팅, Abstract Syntax Tree, AI, 폴더(Finder, 탐색기)
// 
// 트리 종류
// Trees: 자식 노드 개수에 대한 룰 x
// Binary Trees: 자식 노드를 최대 2개까지 가질 수 있음
// Binary Search Trees: Binary Trees의 한 예로 데이터가 정렬돼있고 순회가 쉬움.
//                      부모노드를 기준으로 그보다 작은 노드들은 왼쪽으로, 더 큰 노드들은 오른쪽으로 내려감


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
}


let tree = new BinarySearchTree();

tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(200);


console.log(tree.find(5));    // Node
console.log(tree.find(200));  // Node 
console.log(tree.find(20));   // undefined

