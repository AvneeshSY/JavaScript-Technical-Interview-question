
// add an element in the array without using methods like push
let arr=[2,5,3,6,3,1,4];

  let insertValue = 10;
  let insertedIndex = 3;

  let newArr = [];
  for (let i=0; i < arr.length; i++) {
    if (i === insertedIndex) {
        arr[i]= insertValue
    }
  }
console.log("Array after inserted value ", arr)
