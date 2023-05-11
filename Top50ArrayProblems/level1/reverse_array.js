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

