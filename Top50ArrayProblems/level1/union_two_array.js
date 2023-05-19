/*
Given two sorted arrays, find their union and intersection.

Input: arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output: Union : {1, 2, 3, 4, 5, 6, 7} 
         Intersection : {3, 5}

Input: arr1[] = {2, 5, 6}
        arr2[] = {4, 6, 8, 10} 
Output: Union : {2, 4, 5, 6, 8, 10} 
         Intersection : {6}
*/

// JavaScript program to find union of
// two sorted arrays

	/* Function prints union of arr1[] and arr2[]
	m is the number of elements in arr1[]
	n is the number of elements in arr2[] */
	function printUnion( arr1, arr2, m, n)
	{
		var i = 0, j = 0;
		while (i < m && j < n) {
			if (arr1[i] < arr2[j])
				document.write(arr1[i++] + " ");
			else if (arr2[j] < arr1[i])
				document.write(arr2[j++] + " ");
			else {
				document.write(arr2[j++] + " ");
				i++;
			}
		}

		/* Print remaining elements of
		the larger array */
		while (i < m)
			document.write(arr1[i++] + " ");
		while (j < n)
			document.write(arr2[j++] + " ");

		return 0;
	}

		var arr1 = [ 1, 2, 4, 5, 6 ];
		var arr2 = [ 2, 3, 5, 7 ];
		var m = arr1.length;
		var n = arr2.length;
		printUnion(arr1, arr2, m, n);
		
// this code is contributed by shivanisinghss2110
