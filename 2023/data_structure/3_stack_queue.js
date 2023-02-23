class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

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