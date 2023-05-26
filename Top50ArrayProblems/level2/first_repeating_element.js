/*
Input: arr[] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 
Explanation: 5 is the first element that repeats

Input: arr[] = {6, 10, 5, 4, 9, 120, 4, 6, 10}
Output: 6 
Explanation: 6 is the first element that repeats

*/

//Find the first repeating element in an array of integers using Hashset
//The idea is to traverse the given array arr[] from right to left and update the minimum index whenever, an already visited element has been found. To check if the element was already visited Hashset can be used. 


// Javascript program to find first
// repeating element in arr[]
	
// This function prints the first
// repeating element in arr[]
function printFirstRepeating(arr)
{
	
	// Initialize index of first
	// repeating element
	let min = -1;

	// Creates an empty hashset
	let set = new Set();

	// Traverse the input array from right to left
	for(let i = arr.length - 1; i >= 0; i--)
	{
		
		// If element is already in
		// hash set, update min
		if (set.has(arr[i]))
			min = i;
			
		// Else add element to hash set
		else
			set.add(arr[i]);
	}

	// Print the result
	if (min != -1)
	document.write("The first repeating element is " +
					arr[min]);
	else
	document.write("There are no repeating elements");
}

// Driver code
let arr = [ 10, 5, 3, 4, 3, 5, 6 ];

printFirstRepeating(arr);

// This code is contributed by unknown2108
	
