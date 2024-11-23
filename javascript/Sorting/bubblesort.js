function bubbleSort(arr) {
	let swap; // A flag to track if any elements were swapped in each pass
	
	// Outer loop: This controls how many times the entire array needs to be traversed
	for (let i = 0; i < arr.length; i++) {
	  
	  swap = true; // Initially assume no swaps have occurred
	  
	  // Inner loop: This compares adjacent elements and swaps them if necessary
	  // The range of the inner loop is reduced after each pass (arr.length - i - 1) 
	  // because after each outer loop pass, the largest element moves to its correct position at the end of the array.
	  for (let j = 0; j < arr.length - i - 1; j++) {
		
		// If the current element is greater than the next element, swap them
		if (arr[j] > arr[j + 1]) {
		  let temp = arr[j]; // Store the current element temporarily
		  arr[j] = arr[j + 1]; // Move the next element to the current position
		  arr[j + 1] = temp; // Place the current element into the next position
		  swap = false; // Since a swap occurred, set flag to false
		}
	  }
	  
	  // Print the array after each pass to show progress
	  console.log(arr);
	  
	  // If no swaps occurred, the array is sorted, so break out of the loop
	  if (swap) {
		break;
	  }
	}
  
	// Return the sorted array
	return arr;
  }
  
  // Example usage
  let result = bubbleSort([32, 12, 3, 18, 42, 21]);
  console.log(`Result: ${result}`);