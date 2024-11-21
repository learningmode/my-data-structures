// select the index with lowest element in inner loop and swap
// lowest element is to be at beginning of the array 
// like bubble sort but here the lowest element is put at beginning of array
function selectionSort(arr){
	let lowestElemIndex,temp;
	for(let i=0;i<arr.length;i++){
		  lowestElemIndex = i;
		for(let j=i+1;j<arr.length;j++){
			if(arr[lowestElemIndex]>arr[j]){
				lowestElemIndex = j;
			}
		}
		if(i!== lowestElemIndex){
					temp = arr[i];
					arr[i] = arr[lowestElemIndex];
					arr[lowestElemIndex] = temp;
		}
	}
	return arr;
}

let result = selectionSort([32,12,3,18,42,21]);
console.log(`Result ${result}`);