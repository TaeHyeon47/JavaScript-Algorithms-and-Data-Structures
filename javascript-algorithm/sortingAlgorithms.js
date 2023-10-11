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

//? BubbleSort (버블정렬)
// A Sorting algorithm where the largest values bubble up to the top!
// 버블 정렬의 개념은 오름차순(작은 숫자에서 큰 숫자로)으로 정렬을 한다면, 더 큰 숫자가 한 번에 하나씩 뒤(Top)로 이동 한다는 개념이다.

// 버를 정렬의 장독 방식은 루프를 돌면서 각 항목을 다음 항목(해당 항목의 오른쪽에 있는 항목)과 비교하는 것이다.
// 어떤 항목이 더 크면 교환을 하고, 다음 항목과 비교하고, 다음 항목보다 더 크면 또 교환을 하고, 다시 다음 항목과 비교한다.
// 비주얼 알고 사이트 "https://visualgo.net/en/sorting?slide=1"에서 그림으로 확인할 수 있다.
// [5, 3, 4, 1, 2]
// [3, 5, 4, 1, 2]
// [3, 4, 5, 1, 2]
// [3, 4, 1, 5, 2]
// [3, 4, 1, 2, 5]

// Before we sort, we must swap!
// Many sorting algorithms involve some type of wapping functionality
// (e.g. swapping to numbers to put them in order)

// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// 미최적화 버블 정렬
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log('ONE PASS COMPLETE!');
  }
  return arr;
}

bubbleSort([37, 45, 29, 8, 15, 77, 100]);
// [8, 29, 37, 45] 37 45
// [37, 45, 29, 8] 45 29
// [37, 29, 45, 8] 45 8
// [37, 29, 8, 45] 45 undefined
// [37, 29, 8, 45] 37 29
// [29, 37, 8, 45] 37 8
// [29, 8, 37, 45] 37 45
// [29, 8, 37, 45] 45 undefined
// ...
//* 미최적화 버블정렬 코드는 undefined가 생겨난다. 따라서 아래와 같은 최적화가 필요하다.

// BubbleSort Pseudocode
// 1. Start looping from with a variable called i the end of the array towards the beginning.
// 2. Start an inner loop with a variable called j from the beginning until i - 1
// 3. If arr[j] is greater than arr[j+1], swap those two values!
// 4. Return the sorted array

// undefined 제거 버블 정렬
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log('ONE PASS COMPLETE!');
  }
  return arr;
}
