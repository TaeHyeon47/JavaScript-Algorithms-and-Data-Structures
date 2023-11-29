//? Objectives
// ● Define what a tree is
// ● Compare and contrast trees and lists
// ● Explain the differences between trees, binary trees, and binary search trees
// ● Implement operations on binary search trees

//? What is a tree?
//* ● A data structure that consists of nodes in a parent / child relationship

// A Singly Linked List : sort of a special case of a tree
// ● 노드가 자신보다 더 낮은 곳에 있지 않은 다른 노드를 가리키면 Tree가 아님.
// ● 노드는 부모-자식 관계에 따라서 자식인 노드만을 가리킬 수 있음.
// ● 트리는 출발 지점이 하나여야 한다.

//? Tree Terminology
//* ● Root - The top node in a tree.
//* ● Child - A node directly connected to another node when moving away from the Root.
//* ● Parent - The converse notion of a child.
//* ● Siblings - A group of nodes with the same parent.
//* ● Leaf - A node with no children.
//* ● Edge - The connection between one node and another.

//? 트리(Tree)의 사용처
// Lots of different applications!
// ● HTML DOM
// ● Network Routing
// ● Abstract Syntax Tree
// ● Artificial Intelligence
// ● Folders in Operating Systems
// ● Computer File Systems

//? 이진(Binary) 트리(Tree)의 개념
// ● 트리에도 다양한 종류가 있다
// ● 한 노드당 최대 2개의 자식 노드를 가질 수 있다. 즉, 0, 1, 2개의 자식을 가진다.
// ● 이진(Binary) 검색(Search) 트리(Tree)는 데이터를 비교해서 정렬 가능하게 한다.

// How BSTs work
// ● Every parent node has at most two children
// ● Every node to the left of a parent node is always less than the parent
// ● Every node to the right of a parent node is always greater than the parent
// ● 이진 탐색 트리에서 무언가를 찾는 것은 정렬되지 않은 트리와 비교하면 아주 빠르다.

//? 이진 검색 트리 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

//? 이진(Binary) 트리(Tree) Insert 메소드

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
