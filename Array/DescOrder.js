

let arr2 = [5, 3, 9, 1, 7];

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] < arr2[j]) {
      let temp = arr2[i];
      arr2[i] = arr2[j];
      arr2[j] = temp;
    }
  }
}

console.log("Descending Order:", arr2);

