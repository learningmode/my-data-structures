// here the largest element gets pushed at end of array
// it is incremented step by step
function bubbleSort(arr){
 	let swap;
	 for(let i=0;i<arr.length;i++){
	 	swap = true;
	 	for(let j=0;j < arr.length - i;j++){
	 		if(arr[j] > arr[j+1]){
	 			let temp = arr[j];
	 			arr[j] = arr[j+1];
	 			arr[j+1] = temp;
	 			swap = false;
	 		}	
	 	}
	 	console.log(arr);
	  	if(swap){
		  break;
	    }
	 }
 
 	return arr
}


result = bubbleSort([32,12,3,18,42,21]);
console.log(`Result ${result}`);