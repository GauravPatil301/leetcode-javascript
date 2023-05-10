// A javascript Program to find a peak element

// Find the peak element in the array

// Driver Code 
let arr = [1, 3, 20, 4, 1, 0];
let n = arr.length;
console.log("Index of a peak point is"+findPeak(arr,n));

function findPeak(arr,n) {
    // first or last element is peak element
    if(n === 1) return 0;
    if(arr[0] >= arr[1])return 0;
    if(arr[n-1] >= arr[n-2]) return n - 1;

    // check for every other element
    for (let i = 0; i < array.length; i++) {
        
        // check if the neighbors are smaller
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) return i;      
    }
}

/*
    Input: array[] = { 5, 10, 20, 15}
    output: 20

    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

*/