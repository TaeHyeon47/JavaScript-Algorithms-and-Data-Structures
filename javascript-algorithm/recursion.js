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
