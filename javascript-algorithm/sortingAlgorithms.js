// What is sorting?
// Sorting is the process of rearranging the items in a collection
// (e.g. an array) so that the items are in some kind of order.
// ex) Sorting numbers from smallest to largest
// ex) Sorting names alphabetically
// ex) Sorting movies based on release year

// 정렬이란?
// 컬렉션(collection)의 항목을 재배열하는 과정을 의미한다.
// 예를 들어 문자열을 하나 고른 후에 문자열 내의 각 문자를 정렬하는 걸 예로 들 수 있다.

// Why do we need to learn this?
// 1. Sorting is an incredibly common task, so it's good to know how it works
// 2. There are many different ways to sort things, and different techniques
// have their own advantages and disadvantages.

// Objectives
// 1. Implement bubble sort
// 2. Implement selection sort
// 3. Implement insertion sort
// 4. Understand why it is important to learn these simpler sorting algorithms

//? 자바스크립트 기본 내장 정렬

// String의 경우 알파벳 순으로 정렬이 된다.
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(); // ['Algorithms', 'Colt', 'Data Structures', 'Steele']

// 하지만, 숫자의 경우 논리적이지 않게 정리 되는 것처럼 보인다.
// MDN을 확인해보면, 기본 정렬 순서는 문자열 유니코드 코드 포인트에 따르기 때문이다.
// 즉, 배열의 모든 항목이 문자열로 변환되고, 해당 문자열의 유니코드 값에 항목이 정렬되는 것이다.
[6, 4, 15, 10].sort(); // [10, 15, 4, 6]

//? Telling JavaScript how to sort
// The built-in sort method accepts an optional comparator function
// -> 내장 정렬 메소드는 선택적 비교 함수(optional comparator function)를 인자로 전달 받는다.
// You can use this comparator function to tell JavaScript how you want it to sort
// -> 상기 방식을 통해서 자바스크립트에 우리가 원하는 정렬 방식을 알릴 수 있다.
// The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
// -> 기본적으로 이 함수는 A와 B라는 2개의 항목이 있는 구조로 작성하고, 반환되는 값을 토대로 만들 정렬 순서를 자바스크립트에 알립니다.
// If it returns a negative number, a should come before b.
// -> a와 b라는 2개의 항목이 있는 상태에서 음수를 반환하면, 자바스크립트는 두 항목을 비교할 때마다 이 함수를 호출한다.
// -> 음수를 반환하면, 자바스크립트는 a가 b 앞에 온다고 결정한다.
// If it returns a positive number, a should come after b
// -> 양수를 반환하면 그 반대가 된다.
// If it returns 0, a and b are the same as far as the sort is concerned.
// -> 0을 반환하면, 자바스크립트는 a와 b를 동일하게 취급하고 한거번에 정렬하는데 영향을 주지 못한다.

// ex) 상기 설명에 대한 예시 코드
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare); // [4, 6, 10, 15]

// 문자열 길이를 기준으로 정렬하는 것도 가능
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen);
