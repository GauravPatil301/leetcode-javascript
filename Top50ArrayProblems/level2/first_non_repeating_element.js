//Given an array of integers of size N, the task is to find the first non-repeating element in this array. 
/*
Input: {-1, 2, -1, 3, 0}
Output: 2
Explanation: The first number that does not repeat is : 2

Input: {9, 4, 9, 6, 7, 4}
Output: 6
*/

		// JavaScript code for the above approach
		function firstNonRepeating(arr, n) {
			// Loop for checking each element
			for (let i = 0; i < n; i++) {
				let j;
				// Checking if ith element is present in array
				for (j = 0; j < n; j++)
					if (i != j && arr[i] == arr[j])
						break;
				// if ith element is not present in array
				// except at ith index then return element	
				if (j == n)
					return arr[i];
			}
			return -1;
		}

		// Driver code

		let arr = [9, 4, 9, 6, 7, 4];
		let n = arr.length;
		document.write(firstNonRepeating(arr, n));



// This code is contributed by Potta Lokesh
