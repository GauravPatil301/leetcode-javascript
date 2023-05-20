/*
Given an array, cyclically rotate the array clockwise by one. 

Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
*/


// JavaScript code for program
// to cyclically rotate
// an array by one


function rotate(arr, n)
{
var x = arr[n-1], i;
for(i = n-1; i > 0; i--)
	arr[i] = arr[i-1];
arr[0] = x;
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;

console.log("Given array is <br>");
for(var i = 0; i< n; i++)
	console.log(arr[i] + " ");
	
rotate(arr, n);

console.log("<br>Rotated array is <br>");
for(var i = 0; i < n; i++)
	console.log(arr[i] + " ");
	
/*output
Given array is 
1 2 3 4 5 
Rotated array is
5 1 2 3 4 
*/