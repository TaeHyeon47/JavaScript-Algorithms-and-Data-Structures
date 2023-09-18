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
// Any time a function is invoked it is placed (pushed) on the top of the call stack
// When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)

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

/// 첫번째 재귀 함수

function countDown(num) {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
