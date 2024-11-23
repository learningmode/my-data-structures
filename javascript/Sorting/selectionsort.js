function selectionSort(arr) {
	let lowestElemIndex, temp;
  
	// Outer loop: Traverse through the entire array
	for (let i = 0; i < arr.length; i++) {
	  
	  // Assume the first unsorted element is the smallest
	  lowestElemIndex = i;
	  
	  // Inner loop: Find the smallest element in the unsorted part of the array
	  for (let j = i + 1; j < arr.length; j++) {
		// Compare the current element with the smallest found so far
		if (arr[lowestElemIndex] > arr[j]) {
		  // If a smaller element is found, update the index of the lowest element
		  lowestElemIndex = j;
		}
	  }
	  
	  // If the smallest element is not already at the current position, swap it
	  if (i !== lowestElemIndex) {
		temp = arr[i];            // Store the current element temporarily
		arr[i] = arr[lowestElemIndex]; // Swap the smallest element to the current position
		arr[lowestElemIndex] = temp;  // Place the original element at the position of the smallest element
	  }
	}
	
	// Return the sorted array
	return arr;
  }
  
  // Example usage
  let result = selectionSort([32, 12, 3, 18, 42, 21]);
  console.log(`Result: ${result}`);