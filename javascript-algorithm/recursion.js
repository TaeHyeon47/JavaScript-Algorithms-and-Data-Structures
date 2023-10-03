// 재귀를 이해하기 쉬운 우화!
// 마틴과 화난 드래곤 이야기... (알고리즘 41강 참고)
// No Odds (3142 5798 6550 5914)
// No Odds (5798 6550 5914)
// No Odds (6550 5914)
// No Odds (5914)
// No Odds ()

// What is recursion?
//* A process (a function in our case) that calls itself (자기자신을 호출하는 함수)

// 재귀는 많은 곳에서 활용된다
// JSON.parse / JSON.stringify(내부 코드에 구현되어 있음)
// document.getElementById and DOM traversal algorithms
// Object traversal(객체 순회)
// We will see it with more complex data structures (복잡한 데이터 구조)
// It's sometimes a cleaner alternative to iteration (때로는 반복 대신 재귀를 사용하는게 더 깔끔)

// The call stack
// It's a stack data structure - we'll talk about that later!
//* Any time a function is invoked it is placed (pushed) on the top of the call stack
// (책상 위에 쌓여있는 종이 더미처럼, 우리가 새로 추가하는 함수가 제일 꼭대기에 위치하게 된다.)
// When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)
// (반환 키워드 'return'을 확인하거나, 함수 안에 더 이상 실행할 코드가 없으면 컴파일러가 스택의 제일 위에 있는 항목을 제거함.)
// 스택이라는 개념을 책상에 쌓여있는 종이 더미에 비유하는 이유는 무언가를 꼭대기에 배치하기 때문이다.
// 우리는 무언가를 꺼낼 때도, 꼭대기에서부터 꺼낸다.

// 아래 코드는 크롬 브라우저에서 Call Stack이 동작하는 원리는 설명하는 예시 코드로 작성함.
function takeShower() {
  return 'Showering!';
}

function eatBreakfast() {
  let meal = cookFood();
  return 'Eating ${meal}';
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Pretein Shake'];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('Ok ready to go to work!');
}

wakeUp();

////////////////////////////////////////////////////////////
//? 첫번째 재귀 함수
// How recursive functions work
// Invoke the same function with a different input until you reach your base case!

// Two essential parts of a recursive function!
// 아래의 두가지 요소는 재귀 함수에 필수 요소이다.
// - Base Case
// - Different Input

// Base Case란?
// The condition when the recursion ends. (재귀를 종료하는 문장)
//* This is the most important concept to understand

function countDown(num) {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// print 3
// countDown(2);
// print 2
// countDown(1);
// print 1
// countDown(0); - 종료점
// print "All Done"

// 아래와 같이 재귀를 사용하지 않더라도 비슷한 작업을 할 수 있다.
// 하지만, 상기의 정리된 호출과 같이 그 과정은 다른 것을 확인할 수 있다.
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

countDown(5);

///////////////////////////////////////////////////////
//? 두번째 재귀 함수
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// 'sumRange(3)'는 아래의 주석문과 같은 연산 과정을 통해 6을 반환한다.
// sumRagne(3)은 최종적으로 3이 되고, sumRagne(1)은 최종적으로 1의 값이 된다.
sumRange(3);
// return 3 + sumRange(2);
// return 2 + sumRange(1);
// return 1;

// <<<<<<< HEAD
// 반복문으로 팩토리얼 구현하기
// =======
// sumRange 함수는 종료조건(Base Case)가 중요하다는 것을 알 수 있다.
// Call Stack 쌓여있는 함수 호출이 기다리는 값에 추가되기 때문이다.
// 즉, Base Case가 추가되고 나면, 함수를 거꾸로(아래에서부터 위로) 합산하기 시작한다.

//////////////////////////////////////////////////////
//? 반복문으로 팩토리얼 구현하기
// '4!'(4팩토리얼)는 '4*3*2*1'과 같다.
// 'i > 0'을 'i > 1'으로 바꾸면 마지막 '*1' 중복을 없앨 수 잇다.
// >>>>>>> d2701213eb0920f29dd80d196c94a7186d56c4d6
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

/////////////////////////////////////////////////////
//? 재귀 호출로 팩토리얼 구현하기
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

/////////////////////////////////////////////////////
//? Helper 메소드 재귀

// 배열에서 홀수의 값만 수집하는 것과 같은 작업을 수행 중이라면, 헬퍼 메소드 재귀를 사용하면 식은 죽 먹기다.
// 헬퍼 메소드 재귀는 일종의 결과를 컴파일 할 때 흔히 사용되는 패턴이다.

// let result = [];
// function collectOddValues(arr) ...
// Helper 메소드가 없다면 상기에 나와있는 코드처럼 'result'를 바깥에 위치시켜야한다.

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/////////////////////////////////////////////////////
//? 순수 재귀(Pure Recursion)

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
// [1].concat(collectOddValues([2,3,4,5]))
//              [].concat(collectOddValues([3,4,5]))
//                          [3].concat(collectOddValues([4,5]))
//                                        [].concat(collectOddValues([5]))
//                                                     [5].concat(collectOddValues([]))

//? 순수 재귀 팁 (Pure Recursion tips)
// 1. For arrays, use methods like slice, the spread, operator, and concat that
// make copies of arrays so you do not mutate them.
// 2. Remember that strings are immutable so you will need to use methods like
// slice, substr, or substring to make copies of strins
// 3. To make copies of objects use Object.assign, or the spread operator

///////////////////////////////////////////////
//? 알고리즘 문제

// power
// 밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다.
// 이 함수는 Math.pow()의 기능을 모방해야 합니다. 음의 밑과 지수에 대해서는 신경쓰지 마세요.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 강의 솔루션과 동일
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// factorial
// 숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
// 팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
// 예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// 나의 솔루션
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// 강의 솔루션
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

// productOfArray
// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// 강의 솔루션과 동일
function productOfArray(arrNum) {
  if (arrNum.length === 0) return 1;
  return arrNum[0] * productOfArray(arrNum.slice(1));
}

// recursiveRange
// 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// 강의 솔루션과 동일
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// fib
// 숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오.
// 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며,
// 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 나의 솔루션
function fib(num) {
  let fibArr = [];
  let initNum = 1;
  if (num === 0) return 1;

  function helper(helperNum) {
    if (fibArr.length - 1 === num) return;

    if (fibArr.length === 0 || fibArr.length === 1) {
      fibArr.push(initNum);
    } else {
      const lastIndex = fibArr.slice(fibArr.length - 1)[0];
      const secondLastIndex = fibArr.slice(fibArr.length - 2)[0];
      fibArr.push(lastIndex + secondLastIndex);
    }
    helper();
  }

  helper(num);

  return fibArr[--num];
}

// 강의 솔루션
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
