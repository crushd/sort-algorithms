// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================


// Case 1 - Small Set of Numbers
var arraySize = 100000;

// Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================


function insertionSort(items) {

  // 25 10 5 100 342

  // Loop over each element in array
  for (var i=0; i < items.length; i++) {

    // set i to a temp variable for evaluation
    var temp = array[i];

    // look at the number before this index in the array
    var j = i - 1;

    // if j is greater than or equal to 0 and is 
    while (j >= 0 && items[j] > temp) {

      // if items[j] is greater than temp, add on to the index and set j
      items[j + 1] = items[j];

      // decrement by 1
      j--;
    }

    // set temp to the next item index
    items[j + 1] = temp;
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
console.log(insertionSort(array).join(" "));