//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    ///for loop to go through whole array from 0 to length
        //set temp to capture words
        //if statement to check if str[i] is space or character
            //if space then skip
            //if character += temp
    let arr = []
    let temp = "";
    for (i = 0; i < str.length; i++) {
        //check if character is space
        if (str[i] === " ") {
            //if we don't have a word in temp yet, continue
            if (temp.length === 0) {
                continue;
            }
            //if we have a word then push that word into array
            else {
                arr.push(temp)
                temp = ""
            }
        }
        // end of string case
        else if (i === str.length - 1){
            temp += str[i]
            arr.push(temp)
        }
        //adding character to temp
        else {
            temp += str[i]
        }
    }
    return arr
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    let wordArr = stringToWordArray(str)
    let newString = ""
    for (let j = wordArr.length - 1; j>=0; j--){
        newString += wordArr[j] + " "
    }
    return newString;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));