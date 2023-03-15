// 우선순위 큐
// 각 요소가 우선순위 값을 가지고 있는 자료구조
// 보통 priority 숫자가 낮을수록 우선순위가 높음

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  } 

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  bubbleUp() {
    let index = this.values.length-1;
    const element = this.values[index];

    while(index > 0) {
      let parentIdx = Math.floor((index-1)/2);
      let parentNode = this.values[parentIdx];

      if (parentNode.priority <= element.priority) break;
      
      this.swap(this.values, parentIdx, index);
      index = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2*idx+1;
      let rightChildIdx = 2*idx+2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break;
      this.swap(this.values, swap, idx);
      idx = swap;
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("cook", 5)
pq.enqueue("clean", 1)
pq.enqueue("study", 4)
pq.enqueue("book reading", 2)
pq.enqueue("exercise", 3)
// pq = [
//   Node { val: 'clean', priority: 1 },
//   Node { val: 'book reading', priority: 2 },
//   Node { val: 'study', priority: 4 },
//   Node { val: 'cook', priority: 5 },
//   Node { val: 'exercise', priority: 3 }
// ]
pq.dequeue();  // Node { val: 'clean', priority: 1 }
pq.dequeue();  // Node { val: 'book reading', priority: 2 }
pq.dequeue();  // Node { val: 'exercise', priority: 3 }
