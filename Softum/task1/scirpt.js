
function adjacentElementsProduct(inputArray) {
	
	let productArr = inputArray.map( (el, i, arr) => {

		return arr[i]*arr[i+1];
	} );

	productArr.splice(productArr.length - 1, 1);

	let largestProduct = Math.max(...productArr);

	console.log(largestProduct);

	return largestProduct;
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]);

adjacentElementsProduct([-1, -2]);
adjacentElementsProduct([5, 1, 2, 3, 1, 4]);
adjacentElementsProduct([1, 2, 3, 0]);
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]);