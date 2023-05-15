// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

/*Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
  Output: 4 // x (or 2) occurs 4 times in arr[]

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
  Output: 1 

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
  Output: 2 

  Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
  Output: -1 // 4 doesn't occur in arr[]  */

// Javascript program to count occurrences
// of an element

arr = [1, 2, 2, 2, 2, 3, 4, 7,8,8];
let n = arr.length;
let x = 2;
console.log(countOccurrences(arr,n,x))

// Returns number of times x occurs in arr[0..n-1]
function countOccurrences(arr,n,x) {
    let res = 0;
    for(let i=0;i<n;i++){
        if(x == arr[i]){
            res++;
        }
    }
    return res;
}


// Output: 4 