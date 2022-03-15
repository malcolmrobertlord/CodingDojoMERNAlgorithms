//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    let rotatedStr = ""
    //for loop to capture after length - rotation point, add to front
    for (let i = str.length - num; i<str.length; i++){
        rotatedStr += str[i]
        if (i === str.length -1) {
            // add the beginning of the string after
            for(let j=0;j<str.length-num; j++){
                rotatedStr += str[j]
            }
        }
    }
    return rotatedStr;

}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    if (str1.length === str2.length) {
        for (let i = 0; i<str1.length; i++) {
            if (rotateString(str1,i) === str2) {
                return true;
            }
        }
    }
    return false;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));