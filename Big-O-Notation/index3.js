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

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
}

//? 다중포인터 패턴
// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exit

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
      return [arr[i], arr[j]];
    }
  }
}

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
