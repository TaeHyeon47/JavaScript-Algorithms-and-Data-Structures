// 문제 해결을 위한 전체 프로세스
// 1. Understand the Problem
// 2. Explore Concrete Examples
// 3. Break It Down - Explicitly write out the steps you need to take.
// 4. Solve/Simplify
// 5. Refactor

//? 첫번째 - 문제 이해(정의)
// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================
// 1. Can I restate the problem in my own words?
'implement addition';
// 2. What are the inputs that go into the problem?
// - ints?
// - floats?
// - what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
// int? float? string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?

//? 두번째 - 구체적인 예시 탐색
// Wrote a function which takes in a string and returns counts of each character in the string.
// 1) 간단한 입력 값을 생각하며 문제를 정의할 수 있다.
charCount('aaaaa'); // {a : 4}
charCount('hello'); // {h:1, e:1, l:2, 0:1}

// 2) 조금 더 복잡한 입력 값을 생각하며, 문제를 구체화할 수 있다.
('my phone number is 1827763'); // 공백을 포함해야될까? 숫자는 어떻게 해야할까? 특수문자는 어떻게 해야될까? 등의 질문을 던질 수 있다.
('Hello hi'); // 대소문자가 모두 있는 경우 구분을 해야할까?

// 3) 빈 입력 값이 주어진 예시를 생각한다.
charCount(''); // 빈 문자열, 객체, null, undefined를 입력했을 때의 예시를 생각해본다.

//? 세번째 - 단계별로 문제 작성해 나가기
// Write a function which takes in a string and returns counts of each character in the string.

charCount('aaaa');
/* { 
   a: 4
} */

charCount('hello');
/* {
   h: 1,
   e: 1,
   l: 2,
   o: 1
} */

charCount('Your PIN number is 1234!');
/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
} */

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters.
}

//? 네번째 Solve/Simplify
function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    /// if the char is a number/letter AND a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
      /// if the char is a number/letter AND not in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }
  }
  /// if character is something else (space, period, etc.) don't do anyting
  // return object at end
  return result;
}

console.log(charCount('hello'));

//? 다섯번째 Refactor

function charCount(str) {
  var obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charCount(str) {
  let obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
      //  if (/[a-z0-9]/.test(char)) {
      // if (obj[char] > 0) {
      //   obj[char]++;
      // } else {
      //   obj[char] = 1;
      // }
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !code > 47 &&
    code < 58 &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// 빈도수 세기 패턴
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 5]);

// 리펙터 코드
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
  }
}
