const arr1 = [2, 3, 5, 7];
const arr2 = [11, 13, 17, 19, 6, 87];

const mergeArray = (arr1, arr2) => {
  let result = [];
  let maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }

  return result;
};

console.log(mergeArray(arr1, arr2));
