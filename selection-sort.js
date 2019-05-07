// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 100000;

// // Case 2 - Large set of Numbers
//var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

console.log(array);

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {

  // FILL IN YOUR CODE HERE
  // Use the above swap function when you are ready to start swapping elements in the array.

  // 25 10 5 100 342

  // Loop over each element in array
  for (var i=0; i < items.length; i++) {

    // Set first element as minimum
    // min = item[i]
    var min = i;


    // Loop over all other elements
    // and check if less than current min
      for (var j = i + 1; j < items.length; j++) {
        if (items[j] < items[min]) {
          min = j;
        }

      }
      if (i !== min) {
        // When done looking at all other elements 
        // swap min index with first unsorted index
        swap(items,i,min)
      }

    }
    return items;
} // repeat


// ================================================
// FUNCTION CALL
// ================================================

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
