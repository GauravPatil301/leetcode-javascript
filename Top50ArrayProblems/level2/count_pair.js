
// Javascript implementation of simple method to find count of
// pairs with given sum.

// Returns number of pairs in arr[0..n-1] with sum equal
// to 'sum'
function getPairsCount(arr, n, sum)
{
	let count = 0; // Initialize result

	// Consider all possible pairs and check their sums
	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++)
			if (arr[i] + arr[j] == sum)
				count++;

	return count;
}

// Driver function to test the above function
	let arr = [ 1, 5, 7, -1, 5 ];
	let n = arr.length;
	let sum = 6;
	document.write("Count of pairs is "
		+ getPairsCount(arr, n, sum));
	
// This code is contributed by Mayank Tyagi

/*
Given an array of N integers, and a number sum, the task is to find the number of pairs of integers in the array whose sum is equal to sum.
Input:  arr[] = {1, 5, 7, -1}, sum = 6
Output:  2
Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

Input:  arr[] = {1, 5, 7, -1, 5}, sum = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).     

Input:  arr[] = {1, 1, 1, 1}, sum = 2
Output:  6
Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).

Input:  arr[] = {10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}, sum = 11
Output:  9
Explanation: Pairs with sum 11 are (10, 1), (10, 1), (10, 1), (12, -1), (10, 1), (10, 1), (10, 1), (7, 4), (6, 5).

*/