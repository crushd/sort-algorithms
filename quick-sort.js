// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 100000;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function quickSort(items) {
  //items.sort();

  if(items.length < 2) {
    return items;
  }

  let pivotIndex = Math.floor(Math.random() * items.length);
  let pivot = items.splice(pivotIndex, 1);

  // left is less than or equal to pivot
  let leftArr = quickSort(items.filter(x => x <= pivot));

  // right is greater than or equal to pivot
  let rightArr = quickSort(items.filter(x => x > pivot));

  // for (var i = 0; i < items.length; i++) {
  //   if (items[i] < pivot) {
  //     leftArr.push(items[i]);
  //   } else {
  //     rightArr.push(items[i]);
  //   }
  // }

  return leftArr.concat(pivot).concat(rightArr);
}

console.log(quickSort(array.slice()));

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(quickSort(array).join(" "));
