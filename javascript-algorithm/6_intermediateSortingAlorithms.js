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
