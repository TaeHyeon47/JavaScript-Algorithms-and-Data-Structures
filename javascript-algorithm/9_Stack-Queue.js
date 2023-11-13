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

// 배열의 재배치 관점에서 본다면 unshift보다 push를 사용하는 것이 낫다.
// 코드의 효율성을 보았을 때 배열을 스택으로 이용하지 않는 경우가 더 많다.

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
