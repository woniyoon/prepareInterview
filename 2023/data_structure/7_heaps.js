// 힙
//  - 트리의 일종, 종류가 많음(이진 힙, 피보나치 힙, 리프 힙, ...)

// 이진 힙
//  - 이진탐색 트리와 비슷
//  - 각 노드는 최대 두 개의 자식노드를 가질 수 있음
//  - max binary heap: 부모노드가 항상 자식노드보다 큰 값을 가짐
//  - min binary heap: 부모노드가 항상 자식노드보다 작은 값을 가짐
//  - 왼쪽 오른쪽 노드의 순서가 X, 어떤 힙이냐에 따라서 부모노드보다 값이 작거나 크면 됨
//  - 항상 최적의 용량을 가짐 (다음 레벨로 내려가기 전에 좌, 우 자식 노드의 값이 이미 채워져있음)
//  - 우선순위 큐 구현 및 그래프 순회 알고리즘에 사용됨

// 구현
// list/array를 이용해 이진 힙을 표현할 수 있음
//
//         (100)
//    (19) ----- (36)
// (17)-(12)    (25)-(5)
//    ....
//
// [100, 18, 36, 17, 12, 25, 5, ...]
// n번째 있는 부모노드의 왼쪽노드의 인덱스는 (2n+1)
// n번째 있는 부모노드의 오른쪽노드의 인덱스는 (2n+2)
// 위 공식을 이용해 n번째 있는 자식노드의 부모노드도 구할 수 있음 Math.floor((n-1)/2)


// 이진힙의 빅오
// 삽입 - O(logN)
// 제거 - O(logN)
// 검색 - O(N)

// 트리의 레벨이 한쪽으로 치우쳐질 수 있는데 반해, 이진힙은 항상 자식노드가 양쪽으로 있음.
// 그러나 탐색하기엔 적절하지 않은 자료구조 (형제노드들끼리 순서가 보장이 안돼있기 때문)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  // insert(value) {
  //   this.values.push(value);

  //   let currentIdx = this.values.length-1;
  //   let parentNodeIdx = Math.floor((currentIdx-1)/2);

  //   while (parentNodeIdx >= 0) {
  //     if (this.values[parentNodeIdx] > this.values[currentIdx]) break;
      
  //     this.swap(this.values, parentNodeIdx, currentIdx);
  //     currentIdx = parentNodeIdx;
  //     parentNodeIdx = Math.floor((parentNodeIdx-1)/2);
  //   }

  //   return this.values;
  // }

  insert(value) {
    this.values.push(value);

    let currentIdx = this.values.length-1;
    
    // parentNodeIdx값을 초기화하고, while문 안에서 업데이트하는 것이 불필요한 중복같다.
    // parentNodeIdx대신에 currentIdx의 값이 0보다 크다는 조건을 걸어도 무방하다.
    while (currentIdx > 0) {
      let parentNodeIdx = Math.floor((currentIdx-1)/2);
      
      if (this.values[parentNodeIdx] > this.values[currentIdx]) break;
      this.swap(this.values, parentNodeIdx, currentIdx);
      currentIdx = parentNodeIdx;
    }

    return this.values;
  }

  extractMax() {
    if  (this.values.length === 0) return;
    // max값인 루트노드와 가장 끝에 있는 노드를 변경해주기
    this.swap(this.values, 0, this.values.length-1);
    const maxVal = this.values.pop();
    let currentIdx = 0;
    const length = this.values.length;

    while (true) {
      let currentNode = this.values[currentIdx];

      let leftChildIdx = (currentIdx*2)+1;
      let rightChildIdx = (currentIdx*2)+2;
      let leftNode, rightNode;
      let swap = null;


      if (leftChildIdx < length) {
        leftNode = this.values[leftChildIdx];
        if (leftNode > currentNode) {
          swap = leftChildIdx;
        }
      }
      
      if (rightChildIdx < length) {
        rightNode = this.values[rightChildIdx];
        if ((swap === null && rightNode > currentNode) || (swap !== null && rightNode > leftNode)) {
          swap = rightChildIdx;
        }
      }
      
      if (swap === null) break;

      this.swap(this.values, swap, currentIdx);
      currentIdx = swap;
    }
    
    return maxVal;
  }
}


let maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);  // [55, 39, 41, 18, 27, 12, 33]
maxBinaryHeap.extractMax();  // 55