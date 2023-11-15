/////////////////////////////////////////
//? 스택 (Stacks) + 큐 (Queues)

// Objectives
// ● Define what a stack is
// ● Understand use cases for a stack
// ● Implement operations on a stack data structure

//? What is a stacks?
// ● A LIFO data structure!
// ● The last element added to the stack will be the first element removed from the stack

// How is it used?
// ● Think about a stack of plates, or a stack of markers, or a stack of... anything.
// ● As you pile it up the last thing (or the topmost thing) is what gets removed first.

// 강의 151 사진 참조

// Where stacks are used
// ● Managing function invocations
// ● Undo / Redo
// ● Routing (the history object) is treated like a stack!

//? 자바스크립트 내장 배열로 스택 만들기
// There is more than one way of implementing a stack

// 1.
var stack = [];
stack.push('google');
stack.push('instagram');
stack.push('youtube');
// stack ['google', 'instagram', 'youtube']
stack.pop(); // youtube
stack.pop(); // instagram
stack.push('amazon');
stack.pop(); // amazon
stack.pop(); // google

// 2.
var stack = [];
stack.unshift('create new file');
stack.unshift('resized file');
stack.unshift('cloned out wrinkle');
// stack ['cloned out wrinkle', 'resized file', 'create new file']
stack.shift(); // cloned out wrinkle
stack.shift(); // resized file
stack.shift(); // create new file

// ● 배열의 재배치 관점에서 본다면 unshift보다 push를 사용하는 것이 낫다.
// ● 코드의 효율성을 보았을 때 배열을 스택으로 이용하지 않는 경우가 더 많다.

//? Class를 사용한 스택 만들기
// ● 이전에 배운 '단일 연결 리스트'는 상수값(constant) 시간(time)을 가지지 않는다.
// ● 왜냐하면 리스트의 맨 뒤에서 무언가를 제거하는 것은 리스트의 특성 때문에 전체 리스트를 순회해서 바로 끝 앞에서 멈춰야하기 때문이다.
// ● 그러면 전체 리스트에 루프를 걸어야하니 constant time이 아니게 된다.
//* ● 따라서 shift와 unshift를 사용하는 것이 낫다. 아래는 push와 pop으로 정의했지만 unshift와 shift의 로직이다.

// Pushing pseudocode
// ● The function should accept a value
// ● Create a new node with that value
// ● If there are no nodes in the stack, set the first and last property to be the newly created node.
// ● If there is at least one node, create a variable that stores the current first property on the stack
// ● Reset the first property to be the newly created node
// ● Set the next property on the node to be the previously created variable
// ● Increment the size of the stack by 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

//? 큐 (Queues)

// Objectives
// ● Define what a queue is
// ● Understand use cases for a queue
// ● Implement operations on a queue data structure

// What is a queue? (선입선출)
// ● A FIFO data structure!
// ● First in first out

// We've seen this before
// ● Queues exist everywhere! Think about the last time you waited in line...
// ● How do we use them in programming?
// ● 게임 접속 대기
// ● Background tasks
// ● Uploading resources
// ● Printing / Task processing
