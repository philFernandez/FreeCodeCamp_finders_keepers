function findElement(arr, func) {
	var index = 0;

	index = arr.findIndex(func);

	return arr[index];



	
}

console.log(findElement([1,3,5,8,9,10], function(num) { return num % 2 === 0 }));



