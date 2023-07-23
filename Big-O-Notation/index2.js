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

// Wrote a function which takes in a string and returns counts of each character in the string.
// 1) 간단한 입력 값을 생각하며 문제를 정의할 수 있다.
charCount('aaaaa'); // {a : 4}
charCount('hello'); // {h:1, e:1, l:2, 0:1}

// 2) 조금 더 복잡한 입력 값을 생각하며, 문제를 구체화할 수 있다.
('my phone number is 1827763'); // 공백을 포함해야될까? 숫자는 어떻게 해야할까? 특수문자는 어떻게 해야될까? 등의 질문을 던질 수 있다.
('Hello hi'); // 대소문자가 모두 있는 경우 구분을 해야할까?

// 3) 빈 입력 값이 주어진 예시를 생각한다.
charCount(''); // 빈 문자열, 객체, null, undefined를 입력했을 때의 예시를 생각해본다.
