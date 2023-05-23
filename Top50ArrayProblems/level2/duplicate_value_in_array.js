	// Javascript code to find
	// duplicates in O(n) time
	let numRay = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];
	let arr_size = numRay.length;
	
	
	// count the frequency
	for (let i = 0; i < arr_size; i++) {
		numRay[numRay[i] % arr_size]
			= numRay[numRay[i] % arr_size] + arr_size;
	}
	document.write("The repeating elements are : " + "</br>");
	for (let i = 0; i < arr_size; i++) {
		if (numRay[i] >= arr_size * 2) {
			document.write(i + " " + "</br>");
		}
	}

// This code is contributed by mukesh07.


/*
Input : n = 7 and array[] = {1, 2, 3, 6, 3, 6, 1}
Output: 1, 3, 6

Explanation: The numbers 1 , 3 and 6 appears more
than once in the array.

Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
Output: 3

Explanation: The number 3 appears more than once
in the array.
*/