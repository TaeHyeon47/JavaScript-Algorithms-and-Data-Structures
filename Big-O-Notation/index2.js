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

//? 다섯번째 Refactor - charCount 함수 개선 예시

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

// for-of문 적용 개선
function charCount(str) {
  let obj = {};

  for (let char of str) {
    //? for문에서 사용하는 [i]가 생략하여 사용 가능.
    // for ... of 문은 내부적으로 이터레이터의 next 메서드를 호출하여 이터러블을 순회하여
    // next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for...of 문의 변수에 할당한다.
    // 그리도 이터레이터 리절트 객체의 done 프로퍼티 값이 false이면 이터러블의 순회를 계속하고
    // true이면 이터러블의 순회를 중단한다.
    char = char.toLowerCase();
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
