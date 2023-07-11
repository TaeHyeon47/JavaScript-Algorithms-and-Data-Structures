// Big-O-Notation

// 코드 시간 재기
// 1부터 n까지의 숫자의 합

// 1.
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// 2.
// 아래의 코드가 더 빠름
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
