//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}

// console.log(partition([6,4,5,2,8,14,1,3]));

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
//concat arrays
const quickSort = (arr) => {
    //conditional to check if array length is greater than 1
    // console.log(arr)
    if (arr.length <= 1) {
        return arr;
    }
    //call partition function and get pivot index
    const pivot = partition(arr);
    //split array into left and right arrays
    let leftArr = arr.slice(0,pivot)
    let rightArr = arr.slice(pivot+1)
    //call quickSort recursively
    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);

    return [...leftArr,arr[pivot],...rightArr];
}


console.log(quickSort([7,45,2,67,3,2,1]));





//More Efficient Method:

// const partition = (arr, left, right) => {
//     let pivot = arr[left];
//     let pointer = left;

//     for(let i = left; i <= right; ++i){
//         if(arr[i] < pivot){
//             ++pointer;
//             [arr[i], arr[pointer]] = [arr[pointer],arr[i]];
//         }
//     }
//     [arr[left], arr[pointer]] = [arr[pointer],arr[left]];
//     return pointer;
// }

// const quickSort = (arr) => {
//     const internalQS = (arr, left, right) => {
//         if(right - left <= 1) return;
//         let pivi = partition(arr, left, right);
//         internalQS(arr, left, pivi - 1);
//         internalQS(arr, pivi + 1, right);
//     }
//     return internalQS(arr, 0 , arr.length - 1);
// }

// let testArr = [6,2,10,23,-18,0,4,3,11,6];
// // console.log(partition(testArr, 0, testArr.length));
// quickSort(testArr);
// console.log(testArr);