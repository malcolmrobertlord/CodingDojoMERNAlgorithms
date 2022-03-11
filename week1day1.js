// Bubble Sort: run through the array and look at two adjacent values at a time
///swap the two adjacent values if the greater one comes first
// loop through the array many times until there is a perfect run with no swaps

// function bubbleSort(arr) {
//     var swapped = true;
//     while (swapped) {
//         swapped = false;
//         for (var i = 0; i <= arr.length - 2; i++) {
//             if (arr[i] > arr[i+1]) {
//                 swapped = true;
//                 var temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let arr = [5, 4, 2, 6, 8, 14, 1, 3];
// console.log(arr);
// console.log(bubbleSort(arr));


//Selection Sort: similar to bubble sort
//On first loop, search for lowest value
//When finished, swap lowest value for value at 0 index
//On second loop, search for second lowest value, and swap with value at index 1
//Continue until array is sorted

function selectionSort(arr){
    //Pseudocode:
    //for loop from 0 to arr.length
        // mindex is i
        // var min is arr[?]
        // for loop starting at 0, ending at arr.length
            //if value at current index is smaller than min
                //min is that value
        //swap value at mindex with value at i
    for (var i = 0; i < arr.length; i++) {
        var mindex = i;
        for (var j = i; j < arr.length; j++){
            if (arr[j] < arr[mindex]){
                mindex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp;
    }
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));