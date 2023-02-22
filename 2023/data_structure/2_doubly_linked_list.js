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

  // 꼬리에 노드 새로 넣기
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
      // this.head와 this.tail이 같은 노드를 가리키고 있기 때문에 2번째 꼬리 노드가 들어오면
      // this.tail을 새로운 노드로 향하게 만들어주는 동시에 this.head.next가 새로운 노드를 가리키기 때문에
      // 별도로 head의 next값을 지정해줄 필요가 없다.
      // this.head.next = this.tail;
    }

    this.length++;
    return this;
  }


  // 꼬리 노드 제거
  pop() {
    if (!this.head) return undefined;

    // nodeToReturn을 선언만 해놓고 조건에 따라서 값 할당을 했으나,
    // length가 1인 경우 head와 tail 모두 동일함
    // 때문에 nodeToReturn을 this.tail로 초기화해도 무방함
    let nodeToReturn = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToReturn.prev;
      this.tail.next = null;
      nodeToReturn.prev = null;
    }
    
    this.length--;

    return nodeToReturn;
  }

  // 헤드 노드 제거
  shift() {
    if (this.length === 0) return undefined;

    let nodeToReturn = this.head;

    // 노드의 개수에 따라 분기처리 필요
    // 노드가 1개만 있을 때, 이전 헤드를 현 헤드로 할당할 필요가 없음
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToReturn.next;
      this.head.prev = null;
      nodeToReturn.next = null;
    }

    this.length--;
    return nodeToReturn;
  }


  // 헤드에 노드 새로 넣기
  unshift(val) {
    if (this.length === 0) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;      
    }

    this.length++;
    return this;
  }

  
  // n번째 노드 찾아 리턴하기
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let isForward = idx <= this.length/2;
    let target = isForward ? this.head : this.tail;

    if (isForward) {
      for (let i=0; i<idx; i++) {
        target = this.head.next;
      }
    } else {
      for (let i=0; i<(this.length-1)-idx; i++) {
        target = this.tail.prev;
      }
    }

    return target;
  }


  // n번째 노드의 값을 업데이트
  set(idx, val) {
    let node = this.get(idx);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    // unshift와 push 메소드는 this를 리턴하나, 통일성?을 주기 위해서 double negation을 이용해 boolean값으로 변경
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length-1) return !!this.push(val);
    
    let newNode = new Node(val);
    let prevNode = this.get(idx-1);
    // newNode와 prevNode 변수만 만들었었는데, 가독성을 위해서 nextNode 변수도 만드는게 좋을 것 같다
    let nextNode = prevNode.next;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift();
    if (idx === this.length-1) return !!this.pop(); 

    let prevNode = this.get(idx);
    let nodeToDelete = prevNode.next;
    let nextNode = nodeToDelete.next;

    nodeToDelete.prev = null;
    nodeToDelete.next = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return true;
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
ddl.push(8);

ddl.push(100);

ddl.pop();
ddl.pop();
ddl.pop();


ddl.printDdl();
