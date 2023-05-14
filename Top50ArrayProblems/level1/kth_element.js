// K’th Smallest/Largest Element in Unsorted Array 
// Given an array and a number K where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

/*Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
Output: 10  */

// simple javascript program to find k'th smalllest element

// function to return kth smallest element in a given array

function kthSmallest(arr,N,K) {
    // sort the given array
    arr.sort((a,b)=>a-b);

    // return kth element in the sorted array
    return arr[k-1];
}

// Driver program to test above methods
let arr = [12, 3, 5,7,19];
let N = arr.length;
let k= 2;
console.log('Kth smallest element is '+ kthSmallest(arr,N,K));

