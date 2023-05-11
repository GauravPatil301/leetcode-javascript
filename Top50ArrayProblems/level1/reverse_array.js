// Iterative javascript program to reverse an array
/* Function to reverse arr[] from start to end*/ 
function reverseArray(arr,start,end) {
    while (start< end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp
        start++;
        end--;
    }
}

/* Utility function to print an array */
function printArray(arr,size) {
    for (let i = 0; i < array.length; i++) {
        console.log(arr[i]);
    }
}

/* Driver function to test above functions */
let arr = [1,2,3,4,5,6]
let n = 6;  
// To Print original array
printArray(arr,n);

// Function Calling
reverseArray(arr,0,n-1);

console.log("Reversed array is:");

// To print the Reversed array
printArray(arr,n)

/*output
1 2 3 4 5 6
Reversed array is
6 5 4 3 2 1

Time Complexity: O(n)
*/