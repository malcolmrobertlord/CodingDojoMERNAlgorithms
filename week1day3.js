//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of new array

const combine = (leftArr,rightArr) => {
    //counters for both arrays
    //loop through array simultaneously with nested for loops from index 0 to arr.length
    //compare leftArr[i] to rightArr[j]
    combinedArr = []
    //Find out which array is longer
    if (leftArr.length >= rightArr.length) {
        length = leftArr.length
    }
    else {
        length = rightArr.length
    }
    // console.log("index 4 right array is " +rightArr[4])
    var jval = 0
    for (let i = 0; i<length; i++) {
        for (var j = jval; j<length; j++) {
            // console.log("right array is" + rightArr[j])
            // console.log("left array is" + leftArr[i])
            //Check if past one of the arrays
            if (leftArr[i] === undefined) {
                combinedArr.push(rightArr[j])
            }
            //Check if past other array
            else if (rightArr[j] === undefined) {
                combinedArr.push(leftArr[i])
            }
            else if (leftArr[i] < rightArr[j]) {
                combinedArr.push(leftArr[i])
                // console.log(combinedArr)
                // console.log("first if statement jvalue is " +jval)
                break;
            }
            else if (rightArr[j] < leftArr[i]){
                combinedArr.push(rightArr[j])
                // console.log(combinedArr)
                jval++
                // console.log("2nd else if jvalue is " +jval)
            }
            //Equal values, add both
            else if (rightArr[j] = leftArr[i]) {
                combinedArr.push(leftArr[i])
                combinedArr.push(rightArr[j])
                // console.log("we are in the final else if")
                jval++
                // console.log("jvalue is " +jval)
                break;
            }
        }
    }
    return combinedArr
}

//should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
// console.log(combine([1],[0]));