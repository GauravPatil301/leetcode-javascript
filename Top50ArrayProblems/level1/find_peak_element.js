// A javascript Program to find a peak element

// Find the peak element in the array

// Driver Code 
let arr = [1, 3, 20, 4, 1, 0];
let n = arr.length;
console.log(`Index of a peak element is ${findPeak(arr,n)}`)

function findPeak(arr,n) {
    // first or last element is peak element
    if(n === 1) return 0;
    if(arr[0] >= arr[1]) return 0;
    if(arr[n-1] >= arr[n-2]) return n-1;

    // check for every other element
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }

}