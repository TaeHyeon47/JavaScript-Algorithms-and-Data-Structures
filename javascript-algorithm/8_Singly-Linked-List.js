/////////////////////////////////////////
//? 단일 연결 리스트 (Singly Linked Lists)

// Objectives
// ● Define what a Singly Linked List is.
// ● Compare and contrast Linked Lists with Arrays.
// ● Implement insertion, removal and traversal methods on Singly Linked Lists.

//* What is a linked list?
// ● 각각의 Element를 "노드"라고 부른다.
// ● A data structure that contains a head, tail and length property.
// ● 'head'는 연결 리스트의 시작 노드를 의미. 'tail'은 연결 리스트의 마지막 노드를 의미. 작업을 용이하게 하기 위해 'length'를 계속 유지 (강의 110 2분 50초 그림 참조)
// ● Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.
// ● pointer : 다음 노드를 가리키는 정보 저장. 다음 노드가 없을 경우 'null'를 입력.
// ● 헤드 노드가 어디 있는지만 알고 있을 것이며, 이 헤드 노드로부터 두번째 노드를 알아내고, 두 번째 노드에서 세 번째 노드를 알아내는 식으로 마지막 노드까지 접근.
// ● Array의 경우 인덱스(색인)이 부여된다. 반면, 연결 리스트는 다음 데이터를 가리키는 인덱스 없이 그냥 다수의 데이터 엘리먼트로만 구성된다.
//* ● Linked List는 마치 객차들이 연속으로 연결되어 있는 기차와 같다. 하지만 데이터에 접근하기 위한 인덱스는 없다.
// 사이트 참고 : https://visualgo.net/en/list

// Comparisons with Arrays

// Lists
// ● Do not have indexes!
// ● Connected via nodes with a next pointer
// ● Random access is not allowed

// Arrays
// ● Indexed in order!
// ● Insertion and deletion can be expensive
// ● Can quickly be accessed at a specific index

// Array의 경우 새로운 데이터를 중간에 추가하면 인덱스가 밀리는 물결 효과를 감수해야한다.

//? 코드 스타터와 push 메소드 소개
// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

// Pushing pseudocode
// ● This function should accept a value
// ● Create a new node using the value passed to the function
// ● If there is no head property on the list, set the head and tail to be the newly created node
// ● Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// ● Increment the length by one
// ● Return the linked list
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');

//? Popping
// ● Removing a node from the end of the Linked List!

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // head를 따라가는 코드
  // traverse() {
  //   var current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
}

// Popping pseudocode
// ● If there are no nodes in the list, return undefined
// ● Loop through the list until you reach the tail
// ● Set the next property of the 2nd to last node to be null
// ● Set the tail to be the 2nd to last node
// ● Decrement the length of the list by 1
// ● Return the value of the node removed

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

//? Shifting
// ● Removing an new node from the beginning of the Linked List!

// Shifting pseudocode
// ● If there are no nodes, return undefined
// ● Store the current head property in a variable
// ● Set the head property to be the current head's next property
// ● Decrement the length by 1
// ● Return the value of the node removed

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
}

//? Unshifting
// ● Adding a new node to the beginning of the Linked List!

// Unshifting pseudocode
// ● This function should accept a value
// ● Create a new node using the value passed to the function
// ● If there is no head property on the list, set the head and tail to be the newly created node
// ● Otherwise set the newly created node's next property to be the current head property on the list
// ● Set the head property on the list to be that newly created node
// ● Increment the length of the list by 1

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // else를 넣지 않으면 head, tail가 null인 상황에서 무한루프 코드를 만들어 버린다.
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
