/////////////////////
//? Objectives
// ● Understand the limitations of the sorting algorithms we've learned so far
// ● Implement merge sort
// ● Implement quick sort
// ● Implement radix sort

//? Why learn this?
// ● The sorting algorithms we've learned so far don't scale well (20개 이하 항목 배열과 같이 작은 규모에서 잘 작동)
// ● Try out bubble sort on an array of 100000 elements, it will take quite some time!

//? Faster sorts
// ● There is a family of sorting algorithms that can improve time complexity from O(N²) to O(n log n)
// ● There's a tradeoff between efficiency and simplicity
// ● The more efficient algorithms are much less simple, and generally take longer to understand

////////////////////////
//? 합병 정렬 (Merge Sort)
// ● It's a combination of two things - merging and sorting!
// ● Exploits the fact that arrays of 0 or 1 element are always sorted
// ● Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// How does it work?
// [8, 3, 5, 4, 7, 6, 1, 2] - 분해
// [8, 3, 5, 4]  [7, 6, 1, 2] - 분해
// [8, 3] [5, 4]  [7, 6] [1, 2] - 분해
// [8] [3] [5] [4] [7] [6] [1] [2] - merge (작은 것이 앞에 오도록)
// [3, 8] [4, 5] [6, 7] [1, 2] - merge
// [3, 4, 5, 8] [1, 2, 6, 7] - merge
// [1, 2, 3, 4, 5, 6, 7, 8]

////////////////////////////////
//? 배열 합병 소개 (Merging Arrays)
// ● In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
// ● Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the tow input arrays.
// ● This function should run in O(n+m) time and O(n + m) space and should not modify the parameters passed to it.

// Merging Arrays Pseudocode
// ● Create an empty array, take a look at the smallest values in each input array
// ● While there are still values we haven't looked at...
// -- If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
// -- If the value in the first arrays is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
// -- Once we exhaust one array, push in all remaining values from the other array.

//? 배열 합병 구현
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
merge([1, 10, 50], [2, 14, 99, 100]);

///////////////////////////////
//? 합병 정렬 작성하기 (Merge Sort)

// mergeSort Pseudocode
// ● Break up the array into halves until you have arrays that are empty or have one element.
// ● Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
// ● Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);
mergeSort([10, 24, 76, 73]);
