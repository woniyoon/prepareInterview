class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 값 넣기
  push(val) {
    let newNode = new Node(val);
    
    // 이미 헤드가 있을 때
    if (this.head) {
      // 현재의 꼬리를 담아줄 변수를 만들어서 새로운 노드를 연결해주려고 했으나
      // 어차피 메모리에 올려져있는 객체이기 때문에 this.tail에 바로 새로운 값을 부여해도
      // 기존의 꼬리 노드가 사라지진 않기 때문에 무의미하다.

      // let oldTail = this.tail;
      // this.tail = newNode;
      // oldTail.next = this.tail;
      // this.tail.prev = oldTail;

      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.head.next = this.tail;
    }

    this.length++;
    return this;
  }

  // 생성된 양방향연결리스트 내 노드 출력하기
  printDdl() {
    let startNode = this.head;
    while(startNode) {
      console.log(startNode);
      startNode = startNode.next
    }
  }
}



const ddl = new DoublyLinkedList();
ddl.push(1);
// ddl.push(3);
// ddl.push(4);
// ddl.push(5);
// ddl.push(6);
// ddl.push(8);

ddl.push(100);

ddl.printDdl();