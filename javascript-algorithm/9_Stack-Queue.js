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

// There is more than one way of implementing a stack

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
