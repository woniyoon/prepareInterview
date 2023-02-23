class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

// 스택 
// LIFO 자료구조

// 자바스크립트 빌트인 자료구조에는 스택이 없지만
// 배열에는 push/pop, unshift,shift와 같은 메소드가 있기 때문에 스택처럼 사용할 수 있다.
// 그러나 스택을 이해하기 위해, 스택을 구현하는 방법에는 여러가지 중에서 단방향연결리스트를 이용해 직접 메소드를 작성한다.
// 단방향연결리스트에도 똑같은 효과를 내는 push/pop 메소드가 있지만 시간복잡도이 O(n)이다.
// 하지만 스택의 push/pop의 시간복잡도은 O(1)이다.
// search: O(n), access: O(n)

class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
  }

  push(val) {
      let newNode = new Node(val);

      if (this.length === 0) {
          this.first = newNode;
          this.last = newNode;
      } 

      if (this.length > 0) {
          let oldFirst = this.first;
          this.first = newNode;
          this.first.next = oldFirst;            
      }

      return ++this.length;
  }

  pop() {
      if (this.length === 0) return null;

      let firstNode = this.first;
      
      // length가 0보다 크다면 첫번째 노드를(first) 그 다음 노드로 변경하는 로직은 똑같이 적용됨
      // 대신 1개 일 때 더 이상 넘어가지 못하게 마지막 노드를(last) null로 변경하는 분기처리만 추가
      if (this.first === this.last) {
          this.last = null;
      }
      
      this.first = this.first.next;
      firstNode.next = null;
      
      this.length--;
      return firstNode.val;
  }
}



// 큐
// FIFO 자료구조

// ex) 컴퓨터의 백그라운드 작업, 자료 업로드 및 다운로드, 프린터 작업, 프로세스 작업,
//     더 복잡한 알고리즘과 자료구조를 구현할 때 필요
// 스택과 동일하게 enqueue와 dequeue의 시간복잡도는 O(1)
// search, access의 시간복잡도는 O(n)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;      
    }

    return ++this.length;
  }

  dequeue() {
    if (this.length === 0) return null;

    let first = this.first;

    // 이 과정을 생략해도 되는 줄 알았으나, 큐 안에 last값이 계속 존재하는 문제가 있음
    // 꼭 last를 없애줘야한다.
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    first.next = null;

    this.length--;
    return first.val;
  }
}