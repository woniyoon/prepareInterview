class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val) {
      let currNode = new Node(val);
      
      if (this.length === 0) {
          this.head = currNode;
          this.tail = currNode;            
      } else {
          // tail부터 바꾸면 이전 노드와의 연결이 끊겨버림!!
          this.tail.next = currNode;
          this.tail = currNode;
      }

      this.length++;
      return this;
  }

  pop() {
      // 제거될 노드가 하나도 없을 때, undefined 리턴
      if (this.length === 0) {
          return undefined;
      }
      
      let poppedNode; // 제거될 노드가 있을시, 그 노드를 리턴
      
      if (this.length !== 1) {
          let node = this.head;
          
          while(node.next !== this.tail) {
              node = node.next;
          }
          
          poppedNode = node.next;
          node.next = null;
          this.tail = node;            
      } else {
          poppedNode = this.tail;
          this.head = null;
          this.tail = null;            
      }

      
      this.length--;

      return poppedNode;
  }

  shift() {
      if (this.length === 0) {
          return undefined;
      }

      let nodeToReturn = this.head;

      this.head = this.head.next;

      if (this.length === 1) {
          this.tail = null;
      }

      this.length--;

      return nodeToReturn;
  }

  unshift(val) {
      let currNode = new Node(val);        
      
      if (this.length === 0) {
          this.head = currNode;
          this.tail = currNode;
      } else {
          let oldHead= this.head;
          this.head = currNode;
          this.head.next = oldHead;
      }

      this.length++;
      
      return this;
  }

  get(idx) {
      if (idx < 0 || idx >= this.length) return null;
      
      let count = idx;
      let node = this.head;

      while(count > 0) {
          node = node.next;
          count--;
      }

      return node;
  }

  set(idx, val) {
      if (idx < 0 || idx >= this.length) return false;

      const node = this.get(idx);
      node.val = val;
      return true;
  }

  

  insert(idx, val) {
      if (idx < 0 || idx > this.length) return false;
      // head만 바꾸면 되는 경우
      if (idx === 0) { return !!this.unshift(val); }
      // 맨 끝에 삽입하는 경우
      if (idx === this.length) { return !!this.push(val); } 

      let prevNode = this.get(idx-1);
      let newNode = new Node(val);
      let nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.next = nextNode;        
      this.length++;
      
      return true;
  }

  remove(idx) {
      if (idx < 0 || idx > this.length) return undefined;
      if (idx === 0) return this.shift();
      if (idx === this.length) return this.pop();

      let prevNode = this.get(idx-1);
      let nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
      this.length--;
      
      return nodeToRemove;
  }

  reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null;
      let next;
      let count = 0;
      
      while (count < this.length) {
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
          count++;
      }
      return this;
  }


  reverse2() {
      let currNode = this.head;
      this.head = this.tail;
      this.tail = currNode;
          
      let nextNodeToRead;       // 다음 노드들을 읽을 수 있게 변수에 저장
      let nodeToFollow = null; // 현재 노드가 가리키는 다음 노드들

      for (let i=0; i<this.length; i++) {
          nextNodeToRead = currNode.next;
          currNode.next = nodeToFollow;
          nodeToFollow = currNode;
      }

      return this;
  }
}
