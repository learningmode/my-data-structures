// codevolution
function insertionSort(arr) {
  
    // Loop through the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
      
        // Assume the element at index i is to be inserted into the sorted part of the array
        let numberToInsert = arr[i];
        
        // Start comparing the element with the elements in the sorted part (to the left of index i)
        let j = i - 1;

        // Move elements of the sorted part that are greater than numberToInsert one position to the right
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;  // Move left to the previous element
        }
        
        // Insert numberToInsert into its correct position in the sorted part
        arr[j + 1] = numberToInsert;
    }

    // Return the sorted array
    return arr;
}

// Example usage
console.log(insertionSort([3, 7, 1, 6, 9, 2]));