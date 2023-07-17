// Big-O-Notation
///////////////////////////////////////////////////
// 1. 코드 시간 재기
// 1부터 n까지의 숫자의 합

// 1)
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// 2)
// 아래의 코드가 더 빠름
// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }

// let t1 = performance.now();
// console.log(addUpTo(1000000000));
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

////////////////////////////////////////////////////
// 2. 빅 O 예시
// 1) O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// 2) O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
