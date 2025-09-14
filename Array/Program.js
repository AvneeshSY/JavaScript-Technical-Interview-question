// The largest element is placed at the center of the array.
// On the left side of the center, numbers must be arranged in decreasing order as they move outward.
// On the right side of the center, numbers must be arranged in increasing order as they move outward.


function arrangeArray(arr) {
  let n = arr.length;

  // Step 1: Sort manually (Bubble Sort)
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Step 2: Create result array
  let result = new Array(n);
  let center = Math.floor(n / 2);
//   console.log( result)

  // Place the largest in the center
  result[center] = arr[n - 1];

  let left = center - 1;
  let right = center + 1;
  let i = n - 2; // start from second largest

  // Step 3: Arrange left decreasing, right increasing
  while (i >= 0) {
    if (left >= 0) {
      result[left] = arr[i];
      left--;
      i--;
    }
    if (i >= 0 && right < n) {
      result[right] = arr[i];
      right++;
      i--;
    }
  }

  return result;
}

// Example usage
let arr = [5, 2, 9, 1, 7, 3, 6];
console.log(arrangeArray(arr));



