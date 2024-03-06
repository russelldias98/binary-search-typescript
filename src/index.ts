class Solution {
  binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // Check mid value
      if (arr[mid] === target) return mid;

      // If target is greater than mid, ignore left half and search in right half
      if (target > arr[mid]) {
        left = mid + 1;
      } else {
        // If target is smaller than mid, ignore right half and search in left half
        right = mid - 1;
      }
    }

    return -1;
  }
}

const solution = new Solution();

// generate 1 to 100 array
const arr = Array.from({ length: 100 }, (_, i) => i + 1);

console.log(solution.binarySearch(arr, 10)); // returns 9
