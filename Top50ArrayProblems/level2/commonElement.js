/*
Input: 
ar1[] = {1, 5, 10, 20, 40, 80} 
ar2[] = {6, 7, 20, 80, 100} 
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
Output: 20, 80

Input: 
ar1[] = {1, 5, 5} 
ar2[] = {3, 4, 5, 5, 10} 
ar3[] = {5, 5, 10, 20} 
Output: 5, 5


*/


// JavaScript program to print
// common elements in three arrays

// This function prints common elements in ar1
function findCommon(ar1, ar2, ar3, n1, n2, n3)
{

    // Initialize starting indexes
    // for ar1[], ar2[] and ar3[]
    var i = 0,
    j = 0,
    k = 0;

    // Iterate through three arrays
    // while all arrays have elements
    while (i < n1 && j < n2 && k < n3)
    {
    
    // If x = y and y = z, print any of them and move ahead
    // in all arrays
    if (ar1[i] == ar2[j] && ar2[j] == ar3[k])
    {
        document.write(ar1[i] + " ");
        i++;
        j++;
        k++;
    }

    // x < y
    else if (ar1[i] < ar2[j]) i++;
    
    // y < z
    else if (ar2[j] < ar3[k]) j++;
    
    // We reach here when x > y and z < y, i.e., z is smallest
    else k++;
    }
}

// Driver code
var ar1 = [1, 5, 10, 20, 40, 80];
var ar2 = [6, 7, 20, 80, 100];
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
var n1 = ar1.length;
var n2 = ar2.length;
var n3 = ar3.length;

document.write("Common Elements are ");
findCommon(ar1, ar2, ar3, n1, n2, n3);

// This code is contributed by rdtank.

