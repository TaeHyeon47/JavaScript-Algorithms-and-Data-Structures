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

/////////////////////////////////////////////////////
// 3. 공간 복잡도
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

/////////////////////////////////////////////////////
// 4. 객체의 빅오
// 검색을 제외한 모든 것은 O(1)로 취급된다.
let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

//  firstName      isInstructor       favoriteNumbers

/////////////////////////////////////////////////////
// 5. 배열의 빅오
// Insertion(입력)/Removal : 어디에 입력/삭제 하는가에 따라 다르다.
// push와 같이 끝에 들어가는 경우 객체와 동일하다. - O(1)
// unshift/shift와 같이 앞에 추가/제거하는 경우, 뒤의 배열 index가 모두 변경되어야 한다. - O(N)

// Access(접근) : O(1)
// Searching : O(N)

let names = ['Michael', 'Melissa', 'Andrea'];

//        "Michael"    "Melissa"    "Andrea"
//            1            2           3

// Big O 배열 정리
// push - O(1)
// pop - O(1)
// shift - O(N)
// unShift - O(N)
// concat - O(N)
// slice - O(N)
// splice - O(N)
// sort - O(N * log N)
// forEach/map/filter/reduce/etc. - O(N)
