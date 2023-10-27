/////////////////////////////////////////
//? 자료구조 (Data Structures)
// What do they do?
// ● Data structures are collections of values,
// the relationships among them, and the functions or operations that can be applied to the data.

// Why so many???
// ● Different data structures excel at different things. Some are highly specialized, while others(like arrays) are more generally used.

// Why care?
// ● The more time you spend as a developer, the more likely you'll need to use one of these data structures.
// ● You've already worked with many of them unknowingly!
// ● And of course... interviews
// ● They all excel in different situations...

// 질문과 올바른 자료구조
// Working with map/location data?
// Use a graph!

// Need an ordered list with fast inserts/removals at the beginning and end?
// Use a linked list!

// Web scraping nested HTML?
// Use a tree!

// Need to write a scheduler?
// Use a binary heap!

// There is a ton of content to take in here...
// don't get overwhelmed trying to master it all at once.

/////////////////////////////
// ES2015 Class 구문 정리
// ● 자료구조 학습을 위해 ES2015 Class 구문을 정리

// Objectives
// ● Explain what a class is
// ● Understand how javascript implements the idea of classes
// ● Define terms like abstraction, encapsulation, and polymorphism
// ● Use ES2015 classes to implement data structures

// What is a class?
// ● A blueprint for creating objects with pre-defined properties and methods
// Does Javascript really have them? Ehh... not really
// 자바스크립트에서 클래스는 프로토타입 기반 상속자들을 구문적으로 눈속임하여 구현한 것.

// The Syntax
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// ● The method to create new objects must be called constructor
// ● The class keyword created a constant, so you can not redefine it. Watch out for the syntax as well!
// 또는 '인스턴스 메소드' 내부에서 사용되는 this는

// Creating objects from classes
// ● We use the new keyword
let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Blue', 'Steele');

// ● 'constructor' 내부의 this는 Student 개별 클래스 인스턴스를 지칭. 즉, firstStudent, secondStudent 지칭

// Instance Methods (인스턴스 메소드!)

// The Syntax
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

let firstStudent3 = new Student('Colt', 'Steele');

firstStudent.fullName(); // "Colt Steele"

// ● 인스턴스를 생성하지 않으면 메소드를 실행할 수 없다.
// ● 'this'는 개별 인스턴스에만 적용된다.

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent2 = new Student('Colt', 'Steele', 1);
let secondStudent2 = new Student('Blue', 'Steele', 2);

secondStudent2.addScore(92);

// Class Methods

// ● 'static' 키워드는 클래스에 종속되는 반면 클래스의 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는 메소드 혹은 기능들을 생성.
// ● MDN 정의 : 'static' 키워드는 클래스의 Static 메소드를 정의합니다. Static 메소드는 클래스의 인스턴스화 없이도 호출될 수 있으며 클래스 인스턴스를 통해서 호출될 수 없습니다.
// 이들은 어플리케이션을 위한 유틸리티 기능을 생성하기 위해 자주 사용됩니다.

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return 'ENROLLING STUDENTS!';
  }
}

let firstStudent5 = new Student('Colt', 'Steele', 1);
let secondStudent5 = new Student('Blue', 'Steele', 2);
Student.EnrollStudents();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// 아래와 같이 인자를 넣기 위해 클래스 메소드(static)이 필요
// Point.distance(p1, p2) - 7.0710678118654755

// ● We will be using the constructor and instance methods quite a bit!
// ● We will almost never be using static methods.

//* One gotcha with 'this'
// ● Inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance).

// Recap
// ● Classes are blueprints that when created make objects known as instances.
// ● Classes are created with the new keyword.
// ● The constructor function is a special function that gets run when the class is instantiated.
// ● Instance methods can be added to classes similar to methods in objects.
// ● Class methods can be added using the static keyword.
// 'new'를 통해 클래스를 인스턴스화 시키게 되면, constructor가 먼저 동작하게 된다.
