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
      return firstNode;
  }
}