// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

// Note: There are no duplicates in the list.
/*
Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
Output: 5
Explanation: The missing number between 1 to 8 is 5


Input: arr[] = {1, 2, 3, 5}, N = 5
Output: 4
Explanation: The missing number between 1 to 5 is 4
*/

// Javascript code to implement the approach

// Function to find the missing number
function findMissing(arr,N){
let i;
let temp = [];
for (i = 0; i <= N; i++) {
			temp[i] = 0;
		}

		for (i = 0; i < N; i++) {
			temp[arr[i] - 1] = 1;
		}

		let ans = 0;
		for (i = 0; i <= N; i++) {
			if (temp[i] == 0)
				ans = i + 1;
		}
		console.log(ans);
}

// Driver code
		let arr = [ 1, 3, 7, 5, 6, 2 ];
		let n = arr.length;

		// Function call
	findMissing(arr,n);


