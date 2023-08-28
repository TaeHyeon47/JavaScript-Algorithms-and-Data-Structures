//? 빈도수 세기 패턴
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// ex)
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false

// 첫번째 배열에 Loop를 적용하여 두번째 배열의 하위 루프에서 각 값을 확인하는 방식.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //! indexOf 기능이 중첩된 루프이다
    //배열 길이가 1000이면 백만번의 반복이 이루어진다...
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 5]);

// 리펙토리 코드
// 각 배열에 한 번씩 개별적으로 루프를 적용
//* 중요 : 두 개의 Loop가 중첩된 개별 루프보다 훨씬 낫다.
// 아래는 2n이지만, 중첩 Loop는 n의 제곱이 되기 때문이다.
// Time Complexity - O(n)
//? 중첩이 없어서 3000번의 반복으로 끝이난다.
function same(arr1, arr2) {
  if (arr1.length !== arr1.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

//////////////////////////////////////////
// 애너그램 도전 과제
// 애너그램 정의
// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman.
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지
// 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어,
// 구 또는 이름입니다. (예시: cinema -> iceman)

//? 나의 솔루션
function validAnagram(firstString, secondString) {
  if (firstString.length != secondString.length) return false;

  // 내가 생각한 솔루션
  // String을 객체로 변환시키고, 중복되는 경우 카운터 세기
  // 같은 알파벳의 숫자를 모두 비교하여 일치하면 true 반환
  // 그 이외의 경우는 모두 false로 반환

  // 객체 선언
  let firstStringObject = {};
  let secondStringObejct = {};

  // String을 알파벳별 객체로 변환
  for (let alpha of firstString) {
    console.log(alpha);
    firstStringObject[alpha] = (firstStringObject[alpha] || 0) + 1;
  }

  for (let alpha of secondString) {
    secondStringObejct[alpha] = (secondStringObejct[alpha] || 0) + 1;
  }

  for (let key in firstStringObject) {
    if (firstStringObject[key] !== secondStringObejct[key]) return false;
  }

  return true;
}

validAnagram('anagram', 'nagaram'); // true

//? 강의 솔루션
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

//? 다중포인터(Multiple pointers) 정의
// Creating pointers or values that correspond to an
// index or position and move towards the beginning,
// end or middle based on a certain condition

// Very efficient for solving problems
// with minimal space complexity as well

// 문제
// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exit
// ex) sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// ex) sumZero([-2, 0, 1, 3]) // undefined

// NAIVE SOLUTION
// Time Complexity - 0(N^2)
// Space Complexity - 0(1)
// 첫번째 요소를 나머지 요소들과 모두 비교하는 로직
// ex) sumZero([-3, -2, -1, 0, 1, 2, 3])
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

// Time Complexity - 0(N)
// Space Complexity - 0(1)
// while의 조건에 left가 right보다 작다고 코드를 만들어야지만,
// 홀수와 같이 짝이 안맞는 경우 자기자신을 연산하는 오류를 방지할 수 있다.
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 다중 포인터 : 고유값을 세는 도전 과제
// countUniqueValue
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the
// unique values in the array. There can be negative
// numbers in the array. but it will always be sorted.
// 정렬된 배열을 받아들이고 배열의 고유 값을 세는 countUniqueValues라는 함수를 구현합니다. 배열에 음수가 있을 수 있지만 항상 정렬됩니다.

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4
// Time Complexity - O(n)
// Space Complexity - O(n)
